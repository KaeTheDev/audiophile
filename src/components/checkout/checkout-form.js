export function CheckoutForm() {
    const section = document.createElement('section');
    section.className = 'checkout-form';
  
    section.innerHTML = `
      <h1 class="checkout-form__title">Checkout</h1>
  
      <form>
        <!-- Billing Details -->
        <fieldset class="checkout-form__section">
          <legend>Billing Details</legend>
          <div class="checkout-form__group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Alexei Ward">
          </div>
          <div class="checkout-form__group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="alexei@mail.com">
          </div>
          <div class="checkout-form__group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+1 202-555-0136">
          </div>
        </fieldset>
  
        <!-- Shipping Info -->
        <fieldset class="checkout-form__section">
          <legend>Shipping Info</legend>
          <div class="checkout-form__group">
            <label for="address">Your Address</label>
            <input type="text" id="address" placeholder="1137 Williams Avenue">
          </div>
          <div class="checkout-form__group">
            <label for="zip">ZIP Code</label>
            <input type="text" id="zip" placeholder="10001">
          </div>
          <div class="checkout-form__group">
            <label for="city">City</label>
            <input type="text" id="city" placeholder="New York">
          </div>
          <div class="checkout-form__group">
            <label for="country">Country</label>
            <input type="text" id="country" placeholder="United States">
          </div>
        </fieldset>
  
        <!-- Payment -->
        <fieldset class="checkout-form__section">
          <legend>Payment Details</legend>
          <div class="checkout-form__group">
            <p>Payment Method</p>
            <div class="checkout-form__radio-group">
              <label><input type="radio" name="payment-method" value="e-money" checked> e-Money</label>
              <label><input type="radio" name="payment-method" value="cod"> Cash on Delivery</label>
            </div>
          </div>
          <div class="checkout-form__group">
            <label for="e-money-number">e-Money Number</label>
            <input type="text" id="e-money-number" placeholder="238521993">
          </div>
          <div class="checkout-form__group">
            <label for="e-money-pin">e-Money PIN</label>
            <input type="text" id="e-money-pin" placeholder="6891">
          </div>
        </fieldset>
      </form>
    `;
  
    return section;
  }