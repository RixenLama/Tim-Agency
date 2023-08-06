import React, { useState, useEffect } from "react" ;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CardOne = () =>{

    const ClientId = process.env.VITE_PAYPAL_CLIENT_ID;
    const [show, setShow] = useState(true);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions, err) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "White Board",
                    amount: {
                        currency_code: "USD",
                        value: 489
                    }
                }
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            })
            ;
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
        <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_CONTENTFUL_CLIENT_ID}}>
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
                            <button className="WHITE ESTEBAN paypal-button-div" >
                                {show ? (
                                    <PayPalButtons
                                style={{ layout: "vertical", color: "black" }}
                                createOrder={createOrder}
                                onApprove={onApprove}
                            />
                            ) : null}
                    </button>
                </div>
            </div>
        </PayPalScriptProvider>
    );
}

export default CardOne