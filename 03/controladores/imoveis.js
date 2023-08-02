const {imoveis} = require('../dados');

const todosImoveis = (req, res) => {
    res.send(imoveis)
}

const encontrarImovel = (req, res) => {
    const imovelEncontrado = imoveis.find((imovel) =>{
        return imovel.id === Number(req.params.id)
    });
    res.send(imovelEncontrado);
};

module.exports = {
    todosImoveis,
    encontrarImovel
}