import Cards from "../Cards"
export default function Body({imgs, score, scrambleGame}){
    return(
        <main>
            <section>Score: {score.score} High Score: {score.highScore}</section>
            <Cards imgs={imgs} scrambleGame={scrambleGame} />
        </main>
    )
}