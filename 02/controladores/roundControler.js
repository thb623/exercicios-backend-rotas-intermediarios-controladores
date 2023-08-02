const {jogadores} = require('../bancodedados')


const remover = (req, res) => {
    const indice = Number(req.query.indice)
    jogadores.splice(remover, 1)

    if (!jogadores.includes(indice)) {
        return `Não existe jogador no índice informado (${indice}) para ser removido.`
      }
    res.send(jogadores)
}

const adicionar = (req, res) => {
    const nome = req.query.nome
    const indice = Number(req.query.indice)
    if (!indice) {
        jogadores.push(nome);
      } else {
        jogadores.splice(indice, 0, nome);
      }

      if(indice > jogadores.length)[
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
      ]
    res.send(jogadores)
}

let i = 0
const roundControler = (req, res) =>{
    res.send(`É a vez de ${jogadores[i]} jogar!`)
    i = (i + 1) % jogadores.length
}

module.exports = {
    roundControler,
    remover,
    adicionar
}