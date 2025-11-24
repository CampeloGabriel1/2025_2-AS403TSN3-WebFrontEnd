const UsuarioModel = require("../models/usuario");

// Lógica para obter todos os usuários
exports.getAllUsers = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.find();
    res.json(usuarios);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao obter usuários", error: error.message });
  }
  res.json(null);
};

// Lógica para criar um novo usuário
exports.createUser = async (req, res) => {
  const novoUsuario = req.body;
  try {
    await UsuarioModel.create(novoUsuario);
    res.status(201).json({ novoUsuario });
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao criar usuário", error: error.message });
  }
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const usuario = null;
  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
  res.json(null);
};
