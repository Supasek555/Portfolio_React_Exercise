import "./About.css"
import che from "../../img/logo.png"
import burrito from "../../img/chaiman.png"

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
                    About Us
                </h1>

                <p className="a-sub">
                    We are first ever, Chai Wala or "Chai vendor" who sell and deliver joy to Khonkaen people.
                </p>

                <p className="a-desc">
                   We love Chai and all the traditions associate with Tea Drinking. It's really common in some culture that they will gather around and share a cup of tea. 
                   Our mission is to deliver that kind of atmosphere here in Khonkaen, where one can come and enjoy warm and tasty tea in a cold morning of Khonkaen Winter.
                </p>

                <div className="a-award">
                    <div className="a-award-card">
                    <img src={burrito} alt="" className="a-award-img" />
                    </div>
                    
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Handsome Chai Lord</h4>
                        <p className="a-award-desc">We gain this award by ourselves, we are the most handsome chai wala since we are the first ever Chai Wala here in Khonkaen.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About