function calcular() {
    var opc1 = document.getElementById('cM1').value
    var opc2 = document.getElementById('cM2').value
    var res = document.querySelector('div#res')
    var valor = document.getElementById('ivalor1').value
    // caso a op1 for metros
    if (opc1 == "Metro" && opc2 == "Centímetro"){
        var centimetros = valor * 100
        res.innerHTML = `${valor} Metros são ${centimetros} Centímetros`
    }else if (opc1 == 'Metro' && opc2 == 'Quilômetro'){
        var quilometros = valor * 0.001
        res.innerHTML = `${quilometros} Quilômetros`
    }else if (opc1 == 'Metro' && opc2 == 'Milímetro'){
        var milimetro = valor * 1000
        res.innerHTML = `${valor} Metros são ${milimetro} Milímetros`
    }else if (opc1 == 'Metro' && opc2 == 'Micrômetro'){
        var micrometro = valor * 1e+6
        res.innerHTML = `${micrometro} Micrômetro`
    }else if (opc1 == 'Metro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1e+10
        res.innerHTML = `${nanometro} Nanômetro`
    }else if (opc1 == 'Metro' && opc2 == 'Milha'){
        var milha = valor / 1609
        res.innerHTML = `${milha} Milhas`
    }else if (opc1 == 'Metro' && opc2 == 'Jarda'){
        var jarda = valor* 1.094
        res.innerHTML = `${jarda} Jardas`
    }else if (opc1 == 'Metro' && opc2 == 'Pé'){
        var pe = valor * 3.281
        res.innerHTML = `${pe} Pés`
    }else if (opc1 == 'Metro' && opc2 == 'Polegada'){
        var polegada = valor * 39.37
        res.innerHTML = `${polegada} Polegadas` 
    }else if (opc1 == 'Metro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 1852
        res.innerHTML = `${milhanal} Milhas Naltica`
    }else if (opc1 == 'Metro' && opc2 == 'Decímetro') {
        var decimetro = valor * 10
        res.innerHTML = `${valor} Metros são ${decimetro} Decímetros`
    }else if (opc1 == 'Metro' && opc2 == 'Decâmetro'){
        var decametro = valor / 10
        res.innerHTML = `${decametro} decametros`
    }else if (opc1 == 'Metro' && opc2 == 'Hectômetro'){
        var hectometro = valor / 100
        res.innerHTML = `${valor} Metros são ${hectometro} Hectômetros`
    }    
    
   
    
    
    
    
    
    
    
}
