import React from 'react';
import Cart from './Cart';

const CartItem = (props) => {
   
        const { price, title, qty} = props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
        return(
            <div className = "cart-item">
                <div className = "left-block">
                    <img style= {styles.image} src= {product.img}/>
                </div>
                <div className = "right-block">
                    <div style = { {fontSize: 25} }> {title} </div>
                    <div style = { {color: '#777'} }> {price} </div>
                    <div style = { {color: '#777'} }> Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}

                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1237/1237946.svg" 
                            onClick = {() => onIncreaseQuantity(product)}    
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/860/860821.svg" 
                            onClick = {() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/860/860829.svg" 
                            onClick = {() => onDeleteProduct(product.id)}
                        />

                    </div>
                </div>
            </div>
        );
    }

const styles = {
    image: {
        height : 110,
        width : 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;