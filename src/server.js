import express from "express"

const app = express()

import appRoute from './routes/app.route.js';
app.use("/", appRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})