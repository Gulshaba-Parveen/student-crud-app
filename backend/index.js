const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




// const express = require("express");
// const cors = require("cors");

// const studentRoutes = require("./routes/studentRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/students", studentRoutes);

// // Test route
// app.get("/", (req, res) => {
//     res.send("Backend is running");
// });

// // Start server
// const PORT = 4000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
