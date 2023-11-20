const express = require("express");
const app = express();
require("dotenv").config();
require("./passport");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");

const authRoute = require("./routes/auth");

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
