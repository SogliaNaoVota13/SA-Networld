// Referências aos elementos da página
const tamanhoInput = document.getElementById('tamanho');
const res = document.getElementById('res');
const res2 = document.getElementById('res2');
const res3 = document.getElementById('res3');

// Array principal
let array = [];

// Função para gerar números aleatórios
function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para gerar números
function gerarNumeros() {
    const tamanho = parseInt(tamanhoInput.value);

    if (!tamanho || tamanho < 1) {
        res.innerHTML = `<br> Por favor, insira um tamanho válido.`;
        res2.innerHTML = '';
        res3.innerHTML = '';
        return;
    }

    array = [];
    for (let i = 0; i < tamanho; i++) {
        array.push(random(tamanho, 1));
    }

    res.innerHTML = `<br> Números Gerados: [ ${array.join(', ')} ]`;
    res2.innerHTML = '';
    res3.innerHTML = '';
}

// Função para ordenar o array
function ordenarArray() {
    if (array.length === 0) {
        res2.innerHTML = `<br> Gere um array primeiro!`;
        return;
    }

    array.sort((a, b) => a - b); // Ordena em ordem crescente
    res2.innerHTML = `<br> Array Ordenado (Crescente): [ ${array.join(', ')} ]`;
}

// Função para inverter o array
function inverterArray() {
    if (array.length === 0) {
        res3.innerHTML = `<br> Gere um array primeiro!`;
        return;
    }

    array.reverse(); // Inverte o array
    res3.innerHTML = `<br> Array Invertido (Decrescente): [ ${array.join(', ')} ]`;
}
