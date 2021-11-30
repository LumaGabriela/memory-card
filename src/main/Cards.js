export default function Cards({imgs, scrambleGame}){
    const cards = imgs.map((item, i) => (
                <div className='card-container' key={item.id} data-key={item.id} onClick={scrambleGame}>
                    <img className='card-img' data-key={item.id} alt='card' src={item.url}/>
                    <p className='img-title' data-key={item.id}>{item.title}</p>
                </div>
            ))
    return(
        <div className='cards-div'>
            { cards }
        </div>
    )
}

