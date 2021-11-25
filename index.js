require('dotenv');
const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000;
const usersRoute = require('./routes/users');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/users' ,usersRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})