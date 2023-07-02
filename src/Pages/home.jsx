import NavBar from "../Components/navBar.jsx"
import ContactForm from "../Components/contactForm.jsx"
import HeroPage from "./heroPage.jsx"
import FirstPage from "./firstPage.jsx"
import SecondPage from "./secondPage.jsx"

const HomePage = () => {
    return ( 
        <>
            <NavBar />
            <HeroPage />
            <FirstPage />
            <SecondPage />
            <ContactForm />
        </>
    )
}

export default HomePage