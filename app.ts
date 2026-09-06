import Express from "express";
import roomRouter from "./src/routes/room.routes.ts";

const express = Express;
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res)=> {
    res.send("HelloWorld!");
});

app.use("/api", roomRouter);


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});

