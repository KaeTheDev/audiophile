export function GoBackButton() {
    const button = document.createElement('button');
    button.className = 'go-back-button';
    button.textContent = 'Go Back';
  
    button.addEventListener('click', () => {
      window.history.back();
    });
  
    return button;
  }  