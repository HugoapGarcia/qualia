(this.webpackJsonpqualia=this.webpackJsonpqualia||[]).push([[0],{23:function(t,e,n){},43:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),o=n(16),r=n.n(o),i=(n(23),n(7)),s=n.n(i),u=n(17),l=n(3),b=n(18),j=n.n(b),h=(n(43),n(0));var d=function(){var t="6094bad2b39d0c18494fb1fe6179385f",e="https://api.openweathermap.org/data/2.5/weather?",n=Object(c.useState)(null),a=Object(l.a)(n,2),o=a[0],r=a[1],i=Object(c.useState)(null),b=Object(l.a)(i,2),d=b[0],p=b[1],g=Object(c.useState)("Weather"),f=Object(l.a)(g,2),O=f[0],m=f[1],x=Object(c.useState)(0),v=Object(l.a)(x,2),w=v[0],F=v[1],C=Object(c.useState)(0),S=Object(l.a)(C,2),k=S[0],y=S[1],P=Object(c.useState)(!1),q=Object(l.a)(P,2),B=q[0],E=q[1];function G(){return(G=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("testing: "+o),t.next=4,j.a.get(o,{timeout:1900}).then((function(t){return t.data})).catch((function(t){return console.log("%cfail: "+o,"color: red")})).then((function(t){console.log(t),p(t.weather[0].icon),m(t.name),F((t.main.temp-273.15).toFixed(2)+" C");var e=9*t.main.temp/5-459.67;y(e.toFixed(2)+" F")}));case 4:return console.log("%cpass: "+o,"color: green"),t.abrupt("return",!0);case 8:return t.prev=8,t.t0=t.catch(0),console.log("%cfail: "+o,"color: red"),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){var c=n.coords.latitude,a=n.coords.longitude;r("".concat(e,"lat=").concat(c,"&lon=").concat(a,"&appid=").concat(t))})):alert("Geolocation is not supported by this browser.")}),[B,o]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"weather",children:[d?Object(h.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(d,".png"),alt:"weather"}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("h1",{children:O}),Object(h.jsx)("label",{children:B?w:k})," ",Object(h.jsx)("br",{}),Object(h.jsx)("button",{disabled:!o,onClick:function(t){return function(){return G.apply(this,arguments)}(t)},children:"Get Weather"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("button",{disabled:!o,onClick:function(t){return E(!B)},children:"Celsious/Fahrheit"})]})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),p()}},[[45,1,2]]]);
//# sourceMappingURL=main.07a587f8.chunk.js.map