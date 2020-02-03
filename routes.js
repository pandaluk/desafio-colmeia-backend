const { Router } = require("express");

const ProfessorController = require("./app/controllers/ProfessorController");

const routes = new Router();

routes.post("/professor", ProfessorController.search);

module.exports = routes;
