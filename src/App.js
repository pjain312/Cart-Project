import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

    constructor(){
      super();
      this.state = {
        products:[
            {
            price: 99,
            title: "Watch",
            qty: 1,
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            id: 1
            },
            {
                price: 999,
                title: "Mobile Phone",
                qty: 10,
                img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
                id: 2
            },
            {
                price: 999,
                title: "Laptop",
                qty: 2,
                img: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                id: 3
            },
            
        ]
  }
  }

  handleIncreaseQuantity = (product) => {
      console.log("inc qnt of pdt" , product);
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty +=1;

      this.setState({
          products:products
      })
  }

  handleDecreaseQuantity = (product) => {
      console.log("dec qnt of pdt" , product);
      const { products } = this.state;
      const index = products.indexOf(product);

      if(products[index].qty ===0){
          return;
      }

      products[index].qty -=1;

      this.setState({
          products
      })
  }

  handleDeleteProduct = (id) => {
      const{ products } =this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      })
  }

  getCartCount = () => {

    const {products} = this.state;
    let count = 0;

    products.forEach((product) => {

      count += product.qty;

    })

    return count;
  }

  getCartTotal = () => {

    const {products} = this.state;

    let total = 0;

    products.map((product) => {

      total += product.qty * product.price;
    })

    return total;
  }
  render(){
    const {products} = this.state;
    return (

      <div className = "App">

        <Navbar count = {this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        
    <div style ={ {padding:10, fontSize: 20}}> TOTAL : {this.getCartTotal()}</div>
      </div>
    );
}
}
export default App;
