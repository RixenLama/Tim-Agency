
const NavBar = () => {

    const openNav = () => {
        document.querySelector("#open-menu").style.display = "none"
        document.getElementById("close-menu").style.display = "flex"
        document.querySelector("#mobile-nav").style.display = "flex"
    }

    const closeNav = () =>{
        document.querySelector("#open-menu").style.display = "flex"
        document.getElementById("close-menu").style.display = "none"
        document.querySelector("#mobile-nav").style.display = "none"
    }


    return (
        <>
            <div className="navbar">
                <div className="nav-container">
                    <div>
                        <img src="./TIM-logo.svg" alt="" />
                    </div>

                    <div>
                        <ul className="horizontal-list nav-ul">
                            <li className="WHITE ESTEBAN nav-item">
                                Portfolio
                            </li>
                            <li className="WHITE ESTEBAN nav-item">
                                Pricing
                            </li>
                            <li className="WHITE ESTEBAN nav-item">
                                About us
                            </li>
                            <li className="WHITE ESTEBAN nav-item">
                                Get a quote
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-container">
                        <img id="open-menu" className="mobile-menu" src="./mobile-menu.svg" alt="" onClick={openNav} />
                        <img id="close-menu" className="mobile-menu-exit" src="./mobile-menu-exit.svg" alt="" onClick={closeNav} />
                    </div>
                </div>

                <div id="mobile-nav" className="mobile-dropbar">
                    <div>
                        <ul className="mobile-nav-ul">
                            <li className="WHITE ESTEBAN mobile-nav-li">
                                Portfolio
                            </li>
                            <li className="WHITE ESTEBAN mobile-nav-li">
                                Pricing
                            </li>
                            <li className="WHITE ESTEBAN mobile-nav-li">
                                About us
                            </li>
                            <li className="WHITE ESTEBAN mobile-nav-li">
                                Get a quote
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default NavBar