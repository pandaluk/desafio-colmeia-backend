const { Router } = require("express");

const ProfessorController = require("./app/controllers/ProfessorController");

const routes = new Router();

routes.get("/", (req, res) => {
  res.json({ app: "desafio-colmeia-backend" });
});

routes.post("/professor", ProfessorController.search);

module.exports = routes;
