import "./CardList.css"
import Card from "../Card/Card"
import {profile} from "../../profile"




const CardList = () => {
    return(
        <div className="cl">
            <h1>Our Chai Crews</h1>
            <div className="cl-crew-row">
            {profile.map((item )=> (
                    <Card key={item.id} img={item.img} description={item.desc} nickname={item.aka} name={item.name}/>
                ))}
            </div>
        </div>
    )
}

export default CardList