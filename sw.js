if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let f={};const a=e=>n(e,o),d={module:{uri:o},exports:f,require:a};i[o]=Promise.all(r.map((e=>d[e]||a(e)))).then((e=>(s(...e),f)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Duwd9V8n.css",revision:null},{url:"assets/index-xcS8rgLh.js",revision:null},{url:"index.html",revision:"e922114e5a1073ab0643bb69ff75fa15"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"8baa20a40f4f8d28d3ffea9669af3912"},{url:"pwa-64x64.png",revision:"8d858e292f0dc17a946d98ef9fa29526"},{url:"pwa-192x192.png",revision:"0621b3a5cc7a09763dff0904435a06d6"},{url:"pwa-512x512.png",revision:"4d51283b305a88ffeeb5d3dadc30cac6"},{url:"maskable-icon-512x512.png",revision:"d3eb2b523a4c6a951bf8150171a3f484"},{url:"manifest.webmanifest",revision:"8b860fc9907821ba5840f80f59adb74a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
