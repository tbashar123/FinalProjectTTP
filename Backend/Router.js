const express = require('express')

let app = express();

console.log("We are testing");
app.post("/crud", function(req, res) {
  console.log("We are inserting in the database");
});

app.listen(3001, () => {
  console.log(`app is running on port ${process.env.PORT || 3001}`);
});
