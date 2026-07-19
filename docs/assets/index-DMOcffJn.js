var $l=Object.defineProperty;var Kl=(i,e,t)=>e in i?$l(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var xt=(i,e,t)=>Kl(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ge={DEEP:0,OCEAN:1,SHALLOW:2,BEACH:3,PLAINS:4,FARM:5,FOREST:6,HILLS:7,DRY:8,WET:9,MTN:10,SNOW:11},Zl={[Ge.DEEP]:[54,70,68],[Ge.OCEAN]:[70,88,84],[Ge.SHALLOW]:[94,110,102],[Ge.BEACH]:[186,174,138],[Ge.PLAINS]:[138,148,98],[Ge.FARM]:[172,162,96],[Ge.FOREST]:[84,110,76],[Ge.HILLS]:[138,128,92],[Ge.DRY]:[188,164,116],[Ge.WET]:[100,120,100],[Ge.MTN]:[128,116,102],[Ge.SNOW]:[222,222,220]},or={[Ge.DEEP]:"Ocean",[Ge.OCEAN]:"Ocean",[Ge.SHALLOW]:"Coastal waters",[Ge.BEACH]:"Coast",[Ge.PLAINS]:"Plains",[Ge.FARM]:"Farmland",[Ge.FOREST]:"Forest",[Ge.HILLS]:"Hills",[Ge.DRY]:"Drylands",[Ge.WET]:"Wetlands",[Ge.MTN]:"Mountains",[Ge.SNOW]:"Snow"},Jl=i=>i<=Ge.SHALLOW,$a=[[96,120,84],[118,102,146],[172,118,76],[140,142,90],[144,102,102],[94,136,142],[154,84,90],[94,114,154],[124,90,138],[164,142,84],[84,132,114],[158,100,80],[108,102,146],[80,118,88],[168,130,102],[128,90,100],[102,138,142],[154,130,74],[88,108,140],[148,108,140],[118,146,98],[150,92,108],[92,122,100],[166,118,88]];function Ka(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ql(i){const e=i*2654435761>>>0;function t(a,o){let l=a*374761393+o*668265263+e*1442695041|0;return l=Math.imul(l^l>>>13,1274126177),((l^l>>>16)>>>0)/4294967295}const n=a=>a*a*(3-2*a);function r(a,o){const l=Math.floor(a),c=Math.floor(o),p=n(a-l),f=n(o-c),h=t(l,c),_=t(l+1,c),v=t(l,c+1),w=t(l+1,c+1);return h+(_-h)*p+(v-h)*f+(h-_-v+w)*p*f}function s(a,o,l,c=.5,p=2){let f=1,h=1,_=0,v=0;for(let w=0;w<l;w++)_+=h*r(a*f,o*f),v+=h,h*=c,f*=p;return _/v}return{vn:r,fbm:s}}function jl(i){const e=["b","br","d","dr","f","g","gr","h","k","kr","l","m","n","r","s","sk","st","t","th","v","vr","w","z","bh","kh","sh"],t=["a","a","e","e","i","o","o","u","au","ae","ei","ou","y","ia","eo"],n=["n","r","l","s","m","th","sk","rn","ld","st","k","d","g","ng","rk","ss","dt","vn"],r=o=>o.charAt(0).toUpperCase()+o.slice(1);function s(o,l){const c=o+Math.floor(i()*(l-o+1));let p="";for(let f=0;f<c;f++)(f>0||i()<.75)&&(p+=e[Math.floor(i()*e.length)]),p+=t[Math.floor(i()*t.length)],(f===c-1||i()<.35)&&(p+=n[Math.floor(i()*n.length)]);return r(p)}const a=["reach","mark","land","gard","heim","fell","moor","vale","wold","holt","stead","watch","crown","host","rike"];return{prov:()=>s(1,2),duchy:()=>s(2,2),kingdom:()=>i()<.4?s(2,3)+" "+r(a[Math.floor(i()*a.length)]):s(2,3),empire:()=>s(2,3)+(i()<.5?" "+r(a[Math.floor(i()*a.length)]):"")}}function Kr(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>{const r=document.createElement("canvas");r.width=n.naturalWidth,r.height=n.naturalHeight;const s=r.getContext("2d",{willReadFrequently:!0});s.imageSmoothingEnabled=!1,s.drawImage(n,0,0),e(s.getImageData(0,0,r.width,r.height))},n.onerror=()=>t(new Error("failed to load "+i)),n.src=i})}function Za(i,e,t){i/=360;const n=e*Math.min(t,1-t),r=s=>{const a=(s+i*12)%12;return t-n*Math.max(-1,Math.min(a-3,9-a,1))};return[r(0)*255,r(8)*255,r(4)*255]}async function ec(i,e){var nn;const[t,n,r]=await Promise.all([fetch(e+"map/meta.json").then(Y=>{if(!Y.ok)throw new Error("meta.json HTTP "+Y.status);return Y.json()}),Kr(e+"map/prov.png"),Kr(e+"map/height.png")]),s=await Kr(t.rivers),a=t.W,o=t.H,l=a*o,c=t.provinces,p=Ql((i>>>0)+4523),f=jl(Ka(99991)).prov,h=Y=>/^(province\s*)?\d+$/i.test(Y),_=n.data,v=r.data,w=s.data,m=new Float32Array(l),u=new Float32Array(l),A=new Uint8Array(l),C=new Int32Array(l).fill(-1),x=new Uint8Array(l),b=new Uint8Array(l),y=new Uint16Array(l),R=new Map,g=new Map,S=[],L=[],P=[],U=[],k=[],V=[],I=[];for(let Y=0;Y<o;Y++)for(let Ee=0;Ee<a;Ee++){const He=Y*a+Ee;m[He]=v[He*4]/255,u[He]=p.fbm(Ee/a*2.4+13,Y/o*2.4+21,3),b[He]=w[He*4]>128?1:0;const Pe=_[He*4]|_[He*4+1]<<8;y[He]=Pe;const je=Pe?c[Pe]:void 0;if(!je||je.s){if(x[He]=Ge.OCEAN,je){let _n=R.get(Pe);_n||(_n={sx:0,sy:0,n:0},R.set(Pe,_n)),_n.sx+=Ee,_n.sy+=Y,_n.n++}continue}let gn=g.get(Pe);gn===void 0&&(gn=S.length,g.set(Pe,gn),S.push(h(je.n)?f():je.n),L.push(Pe),P.push(je.t),U.push(je.c??-1),k.push(je.cu??-1),V.push(je.f??-1),I.push(je.h??0)),C[He]=gn,A[He]=1,x[He]=je.t}const O=S.length,N=new Int32Array(O),X=new Float64Array(O),Q=new Float64Array(O),se=new Int32Array(O).fill(1e9),te=new Int32Array(O).fill(1e9),pe=new Int32Array(O).fill(-1),Oe=new Int32Array(O).fill(-1),Qe=new Uint8Array(O);for(let Y=0;Y<O;Y++)Qe[Y]=P[Y];for(let Y=0;Y<o;Y++)for(let Ee=0;Ee<a;Ee++){const He=Y*a+Ee,Pe=C[He];Pe<0||(N[Pe]++,X[Pe]+=Ee,Q[Pe]+=Y,Ee<se[Pe]&&(se[Pe]=Ee),Y<te[Pe]&&(te[Pe]=Y),Ee>pe[Pe]&&(pe[Pe]=Ee),Y>Oe[Pe]&&(Oe[Pe]=Y))}const Be=[];for(let Y=0;Y<O;Y++)Be.push(new Set);for(let Y=0;Y<o;Y++)for(let Ee=0;Ee<a;Ee++){const He=Y*a+Ee,Pe=C[He];if(!(Pe<0)){if(Ee+1<a){const je=C[He+1];je>=0&&je!==Pe&&(Be[Pe].add(je),Be[je].add(Pe))}if(Y+1<o){const je=C[He+a];je>=0&&je!==Pe&&(Be[Pe].add(je),Be[je].add(Pe))}}}const j=new Float64Array(O),ce=new Float64Array(O);for(let Y=0;Y<O;Y++)j[Y]=X[Y]/Math.max(1,N[Y]),ce[Y]=Q[Y]/Math.max(1,N[Y]);const oe=new Int32Array(O),De=new Int32Array(O),Ue=new Int32Array(O),Re=new Int32Array(O),at=new Int32Array(O),Ve=new Int32Array(O);for(let Y=0;Y<O;Y++){const Ee=U[Y];oe[Y]=Ee;const He=Ee>=0?t.counties[Ee].d:-1;De[Y]=He;const Pe=He>=0?t.duchies[He].k:-1;Ue[Y]=Pe,Re[Y]=Pe>=0?t.kingdoms[Pe].e:-1,at[Y]=k[Y],Ve[Y]=V[Y]}const ke=t.counties.map(Y=>Y.n),Ye=t.duchies.map(Y=>Y.n),Xe=t.kingdoms.map(Y=>Y.n),st=t.empires.map(Y=>Y.n),ft=t.kingdoms.map((Y,Ee)=>Y.c??$a[Ee%$a.length]),mt=t.counties.map(Y=>Y.h??null),ct=t.duchies.map(Y=>Y.h??null),it=t.kingdoms.map(Y=>Y.h??null),D=t.empires.map(Y=>Y.h??null),T=t.counties.map(Y=>Y.hk??null),he=t.duchies.map(Y=>Y.hk??null),de=t.kingdoms.map(Y=>Y.hk??null),E=t.empires.map(Y=>Y.hk??null),d=t.cultures.map(Y=>Y.e??null),F=t.cultures.map(Y=>Y.he??null),H=t.cultures.map(Y=>Y.l??null),q=t.cultures.map(Y=>Y.m??null),ie=t.cultures.map(Y=>Y.t??[]),ue=t.cultures.map(Y=>Y.n),B=t.faiths.map(Y=>Y.n),W=t.faiths.map(Y=>!!Y.i),le=t.faiths.map(Y=>Y.r??null),xe=t.faiths.map(Y=>Y.ad??null),ae=t.faiths.map(Y=>Y.d??null),re=t.faiths.map(Y=>Y.t??[]),fe=t.faiths.map(Y=>Y.hs??[]),_e=t.cultures.map((Y,Ee)=>Y.c??Za(Ee*97%360,.32,.5)),Fe=t.faiths.map((Y,Ee)=>Y.c??Za((Ee*151+40)%360,.3,.52)),z=Ka(i>>>0),ge={[Ge.FARM]:70,[Ge.PLAINS]:55,[Ge.FOREST]:42,[Ge.HILLS]:35,[Ge.WET]:30,[Ge.DRY]:25,[Ge.MTN]:14,[Ge.SNOW]:8,[Ge.BEACH]:48},ee=new Uint8Array(O);for(let Y=0;Y<O;Y++){let Ee=ge[Qe[Y]]??40;Ee+=(z()-.5)*26,ee[Y]=Math.max(1,Math.min(100,Math.round(Ee)))}const me=[];for(let Y=0;Y<l;Y+=7)A[Y]&&me.push(m[Y]);me.sort((Y,Ee)=>Y-Ee);const ve=me.length?me[Math.floor(me.length*.02)]:.3;for(let Y=0;Y<l;Y++)A[Y]&&m[Y]<ve+.014&&(m[Y]=ve+.014);const ne=new Uint8Array(l);{for(let Ee=0;Ee<l;Ee++)ne[Ee]=A[Ee]?255:0;for(let Ee=0;Ee<o;Ee++)for(let He=0;He<a;He++){const Pe=Ee*a+He;if(!A[Pe])continue;let je=ne[Pe];He>0&&(je=Math.min(je,ne[Pe-1]+1)),Ee>0&&(je=Math.min(je,ne[Pe-a]+1)),ne[Pe]=je}for(let Ee=o-1;Ee>=0;Ee--)for(let He=a-1;He>=0;He--){const Pe=Ee*a+He;if(!A[Pe])continue;let je=ne[Pe];He<a-1&&(je=Math.min(je,ne[Pe+1]+1)),Ee<o-1&&(je=Math.min(je,ne[Pe+a]+1)),ne[Pe]=je}}const we=65536,Ae=new Int32Array(we).fill(-1),_t=new Int32Array(we).fill(-1),ot=new Int32Array(we).fill(-1),Ht=new Uint8Array(we);for(const Y of Object.keys(c)){const Ee=+Y,He=c[Y];!He||He.s||(Ht[Ee]=1,Ae[Ee]=He.c??-1,_t[Ee]=He.cu??-1,ot[Ee]=He.f??-1)}const qt=Int32Array.from(t.counties.map(Y=>Y.d)),Yr=Int32Array.from(t.duchies.map(Y=>Y.k)),$r=Int32Array.from(t.kingdoms.map(Y=>Y.e)),si=new Map;for(const[Y,Ee]of R){const He=(nn=c[Y])==null?void 0:nn.n;if(!He||h(He)||Ee.n<300)continue;let Pe=si.get(He);Pe||(Pe={sx:0,sy:0,n:0},si.set(He,Pe)),Pe.sx+=Ee.sx,Pe.sy+=Ee.sy,Pe.n+=Ee.n}const Vn=[];for(const[Y,Ee]of si)Ee.n<1200||Vn.push({x:Ee.sx/Ee.n,y:Ee.sy/Ee.n,n:Y,a:Ee.n});Vn.sort((Y,Ee)=>Ee.a-Y.a);let Oi=0,ai=0,oi=0;for(let Y=0;Y<O;Y++)oe[Y]<0||(Oi+=j[Y]*N[Y],ai+=ce[Y]*N[Y],oi+=N[Y]);return Oi/=Math.max(1,oi),ai/=Math.max(1,oi),{W:a,H:o,N:l,height:m,seaBase:ve,terr:x,land:A,prov:C,cloud:u,river:b,coastD:ne,shade:new Float32Array(0),np:O,provName:S,pTerr:Qe,pArea:N,pCX:j,pCY:ce,pMinX:se,pMinY:te,pMaxX:pe,pMaxY:Oe,padj:Be,nCounty:t.counties.length,nDuchy:t.duchies.length,nKing:t.kingdoms.length,nEmp:t.empires.length,countyOf:oe,duchyOf:De,kingOf:Ue,empOf:Re,countyName:ke,duchyName:Ye,kingName:Xe,empName:st,kColor:ft,countyHolder:mt,duchyHolder:ct,kingHolder:it,empHolder:D,cultureOf:at,faithOf:Ve,nCult:t.cultures.length,nFaith:t.faiths.length,cultName:ue,faithName:B,cultCol:_e,faithCol:Fe,faithHasIcon:W,faithRelig:le,faithAdh:xe,faithDesc:ae,faithTenets:re,faithSites:fe,countyHolderKey:T,duchyHolderKey:he,kingHolderKey:de,empHolderKey:E,chars:t.chars??{},cultEthos:d,cultHeritage:F,cultLang:H,cultMartial:q,cultTrad:ie,holdingOf:Uint8Array.from(I),date:t.date??"1254",artPools:t.art??{},kCapital:Int32Array.from(t.kingdoms.map(Y=>Y.cap??-1)),eCapital:Int32Array.from(t.empires.map(Y=>Y.cap??-1)),seaLabels:Vn,straits:t.straits??[],rawOf:Int32Array.from(L),rawGrid:y,rawCounty:Ae,rawCult:_t,rawFaith:ot,rawLand:Ht,cDuchy:qt,dKing:Yr,kEmp:$r,devOf:ee,landCX:Oi,landCY:ai,seed:i}}function Zr(i){return i<0?0:i>255?255:i|0}function qi(i,e,t){return(255<<24|Zr(t)<<16|Zr(e)<<8|Zr(i))>>>0}function tc(i){const{W:e,H:t,height:n,land:r}=i,s=new Float32Array(e*t);let a=-.66,o=-.7;const l=Math.hypot(a,o);a/=l,o/=l;const c=.92,p=Math.hypot(a,o,c),f=4.6,h=42,_=10;for(let v=0;v<t;v++)for(let w=0;w<e;w++){const m=v*e+w;if(!r[m]){s[m]=1;continue}const u=w>0?m-1:m,A=w<e-1?m+1:m,C=v>0?m-e:m,x=v<t-1?m+e:m,b=(n[u]-n[A])*f,y=(n[C]-n[x])*f,R=Math.hypot(b,y,1),g=Math.max(-.45,(b*a+y*o+c)/(R*p));let S=0;for(let X=1;X<=_;X++){const Q=w+a*X|0,se=v+o*X|0;if(Q<0||se<0||Q>=e||se>=t)break;const te=(n[se*e+Q]-n[m])*h/X;te>S&&(S=te)}const L=Math.min(1,Math.max(0,(S-2)/3)),P=4,U=n[Math.max(0,v-P)*e+w],k=n[Math.min(t-1,v+P)*e+w],V=n[v*e+Math.max(0,w-P)],I=n[v*e+Math.min(e-1,w+P)],O=Math.min(.2,Math.max(0,((U+k+V+I)/4-n[m])*h*.022));let N=.54+.56*(g*.5+.5);N*=(1-L*.32)*(1-O),N=.54+(N-.54)*1.32,s[m]=Math.max(.42,Math.min(1.3,N))}i.shade=s}function nc(i){const{W:e,H:t,N:n,terr:r,shade:s,land:a,height:o,seaBase:l,river:c}=i,p=i.cloud,f=new Uint32Array(n),h=new Uint8Array(n),_=[];for(let x=0;x<n;x+=13)a[x]&&_.push(o[x]);_.sort((x,b)=>x-b);const v=x=>_.length?_[Math.min(_.length-1,x*_.length|0)]:1,w=v(.9),m=Math.max(v(.975),w+.01),u=10,A=x=>(x=x<0?0:x>1?1:x,x*x*(3-2*x));for(let x=0;x<t;x++)for(let b=0;b<e;b++){const y=x*e+b,R=r[y],g=s[y];let S,L,P;if(Jl(R)){const U=Math.max(0,(l-o[y])/Math.max(.001,l)),k=(p[y]-.5)*16;S=86-U*42+k*.6,L=103-U*44+k*.8,P=102-U*34+k*.7}else{const U=Zl[R],k=(p[y]-.5)*9+((b*131+x*57^b*13+x*151)%13-6)*.9;S=U[0]*g+k,L=U[1]*g+k,P=U[2]*g+k;const V=o[y]+(p[y]-.5)*.02;if(V>w){const I=Math.max(0,b-u),O=Math.min(e-1,b+u),N=Math.max(0,x-u),X=Math.min(t-1,x+u),Q=(o[x*e+I]+o[x*e+O]+o[N*e+b]+o[X*e+b]+o[N*e+I]+o[N*e+O]+o[X*e+I]+o[X*e+O])/8,se=o[y]-Q+(p[y]-.5)*.004,te=A((V-w)/(m-w))*A(se/.012);if(te>.02){const pe=Math.min(1.05,g);S=S*(1-te)+228*pe*te,L=L*(1-te)+231*pe*te,P=P*(1-te)+234*pe*te,h[y]=te*255|0}}}c[y]&&a[y]&&(S=S*.42+66*.58,L=L*.42+96*.58,P=P*.42+112*.58),f[y]=qi(S,L,P)}const C=new Float32Array(n);for(let x=0;x<n;x++)C[x]=a[x]?0:1e9;for(let x=0;x<t;x++)for(let b=0;b<e;b++){const y=x*e+b;if(a[y])continue;let R=C[y];b>0&&(R=Math.min(R,C[y-1]+1)),x>0&&(R=Math.min(R,C[y-e]+1)),b>0&&x>0&&(R=Math.min(R,C[y-e-1]+1.414)),b<e-1&&x>0&&(R=Math.min(R,C[y-e+1]+1.414)),C[y]=R}for(let x=t-1;x>=0;x--)for(let b=e-1;b>=0;b--){const y=x*e+b;if(a[y])continue;let R=C[y];b<e-1&&(R=Math.min(R,C[y+1]+1)),x<t-1&&(R=Math.min(R,C[y+e]+1)),b<e-1&&x<t-1&&(R=Math.min(R,C[y+e+1]+1.414)),b>0&&x<t-1&&(R=Math.min(R,C[y+e-1]+1.414)),C[y]=R}for(let x=0;x<t;x++)for(let b=0;b<e;b++){const y=x*e+b;if(a[y]){if(b>0&&!a[y-1]||b<e-1&&!a[y+1]||x>0&&!a[y-e]||x<t-1&&!a[y+e]){const g=f[y],S=.66;f[y]=qi((g&255)*S,(g>>8&255)*S,(g>>16&255)*S)}}else{const R=C[y];if(R<11){const g=(1-R/11)*.38,S=f[y];f[y]=qi((S&255)*(1-g)+122*g,(S>>8&255)*(1-g)+162*g,(S>>16&255)*(1-g)+152*g)}}}for(let x=0;x<t;x++)for(let b=0;b<e;b++){const y=x*e+b,R=b/e-.5,g=x/t-.5,S=Math.sqrt(R*R*1.02+g*g*1.12);let L=Math.max(0,(S-.4)/.5);L*=L;let P=0;if(!a[y]){const V=C[y];P=Math.max(0,Math.min(1,(V-36)/110))}const U=.35+p[y]*1.1,k=Math.min(.95,Math.max(L*U,P*P*U*.5));if(k>.02){const V=f[y],I=(V&255)*(1-k)+216*k,O=(V>>8&255)*(1-k)+216*k,N=(V>>16&255)*(1-k)+206*k;f[y]=qi(I,O,N)}}return{baseBuf:f,snow:h}}function ic(i){const e=i/100,t=[120,120,96],n=[196,168,92],r=[168,84,64],s=(a,o,l)=>[a[0]+(o[0]-a[0])*l,a[1]+(o[1]-a[1])*l,a[2]+(o[2]-a[2])*l];return e<.5?s(t,n,e*2):s(n,r,(e-.5)*2)}function Ja(i,e,t,n){const{N:r,prov:s,height:a,seaBase:o,shade:l}=i,{baseBuf:c,snow:p}=e,f=new Uint32Array(n.data.buffer);if(f.set(c),t==="elevation")for(let h=0;h<r;h++){if(s[h]<0)continue;const v=40+(a[h]-o)/(1-o)*200,w=[v*.9+20,v,v*.7+20],m=l[h],u=w[0]*.3+w[1]*.59+w[2]*.11,A=.16,C=(w[0]+(u-w[0])*A)*m,x=(w[1]+(u-w[1])*A)*m,b=(w[2]+(u-w[2])*A)*m,y=c[h],R=y&255,g=y>>8&255,S=y>>16&255,L=.82*(1-p[h]/255*.85);f[h]=qi(R*(1-L)+C*L,g*(1-L)+x*L,S*(1-L)+b*L)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="185",rc=0,Qa=1,sc=2,Dr=1,ac=2,Yi=3,wn=0,Bt=1,ln=2,bn=0,wi=1,ja=2,eo=3,to=4,oc=5,Zn=100,lc=101,cc=102,uc=103,fc=104,hc=200,dc=201,pc=202,mc=203,Is=204,Us=205,gc=206,_c=207,xc=208,vc=209,Mc=210,Sc=211,yc=212,Ec=213,bc=214,Ns=0,Fs=1,Os=2,Pi=3,Bs=4,zs=5,Hs=6,ks=7,ba=0,Tc=1,Ac=2,fn=0,ul=1,fl=2,hl=3,dl=4,pl=5,ml=6,gl=7,_l=300,ei=301,Li=302,Jr=303,Qr=304,Wr=306,Qi=1e3,En=1001,Gs=1002,Et=1003,wc=1004,lr=1005,Ct=1006,jr=1007,cn=1008,Wt=1009,xl=1010,vl=1011,ji=1012,Ta=1013,dn=1014,tn=1015,Rn=1016,Aa=1017,wa=1018,er=1020,Ml=35902,Sl=35899,yl=1021,El=1022,Ut=1023,Cn=1026,jn=1027,Ra=1028,Ca=1029,ti=1030,Pa=1031,La=1033,Ir=33776,Ur=33777,Nr=33778,Fr=33779,Vs=35840,Ws=35841,Xs=35842,qs=35843,Ys=36196,$s=37492,Ks=37496,Zs=37488,Js=37489,Br=37490,Qs=37491,js=37808,ea=37809,ta=37810,na=37811,ia=37812,ra=37813,sa=37814,aa=37815,oa=37816,la=37817,ca=37818,ua=37819,fa=37820,ha=37821,da=36492,pa=36494,ma=36495,ga=36283,_a=36284,zr=36285,xa=36286,Rc=3200,va=0,Cc=1,Hn="",Ot="srgb",Hr="srgb-linear",kr="linear",lt="srgb",ui=7680,no=519,Pc=512,Lc=513,Dc=514,Da=515,Ic=516,Uc=517,Ia=518,Nc=519,io=35044,ro="300 es",un=2e3,tr=2001;function Fc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oc(){const i=nr("canvas");return i.style.display="block",i}const so={};function ao(...i){const e="THREE."+i.shift();console.log(e,...i)}function bl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=bl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=bl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ri(...i){const e=i.join(" ");e in so||(so[e]=!0,ze(...i))}function Bc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const zc={[Ns]:Fs,[Os]:Hs,[Bs]:ks,[Pi]:zs,[Fs]:Ns,[Hs]:Os,[ks]:Bs,[zs]:Pi};class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oo=1234567;const Zi=Math.PI/180,ir=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Ua(i,e){return(i%e+e)%e}function Hc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function kc(i,e,t){return i!==e?(t-i)/(e-i):0}function Ji(i,e,t){return(1-t)*i+t*e}function Gc(i,e,t,n){return Ji(i,e,1-Math.exp(-t*n))}function Vc(i,e=1){return e-Math.abs(Ua(i,e*2)-e)}function Wc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yc(i,e){return i+Math.random()*(e-i)}function $c(i){return i*(.5-Math.random())}function Kc(i){i!==void 0&&(oo=i);let e=oo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zc(i){return i*Zi}function Jc(i){return i*ir}function Qc(i){return(i&i-1)===0&&i!==0}function jc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),p=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),_=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*p,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*p,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*p,o*c);break;case"XZX":i.set(o*p,l*v,l*_,o*c);break;case"YXY":i.set(l*_,o*p,l*v,o*c);break;case"ZYZ":i.set(l*v,l*_,o*p,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const es={DEG2RAD:Zi,RAD2DEG:ir,generateUUID:Ni,clamp:et,euclideanModulo:Ua,mapLinear:Hc,inverseLerp:kc,lerp:Ji,damp:Gc,pingpong:Vc,smoothstep:Wc,smootherstep:Xc,randInt:qc,randFloat:Yc,randFloatSpread:$c,seededRandom:Kc,degToRad:Zc,radToDeg:Jc,isPowerOfTwo:Qc,ceilPowerOfTwo:jc,floorPowerOfTwo:eu,setQuaternionFromProperEuler:tu,normalize:Nt,denormalize:Ai},ka=class ka{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ka.prototype.isVector2=!0;let Ze=ka;class ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],p=n[r+2],f=n[r+3],h=s[a+0],_=s[a+1],v=s[a+2],w=s[a+3];if(f!==w||l!==h||c!==_||p!==v){let m=l*h+c*_+p*v+f*w;m<0&&(h=-h,_=-_,v=-v,w=-w,m=-m);let u=1-o;if(m<.9995){const A=Math.acos(m),C=Math.sin(A);u=Math.sin(u*A)/C,o=Math.sin(o*A)/C,l=l*u+h*o,c=c*u+_*o,p=p*u+v*o,f=f*u+w*o}else{l=l*u+h*o,c=c*u+_*o,p=p*u+v*o,f=f*u+w*o;const A=1/Math.sqrt(l*l+c*c+p*p+f*f);l*=A,c*=A,p*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=p,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],p=n[r+3],f=s[a],h=s[a+1],_=s[a+2],v=s[a+3];return e[t]=o*v+p*f+l*_-c*h,e[t+1]=l*v+p*h+c*f-o*_,e[t+2]=c*v+p*_+o*h-l*f,e[t+3]=p*v-o*f-l*h-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),p=o(r/2),f=o(s/2),h=l(n/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*p*f+c*_*v,this._y=c*_*f-h*p*v,this._z=c*p*v+h*_*f,this._w=c*p*f-h*_*v;break;case"YXZ":this._x=h*p*f+c*_*v,this._y=c*_*f-h*p*v,this._z=c*p*v-h*_*f,this._w=c*p*f+h*_*v;break;case"ZXY":this._x=h*p*f-c*_*v,this._y=c*_*f+h*p*v,this._z=c*p*v+h*_*f,this._w=c*p*f-h*_*v;break;case"ZYX":this._x=h*p*f-c*_*v,this._y=c*_*f+h*p*v,this._z=c*p*v-h*_*f,this._w=c*p*f+h*_*v;break;case"YZX":this._x=h*p*f+c*_*v,this._y=c*_*f+h*p*v,this._z=c*p*v-h*_*f,this._w=c*p*f-h*_*v;break;case"XZY":this._x=h*p*f-c*_*v,this._y=c*_*f-h*p*v,this._z=c*p*v+h*_*f,this._w=c*p*f+h*_*v;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],p=t[6],f=t[10],h=n+o+f;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(p-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(n>o&&n>f){const _=2*Math.sqrt(1+n-o-f);this._w=(p-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>f){const _=2*Math.sqrt(1+o-n-f);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+p)/_}else{const _=2*Math.sqrt(1+f-n-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,p=t._w;return this._x=n*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-n*c,this._z=s*p+a*c+n*l-r*o,this._w=a*p-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,t=Math.sin(t*c)/p,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ga=class Ga{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),p=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*p,this.y=n+l*p+o*c-s*f,this.z=r+l*f+s*p-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ts.copy(this).projectOnVector(e),this.sub(ts)}reflect(e){return this.sub(ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ga.prototype.isVector3=!0;let $=Ga;const ts=new $,lo=new ii,Va=class Va{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=t,p[4]=s,p[5]=l,p[6]=n,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],p=n[4],f=n[7],h=n[2],_=n[5],v=n[8],w=r[0],m=r[3],u=r[6],A=r[1],C=r[4],x=r[7],b=r[2],y=r[5],R=r[8];return s[0]=a*w+o*A+l*b,s[3]=a*m+o*C+l*y,s[6]=a*u+o*x+l*R,s[1]=c*w+p*A+f*b,s[4]=c*m+p*C+f*y,s[7]=c*u+p*x+f*R,s[2]=h*w+_*A+v*b,s[5]=h*m+_*C+v*y,s[8]=h*u+_*x+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return t*a*p-t*o*c-n*s*p+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],f=p*a-o*c,h=o*l-p*s,_=c*s-a*l,v=t*f+n*h+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=f*w,e[1]=(r*c-p*n)*w,e[2]=(o*n-r*a)*w,e[3]=h*w,e[4]=(p*t-r*l)*w,e[5]=(r*s-o*t)*w,e[6]=_*w,e[7]=(n*l-c*t)*w,e[8]=(a*t-n*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ns.makeScale(e,t)),this}rotate(e){return Ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ns.makeRotation(-e)),this}translate(e,t){return Ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Va.prototype.isMatrix3=!0;let We=Va;const ns=new We,co=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uo=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nu(){const i={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hn?kr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ri("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ri("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hr]:{primaries:e,whitePoint:n,transfer:kr,toXYZ:co,fromXYZ:uo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:co,fromXYZ:uo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const tt=nu();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class iu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=nr("canvas")),fi.width=e.width,fi.height=e.height;const r=fi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ru=0;class Na{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(is(r[a].image)):s.push(is(r[a]))}else s=is(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let su=0;const rs=new $;class Tt extends ni{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=En,r=En,s=Ct,a=cn,o=Ut,l=Wt,c=Tt.DEFAULT_ANISOTROPY,p=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Ni(),this.name="",this.source=new Na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rs).x}get height(){return this.source.getSize(rs).y}get depth(){return this.source.getSize(rs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=_l;Tt.DEFAULT_ANISOTROPY=1;const Wa=class Wa{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],p=l[4],f=l[8],h=l[1],_=l[5],v=l[9],w=l[2],m=l[6],u=l[10];if(Math.abs(p-h)<.01&&Math.abs(f-w)<.01&&Math.abs(v-m)<.01){if(Math.abs(p+h)<.1&&Math.abs(f+w)<.1&&Math.abs(v+m)<.1&&Math.abs(c+_+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,x=(_+1)/2,b=(u+1)/2,y=(p+h)/4,R=(f+w)/4,g=(v+m)/4;return C>x&&C>b?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=y/n,s=R/n):x>b?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=y/r,s=g/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=R/s,r=g/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-v)*(m-v)+(f-w)*(f-w)+(h-p)*(h-p));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(f-w)/A,this.z=(h-p)/A,this.w=Math.acos((c+_+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wa.prototype.isVector4=!0;let vt=Wa;class au extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Tt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Na(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends au{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tl extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ou extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vr=class Vr{constructor(e,t,n,r,s,a,o,l,c,p,f,h,_,v,w,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,p,f,h,_,v,w,m)}set(e,t,n,r,s,a,o,l,c,p,f,h,_,v,w,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=p,u[10]=f,u[14]=h,u[3]=_,u[7]=v,u[11]=w,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*p,_=a*f,v=o*p,w=o*f;t[0]=l*p,t[4]=-l*f,t[8]=c,t[1]=_+v*c,t[5]=h-w*c,t[9]=-o*l,t[2]=w-h*c,t[6]=v+_*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*p,_=l*f,v=c*p,w=c*f;t[0]=h+w*o,t[4]=v*o-_,t[8]=a*c,t[1]=a*f,t[5]=a*p,t[9]=-o,t[2]=_*o-v,t[6]=w+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*p,_=l*f,v=c*p,w=c*f;t[0]=h-w*o,t[4]=-a*f,t[8]=v+_*o,t[1]=_+v*o,t[5]=a*p,t[9]=w-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*p,_=a*f,v=o*p,w=o*f;t[0]=l*p,t[4]=v*c-_,t[8]=h*c+w,t[1]=l*f,t[5]=w*c+h,t[9]=_*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,_=a*c,v=o*l,w=o*c;t[0]=l*p,t[4]=w-h*f,t[8]=v*f+_,t[1]=f,t[5]=a*p,t[9]=-o*p,t[2]=-c*p,t[6]=_*f+v,t[10]=h-w*f}else if(e.order==="XZY"){const h=a*l,_=a*c,v=o*l,w=o*c;t[0]=l*p,t[4]=-f,t[8]=c*p,t[1]=h*f+w,t[5]=a*p,t[9]=_*f-v,t[2]=v*f-_,t[6]=o*p,t[10]=w*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lu,e,cu)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),In.crossVectors(n,Gt),In.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),In.crossVectors(n,Gt)),In.normalize(),cr.crossVectors(Gt,In),r[0]=In.x,r[4]=cr.x,r[8]=Gt.x,r[1]=In.y,r[5]=cr.y,r[9]=Gt.y,r[2]=In.z,r[6]=cr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],p=n[1],f=n[5],h=n[9],_=n[13],v=n[2],w=n[6],m=n[10],u=n[14],A=n[3],C=n[7],x=n[11],b=n[15],y=r[0],R=r[4],g=r[8],S=r[12],L=r[1],P=r[5],U=r[9],k=r[13],V=r[2],I=r[6],O=r[10],N=r[14],X=r[3],Q=r[7],se=r[11],te=r[15];return s[0]=a*y+o*L+l*V+c*X,s[4]=a*R+o*P+l*I+c*Q,s[8]=a*g+o*U+l*O+c*se,s[12]=a*S+o*k+l*N+c*te,s[1]=p*y+f*L+h*V+_*X,s[5]=p*R+f*P+h*I+_*Q,s[9]=p*g+f*U+h*O+_*se,s[13]=p*S+f*k+h*N+_*te,s[2]=v*y+w*L+m*V+u*X,s[6]=v*R+w*P+m*I+u*Q,s[10]=v*g+w*U+m*O+u*se,s[14]=v*S+w*k+m*N+u*te,s[3]=A*y+C*L+x*V+b*X,s[7]=A*R+C*P+x*I+b*Q,s[11]=A*g+C*U+x*O+b*se,s[15]=A*S+C*k+x*N+b*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],f=e[6],h=e[10],_=e[14],v=e[3],w=e[7],m=e[11],u=e[15],A=l*_-c*h,C=o*_-c*f,x=o*h-l*f,b=a*_-c*p,y=a*h-l*p,R=a*f-o*p;return t*(w*A-m*C+u*x)-n*(v*A-m*b+u*y)+r*(v*C-w*b+u*R)-s*(v*x-w*y+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],p=e[10];return t*(a*p-o*c)-n*(s*p-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],f=e[9],h=e[10],_=e[11],v=e[12],w=e[13],m=e[14],u=e[15],A=t*o-n*a,C=t*l-r*a,x=t*c-s*a,b=n*l-r*o,y=n*c-s*o,R=r*c-s*l,g=p*w-f*v,S=p*m-h*v,L=p*u-_*v,P=f*m-h*w,U=f*u-_*w,k=h*u-_*m,V=A*k-C*U+x*P+b*L-y*S+R*g;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return e[0]=(o*k-l*U+c*P)*I,e[1]=(r*U-n*k-s*P)*I,e[2]=(w*R-m*y+u*b)*I,e[3]=(h*y-f*R-_*b)*I,e[4]=(l*L-a*k-c*S)*I,e[5]=(t*k-r*L+s*S)*I,e[6]=(m*x-v*R-u*C)*I,e[7]=(p*R-h*x+_*C)*I,e[8]=(a*U-o*L+c*g)*I,e[9]=(n*L-t*U-s*g)*I,e[10]=(v*y-w*x+u*A)*I,e[11]=(f*x-p*y-_*A)*I,e[12]=(o*S-a*P-l*g)*I,e[13]=(t*P-n*S+r*g)*I,e[14]=(w*C-v*b-m*A)*I,e[15]=(p*b-f*C+h*A)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,p=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+n,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,p=a+a,f=o+o,h=s*c,_=s*p,v=s*f,w=a*p,m=a*f,u=o*f,A=l*c,C=l*p,x=l*f,b=n.x,y=n.y,R=n.z;return r[0]=(1-(w+u))*b,r[1]=(_+x)*b,r[2]=(v-C)*b,r[3]=0,r[4]=(_-x)*y,r[5]=(1-(h+u))*y,r[6]=(m+A)*y,r[7]=0,r[8]=(v+C)*R,r[9]=(m-A)*R,r[10]=(1-(h+w))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=hi.set(r[0],r[1],r[2]).length();const o=hi.set(r[4],r[5],r[6]).length(),l=hi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Jt.copy(this);const c=1/a,p=1/o,f=1/l;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=p,Jt.elements[5]*=p,Jt.elements[6]*=p,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=un,l=!1){const c=this.elements,p=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),_=(n+r)/(n-r);let v,w;if(l)v=s/(a-s),w=a*s/(a-s);else if(o===un)v=-(a+s)/(a-s),w=-2*a*s/(a-s);else if(o===tr)v=-a/(a-s),w=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=un,l=!1){const c=this.elements,p=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),_=-(n+r)/(n-r);let v,w;if(l)v=1/(a-s),w=a/(a-s);else if(o===un)v=-2/(a-s),w=-(a+s)/(a-s);else if(o===tr)v=-1/(a-s),w=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vr.prototype.isMatrix4=!0;let pt=Vr;const hi=new $,Jt=new pt,lu=new $(0,0,0),cu=new $(1,1,1),In=new $,cr=new $,Gt=new $,fo=new pt,ho=new ii;class Gn{constructor(e=0,t=0,n=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],f=r[2],h=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ho.setFromEuler(this),this.setFromQuaternion(ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uu=0;const po=new $,di=new ii,xn=new pt,ur=new $,Bi=new $,fu=new $,hu=new ii,mo=new $(1,0,0),go=new $(0,1,0),_o=new $(0,0,1),xo={type:"added"},du={type:"removed"},pi={type:"childadded",child:null},ss={type:"childremoved",child:null};class Pt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new $,t=new Gn,n=new ii,r=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new We}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(mo,e)}rotateY(e){return this.rotateOnAxis(go,e)}rotateZ(e){return this.rotateOnAxis(_o,e)}translateOnAxis(e,t){return po.copy(e).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mo,e)}translateY(e){return this.translateOnAxis(go,e)}translateZ(e){return this.translateOnAxis(_o,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Bi,ur,this.up):xn.lookAt(ur,Bi,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(xn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xo),pi.child=e,this.dispatchEvent(pi),pi.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(du),ss.child=e,this.dispatchEvent(ss),ss.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xo),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,fu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,hu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),f=a(e.shapes),h=a(e.skeletons),_=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),p.length>0&&(n.images=p),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new $(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $i extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pu={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const w of e.hand.values()){const m=t.getJointPose(w,n),u=this._getHandJoint(c,w);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const p=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=p.position.distanceTo(f.position),_=.02,v=.005;c.inputState.pinching&&h>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},fr={h:0,s:0,l:0};function os(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Ua(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=os(a,s,e+1/3),this.g=os(a,s,e),this.b=os(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.workingToColorSpace(It.copy(this),e),Math.round(et(It.r*255,0,255))*65536+Math.round(et(It.g*255,0,255))*256+Math.round(et(It.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(It.copy(this),t);const n=It.r,r=It.g,s=It.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=p<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Ot){tt.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,r=It.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(fr);const n=Ji(Un.h,fr.h,t),r=Ji(Un.s,fr.s,t),s=Ji(Un.l,fr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Je;Je.NAMES=Al;class Oa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new Oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mu extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qt=new $,vn=new $,ls=new $,Mn=new $,mi=new $,gi=new $,vo=new $,cs=new $,us=new $,fs=new $,hs=new vt,ds=new vt,ps=new vt;class en{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qt.subVectors(r,t),vn.subVectors(n,t),ls.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(vn),l=Qt.dot(ls),c=vn.dot(vn),p=vn.dot(ls),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,_=(c*l-o*p)*h,v=(a*p-o*l)*h;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return hs.setScalar(0),ds.setScalar(0),ps.setScalar(0),hs.fromBufferAttribute(e,t),ds.fromBufferAttribute(e,n),ps.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hs,s.x),a.addScaledVector(ds,s.y),a.addScaledVector(ps,s.z),a}static isFrontFacing(e,t,n,r){return Qt.subVectors(n,t),vn.subVectors(e,t),Qt.cross(vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Qt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;mi.subVectors(r,n),gi.subVectors(s,n),cs.subVectors(e,n);const l=mi.dot(cs),c=gi.dot(cs);if(l<=0&&c<=0)return t.copy(n);us.subVectors(e,r);const p=mi.dot(us),f=gi.dot(us);if(p>=0&&f<=p)return t.copy(r);const h=l*f-p*c;if(h<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(mi,a);fs.subVectors(e,s);const _=mi.dot(fs),v=gi.dot(fs);if(v>=0&&_<=v)return t.copy(s);const w=_*c-l*v;if(w<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(gi,o);const m=p*v-_*f;if(m<=0&&f-p>=0&&_-v>=0)return vo.subVectors(s,r),o=(f-p)/(f-p+(_-v)),t.copy(r).addScaledVector(vo,o);const u=1/(m+w+h);return a=w*u,o=h*u,t.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ri{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(s,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),dr.subVectors(this.max,zi),_i.subVectors(e.a,zi),xi.subVectors(e.b,zi),vi.subVectors(e.c,zi),Nn.subVectors(xi,_i),Fn.subVectors(vi,xi),Wn.subVectors(_i,vi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Wn.z,Wn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Wn.z,0,-Wn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Wn.y,Wn.x,0];return!ms(t,_i,xi,vi,dr)||(t=[1,0,0,0,1,0,0,0,1],!ms(t,_i,xi,vi,dr))?!1:(pr.crossVectors(Nn,Fn),t=[pr.x,pr.y,pr.z],ms(t,_i,xi,vi,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sn=[new $,new $,new $,new $,new $,new $,new $,new $],jt=new $,hr=new ri,_i=new $,xi=new $,vi=new $,Nn=new $,Fn=new $,Wn=new $,zi=new $,dr=new $,pr=new $,Xn=new $;function ms(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Xn.fromArray(i,s);const o=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),p=n.dot(Xn);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const bt=new $,mr=new Ze;let gu=0;class zt extends ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=io,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wl extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rl extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class An extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const _u=new ri,Hi=new $,gs=new $;class rr{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_u.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(gs)),this.expandByPoint(Hi.copy(e.center).sub(gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xu=0;const $t=new pt,_s=new Pt,Mi=new $,Vt=new ri,ki=new ri,Rt=new $;class mn extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?Rl:wl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return _s.lookAt(e),_s.updateMatrix(),this.applyMatrix4(_s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new An(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Vt.min,ki.min),Vt.expandByPoint(Rt),Rt.addVectors(Vt.max,ki.max),Vt.expandByPoint(Rt)):(Vt.expandByPoint(ki.min),Vt.expandByPoint(ki.max))}Vt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)Rt.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),Rt.add(Mi)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new $,l[g]=new $;const c=new $,p=new $,f=new $,h=new Ze,_=new Ze,v=new Ze,w=new $,m=new $;function u(g,S,L){c.fromBufferAttribute(n,g),p.fromBufferAttribute(n,S),f.fromBufferAttribute(n,L),h.fromBufferAttribute(s,g),_.fromBufferAttribute(s,S),v.fromBufferAttribute(s,L),p.sub(c),f.sub(c),_.sub(h),v.sub(h);const P=1/(_.x*v.y-v.x*_.y);isFinite(P)&&(w.copy(p).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(P),m.copy(f).multiplyScalar(_.x).addScaledVector(p,-v.x).multiplyScalar(P),o[g].add(w),o[S].add(w),o[L].add(w),l[g].add(m),l[S].add(m),l[L].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let g=0,S=A.length;g<S;++g){const L=A[g],P=L.start,U=L.count;for(let k=P,V=P+U;k<V;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const C=new $,x=new $,b=new $,y=new $;function R(g){b.fromBufferAttribute(r,g),y.copy(b);const S=o[g];C.copy(S),C.sub(b.multiplyScalar(b.dot(S))).normalize(),x.crossVectors(y,S);const P=x.dot(l[g])<0?-1:1;a.setXYZW(g,C.x,C.y,C.z,P)}for(let g=0,S=A.length;g<S;++g){const L=A[g],P=L.start,U=L.count;for(let k=P,V=P+U;k<V;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,_=n.count;h<_;h++)n.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,p=new $,f=new $;if(e)for(let h=0,_=e.count;h<_;h+=3){const v=e.getX(h+0),w=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,w),a.fromBufferAttribute(t,m),p.subVectors(a,s),f.subVectors(r,s),p.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,m),o.add(p),l.add(p),c.add(p),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,_=t.count;h<_;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),p.subVectors(a,s),f.subVectors(r,s),p.cross(f),n.setXYZ(h+0,p.x,p.y,p.z),n.setXYZ(h+1,p.x,p.y,p.z),n.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,f=o.normalized,h=new c.constructor(l.length*p);let _=0,v=0;for(let w=0,m=l.length;w<m;w++){o.isInterleavedBufferAttribute?_=l[w]*o.data.stride+o.offset:_=l[w]*p;for(let u=0;u<p;u++)h[v++]=c[_++]}return new zt(h,p,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,f=c.length;p<f;p++){const h=c[p],_=e(h,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let f=0,h=c.length;f<h;f++){const _=c[f];p.push(_.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(t))}const s=e.morphAttributes;for(const c in s){const p=[],f=s[c];for(let h=0,_=f.length;h<_;h++)p.push(f[h].clone(t));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let vu=0;class sr extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=wi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Is,this.blendDst=Us,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=no,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Is&&(n.blendSrc=this.blendSrc),this.blendDst!==Us&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==no&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yn=new $,xs=new $,gr=new $,On=new $,vs=new $,_r=new $,Ms=new $;class Cl{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xs.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(xs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gr),o=On.dot(this.direction),l=-On.dot(gr),c=On.lengthSq(),p=Math.abs(1-a*a);let f,h,_,v;if(p>0)if(f=a*l-o,h=a*o-l,v=s*p,f>=0)if(h>=-v)if(h<=v){const w=1/p;f*=w,h*=w,_=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),_=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),_=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),_=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),_=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xs).addScaledVector(gr,h),_}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),r=yn.dot(yn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),p>=0?(s=(e.min.y-h.y)*p,a=(e.max.y-h.y)*p):(s=(e.max.y-h.y)*p,a=(e.min.y-h.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,r,s){vs.subVectors(t,e),_r.subVectors(n,e),Ms.crossVectors(vs,_r);let a=this.direction.dot(Ms),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const l=o*this.direction.dot(_r.crossVectors(On,_r));if(l<0)return null;const c=o*this.direction.dot(vs.cross(On));if(c<0||l+c>a)return null;const p=-o*On.dot(Ms);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gr extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mo=new pt,qn=new Cl,xr=new rr,So=new $,vr=new $,Mr=new $,Sr=new $,Ss=new $,yr=new $,yo=new $,Er=new $;class Xt extends Pt{constructor(e=new mn,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],f=s[l];p!==0&&(Ss.fromBufferAttribute(f,e),a?yr.addScaledVector(Ss,p):yr.addScaledVector(Ss.sub(t),p))}t.add(yr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),qn.copy(e.ray).recast(e.near),!(xr.containsPoint(qn.origin)===!1&&(qn.intersectSphere(xr,So)===null||qn.origin.distanceToSquared(So)>(e.far-e.near)**2))&&(Mo.copy(s).invert(),qn.copy(e.ray).applyMatrix4(Mo),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,f=s.attributes.normal,h=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,w=h.length;v<w;v++){const m=h[v],u=a[m.materialIndex],A=Math.max(m.start,_.start),C=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let x=A,b=C;x<b;x+=3){const y=o.getX(x),R=o.getX(x+1),g=o.getX(x+2);r=br(this,u,e,n,c,p,f,y,R,g),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),w=Math.min(o.count,_.start+_.count);for(let m=v,u=w;m<u;m+=3){const A=o.getX(m),C=o.getX(m+1),x=o.getX(m+2);r=br(this,a,e,n,c,p,f,A,C,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,w=h.length;v<w;v++){const m=h[v],u=a[m.materialIndex],A=Math.max(m.start,_.start),C=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let x=A,b=C;x<b;x+=3){const y=x,R=x+1,g=x+2;r=br(this,u,e,n,c,p,f,y,R,g),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),w=Math.min(l.count,_.start+_.count);for(let m=v,u=w;m<u;m+=3){const A=m,C=m+1,x=m+2;r=br(this,a,e,n,c,p,f,A,C,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Mu(i,e,t,n,r,s,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===wn,o),l===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:i}}function br(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,vr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,Sr);const p=Mu(i,e,t,n,vr,Mr,Sr,yo);if(p){const f=new $;en.getBarycoord(yo,vr,Mr,Sr,f),r&&(p.uv=en.getInterpolatedAttribute(r,o,l,c,f,new Ze)),s&&(p.uv1=en.getInterpolatedAttribute(s,o,l,c,f,new Ze)),a&&(p.normal=en.getInterpolatedAttribute(a,o,l,c,f,new $),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new $,materialIndex:0};en.getNormal(vr,Mr,Sr,h.normal),p.face=h,p.barycoord=f}return p}class Jn extends Tt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Et,p=Et,f,h){super(null,a,o,l,c,p,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo extends zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Si=new pt,bo=new pt,Tr=[],To=new ri,Su=new pt,Gi=new Xt,Vi=new rr;class Ao extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Su)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),To.copy(e.boundingBox).applyMatrix4(Si),this.boundingBox.union(To)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),Vi.copy(e.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Gi.geometry=this.geometry,Gi.material=this.material,Gi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Si),bo.multiplyMatrices(n,Si),Gi.matrixWorld=bo,Gi.raycast(e,Tr);for(let a=0,o=Tr.length;a<o;a++){const l=Tr[a];l.instanceId=s,l.object=this,t.push(l)}Tr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jn(new Float32Array(r*this.count),r,this.count,Ra,tn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ys=new $,yu=new $,Eu=new We;class Kn{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ys.subVectors(n,t).cross(yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ys),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Eu.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new rr,bu=new Ze(.5,.5),Ar=new $;class Ba{constructor(e=new Kn,t=new Kn,n=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],p=s[4],f=s[5],h=s[6],_=s[7],v=s[8],w=s[9],m=s[10],u=s[11],A=s[12],C=s[13],x=s[14],b=s[15];if(r[0].setComponents(c-a,_-p,u-v,b-A).normalize(),r[1].setComponents(c+a,_+p,u+v,b+A).normalize(),r[2].setComponents(c+o,_+f,u+w,b+C).normalize(),r[3].setComponents(c-o,_-f,u-w,b-C).normalize(),n)r[4].setComponents(l,h,m,x).normalize(),r[5].setComponents(c-l,_-h,u-m,b-x).normalize();else if(r[4].setComponents(c-l,_-h,u-m,b-x).normalize(),t===un)r[5].setComponents(c+l,_+h,u+m,b+x).normalize();else if(t===tr)r[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){Yn.center.set(0,0,0);const t=bu.distanceTo(e.center);return Yn.radius=.7071067811865476+t,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ar.x=r.normal.x>0?e.max.x:e.min.x,Ar.y=r.normal.y>0?e.max.y:e.min.y,Ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pl extends Tt{constructor(e=[],t=ei,n,r,s,a,o,l,c,p){super(e,t,n,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wo extends Tt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di extends Tt{constructor(e,t,n=dn,r,s,a,o=Et,l=Et,c,p=Cn,f=1){if(p!==Cn&&p!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,p,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Na(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tu extends Di{constructor(e,t=dn,n=ei,r,s,a=Et,o=Et,l,c=Cn){const p={width:e,height:e,depth:1},f=[p,p,p,p,p,p];super(e,e,t,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ll extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ar extends mn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],f=[];let h=0,_=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(p,3)),this.setAttribute("uv",new An(f,2));function v(w,m,u,A,C,x,b,y,R,g,S){const L=x/R,P=b/g,U=x/2,k=b/2,V=y/2,I=R+1,O=g+1;let N=0,X=0;const Q=new $;for(let se=0;se<O;se++){const te=se*P-k;for(let pe=0;pe<I;pe++){const Oe=pe*L-U;Q[w]=Oe*A,Q[m]=te*C,Q[u]=V,c.push(Q.x,Q.y,Q.z),Q[w]=0,Q[m]=0,Q[u]=y>0?1:-1,p.push(Q.x,Q.y,Q.z),f.push(pe/R),f.push(1-se/g),N+=1}}for(let se=0;se<g;se++)for(let te=0;te<R;te++){const pe=h+te+I*se,Oe=h+te+I*(se+1),Qe=h+(te+1)+I*(se+1),Be=h+(te+1)+I*se;l.push(pe,Oe,Be),l.push(Oe,Qe,Be),X+=6}o.addGroup(_,X,S),_+=X,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ii extends mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,p=l+1,f=e/o,h=t/l,_=[],v=[],w=[],m=[];for(let u=0;u<p;u++){const A=u*h-a;for(let C=0;C<c;C++){const x=C*f-s;v.push(x,-A,0),w.push(0,0,1),m.push(C/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<o;A++){const C=A+c*u,x=A+c*(u+1),b=A+1+c*(u+1),y=A+1+c*u;_.push(C,x,y),_.push(x,b,y)}this.setIndex(_),this.setAttribute("position",new An(v,3)),this.setAttribute("normal",new An(w,3)),this.setAttribute("uv",new An(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Ro(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ro(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const r in n)e[r]=n[r]}return e}function Ro(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Au(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const wu={clone:Ui,merge:Ft};var Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Au(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new We().fromArray(r.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Pu extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lu extends sr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Du extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iu extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Es={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Co(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Co(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Co(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Uu{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){o++,s===!1&&r.onStart!==void 0&&r.onStart(p,a,o),s=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,f){return c.push(p,f),this},this.removeHandler=function(p){const f=c.indexOf(p);return f!==-1&&c.splice(f,2),this},this.getHandler=function(p){for(let f=0,h=c.length;f<h;f+=2){const _=c[f],v=c[f+1];if(_.global&&(_.lastIndex=0),_.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Nu=new Uu;class za{constructor(e){this.manager=e!==void 0?e:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}za.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi=new WeakMap;class Fu extends za{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Es.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=yi.get(a);f===void 0&&(f=[],yi.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=nr("img");function l(){p(),t&&t(this);const f=yi.get(this)||[];for(let h=0;h<f.length;h++){const _=f[h];_.onLoad&&_.onLoad(this)}yi.delete(this),s.manager.itemEnd(e)}function c(f){p(),r&&r(f),Es.remove(`image:${e}`);const h=yi.get(this)||[];for(let _=0;_<h.length;_++){const v=h[_];v.onError&&v.onError(f)}yi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Es.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Il extends za{constructor(e){super(e)}load(e,t,n,r){const s=new Tt,a=new Fu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ul extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ou extends Ul{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const bs=new pt,Po=new $,Lo=new $;class Bu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Po.setFromMatrixPosition(e.matrixWorld),t.position.copy(Po),Lo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lo),t.updateMatrixWorld(),bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bs,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===tr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wr=new $,Rr=new ii,sn=new $;class Nl extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wr,Rr,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Rr,sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wr,Rr,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Rr,sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new $,Do=new Ze,Io=new Ze;class Zt extends Nl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Do,Io),t.subVectors(Io,Do)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ha extends Nl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zu extends Bu{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hu extends Ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new zu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ei=-90,bi=1;class ku extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Ei,bi,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Ei,bi,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Ei,bi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Ei,bi,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Ei,bi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Ei,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,p]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(f,h,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Gu extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uo=new pt;class No{constructor(e,t,n=0,r=1/0){this.ray=new Cl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uo),this}intersectObject(e,t=!0,n=[]){return Ma(e,this,n,t),n.sort(Fo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ma(e[r],this,n,t);return n.sort(Fo),n}}function Fo(i,e){return i.distance-e.distance}function Ma(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ma(s[a],e,t,!0)}}const Xa=class Xa{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Xa.prototype.isMatrix2=!0;let Oo=Xa;function Bo(i,e,t,n){const r=Vu(n);switch(t){case yl:return i*e;case Ra:return i*e/r.components*r.byteLength;case Ca:return i*e/r.components*r.byteLength;case ti:return i*e*2/r.components*r.byteLength;case Pa:return i*e*2/r.components*r.byteLength;case El:return i*e*3/r.components*r.byteLength;case Ut:return i*e*4/r.components*r.byteLength;case La:return i*e*4/r.components*r.byteLength;case Ir:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ws:case qs:return Math.max(i,16)*Math.max(e,8)/4;case Vs:case Xs:return Math.max(i,8)*Math.max(e,8)/2;case Ys:case $s:case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Br:case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case da:case pa:case ma:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ga:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zr:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vu(i){switch(i){case Wt:case xl:return{byteLength:1,components:1};case ji:case vl:case Rn:return{byteLength:2,components:1};case Aa:case wa:return{byteLength:2,components:4};case dn:case Ta:case tn:return{byteLength:4,components:1};case Ml:case Sl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Wu(i){const e=new WeakMap;function t(o,l){const c=o.array,p=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,p),o.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const p=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,p);else{f.sort((_,v)=>_.start-v.start);let h=0;for(let _=1;_<f.length;_++){const v=f[h],w=f[_];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++h,f[h]=w)}f.length=h+1;for(let _=0,v=f.length;_<v;_++){const w=f[_];i.bufferSubData(c,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ju=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,af=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,th=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ah=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ch=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ph=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_h=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Th=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ah=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ch=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ph=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ih=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ed=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,td=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ad=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,od=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,md=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_d=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Xu,alphahash_pars_fragment:qu,alphamap_fragment:Yu,alphamap_pars_fragment:$u,alphatest_fragment:Ku,alphatest_pars_fragment:Zu,aomap_fragment:Ju,aomap_pars_fragment:Qu,batching_pars_vertex:ju,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:rf,iridescence_fragment:sf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:uf,color_fragment:ff,color_pars_fragment:hf,color_pars_vertex:df,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:xf,displacementmap_vertex:vf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Sf,colorspace_fragment:yf,colorspace_pars_fragment:Ef,envmap_fragment:bf,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Af,envmap_pars_vertex:wf,envmap_physical_pars_fragment:Bf,envmap_vertex:Rf,fog_vertex:Cf,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:If,lightmap_pars_fragment:Uf,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Ff,lights_pars_begin:Of,lights_toon_fragment:zf,lights_toon_pars_fragment:Hf,lights_phong_fragment:kf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,lightprobes_pars_fragment:$f,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Qf,map_fragment:jf,map_pars_fragment:eh,map_particle_fragment:th,map_particle_pars_fragment:nh,metalnessmap_fragment:ih,metalnessmap_pars_fragment:rh,morphinstance_vertex:sh,morphcolor_vertex:ah,morphnormal_vertex:oh,morphtarget_pars_vertex:lh,morphtarget_vertex:ch,normal_fragment_begin:uh,normal_fragment_maps:fh,normal_pars_fragment:hh,normal_pars_vertex:dh,normal_vertex:ph,normalmap_pars_fragment:mh,clearcoat_normal_fragment_begin:gh,clearcoat_normal_fragment_maps:_h,clearcoat_pars_fragment:xh,iridescence_pars_fragment:vh,opaque_fragment:Mh,packing:Sh,premultiplied_alpha_fragment:yh,project_vertex:Eh,dithering_fragment:bh,dithering_pars_fragment:Th,roughnessmap_fragment:Ah,roughnessmap_pars_fragment:wh,shadowmap_pars_fragment:Rh,shadowmap_pars_vertex:Ch,shadowmap_vertex:Ph,shadowmask_pars_fragment:Lh,skinbase_vertex:Dh,skinning_pars_vertex:Ih,skinning_vertex:Uh,skinnormal_vertex:Nh,specularmap_fragment:Fh,specularmap_pars_fragment:Oh,tonemapping_fragment:Bh,tonemapping_pars_fragment:zh,transmission_fragment:Hh,transmission_pars_fragment:kh,uv_pars_fragment:Gh,uv_pars_vertex:Vh,uv_vertex:Wh,worldpos_vertex:Xh,background_vert:qh,background_frag:Yh,backgroundCube_vert:$h,backgroundCube_frag:Kh,cube_vert:Zh,cube_frag:Jh,depth_vert:Qh,depth_frag:jh,distance_vert:ed,distance_frag:td,equirect_vert:nd,equirect_frag:id,linedashed_vert:rd,linedashed_frag:sd,meshbasic_vert:ad,meshbasic_frag:od,meshlambert_vert:ld,meshlambert_frag:cd,meshmatcap_vert:ud,meshmatcap_frag:fd,meshnormal_vert:hd,meshnormal_frag:dd,meshphong_vert:pd,meshphong_frag:md,meshphysical_vert:gd,meshphysical_frag:_d,meshtoon_vert:xd,meshtoon_frag:vd,points_vert:Md,points_frag:Sd,shadow_vert:yd,shadow_frag:Ed,sprite_vert:bd,sprite_frag:Td},Me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},on={basic:{uniforms:Ft([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ft([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ft([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ft([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ft([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ft([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ft([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ft([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ft([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ft([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ft([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Ft([Me.common,Me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Ft([Me.lights,Me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};on.physical={uniforms:Ft([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Cr={r:0,b:0,g:0},Ad=new pt,Ol=new We;Ol.set(-1,0,0,0,1,0,0,0,1);function wd(i,e,t,n,r,s){const a=new Je(0);let o=r===!0?0:1,l,c,p=null,f=0,h=null;function _(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){const x=A.backgroundBlurriness>0;C=e.get(C,x)}return C}function v(A){let C=!1;const x=_(A);x===null?m(a,o):x&&x.isColor&&(m(x,1),C=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(A,C){const x=_(C);x&&(x.isCubeTexture||x.mapping===Wr)?(c===void 0&&(c=new Xt(new ar(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ui(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ad.makeRotationFromEuler(C.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ol),c.material.toneMapped=tt.getTransfer(x.colorSpace)!==lt,(p!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,p=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Xt(new Ii(2,2),new pn({name:"BackgroundMaterial",uniforms:Ui(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,p=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,C){A.getRGB(Cr,Dl(i)),t.buffers.color.setClear(Cr.r,Cr.g,Cr.b,C,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,C=1){a.set(A),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:v,addToRenderList:w,dispose:u}}function Rd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(P,U,k,V,I){let O=!1;const N=f(P,V,k,U);s!==N&&(s=N,c(s.object)),O=_(P,V,k,I),O&&v(P,V,k,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,x(P,U,k,V),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function p(P){return i.deleteVertexArray(P)}function f(P,U,k,V){const I=V.wireframe===!0;let O=n[U.id];O===void 0&&(O={},n[U.id]=O);const N=P.isInstancedMesh===!0?P.id:0;let X=O[N];X===void 0&&(X={},O[N]=X);let Q=X[k.id];Q===void 0&&(Q={},X[k.id]=Q);let se=Q[I];return se===void 0&&(se=h(l()),Q[I]=se),se}function h(P){const U=[],k=[],V=[];for(let I=0;I<t;I++)U[I]=0,k[I]=0,V[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:V,object:P,attributes:{},index:null}}function _(P,U,k,V){const I=s.attributes,O=U.attributes;let N=0;const X=k.getAttributes();for(const Q in X)if(X[Q].location>=0){const te=I[Q];let pe=O[Q];if(pe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),te===void 0||te.attribute!==pe||pe&&te.data!==pe.data)return!0;N++}return s.attributesNum!==N||s.index!==V}function v(P,U,k,V){const I={},O=U.attributes;let N=0;const X=k.getAttributes();for(const Q in X)if(X[Q].location>=0){let te=O[Q];te===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const pe={};pe.attribute=te,te&&te.data&&(pe.data=te.data),I[Q]=pe,N++}s.attributes=I,s.attributesNum=N,s.index=V}function w(){const P=s.newAttributes;for(let U=0,k=P.length;U<k;U++)P[U]=0}function m(P){u(P,0)}function u(P,U){const k=s.newAttributes,V=s.enabledAttributes,I=s.attributeDivisors;k[P]=1,V[P]===0&&(i.enableVertexAttribArray(P),V[P]=1),I[P]!==U&&(i.vertexAttribDivisor(P,U),I[P]=U)}function A(){const P=s.newAttributes,U=s.enabledAttributes;for(let k=0,V=U.length;k<V;k++)U[k]!==P[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function C(P,U,k,V,I,O,N){N===!0?i.vertexAttribIPointer(P,U,k,I,O):i.vertexAttribPointer(P,U,k,V,I,O)}function x(P,U,k,V){w();const I=V.attributes,O=k.getAttributes(),N=U.defaultAttributeValues;for(const X in O){const Q=O[X];if(Q.location>=0){let se=I[X];if(se===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),se!==void 0){const te=se.normalized,pe=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;const Qe=Oe.buffer,Be=Oe.type,j=Oe.bytesPerElement,ce=Be===i.INT||Be===i.UNSIGNED_INT||se.gpuType===Ta;if(se.isInterleavedBufferAttribute){const oe=se.data,De=oe.stride,Ue=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Re=0;Re<Q.locationSize;Re++)u(Q.location+Re,oe.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<Q.locationSize;Re++)m(Q.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Re=0;Re<Q.locationSize;Re++)C(Q.location+Re,pe/Q.locationSize,Be,te,De*j,(Ue+pe/Q.locationSize*Re)*j,ce)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<Q.locationSize;oe++)u(Q.location+oe,se.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<Q.locationSize;oe++)m(Q.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let oe=0;oe<Q.locationSize;oe++)C(Q.location+oe,pe/Q.locationSize,Be,te,pe*j,pe/Q.locationSize*oe*j,ce)}}else if(N!==void 0){const te=N[X];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Q.location,te);break;case 3:i.vertexAttrib3fv(Q.location,te);break;case 4:i.vertexAttrib4fv(Q.location,te);break;default:i.vertexAttrib1fv(Q.location,te)}}}}A()}function b(){S();for(const P in n){const U=n[P];for(const k in U){const V=U[k];for(const I in V){const O=V[I];for(const N in O)p(O[N].object),delete O[N];delete V[I]}}delete n[P]}}function y(P){if(n[P.id]===void 0)return;const U=n[P.id];for(const k in U){const V=U[k];for(const I in V){const O=V[I];for(const N in O)p(O[N].object),delete O[N];delete V[I]}}delete n[P.id]}function R(P){for(const U in n){const k=n[U];for(const V in k){const I=k[V];if(I[P.id]===void 0)continue;const O=I[P.id];for(const N in O)p(O[N].object),delete O[N];delete I[P.id]}}}function g(P){for(const U in n){const k=n[U],V=P.isInstancedMesh===!0?P.id:0,I=k[V];if(I!==void 0){for(const O in I){const N=I[O];for(const X in N)p(N[X].object),delete N[X];delete I[O]}delete k[V],Object.keys(k).length===0&&delete n[U]}}}function S(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:w,enableAttribute:m,disableUnusedAttributes:A}}function Cd(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,p){p!==0&&(i.drawArraysInstanced(n,l,c,p),t.update(c,n,p))}function o(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,p);let h=0;for(let _=0;_<p;_++)h+=c[_];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Pd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Ut&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const g=R===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==tn&&!g)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const p=l(c);p!==c&&(ze("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:_,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:x,maxSamples:b,samples:y}}function Ld(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Kn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const _=f.length!==0||h||n!==0||r;return r=h,n=f.length,_},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=p(f,h,0)},this.setState=function(f,h,_){const v=f.clippingPlanes,w=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?p(null):c();else{const A=s?0:n,C=A*4;let x=u.clippingState||null;l.value=x,x=p(v,h,C,_);for(let b=0;b!==C;++b)x[b]=t[b];u.clippingState=x,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(f,h,_,v){const w=f!==null?f.length:0;let m=null;if(w!==0){if(m=l.value,v!==!0||m===null){const u=_+w*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<u)&&(m=new Float32Array(u));for(let C=0,x=_;C!==w;++C,x+=4)a.copy(f[C]).applyMatrix4(A,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,m}}const kn=4,zo=[.125,.215,.35,.446,.526,.582],Qn=20,Dd=256,Wi=new Ha,Ho=new Je;let Ts=null,As=0,ws=0,Rs=!1;const Id=new $;class ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Id}=s;Ts=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ts,As,ws),this._renderer.xr.enabled=Rs,e.scissorTest=!1,Ti(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ts=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Rn,format:Ut,colorSpace:Hr,depthBuffer:!1},r=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ud(s)),this._blurMaterial=Fd(s,e,t),this._ggxMaterial=Nd(s,e,t)}return r}_compileMaterial(e){const t=new Xt(new mn,e);this._renderer.compile(t,Wi)}_sceneToCubeUV(e,t,n,r,s){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,_=f.toneMapping;f.getClearColor(Ho),f.toneMapping=fn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new ar,new Gr({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,m=w.material;let u=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,u=!0):(m.color.copy(Ho),u=!0);for(let C=0;C<6;C++){const x=C%3;x===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[C],s.y,s.z)):x===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[C]));const b=this._cubeSize;Ti(r,x*b,C>2?b:0,b,b),f.setRenderTarget(r),u&&f.render(w,l),f.render(e,l)}f.toneMapping=_,f.autoClear=h,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ei||e.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ti(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-p*p),h=0+c*1.25,_=f*h,{_lodMax:v}=this,w=this._sizeLods[n],m=3*w*(n>v-kn?n-v+kn:0),u=4*(this._cubeSize-w);l.envMap.value=e.texture,l.roughness.value=_,l.mipInt.value=v-t,Ti(s,m,u,3*w,2*w),r.setRenderTarget(s),r.render(o,Wi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,Ti(e,m,u,3*w,2*w),r.setRenderTarget(e),r.render(o,Wi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const p=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Qn-1),w=s/v,m=isFinite(s)?1+Math.floor(p*w):Qn;m>Qn&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const u=[];let A=0;for(let R=0;R<Qn;++R){const g=R/w,S=Math.exp(-g*g/2);u.push(S),R===0?A+=S:R<m&&(A+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:C}=this;h.dTheta.value=v,h.mipInt.value=C-n;const x=this._sizeLods[r],b=3*x*(r>C-kn?r-C+kn:0),y=4*(this._cubeSize-x);Ti(t,b,y,3*x,2*x),l.setRenderTarget(t),l.render(f,Wi)}}function Ud(i){const e=[],t=[],n=[];let r=i;const s=i-kn+1+zo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-kn?l=zo[a-i+kn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),p=-c,f=1+c,h=[p,p,f,p,f,f,p,p,f,f,p,f],_=6,v=6,w=3,m=2,u=1,A=new Float32Array(w*v*_),C=new Float32Array(m*v*_),x=new Float32Array(u*v*_);for(let y=0;y<_;y++){const R=y%3*2/3-1,g=y>2?0:-1,S=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];A.set(S,w*v*y),C.set(h,m*v*y);const L=[y,y,y,y,y,y];x.set(L,u*v*y)}const b=new mn;b.setAttribute("position",new zt(A,w)),b.setAttribute("uv",new zt(C,m)),b.setAttribute("faceIndex",new zt(x,u)),n.push(new Xt(b,null)),r>kn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Go(i,e,t){const n=new hn(i,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ti(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Nd(i,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Fd(i,e,t){const n=new Float32Array(Qn),r=new $(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Vo(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Wo(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Xr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bl extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Pl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ar(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:bn});s.uniforms.tEquirect.value=t;const a=new Xt(r,s),o=t.minFilter;return t.minFilter===cn&&(t.minFilter=Ct),new ku(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Od(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,_=!1){return h==null?null:_?a(h):s(h)}function s(h){if(h&&h.isTexture){const _=h.mapping;if(_===Jr||_===Qr)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const w=new Bl(v.height);return w.fromEquirectangularTexture(i,h),e.set(h,w),h.addEventListener("dispose",c),o(w.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const _=h.mapping,v=_===Jr||_===Qr,w=_===ei||_===Li;if(v||w){let m=t.get(h);const u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new ko(i)),m=v?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const A=h.image;return v&&A&&A.height>0||w&&A&&l(A)?(n===null&&(n=new ko(i)),m=v?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",p),m.texture):null}}}return h}function o(h,_){return _===Jr?h.mapping=ei:_===Qr&&(h.mapping=Li),h}function l(h){let _=0;const v=6;for(let w=0;w<v;w++)h[w]!==void 0&&_++;return _===v}function c(h){const _=h.target;_.removeEventListener("dispose",c);const v=e.get(_);v!==void 0&&(e.delete(_),v.dispose())}function p(h){const _=h.target;_.removeEventListener("dispose",p);const v=t.get(_);v!==void 0&&(t.delete(_),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Bd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ri("WebGLRenderer: "+n+" extension not supported."),r}}}function zd(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const _=s.get(h);_&&(e.remove(_),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER)}function c(f){const h=[],_=f.index,v=f.attributes.position;let w=0;if(v===void 0)return;if(_!==null){const A=_.array;w=_.version;for(let C=0,x=A.length;C<x;C+=3){const b=A[C+0],y=A[C+1],R=A[C+2];h.push(b,y,y,R,R,b)}}else{const A=v.array;w=v.version;for(let C=0,x=A.length/3-1;C<x;C+=3){const b=C+0,y=C+1,R=C+2;h.push(b,y,y,R,R,b)}}const m=new(v.count>=65535?Rl:wl)(h,1);m.version=w;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function p(f){const h=s.get(f);if(h){const _=f.index;_!==null&&h.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:p}}function Hd(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,_){_!==0&&(i.drawElementsInstanced(n,h,s,f*a,_),t.update(h,n,_))}function p(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,_);let w=0;for(let m=0;m<_;m++)w+=h[m];t.update(w,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function kd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Gd(i,e,t){const n=new WeakMap,r=new vt;function s(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=p!==void 0?p.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let L=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var _=L;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let x=0;v===!0&&(x=1),w===!0&&(x=2),m===!0&&(x=3);let b=o.attributes.position.count*x,y=1;b>e.maxTextureSize&&(y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*y*4*f),g=new Tl(R,b,y,f);g.type=tn,g.needsUpdate=!0;const S=x*4;for(let P=0;P<f;P++){const U=u[P],k=A[P],V=C[P],I=b*y*4*P;for(let O=0;O<U.count;O++){const N=O*S;v===!0&&(r.fromBufferAttribute(U,O),R[I+N+0]=r.x,R[I+N+1]=r.y,R[I+N+2]=r.z,R[I+N+3]=0),w===!0&&(r.fromBufferAttribute(k,O),R[I+N+4]=r.x,R[I+N+5]=r.y,R[I+N+6]=r.z,R[I+N+7]=0),m===!0&&(r.fromBufferAttribute(V,O),R[I+N+8]=r.x,R[I+N+9]=r.y,R[I+N+10]=r.z,R[I+N+11]=V.itemSize===4?r.w:1)}}h={count:f,texture:g,size:new Ze(b,y)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const w=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",w),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Vd(i,e,t,n,r){let s=new WeakMap;function a(c){const p=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==p&&(e.update(h),s.set(h,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const _=c.skeleton;s.get(_)!==p&&(_.update(),s.set(_,p))}return h}function o(){s=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:o}}const Wd={[ul]:"LINEAR_TONE_MAPPING",[fl]:"REINHARD_TONE_MAPPING",[hl]:"CINEON_TONE_MAPPING",[dl]:"ACES_FILMIC_TONE_MAPPING",[ml]:"AGX_TONE_MAPPING",[gl]:"NEUTRAL_TONE_MAPPING",[pl]:"CUSTOM_TONE_MAPPING"};function Xd(i,e,t,n,r,s){const a=new hn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Di(e,t):void 0}),o=new hn(e,t,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new mn;l.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new An([0,2,0,0,2,0],2));const c=new Pu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Xt(l,c),f=new Ha(-1,1,1,-1,0,1);let h=null,_=null,v=!1,w,m=null,u=[],A=!1;this.setSize=function(C,x){a.setSize(C,x),o.setSize(C,x);for(let b=0;b<u.length;b++){const y=u[b];y.setSize&&y.setSize(C,x)}},this.setEffects=function(C){u=C,A=u.length>0&&u[0].isRenderPass===!0;const x=a.width,b=a.height;for(let y=0;y<u.length;y++){const R=u[y];R.setSize&&R.setSize(x,b)}},this.begin=function(C,x){if(v||C.toneMapping===fn&&u.length===0)return!1;if(m=x,x!==null){const b=x.width,y=x.height;(a.width!==b||a.height!==y)&&this.setSize(b,y)}return A===!1&&C.setRenderTarget(a),w=C.toneMapping,C.toneMapping=fn,!0},this.hasRenderPass=function(){return A},this.end=function(C,x){C.toneMapping=w,v=!0;let b=a,y=o;for(let R=0;R<u.length;R++){const g=u[R];if(g.enabled!==!1&&(g.render(C,y,b,x),g.needsSwap!==!1)){const S=b;b=y,y=S}}if(h!==C.outputColorSpace||_!==C.toneMapping){h=C.outputColorSpace,_=C.toneMapping,c.defines={},tt.getTransfer(h)===lt&&(c.defines.SRGB_TRANSFER="");const R=Wd[_];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,C.setRenderTarget(m),C.render(p,f),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const zl=new Tt,Sa=new Di(1,1),Hl=new Tl,kl=new ou,Gl=new Pl,Xo=[],qo=[],Yo=new Float32Array(16),$o=new Float32Array(9),Ko=new Float32Array(4);function Fi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Xo[r];if(s===void 0&&(s=new Float32Array(r),Xo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qr(i,e){let t=qo[e];t===void 0&&(t=new Int32Array(e),qo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Zd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Ko.set(n),i.uniformMatrix2fv(this.addr,!1,Ko),wt(t,n)}}function Jd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;$o.set(n),i.uniformMatrix3fv(this.addr,!1,$o),wt(t,n)}}function Qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Yo.set(n),i.uniformMatrix4fv(this.addr,!1,Yo),wt(t,n)}}function jd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function ip(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Sa.compareFunction=t.isReversedDepthBuffer()?Ia:Da,s=Sa):s=zl,t.setTexture2D(e||s,r)}function lp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||kl,r)}function cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Gl,r)}function up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hl,r)}function fp(i){switch(i){case 5126:return qd;case 35664:return Yd;case 35665:return $d;case 35666:return Kd;case 35674:return Zd;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return jd;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return rp;case 36295:return sp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return up}}function hp(i,e){i.uniform1fv(this.addr,e)}function dp(i,e){const t=Fi(e,this.size,2);i.uniform2fv(this.addr,t)}function pp(i,e){const t=Fi(e,this.size,3);i.uniform3fv(this.addr,t)}function mp(i,e){const t=Fi(e,this.size,4);i.uniform4fv(this.addr,t)}function gp(i,e){const t=Fi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _p(i,e){const t=Fi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xp(i,e){const t=Fi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vp(i,e){i.uniform1iv(this.addr,e)}function Mp(i,e){i.uniform2iv(this.addr,e)}function Sp(i,e){i.uniform3iv(this.addr,e)}function yp(i,e){i.uniform4iv(this.addr,e)}function Ep(i,e){i.uniform1uiv(this.addr,e)}function bp(i,e){i.uniform2uiv(this.addr,e)}function Tp(i,e){i.uniform3uiv(this.addr,e)}function Ap(i,e){i.uniform4uiv(this.addr,e)}function wp(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sa:a=zl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Rp(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||kl,s[a])}function Cp(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Gl,s[a])}function Pp(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);At(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hl,s[a])}function Lp(i){switch(i){case 5126:return hp;case 35664:return dp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return _p;case 35676:return xp;case 5124:case 35670:return vp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return yp;case 5125:return Ep;case 36294:return bp;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}class Dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fp(t.type)}}class Ip{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lp(t.type)}}class Up{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Cs=/(\w+)(\])?(\[|\.)?/g;function Zo(i,e){i.seq.push(e),i.map[e.id]=e}function Np(i,e,t){const n=i.name,r=n.length;for(Cs.lastIndex=0;;){const s=Cs.exec(n),a=Cs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Zo(t,c===void 0?new Dp(o,i,e):new Ip(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Up(o),Zo(t,f)),t=f}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Np(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Jo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fp=37297;let Op=0;function Bp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Qo=new We;function zp(i){tt._getMatrix(Qo,tt.workingColorSpace,i);const e=`mat3( ${Qo.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case kr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Bp(i.getShaderSource(e),o)}else return s}function Hp(i,e){const t=zp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const kp={[ul]:"Linear",[fl]:"Reinhard",[hl]:"Cineon",[dl]:"ACESFilmic",[ml]:"AgX",[gl]:"Neutral",[pl]:"Custom"};function Gp(i,e){const t=kp[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new $;function Vp(){tt.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Xp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ki(i){return i!==""}function el(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(Yp,Kp)}const $p=new Map;function Kp(i,e){let t=$e[e];if(t===void 0){const n=$p.get(e);if(n!==void 0)t=$e[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ya(t)}const Zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(Zp,Jp)}function Jp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function il(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Qp={[Dr]:"SHADOWMAP_TYPE_PCF",[Yi]:"SHADOWMAP_TYPE_VSM"};function jp(i){return Qp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const em={[ei]:"ENVMAP_TYPE_CUBE",[Li]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"};function tm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":em[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const nm={[Li]:"ENVMAP_MODE_REFRACTION"};function im(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rm={[ba]:"ENVMAP_BLENDING_MULTIPLY",[Tc]:"ENVMAP_BLENDING_MIX",[Ac]:"ENVMAP_BLENDING_ADD"};function sm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rm[i.combine]||"ENVMAP_BLENDING_NONE"}function am(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function om(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jp(t),c=tm(t),p=im(t),f=sm(t),h=am(t),_=Wp(t),v=Xp(s),w=r.createProgram();let m,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),u.length>0&&(u+=`
`)):(m=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),u=[il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?$e.tonemapping_pars_fragment:"",t.toneMapping!==fn?Gp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Hp("linearToOutputTexel",t.outputColorSpace),Vp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=ya(a),a=el(a,t),a=tl(a,t),o=ya(o),o=el(o,t),o=tl(o,t),a=nl(a),o=nl(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const C=A+m+a,x=A+u+o,b=Jo(r,r.VERTEX_SHADER,C),y=Jo(r,r.FRAGMENT_SHADER,x);r.attachShader(w,b),r.attachShader(w,y),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function R(P){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(w)||"",k=r.getShaderInfoLog(b)||"",V=r.getShaderInfoLog(y)||"",I=U.trim(),O=k.trim(),N=V.trim();let X=!0,Q=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,w,b,y);else{const se=jo(r,b,"vertex"),te=jo(r,y,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+se+`
`+te)}else I!==""?ze("WebGLProgram: Program Info Log:",I):(O===""||N==="")&&(Q=!1);Q&&(P.diagnostics={runnable:X,programLog:I,vertexShader:{log:O,prefix:m},fragmentShader:{log:N,prefix:u}})}r.deleteShader(b),r.deleteShader(y),g=new Or(r,w),S=qp(r,w)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(w,Fp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Op++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=b,this.fragmentShader=y,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new um(e),t.set(e,n)),n}}class um{constructor(e){this.id=lm++,this.code=e,this.usedTimes=0}}function fm(i){return i===ti||i===Br||i===zr}function hm(i,e,t,n,r,s){const a=new Fa,o=new cm,l=new Set,c=[],p=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return l.add(g),g===0?"uv":`uv${g}`}function w(g,S,L,P,U,k){const V=P.fog,I=U.geometry,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,N=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,X=e.get(g.envMap||O,N),Q=X&&X.mapping===Wr?X.image.height:null,se=_[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&ze("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,pe=te!==void 0?te.length:0;let Oe=0;I.morphAttributes.position!==void 0&&(Oe=1),I.morphAttributes.normal!==void 0&&(Oe=2),I.morphAttributes.color!==void 0&&(Oe=3);let Qe,Be,j,ce;if(se){const Ae=on[se];Qe=Ae.vertexShader,Be=Ae.fragmentShader}else{Qe=g.vertexShader,Be=g.fragmentShader;const Ae=o.getVertexShaderStage(g),_t=o.getFragmentShaderStage(g);o.update(g,Ae,_t),j=Ae.id,ce=_t.id}const oe=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,at=!!g.map,Ve=!!g.matcap,ke=!!X,Ye=!!g.aoMap,Xe=!!g.lightMap,st=!!g.bumpMap&&g.wireframe===!1,ft=!!g.normalMap,mt=!!g.displacementMap,ct=!!g.emissiveMap,it=!!g.metalnessMap,D=!!g.roughnessMap,T=g.anisotropy>0,he=g.clearcoat>0,de=g.dispersion>0,E=g.iridescence>0,d=g.sheen>0,F=g.transmission>0,H=T&&!!g.anisotropyMap,q=he&&!!g.clearcoatMap,ie=he&&!!g.clearcoatNormalMap,ue=he&&!!g.clearcoatRoughnessMap,B=E&&!!g.iridescenceMap,W=E&&!!g.iridescenceThicknessMap,le=d&&!!g.sheenColorMap,xe=d&&!!g.sheenRoughnessMap,ae=!!g.specularMap,re=!!g.specularColorMap,fe=!!g.specularIntensityMap,_e=F&&!!g.transmissionMap,Fe=F&&!!g.thicknessMap,z=!!g.gradientMap,ge=!!g.alphaMap,ee=g.alphaTest>0,me=!!g.alphaHash,ve=!!g.extensions;let ne=fn;g.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ne=i.toneMapping);const we={shaderID:se,shaderType:g.type,shaderName:g.name,vertexShader:Qe,fragmentShader:Be,defines:g.defines,customVertexShaderID:j,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Re,batchingColor:Re&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:at,matcap:Ve,envMap:ke,envMapMode:ke&&X.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:Xe,bumpMap:st,normalMap:ft,displacementMap:mt,emissiveMap:ct,normalMapObjectSpace:ft&&g.normalMapType===Cc,normalMapTangentSpace:ft&&g.normalMapType===va,packedNormalMap:ft&&g.normalMapType===va&&fm(g.normalMap.format),metalnessMap:it,roughnessMap:D,anisotropy:T,anisotropyMap:H,clearcoat:he,clearcoatMap:q,clearcoatNormalMap:ie,clearcoatRoughnessMap:ue,dispersion:de,iridescence:E,iridescenceMap:B,iridescenceThicknessMap:W,sheen:d,sheenColorMap:le,sheenRoughnessMap:xe,specularMap:ae,specularColorMap:re,specularIntensityMap:fe,transmission:F,transmissionMap:_e,thicknessMap:Fe,gradientMap:z,opaque:g.transparent===!1&&g.blending===wi&&g.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:me,combine:g.combine,mapUv:at&&v(g.map.channel),aoMapUv:Ye&&v(g.aoMap.channel),lightMapUv:Xe&&v(g.lightMap.channel),bumpMapUv:st&&v(g.bumpMap.channel),normalMapUv:ft&&v(g.normalMap.channel),displacementMapUv:mt&&v(g.displacementMap.channel),emissiveMapUv:ct&&v(g.emissiveMap.channel),metalnessMapUv:it&&v(g.metalnessMap.channel),roughnessMapUv:D&&v(g.roughnessMap.channel),anisotropyMapUv:H&&v(g.anisotropyMap.channel),clearcoatMapUv:q&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:W&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(g.sheenRoughnessMap.channel),specularMapUv:ae&&v(g.specularMap.channel),specularColorMapUv:re&&v(g.specularColorMap.channel),specularIntensityMapUv:fe&&v(g.specularIntensityMap.channel),transmissionMapUv:_e&&v(g.transmissionMap.channel),thicknessMapUv:Fe&&v(g.thicknessMap.channel),alphaMapUv:ge&&v(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ft||T),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(at||ge),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&ft===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:De,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:at&&g.map.isVideoTexture===!0&&tt.getTransfer(g.map.colorSpace)===lt,decodeVideoTextureEmissive:ct&&g.emissiveMap.isVideoTexture===!0&&tt.getTransfer(g.emissiveMap.colorSpace)===lt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ln,flipSided:g.side===Bt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ve&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&g.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)S.push(L),S.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(u(S,g),A(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function u(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function A(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function C(g){const S=_[g.type];let L;if(S){const P=on[S];L=wu.clone(P.uniforms)}else L=g.uniforms;return L}function x(g,S){let L=p.get(S);return L!==void 0?++L.usedTimes:(L=new om(i,S,g,r),c.push(L),p.set(S,L)),L}function b(g){if(--g.usedTimes===0){const S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),p.delete(g.cacheKey),g.destroy()}}function y(g){o.remove(g)}function R(){o.dispose()}return{getParameters:w,getProgramCacheKey:m,getUniforms:C,acquireProgram:x,releaseProgram:b,releaseShaderCache:y,programs:c,dispose:R}}function dm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function pm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let _=0;return h.isInstancedMesh&&(_+=2),h.isSkinnedMesh&&(_+=1),_}function o(h,_,v,w,m,u){let A=i[e];return A===void 0?(A={id:h.id,object:h,geometry:_,material:v,materialVariant:a(h),groupOrder:w,renderOrder:h.renderOrder,z:m,group:u},i[e]=A):(A.id=h.id,A.object=h,A.geometry=_,A.material=v,A.materialVariant=a(h),A.groupOrder=w,A.renderOrder=h.renderOrder,A.z=m,A.group=u),e++,A}function l(h,_,v,w,m,u){const A=o(h,_,v,w,m,u);v.transmission>0?n.push(A):v.transparent===!0?r.push(A):t.push(A)}function c(h,_,v,w,m,u){const A=o(h,_,v,w,m,u);v.transmission>0?n.unshift(A):v.transparent===!0?r.unshift(A):t.unshift(A)}function p(h,_,v){t.length>1&&t.sort(h||pm),n.length>1&&n.sort(_||rl),r.length>1&&r.sort(_||rl),v&&(t.reverse(),n.reverse(),r.reverse())}function f(){for(let h=e,_=i.length;h<_;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:p}}function mm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new sl,i.set(n,[a])):r>=s.length?(a=new sl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function gm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Je};break;case"SpotLight":t={position:new $,direction:new $,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function _m(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xm=0;function vm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mm(i){const e=new gm,t=_m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new pt,a=new pt;function o(c){let p=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let _=0,v=0,w=0,m=0,u=0,A=0,C=0,x=0,b=0,y=0,R=0;c.sort(vm);for(let S=0,L=c.length;S<L;S++){const P=c[S],U=P.color,k=P.intensity,V=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ti?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)p+=U.r*k,f+=U.g*k,h+=U.b*k;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],k);R++}else if(P.isDirectionalLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const N=P.shadow,X=t.get(P);X.shadowIntensity=N.intensity,X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,n.directionalShadow[_]=X,n.directionalShadowMap[_]=I,n.directionalShadowMatrix[_]=P.shadow.matrix,A++}n.directional[_]=O,_++}else if(P.isSpotLight){const O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(U).multiplyScalar(k),O.distance=V,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[w]=O;const N=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,N.updateMatrices(P),P.castShadow&&y++),n.spotLightMatrix[w]=N.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=N.intensity,X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,n.spotShadow[w]=X,n.spotShadowMap[w]=I,x++}w++}else if(P.isRectAreaLight){const O=e.get(P);O.color.copy(U).multiplyScalar(k),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=O,m++}else if(P.isPointLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const N=P.shadow,X=t.get(P);X.shadowIntensity=N.intensity,X.shadowBias=N.bias,X.shadowNormalBias=N.normalBias,X.shadowRadius=N.radius,X.shadowMapSize=N.mapSize,X.shadowCameraNear=N.camera.near,X.shadowCameraFar=N.camera.far,n.pointShadow[v]=X,n.pointShadowMap[v]=I,n.pointShadowMatrix[v]=P.shadow.matrix,C++}n.point[v]=O,v++}else if(P.isHemisphereLight){const O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(k),O.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[u]=O,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=f,n.ambient[2]=h;const g=n.hash;(g.directionalLength!==_||g.pointLength!==v||g.spotLength!==w||g.rectAreaLength!==m||g.hemiLength!==u||g.numDirectionalShadows!==A||g.numPointShadows!==C||g.numSpotShadows!==x||g.numSpotMaps!==b||g.numLightProbes!==R)&&(n.directional.length=_,n.spot.length=w,n.rectArea.length=m,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=x+b-y,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,g.directionalLength=_,g.pointLength=v,g.spotLength=w,g.rectAreaLength=m,g.hemiLength=u,g.numDirectionalShadows=A,g.numPointShadows=C,g.numSpotShadows=x,g.numSpotMaps=b,g.numLightProbes=R,n.version=xm++)}function l(c,p){let f=0,h=0,_=0,v=0,w=0;const m=p.matrixWorldInverse;for(let u=0,A=c.length;u<A;u++){const C=c[u];if(C.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(C.isSpotLight){const x=n.spot[_];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),_++}else if(C.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(C.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(C.width*.5,0,0),x.halfHeight.set(0,C.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(m),h++}else if(C.isHemisphereLight){const x=n.hemi[w];x.direction.setFromMatrixPosition(C.matrixWorld),x.direction.transformDirection(m),w++}}}return{setup:o,setupView:l,state:n}}function al(i){const e=new Mm(i),t=[],n=[],r=[];function s(h){f.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function p(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Sm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new al(i),e.set(r,[o])):s>=a.length?(o=new al(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bm=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Tm=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],ol=new pt,Xi=new $,Ps=new $;function Am(i,e,t){let n=new Ba;const r=new Ze,s=new Ze,a=new vt,o=new Du,l=new Iu,c={},p=t.maxTextureSize,f={[wn]:Bt,[Bt]:wn,[ln]:ln},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:ym,fragmentShader:Em}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const v=new mn;v.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Xt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let u=this.type;this.render=function(y,R,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===ac&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dr);const S=i.getRenderTarget(),L=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(bn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=u!==this.type;k&&R.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(I=>I.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,I=y.length;V<I;V++){const O=y[V],N=O.shadow;if(N===void 0){ze("WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();r.multiply(X),s.copy(N.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/X.y),r.y=s.y*X.y,N.mapSize.y=s.y));const Q=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Q,N.map===null||k===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Yi){if(O.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new hn(r.x,r.y,{format:ti,type:Rn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),N.map.texture.name=O.name+".shadowMap",N.map.depthTexture=new Di(r.x,r.y,tn),N.map.depthTexture.name=O.name+".shadowMapDepth",N.map.depthTexture.format=Cn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Et,N.map.depthTexture.magFilter=Et}else O.isPointLight?(N.map=new Bl(r.x),N.map.depthTexture=new Tu(r.x,dn)):(N.map=new hn(r.x,r.y),N.map.depthTexture=new Di(r.x,r.y,dn)),N.map.depthTexture.name=O.name+".shadowMap",N.map.depthTexture.format=Cn,this.type===Dr?(N.map.depthTexture.compareFunction=Q?Ia:Da,N.map.depthTexture.minFilter=Ct,N.map.depthTexture.magFilter=Ct):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Et,N.map.depthTexture.magFilter=Et);N.camera.updateProjectionMatrix()}const se=N.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<se;te++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,te),i.clear();else{te===0&&(i.setRenderTarget(N.map),i.clear());const pe=N.getViewport(te);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),U.viewport(a)}if(O.isPointLight){const pe=N.camera,Oe=N.matrix,Qe=O.distance||pe.far;Qe!==pe.far&&(pe.far=Qe,pe.updateProjectionMatrix()),Xi.setFromMatrixPosition(O.matrixWorld),pe.position.copy(Xi),Ps.copy(pe.position),Ps.add(bm[te]),pe.up.copy(Tm[te]),pe.lookAt(Ps),pe.updateMatrixWorld(),Oe.makeTranslation(-Xi.x,-Xi.y,-Xi.z),ol.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),N._frustum.setFromProjectionMatrix(ol,pe.coordinateSystem,pe.reversedDepth)}else N.updateMatrices(O);n=N.getFrustum(),x(R,g,N.camera,O,this.type)}N.isPointLightShadow!==!0&&this.type===Yi&&A(N,g),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,L,P)};function A(y,R){const g=e.update(w);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,_.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new hn(r.x,r.y,{format:ti,type:Rn})),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(R,null,g,h,w,null),_.uniforms.shadow_pass.value=y.mapPass.texture,_.uniforms.resolution.value=y.mapSize,_.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(R,null,g,_,w,null)}function C(y,R,g,S){let L=null;const P=g.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)L=P;else if(L=g.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=L.uuid,k=R.uuid;let V=c[U];V===void 0&&(V={},c[U]=V);let I=V[k];I===void 0&&(I=L.clone(),V[k]=I,R.addEventListener("dispose",b)),L=I}if(L.visible=R.visible,L.wireframe=R.wireframe,S===Yi?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:f[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,g.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=i.properties.get(L);U.light=g}return L}function x(y,R,g,S,L){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&L===Yi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,y.matrixWorld);const k=e.update(y),V=y.material;if(Array.isArray(V)){const I=k.groups;for(let O=0,N=I.length;O<N;O++){const X=I[O],Q=V[X.materialIndex];if(Q&&Q.visible){const se=C(y,Q,S,L);y.onBeforeShadow(i,y,R,g,k,se,X),i.renderBufferDirect(g,null,k,se,y,X),y.onAfterShadow(i,y,R,g,k,se,X)}}}else if(V.visible){const I=C(y,V,S,L);y.onBeforeShadow(i,y,R,g,k,I,null),i.renderBufferDirect(g,null,k,I,y,null),y.onAfterShadow(i,y,R,g,k,I,null)}}const U=y.children;for(let k=0,V=U.length;k<V;k++)x(U[k],R,g,S,L)}function b(y){y.target.removeEventListener("dispose",b);for(const g in c){const S=c[g],L=y.target.uuid;L in S&&(S[L].dispose(),delete S[L])}}}function wm(i,e){function t(){let z=!1;const ge=new vt;let ee=null;const me=new vt(0,0,0,0);return{setMask:function(ve){ee!==ve&&!z&&(i.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){z=ve},setClear:function(ve,ne,we,Ae,_t){_t===!0&&(ve*=Ae,ne*=Ae,we*=Ae),ge.set(ve,ne,we,Ae),me.equals(ge)===!1&&(i.clearColor(ve,ne,we,Ae),me.copy(ge))},reset:function(){z=!1,ee=null,me.set(-1,0,0,0)}}}function n(){let z=!1,ge=!1,ee=null,me=null,ve=null;return{setReversed:function(ne){if(ge!==ne){const we=e.get("EXT_clip_control");ne?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ge=ne;const Ae=ve;ve=null,this.setClear(Ae)}},getReversed:function(){return ge},setTest:function(ne){ne?oe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!z&&(i.depthMask(ne),ee=ne)},setFunc:function(ne){if(ge&&(ne=zc[ne]),me!==ne){switch(ne){case Ns:i.depthFunc(i.NEVER);break;case Fs:i.depthFunc(i.ALWAYS);break;case Os:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case Bs:i.depthFunc(i.EQUAL);break;case zs:i.depthFunc(i.GEQUAL);break;case Hs:i.depthFunc(i.GREATER);break;case ks:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ne}},setLocked:function(ne){z=ne},setClear:function(ne){ve!==ne&&(ve=ne,ge&&(ne=1-ne),i.clearDepth(ne))},reset:function(){z=!1,ee=null,me=null,ve=null,ge=!1}}}function r(){let z=!1,ge=null,ee=null,me=null,ve=null,ne=null,we=null,Ae=null,_t=null;return{setTest:function(ot){z||(ot?oe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(ot){ge!==ot&&!z&&(i.stencilMask(ot),ge=ot)},setFunc:function(ot,Ht,qt){(ee!==ot||me!==Ht||ve!==qt)&&(i.stencilFunc(ot,Ht,qt),ee=ot,me=Ht,ve=qt)},setOp:function(ot,Ht,qt){(ne!==ot||we!==Ht||Ae!==qt)&&(i.stencilOp(ot,Ht,qt),ne=ot,we=Ht,Ae=qt)},setLocked:function(ot){z=ot},setClear:function(ot){_t!==ot&&(i.clearStencil(ot),_t=ot)},reset:function(){z=!1,ge=null,ee=null,me=null,ve=null,ne=null,we=null,Ae=null,_t=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let p={},f={},h={},_=new WeakMap,v=[],w=null,m=!1,u=null,A=null,C=null,x=null,b=null,y=null,R=null,g=new Je(0,0,0),S=0,L=!1,P=null,U=null,k=null,V=null,I=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Q)[1]),N=X>=1):Q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),N=X>=2);let se=null,te={};const pe=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Qe=new vt().fromArray(pe),Be=new vt().fromArray(Oe);function j(z,ge,ee,me){const ve=new Uint8Array(4),ne=i.createTexture();i.bindTexture(z,ne),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<ee;we++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ge+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ne}const ce={};ce[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(Pi),st(!1),ft(Qa),oe(i.CULL_FACE),Ye(bn);function oe(z){p[z]!==!0&&(i.enable(z),p[z]=!0)}function De(z){p[z]!==!1&&(i.disable(z),p[z]=!1)}function Ue(z,ge){return h[z]!==ge?(i.bindFramebuffer(z,ge),h[z]=ge,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Re(z,ge){let ee=v,me=!1;if(z){ee=_.get(ge),ee===void 0&&(ee=[],_.set(ge,ee));const ve=z.textures;if(ee.length!==ve.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,we=ve.length;ne<we;ne++)ee[ne]=i.COLOR_ATTACHMENT0+ne;ee.length=ve.length,me=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,me=!0);me&&i.drawBuffers(ee)}function at(z){return w!==z?(i.useProgram(z),w=z,!0):!1}const Ve={[Zn]:i.FUNC_ADD,[lc]:i.FUNC_SUBTRACT,[cc]:i.FUNC_REVERSE_SUBTRACT};Ve[uc]=i.MIN,Ve[fc]=i.MAX;const ke={[hc]:i.ZERO,[dc]:i.ONE,[pc]:i.SRC_COLOR,[Is]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[xc]:i.DST_COLOR,[gc]:i.DST_ALPHA,[mc]:i.ONE_MINUS_SRC_COLOR,[Us]:i.ONE_MINUS_SRC_ALPHA,[vc]:i.ONE_MINUS_DST_COLOR,[_c]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[Ec]:i.CONSTANT_ALPHA,[bc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(z,ge,ee,me,ve,ne,we,Ae,_t,ot){if(z===bn){m===!0&&(De(i.BLEND),m=!1);return}if(m===!1&&(oe(i.BLEND),m=!0),z!==oc){if(z!==u||ot!==L){if((A!==Zn||b!==Zn)&&(i.blendEquation(i.FUNC_ADD),A=Zn,b=Zn),ot)switch(z){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ja:i.blendFunc(i.ONE,i.ONE);break;case eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",z);break}else switch(z){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case eo:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case to:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",z);break}C=null,x=null,y=null,R=null,g.set(0,0,0),S=0,u=z,L=ot}return}ve=ve||ge,ne=ne||ee,we=we||me,(ge!==A||ve!==b)&&(i.blendEquationSeparate(Ve[ge],Ve[ve]),A=ge,b=ve),(ee!==C||me!==x||ne!==y||we!==R)&&(i.blendFuncSeparate(ke[ee],ke[me],ke[ne],ke[we]),C=ee,x=me,y=ne,R=we),(Ae.equals(g)===!1||_t!==S)&&(i.blendColor(Ae.r,Ae.g,Ae.b,_t),g.copy(Ae),S=_t),u=z,L=!1}function Xe(z,ge){z.side===ln?De(i.CULL_FACE):oe(i.CULL_FACE);let ee=z.side===Bt;ge&&(ee=!ee),st(ee),z.blending===wi&&z.transparent===!1?Ye(bn):Ye(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const me=z.stencilWrite;o.setTest(me),me&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ct(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(z){P!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),P=z)}function ft(z){z!==rc?(oe(i.CULL_FACE),z!==U&&(z===Qa?i.cullFace(i.BACK):z===sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),U=z}function mt(z){z!==k&&(N&&i.lineWidth(z),k=z)}function ct(z,ge,ee){z?(oe(i.POLYGON_OFFSET_FILL),(V!==ge||I!==ee)&&(V=ge,I=ee,a.getReversed()&&(ge=-ge),i.polygonOffset(ge,ee))):De(i.POLYGON_OFFSET_FILL)}function it(z){z?oe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function D(z){z===void 0&&(z=i.TEXTURE0+O-1),se!==z&&(i.activeTexture(z),se=z)}function T(z,ge,ee){ee===void 0&&(se===null?ee=i.TEXTURE0+O-1:ee=se);let me=te[ee];me===void 0&&(me={type:void 0,texture:void 0},te[ee]=me),(me.type!==z||me.texture!==ge)&&(se!==ee&&(i.activeTexture(ee),se=ee),i.bindTexture(z,ge||ce[z]),me.type=z,me.texture=ge)}function he(){const z=te[se];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function de(){try{i.compressedTexImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function d(){try{i.texSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function F(){try{i.texSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function ie(){try{i.texStorage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function ue(){try{i.texStorage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function B(){try{i.texImage2D(...arguments)}catch(z){nt("WebGLState:",z)}}function W(){try{i.texImage3D(...arguments)}catch(z){nt("WebGLState:",z)}}function le(z){return f[z]!==void 0?f[z]:i.getParameter(z)}function xe(z,ge){f[z]!==ge&&(i.pixelStorei(z,ge),f[z]=ge)}function ae(z){Qe.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Qe.copy(z))}function re(z){Be.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Be.copy(z))}function fe(z,ge){let ee=c.get(ge);ee===void 0&&(ee=new WeakMap,c.set(ge,ee));let me=ee.get(z);me===void 0&&(me=i.getUniformBlockIndex(ge,z.name),ee.set(z,me))}function _e(z,ge){const me=c.get(ge).get(z);l.get(ge)!==me&&(i.uniformBlockBinding(ge,me,z.__bindingPointIndex),l.set(ge,me))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},f={},se=null,te={},h={},_=new WeakMap,v=[],w=null,m=!1,u=null,A=null,C=null,x=null,b=null,y=null,R=null,g=new Je(0,0,0),S=0,L=!1,P=null,U=null,k=null,V=null,I=null,Qe.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:De,bindFramebuffer:Ue,drawBuffers:Re,useProgram:at,setBlending:Ye,setMaterial:Xe,setFlipSided:st,setCullFace:ft,setLineWidth:mt,setPolygonOffset:ct,setScissorTest:it,activeTexture:D,bindTexture:T,unbindTexture:he,compressedTexImage2D:de,compressedTexImage3D:E,texImage2D:B,texImage3D:W,pixelStorei:xe,getParameter:le,updateUBOMapping:fe,uniformBlockBinding:_e,texStorage2D:ie,texStorage3D:ue,texSubImage2D:d,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:ae,viewport:re,reset:Fe}}function Rm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,p=new WeakMap,f=new Set;let h;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(E,d){return v?new OffscreenCanvas(E,d):nr("canvas")}function m(E,d,F){let H=1;const q=de(E);if((q.width>F||q.height>F)&&(H=F/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ie=Math.floor(H*q.width),ue=Math.floor(H*q.height);h===void 0&&(h=w(ie,ue));const B=d?w(ie,ue):h;return B.width=ie,B.height=ue,B.getContext("2d").drawImage(E,0,0,ie,ue),ze("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ie+"x"+ue+")."),B}else return"data"in E&&ze("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),E;return E}function u(E){return E.generateMipmaps}function A(E){i.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(E,d,F,H,q,ie=!1){if(E!==null){if(i[E]!==void 0)return i[E];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue;H&&(ue=e.get("EXT_texture_norm16"),ue||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=d;if(d===i.RED&&(F===i.FLOAT&&(B=i.R32F),F===i.HALF_FLOAT&&(B=i.R16F),F===i.UNSIGNED_BYTE&&(B=i.R8),F===i.UNSIGNED_SHORT&&ue&&(B=ue.R16_EXT),F===i.SHORT&&ue&&(B=ue.R16_SNORM_EXT)),d===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(B=i.R8UI),F===i.UNSIGNED_SHORT&&(B=i.R16UI),F===i.UNSIGNED_INT&&(B=i.R32UI),F===i.BYTE&&(B=i.R8I),F===i.SHORT&&(B=i.R16I),F===i.INT&&(B=i.R32I)),d===i.RG&&(F===i.FLOAT&&(B=i.RG32F),F===i.HALF_FLOAT&&(B=i.RG16F),F===i.UNSIGNED_BYTE&&(B=i.RG8),F===i.UNSIGNED_SHORT&&ue&&(B=ue.RG16_EXT),F===i.SHORT&&ue&&(B=ue.RG16_SNORM_EXT)),d===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(B=i.RG8UI),F===i.UNSIGNED_SHORT&&(B=i.RG16UI),F===i.UNSIGNED_INT&&(B=i.RG32UI),F===i.BYTE&&(B=i.RG8I),F===i.SHORT&&(B=i.RG16I),F===i.INT&&(B=i.RG32I)),d===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(B=i.RGB8UI),F===i.UNSIGNED_SHORT&&(B=i.RGB16UI),F===i.UNSIGNED_INT&&(B=i.RGB32UI),F===i.BYTE&&(B=i.RGB8I),F===i.SHORT&&(B=i.RGB16I),F===i.INT&&(B=i.RGB32I)),d===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),F===i.UNSIGNED_INT&&(B=i.RGBA32UI),F===i.BYTE&&(B=i.RGBA8I),F===i.SHORT&&(B=i.RGBA16I),F===i.INT&&(B=i.RGBA32I)),d===i.RGB&&(F===i.UNSIGNED_SHORT&&ue&&(B=ue.RGB16_EXT),F===i.SHORT&&ue&&(B=ue.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),d===i.RGBA){const W=ie?kr:tt.getTransfer(q);F===i.FLOAT&&(B=i.RGBA32F),F===i.HALF_FLOAT&&(B=i.RGBA16F),F===i.UNSIGNED_BYTE&&(B=W===lt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ue&&(B=ue.RGBA16_EXT),F===i.SHORT&&ue&&(B=ue.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function b(E,d){let F;return E?d===null||d===dn||d===er?F=i.DEPTH24_STENCIL8:d===tn?F=i.DEPTH32F_STENCIL8:d===ji&&(F=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===dn||d===er?F=i.DEPTH_COMPONENT24:d===tn?F=i.DEPTH_COMPONENT32F:d===ji&&(F=i.DEPTH_COMPONENT16),F}function y(E,d){return u(E)===!0||E.isFramebufferTexture&&E.minFilter!==Et&&E.minFilter!==Ct?Math.log2(Math.max(d.width,d.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?d.mipmaps.length:1}function R(E){const d=E.target;d.removeEventListener("dispose",R),S(d),d.isVideoTexture&&p.delete(d),d.isHTMLTexture&&f.delete(d)}function g(E){const d=E.target;d.removeEventListener("dispose",g),P(d)}function S(E){const d=n.get(E);if(d.__webglInit===void 0)return;const F=E.source,H=_.get(F);if(H){const q=H[d.__cacheKey];q.usedTimes--,q.usedTimes===0&&L(E),Object.keys(H).length===0&&_.delete(F)}n.remove(E)}function L(E){const d=n.get(E);i.deleteTexture(d.__webglTexture);const F=E.source,H=_.get(F);delete H[d.__cacheKey],a.memory.textures--}function P(E){const d=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(d.__webglFramebuffer[H]))for(let q=0;q<d.__webglFramebuffer[H].length;q++)i.deleteFramebuffer(d.__webglFramebuffer[H][q]);else i.deleteFramebuffer(d.__webglFramebuffer[H]);d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer[H])}else{if(Array.isArray(d.__webglFramebuffer))for(let H=0;H<d.__webglFramebuffer.length;H++)i.deleteFramebuffer(d.__webglFramebuffer[H]);else i.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&i.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let H=0;H<d.__webglColorRenderbuffer.length;H++)d.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(d.__webglColorRenderbuffer[H]);d.__webglDepthRenderbuffer&&i.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const F=E.textures;for(let H=0,q=F.length;H<q;H++){const ie=n.get(F[H]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(E)}let U=0;function k(){U=0}function V(){return U}function I(E){U=E}function O(){const E=U;return E>=r.maxTextures&&ze("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),U+=1,E}function N(E){const d=[];return d.push(E.wrapS),d.push(E.wrapT),d.push(E.wrapR||0),d.push(E.magFilter),d.push(E.minFilter),d.push(E.anisotropy),d.push(E.internalFormat),d.push(E.format),d.push(E.type),d.push(E.generateMipmaps),d.push(E.premultiplyAlpha),d.push(E.flipY),d.push(E.unpackAlignment),d.push(E.colorSpace),d.join()}function X(E,d){const F=n.get(E);if(E.isVideoTexture&&T(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const H=E.image;if(H===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{De(F,E,d);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+d)}function Q(E,d){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){De(F,E,d);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+d)}function se(E,d){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){De(F,E,d);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+d)}function te(E,d){const F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Ue(F,E,d);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+d)}const pe={[Qi]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Gs]:i.MIRRORED_REPEAT},Oe={[Et]:i.NEAREST,[wc]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[cn]:i.LINEAR_MIPMAP_LINEAR},Qe={[Pc]:i.NEVER,[Nc]:i.ALWAYS,[Lc]:i.LESS,[Da]:i.LEQUAL,[Dc]:i.EQUAL,[Ia]:i.GEQUAL,[Ic]:i.GREATER,[Uc]:i.NOTEQUAL};function Be(E,d){if(d.type===tn&&e.has("OES_texture_float_linear")===!1&&(d.magFilter===Ct||d.magFilter===jr||d.magFilter===lr||d.magFilter===cn||d.minFilter===Ct||d.minFilter===jr||d.minFilter===lr||d.minFilter===cn)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,pe[d.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,pe[d.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,pe[d.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Oe[d.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Oe[d.minFilter]),d.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Qe[d.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===Et||d.minFilter!==lr&&d.minFilter!==cn||d.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||n.get(d).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,r.getMaxAnisotropy())),n.get(d).__currentAnisotropy=d.anisotropy}}}function j(E,d){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,d.addEventListener("dispose",R));const H=d.source;let q=_.get(H);q===void 0&&(q={},_.set(H,q));const ie=N(d);if(ie!==E.__cacheKey){q[ie]===void 0&&(q[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),q[ie].usedTimes++;const ue=q[E.__cacheKey];ue!==void 0&&(q[E.__cacheKey].usedTimes--,ue.usedTimes===0&&L(d)),E.__cacheKey=ie,E.__webglTexture=q[ie].texture}return F}function ce(E,d,F){return Math.floor(Math.floor(E/F)/d)}function oe(E,d,F,H){const ie=E.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,d.width,d.height,F,H,d.data);else{ie.sort((xe,ae)=>xe.start-ae.start);let ue=0;for(let xe=1;xe<ie.length;xe++){const ae=ie[ue],re=ie[xe],fe=ae.start+ae.count,_e=ce(re.start,d.width,4),Fe=ce(ae.start,d.width,4);re.start<=fe+1&&_e===Fe&&ce(re.start+re.count-1,d.width,4)===_e?ae.count=Math.max(ae.count,re.start+re.count-ae.start):(++ue,ie[ue]=re)}ie.length=ue+1;const B=t.getParameter(i.UNPACK_ROW_LENGTH),W=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,d.width);for(let xe=0,ae=ie.length;xe<ae;xe++){const re=ie[xe],fe=Math.floor(re.start/4),_e=Math.ceil(re.count/4),Fe=fe%d.width,z=Math.floor(fe/d.width),ge=_e,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Fe,z,ge,ee,F,H,d.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,B),t.pixelStorei(i.UNPACK_SKIP_PIXELS,W),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function De(E,d,F){let H=i.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),d.isData3DTexture&&(H=i.TEXTURE_3D);const q=j(E,d),ie=d.source;t.bindTexture(H,E.__webglTexture,i.TEXTURE0+F);const ue=n.get(ie);if(ie.version!==ue.__version||q===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&d.image instanceof ImageBitmap)===!1){const ee=tt.getPrimaries(tt.workingColorSpace),me=d.colorSpace===Hn?null:tt.getPrimaries(d.colorSpace),ve=d.colorSpace===Hn||ee===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment);let W=m(d.image,!1,r.maxTextureSize);W=he(d,W);const le=s.convert(d.format,d.colorSpace),xe=s.convert(d.type);let ae=x(d.internalFormat,le,xe,d.normalized,d.colorSpace,d.isVideoTexture);Be(H,d);let re;const fe=d.mipmaps,_e=d.isVideoTexture!==!0,Fe=ue.__version===void 0||q===!0,z=ie.dataReady,ge=y(d,W);if(d.isDepthTexture)ae=b(d.format===jn,d.type),Fe&&(_e?t.texStorage2D(i.TEXTURE_2D,1,ae,W.width,W.height):t.texImage2D(i.TEXTURE_2D,0,ae,W.width,W.height,0,le,xe,null));else if(d.isDataTexture)if(fe.length>0){_e&&Fe&&t.texStorage2D(i.TEXTURE_2D,ge,ae,fe[0].width,fe[0].height);for(let ee=0,me=fe.length;ee<me;ee++)re=fe[ee],_e?z&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,re.width,re.height,le,xe,re.data):t.texImage2D(i.TEXTURE_2D,ee,ae,re.width,re.height,0,le,xe,re.data);d.generateMipmaps=!1}else _e?(Fe&&t.texStorage2D(i.TEXTURE_2D,ge,ae,W.width,W.height),z&&oe(d,W,le,xe)):t.texImage2D(i.TEXTURE_2D,0,ae,W.width,W.height,0,le,xe,W.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){_e&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,ae,fe[0].width,fe[0].height,W.depth);for(let ee=0,me=fe.length;ee<me;ee++)if(re=fe[ee],d.format!==Ut)if(le!==null)if(_e){if(z)if(d.layerUpdates.size>0){const ve=Bo(re.width,re.height,d.format,d.type);for(const ne of d.layerUpdates){const we=re.data.subarray(ne*ve/re.data.BYTES_PER_ELEMENT,(ne+1)*ve/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ne,re.width,re.height,1,le,we)}d.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,W.depth,le,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,ae,re.width,re.height,W.depth,0,re.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,re.width,re.height,W.depth,le,xe,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,ae,re.width,re.height,W.depth,0,le,xe,re.data)}else{_e&&Fe&&t.texStorage2D(i.TEXTURE_2D,ge,ae,fe[0].width,fe[0].height);for(let ee=0,me=fe.length;ee<me;ee++)re=fe[ee],d.format!==Ut?le!==null?_e?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,ae,re.width,re.height,0,re.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?z&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,re.width,re.height,le,xe,re.data):t.texImage2D(i.TEXTURE_2D,ee,ae,re.width,re.height,0,le,xe,re.data)}else if(d.isDataArrayTexture)if(_e){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,ae,W.width,W.height,W.depth),z)if(d.layerUpdates.size>0){const ee=Bo(W.width,W.height,d.format,d.type);for(const me of d.layerUpdates){const ve=W.data.subarray(me*ee/W.data.BYTES_PER_ELEMENT,(me+1)*ee/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,W.width,W.height,1,le,xe,ve)}d.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,le,xe,W.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,W.width,W.height,W.depth,0,le,xe,W.data);else if(d.isData3DTexture)_e?(Fe&&t.texStorage3D(i.TEXTURE_3D,ge,ae,W.width,W.height,W.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,le,xe,W.data)):t.texImage3D(i.TEXTURE_3D,0,ae,W.width,W.height,W.depth,0,le,xe,W.data);else if(d.isFramebufferTexture){if(Fe)if(_e)t.texStorage2D(i.TEXTURE_2D,ge,ae,W.width,W.height);else{let ee=W.width,me=W.height;for(let ve=0;ve<ge;ve++)t.texImage2D(i.TEXTURE_2D,ve,ae,ee,me,0,le,xe,null),ee>>=1,me>>=1}}else if(d.isHTMLTexture){if("texElementImage2D"in i){const ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),W.parentNode!==ee){ee.appendChild(W),f.add(d),ee.onpaint=me=>{const ve=me.changedElements;for(const ne of f)ve.includes(ne.image)&&(ne.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,W);else{const ve=i.RGBA,ne=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,ne,we,W)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(_e&&Fe){const ee=de(fe[0]);t.texStorage2D(i.TEXTURE_2D,ge,ae,ee.width,ee.height)}for(let ee=0,me=fe.length;ee<me;ee++)re=fe[ee],_e?z&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le,xe,re):t.texImage2D(i.TEXTURE_2D,ee,ae,le,xe,re);d.generateMipmaps=!1}else if(_e){if(Fe){const ee=de(W);t.texStorage2D(i.TEXTURE_2D,ge,ae,ee.width,ee.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,xe,W)}else t.texImage2D(i.TEXTURE_2D,0,ae,le,xe,W);u(d)&&A(H),ue.__version=ie.version,d.onUpdate&&d.onUpdate(d)}E.__version=d.version}function Ue(E,d,F){if(d.image.length!==6)return;const H=j(E,d),q=d.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const ie=n.get(q);if(q.version!==ie.__version||H===!0){t.activeTexture(i.TEXTURE0+F);const ue=tt.getPrimaries(tt.workingColorSpace),B=d.colorSpace===Hn?null:tt.getPrimaries(d.colorSpace),W=d.colorSpace===Hn||ue===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);const le=d.isCompressedTexture||d.image[0].isCompressedTexture,xe=d.image[0]&&d.image[0].isDataTexture,ae=[];for(let ne=0;ne<6;ne++)!le&&!xe?ae[ne]=m(d.image[ne],!0,r.maxCubemapSize):ae[ne]=xe?d.image[ne].image:d.image[ne],ae[ne]=he(d,ae[ne]);const re=ae[0],fe=s.convert(d.format,d.colorSpace),_e=s.convert(d.type),Fe=x(d.internalFormat,fe,_e,d.normalized,d.colorSpace),z=d.isVideoTexture!==!0,ge=ie.__version===void 0||H===!0,ee=q.dataReady;let me=y(d,re);Be(i.TEXTURE_CUBE_MAP,d);let ve;if(le){z&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Fe,re.width,re.height);for(let ne=0;ne<6;ne++){ve=ae[ne].mipmaps;for(let we=0;we<ve.length;we++){const Ae=ve[we];d.format!==Ut?fe!==null?z?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Ae.width,Ae.height,fe,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Fe,Ae.width,Ae.height,0,Ae.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Ae.width,Ae.height,fe,_e,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Fe,Ae.width,Ae.height,0,fe,_e,Ae.data)}}}else{if(ve=d.mipmaps,z&&ge){ve.length>0&&me++;const ne=de(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Fe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(xe){z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ae[ne].width,ae[ne].height,fe,_e,ae[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,ae[ne].width,ae[ne].height,0,fe,_e,ae[ne].data);for(let we=0;we<ve.length;we++){const _t=ve[we].image[ne].image;z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,_t.width,_t.height,fe,_e,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Fe,_t.width,_t.height,0,fe,_e,_t.data)}}else{z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,fe,_e,ae[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,fe,_e,ae[ne]);for(let we=0;we<ve.length;we++){const Ae=ve[we];z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,fe,_e,Ae.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Fe,fe,_e,Ae.image[ne])}}}u(d)&&A(i.TEXTURE_CUBE_MAP),ie.__version=q.version,d.onUpdate&&d.onUpdate(d)}E.__version=d.version}function Re(E,d,F,H,q,ie){const ue=s.convert(F.format,F.colorSpace),B=s.convert(F.type),W=x(F.internalFormat,ue,B,F.normalized,F.colorSpace),le=n.get(d),xe=n.get(F);if(xe.__renderTarget=d,!le.__hasExternalTextures){const ae=Math.max(1,d.width>>ie),re=Math.max(1,d.height>>ie);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ie,W,ae,re,d.depth,0,ue,B,null):t.texImage2D(q,ie,W,ae,re,0,ue,B,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),D(d)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,q,xe.__webglTexture,0,it(d)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,q,xe.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,d,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),d.depthBuffer){const H=d.depthTexture,q=H&&H.isDepthTexture?H.type:null,ie=b(d.stencilBuffer,q),ue=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;D(d)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(d),ie,d.width,d.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(d),ie,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,ie,d.width,d.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,E)}else{const H=d.textures;for(let q=0;q<H.length;q++){const ie=H[q],ue=s.convert(ie.format,ie.colorSpace),B=s.convert(ie.type),W=x(ie.internalFormat,ue,B,ie.normalized,ie.colorSpace);D(d)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(d),W,d.width,d.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(d),W,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,W,d.width,d.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(E,d,F){const H=d.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(d.depthTexture);if(q.__renderTarget=d,(!q.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,d.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Be(i.TEXTURE_CUBE_MAP,d.depthTexture);const le=s.convert(d.depthTexture.format),xe=s.convert(d.depthTexture.type);let ae;d.depthTexture.format===Cn?ae=i.DEPTH_COMPONENT24:d.depthTexture.format===jn&&(ae=i.DEPTH24_STENCIL8);for(let re=0;re<6;re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ae,d.width,d.height,0,le,xe,null)}}else X(d.depthTexture,0);const ie=q.__webglTexture,ue=it(d),B=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,W=d.depthTexture.format===jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(d.depthTexture.format===Cn)D(d)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,B,ie,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,W,B,ie,0);else if(d.depthTexture.format===jn)D(d)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,B,ie,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,W,B,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(E){const d=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),H){const q=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),d.__depthDisposeCallback=q}d.__boundDepthTexture=H}if(E.depthTexture&&!d.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)Ve(d.__webglFramebuffer[H],E,H);else{const H=E.texture.mipmaps;H&&H.length>0?Ve(d.__webglFramebuffer[0],E,0):Ve(d.__webglFramebuffer,E,0)}else if(F){d.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[H]),d.__webglDepthbuffer[H]===void 0)d.__webglDepthbuffer[H]=i.createRenderbuffer(),at(d.__webglDepthbuffer[H],E,!1);else{const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=d.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}else{const H=E.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=i.createRenderbuffer(),at(d.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=d.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(E,d,F){const H=n.get(E);d!==void 0&&Re(H.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ke(E)}function Xe(E){const d=E.texture,F=n.get(E),H=n.get(d);E.addEventListener("dispose",g);const q=E.textures,ie=E.isWebGLCubeRenderTarget===!0,ue=q.length>1;if(ue||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=d.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let B=0;B<6;B++)if(d.mipmaps&&d.mipmaps.length>0){F.__webglFramebuffer[B]=[];for(let W=0;W<d.mipmaps.length;W++)F.__webglFramebuffer[B][W]=i.createFramebuffer()}else F.__webglFramebuffer[B]=i.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){F.__webglFramebuffer=[];for(let B=0;B<d.mipmaps.length;B++)F.__webglFramebuffer[B]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ue)for(let B=0,W=q.length;B<W;B++){const le=n.get(q[B]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&D(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let B=0;B<q.length;B++){const W=q[B];F.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[B]);const le=s.convert(W.format,W.colorSpace),xe=s.convert(W.type),ae=x(W.internalFormat,le,xe,W.normalized,W.colorSpace,E.isXRRenderTarget===!0),re=it(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ae,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,F.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),at(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Be(i.TEXTURE_CUBE_MAP,d);for(let B=0;B<6;B++)if(d.mipmaps&&d.mipmaps.length>0)for(let W=0;W<d.mipmaps.length;W++)Re(F.__webglFramebuffer[B][W],E,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,W);else Re(F.__webglFramebuffer[B],E,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);u(d)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let B=0,W=q.length;B<W;B++){const le=q[B],xe=n.get(le);let ae=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,xe.__webglTexture),Be(ae,le),Re(F.__webglFramebuffer,E,le,i.COLOR_ATTACHMENT0+B,ae,0),u(le)&&A(ae)}t.unbindTexture()}else{let B=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(B=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(B,H.__webglTexture),Be(B,d),d.mipmaps&&d.mipmaps.length>0)for(let W=0;W<d.mipmaps.length;W++)Re(F.__webglFramebuffer[W],E,d,i.COLOR_ATTACHMENT0,B,W);else Re(F.__webglFramebuffer,E,d,i.COLOR_ATTACHMENT0,B,0);u(d)&&A(B),t.unbindTexture()}E.depthBuffer&&ke(E)}function st(E){const d=E.textures;for(let F=0,H=d.length;F<H;F++){const q=d[F];if(u(q)){const ie=C(E),ue=n.get(q).__webglTexture;t.bindTexture(ie,ue),A(ie),t.unbindTexture()}}}const ft=[],mt=[];function ct(E){if(E.samples>0){if(D(E)===!1){const d=E.textures,F=E.width,H=E.height;let q=i.COLOR_BUFFER_BIT;const ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(E),B=d.length>1;if(B)for(let le=0;le<d.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const W=E.texture.mipmaps;W&&W.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<d.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const xe=n.get(d[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,q,i.NEAREST),l===!0&&(ft.length=0,mt.length=0,ft.push(i.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ft.push(ie),mt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let le=0;le<d.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const xe=n.get(d[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const d=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[d])}}}function it(E){return Math.min(r.maxSamples,E.samples)}function D(E){const d=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function T(E){const d=a.render.frame;p.get(E)!==d&&(p.set(E,d),E.update())}function he(E,d){const F=E.colorSpace,H=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Hr&&F!==Hn&&(tt.getTransfer(F)===lt?(H!==Ut||q!==Wt)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",F)),d}function de(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.getTextureUnits=V,this.setTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=se,this.setTextureCube=te,this.rebindTextures=Ye,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=D,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cm(i,e){function t(n,r=Hn){let s;const a=tt.getTransfer(r);if(n===Wt)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xl)return i.BYTE;if(n===vl)return i.SHORT;if(n===ji)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===yl)return i.ALPHA;if(n===El)return i.RGB;if(n===Ut)return i.RGBA;if(n===Cn)return i.DEPTH_COMPONENT;if(n===jn)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===ti)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===Ir||n===Ur||n===Nr||n===Fr)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ir)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ir)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vs||n===Ws||n===Xs||n===qs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ws)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ys||n===$s||n===Ks||n===Zs||n===Js||n===Br||n===Qs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ys||n===$s)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ks)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zs)return s.COMPRESSED_R11_EAC;if(n===Js)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Br)return s.COMPRESSED_RG11_EAC;if(n===Qs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===js||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca||n===ua||n===fa||n===ha)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===js)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ta)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===na)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ia)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oa)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===la)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ca)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ha)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===pa||n===ma)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===da)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ga||n===_a||n===zr||n===xa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ga)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ll(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:Pm,fragmentShader:Lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends ni{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,f=null,h=null,_=null,v=null;const w=typeof XRWebGLBinding<"u",m=new Dm,u={},A=t.getContextAttributes();let C=null,x=null;const b=[],y=[],R=new Ze;let g=null;const S=new Zt;S.viewport=new vt;const L=new Zt;L.viewport=new vt;const P=[S,L],U=new Gu;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ce=b[j];return ce===void 0&&(ce=new as,b[j]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(j){let ce=b[j];return ce===void 0&&(ce=new as,b[j]=ce),ce.getGripSpace()},this.getHand=function(j){let ce=b[j];return ce===void 0&&(ce=new as,b[j]=ce),ce.getHandSpace()};function I(j){const ce=y.indexOf(j.inputSource);if(ce===-1)return;const oe=b[ce];oe!==void 0&&(oe.update(j.inputSource,j.frame,c||a),oe.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",N);for(let j=0;j<b.length;j++){const ce=y[j];ce!==null&&(y[j]=null,b[j].disconnect(ce))}k=null,V=null,m.reset();for(const j in u)delete u[j];e.setRenderTarget(C),_=null,h=null,f=null,r=null,x=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",O),r.addEventListener("inputsourceschange",N),A.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,De=null,Ue=null;A.depth&&(Ue=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=A.stencil?jn:Cn,De=A.stencil?er:dn);const Re={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new hn(h.textureWidth,h.textureHeight,{format:Ut,type:Wt,depthTexture:new Di(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),x=new hn(_.framebufferWidth,_.framebufferHeight,{format:Ut,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(j){for(let ce=0;ce<j.removed.length;ce++){const oe=j.removed[ce],De=y.indexOf(oe);De>=0&&(y[De]=null,b[De].disconnect(oe))}for(let ce=0;ce<j.added.length;ce++){const oe=j.added[ce];let De=y.indexOf(oe);if(De===-1){for(let Re=0;Re<b.length;Re++)if(Re>=y.length){y.push(oe),De=Re;break}else if(y[Re]===null){y[Re]=oe,De=Re;break}if(De===-1)break}const Ue=b[De];Ue&&Ue.connect(oe)}}const X=new $,Q=new $;function se(j,ce,oe){X.setFromMatrixPosition(ce.matrixWorld),Q.setFromMatrixPosition(oe.matrixWorld);const De=X.distanceTo(Q),Ue=ce.projectionMatrix.elements,Re=oe.projectionMatrix.elements,at=Ue[14]/(Ue[10]-1),Ve=Ue[14]/(Ue[10]+1),ke=(Ue[9]+1)/Ue[5],Ye=(Ue[9]-1)/Ue[5],Xe=(Ue[8]-1)/Ue[0],st=(Re[8]+1)/Re[0],ft=at*Xe,mt=at*st,ct=De/(-Xe+st),it=ct*-Xe;if(ce.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(it),j.translateZ(ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ue[10]===-1)j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const D=at+ct,T=Ve+ct,he=ft-it,de=mt+(De-it),E=ke*Ve/T*D,d=Ye*Ve/T*D;j.projectionMatrix.makePerspective(he,de,E,d,D,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function te(j,ce){ce===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ce.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ce=j.near,oe=j.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),U.near=L.near=S.near=ce,U.far=L.far=S.far=oe,(k!==U.near||V!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,V=U.far),U.layers.mask=j.layers.mask|6,S.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const De=j.parent,Ue=U.cameras;te(U,De);for(let Re=0;Re<Ue.length;Re++)te(Ue[Re],De);Ue.length===2?se(U,S,L):U.projectionMatrix.copy(S.projectionMatrix),pe(j,U,De)};function pe(j,ce,oe){oe===null?j.matrix.copy(ce.matrixWorld):(j.matrix.copy(oe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ce.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ir*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&_===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(j){return u[j]};let Oe=null;function Qe(j,ce){if(p=ce.getViewerPose(c||a),v=ce,p!==null){const oe=p.views;_!==null&&(e.setRenderTargetFramebuffer(x,_.framebuffer),e.setRenderTarget(x));let De=!1;oe.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let Ve=0;Ve<oe.length;Ve++){const ke=oe[Ve];let Ye=null;if(_!==null)Ye=_.getViewport(ke);else{const st=f.getViewSubImage(h,ke);Ye=st.viewport,Ve===0&&(e.setRenderTargetTextures(x,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(x))}let Xe=P[Ve];Xe===void 0&&(Xe=new Zt,Xe.layers.enable(Ve),Xe.viewport=new vt,P[Ve]=Xe),Xe.matrix.fromArray(ke.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ke.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ve===0&&(U.matrix.copy(Xe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(Xe)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){f=n.getBinding();const Ve=f.getDepthInformation(oe[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,r.renderState)}if(Ue&&Ue.includes("camera-access")&&w){e.state.unbindTexture(),f=n.getBinding();for(let Ve=0;Ve<oe.length;Ve++){const ke=oe[Ve].camera;if(ke){let Ye=u[ke];Ye||(Ye=new Ll,u[ke]=Ye);const Xe=f.getCameraImage(ke);Ye.sourceTexture=Xe}}}}for(let oe=0;oe<b.length;oe++){const De=y[oe],Ue=b[oe];De!==null&&Ue!==void 0&&Ue.update(De,ce,c||a)}Oe&&Oe(j,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Be=new Fl;Be.setAnimationLoop(Qe),this.setAnimationLoop=function(j){Oe=j},this.dispose=function(){}}}const Um=new pt,Vl=new We;Vl.set(-1,0,0,0,1,0,0,0,1);function Nm(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Dl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,A,C,x){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(m,u):u.isMeshLambertMaterial?(s(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),p(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&_(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),w(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,A,C):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Bt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Bt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const A=e.get(u),C=A.envMap,x=A.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Um.makeRotationFromEuler(x)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vl),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,A,C){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*A,m.scale.value=C*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function p(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function _(m,u,A){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Bt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function w(m,u){const A=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Fm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const y=b.program;n.uniformBlockBinding(x,y)}function c(x,b){let y=r[x.id];y===void 0&&(m(x),y=p(x),r[x.id]=y,x.addEventListener("dispose",A));const R=b.program;n.updateUBOMapping(x,R);const g=e.render.frame;s[x.id]!==g&&(h(x),s[x.id]=g)}function p(x){const b=f();x.__bindingPointIndex=b;const y=i.createBuffer(),R=x.__size,g=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=r[x.id],y=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let g=0,S=y.length;g<S;g++){const L=y[g];if(Array.isArray(L))for(let P=0,U=L.length;P<U;P++)_(L[P],g,P,R);else _(L,g,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(x,b,y,R){if(w(x,b,y,R)===!0){const g=x.__offset,S=x.value;if(Array.isArray(S)){let L=0;for(let P=0;P<S.length;P++){const U=S[P],k=u(U);v(U,x.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(S,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,x.__data)}}function v(x,b,y){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,y)}function w(x,b,y,R){const g=x.value,S=b+"_"+y;if(R[S]===void 0)return typeof g=="number"||typeof g=="boolean"?R[S]=g:ArrayBuffer.isView(g)?R[S]=g.slice():R[S]=g.clone(),!0;{const L=R[S];if(typeof g=="number"||typeof g=="boolean"){if(L!==g)return R[S]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(L.equals(g)===!1)return L.copy(g),!0}}return!1}function m(x){const b=x.uniforms;let y=0;const R=16;for(let S=0,L=b.length;S<L;S++){const P=Array.isArray(b[S])?b[S]:[b[S]];for(let U=0,k=P.length;U<k;U++){const V=P[U],I=Array.isArray(V.value)?V.value:[V.value];for(let O=0,N=I.length;O<N;O++){const X=I[O],Q=u(X),se=y%R,te=se%Q.boundary,pe=se+te;y+=te,pe!==0&&R-pe<Q.storage&&(y+=R-pe),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=Q.storage}}}const g=y%R;return g>0&&(y+=R-g),x.__size=y,x.__cache={},this}function u(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",x),b}function A(x){const b=x.target;b.removeEventListener("dispose",A);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function C(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:C}}const Om=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function Bm(){return an===null&&(an=new Jn(Om,16,16,ti,Rn),an.name="DFG_LUT",an.minFilter=Ct,an.magFilter=Ct,an.wrapS=En,an.wrapT=En,an.generateMipmaps=!1,an.needsUpdate=!0),an}class zm{constructor(e={}){const{canvas:t=Oc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:_=Wt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const w=_,m=new Set([La,Pa,Ca]),u=new Set([Wt,dn,ji,er,Aa,wa]),A=new Uint32Array(4),C=new Int32Array(4),x=new $;let b=null,y=null;const R=[],g=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1,U=null,k=null,V=null,I=null;this._outputColorSpace=Ot;let O=0,N=0,X=null,Q=-1,se=null;const te=new vt,pe=new vt;let Oe=null;const Qe=new Je(0);let Be=0,j=t.width,ce=t.height,oe=1,De=null,Ue=null;const Re=new vt(0,0,j,ce),at=new vt(0,0,j,ce);let Ve=!1;const ke=new Ba;let Ye=!1,Xe=!1;const st=new pt,ft=new $,mt=new vt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function D(){return X===null?oe:1}let T=n;function he(M,G){return t.getContext(M,G)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ea}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Ht,!1),T===null){const G="webgl2";if(T=he(G,M),T===null)throw he(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw nt("WebGLRenderer: "+M.message),M}let de,E,d,F,H,q,ie,ue,B,W,le,xe,ae,re,fe,_e,Fe,z,ge,ee,me,ve,ne;function we(){de=new Bd(T),de.init(),me=new Cm(T,de),E=new Pd(T,de,e,me),d=new wm(T,de),E.reversedDepthBuffer&&h&&d.buffers.depth.setReversed(!0),k=T.createFramebuffer(),V=T.createFramebuffer(),I=T.createFramebuffer(),F=new kd(T),H=new dm,q=new Rm(T,de,d,H,E,me,F),ie=new Od(L),ue=new Wu(T),ve=new Rd(T,ue),B=new zd(T,ue,F,ve),W=new Vd(T,B,ue,ve,F),z=new Gd(T,E,q),fe=new Ld(H),le=new hm(L,ie,de,E,ve,fe),xe=new Nm(L,H),ae=new mm,re=new Sm(de),Fe=new wd(L,ie,d,W,v,l),_e=new Am(L,W,E),ne=new Fm(T,F,E,d),ge=new Cd(T,de,F),ee=new Hd(T,de,F),F.programs=le.programs,L.capabilities=E,L.extensions=de,L.properties=H,L.renderLists=ae,L.shadowMap=_e,L.state=d,L.info=F}we(),w!==Wt&&(S=new Xd(w,t.width,t.height,o,r,s));const Ae=new Im(L,T);this.xr=Ae,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const M=de.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=de.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(M){M!==void 0&&(oe=M,this.setSize(j,ce,!1))},this.getSize=function(M){return M.set(j,ce)},this.setSize=function(M,G,J=!0){if(Ae.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,ce=G,t.width=Math.floor(M*oe),t.height=Math.floor(G*oe),J===!0&&(t.style.width=M+"px",t.style.height=G+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(j*oe,ce*oe).floor()},this.setDrawingBufferSize=function(M,G,J){j=M,ce=G,oe=J,t.width=Math.floor(M*J),t.height=Math.floor(G*J),this.setViewport(0,0,M,G)},this.setEffects=function(M){if(w===Wt){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let G=0;G<M.length;G++)if(M[G].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(Re)},this.setViewport=function(M,G,J,K){M.isVector4?Re.set(M.x,M.y,M.z,M.w):Re.set(M,G,J,K),d.viewport(te.copy(Re).multiplyScalar(oe).round())},this.getScissor=function(M){return M.copy(at)},this.setScissor=function(M,G,J,K){M.isVector4?at.set(M.x,M.y,M.z,M.w):at.set(M,G,J,K),d.scissor(pe.copy(at).multiplyScalar(oe).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(M){d.setScissorTest(Ve=M)},this.setOpaqueSort=function(M){De=M},this.setTransparentSort=function(M){Ue=M},this.getClearColor=function(M){return M.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(M=!0,G=!0,J=!0){let K=0;if(M){let Z=!1;if(X!==null){const ye=X.texture.format;Z=m.has(ye)}if(Z){const ye=X.texture.type,Te=u.has(ye),Se=Fe.getClearColor(),Ce=Fe.getClearAlpha(),Le=Se.r,qe=Se.g,Ke=Se.b;Te?(A[0]=Le,A[1]=qe,A[2]=Ke,A[3]=Ce,T.clearBufferuiv(T.COLOR,0,A)):(C[0]=Le,C[1]=qe,C[2]=Ke,C[3]=Ce,T.clearBufferiv(T.COLOR,0,C))}else K|=T.COLOR_BUFFER_BIT}G&&(K|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(K|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&T.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Ht,!1),Fe.dispose(),ae.dispose(),re.dispose(),H.dispose(),ie.dispose(),W.dispose(),ve.dispose(),ne.dispose(),le.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ai),Ae.removeEventListener("sessionend",oi),nn.stop()};function _t(M){M.preventDefault(),ao("WebGLRenderer: Context Lost."),P=!0}function ot(){ao("WebGLRenderer: Context Restored."),P=!1;const M=F.autoReset,G=_e.enabled,J=_e.autoUpdate,K=_e.needsUpdate,Z=_e.type;we(),F.autoReset=M,_e.enabled=G,_e.autoUpdate=J,_e.needsUpdate=K,_e.type=Z}function Ht(M){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function qt(M){const G=M.target;G.removeEventListener("dispose",qt),Yr(G)}function Yr(M){$r(M),H.remove(M)}function $r(M){const G=H.get(M).programs;G!==void 0&&(G.forEach(function(J){le.releaseProgram(J)}),M.isShaderMaterial&&le.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,J,K,Z,ye){G===null&&(G=ct);const Te=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Se=Xl(M,G,J,K,Z);d.setMaterial(K,Te);let Ce=J.index,Le=1;if(K.wireframe===!0){if(Ce=B.getWireframeAttribute(J),Ce===void 0)return;Le=2}const qe=J.drawRange,Ke=J.attributes.position;let Ie=qe.start*Le,ut=(qe.start+qe.count)*Le;ye!==null&&(Ie=Math.max(Ie,ye.start*Le),ut=Math.min(ut,(ye.start+ye.count)*Le)),Ce!==null?(Ie=Math.max(Ie,0),ut=Math.min(ut,Ce.count)):Ke!=null&&(Ie=Math.max(Ie,0),ut=Math.min(ut,Ke.count));const St=ut-Ie;if(St<0||St===1/0)return;ve.setup(Z,K,Se,J,Ce);let Mt,ht=ge;if(Ce!==null&&(Mt=ue.get(Ce),ht=ee,ht.setIndex(Mt)),Z.isMesh)K.wireframe===!0?(d.setLineWidth(K.wireframeLinewidth*D()),ht.setMode(T.LINES)):ht.setMode(T.TRIANGLES);else if(Z.isLine){let Lt=K.linewidth;Lt===void 0&&(Lt=1),d.setLineWidth(Lt*D()),Z.isLineSegments?ht.setMode(T.LINES):Z.isLineLoop?ht.setMode(T.LINE_LOOP):ht.setMode(T.LINE_STRIP)}else Z.isPoints?ht.setMode(T.POINTS):Z.isSprite&&ht.setMode(T.TRIANGLES);if(Z.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ht.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Lt=Z._multiDrawStarts,be=Z._multiDrawCounts,kt=Z._multiDrawCount,rt=Ce?ue.get(Ce).bytesPerElement:1,Yt=H.get(K).currentProgram.getUniforms();for(let rn=0;rn<kt;rn++)Yt.setValue(T,"_gl_DrawID",rn),ht.render(Lt[rn]/rt,be[rn])}else if(Z.isInstancedMesh)ht.renderInstances(Ie,St,Z.count);else if(J.isInstancedBufferGeometry){const Lt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,be=Math.min(J.instanceCount,Lt);ht.renderInstances(Ie,St,be)}else ht.render(Ie,St)};function si(M,G,J){M.transparent===!0&&M.side===ln&&M.forceSinglePass===!1?(M.side=Bt,M.needsUpdate=!0,gn(M,G,J),M.side=wn,M.needsUpdate=!0,gn(M,G,J),M.side=ln):gn(M,G,J)}this.compile=function(M,G,J=null){J===null&&(J=M),y=re.get(J),y.init(G),g.push(y),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),M!==J&&M.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))}),y.setupLights();const K=new Set;return M.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const ye=Z.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){const Se=ye[Te];si(Se,J,Z),K.add(Se)}else si(ye,J,Z),K.add(ye)}),y=g.pop(),K},this.compileAsync=function(M,G,J=null){const K=this.compile(M,G,J);return new Promise(Z=>{function ye(){if(K.forEach(function(Te){H.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){Z(M);return}setTimeout(ye,10)}de.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Vn=null;function Oi(M){Vn&&Vn(M)}function ai(){nn.stop()}function oi(){nn.start()}const nn=new Fl;nn.setAnimationLoop(Oi),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(M){Vn=M,Ae.setAnimationLoop(M),M===null?nn.stop():nn.start()},Ae.addEventListener("sessionstart",ai),Ae.addEventListener("sessionend",oi),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(M,G);const J=Ae.enabled===!0&&Ae.isPresenting===!0,K=S!==null&&(X===null||J)&&S.begin(L,X);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(G),G=Ae.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,G,X),y=re.get(M,g.length),y.init(G),y.state.textureUnits=q.getTextureUnits(),g.push(y),st.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ke.setFromProjectionMatrix(st,un,G.reversedDepth),Xe=this.localClippingEnabled,Ye=fe.init(this.clippingPlanes,Xe),b=ae.get(M,R.length),b.init(),R.push(b),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=L.xr.getDepthSensingMesh();Te!==null&&Y(Te,G,-1/0,L.sortObjects)}Y(M,G,0,L.sortObjects),b.finish(),L.sortObjects===!0&&b.sort(De,Ue,G.reversedDepth),it=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,it&&Fe.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&fe.beginShadows();const Z=y.state.shadowsArray;if(_e.render(Z,M,G),Ye===!0&&fe.endShadows(),(K&&S.hasRenderPass())===!1){const Te=b.opaque,Se=b.transmissive;if(y.setupLights(),G.isArrayCamera){const Ce=G.cameras;if(Se.length>0)for(let Le=0,qe=Ce.length;Le<qe;Le++){const Ke=Ce[Le];He(Te,Se,M,Ke)}it&&Fe.render(M);for(let Le=0,qe=Ce.length;Le<qe;Le++){const Ke=Ce[Le];Ee(b,M,Ke,Ke.viewport)}}else Se.length>0&&He(Te,Se,M,G),it&&Fe.render(M),Ee(b,M,G)}X!==null&&N===0&&(q.updateMultisampleRenderTarget(X),q.updateRenderTargetMipmap(X)),K&&S.end(L),M.isScene===!0&&M.onAfterRender(L,M,G),ve.resetDefaultState(),Q=-1,se=null,g.pop(),g.length>0?(y=g[g.length-1],q.setTextureUnits(y.state.textureUnits),Ye===!0&&fe.setGlobalState(L.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,U!==null&&U.renderEnd()};function Y(M,G,J,K){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLightProbeGrid)y.pushLightProbeGrid(M);else if(M.isLight)y.pushLight(M),M.castShadow&&y.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ke.intersectsSprite(M)){K&&mt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(st);const Te=W.update(M),Se=M.material;Se.visible&&b.push(M,Te,Se,J,mt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ke.intersectsObject(M))){const Te=W.update(M),Se=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),mt.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),mt.copy(Te.boundingSphere.center)),mt.applyMatrix4(M.matrixWorld).applyMatrix4(st)),Array.isArray(Se)){const Ce=Te.groups;for(let Le=0,qe=Ce.length;Le<qe;Le++){const Ke=Ce[Le],Ie=Se[Ke.materialIndex];Ie&&Ie.visible&&b.push(M,Te,Ie,J,mt.z,Ke)}}else Se.visible&&b.push(M,Te,Se,J,mt.z,null)}}const ye=M.children;for(let Te=0,Se=ye.length;Te<Se;Te++)Y(ye[Te],G,J,K)}function Ee(M,G,J,K){const{opaque:Z,transmissive:ye,transparent:Te}=M;y.setupLightsView(J),Ye===!0&&fe.setGlobalState(L.clippingPlanes,J),K&&d.viewport(te.copy(K)),Z.length>0&&Pe(Z,G,J),ye.length>0&&Pe(ye,G,J),Te.length>0&&Pe(Te,G,J),d.buffers.depth.setTest(!0),d.buffers.depth.setMask(!0),d.buffers.color.setMask(!0),d.setPolygonOffset(!1)}function He(M,G,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[K.id]===void 0){const Ie=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[K.id]=new hn(1,1,{generateMipmaps:!0,type:Ie?Rn:Wt,minFilter:cn,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const ye=y.state.transmissionRenderTarget[K.id],Te=K.viewport||te;ye.setSize(Te.z*L.transmissionResolutionScale,Te.w*L.transmissionResolutionScale);const Se=L.getRenderTarget(),Ce=L.getActiveCubeFace(),Le=L.getActiveMipmapLevel();L.setRenderTarget(ye),L.getClearColor(Qe),Be=L.getClearAlpha(),Be<1&&L.setClearColor(16777215,.5),L.clear(),it&&Fe.render(J);const qe=L.toneMapping;L.toneMapping=fn;const Ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),y.setupLightsView(K),Ye===!0&&fe.setGlobalState(L.clippingPlanes,K),Pe(M,J,K),q.updateMultisampleRenderTarget(ye),q.updateRenderTargetMipmap(ye),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ut=0,St=G.length;ut<St;ut++){const Mt=G[ut],{object:ht,geometry:Lt,material:be,group:kt}=Mt;if(be.side===ln&&ht.layers.test(K.layers)){const rt=be.side;be.side=Bt,be.needsUpdate=!0,je(ht,J,K,Lt,be,kt),be.side=rt,be.needsUpdate=!0,Ie=!0}}Ie===!0&&(q.updateMultisampleRenderTarget(ye),q.updateRenderTargetMipmap(ye))}L.setRenderTarget(Se,Ce,Le),L.setClearColor(Qe,Be),Ke!==void 0&&(K.viewport=Ke),L.toneMapping=qe}function Pe(M,G,J){const K=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,ye=M.length;Z<ye;Z++){const Te=M[Z],{object:Se,geometry:Ce,group:Le}=Te;let qe=Te.material;qe.allowOverride===!0&&K!==null&&(qe=K),Se.layers.test(J.layers)&&je(Se,G,J,Ce,qe,Le)}}function je(M,G,J,K,Z,ye){M.onBeforeRender(L,G,J,K,Z,ye),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Z.onBeforeRender(L,G,J,K,M,ye),Z.transparent===!0&&Z.side===ln&&Z.forceSinglePass===!1?(Z.side=Bt,Z.needsUpdate=!0,L.renderBufferDirect(J,G,K,Z,M,ye),Z.side=wn,Z.needsUpdate=!0,L.renderBufferDirect(J,G,K,Z,M,ye),Z.side=ln):L.renderBufferDirect(J,G,K,Z,M,ye),M.onAfterRender(L,G,J,K,Z,ye)}function gn(M,G,J){G.isScene!==!0&&(G=ct);const K=H.get(M),Z=y.state.lights,ye=y.state.shadowsArray,Te=Z.state.version,Se=le.getParameters(M,Z.state,ye,G,J,y.state.lightProbeGridArray),Ce=le.getProgramCacheKey(Se);let Le=K.programs;K.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;const qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;K.envMap=ie.get(M.envMap||K.environment,qe),K.envMapRotation=K.environment!==null&&M.envMap===null?G.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",qt),Le=new Map,K.programs=Le);let Ke=Le.get(Ce);if(Ke!==void 0){if(K.currentProgram===Ke&&K.lightsStateVersion===Te)return qa(M,Se),Ke}else Se.uniforms=le.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,J,Se),M.onBeforeCompile(Se,L),Ke=le.acquireProgram(Se,Ce),Le.set(Ce,Ke),K.uniforms=Se.uniforms;const Ie=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=fe.uniform),qa(M,Se),K.needsLights=Yl(M),K.lightsStateVersion=Te,K.needsLights&&(Ie.ambientLightColor.value=Z.state.ambient,Ie.lightProbe.value=Z.state.probe,Ie.directionalLights.value=Z.state.directional,Ie.directionalLightShadows.value=Z.state.directionalShadow,Ie.spotLights.value=Z.state.spot,Ie.spotLightShadows.value=Z.state.spotShadow,Ie.rectAreaLights.value=Z.state.rectArea,Ie.ltc_1.value=Z.state.rectAreaLTC1,Ie.ltc_2.value=Z.state.rectAreaLTC2,Ie.pointLights.value=Z.state.point,Ie.pointLightShadows.value=Z.state.pointShadow,Ie.hemisphereLights.value=Z.state.hemi,Ie.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ie.spotLightMatrix.value=Z.state.spotLightMatrix,Ie.spotLightMap.value=Z.state.spotLightMap,Ie.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.lightProbeGrid=y.state.lightProbeGridArray.length>0,K.currentProgram=Ke,K.uniformsList=null,Ke}function _n(M){if(M.uniformsList===null){const G=M.currentProgram.getUniforms();M.uniformsList=Or.seqWithValue(G.seq,M.uniforms)}return M.uniformsList}function qa(M,G){const J=H.get(M);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Wl(M,G){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let J=0,K=M.length;J<K;J++){const Z=M[J];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function Xl(M,G,J,K,Z){G.isScene!==!0&&(G=ct),q.resetTextureUnits();const ye=G.fog,Te=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,Se=X===null?L.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:tt.workingColorSpace,Ce=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Le=ie.get(K.envMap||Te,Ce),qe=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ke=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ie=!!J.morphAttributes.position,ut=!!J.morphAttributes.normal,St=!!J.morphAttributes.color;let Mt=fn;K.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Mt=L.toneMapping);const ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Lt=ht!==void 0?ht.length:0,be=H.get(K),kt=y.state.lights;if(Ye===!0&&(Xe===!0||M!==se)){const gt=M===se&&K.id===Q;fe.setState(K,M,gt)}let rt=!1;K.version===be.__version?(be.needsLights&&be.lightsStateVersion!==kt.state.version||be.outputColorSpace!==Se||Z.isBatchedMesh&&be.batching===!1||!Z.isBatchedMesh&&be.batching===!0||Z.isBatchedMesh&&be.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&be.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&be.instancing===!1||!Z.isInstancedMesh&&be.instancing===!0||Z.isSkinnedMesh&&be.skinning===!1||!Z.isSkinnedMesh&&be.skinning===!0||Z.isInstancedMesh&&be.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&be.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&be.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&be.instancingMorph===!1&&Z.morphTexture!==null||be.envMap!==Le||K.fog===!0&&be.fog!==ye||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==fe.numPlanes||be.numIntersection!==fe.numIntersection)||be.vertexAlphas!==qe||be.vertexTangents!==Ke||be.morphTargets!==Ie||be.morphNormals!==ut||be.morphColors!==St||be.toneMapping!==Mt||be.morphTargetsCount!==Lt||!!be.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,be.__version=K.version);let Yt=be.currentProgram;rt===!0&&(Yt=gn(K,G,Z),U&&K.isNodeMaterial&&U.onUpdateProgram(K,Yt,be));let rn=!1,Pn=!1,li=!1;const dt=Yt.getUniforms(),yt=be.uniforms;if(d.useProgram(Yt.program)&&(rn=!0,Pn=!0,li=!0),K.id!==Q&&(Q=K.id,Pn=!0),be.needsLights){const gt=Wl(y.state.lightProbeGridArray,Z);be.lightProbeGrid!==gt&&(be.lightProbeGrid=gt,Pn=!0)}if(rn||se!==M){d.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(T,"projectionMatrix",M.projectionMatrix),dt.setValue(T,"viewMatrix",M.matrixWorldInverse);const Dn=dt.map.cameraPosition;Dn!==void 0&&Dn.setValue(T,ft.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&dt.setValue(T,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&dt.setValue(T,"isOrthographic",M.isOrthographicCamera===!0),se!==M&&(se=M,Pn=!0,li=!0)}if(be.needsLights&&(kt.state.directionalShadowMap.length>0&&dt.setValue(T,"directionalShadowMap",kt.state.directionalShadowMap,q),kt.state.spotShadowMap.length>0&&dt.setValue(T,"spotShadowMap",kt.state.spotShadowMap,q),kt.state.pointShadowMap.length>0&&dt.setValue(T,"pointShadowMap",kt.state.pointShadowMap,q)),Z.isSkinnedMesh){dt.setOptional(T,Z,"bindMatrix"),dt.setOptional(T,Z,"bindMatrixInverse");const gt=Z.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),dt.setValue(T,"boneTexture",gt.boneTexture,q))}Z.isBatchedMesh&&(dt.setOptional(T,Z,"batchingTexture"),dt.setValue(T,"batchingTexture",Z._matricesTexture,q),dt.setOptional(T,Z,"batchingIdTexture"),dt.setValue(T,"batchingIdTexture",Z._indirectTexture,q),dt.setOptional(T,Z,"batchingColorTexture"),Z._colorsTexture!==null&&dt.setValue(T,"batchingColorTexture",Z._colorsTexture,q));const Ln=J.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&z.update(Z,J,Yt),(Pn||be.receiveShadow!==Z.receiveShadow)&&(be.receiveShadow=Z.receiveShadow,dt.setValue(T,"receiveShadow",Z.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(yt.envMapIntensity.value=G.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=Bm()),Pn){if(dt.setValue(T,"toneMappingExposure",L.toneMappingExposure),be.needsLights&&ql(yt,li),ye&&K.fog===!0&&xe.refreshFogUniforms(yt,ye),xe.refreshMaterialUniforms(yt,K,oe,ce,y.state.transmissionRenderTarget[M.id]),be.needsLights&&be.lightProbeGrid){const gt=be.lightProbeGrid;yt.probesSH.value=gt.texture,yt.probesMin.value.copy(gt.boundingBox.min),yt.probesMax.value.copy(gt.boundingBox.max),yt.probesResolution.value.copy(gt.resolution)}Or.upload(T,_n(be),yt,q)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Or.upload(T,_n(be),yt,q),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&dt.setValue(T,"center",Z.center),dt.setValue(T,"modelViewMatrix",Z.modelViewMatrix),dt.setValue(T,"normalMatrix",Z.normalMatrix),dt.setValue(T,"modelMatrix",Z.matrixWorld),K.uniformsGroups!==void 0){const gt=K.uniformsGroups;for(let Dn=0,ci=gt.length;Dn<ci;Dn++){const Ya=gt[Dn];ne.update(Ya,Yt),ne.bind(Ya,Yt)}}return Yt}function ql(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function Yl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(M,G,J){const K=H.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=G,H.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,G){const J=H.get(M);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(M,G=0,J=0){X=M,O=G,N=J;let K=null,Z=!1,ye=!1;if(M){const Se=H.get(M);if(Se.__useDefaultFramebuffer!==void 0){d.bindFramebuffer(T.FRAMEBUFFER,Se.__webglFramebuffer),te.copy(M.viewport),pe.copy(M.scissor),Oe=M.scissorTest,d.viewport(te),d.scissor(pe),d.setScissorTest(Oe),Q=-1;return}else if(Se.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(Se.__hasExternalTextures)q.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const qe=M.depthTexture;if(Se.__boundDepthTexture!==qe){if(qe!==null&&H.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ye=!0);const Le=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[G])?K=Le[G][J]:K=Le[G],Z=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?K=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?K=Le[J]:K=Le,te.copy(M.viewport),pe.copy(M.scissor),Oe=M.scissorTest}else te.copy(Re).multiplyScalar(oe).floor(),pe.copy(at).multiplyScalar(oe).floor(),Oe=Ve;if(J!==0&&(K=k),d.bindFramebuffer(T.FRAMEBUFFER,K)&&d.drawBuffers(M,K),d.viewport(te),d.scissor(pe),d.setScissorTest(Oe),Z){const Se=H.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se.__webglTexture,J)}else if(ye){const Se=G;for(let Ce=0;Ce<M.textures.length;Ce++){const Le=H.get(M.textures[Ce]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,J,Se)}}else if(M!==null&&J!==0){const Se=H.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Se.__webglTexture,J)}Q=-1},this.readRenderTargetPixels=function(M,G,J,K,Z,ye,Te,Se=0){if(!(M&&M.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){d.bindFramebuffer(T.FRAMEBUFFER,Ce);try{const Le=M.textures[Se],qe=Le.format,Ke=Le.type;if(M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Se),!E.textureFormatReadable(qe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(Ke)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-K&&J>=0&&J<=M.height-Z&&T.readPixels(G,J,K,Z,me.convert(qe),me.convert(Ke),ye)}finally{const Le=X!==null?H.get(X).__webglFramebuffer:null;d.bindFramebuffer(T.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,G,J,K,Z,ye,Te,Se=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(G>=0&&G<=M.width-K&&J>=0&&J<=M.height-Z){d.bindFramebuffer(T.FRAMEBUFFER,Ce);const Le=M.textures[Se],qe=Le.format,Ke=Le.type;if(M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Se),!E.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ie),T.bufferData(T.PIXEL_PACK_BUFFER,ye.byteLength,T.STREAM_READ),T.readPixels(G,J,K,Z,me.convert(qe),me.convert(Ke),0);const ut=X!==null?H.get(X).__webglFramebuffer:null;d.bindFramebuffer(T.FRAMEBUFFER,ut);const St=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Bc(T,St,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ie),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ye),T.deleteBuffer(Ie),T.deleteSync(St),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,G=null,J=0){const K=Math.pow(2,-J),Z=Math.floor(M.image.width*K),ye=Math.floor(M.image.height*K),Te=G!==null?G.x:0,Se=G!==null?G.y:0;q.setTexture2D(M,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,Te,Se,Z,ye),d.unbindTexture()},this.copyTextureToTexture=function(M,G,J=null,K=null,Z=0,ye=0){let Te,Se,Ce,Le,qe,Ke,Ie,ut,St;const Mt=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(J!==null)Te=J.max.x-J.min.x,Se=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,Le=J.min.x,qe=J.min.y,Ke=J.isBox3?J.min.z:0;else{const yt=Math.pow(2,-Z);Te=Math.floor(Mt.width*yt),Se=Math.floor(Mt.height*yt),M.isDataArrayTexture?Ce=Mt.depth:M.isData3DTexture?Ce=Math.floor(Mt.depth*yt):Ce=1,Le=0,qe=0,Ke=0}K!==null?(Ie=K.x,ut=K.y,St=K.z):(Ie=0,ut=0,St=0);const ht=me.convert(G.format),Lt=me.convert(G.type);let be;G.isData3DTexture?(q.setTexture3D(G,0),be=T.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(q.setTexture2DArray(G,0),be=T.TEXTURE_2D_ARRAY):(q.setTexture2D(G,0),be=T.TEXTURE_2D),d.activeTexture(T.TEXTURE0),d.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),d.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),d.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);const kt=d.getParameter(T.UNPACK_ROW_LENGTH),rt=d.getParameter(T.UNPACK_IMAGE_HEIGHT),Yt=d.getParameter(T.UNPACK_SKIP_PIXELS),rn=d.getParameter(T.UNPACK_SKIP_ROWS),Pn=d.getParameter(T.UNPACK_SKIP_IMAGES);d.pixelStorei(T.UNPACK_ROW_LENGTH,Mt.width),d.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Mt.height),d.pixelStorei(T.UNPACK_SKIP_PIXELS,Le),d.pixelStorei(T.UNPACK_SKIP_ROWS,qe),d.pixelStorei(T.UNPACK_SKIP_IMAGES,Ke);const li=M.isDataArrayTexture||M.isData3DTexture,dt=G.isDataArrayTexture||G.isData3DTexture;if(M.isDepthTexture){const yt=H.get(M),Ln=H.get(G),gt=H.get(yt.__renderTarget),Dn=H.get(Ln.__renderTarget);d.bindFramebuffer(T.READ_FRAMEBUFFER,gt.__webglFramebuffer),d.bindFramebuffer(T.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let ci=0;ci<Ce;ci++)li&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,H.get(M).__webglTexture,Z,Ke+ci),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,H.get(G).__webglTexture,ye,St+ci)),T.blitFramebuffer(Le,qe,Te,Se,Ie,ut,Te,Se,T.DEPTH_BUFFER_BIT,T.NEAREST);d.bindFramebuffer(T.READ_FRAMEBUFFER,null),d.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Z!==0||M.isRenderTargetTexture||H.has(M)){const yt=H.get(M),Ln=H.get(G);d.bindFramebuffer(T.READ_FRAMEBUFFER,V),d.bindFramebuffer(T.DRAW_FRAMEBUFFER,I);for(let gt=0;gt<Ce;gt++)li?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yt.__webglTexture,Z,Ke+gt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,yt.__webglTexture,Z),dt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ln.__webglTexture,ye,St+gt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ln.__webglTexture,ye),Z!==0?T.blitFramebuffer(Le,qe,Te,Se,Ie,ut,Te,Se,T.COLOR_BUFFER_BIT,T.NEAREST):dt?T.copyTexSubImage3D(be,ye,Ie,ut,St+gt,Le,qe,Te,Se):T.copyTexSubImage2D(be,ye,Ie,ut,Le,qe,Te,Se);d.bindFramebuffer(T.READ_FRAMEBUFFER,null),d.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else dt?M.isDataTexture||M.isData3DTexture?T.texSubImage3D(be,ye,Ie,ut,St,Te,Se,Ce,ht,Lt,Mt.data):G.isCompressedArrayTexture?T.compressedTexSubImage3D(be,ye,Ie,ut,St,Te,Se,Ce,ht,Mt.data):T.texSubImage3D(be,ye,Ie,ut,St,Te,Se,Ce,ht,Lt,Mt):M.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ye,Ie,ut,Te,Se,ht,Lt,Mt.data):M.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ye,Ie,ut,Mt.width,Mt.height,ht,Mt.data):T.texSubImage2D(T.TEXTURE_2D,ye,Ie,ut,Te,Se,ht,Lt,Mt);d.pixelStorei(T.UNPACK_ROW_LENGTH,kt),d.pixelStorei(T.UNPACK_IMAGE_HEIGHT,rt),d.pixelStorei(T.UNPACK_SKIP_PIXELS,Yt),d.pixelStorei(T.UNPACK_SKIP_ROWS,rn),d.pixelStorei(T.UNPACK_SKIP_IMAGES,Pn),ye===0&&G.generateMipmaps&&T.generateMipmap(be),d.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),d.unbindTexture()},this.resetState=function(){O=0,N=0,X=null,d.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const zn=1024,$n=512,Hm=90;class km{constructor(e,t,n,r,s){xt(this,"renderer");xt(this,"camera");xt(this,"scene");xt(this,"terrain");xt(this,"texture");xt(this,"W");xt(this,"H");xt(this,"maxElev",0);xt(this,"minElev",0);xt(this,"cam");xt(this,"fitDist");xt(this,"needsRender",!0);xt(this,"onCameraChange",null);xt(this,"world");xt(this,"hlUniforms",{hoverId:{value:new Ze(-10,-10)},selId:{value:new Ze(-10,-10)}});xt(this,"modeUniforms",{provDark:{value:.1},hierK:{value:1}});xt(this,"paperUniforms",{paperLand:{value:new Tt},paperSea:{value:new Tt},paperKL:{value:0},paperKS:{value:0}});xt(this,"washData");xt(this,"washTex");xt(this,"idW",0);xt(this,"idH",0);xt(this,"vertElev");this.world=e;const{W:a,H:o}=e;this.W=a,this.H=o;const l=zn+1,c=$n+1;this.vertElev=new Float32Array(l*c);{const{height:S,seaBase:L,land:P}=e,U=Math.max(1,Math.round(a/zn/2)),k=Math.max(1,Math.round(o/$n/2));for(let V=0;V<c;V++){const I=Math.round(V/$n*(o-1));for(let O=0;O<l;O++){const N=Math.round(O/zn*(a-1));let X=0,Q=0,se=0,te=0;for(let Oe=-k;Oe<=k;Oe++){const Qe=Math.min(o-1,Math.max(0,I+Oe));for(let Be=-U;Be<=U;Be++){const j=Math.min(a-1,Math.max(0,N+Be)),ce=Qe*a+j;X+=S[ce],Q++,P[ce]&&(se+=S[ce],te++)}}let pe=Math.max(0,X/Q-L);if(te>0){const Oe=Math.max(0,se/te-L);pe=Math.max(pe,Oe*Math.min(1,te/Q*2.4))}this.vertElev[V*l+O]=Math.pow(pe,.92)*Hm}}}this.renderer=new zm({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.id="gl",n.prepend(this.renderer.domElement),this.scene=new mu;const p=new Je("#878f83");this.scene.background=p,this.camera=new Zt(50,window.innerWidth/window.innerHeight,2,16e3),this.texture=new wo(t),this.texture.colorSpace=Ot,this.texture.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.texture.generateMipmaps=!0,this.texture.minFilter=cn,this.texture.magFilter=Ct;const f=new Ii(a,o,zn,$n),h=f.attributes.position;let _=0;for(let S=0;S<h.count;S++){const L=this.vertElev[S];L>_&&(_=L),h.setZ(S,L)}this.maxElev=_,f.rotateX(-Math.PI/2),f.computeVertexNormals();const v=(()=>{const P=document.createElement("canvas");P.width=256,P.height=256;const U=P.getContext("2d"),k=U.createImageData(256,256),V=[];for(let N=0;N<1024;N++){let X=N*374761393+668265263|0;X=Math.imul(X^X>>>13,1274126177),V.push(((X^X>>>16)>>>0)/4294967295)}const I=N=>N*N*(3-2*N);for(let N=0;N<256;N++)for(let X=0;X<256;X++){const Q=X/256*32,se=N/256*32,te=Q|0,pe=se|0,Oe=I(Q-te),Qe=I(se-pe),Be=(te+1)%32,j=(pe+1)%32,ce=V[pe*32+te],oe=V[pe*32+Be],De=V[j*32+te],Ue=V[j*32+Be];let Re=ce+(oe-ce)*Oe+(De-ce)*Qe+(ce-oe-De+Ue)*Oe*Qe;const at=X/256*32*4,Ve=N/256*32*4,ke=at|0,Ye=Ve|0,Xe=I(at-ke),st=I(Ve-Ye),ft=(ke+1)%128,mt=(Ye+1)%128,ct=(d,F)=>V[d%32*32+F%32],it=ct(Ye,ke),D=ct(Ye,ft),T=ct(mt,ke),he=ct(mt,ft);Re=Re*.65+(it+(D-it)*Xe+(T-it)*st+(it-D-T+he)*Xe*st)*.35;const de=(N*256+X)*4,E=Re*255|0;k.data[de]=E,k.data[de+1]=E,k.data[de+2]=E,k.data[de+3]=255}U.putImageData(k,0,0);const O=new wo(P);return O.wrapS=O.wrapT=Qi,O.minFilter=cn,O.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),O})();let w;if(r&&this.renderer.capabilities.maxTextureSize>=r.width)w=new Tt(r),this.idW=r.width,this.idH=r.height;else{const S=new Uint8Array(a*o*4);for(let L=0;L<o;L++)for(let P=0;P<a;P++){const U=e.rawGrid[L*a+P],k=((o-1-L)*a+P)*4;S[k]=U&255,S[k+1]=U>>8&255,S[k+3]=255}w=new Jn(S,a,o,Ut),this.idW=a,this.idH=o}w.minFilter=Et,w.magFilter=Et,w.generateMipmaps=!1,w.needsUpdate=!0,this.washData=new Uint8Array(256*256*4),this.washTex=new Jn(this.washData,256,256,Ut),this.washTex.minFilter=this.washTex.magFilter=Et;const m=new Uint8Array(256*256*4),u=new Uint8Array(256*256*4);{const{rawCounty:S,rawLand:L,cDuchy:P,dKing:U,kEmp:k}=e;for(let V=0;V<65536;V++){const I=S[V],O=I>=0?P[I]:-1,N=O>=0?U[O]:-1,X=N>=0?k[N]:-1,Q=I>=0?I:65535,se=O>=0?O:65535,te=V*4;m[te]=Q&255,m[te+1]=Q>>8,m[te+2]=se&255,m[te+3]=se>>8,u[te]=N>=0?N:255,u[te+1]=X>=0?X:255,u[te+2]=L[V]?255:0,u[te+3]=255}}const A=new Jn(m,256,256,Ut),C=new Jn(u,256,256,Ut);for(const S of[A,C])S.minFilter=S.magFilter=Et,S.needsUpdate=!0;const x=new Uint8Array(a*o*4);{const{shade:S,land:L,coastD:P}=e;for(let U=0;U<o;U++)for(let k=0;k<a;k++){const V=U*a+k,I=((o-1-U)*a+k)*4;x[I]=Math.max(0,Math.min(255,(S[V]-.42)/.88*255))|0,x[I+1]=s?s[V]:0,x[I+2]=L[V]?24+Math.min(12,P[V])*18:0,x[I+3]=255}}const b=new Jn(x,a,o,Ut);b.minFilter=b.magFilter=Ct,b.generateMipmaps=!1,b.needsUpdate=!0;const y=new Gr({map:this.texture});y.onBeforeCompile=S=>{S.uniforms.detailMap={value:v},S.uniforms.provMap={value:w},S.uniforms.washMap={value:this.washTex},S.uniforms.tierMapA={value:A},S.uniforms.tierMapB={value:C},S.uniforms.shadeMap={value:b},S.uniforms.provTexel={value:new Ze(1/this.idW,1/this.idH)},S.uniforms.provDark=this.modeUniforms.provDark,S.uniforms.hierK=this.modeUniforms.hierK,S.uniforms.hoverId=this.hlUniforms.hoverId,S.uniforms.selId=this.hlUniforms.selId,S.uniforms.paperLand=this.paperUniforms.paperLand,S.uniforms.paperSea=this.paperUniforms.paperSea,S.uniforms.paperKL=this.paperUniforms.paperKL,S.uniforms.paperKS=this.paperUniforms.paperKS,S.fragmentShader=S.fragmentShader.replace("void main() {",`
      uniform sampler2D detailMap;
      uniform sampler2D provMap;
      uniform sampler2D washMap;
      uniform sampler2D tierMapA;
      uniform sampler2D tierMapB;
      uniform sampler2D shadeMap;
      uniform vec2 provTexel;
      uniform float provDark;
      uniform float hierK;
      uniform vec2 hoverId;
      uniform vec2 selId;
      uniform sampler2D paperLand;
      uniform sampler2D paperSea;
      uniform float paperKL;
      uniform float paperKS;
      float idAt( vec2 uv ) {
        vec2 t = texture2D( provMap, uv ).rg;
        return floor( t.x * 255.0 + 0.5 ) + floor( t.y * 255.0 + 0.5 ) * 256.0;
      }
      vec2 lutUV( float id ) {
        return vec2( ( mod( id, 256.0 ) + 0.5 ) / 256.0, ( floor( id / 256.0 ) + 0.5 ) / 256.0 );
      }
      float u16( vec2 c ) { return floor( c.x * 255.0 + 0.5 ) + floor( c.y * 255.0 + 0.5 ) * 256.0; }
      vec4 landWashAt( vec2 uv ) {
        // wash colour of the province at uv, alpha 0 when it's water
        float nid = idAt( uv );
        vec2 nl = lutUV( nid );
        if ( texture2D( tierMapB, nl ).b < 0.5 ) return vec4( 0.0 );
        return texture2D( washMap, nl );
      }
      float borderTier( float pid, vec4 tA, vec4 tB, float nid, float pd, float hk ) {
        vec2 nluv = lutUV( nid );
        vec4 nA = texture2D( tierMapA, nluv );
        vec4 nB = texture2D( tierMapB, nluv );
        if ( tB.b != nB.b ) return 0.30;                         // coast ink line
        if ( tB.b < 0.5 ) return 0.0;                            // open water
        float c0 = u16( tA.rg ), c1 = u16( nA.rg );
        // no realm borders into or through the impassable wastelands — the
        // colour wash fading out already marks the realm edge there
        if ( c0 == 65535.0 || c1 == 65535.0 ) return pd;
        float d = pd;
        if ( hk > 0.5 ) {
          if ( c1 != c0 ) d = max( d, 0.20 );
          if ( u16( nA.ba ) != u16( tA.ba ) ) d = max( d, 0.30 );
          if ( nB.r != tB.r ) d = max( d, 0.46 );
          if ( nB.g != tB.g ) d = max( d, 0.66 );
        }
        return d;
      }
      void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
      float dtl = texture2D( detailMap, vMapUv * 96.0 ).r;
      float dtl2 = texture2D( detailMap, vMapUv * 340.0 ).r;
      diffuseColor.rgb *= ( 0.90 + dtl * 0.13 + dtl2 * 0.07 );

      float pid = idAt( vMapUv );
      vec2 luv = lutUV( pid );
      vec4 wash = texture2D( washMap, luv );
      vec3 ss = texture2D( shadeMap, vMapUv ).rgb;
      float shd = 0.42 + ss.r * 0.88;
      vec4 tA = texture2D( tierMapA, luv );
      vec4 tB = texture2D( tierMapB, luv );

      // resolve the coastline at id-map resolution: the base texture only
      // knows land/sea at grid res, the province map knows it exactly
      float landF = smoothstep( 0.030, 0.085, ss.b );
      float provLand = step( 0.5, tB.b );
      float fillF = provLand * ( 1.0 - landF );          // land px painted as sea
      vec3 pl = texture2D( paperLand, vMapUv * vec2( 12.0, 6.0 ) ).rgb;
      vec3 parch = mix( vec3( 0.655, 0.615, 0.485 ), pl * 1.06, paperKL );
      diffuseColor.rgb = mix( diffuseColor.rgb, parch * shd, fillF * 0.9 );
      float cutF = ( 1.0 - provLand ) * landF;           // sea px painted as land
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.322, 0.392, 0.392 ), cutF * 0.85 );

      // sandy beach band along the shore (fades with distance to coast)
      float beach = smoothstep( 0.035, 0.085, ss.b ) * ( 1.0 - smoothstep( 0.09, 0.52, ss.b ) );
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.76, 0.70, 0.53 ) * shd,
        beach * 0.42 * provLand * ( 1.0 - ss.g ) );

      float washA = wash.a * ( 1.0 - ss.g * 0.85 ) * provLand;
      diffuseColor.rgb = mix( diffuseColor.rgb, wash.rgb * shd, washA );
      vec2 off = max( provTexel, fwidth( vMapUv ) * 0.75 );
      float bd = 0.0;
      float nid;
      nid = idAt( vMapUv + vec2( off.x, 0.0 ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      nid = idAt( vMapUv - vec2( off.x, 0.0 ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      nid = idAt( vMapUv + vec2( 0.0, off.y ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      nid = idAt( vMapUv - vec2( 0.0, off.y ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      // second ring widens only the realm-level borders, like the CPU dilate did
      if ( hierK > 0.5 && bd < 0.46 ) {
        vec2 off2 = off * 2.2;
        float bd2 = 0.0;
        nid = idAt( vMapUv + vec2( off2.x, 0.0 ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        nid = idAt( vMapUv - vec2( off2.x, 0.0 ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        nid = idAt( vMapUv + vec2( 0.0, off2.y ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        nid = idAt( vMapUv - vec2( 0.0, off2.y ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        if ( bd2 >= 0.46 ) bd = max( bd, bd2 * 0.72 );
      }
      if ( bd > 0.0 )
        diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.125, 0.098, 0.070 ), bd );

      // realm-coloured glow in the water hugging owned coasts (CK3-style);
      // radius is capped in texels so it stays a coastal rim at any zoom
      if ( provLand < 0.5 ) {
        vec2 r1 = min( off * 2.2, provTexel * 7.0 );
        vec2 r2 = min( off * 5.0, provTexel * 16.0 );
        vec4 rim = landWashAt( vMapUv + vec2( r1.x, 0.0 ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( r1.x, 0.0 ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv + vec2( 0.0, r1.y ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( 0.0, r1.y ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv + r1 );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - r1 );
        float rimK = 0.55;
        if ( rim.a == 0.0 ) {
          rimK = 0.30;
          rim = landWashAt( vMapUv + vec2( r2.x, 0.0 ) );
          if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( r2.x, 0.0 ) );
          if ( rim.a == 0.0 ) rim = landWashAt( vMapUv + vec2( 0.0, r2.y ) );
          if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( 0.0, r2.y ) );
        }
        if ( rim.a > 0.0 )
          diffuseColor.rgb = mix( diffuseColor.rgb, rim.rgb, rim.a * rimK );
      }

      if ( max( abs( mod( pid, 256.0 ) - hoverId.x ), abs( floor( pid / 256.0 ) - hoverId.y ) ) < 0.5 )
        diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0 ), 0.16 * provLand );
      if ( max( abs( mod( pid, 256.0 ) - selId.x ), abs( floor( pid / 256.0 ) - selId.y ) ) < 0.5 )
        diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0, 0.9, 0.58 ), 0.30 * provLand );

      // the game's flat-map paper: parchment grain over land (mottles the
      // political wash) and the muted sea sheet over open water
      float pgl = dot( pl, vec3( 0.3333 ) ) * 1.88;
      diffuseColor.rgb *= mix( 1.0, pgl, 0.30 * provLand * paperKL );
      vec3 ps = texture2D( paperSea, vMapUv * vec2( 12.0, 6.0 ) ).rgb;
      float pgs = dot( ps, vec3( 0.3333 ) ) * 3.03;
      float seaF = ( 1.0 - provLand ) * paperKS;
      diffuseColor.rgb *= mix( 1.0, pgs, seaF * 0.42 );
      diffuseColor.rgb = mix( diffuseColor.rgb, ps * 1.10, seaF * 0.15 );`)},this.terrain=new Xt(f,y),this.scene.add(this.terrain);const R=new Xt(new Ii(a*8,o*8),new Gr({color:new Je("#42504f")}));R.geometry.rotateX(-Math.PI/2),R.position.y=-1.2,this.scene.add(R);const g=o*1.15/(2*Math.tan(this.camera.fov*Math.PI/180/2));this.fitDist=Math.max(g,a/(2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.aspect)*1.06),this.scene.fog=new Oa(p,this.fitDist*.75,this.fitDist*2.1),this.cam={tx:e.landCX-a/2,tz:e.landCY-o/2,dist:this.fitDist*.72,pitch:es.degToRad(52),yaw:0},this.applyCamera(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.invalidate()})}elevAtGrid(e,t){const{W:n,H:r}=this.world,s=zn+1;let a=e/(n-1)*zn,o=t/(r-1)*$n;a<0&&(a=0),o<0&&(o=0),a>zn-.001&&(a=zn-.001),o>$n-.001&&(o=$n-.001);const l=a|0,c=o|0,p=a-l,f=o-c,h=c*s+l,_=this.vertElev[h],v=this.vertElev[h+1],w=this.vertElev[h+s],m=this.vertElev[h+s+1];return _+(v-_)*p+(w-_)*f+(_-v-w+m)*p*f}elevAtWorld(e,t){return this.elevAtGrid(e+this.W/2,t+this.H/2)}applyCamera(){const e=this.cam,t=this.elevAtWorld(e.tx,e.tz)*.5,n=Math.cos(e.pitch),r=Math.sin(e.pitch);this.camera.position.set(e.tx+Math.sin(e.yaw)*n*e.dist,t+r*e.dist,e.tz+Math.cos(e.yaw)*n*e.dist),this.camera.lookAt(e.tx,t,e.tz),this.invalidate(),this.onCameraChange&&this.onCameraChange()}clampCamera(){const e=this.cam;e.dist=Math.max(70,Math.min(this.fitDist*1.25,e.dist)),e.pitch=Math.max(es.degToRad(28),Math.min(es.degToRad(80),e.pitch)),e.yaw=Math.max(-1,Math.min(1,e.yaw));const t=this.W*.62,n=this.H*.72;e.tx=Math.max(-t,Math.min(t,e.tx)),e.tz=Math.max(-n,Math.min(n,e.tz))}invalidate(){this.needsRender=!0}setPaperTextures(e,t){const n=new Il,r=[[e,this.paperUniforms.paperLand,this.paperUniforms.paperKL],[t,this.paperUniforms.paperSea,this.paperUniforms.paperKS]];for(const[s,a,o]of r)n.load(s,l=>{l.wrapS=l.wrapT=Qi,l.minFilter=cn,l.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),a.value=l,o.value=1,this.invalidate()})}setHover(e){const t=this.hlUniforms.hoverId.value;e<0?t.set(-10,-10):t.set(e&255,e>>8&255),this.invalidate()}setSelected(e){const t=this.hlUniforms.selId.value;e<0?t.set(-10,-10):t.set(e&255,e>>8&255),this.invalidate()}setWash(e,t,n){this.washData.set(e),this.washTex.needsUpdate=!0,this.modeUniforms.provDark.value=t,this.modeUniforms.hierK.value=n?1:0,this.invalidate()}render(){this.needsRender&&(this.needsRender=!1,this.renderer.render(this.scene,this.camera))}ndc(e,t){return new Ze(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1)}pickPlane(e,t){const n=new No;n.setFromCamera(this.ndc(e,t),this.camera);const r=-n.ray.origin.y/n.ray.direction.y;return!isFinite(r)||r<=0?null:n.ray.origin.clone().addScaledVector(n.ray.direction,r)}pickGround(e,t){const n=new No;n.setFromCamera(this.ndc(e,t),this.camera);const r=n.ray.origin,s=n.ray.direction;if(s.y>=-1e-5)return null;const a=Math.max(0,(r.y-(this.maxElev+2))/-s.y),o=r.y/-s.y,l=320;let c=a,p=-1;for(let u=0;u<=l;u++){const A=a+(o+4-a)*u/l,C=r.x+s.x*A,x=r.y+s.y*A,b=r.z+s.z*A;if(x<=this.elevAtWorld(C,b)){p=A;break}c=A}if(p<0)return null;let f=c,h=p;for(let u=0;u<18;u++){const A=(f+h)/2,C=r.x+s.x*A,x=r.y+s.y*A,b=r.z+s.z*A;x<=this.elevAtWorld(C,b)?h=A:f=A}const _=r.x+s.x*h,v=r.z+s.z*h,w=_+this.W/2,m=v+this.H/2;return w<0||m<0||w>=this.W||m>=this.H?null:{gx:w,gy:m}}projectGrid(e,t,n=3){const r=new $(e-this.W/2,this.elevAtGrid(e,t)+n,t-this.H/2);return r.clone().sub(this.camera.position).dot(this.camera.getWorldDirection(new $))<=0?null:(r.project(this.camera),[(r.x*.5+.5)*window.innerWidth,(1-(r.y*.5+.5))*window.innerHeight])}}function Lr(i){const e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Gm(i,e,t){let n=2.6,r=5;return i.startsWith("rock")?(n=1.4,r=3.8):/^b\d+_/.test(i)&&(i.endsWith("castle")?(n=4.4,r=4):i.endsWith("temple")?(n=3.9,r=4.4):(n=3.2,r=5)),Math.min(n/Math.max(.001,e),r/Math.max(.001,t))}function ll(i){let e=0;for(const t of i.parts)e=Math.max(e,t.hi[0]-t.lo[0],t.hi[2]-t.lo[2]);return e}async function Vm(i,e){const t=await fetch(i+"map/objects/models.json");if(!t.ok)throw new Error("models.json HTTP "+t.status);const n=await t.json(),r=new $i,s=e.W,a=e.H,o=new Il,l=new Map,c=y=>{let R=l.get(y);return R||(R=o.load(i+"map/objects/"+y,()=>e.invalidate()),R.colorSpace=Ot,R.anisotropy=4,l.set(y,R)),R},p=new Ou(16773853,9076848,1.9),f=new Hu(16772812,2.1);f.position.set(-.55,1,-.7),r.add(p,f);const h=new Map,_=y=>{let R=h.get(y);if(R)return R;R=[];for(const g of n.models[y].parts){const S=new Uint16Array(Lr(g.v).buffer.slice(0)),L=new Uint16Array(Lr(g.u).buffer.slice(0)),P=Lr(g.x).buffer.slice(0),U=S.length/3,k=new Float32Array(S.length);for(let O=0;O<3;O++){const N=g.lo[O],X=g.hi[O]-g.lo[O];for(let Q=0;Q<U;Q++)k[Q*3+O]=N+S[Q*3+O]/65535*X}const V=new Float32Array(L.length);for(let O=0;O<L.length;O++)V[O]=L[O]/65535;const I=new mn;I.setAttribute("position",new zt(k,3)),I.setAttribute("uv",new zt(V,2)),I.setIndex(new zt(g.x32?new Uint32Array(P):new Uint16Array(P),1)),I.computeVertexNormals(),R.push(I)}return h.set(y,R),R},v=new Map,w=(y,R)=>{const g=y+(R?"|f":"");let S=v.get(g);return S||(S=new Lu({map:c(y),alphaTest:R?.45:.6,side:R?ln:wn}),v.set(g,S)),S},m=new pt,u=new ii,A=new $(0,1,0),C=new $,x=new $;for(const[y,R]of Object.entries(n.inst)){const g=n.models[y];if(!g)continue;const S=Lr(R.d),L=R.n,P=!/^b\d+_/.test(y)&&!y.startsWith("rock"),U=Gm(y,g.hgt,ll(g)),V=_(y).map((I,O)=>{const N=new Ao(I,w(g.parts[O].tex,P),L);return N.frustumCulled=!1,N});for(let I=0;I<L;I++){const O=I*6,N=S[O]|S[O+1]<<8,X=S[O+2]|S[O+3]<<8,Q=S[O+4]/255*Math.PI*2,se=(.25+S[O+5]/255*2.75)*U,te=e.elevAtGrid(N,X);u.setFromAxisAngle(A,Q),m.compose(C.set(N-s/2,te,X-a/2),u,x.set(se,se,se));for(const pe of V)pe.setMatrixAt(I,m)}for(const I of V)I.instanceMatrix.needsUpdate=!0,r.add(I)}const b=new Map;for(const y of n.spec)n.models[y.k]&&(b.get(y.k)??b.set(y.k,[]).get(y.k)).push(y);for(const[y,R]of b){const g=n.models[y],S=_(y),L=ll(g),P=4/Math.max(.001,g.hgt),U=Math.min(17/Math.max(.001,g.hgt),22/Math.max(.001,L)),k=S.map((V,I)=>{const O=new Ao(V,w(g.parts[I].tex,!1),R.length);return O.frustumCulled=!1,O});R.forEach((V,I)=>{const O=Math.max(e.elevAtGrid(V.x,V.y),.15),N=Math.min(Math.max(V.s*.5*1.6,P),Math.max(P,U));u.setFromAxisAngle(A,V.r),m.compose(C.set(V.x-s/2,O,V.y-a/2),u,x.set(N,N,N));for(const X of k)X.setMatrixAt(I,m)});for(const V of k)V.instanceMatrix.needsUpdate=!0,r.add(V)}return e.scene.add(r),e.invalidate(),r}function Wm(i){const{np:e,pArea:t,pCX:n,pCY:r,W:s,H:a}=i;function o(u,A,C){const x=new Float64Array(u),b=new Float64Array(u),y=new Float64Array(u),R=new Float64Array(u),g=new Float64Array(u),S=new Float64Array(u);for(let P=0;P<e;P++){const U=A[P];if(U<0)continue;const k=t[P],V=n[P],I=r[P];x[U]+=V*k,b[U]+=I*k,y[U]+=k,R[U]+=V*V*k,g[U]+=I*I*k,S[U]+=V*I*k}const L=[];for(let P=0;P<u;P++){if(y[P]<1)continue;const U=x[P]/y[P],k=b[P]/y[P],V=R[P]/y[P]-U*U,I=g[P]/y[P]-k*k,O=S[P]/y[P]-U*k,N=.5*Math.atan2(2*O,V-I),X=V+I,Q=V*I-O*O,se=Math.sqrt(Math.max(0,X*X/4-Q));L.push({x:U,y:k,angle:N,ext:Math.sqrt(Math.max(1,X/2+se)),name:C[P],area:y[P],idx:P})}return L}const l=o(i.nKing,i.kingOf,i.kingName),c=o(i.nEmp,i.empOf,i.empName),p=new Float64Array(i.nCounty),f=new Float64Array(i.nCounty),h=new Float64Array(i.nCounty);for(let u=0;u<e;u++){const A=i.countyOf[u];A<0||(p[A]+=n[u]*t[u],f[A]+=r[u]*t[u],h[A]+=t[u])}const _=(u,A)=>{for(const C of u){const x=A[C.idx];x>=0&&h[x]>0&&(C.capX=p[x]/h[x],C.capY=f[x]/h[x])}};_(l,i.kCapital),_(c,i.eCapital);const v=i.seaLabels.map(u=>({x:u.x,y:u.y,name:u.n,area:u.a,ext:Math.sqrt(u.a)*.9})),w=[],m=Math.max(40,s*a/e*.25);for(let u=0;u<e;u++)t[u]<m||w.push({x:n[u],y:r[u],name:i.provName[u],ext:Math.hypot(i.pMaxX[u]-i.pMinX[u],i.pMaxY[u]-i.pMinY[u])/2,area:t[u]});return{king:l,emp:c,prov:w,sea:v,straits:i.straits}}const Ls='"Iowan Old Style",Palatino,Georgia,serif',Ds=new Map;function Xm(i,e){let t=Ds.get(i);if(t!==void 0)return t&&t.complete&&t.naturalWidth?t:null;const n=new Image;return n.onload=()=>{e&&e()},n.onerror=()=>Ds.set(i,null),n.src=i,Ds.set(i,n),null}function qm(i,e,t,n,r){const s=window.innerWidth,a=window.innerHeight;i.clearRect(0,0,s,a),i.textAlign="center",i.textBaseline="middle";const o=t.cam.dist,l=o>t.fitDist*.55,c=o<680,p=[],f=[];document.querySelectorAll(".panel").forEach(u=>{if(u.classList.contains("hidden"))return;const A=getComputedStyle(u);if(A.display==="none"||A.visibility==="hidden")return;const C=u.getBoundingClientRect();C.width&&C.height&&f.push(C)});const h=44;function _(u,A,C,x){if(u-C<h||u+C>s-h||A-x<h||A+x>a-h)return!0;for(const b of f)if(u+C>b.left-6&&u-C<b.right+6&&A+x>b.top-6&&A-x<b.bottom+6)return!0;return!1}function v(u,A,C,x){if(_(u,A,C,x))return!1;for(const b of p)if(Math.abs(u-b.x)<C+b.hw&&Math.abs(A-b.y)<x+b.hh)return!1;return!0}function w(u){const A=t.projectGrid(u.x,u.y);if(!A)return null;const C=Math.cos(u.angle)*u.ext,x=Math.sin(u.angle)*u.ext,b=t.projectGrid(u.x-C,u.y-x),y=t.projectGrid(u.x+C,u.y+x);if(!b||!y)return null;let R=Math.atan2(y[1]-b[1],y[0]-b[0]);return R>Math.PI/2&&(R-=Math.PI),R<-Math.PI/2&&(R+=Math.PI),{sx:A[0],sy:A[1],screenExt:Math.hypot(y[0]-b[0],y[1]-b[1]),rot:R}}function m(u,A,C,x,b,y,R){const g=w(u);if(!g||g.sx<-320||g.sx>s+320||g.sy<-200||g.sy>a+200)return;i.font=`600 ${A}px ${Ls}`;const S=u.name.toUpperCase();let L=0;const P=[];for(const N of S){const X=i.measureText(N).width;P.push(X),L+=X}let U=S.length>1?(b-L)/(S.length-1):0;U=Math.max(A*.08,Math.min(U,A*.9));const k=L+U*(S.length-1),V=k*.5*.8+8,I=A*.62+5;if(!v(g.sx,g.sy,V,I))return;p.push({x:g.sx,y:g.sy,hw:V,hh:I}),i.save(),i.translate(g.sx,g.sy),i.rotate(g.rot),i.globalAlpha=y,i.lineJoin="round";let O=-k/2;for(let N=0;N<S.length;N++){const X=S[N],Q=P[N],se=O+Q/2;i.lineWidth=A*.2,i.strokeStyle=x,i.strokeText(X,se,0),i.fillStyle=C,i.fillText(X,se,0),O+=Q+U}if(i.restore(),R&&n){const N=Xm(`${n}${R}_${u.idx}.png`,r??null);if(N){const X=Math.max(20,Math.min(A*1.25,46));let Q=g.sx,se=g.sy-I-X-4;if(u.capX!==void 0&&u.capY!==void 0){const te=t.projectGrid(u.capX,u.capY,4);te&&(Q=te[0],se=te[1]-X)}i.save(),i.globalAlpha=y,i.shadowColor="rgba(0,0,0,0.55)",i.shadowBlur=6,i.shadowOffsetY=2,i.drawImage(N,Q-X/2,se,X,X),i.restore()}}}{i.save(),i.setLineDash([7,5]),i.lineWidth=1.6,i.strokeStyle="rgba(146, 44, 30, 0.75)";for(const u of e.straits){const A=t.projectGrid(u[0],u[1],1.5),C=t.projectGrid(u[2],u[3],1.5);if(!A||!C)continue;const x=Math.hypot(C[0]-A[0],C[1]-A[1]);x<7||x>620||Math.max(A[0],C[0])<0||Math.min(A[0],C[0])>s||Math.max(A[1],C[1])<0||Math.min(A[1],C[1])>a||(i.beginPath(),i.moveTo(A[0],A[1]),i.lineTo(C[0],C[1]),i.stroke())}i.restore()}if(l)for(const u of[...e.emp].sort((A,C)=>C.area-A.area)){const A=w(u);if(!A)continue;const C=Math.max(22,Math.min(A.screenExt*2*.15,56));m(u,C,"rgba(26,20,12,0.86)","rgba(238,228,198,0.4)",Math.min(A.screenExt*2*.9,s*.62),.9,"e")}{const u=l?.85:1;for(const A of[...e.king].sort((C,x)=>x.area-C.area)){const C=w(A);if(!C)continue;const x=C.screenExt*2;if(x<62)continue;let b=Math.max(13,Math.min(x*.18,40));b*.62>x*.95/Math.max(3,A.name.length)&&(b=Math.max(12,x*.95/(A.name.length*.62))),m(A,b,"rgba(26,20,12,0.94)","rgba(238,226,192,0.5)",Math.min(x*.86,s*.5),u,l?void 0:"k")}}{i.save(),i.textAlign="center",i.textBaseline="middle";for(const u of e.sea){const A=t.projectGrid(u.x,u.y,1);if(!A)continue;const[C,x]=A;if(C<-60||C>s+60||x<-40||x>a+40)continue;const b=t.projectGrid(u.x+u.ext,u.y,1),y=b?Math.abs(b[0]-C):0,R=Math.max(10,Math.min(y*.3,26));if(R<10)continue;i.font=`italic 600 ${R}px ${Ls}`;const g=i.measureText(u.name).width*.5+6,S=R*.6+3;v(C,x,g,S)&&(p.push({x:C,y:x,hw:g,hh:S}),i.globalAlpha=.78,i.lineWidth=R*.18,i.strokeStyle="rgba(26,34,34,0.5)",i.strokeText(u.name,C,x),i.fillStyle="rgba(205,221,218,0.92)",i.fillText(u.name,C,x))}i.globalAlpha=1,i.restore()}if(c){const u=Math.min(1,(680-o)/220);for(const A of[...e.prov].sort((C,x)=>x.area-C.area)){const C=t.projectGrid(A.x,A.y);if(!C)continue;const[x,b]=C;if(x<0||x>s||b<0||b>a)continue;const y=t.projectGrid(A.x+A.ext,A.y),R=y?Math.abs(y[0]-x):0,g=Math.max(9,Math.min(R*.32,16));if(g<9)continue;i.font=`600 ${g}px ${Ls}`;const S=i.measureText(A.name).width*.5+4,L=g*.6+3;v(x,b,S,L)&&(p.push({x,y:b,hw:S,hh:L}),i.globalAlpha=u,i.lineWidth=g*.28,i.strokeStyle="rgba(242,232,202,0.78)",i.strokeText(A.name,x,b),i.fillStyle="rgba(26,20,10,0.96)",i.fillText(A.name,x,b))}}i.globalAlpha=1}const Kt="/ck3/",Ne=i=>document.getElementById(i),cl=()=>new Promise(i=>requestAnimationFrame(()=>i())),Ym=[["political","Political"],["province","Provinces"],["terrain","Terrain"],["elevation","Elevation"],["culture","Culture"],["faith","Faith"],["development","Development"]];async function $m(){const i=Ne("loading"),e=async D=>{i.style.display="flex",i.textContent=D,await cl(),await cl()},t=new Promise(D=>{const T=new Image;T.onload=()=>D(T),T.onerror=()=>D(null),T.src=Kt+"map/prov8.png"});await e("Loading the map…");const n=await ec(1420,Kt);Ne("date").textContent=`${n.date} · Anno Aldermarki`,await e("Shading the relief…"),tc(n),await e("Baking the map…");const r=nc(n);n.cloud=null;const s=document.createElement("canvas");s.width=n.W,s.height=n.H;const a=s.getContext("2d",{willReadFrequently:!0}),o=a.createImageData(n.W,n.H);let l="political",c=!1;Ja(n,r,l,o),a.putImageData(o,0,0),await e("Raising the terrain…");const p=await t,f=new km(n,s,document.body,p,r.snow),h=f.renderer.domElement;f.setPaperTextures(Kt+"map/ui/paper_land.png",Kt+"map/ui/paper_sea.png");{const D=document.createElement("img");D.src=Kt+"map/ui/vignette.png",D.id="vig",D.alt="",document.body.appendChild(D)}const _=new Uint8Array(65536).fill(40);for(let D=0;D<n.np;D++)_[n.rawOf[D]]=n.devOf[D];const v=new Uint8Array(256*256*4);function w(D){v.fill(0);const{rawCounty:T,rawCult:he,rawFaith:de,rawLand:E,cDuchy:d,dKing:F,kEmp:H,kColor:q,cultCol:ie,faithCol:ue}=n,B=.16,W=(ae,re,fe)=>{const _e=re[0]*.3+re[1]*.59+re[2]*.11,Fe=ae*4;v[Fe]=re[0]+(_e-re[0])*B,v[Fe+1]=re[1]+(_e-re[1])*B,v[Fe+2]=re[2]+(_e-re[2])*B,v[Fe+3]=fe*255|0};if(D!=="terrain"&&D!=="elevation"){for(let ae=0;ae<65536;ae++)if(E[ae])if(D==="political"){const re=T[ae],fe=re>=0?d[re]:-1,_e=fe>=0?F[fe]:-1;_e>=0&&W(ae,q[_e],.52)}else if(D==="province"){const re=ae*2654435761>>>0;W(ae,[70+(re&159),70+(re>>8&159),70+(re>>16&159)],.7)}else if(D==="culture"){const re=he[ae];re>=0&&W(ae,ie[re],.5)}else if(D==="faith"){const re=de[ae];re>=0&&W(ae,ue[re],.5)}else D==="development"&&W(ae,ic(_[ae]),.56)}const le=D==="terrain"||D==="elevation";f.setWash(v,le?0:D==="province"?.42:.1,D==="political"||D==="culture"||D==="faith"||D==="development");const xe=D==="elevation";xe!==c&&(c=xe,Ja(n,r,D,o),a.putImageData(o,0,0),f.texture.needsUpdate=!0),f.invalidate()}w(l);let m=null;Vm(Kt,f).then(D=>{m=D;const T=Ne("objs");T&&(T.className="on")}).catch(D=>console.warn("map objects unavailable:",D));const u=Ne("labels"),A=u.getContext("2d"),C=Wm(n);let x=!0;const b=Math.min(2,window.devicePixelRatio||1),y=()=>{u.width=window.innerWidth*b,u.height=window.innerHeight*b,u.style.width=window.innerWidth+"px",u.style.height=window.innerHeight+"px",A.setTransform(b,0,0,b,0,0),x=!0};y(),window.addEventListener("resize",y),f.onCameraChange=()=>{x=!0};const R=["No Holding","Castle","City","Temple","Tribe"],g=(D,...T)=>{const he=D.map(de=>de+".png");for(const de of T){const E=n.artPools[de];E&&he.push(...E)}return he},S={castle:g(["holding_1","art_fortress"],"castle"),city:g(["art_city1","art_city2"],"city"),port:g(["art_port"],"port"),temple:g(["holding_3"],"temple"),tribal:g(["art_tribal"],"tribal"),terr:{[Ge.BEACH]:g(["terr_beach","art_coast"],"coast","port"),[Ge.PLAINS]:g(["terr_plains"],"plains"),[Ge.FARM]:g(["terr_farm","art_farm"],"farm"),[Ge.FOREST]:g(["terr_forest"],"forest","jungle"),[Ge.HILLS]:g(["terr_hills"],"mountain"),[Ge.DRY]:g(["terr_desert","art_desert","art_ruin","art_river"],"desert","ruin","river"),[Ge.WET]:g(["terr_wet","art_swamp","art_lakes"],"swamp"),[Ge.MTN]:g(["terr_mtn"],"mountain"),[Ge.SNOW]:g(["terr_mtn"],"snow","mountain")}};function L(D){const T=n.holdingOf[D],he=n.pTerr[D],de=n.countyOf[D],E=F=>F[D%F.length];if(de>=0){if(T===1)return E(S.castle);if(T===2)return he===Ge.BEACH?E(S.port):E(S.city);if(T===3)return E(S.temple);if(T===4)return E(S.tribal)}const d=S.terr[he];return d?E(d):"holding_0.png"}const P=D=>`<span class="swatch" style="background:rgb(${D[0]},${D[1]},${D[2]})"></span>`;let U=-1;function k(D){U=D,f.setSelected(D<0?-1:n.rawOf[D]);const T=Ne("sel");if(D<0){T.style.display="none";return}Ne("faith").classList.remove("open");const he=n.countyOf[D],de=n.duchyOf[D],E=n.kingOf[D],d=n.empOf[D],F=n.cultureOf[D],H=n.faithOf[D],q=n.holdingOf[D];Ne("selName").textContent=n.provName[D];let ie=he>=0?`${R[q]} in the County of ${n.countyName[he]}`:"Uncolonised wasteland";he>=0&&d>=0&&n.eCapital[d]===he?ie+=" · Imperial Capital":he>=0&&E>=0&&n.kCapital[E]===he&&(ie+=" · Royal Capital"),Ne("selSub").textContent=ie;const ue=[],B=(fe,_e)=>`<img class="coa" src="${Kt}map/ui/coa/${fe}_${_e}.png" alt="" onerror="this.remove()">`;de>=0&&ue.push(`<span class="chip" style="--cc:#8a7f66">${n.duchyName[de]}</span>`),E>=0&&ue.push(`<span class="chip flagged rlink" data-realm="k:${E}" title="About this realm">${B("k",E)}${n.kingName[E]}</span>`),d>=0&&ue.push(`<span class="chip flagged rlink" data-realm="e:${d}" title="About this realm">${B("e",d)}${n.empName[d]}</span>`),Ne("selChips").innerHTML=ue.join(""),Ne("selChips").querySelectorAll(".rlink").forEach(fe=>{fe.onclick=()=>{const[_e,Fe]=fe.dataset.realm.split(":");te(_e,+Fe)}});const W=fe=>!fe||/^wasteland/i.test(fe),le=H>=0&&n.faithHasIcon[H]?`<img class="fic" src="${Kt}map/ui/faith_${H}.png" alt="">`:H>=0?P(n.faithCol[H]):"";Ne("selBody").innerHTML=`<div class="k">Terrain</div><div>${or[n.pTerr[D]]}</div>`+(F>=0&&!W(n.cultName[F])?`<div class="k">Culture</div><div>${P(n.cultCol[F])}<a class="flink" data-culture="${F}" title="About this culture">${n.cultName[F]}</a></div>`:"")+(H>=0&&!W(n.faithName[H])?`<div class="k">Faith</div><div>${le}<a class="flink" data-faith="${H}" title="About this faith">${n.faithName[H]}</a></div>`:"")+`<div class="k">Development</div><div>${n.devOf[D]}</div>`,Ne("selBody").querySelectorAll("a.flink").forEach(fe=>{fe.onclick=_e=>{_e.preventDefault(),fe.dataset.faith?X(+fe.dataset.faith):fe.dataset.culture&&Q(+fe.dataset.culture)}});const xe=(fe,_e)=>fe&&_e?`<a class="flink" data-char="${fe}" title="About this ruler">${_e}</a>`:_e??"",ae=[];if(he>=0){const fe=n.countyHolder[he];ae.push(`<div><span class="k">County Holder:</span> <b>${W(fe)?"uncolonised":xe(n.countyHolderKey[he],fe)}</b></div>`)}if(E>=0&&n.kingHolder[E]&&ae.push(`<div><span class="k">${n.kingName[E]}:</span> <b>${xe(n.kingHolderKey[E],n.kingHolder[E])}</b></div>`),d>=0&&n.empHolder[d]&&ae.push(`<div><span class="k">${n.empName[d]}:</span> <b>${xe(n.empHolderKey[d],n.empHolder[d])}</b></div>`),Ne("selHolders").innerHTML=ae.join(""),Ne("selHolders").style.display=ae.length?"block":"none",Ne("selHolders").querySelectorAll("a[data-char]").forEach(fe=>{fe.onclick=_e=>{_e.preventDefault(),se(fe.dataset.char)}}),he>=0){const fe=[];for(let _e=0;_e<n.np&&fe.length<40;_e++)n.countyOf[_e]===he&&fe.push(_e===D?`<b>${n.provName[_e]}</b>`:`${n.provName[_e]}${n.holdingOf[_e]?` (${R[n.holdingOf[_e]].toLowerCase()})`:""}`);Ne("selBars").innerHTML='<span class="k">Baronies:</span> '+fe.join(" · "),Ne("selBars").style.display="block"}else Ne("selBars").style.display="none";const re=Ne("selIllu");re.src=`${Kt}map/ui/${L(D)}`,re.style.display="block",re.onerror=()=>{re.style.display="none"},T.style.display="block"}let V=null;function I(D){let T=-1,he=0;for(let de=0;de<n.np;de++)n.countyOf[de]===D&&n.pArea[de]>he&&(he=n.pArea[de],T=de);T<0||(f.cam.tx=n.pCX[T]-n.W/2,f.cam.tz=n.pCY[T]-n.H/2,f.cam.dist=Math.min(f.cam.dist,320),f.clampCamera(),f.applyCamera(),k(T))}function O(D,T,he,de){Ne("sel").style.display="none",V=de,Ne("faithName").innerHTML=D,Ne("faithSub").textContent=T,Ne("faithBody").innerHTML=he,Ne("faithMode").style.display=de?"":"none",Ne("faith").classList.add("open"),Ne("faithBody").querySelectorAll("a[data-county]").forEach(E=>{E.onclick=d=>{d.preventDefault(),I(+E.dataset.county)}}),Ne("faithBody").querySelectorAll("a[data-char]").forEach(E=>{E.onclick=d=>{d.preventDefault(),se(E.dataset.char)}}),Ne("faithBody").querySelectorAll("a[data-culture]").forEach(E=>{E.onclick=d=>{d.preventDefault(),Q(+E.dataset.culture)}}),Ne("faithBody").querySelectorAll("a[data-realm]").forEach(E=>{E.onclick=d=>{d.preventDefault();const[F,H]=E.dataset.realm.split(":");te(F,+H)}})}const N=(D,T)=>D&&T?`<a class="hsite" data-char="${D}">${T}</a>`:T??"vacant";function X(D){const T=n.faithHasIcon[D]?`<img class="fic" src="${Kt}map/ui/faith_${D}.png" alt="">`:P(n.faithCol[D]);let he=0;for(let d=0;d<n.np;d++)n.faithOf[d]===D&&he++;const de=[n.faithRelig[D],n.faithAdh[D]?`followers: ${n.faithAdh[D]}s`:null,`${he} provinces`].filter(Boolean);let E="";n.faithDesc[D]&&(E+=`<div class="desc">${n.faithDesc[D]}</div>`),n.faithTenets[D].length&&(E+=`<div class="sect"><span class="k">Tenets:</span> <b>${n.faithTenets[D].join("</b> · <b>")}</b></div>`),n.faithSites[D].length&&(E+='<div class="sect"><span class="k">Holy sites:</span> '+n.faithSites[D].map(d=>`<a class="hsite" data-county="${d.c}">${d.n}</a>`).join(" · ")+"</div>"),O(`${T}${n.faithName[D]}`,de.join(" · "),E,"faith")}function Q(D){let T=0;for(let E=0;E<n.np;E++)n.cultureOf[E]===D&&T++;const he=[n.cultHeritage[D]?`${n.cultHeritage[D]} heritage`:null,n.cultLang[D]?`speaks ${n.cultLang[D]}`:null,`${T} provinces`].filter(Boolean);let de='<div class="grid" style="display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px">';n.cultEthos[D]&&(de+=`<div class="k">Ethos</div><div><b>${n.cultEthos[D]}</b></div>`),n.cultMartial[D]&&(de+=`<div class="k">Warriors</div><div>${n.cultMartial[D]}</div>`),de+="</div>",n.cultTrad[D].length&&(de+=`<div class="sect"><span class="k">Traditions:</span> <b>${n.cultTrad[D].join("</b> · <b>")}</b></div>`),O(`${P(n.cultCol[D])}${n.cultName[D]}`,he.join(" · "),de,"culture")}function se(D){const T=n.chars[D];if(!T)return;const he=["Diplomacy","Martial","Stewardship","Intrigue","Learning"],de=T.b?`born ${T.b}${T.dd?`, died ${T.dd}`:""} · year is ${n.date}`:"";let E="";T.mo&&(E+=`<div class="desc" style="font-style:italic">“${T.mo}”</div>`);const d=T.sk.map((H,q)=>H==null?null:`<div class="k">${he[q]}</div><div><b>${H}</b></div>`).filter(Boolean).join("");if(d&&(E+=`<div class="grid" style="display:grid;grid-template-columns:auto 1fr;gap:3px 12px;font-size:13px;margin-top:6px">${d}</div>`),T.tr.length){const H=T.tr.map((q,ie)=>{var W;const ue=((W=T.ti)==null?void 0:W[ie])??-1;return`<span class="trchip">${ue>=0?`<img class="tric" src="map/ui/tr_${ue}.png" alt="">`:""}<b>${q}</b></span>`}).join(" ");E+=`<div class="sect"><span class="k">Traits:</span> ${H}</div>`}const F=T.dy?`${T.n} of House ${T.dy}`:T.n;O(F,de,E,null)}function te(D,T){const he=`<img class="fic" src="${Kt}map/ui/coa/${D}_${T}.png" alt="" onerror="this.remove()">`;let de=0;const E=D==="k"?n.kingOf:n.empOf;for(let F=0;F<n.np;F++)E[F]===T&&de++;let d="";if(D==="k"){const F=n.kEmp[T],H=[F>=0?`part of ${n.empName[F]}`:"independent",`${de} provinces`];d+=`<div class="sect" style="padding-top:0"><span class="k">Ruler:</span> <b>${N(n.kingHolderKey[T],n.kingHolder[T])}</b></div>`,n.kCapital[T]>=0&&(d+=`<div class="sect"><span class="k">Capital:</span> <a class="hsite" data-county="${n.kCapital[T]}">${n.countyName[n.kCapital[T]]}</a></div>`);const q=[];for(let ie=0;ie<n.nDuchy;ie++)n.dKing[ie]===T&&q.push(ie);q.length&&(d+='<div class="sect"><span class="k">De jure duchies:</span> '+q.map(ie=>`<b>${n.duchyName[ie]}</b>`).join(" · ")+"</div>"),O(`${he}${n.kingName[T]}`,H.join(" · "),d,"political")}else{const F=[`${de} provinces`];d+=`<div class="sect" style="padding-top:0"><span class="k">Ruler:</span> <b>${N(n.empHolderKey[T],n.empHolder[T])}</b></div>`,n.eCapital[T]>=0&&(d+=`<div class="sect"><span class="k">Capital:</span> <a class="hsite" data-county="${n.eCapital[T]}">${n.countyName[n.eCapital[T]]}</a></div>`);const H=[];for(let q=0;q<n.nKing;q++)n.kEmp[q]===T&&H.push(q);H.length&&(d+='<div class="sect"><span class="k">De jure kingdoms:</span> '+H.map(q=>`<a class="hsite" data-realm="k:${q}">${n.kingName[q]}</a>`).join(" · ")+"</div>"),O(`${he}${n.empName[T]}`,F.join(" · "),d,"political")}}Ne("faithClose").onclick=()=>{Ne("faith").classList.remove("open"),U>=0&&(Ne("sel").style.display="block")},Ne("faithMode").onclick=()=>{V&&(l=V,[...Ne("modes").children].forEach(D=>{D.className=D.dataset.mode===V?"on":""}),w(V))};const pe=(D,T)=>{const he=f.pickGround(D,T);return he?n.prov[(he.gy|0)*n.W+(he.gx|0)]:-1};let Oe=!1,Qe=!1,Be=!1,j=-1,ce=null,oe=[0,0],De=[0,0];const Ue=Ne("tip"),Re=D=>{D!==j&&(j=D,f.setHover(D<0?-1:n.rawOf[D]))};h.addEventListener("contextmenu",D=>D.preventDefault()),h.addEventListener("pointerdown",D=>{if(Be=!1,De=[D.clientX,D.clientY],oe=[D.clientX,D.clientY],D.button===2||D.button===1)Qe=!0;else{Oe=!0;const T=f.pickPlane(D.clientX,D.clientY);ce=T?{x:T.x,z:T.z}:null}h.classList.add("drag"),h.setPointerCapture(D.pointerId)}),h.addEventListener("pointermove",D=>{if(Math.abs(D.clientX-De[0])+Math.abs(D.clientY-De[1])>4&&(Be=!0),Oe&&ce){const T=f.pickPlane(D.clientX,D.clientY);T&&(f.cam.tx+=ce.x-T.x,f.cam.tz+=ce.z-T.z,f.clampCamera(),f.applyCamera())}else if(Qe)f.cam.yaw-=(D.clientX-oe[0])*.004,f.cam.pitch+=(D.clientY-oe[1])*.003,f.clampCamera(),f.applyCamera();else{const T=pe(D.clientX,D.clientY);if(Re(T),T>=0){const he=n.countyOf[T],de=n.kingOf[T],E=n.empOf[T],d=n.holdingOf[T],F=d?`<b>${n.provName[T]}</b> · ${R[d]}`:`<b>${n.provName[T]}</b>`,H=he>=0?`${or[n.pTerr[T]]} · County of ${n.countyName[he]}`:or[n.pTerr[T]],q=he>=0&&n.countyHolder[he]?`<br><span style="color:#b6a988">Holder:</span> ${n.countyHolder[he]}`:"",ie=de>=0?`${n.kingName[de]} · <span style="color:#b6a988">${E>=0?n.empName[E]:""}</span>`:'<span style="color:#b6a988">Wasteland</span>';Ue.innerHTML=`${F}<br>${H}${q}<br>${ie}`,Ue.style.display="block";let ue=D.clientX+16,B=D.clientY+16;const W=Ue.getBoundingClientRect();ue+W.width>window.innerWidth-8&&(ue=D.clientX-W.width-16),B+W.height>window.innerHeight-8&&(B=D.clientY-W.height-16),Ue.style.left=ue+"px",Ue.style.top=B+"px"}else Ue.style.display="none"}oe=[D.clientX,D.clientY]});const at=D=>{const T=(Oe||Qe)&&!Be&&D.button!==2&&D.button!==1;Oe=!1,Qe=!1,ce=null,h.classList.remove("drag"),T&&k(pe(D.clientX,D.clientY))};h.addEventListener("pointerup",at),h.addEventListener("pointerleave",()=>{Ue.style.display="none",Re(-1)}),h.addEventListener("wheel",D=>{D.preventDefault();const T=f.pickPlane(D.clientX,D.clientY),he=f.cam.dist;if(f.cam.dist*=Math.exp(D.deltaY*.0011),f.clampCamera(),T){const de=1-f.cam.dist/he;f.cam.tx+=(T.x-f.cam.tx)*de,f.cam.tz+=(T.z-f.cam.tz)*de,f.clampCamera()}f.applyCamera()},{passive:!1});{const D=Ne("search"),T=Ne("results"),he=B=>B.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),de=[],E=(B,W,le=320)=>{f.cam.tx=B-n.W/2,f.cam.tz=W-n.H/2,f.cam.dist=Math.min(f.cam.dist,le),f.clampCamera(),f.applyCamera()},d=(B,W)=>{let le=-1,xe=0;for(let ae=0;ae<n.np;ae++)B[ae]===W&&n.pArea[ae]>xe&&(xe=n.pArea[ae],le=ae);return le},F=(B,W,le)=>{let xe=0,ae=0,re=0;for(let fe=0;fe<n.np;fe++)B[fe]===W&&(xe+=n.pCX[fe]*n.pArea[fe],ae+=n.pCY[fe]*n.pArea[fe],re+=n.pArea[fe]);re&&E(xe/re,ae/re,le)};for(let B=0;B<n.np;B++)de.push({key:he(n.provName[B]),name:n.provName[B],type:"Province",go:()=>{E(n.pCX[B],n.pCY[B],260),k(B)}});n.countyName.forEach((B,W)=>de.push({key:he(B),name:B,type:"County",go:()=>{const le=d(n.countyOf,W);le>=0&&(E(n.pCX[le],n.pCY[le],300),k(le))}})),n.duchyName.forEach((B,W)=>de.push({key:he(B),name:B,type:"Duchy",go:()=>F(n.duchyOf,W,420)})),n.kingName.forEach((B,W)=>de.push({key:he(B),name:B,type:"Kingdom",go:()=>{F(n.kingOf,W,700),te("k",W)}})),n.empName.forEach((B,W)=>de.push({key:he(B),name:B,type:"Empire",go:()=>{F(n.empOf,W,1100),te("e",W)}})),n.cultName.forEach((B,W)=>{/^wasteland/i.test(B)||de.push({key:he(B),name:B,type:"Culture",go:()=>Q(W)})}),n.faithName.forEach((B,W)=>{/^wasteland/i.test(B)||de.push({key:he(B),name:B,type:"Faith",go:()=>X(W)})}),n.seaLabels.forEach(B=>de.push({key:he(B.n),name:B.n,type:"Sea",go:()=>E(B.x,B.y,900)}));let H=[],q=-1;const ie=()=>{T.innerHTML=H.map((B,W)=>`<div class="res${W===q?" hot":""}" data-i="${W}"><span>${B.name}</span><span class="t">${B.type}</span></div>`).join(""),T.style.display=H.length?"block":"none",T.querySelectorAll(".res").forEach(B=>{B.onmousedown=W=>{W.preventDefault(),ue(+B.dataset.i)}})},ue=B=>{const W=H[B];W&&(D.value=W.name,H=[],q=-1,ie(),D.blur(),W.go())};D.oninput=()=>{const B=he(D.value.trim());if(q=-1,B.length<2){H=[],ie();return}const W=[],le=[];for(const xe of de)if(xe.key.startsWith(B)?W.push(xe):xe.key.includes(B)&&le.push(xe),W.length>=12)break;H=[...W,...le].slice(0,12),ie()},D.onkeydown=B=>{B.key==="ArrowDown"?(q=Math.min(H.length-1,q+1),ie(),B.preventDefault()):B.key==="ArrowUp"?(q=Math.max(0,q-1),ie(),B.preventDefault()):B.key==="Enter"?(ue(q>=0?q:0),B.preventDefault()):B.key==="Escape"&&(H=[],ie(),D.blur()),B.stopPropagation()},D.onblur=()=>setTimeout(()=>{H=[],ie()},150)}const Ve=()=>document.activeElement instanceof HTMLInputElement&&document.activeElement.type==="text",ke={};window.addEventListener("keydown",D=>{Ve()||(ke[D.key.toLowerCase()]=!0)}),window.addEventListener("keyup",D=>{ke[D.key.toLowerCase()]=!1}),setInterval(()=>{const D=f.cam.dist*.02;let T=!1;(ke.w||ke.arrowup)&&(f.cam.tz-=D,T=!0),(ke.s||ke.arrowdown)&&(f.cam.tz+=D,T=!0),(ke.a||ke.arrowleft)&&(f.cam.tx-=D,T=!0),(ke.d||ke.arrowright)&&(f.cam.tx+=D,T=!0),T&&(f.clampCamera(),f.applyCamera())},16);const Ye=Ne("modes");for(const[D,T]of Ym){const he=document.createElement("button");he.textContent=T,he.dataset.mode=D,D===l&&(he.className="on"),he.onclick=()=>{l=D,[...Ye.children].forEach(de=>{de.className=de.dataset.mode===D?"on":""}),w(D)},Ye.appendChild(he)}const Xe=Ne("tilt");Xe.oninput=()=>{Ne("tiltv").textContent=Xe.value,f.cam.pitch=(24+ +Xe.value/100*56)*Math.PI/180,f.clampCamera(),f.applyCamera()},Ne("reset").onclick=()=>{f.cam.tx=n.landCX-n.W/2,f.cam.tz=n.landCY-n.H/2,f.cam.dist=f.fitDist*.72,f.cam.yaw=0,f.clampCamera(),f.applyCamera()},Ne("zin").onclick=()=>{f.cam.dist/=1.3,f.clampCamera(),f.applyCamera()},Ne("zout").onclick=()=>{f.cam.dist*=1.3,f.clampCamera(),f.applyCamera()},Ne("clearSel").onclick=()=>k(-1),Ne("center").onclick=()=>{U<0||(f.cam.tx=n.pCX[U]-n.W/2,f.cam.tz=n.pCY[U]-n.H/2,f.cam.dist=Math.min(f.cam.dist,420),f.clampCamera(),f.applyCamera())};let st=!0;Ne("objs").onclick=()=>{m&&(st=!st,Ne("objs").className=st?"on":"",f.invalidate())},Ne("hideui").onclick=()=>{document.querySelectorAll(".panel").forEach(T=>{T.id!=="hideui"&&T.classList.toggle("hidden")});const D=Ne("hideui");D.textContent=D.textContent==="Hide UI"?"Show UI":"Hide UI",x=!0},Ne("dl").onclick=()=>{f.render();const D=document.createElement("canvas");D.width=h.width,D.height=h.height;const T=D.getContext("2d");T.drawImage(h,0,0),T.drawImage(u,0,0,D.width,D.height),Ne("dl").href=D.toDataURL("image/png")},Ne("dljson").onclick=()=>{const D=[];for(let he=0;he<n.np;he++){const de=n.countyOf[he],E=n.duchyOf[he],d=n.kingOf[he],F=n.empOf[he],H=n.cultureOf[he],q=n.faithOf[he];D.push({id:he,name:n.provName[he],terrain:or[n.pTerr[he]],county:de>=0?n.countyName[de]:null,duchy:E>=0?n.duchyName[E]:null,kingdom:d>=0?n.kingName[d]:null,empire:F>=0?n.empName[F]:null,culture:H>=0?n.cultName[H]:null,faith:q>=0?n.faithName[q]:null,holding:R[n.holdingOf[he]],holder:de>=0?n.countyHolder[de]:null,development:n.devOf[he],neighbours:[...n.padj[he]]})}const T={provinces:n.np,counties:n.nCounty,duchies:n.nDuchy,kingdoms:n.nKing,empires:n.nEmp,realms:D};Ne("dljson").href=URL.createObjectURL(new Blob([JSON.stringify(T)],{type:"application/json"}))};const ft=()=>{if(m){const D=st&&f.cam.dist<f.fitDist*.55;m.visible!==D&&(m.visible=D,f.invalidate())}f.render(),x&&(x=!1,qm(A,C,f,Kt+"map/ui/coa/",()=>{x=!0})),requestAnimationFrame(ft)};requestAnimationFrame(ft),i.style.display="none";const mt=f.terrain.geometry.attributes.position;let ct=1e9,it=-1e9;for(let D=0;D<mt.count;D++){const T=mt.getY(D);T<ct&&(ct=T),T>it&&(it=T)}window.__APP={scene:f,world:n,selectProvince:k,showFaith:X,showCulture:Q,showChar:se,showRealm:te,info:{webgl2:f.renderer.getContext()instanceof WebGL2RenderingContext,rendererType:"WebGLRenderer",isPerspectiveCamera:f.camera.isPerspectiveCamera===!0,geometryType:f.terrain.geometry.type,terrainMinY:ct,terrainMaxY:it,provinces:n.np,kingdoms:n.nKing,empires:n.nEmp}},console.log("3D map ready:",JSON.stringify(window.__APP.info))}$m().catch(i=>{console.error("boot failed",i);const e=document.getElementById("loading");e&&(e.textContent="Load error — see console")});
