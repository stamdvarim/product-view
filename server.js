const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;
console.log(process.env.PORT, 'process.env.PORT');
console.log(port);
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`server live on port ${port} `);
});
