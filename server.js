const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser');
const connection = require("./models");
const exphbs  = require('express-handlebars');
const apiRouter = require("./routes/apiRoutes");

//middleware 
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

 
const hbs = exphbs.create();
 
// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use("/api", apiRouter);
app.get('/', async (req, res) => {
  const burgers = await connection.Burger.findAll();
  res.render('home', {burgers});
  
  
});

//connect and apply changes to database
connection.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
})

