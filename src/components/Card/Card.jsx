import "./Card.css"

const Card = (props) => {
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt="" />
            </div>
            <div className="card-text">
                <h2>{props.name}</h2>
                <h3>{props.nickname}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card