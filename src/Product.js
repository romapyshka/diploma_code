import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, ratting}) {
    const [ {basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch ({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                ratting: ratting,
            },
        });
    };

    return (
        <div className="product">

            <div className="product_info">
                <p> {title} </p>
                <p className="product_price">
                    <small>$</small>
                    <strong> {price} </strong>
                </p>

                <div className="product_rating">
                    {Array(ratting).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product