import { createTextField } from '../form-elements/form-elements.js';
import { createRadioGroup } from '../form-elements/form-elements.js';
import { createButton } from '../button/button.js';

export function CheckoutForm() {
  const section = document.createElement('section');
  section.className = 'checkout-form';

  const title = document.createElement('h1');
  title.className = 'checkout-form__title';
  title.textContent = 'Checkout';

  const form = document.createElement('form');

  /* ---------- Billing ---------- */
  const bill = document.createElement('fieldset');
  bill.className = 'checkout-form__section';
  bill.innerHTML = '<legend>Billing Details</legend>';
  bill.append(
    createTextField({ id: 'name',  label: 'Name',          placeholder: 'Alexei Ward',      required: true }),
    createTextField({ id: 'email', label: 'Email Address', placeholder: 'alexei@mail.com', required: true, type: 'email' }),
    createTextField({ id: 'phone', label: 'Phone Number',  placeholder: '+1 202‑555‑0136', required: true, type: 'tel' }),
  );

  /* ---------- Shipping ---------- */
  const ship = document.createElement('fieldset');
  ship.className = 'checkout-form__section';
  ship.innerHTML = '<legend>Shipping Info</legend>';
  ship.append(
    createTextField({ id: 'address', label: 'Your Address', placeholder: '1137 Williams Avenue', required: true }),
    createTextField({ id: 'zip',     label: 'ZIP Code',     placeholder: '10001',               required: true }),
    createTextField({ id: 'city',    label: 'City',         placeholder: 'New York',            required: true }),
    createTextField({ id: 'country', label: 'Country',      placeholder: 'United States',       required: true }),
  );

  /* ---------- Payment ---------- */
  const pay = document.createElement('fieldset');
  pay.className = 'checkout-form__section';
  pay.innerHTML = '<legend>Payment Details</legend>';

  const radios = createRadioGroup({
    name: 'payment-method',
    legend: 'Payment Method',
    options: [
      { id: 'e-money', label: 'e‑Money' },
      { id: 'cod',     label: 'Cash on Delivery' },
    ],
  });
  pay.append(radios);

  const eMoneyNumber = createTextField({
    id: 'e-money-number', label: 'e‑Money Number', placeholder: '238521993', required: true,
  });
  const eMoneyPin = createTextField({
    id: 'e-money-pin', label: 'e‑Money PIN', placeholder: '6891', required: true,
  });
  pay.append(eMoneyNumber, eMoneyPin);

  /* ---------- Assemble ---------- */
  form.append(bill, ship, pay);

  /* submit button INSIDE the form */
  const submitBtn = createButton({ label: 'Continue & Pay', variant: 'primary', type: 'submit' });
  form.appendChild(submitBtn);

  section.append(title, form);

  /* Toggle e‑Money fields */
  const eMoneyRadio = form.querySelector('#e-money');
  const codRadio    = form.querySelector('#cod');

  function toggleEMoney() {
    const on = eMoneyRadio.checked;
    [eMoneyNumber, eMoneyPin].forEach(wrap => {
      const input = wrap.querySelector('input');
      input.required = on;
      wrap.style.display = on ? '' : 'none';
    });
  }
  toggleEMoney();
  [eMoneyRadio, codRadio].forEach(r => r.addEventListener('change', toggleEMoney));

  return section;
}
