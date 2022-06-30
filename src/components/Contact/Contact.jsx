import "./Contact.css"
import FrenchToast from "../../img/f1.png"
import FrenchToast2 from "../../img/f2.png"
import Bible from "../../img/bible.png"
import { useRef,useState } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef()
    const [Done,setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_mz3pwef', 'template_tqegfuq', formRef.current, '5CycUYf_gNFMdnG70')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }


    return (
        <div className="c">
            <div className="c-bg">

            </div>

            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-title">
                        Let's discuss your projects
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={FrenchToast} alt="" className="c-icon" /> 888 555 21555
                        </div>

                        <div className="c-info-item">
                            <img src={FrenchToast2} alt="" className="c-icon" /> jameslhueng@hotmail.org.th
                        </div>

                        <div className="c-info-item">
                            <img src={Bible} alt="" className="c-icon" /> CTTM Thailand Mission
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quae explicabo repellendus, numquam et quos labore! Cum ea veritatis corporis quibusdam labore ab porro.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="email" placeholder="Email" name="user_email" />
                        <textarea name="message" placeholder="Your Message" rows="5"/>
                        <button>Submit</button>
                    </form>
                    {Done && <h1>Thank You for Contacting Us</h1>}
                </div>
            </div>
        </div>
    )
}

export default Contact