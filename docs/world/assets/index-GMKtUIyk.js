var Zl=Object.defineProperty;var Jl=(i,e,t)=>e in i?Zl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Dt=(i,e,t)=>Jl(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ke={DEEP:0,OCEAN:1,SHALLOW:2,BEACH:3,PLAINS:4,FARM:5,FOREST:6,HILLS:7,DRY:8,WET:9,MTN:10,SNOW:11},ml={[ke.DEEP]:[54,70,68],[ke.OCEAN]:[70,88,84],[ke.SHALLOW]:[94,110,102],[ke.BEACH]:[186,174,138],[ke.PLAINS]:[138,148,98],[ke.FARM]:[172,162,96],[ke.FOREST]:[84,110,76],[ke.HILLS]:[138,128,92],[ke.DRY]:[188,164,116],[ke.WET]:[100,120,100],[ke.MTN]:[128,116,102],[ke.SNOW]:[222,222,220]},ti={[ke.DEEP]:"Ocean",[ke.OCEAN]:"Ocean",[ke.SHALLOW]:"Coastal waters",[ke.BEACH]:"Coast",[ke.PLAINS]:"Plains",[ke.FARM]:"Farmland",[ke.FOREST]:"Forest",[ke.HILLS]:"Hills",[ke.DRY]:"Drylands",[ke.WET]:"Wetlands",[ke.MTN]:"Mountains",[ke.SNOW]:"Snow"},Ql=i=>i<=ke.SHALLOW,eo=[[96,120,84],[118,102,146],[172,118,76],[140,142,90],[144,102,102],[94,136,142],[154,84,90],[94,114,154],[124,90,138],[164,142,84],[84,132,114],[158,100,80],[108,102,146],[80,118,88],[168,130,102],[128,90,100],[102,138,142],[154,130,74],[88,108,140],[148,108,140],[118,146,98],[150,92,108],[92,122,100],[166,118,88]];function to(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function jl(i){const e=i*2654435761>>>0;function t(a,o){let l=a*374761393+o*668265263+e*1442695041|0;return l=Math.imul(l^l>>>13,1274126177),((l^l>>>16)>>>0)/4294967295}const n=a=>a*a*(3-2*a);function r(a,o){const l=Math.floor(a),c=Math.floor(o),h=n(a-l),u=n(o-c),f=t(l,c),g=t(l+1,c),v=t(l,c+1),T=t(l+1,c+1);return f+(g-f)*h+(v-f)*u+(f-g-v+T)*h*u}function s(a,o,l,c=.5,h=2){let u=1,f=1,g=0,v=0;for(let T=0;T<l;T++)g+=f*r(a*u,o*u),v+=f,f*=c,u*=h;return g/v}return{vn:r,fbm:s}}function ec(i){const e=["b","br","d","dr","f","g","gr","h","k","kr","l","m","n","r","s","sk","st","t","th","v","vr","w","z","bh","kh","sh"],t=["a","a","e","e","i","o","o","u","au","ae","ei","ou","y","ia","eo"],n=["n","r","l","s","m","th","sk","rn","ld","st","k","d","g","ng","rk","ss","dt","vn"],r=o=>o.charAt(0).toUpperCase()+o.slice(1);function s(o,l){const c=o+Math.floor(i()*(l-o+1));let h="";for(let u=0;u<c;u++)(u>0||i()<.75)&&(h+=e[Math.floor(i()*e.length)]),h+=t[Math.floor(i()*t.length)],(u===c-1||i()<.35)&&(h+=n[Math.floor(i()*n.length)]);return r(h)}const a=["reach","mark","land","gard","heim","fell","moor","vale","wold","holt","stead","watch","crown","host","rike"];return{prov:()=>s(1,2),duchy:()=>s(2,2),kingdom:()=>i()<.4?s(2,3)+" "+r(a[Math.floor(i()*a.length)]):s(2,3),empire:()=>s(2,3)+(i()<.5?" "+r(a[Math.floor(i()*a.length)]):"")}}function ts(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>{const r=document.createElement("canvas");r.width=n.naturalWidth,r.height=n.naturalHeight;const s=r.getContext("2d",{willReadFrequently:!0});s.imageSmoothingEnabled=!1,s.drawImage(n,0,0),e(s.getImageData(0,0,r.width,r.height))},n.onerror=()=>t(new Error("failed to load "+i)),n.src=i})}function no(i,e,t){i/=360;const n=e*Math.min(t,1-t),r=s=>{const a=(s+i*12)%12;return t-n*Math.max(-1,Math.min(a-3,9-a,1))};return[r(0)*255,r(8)*255,r(4)*255]}async function tc(i,e){var ft,St;const[t,n,r]=await Promise.all([fetch(e+"map/meta.json").then(D=>{if(!D.ok)throw new Error("meta.json HTTP "+D.status);return D.json()}),ts(e+"map/prov.png"),ts(e+"map/height.png")]),s=await ts(t.rivers),a=t.W,o=t.H,l=a*o,c=t.provinces,h=jl((i>>>0)+4523),u=ec(to(99991)).prov,f=D=>/^(province\s*)?\d+$/i.test(D),g=n.data,v=r.data,T=s.data,p=new Float32Array(l),d=new Float32Array(l),b=new Uint8Array(l),C=new Int32Array(l).fill(-1),x=new Uint8Array(l),E=new Uint8Array(l),M=new Uint16Array(l),w=new Map,m=new Map,S=[],L=[],R=[],U=[],z=[],H=[],I=[],G=[],N=[];for(let D=0;D<o;D++)for(let j=0;j<a;j++){const Ee=D*a+j;p[Ee]=v[Ee*4]/255,d[Ee]=h.fbm(j/a*2.4+13,D/o*2.4+21,3),E[Ee]=T[Ee*4]>128?1:0;const ve=g[Ee*4]|g[Ee*4+1]<<8;M[Ee]=ve;const De=ve?c[ve]:void 0;if(!De||De.s){if(x[Ee]=ke.OCEAN,De){let Je=w.get(ve);Je||(Je={sx:0,sy:0,n:0},w.set(ve,Je)),Je.sx+=j,Je.sy+=D,Je.n++}continue}let pt=m.get(ve);pt===void 0&&(pt=S.length,m.set(ve,pt),S.push(f(De.n)?u():De.n),L.push(ve),R.push(De.t),U.push(De.c??-1),z.push(De.cu??-1),H.push(De.f??-1),I.push(De.h??0),G.push(De.dv??-1),N.push(De.pic??"")),C[Ee]=pt,b[Ee]=1,x[Ee]=De.t}const k=S.length,Q=new Int32Array(k),oe=new Float64Array(k),se=new Float64Array(k),ue=new Int32Array(k).fill(1e9),We=new Int32Array(k).fill(1e9),ut=new Int32Array(k).fill(-1),Ve=new Int32Array(k).fill(-1),te=new Uint8Array(k);for(let D=0;D<k;D++)te[D]=R[D];for(let D=0;D<o;D++)for(let j=0;j<a;j++){const Ee=D*a+j,ve=C[Ee];ve<0||(Q[ve]++,oe[ve]+=j,se[ve]+=D,j<ue[ve]&&(ue[ve]=j),D<We[ve]&&(We[ve]=D),j>ut[ve]&&(ut[ve]=j),D>Ve[ve]&&(Ve[ve]=D))}const le=[];for(let D=0;D<k;D++)le.push(new Set);for(let D=0;D<o;D++)for(let j=0;j<a;j++){const Ee=D*a+j,ve=C[Ee];if(!(ve<0)){if(j+1<a){const De=C[Ee+1];De>=0&&De!==ve&&(le[ve].add(De),le[De].add(ve))}if(D+1<o){const De=C[Ee+a];De>=0&&De!==ve&&(le[ve].add(De),le[De].add(ve))}}}const Z=new Float64Array(k),Fe=new Float64Array(k);for(let D=0;D<k;D++)Z[D]=oe[D]/Math.max(1,Q[D]),Fe[D]=se[D]/Math.max(1,Q[D]);const Ge=new Int32Array(k),Ue=new Int32Array(k),ht=new Int32Array(k),qe=new Int32Array(k),je=new Int32Array(k),Ke=new Int32Array(k);for(let D=0;D<k;D++){const j=U[D];Ge[D]=j;const Ee=j>=0?t.counties[j].d:-1;Ue[D]=Ee;const ve=Ee>=0?t.duchies[Ee].k:-1;ht[D]=ve,qe[D]=ve>=0?t.kingdoms[ve].e:-1,je[D]=z[D],Ke[D]=H[D]}const et=t.counties.map(D=>D.n),At=t.duchies.map(D=>D.n),bt=t.kingdoms.map(D=>D.n),Lt=t.empires.map(D=>D.n),xt=t.kingdoms.map((D,j)=>D.c??eo[j%eo.length]),lt=t.counties.map(D=>D.h??null),vt=t.duchies.map(D=>D.h??null),B=t.kingdoms.map(D=>D.h??null),Nt=t.empires.map(D=>D.h??null),rt=t.counties.map(D=>D.hk??null),P=t.duchies.map(D=>D.hk??null),_=t.kingdoms.map(D=>D.hk??null),W=t.empires.map(D=>D.hk??null),X=t.cultures.map(D=>D.e??null),J=t.cultures.map(D=>D.he??null),ce=t.cultures.map(D=>D.l??null),me=t.cultures.map(D=>D.m??null),ee=t.cultures.map(D=>D.t??[]),ne=t.cultures.map(D=>D.n),he=t.faiths.map(D=>D.n),Le=t.faiths.map(D=>!!D.i),_e=t.faiths.map(D=>D.r??null),ge=t.faiths.map(D=>D.ad??null),Ne=t.faiths.map(D=>D.d??null),Be=t.faiths.map(D=>D.t??[]),Ye=t.faiths.map(D=>D.hs??[]),F=t.cultures.map((D,j)=>D.c??no(j*97%360,.32,.5)),pe=t.faiths.map((D,j)=>D.c??no((j*151+40)%360,.3,.52)),ie=to(i>>>0),xe={[ke.FARM]:70,[ke.PLAINS]:55,[ke.FOREST]:42,[ke.HILLS]:35,[ke.WET]:30,[ke.DRY]:25,[ke.MTN]:14,[ke.SNOW]:8,[ke.BEACH]:48},fe=new Uint8Array(k);for(let D=0;D<k;D++){let j=G[D]>=0?G[D]:(xe[te[D]]??40)+(ie()-.5)*26;fe[D]=Math.max(1,Math.min(100,Math.round(j)))}const re=[];for(let D=0;D<l;D+=7)b[D]&&re.push(p[D]);re.sort((D,j)=>D-j);const Ce=re.length?re[Math.floor(re.length*.02)]:.3;for(let D=0;D<l;D++)b[D]&&p[D]<Ce+.014&&(p[D]=Ce+.014);const Se=new Uint8Array(l);{for(let j=0;j<l;j++)Se[j]=b[j]?255:0;for(let j=0;j<o;j++)for(let Ee=0;Ee<a;Ee++){const ve=j*a+Ee;if(!b[ve])continue;let De=Se[ve];Ee>0&&(De=Math.min(De,Se[ve-1]+1)),j>0&&(De=Math.min(De,Se[ve-a]+1)),Se[ve]=De}for(let j=o-1;j>=0;j--)for(let Ee=a-1;Ee>=0;Ee--){const ve=j*a+Ee;if(!b[ve])continue;let De=Se[ve];Ee<a-1&&(De=Math.min(De,Se[ve+1]+1)),j<o-1&&(De=Math.min(De,Se[ve+a]+1)),Se[ve]=De}}const Mt=65536,_t=new Int32Array(Mt).fill(-1),Xt=new Int32Array(Mt).fill(-1),qt=new Int32Array(Mt).fill(-1),A=new Uint8Array(Mt);for(const D of Object.keys(c)){const j=+D,Ee=c[D];!Ee||Ee.s||(A[j]=1,_t[j]=Ee.c??-1,Xt[j]=Ee.cu??-1,qt[j]=Ee.f??-1)}const O=Int32Array.from(t.counties.map(D=>D.d)),ae=Int32Array.from(t.duchies.map(D=>D.k)),de=Int32Array.from(t.kingdoms.map(D=>D.e)),ye=new Map;for(const[D,j]of w){const Ee=(ft=c[D])==null?void 0:ft.n;if(!Ee||f(Ee)||j.n<300)continue;let ve=ye.get(Ee);ve||(ve={sx:0,sy:0,n:0},ye.set(Ee,ve)),ve.sx+=j.sx,ve.sy+=j.sy,ve.n+=j.n}const Ie=[];for(const[D,j]of ye)j.n<1200||Ie.push({x:j.sx/j.n,y:j.sy/j.n,n:D,a:j.n});{const D=new Map;for(let j=0;j<k;j++){if(te[j]!==ke.MTN)continue;const Ee=L[j],ve=(St=c[Ee])==null?void 0:St.n;if(!ve||f(ve))continue;let De=D.get(ve);De||(De={sx:0,sy:0,n:0},D.set(ve,De)),De.sx+=Z[j]*Q[j],De.sy+=Fe[j]*Q[j],De.n+=Q[j]}for(const[j,Ee]of D)Ee.n<600||Ie.push({x:Ee.sx/Ee.n,y:Ee.sy/Ee.n,n:j,a:Ee.n})}Ie.sort((D,j)=>j.a-D.a);let tt=0,Re=0,Xe=0;for(let D=0;D<k;D++)Ge[D]<0||(tt+=Z[D]*Q[D],Re+=Fe[D]*Q[D],Xe+=Q[D]);if(Xe===0)for(let D=0;D<k;D++)te[D]<=ke.SHALLOW||(tt+=Z[D]*Q[D],Re+=Fe[D]*Q[D],Xe+=Q[D]);return tt/=Math.max(1,Xe),Re/=Math.max(1,Xe),{W:a,H:o,N:l,height:p,seaBase:Ce,terr:x,land:b,prov:C,cloud:d,river:E,coastD:Se,cloudAt:(D,j)=>h.fbm(D/a*2.4+13,j/o*2.4+21,3),shade:new Float32Array(0),np:k,provName:S,pTerr:te,pArea:Q,pCX:Z,pCY:Fe,pMinX:ue,pMinY:We,pMaxX:ut,pMaxY:Ve,padj:le,nCounty:t.counties.length,nDuchy:t.duchies.length,nKing:t.kingdoms.length,nEmp:t.empires.length,countyOf:Ge,duchyOf:Ue,kingOf:ht,empOf:qe,countyName:et,duchyName:At,kingName:bt,empName:Lt,kColor:xt,countyHolder:lt,duchyHolder:vt,kingHolder:B,empHolder:Nt,cultureOf:je,faithOf:Ke,nCult:t.cultures.length,nFaith:t.faiths.length,cultName:ne,faithName:he,cultCol:F,faithCol:pe,faithHasIcon:Le,faithRelig:_e,faithAdh:ge,faithDesc:Ne,faithTenets:Be,faithSites:Ye,countyHolderKey:rt,duchyHolderKey:P,kingHolderKey:_,empHolderKey:W,chars:t.chars??{},cultEthos:X,cultHeritage:J,cultLang:ce,cultMartial:me,cultTrad:ee,holdingOf:Uint8Array.from(I),date:t.date??"1254",artPools:t.art??{},kCapital:Int32Array.from(t.kingdoms.map(D=>D.cap??-1)),eCapital:Int32Array.from(t.empires.map(D=>D.cap??-1)),seaLabels:Ie,straits:t.straits??[],rawOf:Int32Array.from(L),rawGrid:M,rawCounty:_t,rawCult:Xt,rawFaith:qt,rawLand:A,cDuchy:O,dKing:ae,kEmp:de,devOf:fe,picOf:N,landCX:tt,landCY:Re,seed:i}}function ns(i){return i<0?0:i>255?255:i|0}function Fi(i,e,t){return(255<<24|ns(t)<<16|ns(e)<<8|ns(i))>>>0}function nc(i){const{W:e,H:t,height:n,land:r}=i,s=new Float32Array(e*t);let a=-.66,o=-.7;const l=Math.hypot(a,o);a/=l,o/=l;const c=.92,h=Math.hypot(a,o,c),u=4.6,f=42,g=10;for(let v=0;v<t;v++)for(let T=0;T<e;T++){const p=v*e+T;if(!r[p]){s[p]=1;continue}const d=T>0?p-1:p,b=T<e-1?p+1:p,C=v>0?p-e:p,x=v<t-1?p+e:p,E=(n[d]-n[b])*u,M=(n[C]-n[x])*u,w=Math.hypot(E,M,1),m=Math.max(-.45,(E*a+M*o+c)/(w*h));let S=0;for(let k=1;k<=g;k++){const Q=T+a*k|0,oe=v+o*k|0;if(Q<0||oe<0||Q>=e||oe>=t)break;const se=(n[oe*e+Q]-n[p])*f/k;se>S&&(S=se)}const L=Math.min(1,Math.max(0,(S-2)/3)),R=4,U=n[Math.max(0,v-R)*e+T],z=n[Math.min(t-1,v+R)*e+T],H=n[v*e+Math.max(0,T-R)],I=n[v*e+Math.min(e-1,T+R)],G=Math.min(.2,Math.max(0,((U+z+H+I)/4-n[p])*f*.022));let N=.54+.56*(m*.5+.5);N*=(1-L*.32)*(1-G),N=.54+(N-.54)*1.32,s[p]=Math.max(.42,Math.min(1.3,N))}i.shade=s}function ic(i){const{W:e,H:t,N:n,terr:r,shade:s,land:a,height:o,seaBase:l,river:c}=i,h=i.cloud,u=new Uint32Array(n),f=new Uint8Array(n),g=[];for(let x=0;x<n;x+=13)a[x]&&g.push(o[x]);g.sort((x,E)=>x-E);const v=x=>g.length?g[Math.min(g.length-1,x*g.length|0)]:1,T=v(.9),p=Math.max(v(.975),T+.01),d=10,b=x=>(x=x<0?0:x>1?1:x,x*x*(3-2*x));for(let x=0;x<t;x++)for(let E=0;E<e;E++){const M=x*e+E,w=r[M],m=s[M];let S,L,R;if(Ql(w)){const U=Math.max(0,(l-o[M])/Math.max(.001,l)),z=(h[M]-.5)*16;S=86-U*42+z*.6,L=103-U*44+z*.8,R=102-U*34+z*.7}else{const U=ml[w],z=(h[M]-.5)*9+((E*131+x*57^E*13+x*151)%13-6)*.9;S=U[0]*m+z,L=U[1]*m+z,R=U[2]*m+z;const H=o[M]+(h[M]-.5)*.02;if(H>T){const I=Math.max(0,E-d),G=Math.min(e-1,E+d),N=Math.max(0,x-d),k=Math.min(t-1,x+d),Q=(o[x*e+I]+o[x*e+G]+o[N*e+E]+o[k*e+E]+o[N*e+I]+o[N*e+G]+o[k*e+I]+o[k*e+G])/8,oe=o[M]-Q+(h[M]-.5)*.004,se=b((H-T)/(p-T))*b(oe/.012);if(se>.02){const ue=Math.min(1.05,m);S=S*(1-se)+228*ue*se,L=L*(1-se)+231*ue*se,R=R*(1-se)+234*ue*se,f[M]=se*255|0}}}c[M]&&a[M]&&(S=S*.15+50*.85,L=L*.15+84*.85,R=R*.15+118*.85),u[M]=Fi(S,L,R)}const C=new Float32Array(n);for(let x=0;x<n;x++)C[x]=a[x]?0:1e9;for(let x=0;x<t;x++)for(let E=0;E<e;E++){const M=x*e+E;if(a[M])continue;let w=C[M];E>0&&(w=Math.min(w,C[M-1]+1)),x>0&&(w=Math.min(w,C[M-e]+1)),E>0&&x>0&&(w=Math.min(w,C[M-e-1]+1.414)),E<e-1&&x>0&&(w=Math.min(w,C[M-e+1]+1.414)),C[M]=w}for(let x=t-1;x>=0;x--)for(let E=e-1;E>=0;E--){const M=x*e+E;if(a[M])continue;let w=C[M];E<e-1&&(w=Math.min(w,C[M+1]+1)),x<t-1&&(w=Math.min(w,C[M+e]+1)),E<e-1&&x<t-1&&(w=Math.min(w,C[M+e+1]+1.414)),E>0&&x<t-1&&(w=Math.min(w,C[M+e-1]+1.414)),C[M]=w}for(let x=0;x<t;x++)for(let E=0;E<e;E++){const M=x*e+E;if(a[M]){if(E>0&&!a[M-1]||E<e-1&&!a[M+1]||x>0&&!a[M-e]||x<t-1&&!a[M+e]){const m=u[M],S=.66;u[M]=Fi((m&255)*S,(m>>8&255)*S,(m>>16&255)*S)}}else{const w=C[M];if(w<11){const m=(1-w/11)*.38,S=u[M];u[M]=Fi((S&255)*(1-m)+122*m,(S>>8&255)*(1-m)+162*m,(S>>16&255)*(1-m)+152*m)}}}for(let x=0;x<t;x++)for(let E=0;E<e;E++){const M=x*e+E,w=E/e-.5,m=x/t-.5,S=Math.sqrt(w*w*1.02+m*m*1.12);let L=Math.max(0,(S-.4)/.5);L*=L;let R=0;if(!a[M]){const H=C[M];R=Math.max(0,Math.min(1,(H-36)/110))}const U=.35+h[M]*1.1,z=Math.min(.95,Math.max(L*U,R*R*U*.5));if(z>.02){const H=u[M],I=(H&255)*(1-z)+216*z,G=(H>>8&255)*(1-z)+216*z,N=(H>>16&255)*(1-z)+206*z;u[M]=Fi(I,G,N)}}return{baseBuf:u,snow:f}}function rc(i,e,t){const{W:n,H:r,terr:s,shade:a,land:o,river:l,prov:c}=i,{baseBuf:h,snow:u}=e,f=Math.max(0,i.pMinX[t]),g=Math.min(n-1,i.pMaxX[t]),v=Math.max(0,i.pMinY[t]),T=Math.min(r-1,i.pMaxY[t]);for(let p=v;p<=T;p++)for(let d=f;d<=g;d++){const b=p*n+d;if(c[b]!==t)continue;const C=s[b],x=a[b],E=ml[C],w=(i.cloudAt(d,p)-.5)*9+((d*131+p*57^d*13+p*151)%13-6)*.9;let m=E[0]*x+w,S=E[1]*x+w,L=E[2]*x+w;const R=u[b]/255;if(R>0){const z=Math.min(1.05,x);m=m*(1-R)+228*z*R,S=S*(1-R)+231*z*R,L=L*(1-R)+234*z*R}l[b]&&o[b]&&(m=m*.15+50*.85,S=S*.15+84*.85,L=L*.15+118*.85),(d>0&&!o[b-1]||d<n-1&&!o[b+1]||p>0&&!o[b-n]||p<r-1&&!o[b+n])&&(m*=.66,S*=.66,L*=.66),h[b]=Fi(m,S,L)}}function sc(i){const e=i/100,t=[120,120,96],n=[196,168,92],r=[168,84,64],s=(a,o,l)=>[a[0]+(o[0]-a[0])*l,a[1]+(o[1]-a[1])*l,a[2]+(o[2]-a[2])*l];return e<.5?s(t,n,e*2):s(n,r,(e-.5)*2)}function is(i,e,t,n){const{N:r,prov:s,height:a,seaBase:o,shade:l}=i,{baseBuf:c,snow:h}=e,u=new Uint32Array(n.data.buffer);if(u.set(c),t==="elevation")for(let f=0;f<r;f++){if(s[f]<0)continue;const v=40+(a[f]-o)/(1-o)*200,T=[v*.9+20,v,v*.7+20],p=l[f],d=T[0]*.3+T[1]*.59+T[2]*.11,b=.16,C=(T[0]+(d-T[0])*b)*p,x=(T[1]+(d-T[1])*b)*p,E=(T[2]+(d-T[2])*b)*p,M=c[f],w=M&255,m=M>>8&255,S=M>>16&255,L=.82*(1-h[f]/255*.85);u[f]=Fi(w*(1-L)+C*L,m*(1-L)+x*L,S*(1-L)+E*L)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="185",ac=0,io=1,oc=2,Br=1,lc=2,tr=3,zn=0,nn=1,yn=2,Fn=0,Oi=1,ro=2,so=3,ao=4,cc=5,li=100,uc=101,fc=102,dc=103,hc=104,pc=200,mc=201,gc=202,_c=203,ks=204,Gs=205,xc=206,vc=207,Mc=208,Sc=209,yc=210,Ec=211,bc=212,Tc=213,Ac=214,Vs=0,Ws=1,Xs=2,Hi=3,qs=4,Ys=5,$s=6,Ks=7,La=0,wc=1,Cc=2,Tn=0,gl=1,_l=2,xl=3,vl=4,Ml=5,Sl=6,yl=7,El=300,di=301,ki=302,rs=303,ss=304,Qr=306,Wr=1e3,Nn=1001,Xr=1002,Bt=1003,Rc=1004,pr=1005,Wt=1006,as=1007,En=1008,ln=1009,bl=1010,Tl=1011,ar=1012,Da=1013,wn=1014,_n=1015,Hn=1016,Ia=1017,Ua=1018,or=1020,Al=35902,wl=35899,Cl=1021,Rl=1022,Qt=1023,kn=1026,fi=1027,Na=1028,Fa=1029,hi=1030,Oa=1031,Ba=1033,zr=33776,Hr=33777,kr=33778,Gr=33779,Zs=35840,Js=35841,Qs=35842,js=35843,ea=36196,ta=37492,na=37496,ia=37488,ra=37489,qr=37490,sa=37491,aa=37808,oa=37809,la=37810,ca=37811,ua=37812,fa=37813,da=37814,ha=37815,pa=37816,ma=37817,ga=37818,_a=37819,xa=37820,va=37821,Ma=36492,Sa=36494,ya=36495,Ea=36283,ba=36284,Yr=36285,Ta=36286,Pc=3200,Aa=0,Lc=1,Qn="",tn="srgb",$r="srgb-linear",Kr="linear",Et="srgb",vi=7680,oo=519,Dc=512,Ic=513,Uc=514,za=515,Nc=516,Fc=517,Ha=518,Oc=519,lo=35044,co="300 es",bn=2e3,lr=2001;function Bc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zc(){const i=cr("canvas");return i.style.display="block",i}const uo={};function fo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Pl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=Pl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=Pl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Bi(...i){const e=i.join(" ");e in uo||(uo[e]=!0,$e(...i))}function Hc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const kc={[Vs]:Ws,[Xs]:$s,[qs]:Ks,[Hi]:Ys,[Ws]:Vs,[$s]:Xs,[Ks]:qs,[Ys]:Hi};class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ho=1234567;const rr=Math.PI/180,ur=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function ka(i,e){return(i%e+e)%e}function Gc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Vc(i,e,t){return i!==e?(t-i)/(e-i):0}function sr(i,e,t){return(1-t)*i+t*e}function Wc(i,e,t,n){return sr(i,e,1-Math.exp(-t*n))}function Xc(i,e=1){return e-Math.abs(ka(i,e*2)-e)}function qc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $c(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kc(i,e){return i+Math.random()*(e-i)}function Zc(i){return i*(.5-Math.random())}function Jc(i){i!==void 0&&(ho=i);let e=ho+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qc(i){return i*rr}function jc(i){return i*ur}function eu(i){return(i&i-1)===0&&i!==0}function tu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function iu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),g=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*g,o*c);break;case"YXY":i.set(l*g,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*g,o*h,o*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const os={DEG2RAD:rr,RAD2DEG:ur,generateUUID:Xi,clamp:ot,euclideanModulo:ka,mapLinear:Gc,inverseLerp:Vc,lerp:sr,damp:Wc,pingpong:Xc,smoothstep:qc,smootherstep:Yc,randInt:$c,randFloat:Kc,randFloatSpread:Zc,seededRandom:Jc,degToRad:Qc,radToDeg:jc,isPowerOfTwo:eu,ceilPowerOfTwo:tu,floorPowerOfTwo:nu,setQuaternionFromProperEuler:iu,normalize:jt,denormalize:Ni},$a=class $a{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$a.prototype.isVector2=!0;let st=$a;class mi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[a+0],g=s[a+1],v=s[a+2],T=s[a+3];if(u!==T||l!==f||c!==g||h!==v){let p=l*f+c*g+h*v+u*T;p<0&&(f=-f,g=-g,v=-v,T=-T,p=-p);let d=1-o;if(p<.9995){const b=Math.acos(p),C=Math.sin(b);d=Math.sin(d*b)/C,o=Math.sin(o*b)/C,l=l*d+f*o,c=c*d+g*o,h=h*d+v*o,u=u*d+T*o}else{l=l*d+f*o,c=c*d+g*o,h=h*d+v*o,u=u*d+T*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],f=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+h*u+l*g-c*f,e[t+1]=l*v+h*f+c*u-o*g,e[t+2]=c*v+h*g+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),f=l(n/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*g*v,this._y=c*g*u-f*h*v,this._z=c*h*v+f*g*u,this._w=c*h*u-f*g*v;break;case"YXZ":this._x=f*h*u+c*g*v,this._y=c*g*u-f*h*v,this._z=c*h*v-f*g*u,this._w=c*h*u+f*g*v;break;case"ZXY":this._x=f*h*u-c*g*v,this._y=c*g*u+f*h*v,this._z=c*h*v+f*g*u,this._w=c*h*u-f*g*v;break;case"ZYX":this._x=f*h*u-c*g*v,this._y=c*g*u+f*h*v,this._z=c*h*v-f*g*u,this._w=c*h*u+f*g*v;break;case"YZX":this._x=f*h*u+c*g*v,this._y=c*g*u+f*h*v,this._z=c*h*v-f*g*u,this._w=c*h*u-f*g*v;break;case"XZY":this._x=f*h*u-c*g*v,this._y=c*g*u-f*h*v,this._z=c*h*v+f*g*u,this._w=c*h*u+f*g*v;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(n>o&&n>u){const g=2*Math.sqrt(1+n-o-u);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>u){const g=2*Math.sqrt(1+o-n-u);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+u-n-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ka=class Ka{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ls.copy(this).projectOnVector(e),this.sub(ls)}reflect(e){return this.sub(ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ka.prototype.isVector3=!0;let q=Ka;const ls=new q,po=new mi,Za=class Za{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],g=n[5],v=n[8],T=r[0],p=r[3],d=r[6],b=r[1],C=r[4],x=r[7],E=r[2],M=r[5],w=r[8];return s[0]=a*T+o*b+l*E,s[3]=a*p+o*C+l*M,s[6]=a*d+o*x+l*w,s[1]=c*T+h*b+u*E,s[4]=c*p+h*C+u*M,s[7]=c*d+h*x+u*w,s[2]=f*T+g*b+v*E,s[5]=f*p+g*C+v*M,s[8]=f*d+g*x+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,g=c*s-a*l,v=t*u+n*f+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/v;return e[0]=u*T,e[1]=(r*c-h*n)*T,e[2]=(o*n-r*a)*T,e[3]=f*T,e[4]=(h*t-r*l)*T,e[5]=(r*s-o*t)*T,e[6]=g*T,e[7]=(n*l-c*t)*T,e[8]=(a*t-n*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cs.makeScale(e,t)),this}rotate(e){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cs.makeRotation(-e)),this}translate(e,t){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Za.prototype.isMatrix3=!0;let Ze=Za;const cs=new Ze,mo=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),go=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ru(){const i={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Et&&(r.r=On(r.r),r.g=On(r.g),r.b=On(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Kr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$r]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:mo,fromXYZ:go,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:mo,fromXYZ:go,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}const ct=ru();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class su{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=cr("canvas")),Mi.width=e.width,Mi.height=e.height;const r=Mi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=On(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let au=0;class Ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(us(r[a].image)):s.push(us(r[a]))}else s=us(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let ou=0;const fs=new q;class Ht extends pi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Nn,r=Nn,s=Wt,a=En,o=Qt,l=ln,c=Ht.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Xi(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fs).x}get height(){return this.source.getSize(fs).y}get depth(){return this.source.getSize(fs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==El)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=El;Ht.DEFAULT_ANISOTROPY=1;const Ja=class Ja{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],g=l[5],v=l[9],T=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-T)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+T)<.1&&Math.abs(v+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,x=(g+1)/2,E=(d+1)/2,M=(h+f)/4,w=(u+T)/4,m=(v+p)/4;return C>x&&C>E?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=M/n,s=w/n):x>E?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=M/r,s=m/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=w/s,r=m/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(u-T)*(u-T)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(u-T)/b,this.z=(f-h)/b,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ja.prototype.isVector4=!0;let It=Ja;class lu extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Ht(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends lu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ll extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cu extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jr=class Jr{constructor(e,t,n,r,s,a,o,l,c,h,u,f,g,v,T,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,f,g,v,T,p)}set(e,t,n,r,s,a,o,l,c,h,u,f,g,v,T,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=g,d[7]=v,d[11]=T,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),a=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,g=a*u,v=o*h,T=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=g+v*c,t[5]=f-T*c,t[9]=-o*l,t[2]=T-f*c,t[6]=v+g*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,g=l*u,v=c*h,T=c*u;t[0]=f+T*o,t[4]=v*o-g,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=g*o-v,t[6]=T+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,g=l*u,v=c*h,T=c*u;t[0]=f-T*o,t[4]=-a*u,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*h,t[9]=T-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,g=a*u,v=o*h,T=o*u;t[0]=l*h,t[4]=v*c-g,t[8]=f*c+T,t[1]=l*u,t[5]=T*c+f,t[9]=g*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,g=a*c,v=o*l,T=o*c;t[0]=l*h,t[4]=T-f*u,t[8]=v*u+g,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=g*u+v,t[10]=f-T*u}else if(e.order==="XZY"){const f=a*l,g=a*c,v=o*l,T=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+T,t[5]=a*h,t[9]=g*u-v,t[2]=v*u-g,t[6]=o*h,t[10]=T*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,fu)}lookAt(e,t,n){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Xn.crossVectors(n,an),Xn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Xn.crossVectors(n,an)),Xn.normalize(),mr.crossVectors(an,Xn),r[0]=Xn.x,r[4]=mr.x,r[8]=an.x,r[1]=Xn.y,r[5]=mr.y,r[9]=an.y,r[2]=Xn.z,r[6]=mr.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],g=n[13],v=n[2],T=n[6],p=n[10],d=n[14],b=n[3],C=n[7],x=n[11],E=n[15],M=r[0],w=r[4],m=r[8],S=r[12],L=r[1],R=r[5],U=r[9],z=r[13],H=r[2],I=r[6],G=r[10],N=r[14],k=r[3],Q=r[7],oe=r[11],se=r[15];return s[0]=a*M+o*L+l*H+c*k,s[4]=a*w+o*R+l*I+c*Q,s[8]=a*m+o*U+l*G+c*oe,s[12]=a*S+o*z+l*N+c*se,s[1]=h*M+u*L+f*H+g*k,s[5]=h*w+u*R+f*I+g*Q,s[9]=h*m+u*U+f*G+g*oe,s[13]=h*S+u*z+f*N+g*se,s[2]=v*M+T*L+p*H+d*k,s[6]=v*w+T*R+p*I+d*Q,s[10]=v*m+T*U+p*G+d*oe,s[14]=v*S+T*z+p*N+d*se,s[3]=b*M+C*L+x*H+E*k,s[7]=b*w+C*R+x*I+E*Q,s[11]=b*m+C*U+x*G+E*oe,s[15]=b*S+C*z+x*N+E*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],g=e[14],v=e[3],T=e[7],p=e[11],d=e[15],b=l*g-c*f,C=o*g-c*u,x=o*f-l*u,E=a*g-c*h,M=a*f-l*h,w=a*u-o*h;return t*(T*b-p*C+d*x)-n*(v*b-p*E+d*M)+r*(v*C-T*E+d*w)-s*(v*x-T*M+p*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],g=e[11],v=e[12],T=e[13],p=e[14],d=e[15],b=t*o-n*a,C=t*l-r*a,x=t*c-s*a,E=n*l-r*o,M=n*c-s*o,w=r*c-s*l,m=h*T-u*v,S=h*p-f*v,L=h*d-g*v,R=u*p-f*T,U=u*d-g*T,z=f*d-g*p,H=b*z-C*U+x*R+E*L-M*S+w*m;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return e[0]=(o*z-l*U+c*R)*I,e[1]=(r*U-n*z-s*R)*I,e[2]=(T*w-p*M+d*E)*I,e[3]=(f*M-u*w-g*E)*I,e[4]=(l*L-a*z-c*S)*I,e[5]=(t*z-r*L+s*S)*I,e[6]=(p*x-v*w-d*C)*I,e[7]=(h*w-f*x+g*C)*I,e[8]=(a*U-o*L+c*m)*I,e[9]=(n*L-t*U-s*m)*I,e[10]=(v*M-T*x+d*b)*I,e[11]=(u*x-h*M-g*b)*I,e[12]=(o*S-a*R-l*m)*I,e[13]=(t*R-n*S+r*m)*I,e[14]=(T*C-v*E-p*b)*I,e[15]=(h*E-u*C+f*b)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,g=s*h,v=s*u,T=a*h,p=a*u,d=o*u,b=l*c,C=l*h,x=l*u,E=n.x,M=n.y,w=n.z;return r[0]=(1-(T+d))*E,r[1]=(g+x)*E,r[2]=(v-C)*E,r[3]=0,r[4]=(g-x)*M,r[5]=(1-(f+d))*M,r[6]=(p+b)*M,r[7]=0,r[8]=(v+C)*w,r[9]=(p-b)*w,r[10]=(1-(f+T))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),l=Si.set(r[8],r[9],r[10]).length();s<0&&(a=-a),hn.copy(this);const c=1/a,h=1/o,u=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=bn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),g=(n+r)/(n-r);let v,T;if(l)v=s/(a-s),T=a*s/(a-s);else if(o===bn)v=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===lr)v=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=bn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),g=-(n+r)/(n-r);let v,T;if(l)v=1/(a-s),T=a/(a-s);else if(o===bn)v=-2/(a-s),T=-(a+s)/(a-s);else if(o===lr)v=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Jr.prototype.isMatrix4=!0;let Rt=Jr;const Si=new q,hn=new Rt,uu=new q(0,0,0),fu=new q(1,1,1),Xn=new q,mr=new q,an=new q,_o=new Rt,xo=new mi;class ei{constructor(e=0,t=0,n=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _o.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_o,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xo.setFromEuler(this),this.setFromQuaternion(xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let du=0;const vo=new q,yi=new mi,Pn=new Rt,gr=new q,Yi=new q,hu=new q,pu=new mi,Mo=new q(1,0,0),So=new q(0,1,0),yo=new q(0,0,1),Eo={type:"added"},mu={type:"removed"},Ei={type:"childadded",child:null},ds={type:"childremoved",child:null};class Yt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new q,t=new ei,n=new mi,r=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ze}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Mo,e)}rotateY(e){return this.rotateOnAxis(So,e)}rotateZ(e){return this.rotateOnAxis(yo,e)}translateOnAxis(e,t){return vo.copy(e).applyQuaternion(this.quaternion),this.position.add(vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mo,e)}translateY(e){return this.translateOnAxis(So,e)}translateZ(e){return this.translateOnAxis(yo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Yi,gr,this.up):Pn.lookAt(gr,Yi,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(Pn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eo),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mu),ds.child=e,this.dispatchEvent(ds),ds.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eo),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,hu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new q(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gu={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const T of e.hand.values()){const p=t.getJointPose(T,n),d=this._getHandJoint(c,T);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,v=.005;c.inputState.pinching&&f>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=ka(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ps(a,s,e+1/3),this.g=ps(a,s,e),this.b=ps(a,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=tn){function n(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const n=Dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return ct.workingToColorSpace(Zt.copy(this),e),Math.round(ot(Zt.r*255,0,255))*65536+Math.round(ot(Zt.g*255,0,255))*256+Math.round(ot(Zt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=tn){ct.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,r=Zt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(_r);const n=sr(qn.h,_r.h,t),r=sr(qn.s,_r.s,t),s=sr(qn.l,_r.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new at;at.NAMES=Dl;class Wa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new at(e),this.near=t,this.far=n}clone(){return new Wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _u extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new q,Ln=new q,ms=new q,Dn=new q,bi=new q,Ti=new q,bo=new q,gs=new q,_s=new q,xs=new q,vs=new It,Ms=new It,Ss=new It;class gn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),Ln.subVectors(n,t),ms.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Ln),l=pn.dot(ms),c=Ln.dot(Ln),h=Ln.dot(ms),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,g=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return vs.setScalar(0),Ms.setScalar(0),Ss.setScalar(0),vs.fromBufferAttribute(e,t),Ms.fromBufferAttribute(e,n),Ss.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vs,s.x),a.addScaledVector(Ms,s.y),a.addScaledVector(Ss,s.z),a}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),Ln.subVectors(e,t),pn.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),pn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;bi.subVectors(r,n),Ti.subVectors(s,n),gs.subVectors(e,n);const l=bi.dot(gs),c=Ti.dot(gs);if(l<=0&&c<=0)return t.copy(n);_s.subVectors(e,r);const h=bi.dot(_s),u=Ti.dot(_s);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(bi,a);xs.subVectors(e,s);const g=bi.dot(xs),v=Ti.dot(xs);if(v>=0&&g<=v)return t.copy(s);const T=g*c-l*v;if(T<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ti,o);const p=h*v-g*u;if(p<=0&&u-h>=0&&g-v>=0)return bo.subVectors(s,r),o=(u-h)/(u-h+(g-v)),t.copy(r).addScaledVector(bo,o);const d=1/(p+T+f);return a=T*d,o=f*d,t.copy(n).addScaledVector(bi,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gi{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),vr.subVectors(this.max,$i),Ai.subVectors(e.a,$i),wi.subVectors(e.b,$i),Ci.subVectors(e.c,$i),Yn.subVectors(wi,Ai),$n.subVectors(Ci,wi),ni.subVectors(Ai,Ci);let t=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-ni.z,ni.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,ni.z,0,-ni.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-ni.y,ni.x,0];return!ys(t,Ai,wi,Ci,vr)||(t=[1,0,0,0,1,0,0,0,1],!ys(t,Ai,wi,Ci,vr))?!1:(Mr.crossVectors(Yn,$n),t=[Mr.x,Mr.y,Mr.z],ys(t,Ai,wi,Ci,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new q,new q,new q,new q,new q,new q,new q,new q],mn=new q,xr=new gi,Ai=new q,wi=new q,Ci=new q,Yn=new q,$n=new q,ni=new q,$i=new q,vr=new q,Mr=new q,ii=new q;function ys(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ii.fromArray(i,s);const o=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zt=new q,Sr=new st;let xu=0;class rn extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Il extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ul extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bn extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const vu=new gi,Ki=new q,Es=new q;class fr{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Es.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Es)),this.expandByPoint(Ki.copy(e.center).sub(Es))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mu=0;const fn=new Rt,bs=new Yt,Ri=new q,on=new gi,Zi=new gi,Vt=new q;class Rn extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Ul:Il)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return bs.lookAt(e),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(on.min,Zi.min),on.expandByPoint(Vt),Vt.addVectors(on.max,Zi.max),on.expandByPoint(Vt)):(on.expandByPoint(Zi.min),on.expandByPoint(Zi.max))}on.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Vt.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(e,c),Vt.add(Ri)),r=Math.max(r,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let m=0;m<n.count;m++)o[m]=new q,l[m]=new q;const c=new q,h=new q,u=new q,f=new st,g=new st,v=new st,T=new q,p=new q;function d(m,S,L){c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,L),f.fromBufferAttribute(s,m),g.fromBufferAttribute(s,S),v.fromBufferAttribute(s,L),h.sub(c),u.sub(c),g.sub(f),v.sub(f);const R=1/(g.x*v.y-v.x*g.y);isFinite(R)&&(T.copy(h).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(R),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(R),o[m].add(T),o[S].add(T),o[L].add(T),l[m].add(p),l[S].add(p),l[L].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let m=0,S=b.length;m<S;++m){const L=b[m],R=L.start,U=L.count;for(let z=R,H=R+U;z<H;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const C=new q,x=new q,E=new q,M=new q;function w(m){E.fromBufferAttribute(r,m),M.copy(E);const S=o[m];C.copy(S),C.sub(E.multiplyScalar(E.dot(S))).normalize(),x.crossVectors(M,S);const R=x.dot(l[m])<0?-1:1;a.setXYZW(m,C.x,C.y,C.z,R)}for(let m=0,S=b.length;m<S;++m){const L=b[m],R=L.start,U=L.count;for(let z=R,H=R+U;z<H;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,h=new q,u=new q;if(e)for(let f=0,g=e.count;f<g;f+=3){const v=e.getX(f+0),T=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let g=0,v=0;for(let T=0,p=l.length;T<p;T++){o.isInterleavedBufferAttribute?g=l[T]*o.data.stride+o.offset:g=l[T]*h;for(let d=0;d<h;d++)f[v++]=c[g++]}return new rn(f,h,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],g=e(f,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const g=c[u];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Su=0;class dr extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Oi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ks,this.blendDst=Gs,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ks&&(n.blendSrc=this.blendSrc),this.blendDst!==Gs&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Un=new q,Ts=new q,yr=new q,Kn=new q,As=new q,Er=new q,ws=new q;class Nl{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ts.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Ts);const s=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=Kn.dot(this.direction),l=-Kn.dot(yr),c=Kn.lengthSq(),h=Math.abs(1-a*a);let u,f,g,v;if(h>0)if(u=a*l-o,f=a*o-l,v=s*h,u>=0)if(f>=-v)if(f<=v){const T=1/h;u*=T,f*=T,g=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),g=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),g=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),g=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ts).addScaledVector(yr,f),g}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){As.subVectors(t,e),Er.subVectors(n,e),ws.crossVectors(As,Er);let a=this.direction.dot(ws),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(Er.crossVectors(Kn,Er));if(l<0)return null;const c=o*this.direction.dot(As.cross(Kn));if(c<0||l+c>a)return null;const h=-o*Kn.dot(ws);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zr extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const To=new Rt,ri=new Nl,br=new fr,Ao=new q,Tr=new q,Ar=new q,wr=new q,Cs=new q,Cr=new q,wo=new q,Rr=new q;class cn extends Yt{constructor(e=new Rn,t=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Cr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Cs.fromBufferAttribute(u,e),a?Cr.addScaledVector(Cs,h):Cr.addScaledVector(Cs.sub(t),h))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),ri.copy(e.ray).recast(e.near),!(br.containsPoint(ri.origin)===!1&&(ri.intersectSphere(br,Ao)===null||ri.origin.distanceToSquared(Ao)>(e.far-e.near)**2))&&(To.copy(s).invert(),ri.copy(e.ray).applyMatrix4(To),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,T=f.length;v<T;v++){const p=f[v],d=a[p.materialIndex],b=Math.max(p.start,g.start),C=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let x=b,E=C;x<E;x+=3){const M=o.getX(x),w=o.getX(x+1),m=o.getX(x+2);r=Pr(this,d,e,n,c,h,u,M,w,m),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),T=Math.min(o.count,g.start+g.count);for(let p=v,d=T;p<d;p+=3){const b=o.getX(p),C=o.getX(p+1),x=o.getX(p+2);r=Pr(this,a,e,n,c,h,u,b,C,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,T=f.length;v<T;v++){const p=f[v],d=a[p.materialIndex],b=Math.max(p.start,g.start),C=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let x=b,E=C;x<E;x+=3){const M=x,w=x+1,m=x+2;r=Pr(this,d,e,n,c,h,u,M,w,m),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),T=Math.min(l.count,g.start+g.count);for(let p=v,d=T;p<d;p+=3){const b=p,C=p+1,x=p+2;r=Pr(this,a,e,n,c,h,u,b,C,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function yu(i,e,t,n,r,s,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===zn,o),l===null)return null;Rr.copy(o),Rr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Rr);return c<t.near||c>t.far?null:{distance:c,point:Rr.clone(),object:i}}function Pr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Tr),i.getVertexPosition(l,Ar),i.getVertexPosition(c,wr);const h=yu(i,e,t,n,Tr,Ar,wr,wo);if(h){const u=new q;gn.getBarycoord(wo,Tr,Ar,wr,u),r&&(h.uv=gn.getInterpolatedAttribute(r,o,l,c,u,new st)),s&&(h.uv1=gn.getInterpolatedAttribute(s,o,l,c,u,new st)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,l,c,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};gn.getNormal(Tr,Ar,wr,f.normal),h.face=f,h.barycoord=u}return h}class ci extends Ht{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Bt,h=Bt,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co extends rn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pi=new Rt,Ro=new Rt,Lr=[],Po=new gi,Eu=new Rt,Ji=new cn,Qi=new fr;class Lo extends cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Co(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Eu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),Po.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Po)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),Qi.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Pi),Ro.multiplyMatrices(n,Pi),Ji.matrixWorld=Ro,Ji.raycast(e,Lr);for(let a=0,o=Lr.length;a<o;a++){const l=Lr[a];l.instanceId=s,l.object=this,t.push(l)}Lr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(r*this.count),r,this.count,Na,_n));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Rs=new q,bu=new q,Tu=new Ze;class oi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Rs.subVectors(n,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Rs),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tu.getNormalMatrix(e),r=this.coplanarPoint(Rs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new fr,Au=new st(.5,.5),Dr=new q;class Xa{constructor(e=new oi,t=new oi,n=new oi,r=new oi,s=new oi,a=new oi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],g=s[7],v=s[8],T=s[9],p=s[10],d=s[11],b=s[12],C=s[13],x=s[14],E=s[15];if(r[0].setComponents(c-a,g-h,d-v,E-b).normalize(),r[1].setComponents(c+a,g+h,d+v,E+b).normalize(),r[2].setComponents(c+o,g+u,d+T,E+C).normalize(),r[3].setComponents(c-o,g-u,d-T,E-C).normalize(),n)r[4].setComponents(l,f,p,x).normalize(),r[5].setComponents(c-l,g-f,d-p,E-x).normalize();else if(r[4].setComponents(c-l,g-f,d-p,E-x).normalize(),t===bn)r[5].setComponents(c+l,g+f,d+p,E+x).normalize();else if(t===lr)r[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=Au.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Dr.x=r.normal.x>0?e.max.x:e.min.x,Dr.y=r.normal.y>0?e.max.y:e.min.y,Dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fl extends Ht{constructor(e=[],t=di,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Do extends Ht{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gi extends Ht{constructor(e,t,n=wn,r,s,a,o=Bt,l=Bt,c,h=kn,u=1){if(h!==kn&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wu extends Gi{constructor(e,t=wn,n=di,r,s,a=Bt,o=Bt,l,c=kn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ol extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hr extends Rn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,g=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(u,2));function v(T,p,d,b,C,x,E,M,w,m,S){const L=x/w,R=E/m,U=x/2,z=E/2,H=M/2,I=w+1,G=m+1;let N=0,k=0;const Q=new q;for(let oe=0;oe<G;oe++){const se=oe*R-z;for(let ue=0;ue<I;ue++){const We=ue*L-U;Q[T]=We*b,Q[p]=se*C,Q[d]=H,c.push(Q.x,Q.y,Q.z),Q[T]=0,Q[p]=0,Q[d]=M>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(ue/w),u.push(1-oe/m),N+=1}}for(let oe=0;oe<m;oe++)for(let se=0;se<w;se++){const ue=f+se+I*oe,We=f+se+I*(oe+1),ut=f+(se+1)+I*(oe+1),Ve=f+(se+1)+I*oe;l.push(ue,We,Ve),l.push(We,ut,Ve),k+=6}o.addGroup(g,k,S),g+=k,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vi extends Rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,g=[],v=[],T=[],p=[];for(let d=0;d<h;d++){const b=d*f-a;for(let C=0;C<c;C++){const x=C*u-s;v.push(x,-b,0),T.push(0,0,1),p.push(C/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const C=b+c*d,x=b+c*(d+1),E=b+1+c*(d+1),M=b+1+c*d;g.push(C,x,M),g.push(x,E,M)}this.setIndex(g),this.setAttribute("position",new Bn(v,3)),this.setAttribute("normal",new Bn(T,3)),this.setAttribute("uv",new Bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Io(r))r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Io(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const r in n)e[r]=n[r]}return e}function Io(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Ru={clone:Wi,merge:en};var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(r.value);break;case"v2":this.uniforms[n].value=new st().fromArray(r.value);break;case"v3":this.uniforms[n].value=new q().fromArray(r.value);break;case"v4":this.uniforms[n].value=new It().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Du extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Iu extends dr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=La,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uu extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nu extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ps={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Uo(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Uo(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Uo(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Fu{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const g=c[u],v=c[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ou=new Fu;class qa{constructor(e){this.manager=e!==void 0?e:Ou,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li=new WeakMap;class Bu extends qa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ps.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Li.get(a);u===void 0&&(u=[],Li.set(a,u)),u.push({onLoad:t,onError:r})}return a}const o=cr("img");function l(){h(),t&&t(this);const u=Li.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onLoad&&g.onLoad(this)}Li.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),Ps.remove(`image:${e}`);const f=Li.get(this)||[];for(let g=0;g<f.length;g++){const v=f[g];v.onError&&v.onError(u)}Li.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ps.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class zl extends qa{constructor(e){super(e)}load(e,t,n,r){const s=new Ht,a=new Bu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Hl extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class zu extends Hl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ls=new Rt,No=new q,Fo=new q;class Hu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;No.setFromMatrixPosition(e.matrixWorld),t.position.copy(No),Fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fo),t.updateMatrixWorld(),Ls.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ls,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===lr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ls)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ir=new q,Ur=new mi,vn=new q;class kl extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ir,Ur,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Ur,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ir,Ur,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Ur,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new q,Oo=new st,Bo=new st;class dn extends kl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Oo,Bo),t.subVectors(Bo,Oo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ya extends kl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ku extends Hu{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gu extends Hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new ku}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Di=-90,Ii=1;class Vu extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Di,Ii,e,t);r.layers=this.layers,this.add(r);const s=new dn(Di,Ii,e,t);s.layers=this.layers,this.add(s);const a=new dn(Di,Ii,e,t);a.layers=this.layers,this.add(a);const o=new dn(Di,Ii,e,t);o.layers=this.layers,this.add(o);const l=new dn(Di,Ii,e,t);l.layers=this.layers,this.add(l);const c=new dn(Di,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Wu extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zo=new Rt;class Ho{constructor(e,t,n=0,r=1/0){this.ray=new Nl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zo),this}intersectObject(e,t=!0,n=[]){return wa(e,this,n,t),n.sort(ko),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)wa(e[r],this,n,t);return n.sort(ko),n}}function ko(i,e){return i.distance-e.distance}function wa(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)wa(s[a],e,t,!0)}}const Qa=class Qa{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Qa.prototype.isMatrix2=!0;let Go=Qa;function Vo(i,e,t,n){const r=Xu(n);switch(t){case Cl:return i*e;case Na:return i*e/r.components*r.byteLength;case Fa:return i*e/r.components*r.byteLength;case hi:return i*e*2/r.components*r.byteLength;case Oa:return i*e*2/r.components*r.byteLength;case Rl:return i*e*3/r.components*r.byteLength;case Qt:return i*e*4/r.components*r.byteLength;case Ba:return i*e*4/r.components*r.byteLength;case zr:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Js:case js:return Math.max(i,16)*Math.max(e,8)/4;case Zs:case Qs:return Math.max(i,8)*Math.max(e,8)/2;case ea:case ta:case ia:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case qr:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ma:case Sa:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ea:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yr:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xu(i){switch(i){case ln:case bl:return{byteLength:1,components:1};case ar:case Tl:case Hn:return{byteLength:2,components:1};case Ia:case Ua:return{byteLength:2,components:4};case wn:case Da:case _n:return{byteLength:4,components:1};case Al:case wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qu(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,v)=>g.start-v.start);let f=0;for(let g=1;g<u.length;g++){const v=u[f],T=u[g];T.start<=v.start+v.count+1?v.count=Math.max(v.count,T.start+T.count-v.start):(++f,u[f]=T)}u.length=f+1;for(let g=0,v=u.length;g<v;g++){const T=u[g];i.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ju=`#ifdef USE_AOMAP
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
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Af=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hf=`#ifdef USE_ENVMAP
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
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
#endif`,qf=`uniform sampler2D dfgLUT;
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
}`,Yf=`
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rd=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
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
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Id=`float getShadowMask() {
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
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kd=`uniform sampler2D t2D;
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eh=`#include <common>
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
}`,th=`#if DEPTH_PACKING == 3200
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
}`,nh=`#define DISTANCE
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
}`,ih=`#define DISTANCE
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
}`,rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ah=`uniform float scale;
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
}`,oh=`uniform vec3 diffuse;
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
}`,lh=`#include <common>
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
}`,ch=`uniform vec3 diffuse;
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
}`,uh=`#define LAMBERT
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
}`,fh=`#define LAMBERT
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
}`,dh=`#define MATCAP
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
}`,hh=`#define MATCAP
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
}`,ph=`#define NORMAL
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
}`,mh=`#define NORMAL
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
}`,gh=`#define PHONG
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
}`,_h=`#define PHONG
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
}`,xh=`#define STANDARD
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
}`,vh=`#define STANDARD
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
}`,Mh=`#define TOON
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
}`,Sh=`#define TOON
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
}`,yh=`uniform float size;
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
}`,Eh=`uniform vec3 diffuse;
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
}`,bh=`#include <common>
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
}`,Th=`uniform vec3 color;
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
}`,Ah=`uniform float rotation;
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
}`,wh=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Yu,alphahash_pars_fragment:$u,alphamap_fragment:Ku,alphamap_pars_fragment:Zu,alphatest_fragment:Ju,alphatest_pars_fragment:Qu,aomap_fragment:ju,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:rf,beginnormal_vertex:sf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:ff,clipping_planes_vertex:df,color_fragment:hf,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:xf,defaultnormal_vertex:vf,displacementmap_pars_vertex:Mf,displacementmap_vertex:Sf,emissivemap_fragment:yf,emissivemap_pars_fragment:Ef,colorspace_fragment:bf,colorspace_pars_fragment:Tf,envmap_fragment:Af,envmap_common_pars_fragment:wf,envmap_pars_fragment:Cf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Hf,envmap_vertex:Pf,fog_vertex:Lf,fog_pars_vertex:Df,fog_fragment:If,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:zf,lights_toon_fragment:kf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:$f,lights_fragment_end:Kf,lightprobes_pars_fragment:Zf,logdepthbuf_fragment:Jf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:ed,map_fragment:td,map_pars_fragment:nd,map_particle_fragment:id,map_particle_pars_fragment:rd,metalnessmap_fragment:sd,metalnessmap_pars_fragment:ad,morphinstance_vertex:od,morphcolor_vertex:ld,morphnormal_vertex:cd,morphtarget_pars_vertex:ud,morphtarget_vertex:fd,normal_fragment_begin:dd,normal_fragment_maps:hd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:gd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:Md,iridescence_pars_fragment:Sd,opaque_fragment:yd,packing:Ed,premultiplied_alpha_fragment:bd,project_vertex:Td,dithering_fragment:Ad,dithering_pars_fragment:wd,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Pd,shadowmap_pars_vertex:Ld,shadowmap_vertex:Dd,shadowmask_pars_fragment:Id,skinbase_vertex:Ud,skinning_pars_vertex:Nd,skinning_vertex:Fd,skinnormal_vertex:Od,specularmap_fragment:Bd,specularmap_pars_fragment:zd,tonemapping_fragment:Hd,tonemapping_pars_fragment:kd,transmission_fragment:Gd,transmission_pars_fragment:Vd,uv_pars_fragment:Wd,uv_pars_vertex:Xd,uv_vertex:qd,worldpos_vertex:Yd,background_vert:$d,background_frag:Kd,backgroundCube_vert:Zd,backgroundCube_frag:Jd,cube_vert:Qd,cube_frag:jd,depth_vert:eh,depth_frag:th,distance_vert:nh,distance_frag:ih,equirect_vert:rh,equirect_frag:sh,linedashed_vert:ah,linedashed_frag:oh,meshbasic_vert:lh,meshbasic_frag:ch,meshlambert_vert:uh,meshlambert_frag:fh,meshmatcap_vert:dh,meshmatcap_frag:hh,meshnormal_vert:ph,meshnormal_frag:mh,meshphong_vert:gh,meshphong_frag:_h,meshphysical_vert:xh,meshphysical_frag:vh,meshtoon_vert:Mh,meshtoon_frag:Sh,points_vert:yh,points_frag:Eh,shadow_vert:bh,shadow_frag:Th,sprite_vert:Ah,sprite_frag:wh},be={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Sn={basic:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:en([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:en([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new at(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:en([be.points,be.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:en([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:en([be.common,be.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:en([be.sprite,be.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:en([be.common,be.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:en([be.lights,be.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Sn.physical={uniforms:en([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Nr={r:0,b:0,g:0},Ch=new Rt,Vl=new Ze;Vl.set(-1,0,0,0,1,0,0,0,1);function Rh(i,e,t,n,r,s){const a=new at(0);let o=r===!0?0:1,l,c,h=null,u=0,f=null;function g(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){const x=b.backgroundBlurriness>0;C=e.get(C,x)}return C}function v(b){let C=!1;const x=g(b);x===null?p(a,o):x&&x.isColor&&(p(x,1),C=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(b,C){const x=g(C);x&&(x.isCubeTexture||x.mapping===Qr)?(c===void 0&&(c=new cn(new hr(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Wi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ch.makeRotationFromEuler(C.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vl),c.material.toneMapped=ct.getTransfer(x.colorSpace)!==Et,(h!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new cn(new Vi(2,2),new Cn({name:"BackgroundMaterial",uniforms:Wi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,C){b.getRGB(Nr,Bl(i)),t.buffers.color.setClear(Nr.r,Nr.g,Nr.b,C,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,C=1){a.set(b),o=C,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:v,addToRenderList:T,dispose:d}}function Ph(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(R,U,z,H,I){let G=!1;const N=u(R,H,z,U);s!==N&&(s=N,c(s.object)),G=g(R,H,z,I),G&&v(R,H,z,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(R,U,z,H),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,U,z,H){const I=H.wireframe===!0;let G=n[U.id];G===void 0&&(G={},n[U.id]=G);const N=R.isInstancedMesh===!0?R.id:0;let k=G[N];k===void 0&&(k={},G[N]=k);let Q=k[z.id];Q===void 0&&(Q={},k[z.id]=Q);let oe=Q[I];return oe===void 0&&(oe=f(l()),Q[I]=oe),oe}function f(R){const U=[],z=[],H=[];for(let I=0;I<t;I++)U[I]=0,z[I]=0,H[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:H,object:R,attributes:{},index:null}}function g(R,U,z,H){const I=s.attributes,G=U.attributes;let N=0;const k=z.getAttributes();for(const Q in k)if(k[Q].location>=0){const se=I[Q];let ue=G[Q];if(ue===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),se===void 0||se.attribute!==ue||ue&&se.data!==ue.data)return!0;N++}return s.attributesNum!==N||s.index!==H}function v(R,U,z,H){const I={},G=U.attributes;let N=0;const k=z.getAttributes();for(const Q in k)if(k[Q].location>=0){let se=G[Q];se===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const ue={};ue.attribute=se,se&&se.data&&(ue.data=se.data),I[Q]=ue,N++}s.attributes=I,s.attributesNum=N,s.index=H}function T(){const R=s.newAttributes;for(let U=0,z=R.length;U<z;U++)R[U]=0}function p(R){d(R,0)}function d(R,U){const z=s.newAttributes,H=s.enabledAttributes,I=s.attributeDivisors;z[R]=1,H[R]===0&&(i.enableVertexAttribArray(R),H[R]=1),I[R]!==U&&(i.vertexAttribDivisor(R,U),I[R]=U)}function b(){const R=s.newAttributes,U=s.enabledAttributes;for(let z=0,H=U.length;z<H;z++)U[z]!==R[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function C(R,U,z,H,I,G,N){N===!0?i.vertexAttribIPointer(R,U,z,I,G):i.vertexAttribPointer(R,U,z,H,I,G)}function x(R,U,z,H){T();const I=H.attributes,G=z.getAttributes(),N=U.defaultAttributeValues;for(const k in G){const Q=G[k];if(Q.location>=0){let oe=I[k];if(oe===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const se=oe.normalized,ue=oe.itemSize,We=e.get(oe);if(We===void 0)continue;const ut=We.buffer,Ve=We.type,te=We.bytesPerElement,le=Ve===i.INT||Ve===i.UNSIGNED_INT||oe.gpuType===Da;if(oe.isInterleavedBufferAttribute){const Z=oe.data,Fe=Z.stride,Ge=oe.offset;if(Z.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Q.locationSize;Ue++)d(Q.location+Ue,Z.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ue=0;Ue<Q.locationSize;Ue++)p(Q.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let Ue=0;Ue<Q.locationSize;Ue++)C(Q.location+Ue,ue/Q.locationSize,Ve,se,Fe*te,(Ge+ue/Q.locationSize*Ue)*te,le)}else{if(oe.isInstancedBufferAttribute){for(let Z=0;Z<Q.locationSize;Z++)d(Q.location+Z,oe.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Z=0;Z<Q.locationSize;Z++)p(Q.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let Z=0;Z<Q.locationSize;Z++)C(Q.location+Z,ue/Q.locationSize,Ve,se,ue*te,ue/Q.locationSize*Z*te,le)}}else if(N!==void 0){const se=N[k];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Q.location,se);break;case 3:i.vertexAttrib3fv(Q.location,se);break;case 4:i.vertexAttrib4fv(Q.location,se);break;default:i.vertexAttrib1fv(Q.location,se)}}}}b()}function E(){S();for(const R in n){const U=n[R];for(const z in U){const H=U[z];for(const I in H){const G=H[I];for(const N in G)h(G[N].object),delete G[N];delete H[I]}}delete n[R]}}function M(R){if(n[R.id]===void 0)return;const U=n[R.id];for(const z in U){const H=U[z];for(const I in H){const G=H[I];for(const N in G)h(G[N].object),delete G[N];delete H[I]}}delete n[R.id]}function w(R){for(const U in n){const z=n[U];for(const H in z){const I=z[H];if(I[R.id]===void 0)continue;const G=I[R.id];for(const N in G)h(G[N].object),delete G[N];delete I[R.id]}}}function m(R){for(const U in n){const z=n[U],H=R.isInstancedMesh===!0?R.id:0,I=z[H];if(I!==void 0){for(const G in I){const N=I[G];for(const k in N)h(N[k].object),delete N[k];delete I[G]}delete z[H],Object.keys(z).length===0&&delete n[U]}}}function S(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:m,releaseStatesOfProgram:w,initAttributes:T,enableAttribute:p,disableUnusedAttributes:b}}function Lh(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let g=0;g<h;g++)f+=c[g];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Dh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Qt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const m=w===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_n&&!m)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&($e("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:v,maxTextureSize:T,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:x,maxSamples:E,samples:M}}function Ih(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new oi,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const g=u.length!==0||f||n!==0||r;return r=f,n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,g){const v=u.clippingPlanes,T=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const b=s?0:n,C=b*4;let x=d.clippingState||null;l.value=x,x=h(v,f,C,g);for(let E=0;E!==C;++E)x[E]=t[E];d.clippingState=x,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,g,v){const T=u!==null?u.length:0;let p=null;if(T!==0){if(p=l.value,v!==!0||p===null){const d=g+T*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let C=0,x=g;C!==T;++C,x+=4)a.copy(u[C]).applyMatrix4(b,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,p}}const jn=4,Wo=[.125,.215,.35,.446,.526,.582],ui=20,Uh=256,ji=new Ya,Xo=new at;let Ds=null,Is=0,Us=0,Ns=!1;const Nh=new q;class qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Nh}=s;Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,Is,Us),this._renderer.xr.enabled=Ns,e.scissorTest=!1,Ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Hn,format:Qt,colorSpace:$r,depthBuffer:!1},r=Yo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fh(s)),this._blurMaterial=Bh(s,e,t),this._ggxMaterial=Oh(s,e,t)}return r}_compileMaterial(e){const t=new cn(new Rn,e);this._renderer.compile(t,ji)}_sceneToCubeUV(e,t,n,r,s){const l=new dn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,g=u.toneMapping;u.getClearColor(Xo),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new hr,new Zr({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,p=T.material;let d=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,d=!0):(p.color.copy(Xo),d=!0);for(let C=0;C<6;C++){const x=C%3;x===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[C],s.y,s.z)):x===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[C]));const E=this._cubeSize;Ui(r,x*E,C>2?E:0,E,E),u.setRenderTarget(r),d&&u.render(T,l),u.render(e,l)}u.toneMapping=g,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===di||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ui(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ji)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,g=u*f,{_lodMax:v}=this,T=this._sizeLods[n],p=3*T*(n>v-jn?n-v+jn:0),d=4*(this._cubeSize-T);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=v-t,Ui(s,p,d,3*T,2*T),r.setRenderTarget(s),r.render(o,ji),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,Ui(e,p,d,3*T,2*T),r.setRenderTarget(e),r.render(o,ji)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[r];u.material=c;const f=c.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ui-1),T=s/v,p=isFinite(s)?1+Math.floor(h*T):ui;p>ui&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const d=[];let b=0;for(let w=0;w<ui;++w){const m=w/T,S=Math.exp(-m*m/2);d.push(S),w===0?b+=S:w<p&&(b+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:C}=this;f.dTheta.value=v,f.mipInt.value=C-n;const x=this._sizeLods[r],E=3*x*(r>C-jn?r-C+jn:0),M=4*(this._cubeSize-x);Ui(t,E,M,3*x,2*x),l.setRenderTarget(t),l.render(u,ji)}}function Fh(i){const e=[],t=[],n=[];let r=i;const s=i-jn+1+Wo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-jn?l=Wo[a-i+jn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,v=6,T=3,p=2,d=1,b=new Float32Array(T*v*g),C=new Float32Array(p*v*g),x=new Float32Array(d*v*g);for(let M=0;M<g;M++){const w=M%3*2/3-1,m=M>2?0:-1,S=[w,m,0,w+2/3,m,0,w+2/3,m+1,0,w,m,0,w+2/3,m+1,0,w,m+1,0];b.set(S,T*v*M),C.set(f,p*v*M);const L=[M,M,M,M,M,M];x.set(L,d*v*M)}const E=new Rn;E.setAttribute("position",new rn(b,T)),E.setAttribute("uv",new rn(C,p)),E.setAttribute("faceIndex",new rn(x,d)),n.push(new cn(E,null)),r>jn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yo(i,e,t){const n=new An(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Oh(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jr(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Bh(i,e,t){const n=new Float32Array(ui),r=new q(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jr(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function $o(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ko(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function jr(){return`

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
	`}class Wl extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hr(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Fn});s.uniforms.tEquirect.value=t;const a=new cn(r,s),o=t.minFilter;return t.minFilter===En&&(t.minFilter=Wt),new Vu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function zh(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,g=!1){return f==null?null:g?a(f):s(f)}function s(f){if(f&&f.isTexture){const g=f.mapping;if(g===rs||g===ss)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const T=new Wl(v.height);return T.fromEquirectangularTexture(i,f),e.set(f,T),f.addEventListener("dispose",c),o(T.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const g=f.mapping,v=g===rs||g===ss,T=g===di||g===ki;if(v||T){let p=t.get(f);const d=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new qo(i)),p=v?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const b=f.image;return v&&b&&b.height>0||T&&b&&l(b)?(n===null&&(n=new qo(i)),p=v?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,g){return g===rs?f.mapping=di:g===ss&&(f.mapping=ki),f}function l(f){let g=0;const v=6;for(let T=0;T<v;T++)f[T]!==void 0&&g++;return g===v}function c(f){const g=f.target;g.removeEventListener("dispose",c);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function h(f){const g=f.target;g.removeEventListener("dispose",h);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Hh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Bi("WebGLRenderer: "+n+" extension not supported."),r}}}function kh(i,e,t,n){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER)}function c(u){const f=[],g=u.index,v=u.attributes.position;let T=0;if(v===void 0)return;if(g!==null){const b=g.array;T=g.version;for(let C=0,x=b.length;C<x;C+=3){const E=b[C+0],M=b[C+1],w=b[C+2];f.push(E,M,M,w,w,E)}}else{const b=v.array;T=v.version;for(let C=0,x=b.length/3-1;C<x;C+=3){const E=C+0,M=C+1,w=C+2;f.push(E,M,M,w,w,E)}}const p=new(v.count>=65535?Ul:Il)(f,1);p.version=T;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gh(i,e,t){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let T=0;for(let p=0;p<g;p++)T+=f[p];t.update(T,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wh(i,e,t){const n=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let L=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var g=L;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let x=0;v===!0&&(x=1),T===!0&&(x=2),p===!0&&(x=3);let E=o.attributes.position.count*x,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*M*4*u),m=new Ll(w,E,M,u);m.type=_n,m.needsUpdate=!0;const S=x*4;for(let R=0;R<u;R++){const U=d[R],z=b[R],H=C[R],I=E*M*4*R;for(let G=0;G<U.count;G++){const N=G*S;v===!0&&(r.fromBufferAttribute(U,G),w[I+N+0]=r.x,w[I+N+1]=r.y,w[I+N+2]=r.z,w[I+N+3]=0),T===!0&&(r.fromBufferAttribute(z,G),w[I+N+4]=r.x,w[I+N+5]=r.y,w[I+N+6]=r.z,w[I+N+7]=0),p===!0&&(r.fromBufferAttribute(H,G),w[I+N+8]=r.x,w[I+N+9]=r.y,w[I+N+10]=r.z,w[I+N+11]=H.itemSize===4?r.w:1)}}f={count:u,texture:m,size:new st(E,M)},n.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const T=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",T),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Xh(i,e,t,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const qh={[gl]:"LINEAR_TONE_MAPPING",[_l]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[vl]:"ACES_FILMIC_TONE_MAPPING",[Sl]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[Ml]:"CUSTOM_TONE_MAPPING"};function Yh(i,e,t,n,r,s){const a=new An(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Gi(e,t):void 0}),o=new An(e,t,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new Rn;l.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const c=new Du({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new cn(l,c),u=new Ya(-1,1,1,-1,0,1);let f=null,g=null,v=!1,T,p=null,d=[],b=!1;this.setSize=function(C,x){a.setSize(C,x),o.setSize(C,x);for(let E=0;E<d.length;E++){const M=d[E];M.setSize&&M.setSize(C,x)}},this.setEffects=function(C){d=C,b=d.length>0&&d[0].isRenderPass===!0;const x=a.width,E=a.height;for(let M=0;M<d.length;M++){const w=d[M];w.setSize&&w.setSize(x,E)}},this.begin=function(C,x){if(v||C.toneMapping===Tn&&d.length===0)return!1;if(p=x,x!==null){const E=x.width,M=x.height;(a.width!==E||a.height!==M)&&this.setSize(E,M)}return b===!1&&C.setRenderTarget(a),T=C.toneMapping,C.toneMapping=Tn,!0},this.hasRenderPass=function(){return b},this.end=function(C,x){C.toneMapping=T,v=!0;let E=a,M=o;for(let w=0;w<d.length;w++){const m=d[w];if(m.enabled!==!1&&(m.render(C,M,E,x),m.needsSwap!==!1)){const S=E;E=M,M=S}}if(f!==C.outputColorSpace||g!==C.toneMapping){f=C.outputColorSpace,g=C.toneMapping,c.defines={},ct.getTransfer(f)===Et&&(c.defines.SRGB_TRANSFER="");const w=qh[g];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,C.setRenderTarget(p),C.render(h,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Xl=new Ht,Ca=new Gi(1,1),ql=new Ll,Yl=new cu,$l=new Fl,Zo=[],Jo=[],Qo=new Float32Array(16),jo=new Float32Array(9),el=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Zo[r];if(s===void 0&&(s=new Float32Array(r),Zo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function es(i,e){let t=Jo[e];t===void 0&&(t=new Int32Array(e),Jo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $h(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function Zh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function Jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Qh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),Gt(t,n)}}function jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;jo.set(n),i.uniformMatrix3fv(this.addr,!1,jo),Gt(t,n)}}function ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Qo.set(n),i.uniformMatrix4fv(this.addr,!1,Qo),Gt(t,n)}}function tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ca.compareFunction=t.isReversedDepthBuffer()?Ha:za,s=Ca):s=Xl,t.setTexture2D(e||s,r)}function up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yl,r)}function fp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||$l,r)}function dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ql,r)}function hp(i){switch(i){case 5126:return $h;case 35664:return Kh;case 35665:return Zh;case 35666:return Jh;case 35674:return Qh;case 35675:return jh;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(i,e){i.uniform1fv(this.addr,e)}function mp(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function gp(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function _p(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function xp(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vp(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mp(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sp(i,e){i.uniform1iv(this.addr,e)}function yp(i,e){i.uniform2iv(this.addr,e)}function Ep(i,e){i.uniform3iv(this.addr,e)}function bp(i,e){i.uniform4iv(this.addr,e)}function Tp(i,e){i.uniform1uiv(this.addr,e)}function Ap(i,e){i.uniform2uiv(this.addr,e)}function wp(i,e){i.uniform3uiv(this.addr,e)}function Cp(i,e){i.uniform4uiv(this.addr,e)}function Rp(i,e,t){const n=this.cache,r=e.length,s=es(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ca:a=Xl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Pp(i,e,t){const n=this.cache,r=e.length,s=es(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yl,s[a])}function Lp(i,e,t){const n=this.cache,r=e.length,s=es(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||$l,s[a])}function Dp(i,e,t){const n=this.cache,r=e.length,s=es(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ql,s[a])}function Ip(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return xp;case 35675:return vp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return yp;case 35668:case 35672:return Ep;case 35669:case 35673:return bp;case 5125:return Tp;case 36294:return Ap;case 36295:return wp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hp(t.type)}}class Np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ip(t.type)}}class Fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Fs=/(\w+)(\])?(\[|\.)?/g;function tl(i,e){i.seq.push(e),i.map[e.id]=e}function Op(i,e,t){const n=i.name,r=n.length;for(Fs.lastIndex=0;;){const s=Fs.exec(n),a=Fs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tl(t,c===void 0?new Up(o,i,e):new Np(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Fp(o),tl(t,u)),t=u}}}class Vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Op(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function nl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bp=37297;let zp=0;function Hp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const il=new Ze;function kp(i){ct._getMatrix(il,ct.workingColorSpace,i);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Kr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Hp(i.getShaderSource(e),o)}else return s}function Gp(i,e){const t=kp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Vp={[gl]:"Linear",[_l]:"Reinhard",[xl]:"Cineon",[vl]:"ACESFilmic",[Sl]:"AgX",[yl]:"Neutral",[Ml]:"Custom"};function Wp(i,e){const t=Vp[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fr=new q;function Xp(){ct.getLuminanceCoefficients(Fr);const i=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Yp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $p(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ir(i){return i!==""}function sl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(Kp,Jp)}const Zp=new Map;function Jp(i,e){let t=nt[e];if(t===void 0){const n=Zp.get(e);if(n!==void 0)t=nt[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ra(t)}const Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(Qp,jp)}function jp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ll(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const em={[Br]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function tm(i){return em[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nm={[di]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function im(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":nm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const rm={[ki]:"ENVMAP_MODE_REFRACTION"};function sm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const am={[La]:"ENVMAP_BLENDING_MULTIPLY",[wc]:"ENVMAP_BLENDING_MIX",[Cc]:"ENVMAP_BLENDING_ADD"};function om(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":am[i.combine]||"ENVMAP_BLENDING_NONE"}function lm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tm(t),c=im(t),h=sm(t),u=om(t),f=lm(t),g=qp(t),v=Yp(s),T=r.createProgram();let p,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ir).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ir).join(`
`),d.length>0&&(d+=`
`)):(p=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),d=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),Xp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=Ra(a),a=sl(a,t),a=al(a,t),o=Ra(o),o=sl(o,t),o=al(o,t),a=ol(a),o=ol(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===co?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const C=b+p+a,x=b+d+o,E=nl(r,r.VERTEX_SHADER,C),M=nl(r,r.FRAGMENT_SHADER,x);r.attachShader(T,E),r.attachShader(T,M),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function w(R){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(T)||"",z=r.getShaderInfoLog(E)||"",H=r.getShaderInfoLog(M)||"",I=U.trim(),G=z.trim(),N=H.trim();let k=!0,Q=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,E,M);else{const oe=rl(r,E,"vertex"),se=rl(r,M,"fragment");dt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+oe+`
`+se)}else I!==""?$e("WebGLProgram: Program Info Log:",I):(G===""||N==="")&&(Q=!1);Q&&(R.diagnostics={runnable:k,programLog:I,vertexShader:{log:G,prefix:p},fragmentShader:{log:N,prefix:d}})}r.deleteShader(E),r.deleteShader(M),m=new Vr(r,T),S=$p(r,T)}let m;this.getUniforms=function(){return m===void 0&&w(this),m};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(T,Bp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=E,this.fragmentShader=M,this}let um=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dm(e),t.set(e,n)),n}}class dm{constructor(e){this.id=um++,this.code=e,this.usedTimes=0}}function hm(i){return i===hi||i===qr||i===Yr}function pm(i,e,t,n,r,s){const a=new Va,o=new fm,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return l.add(m),m===0?"uv":`uv${m}`}function T(m,S,L,R,U,z){const H=R.fog,I=U.geometry,G=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?R.environment:null,N=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,k=e.get(m.envMap||G,N),Q=k&&k.mapping===Qr?k.image.height:null,oe=g[m.type];m.precision!==null&&(f=n.getMaxPrecision(m.precision),f!==m.precision&&$e("WebGLProgram.getParameters:",m.precision,"not supported, using",f,"instead."));const se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ue=se!==void 0?se.length:0;let We=0;I.morphAttributes.position!==void 0&&(We=1),I.morphAttributes.normal!==void 0&&(We=2),I.morphAttributes.color!==void 0&&(We=3);let ut,Ve,te,le;if(oe){const Se=Sn[oe];ut=Se.vertexShader,Ve=Se.fragmentShader}else{ut=m.vertexShader,Ve=m.fragmentShader;const Se=o.getVertexShaderStage(m),Mt=o.getFragmentShaderStage(m);o.update(m,Se,Mt),te=Se.id,le=Mt.id}const Z=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),Ge=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,ht=!!m.map,qe=!!m.matcap,je=!!k,Ke=!!m.aoMap,et=!!m.lightMap,At=!!m.bumpMap&&m.wireframe===!1,bt=!!m.normalMap,Lt=!!m.displacementMap,xt=!!m.emissiveMap,lt=!!m.metalnessMap,vt=!!m.roughnessMap,B=m.anisotropy>0,Nt=m.clearcoat>0,rt=m.dispersion>0,P=m.iridescence>0,_=m.sheen>0,W=m.transmission>0,X=B&&!!m.anisotropyMap,J=Nt&&!!m.clearcoatMap,ce=Nt&&!!m.clearcoatNormalMap,me=Nt&&!!m.clearcoatRoughnessMap,ee=P&&!!m.iridescenceMap,ne=P&&!!m.iridescenceThicknessMap,he=_&&!!m.sheenColorMap,Le=_&&!!m.sheenRoughnessMap,_e=!!m.specularMap,ge=!!m.specularColorMap,Ne=!!m.specularIntensityMap,Be=W&&!!m.transmissionMap,Ye=W&&!!m.thicknessMap,F=!!m.gradientMap,pe=!!m.alphaMap,ie=m.alphaTest>0,xe=!!m.alphaHash,fe=!!m.extensions;let re=Tn;m.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(re=i.toneMapping);const Ce={shaderID:oe,shaderType:m.type,shaderName:m.name,vertexShader:ut,fragmentShader:Ve,defines:m.defines,customVertexShaderID:te,customFragmentShaderID:le,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&U.instanceColor!==null,instancingMorph:Ge&&U.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ht,matcap:qe,envMap:je,envMapMode:je&&k.mapping,envMapCubeUVHeight:Q,aoMap:Ke,lightMap:et,bumpMap:At,normalMap:bt,displacementMap:Lt,emissiveMap:xt,normalMapObjectSpace:bt&&m.normalMapType===Lc,normalMapTangentSpace:bt&&m.normalMapType===Aa,packedNormalMap:bt&&m.normalMapType===Aa&&hm(m.normalMap.format),metalnessMap:lt,roughnessMap:vt,anisotropy:B,anisotropyMap:X,clearcoat:Nt,clearcoatMap:J,clearcoatNormalMap:ce,clearcoatRoughnessMap:me,dispersion:rt,iridescence:P,iridescenceMap:ee,iridescenceThicknessMap:ne,sheen:_,sheenColorMap:he,sheenRoughnessMap:Le,specularMap:_e,specularColorMap:ge,specularIntensityMap:Ne,transmission:W,transmissionMap:Be,thicknessMap:Ye,gradientMap:F,opaque:m.transparent===!1&&m.blending===Oi&&m.alphaToCoverage===!1,alphaMap:pe,alphaTest:ie,alphaHash:xe,combine:m.combine,mapUv:ht&&v(m.map.channel),aoMapUv:Ke&&v(m.aoMap.channel),lightMapUv:et&&v(m.lightMap.channel),bumpMapUv:At&&v(m.bumpMap.channel),normalMapUv:bt&&v(m.normalMap.channel),displacementMapUv:Lt&&v(m.displacementMap.channel),emissiveMapUv:xt&&v(m.emissiveMap.channel),metalnessMapUv:lt&&v(m.metalnessMap.channel),roughnessMapUv:vt&&v(m.roughnessMap.channel),anisotropyMapUv:X&&v(m.anisotropyMap.channel),clearcoatMapUv:J&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(m.sheenRoughnessMap.channel),specularMapUv:_e&&v(m.specularMap.channel),specularColorMapUv:ge&&v(m.specularColorMap.channel),specularIntensityMapUv:Ne&&v(m.specularIntensityMap.channel),transmissionMapUv:Be&&v(m.transmissionMap.channel),thicknessMapUv:Ye&&v(m.thicknessMap.channel),alphaMapUv:pe&&v(m.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(bt||B),vertexNormals:!!I.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(ht||pe),fog:!!H,useFog:m.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||I.attributes.normal===void 0&&bt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Fe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:We,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:ht&&m.map.isVideoTexture===!0&&ct.getTransfer(m.map.colorSpace)===Et,decodeVideoTextureEmissive:xt&&m.emissiveMap.isVideoTexture===!0&&ct.getTransfer(m.emissiveMap.colorSpace)===Et,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===yn,flipSided:m.side===nn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:fe&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&m.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function p(m){const S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(const L in m.defines)S.push(L),S.push(m.defines[L]);return m.isRawShaderMaterial===!1&&(d(S,m),b(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function d(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapCubeUVHeight),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.morphAttributeCount),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function b(m,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function C(m){const S=g[m.type];let L;if(S){const R=Sn[S];L=Ru.clone(R.uniforms)}else L=m.uniforms;return L}function x(m,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new cm(i,S,m,r),c.push(L),h.set(S,L)),L}function E(m){if(--m.usedTimes===0){const S=c.indexOf(m);c[S]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function M(m){o.remove(m)}function w(){o.dispose()}return{getParameters:T,getProgramCacheKey:p,getUniforms:C,acquireProgram:x,releaseProgram:E,releaseShaderCache:M,programs:c,dispose:w}}function mm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function gm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ul(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function o(f,g,v,T,p,d){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:g,material:v,materialVariant:a(f),groupOrder:T,renderOrder:f.renderOrder,z:p,group:d},i[e]=b):(b.id=f.id,b.object=f,b.geometry=g,b.material=v,b.materialVariant=a(f),b.groupOrder=T,b.renderOrder=f.renderOrder,b.z=p,b.group=d),e++,b}function l(f,g,v,T,p,d){const b=o(f,g,v,T,p,d);v.transmission>0?n.push(b):v.transparent===!0?r.push(b):t.push(b)}function c(f,g,v,T,p,d){const b=o(f,g,v,T,p,d);v.transmission>0?n.unshift(b):v.transparent===!0?r.unshift(b):t.unshift(b)}function h(f,g,v){t.length>1&&t.sort(f||gm),n.length>1&&n.sort(g||cl),r.length>1&&r.sort(g||cl),v&&(t.reverse(),n.reverse(),r.reverse())}function u(){for(let f=e,g=i.length;f<g;f++){const v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function _m(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ul,i.set(n,[a])):r>=s.length?(a=new ul,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function xm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new at};break;case"SpotLight":t={position:new q,direction:new q,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function vm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Mm=0;function Sm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ym(i){const e=new xm,t=vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,s=new Rt,a=new Rt;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let g=0,v=0,T=0,p=0,d=0,b=0,C=0,x=0,E=0,M=0,w=0;c.sort(Sm);for(let S=0,L=c.length;S<L;S++){const R=c[S],U=R.color,z=R.intensity,H=R.distance;let I=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===hi?I=R.shadow.map.texture:I=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*z,u+=U.g*z,f+=U.b*z;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],z);w++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const N=R.shadow,k=t.get(R);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=I,n.directionalShadowMatrix[g]=R.shadow.matrix,b++}n.directional[g]=G,g++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[T]=G;const N=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,N.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[T]=N.matrix,R.castShadow){const k=t.get(R);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,n.spotShadow[T]=k,n.spotShadowMap[T]=I,x++}T++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=G,p++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const N=R.shadow,k=t.get(R);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,k.shadowCameraNear=N.camera.near,k.shadowCameraFar=N.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=I,n.pointShadowMatrix[v]=R.shadow.matrix,C++}n.point[v]=G,v++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(z),G.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[d]=G,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const m=n.hash;(m.directionalLength!==g||m.pointLength!==v||m.spotLength!==T||m.rectAreaLength!==p||m.hemiLength!==d||m.numDirectionalShadows!==b||m.numPointShadows!==C||m.numSpotShadows!==x||m.numSpotMaps!==E||m.numLightProbes!==w)&&(n.directional.length=g,n.spot.length=T,n.rectArea.length=p,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=x+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,m.directionalLength=g,m.pointLength=v,m.spotLength=T,m.rectAreaLength=p,m.hemiLength=d,m.numDirectionalShadows=b,m.numPointShadows=C,m.numSpotShadows=x,m.numSpotMaps=E,m.numLightProbes=w,n.version=Mm++)}function l(c,h){let u=0,f=0,g=0,v=0,T=0;const p=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const C=c[d];if(C.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),u++}else if(C.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),g++}else if(C.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(C.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(C.width*.5,0,0),x.halfHeight.set(0,C.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(C.matrixWorld),x.position.applyMatrix4(p),f++}else if(C.isHemisphereLight){const x=n.hemi[T];x.direction.setFromMatrixPosition(C.matrixWorld),x.direction.transformDirection(p),T++}}}return{setup:o,setupView:l,state:n}}function fl(i){const e=new ym(i),t=[],n=[],r=[];function s(f){u.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Em(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new fl(i),e.set(r,[o])):s>=a.length?(o=new fl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
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
}`,Am=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],wm=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],dl=new Rt,er=new q,Os=new q;function Cm(i,e,t){let n=new Xa;const r=new st,s=new st,a=new It,o=new Uu,l=new Nu,c={},h=t.maxTextureSize,u={[zn]:nn,[nn]:zn,[yn]:yn},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:bm,fragmentShader:Tm}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const v=new Rn;v.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new cn(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Br;let d=this.type;this.render=function(M,w,m){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===lc&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Br);const S=i.getRenderTarget(),L=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Fn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=d!==this.type;z&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(I=>I.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,I=M.length;H<I;H++){const G=M[H],N=G.shadow;if(N===void 0){$e("WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const k=N.getFrameExtents();r.multiply(k),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,N.mapSize.y=s.y));const Q=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Q,N.map===null||z===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===tr){if(G.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new An(r.x,r.y,{format:hi,type:Hn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),N.map.texture.name=G.name+".shadowMap",N.map.depthTexture=new Gi(r.x,r.y,_n),N.map.depthTexture.name=G.name+".shadowMapDepth",N.map.depthTexture.format=kn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Bt,N.map.depthTexture.magFilter=Bt}else G.isPointLight?(N.map=new Wl(r.x),N.map.depthTexture=new wu(r.x,wn)):(N.map=new An(r.x,r.y),N.map.depthTexture=new Gi(r.x,r.y,wn)),N.map.depthTexture.name=G.name+".shadowMap",N.map.depthTexture.format=kn,this.type===Br?(N.map.depthTexture.compareFunction=Q?Ha:za,N.map.depthTexture.minFilter=Wt,N.map.depthTexture.magFilter=Wt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Bt,N.map.depthTexture.magFilter=Bt);N.camera.updateProjectionMatrix()}const oe=N.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<oe;se++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,se),i.clear();else{se===0&&(i.setRenderTarget(N.map),i.clear());const ue=N.getViewport(se);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),U.viewport(a)}if(G.isPointLight){const ue=N.camera,We=N.matrix,ut=G.distance||ue.far;ut!==ue.far&&(ue.far=ut,ue.updateProjectionMatrix()),er.setFromMatrixPosition(G.matrixWorld),ue.position.copy(er),Os.copy(ue.position),Os.add(Am[se]),ue.up.copy(wm[se]),ue.lookAt(Os),ue.updateMatrixWorld(),We.makeTranslation(-er.x,-er.y,-er.z),dl.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),N._frustum.setFromProjectionMatrix(dl,ue.coordinateSystem,ue.reversedDepth)}else N.updateMatrices(G);n=N.getFrustum(),x(w,m,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===tr&&b(N,m),N.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(S,L,R)};function b(M,w){const m=e.update(T);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new An(r.x,r.y,{format:hi,type:Hn})),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,m,f,T,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,m,g,T,null)}function C(M,w,m,S){let L=null;const R=m.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)L=R;else if(L=m.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=L.uuid,z=w.uuid;let H=c[U];H===void 0&&(H={},c[U]=H);let I=H[z];I===void 0&&(I=L.clone(),H[z]=I,w.addEventListener("dispose",E)),L=I}if(L.visible=w.visible,L.wireframe=w.wireframe,S===tr?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:u[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,m.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=i.properties.get(L);U.light=m}return L}function x(M,w,m,S,L){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===tr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,M.matrixWorld);const z=e.update(M),H=M.material;if(Array.isArray(H)){const I=z.groups;for(let G=0,N=I.length;G<N;G++){const k=I[G],Q=H[k.materialIndex];if(Q&&Q.visible){const oe=C(M,Q,S,L);M.onBeforeShadow(i,M,w,m,z,oe,k),i.renderBufferDirect(m,null,z,oe,M,k),M.onAfterShadow(i,M,w,m,z,oe,k)}}}else if(H.visible){const I=C(M,H,S,L);M.onBeforeShadow(i,M,w,m,z,I,null),i.renderBufferDirect(m,null,z,I,M,null),M.onAfterShadow(i,M,w,m,z,I,null)}}const U=M.children;for(let z=0,H=U.length;z<H;z++)x(U[z],w,m,S,L)}function E(M){M.target.removeEventListener("dispose",E);for(const m in c){const S=c[m],L=M.target.uuid;L in S&&(S[L].dispose(),delete S[L])}}}function Rm(i,e){function t(){let F=!1;const pe=new It;let ie=null;const xe=new It(0,0,0,0);return{setMask:function(fe){ie!==fe&&!F&&(i.colorMask(fe,fe,fe,fe),ie=fe)},setLocked:function(fe){F=fe},setClear:function(fe,re,Ce,Se,Mt){Mt===!0&&(fe*=Se,re*=Se,Ce*=Se),pe.set(fe,re,Ce,Se),xe.equals(pe)===!1&&(i.clearColor(fe,re,Ce,Se),xe.copy(pe))},reset:function(){F=!1,ie=null,xe.set(-1,0,0,0)}}}function n(){let F=!1,pe=!1,ie=null,xe=null,fe=null;return{setReversed:function(re){if(pe!==re){const Ce=e.get("EXT_clip_control");re?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),pe=re;const Se=fe;fe=null,this.setClear(Se)}},getReversed:function(){return pe},setTest:function(re){re?Z(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(re){ie!==re&&!F&&(i.depthMask(re),ie=re)},setFunc:function(re){if(pe&&(re=kc[re]),xe!==re){switch(re){case Vs:i.depthFunc(i.NEVER);break;case Ws:i.depthFunc(i.ALWAYS);break;case Xs:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case qs:i.depthFunc(i.EQUAL);break;case Ys:i.depthFunc(i.GEQUAL);break;case $s:i.depthFunc(i.GREATER);break;case Ks:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=re}},setLocked:function(re){F=re},setClear:function(re){fe!==re&&(fe=re,pe&&(re=1-re),i.clearDepth(re))},reset:function(){F=!1,ie=null,xe=null,fe=null,pe=!1}}}function r(){let F=!1,pe=null,ie=null,xe=null,fe=null,re=null,Ce=null,Se=null,Mt=null;return{setTest:function(_t){F||(_t?Z(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(_t){pe!==_t&&!F&&(i.stencilMask(_t),pe=_t)},setFunc:function(_t,Xt,qt){(ie!==_t||xe!==Xt||fe!==qt)&&(i.stencilFunc(_t,Xt,qt),ie=_t,xe=Xt,fe=qt)},setOp:function(_t,Xt,qt){(re!==_t||Ce!==Xt||Se!==qt)&&(i.stencilOp(_t,Xt,qt),re=_t,Ce=Xt,Se=qt)},setLocked:function(_t){F=_t},setClear:function(_t){Mt!==_t&&(i.clearStencil(_t),Mt=_t)},reset:function(){F=!1,pe=null,ie=null,xe=null,fe=null,re=null,Ce=null,Se=null,Mt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f={},g=new WeakMap,v=[],T=null,p=!1,d=null,b=null,C=null,x=null,E=null,M=null,w=null,m=new at(0,0,0),S=0,L=!1,R=null,U=null,z=null,H=null,I=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),N=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),N=k>=2);let oe=null,se={};const ue=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),ut=new It().fromArray(ue),Ve=new It().fromArray(We);function te(F,pe,ie,xe){const fe=new Uint8Array(4),re=i.createTexture();i.bindTexture(F,re),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<ie;Ce++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(pe+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return re}const le={};le[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Hi),At(!1),bt(io),Z(i.CULL_FACE),Ke(Fn);function Z(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Fe(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ge(F,pe){return f[F]!==pe?(i.bindFramebuffer(F,pe),f[F]=pe,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ue(F,pe){let ie=v,xe=!1;if(F){ie=g.get(pe),ie===void 0&&(ie=[],g.set(pe,ie));const fe=F.textures;if(ie.length!==fe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ce=fe.length;re<Ce;re++)ie[re]=i.COLOR_ATTACHMENT0+re;ie.length=fe.length,xe=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ie)}function ht(F){return T!==F?(i.useProgram(F),T=F,!0):!1}const qe={[li]:i.FUNC_ADD,[uc]:i.FUNC_SUBTRACT,[fc]:i.FUNC_REVERSE_SUBTRACT};qe[dc]=i.MIN,qe[hc]=i.MAX;const je={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[ks]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[xc]:i.DST_ALPHA,[_c]:i.ONE_MINUS_SRC_COLOR,[Gs]:i.ONE_MINUS_SRC_ALPHA,[Sc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[Ac]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(F,pe,ie,xe,fe,re,Ce,Se,Mt,_t){if(F===Fn){p===!0&&(Fe(i.BLEND),p=!1);return}if(p===!1&&(Z(i.BLEND),p=!0),F!==cc){if(F!==d||_t!==L){if((b!==li||E!==li)&&(i.blendEquation(i.FUNC_ADD),b=li,E=li),_t)switch(F){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ro:i.blendFunc(i.ONE,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ao:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",F);break}else switch(F){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case so:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ao:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",F);break}C=null,x=null,M=null,w=null,m.set(0,0,0),S=0,d=F,L=_t}return}fe=fe||pe,re=re||ie,Ce=Ce||xe,(pe!==b||fe!==E)&&(i.blendEquationSeparate(qe[pe],qe[fe]),b=pe,E=fe),(ie!==C||xe!==x||re!==M||Ce!==w)&&(i.blendFuncSeparate(je[ie],je[xe],je[re],je[Ce]),C=ie,x=xe,M=re,w=Ce),(Se.equals(m)===!1||Mt!==S)&&(i.blendColor(Se.r,Se.g,Se.b,Mt),m.copy(Se),S=Mt),d=F,L=!1}function et(F,pe){F.side===yn?Fe(i.CULL_FACE):Z(i.CULL_FACE);let ie=F.side===nn;pe&&(ie=!ie),At(ie),F.blending===Oi&&F.transparent===!1?Ke(Fn):Ke(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const xe=F.stencilWrite;o.setTest(xe),xe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),xt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(F){R!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),R=F)}function bt(F){F!==ac?(Z(i.CULL_FACE),F!==U&&(F===io?i.cullFace(i.BACK):F===oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),U=F}function Lt(F){F!==z&&(N&&i.lineWidth(F),z=F)}function xt(F,pe,ie){F?(Z(i.POLYGON_OFFSET_FILL),(H!==pe||I!==ie)&&(H=pe,I=ie,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,ie))):Fe(i.POLYGON_OFFSET_FILL)}function lt(F){F?Z(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function vt(F){F===void 0&&(F=i.TEXTURE0+G-1),oe!==F&&(i.activeTexture(F),oe=F)}function B(F,pe,ie){ie===void 0&&(oe===null?ie=i.TEXTURE0+G-1:ie=oe);let xe=se[ie];xe===void 0&&(xe={type:void 0,texture:void 0},se[ie]=xe),(xe.type!==F||xe.texture!==pe)&&(oe!==ie&&(i.activeTexture(ie),oe=ie),i.bindTexture(F,pe||le[F]),xe.type=F,xe.texture=pe)}function Nt(){const F=se[oe];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(F){dt("WebGLState:",F)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(F){dt("WebGLState:",F)}}function _(){try{i.texSubImage2D(...arguments)}catch(F){dt("WebGLState:",F)}}function W(){try{i.texSubImage3D(...arguments)}catch(F){dt("WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){dt("WebGLState:",F)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(F){dt("WebGLState:",F)}}function ce(){try{i.texStorage2D(...arguments)}catch(F){dt("WebGLState:",F)}}function me(){try{i.texStorage3D(...arguments)}catch(F){dt("WebGLState:",F)}}function ee(){try{i.texImage2D(...arguments)}catch(F){dt("WebGLState:",F)}}function ne(){try{i.texImage3D(...arguments)}catch(F){dt("WebGLState:",F)}}function he(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Le(F,pe){u[F]!==pe&&(i.pixelStorei(F,pe),u[F]=pe)}function _e(F){ut.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ut.copy(F))}function ge(F){Ve.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ve.copy(F))}function Ne(F,pe){let ie=c.get(pe);ie===void 0&&(ie=new WeakMap,c.set(pe,ie));let xe=ie.get(F);xe===void 0&&(xe=i.getUniformBlockIndex(pe,F.name),ie.set(F,xe))}function Be(F,pe){const xe=c.get(pe).get(F);l.get(pe)!==xe&&(i.uniformBlockBinding(pe,xe,F.__bindingPointIndex),l.set(pe,xe))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},oe=null,se={},f={},g=new WeakMap,v=[],T=null,p=!1,d=null,b=null,C=null,x=null,E=null,M=null,w=null,m=new at(0,0,0),S=0,L=!1,R=null,U=null,z=null,H=null,I=null,ut.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:Fe,bindFramebuffer:Ge,drawBuffers:Ue,useProgram:ht,setBlending:Ke,setMaterial:et,setFlipSided:At,setCullFace:bt,setLineWidth:Lt,setPolygonOffset:xt,setScissorTest:lt,activeTexture:vt,bindTexture:B,unbindTexture:Nt,compressedTexImage2D:rt,compressedTexImage3D:P,texImage2D:ee,texImage3D:ne,pixelStorei:Le,getParameter:he,updateUBOMapping:Ne,uniformBlockBinding:Be,texStorage2D:ce,texStorage3D:me,texSubImage2D:_,texSubImage3D:W,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:_e,viewport:ge,reset:Ye}}function Pm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u=new Set;let f;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,_){return v?new OffscreenCanvas(P,_):cr("canvas")}function p(P,_,W){let X=1;const J=rt(P);if((J.width>W||J.height>W)&&(X=W/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ce=Math.floor(X*J.width),me=Math.floor(X*J.height);f===void 0&&(f=T(ce,me));const ee=_?T(ce,me):f;return ee.width=ce,ee.height=me,ee.getContext("2d").drawImage(P,0,0,ce,me),$e("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ce+"x"+me+")."),ee}else return"data"in P&&$e("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function d(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,_,W,X,J,ce=!1){if(P!==null){if(i[P]!==void 0)return i[P];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me;X&&(me=e.get("EXT_texture_norm16"),me||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===i.RED&&(W===i.FLOAT&&(ee=i.R32F),W===i.HALF_FLOAT&&(ee=i.R16F),W===i.UNSIGNED_BYTE&&(ee=i.R8),W===i.UNSIGNED_SHORT&&me&&(ee=me.R16_EXT),W===i.SHORT&&me&&(ee=me.R16_SNORM_EXT)),_===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.R8UI),W===i.UNSIGNED_SHORT&&(ee=i.R16UI),W===i.UNSIGNED_INT&&(ee=i.R32UI),W===i.BYTE&&(ee=i.R8I),W===i.SHORT&&(ee=i.R16I),W===i.INT&&(ee=i.R32I)),_===i.RG&&(W===i.FLOAT&&(ee=i.RG32F),W===i.HALF_FLOAT&&(ee=i.RG16F),W===i.UNSIGNED_BYTE&&(ee=i.RG8),W===i.UNSIGNED_SHORT&&me&&(ee=me.RG16_EXT),W===i.SHORT&&me&&(ee=me.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RG8UI),W===i.UNSIGNED_SHORT&&(ee=i.RG16UI),W===i.UNSIGNED_INT&&(ee=i.RG32UI),W===i.BYTE&&(ee=i.RG8I),W===i.SHORT&&(ee=i.RG16I),W===i.INT&&(ee=i.RG32I)),_===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),W===i.UNSIGNED_INT&&(ee=i.RGB32UI),W===i.BYTE&&(ee=i.RGB8I),W===i.SHORT&&(ee=i.RGB16I),W===i.INT&&(ee=i.RGB32I)),_===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),W===i.UNSIGNED_INT&&(ee=i.RGBA32UI),W===i.BYTE&&(ee=i.RGBA8I),W===i.SHORT&&(ee=i.RGBA16I),W===i.INT&&(ee=i.RGBA32I)),_===i.RGB&&(W===i.UNSIGNED_SHORT&&me&&(ee=me.RGB16_EXT),W===i.SHORT&&me&&(ee=me.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),_===i.RGBA){const ne=ce?Kr:ct.getTransfer(J);W===i.FLOAT&&(ee=i.RGBA32F),W===i.HALF_FLOAT&&(ee=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ee=ne===Et?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&me&&(ee=me.RGBA16_EXT),W===i.SHORT&&me&&(ee=me.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(P,_){let W;return P?_===null||_===wn||_===or?W=i.DEPTH24_STENCIL8:_===_n?W=i.DEPTH32F_STENCIL8:_===ar&&(W=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wn||_===or?W=i.DEPTH_COMPONENT24:_===_n?W=i.DEPTH_COMPONENT32F:_===ar&&(W=i.DEPTH_COMPONENT16),W}function M(P,_){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Bt&&P.minFilter!==Wt?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function w(P){const _=P.target;_.removeEventListener("dispose",w),S(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function m(P){const _=P.target;_.removeEventListener("dispose",m),R(_)}function S(P){const _=n.get(P);if(_.__webglInit===void 0)return;const W=P.source,X=g.get(W);if(X){const J=X[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(P),Object.keys(X).length===0&&g.delete(W)}n.remove(P)}function L(P){const _=n.get(P);i.deleteTexture(_.__webglTexture);const W=P.source,X=g.get(W);delete X[_.__cacheKey],a.memory.textures--}function R(P){const _=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let J=0;J<_.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[X][J]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const W=P.textures;for(let X=0,J=W.length;X<J;X++){const ce=n.get(W[X]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(W[X])}n.remove(P)}let U=0;function z(){U=0}function H(){return U}function I(P){U=P}function G(){const P=U;return P>=r.maxTextures&&$e("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),U+=1,P}function N(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function k(P,_){const W=n.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const X=P.image;if(X===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(W,P,_);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+_)}function Q(P,_){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Fe(W,P,_);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+_)}function oe(P,_){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Fe(W,P,_);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+_)}function se(P,_){const W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Ge(W,P,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+_)}const ue={[Wr]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[Xr]:i.MIRRORED_REPEAT},We={[Bt]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[as]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},ut={[Dc]:i.NEVER,[Oc]:i.ALWAYS,[Ic]:i.LESS,[za]:i.LEQUAL,[Uc]:i.EQUAL,[Ha]:i.GEQUAL,[Nc]:i.GREATER,[Fc]:i.NOTEQUAL};function Ve(P,_){if(_.type===_n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Wt||_.magFilter===as||_.magFilter===pr||_.magFilter===En||_.minFilter===Wt||_.minFilter===as||_.minFilter===pr||_.minFilter===En)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ue[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ue[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ue[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,We[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,We[_.minFilter]),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ut[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bt||_.minFilter!==pr&&_.minFilter!==En||_.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(P,_){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",w));const X=_.source;let J=g.get(X);J===void 0&&(J={},g.set(X,J));const ce=N(_);if(ce!==P.__cacheKey){J[ce]===void 0&&(J[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),J[ce].usedTimes++;const me=J[P.__cacheKey];me!==void 0&&(J[P.__cacheKey].usedTimes--,me.usedTimes===0&&L(_)),P.__cacheKey=ce,P.__webglTexture=J[ce].texture}return W}function le(P,_,W){return Math.floor(Math.floor(P/W)/_)}function Z(P,_,W,X){const ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,W,X,_.data);else{ce.sort((Le,_e)=>Le.start-_e.start);let me=0;for(let Le=1;Le<ce.length;Le++){const _e=ce[me],ge=ce[Le],Ne=_e.start+_e.count,Be=le(ge.start,_.width,4),Ye=le(_e.start,_.width,4);ge.start<=Ne+1&&Be===Ye&&le(ge.start+ge.count-1,_.width,4)===Be?_e.count=Math.max(_e.count,ge.start+ge.count-_e.start):(++me,ce[me]=ge)}ce.length=me+1;const ee=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Le=0,_e=ce.length;Le<_e;Le++){const ge=ce[Le],Ne=Math.floor(ge.start/4),Be=Math.ceil(ge.count/4),Ye=Ne%_.width,F=Math.floor(Ne/_.width),pe=Be,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ye,F,pe,ie,W,X,_.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function Fe(P,_,W){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const J=te(P,_),ce=_.source;t.bindTexture(X,P.__webglTexture,i.TEXTURE0+W);const me=n.get(ce);if(ce.version!==me.__version||J===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ie=ct.getPrimaries(ct.workingColorSpace),xe=_.colorSpace===Qn?null:ct.getPrimaries(_.colorSpace),fe=_.colorSpace===Qn||ie===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ne=p(_.image,!1,r.maxTextureSize);ne=Nt(_,ne);const he=s.convert(_.format,_.colorSpace),Le=s.convert(_.type);let _e=x(_.internalFormat,he,Le,_.normalized,_.colorSpace,_.isVideoTexture);Ve(X,_);let ge;const Ne=_.mipmaps,Be=_.isVideoTexture!==!0,Ye=me.__version===void 0||J===!0,F=ce.dataReady,pe=M(_,ne);if(_.isDepthTexture)_e=E(_.format===fi,_.type),Ye&&(Be?t.texStorage2D(i.TEXTURE_2D,1,_e,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,_e,ne.width,ne.height,0,he,Le,null));else if(_.isDataTexture)if(Ne.length>0){Be&&Ye&&t.texStorage2D(i.TEXTURE_2D,pe,_e,Ne[0].width,Ne[0].height);for(let ie=0,xe=Ne.length;ie<xe;ie++)ge=Ne[ie],Be?F&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ge.width,ge.height,he,Le,ge.data):t.texImage2D(i.TEXTURE_2D,ie,_e,ge.width,ge.height,0,he,Le,ge.data);_.generateMipmaps=!1}else Be?(Ye&&t.texStorage2D(i.TEXTURE_2D,pe,_e,ne.width,ne.height),F&&Z(_,ne,he,Le)):t.texImage2D(i.TEXTURE_2D,0,_e,ne.width,ne.height,0,he,Le,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,_e,Ne[0].width,Ne[0].height,ne.depth);for(let ie=0,xe=Ne.length;ie<xe;ie++)if(ge=Ne[ie],_.format!==Qt)if(he!==null)if(Be){if(F)if(_.layerUpdates.size>0){const fe=Vo(ge.width,ge.height,_.format,_.type);for(const re of _.layerUpdates){const Ce=ge.data.subarray(re*fe/ge.data.BYTES_PER_ELEMENT,(re+1)*fe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,re,ge.width,ge.height,1,he,Ce)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,ne.depth,he,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,_e,ge.width,ge.height,ne.depth,0,ge.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,ne.depth,he,Le,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,_e,ge.width,ge.height,ne.depth,0,he,Le,ge.data)}else{Be&&Ye&&t.texStorage2D(i.TEXTURE_2D,pe,_e,Ne[0].width,Ne[0].height);for(let ie=0,xe=Ne.length;ie<xe;ie++)ge=Ne[ie],_.format!==Qt?he!==null?Be?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ge.width,ge.height,he,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,_e,ge.width,ge.height,0,ge.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ge.width,ge.height,he,Le,ge.data):t.texImage2D(i.TEXTURE_2D,ie,_e,ge.width,ge.height,0,he,Le,ge.data)}else if(_.isDataArrayTexture)if(Be){if(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,_e,ne.width,ne.height,ne.depth),F)if(_.layerUpdates.size>0){const ie=Vo(ne.width,ne.height,_.format,_.type);for(const xe of _.layerUpdates){const fe=ne.data.subarray(xe*ie/ne.data.BYTES_PER_ELEMENT,(xe+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ne.width,ne.height,1,he,Le,fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,Le,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,ne.width,ne.height,ne.depth,0,he,Le,ne.data);else if(_.isData3DTexture)Be?(Ye&&t.texStorage3D(i.TEXTURE_3D,pe,_e,ne.width,ne.height,ne.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,Le,ne.data)):t.texImage3D(i.TEXTURE_3D,0,_e,ne.width,ne.height,ne.depth,0,he,Le,ne.data);else if(_.isFramebufferTexture){if(Ye)if(Be)t.texStorage2D(i.TEXTURE_2D,pe,_e,ne.width,ne.height);else{let ie=ne.width,xe=ne.height;for(let fe=0;fe<pe;fe++)t.texImage2D(i.TEXTURE_2D,fe,_e,ie,xe,0,he,Le,null),ie>>=1,xe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ne.parentNode!==ie){ie.appendChild(ne),u.add(_),ie.onpaint=xe=>{const fe=xe.changedElements;for(const re of u)fe.includes(re.image)&&(re.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{const fe=i.RGBA,re=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,re,Ce,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Be&&Ye){const ie=rt(Ne[0]);t.texStorage2D(i.TEXTURE_2D,pe,_e,ie.width,ie.height)}for(let ie=0,xe=Ne.length;ie<xe;ie++)ge=Ne[ie],Be?F&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,he,Le,ge):t.texImage2D(i.TEXTURE_2D,ie,_e,he,Le,ge);_.generateMipmaps=!1}else if(Be){if(Ye){const ie=rt(ne);t.texStorage2D(i.TEXTURE_2D,pe,_e,ie.width,ie.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Le,ne)}else t.texImage2D(i.TEXTURE_2D,0,_e,he,Le,ne);d(_)&&b(X),me.__version=ce.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Ge(P,_,W){if(_.image.length!==6)return;const X=te(P,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const ce=n.get(J);if(J.version!==ce.__version||X===!0){t.activeTexture(i.TEXTURE0+W);const me=ct.getPrimaries(ct.workingColorSpace),ee=_.colorSpace===Qn?null:ct.getPrimaries(_.colorSpace),ne=_.colorSpace===Qn||me===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,Le=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let re=0;re<6;re++)!he&&!Le?_e[re]=p(_.image[re],!0,r.maxCubemapSize):_e[re]=Le?_.image[re].image:_.image[re],_e[re]=Nt(_,_e[re]);const ge=_e[0],Ne=s.convert(_.format,_.colorSpace),Be=s.convert(_.type),Ye=x(_.internalFormat,Ne,Be,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,pe=ce.__version===void 0||X===!0,ie=J.dataReady;let xe=M(_,ge);Ve(i.TEXTURE_CUBE_MAP,_);let fe;if(he){F&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ye,ge.width,ge.height);for(let re=0;re<6;re++){fe=_e[re].mipmaps;for(let Ce=0;Ce<fe.length;Ce++){const Se=fe[Ce];_.format!==Qt?Ne!==null?F?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,Se.width,Se.height,Ne,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,Ye,Se.width,Se.height,0,Se.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,Se.width,Se.height,Ne,Be,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,Ye,Se.width,Se.height,0,Ne,Be,Se.data)}}}else{if(fe=_.mipmaps,F&&pe){fe.length>0&&xe++;const re=rt(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ye,re.width,re.height)}for(let re=0;re<6;re++)if(Le){F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,_e[re].width,_e[re].height,Ne,Be,_e[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ye,_e[re].width,_e[re].height,0,Ne,Be,_e[re].data);for(let Ce=0;Ce<fe.length;Ce++){const Mt=fe[Ce].image[re].image;F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,Mt.width,Mt.height,Ne,Be,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,Ye,Mt.width,Mt.height,0,Ne,Be,Mt.data)}}else{F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ne,Be,_e[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ye,Ne,Be,_e[re]);for(let Ce=0;Ce<fe.length;Ce++){const Se=fe[Ce];F?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,Ne,Be,Se.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,Ye,Ne,Be,Se.image[re])}}}d(_)&&b(i.TEXTURE_CUBE_MAP),ce.__version=J.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Ue(P,_,W,X,J,ce){const me=s.convert(W.format,W.colorSpace),ee=s.convert(W.type),ne=x(W.internalFormat,me,ee,W.normalized,W.colorSpace),he=n.get(_),Le=n.get(W);if(Le.__renderTarget=_,!he.__hasExternalTextures){const _e=Math.max(1,_.width>>ce),ge=Math.max(1,_.height>>ce);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ce,ne,_e,ge,_.depth,0,me,ee,null):t.texImage2D(J,ce,ne,_e,ge,0,me,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,Le.__webglTexture,0,lt(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,Le.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(P,_,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer){const X=_.depthTexture,J=X&&X.isDepthTexture?X.type:null,ce=E(_.stencilBuffer,J),me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(_),ce,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(_),ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,P)}else{const X=_.textures;for(let J=0;J<X.length;J++){const ce=X[J],me=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),ne=x(ce.internalFormat,me,ee,ce.normalized,ce.colorSpace);vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(_),ne,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(_),ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(P,_,W){const X=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,_.depthTexture);const he=s.convert(_.depthTexture.format),Le=s.convert(_.depthTexture.type);let _e;_.depthTexture.format===kn?_e=i.DEPTH_COMPONENT24:_.depthTexture.format===fi&&(_e=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_e,_.width,_.height,0,he,Le,null)}}else k(_.depthTexture,0);const ce=J.__webglTexture,me=lt(_),ee=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ne=_.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===kn)vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,ce,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,ce,0);else if(_.depthTexture.format===fi)vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,ce,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(P){const _=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=X}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(W)for(let X=0;X<6;X++)qe(_.__webglFramebuffer[X],P,X);else{const X=P.texture.mipmaps;X&&X.length>0?qe(_.__webglFramebuffer[0],P,0):qe(_.__webglFramebuffer,P,0)}else if(W){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),ht(_.__webglDepthbuffer[X],P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ce)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ht(_.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(P,_,W){const X=n.get(P);_!==void 0&&Ue(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&je(P)}function et(P){const _=P.texture,W=n.get(P),X=n.get(_);P.addEventListener("dispose",m);const J=P.textures,ce=P.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),ce){W.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer[ee]=[];for(let ne=0;ne<_.mipmaps.length;ne++)W.__webglFramebuffer[ee][ne]=i.createFramebuffer()}else W.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)W.__webglFramebuffer[ee]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(me)for(let ee=0,ne=J.length;ee<ne;ee++){const he=n.get(J[ee]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&vt(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ne=J[ee];W.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ee]);const he=s.convert(ne.format,ne.colorSpace),Le=s.convert(ne.type),_e=x(ne.internalFormat,he,Le,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),ge=lt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,_e,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,W.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)Ue(W.__webglFramebuffer[ee][ne],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else Ue(W.__webglFramebuffer[ee],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(_)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ee=0,ne=J.length;ee<ne;ee++){const he=J[ee],Le=n.get(he);let _e=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Le.__webglTexture),Ve(_e,he),Ue(W.__webglFramebuffer,P,he,i.COLOR_ATTACHMENT0+ee,_e,0),d(he)&&b(_e)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,X.__webglTexture),Ve(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)Ue(W.__webglFramebuffer[ne],P,_,i.COLOR_ATTACHMENT0,ee,ne);else Ue(W.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,ee,0);d(_)&&b(ee),t.unbindTexture()}P.depthBuffer&&je(P)}function At(P){const _=P.textures;for(let W=0,X=_.length;W<X;W++){const J=_[W];if(d(J)){const ce=C(P),me=n.get(J).__webglTexture;t.bindTexture(ce,me),b(ce),t.unbindTexture()}}}const bt=[],Lt=[];function xt(P){if(P.samples>0){if(vt(P)===!1){const _=P.textures,W=P.width,X=P.height;let J=i.COLOR_BUFFER_BIT;const ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(P),ee=_.length>1;if(ee)for(let he=0;he<_.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let he=0;he<_.length;he++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[he]);const Le=n.get(_[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,W,X,0,0,W,X,J,i.NEAREST),l===!0&&(bt.length=0,Lt.length=0,bt.push(i.COLOR_ATTACHMENT0+he),P.depthBuffer&&P.resolveDepthBuffer===!1&&(bt.push(ce),Lt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let he=0;he<_.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,me.__webglColorRenderbuffer[he]);const Le=n.get(_[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const _=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function lt(P){return Math.min(r.maxSamples,P.samples)}function vt(P){const _=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function B(P){const _=a.render.frame;h.get(P)!==_&&(h.set(P,_),P.update())}function Nt(P,_){const W=P.colorSpace,X=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==$r&&W!==Qn&&(ct.getTransfer(W)===Et?(X!==Qt||J!==ln)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",W)),_}function rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.getTextureUnits=H,this.setTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=Ke,this.setupRenderTarget=et,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Lm(i,e){function t(n,r=Qn){let s;const a=ct.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bl)return i.BYTE;if(n===Tl)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Cl)return i.ALPHA;if(n===Rl)return i.RGB;if(n===Qt)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Na)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===zr||n===Hr||n===kr||n===Gr)if(a===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zs||n===Js||n===Qs||n===js)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Js)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===js)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===ta||n===na||n===ia||n===ra||n===qr||n===sa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ea||n===ta)return a===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===na)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ia)return s.COMPRESSED_R11_EAC;if(n===ra)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qr)return s.COMPRESSED_RG11_EAC;if(n===sa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===aa||n===oa||n===la||n===ca||n===ua||n===fa||n===da||n===ha||n===pa||n===ma||n===ga||n===_a||n===xa||n===va)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===aa)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fa)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===Sa||n===ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ma)return a===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ea||n===ba||n===Yr||n===Ta)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
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

}`;class Um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:Dm,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nm extends pi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,g=null,v=null;const T=typeof XRWebGLBinding<"u",p=new Um,d={},b=t.getContextAttributes();let C=null,x=null;const E=[],M=[],w=new st;let m=null;const S=new dn;S.viewport=new It;const L=new dn;L.viewport=new It;const R=[S,L],U=new Wu;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=E[te];return le===void 0&&(le=new hs,E[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=E[te];return le===void 0&&(le=new hs,E[te]=le),le.getGripSpace()},this.getHand=function(te){let le=E[te];return le===void 0&&(le=new hs,E[te]=le),le.getHandSpace()};function I(te){const le=M.indexOf(te.inputSource);if(le===-1)return;const Z=E[le];Z!==void 0&&(Z.update(te.inputSource,te.frame,c||a),Z.dispatchEvent({type:te.type,data:te.inputSource}))}function G(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",N);for(let te=0;te<E.length;te++){const le=M[te];le!==null&&(M[te]=null,E[te].disconnect(le))}z=null,H=null,p.reset();for(const te in d)delete d[te];e.setRenderTarget(C),g=null,f=null,u=null,r=null,x=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u===null&&T&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",G),r.addEventListener("inputsourceschange",N),b.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(w),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,Fe=null,Ge=null;b.depth&&(Ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=b.stencil?fi:kn,Fe=b.stencil?or:wn);const Ue={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new An(f.textureWidth,f.textureHeight,{format:Qt,type:ln,depthTexture:new Gi(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Z={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new An(g.framebufferWidth,g.framebufferHeight,{format:Qt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(te){for(let le=0;le<te.removed.length;le++){const Z=te.removed[le],Fe=M.indexOf(Z);Fe>=0&&(M[Fe]=null,E[Fe].disconnect(Z))}for(let le=0;le<te.added.length;le++){const Z=te.added[le];let Fe=M.indexOf(Z);if(Fe===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=M.length){M.push(Z),Fe=Ue;break}else if(M[Ue]===null){M[Ue]=Z,Fe=Ue;break}if(Fe===-1)break}const Ge=E[Fe];Ge&&Ge.connect(Z)}}const k=new q,Q=new q;function oe(te,le,Z){k.setFromMatrixPosition(le.matrixWorld),Q.setFromMatrixPosition(Z.matrixWorld);const Fe=k.distanceTo(Q),Ge=le.projectionMatrix.elements,Ue=Z.projectionMatrix.elements,ht=Ge[14]/(Ge[10]-1),qe=Ge[14]/(Ge[10]+1),je=(Ge[9]+1)/Ge[5],Ke=(Ge[9]-1)/Ge[5],et=(Ge[8]-1)/Ge[0],At=(Ue[8]+1)/Ue[0],bt=ht*et,Lt=ht*At,xt=Fe/(-et+At),lt=xt*-et;if(le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(lt),te.translateZ(xt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const vt=ht+xt,B=qe+xt,Nt=bt-lt,rt=Lt+(Fe-lt),P=je*qe/B*vt,_=Ke*qe/B*vt;te.projectionMatrix.makePerspective(Nt,rt,P,_,vt,B),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function se(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let le=te.near,Z=te.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(Z=p.depthFar)),U.near=L.near=S.near=le,U.far=L.far=S.far=Z,(z!==U.near||H!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,H=U.far),U.layers.mask=te.layers.mask|6,S.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const Fe=te.parent,Ge=U.cameras;se(U,Fe);for(let Ue=0;Ue<Ge.length;Ue++)se(Ge[Ue],Fe);Ge.length===2?oe(U,S,L):U.projectionMatrix.copy(S.projectionMatrix),ue(te,U,Fe)};function ue(te,le,Z){Z===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(Z.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ur*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=te)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(te){return d[te]};let We=null;function ut(te,le){if(h=le.getViewerPose(c||a),v=le,h!==null){const Z=h.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let Fe=!1;Z.length!==U.cameras.length&&(U.cameras.length=0,Fe=!0);for(let qe=0;qe<Z.length;qe++){const je=Z[qe];let Ke=null;if(g!==null)Ke=g.getViewport(je);else{const At=u.getViewSubImage(f,je);Ke=At.viewport,qe===0&&(e.setRenderTargetTextures(x,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(x))}let et=R[qe];et===void 0&&(et=new dn,et.layers.enable(qe),et.viewport=new It,R[qe]=et),et.matrix.fromArray(je.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(je.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),qe===0&&(U.matrix.copy(et.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Fe===!0&&U.cameras.push(et)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){u=n.getBinding();const qe=u.getDepthInformation(Z[0]);qe&&qe.isValid&&qe.texture&&p.init(qe,r.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<Z.length;qe++){const je=Z[qe].camera;if(je){let Ke=d[je];Ke||(Ke=new Ol,d[je]=Ke);const et=u.getCameraImage(je);Ke.sourceTexture=et}}}}for(let Z=0;Z<E.length;Z++){const Fe=M[Z],Ge=E[Z];Fe!==null&&Ge!==void 0&&Ge.update(Fe,le,c||a)}We&&We(te,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),v=null}const Ve=new Gl;Ve.setAnimationLoop(ut),this.setAnimationLoop=function(te){We=te},this.dispose=function(){}}}const Fm=new Rt,Kl=new Ze;Kl.set(-1,0,0,0,1,0,0,0,1);function Om(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Bl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,C,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&g(p,d,x)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),T(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,b,C):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===nn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===nn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d),C=b.envMap,x=b.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(x)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Kl),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,C){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=C*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function T(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Bm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const M=E.program;n.uniformBlockBinding(x,M)}function c(x,E){let M=r[x.id];M===void 0&&(p(x),M=h(x),r[x.id]=M,x.addEventListener("dispose",b));const w=E.program;n.updateUBOMapping(x,w);const m=e.render.frame;s[x.id]!==m&&(f(x),s[x.id]=m)}function h(x){const E=u();x.__bindingPointIndex=E;const M=i.createBuffer(),w=x.__size,m=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=r[x.id],M=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let m=0,S=M.length;m<S;m++){const L=M[m];if(Array.isArray(L))for(let R=0,U=L.length;R<U;R++)g(L[R],m,R,w);else g(L,m,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(x,E,M,w){if(T(x,E,M,w)===!0){const m=x.__offset,S=x.value;if(Array.isArray(S)){let L=0;for(let R=0;R<S.length;R++){const U=S[R],z=d(U);v(U,x.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(S,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,m,x.__data)}}function v(x,E,M){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,M)}function T(x,E,M,w){const m=x.value,S=E+"_"+M;if(w[S]===void 0)return typeof m=="number"||typeof m=="boolean"?w[S]=m:ArrayBuffer.isView(m)?w[S]=m.slice():w[S]=m.clone(),!0;{const L=w[S];if(typeof m=="number"||typeof m=="boolean"){if(L!==m)return w[S]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(L.equals(m)===!1)return L.copy(m),!0}}return!1}function p(x){const E=x.uniforms;let M=0;const w=16;for(let S=0,L=E.length;S<L;S++){const R=Array.isArray(E[S])?E[S]:[E[S]];for(let U=0,z=R.length;U<z;U++){const H=R[U],I=Array.isArray(H.value)?H.value:[H.value];for(let G=0,N=I.length;G<N;G++){const k=I[G],Q=d(k),oe=M%w,se=oe%Q.boundary,ue=oe+se;M+=se,ue!==0&&w-ue<Q.storage&&(M+=w-ue),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Q.storage}}}const m=M%w;return m>0&&(M+=w-m),x.__size=M,x.__cache={},this}function d(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",x),E}function b(x){const E=x.target;E.removeEventListener("dispose",b);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function C(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:C}}const zm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function Hm(){return Mn===null&&(Mn=new ci(zm,16,16,hi,Hn),Mn.name="DFG_LUT",Mn.minFilter=Wt,Mn.magFilter=Wt,Mn.wrapS=Nn,Mn.wrapT=Nn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class km{constructor(e={}){const{canvas:t=zc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:g=ln}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const T=g,p=new Set([Ba,Oa,Fa]),d=new Set([ln,wn,ar,or,Ia,Ua]),b=new Uint32Array(4),C=new Int32Array(4),x=new q;let E=null,M=null;const w=[],m=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let R=!1,U=null,z=null,H=null,I=null;this._outputColorSpace=tn;let G=0,N=0,k=null,Q=-1,oe=null;const se=new It,ue=new It;let We=null;const ut=new at(0);let Ve=0,te=t.width,le=t.height,Z=1,Fe=null,Ge=null;const Ue=new It(0,0,te,le),ht=new It(0,0,te,le);let qe=!1;const je=new Xa;let Ke=!1,et=!1;const At=new Rt,bt=new q,Lt=new It,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function vt(){return k===null?Z:1}let B=n;function Nt(y,V){return t.getContext(y,V)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pa}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),B===null){const V="webgl2";if(B=Nt(V,y),B===null)throw Nt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw dt("WebGLRenderer: "+y.message),y}let rt,P,_,W,X,J,ce,me,ee,ne,he,Le,_e,ge,Ne,Be,Ye,F,pe,ie,xe,fe,re;function Ce(){rt=new Hh(B),rt.init(),xe=new Lm(B,rt),P=new Dh(B,rt,e,xe),_=new Rm(B,rt),P.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),z=B.createFramebuffer(),H=B.createFramebuffer(),I=B.createFramebuffer(),W=new Vh(B),X=new mm,J=new Pm(B,rt,_,X,P,xe,W),ce=new zh(L),me=new qu(B),fe=new Ph(B,me),ee=new kh(B,me,W,fe),ne=new Xh(B,ee,me,fe,W),F=new Wh(B,P,J),Ne=new Ih(X),he=new pm(L,ce,rt,P,fe,Ne),Le=new Om(L,X),_e=new _m,ge=new Em(rt),Ye=new Rh(L,ce,_,ne,v,l),Be=new Cm(L,ne,P),re=new Bm(B,W,P,_),pe=new Lh(B,rt,W),ie=new Gh(B,rt,W),W.programs=he.programs,L.capabilities=P,L.extensions=rt,L.properties=X,L.renderLists=_e,L.shadowMap=Be,L.state=_,L.info=W}Ce(),T!==ln&&(S=new Yh(T,t.width,t.height,o,r,s));const Se=new Nm(L,B);this.xr=Se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const y=rt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=rt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(te,le,!1))},this.getSize=function(y){return y.set(te,le)},this.setSize=function(y,V,K=!0){if(Se.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}te=y,le=V,t.width=Math.floor(y*Z),t.height=Math.floor(V*Z),K===!0&&(t.style.width=y+"px",t.style.height=V+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,y,V)},this.getDrawingBufferSize=function(y){return y.set(te*Z,le*Z).floor()},this.setDrawingBufferSize=function(y,V,K){te=y,le=V,Z=K,t.width=Math.floor(y*K),t.height=Math.floor(V*K),this.setViewport(0,0,y,V)},this.setEffects=function(y){if(T===ln){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let V=0;V<y.length;V++)if(y[V].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(se)},this.getViewport=function(y){return y.copy(Ue)},this.setViewport=function(y,V,K,Y){y.isVector4?Ue.set(y.x,y.y,y.z,y.w):Ue.set(y,V,K,Y),_.viewport(se.copy(Ue).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy(ht)},this.setScissor=function(y,V,K,Y){y.isVector4?ht.set(y.x,y.y,y.z,y.w):ht.set(y,V,K,Y),_.scissor(ue.copy(ht).multiplyScalar(Z).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(y){_.setScissorTest(qe=y)},this.setOpaqueSort=function(y){Fe=y},this.setTransparentSort=function(y){Ge=y},this.getClearColor=function(y){return y.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(y=!0,V=!0,K=!0){let Y=0;if(y){let $=!1;if(k!==null){const Ae=k.texture.format;$=p.has(Ae)}if($){const Ae=k.texture.type,Pe=d.has(Ae),Te=Ye.getClearColor(),Oe=Ye.getClearAlpha(),ze=Te.r,Qe=Te.g,it=Te.b;Pe?(b[0]=ze,b[1]=Qe,b[2]=it,b[3]=Oe,B.clearBufferuiv(B.COLOR,0,b)):(C[0]=ze,C[1]=Qe,C[2]=it,C[3]=Oe,B.clearBufferiv(B.COLOR,0,C))}else Y|=B.COLOR_BUFFER_BIT}V&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),Ye.dispose(),_e.dispose(),ge.dispose(),X.dispose(),ce.dispose(),ne.dispose(),fe.dispose(),re.dispose(),he.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ie),Se.removeEventListener("sessionend",tt),Re.stop()};function Mt(y){y.preventDefault(),fo("WebGLRenderer: Context Lost."),R=!0}function _t(){fo("WebGLRenderer: Context Restored."),R=!1;const y=W.autoReset,V=Be.enabled,K=Be.autoUpdate,Y=Be.needsUpdate,$=Be.type;Ce(),W.autoReset=y,Be.enabled=V,Be.autoUpdate=K,Be.needsUpdate=Y,Be.type=$}function Xt(y){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function qt(y){const V=y.target;V.removeEventListener("dispose",qt),A(V)}function A(y){O(y),X.remove(y)}function O(y){const V=X.get(y).programs;V!==void 0&&(V.forEach(function(K){he.releaseProgram(K)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,V,K,Y,$,Ae){V===null&&(V=xt);const Pe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Te=Je(y,V,K,Y,$);_.setMaterial(Y,Pe);let Oe=K.index,ze=1;if(Y.wireframe===!0){if(Oe=ee.getWireframeAttribute(K),Oe===void 0)return;ze=2}const Qe=K.drawRange,it=K.attributes.position;let He=Qe.start*ze,Tt=(Qe.start+Qe.count)*ze;Ae!==null&&(He=Math.max(He,Ae.start*ze),Tt=Math.min(Tt,(Ae.start+Ae.count)*ze)),Oe!==null?(He=Math.max(He,0),Tt=Math.min(Tt,Oe.count)):it!=null&&(He=Math.max(He,0),Tt=Math.min(Tt,it.count));const Ft=Tt-He;if(Ft<0||Ft===1/0)return;fe.setup($,Y,Te,K,Oe);let Ut,wt=pe;if(Oe!==null&&(Ut=me.get(Oe),wt=ie,wt.setIndex(Ut)),$.isMesh)Y.wireframe===!0?(_.setLineWidth(Y.wireframeLinewidth*vt()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if($.isLine){let $t=Y.linewidth;$t===void 0&&($t=1),_.setLineWidth($t*vt()),$.isLineSegments?wt.setMode(B.LINES):$.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else $.isPoints?wt.setMode(B.POINTS):$.isSprite&&wt.setMode(B.TRIANGLES);if($.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))wt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $t=$._multiDrawStarts,we=$._multiDrawCounts,sn=$._multiDrawCount,gt=Oe?me.get(Oe).bytesPerElement:1,un=X.get(Y).currentProgram.getUniforms();for(let xn=0;xn<sn;xn++)un.setValue(B,"_gl_DrawID",xn),wt.render($t[xn]/gt,we[xn])}else if($.isInstancedMesh)wt.renderInstances(He,Ft,$.count);else if(K.isInstancedBufferGeometry){const $t=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,we=Math.min(K.instanceCount,$t);wt.renderInstances(He,Ft,we)}else wt.render(He,Ft)};function ae(y,V,K){y.transparent===!0&&y.side===yn&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,Ee(y,V,K),y.side=zn,y.needsUpdate=!0,Ee(y,V,K),y.side=yn):Ee(y,V,K)}this.compile=function(y,V,K=null){K===null&&(K=y),M=ge.get(K),M.init(V),m.push(M),K.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),y!==K&&y.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights();const Y=new Set;return y.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Pe=0;Pe<Ae.length;Pe++){const Te=Ae[Pe];ae(Te,K,$),Y.add(Te)}else ae(Ae,K,$),Y.add(Ae)}),M=m.pop(),Y},this.compileAsync=function(y,V,K=null){const Y=this.compile(y,V,K);return new Promise($=>{function Ae(){if(Y.forEach(function(Pe){X.get(Pe).currentProgram.isReady()&&Y.delete(Pe)}),Y.size===0){$(y);return}setTimeout(Ae,10)}rt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let de=null;function ye(y){de&&de(y)}function Ie(){Re.stop()}function tt(){Re.start()}const Re=new Gl;Re.setAnimationLoop(ye),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(y){de=y,Se.setAnimationLoop(y),y===null?Re.stop():Re.start()},Se.addEventListener("sessionstart",Ie),Se.addEventListener("sessionend",tt),this.render=function(y,V){if(V!==void 0&&V.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(y,V);const K=Se.enabled===!0&&Se.isPresenting===!0,Y=S!==null&&(k===null||K)&&S.begin(L,k);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(V),V=Se.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,V,k),M=ge.get(y,m.length),M.init(V),M.state.textureUnits=J.getTextureUnits(),m.push(M),At.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),je.setFromProjectionMatrix(At,bn,V.reversedDepth),et=this.localClippingEnabled,Ke=Ne.init(this.clippingPlanes,et),E=_e.get(y,w.length),E.init(),w.push(E),Se.enabled===!0&&Se.isPresenting===!0){const Pe=L.xr.getDepthSensingMesh();Pe!==null&&Xe(Pe,V,-1/0,L.sortObjects)}Xe(y,V,0,L.sortObjects),E.finish(),L.sortObjects===!0&&E.sort(Fe,Ge,V.reversedDepth),lt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,lt&&Ye.addToRenderList(E,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Ne.beginShadows();const $=M.state.shadowsArray;if(Be.render($,y,V),Ke===!0&&Ne.endShadows(),(Y&&S.hasRenderPass())===!1){const Pe=E.opaque,Te=E.transmissive;if(M.setupLights(),V.isArrayCamera){const Oe=V.cameras;if(Te.length>0)for(let ze=0,Qe=Oe.length;ze<Qe;ze++){const it=Oe[ze];St(Pe,Te,y,it)}lt&&Ye.render(y);for(let ze=0,Qe=Oe.length;ze<Qe;ze++){const it=Oe[ze];ft(E,y,it,it.viewport)}}else Te.length>0&&St(Pe,Te,y,V),lt&&Ye.render(y),ft(E,y,V)}k!==null&&N===0&&(J.updateMultisampleRenderTarget(k),J.updateRenderTargetMipmap(k)),Y&&S.end(L),y.isScene===!0&&y.onAfterRender(L,y,V),fe.resetDefaultState(),Q=-1,oe=null,m.pop(),m.length>0?(M=m[m.length-1],J.setTextureUnits(M.state.textureUnits),Ke===!0&&Ne.setGlobalState(L.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,U!==null&&U.renderEnd()};function Xe(y,V,K,Y){if(y.visible===!1)return;if(y.layers.test(V.layers)){if(y.isGroup)K=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(V);else if(y.isLightProbeGrid)M.pushLightProbeGrid(y);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||je.intersectsSprite(y)){Y&&Lt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(At);const Pe=ne.update(y),Te=y.material;Te.visible&&E.push(y,Pe,Te,K,Lt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||je.intersectsObject(y))){const Pe=ne.update(y),Te=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Lt.copy(y.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Lt.copy(Pe.boundingSphere.center)),Lt.applyMatrix4(y.matrixWorld).applyMatrix4(At)),Array.isArray(Te)){const Oe=Pe.groups;for(let ze=0,Qe=Oe.length;ze<Qe;ze++){const it=Oe[ze],He=Te[it.materialIndex];He&&He.visible&&E.push(y,Pe,He,K,Lt.z,it)}}else Te.visible&&E.push(y,Pe,Te,K,Lt.z,null)}}const Ae=y.children;for(let Pe=0,Te=Ae.length;Pe<Te;Pe++)Xe(Ae[Pe],V,K,Y)}function ft(y,V,K,Y){const{opaque:$,transmissive:Ae,transparent:Pe}=y;M.setupLightsView(K),Ke===!0&&Ne.setGlobalState(L.clippingPlanes,K),Y&&_.viewport(se.copy(Y)),$.length>0&&D($,V,K),Ae.length>0&&D(Ae,V,K),Pe.length>0&&D(Pe,V,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function St(y,V,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const He=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new An(1,1,{generateMipmaps:!0,type:He?Hn:ln,minFilter:En,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Ae=M.state.transmissionRenderTarget[Y.id],Pe=Y.viewport||se;Ae.setSize(Pe.z*L.transmissionResolutionScale,Pe.w*L.transmissionResolutionScale);const Te=L.getRenderTarget(),Oe=L.getActiveCubeFace(),ze=L.getActiveMipmapLevel();L.setRenderTarget(Ae),L.getClearColor(ut),Ve=L.getClearAlpha(),Ve<1&&L.setClearColor(16777215,.5),L.clear(),lt&&Ye.render(K);const Qe=L.toneMapping;L.toneMapping=Tn;const it=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Ke===!0&&Ne.setGlobalState(L.clippingPlanes,Y),D(y,K,Y),J.updateMultisampleRenderTarget(Ae),J.updateRenderTargetMipmap(Ae),rt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Tt=0,Ft=V.length;Tt<Ft;Tt++){const Ut=V[Tt],{object:wt,geometry:$t,material:we,group:sn}=Ut;if(we.side===yn&&wt.layers.test(Y.layers)){const gt=we.side;we.side=nn,we.needsUpdate=!0,j(wt,K,Y,$t,we,sn),we.side=gt,we.needsUpdate=!0,He=!0}}He===!0&&(J.updateMultisampleRenderTarget(Ae),J.updateRenderTargetMipmap(Ae))}L.setRenderTarget(Te,Oe,ze),L.setClearColor(ut,Ve),it!==void 0&&(Y.viewport=it),L.toneMapping=Qe}function D(y,V,K){const Y=V.isScene===!0?V.overrideMaterial:null;for(let $=0,Ae=y.length;$<Ae;$++){const Pe=y[$],{object:Te,geometry:Oe,group:ze}=Pe;let Qe=Pe.material;Qe.allowOverride===!0&&Y!==null&&(Qe=Y),Te.layers.test(K.layers)&&j(Te,V,K,Oe,Qe,ze)}}function j(y,V,K,Y,$,Ae){y.onBeforeRender(L,V,K,Y,$,Ae),y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),$.onBeforeRender(L,V,K,Y,y,Ae),$.transparent===!0&&$.side===yn&&$.forceSinglePass===!1?($.side=nn,$.needsUpdate=!0,L.renderBufferDirect(K,V,Y,$,y,Ae),$.side=zn,$.needsUpdate=!0,L.renderBufferDirect(K,V,Y,$,y,Ae),$.side=yn):L.renderBufferDirect(K,V,Y,$,y,Ae),y.onAfterRender(L,V,K,Y,$,Ae)}function Ee(y,V,K){V.isScene!==!0&&(V=xt);const Y=X.get(y),$=M.state.lights,Ae=M.state.shadowsArray,Pe=$.state.version,Te=he.getParameters(y,$.state,Ae,V,K,M.state.lightProbeGridArray),Oe=he.getProgramCacheKey(Te);let ze=Y.programs;Y.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;const Qe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Y.envMap=ce.get(y.envMap||Y.environment,Qe),Y.envMapRotation=Y.environment!==null&&y.envMap===null?V.environmentRotation:y.envMapRotation,ze===void 0&&(y.addEventListener("dispose",qt),ze=new Map,Y.programs=ze);let it=ze.get(Oe);if(it!==void 0){if(Y.currentProgram===it&&Y.lightsStateVersion===Pe)return De(y,Te),it}else Te.uniforms=he.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,K,Te),y.onBeforeCompile(Te,L),it=he.acquireProgram(Te,Oe),ze.set(Oe,it),Y.uniforms=Te.uniforms;const He=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(He.clippingPlanes=Ne.uniform),De(y,Te),Y.needsLights=yt(y),Y.lightsStateVersion=Pe,Y.needsLights&&(He.ambientLightColor.value=$.state.ambient,He.lightProbe.value=$.state.probe,He.directionalLights.value=$.state.directional,He.directionalLightShadows.value=$.state.directionalShadow,He.spotLights.value=$.state.spot,He.spotLightShadows.value=$.state.spotShadow,He.rectAreaLights.value=$.state.rectArea,He.ltc_1.value=$.state.rectAreaLTC1,He.ltc_2.value=$.state.rectAreaLTC2,He.pointLights.value=$.state.point,He.pointLightShadows.value=$.state.pointShadow,He.hemisphereLights.value=$.state.hemi,He.directionalShadowMatrix.value=$.state.directionalShadowMatrix,He.spotLightMatrix.value=$.state.spotLightMatrix,He.spotLightMap.value=$.state.spotLightMap,He.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=it,Y.uniformsList=null,it}function ve(y){if(y.uniformsList===null){const V=y.currentProgram.getUniforms();y.uniformsList=Vr.seqWithValue(V.seq,y.uniforms)}return y.uniformsList}function De(y,V){const K=X.get(y);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function pt(y,V){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;x.setFromMatrixPosition(V.matrixWorld);for(let K=0,Y=y.length;K<Y;K++){const $=y[K];if($.texture!==null&&$.boundingBox.containsPoint(x))return $}return null}function Je(y,V,K,Y,$){V.isScene!==!0&&(V=xt),J.resetTextureUnits();const Ae=V.fog,Pe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,Te=k===null?L.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ct.workingColorSpace,Oe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,ze=ce.get(Y.envMap||Pe,Oe),Qe=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,it=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!K.morphAttributes.position,Tt=!!K.morphAttributes.normal,Ft=!!K.morphAttributes.color;let Ut=Tn;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ut=L.toneMapping);const wt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$t=wt!==void 0?wt.length:0,we=X.get(Y),sn=M.state.lights;if(Ke===!0&&(et===!0||y!==oe)){const Pt=y===oe&&Y.id===Q;Ne.setState(Y,y,Pt)}let gt=!1;Y.version===we.__version?(we.needsLights&&we.lightsStateVersion!==sn.state.version||we.outputColorSpace!==Te||$.isBatchedMesh&&we.batching===!1||!$.isBatchedMesh&&we.batching===!0||$.isBatchedMesh&&we.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&we.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&we.instancing===!1||!$.isInstancedMesh&&we.instancing===!0||$.isSkinnedMesh&&we.skinning===!1||!$.isSkinnedMesh&&we.skinning===!0||$.isInstancedMesh&&we.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&we.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&we.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&we.instancingMorph===!1&&$.morphTexture!==null||we.envMap!==ze||Y.fog===!0&&we.fog!==Ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ne.numPlanes||we.numIntersection!==Ne.numIntersection)||we.vertexAlphas!==Qe||we.vertexTangents!==it||we.morphTargets!==He||we.morphNormals!==Tt||we.morphColors!==Ft||we.toneMapping!==Ut||we.morphTargetsCount!==$t||!!we.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,we.__version=Y.version);let un=we.currentProgram;gt===!0&&(un=Ee(Y,V,$),U&&Y.isNodeMaterial&&U.onUpdateProgram(Y,un,we));let xn=!1,Gn=!1,_i=!1;const Ct=un.getUniforms(),Ot=we.uniforms;if(_.useProgram(un.program)&&(xn=!0,Gn=!0,_i=!0),Y.id!==Q&&(Q=Y.id,Gn=!0),we.needsLights){const Pt=pt(M.state.lightProbeGridArray,$);we.lightProbeGrid!==Pt&&(we.lightProbeGrid=Pt,Gn=!0)}if(xn||oe!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ct.setValue(B,"projectionMatrix",y.projectionMatrix),Ct.setValue(B,"viewMatrix",y.matrixWorldInverse);const Wn=Ct.map.cameraPosition;Wn!==void 0&&Wn.setValue(B,bt.setFromMatrixPosition(y.matrixWorld)),P.logarithmicDepthBuffer&&Ct.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ct.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),oe!==y&&(oe=y,Gn=!0,_i=!0)}if(we.needsLights&&(sn.state.directionalShadowMap.length>0&&Ct.setValue(B,"directionalShadowMap",sn.state.directionalShadowMap,J),sn.state.spotShadowMap.length>0&&Ct.setValue(B,"spotShadowMap",sn.state.spotShadowMap,J),sn.state.pointShadowMap.length>0&&Ct.setValue(B,"pointShadowMap",sn.state.pointShadowMap,J)),$.isSkinnedMesh){Ct.setOptional(B,$,"bindMatrix"),Ct.setOptional(B,$,"bindMatrixInverse");const Pt=$.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Ct.setValue(B,"boneTexture",Pt.boneTexture,J))}$.isBatchedMesh&&(Ct.setOptional(B,$,"batchingTexture"),Ct.setValue(B,"batchingTexture",$._matricesTexture,J),Ct.setOptional(B,$,"batchingIdTexture"),Ct.setValue(B,"batchingIdTexture",$._indirectTexture,J),Ct.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&Ct.setValue(B,"batchingColorTexture",$._colorsTexture,J));const Vn=K.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&F.update($,K,un),(Gn||we.receiveShadow!==$.receiveShadow)&&(we.receiveShadow=$.receiveShadow,Ct.setValue(B,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(Ot.envMapIntensity.value=V.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Hm()),Gn){if(Ct.setValue(B,"toneMappingExposure",L.toneMappingExposure),we.needsLights&&mt(Ot,_i),Ae&&Y.fog===!0&&Le.refreshFogUniforms(Ot,Ae),Le.refreshMaterialUniforms(Ot,Y,Z,le,M.state.transmissionRenderTarget[y.id]),we.needsLights&&we.lightProbeGrid){const Pt=we.lightProbeGrid;Ot.probesSH.value=Pt.texture,Ot.probesMin.value.copy(Pt.boundingBox.min),Ot.probesMax.value.copy(Pt.boundingBox.max),Ot.probesResolution.value.copy(Pt.resolution)}Vr.upload(B,ve(we),Ot,J)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Vr.upload(B,ve(we),Ot,J),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ct.setValue(B,"center",$.center),Ct.setValue(B,"modelViewMatrix",$.modelViewMatrix),Ct.setValue(B,"normalMatrix",$.normalMatrix),Ct.setValue(B,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){const Pt=Y.uniformsGroups;for(let Wn=0,xi=Pt.length;Wn<xi;Wn++){const ja=Pt[Wn];re.update(ja,un),re.bind(ja,un)}}return un}function mt(y,V){y.ambientLightColor.needsUpdate=V,y.lightProbe.needsUpdate=V,y.directionalLights.needsUpdate=V,y.directionalLightShadows.needsUpdate=V,y.pointLights.needsUpdate=V,y.pointLightShadows.needsUpdate=V,y.spotLights.needsUpdate=V,y.spotLightShadows.needsUpdate=V,y.rectAreaLights.needsUpdate=V,y.hemisphereLights.needsUpdate=V}function yt(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(y,V,K){const Y=X.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(y.texture).__webglTexture=V,X.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,V){const K=X.get(y);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(y,V=0,K=0){k=y,G=V,N=K;let Y=null,$=!1,Ae=!1;if(y){const Te=X.get(y);if(Te.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),se.copy(y.viewport),ue.copy(y.scissor),We=y.scissorTest,_.viewport(se),_.scissor(ue),_.setScissorTest(We),Q=-1;return}else if(Te.__webglFramebuffer===void 0)J.setupRenderTarget(y);else if(Te.__hasExternalTextures)J.rebindTextures(y,X.get(y.texture).__webglTexture,X.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Qe=y.depthTexture;if(Te.__boundDepthTexture!==Qe){if(Qe!==null&&X.has(Qe)&&(y.width!==Qe.image.width||y.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ae=!0);const ze=X.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[V])?Y=ze[V][K]:Y=ze[V],$=!0):y.samples>0&&J.useMultisampledRTT(y)===!1?Y=X.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?Y=ze[K]:Y=ze,se.copy(y.viewport),ue.copy(y.scissor),We=y.scissorTest}else se.copy(Ue).multiplyScalar(Z).floor(),ue.copy(ht).multiplyScalar(Z).floor(),We=qe;if(K!==0&&(Y=z),_.bindFramebuffer(B.FRAMEBUFFER,Y)&&_.drawBuffers(y,Y),_.viewport(se),_.scissor(ue),_.setScissorTest(We),$){const Te=X.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,K)}else if(Ae){const Te=V;for(let Oe=0;Oe<y.textures.length;Oe++){const ze=X.get(y.textures[Oe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,K,Te)}}else if(y!==null&&K!==0){const Te=X.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,K)}Q=-1},this.readRenderTargetPixels=function(y,V,K,Y,$,Ae,Pe,Te=0){if(!(y&&y.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){_.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const ze=y.textures[Te],Qe=ze.format,it=ze.type;if(y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),!P.textureFormatReadable(Qe)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(it)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=y.width-Y&&K>=0&&K<=y.height-$&&B.readPixels(V,K,Y,$,xe.convert(Qe),xe.convert(it),Ae)}finally{const ze=k!==null?X.get(k).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(y,V,K,Y,$,Ae,Pe,Te=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=X.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe)if(V>=0&&V<=y.width-Y&&K>=0&&K<=y.height-$){_.bindFramebuffer(B.FRAMEBUFFER,Oe);const ze=y.textures[Te],Qe=ze.format,it=ze.type;if(y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),!P.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.bufferData(B.PIXEL_PACK_BUFFER,Ae.byteLength,B.STREAM_READ),B.readPixels(V,K,Y,$,xe.convert(Qe),xe.convert(it),0);const Tt=k!==null?X.get(k).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,Tt);const Ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Hc(B,Ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ae),B.deleteBuffer(He),B.deleteSync(Ft),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,V=null,K=0){const Y=Math.pow(2,-K),$=Math.floor(y.image.width*Y),Ae=Math.floor(y.image.height*Y),Pe=V!==null?V.x:0,Te=V!==null?V.y:0;J.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Pe,Te,$,Ae),_.unbindTexture()},this.copyTextureToTexture=function(y,V,K=null,Y=null,$=0,Ae=0){let Pe,Te,Oe,ze,Qe,it,He,Tt,Ft;const Ut=y.isCompressedTexture?y.mipmaps[Ae]:y.image;if(K!==null)Pe=K.max.x-K.min.x,Te=K.max.y-K.min.y,Oe=K.isBox3?K.max.z-K.min.z:1,ze=K.min.x,Qe=K.min.y,it=K.isBox3?K.min.z:0;else{const Ot=Math.pow(2,-$);Pe=Math.floor(Ut.width*Ot),Te=Math.floor(Ut.height*Ot),y.isDataArrayTexture?Oe=Ut.depth:y.isData3DTexture?Oe=Math.floor(Ut.depth*Ot):Oe=1,ze=0,Qe=0,it=0}Y!==null?(He=Y.x,Tt=Y.y,Ft=Y.z):(He=0,Tt=0,Ft=0);const wt=xe.convert(V.format),$t=xe.convert(V.type);let we;V.isData3DTexture?(J.setTexture3D(V,0),we=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(J.setTexture2DArray(V,0),we=B.TEXTURE_2D_ARRAY):(J.setTexture2D(V,0),we=B.TEXTURE_2D),_.activeTexture(B.TEXTURE0),_.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),_.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const sn=_.getParameter(B.UNPACK_ROW_LENGTH),gt=_.getParameter(B.UNPACK_IMAGE_HEIGHT),un=_.getParameter(B.UNPACK_SKIP_PIXELS),xn=_.getParameter(B.UNPACK_SKIP_ROWS),Gn=_.getParameter(B.UNPACK_SKIP_IMAGES);_.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),_.pixelStorei(B.UNPACK_SKIP_PIXELS,ze),_.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),_.pixelStorei(B.UNPACK_SKIP_IMAGES,it);const _i=y.isDataArrayTexture||y.isData3DTexture,Ct=V.isDataArrayTexture||V.isData3DTexture;if(y.isDepthTexture){const Ot=X.get(y),Vn=X.get(V),Pt=X.get(Ot.__renderTarget),Wn=X.get(Vn.__renderTarget);_.bindFramebuffer(B.READ_FRAMEBUFFER,Pt.__webglFramebuffer),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let xi=0;xi<Oe;xi++)_i&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(y).__webglTexture,$,it+xi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(V).__webglTexture,Ae,Ft+xi)),B.blitFramebuffer(ze,Qe,Pe,Te,He,Tt,Pe,Te,B.DEPTH_BUFFER_BIT,B.NEAREST);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||y.isRenderTargetTexture||X.has(y)){const Ot=X.get(y),Vn=X.get(V);_.bindFramebuffer(B.READ_FRAMEBUFFER,H),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,I);for(let Pt=0;Pt<Oe;Pt++)_i?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ot.__webglTexture,$,it+Pt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ot.__webglTexture,$),Ct?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vn.__webglTexture,Ae,Ft+Pt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vn.__webglTexture,Ae),$!==0?B.blitFramebuffer(ze,Qe,Pe,Te,He,Tt,Pe,Te,B.COLOR_BUFFER_BIT,B.NEAREST):Ct?B.copyTexSubImage3D(we,Ae,He,Tt,Ft+Pt,ze,Qe,Pe,Te):B.copyTexSubImage2D(we,Ae,He,Tt,ze,Qe,Pe,Te);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ct?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(we,Ae,He,Tt,Ft,Pe,Te,Oe,wt,$t,Ut.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(we,Ae,He,Tt,Ft,Pe,Te,Oe,wt,Ut.data):B.texSubImage3D(we,Ae,He,Tt,Ft,Pe,Te,Oe,wt,$t,Ut):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ae,He,Tt,Pe,Te,wt,$t,Ut.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ae,He,Tt,Ut.width,Ut.height,wt,Ut.data):B.texSubImage2D(B.TEXTURE_2D,Ae,He,Tt,Pe,Te,wt,$t,Ut);_.pixelStorei(B.UNPACK_ROW_LENGTH,sn),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),_.pixelStorei(B.UNPACK_SKIP_PIXELS,un),_.pixelStorei(B.UNPACK_SKIP_ROWS,xn),_.pixelStorei(B.UNPACK_SKIP_IMAGES,Gn),Ae===0&&V.generateMipmaps&&B.generateMipmap(we),_.unbindTexture()},this.initRenderTarget=function(y){X.get(y).__webglFramebuffer===void 0&&J.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?J.setTextureCube(y,0):y.isData3DTexture?J.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?J.setTexture2DArray(y,0):J.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){G=0,N=0,k=null,_.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const Jn=1024,ai=512,Gm=90;class Vm{constructor(e,t,n,r,s){Dt(this,"renderer");Dt(this,"camera");Dt(this,"scene");Dt(this,"terrain");Dt(this,"texture");Dt(this,"W");Dt(this,"H");Dt(this,"maxElev",0);Dt(this,"minElev",0);Dt(this,"cam");Dt(this,"fitDist");Dt(this,"needsRender",!0);Dt(this,"onCameraChange",null);Dt(this,"world");Dt(this,"hlUniforms",{hoverId:{value:new st(-10,-10)},selId:{value:new st(-10,-10)}});Dt(this,"modeUniforms",{provDark:{value:.1},hierK:{value:1},washFlat:{value:0}});Dt(this,"paperUniforms",{paperLand:{value:new Ht},paperSea:{value:new Ht},paperKL:{value:0},paperKS:{value:0}});Dt(this,"washData");Dt(this,"washTex");Dt(this,"idW",0);Dt(this,"idH",0);Dt(this,"vertElev");this.world=e;const{W:a,H:o}=e;this.W=a,this.H=o;const l=Jn+1,c=ai+1;this.vertElev=new Float32Array(l*c);{const{height:S,seaBase:L,land:R}=e,U=Math.max(1,Math.round(a/Jn/2)),z=Math.max(1,Math.round(o/ai/2));for(let H=0;H<c;H++){const I=Math.round(H/ai*(o-1));for(let G=0;G<l;G++){const N=Math.round(G/Jn*(a-1));let k=0,Q=0,oe=0,se=0;for(let We=-z;We<=z;We++){const ut=Math.min(o-1,Math.max(0,I+We));for(let Ve=-U;Ve<=U;Ve++){const te=Math.min(a-1,Math.max(0,N+Ve)),le=ut*a+te;k+=S[le],Q++,R[le]&&(oe+=S[le],se++)}}let ue=Math.max(0,k/Q-L);if(se>0){const We=Math.max(0,oe/se-L);ue=Math.max(ue,We*Math.min(1,se/Q*2.4))}this.vertElev[H*l+G]=Math.pow(ue,.92)*Gm}}}this.renderer=new km({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.id="gl",n.prepend(this.renderer.domElement),this.scene=new _u;const h=new at("#878f83");this.scene.background=h,this.camera=new dn(50,window.innerWidth/window.innerHeight,2,16e3),this.texture=new Do(t),this.texture.colorSpace=tn,this.texture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.texture.generateMipmaps=!0,this.texture.minFilter=En,this.texture.magFilter=Wt;const u=new Vi(a,o,Jn,ai),f=u.attributes.position;let g=0;for(let S=0;S<f.count;S++){const L=this.vertElev[S];L>g&&(g=L),f.setZ(S,L)}this.maxElev=g,u.rotateX(-Math.PI/2),u.computeVertexNormals();const v=(()=>{const R=document.createElement("canvas");R.width=256,R.height=256;const U=R.getContext("2d"),z=U.createImageData(256,256),H=[];for(let N=0;N<1024;N++){let k=N*374761393+668265263|0;k=Math.imul(k^k>>>13,1274126177),H.push(((k^k>>>16)>>>0)/4294967295)}const I=N=>N*N*(3-2*N);for(let N=0;N<256;N++)for(let k=0;k<256;k++){const Q=k/256*32,oe=N/256*32,se=Q|0,ue=oe|0,We=I(Q-se),ut=I(oe-ue),Ve=(se+1)%32,te=(ue+1)%32,le=H[ue*32+se],Z=H[ue*32+Ve],Fe=H[te*32+se],Ge=H[te*32+Ve];let Ue=le+(Z-le)*We+(Fe-le)*ut+(le-Z-Fe+Ge)*We*ut;const ht=k/256*32*4,qe=N/256*32*4,je=ht|0,Ke=qe|0,et=I(ht-je),At=I(qe-Ke),bt=(je+1)%128,Lt=(Ke+1)%128,xt=(_,W)=>H[_%32*32+W%32],lt=xt(Ke,je),vt=xt(Ke,bt),B=xt(Lt,je),Nt=xt(Lt,bt);Ue=Ue*.65+(lt+(vt-lt)*et+(B-lt)*At+(lt-vt-B+Nt)*et*At)*.35;const rt=(N*256+k)*4,P=Ue*255|0;z.data[rt]=P,z.data[rt+1]=P,z.data[rt+2]=P,z.data[rt+3]=255}U.putImageData(z,0,0);const G=new Do(R);return G.wrapS=G.wrapT=Wr,G.minFilter=En,G.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),G})();let T;if(r&&this.renderer.capabilities.maxTextureSize>=r.width)T=new Ht(r),this.idW=r.width,this.idH=r.height;else{const S=new Uint8Array(a*o*4);for(let L=0;L<o;L++)for(let R=0;R<a;R++){const U=e.rawGrid[L*a+R],z=((o-1-L)*a+R)*4;S[z]=U&255,S[z+1]=U>>8&255,S[z+3]=255}T=new ci(S,a,o,Qt),this.idW=a,this.idH=o}T.minFilter=Bt,T.magFilter=Bt,T.generateMipmaps=!1,T.needsUpdate=!0,this.washData=new Uint8Array(256*256*4),this.washTex=new ci(this.washData,256,256,Qt),this.washTex.minFilter=this.washTex.magFilter=Bt;const p=new Uint8Array(256*256*4),d=new Uint8Array(256*256*4);{const{rawCounty:S,rawLand:L,cDuchy:R,dKing:U,kEmp:z}=e;for(let H=0;H<65536;H++){const I=S[H],G=I>=0?R[I]:-1,N=G>=0?U[G]:-1,k=N>=0?z[N]:-1,Q=I>=0?I:65535,oe=G>=0?G:65535,se=H*4;p[se]=Q&255,p[se+1]=Q>>8,p[se+2]=oe&255,p[se+3]=oe>>8,d[se]=N>=0?N:255,d[se+1]=k>=0?k:255,d[se+2]=L[H]?255:0,d[se+3]=255}}const b=new ci(p,256,256,Qt),C=new ci(d,256,256,Qt);for(const S of[b,C])S.minFilter=S.magFilter=Bt,S.needsUpdate=!0;const x=new Uint8Array(a*o*4);{const{shade:S,land:L,coastD:R}=e;for(let U=0;U<o;U++)for(let z=0;z<a;z++){const H=U*a+z,I=((o-1-U)*a+z)*4;x[I]=Math.max(0,Math.min(255,(S[H]-.42)/.88*255))|0,x[I+1]=s?s[H]:0,x[I+2]=L[H]?24+Math.min(12,R[H])*18:0,x[I+3]=255}}const E=new ci(x,a,o,Qt);E.minFilter=E.magFilter=Wt,E.generateMipmaps=!1,E.needsUpdate=!0;const M=new Zr({map:this.texture});M.onBeforeCompile=S=>{S.uniforms.detailMap={value:v},S.uniforms.provMap={value:T},S.uniforms.washMap={value:this.washTex},S.uniforms.tierMapA={value:b},S.uniforms.tierMapB={value:C},S.uniforms.shadeMap={value:E},S.uniforms.provTexel={value:new st(1/this.idW,1/this.idH)},S.uniforms.provDark=this.modeUniforms.provDark,S.uniforms.hierK=this.modeUniforms.hierK,S.uniforms.washFlat=this.modeUniforms.washFlat,S.uniforms.hoverId=this.hlUniforms.hoverId,S.uniforms.selId=this.hlUniforms.selId,S.uniforms.paperLand=this.paperUniforms.paperLand,S.uniforms.paperSea=this.paperUniforms.paperSea,S.uniforms.paperKL=this.paperUniforms.paperKL,S.uniforms.paperKS=this.paperUniforms.paperKS,S.fragmentShader=S.fragmentShader.replace("void main() {",`
      uniform sampler2D detailMap;
      uniform sampler2D provMap;
      uniform sampler2D washMap;
      uniform sampler2D tierMapA;
      uniform sampler2D tierMapB;
      uniform sampler2D shadeMap;
      uniform vec2 provTexel;
      uniform float provDark;
      uniform float hierK;
      uniform float washFlat;
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

      // flat mode (province map): full-strength fill, no snow cut-through and
      // almost no relief shading — crisp cartographic colours like a paint map
      float washA = wash.a * ( 1.0 - ss.g * 0.85 * ( 1.0 - washFlat ) ) * provLand;
      float shdW = mix( shd, clamp( 0.86 + ss.r * 0.14, 0.0, 1.0 ), washFlat );
      diffuseColor.rgb = mix( diffuseColor.rgb, wash.rgb * shdW, washA );
      // flat mode: calm single-tone sea hiding the cloud fog baked into the
      // base texture, so the coastline reads at id-map precision
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.302, 0.353, 0.373 ),
        washFlat * ( 1.0 - provLand ) * 0.96 );
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
      diffuseColor.rgb *= mix( 1.0, pgl, 0.30 * provLand * paperKL * ( 1.0 - washFlat * 0.8 ) );
      vec3 ps = texture2D( paperSea, vMapUv * vec2( 12.0, 6.0 ) ).rgb;
      float pgs = dot( ps, vec3( 0.3333 ) ) * 3.03;
      float seaF = ( 1.0 - provLand ) * paperKS * ( 1.0 - washFlat * 0.75 );
      diffuseColor.rgb *= mix( 1.0, pgs, seaF * 0.42 );
      diffuseColor.rgb = mix( diffuseColor.rgb, ps * 1.10, seaF * 0.15 );`)},this.terrain=new cn(u,M),this.scene.add(this.terrain);const w=new cn(new Vi(a*8,o*8),new Zr({color:new at("#42504f")}));w.geometry.rotateX(-Math.PI/2),w.position.y=-1.2,this.scene.add(w);const m=o*1.15/(2*Math.tan(this.camera.fov*Math.PI/180/2));this.fitDist=Math.max(m,a/(2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.aspect)*1.06),this.scene.fog=new Wa(h,this.fitDist*.75,this.fitDist*2.1),this.cam={tx:e.landCX-a/2,tz:e.landCY-o/2,dist:this.fitDist*.72,pitch:os.degToRad(52),yaw:0},this.applyCamera(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.invalidate()})}elevAtGrid(e,t){const{W:n,H:r}=this.world,s=Jn+1;let a=e/(n-1)*Jn,o=t/(r-1)*ai;a<0&&(a=0),o<0&&(o=0),a>Jn-.001&&(a=Jn-.001),o>ai-.001&&(o=ai-.001);const l=a|0,c=o|0,h=a-l,u=o-c,f=c*s+l,g=this.vertElev[f],v=this.vertElev[f+1],T=this.vertElev[f+s],p=this.vertElev[f+s+1];return g+(v-g)*h+(T-g)*u+(g-v-T+p)*h*u}elevAtWorld(e,t){return this.elevAtGrid(e+this.W/2,t+this.H/2)}applyCamera(){const e=this.cam,t=this.elevAtWorld(e.tx,e.tz)*.5,n=Math.cos(e.pitch),r=Math.sin(e.pitch);this.camera.position.set(e.tx+Math.sin(e.yaw)*n*e.dist,t+r*e.dist,e.tz+Math.cos(e.yaw)*n*e.dist),this.camera.lookAt(e.tx,t,e.tz),this.invalidate(),this.onCameraChange&&this.onCameraChange()}clampCamera(){const e=this.cam;e.dist=Math.max(70,Math.min(this.fitDist*1.25,e.dist)),e.pitch=Math.max(os.degToRad(28),Math.min(os.degToRad(80),e.pitch)),e.yaw=Math.max(-1,Math.min(1,e.yaw));const t=this.W*.62,n=this.H*.72;e.tx=Math.max(-t,Math.min(t,e.tx)),e.tz=Math.max(-n,Math.min(n,e.tz))}invalidate(){this.needsRender=!0}setPaperTextures(e,t){const n=new zl,r=[[e,this.paperUniforms.paperLand,this.paperUniforms.paperKL],[t,this.paperUniforms.paperSea,this.paperUniforms.paperKS]];for(const[s,a,o]of r)n.load(s,l=>{l.wrapS=l.wrapT=Xr,l.minFilter=En,l.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),a.value=l,o.value=1,this.invalidate()})}setHover(e){const t=this.hlUniforms.hoverId.value;e<0?t.set(-10,-10):t.set(e&255,e>>8&255),this.invalidate()}setSelected(e){const t=this.hlUniforms.selId.value;e<0?t.set(-10,-10):t.set(e&255,e>>8&255),this.invalidate()}setWash(e,t,n,r=!1){this.washData.set(e),this.washTex.needsUpdate=!0,this.modeUniforms.provDark.value=t,this.modeUniforms.hierK.value=n?1:0,this.modeUniforms.washFlat.value=r?1:0,this.invalidate()}render(){this.needsRender&&(this.needsRender=!1,this.renderer.render(this.scene,this.camera))}ndc(e,t){return new st(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1)}pickPlane(e,t){const n=new Ho;n.setFromCamera(this.ndc(e,t),this.camera);const r=-n.ray.origin.y/n.ray.direction.y;return!isFinite(r)||r<=0?null:n.ray.origin.clone().addScaledVector(n.ray.direction,r)}pickGround(e,t){const n=new Ho;n.setFromCamera(this.ndc(e,t),this.camera);const r=n.ray.origin,s=n.ray.direction;if(s.y>=-1e-5)return null;const a=Math.max(0,(r.y-(this.maxElev+2))/-s.y),o=r.y/-s.y,l=320;let c=a,h=-1;for(let d=0;d<=l;d++){const b=a+(o+4-a)*d/l,C=r.x+s.x*b,x=r.y+s.y*b,E=r.z+s.z*b;if(x<=this.elevAtWorld(C,E)){h=b;break}c=b}if(h<0)return null;let u=c,f=h;for(let d=0;d<18;d++){const b=(u+f)/2,C=r.x+s.x*b,x=r.y+s.y*b,E=r.z+s.z*b;x<=this.elevAtWorld(C,E)?f=b:u=b}const g=r.x+s.x*f,v=r.z+s.z*f,T=g+this.W/2,p=v+this.H/2;return T<0||p<0||T>=this.W||p>=this.H?null:{gx:T,gy:p}}projectGrid(e,t,n=3){const r=new q(e-this.W/2,this.elevAtGrid(e,t)+n,t-this.H/2);return r.clone().sub(this.camera.position).dot(this.camera.getWorldDirection(new q))<=0?null:(r.project(this.camera),[(r.x*.5+.5)*window.innerWidth,(1-(r.y*.5+.5))*window.innerHeight])}}function Or(i){const e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Wm(i,e,t){let n=2.6,r=5;return i.startsWith("rock")?(n=1.4,r=3.8):/^b\d+_/.test(i)&&(i.endsWith("castle")?(n=4.4,r=4):i.endsWith("temple")?(n=3.9,r=4.4):(n=3.2,r=5)),Math.min(n/Math.max(.001,e),r/Math.max(.001,t))}function hl(i){let e=0;for(const t of i.parts)e=Math.max(e,t.hi[0]-t.lo[0],t.hi[2]-t.lo[2]);return e}async function Xm(i,e){const t=await fetch(i+"map/objects/models.json");if(!t.ok)throw new Error("models.json HTTP "+t.status);const n=await t.json(),r=new nr,s=e.W,a=e.H,o=new zl,l=new Map,c=M=>{let w=l.get(M);return w||(w=o.load(i+"map/objects/"+M,()=>e.invalidate()),w.colorSpace=tn,w.anisotropy=4,l.set(M,w)),w},h=new zu(16773853,9076848,1.9),u=new Gu(16772812,2.1);u.position.set(-.55,1,-.7),r.add(h,u);const f=new Map,g=M=>{let w=f.get(M);if(w)return w;w=[];for(const m of n.models[M].parts){const S=new Uint16Array(Or(m.v).buffer.slice(0)),L=new Uint16Array(Or(m.u).buffer.slice(0)),R=Or(m.x).buffer.slice(0),U=S.length/3,z=new Float32Array(S.length);for(let G=0;G<3;G++){const N=m.lo[G],k=m.hi[G]-m.lo[G];for(let Q=0;Q<U;Q++)z[Q*3+G]=N+S[Q*3+G]/65535*k}const H=new Float32Array(L.length);for(let G=0;G<L.length;G++)H[G]=L[G]/65535;const I=new Rn;I.setAttribute("position",new rn(z,3)),I.setAttribute("uv",new rn(H,2)),I.setIndex(new rn(m.x32?new Uint32Array(R):new Uint16Array(R),1)),I.computeVertexNormals(),w.push(I)}return f.set(M,w),w},v=new Map,T=(M,w)=>{const m=M+(w?"|f":"");let S=v.get(m);return S||(S=new Iu({map:c(M),alphaTest:w?.45:.6,side:w?yn:zn}),v.set(m,S)),S},p=new Rt,d=new mi,b=new q(0,1,0),C=new q,x=new q;for(const[M,w]of Object.entries(n.inst)){const m=n.models[M];if(!m)continue;const S=Or(w.d),L=w.n,R=!/^b\d+_/.test(M)&&!M.startsWith("rock"),U=Wm(M,m.hgt,hl(m)),H=g(M).map((I,G)=>{const N=new Lo(I,T(m.parts[G].tex,R),L);return N.frustumCulled=!1,N});for(let I=0;I<L;I++){const G=I*6,N=S[G]|S[G+1]<<8,k=S[G+2]|S[G+3]<<8,Q=S[G+4]/255*Math.PI*2,oe=(.25+S[G+5]/255*2.75)*U,se=e.elevAtGrid(N,k);d.setFromAxisAngle(b,Q),p.compose(C.set(N-s/2,se,k-a/2),d,x.set(oe,oe,oe));for(const ue of H)ue.setMatrixAt(I,p)}for(const I of H)I.instanceMatrix.needsUpdate=!0,r.add(I)}const E=new Map;for(const M of n.spec)n.models[M.k]&&(E.get(M.k)??E.set(M.k,[]).get(M.k)).push(M);for(const[M,w]of E){const m=n.models[M],S=g(M),L=hl(m),R=4/Math.max(.001,m.hgt),U=Math.min(17/Math.max(.001,m.hgt),22/Math.max(.001,L)),z=S.map((H,I)=>{const G=new Lo(H,T(m.parts[I].tex,!1),w.length);return G.frustumCulled=!1,G});w.forEach((H,I)=>{const G=Math.max(e.elevAtGrid(H.x,H.y),.15),N=Math.min(Math.max(H.s*.5*1.6,R),Math.max(R,U));d.setFromAxisAngle(b,H.r),p.compose(C.set(H.x-s/2,G,H.y-a/2),d,x.set(N,N,N));for(const k of z)k.setMatrixAt(I,p)});for(const H of z)H.instanceMatrix.needsUpdate=!0,r.add(H)}return e.scene.add(r),e.invalidate(),r}function Bs(i){const{np:e,pArea:t,pCX:n,pCY:r,W:s,H:a}=i;function o(d,b,C){const x=new Float64Array(d),E=new Float64Array(d),M=new Float64Array(d),w=new Float64Array(d),m=new Float64Array(d),S=new Float64Array(d);for(let R=0;R<e;R++){const U=b[R];if(U<0)continue;const z=t[R],H=n[R],I=r[R];x[U]+=H*z,E[U]+=I*z,M[U]+=z,w[U]+=H*H*z,m[U]+=I*I*z,S[U]+=H*I*z}const L=[];for(let R=0;R<d;R++){if(M[R]<1)continue;const U=x[R]/M[R],z=E[R]/M[R],H=w[R]/M[R]-U*U,I=m[R]/M[R]-z*z,G=S[R]/M[R]-U*z,N=.5*Math.atan2(2*G,H-I),k=H+I,Q=H*I-G*G,oe=Math.sqrt(Math.max(0,k*k/4-Q));L.push({x:U,y:z,angle:N,ext:Math.sqrt(Math.max(1,k/2+oe)),name:C[R],area:M[R],idx:R})}return L}const l=o(i.nKing,i.kingOf,i.kingName),c=o(i.nEmp,i.empOf,i.empName),h=new Float64Array(i.nCounty),u=new Float64Array(i.nCounty),f=new Float64Array(i.nCounty);for(let d=0;d<e;d++){const b=i.countyOf[d];b<0||(h[b]+=n[d]*t[d],u[b]+=r[d]*t[d],f[b]+=t[d])}const g=(d,b)=>{for(const C of d){const x=b[C.idx];x>=0&&f[x]>0&&(C.capX=h[x]/f[x],C.capY=u[x]/f[x])}};g(l,i.kCapital),g(c,i.eCapital);const v=i.seaLabels.map(d=>({x:d.x,y:d.y,name:d.n,area:d.a,ext:Math.sqrt(d.a)*.9})),T=[],p=Math.max(40,s*a/e*.25);for(let d=0;d<e;d++)t[d]<p||T.push({x:n[d],y:r[d],name:i.provName[d],ext:Math.hypot(i.pMaxX[d]-i.pMinX[d],i.pMaxY[d]-i.pMinY[d])/2,area:t[d]});return{king:l,emp:c,prov:T,sea:v,straits:i.straits,duchy:o(i.nDuchy,i.duchyOf,i.duchyName),county:o(i.nCounty,i.countyOf,i.countyName)}}const zs='"Iowan Old Style",Palatino,Georgia,serif',Hs=new Map;function qm(i,e){let t=Hs.get(i);if(t!==void 0)return t&&t.complete&&t.naturalWidth?t:null;const n=new Image;return n.onload=()=>{e&&e()},n.onerror=()=>Hs.set(i,null),n.src=i,Hs.set(i,n),null}function Ym(i,e,t,n,r,s){const a=window.innerWidth,o=window.innerHeight;i.clearRect(0,0,a,o),i.textAlign="center",i.textBaseline="middle";const l=t.cam.dist,c=l>t.fitDist*.55,h=l<680,u=[],f=[];document.querySelectorAll(".panel").forEach(b=>{if(b.classList.contains("hidden"))return;const C=getComputedStyle(b);if(C.display==="none"||C.visibility==="hidden")return;const x=b.getBoundingClientRect();x.width&&x.height&&f.push(x)});const g=44;function v(b,C,x,E){if(b-x<g||b+x>a-g||C-E<g||C+E>o-g)return!0;for(const M of f)if(b+x>M.left-6&&b-x<M.right+6&&C+E>M.top-6&&C-E<M.bottom+6)return!0;return!1}function T(b,C,x,E){if(v(b,C,x,E))return!1;for(const M of u)if(Math.abs(b-M.x)<x+M.hw&&Math.abs(C-M.y)<E+M.hh)return!1;return!0}function p(b){const C=t.projectGrid(b.x,b.y);if(!C)return null;const x=Math.cos(b.angle)*b.ext,E=Math.sin(b.angle)*b.ext,M=t.projectGrid(b.x-x,b.y-E),w=t.projectGrid(b.x+x,b.y+E);if(!M||!w)return null;let m=Math.atan2(w[1]-M[1],w[0]-M[0]);return m>Math.PI/2&&(m-=Math.PI),m<-Math.PI/2&&(m+=Math.PI),{sx:C[0],sy:C[1],screenExt:Math.hypot(w[0]-M[0],w[1]-M[1]),rot:m}}function d(b,C,x,E,M,w){const m=p(b);if(!m||m.sx<-320||m.sx>a+320||m.sy<-200||m.sy>o+200)return;i.font=`600 ${C}px ${zs}`;const S=b.name.toUpperCase();let L=0;const R=[];for(const N of S){const k=i.measureText(N).width;R.push(k),L+=k}let U=S.length>1?(M-L)/(S.length-1):0;U=Math.max(C*.08,Math.min(U,C*.9));const z=L+U*(S.length-1),H=z*.5*.8+8,I=C*.62+5;if(!T(m.sx,m.sy,H,I))return;u.push({x:m.sx,y:m.sy,hw:H,hh:I}),i.save(),i.translate(m.sx,m.sy),i.rotate(m.rot),i.globalAlpha=w,i.lineJoin="round";let G=-z/2;for(let N=0;N<S.length;N++){const k=S[N],Q=R[N],oe=G+Q/2;i.lineWidth=C*.2,i.strokeStyle=E,i.strokeText(k,oe,0),i.fillStyle=x,i.fillText(k,oe,0),G+=Q+U}i.restore()}{const b=Math.max(20,Math.min(46,9e3/l)),C=[],x=(E,M,w,m)=>{const S=t.projectGrid(M.capX??M.x,M.capY??M.y,4);if(!S)return;let L=S[0];const R=S[1];if(L<-w||L>a+w||R<-w||R>o+w*2)return;for(let z=0,H=!0;H&&z<8;z++){H=!1;for(const I of C)Math.abs(L-I.x)<(w+I.s)/2&&Math.abs(R-I.y)<(w+I.s)/2&&(L=I.x+(w+I.s)/2+3,H=!0)}const U=qm(`${n}${E}_${M.idx}.png`,r??null);U&&(i.save(),i.shadowColor="rgba(0,0,0,0.55)",i.shadowBlur=6,i.shadowOffsetY=2,i.drawImage(U,L-w/2,R-w,w,w),i.restore(),C.push({x:L,y:R,s:w}),m&&u.push({x:L,y:R-w/2,hw:w/2+3,hh:w/2+3}))};for(const E of e.emp)x("e",E,b,!0);for(const E of e.king)x("k",E,b,!0);if(s!=null&&s.d)for(const E of e.duchy)x("d",E,b*.78,!1);if(s!=null&&s.c)for(const E of e.county)x("c",E,b*.6,!1)}{i.save(),i.setLineDash([7,5]),i.lineWidth=1.6,i.strokeStyle="rgba(146, 44, 30, 0.75)";for(const b of e.straits){const C=t.projectGrid(b[0],b[1],1.5),x=t.projectGrid(b[2],b[3],1.5);if(!C||!x)continue;const E=Math.hypot(x[0]-C[0],x[1]-C[1]);E<7||E>620||Math.max(C[0],x[0])<0||Math.min(C[0],x[0])>a||Math.max(C[1],x[1])<0||Math.min(C[1],x[1])>o||(i.beginPath(),i.moveTo(C[0],C[1]),i.lineTo(x[0],x[1]),i.stroke())}i.restore()}if(c)for(const b of[...e.emp].sort((C,x)=>x.area-C.area)){const C=p(b);if(!C)continue;const x=Math.max(22,Math.min(C.screenExt*2*.15,56));d(b,x,"rgba(26,20,12,0.86)","rgba(238,228,198,0.4)",Math.min(C.screenExt*2*.9,a*.62),.9)}{const b=c?.85:1;for(const C of[...e.king].sort((x,E)=>E.area-x.area)){const x=p(C);if(!x)continue;const E=x.screenExt*2;if(E<62)continue;let M=Math.max(13,Math.min(E*.18,40));M*.62>E*.95/Math.max(3,C.name.length)&&(M=Math.max(12,E*.95/(C.name.length*.62))),d(C,M,"rgba(26,20,12,0.94)","rgba(238,226,192,0.5)",Math.min(E*.86,a*.5),b)}}{i.save(),i.textAlign="center",i.textBaseline="middle";for(const b of e.sea){const C=t.projectGrid(b.x,b.y,1);if(!C)continue;const[x,E]=C;if(x<-60||x>a+60||E<-40||E>o+40)continue;const M=t.projectGrid(b.x+b.ext,b.y,1),w=M?Math.abs(M[0]-x):0,m=Math.max(10,Math.min(w*.3,26));if(m<10)continue;i.font=`italic 600 ${m}px ${zs}`;const S=i.measureText(b.name).width*.5+6,L=m*.6+3;T(x,E,S,L)&&(u.push({x,y:E,hw:S,hh:L}),i.globalAlpha=.78,i.lineWidth=m*.18,i.strokeStyle="rgba(26,34,34,0.5)",i.strokeText(b.name,x,E),i.fillStyle="rgba(205,221,218,0.92)",i.fillText(b.name,x,E))}i.globalAlpha=1,i.restore()}if(h){const b=Math.min(1,(680-l)/220);for(const C of[...e.prov].sort((x,E)=>E.area-x.area)){const x=t.projectGrid(C.x,C.y);if(!x)continue;const[E,M]=x;if(E<0||E>a||M<0||M>o)continue;const w=t.projectGrid(C.x+C.ext,C.y),m=w?Math.abs(w[0]-E):0,S=Math.max(9,Math.min(m*.32,16));if(S<9)continue;i.font=`600 ${S}px ${zs}`;const L=i.measureText(C.name).width*.5+4,R=S*.6+3;T(E,M,L,R)&&(u.push({x:E,y:M,hw:L,hh:R}),i.globalAlpha=b,i.lineWidth=S*.28,i.strokeStyle="rgba(242,232,202,0.78)",i.strokeText(C.name,E,M),i.fillStyle="rgba(26,20,10,0.96)",i.fillText(C.name,E,M))}}i.globalAlpha=1}const Jt="/ck3/world/",Me=i=>document.getElementById(i),pl=()=>new Promise(i=>requestAnimationFrame(()=>i())),$m=[["political","Political"],["province","Provinces"],["terrain","Terrain"],["elevation","Elevation"],["culture","Culture"],["faith","Faith"],["development","Development"]];async function Km(){const i=Me("loading"),e=async A=>{i.style.display="flex",i.textContent=A,await pl(),await pl()},t=new Promise(A=>{const O=new Image;O.onload=()=>A(O),O.onerror=()=>A(null),O.src=Jt+"map/prov8.png"});await e("Loading the map…");const n=await tc(1420,Jt);Me("date").textContent=`${n.date} · Anno Aldermarki`,await e("Shading the relief…"),nc(n),await e("Baking the map…");const r=ic(n);n.cloud=null;const s=document.createElement("canvas");s.width=n.W,s.height=n.H;const a=s.getContext("2d",{willReadFrequently:!0}),o=a.createImageData(n.W,n.H);let l="political",c=!1;is(n,r,l,o),a.putImageData(o,0,0),await e("Raising the terrain…");const h=await t,u=new Vm(n,s,document.body,h,r.snow),f=u.renderer.domElement;u.setPaperTextures(Jt+"map/ui/paper_land.png",Jt+"map/ui/paper_sea.png");{const A=document.createElement("img");A.src=Jt+"map/ui/vignette.png",A.id="vig",A.alt="",document.body.appendChild(A)}const g=new Uint8Array(65536).fill(40);for(let A=0;A<n.np;A++)g[n.rawOf[A]]=n.devOf[A];const v=new Uint8Array(256*256*4);function T(A){v.fill(0);const{rawCounty:O,rawCult:ae,rawFaith:de,rawLand:ye,cDuchy:Ie,dKing:tt,kEmp:Re,kColor:Xe,cultCol:ft,faithCol:St}=n,D=A==="province"?0:.16,j=(pt,Je,mt)=>{const yt=Je[0]*.3+Je[1]*.59+Je[2]*.11,y=pt*4;v[y]=Je[0]+(yt-Je[0])*D,v[y+1]=Je[1]+(yt-Je[1])*D,v[y+2]=Je[2]+(yt-Je[2])*D,v[y+3]=mt*255|0};if(A!=="terrain"&&A!=="elevation"){for(let pt=0;pt<65536;pt++)if(ye[pt])if(A==="political"){const Je=O[pt],mt=Je>=0?Ie[Je]:-1,yt=mt>=0?tt[mt]:-1;yt>=0&&j(pt,Xe[yt],.52)}else if(A==="province"){const Je=pt*2654435761>>>0;j(pt,[80+(Je&175),80+(Je>>8&175),80+(Je>>16&175)],.97)}else if(A==="culture"){const Je=ae[pt];Je>=0&&j(pt,ft[Je],.5)}else if(A==="faith"){const Je=de[pt];Je>=0&&j(pt,St[Je],.5)}else A==="development"&&j(pt,sc(g[pt]),.56)}const Ee=A==="terrain"||A==="elevation";u.setWash(v,Ee?0:A==="province"?.42:.1,A==="political"||A==="culture"||A==="faith"||A==="development",A==="province");const ve=document.getElementById("vig");ve&&(ve.style.display=A==="province"?"none":"");const De=A==="elevation";De!==c&&(c=De,is(n,r,A,o),a.putImageData(o,0,0),u.texture.needsUpdate=!0),u.invalidate()}T(l);let p=null;Xm(Jt,u).then(A=>{p=A;const O=Me("objs");O&&(O.className="on")}).catch(A=>console.warn("map objects unavailable:",A));const d=Me("labels"),b=d.getContext("2d");let C=Bs(n),x=!0;const E={d:!1,c:!1};for(const A of["d","c"])fetch(`${Jt}map/ui/coa/${A}_0.png`,{method:"HEAD"}).then(O=>{O.ok&&(E[A]=!0,x=!0)}).catch(()=>{});const M=Math.min(2,window.devicePixelRatio||1),w=()=>{d.width=window.innerWidth*M,d.height=window.innerHeight*M,d.style.width=window.innerWidth+"px",d.style.height=window.innerHeight+"px",b.setTransform(M,0,0,M,0,0),x=!0};w(),window.addEventListener("resize",w),u.onCameraChange=()=>{x=!0};const m=["No Holding","Castle","City","Temple","Tribe"],S=(A,...O)=>{const ae=A.map(de=>de+".png");for(const de of O){const ye=n.artPools[de];ye&&ae.push(...ye)}return ae},L={castle:S(["holding_1","art_fortress"],"castle"),city:S(["art_city1","art_city2"],"city"),port:S(["art_port"],"port"),temple:S(["holding_3"],"temple"),tribal:S(["art_tribal"],"tribal"),terr:{[ke.BEACH]:S(["terr_beach","art_coast"],"coast","port"),[ke.PLAINS]:S(["terr_plains"],"plains"),[ke.FARM]:S(["terr_farm","art_farm"],"farm"),[ke.FOREST]:S(["terr_forest"],"forest","jungle"),[ke.HILLS]:S(["terr_hills"],"mountain"),[ke.DRY]:S(["terr_desert","art_desert","art_ruin","art_river"],"desert","ruin","river"),[ke.WET]:S(["terr_wet","art_swamp","art_lakes"],"swamp"),[ke.MTN]:S(["terr_mtn"],"mountain"),[ke.SNOW]:S(["terr_mtn"],"snow","mountain")}},R=new Map;function U(A){var ae;const O=R.get(A);return O!==void 0?O:((ae=n.picOf)==null?void 0:ae[A])??""}const z=A=>`<span class="swatch" style="background:rgb(${A[0]},${A[1]},${A[2]})"></span>`;let H=-1;function I(A){H=A,u.setSelected(A<0?-1:n.rawOf[A]);const O=Me("sel");if(A<0){O.style.display="none";return}Me("faith").classList.remove("open");const ae=n.countyOf[A],de=n.duchyOf[A],ye=n.kingOf[A],Ie=n.empOf[A],tt=n.cultureOf[A],Re=n.faithOf[A],Xe=n.holdingOf[A];Me("selName").textContent=n.provName[A];let ft=ae>=0?`${m[Xe]} in the County of ${n.countyName[ae]}`:"Uncolonised wasteland";ae>=0&&Ie>=0&&n.eCapital[Ie]===ae?ft+=" · Imperial Capital":ae>=0&&ye>=0&&n.kCapital[ye]===ae&&(ft+=" · Royal Capital"),Me("selSub").textContent=ft;const St=[],D=(mt,yt)=>`<img class="coa" src="${Jt}map/ui/coa/${mt}_${yt}.png" alt="" onerror="this.remove()">`;de>=0&&St.push(`<span class="chip" style="--cc:#8a7f66">${n.duchyName[de]}</span>`),ye>=0&&St.push(`<span class="chip flagged rlink" data-realm="k:${ye}" title="About this realm">${D("k",ye)}${n.kingName[ye]}</span>`),Ie>=0&&St.push(`<span class="chip flagged rlink" data-realm="e:${Ie}" title="About this realm">${D("e",Ie)}${n.empName[Ie]}</span>`),Me("selChips").innerHTML=St.join(""),Me("selChips").querySelectorAll(".rlink").forEach(mt=>{mt.onclick=()=>{const[yt,y]=mt.dataset.realm.split(":");We(yt,+y)}});const j=mt=>!mt||/^wasteland/i.test(mt),Ee=Re>=0&&n.faithHasIcon[Re]?`<img class="fic" src="${Jt}map/ui/faith_${Re}.png" alt="">`:Re>=0?z(n.faithCol[Re]):"";Me("selBody").innerHTML=`<div class="k">Terrain</div><div>${ti[n.pTerr[A]]}</div>`+(tt>=0&&!j(n.cultName[tt])?`<div class="k">Culture</div><div>${z(n.cultCol[tt])}<a class="flink" data-culture="${tt}" title="About this culture">${n.cultName[tt]}</a></div>`:"")+(Re>=0&&!j(n.faithName[Re])?`<div class="k">Faith</div><div>${Ee}<a class="flink" data-faith="${Re}" title="About this faith">${n.faithName[Re]}</a></div>`:"")+`<div class="k">Development</div><div>${n.devOf[A]}</div>`,Me("selBody").querySelectorAll("a.flink").forEach(mt=>{mt.onclick=yt=>{yt.preventDefault(),mt.dataset.faith?oe(+mt.dataset.faith):mt.dataset.culture&&se(+mt.dataset.culture)}});const ve=(mt,yt)=>mt&&yt?`<a class="flink" data-char="${mt}" title="About this ruler">${yt}</a>`:yt??"",De=[];if(ae>=0){const mt=n.countyHolder[ae];De.push(`<div><span class="k">County Holder:</span> <b>${j(mt)?"uncolonised":ve(n.countyHolderKey[ae],mt)}</b></div>`)}if(ye>=0&&n.kingHolder[ye]&&De.push(`<div><span class="k">${n.kingName[ye]}:</span> <b>${ve(n.kingHolderKey[ye],n.kingHolder[ye])}</b></div>`),Ie>=0&&n.empHolder[Ie]&&De.push(`<div><span class="k">${n.empName[Ie]}:</span> <b>${ve(n.empHolderKey[Ie],n.empHolder[Ie])}</b></div>`),Me("selHolders").innerHTML=De.join(""),Me("selHolders").style.display=De.length?"block":"none",Me("selHolders").querySelectorAll("a[data-char]").forEach(mt=>{mt.onclick=yt=>{yt.preventDefault(),ue(mt.dataset.char)}}),ae>=0){const mt=[];for(let yt=0;yt<n.np&&mt.length<40;yt++)n.countyOf[yt]===ae&&mt.push(yt===A?`<b>${n.provName[yt]}</b>`:`${n.provName[yt]}${n.holdingOf[yt]?` (${m[n.holdingOf[yt]].toLowerCase()})`:""}`);Me("selBars").innerHTML='<span class="k">Baronies:</span> '+mt.join(" · "),Me("selBars").style.display="block"}else Me("selBars").style.display="none";const pt=Me("selIllu"),Je=U(A);Je?(pt.style.display="block",pt.onerror=()=>{pt.style.display="none"},pt.src=`${Jt}map/ui/${Je}`):pt.style.display="none",O.style.display="block"}let G=null;function N(A){let O=-1,ae=0;for(let de=0;de<n.np;de++)n.countyOf[de]===A&&n.pArea[de]>ae&&(ae=n.pArea[de],O=de);O<0||(u.cam.tx=n.pCX[O]-n.W/2,u.cam.tz=n.pCY[O]-n.H/2,u.cam.dist=Math.min(u.cam.dist,320),u.clampCamera(),u.applyCamera(),I(O))}function k(A,O,ae,de){Me("sel").style.display="none",G=de,Me("faithName").innerHTML=A,Me("faithSub").textContent=O,Me("faithBody").innerHTML=ae,Me("faithMode").style.display=de?"":"none",Me("faith").classList.add("open"),Me("faithBody").querySelectorAll("a[data-county]").forEach(ye=>{ye.onclick=Ie=>{Ie.preventDefault(),N(+ye.dataset.county)}}),Me("faithBody").querySelectorAll("a[data-char]").forEach(ye=>{ye.onclick=Ie=>{Ie.preventDefault(),ue(ye.dataset.char)}}),Me("faithBody").querySelectorAll("a[data-culture]").forEach(ye=>{ye.onclick=Ie=>{Ie.preventDefault(),se(+ye.dataset.culture)}}),Me("faithBody").querySelectorAll("a[data-realm]").forEach(ye=>{ye.onclick=Ie=>{Ie.preventDefault();const[tt,Re]=ye.dataset.realm.split(":");We(tt,+Re)}})}const Q=(A,O)=>A&&O?`<a class="hsite" data-char="${A}">${O}</a>`:O??"vacant";function oe(A){const O=n.faithHasIcon[A]?`<img class="fic" src="${Jt}map/ui/faith_${A}.png" alt="">`:z(n.faithCol[A]);let ae=0;for(let Ie=0;Ie<n.np;Ie++)n.faithOf[Ie]===A&&ae++;const de=[n.faithRelig[A],n.faithAdh[A]?`followers: ${n.faithAdh[A]}s`:null,`${ae} provinces`].filter(Boolean);let ye="";n.faithDesc[A]&&(ye+=`<div class="desc">${n.faithDesc[A]}</div>`),n.faithTenets[A].length&&(ye+=`<div class="sect"><span class="k">Tenets:</span> <b>${n.faithTenets[A].join("</b> · <b>")}</b></div>`),n.faithSites[A].length&&(ye+='<div class="sect"><span class="k">Holy sites:</span> '+n.faithSites[A].map(Ie=>`<a class="hsite" data-county="${Ie.c}">${Ie.n}</a>`).join(" · ")+"</div>"),k(`${O}${n.faithName[A]}`,de.join(" · "),ye,"faith")}function se(A){let O=0;for(let ye=0;ye<n.np;ye++)n.cultureOf[ye]===A&&O++;const ae=[n.cultHeritage[A]?`${n.cultHeritage[A]} heritage`:null,n.cultLang[A]?`speaks ${n.cultLang[A]}`:null,`${O} provinces`].filter(Boolean);let de='<div class="grid" style="display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px">';n.cultEthos[A]&&(de+=`<div class="k">Ethos</div><div><b>${n.cultEthos[A]}</b></div>`),n.cultMartial[A]&&(de+=`<div class="k">Warriors</div><div>${n.cultMartial[A]}</div>`),de+="</div>",n.cultTrad[A].length&&(de+=`<div class="sect"><span class="k">Traditions:</span> <b>${n.cultTrad[A].join("</b> · <b>")}</b></div>`),k(`${z(n.cultCol[A])}${n.cultName[A]}`,ae.join(" · "),de,"culture")}function ue(A){const O=n.chars[A];if(!O)return;const ae=["Diplomacy","Martial","Stewardship","Intrigue","Learning"],de=O.b?`born ${O.b}${O.dd?`, died ${O.dd}`:""} · year is ${n.date}`:"";let ye="";O.mo&&(ye+=`<div class="desc" style="font-style:italic">“${O.mo}”</div>`);const Ie=O.sk.map((Re,Xe)=>Re==null?null:`<div class="k">${ae[Xe]}</div><div><b>${Re}</b></div>`).filter(Boolean).join("");if(Ie&&(ye+=`<div class="grid" style="display:grid;grid-template-columns:auto 1fr;gap:3px 12px;font-size:13px;margin-top:6px">${Ie}</div>`),O.tr.length){const Re=O.tr.map((Xe,ft)=>{var j;const St=((j=O.ti)==null?void 0:j[ft])??-1;return`<span class="trchip">${St>=0?`<img class="tric" src="map/ui/tr_${St}.png" alt="">`:""}<b>${Xe}</b></span>`}).join(" ");ye+=`<div class="sect"><span class="k">Traits:</span> ${Re}</div>`}const tt=O.dy?`${O.n} of House ${O.dy}`:O.n;k(tt,de,ye,null)}function We(A,O){const ae=`<img class="fic" src="${Jt}map/ui/coa/${A}_${O}.png" alt="" onerror="this.remove()">`;let de=0;const ye=A==="k"?n.kingOf:n.empOf;for(let tt=0;tt<n.np;tt++)ye[tt]===O&&de++;let Ie="";if(A==="k"){const tt=n.kEmp[O],Re=[tt>=0?`part of ${n.empName[tt]}`:"independent",`${de} provinces`];Ie+=`<div class="sect" style="padding-top:0"><span class="k">Ruler:</span> <b>${Q(n.kingHolderKey[O],n.kingHolder[O])}</b></div>`,n.kCapital[O]>=0&&(Ie+=`<div class="sect"><span class="k">Capital:</span> <a class="hsite" data-county="${n.kCapital[O]}">${n.countyName[n.kCapital[O]]}</a></div>`);const Xe=[];for(let ft=0;ft<n.nDuchy;ft++)n.dKing[ft]===O&&Xe.push(ft);Xe.length&&(Ie+='<div class="sect"><span class="k">De jure duchies:</span> '+Xe.map(ft=>`<b>${n.duchyName[ft]}</b>`).join(" · ")+"</div>"),k(`${ae}${n.kingName[O]}`,Re.join(" · "),Ie,"political")}else{const tt=[`${de} provinces`];Ie+=`<div class="sect" style="padding-top:0"><span class="k">Ruler:</span> <b>${Q(n.empHolderKey[O],n.empHolder[O])}</b></div>`,n.eCapital[O]>=0&&(Ie+=`<div class="sect"><span class="k">Capital:</span> <a class="hsite" data-county="${n.eCapital[O]}">${n.countyName[n.eCapital[O]]}</a></div>`);const Re=[];for(let Xe=0;Xe<n.nKing;Xe++)n.kEmp[Xe]===O&&Re.push(Xe);Re.length&&(Ie+='<div class="sect"><span class="k">De jure kingdoms:</span> '+Re.map(Xe=>`<a class="hsite" data-realm="k:${Xe}">${n.kingName[Xe]}</a>`).join(" · ")+"</div>"),k(`${ae}${n.empName[O]}`,tt.join(" · "),Ie,"political")}}Me("faithClose").onclick=()=>{Me("faith").classList.remove("open"),H>=0&&(Me("sel").style.display="block")},Me("faithMode").onclick=()=>{G&&(l=G,[...Me("modes").children].forEach(A=>{A.className=A.dataset.mode===G?"on":""}),T(G))};const ut=[ke.BEACH,ke.PLAINS,ke.FARM,ke.FOREST,ke.HILLS,ke.DRY,ke.WET,ke.MTN,ke.SNOW],Ve=new Map,te=new Map;let le=!1,Z=-1;const Fe=Me("edit"),Ge=Me("edName"),Ue=Me("edTerr"),ht=Me("edCult"),qe=Me("edFaith"),je=Me("edHold"),Ke=Me("edDev"),et=Me("edArtWrap"),At=Me("edArtBtn"),bt=Me("edArtThumb"),Lt=Me("edArtLabel"),xt=Me("edArtList"),lt=Me("edPrev"),vt=Me("dledits"),B=(A,O)=>{const ae=document.createElement("option");return ae.value=A,ae.textContent=O,ae};{for(const A of ut)Ue.appendChild(B(String(A),ti[A]));ht.appendChild(B("-1","(none)")),n.cultName.forEach((A,O)=>ht.appendChild(B(String(O),A))),qe.appendChild(B("-1","(none)")),n.faithName.forEach((A,O)=>qe.appendChild(B(String(O),A))),m.forEach((A,O)=>je.appendChild(B(String(O),A)))}const Nt=A=>A.replace(/\.(png|jpg)$/,"").replace(/^(art_|terr_|holding_)/,"").replace(/_/g," ");function rt(A){const O=U(A);Lt.textContent=O?Nt(O):"(no picture)",O?(bt.style.display="",bt.src=`${Jt}map/ui/${O}`):bt.style.display="none"}function P(A){var tt;const O=new Set;for(let Re=0;Re<n.np;Re++){if(Re===A)continue;const Xe=R.has(Re)?R.get(Re):((tt=n.picOf)==null?void 0:tt[Re])??"";Xe&&O.add(Xe)}const ae=U(A);let de=`<div class="arow${ae===""?" cur":""}" data-f="">(no picture)</div>`;const ye=new Set,Ie=(Re,Xe)=>{let ft="";for(const St of Xe)ye.has(St)||O.has(St)||(ye.add(St),ft+=`<div class="arow${St===ae?" cur":""}" data-f="${St}"><img loading="lazy" src="${Jt}map/ui/${St}" alt=""><span>${Nt(St)}</span></div>`);ft&&(de+=`<div class="ahdr">${Re}</div>`+ft)};Ie("Castles",L.castle),Ie("Cities",L.city),Ie("Ports",L.port),Ie("Temples",L.temple),Ie("Tribal",L.tribal);for(const Re of ut)Ie(ti[Re],L.terr[Re]??[]);xt.innerHTML=de,xt.querySelectorAll(".arow").forEach(Re=>{Re.onclick=()=>_(Re.dataset.f??"")}),rt(A)}function _(A){if(xt.classList.remove("open"),Z<0)return;const O=X(Z);A?R.set(Z,A):R.delete(Z),O.art=A,J(Z),me(),P(Z)}function W(){vt.style.display=Ve.size?"":"none",vt.textContent=`Save edits (${Ve.size})`}function X(A){te.has(A)||te.set(A,{name:n.provName[A],terrain:n.pTerr[A],culture:n.cultureOf[A],faith:n.faithOf[A],holding:n.holdingOf[A],dev:n.devOf[A]});let O=Ve.get(A);return O||(O={},Ve.set(A,O)),O}function J(A){const O=Ve.get(A),ae=te.get(A);!O||!ae||(O.name===ae.name&&delete O.name,O.terrain===ae.terrain&&delete O.terrain,O.culture===ae.culture&&delete O.culture,O.faith===ae.faith&&delete O.faith,O.holding===ae.holding&&delete O.holding,O.dev===ae.dev&&delete O.dev,O.art===""&&delete O.art,Object.keys(O).length||Ve.delete(A),W())}function ce(A,O){n.pTerr[A]=O;for(let ae=n.pMinY[A];ae<=n.pMaxY[A];ae++)for(let de=n.pMinX[A];de<=n.pMaxX[A];de++){const ye=ae*n.W+de;n.prov[ye]===A&&(n.terr[ye]=O)}rc(n,r,A),is(n,r,l,o),a.putImageData(o,0,0),u.texture.needsUpdate=!0,u.invalidate()}function me(){if(Z<0)return;const A=U(Z);if(!A){lt.style.display="none";return}lt.style.display="block",lt.onerror=()=>{lt.style.display="none"},lt.src=`${Jt}map/ui/${A}`}function ee(A){if(Z=A,u.setSelected(A<0?-1:n.rawOf[A]),A<0){Fe.style.display="none";return}Me("sel").style.display="none",Me("faith").classList.remove("open");const O=n.countyOf[A];Me("edTitle").textContent=n.provName[A],Me("edSub").textContent=(O>=0?`County of ${n.countyName[O]}`:"Uncolonised wasteland")+` · province ${n.rawOf[A]}`,Ge.value=n.provName[A],Ue.value=String(n.pTerr[A]),ht.value=String(n.cultureOf[A]),qe.value=String(n.faithOf[A]),je.value=String(n.holdingOf[A]),Ke.value=String(n.devOf[A]),P(A),me(),Fe.style.display="block"}Ge.oninput=()=>{if(Z<0)return;const A=Ge.value.trim();if(!A)return;const O=X(Z);n.provName[Z]=A,Me("edTitle").textContent=A,O.name=A,J(Z)},Ge.onchange=()=>{C=Bs(n),x=!0},Ue.onchange=()=>{if(Z<0)return;const A=+Ue.value,O=X(Z);ce(Z,A),O.terrain=A,J(Z)},ht.onchange=()=>{if(Z<0)return;const A=+ht.value,O=X(Z);n.cultureOf[Z]=A,n.rawCult[n.rawOf[Z]]=A,O.culture=A,J(Z),T(l)},qe.onchange=()=>{if(Z<0)return;const A=+qe.value,O=X(Z);n.faithOf[Z]=A,n.rawFaith[n.rawOf[Z]]=A,O.faith=A,J(Z),T(l)},je.onchange=()=>{if(Z<0)return;const A=+je.value,O=X(Z);n.holdingOf[Z]=A,O.holding=A,J(Z)},Ke.onchange=()=>{if(Z<0)return;const A=Math.max(0,Math.min(100,Math.round(+Ke.value||0)));Ke.value=String(A);const O=X(Z);n.devOf[Z]=A,g[n.rawOf[Z]]=A,O.dev=A,J(Z),T(l)},At.onclick=()=>xt.classList.toggle("open"),document.addEventListener("pointerdown",A=>{et.contains(A.target)||xt.classList.remove("open")}),Me("edRevert").onclick=()=>{const A=Z;if(A<0)return;const O=te.get(A);O&&(n.provName[A]=O.name,n.pTerr[A]!==O.terrain&&ce(A,O.terrain),n.cultureOf[A]=O.culture,n.rawCult[n.rawOf[A]]=O.culture,n.faithOf[A]=O.faith,n.rawFaith[n.rawOf[A]]=O.faith,n.holdingOf[A]=O.holding,n.devOf[A]=O.dev,g[n.rawOf[A]]=O.dev),R.delete(A),Ve.delete(A),W(),C=Bs(n),x=!0,T(l),ee(A)},Me("edClose").onclick=()=>{Fe.style.display="none",Z=-1,u.setSelected(H>=0?n.rawOf[H]:-1)},Me("editbtn").onclick=()=>{le=!le,Me("editbtn").className=le?"on":"",le?(Me("sel").style.display="none",Me("faith").classList.remove("open"),H>=0&&ee(H)):(Fe.style.display="none",Z=-1)},vt.onclick=()=>{const A=[];for(const[ae,de]of Ve){const ye={id:n.rawOf[ae],province:n.provName[ae]};de.name!==void 0&&(ye.name=de.name),de.terrain!==void 0&&(ye.terrain=ti[de.terrain]),de.culture!==void 0&&(ye.culture=de.culture>=0?n.cultName[de.culture]:null),de.faith!==void 0&&(ye.faith=de.faith>=0?n.faithName[de.faith]:null),de.holding!==void 0&&(ye.holding=m[de.holding]),de.dev!==void 0&&(ye.development=de.dev),de.art!==void 0&&(ye.picture=de.art),A.push(ye)}const O={type:"map-edits",generated:new Date().toISOString(),edited:A.length,edits:A};vt.href=URL.createObjectURL(new Blob([JSON.stringify(O,null,2)],{type:"application/json"}))},W();const ne=(A,O)=>{const ae=u.pickGround(A,O);return ae?n.prov[(ae.gy|0)*n.W+(ae.gx|0)]:-1};let he=!1,Le=!1,_e=!1,ge=-1,Ne=null,Be=[0,0],Ye=[0,0];const F=Me("tip"),pe=A=>{A!==ge&&(ge=A,u.setHover(A<0?-1:n.rawOf[A]))};f.addEventListener("contextmenu",A=>A.preventDefault()),f.addEventListener("pointerdown",A=>{if(_e=!1,Ye=[A.clientX,A.clientY],Be=[A.clientX,A.clientY],A.button===2||A.button===1)Le=!0;else{he=!0;const O=u.pickPlane(A.clientX,A.clientY);Ne=O?{x:O.x,z:O.z}:null}f.classList.add("drag"),f.setPointerCapture(A.pointerId)}),f.addEventListener("pointermove",A=>{if(Math.abs(A.clientX-Ye[0])+Math.abs(A.clientY-Ye[1])>4&&(_e=!0),he&&Ne){const O=u.pickPlane(A.clientX,A.clientY);O&&(u.cam.tx+=Ne.x-O.x,u.cam.tz+=Ne.z-O.z,u.clampCamera(),u.applyCamera())}else if(Le)u.cam.yaw-=(A.clientX-Be[0])*.004,u.cam.pitch+=(A.clientY-Be[1])*.003,u.clampCamera(),u.applyCamera();else{const O=ne(A.clientX,A.clientY);if(pe(O),O>=0){const ae=n.countyOf[O],de=n.kingOf[O],ye=n.empOf[O],Ie=n.holdingOf[O],tt=Ie?`<b>${n.provName[O]}</b> · ${m[Ie]}`:`<b>${n.provName[O]}</b>`,Re=ae>=0?`${ti[n.pTerr[O]]} · County of ${n.countyName[ae]}`:ti[n.pTerr[O]],Xe=ae>=0&&n.countyHolder[ae]?`<br><span style="color:#b6a988">Holder:</span> ${n.countyHolder[ae]}`:"",ft=de>=0?`${n.kingName[de]} · <span style="color:#b6a988">${ye>=0?n.empName[ye]:""}</span>`:'<span style="color:#b6a988">Wasteland</span>';F.innerHTML=`${tt}<br>${Re}${Xe}<br>${ft}`,F.style.display="block";let St=A.clientX+16,D=A.clientY+16;const j=F.getBoundingClientRect();St+j.width>window.innerWidth-8&&(St=A.clientX-j.width-16),D+j.height>window.innerHeight-8&&(D=A.clientY-j.height-16),F.style.left=St+"px",F.style.top=D+"px"}else F.style.display="none"}Be=[A.clientX,A.clientY]});const ie=A=>{const O=(he||Le)&&!_e&&A.button!==2&&A.button!==1;if(he=!1,Le=!1,Ne=null,f.classList.remove("drag"),O){const ae=ne(A.clientX,A.clientY);le?ee(ae):I(ae)}};f.addEventListener("pointerup",ie),f.addEventListener("pointerleave",()=>{F.style.display="none",pe(-1)}),f.addEventListener("wheel",A=>{A.preventDefault();const O=u.pickPlane(A.clientX,A.clientY),ae=u.cam.dist;if(u.cam.dist*=Math.exp(A.deltaY*.0011),u.clampCamera(),O){const de=1-u.cam.dist/ae;u.cam.tx+=(O.x-u.cam.tx)*de,u.cam.tz+=(O.z-u.cam.tz)*de,u.clampCamera()}u.applyCamera()},{passive:!1});{const A=Me("search"),O=Me("results"),ae=D=>D.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),de=[],ye=(D,j,Ee=320)=>{u.cam.tx=D-n.W/2,u.cam.tz=j-n.H/2,u.cam.dist=Math.min(u.cam.dist,Ee),u.clampCamera(),u.applyCamera()},Ie=(D,j)=>{let Ee=-1,ve=0;for(let De=0;De<n.np;De++)D[De]===j&&n.pArea[De]>ve&&(ve=n.pArea[De],Ee=De);return Ee},tt=(D,j,Ee)=>{let ve=0,De=0,pt=0;for(let Je=0;Je<n.np;Je++)D[Je]===j&&(ve+=n.pCX[Je]*n.pArea[Je],De+=n.pCY[Je]*n.pArea[Je],pt+=n.pArea[Je]);pt&&ye(ve/pt,De/pt,Ee)};for(let D=0;D<n.np;D++)de.push({key:ae(n.provName[D]),name:n.provName[D],type:"Province",go:()=>{ye(n.pCX[D],n.pCY[D],260),I(D)}});n.countyName.forEach((D,j)=>de.push({key:ae(D),name:D,type:"County",go:()=>{const Ee=Ie(n.countyOf,j);Ee>=0&&(ye(n.pCX[Ee],n.pCY[Ee],300),I(Ee))}})),n.duchyName.forEach((D,j)=>de.push({key:ae(D),name:D,type:"Duchy",go:()=>tt(n.duchyOf,j,420)})),n.kingName.forEach((D,j)=>de.push({key:ae(D),name:D,type:"Kingdom",go:()=>{tt(n.kingOf,j,700),We("k",j)}})),n.empName.forEach((D,j)=>de.push({key:ae(D),name:D,type:"Empire",go:()=>{tt(n.empOf,j,1100),We("e",j)}})),n.cultName.forEach((D,j)=>{/^wasteland/i.test(D)||de.push({key:ae(D),name:D,type:"Culture",go:()=>se(j)})}),n.faithName.forEach((D,j)=>{/^wasteland/i.test(D)||de.push({key:ae(D),name:D,type:"Faith",go:()=>oe(j)})}),n.seaLabels.forEach(D=>de.push({key:ae(D.n),name:D.n,type:"Sea",go:()=>ye(D.x,D.y,900)}));let Re=[],Xe=-1;const ft=()=>{O.innerHTML=Re.map((D,j)=>`<div class="res${j===Xe?" hot":""}" data-i="${j}"><span>${D.name}</span><span class="t">${D.type}</span></div>`).join(""),O.style.display=Re.length?"block":"none",O.querySelectorAll(".res").forEach(D=>{D.onmousedown=j=>{j.preventDefault(),St(+D.dataset.i)}})},St=D=>{const j=Re[D];j&&(A.value=j.name,Re=[],Xe=-1,ft(),A.blur(),j.go())};A.oninput=()=>{const D=ae(A.value.trim());if(Xe=-1,D.length<2){Re=[],ft();return}const j=[],Ee=[];for(const ve of de)if(ve.key.startsWith(D)?j.push(ve):ve.key.includes(D)&&Ee.push(ve),j.length>=12)break;Re=[...j,...Ee].slice(0,12),ft()},A.onkeydown=D=>{D.key==="ArrowDown"?(Xe=Math.min(Re.length-1,Xe+1),ft(),D.preventDefault()):D.key==="ArrowUp"?(Xe=Math.max(0,Xe-1),ft(),D.preventDefault()):D.key==="Enter"?(St(Xe>=0?Xe:0),D.preventDefault()):D.key==="Escape"&&(Re=[],ft(),A.blur()),D.stopPropagation()},A.onblur=()=>setTimeout(()=>{Re=[],ft()},150)}const xe=()=>document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLSelectElement,fe={};window.addEventListener("keydown",A=>{xe()||(fe[A.key.toLowerCase()]=!0)}),window.addEventListener("keyup",A=>{fe[A.key.toLowerCase()]=!1}),setInterval(()=>{const A=u.cam.dist*.02;let O=!1;(fe.w||fe.arrowup)&&(u.cam.tz-=A,O=!0),(fe.s||fe.arrowdown)&&(u.cam.tz+=A,O=!0),(fe.a||fe.arrowleft)&&(u.cam.tx-=A,O=!0),(fe.d||fe.arrowright)&&(u.cam.tx+=A,O=!0),O&&(u.clampCamera(),u.applyCamera())},16);const re=Me("modes");for(const[A,O]of $m){const ae=document.createElement("button");ae.textContent=O,ae.dataset.mode=A,A===l&&(ae.className="on"),ae.onclick=()=>{l=A,[...re.children].forEach(de=>{de.className=de.dataset.mode===A?"on":""}),T(A)},re.appendChild(ae)}const Ce=Me("tilt");Ce.oninput=()=>{Me("tiltv").textContent=Ce.value,u.cam.pitch=(24+ +Ce.value/100*56)*Math.PI/180,u.clampCamera(),u.applyCamera()},Me("reset").onclick=()=>{u.cam.tx=n.landCX-n.W/2,u.cam.tz=n.landCY-n.H/2,u.cam.dist=u.fitDist*.72,u.cam.yaw=0,u.clampCamera(),u.applyCamera()},Me("zin").onclick=()=>{u.cam.dist/=1.3,u.clampCamera(),u.applyCamera()},Me("zout").onclick=()=>{u.cam.dist*=1.3,u.clampCamera(),u.applyCamera()},Me("clearSel").onclick=()=>I(-1),Me("center").onclick=()=>{H<0||(u.cam.tx=n.pCX[H]-n.W/2,u.cam.tz=n.pCY[H]-n.H/2,u.cam.dist=Math.min(u.cam.dist,420),u.clampCamera(),u.applyCamera())};let Se=!0;Me("objs").onclick=()=>{p&&(Se=!Se,Me("objs").className=Se?"on":"",u.invalidate())},Me("hideui").onclick=()=>{document.querySelectorAll(".panel").forEach(O=>{O.id!=="hideui"&&O.classList.toggle("hidden")});const A=Me("hideui");A.textContent=A.textContent==="Hide UI"?"Show UI":"Hide UI",x=!0},Me("dl").onclick=()=>{u.render();const A=document.createElement("canvas");A.width=f.width,A.height=f.height;const O=A.getContext("2d");O.drawImage(f,0,0),O.drawImage(d,0,0,A.width,A.height),Me("dl").href=A.toDataURL("image/png")},Me("dljson").onclick=()=>{const A=[];for(let ae=0;ae<n.np;ae++){const de=n.countyOf[ae],ye=n.duchyOf[ae],Ie=n.kingOf[ae],tt=n.empOf[ae],Re=n.cultureOf[ae],Xe=n.faithOf[ae];A.push({id:ae,name:n.provName[ae],terrain:ti[n.pTerr[ae]],county:de>=0?n.countyName[de]:null,duchy:ye>=0?n.duchyName[ye]:null,kingdom:Ie>=0?n.kingName[Ie]:null,empire:tt>=0?n.empName[tt]:null,culture:Re>=0?n.cultName[Re]:null,faith:Xe>=0?n.faithName[Xe]:null,holding:m[n.holdingOf[ae]],holder:de>=0?n.countyHolder[de]:null,development:n.devOf[ae],neighbours:[...n.padj[ae]]})}const O={provinces:n.np,counties:n.nCounty,duchies:n.nDuchy,kingdoms:n.nKing,empires:n.nEmp,realms:A};Me("dljson").href=URL.createObjectURL(new Blob([JSON.stringify(O)],{type:"application/json"}))};const Mt=()=>{if(p){const A=Se&&u.cam.dist<u.fitDist*.55;p.visible!==A&&(p.visible=A,u.invalidate())}u.render(),x&&(x=!1,Ym(b,C,u,Jt+"map/ui/coa/",()=>{x=!0},E)),requestAnimationFrame(Mt)};requestAnimationFrame(Mt),i.style.display="none";const _t=u.terrain.geometry.attributes.position;let Xt=1e9,qt=-1e9;for(let A=0;A<_t.count;A++){const O=_t.getY(A);O<Xt&&(Xt=O),O>qt&&(qt=O)}window.__APP={scene:u,world:n,selectProvince:I,showFaith:oe,showCulture:se,showChar:ue,showRealm:We,openEditor:ee,edits:Ve,info:{webgl2:u.renderer.getContext()instanceof WebGL2RenderingContext,rendererType:"WebGLRenderer",isPerspectiveCamera:u.camera.isPerspectiveCamera===!0,geometryType:u.terrain.geometry.type,terrainMinY:Xt,terrainMaxY:qt,provinces:n.np,kingdoms:n.nKing,empires:n.nEmp}},console.log("3D map ready:",JSON.stringify(window.__APP.info))}Km().catch(i=>{console.error("boot failed",i);const e=document.getElementById("loading");e&&(e.textContent="Load error — see console")});
