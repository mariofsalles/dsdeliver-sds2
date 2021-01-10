import './styles.css';
import { useEffect, useState } from 'react';
import StepHeaders from './StepHeaders';
import ProductsList from './ProductsList';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>()
  useEffect(()=>{
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])

  return(
    <div className="orders-container">
      <StepHeaders/>
      <ProductsList products={products}/>
      <OrderLocation onChangeLocation={ location => setOrderLocation(location)}/>
    </div>
  )
}

export default Orders;