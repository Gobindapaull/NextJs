const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const app = require("./app");

const DB = process.env.DB_URL.replace("<PASSWORD>", process.env.DB_PASSWORD);
// console.log(DB);

mongoose.connect(DB).then(() => console.log("DB connection successful.")).catch(() => console.log(error));

const server = app.listen(port, () => {
    console.log(`App is running at ${port}`);
});
