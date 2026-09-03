import Express from "express";
import { start } from "node:repl";

const express = Express;
const app = express();
const port = 3000;

app.get("/", (req,res)=> {
    res.send("HelloWorld!");
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});
