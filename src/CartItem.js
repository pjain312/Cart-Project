import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {
        console.log('this', this.state);

        // setState form-1
            // this.setState({
            //     qty: this.state.qty + 1
            // });
        
        // setState form-2 used when prevState is required

        this.setState( (prevState)=> {
            return{
                qty: prevState.qty + 1
            }
            
        });

    }
    render(){
        const { price, title, qty} = this.state;
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
                            onClick = {this.increaseQuantity}    
                        />
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/860/860821.svg" />
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