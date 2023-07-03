
const ThirdPage = () =>{
    return(
        <div className="third-page-bg">
            <div className="third-page-bg-blur">
                <div className="container">
                    <h1 className="WHITE TEXTCENTER MONTSERRAT">Our Process</h1>
                    <div className="third-page-card-container">
                        <div className="third-page-card">
                            <img className="third-page-card-img" src="./first-process.svg" alt="" />
                            <span className="ESTEBAN WHITE">QUESTIONNAIRE</span>
                            <p className="LIGHTGREY MAITREE">Fill in our questionnaire with the guidelines for your project.</p>
                        </div>
                        <div className="third-page-card">
                            <img className="third-page-card-img" src="./second-process.svg" alt="" />
                            <span className="ESTEBAN WHITE">SCRIPTING (3-5 DAYS)</span>
                            <p className="LIGHTGREY MAITREE">Experienced copywriters create an effective script that perfectly 
                            conveys your message.</p>
                        </div>
                        <div className="third-page-card">
                            <img className="third-page-card-img" src="./third-process.svg" alt="" />
                            <span className="ESTEBAN WHITE">VOICEOVER (3-5 DAYS)</span>
                            <p className="LIGHTGREY MAITREE">Professional voice artists bring your script to life and capture 
                            the attention of your audience</p>
                        </div>
                        <div className="third-page-card">
                            <img className="third-page-card-img" src="./fourth-process.svg" alt="" />
                            <span className="ESTEBAN WHITE">ANIMATION (5-7 DAYS)</span>
                            <p className="LIGHTGREY MAITREE">Experienced animators bring your voice-over to life and ensure that
                            your audience absorbs your message better.</p>
                        </div>
                        <div className="third-page-card">
                            <img className="third-page-card-img" src="./fifth-process.svg" alt="" />
                            <span className="ESTEBAN WHITE">DELIVERY</span>
                            <p className="LIGHTGREY MAITREE">Fill in our questionnaire with the guidelines for your project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage