import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get('/',(req,res) => {
    res.send("Express versel app response")
})

app.listen(PORT,() => {
console.log('Server is running on port'+ PORT)
})