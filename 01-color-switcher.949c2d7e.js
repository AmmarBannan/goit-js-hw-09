!function(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let n=null;function r(){return Math.round(256*Math.random()).toString(16).padStart(2,"0")}t.addEventListener("click",(()=>{n=setInterval((()=>{const t=`#${r()}${r()}${r()}`;o.style.backgroundColor=t,console.log("start")}),1e3)})),e.addEventListener("click",(()=>{clearInterval(n),console.log("stop")}))}();
//# sourceMappingURL=01-color-switcher.949c2d7e.js.map
