// src/utils/validateForm.js
export function validateForm(formEl) {
    if (!formEl.checkValidity()) {
      formEl.reportValidity();  // native browser hints
      return false;
    }
    return true;
}  