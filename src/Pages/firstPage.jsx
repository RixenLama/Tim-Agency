import { HashLink as Link } from "react-router-hash-link"


const FirstPage = () => {
    return(
        <div className="first-page-bg">
            <div  className="container">
                <div className="first-page-title">
                    <h1 className="WHITE MONTSERRAT TEXTCENTER">High-Converting Animated Videos For Marketing Companies</h1>
                </div>

                <div className="first-page-text-card-container">
                    <div className="first-page-text-card">
                        <h3 className="WHITE MAITREE TEXTCENTER">BEST VALUE FOR MONEY</h3>
                        <p className="TEXTCENTER WHITE MAITREE">You do not want to pay inflated prices or get an off-the-shelf video. 
                        We do neither. We create high-quality, customised videos at an affordable price.
                        </p>
                    </div>
                    <div className="first-page-text-card">
                        <h3 className="WHITE MAITREE TEXTCENTER">NO HIDDEN FEES</h3>
                        <p className="TEXTCENTER WHITE MAITREE">Each package is charged per second and contains 1 voice over, 1 script
                        and 1 finished video.
                        </p>
                    </div>
                    <div className="first-page-text-card">
                        <h3 className="WHITE MAITREE TEXTCENTER">DRIVE ENGAGEMENT</h3>
                        <p className="TEXTCENTER WHITE MAITREE">"4x as many customers would rather watch a video about a product
                        than read about it (Animoto)."
                        </p>
                    </div>
                </div>

                <div className="first-page-slogan-container">
                    <div className="first-page-slogan-image-container">
                        <img className="first-page-slogan-image" src="./first-page-slogan-image.svg" alt="" />
                    </div>
                    <div className="first-page-slogan-text-container">
                        <h2 className="first-page-slogan-title WHITE ESTEBAN">Boost Conversations</h2>
                        <span className="first-page-slogan-text WHITE MAITREE">
                            "Including a video on a landing page can increase conversion by 80% (Unbounce)."
                        </span>
                        <div>
                            <button className="SMALLBUTTON BUTTONSIZE ESTEBAN WHITE">
                                <Link smooth to="/#store" className="BUTTONSIZE ESTEBAN WHITE LINK">Get Started -></Link>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FirstPage