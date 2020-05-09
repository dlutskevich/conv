const quest1 = (prompt('В какие единицы перевести?(bit, bait, kbit, kbait)'))
const quest2 = parseInt(prompt('Ваше число?(в битах)'));

function converter(quest1, quest2) {
  if (quest1 === 'bit') {
    return `Это ${quest2 / 1} бит`
  }
  if (quest1 === 'bait') {
    return `Это ${quest2 / 8} байт`
  }
  if (quest1 === 'kbit') {
    return `Это ${quest2 / 1024} килобит`
  }
  if (quest1 === 'kbait') {
    return `Это ${quest2 / 8192} килобайт`
  }
}

let result = converter(quest1, quest2)
alert(result)


























// switch (quest1) {
//   case 'bit': {
//     alert(`Это ${quest2} бит`)
//   }
//     break
//   case 'bait': {
//     alert(`Это ${quest2 / 8} байт`)
//   }
//     break
//   case 'kbit': {
//     alert(`Это ${quest2 / 1024} килобит`)
//   }
//     break
//   case 'kbait': {
//     alert(`Это ${quest2 / 8192} килобайт`)
//   }
//     break
//   default: {
//     alert('Такое значение не завезли!')
//   }
// }


// switch (quest1) {
//   case 'bit': {
//     alert(`Это ${quest2} бит`)
//   }
//     break
//   case 'bait': {
//     alert(`Это ${quest2 / 8} байт`)
//   }
//     break
//   case 'kbit': {
//     alert(`Это ${quest2 / 1024} килобит`)
//   }
//     break
//   case 'kbait': {
//     alert(`Это ${quest2 / 8192} килобайт`)
//   }
//     break
//   default: {
//     alert('Такое значение не завезли!')
//   }
// }

// if (quest1 === 'bit') {
//   alert(`Это ${quest2} бит`)
// }
// if (quest1 === 'bait') {
//   alert(`Это ${quest2 / 8} байт`)
// }
// if (quest1 === 'kbit') {
//   alert(`Это ${quest2 / 1024} килобит`)
// }
// if (quest1 === 'kbait') {
//   alert(`Это ${quest2 / 8192} килобайт`)
// }






// }


// alert(`Это ${quest} бит, 
// ${quest / 8} байт, 
// ${quest / 1024} кбит, 
// ${quest / 8192} килобайт, 
// ${quest / 8388608} мегабайт, 
// ${quest / 8589934592} гигабайт и 
// ${quest / 8796093022208} терабайт`);