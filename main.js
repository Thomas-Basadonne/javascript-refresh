//Hello Word nella console :)
console.log("Hello World!");
//Alert pop up
// alert("Ciao Amico");

// ! Variabili
// dichiarare una variabile, con ES6 usa let!
let myName = "Thomas";
console.log(myName);

//regole dichiarazione
//Non può essere una kayword reserved ad esempio let, if, else
//Devono essere coerenti e con un significato utile, fai capire a che servono!
// Non possono iniziare con un numero es (1name)
// Non possono avere spazi, utilizza la camelNotation
// Le variabili sono case sensitive, stai attento alle maiuscole!
// Se devi dichiarare più variabili fallo ognuna su una riga diversa

// ! Costanti
// Una variabile puo essere modificata
let variableRate = 0.3;
variableRate = 1;
console.log("Valore variabile " + variableRate);

// Non sempre vogliamo che ciò accada per questo usiamo le costanti
const constantRate = 0.3;
// constantRate = 1; => questa linea da errore perchè non si puo cambiare una costante!
console.log("Valore costante " + constantRate);
// Quindi se un valore non deve essere mai modificato usa const altrimenti usa let

// ? quali sono i tipi di valori che possiamo assegnare a una variabile?
// ! Primitive Types
let stringa = "Pippo"; //String Literal
let numero = 23; // Number Literal
let booleano = true; //Boolean Literal => può essere true o false
let indefinito; // Se non definiamo il valore è undefined in automatico
let nullo = null; // Usiamo null in situazioni in cui vogliamo esplicitamente 'pulire' il valore di una variabile

// ! Reference Types
// Sono strutture più complesse e dinamiche rispetto ai tipi primitivi.
let array = [1, 2, 3]; // Array
let oggetto = { chiave: "valore", numero: 42 }; // Object
let funzione = function () {
  return "Sono una funzione!";
}; // Function
let data = new Date(); // Date object, per lavorare con date e orari
let regExp = /pattern/; // Regular Expression, per lavorare con pattern di stringhe
let mappa = new Map(); // Map, struttura dati chiave-valore
let insieme = new Set(); // Set, una collezione di valori unici

// ! Dynamic Typing
// JavaScript è un linguaggio dinamico e quindi il tipo di una variabile può cambiare in runtime
// usa => typeof per capire il tipo
// esempio:
let esempioType = "stringa";
typeof esempioType; //=> string
esempioType = 1; // modifica del valore
typeof esempioType; //=> number

// ! Objects
// Gli oggetti sono strutture dati flessibili che consentono di organizzare e memorizzare dati mediante coppie chiave-valore.
let persona = {
  nome: "Thomas",
  age: 22,
  passione: "code",
};
console.log(persona);
// Per accedere alle proprietà di un oggetto possiamo usare 2 metodi
// 1) Dot Notation (scelta di default)
persona.nome = "Pippo";
console.log(persona.nome);
// 2) Bracket Notation
persona["passione"] = "Ps5";
console.log(persona["passione"]);

// ! Arrays
// Gli array sono strutture dati che contengono una sequenza ordinata di elementi, accessibili tramite indici numerici.
let selectedColors = ["red", "blue"];
console.log(selectedColors);
// Aggiungi un elemento
selectedColors[2] = "green";
console.log("modificato: " + selectedColors);
// Utilizza indici numerici per accedere a un elemento preciso
console.log(selectedColors[0]);
// In JS puoi mettere types di dati differenti nello stesso array
let tuttiInsieme = ["string", 1];
// Ci sono moltissime proprietà che possono essere applicate agli arrays tramite dot notation ad esemprio length(fornisce la lunghezza dell'array)
console.log(tuttiInsieme.length);

// ! Functions
// Le funzioni sono blocchi di codice riutilizzabili che possono essere definiti una volta e chiamati in seguito per eseguire specifiche azioni o calcoli.
// All'interno delle tonde possiamo passare dei parametri e a causa dello scope il parametro esiste solo all'interno della funzione
function greet(name, lastname) {
  console.log("Ciao " + name + " " + lastname + "! Sono la funzione saluto!");
}
// Passo l'argomento del parametro quando chiamo la funzione
greet("Thomas", "Basadonne");
greet("Marco", "Sabbatini");

// ! Types of Function

// Performig a task
function greet(name, lastname) {
  console.log("Ciao " + name + " " + lastname + "! Sono la funzione Task!");
}
// Calculate a value
greet("Thomas", "Basadonne");
