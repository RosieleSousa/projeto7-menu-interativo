let option;
do {
  let option = prompt(`escolha uma opção:
  1. Opção 1;
  2. Opção 2;
  3. Opção 3;
  4. opção 4;
  5. sair.`)

  switch (option){
     case '1': console.log('você escolheu a opção 1.');
    break 
      case '2': console.log('você escolheu a opção 2.');
    break 
      case'3': console.log('você escolheu a opção 3.');
    break 
      case'4': console.log('Você escolheu a opção 4.');
    break 
      case'5': console.log('Você escolheu sair. Encerrando programa.');
    break 
    default: console.log('Opção inválida. Tente novamente.');
 }
} while (option > '5')