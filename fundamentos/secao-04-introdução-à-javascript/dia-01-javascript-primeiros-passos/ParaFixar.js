//para fixar 1
const myName = "Jaci";
const birthCity = "Rio Bonito";
let birthYear = 2030;

birthCity = "rio de janeiro";
birthYear = 1990;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

//para fixar 2

const base = 5;
const heigth = 8;
const area = base * heigth;
console.log(area);
const perimeter = 5 * 2 + 8 * 2;
console.log(perimeter);

//para fixar 3


const media = 80;
if (media >= 80) {
  console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
} else if (media < 80 && grade >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (media < 60) {
  console.log("Infelizmente, você reprovou.");
}

// para fixar 4

const currentHour = 20;
let message = '';
if (currentHour >= 22) {
  mesage = 'Não deveríamos comer nada, é hora de dormir'
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if ( currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?'
} else if ( currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço !!!'
} else if ( currentHour >= 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém-passado'
};

console.log(message);

// para fixar 5

let weekDay = 'quarta-feira'
if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >;D')
} else {
  console.log('FINALMENTE, descanso merecido UwU')
};

