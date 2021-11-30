import Cards from "../Cards"
export default function Body({imgs, score, scrambleGame}){
    return(
        <main>
            <section id='game-score'>Score: {score.score}<br/> High Score: {score.highScore}</section>
            <Cards imgs={imgs} scrambleGame={scrambleGame} />
        </main>
    )
}