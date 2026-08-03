import { login, Auth } from "./rotas.js";
import { exlab } from "./src/ExLab.js";

const app = exlab();
app.use("/login", login);
//app.use("/auth", Auth);

app.listen(3000, () => {
  console.log("server on");
});
