import sqlite3 

def setupDatabase():
    conn= sqlite3.connect("figurine_data.db")
    cursor = conn.cursor()

    


    #Table Creation
#FIGURINES TABLES
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS figurines (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        known  INTEGER DEFAULT 0,
         confidence INTEGER DEFAULT 0,
         location_id INTEGER,
        FOREIGN KEY(location_id) REFERENCES locations(id
    )
    """)
#LOCATIONS TABLES
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        region TEXT,
        capacity INTEGER,
    
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS records (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        figurine_id INTEGER,
        location_id INTEGER,
        status TEXT,
        confidence INTEGER,
        known INTEGER DEFAULT 0,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(figurine_id) REFERENCES figurines(id),
        FOREIGN KEY(location_id) REFERENCES locations(id)
    )
    """)
    
    conn.commit()
    print("Database and tables created successfully.")
    conn.close()

    
