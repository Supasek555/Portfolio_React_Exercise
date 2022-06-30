import "./Product.css"



const Product = (props) => {
    return(
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>

            </div>
            <a href={props.link} target="_blank" rel="noreferrences">
                <img src={props.img} alt="" className="p-img"/>
            </a>
        </div>
    )
 
   
}

export default Product