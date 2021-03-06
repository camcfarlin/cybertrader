const express = require ("express");
const mongoose = require ("mongoose");
const cookieSession = require ("cookie-session");
const passport = require ("passport");
const keys = require ("./config/keys");
require ("./models/User");
require ("./services/passport");

mongoose.connect (keys.mongoURI);

const app = express ();

app.use (
  cookieSession ({
    name: "session",
    keys: [keys.cookieKey],
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
  })
);
app.use (passport.initialize ());
app.use (passport.session ());

require ("./routes/authRoutes") (app);
// require("./routes/postsRoutes")(app)

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"))
//     const path = require("path")
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//     })
// }

if (process.env.NODE_ENV === "production") {
  // Express will serrve up production assets - main.js
  app.use (express.static ("client/build"));
  //express will serve up the index.html file if it doesnt rec route
  const path = require ("path");
  app.get ("*", (req, res) => {
    res.sendFile (path.resolve (__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen (PORT);
