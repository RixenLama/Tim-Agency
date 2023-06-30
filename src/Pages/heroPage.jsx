
const HeroPage = () => {
    return(
        <div className="hero-container">
            <div className="hero-video-container">
                <video className="hero-video" autoPlay muted loop>
                    <source src="./hero-vid.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="hero-text-container">
                <div className="container">
                    <h1 className="MONTSERRAT hero-text">
                        WE CARE ABOUT YOUR SUCCESS!
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HeroPage 