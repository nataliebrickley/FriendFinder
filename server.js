const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

//require("/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  
