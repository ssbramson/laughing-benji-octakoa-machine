// if ('serviceWorker' in navigator) {
if(navigator.serviceWorker) {
  // console.log('Service Worker Supported');
  window.addEventListener('load', () => {
    navigator.serviceWorker
    // .register('../sw_cached_pages.js')
    .register('../sw.js')
    .then(reg => console.log('Service Worker: Registered'))
    .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}

