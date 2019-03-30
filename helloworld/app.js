const express = require('express');
var path = require('path');

const app = express();


const port = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(`Hello world`);
})

app.get('/r', function (req, res) {
  // console.log(req.headers); //seems the same as 'req'
  res.send(`Hello world`);
})

app.post('/r/:id', (req, res) => {
  console.log(req);
  res.send("submitted");
})


app.get('/r/:id', function (req, res) {
  console.log(`RouteParams:`);
  console.log(req.params);

  console.log(`QueryParams:`);
  console.log(req.query);

  /*   res.send(`
    <h1>hello world</h1>
    <form action="/r/2" method="POST">
      <input name="input_task" type="text" value="my first entry">
      <input type="submit" name="test" value="post_sub">
    </form>
            `); */

  // res.send(req); * cannot directly send the 'request' message

  // ! send an html file
  res.sendFile(path.join(__dirname + '/home.html'));

})

app.listen(port, () => console.log(`Example app listening on port ${port}`));