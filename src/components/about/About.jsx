import "./About.css"
import che from "../../img/mucho.jpg"
import burrito from "../../img/b2.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={che} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">
                    About Me
                </h1>

                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ea quae porro vel exercitationem velit.
                </p>

                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel incidunt ex reprehenderit delectus harum ipsam expedita dicta fuga, ratione in blanditiis illum laborum assumenda repellendus? Molestias voluptas, facere excepturi iste officiis quae aut quidem sapiente obcaecati.
                </p>

                <div className="a-award">
                    <img src={burrito} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Burrito</h4>
                        <p className="a-award-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel soluta vitae asperiores, illo molestiae, qui eum facere omnis eaque molestias consequatur, suscipit distinctio.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About