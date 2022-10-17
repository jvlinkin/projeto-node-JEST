import express from "express";
const app = express();
const PORT = process.env.PORT || 4333;
import routes from "./routes/routes";

//Rotas
app.use(routes);

app.listen(PORT, () => {
  /*Here, you can use to connect do database, cause, if db is not connected,
   it does not make sense to init the server*/
  console.log(`Server is running on http://localhost:${PORT}`);
});
