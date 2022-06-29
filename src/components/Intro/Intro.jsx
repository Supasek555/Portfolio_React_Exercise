import "./Intro.css"
import Hansome from "../../img/will.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">James Lhueng</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Cookery Master</div>
                            <div className="i-title-item">Bible Student</div>
                            <div className="i-title-item">Cambodia Invader</div>
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
