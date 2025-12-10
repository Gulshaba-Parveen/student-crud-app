const db = require("../config/dbConfig");

exports.createStudent = (req, res) => {
    const { name, age, email, address } = req.body;

    if (!name || !age || !email || !address) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = `INSERT INTO students (name, age, email, address) VALUES (?, ?, ?, ?)`;
    db.run(sql, [name, age, email, address], function (err) {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ id: this.lastID, name, age, email, address });
    });
};

exports.getStudents = (req, res) => {
    const search = req.query.search || "";
    const sql = `
    SELECT * FROM students
    WHERE name LIKE ? OR email LIKE ?
    ORDER BY id DESC
  `;
    db.all(sql, [`%${search}%`, `%${search}%`], (err, rows) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json(rows);
    });
};

exports.getStudentById = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM students WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        if (err) return res.status(500).json({ message: err.message });
        if (!row) return res.status(404).json({ message: "Student not found" });
        res.json(row);
    });
};

exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, age, email, address } = req.body;

    const query = `
        UPDATE students 
        SET name=?, age=?, email=?, address=? 
        WHERE id=?`;

    db.run(query, [name, age, email, address, id], function (err) {
        if (err) return res.status(500).json({ error: err.message });

        if (this.changes === 0)
            return res.status(404).json({ message: "Student not found" });

        res.json({ message: "Student updated successfully" });
    });
};

exports.deleteStudent = (req, res) => {
    const { id } = req.params;

    db.run("DELETE FROM students WHERE id=?", [id], function (err) {
        if (err) return res.status(500).json({ error: err.message });

        if (this.changes === 0)
            return res.status(404).json({ message: "Student not found" });

        res.json({ message: "Student deleted successfully" });
    });
};