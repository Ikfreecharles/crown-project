const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./Schema");
const cors = require("cors");

const app = express();

//allow cors access
app.use(cors());

//connect to database
mongoose.connect(
   "mongodb+srv://freecharles:12345@cluster0.yacww.mongodb.net/crwn-clothing?retryWrites=true&w=majority",
   { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
   console.log("connected to database");
});

app.use(
   "/graphql",
   graphqlHTTP({
      schema,
      graphiql: true,
   })
);

app.listen(4000, () => console.log("Now listening on localhost:4000/graphql"));
