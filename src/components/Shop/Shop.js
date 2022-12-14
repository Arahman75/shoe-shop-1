import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    // const [products, setProducts] = useProducts();
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    // show page size
 useEffect(()=>{
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    },[page, size]);

    useEffect(()=>{
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    },[])

    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data));
    // },[]);

// useEffect(()=>{
//     const storedCart = getStoredCart();
//     const savedCart = [];
//     for(const id in storedCart){
//       const addedProduct = products.find(product => product._id === id);
//       if(addedProduct){
//         const quantity = storedCart[id];
//         addedProduct.quantity= quantity
//         savedCart.push(addedProduct);
//          console.log(addedProduct);
//       }
      

//     }
//     setCart(savedCart);
// },[products])

    const handleAddToCart =(selectedProduct)=>{
        // console.log(product);
        //before code
    //    do not do this cart.push(product);
        // const newCart = [...cart, selectedProduct];
        // setCart(newCart);
        // addToDb(selectedProduct._id);

        let newCart = [];
        const exist = cart.find(product => product._id === selectedProduct._id);
        if(!exist){
    selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                products.map(product => <Product 
                    key={product._id}
                    product ={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
               }
               <div className='pagination'>
                {
                    [...Array(pageCount).keys()]
                    .map(number => <button 
                        className={page=== number ? 'selected' : ''}
                        onClick={()=> setPage(number)}>{number +1}</button>)
                }
                <select onChange={event=>setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
               </div>
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                <Link to="/orders"><button>Review Order</button></Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;
