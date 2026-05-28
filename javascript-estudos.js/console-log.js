// ======================
// TREINO COM console.log()
// ======================

// Dados do usuário
let nome = "Carlos";
let idade = 22;
let cidade = "São Paulo";

// Mostre no console:
// 1. O nome do usuário
// 2. A idade do usuário
// 3. A cidade do usuário

console.log(`Nome:${nome}, idade: ${idade}, cidade: ${cidade}`);

// ======================
// OPERAÇÕES
// ======================

let numero1 = 10;
let numero2 = 5;

// Mostre no console:
// 4. A soma
// 5. A subtração
// 6. A multiplicação
// 7. A divisão

console.log(`
    Soma: ${numero1 + numero2},
    Subtarção: ${numero1 - numero2},
    Multiplicação: ${numero1 * numero2},
    Divisão: ${numero1 / numero2}`); 

// ======================
// TEMPLATE STRING
// ======================

// Mostre a seguinte frase usando template string:
//
// Olá, Carlos! Você tem 22 anos e mora em São Paulo.

console.log(`Olá, Carlos! Você tem 22 anos e mora em São Paulo.`)

// ======================
// TESTE DE CONDIÇÃO
// ======================

let saldo = 1500;

// Use if e console.log():
//
// Se saldo for maior que 1000:
// "Saldo alto"
//
// Senão:
// "Saldo baixo"

if (saldo >= 1000) {console.log ("Saldo alto");
   } else {console.log ("Saldo baixo");
   }

// ======================
// DESAFIO EXTRA
// ======================

let nota = 8; 

// Mostre no console:
//
// "Aprovado" se nota >= 7
// "Reprovado" caso contrário

if (nota >= 7) {console.log ("Aprovado");
} else {console.log ("Reprovado");
}