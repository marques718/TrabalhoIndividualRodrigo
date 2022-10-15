//Supermercado do Ian
//Uso de estruturas condicionais, laços de repetição e vetores

//entradas:

let listaCompras = []

let totalvalor = 0;

//açougue
let acougue = 0;
let carne = 0;
let frango = 0;
let porco = 0;

//frios
let frios = 0;
let queijo = 0;
let presunto = 0;
let pate = 0;

//bebidas
let bebidas = 0;
let suco = 0;
let refrigerante = 0;
let cerveja = 0;

//higiene e limpeza
let higlimp = 0;
let dental = 0;
let sabonete = 0;
let detergente = 0;

//mercearia
let mercearia = 0;
let arroz = 0;
let feijao = 0;
let sal = 0;

//padaria
let padaria = 0;
let pao = 0;
let bolo = 0;
let sonho = 0;


//laço de repetição
while (true) {
    let setor = (prompt('Qual setor você deseja ir? padaria/mercearia/higiene e limpeza/bebidas/frios/açougue/sair'))

    //processamento:

    //açougue - setor

    if (setor === "açougue") {
        let acougue = ""
        while (acougue !== "voltar") {
            acougue = prompt('Você quer carne, frango, porco ou voltar?');
            if (acougue === "carne") {
                carne++;
                totalvalor = totalvalor + 20;
                listaCompras.push(acougue);
            }
            if (acougue === "frango") {
                frango++;
                totalvalor = totalvalor + 8;
                listaCompras.push(acougue);
            }
            if (acougue === "porco") {
                porco++;
                totalvalor = totalvalor + 12;
                listaCompras.push(acougue);
            }
        }
    }

    //frios - setor

    if (setor === "frios") {
        let frios = ""
        while (frios !== "voltar") {
            frios = prompt('Você quer queijo, presunto, patê ou voltar?');
            if (frios === "queijo") {
                queijo++;
                totalvalor = totalvalor + 10;
                listaCompras.push(frios);
            }
            if (frios === "presunto") {
                presunto++;
                totalvalor = totalvalor + 6;
                listaCompras.push(frios);
            }
            if (frios === "patê") {
                pate++;
                totalvalor = totalvalor + 1;
                listaCompras.push(frios);
            }
        }
    }

    //bebidas  - setor

    if (setor === "bebidas") {
        let bebidas = ""
        while (bebidas !== "voltar") {
            bebidas = prompt('Você quer suco, refrigerante, cerveja ou voltar?');
            if (bebidas === "suco") {
                suco++;
                totalvalor = totalvalor + 2;
                listaCompras.push(bebidas);
            }
            if (bebidas === "refrigerante") {
                refrigerante++;
                totalvalor = totalvalor + 4;
                listaCompras.push(bebidas);
            }
            if (bebidas === "cerveja") {
                cerveja++;
                totalvalor = totalvalor + 2;
                listaCompras.push(bebidas);
            }

        }
    }

    //higiene e limpeza - setor

    if (setor === "higiene e limpeza") {
        let higlimp = ""
        while (higlimp !== "voltar") {
            higlimp = prompt('Você quer creme dental, sabonete, detergente ou voltar?');
            if (higlimp === "creme dental") {
                dental++;
                totalvalor = totalvalor + 1;
                listaCompras.push(higlimp);
            }
            if (higlimp === "sabonete") {
                sabonete++;
                totalvalor = totalvalor + 1;
                listaCompras.push(higlimp);
            }
            if (higlimp === "detergente") {
                detergente++;
                totalvalor = totalvalor + 1;
                listaCompras.push(higlimp);
            }
        }
    }

    //mercearia - setor

    if (setor === "mercearia") {
        let mercearia = ""
        while (mercearia !== "voltar") {
            mercearia = prompt('Você quer arroz, feijão, sal ou voltar?');
            if (mercearia === "arroz") {
                arroz++;
                totalvalor = totalvalor + 2;
                listaCompras.push(mercearia);
            }
            if (mercearia === "feijão") {
                feijao++;
                totalvalor = totalvalor + 2;
                listaCompras.push(mercearia);
            }
            if (mercearia === "sal") {
                sal++;
                totalvalor = totalvalor + 2;
                listaCompras.push(mercearia);
            }
        }
    }

    //padaria - setor

    if (setor === "padaria") {
        let padaria = ""
        while (padaria !== "voltar") {
            padaria = prompt('Você quer pão, bolo, sonho ou voltar?');
            if (padaria === "pão") {
                pao++;
                totalvalor = totalvalor + 2;
                listaCompras.push(padaria);
            }
            if (padaria === "bolo") {
                bolo++;
                totalvalor = totalvalor + 6;
                listaCompras.push(padaria);
            }
            if (padaria === "sonho") {
                sonho++;
                totalvalor = totalvalor + 1;
                listaCompras.push(padaria);
            }
        }

    }

    if (setor === "sair") {
        break
    }
}

//saídas:

console.log(`O seu pedido ficou no valor de ${totalvalor} `)

console.log(`A lista de compras contém:`)
for (let i = 0; i < listaCompras.length; i++) {
    console.log(listaCompras[i])
}



