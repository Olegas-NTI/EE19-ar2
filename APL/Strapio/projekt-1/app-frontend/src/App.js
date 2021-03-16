import React from 'react';
import './App.css';
import StockEventsTable from './components/StockEventsTable'

//2 data types
//Product
const fetchedProducts = [{
  id: 2,
  name: 'Mjölk',
  picture: 'https://target.scene7.com/is/image/Target/GUEST_b733eb0f-5f2d-44c6-82d2-c7f3845e37d3?wid=488&hei=488&fmt=pjpeg',
}]
//stockEvents
const fetchedStockEvents = [
  {id: 1, type: 'add', qty: 100, product: fetchedProducts[0]},//add or remove
  {id: 2, type: 'remove', qty: -20, product: fetchedProducts[0]},//add or remove
  {id: 3, type: 'remove', qty: -10, product: fetchedProducts[0]},//add or remove
  {id: 4, type: 'renove', qty: -1, product: fetchedProducts[0]}//add or remove
]
// fetch with fetch or axios all of the stock event

// we are going to separate them by different products

//we are going to display them


function App() {
  return (
    <div className="App">
      <h1>The stock app</h1>
      <div className="product-grid">
      <StockEventsTable 
      products={fetchedProducts} 
      stockEvents={fetchedStockEvents}
      />
      </div>
    </div>
  );
}

export default App;
