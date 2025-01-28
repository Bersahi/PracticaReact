export default function Entry(props){
    
    return (
        <article className="journal-entry">
        <div className="main-image-container">
            <img 
                className="main-image"
                src={props.image.src} 
                alt={props.image.alt}
            />
        </div>

        <div className="info-container">
               <img src= {props.image}/>
            <span className="country">{props.country}</span>
            <a href={props.link}>Ver en Google Maps</a>
            <h2 className="entry-title">{props.title}</h2>
            <p className="trip-dates">{props.dates}</p>
            <p className="entry-text">{props.text}</p>

            </div>
        
    </article>
    )
}