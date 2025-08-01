export function createTextField({
  id,
  label,
  placeholder = '',
  required = false,
  type = 'text',
}) {
  /* wrapper preserves your original classes */
  const wrapper = document.createElement('div');
  wrapper.className = 'form-field form-field--text';

  /* label (unchanged) */
  const fieldLabel = document.createElement('label');
  fieldLabel.className = 'form-field__label';
  fieldLabel.setAttribute('for', id);
  fieldLabel.textContent = label;

  /* input (unchanged classes, but now configurable) */
  const input = document.createElement('input');
  input.className   = 'form-field__input';
  input.type        = type;
  input.id          = id;
  input.name        = id;
  input.placeholder = placeholder;
  input.required    = required;

  /* focus ring */
  input.addEventListener('focus', () => wrapper.classList.add('is-active'));
  input.addEventListener('blur',  () => wrapper.classList.remove('is-active'));

  /* inline error message */
  const msg = document.createElement('span');
  msg.className = 'form-field__error';
  msg.style.cssText = 'display:none; color:var(--error-color); font-size:0.75rem;';

  /* validate helper */
  function validate() {
    const valid = input.checkValidity();
    wrapper.classList.toggle('has-error', !valid);
    msg.textContent = valid ? '' : input.validationMessage;
    msg.style.display = valid ? 'none' : 'block';
    return valid;
  }
  input.addEventListener('input', validate);
  input.addEventListener('blur',  validate);

  wrapper.append(fieldLabel, input, msg);

  /* expose error toggle for external helpers if needed */
  wrapper.setError = hasErr => wrapper.classList.toggle('has-error', hasErr);

  return wrapper;
}

export function createRadioGroup({ name, legend = '', options = [] }) {
  // Use fieldset for semantic grouping
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'form-field form-field--radio';

  // Optional legend
  if (legend) {
    const legendEl = document.createElement('legend');
    legendEl.className = 'form-field__legend';
    legendEl.textContent = legend;
    fieldset.appendChild(legendEl);
  }

  // Create each radio option
  options.forEach(({ id, label }) => {
    const optionWrapper = document.createElement('div');
    optionWrapper.className = 'radio-option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = name;
    input.id = id;
    input.className = 'radio-input';

    const customMark = document.createElement('span');
    customMark.className = 'radio-mark';

    const textLabel = document.createElement('label');
    textLabel.className = 'radio-label';
    textLabel.setAttribute('for', id);
    textLabel.textContent = label;

    // Make the whole option clickable except when clicking the native label
    optionWrapper.addEventListener('click', (e) => {
      if (e.target.tagName === 'LABEL') return;
      input.checked = true;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    optionWrapper.appendChild(input);
    optionWrapper.appendChild(customMark);
    optionWrapper.appendChild(textLabel);
    fieldset.appendChild(optionWrapper);
  });

  return fieldset;
}

  export function createNumberPicker({
  id,
  min = 1,
  max = 10,
  initial = 1,
  name,
  onChange,                 // ← ① accept callback
}) {
  const wrapper = document.createElement('div');
  wrapper.className = 'form-field form-field--number';
  wrapper.id = id;
  wrapper.setAttribute('role', 'group');
  wrapper.setAttribute('aria-label', 'Number picker');

  const decrementBtn = document.createElement('button');
  decrementBtn.className = 'form-field__number-btn';
  decrementBtn.type = 'button';
  decrementBtn.textContent = '−';

  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = name || id;
  hiddenInput.value = initial;

  const valueDisplay = document.createElement('div');
  valueDisplay.className = 'form-field__number-value';
  valueDisplay.textContent = initial;

  const incrementBtn = document.createElement('button');
  incrementBtn.className = 'form-field__number-btn';
  incrementBtn.type = 'button';
  incrementBtn.textContent = '+';

  // ---------------------------
  //  State & updater
  // ---------------------------
  let currentValue = initial;

  function updateValue(newValue, triggerChange = true) {
    currentValue = newValue;
    valueDisplay.textContent = currentValue;
    hiddenInput.value = currentValue;
  
    decrementBtn.disabled = currentValue <= min;
    incrementBtn.disabled = currentValue >= max;
  
    hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
  
    if (triggerChange && typeof onChange === 'function') onChange(currentValue);
  }
  
  // ---------------------------
  //  Event handlers
  // ---------------------------
  decrementBtn.addEventListener('click', () => {
    if (currentValue > min) updateValue(currentValue - 1, true);
  });
  
  incrementBtn.addEventListener('click', () => {
    if (currentValue < max) updateValue(currentValue + 1, true);
  });
  
  // Initial setup (no onChange)
  updateValue(initial, false);
  

  // init
// init without triggering onChange
currentValue = initial;
valueDisplay.textContent = currentValue;
hiddenInput.value = currentValue;
decrementBtn.disabled = currentValue <= min;
incrementBtn.disabled = currentValue >= max;


  // public API
  wrapper.getValue = () => currentValue;
  wrapper.setValue = v => updateValue(Math.max(min, Math.min(max, v)));

  wrapper.append(decrementBtn, valueDisplay, incrementBtn, hiddenInput);
  return wrapper;
}
