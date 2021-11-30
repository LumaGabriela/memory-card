/* eslint-disable no-unused-vars */
import './App.css'
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './main/components/Header'
import Body from './main/components/Body'
import img0 from './main/imgs/icons8-avocado-40.png'
import img1 from './main/imgs/icons8-banana-40.png'
import img2 from './main/imgs/icons8-banana-split-40.png'
import img3 from './main/imgs/icons8-cheesecake-40.png'
import img4 from './main/imgs/icons8-chili-pepper-40.png'
import img5 from './main/imgs/icons8-chocolate-bar-40.png'
import img6 from './main/imgs/icons8-hamburger-40.png'
import img7 from './main/imgs/icons8-nut-40.png'
import img8 from './main/imgs/icons8-peanuts-40.png'
import img9 from './main/imgs/icons8-pie-40.png'
import img10 from './main/imgs/icons8-pineapple-40.png'
import img11 from './main/imgs/icons8-spaghetti-40.png'


function App() {
  const [imgs, setImgs] = useState([
    {url:img0, id: uuidv4(),title: 'avocado', clicked: false},
    {url:img1, id: uuidv4(),title: 'banana', clicked: false},
    {url:img2, id: uuidv4(),title: 'bananaSplit', clicked: false},
    {url:img3, id: uuidv4(),title: 'cheesecake', clicked: false},
    {url:img4, id: uuidv4(),title: 'chili', clicked: false},
    {url:img5, id: uuidv4(),title: 'chocolate', clicked: false},
    {url:img6, id: uuidv4(),title: 'hamburguer', clicked: false},
    {url:img7, id: uuidv4(),title: 'nut', clicked: false},
    {url:img8, id: uuidv4(),title: 'peanuts', clicked: false},
    {url:img9, id: uuidv4(),title: 'pie', clicked: false},
    {url:img10, id: uuidv4(),title: 'pineapple', clicked: false},
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
    </div>
  )
}

export default App;
