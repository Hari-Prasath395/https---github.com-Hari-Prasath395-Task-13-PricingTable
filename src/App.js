
import "./App.css";

import React, { useState } from "react";
import Card from './componants/card';
import Counter from './pages/counter'
import Pricing from './pages/pricing';
import Cart from './pages/cart';

function App() {
  const[page,setPage]=useState('pricing');
  return (
    <div className="App">
      <section className="pricing py-5"> 
      {page==='counter'&& <Counter/>}
      {page==='pricing'&& <Pricing/>}
      {page==='cart'&& <Cart/>}
      {/* {page==='task'&& <Task/>} */}
      
      </section>
    
   
    </div>
  );
}

export default App;
