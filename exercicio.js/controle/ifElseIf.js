Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimiResultado = function(nota){
    if (nota.entre(9, 10)){
        console.log('quadro de honra')
    }else if(nota.entre(7, 9)){
        console.log('aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('recuperaçao')
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }
}

imprimiResultado(10)
imprimiResultado(8.9)
imprimiResultado(6.5)
imprimiResultado(2.3)
imprimiResultado(-1)
imprimiResultado(11)