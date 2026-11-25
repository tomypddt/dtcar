'use client';
import Link from 'next/link';
import {useEffect,useSyncExternalStore} from 'react';
import {usePathname} from 'next/navigation';
const key='dtcar_analytics_choice';
export const measurementId='G-NMJEB0W2HP';
type AnalyticsWindow=Window&{dataLayer?:unknown[];gtag?:(...args:unknown[])=>void};
function subscribe(callback:()=>void){window.addEventListener('dtcar-consent',callback);window.addEventListener('storage',callback);return()=>{window.removeEventListener('dtcar-consent',callback);window.removeEventListener('storage',callback);};}
function choice(){try{return localStorage.getItem(key)||'unset';}catch{return 'unset';}}
function save(value:string){try{localStorage.setItem(key,value);}catch{}window.dispatchEvent(new Event('dtcar-consent'));}
export default function Analytics(){
 const consent=useSyncExternalStore(subscribe,choice,()=> 'pending');const path=usePathname();
 useEffect(()=>{const w=window as AnalyticsWindow;if(consent!=='yes')return;w.dataLayer=w.dataLayer||[];if(!w.gtag){w.gtag=function(){
// gtag uses the standard arguments-shaped queue entry.
// eslint-disable-next-line prefer-rest-params
w.dataLayer?.push(arguments);
};w.gtag('js',new Date());w.gtag('config',measurementId,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+measurementId;document.head.appendChild(script);}w.gtag('event','page_view',{send_to:measurementId,page_location:window.location.origin+path,page_referrer:document.referrer?new URL(document.referrer).origin:'',page_title:document.title});},[consent,path]);
 const revoke=()=>{save('no');window.location.reload();};
 if(consent==='pending')return null;
 return <>{consent==='unset'?<aside className="analyticsChoice" aria-label="Analytics preference"><p>Allow optional Google Analytics cookies to help us understand page visits and contact-button clicks? <Link href="/privacy/">Privacy details</Link></p><div><button onClick={()=>save('yes')}>Allow analytics</button><button onClick={()=>save('no')}>No thanks</button></div></aside>:<button className="analyticsSettings" onClick={()=>consent==='yes'?revoke():save('unset')}>{consent==='yes'?'Turn off analytics':'Analytics settings'}</button>}</>;
}
