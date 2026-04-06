// import modules
const express = require("express");
const mysql = require("mysql2");

const app = express();

// enable CORS for all routes
const cors = require("cors");
app.use(cors());

// database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // leave empty
  database: "demoapptwo",
});

// connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    return;
  }
  console.log("Connected to MySQL database!");
});
//middleware to parse json data
app.use(express.json());

// simple test route
app.get("/", (req, res) => {
  res.send("Database + MySQL connected");
});

//post request handler to add new employee to the database
app.post("/add_employee", (req, res) => {
  console.log(req.body);

  const { first_name, last_name, email, password } = req.body;

  const sql = `
    INSERT INTO employee (first_name, last_name, email, password)
    VALUES (?, ?, ?, ?)
  `;

  connection.query(
    sql,
    [first_name, last_name, email, password],
    (err, result) => {
      if (err) {
        console.error("Error inserting employee:", err);
        return res.status(500).json({ error: "Failed to add employee" });
      }

      console.log("1 record inserted");
      res.json({ message: "Employee added successfully!" });
    },
  );
});

// POST request handler for login
app.post("/login", (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  const sql = `
    SELECT * FROM employee
    WHERE email = ? AND password = ?
  `;

  connection.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Login error:", err);
      return res.status(500).json({ error: "Login failed" });
    }

    if (result.length > 0) {
      res.json({ message: "Login successful!" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

// start server
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
