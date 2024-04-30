import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scoreboard from './components/Scoreboard.jsx'
import Card from './components/Card.jsx'

function App() {
  const key = 'ssaDerEkXfJC9VOETTvqZxHnPZzFeiRB';
  const searchTerm = 'Bojack Horseman';
  const limit = 4;
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}&limit=${limit}`
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [gifs, setGifs] = useState([]);
  const [cards, setCards] = useState([])

  function handleCardClick(id) {
    cards.map((card) => { 
      if (card.id === id) {
        card.clicked = true
        setCards(cards);
        shuffleGifs();
      }
    })
    getScore(cards);
  }

  function getScore(cards) {
      const score = cards.filter((card) => card.clicked === true).length;
      if (score === currentScore) {
          setCurrentScore(0);
          unclickAll();
      } else {
          setCurrentScore(score);
          if (score > bestScore) {
              setBestScore(score);
          }
      }
  }

  function unclickAll() {
    cards.map((card) => card.clicked = false);
    setCards(cards)
  }

  function shuffleGifs() {
    let tempGifs = gifs;
    let newGifs = [];
    let tempInd;
    while (gifs.length > 0) {
      tempInd = Math.floor(Math.random() * tempGifs.length);
      newGifs.push(tempGifs[tempInd]);
      tempGifs.splice(tempInd, 1);
    }
    setGifs(newGifs);
  }

  function addCard(card) {
    if (cards.length === 0) {
      setCards([...cards, { ...card }]);
      return
    }
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === card.id) {
        break;
      }
      if (i === cards.length - 1) {
        setCards([...cards, { ...card }])
        return
      }
    }
  }

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(response => setGifs(response.data));
  }, []);

  return (
    <div>
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <div className={'card-container'}>
        {[...gifs].map((item) => {
          addCard({ 
            id: item.id, 
            clicked: false,
          });
          return (
          <Card
              className={'card'}
              id={item.id}
              url={item.images["original"].url}
              handleClick={handleCardClick}
          />
        )})}
      </div>
    </div>
  )
}

export default App
