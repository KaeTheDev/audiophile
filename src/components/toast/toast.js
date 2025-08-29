export function Toast() {
    const toast = document.createElement('div');
    toast.className = 'toast';
  
    let queue = [];
    let isShowing = false;
  
    function displayNext() {
      if (queue.length === 0) {
        isShowing = false;
        return;
      }
  
      isShowing = true;
      const { message, duration } = queue.shift();
      toast.textContent = message;
      toast.classList.add('is-visible');
  
      setTimeout(() => {
        toast.classList.remove('is-visible');
  
        // Small delay to allow animation to finish before next
        setTimeout(displayNext, 300);
      }, duration);
    }
  
    toast.show = (message, duration = 3000) => {
      queue.push({ message, duration });
      if (!isShowing) displayNext();
    };
  
    return toast;
  }  