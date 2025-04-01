import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const dayNumber = new Date().getDay();
    let day = "";
    let advice = "";

    if (dayNumber === 0 || dayNumber === 6) {
        day = "the weekend";
        advice = "have fun!";
    } else {
        day = "a weekday";
        advice = "work hard!";
    }

    res.render(__dirname + "/views/index.ejs", { day: day, advice: advice});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});