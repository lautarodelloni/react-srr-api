require('dotenv');
const express = require('express');
const app = express()
const port = 5000 || process.env.PORT;
const usersRoute = require('./routes/users');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/users' ,usersRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})