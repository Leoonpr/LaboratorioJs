//1-
function reverse(s) {
  return s.split("").reverse().join("");
}

//2-

function boldVowel(string) {
  string = string
    .replace(/a/gi, "<b>a</b>")
    .replace(/e/gi, "<b>e</b>")
    .replace(/i/gi, "<b>i</b>")
    .replace(/o/gi, "<b>o</b>")
    .replace(/u/gi, "<b>u</b>");
  return string;
}

//3-

function a(string) {
  const chars = {};
  const arr = string.split(" ");

  for (let word of arr) {
    if (!chars[word]) {
      chars[word] = 1;
    } else {
      chars[word]++;
    }
  }
  return chars;
}

//4-
function mostUsedStr(str) {
  var max = 0,
    maxChar = "";
  str.split(" ").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
}

//6
function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
  var d = new Date(),
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),
    ano_aniversario = +ano_aniversario,
    mes_aniversario = +mes_aniversario,
    dia_aniversario = +dia_aniversario,
    quantos_anos = ano_atual - ano_aniversario;

  if (
    mes_atual < mes_aniversario ||
    (mes_atual == mes_aniversario && dia_atual < dia_aniversario)
  ) {
    quantos_anos--;
  }

  return quantos_anos < 0 ? 0 : quantos_anos;
}

//7
let meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let dias = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

function formatarDataPorExtenso(str) {
  let partes = str.split("/").map(Number);
  let data = new Date("20" + partes[2], partes[1] - 1, partes[0]);
  let diaSemana = dias[data.getDay() % 7];
  let mes = meses[data.getMonth()];
  return [
    data.getDate(),
    "de",
    mes.toLowerCase(),
    "(" + diaSemana.slice(0, 3) + ")",
  ].join(" ");
}

let data = "18/05/17";
console.log(formatarDataPorExtenso(data));

//8
