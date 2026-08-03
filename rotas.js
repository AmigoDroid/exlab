import { Router } from "./src/core/Router.js";

const login = new Router();
const Auth = new Router();

login.get("/", (req, res) => {
  res.send("login ok");
});
login.post("/logout", (req, res) => {
  res.send("logout ok");
});

Auth.get("/login", (req, res) => {
  res.send("login ok");
});

export { login, Auth };
