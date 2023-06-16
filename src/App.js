import { validate } from 'json-schema';
import './css/style.css';
import bagImage from './image/photo1.png';
import shoesImage from './image/photo2.png';
import { useState, useEffect } from 'react';


function App() {

  const originalBagPrice = 94.99;
  const originalShoesPrice = 124.99;
  const bagDiscount = 40;
  const shoesDiscount = 50;
  const shipping = 19;
  const [ beforeBagPrice, setBeforeBagPrice ] = useState(originalBagPrice);
  const [ afterBagPrice, setAfterBagPrice ] = useState((originalBagPrice - bagDiscount));
  const [ bagCount, setBagCount ] = useState(1);
  const [ beforeShoesPrice, setBeforeShoesPrice ] = useState(originalShoesPrice);
  const [ afterShoesPrice, setAfterShoesPrice ] = useState(originalShoesPrice - shoesDiscount);
  const [ shoesCount, setShoesCount ] = useState(1);
  const [ total, setTotal ] = useState(originalBagPrice + originalShoesPrice + shipping);
  const [ countries, setCountries] = useState([]);
  const countryListUrl = 'https://countriesnow.space/api/v0.1/countries';
  
  useEffect(() => {
    fetch(countryListUrl)
    .then((res) => res.json())
    .then((json) => {
        let countryList = [];
        json.data.map((data) => {
          countryList.push(data.country);
        });
        setCountries(countryList)
    })
    .catch(() => alert("error"));
   }, []);
  
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

  const onClickContinue = () =>{
    const isValid = validate();
    if(isValid){
      alert('Perfect!!');
    }
  }

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
        <nav>
          <h1>Checkout</h1>
        </nav>
        <main class="main">
          <section class='form-area'>
            <form onSubmit={onClickContinue}>
              <div class='form-contact'>
                <p>Contact information</p>
                <div class="form-group">
                  <label for="e-mail">E-mail</label>
                  <div class='input-content'>
                    <span class="material-symbols-outlined">mail</span>
                    <input required type='email' name="email" id="e-mail" placeholder='Enter your email...' />
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <div class='input-content'>
                    <span class="material-symbols-outlined">call</span>
                    <input required type="tel" maxLength={10} name="phone" id="phone" placeholder='Enter your phone...' />
                  </div>
                </div>
              </div>
              <div class='form-address'>
                <p>Shipping address</p>
                <div class="form-group">
                  <label for="full-name">Full name</label>
                  <div class='input-content'>
                   <span class="material-symbols-outlined">account_circle</span>
                    <input required type="text" maxLength={10} name="fullName" id="full-name" placeholder='Your full name...' />
                  </div>
                </div>
                <div class="form-group">
                  <label for="address">Address</label>
                  <div class='input-content'>
                   <span class="material-symbols-outlined">home</span>
                    <input required type="text" maxLength={100} name="address" id="address" placeholder='Your address...' />
                  </div>
                </div>
                <div class="form-group">
                  <label for="city">City</label>
                  <div class='input-content'>
                   <span class="material-symbols-outlined">location_city</span>
                    <input required type="text" name="city" id="city" placeholder='Your city...' />
                  </div>
                </div>
                <div class='form-group'>
                  <div class="form-wrap country">
                    <label for="country" name='country' id='country'>Country</label><br/>
                    <div class='input-content'>
                     <span class="material-symbols-outlined">public</span>
                      <select required name='country' id='country' placeholder='Your country...'>
                        <option value="" hidden selected>Your country...</option>
                        {countries.map((country, index) => {
                          return <option value={index}>{country}</option>
                        })}
                     </select>
                    </div>
                  </div>
                  <div class="form-wrap postal-code">
                    <label for="postal-code" name='postalCode' id='postal-code'>Postal code</label><br/>
                    <div class='input-content'>
                      <span class="material-symbols-outlined">markunread_mailbox</span>
                     <input required type="text" name="postalCode" id="postal-code" placeholder='Your postal code...' />
                    </div>
                  </div>
                </div>
                <div class="form-group save-info">
                  <input type="checkbox" name="saveInfo" id="save-info" />
                  <label for="save-info" id='save-info'>Save this information for next time</label>
                </div>
              </div>
              <button type="submit" class="btn">Continue</button>
            </form>
          </section>
          <section class='shopping-bag'>
            <div class="item-group">
              <img src={bagImage} alt="bag"></img>
              <div class='item-info'>
                <p class="item-name">Vintage Backbag</p>
                <div class='price-group'>
                  <p class="after-price">{`$${afterBagPrice.toFixed(2)}`}</p>
                  <p class="before-price">{`$${beforeBagPrice.toFixed(2)}`}</p>
                </div>
                <div class="quantity-group">
                  <button class="subtract" onClick={onClickSubstractBagCount}>-</button>
                  <p class="quantity">{bagCount}</p>
                  <button class="add" onClick={onClickAddBagCount}>+</button>
                </div>
              </div>
            </div>
            <div class="item-group">
              <img src={shoesImage} alt="shoes" />
              <div class='item-info'>
                <p class="item-name">Levi Shoes</p>
                <div class='price-group'>
                  <p class="after-price">{`$${afterShoesPrice.toFixed(2)}`}</p>
                  <p class="before-price">{`$${beforeShoesPrice.toFixed(2)}`}</p>
                </div>
                <div class="quantity-group">
                  <button class="subtract" onClick={onClickSubstractShoesCount}>-</button>
                  <p class="quantity">{shoesCount}</p>
                  <button class="add" onClick={onClickAddShoesCount}>+</button>
                </div>
              </div>
            </div>
            <div class='check-wrap'>
              <hr />
              <div class='check-group'>
                <p class="check-name">Shipping</p>
                <p class="check-price">{`$${shipping}`}</p>
              </div>
              <hr />
              <div class='check-group'>
                <p class="check-name">Total</p>
                <p class="check-price">{`$${total.toFixed(2)}`}</p>
              </div>
            </div>
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
