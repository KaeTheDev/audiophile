// navigation.js
(function() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    if (isGitHubPages) {
      const basePath = '/audiophile/';
      document.addEventListener('DOMContentLoaded', function() {
        const logoLink = document.getElementById('logo-link');
        const homeLink = document.getElementById('home-link');
        const headphonesLink = document.getElementById('headphones-link');
        const speakersLink = document.getElementById('speakers-link');
        const earphonesLink = document.getElementById('earphones-link');
        
        if (logoLink) logoLink.href = basePath;
        if (homeLink) homeLink.href = basePath;
        if (headphonesLink) headphonesLink.href = basePath + 'headphones.html';
        if (speakersLink) speakersLink.href = basePath + 'speakers.html';
        if (earphonesLink) earphonesLink.href = basePath + 'earphones.html';
      });
    }
  })();
  