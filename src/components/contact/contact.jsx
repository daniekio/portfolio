import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState, useContext } from 'react' // accessing DOM nodes or elements directly
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_tegzsew",
                "template_n3za21b",
                form.current,
                "CEudzD1dkJcP7gogx")
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +49 123456789
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            contact@contact.de
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Musterstr. 1, 12345 Musterstadt
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Get in touch. </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate quas facilis illo quam eaque doloremque hic et quos, inventore sunt harum officiis omnis animi eos. Eveniet libero quibusdam harum?
                    </p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input style={{
                            backgroundColor: darkMode ? "#333" : "#white",
                            color: darkMode ? "#white" : "#333"
                        }} type="text" placeholder="Name" name="user_name" />
                        <input style={{
                            backgroundColor: darkMode ? "#333" : "#white",
                            color: darkMode ? "#white" : "#333"
                        }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{
                            backgroundColor: darkMode ? "#333" : "#white",
                            color: darkMode ? "#white" : "#333"
                        }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{
                           backgroundColor: darkMode ? "#333" : "#white",
                            color: darkMode ? "#white" : "#333"
                        }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you for your email"}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact
