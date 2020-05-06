const quest1 = (prompt('В какие единицы перевести?(bit, bait, kbit, kbait)'))
const quest2 = parseInt(prompt('Ваше число?(в битах)'));

if (quest1 === 'bit') {
  alert(`Это ${quest2} бит`)
}
if (quest1 === 'bait') {
  alert(`Это ${quest2 / 8} байт`)
}
if (quest1 === 'kbit') {
  alert(`Это ${quest2 / 1024} килобит`)
}
if (quest1 === 'kbait') {
  alert(`Это ${quest2 / 8192} килобайт`)
}






// switch () {
//   case quest1: (alert(`Это ${quest2} бит`))

// }


// alert(`Это ${quest} бит, 
// ${quest / 8} байт, 
// ${quest / 1024} кбит, 
// ${quest / 8192} килобайт, 
// ${quest / 8388608} мегабайт, 
// ${quest / 8589934592} гигабайт и 
// ${quest / 8796093022208} терабайт`);