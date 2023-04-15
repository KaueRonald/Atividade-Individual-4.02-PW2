import { quest1 } from "./questao01";
import { quest2 } from "./questao02";
import { quest3 } from "./questao03";
import { quest4 } from "./questao04";
import { quest5 } from "./questao05";
import { quest6 } from "./questao06";

let a = ['kaue', 'Kimberly', 'Kamilly']
let b = ['kaue', 'Kimberly', 'Kamilly']
//let b = ['a', 'b']

const array1 = ["abc", "def", "ghi"];
const array2 = ["abc", "def", "ghi"];

const frutas = ['maçã', 'banana'];
const cores = ['verde', 'azul', 'laranja'];

let cidade = {
    alcunha: "A terra que ensinou a Paraíba a ler.",
    coodenadas: {
      latitude: [6, 53, 24],
      longitude: [38, 33, 43],
    },
    nome: "Cajazeiras",
    estado: "Paraíba",
}

let restaurantes = [
    { cidade: "Cajazeiras", nome: "Burgdega" },
    { cidade: "Sousa", nome: "Dino's" },
    { cidade: "Cajazeiras", nome: "Avenida" },
];

let matriz1 = [
    ["bora", "ganhar", "Palmeiras"],
    ["Ana", "Beatriz", "Atividade"],
    ["Java", "Projeto", "Sim"]
]

let matriz2 = [
    ["nope", "céu", "Mundo"],
    ["Ana", "Beatriz", "John"],
    ["Java", "Projeto", "Sim"]
]

let result04 = quest4(matriz1, matriz2)

console.log(`Questão 1: ` + quest1({a, b})); // questão 1
console.log(`Questão 2: ` + quest2({a, b})); // questão 2
console.log(`Questão 3: ` + quest3(array1, array2)); //questão 3
console.log("Questão 4:") // questão 4
console.log(result04); // questão 4
console.log(`Questão 5: ` + quest5(cidade)); // questão 5
console.log(`Questão 6: ` + JSON.stringify(quest6(restaurantes))); // questão 6