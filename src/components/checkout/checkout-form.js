import { createTextField } from '../form-elements/form-elements.js';
import { createRadioGroup } from '../form-elements/form-elements.js';

export function CheckoutForm() {
  const section = document.createElement('section');
  section.className = 'checkout-form';

  const title = document.createElement('h1');
  title.className = 'checkout-form__title';
  title.textContent = 'Checkout';

  const form = document.createElement('form');

  // 🧾 Billing Details
  const billingFieldset = document.createElement('fieldset');
  billingFieldset.className = 'checkout-form__section';

  const billingLegend = document.createElement('legend');
  billingLegend.textContent = 'Billing Details';
  billingFieldset.appendChild(billingLegend);

  billingFieldset.appendChild(
    createTextField({ id: 'name', label: 'Name', placeholder: 'Alexei Ward' })
  );
  billingFieldset.appendChild(
    createTextField({ id: 'email', label: 'Email Address', placeholder: 'alexei@mail.com' })
  );
  billingFieldset.appendChild(
    createTextField({ id: 'phone', label: 'Phone Number', placeholder: '+1 202-555-0136' })
  );

  // 📦 Shipping Info
  const shippingFieldset = document.createElement('fieldset');
  shippingFieldset.className = 'checkout-form__section';

  const shippingLegend = document.createElement('legend');
  shippingLegend.textContent = 'Shipping Info';
  shippingFieldset.appendChild(shippingLegend);

  shippingFieldset.appendChild(
    createTextField({ id: 'address', label: 'Your Address', placeholder: '1137 Williams Avenue' })
  );
  shippingFieldset.appendChild(
    createTextField({ id: 'zip', label: 'ZIP Code', placeholder: '10001' })
  );
  shippingFieldset.appendChild(
    createTextField({ id: 'city', label: 'City', placeholder: 'New York' })
  );
  shippingFieldset.appendChild(
    createTextField({ id: 'country', label: 'Country', placeholder: 'United States' })
  );

  // 💳 Payment
  const paymentFieldset = document.createElement('fieldset');
  paymentFieldset.className = 'checkout-form__section';

  const paymentLegend = document.createElement('legend');
  paymentLegend.textContent = 'Payment Details';
  paymentFieldset.appendChild(paymentLegend);

  const radioGroup = createRadioGroup({
    name: 'payment-method',
    legend: 'Payment Method',
    options: [
      { id: 'e-money', label: 'e-Money' },
      { id: 'cod', label: 'Cash on Delivery' },
    ],
  });

  paymentFieldset.appendChild(radioGroup);
  paymentFieldset.appendChild(
    createTextField({
      id: 'e-money-number',
      label: 'e-Money Number',
      placeholder: '238521993',
    })
  );
  paymentFieldset.appendChild(
    createTextField({
      id: 'e-money-pin',
      label: 'e-Money PIN',
      placeholder: '6891',
    })
  );

  // 🧩 Assemble form
  form.appendChild(billingFieldset);
  form.appendChild(shippingFieldset);
  form.appendChild(paymentFieldset);

  // 📦 Return full section
  section.appendChild(title);
  section.appendChild(form);
  return section;
}
