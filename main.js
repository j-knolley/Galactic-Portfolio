// const dealButton = document.getElementById('deal-button');
// const userName = document.getElementById('player-name')

// dealButton.addEventListener('click', () => {
//     fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=8')
//       .then(response => response.json())
//       .then(data => {
//         const player1Cards = [data.cards[0], data.cards[1]];
//         const player2Cards = [data.cards[2], data.cards[3]];
//         const player3Cards = [data.cards[4], data.cards[5]];
//         const player4Cards = [data.cards[6], data.cards[7]];
  
//         const player1Div = createPlayerDiv(player1Cards, `${userName}`);
//         const player2Div = createPlayerDiv(player2Cards, 'Ahmad');
//         const player3Div = createPlayerDiv(player3Cards, 'Rachel');
//         const player4Div = createPlayerDiv(player4Cards, 'John');
  
//         const playersDiv = document.getElementById('players');
//         playersDiv.innerHTML = '';
//         playersDiv.append(player1Div, player2Div, player3Div, player4Div);
//       })
//       .catch(error => console.error(error));
//   })
  

// function createPlayerDiv(cards, playerName) {
//   const totalValue = cards.reduce((acc, card) => acc + getCardValue(card.value), 0);
//   const cardImages = cards.map(card => `<img src="${card.image}" alt="${card.value} of ${card.suit}">`).join('');

//   const playerDiv = document.createElement('div');
//   playerDiv.classList.add('player');
//   playerDiv.innerHTML = `
//     <h2>${playerName} (${totalValue})</h2>
//     ${cardImages}
//   `;

//   return playerDiv;
// }

// function getCardValue(cardValue) {
//   switch(cardValue) {
//     case 'ACE':
//         return 11;
//     case 'KING':
//         return 10;
//     case 'QUEEN':
//         return 10;
//     case 'JACK':
//         return 10;
//     case '10':
//         return 10;
//     case '9':
//         return 9;
//     case '8':
//         return 8;
//     case '7':
//         return 7;
//     case '6':
//         return 6;
//     case '5':
//         return 5;
//     case '4':
//         return 4;
//     case '3':
//         return 3;
//     case '2':
//         return 2;
//     default:
//         return 0;
//   }
// }

// Above is good working code

const dealButton = document.getElementById('deal-button');
const userName = document.getElementById('player-name')

dealButton.addEventListener('click', () => {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=8')
      .then(response => response.json())
      .then(data => {
        const player1Cards = [data.cards[0], data.cards[1]];
        const player2Cards = [data.cards[2], data.cards[3]];
        const player3Cards = [data.cards[4], data.cards[5]];
        const player4Cards = [data.cards[6], data.cards[7]];
  
        const player1Div = createPlayerDiv(player1Cards, userName.value);
        const player2Div = createPlayerDiv(player2Cards, 'Ahmad');
        const player3Div = createPlayerDiv(player3Cards, 'Rachel');
        const player4Div = createPlayerDiv(player4Cards, 'John');
  
        const playersDiv = document.getElementById('players');
        playersDiv.innerHTML = '';
        playersDiv.append(player1Div, player2Div, player3Div, player4Div);
      })
      .catch(error => console.error(error));
  })
  

function createPlayerDiv(cards, playerName) {
  const totalValue = cards.reduce((acc, card) => acc + getCardValue(card.value), 0);
  const cardImages = cards.map(card => `<img src="${card.image}" alt="${card.value} of ${card.suit}">`).join('');

  const playerDiv = document.createElement('div');
  playerDiv.classList.add('player');
  playerDiv.innerHTML = `
    <h2>${playerName} (${totalValue})</h2>
    ${cardImages}
  `;

  return playerDiv;
}

function getCardValue(cardValue) {
  switch(cardValue) {
    case 'ACE':
        return 11;
    case 'KING':
        return 10;
    case 'QUEEN':
        return 10;
    case 'JACK':
        return 10;
    case '10':
        return 10;
    case '9':
        return 9;
    case '8':
        return 8;
    case '7':
        return 7;
    case '6':
        return 6;
    case '5':
        return 5;
    case '4':
        return 4;
    case '3':
        return 3;
    case '2':
        return 2;
    default:
        return 0;
  }
}

