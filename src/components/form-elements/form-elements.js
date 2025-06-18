export function createTextField({ id, label, placeholder = '' }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'form-field form-field--text';
  
    const fieldLabel = document.createElement('label');
    fieldLabel.className = 'form-field__label';
    fieldLabel.setAttribute('for', id);
    fieldLabel.textContent = label;
  
    const input = document.createElement('input');
    input.className = 'form-field__input';
    input.type = 'text';
    input.id = id;
    input.placeholder = placeholder;
  
    // State: Add/remove .is-active on focus/blur
    input.addEventListener('focus', () => {
      wrapper.classList.add('is-active');
    });
    input.addEventListener('blur', () => {
      wrapper.classList.remove('is-active');
    });
  
    wrapper.appendChild(fieldLabel);
    wrapper.appendChild(input);
  
    // Helper method to toggle error state
    wrapper.setError = function (hasError) {
      wrapper.classList.toggle('has-error', hasError);
    };
  
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

  export function createNumberPicker({ id, min = 1, max = 10, initial = 1, name }) {
    // ✅ Semantic container
    const wrapper = document.createElement('div');
    wrapper.className = 'form-field form-field--number';
    wrapper.id = id;
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', 'Number picker');
  
    // ✅ Semantic button elements with proper accessibility
    const decrementBtn = document.createElement('button');
    decrementBtn.className = 'form-field__number-btn';
    decrementBtn.type = 'button';
    decrementBtn.textContent = '−';
    decrementBtn.setAttribute('aria-label', 'Decrease value');
    decrementBtn.setAttribute('tabindex', '0');
  
    // ✅ Hidden input for form submission + visible display
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = name || id;
    hiddenInput.value = initial;
  
    // ✅ Semantic display element (not an input since it's not editable)
    const valueDisplay = document.createElement('div');
    valueDisplay.className = 'form-field__number-value';
    valueDisplay.textContent = initial;
    valueDisplay.setAttribute('role', 'status');
    valueDisplay.setAttribute('aria-live', 'polite');
    valueDisplay.setAttribute('aria-label', `Current value: ${initial}`);
  
    const incrementBtn = document.createElement('button');
    incrementBtn.className = 'form-field__number-btn';
    incrementBtn.type = 'button';
    incrementBtn.textContent = '+';
    incrementBtn.setAttribute('aria-label', 'Increase value');
    incrementBtn.setAttribute('tabindex', '0');
  
    // ✅ State management
    let currentValue = initial;
  
    const updateValue = (newValue) => {
      currentValue = newValue;
      valueDisplay.textContent = currentValue;
      valueDisplay.setAttribute('aria-label', `Current value: ${currentValue}`);
      hiddenInput.value = currentValue;
      
      // Update button states
      decrementBtn.disabled = currentValue <= min;
      incrementBtn.disabled = currentValue >= max;
      
      // Dispatch change event for form compatibility
      hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
    };
  
    // ✅ Event handlers
    decrementBtn.addEventListener('click', () => {
      if (currentValue > min) {
        updateValue(currentValue - 1);
      }
    });
  
    incrementBtn.addEventListener('click', () => {
      if (currentValue < max) {
        updateValue(currentValue + 1);
      }
    });
  
    // ✅ Keyboard support
    decrementBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        decrementBtn.click();
      }
    });
  
    incrementBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        incrementBtn.click();
      }
    });
  
    // ✅ Initialize button states
    updateValue(initial);
  
    // ✅ Build structure
    wrapper.appendChild(decrementBtn);
    wrapper.appendChild(valueDisplay);
    wrapper.appendChild(incrementBtn);
    wrapper.appendChild(hiddenInput); // Hidden input for form submission
  
    // ✅ Public API
    wrapper.getValue = () => currentValue;
    
    wrapper.setValue = (newValue) => {
      const clampedValue = Math.max(min, Math.min(max, Number(newValue)));
      updateValue(clampedValue);
    };
  
    return wrapper;
  }