
 function calcularPartida(vitorias, derrotas) {
    let resultado = vitorias - derrotas
    let nivel

    if (resultado < 10) { 
        nivel = "Ferro"
    }else if (resultado > 11 && resultado <= 20)  {
        nivel = "Bronze"
    }else if (resultado > 21 && resultado <= 50)  {
        nivel = "Prata"
    }else if (resultado > 51 && resultado <= 80)  {
        nivel = "Ouro"
    }else if (resultado > 81 && resultado <= 90)  {
        nivel = "Diamante"
    }else if (resultado > 91 && resultado <= 100)  {
        nivel = "Lendário"
    }else if (resultado >= 101)  {
        nivel = "Imortal"
    }


    console.log(`O Herói tem de saldo de ${resultado} e está no nível ${nivel}`)
}

calcularPartida (4, 3)