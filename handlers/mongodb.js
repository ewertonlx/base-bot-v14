const mongoose = require("mongoose");
const colorize = require('strcolorize');
mongoose
  .connect(process.env.MONGODB)
  .then(() => colorize('[[MOONGODB 🍃](#54FF9F)] conectada!',true));