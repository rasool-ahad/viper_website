const GTM_ID = 'GTM-5LR4XDH3';

export const initGTM = () => {
  if (typeof window !== 'undefined') {
    

    window.dataLayer = window.dataLayer || [];
    function gtmPush(args) {
      window.dataLayer.push(args);
    }
    
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    script.async = true;
    
    document.head.appendChild(script);
    
    gtmPush({ event: 'gtm.js' });
  }
};
