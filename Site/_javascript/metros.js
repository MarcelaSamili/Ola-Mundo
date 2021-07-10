function metro(v1,v2, rcb){
    
    // caso a op1 for metros
    if (v1 == "Metro" && v2 == "Centímetro"){
        var centimetros = rcb * 100
        return `${rcb} Metros são ${centimetros} Centímetros`
    }else if (v1 == 'Metro' && v2 == 'Quilômetro'){
        var quilometros = rcb * 0.001
        res.innerHTML = `${rcb} Metros são ${quilometros} Quilômetros`
    }else if (v1 == 'Metro' && v2 == 'Milímetro'){
        var milimetro = rcb * 1000
        res.innerHTML = `${rcb} Metros são ${milimetro} Milímetros`
    }else if (v1 == 'Metro' && v2 == 'Micrômetro'){
        var micrometro = rcb * 1e+6
        res.innerHTML = `${rcb} Metros são ${micrometro} Micrômetro`
    }else if (v1 == 'Metro' && v2 == 'Nanômetro'){
        var nanometro = rcb * 1e+10
        res.innerHTML = `${rcb} Metros são ${nanometro} Nanômetro`
    }else if (v1 == 'Metro' && v2 == 'Milha'){
        var milha = rcb / 1609
        res.innerHTML = `${rcb} Metros são ${milha} Milhas`
    }else if (v1 == 'Metro' && v2 == 'Jarda'){
        var jarda = rcb* 1.094
        res.innerHTML = `${rcb} Metros são ${jarda} Jardas`
    }else if (v1 == 'Metro' && v2 == 'Pé'){
        var pe = rcb * 3.281
        res.innerHTML = `${rcb} Metros são ${pe} Pés`
    }else if (v1 == 'Metro' && v2 == 'Polegada'){
        var polegada = rcb * 39.37
        res.innerHTML = `${rcb} Metros são ${polegada} Polegadas` 
    }else if (v1 == 'Metro' && v2 == 'Milha Naltica'){
        var milhanal = rcb / 1852
        res.innerHTML = `${rcb} Metros são ${milhanal} Milhas Naltica`
    }else if (v1 == 'Metro' && v2 == 'Decímetro') {
        var decimetro = rcb * 10
        res.innerHTML = `${rcb} Metros são ${decimetro} Decímetros`
    }else if (v1 == 'Metro' && v2 == 'Decâmetro'){
        var decametro = rcb / 10
        res.innerHTML = `${rcb} Metros são ${decametro} decametros`
    }else if (v1 == 'Metro' && v2 == 'Hectômetro'){
        var hectometro = rcb / 100
        res.innerHTML = `${rcb} Metros são ${hectometro} Hectômetros`
    }
    //caso o op2 for metros
    if (opc2 == "Metro" && opc1 == "Centímetro"){
        var centimetros = valor * 100
        res.innerHTML = `${valor} Metros são ${centimetros} Centímetros`
    }else if (opc2 == 'Metro' && opc1 == 'Quilômetro'){
        var quilometros = valor * 0.001
        res.innerHTML = `${valor} Metros são ${quilometros} Quilômetros`
    }else if (opc2 == 'Metro' && opc1 == 'Milímetro'){
        var milimetro = valor * 1000
        res.innerHTML = `${valor} Metros são ${milimetro} Milímetros`
    }else if (opc2 == 'Metro' && opc1 == 'Micrômetro'){
        var micrometro = valor * 1e+6
        res.innerHTML = `${valor} Metros são ${micrometro} Micrômetro`
    }else if (opc2 == 'Metro' && opc1 == 'Nanômetro'){
        var nanometro = valor * 1e+10
        res.innerHTML = `${valor} Metros são ${nanometro} Nanômetro`
    }else if (opc2 == 'Metro' && opc1 == 'Milha'){
        var milha = valor / 1609
        res.innerHTML = `${valor} Metros são ${milha} Milhas`
    }else if (opc2 == 'Metro' && opc1 == 'Jarda'){
        var jarda = valor* 1.094
        res.innerHTML = `${valor} Metros são ${jarda} Jardas`
    }else if (opc2 == 'Metro' && opc1 == 'Pé'){
        var pe = valor * 3.281
        res.innerHTML = `${valor} Metros são ${pe} Pés`
    }else if (opc2 == 'Metro' && opc1 == 'Polegada'){
        var polegada = valor * 39.37
        res.innerHTML = `${valor} Metros são ${polegada} Polegadas` 
    }else if (opc2 == 'Metro' && opc1 == 'Milha Naltica'){
        var milhanal = valor / 1852
        res.innerHTML = `${valor} Metros são ${milhanal} Milhas Naltica`
    }else if (opc2 == 'Metro' && opc1 == 'Decímetro') {
        var decimetro = valor * 10
        res.innerHTML = `${valor} Metros são ${decimetro} Decímetros`
    }else if (opc2 == 'Metro' && opc1 == 'Decâmetro'){
        var decametro = valor / 10
        res.innerHTML = `${valor} Metros são ${decametro} decametros`
    }else if (opc2 == 'Metro' && opc1 == 'Hectômetro'){
        var hectometro = valor / 100
        res.innerHTML = `${valor} Metros são ${hectometro} Hectômetros`
    }
    
}
module.exports = {
    metro : metro
}