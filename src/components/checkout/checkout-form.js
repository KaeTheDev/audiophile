import { createTextField } from '../form-elements/form-elements.js';
import { createRadioGroup } from '../form-elements/form-elements.js';
import { getState, clearCart } from '../../store/cartStore.js';
import { OrderConfirmation } from '../checkout/order-confirmation.js';
import { GoBackButton } from '../back-btn/back-btn.js';


export function CheckoutForm() {
  const section = document.createElement('section');
  section.className = 'checkout-form';
  section.id = 'checkout-form';

  const goBackButton = GoBackButton();
section.appendChild(goBackButton); // ⬅️ Add this before the title


  // -- Title
  const title = document.createElement('h1');
  title.className = 'checkout-form__title';
  title.textContent = 'Checkout';

  const form = document.createElement('form');

  /* === BILLING DETAILS === */
  const bill = document.createElement('fieldset');
  bill.className = 'checkout-form__section';
  bill.innerHTML = '<legend class="checkout-form__legend">Billing Details</legend>';

  // Fields
  const nameField  = createTextField({ id: 'name',  label: 'Name',          placeholder: 'Alexei Ward',      required: true });
  const emailField = createTextField({ id: 'email', label: 'Email Address', placeholder: 'alexei@mail.com', required: true, type: 'email' });
  const phoneField = createTextField({ id: 'phone', label: 'Phone Number',  placeholder: '+1 202‑555‑0136', required: true, type: 'tel' });

  // Rows
  const billRow1 = document.createElement('div');
  billRow1.className = 'checkout-form__row';
  billRow1.append(nameField, emailField); // side by side

  const billRow2 = document.createElement('div');
  billRow2.className = 'checkout-form__row';
  billRow2.append(phoneField, document.createElement('div')); // phone half width, align with others

  bill.append(billRow1, billRow2);

  /* === SHIPPING INFO === */
  const ship = document.createElement('fieldset');
  ship.className = 'checkout-form__section';
  ship.innerHTML = '<legend class="checkout-form__legend">Shipping Info</legend>';

  const addressField = createTextField({ id: 'address', label: 'Address', placeholder: '1137 Williams Avenue', required: true });
  const zipField     = createTextField({ id: 'zip',     label: 'ZIP Code',     placeholder: '10001',         required: true });
  const cityField    = createTextField({ id: 'city',    label: 'City',         placeholder: 'New York',      required: true });
  const countryField = createTextField({ id: 'country', label: 'Country',      placeholder: 'United States', required: true });

  const shipRow1 = document.createElement('div');
  shipRow1.className = 'checkout-form__row';
  shipRow1.append(addressField); // full width

  const shipRow2 = document.createElement('div');
  shipRow2.className = 'checkout-form__row';
  shipRow2.append(zipField, cityField); // side by side

  const shipRow3 = document.createElement('div');
  shipRow3.className = 'checkout-form__row';
  shipRow3.append(countryField, document.createElement('div'));  // half width

  ship.append(shipRow1, shipRow2, shipRow3);

  /* === PAYMENT DETAILS === */
  const pay = document.createElement('fieldset');
  pay.className = 'checkout-form__section';
  pay.innerHTML = '<legend class="checkout-form__legend">Payment Details</legend>';

  // Payment method selection row
  const paymentMethodRow = document.createElement('div');
  paymentMethodRow.className = 'checkout-form__row payment-method-row';

  const labelCol = document.createElement('div');
  labelCol.className = 'payment-label-col';
  labelCol.innerHTML = '<label>Payment Method</label>';

  const optionsCol = document.createElement('div');
  optionsCol.className = 'payment-options-col';

  const radios = createRadioGroup({
    name: 'payment-method',
    options: [
      { id: 'e-money', label: 'e‑Money' },
      { id: 'cod',     label: 'Cash on Delivery' },
    ],
  });
  optionsCol.append(radios);
  paymentMethodRow.append(labelCol, optionsCol);

  // e-Money fields (separate full-width row)
  const eMoneyNumber = createTextField({
    id: 'e-money-number', label: 'e‑Money Number', placeholder: '238521993', required: true,
  });
  const eMoneyPin = createTextField({
    id: 'e-money-pin', label: 'e‑Money PIN', placeholder: '6891', required: true,
  });
  const eMoneyFieldsRow = document.createElement('div');
  eMoneyFieldsRow.className = 'checkout-form__row e-money-fields-row';
  eMoneyFieldsRow.append(eMoneyNumber, eMoneyPin);

  // Cash on Delivery message
  const codMessage = document.createElement('div');
  codMessage.className = 'cod-message';
  codMessage.innerHTML = `
    <div class="cod-message__icon">
        <img class="cash_on_delivery__icon" src="/audiophile/assets/checkout/icon-cash-on-delivery.svg" alt="Cash On Delivery" />
    </div>
    <div class="cod-message__text">
      <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
    </div>
  `;

  // Append all payment elements
  pay.append(paymentMethodRow, eMoneyFieldsRow, codMessage);

  /* === Assemble === */
  form.append(bill, ship, pay);
  section.append(title, form);

  /* === Payment method toggle logic === */
  const eMoneyRadio = radios.querySelector('#e-money');
  const codRadio    = radios.querySelector('#cod');
  
  function togglePaymentMethod() {
    const isEMoney = eMoneyRadio.checked;
    
    // Toggle e-Money fields
    eMoneyFieldsRow.style.display = isEMoney ? 'flex' : 'none';
    eMoneyNumber.querySelector('input').required = isEMoney;
    eMoneyPin.querySelector('input').required = isEMoney;
    
    // Toggle COD message
    codMessage.style.display = isEMoney ? 'none' : 'flex';
  }
  
  // Set default state (e-Money selected by default)
  eMoneyRadio.checked = true;
  togglePaymentMethod();
  
  // Add event listeners
  [eMoneyRadio, codRadio].forEach(r => r.addEventListener('change', togglePaymentMethod));

  /* === FORM SUBMISSION HANDLER === */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log('Form submitted!');
    
    // Validate form
    if (!form.checkValidity()) {
      console.log('Form validation failed');
      form.reportValidity();
      return;
    }
    
    // Get form data
    const formData = new FormData(form);
    const cartState = getState();
    
    // Debug: Log cart state to see what's available
    console.log('Cart state:', cartState);
    
    // Create order data with proper fallbacks and ensure grandTotal exists
    const orderData = {
      items: cartState.items || [],
      subtotal: cartState.subtotal || cartState.total || 0,
      total: cartState.total || cartState.subtotal || 0,
      vat: cartState.vat || 0,
      shipping: cartState.shipping || 0,
      // Ensure grandTotal is always defined
      grandTotal: cartState.grandTotal || cartState.total || cartState.subtotal || 0,
      customerInfo: {
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        phone: formData.get('phone') || '',
        address: formData.get('address') || '',
        zip: formData.get('zip') || '',
        city: formData.get('city') || '',
        country: formData.get('country') || '',
        paymentMethod: formData.get('payment-method') || '',
        eMoneyNumber: formData.get('e-money-number') || '',
        eMoneyPin: formData.get('e-money-pin') || '',
      }
    };
    
    console.log('Order data being passed:', orderData);
    
    // Show order confirmation and pass a callback to clear cart when user dismisses it
    showOrderConfirmation(orderData, () => {
      clearCart();
    });
  });

  // Also listen for custom event as fallback
  document.addEventListener('checkout:submit', (e) => {
    console.log('Custom checkout submit event received');
    form.dispatchEvent(new Event('submit'));
  });

  return section;
}

// Function to show order confirmation as modal/overlay
function showOrderConfirmation(orderData, onDismiss) {
  // Remove any existing modals first
  const existingModal = document.querySelector('.order-confirmation-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  // Create the modal structure that matches your CSS
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'checkout-page'; // Add checkout-page class for CSS scoping
  
  const overlay = document.createElement('div');
  overlay.className = 'order-confirmation-overlay is-visible'; // Use your existing CSS classes
  
  // Function to close modal and trigger callback
  const closeModal = () => {
    document.body.style.overflow = '';
    modalOverlay.remove();
    if (onDismiss) onDismiss(); // Clear cart when modal is dismissed
  };
  
  // Get the confirmation component
  const confirmation = OrderConfirmation(orderData, closeModal);
  
  overlay.appendChild(confirmation);
  modalOverlay.appendChild(overlay);
  document.body.appendChild(modalOverlay);
  
  // Close modal when clicking overlay (but not the content)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });
  
  // Close modal on Escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
  
  // Prevent body scrolling while modal is open
  document.body.style.overflow = 'hidden';
  
  // Dispatch event for other parts of the app
  document.dispatchEvent(new CustomEvent('order:confirmed', { 
    detail: orderData 
  }));
}