"import { useForm } from 'react-hook-form';"


const ContactForm = () => {
    
    return (
        <div className="contact-bg">
            <div className="container">
                <div className="contacts-container">
                    <h1 className="MONTSERRAT WHITE">Let's get in touch</h1>
                    <div className="contact-container">  
                        <div className="contact-card">
                            <img src="./phone-icon.svg" alt="" />
                            <div className="contact-card-text">
                                <span className="LIGHTGREY ESTEBAN">Phone Number</span>
                                <p className="WHITE MAITREE">+358 40 932 3040</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <img src="./email-icon.svg" alt="" />
                            <div className="contact-card-text">
                                <span className="LIGHTGREY ESTEBAN">Email</span>
                                <p className="WHITE MAITREE">Tim-agency@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <img src="./instagram-icon.svg" alt="" />
                            <div className="contact-card-text">
                                <span className="LIGHTGREY ESTEBAN">Instagram</span>
                                <p className="WHITE MAITREE">@TIM_AGENCY</p>
                            </div>
                        </div>
                    </div>

                    <div className="form-container">
                        <div className="form-top">
                            <div className="small-form">
                                <span className="ESTEBAN LIGHTGREY">Email</span>
                                <input className="MAITREE small-text-input" type="text" />
                            </div>
                            <div className="small-form">
                                <span className="ESTEBAN LIGHTGREY">Name</span>
                                <input className="MAITREE small-text-input" type="text" />
                            </div>
                        </div>

                        <div className="form-bottom">
                            <div className="big-form">
                                <span className="ESTEBAN LIGHTGREY">Message</span>
                                <input className="MAITREE big-text-input" type="text" />
                            </div>
                        </div>

                        <div className="privary-policy">
                            <input type="checkbox" />
                            <span className="ESTEBAN LIGHTGREY">By selecting this, you agree to <a href="#">privacy policy</a>.</span>
                        </div>

                    </div> 

                </div>
            </div>
        </div>
    )
}

export default ContactForm