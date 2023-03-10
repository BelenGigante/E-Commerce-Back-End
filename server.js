const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});
