import CardOne from "../Components/fifth-page-card-1";
import CardTwo from "../Components/fifith-page-card-2";
import CardThree from "../Components/fifth-page-card-3";

const FifthPage = () =>{
    return(
            <div className="fifth-page-bg" id="store">
                <div className="container">
                    <h1 className="WHITE MONTSERRAT TEXTCENTER fifth-page-title">Our Packages</h1>
                    <div className="fifth-page-card-container">
                        <CardOne/>
                        <CardTwo/>
                        <CardThree/>
                    </div>
                </div>
            </div>
    );
}

export default FifthPage