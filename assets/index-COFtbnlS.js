import{r as Y}from"./index-CtmpQeow.js";const S="[0-9A-Za-z-]+",V=`(?:\\+(${S}(?:\\.${S})*))`,_="0|[1-9]\\d*",x="[0-9]+",z="\\d*[a-zA-Z-][a-zA-Z0-9-]*",k=`(?:${x}|${z})`,Q=`(?:-?(${k}(?:\\.${k})*))`,X=`(?:${_}|${z})`,Z=`(?:-(${X}(?:\\.${X})*))`,O=`${_}|x|X|\\*`,d=`[v=\\s]*(${O})(?:\\.(${O})(?:\\.(${O})(?:${Z})?${V}?)?)?`,j=`^\\s*(${d})\\s+-\\s+(${d})\\s*$`,A=`(${x})\\.(${x})\\.(${x})`,m=`[v=\\s]*${A}${Q}?${V}?`,C="((?:<|>)?=?)",ee=`(\\s*)${C}\\s*(${m}|${d})`,B="(?:~>?)",re=`(\\s*)${B}\\s+`,D="(?:\\^)",te=`(\\s*)${D}\\s+`,ne="(<|>)?=?\\s*\\*",se=`^${D}${d}$`,ie=`(${_})\\.(${_})\\.(${_})`,ue=`v?${ie}${Z}?${V}?`,$e=`^${B}${d}$`,ce=`^${C}\\s*${d}$`,fe=`^${C}\\s*(${ue})$|^$`,ae="^\\s*>=\\s*0.0.0\\s*$";function l(e){return new RegExp(e)}function $(e){return!e||e.toLowerCase()==="x"||e==="*"}function G(...e){return t=>e.reduce((i,r)=>r(i),t)}function U(e){return e.match(l(fe))}function F(e,t,i,r){const n=`${e}.${t}.${i}`;return r?`${n}-${r}`:n}function oe(e){return e.replace(l(j),(t,i,r,n,s,u,c,f,a,o,R,p)=>($(r)?i="":$(n)?i=`>=${r}.0.0`:$(s)?i=`>=${r}.${n}.0`:i=`>=${i}`,$(a)?f="":$(o)?f=`<${+a+1}.0.0-0`:$(R)?f=`<${a}.${+o+1}.0-0`:p?f=`<=${a}.${o}.${R}-${p}`:f=`<=${f}`,`${i} ${f}`.trim()))}function le(e){return e.replace(l(ee),"$1$2$3")}function pe(e){return e.replace(l(re),"$1~")}function de(e){return e.replace(l(te),"$1^")}function _e(e){return e.trim().split(/\s+/).map(t=>t.replace(l(se),(i,r,n,s,u)=>$(r)?"":$(n)?`>=${r}.0.0 <${+r+1}.0.0-0`:$(s)?r==="0"?`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:`>=${r}.${n}.0 <${+r+1}.0.0-0`:u?r==="0"?n==="0"?`>=${r}.${n}.${s}-${u} <${r}.${n}.${+s+1}-0`:`>=${r}.${n}.${s}-${u} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${s}-${u} <${+r+1}.0.0-0`:r==="0"?n==="0"?`>=${r}.${n}.${s} <${r}.${n}.${+s+1}-0`:`>=${r}.${n}.${s} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${s} <${+r+1}.0.0-0`)).join(" ")}function Re(e){return e.trim().split(/\s+/).map(t=>t.replace(l($e),(i,r,n,s,u)=>$(r)?"":$(n)?`>=${r}.0.0 <${+r+1}.0.0-0`:$(s)?`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:u?`>=${r}.${n}.${s}-${u} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${s} <${r}.${+n+1}.0-0`)).join(" ")}function ve(e){return e.split(/\s+/).map(t=>t.trim().replace(l(ce),(i,r,n,s,u,c)=>{const f=$(n),a=f||$(s),o=a||$(u);return r==="="&&o&&(r=""),c="",f?r===">"||r==="<"?"<0.0.0-0":"*":r&&o?(a&&(s=0),u=0,r===">"?(r=">=",a?(n=+n+1,s=0,u=0):(s=+s+1,u=0)):r==="<="&&(r="<",a?n=+n+1:s=+s+1),r==="<"&&(c="-0"),`${r+n}.${s}.${u}${c}`):a?`>=${n}.0.0${c} <${+n+1}.0.0-0`:o?`>=${n}.${s}.0${c} <${n}.${+s+1}.0-0`:i})).join(" ")}function xe(e){return e.trim().replace(l(ne),"")}function ye(e){return e.trim().replace(l(ae),"")}function y(e,t){return e=+e||e,t=+t||t,e>t?1:e===t?0:-1}function he(e,t){const{preRelease:i}=e,{preRelease:r}=t;if(i===void 0&&r)return 1;if(i&&r===void 0)return-1;if(i===void 0&&r===void 0)return 0;for(let n=0,s=i.length;n<=s;n++){const u=i[n],c=r[n];if(u!==c)return u===void 0&&c===void 0?0:u?c?y(u,c):-1:1}return 0}function v(e,t){return y(e.major,t.major)||y(e.minor,t.minor)||y(e.patch,t.patch)||he(e,t)}function T(e,t){return e.version===t.version}function be(e,t){switch(e.operator){case"":case"=":return T(e,t);case">":return v(e,t)<0;case">=":return T(e,t)||v(e,t)<0;case"<":return v(e,t)>0;case"<=":return T(e,t)||v(e,t)>0;case void 0:return!0;default:return!1}}function we(e){return G(_e,Re,ve,xe)(e)}function ge(e){return G(oe,le,pe,de)(e.trim()).split(/\s+/).join(" ")}function Oe(e,t){if(!e)return!1;const n=ge(t).split(" ").map(p=>we(p)).join(" ").split(/\s+/).map(p=>ye(p)),s=U(e);if(!s)return!1;const[,u,,c,f,a,o]=s,R={operator:u,version:F(c,f,a,o),major:c,minor:f,patch:a,preRelease:o?.split(".")};for(const p of n){const E=U(p);if(!E)return!1;const[,M,,L,I,q,g]=E,W={operator:M,version:F(L,I,q,g),major:L,minor:I,patch:q,preRelease:g?.split(".")};if(!be(W,R))return!1}return!0}const N={},h={react:{get:()=>()=>P(new URL("__federation_shared_react-B_uPfkFG.js",import.meta.url).href),import:!0,requiredVersion:"^18.3.1"},"react-dom":{get:()=>()=>P(new URL("__federation_shared_react-dom-DrqoXn9e.js",import.meta.url).href),import:!0,requiredVersion:"^18.3.1"},"@chakra-ui/react":{get:()=>()=>P(new URL("__federation_shared_@chakra-ui/react-B_0jJEyU.js",import.meta.url).href),import:!0,requiredVersion:"^3.2.3"}},b=Object.create(null);async function ke(e,t="default"){return b[e]?new Promise(i=>i(b[e])):await Te(e,t)||Pe(e)}async function P(e){return N[e]??=import(e),N[e]}async function Te(e,t){let i=null;if(globalThis?.__federation_shared__?.[t]?.[e]){const r=globalThis.__federation_shared__[t][e],n=Object.keys(r)[0],s=Object.values(r)[0];h[e]?.requiredVersion?Oe(n,h[e].requiredVersion)?i=await(await s.get())():console.log(`provider support ${e}(${n}) is not satisfied requiredVersion(\${moduleMap[name].requiredVersion})`):i=await(await s.get())()}if(i)return H(i,e)}async function Pe(e){if(h[e]?.import){let t=await(await h[e].get())();return H(t,e)}else console.error("consumer config import=false,so cant use callback shared module")}function H(e,t){return typeof e.default=="function"?(Object.keys(e).forEach(i=>{i!=="default"&&(e.default[i]=e[i])}),b[t]=e.default,e.default):(e.default&&(e=Object.assign({},e.default,e)),b[t]=e,e)}var J={exports:{}},w={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=Y,Ce=Symbol.for("react.element"),Ee=Symbol.for("react.fragment"),Le=Object.prototype.hasOwnProperty,Ie=Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qe={key:!0,ref:!0,__self:!0,__source:!0};function K(e,t,i){var r,n={},s=null,u=null;i!==void 0&&(s=""+i),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(u=t.ref);for(r in t)Le.call(t,r)&&!qe.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:Ce,type:e,key:s,ref:u,props:n,_owner:Ie.current}}w.Fragment=Ee;w.jsx=K;w.jsxs=K;J.exports=w;var Xe=J.exports;const Ue=globalThis||void 0||self;export{Ue as g,ke as i,Xe as j};
