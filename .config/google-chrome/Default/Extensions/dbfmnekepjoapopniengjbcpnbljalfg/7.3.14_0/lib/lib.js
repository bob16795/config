"use strict";window.infinity=window.infinity||{},infinity.id=chrome.runtime.id.replace("@extfans.com",""),infinity.browser=infinity.browser||"Chrome",infinity.isDev=!1,infinity.modules=[],infinity.imports={},infinity.iconSize=260,infinity.faviconUrl=(infinity.browser,"chrome://favicon/size/32@2x/"),infinity.wallpaper="https://wallpaper.infinitynewtab.com",infinity.api="https://api.infinitynewtab.com",infinity.static="https://basic-static-server.infinitynewtab.com",infinity.apiPro="https://infinity-api.infinitynewtab.com/",infinity.staticPro="https://static-api.infinitynewtab.com",infinity.require=function(a,s){return new Promise(function(i,n){var t=a.indexOf(".js");t+3===a.length?a=a.substr(0,t):(a="/modules/"+a+"/"+a,infinity.requireCss(a+".css"));var e=a.substr(a.lastIndexOf("/")+1);if(infinity.modules.hasOwnProperty(e))i(infinity.modules[e]);else{var r=document.createElement("script");r.setAttribute("async",""),r.src=s?a+".min.js":a+".js",document.head.appendChild(r),r.onload=function(){infinity.modules[e]=infinity.modules[e]||!0,i(infinity.modules[e])}}})},infinity.requireCss=function(i){var n=document.createElement("link");n.rel="stylesheet",n.href=i,document.head.appendChild(n)},infinity.sendMessage=function(i,n,t){chrome.runtime.sendMessage({name:i,message:n},t)},infinity.onMessage=function(a,s){chrome.runtime.onMessage.addListener(function(i,n,t){var e=i.message,r=void 0;return i.name==a&&(r=s&&s(e,n,t)),!0===r})},infinity.isZh=function(){return"zh-CN"==chrome.i18n.getUILanguage()},infinity.isEn=function(){return/^(en|en-GB|en-US)$/.test(chrome.i18n.getUILanguage())},infinity.i18n=function(n){try{var i=Array.prototype.slice.call(arguments,0);return i[0]=String(i[0]),chrome.i18n.getMessage.apply(this,i)||i[0]}catch(i){return n}},infinity.init=function(n,t,i,e){try{i?infinity.get(n,!0,function(i){i||infinity.set(n,t,!0,function(){e&&e(i)})}):localStorage[n]||(localStorage[n]=JSON.stringify(t))}catch(i){}},infinity.set=function(i,n,t,e){try{if(t){var r={};r[i]=JSON.stringify(n),chrome.storage.local.set(r,function(){e&&e(n)})}else localStorage[i]=JSON.stringify(n)}catch(i){}},infinity.get=function(n,i,t){try{if(!i)return JSON.parse(localStorage[n]);var e=null;chrome.storage.local.get(n,function(i){try{e=JSON.parse(i[n])}catch(i){}t&&t(e)})}catch(i){return null}},infinity.setting=function(i,n){if(void 0===n)return infinity.get("infinity-settings")[i];var t=infinity.get("infinity-settings");return t[i]=n,infinity.set("infinity-settings",t),infinity.settings&&infinity.settings.load(),infinity.sendMessage("settingChange",{type:i}),!0},infinity.data=function(i,n){if(infinity.init("infinity-key-value-data",{}),void 0===n)return infinity.get("infinity-key-value-data")[i];var t=infinity.get("infinity-key-value-data");return t[i]=n,infinity.set("infinity-key-value-data",t),!0},infinity.data.init=function(i,n){infinity.init("infinity-key-value-data",{}),infinity.get("infinity-key-value-data").hasOwnProperty(i)||infinity.data(i,n)},infinity.pixelRequest=function(i){var n=document.createElement("img");function t(){n.removeEventListener("load",t),n.removeEventListener("error",t),document.body.removeChild(n)}n.src=i,n.style="position: absolute; top: 0; left: 0; width: 1px; height: 1px; visibility: hidden;",n.addEventListener("load",t),n.addEventListener("error",t),document.body.appendChild(n)};