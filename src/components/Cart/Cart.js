import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartActions from "../Store/Actions/CartActions";
import "../../Styles.css";

function Cart()
{
    const cart = useSelector( state => state.Cart );
    const dispatch = useDispatch();
    const totalItems = cart.Item.reduce( (acc, atual) => acc+atual.Quantity,0 );;
    const totalPrice = cart.Item.reduce( (acc, atual) => acc+atual.Price*atual.Quantity,0 );

    return(
        <div id="cart" className="display-cart cart-position" >
            
            <h1>{ totalItems } Itens no carrinho</h1>
            <br/>
            { cart.Item.map( item =>{
                return(
                    <div className="cart-item" key={ item.id }>

                        <div className="sidebar">
                            <img src={ item.Image } alt={ item.Name }/>
                        </div>

                        <div className="price">
                            <h2>R${ (item.Price).toFixed(2) }</h2>
                        </div>

                        <div className="name">
                            <p>{ item.Name }</p>
                        </div>

                        <div className="del-button">
                            <button onClick={ () => dispatch(CartActions.Remove(item)) } > X </button>
                        </div>
                        
                        <div className="counter">
                                <h3>
                                    <button onClick={ () => dispatch(CartActions.Decrease(item)) }> - </button>
                                    { item.Quantity }
                                    <button onClick={ () => dispatch(CartActions.Increase(item)) }> + </button>
                                </h3>
                            <h2>Total R${ ( item.Price * item.Quantity ).toFixed(2) }</h2>
                        </div>
                    </div>
                )
            })}
            <br/>

            <h1>Preço total: R${totalPrice.toFixed(2)}</h1>
        </div>
    )
};

function CartButton()
{
    const cart = useSelector( state => state.Cart.value );
    
    return(
        <button onClick={ShowCart}> 
            <i className="fa-solid fa-cart-arrow-down"></i>
            {cart}
        </button>
    );
};

function ShowCart()
{
    const displayCart = document.getElementById("cart");
    displayCart.classList.toggle("display-cart")   
};

export default {
    CartButton,
    Cart
};