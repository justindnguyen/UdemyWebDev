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
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC");
  let items = result.rows;
  console.log(items);

  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch(err) {
    console.error("Error inserting item: ", err);
    res.status(500).send("Failed to add item.");
  } 
});

app.post("/edit", async (req, res) => {
  const updatedItemId = req.body.updatedItemId;
  const updatedItemTitle = req.body.updatedItemTitle;
  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = ($2)", [updatedItemTitle, updatedItemId]);
    res.redirect("/");
  } catch(err) {
    console.error("Error editing item: ", err);
    res.status(500).send("Failed to edit item.");
  }
});

app.post("/delete", async (req, res) => {
  const deleteItemId = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = ($1)", [deleteItemId]);
    res.redirect("/");
  } catch(err) {
    console.error("Error deleting item: ", err);
    res.status(500).send("Failed to delete item.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
