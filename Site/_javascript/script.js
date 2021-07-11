

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
    
    
    //caso opc1 seja quilomtro
    if (opc1 == 'Quilômetro' && opc2 == 'Metro'){
        var metros = valor * 1000
        res.innerHTML = `${valor} Quilômetro são ${metros} Metros`
    }else if (opc1 == "Quilômetro" && opc2 == "Centímetro"){
        var centimetros = valor * 100000
        res.innerHTML = `${valor} Quilômetro são ${centimetros} Centímetros`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Milímetro'){
        var milimetro = valor * 1e+6
        res.innerHTML = `${valor} Quilômetro são ${milimetro} Milímetros`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Micrômetro'){
        var micrometro = valor * 1e+9
        res.innerHTML = `${valor} Quilômetro são ${micrometro} Micrômetro`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1e+12
        res.innerHTML = `${valor} Quilômetro são ${nanometro} Nanômetro`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Milha'){
        var milha = valor / 1.609
        res.innerHTML = `${valor} Quilômetro são ${milha} Milhas`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Jarda'){
        var jarda = valor * 1094
        res.innerHTML = `${valor} Quilômetro são ${jarda} Jardas`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Pé'){
        var pe = valor * 3281
        res.innerHTML = `${valor} Quilômetro são ${pe} Pés`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Polegada'){
        var polegada = valor * 39370
        res.innerHTML = `${valor}Quilômetro são ${polegada} Polegadas` 
    }else if (opc1 == 'Quilômetro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 1.852
        res.innerHTML = `${valor} Quilômetro são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Decímetro') {
        var decimetro = valor * 10000
        res.innerHTML = `${valor} Quilômetro são ${decimetro} Decímetros`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Decâmetro'){
        var decametro = valor * 100
        res.innerHTML = `${valor} Quilômetro são ${decametro} decametros`
    }else if (opc1 == 'Quilômetro' && opc2 == 'Hectômetro'){
        var hectometro = valor * 10
        res.innerHTML = `${valor} Quilômetro são ${hectometro} Hectômetros`
    }
    
    // caso a opc1 seja hetometro
    if (opc1 == 'Hectômetro' && opc2 == 'Metro'){
        var metros = valor * 100
        res.innerHTML = `${valor} Hectômetro são ${metros} Metros`
    }else if (opc1 == "Hectômetro" && opc2 == "Centímetro"){
        var centimetros = valor * 10000
        res.innerHTML = `${valor} Hectômetro são ${centimetros} Centímetros`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Milímetro'){
        var milimetro = valor * 100000
        res.innerHTML = `${valor} Hectômetro são ${milimetro} Milímetros`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Micrômetro'){
        var micrometro = valor * 1e+8
        res.innerHTML = `${valor} Hectômetro são ${micrometro} Micrômetro`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1e+11
        res.innerHTML = `${valor} Hectômetro são ${nanometro} Nanômetro`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Milha'){
        var milha = valor / 16.093
        res.innerHTML = `${valor} Hectômetro são ${milha} Milhas`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Jarda'){
        var jarda = valor * 109
        res.innerHTML = `${valor} Hectômetro são ${jarda} Jardas`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Pé'){
        var pe = valor * 328
        res.innerHTML = `${valor} Hectômetro são ${pe} Pés`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Polegada'){
        var polegada = valor * 3937
        res.innerHTML = `${valor} Hectômetro são ${polegada} Polegadas` 
    }else if (opc1 == 'Hectômetro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 18.52
        res.innerHTML = `${valor} Hectômetro são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Decímetro') {
        var decimetro = valor * 1000
        res.innerHTML = `${valor} Hectômetro são ${decimetro} Decímetros`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Decâmetro'){
        var decametro = valor * 10
        res.innerHTML = `${valor} Hectômetro são ${decametro} decametros`
    }else if (opc1 == 'Hectômetro' && opc2 == 'Quilômetro'){
        var quilometro = valor / 10
        res.innerHTML = `${valor} Hectômetro são ${quilometro} Quilômetros`
    }
    
    // caso a opc1 seja milimetro
    if (opc1 == 'Milímetro' && opc2 == 'Metro'){
        var metros = valor / 1000
        res.innerHTML = `${valor} Milímetro são ${metros} Metros`
    }else if (opc1 == 'Milímetro' && opc2 == "Centímetro"){
        var centimetros = valor / 10
        res.innerHTML = `${valor} Milímetro são ${centimetros} Centímetros`
    }else if (opc1 == 'Milímetro' && opc2 == 'Milímetro'){
        var milimetro = valor
        res.innerHTML = `${valor} Milímetro são ${milimetro} Milímetros`
    }else if (opc1 == 'Milímetro' && opc2 == 'Micrômetro'){
        var micrometro = valor * 1000
        res.innerHTML = `${valor} Milímetro são ${micrometro} Micrômetro`
    }else if (opc1 == 'Milímetro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1e+6
        res.innerHTML = `${valor} Milímetro são ${nanometro} Nanômetro`
    }else if (opc1 == 'Milímetro' && opc2 == 'Milha'){
        var milha = valor / 1.609e+6
        res.innerHTML = `${valor} Milímetro são ${milha} Milhas`
    }else if (opc1 == 'Milímetro' && opc2 == 'Jarda'){
        var jarda = valor / 914
        res.innerHTML = `${valor} Milímetro são ${jarda} Jardas`
    }else if (opc1 =='Milímetro' && opc2 == 'Pé'){
        var pe = valor / 305
        res.innerHTML = `${valor} Milímetro são ${pe} Pés`
    }else if (opc1 == 'Milímetro' && opc2 == 'Polegada'){
        var polegada = valor / 25.4
        res.innerHTML = `${valor} Milímetro são ${polegada} Polegadas` 
    }else if (opc1 == 'Milímetro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 1.852e+6
        res.innerHTML = `${valor} Milímetro são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Milímetro' && opc2 == 'Decímetro') {
        var decimetro = valor / 100
        res.innerHTML = `${valor} Milímetro são ${decimetro} Decímetros`
    }else if (opc1 == 'Milímetro' && opc2 == 'Decâmetro'){
        var decametro = valor / 10000
        res.innerHTML = `${valor} Milímetro são ${decametro} Decametros`
    }else if (opc1 == 'Milímetro' && opc2 == 'Hectômetro'){
        var hectometro = valor / 100000
        res.innerHTML = `${valor} Milímetros são ${hectometro} Hectômetros`
    }else if (opc1 == 'Milímetro' && opc2 == 'Quilômetro'){
        var quilometro = valor / 1e+6
        res.innerHTML = `${valor} Milímetros são ${quilometro} Quilômetros`
    }
    // caso opc1 seja micrometro
    if (opc1 == 'Micrômetro' && opc2 == 'Metro'){
        var metros = valor / 1e+6
        res.innerHTML = `${valor} Micrômetro são ${metros} Metros`
    }else if (opc1 == 'Micrômetro' && opc2 == "Centímetro"){
        var centimetros = valor / 10000
        res.innerHTML = `${valor} Micrômetro são ${centimetros} Centímetros`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Milímetro'){
        var milimetro = valor / 1000
        res.innerHTML = `${valor} Micrômetro são ${milimetro} Milímetros`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Micrômetro'){
        var micrometro = valor 
        res.innerHTML = `${valor} Micrômetro são ${micrometro} Micrômetro`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1000
        res.innerHTML = `${valor} Micrômetro são ${nanometro} Nanômetro`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Milha'){
        var milha = valor / 1.609e+9
        res.innerHTML = `${valor} Micrômetro são ${milha} Milhas`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Jarda'){
        var jarda = valor / 914400
        res.innerHTML = `${valor} Micrômetro são ${jarda} Jardas`
    }else if (opc1 =='Micrômetro' && opc2 == 'Pé'){
        var pe = valor / 304800
        res.innerHTML = `${valor} Micrômetro são ${pe} Pés`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Polegada'){
        var polegada = valor / 25400
        res.innerHTML = `${valor} Micrômetro são ${polegada} Polegadas` 
    }else if (opc1 == 'Micrômetro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 1.852e+9
        res.innerHTML = `${valor} Micrômetro são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Decímetro') {
        var decimetro = valor / 100000
        res.innerHTML = `${valor} Micrômetro são ${decimetro} Decímetros`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Decâmetro'){
        var decametro = valor / 1e+7
        res.innerHTML = `${valor} Micrômetro são ${decametro} Decametros`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Hectômetro'){
        var hectometro = valor / 1e+8
        res.innerHTML = `${valor} Micrômetro são ${hectometro} Hectômetros`
    }else if (opc1 == 'Micrômetro' && opc2 == 'Quilômetro'){
        var quilometro = valor / 1e+9
        res.innerHTML = `${valor} Micrômetro são ${quilometro} Quilômetros`
    }
    
    // caso a opc1 seja nanometro
    if (opc1 == 'Nanômetro' && opc2 == 'Metro'){
        var metros = valor / 1e+9
        res.innerHTML = `${valor} Nanômetro são ${metros} Metros`
    }else if (opc1 == 'Nanômetro' && opc2 == "Centímetro"){
        var centimetros = valor / 1e+7
        res.innerHTML = `${valor} Nanômetro são ${centimetros} Centímetros`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Milímetro'){
        var milimetro = valor / 1e+6
        res.innerHTML = `${valor} Nanômetro são ${milimetro} Milímetros`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Micrômetro'){
        var micrometro = valor / 1000
        res.innerHTML = `${valor} Nanômetro são ${micrometro} Micrômetro`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Nanômetro'){
        var nanometro = valor 
        res.innerHTML = `${valor} Nanômetro são ${nanometro} Nanômetro`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Milha'){
        var milha = valor / 1.609e+12
        res.innerHTML = `${valor} Nanômetro são ${milha} Milhas`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Jarda'){
        var jarda = valor / 9.144e+8
        res.innerHTML = `${valor} Nanômetro são ${jarda} Jardas`
    }else if (opc1 =='Nanômetro' && opc2 == 'Pé'){
        var pe = valor / 3.048e+8
        res.innerHTML = `${valor} Nanômetro são ${pe} Pés`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Polegada'){
        var polegada = valor / 2.54e+7
        res.innerHTML = `${valor} Nanômetro são ${polegada} Polegadas` 
    }else if (opc1 =='Nanômetro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 1.852e+12
        res.innerHTML = `${valor} Nanômetro são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Decímetro') {
        var decimetro = valor / 1e+8
        res.innerHTML = `${valor} Nanômetro são ${decimetro} Decímetros`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Decâmetro'){
        var decametro = valor / 1e+10
        res.innerHTML = `${valor} Nanômetro são ${decametro} Decametros`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Hectômetro'){
        var hectometro = valor / 1e+11
        res.innerHTML = `${valor} Nanômetro são ${hectometro} Hectômetros`
    }else if (opc1 == 'Nanômetro' && opc2 == 'Quilômetro'){
        var quilometro = valor / 1e+12
        res.innerHTML = `${valor} Nanômetro são ${quilometro} Quilômetros`
    }
    //caso a opc1 seja milha
    if (opc1 == 'Milha' && opc2 == 'Metro'){
        var metros = valor * 1609
        res.innerHTML = `${valor} Milha são ${metros} Metros`
    }else if (opc1 == 'Milha' && opc2 == "Centímetro"){
        var centimetros = valor * 160934
        res.innerHTML = `${valor} Milha são ${centimetros} Centímetros`
    }else if (opc1 == 'Milha' && opc2 == 'Milímetro'){
        var milimetro = valor * 1.609e+6
        res.innerHTML = `${valor} Milha são ${milimetro} Milímetros`
    }else if (opc1 == 'Milha' && opc2 == 'Micrômetro'){
        var micrometro = valor * 1.609e+9
        res.innerHTML = `${valor} Milha são ${micrometro} Micrômetro`
    }else if (opc1 == 'Milha' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1.609e+12
        res.innerHTML = `${valor} Milha são ${nanometro} Nanômetro`
    }else if (opc1 == 'Milha' && opc2 == 'Milha'){
        var milha = valor 
        res.innerHTML = `${valor} Milha são ${milha} Milhas`
    }else if (opc1 == 'Milha' && opc2 == 'Jarda'){
        var jarda = valor * 1760
        res.innerHTML = `${valor} Milha são ${jarda} Jardas`
    }else if (opc1 =='Milha' && opc2 == 'Pé'){
        var pe = valor * 5280
        res.innerHTML = `${valor} Milha são ${pe} Pés`
    }else if (opc1 == 'Milha' && opc2 == 'Polegada'){
        var polegada = valor * 63360
        res.innerHTML = `${valor} Milha são ${polegada} Polegadas` 
    }else if (opc1 =='Milha' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 1.151
        res.innerHTML = `${valor} Milha são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Milha' && opc2 == 'Decímetro') {
        var decimetro = valor * 16093
        res.innerHTML = `${valor} Milhasão ${decimetro} Decímetros`
    }else if (opc1 == 'Milha' && opc2 == 'Decâmetro'){
        var decametro = valor * 161
        res.innerHTML = `${valor} Milha são ${decametro} Decametros`
    }else if (opc1 ==  'Milha' && opc2 == 'Hectômetro'){
        var hectometro = valor * 16.093 
        res.innerHTML = `${valor} Milha são ${hectometro} Hectômetros`
    }else if (opc1 == 'Milha' && opc2 == 'Quilômetro'){
        var quilometro = valor * 1.609
        res.innerHTML = `${valor} Milha são ${quilometro} Quilômetros`
    }
    //caso a opc1 seja jarda
    if (opc1 == 'Jarda' && opc2 == 'Metro'){
        var metros = valor / 1.094
        res.innerHTML = `${valor} Jarda são ${metros} Metros`
    }else if (opc1 == 'Jarda' && opc2 == "Centímetro"){
        var centimetros = valor * 91.44
        res.innerHTML = `${valor} Jarda são ${centimetros} Centímetros`
    }else if (opc1 == 'Jarda' && opc2 == 'Milímetro'){
        var milimetro = valor * 914
        res.innerHTML = `${valor} Jarda são ${milimetro} Milímetros`
    }else if (opc1 == 'Jarda' && opc2 == 'Micrômetro'){
        var micrometro = valor * 914400
        res.innerHTML = `${valor} Jarda são ${micrometro} Micrômetro`
    }else if (opc1 == 'Jarda' && opc2 == 'Nanômetro'){
        var nanometro = valor * 9.144e+8
        res.innerHTML = `${valor} Jarda são ${nanometro} Nanômetro`
    }else if (opc1 == 'Jarda' && opc2 == 'Milha'){
        var milha = valor / 1760
        res.innerHTML = `${valor} Jarda são ${milha} Milhas`
    }else if (opc1 == 'Jarda' && opc2 == 'Jarda'){
        var jarda = valor 
        res.innerHTML = `${valor} Jarda são ${jarda} Jardas`
    }else if (opc1 =='Jarda' && opc2 == 'Pé'){
        var pe = valor * 3
        res.innerHTML = `${valor} Jarda são ${pe} Pés`
    }else if (opc1 == 'Jarda' && opc2 == 'Polegada'){
        var polegada = valor * 36
        res.innerHTML = `${valor} Jarda são ${polegada} Polegadas` 
    }else if (opc1 == 'Jarda' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 2025
        res.innerHTML = `${valor} Jarda são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Jarda' && opc2 == 'Decímetro') {
        var decimetro = valor * 9.144
        res.innerHTML = `${valor} Jarda são ${decimetro} Decímetros`
    }else if (opc1 == 'Jarda' && opc2 == 'Decâmetro'){
        var decametro = valor / 10.936
        res.innerHTML = `${valor} Jarda são ${decametro} Decametros`
    }else if (opc1 ==  'Jarda' && opc2 == 'Hectômetro'){
        var hectometro = valor / 109
        res.innerHTML = `${valor} Jarda são ${hectometro} Hectômetros`
    }else if (opc1 == 'Jarda' && opc2 == 'Quilômetro'){
        var quilometro = valor / 1094
        res.innerHTML = `${valor} Jarda são ${quilometro} Quilômetros`
    }
    //caso a opc1 seja pe
    if (opc1 == 'Pé' && opc2 == 'Metro'){
        var metros = valor / 3.281
        res.innerHTML = `${valor} Pés são ${metros} Metros`
    }else if (opc1 == 'Pé' && opc2 == "Centímetro"){
        var centimetros = valor * 30.48
        res.innerHTML = `${valor}  Pés são ${centimetros} Centímetros`
    }else if (opc1 == 'Pé' && opc2 == 'Milímetro'){
        var milimetro = valor * 305
        res.innerHTML = `${valor}  Pés são ${milimetro} Milímetros`
    }else if (opc1 == 'Pé' && opc2 == 'Micrômetro'){
        var micrometro = valor * 304800
        res.innerHTML = `${valor}  Pés são ${micrometro} Micrômetro`
    }else if (opc1 == 'Pé' && opc2 == 'Nanômetro'){
        var nanometro = valor * 3.048e+8
        res.innerHTML = `${valor} Pés são ${nanometro} Nanômetro`
    }else if (opc1 == 'Pé' && opc2 == 'Milha'){
        var milha = valor / 5280
        res.innerHTML = `${valor}  Pés são ${milha} Milhas`
    }else if (opc1 == 'Pé' && opc2 == 'Jarda'){
        var jarda = valor / 3
        res.innerHTML = `${valor}  Pés são ${jarda} Jardas`
    }else if (opc1 == 'Pé' && opc2 == 'Pé'){
        var pe = valor 
        res.innerHTML = `${valor}  Pés são ${pe} Pés`
    }else if (opc1 == 'Pé' && opc2 == 'Polegada'){
        var polegada = valor * 12
        res.innerHTML = `${valor}  Pés são ${polegada} Polegadas` 
    }else if (opc1 == 'Pé' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 6076
        res.innerHTML = `${valor}  Pés são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Pé' && opc2 == 'Decímetro') {
        var decimetro = valor * 3.048
        res.innerHTML = `${valor} Pés são ${decimetro} Decímetros`
    }else if (opc1 == 'Pé' && opc2 == 'Decâmetro'){
        var decametro = valor / 32.808
        res.innerHTML = `${valor}  Pés são ${decametro} Decametros`
    }else if (opc1 ==  'Pé' && opc2 == 'Hectômetro'){
        var hectometro = valor / 328
        res.innerHTML = `${valor}  Pés são ${hectometro} Hectômetros`
    }else if (opc1 == 'Pé' && opc2 == 'Quilômetro'){
        var quilometro = valor / 3281
        res.innerHTML = `${valor}  Pés são ${quilometro} Quilômetros`
    }
    
    
    //caso a opc1 seja polegada
    if (opc1 == 'Polegada' && opc2 == 'Metro'){
        var metros = valor / 39.37
        res.innerHTML = `${valor} Polegadas são ${metros} Metros`
    }else if (opc1 == 'Polegada' && opc2 == "Centímetro"){
        var centimetros = valor * 2.54
        res.innerHTML = `${valor} Polegadas são ${centimetros} Centímetros`
    }else if (opc1 == 'Polegada' && opc2 == 'Milímetro'){
        var milimetro = valor * 25.4
        res.innerHTML = `${valor} Polegadas são ${milimetro} Milímetros`
    }else if (opc1 == 'Polegada' && opc2 == 'Micrômetro'){
        var micrometro = valor * 25400
        res.innerHTML = `${valor} Polegadas são ${micrometro} Micrômetro`
    }else if (opc1 == 'Polegada' && opc2 == 'Nanômetro'){
        var nanometro = valor * 2.54e+7
        res.innerHTML = `${valor} Polegadas são ${nanometro} Nanômetro`
    }else if (opc1 == 'Polegada' && opc2 == 'Milha'){
        var milha = valor / 63360
        res.innerHTML = `${valor} Polegadas são ${milha} Milhas`
    }else if (opc1 == 'Polegada' && opc2 == 'Jarda'){
        var jarda = valor / 36
        res.innerHTML = `${valor} Polegadas são ${jarda} Jardas`
    }else if (opc1 == 'Polegada' && opc2 == 'Pé'){
        var pe = valor / 3.048e+8
        res.innerHTML = `${valor} Polegadas são ${pe} Pés`
    }else if (opc1 == 'Polegada' && opc2 == 'Polegada'){
        var polegada = valor 
        res.innerHTML = `${valor} Polegadas são ${polegada} Polegadas` 
    }else if (opc1 == 'Polegada' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 72913
        res.innerHTML = `${valor} Polegadas são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Polegada' && opc2 == 'Decímetro') {
        var decimetro = valor / 3.937
        res.innerHTML = `${valor} Polegadas são ${decimetro} Decímetros`
    }else if (opc1 == 'Polegada' && opc2 == 'Decâmetro'){
        var decametro = valor / 394
        res.innerHTML = `${valor} Polegadas são ${decametro} Decametros`
    }else if (opc1 ==  'Polegada' && opc2 == 'Hectômetro'){
        var hectometro = valor / 3937
        res.innerHTML = `${valor} Polegadas são ${hectometro} Hectômetros`
    }else if (opc1 == 'Polegada' && opc2 == 'Quilômetro'){
        var quilometro = valor / 39370
        res.innerHTML = `${valor} Polegadas são ${quilometro} Quilômetros`
    }
    //caso a opc1 seja milha naltica
    if (opc1 == 'Milha Naltica' && opc2 == 'Metro'){
        var metros = valor * 1852
        res.innerHTML = `${valor} Milha Naltica são ${metros} Metros`
    }else if (opc1 == 'Milha Naltica' && opc2 == "Centímetro"){
        var centimetros = valor * 185200
        res.innerHTML = `${valor} Milha Naltica são ${centimetros} Centímetros`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Milímetro'){
        var milimetro = valor * 1.852e+6
        res.innerHTML = `${valor} Milha Naltica são ${milimetro} Milímetros`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Micrômetro'){
        var micrometro = valor * 1.852e+9
        res.innerHTML = `${valor} Milha Naltica são ${micrometro} Micrômetro`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1.852e+12
        res.innerHTML = `${valor} Milha Naltica são ${nanometro} Nanômetro`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Milha'){
        var milha = valor * 1.151
        res.innerHTML = `${valor} Milha Naltica são ${milha} Milhas`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Jarda'){
        var jarda = valor * 2025
        res.innerHTML = `${valor} Milha Naltica são ${jarda} Jardas`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Pé'){
        var pe = valor * 6076
        res.innerHTML = `${valor} Milha Naltica são ${pe} Pés`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Polegada'){
        var polegada = valor * 72913
        res.innerHTML = `${valor} Milha Naltica são ${polegada} Polegadas` 
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Milha Naltica'){
        var milhanal = valor 
        res.innerHTML = `${valor} Milha Naltica são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Decímetro') {
        var decimetro = valor * 18520
        res.innerHTML = `${valor} Milha Naltica são ${decimetro} Decímetros`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Decâmetro'){
        var decametro = valor * 185
        res.innerHTML = `${valor} Milha Naltica são ${decametro} Decametros`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Hectômetro'){
        var hectometro = valor * 18.52
        res.innerHTML = `${valor} Milha Naltica são ${hectometro} Hectômetros`
    }else if (opc1 == 'Milha Naltica' && opc2 == 'Quilômetro'){
        var quilometro = valor * 1.852
        res.innerHTML = `${valor} Milha Nalticas são ${quilometro} Quilômetros`
    }
    //caso a opc1 seja decimetro
    if (opc1 == 'Decímetro' && opc2 == 'Metro'){
        var metros = valor / 10
        res.innerHTML = `${valor} Decímetro são ${metros} Metros`
    }else if (opc1 == 'Decímetro' && opc2 == "Centímetro"){
        var centimetros = valor * 10
        res.innerHTML = `${valor} Decímetro são ${centimetros} Centímetros`
    }else if (opc1 == 'Decímetro' && opc2 == 'Milímetro'){
        var milimetro = valor * 100
        res.innerHTML = `${valor} Decímetro são ${milimetro} Milímetros`
    }else if (opc1 == 'Decímetro' && opc2 == 'Micrômetro'){
        var micrometro = valor * 100000
        res.innerHTML = `${valor} Decímetro são ${micrometro} Micrômetro`
    }else if (opc1 == 'Decímetro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1e+8
        res.innerHTML = `${valor} Decímetro são ${nanometro} Nanômetro`
    }else if (opc1 == 'Decímetro' && opc2 == 'Milha'){
        var milha = valor / 16093
        res.innerHTML = `${valor} Decímetro são ${milha} Milhas`
    }else if (opc1 == 'Decímetro' && opc2 == 'Jarda'){
        var jarda = valor / 9.144
        res.innerHTML = `${valor} Decímetro são ${jarda} Jardas`
    }else if (opc1 == 'Decímetro' && opc2 == 'Pé'){
        var pe = valor / 3.048
        res.innerHTML = `${valor} Decímetro são ${pe} Pés`
    }else if (opc1 == 'Decímetro' && opc2 == 'Polegada'){
        var polegada = valor * 3.937
        res.innerHTML = `${valor} Decímetro são ${polegada} Polegadas` 
    }else if (opc1 == 'Decímetro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 18520
        res.innerHTML = `${valor} Decímetro são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Decímetro' && opc2 == 'Decímetro') {
        var decimetro = valor 
        res.innerHTML = `${valor} Decímetro são ${decimetro} Decímetros`
    }else if (opc1 == 'Decímetro' && opc2 == 'Decâmetro'){
        var decametro = valor / 100
        res.innerHTML = `${valor} Decímetro são ${decametro} Decametros`
    }else if (opc1 == 'Decímetro' && opc2 == 'Hectômetro'){
        var hectometro = valor / 1000
        res.innerHTML = `${valor} Decímetro são ${hectometro} Hectômetros`
    }else if (opc1 == 'Decímetro' && opc2 == 'Quilômetro'){
        var quilometro = valor / 10000
        res.innerHTML = `${valor} Decímetro são ${quilometro} Quilômetros`
    }
    //caso a opc1 seja decametro
    if (opc1 == 'Decâmetro' && opc2 == 'Metro'){
        var metros = valor * 10
        res.innerHTML = `${valor} Decâmetro são ${metros} Metros`
    }else if (opc1 == 'Decâmetro' && opc2 == "Centímetro"){
        var centimetros = valor * 1000
        res.innerHTML = `${valor} Decâmetro são ${centimetros} Centímetros`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Milímetro'){
        var milimetro = valor * 10000
        res.innerHTML = `${valor} Decâmetro são ${milimetro} Milímetros`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Micrômetro'){
        var micrometro = valor * 1e+7
        res.innerHTML = `${valor} Decâmetro são ${micrometro} Micrômetro`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Nanômetro'){
        var nanometro = valor * 1e+10
        res.innerHTML = `${valor} Decâmetro são ${nanometro} Nanômetro`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Milha'){
        var milha = valor / 161
        res.innerHTML = `${valor} Decâmetro são ${milha} Milhas`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Jarda'){
        var jarda = valor * 10.936
        res.innerHTML = `${valor} Decâmetro são ${jarda} Jardas`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Pé'){
        var pe = valor * 32.808
        res.innerHTML = `${valor} Decâmetro são ${pe} Pés`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Polegada'){
        var polegada = valor * 394
        res.innerHTML = `${valor} Decâmetro são ${polegada} Polegadas` 
    }else if (opc1 == 'Decâmetro' && opc2 == 'Milha Naltica'){
        var milhanal = valor / 185
        res.innerHTML = `${valor} Decâmetro são ${milhanal} Milhas Naltica`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Decímetro') {
        var decimetro = valor / 1e+8
        res.innerHTML = `${valor} Decâmetro são ${decimetro} Decímetros`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Decâmetro'){
        var decametro = valor 
        res.innerHTML = `${valor} Decâmetro são ${decametro} Decametros`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Hectômetro'){
        var hectometro = valor / 10
        res.innerHTML = `${valor} Decâmetro são ${hectometro} Hectômetros`
    }else if (opc1 == 'Decâmetro' && opc2 == 'Quilômetro'){
        var quilometro = valor / 100
        res.innerHTML = `${valor} Decâmetro são ${quilometro} Quilômetros`
    }
   
    
    
    
    
    
    
    
}
