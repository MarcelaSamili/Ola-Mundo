

function calcular() {
    var opc1 = document.getElementById('opcao1').value
    var opc2 = document.getElementById('opcao2').value
    var res = document.querySelector('div#res')
    var valor = document.getElementById('ivalor1').value
    // caso a op1 for metros
    if (opc1 == "Metro" && opc2 == "Centímetro"){
        var centimetros = valor * 100
        res.innerHTML = `${valor} Metros são ${centimetros} Centímetros`
    }else if (opc1 == 'Metro' && opc2 == 'Quilômetro'){
        var quilometros = valor * 0.001
        res.innerHTML = `${valor} Metros são ${quilometros} Quilômetros`
    }else if (opc1 == 'Metro' && opc2 == 'Milímetro'){
        var milimetro = valor * 1000
        res.innerHTML = `${valor} Metros são ${milimetro} Milímetros`
    }else if (opc1 == 'Metro' && opc2 == 'Micrômetro'){
        var micrometro = valor * 1e+6
        res.innerHTML = `${valor} Metros são ${micrometro} Micrômetro`
    }else if (opc1 == 'Metro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1e+10
        res.innerHTML = `${valor} Metros são ${nanometro} Nanômetro`
    }else if (opc1 == 'Metro' && opc2 == 'Milha'){
        var milha = valor / 1609
        res.innerHTML = `${valor} Metros são ${milha} Milhas`
    }else if (opc1 == 'Metro' && opc2 == 'Jarda'){
        var jarda = valor* 1.094
        res.innerHTML = `${valor} Metros são ${jarda} Jardas`
    }else if (opc1 == 'Metro' && opc2 == 'Pé'){
        var pe = valor * 3.281
        res.innerHTML = `${valor} Metros são ${pe} Pés`
    }else if (opc1 == 'Metro' && opc2 == 'Polegada'){
        var polegada = valor * 39.37
        res.innerHTML = `${valor} Metros são ${polegada} Polegadas` 
    }else if (opc1 == 'Metro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 1852
        res.innerHTML = `${valor} Metros são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Metro' && opc2 == 'Decímetro') {
        var decimetro = valor * 10
        res.innerHTML = `${valor} Metros são ${decimetro} Decímetros`
    }else if (opc1 == 'Metro' && opc2 == 'Decâmetro'){
        var decametro = valor / 10
        res.innerHTML = `${valor} Metros são ${decametro} decametros`
    }else if (opc1 == 'Metro' && opc2 == 'Hectômetro'){
        var hectometro = valor / 100
        res.innerHTML = `${valor} Metros são ${hectometro} Hectômetros`
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
    // caso a op1 for centimetros
    if (opc1 == "Centímetro" && opc2 == "Metro"){
        var centimetros = valor / 100
        res.innerHTML = `${valor} Centímetros são ${centimetros} Centímetros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Quilômetro'){
        var quilometros = valor / 100000
        res.innerHTML = `${valor} Centímetros são ${quilometros} Quilômetros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Milímetro'){
        var milimetro = valor * 10
        res.innerHTML = `${valor} Centímetros são ${milimetro} Milímetros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Micrômetro'){
        var micrometro = valor * 10000
        res.innerHTML = `${valor} Centímetros são ${micrometro} Micrômetro`
    }else if (opc1 == 'Centímetro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1e+7
        res.innerHTML = `${valor} Centímetros são ${nanometro} Nanômetro`
    }else if (opc1 == 'Centímetro' && opc2 == 'Milha'){
        var milha = valor / 160934
        res.innerHTML = `${valor} Centímetros são ${milha} Milhas`
    }else if (opc1 == 'Centímetro' && opc2 == 'Jarda'){
        var jarda = valor / 91.94
        res.innerHTML = `${valor} Centímetros são ${jarda} Jardas`
    }else if (opc1 == 'Centímetro' && opc2 == 'Pé'){
        var pe = valor / 30.48
        res.innerHTML = `${valor} Centímetros são ${pe} Pés`
    }else if (opc1 == 'Centímetro' && opc2 == 'Polegada'){
        var polegada = valor / 2.54
        res.innerHTML = `${valor} Centímetros são ${polegada} Polegadas` 
    }else if (opc1 == 'Centímetro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 185200
        res.innerHTML = `${valor} Centímetros são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Centímetro' && opc2 == 'Decímetro') {
        var decimetro = valor / 10
        res.innerHTML = `${valor} Centímetros são ${decimetro} Decímetros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Decâmetro'){
        var decametro = valor / 1000
        res.innerHTML = `${valor} Centímetros são ${decametro} decametros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Hectômetro'){
        var hectometro = valor / 10000
        res.innerHTML = `${valor} Centímetro são ${hectometro} Hectômetros`
    }
    

    // caso a op1 for centimetros
    if (opc1 == "Centímetro" && opc2 == "Metro"){
        var centimetros = valor / 100
        res.innerHTML = `${valor} Centímetros são ${centimetros} Centímetros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Quilômetro'){
        var quilometros = valor / 100000
        res.innerHTML = `${valor} Centímetros são ${quilometros} Quilômetros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Milímetro'){
        var milimetro = valor * 10
        res.innerHTML = `${valor} Centímetros são ${milimetro} Milímetros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Micrômetro'){
        var micrometro = valor * 10000
        res.innerHTML = `${valor} Centímetros são ${micrometro} Micrômetro`
    }else if (opc1 == 'Centímetro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1e+7
        res.innerHTML = `${valor} Centímetros são ${nanometro} Nanômetro`
    }else if (opc1 == 'Centímetro' && opc2 == 'Milha'){
        var milha = valor / 160934
        res.innerHTML = `${valor} Centímetros são ${milha} Milhas`
    }else if (opc1 == 'Centímetro' && opc2 == 'Jarda'){
        var jarda = valor / 91.94
        res.innerHTML = `${valor} Centímetros são ${jarda} Jardas`
    }else if (opc1 == 'Centímetro' && opc2 == 'Pé'){
        var pe = valor / 30.48
        res.innerHTML = `${valor} Centímetros são ${pe} Pés`
    }else if (opc1 == 'Centímetro' && opc2 == 'Polegada'){
        var polegada = valor / 2.54
        res.innerHTML = `${valor} Centímetros são ${polegada} Polegadas` 
    }else if (opc1 == 'Centímetro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 185200
        res.innerHTML = `${valor} Centímetros são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Centímetro' && opc2 == 'Decímetro') {
        var decimetro = valor / 10
        res.innerHTML = `${valor} Centímetros são ${decimetro} Decímetros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Decâmetro'){
        var decametro = valor / 1000
        res.innerHTML = `${valor} Centímetros são ${decametro} decametros`
    }else if (opc1 == 'Centímetro' && opc2 == 'Hectômetro'){
        var hectometro = valor / 10000
        res.innerHTML = `${valor} Centímetro são ${hectometro} Hectômetros`
    }
    //caso o op2 for centimetros
    if (opc2== "Centímetro" && opc1 == "Metro"){
        var centimetros = valor / 100
        res.innerHTML = `${valor} Centímetros são ${centimetros} Metros`
    }else if (opc2 == 'Centímetro' && opc1 == 'Quilômetro'){
        var quilometros = valor / 100000
        res.innerHTML = `${valor} Centímetros são ${quilometros} Quilômetros`
    }else if (opc2 == 'Centímetro' && opc1 == 'Milímetro'){
        var milimetro = valor * 10
        res.innerHTML = `${valor} Centímetros são ${milimetro} Milímetros`
    }else if (opc2 == 'Centímetro' && opc1 == 'Micrômetro'){
        var micrometro = valor * 10000
        res.innerHTML = `${valor} Centímetros são ${micrometro} Micrômetro`
    }else if (opc2 == 'Centímetro' && opc1 == 'Nanômetro'){
        var nanometro = valor * 1e+7
        res.innerHTML = `${valor}Centímetros são ${nanometro} Nanômetro`
    }else if (opc2 == 'Centímetro' && opc1 == 'Milha'){
        var milha = valor / 160934
        res.innerHTML = `${valor} Centímetros são ${milha} Milhas`
    }else if (opc2 == 'Centímetro' && opc1 == 'Jarda'){
        var jarda = valor / 91.94
        res.innerHTML = `${valor} Centímetros são ${jarda} Jardas`
    }else if (opc2 == 'Centímetro' && opc1 == 'Pé'){
        var pe = valor / 30.48
        res.innerHTML = `${valor} Centímetros são ${pe} Pés`
    }else if (opc2 == 'Centímetro' && opc1 == 'Polegada'){
        var polegada = valor / 2.54
        res.innerHTML = `${valor} Centímetros são ${polegada} Polegadas` 
    }else if (opc2 == 'Centímetro' && opc1 == 'Milha Naltica'){
        var milhanal = valor / 185200
        res.innerHTML = `${valor} Centímetros são ${milhanal} Milhas Naltica`
    }else if (opc2 == 'Centímetro' && opc1 == 'Decímetro') {
        var decimetro = valor / 10
        res.innerHTML = `${valor} Centímetros são ${decimetro} Decímetros`
    }else if (opc2 == 'Centímetro' && opc1 == 'Decâmetro'){
        var decametro = valor / 1000
        res.innerHTML = `${valor} Centímetros são ${decametro} decametros`
    }else if (opc2 == 'Centímetro' && opc1 == 'Hectômetro'){
        var hectometro = valor / 10000
        res.innerHTML = `${valor} Centímetros são ${hectometro} Hectômetros`
    }
    
    
  
   
    
    
    
    
    
    
    
}
