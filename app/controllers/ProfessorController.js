const Parse = require("../config/ParseConfig");

class ProfessorController {
  async search(req, res) {
    const Professores = await Parse.Object.extend("Professores");
    const query = new Parse.Query(Professores);
    const professors = await query.startsWith("nome", req.body.query).find();

    return res.json({ professors });
  }
}

module.exports = new ProfessorController();
