/* eslint-disable no-unused-vars */
import './App.css'
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './main/components/Header'
import Body from './main/components/Body'
import Footer from './main/components/Footer'
import img0 from './main/imgs/uvas.png'
import img1 from './main/imgs/banana.png'
import img2 from './main/imgs/banana-split.png'
import img3 from './main/imgs/cheesecake.png'
import img4 from './main/imgs/tomate.png'
import img5 from './main/imgs/barra-de-chocolate.png'
import img6 from './main/imgs/hamburguer.png'
import img7 from './main/imgs/bubble-tea.png'
import img8 from './main/imgs/walnut.png'
import img9 from './main/imgs/pizza.png'
import img10 from './main/imgs/avocado.png'
import img11 from './main/imgs/spaghetti.png'


function App() {
  const [imgs, setImgs] = useState([
    {url:img0, id: uuidv4(),title: 'Grapes', clicked: false},
    {url:img1, id: uuidv4(),title: 'Banana', clicked: false},
    {url:img2, id: uuidv4(),title: 'BananaSplit', clicked: false},
    {url:img3, id: uuidv4(),title: 'Cheesecake', clicked: false},
    {url:img4, id: uuidv4(),title: 'Tomato', clicked: false},
    {url:img5, id: uuidv4(),title: 'Chocolate', clicked: false},
    {url:img6, id: uuidv4(),title: 'Hamburguer', clicked: false},
    {url:img7, id: uuidv4(),title: 'Boba Tea', clicked: false},
    {url:img8, id: uuidv4(),title: 'Walnut', clicked: false},
    {url:img9, id: uuidv4(),title: 'Pizza', clicked: false},
    {url:img10, id: uuidv4(),title: 'Avocado', clicked: false},
    {url:img11, id: uuidv4(),title: 'spaghetti', clicked: false}
  ])

  const[score, setScore] = useState({score:0, highScore: 0})
  
  const scrambleGame = (e) => {
    let currentScore = JSON.parse(JSON.stringify(score))
    let cardImg = e.target.dataset.key
    let oldImgs = JSON.parse(JSON.stringify(imgs))
    let index = oldImgs.findIndex((currentImg) => currentImg.id === cardImg)
    if(!oldImgs[index].clicked) {
      oldImgs[index].clicked = true      
      currentScore.score += 1 
    }
    else {
      if(currentScore.score > currentScore.highScore) currentScore.highScore = currentScore.score
      currentScore.score = 0
      oldImgs.forEach((item) => item.clicked = false)
    }
    oldImgs.sort( () => Math.random() > .5 ? 1 : -1)
    setImgs([...oldImgs])
    setScore(currentScore)
    console.log(imgs)    
  }

  useEffect (() => {    
    
    console.log(score)
    
  },[imgs])

  return (
    <div className="App">
      < Header/>  
      < Body imgs={imgs} score={score} scrambleGame={scrambleGame} />
      <Footer />
    </div>
  )
}

export default App;
