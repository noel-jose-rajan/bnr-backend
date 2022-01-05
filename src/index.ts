import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    let ani = [">--->--->-", "->--->--->", "-->--->---", "--->--->--"];
    let x = 0;
    setInterval(function() {
      process.stdout.write("\r" + ani[x++] + " Server is now Running 🕺");
      x &= 3;
    }, 250);
})






  