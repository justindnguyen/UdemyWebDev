//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const CORRECT_PASSWORD = "ILoveProgramming";

app.get("/", (req, res) => {
    console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));

function passwordChecker(inputPassword) {
    return inputPassword === CORRECT_PASSWORD;
}

app.post("/check", (req, res) => {
    const {password} = req.body;

    if(passwordChecker(password)) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect('/');
    }
    
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});