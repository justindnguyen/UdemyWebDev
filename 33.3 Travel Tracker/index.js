import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "",
  host: "",
  database: "",
  password: "",
  port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    const countryList = [];
    result.rows.forEach(row => {
      countryList.push(row.country_code);
    });
    console.log(countryList);

    res.render("index.ejs", { countries: countryList, total: countryList.length});
  } catch(err) {
    console.error("Database query error:", err.stack);
    res.status(500).send("Error fetching data from the database.");
  }
});

app.post("/add", async (req, res) => {
  const countryName = req.body["country"];

  try {
    const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE LOWER($1)", [`%${countryName}%`]);
    
    if (result.rows.length === 0) {
      // Country not found
      const visited = await db.query("SELECT country_code FROM visited_countries");
      const countryList = visited.rows.map(row => row.country_code);
      return res.render("index.ejs", {
        countries: countryList,
        total: countryList.length,
        error: "Country does not exist, try again"
      });
    }
    
    const code = result.rows[0].country_code;

    // Check if already visited
    const check = await db.query(
      "SELECT * FROM visited_countries WHERE country_code = $1",
      [code]
    );
    
    if (check.rows.length > 0) {
      const visited = await db.query("SELECT country_code FROM visited_countries");
      const countryList = visited.rows.map(row => row.country_code);
      return res.render("index.ejs", {
        countries: countryList,
        total: countryList.length,
        error: "Country has already been added, try again"
      });
    }

    // Otherwise, insert it
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [code]);
    res.redirect("/");

  } catch(err) {
    console.error("Error adding country:", err);
    res.status(500).send("Failed to add country.");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
