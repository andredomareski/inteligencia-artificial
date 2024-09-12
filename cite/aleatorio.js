const nomes = ["Andre", "joao", "Juliana"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()*lista.length);   
    return lista [posicao];
 }

 export const nome = aleatorio(André, joão, juliano)