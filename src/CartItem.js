import React from 'react';
import Cart from './Cart';
class CartItem extends React.Component{
   
    render(){
        const { price, title, qty} = this.props.product;
        return(
            <div className = "cart-item">
                <div className = "left-block">
                    <img style= {styles.image}/>
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
                            onClick = {() => this.props.onIncreaseQuantity(this.props.product)}    
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/860/860821.svg" 
                            onClick = {() => this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/860/860829.svg" />

                    </div>
                </div>
            </div>
        );
    }
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