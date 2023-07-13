import NavBar from "../Components/navBar.jsx"
import ContactForm from "../Components/contactForm.jsx"
import HeroPage from "./heroPage.jsx"
import FirstPage from "./firstPage.jsx"
import SecondPage from "./secondPage.jsx"
import ThirdPage from "./thirdPage.jsx"
import FourthPage from "./fourthPage.jsx"
import FifthPage from "./fifthPage.jsx"
import Footer from "../Components/footer.jsx"

const HomePage = () => {
    return ( 
        <>
            <NavBar />
            <HeroPage />
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <FifthPage />
            <ContactForm />
            <Footer />
        </>
    )
}

export default HomePage