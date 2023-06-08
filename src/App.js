import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <main class="main">
          <h1>Checkout</h1>
          <form class="form-wrap">
            <p>Contact information</p>
            <div class="form-group">
              <label for="e-mail">E-mail</label>
              <input type="text" name="email" id="e-mail" />
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
              <p class="after-price">$00</p>
              <p class="before-price">$00</p>
              <div class="quantity-group">
                <button class="subtract">-</button>
                <p class="quantity">1</p>
                <button class="add">+</button>
              </div>
            </div>
            <div class="price-group">
              <img src="" alt="" />
              <p class="item-name">Levi Shoes</p>
              <p class="after-price">$00</p>
              <p class="before-price">$00</p>
              <div class="quantity-group">
                <button class="subtract">-</button>
                <p class="quantity">1</p>
                <button class="add">+</button>
              </div>
            </div>
            <hr />
            <div class='price-group'>
              <p class="shipping">Shipping</p>
              <p class="price">$19</p>
            </div>
            <div class='item-group'>
              <p class="total">Total</p>
              <p class="price">$19</p>
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
