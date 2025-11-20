
import os
import cv2
import sqlite3
from figurine_database import setup_database  # uses your existing DB structure

# ---------- CONFIG ----------
FOLDER_PATH = "./figurine_images"
DB_PATH = "figurine_data.db"

# ---------- IMAGE HASH ----------
def dhash(image, hash_size=8):
    """Compute difference hash (perceptual hash) for duplicate detection."""
    resized = cv2.resize(image, (hash_size + 1, hash_size))
    diff = resized[:, 1:] > resized[:, :-1]
    return sum([2 ** i for (i, v) in enumerate(diff.flatten()) if v])

# ---------- DB INSERTION ----------
def insert_figurine(name, image_path, known=False, confidence=0):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Prevent duplicate insertions by image path
    cursor.execute("SELECT id FROM figurines WHERE image_path = ?", (image_path,))
    if cursor.fetchone():
        print(f"⚠️ Skipping duplicate DB entry: {image_path}")
        conn.close()
        return

    cursor.execute("""
        INSERT INTO figurines (name, image_path, known, confidence)
        VALUES (?, ?, ?, ?)
    """, (name, image_path, 1 if known else 0, confidence))
    conn.commit()
    conn.close()
    print(f"✅ Inserted: {name}")

# ---------- PIPELINE ----------
def process_and_insert(folder_path):
    """Detect duplicates in folder, then insert unique figurines into DB."""
    hashes = {}
    duplicates = []

    print(f"🔍 Scanning folder: {folder_path}")

    for filename in os.listdir(folder_path):
        if filename.lower().endswith((".jpg", ".jpeg", ".png")):
            img_path = os.path.join(folder_path, filename)
            image = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
            if image is None:
                print(f"Skipping unreadable image: {img_path}")
                continue

            h = dhash(image)
            if h in hashes:
                duplicates.append((img_path, hashes[h]))
            else:
                hashes[h] = img_path
                # Extract figurine name (filename without extension)
                name = os.path.splitext(filename)[0]
                insert_figurine(name, img_path, known=False, confidence=0)

    if duplicates:
        print("\n Found possible duplicates (same visual hash):")
        for dup, orig in duplicates:
            print(f"   Duplicate: {dup} --> Original: {orig}")
    else:
        print("\n No duplicate images found in folder.")

if __name__ == "__main__":
    setup_database()               # Ensure DB is ready
    process_and_insert(FOLDER_PATH)
