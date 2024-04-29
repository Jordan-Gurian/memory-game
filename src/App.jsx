import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scoreboard from './components/Scoreboard.jsx'
import Card from './components/Card.jsx'

function App() {
  const key = 'ssaDerEkXfJC9VOETTvqZxHnPZzFeiRB';
  const searchTerm = 'Bojack Horseman';
  const limit = 2;
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}&limit=${limit}`
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [gifs, setGifs] = useState([]);
  let array = [...gifs];

  function getScore() {
      cards.filter((card, score) => {
          score += (card.clicked === true);
      })
      if (score === currentScore) {
          setCurrentScore(0);
      } else {
          setCurrentScore(score);
          if (score > bestScore) {
              setBestScore(score);
          }
      }
  }

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(response => setGifs(response.data));
  }, [apiUrl]);

  return (
    <div>
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
      />
      {array.map((item) => {
        return (
        <Card
          url={item.images["original"].url}
        />
      )})}
    </div>
  )
}

export default App
