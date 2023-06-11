import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const originalBagPrice = 94.99;
  // const originalShoesPrice = 124.99;
  // const bagDiscount = 40;
  // const shoesDiscount = 50;
  // const shipping = 19;
  const originalBagPrice = 10;
  const originalShoesPrice = 1000;
  const bagDiscount = 5;
  const shoesDiscount = 500;
  const shipping = 1;
  const [ beforeBagPrice, setBeforeBagPrice ] = useState(originalBagPrice);
  const [ afterBagPrice, setAfterBagPrice ] = useState((originalBagPrice - bagDiscount));
  const [ bagCount, setBagCount ] = useState(1);
  const [ beforeShoesPrice, setBeforeShoesPrice ] = useState(originalShoesPrice);
  const [ afterShoesPrice, setAfterShoesPrice ] = useState(originalShoesPrice - shoesDiscount);
  const [ shoesCount, setShoesCount ] = useState(1);
  const [ total, setTotal ] = useState(originalBagPrice + originalShoesPrice + shipping);

  const onClickAddBagCount = () =>{
    setBagTotal(bagCount + 1)
  };

  const onClickSubstractBagCount = () =>{
    if(bagCount > 0){
      setBagTotal(bagCount - 1)
    }
  };

  const onClickAddShoesCount = () =>{
    setShoesTotal(shoesCount + 1)
  };

  const onClickSubstractShoesCount = () =>{
    if(shoesCount > 0){
      setShoesTotal(shoesCount - 1)
    }
  };

  const setBagTotal = (count) => {
    let subtotal = originalBagPrice*count;
    let discounted = (originalBagPrice - bagDiscount)*count;
    setBagCount(count);
    setBeforeBagPrice(subtotal);
    setAfterBagPrice(discounted);
    setTotal(afterShoesPrice + discounted + shipping);
  }

  const setShoesTotal = (count) => {
    let subtotal = originalShoesPrice*count;
    let discounted = (originalShoesPrice - shoesDiscount)*count;
    setShoesCount(count);
    setBeforeShoesPrice(subtotal);
    setAfterShoesPrice(discounted);
    setTotal(afterBagPrice + discounted + shipping);
  }



  return (
    <div className="App">
      <body>
        <main class="main">
          <h1>Checkout</h1>
          <form class="form-wrap">
            <p>Contact information</p>
            <div class="form-group">
              <label for="e-mail">E-mail</label>
              <input type="text" name="email" id="e-mail" required/>
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <p>Shipping address</p>
            <div class="form-group">
              <label for="full-name">Full name</label>
              <input type="text" name="fullName" id="full-name" />
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" name="address" id="address" />
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input type="text" name="country" id="country" />
            </div>
            <div class="form-group">
              <label for="postal-code">Postal code</label>
              <input type="text" name="postalCode" id="postal-code" />
            </div>
            <div class="form-group">
              <input type="checkbox" name="saveInfo" id="save-info" />
              <label for="save-info">Save this information for next time</label>
            </div>
            <button type="submit" class="btn">Continue</button>
          </form>
          <section>
            <div class="item-group">
              <img src="" alt="" />
              <p class="item-name">Vintage Backbag</p>
              <p class="after-price">{`$${afterBagPrice.toFixed(2)}`}</p>
              <p class="before-price">{`$${beforeBagPrice.toFixed(2)}`}</p>
              <div class="quantity-group">
                <button class="subtract" onClick={onClickSubstractBagCount}>-</button>
                <p class="quantity">{bagCount}</p>
                <button class="add" onClick={onClickAddBagCount}>+</button>
              </div>
            </div>
            <div class="price-group">
              <img src="" alt="" />
              <p class="item-name">Levi Shoes</p>
              <p class="after-price">{`$${afterShoesPrice.toFixed(2)}`}</p>
              <p class="before-price">{`$${beforeShoesPrice.toFixed(2)}`}</p>
              <div class="quantity-group">
                <button class="subtract" onClick={onClickSubstractShoesCount}>-</button>
                <p class="quantity">{shoesCount}</p>
                <button class="add" onClick={onClickAddShoesCount}>+</button>
              </div>
            </div>
            <hr />
            <div class='price-group'>
              <p class="shipping">Shipping</p>
              <p class="price">{`$${shipping}`}</p>
            </div>
            <div class='item-group'>
              <p class="total">Total</p>
              <p class="price">{`$${total.toFixed(2)}`}</p>
            </div>
            <hr />
          </section>
        </main>
        <footer>
          <p>created by miyu - devChallenges.io</p>
        </footer>
      </body>
    </div>
  );
}

export default App;
