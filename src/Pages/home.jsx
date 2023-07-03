import NavBar from "../Components/navBar.jsx"
import ContactForm from "../Components/contactForm.jsx"
import HeroPage from "./heroPage.jsx"
import FirstPage from "./firstPage.jsx"
import SecondPage from "./secondPage.jsx"
import ThirdPage from "./thirdPage.jsx"
import FourthPage from "./fourthPage.jsx"

const HomePage = () => {
    return ( 
        <>
            <NavBar />
            <HeroPage />
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <ContactForm />
        </>
    )
}

export default HomePage