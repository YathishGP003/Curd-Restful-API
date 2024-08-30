const express = require('express')
const app = express();
require("../source/database/connection")
// require("../routers/user")

const UsersSchema = require("../source/models/ussers");
const router = require('./routers/user');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})