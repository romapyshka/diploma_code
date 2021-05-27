import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {LiqPayPay} from "react-liqpay";

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    const payInfo = {
        amount: getBasketTotal(basket),
        currency: 'USD',
        title: 'Proceed to Checkout'
    };

    const ButtonComponent = () => (
        <button style={{
            backgroundColor: '#516ae8',
            color: '#111',
            borderColor: '#516ae8',
            border: '1px solid transparent',
            borderRadius: '4px',
            width: '100%',
            padding: '6px 12px',
            cursor: 'pointer'
        }}>
            {`${payInfo.title}`}
        </button>
    );

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong> {value} </strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <LiqPayPay
                publicKey="yourPublicKey" // Here write your public LiqPay key to normal work of the site
                privateKey="yourPrivateKey" // Here write your private LiqPay key to normal work of the site
                amount={getBasketTotal(basket)}
                description="Payment for product"
                currency="USD"
                orderId={Math.floor(1 + Math.random() * 900000000)}
                result_url="https://romapyshka.github.io/diplom/"
                server_url="https://romapyshka.github.io/diplom/"
                product_description="Payment for product"
                style={{ margin: "8px" }}
                extra={[<ButtonComponent key="1" />]}
            />

        </div>

    );
}

export default Subtotal