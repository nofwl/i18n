!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";const e=["c","k","p","s","p-ph","c-ph","k-ph","p-i","c-i","k-i"],t=e=>window.localStorage.setItem("lx011I18nLang",e),n=()=>window.localStorage.getItem("lx011I18nLang"),i=(e,t,n,i,s)=>{n.forEach(n=>{null===n.getAttribute("i18n-o")&&function(e,t){var n;if(window.XMLHttpRequest&&(n=new XMLHttpRequest),!n)return alert("Giving up :( Cannot create an XMLHTTP instance"),!1;n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?t(JSON.parse(n.responseText)):console.error("There was a problem with the request."))},n.open("GET",e),n.send(null)}(e,e=>{const a=n.getAttribute(i);s===t&&(n.innerHTML=e[a]),s===`${t}-i`&&(n.src=e[a]),s===`${t}-ph`&&(n.placeholder=e[a])})})};window.addEventListener("load",()=>{let s=document.querySelector("head meta[i18n]");if(s){s=s.getAttribute("i18n");let a=n();const c=document.querySelectorAll("[i18n-lang-btn]");if(a)c.forEach(e=>{e.getAttribute("i18n-lang-btn")===n()&&e.classList.add("i18n-active")});else{const e=document.querySelector("[i18n-def]")||c[0];e.classList.add("i18n-active"),e&&(a=e.getAttribute("i18n-lang-btn")),t(a)}const o=()=>{const t=s.replace("{lang}",n()),a=t.match(/(.*i18n\/)(.*)/)[1];e.forEach(e=>{const s=`i18n-${e}`,c=document.querySelectorAll(`[${s}]`);if(c.length>0)switch(!0){case/^c((-ph)?|(-i)?)$/.test(e):i(`${a}/pub/common.${n()}.json`,"c",c,s,e);break;case/^k(-ph)?$/.test(e):i(`${a}/pub/keywords.${n()}.json`,"k",c,s,e);break;case/^p((-ph)?|(-i)?)$/.test(e):i(`${t}.json`,"p",c,s,e);break;case/^s$/.test(e):document.querySelectorAll("[i18n-s]").forEach(e=>{const t=Array.from(e.classList).filter(e=>!/i18n-*/.test(e)).join(" ");e.classList=t,e.classList.add(`i18n-${n()}`)})}})};o(),c.forEach(e=>{e.addEventListener("click",()=>{n()!==e.getAttribute("i18n-lang-btn")&&(c.forEach(e=>{e.classList.remove("i18n-active")}),e.classList.add("i18n-active"),t(e.getAttribute("i18n-lang-btn")),o())})})}})});
//# sourceMappingURL=i18n.umd.js.map