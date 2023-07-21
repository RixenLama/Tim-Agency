import React, { useState, useEffect } from "react" ;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const FifthPage = () =>{

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Sunflower",
                    amount: {
                        currency_code: "USD",
                        value: 20,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);


    return(
        <PayPalScriptProvider options={{ "client-id":"Ac51R1hRArGU4X1RSntGTADuSgAK4VkJHZyGadjca-CetiMNE_4T3rLHsWUzJax7j95giUrQxjA_xFpG" }}>
            <div className="fifth-page-bg" id="store">
                <div className="container">
                    <h1 className="WHITE MONTSERRAT TEXTCENTER fifth-page-title">Our Packages</h1>
                    <div className="fifth-page-card-container">
                        <div className="fifth-page-card-1">
                            <div className="fifth-page-card-text-container">
                                <h4 className="WHITE ESTEBAN">
                                    WHITEBOARD
                                </h4>
                                <h2 className="WHITE MONTSERRAT">
                                    €489
                                </h2>
                                <div className="fifth-page-card-stat-container">
                                    <span className="WHITE MAITREE">
                                        High Converting Script
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Powerful Voice-Over 
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Engaging Animation
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Music & SFX
                                    </span>
                                    <span className="WHITE MAITREE">
                                        2 X Revisions
                                    </span>
                                    <span className="WHITE MAITREE">
                                        4+ Weeks Delivery
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className="WHITE ESTEBAN SMALLBUTTON" onClick={() => setShow(true)} >
                                    Purchase it
                                </button>
                            </div>
                        </div>

                        <div className="fifth-page-card-2">
                            <div className="fifth-page-card-text-container">
                                <h4 className="WHITE ESTEBAN">
                                    EXPLAINER
                                </h4>
                                <h2 className="WHITE MONTSERRAT">
                                    €839
                                </h2>
                                <div className="fifth-page-card-stat-container">
                                    <span className="WHITE MAITREE">
                                        High Converting Script
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Powerful Voice-Over 
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Engaging Animation
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Music & SFX
                                    </span>
                                    <span className="WHITE MAITREE">
                                        2 X Revisions
                                    </span>
                                    <span className="WHITE MAITREE">
                                        4+ Weeks Delivery
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className="WHITE ESTEBAN SMALLBUTTON" onClick={() => setShow(true)}>
                                    Purchase it
                                </button>
                            </div>
                        </div>

                        <div className="fifth-page-card-3">
                            <div className="fifth-page-card-text-container">
                                <h4 className="WHITE ESTEBAN">
                                    PREMIUM
                                </h4>
                                <h2 className="WHITE MONTSERRAT">
                                    €1399
                                </h2>
                                <div className="fifth-page-card-stat-container">
                                    <span className="WHITE MAITREE">
                                        High Converting Script
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Powerful Voice-Over 
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Engaging Animation
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Music & SFX
                                    </span>
                                    <span className="WHITE MAITREE">
                                        4 X Revisions
                                    </span>
                                    <span className="WHITE MAITREE">
                                        8+ Weeks Delivery
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Custom Graphics 
                                    </span>
                                    <span className="WHITE MAITREE">
                                        Premium Animation Team
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className="WHITE ESTEBAN SMALLBUTTON" onClick={() => setShow(true)}>
                                    Purchase it
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="paypal-buttons">
                    {show ? (
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                    />
                ) : null}
                </div>
            </div>
        </PayPalScriptProvider>
    );
}

export default FifthPage