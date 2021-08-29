const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const db = process.env.DB_URL;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Database connected'));

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port 3000');
});
