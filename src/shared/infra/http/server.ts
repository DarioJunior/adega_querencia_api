import cors from "cors";
import express from "express";
import path from "path";


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(__dirname)
  return res.sendFile(path.resolve(__dirname + '../../../.. /index.html'))
})

app.listen(3333, () => {
  console.log("Server is running....")
})