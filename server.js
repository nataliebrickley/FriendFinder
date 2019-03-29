const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  
