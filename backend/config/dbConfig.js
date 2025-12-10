const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "students.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Error opening DB", err.message);
    }
    else { console.log("Connected to SQLite DB"); }
});

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      age INTEGER NOT NULL,
      email TEXT NOT NULL UNIQUE,
      address TEXT NOT NULL
    )
  `);
});

module.exports = db;
