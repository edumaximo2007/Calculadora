function calcular(tipo, valor){
    if(tipo === 'acao') {
        //limpa o campo(idresultado)
        if(valor === 'c'){
            document.getElementById('resultado').value= '';
        }

        if(valor === 'ce'){
            const dado = eval(document.getElementById('resultado').value);
            document.getElementById('resultado').value = dado;
            document.getElementById('resultado').value= '';
        }
        if(valor === 'apagar'){ 
            document.getElementById('resultado').value= '';
            
        }
        
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '%' || valor === '.') {
            document.getElementById('resultado').value += valor;
        }

        if(valor === '**') {
            const valor = document.getElementById('resultado').value;
            document.getElementById('resultado').value = valor * valor;
        }

        if(valor === '²√x') {
            const raiz = document.getElementById('resultado').value;
            const resRaiz = Math.sqrt(raiz);
            document.getElementById('resultado').value = resRaiz;
        }

        if(valor === '+/-') {
            const maisOuMenos = document.getElementById('resultado').value;
            const resMaisOuMenos = Math.round(maisOuMenos);
            document.getElementById('resultado').value = resMaisOuMenos;
        }

        if(valor === '='){
            const campo = eval(document.getElementById('resultado').value);
            document.getElementById('resultado').value = campo;
        }
    } else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor;
    }
}

