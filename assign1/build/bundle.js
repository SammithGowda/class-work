(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),c=t.n(r),o=t(645),a=t.n(o)()(c());a.push([e.id,".rum {\r\n  color: goldenrod;\r\n}\r\ninput {\r\n  color: red;\r\n  margin: 20px;\r\n}\r\nth {\r\n  padding: 10px;\r\n}\r\n",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,c,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(a[u]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),c&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=c):l[4]="".concat(c)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var u=e[s],i=r.base?u[0]+r.base:u[0],l=o[i]||0,d="".concat(i," ").concat(l);o[i]=l+1;var p=t(d),Z={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)n[p].references++,n[p].updater(Z);else{var m=c(Z,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function c(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,c){var o=r(e=e||[],c=c||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=t(o[a]);n[s].references--}for(var u=r(e,c),i=0;i<o.length;i++){var l=t(o[i]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=u}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var c=void 0!==t.layer;c&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,c&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var c=n[r];if(void 0!==c)return c.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),c=t.n(r),o=t(569),a=t.n(o),s=t(565),u=t.n(s),i=t(216),l=t.n(i),d=t(589),p=t.n(d),Z=t(424),m={};m.styleTagTransform=p(),m.setAttributes=u(),m.insert=a().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=l(),n()(Z.Z,m),Z.Z&&Z.Z.locals&&Z.Z.locals;const f=document.createElement("h1");f.innerHTML="What do you want to do",f.classList.add("rum");const h=document.createElement("input"),y=document.createElement("input");y.setAttribute("type","date");const O=document.createElement("img");O.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX////d3d3c3NwAAADe3t7b29v5+fnu7u7f39/a2trk5OTx8fHX19fj4+P6+vro6OgXFxcICAi1tbVDQ0Orq6sQEBAkJCRxcXFhYWErKysgICCampo5OTl/f38aGhq+vr4yMjKAgICKioqTk5NLS0tTU1PLy8ujo6NlZWVsbGxRUVFaWlo2NjbDw8OwsLCYmJj8n7tTAAAbZElEQVR4nO1dCbuiOhKVTUECuKDggqAiqIj+/383VSEogXDVO/e29mvT8/W8jvGYk7WqqCo6nVvpyxIWGf70brXdohY/kJuNsbraWNNltag23gJZkjpPtP4w/DD8MHwzhs6vMfxR5CpDu+OoOi2WLPOti2pZq/ZDl1StqNecCoh0rZbfARlKBbkcPPiOUW0tsaFTNVJtbJVDqvHQqkUaI/0y5Nsc2rS1JmNRiWSYldaaQatlInH9IEQq6rnBM1Siq7TWeAdkmVv/5YxbuqVWWxtsui2LGzxNZ4tGrzYmui6ptbX0QuT6KjVo0WRSHQ9bNVi9JnGNZfYBqTaWCAxfUf0OyFA6/aJYTt/p3oppFdWOo5uV6h6r7tPG9rWx1XeK6kpj23oP5A5brZKmG93bIPS06zruV0bsVqtVG8NZqDUbG++B3GEnjirrPPT1Tqq2lm/V1cb0Omo0Nt4D+cPww/DvYSi1tq5ITt/qx6uR2VkKMiAHbTKpQpcstdKYSDqrJ9XG8G92DjZPvJcjd8oJNywOupQYDd2q9uMq7lWPadOAc7s5eMZ7ILM5tHSZb82uHJVfHkRi42Tw/eiXgmQV2ngPZDaHhBCZa01YvUrEu0XlGoM81TbSL0fu9IpiYqn8p1mp7/Wu/7j+Z69r9nrN9tx33wK5VyVrFWIPbAXCyelsr+sGJ9QTiUlJXGOialpRX1UXXoWMpcrwJ6wp8q/Zab6H/LFEfRh+GL4e+V9jWFjmQK7jrswuu3NBfqoaSPqqWsJw0KqkqY1+vAy5PocqLQaMFj94RT0IfBw0q1Y5q6aha7JEq7lpeRUylCpDS6NFt3RSaW1LBqsnWrUfRFZpNXcv24Zh6EV7/l5+ETKUTsUq1S2MVbplOTdjlW06OjNt9XvVxg4zgvV7FcuW2Xf67APLrjR+FTKUDtqyNFmTNIMXeVm9weupoM3QelJVPU0LhWCsr1rWO8Z7IHfYaoW9ylnm1GLJw7bud271AFpUc3pqT9YYilTVcbT3QK7YaTjzwY9aU16K/O9Yol7djw/DD8PnGWq/1o8/jVxaE3XD4loXNjxJk1TO5idpZT3XD0lqt/m9GplZEyVZ5VszQ4euEv4ZGDPu8RcRyItSm83v5cglQ0I0Tj5gZhxiVKVfkAIJMx5xxmYZJQ9azUke74FcLewRI4JW7VblM0qiWVxjg/WJa6xqpZ+BwTV+EXLN1max+VR51dMo149c1QD6RGWPFDg3D81SGTKnAbwKucaQ+abghuV8U65nQFVPtdSyXuf7YehteuoLkKV/zYrxYfhh+GH432D43k9mLKm04nHQpKyVbreW3ekbzMIgqfxFBB0pmr8Dcs2a2CssPCAfWLwwQS08msQ/5UNLUNGea2xAdWE7egNk/F+n9HbrO1XnOLNX+tE5nH9d/+o0Z95MeqZjWYX1zqq0Zf51L0fuFGZTQzcMw74NAlrmaL3MawBEL9pLeqVxj+gWq+c0gPdAZtZESa77+TFreU0xU6/LntNxdM0oqjml9j2QSw0Y1Ma6ck3rJYn3einkPZnrh0NUOAVovUBPfRBZ1/BE/P+QJRFyixXDZOMhqbwWp5bPUuTqWpJl9WFbgymJkWVd0gG8ZuT9RTsNuZa+Xe58u2vcqk2ohj8lQwG0sB+2wyFfC7SCArz/CEM4lUh4LYkqs9NINm61IdFl2PBWz+x2erosgm70A087PREgw+zlSZIQYkiWLv06Q1sieeguriU9szIanW+1C3d0HkFdmBDTweV1tx8we0k+GqVC5FGauq57DnOg+dsMTSmHn9sEayz492Z7K0FQ1K+DoKi+AFNYb/r9Vdq1kpGbXrYbCsojXy6LDZTtdpG6o5Heu3b7hxnSc8lWYf42a8/fl+Xg3cqtdl9UANMFzKMqguafnzj5Od1sAu8gQIaBO+A/AiC9WITJVQD7kSczV3uGisvDVnN34x128bhaYlaadUf/EKTpKLEK85fWsPlpOt7A3Y6TnLfBPjseRbhH+vdul/nAer11w5xZaEwilZ5hTWti2eeymKW1ThJ57pmsOLm79bI4mrEynd0py9hfL0aG2XSm4zzsemR0Cfx4GQlBIiin0xIo7zLKcTECjvAtxDLbkNv9+sxupVmVbF+TYKS93XI6GD5YJqsoPmzD66roEhSC6VLhdBwyWgT+OJoPFCHKZDIYDObT6ew0jo8ZrIvNws1JLSpIjMwWsaHxYrrYF8OSpATW6O60Uh4uw+nY35yvi6VL4Oq2GjY/B6bQy8b3cIeTwWoaLcc731tfgCLniyFGZtZEWepzkV2GOLKrLxl5uj6MZ0PFY+e42yjV+vNlpqyW2dpNzFs/DFlg8yvWxkqZwFdFyCmcscdpwXKFS/8AFENe5RMiszkEmY9nKAnnsK9r+QIYRhMl7TxU1KUy5RnKGAbZnEM8v3bLgTJohbJBgdLDA5KcTKM4O6wXZ8Kr7SLkPjNu67yBnOgtc6jl6eYQzx5mqC2VOcfQtkBUllD64sLi2BwOFOUuZOjPleFgNt556zSsxpAaILNiZGjdYwhpN6wYUsscfp8h24d2L7kV+yacP8Gw0w1nirKKxlmwSSumcJs+nKDAOZ6WDBxWKZwq+qOWqG8zpCdNt+eA3FJu0dFZ1Z2yI88wtDskVoar5XEfLPLbyoOxC0ejAhyEWCJZVPTBx6Jacw5/mGHgErNraSDOjtztdlOU7ZYKrcQx7ecYYkcyZThfHr3Nubjnuz2L5G66KMFTkGJHKMOq6HCj65L86wwTlYSjc7q4bDzvQAvIYNtLClOZk775HEMYkb6iDKLYD1JcHF1HS0Iq8oHMd0B8KtKCDHsOExhEjIh92F767X2YgM6AQrWXZbuiZFkhZrqjPHHk5+aw09niRbvzFnCE2RLyg7E7+D4DR+HOC2CdpOfUDRMDn17x1sTb40O56rlnwj4ChsfHbwsZbouxv3bPi23g7f0sHi+XUVQIYSeUTvbeGsSTM4wA3PhwHz7KsOcrg1PsbUegUMLgbYJDAX6i4EsU8I4g4BUsc+I4Vp8zsDnXoNt+pwgHRqlHwuURLoLj6TmGh/V249EORNF0Ol+t5vPBYIUyWATSNcpgW5ck7tofPz6H9kYZRjtvk4ZnoOdloAosTzMEh0LhZxFIeHFWyHcOHmgmKbnwkncR0g23GLrM2RbIj7unGQaH7DieTVeDCSeETUDUhG5kcCiOQjcQMrRZXH295CtlGnvrBahy3n4Hgzefzyc1CW8+XcY7D8YvTJCSyULUZS4XQ6k9qTpRDWQYPs/QC/ZHEKpX2IE5SCM+FugUJTmZgwyWQS9a59DpCijazliZj/cBKN2HLF7OVkNEmy99n6GvKMnJHMA9mMbEsq+RzqpBBBowAVkEtcn+d+bwEIM2AvxWhzQvFwgcgOeFD70YDmAe/WCbbsQMe36wGTV8J2w7Qz7BZn3IxtEUB+8UjJJSXoOZcBczKsSexkBxO8qtqwYMOqlgleroJF5h6D7GsI8M91nRhY1j1j42jQ0O9XwGB/+2haGOk7PpNhbrHuQa3wsOu3ExgUm/W/umk2dQP5gudwfYBonZK/OIgNhYRbtZMdDm0Q9TYDhQoj1dDfvMj+rd7nSyHVss+91AmcW75WSiTDbNdrRsZrBUZ2PfA4ais9SBewH636j3lEmUeR7s78lQGY/E4MYefnl+2mUb0MKBGQjn+LfI5l0y7MGF6C+n1S1NGrjcaRIdx7ADozOuLFEn7GQPknQU79f7VoZDJRQzPPjLGUx8JjU+ZqU7Ajl9CkOxSUF+gqVIDZtf2dpMUIH38WkFxyIt86FiNGBXyqr4dDUYTMcoIMxySqalF3vYoqej185QtCsCZLg/zmGJHqw2aCjJCbStZQZXZ5ggQ/Qz+YqhjeYGOJ1PsyiCGycChqQBP4QfP52WcP+exsdjBGdcc55vxe501/QYbGM4gWlqnmwbZJidBkMlMDv1LVgtIKevpijhnUOiyvi49Wt7aQ+kj/UBTuj4GO+OY+EcgiILhzQUH/4s58r8/MUY4yeODxMVt+3DiVBK3EL9Lobpjegp1MrR7uQDWCK7AwiIiVRYpnmGZQIVEAVoN60EhVyP2jN9McO5MjllaOT01l6MJo/rz4tuNvzQhDNvuWtlOIRVWqdAGeI3khbg20+uC2vRNs0xvQtmeOm3NLYwrJjkoCOA4J66Lgjh05Y5HO/hEoKBOEYDZVkxZVYewXBfcVEdEkreuA8HStCoXyjDGZyjyqZGSDCZZqbgab0ZXQ1itlHJT1MpfQlkG9UATRNUuzw8f8XQ97Zput7jMXOokqECYqLVrw4rhkl8nuF0uKrfE7ZKrHpbd1AzprTrhyDYSCDAkYT0HTK6w9BNA7qM89oK63uz8br+HVCHoqcZgjIS18WdcByd9Fpdfwzq5C5I87JxK0ONqsv4qBKOL2R4/HIOWxSiM96T9cWUz5VpK8NJC0MQrjx++Lo2XD1QyRUbduJkFnuXsJzddoY0rZQG/4cMz/cYbg+4DU/1j1MFjninVtk7KqunGcIWqB/T5k5ZKX69cQjbfLyHjWjfYahS11pYqkavYPjFKj2ALA3bULDALspk1ZSEQKWNnmUI+lJ9pCxYkErGnze2bRYMz6XN717OPUmlDL/eh8Bw7ePnee1TUF5BTm2IYXiDt8k0g/q6YwxhLdSryQkYHhsHKt5G/vqc9K4Mv8q5Z+iW3LuzD5e4StcZHHaN2bLXQoZ4vz3LcN5sXzBsSPnIMAvcvNTdvs65JxkETnvzy32IDC8BMFQUtfYpyGigLDaUgfQbDFfNTU4iIcMBCiGBe53DOzn3LEk1765SZLgDkU2pH93dQMjwDAKyYE6+ZDhpninJTBFcIZ0lZZiWj/nu5NwzZPTsN7++LUCYR/sgCKX1+xcYrvAMrJXRN+Zw0qxPZkNgWD9/OmNguPPScpU+kHOv21dDvNDbGIJcmrqbbDxXZnUZsGBYU4fsLxkKmDCGDckhmQ7nytipC6pLlHtBCEnQne+xnHsSqlFZu26xC0BuBZFGierj2fUEDOkcRi2rdCaew0mEV1GNCswhZVgrlOFh4+Y6DbR4xCdK/VsZqnd0/A/DD8M3ZljPX/d3M7yTcw+tgqZWMGy9Lb7DUCSFfcVwJpDI4bZYCRiOKcMtZXg/5x5V0+XCx+dvYbgE3YzOoapqD+bc0+8zPL8dQ7jxLf3hnHuFF1Or5L3z3EKmeSOG3ibNZY08lnOviz58632r5L3MvEUaoLH0PRiOcVl5ixFB78O7OfcwI05pp2k7S1G32HpPMnz2LH2K4SQC3eKqHz6Sc+++9rSl2pOI4aBlDp+TvFsYKuJVCroFMCy1p0di1/4sQ5Gd5sPw72K4adT/1xhu/+MMh8rlzzBk1kSQUrVHGF6oneZU+zW7YNiw05yp7UzIcI4DUn9+dmm1YogZDmq3hXgOy3hTDLoy79i8cQ6POIc1O43dMofuHYb1UthpHr0PZzWGX+fcs0AML258b/clQzqH05qtrW0O0y8ZNpqzORTb2poMh2gcu9lL7+TcU3WMVHWoz8JXUttijXLppMEwEDLctlv1581HA/TpBzDcNxkqImuigh71MIcWDbR7KOce6hZfSN4gBLrn7R5t3g9ahNdwFrQxVAQ/AiNymii7ejW1eTctwooyRxOum+iq9mDOvTv6IQjyZ7pPH2YItULvy8JjqA5SMBwox4cY2sgw9r3LObHQF+OhnHt3rBioH462hyMspLo7k31RBoOmk5OvrISeCkSBFSZwowuUCT4z6NT8+tQlPl2r8ev0qK8H6hbouP8jlijKcOHtZoIdBzfZoPFEqhcrU7EvBqh1ocBjDM4r9M2qe1o5sTKvMezgZTuc7fZBinGfP2RrQ4Zh6mUnwXHnip4Bw009EzLsOGJXmT2cHVHT56ybKZM6w27hQHVYp7mh/hRD1PGZU+yw/jEZK7B/amMPl0UkZih2ljF3cHZEw6Y4d4FVXd/kXXyE7nubcyLyGPo+w/y83seroVI/2Ow8dZMaw14GfWhjKCr6WJnGy4HiN3wu3dStD0k4RzfXYAvbUPpRhnDU7EBqvggnga8jeNiJGNrC5vTMnB7hMhrXRSbBT+ET9FnsbS4jYrUybOSvU+/cFsfAzfNLgO4my/pTYEEp3DQf92SnBuGsGL87xe7k9DZco9eXpurygzn3pPvWxISkG7jzh8NLu9dZ0QXYhdiHBxkiWm+MOysbT5SZ9lU7LOYJ9ni83y5SjEdWtQdz7t2bw52XJsTdUse2qNXBlZUkQp+lZ6IRFjgkhz3uksO9tptCoLm4eBuCeHY/555B89eZyZe6BYhI5wRjhpewkuoaFFe6nWROnVyzx6OCiDKcnOL9IR5PhsqixfOymMMuHK6rWbwPLuFNMLqTc0/V1Uf0ww0cppdgH5/gfvcaznSVAlfhcL6MD5lQLhWU7uikDObjnefts9lAmaQtLuS0bCdwzCypG/RtJO7k3FNl1PG/1g/x9nETjAzNxtEE7uBmq7K4M+rnndEo2YcYBnNluIqO+zWig9Q0aejBty57Cvq/HQ/B5VzZsA/l3GNeX5OGv0ynE4GISRmSMKUU5xhQkNxG+nby9AiNej3FfuAdYZXOv+YGag8J8BtzWKPBdrEJcAAVZZBaneZN0e2th0U4wn69veqG9JPH7DSM4WJUL9OSoZ6MLpvDLl5iwM587yb8fuwllyNGRMzGGNhSxAE3wG7FdTHqpIgmoqEwqXvZ4ixitMp0cXXLKwfDXZ9gAlez5XHvbUEkfZahLYdbKlkP6zHlcF6sxgA6Svokd7frg79bzlZQq8xiECwwKDAMz+nWR91qCNMx3kF30YNqRb98N2R9Dp2GEcRgKVgjfhxNQdBVhuh5jUlCwjBHaQQHb7KaR2MQuTdpJdXEoww7/RyuC2Hygck82nnBAgR5iYTuBaMO4/F0umqMBaw24HfcB9CFNPDj2WrCZxzg/oV5B1bz2WkJU36Ab4zyJA9TzDURR7P5RIQOjY/QFmYw0dSnGTpJiisrmk1vhSV5WOIpkOaaquokPy+2Gzj0juNTNF2tJrSv9K8BNAd+PmySbToqDqXZvJotooZMM0fEx2O299bYaQInYugu1t5+F48xNG8yKaBpMoc5JmDACMfNxQ3hNn8+554Jd/7msD828n0c4x2eAqBPa6A2A0XXBY4HjBEcF+Mxp51eLsc0A8R64bphMtquoaPxNdtHLZEI1h8x98fBO3gYVAizgr5NdAQD70BHkI7JnEY2npbLeJfRUFJsK1mS8QDDWv46MxnBLoNtVuZb8VnKFg8mcITBDYVEmyTJ2YWJhH7s/Wu/49j3sa/b1B0lOTESlwYJ+5VkMNCcAfs+y+KyhvZb+hVMx4qyiUNojOza87PdkQ03HYo9RuEutsiPqLpm8CkmHsu5R8HhxL4WljPnksISgi6U0XCWg1mJMBB4g71mUV+wkDcgK47CxHAsgy3ndVBJ6AP/uiKzfD6Ygcd1RzkhmAOabq2ulOQjN93Cdt8X4FmZygZan+Fgg7uPGIb2dM49x4Fe4RFeTV9RFAyidq6Z8eyuYyQYqY7h5JVo9U0Rbp0Ti/oEmhaGOZQQBU4FebGgwCNof3ufh9lzHEsnSXjG375Gq69x8CjBnFTe/eE8l3MPRkEC7CTPicacMmUSjkJ6WidE5xrrspFQkucwZLdbGLKYeQIDyURIGDc5Ka+/cATKDovXMYrMWzmmEtC4nHsGyJAgKcNOKH6BFhwNDISH1v9Pzj3M66NbFrllLLS7hGA+M1m3eMMc6esqVGFHLExKjcWQEjwMdRVflX4LG+pes5kZpJoLEf9t4KDqUpUhZp6hPtuS3jWdPgOng5wQSa/lZH8u5x4MHpyUhs5pIrpGDSG4sTnHDZ1gSLyuG06nzO5md+jw42lrcY2vkZ5VIaQjY8IQHaBpN0qSPczXYqFOxLIK2hQeg7ahWiOch0yvTB/1UM69n3iDgVb+4K8hf95R8mH4Yfj3Mfyvvg3pas94JH8d3B6sNX9bGFJhF/l+ZrzfQ+Zy7t3LX8e93pZ7Oa35f2bG+z1kPufenfx1nN3KIWr5huH/PzPe7yHXtKcyukScv07i3kJBk2wVy4rrx3cy4/0estg3sTV/ncq9Z0M3yjd98/34Tma830OuR8kWrFvy1+ncSKtW+b53iXvBy3cy4/0esngOW/PX8btFnN//qTcY/AHkz9sfPgw/DF+PXGfISlv+Ou69U9c3pXFmPE3VWDXfj5ch8zn3ynfX9i1R/jrLqr7T1rTKl9pyjfuOI3in7cuQmzn3ymKWQc9GTT4u09lwj8SN0hxnVBuT90Dmc+7dWsvC/HXXIHDOzc9ULVbNOUHI74HM59y7lh5bxLX8dSATlx9wIy2zt9rxnX4P5FrOvVtrdprx+etoLl96nHFvMDB0Vs2/h/E9kGs596rQgvx1uspWAm+oxPdGFgvHQVsnay+/B/J9Ow13HvyoNeXPIP9TlqgPww/Dd2VYz7nHWl+rufx1lURvgsZQuFc4vQdytVg3vIoU25K/rm8YmqixXFZzppf3QP4ntKcPww/D/xTDn7D5/QFkcc49S675+TGJVqv2A10smABcfZOIdK2W3wFZF+bcg+9wPmJl/jpVqx7TjlUOqcZDq1bz+cnLkCVhzj2V8M8Ayvx1hLO9O+W73PnBM1Siq1V70WuRZXHOPd3iHomUBgbL4gZP09mi4d87hYkla2vphcj1VcqkHplUx+Oav07TJK6xzD6oPrizJaIZckPyeBmy0Zpzz7RKJzguf13vaqRzqBdY2djqM/tfpbFtvQdyW869m0mVc0a6mXA5oV4rIzg4Yfo9kP8B7enD8MPwr2FYz7n3cza/VyMLcu5hMZlUUctfR0ofgtoDA5lVa80T7+XIgpx7tHUpMfL568hV3OOenxhwbjcHz3gP5Lace+zKqeWvI1L5kJLvR78UJJveZy9Hbs25x+r5/HW33cI9IUJ5qm2kX47cknOPc54T+df1ujc/uVYPundAFuXcg63AecGV7xzWDd6/TmJSEu9fp2oaCyd+A2QsVYY/YU2Rf81O8z3kjyXqw/DD8PXI/xrDwjIHch13ZV7z12k656usXn2pOWhV0gTv5X4Vcn0OWXQbjBY/eCyCT+Why7R2nFXT0DW5CLbl3y39ImRxzj3d4gLnrvnrdFL1r3OIrNJq7l7GB3d60Z6/l1+ELM65p1tWJcz0lr/O6lf967qle12/V42u7eP7JRr+dS9D7rfn3COsns9fJ4M2U0RDV1VP00IhGOurlvWO8R7IbTn31GLJ1/LXAWhRrfOeSxpD4YI3tfdA/gciu24M/+OWqFf348Pww/DD8PX9+DD8MGxH/h8t7fmV2KP/uAAAAABJRU5ErkJggg==");const g=document.createElement("button");g.innerHTML="submit",g.addEventListener("click",(function(){let e=document.createElement("tr"),n=document.createElement("td");n.textContent=h.value;let t=document.createElement("td");t.textContent=y.value,e.append(n,t),console.log(n,t),document.querySelector("tbody").append(e)})),document.getElementById("main").append(O),document.getElementById("main").append(f,h,y,g)})()})();