function somaDosPares(x) {
    let soma = 0;
    for (let i = 0; i <= x; i += 2) soma += i
    return soma;
}

console.log(somaDosPares(1000));