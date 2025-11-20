# expert_system.py
import sqlite3

# --- Define rule logic --- ???
def assign_region(category):
    """
    Assign geographic region based on keywords in the category or figurine name.
    Rules are tailored for Nayarit, Colima, and Chupícuaro regions.
    """
    category = category.lower().strip()

    # --- Northwest Nayarit ---
    if any(word in category for word in ["nayarit", "western mexico",  "composite figure"]):
        return "Northwest Nayarit"

    # --- South Colima ---
    elif any(word in category for word in ["colima", "dog", "effigy vessel",  "southern jalisco"]):
        return "South Colima"

    # --- East Chupicuaro ---
    elif any(word in category for word in ["chupicuaro", "east", "guanajuato",  "geometric design"]):
        return "East Chupicuaro"

    # --- Default ---
    else:
        return "Unassigned"


# --- Apply rules to database entries ---
def apply_rules():
    """
    Goes through all figurines and assigns a region based on their category.
    """
    conn = sqlite3.connect("figurine_data.db")
    cursor = conn.cursor()

    cursor.execute("SELECT id, name, category FROM figurines")
    figurines = cursor.fetchall()

    for fid, name, category in figurines:
        region = assign_region(category or name or "")
        cursor.execute("UPDATE figurines SET region = ? WHERE id = ?", (region, fid))
        print(f" {name}: → {region}")

    conn.commit()
    conn.close()
    print("\n✅ Expert system rules applied successfully.")


# --- Example: Insert sample data (optional test) ---
def insert_sample_data():
    conn = sqlite3.connect("figurine_data.db")
    cursor = conn.cursor()
##come baxk 
    sample_data = [
        ("Seated Couple", "Nayarit Shaft Tomb", None),
        ("Colima Dog Vessel", "Colima Effigy Vessel", None),
        ("Painted Female Figure", "Chupicuaro Painted Ceramic", None),
        ("Unknown Figurine", "Unidentified Artifact", None),
    ]

    cursor.executemany(
        "INSERT INTO figurines (name, category, region) VALUES (?, ?, ?)",
        sample_data
    )
    conn.commit()
    conn.close()
    print("📦 Sample figurines inserted.")


if __name__ == "__main__":
    # Uncomment this if you want to add the test data
    insert_sample_data()

    # Apply rules to database
    apply_rules()
