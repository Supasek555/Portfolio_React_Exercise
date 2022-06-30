import "./ProductList.css"
import Product from "../Product/Product"
import {products} from "../../data"


const ProductList = () => {
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                   Create & Inspire. James Lhueng
                </h1>  

                 <p className="pl-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex nemo, quasi explicabo tenetur exercitationem pariatur delectus! Ipsum sed doloribus magnam rerum itaque, dolorem officia.
                </p> 
            </div>
            <div className="pl-list">
                
                {products.map((item )=> (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
        
                
            </div>
        </div>
    )
}

export default ProductList