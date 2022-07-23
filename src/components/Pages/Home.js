import React from "react";
import { useDispatch } from "react-redux";
import Cart from "../Cart/Cart.js";
import ProductsList from "../Store/Reducers/ProductsList.js";
import CartActions from "../Store/Actions/CartActions";
import "../../Styles.css";

function Home()
{
    const dispatch = useDispatch();

    return(
        <>

            <header className="header-style">
                <h1>FutShop</h1>
                
                <div>
                    <a href="/">Home</a>

                    <a href="/contatos" target="_blank" rel="noreferrer" >Contatos</a>
                </div>
                
                <Cart.CartButton/>
            </header>

            <Cart.Cart/>

            <main className="product-container">
                {ProductsList.map((item)=>{
                    return(
                        <div className="product-item" key={ item.Key }>
                            <div>
                                <img src={ item.Image } alt={ item.Name }/>
                            </div>
                            <br/>

                            <h2>{ item.Name }</h2>
                            
                            <p>R${ item.Price }</p>

                            <button onClick={()=> dispatch( CartActions.Add(item) )}>Adicionar ao carrinho</button>
                            <br/>

                        </div>
                    )
                })}
            </main>

        </>
    )
}

export default Home;