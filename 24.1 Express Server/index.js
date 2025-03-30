// import express from the express module
import express from "express";
// create an app using the express app
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
