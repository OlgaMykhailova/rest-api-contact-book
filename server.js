const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT=4000 } = process.env;

mongoose.set('strictQuery', true)

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.mesaage);
    process.exit(1);
  });
