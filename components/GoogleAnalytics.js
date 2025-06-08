import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <Script id="google-analytics" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        }); 
      `}
    </Script>
    <Script type="text/javascript" data-cmp-ab="1" src="https://cdn.consentmanager.net/delivery/autoblocking/d1fa9e6da1153.js" data-cmp-host="a.delivery.consentmanager.net" data-cmp-cdn="cdn.consentmanager.net" data-cmp-codesrc="16"></Script>
  
  </>
);

export default GoogleAnalytics;