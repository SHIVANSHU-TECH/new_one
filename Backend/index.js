const dotenv = require("dotenv");
const ConnectDB = require("./db/index.js");
const app = require("./app.js");
dotenv.config({ path: "./.env" });

// console.log(process.env.DB);

const PORT = process.env.PORT || 8000;

ConnectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Running on ${PORT}`);
    });
}).catch((err) => {
    console.log('====================================');
    console.log("MongoDB connection failed !!!", err);
    console.log('====================================');
});