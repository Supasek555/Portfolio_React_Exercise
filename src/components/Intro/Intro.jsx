import "./Intro.css"
import Hansome from "../../img/chai.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Are you craving for some</h2>
                    <h1 className="i-name">Chai?</h1>

                    <h2>Here, We serve</h2>
                    <div className="i-title">
                        
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Garam Chai</div>
                            <div className="i-title-item">Masala Chai</div>
                            <div className="i-title-item">Kashmiri Qahwa</div>
                            <div className="i-title-item">Elaichi Chai</div>
                            <div className="i-title-item">Hot Elaichi Milk</div>
                        </div>
                    </div>

                    <p className="i-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse sunt non distinctio vel aspernatur asperiores laudantium dolorum adipisci omnis, tempora ducimus quo necessitatibus?
                    </p>

                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Hansome} alt="" className="i-img"/>

            </div>
        </div>
    )
}

export default Intro
