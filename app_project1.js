var Dn=Object.create;var ne=Object.defineProperty;var Gn=Object.getOwnPropertyDescriptor;var Jn=Object.getOwnPropertyNames;var Bn=Object.getPrototypeOf,Wn=Object.prototype.hasOwnProperty;var b=(e,n)=>()=>(e&&(n=e(e=0)),n);var I=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),S=(e,n)=>{for(var t in n)ne(e,t,{get:n[t],enumerable:!0})},Hn=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let p of Jn(n))!Wn.call(e,p)&&p!==t&&ne(e,p,{get:()=>n[p],enumerable:!(r=Gn(n,p))||r.enumerable});return e};var Yn=(e,n,t)=>(t=e!=null?Dn(Bn(e)):{},Hn(n||!e||!e.__esModule?ne(t,"default",{value:e,enumerable:!0}):t,e));import{unsafeHTML as Vn}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{Marked as Xn}from"https://cdn.jsdelivr.net/npm/marked@13/+esm";var ve,ke,Qn,R,oe=b(()=>{"use strict";ve="https://tds.s-anand.net",ke=e=>e&&!e.match(/^(https?|mailto):/),Qn=new Xn({renderer:{image(e,n,t){return ke(e)&&(e=`${ve}/${e}`),`<img src="${e}" alt="${t}" ${n?`title="${n}"`:""} class="img-fluid" loading="lazy">`},link(e,n,t){return ke(e)&&(e=`${ve}/${e.endsWith(".md")?`#/${e.replace(/\.md$/,"")}`:e}`),`<a href="${e}" ${n?`title="${n}"`:""} target="_blank">${t}</a>`}}}),R=e=>Vn(Qn.parse(e))});var Se=I((xe,te)=>{(function(e,n,t){function r(o){var s=this,c=i();s.next=function(){var a=2091639*s.s0+s.c*23283064365386963e-26;return s.s0=s.s1,s.s1=s.s2,s.s2=a-(s.c=a|0)},s.c=1,s.s0=c(" "),s.s1=c(" "),s.s2=c(" "),s.s0-=c(o),s.s0<0&&(s.s0+=1),s.s1-=c(o),s.s1<0&&(s.s1+=1),s.s2-=c(o),s.s2<0&&(s.s2+=1),c=null}function p(o,s){return s.c=o.c,s.s0=o.s0,s.s1=o.s1,s.s2=o.s2,s}function u(o,s){var c=new r(o),a=s&&s.state,l=c.next;return l.int32=function(){return c.next()*4294967296|0},l.double=function(){return l()+(l()*2097152|0)*11102230246251565e-32},l.quick=l,a&&(typeof a=="object"&&p(a,c),l.state=function(){return p(c,{})}),l}function i(){var o=4022871197,s=function(c){c=String(c);for(var a=0;a<c.length;a++){o+=c.charCodeAt(a);var l=.02519603282416938*o;o=l>>>0,l-=o,l*=o,o=l>>>0,l-=o,o+=l*4294967296}return(o>>>0)*23283064365386963e-26};return s}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.alea=u})(xe,typeof te=="object"&&te,typeof define=="function"&&define)});var Te=I((Ae,ae)=>{(function(e,n,t){function r(i){var o=this,s="";o.x=0,o.y=0,o.z=0,o.w=0,o.next=function(){var a=o.x^o.x<<11;return o.x=o.y,o.y=o.z,o.z=o.w,o.w^=o.w>>>19^a^a>>>8},i===(i|0)?o.x=i:s+=i;for(var c=0;c<s.length+64;c++)o.x^=s.charCodeAt(c)|0,c==s.length&&(o.d=o.x<<10^o.x>>>4),o.next()}function p(i,o){return o.x=i.x,o.y=i.y,o.z=i.z,o.w=i.w,o}function u(i,o){var s=new r(i),c=o&&o.state,a=function(){return(s.next()>>>0)/4294967296};return a.double=function(){do var l=s.next()>>>11,d=(s.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=s.next,a.quick=a,c&&(typeof c=="object"&&p(c,s),a.state=function(){return p(s,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.xor128=u})(Ae,typeof ae=="object"&&ae,typeof define=="function"&&define)});var Ie=I((Ee,re)=>{(function(e,n,t){function r(i){var o=this,s="";o.next=function(){var a=o.x^o.x>>>2;return o.x=o.y,o.y=o.z,o.z=o.w,o.w=o.v,(o.d=o.d+362437|0)+(o.v=o.v^o.v<<4^(a^a<<1))|0},o.x=0,o.y=0,o.z=0,o.w=0,o.v=0,i===(i|0)?o.x=i:s+=i;for(var c=0;c<s.length+64;c++)o.x^=s.charCodeAt(c)|0,c==s.length&&(o.d=o.x<<10^o.x>>>4),o.next()}function p(i,o){return o.x=i.x,o.y=i.y,o.z=i.z,o.w=i.w,o.v=i.v,o.d=i.d,o}function u(i,o){var s=new r(i),c=o&&o.state,a=function(){return(s.next()>>>0)/4294967296};return a.double=function(){do var l=s.next()>>>11,d=(s.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=s.next,a.quick=a,c&&(typeof c=="object"&&p(c,s),a.state=function(){return p(s,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.xorwow=u})(Ee,typeof re=="object"&&re,typeof define=="function"&&define)});var ze=I((qe,ie)=>{(function(e,n,t){function r(i){var o=this;o.next=function(){var c=o.x,a=o.i,l,d,f;return l=c[a],l^=l>>>7,d=l^l<<24,l=c[a+1&7],d^=l^l>>>10,l=c[a+3&7],d^=l^l>>>3,l=c[a+4&7],d^=l^l<<7,l=c[a+7&7],l=l^l<<13,d^=l^l<<9,c[a]=d,o.i=a+1&7,d};function s(c,a){var l,d,f=[];if(a===(a|0))d=f[0]=a;else for(a=""+a,l=0;l<a.length;++l)f[l&7]=f[l&7]<<15^a.charCodeAt(l)+f[l+1&7]<<13;for(;f.length<8;)f.push(0);for(l=0;l<8&&f[l]===0;++l);for(l==8?d=f[7]=-1:d=f[l],c.x=f,c.i=0,l=256;l>0;--l)c.next()}s(o,i)}function p(i,o){return o.x=i.x.slice(),o.i=i.i,o}function u(i,o){i==null&&(i=+new Date);var s=new r(i),c=o&&o.state,a=function(){return(s.next()>>>0)/4294967296};return a.double=function(){do var l=s.next()>>>11,d=(s.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=s.next,a.quick=a,c&&(c.x&&p(c,s),a.state=function(){return p(s,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.xorshift7=u})(qe,typeof ie=="object"&&ie,typeof define=="function"&&define)});var Pe=I((Re,se)=>{(function(e,n,t){function r(i){var o=this;o.next=function(){var c=o.w,a=o.X,l=o.i,d,f;return o.w=c=c+1640531527|0,f=a[l+34&127],d=a[l=l+1&127],f^=f<<13,d^=d<<17,f^=f>>>15,d^=d>>>12,f=a[l]=f^d,o.i=l,f+(c^c>>>16)|0};function s(c,a){var l,d,f,_,q,A=[],M=128;for(a===(a|0)?(d=a,a=null):(a=a+"\0",d=0,M=Math.max(M,a.length)),f=0,_=-32;_<M;++_)a&&(d^=a.charCodeAt((_+32)%a.length)),_===0&&(q=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,_>=0&&(q=q+1640531527|0,l=A[_&127]^=d+q,f=l==0?f+1:0);for(f>=128&&(A[(a&&a.length||0)&127]=-1),f=127,_=4*128;_>0;--_)d=A[f+34&127],l=A[f=f+1&127],d^=d<<13,l^=l<<17,d^=d>>>15,l^=l>>>12,A[f]=d^l;c.w=q,c.X=A,c.i=f}s(o,i)}function p(i,o){return o.i=i.i,o.w=i.w,o.X=i.X.slice(),o}function u(i,o){i==null&&(i=+new Date);var s=new r(i),c=o&&o.state,a=function(){return(s.next()>>>0)/4294967296};return a.double=function(){do var l=s.next()>>>11,d=(s.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=s.next,a.quick=a,c&&(c.X&&p(c,s),a.state=function(){return p(s,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.xor4096=u})(Re,typeof se=="object"&&se,typeof define=="function"&&define)});var Ce=I((Ne,le)=>{(function(e,n,t){function r(i){var o=this,s="";o.next=function(){var a=o.b,l=o.c,d=o.d,f=o.a;return a=a<<25^a>>>7^l,l=l-d|0,d=d<<24^d>>>8^f,f=f-a|0,o.b=a=a<<20^a>>>12^l,o.c=l=l-d|0,o.d=d<<16^l>>>16^f,o.a=f-a|0},o.a=0,o.b=0,o.c=-1640531527,o.d=1367130551,i===Math.floor(i)?(o.a=i/4294967296|0,o.b=i|0):s+=i;for(var c=0;c<s.length+20;c++)o.b^=s.charCodeAt(c)|0,o.next()}function p(i,o){return o.a=i.a,o.b=i.b,o.c=i.c,o.d=i.d,o}function u(i,o){var s=new r(i),c=o&&o.state,a=function(){return(s.next()>>>0)/4294967296};return a.double=function(){do var l=s.next()>>>11,d=(s.next()>>>0)/4294967296,f=(l+d)/(1<<21);while(f===0);return f},a.int32=s.next,a.quick=a,c&&(typeof c=="object"&&p(c,s),a.state=function(){return p(s,{})}),a}n&&n.exports?n.exports=u:t&&t.amd?t(function(){return u}):this.tychei=u})(Ne,typeof le=="object"&&le,typeof define=="function"&&define)});var Fe=I(()=>{});var Le=I((Oe,B)=>{(function(e,n,t){var r=256,p=6,u=52,i="random",o=t.pow(r,p),s=t.pow(2,u),c=s*2,a=r-1,l;function d(h,m,y){var w=[];m=m==!0?{entropy:!0}:m||{};var g=A(q(m.entropy?[h,U(n)]:h??M(),3),w),v=new f(w),x=function(){for(var k=v.g(p),E=o,T=0;k<s;)k=(k+T)*r,E*=r,T=v.g(1);for(;k>=c;)k/=2,E/=2,T>>>=1;return(k+T)/E};return x.int32=function(){return v.g(4)|0},x.quick=function(){return v.g(4)/4294967296},x.double=x,A(U(v.S),n),(m.pass||y||function(k,E,T,z){return z&&(z.S&&_(z,v),k.state=function(){return _(v,{})}),T?(t[i]=k,E):k})(x,g,"global"in m?m.global:this==t,m.state)}function f(h){var m,y=h.length,w=this,g=0,v=w.i=w.j=0,x=w.S=[];for(y||(h=[y++]);g<r;)x[g]=g++;for(g=0;g<r;g++)x[g]=x[v=a&v+h[g%y]+(m=x[g])],x[v]=m;(w.g=function(k){for(var E,T=0,z=w.i,J=w.j,j=w.S;k--;)E=j[z=a&z+1],T=T*r+j[a&(j[z]=j[J=a&J+E])+(j[J]=E)];return w.i=z,w.j=J,T})(r)}function _(h,m){return m.i=h.i,m.j=h.j,m.S=h.S.slice(),m}function q(h,m){var y=[],w=typeof h,g;if(m&&w=="object")for(g in h)try{y.push(q(h[g],m-1))}catch{}return y.length?y:w=="string"?h:h+"\0"}function A(h,m){for(var y=h+"",w,g=0;g<y.length;)m[a&g]=a&(w^=m[a&g]*19)+y.charCodeAt(g++);return U(m)}function M(){try{var h;return l&&(h=l.randomBytes)?h=h(r):(h=new Uint8Array(r),(e.crypto||e.msCrypto).getRandomValues(h)),U(h)}catch{var m=e.navigator,y=m&&m.plugins;return[+new Date,e,y,e.screen,U(n)]}}function U(h){return String.fromCharCode.apply(0,h)}if(A(t.random(),n),typeof B=="object"&&B.exports){B.exports=d;try{l=Fe()}catch{}}else typeof define=="function"&&define.amd?define(function(){return d}):t["seed"+i]=d})(typeof self<"u"?self:Oe,[],Math)});var Me=I((yt,$e)=>{var Zn=Se(),eo=Te(),no=Ie(),oo=ze(),to=Pe(),ao=Ce(),N=Le();N.alea=Zn;N.xor128=eo;N.xorwow=no;N.xorshift7=oo;N.xor4096=to;N.tychei=ao;$e.exports=N});function de(e){let n=C(e);if(!n)throw new Error("Email is required to derive an agent ID.");let t=(0,pe.default)(`${ue}#agent-id#${n}`);return Math.floor(t()*100)}async function Ue(e,n=H){let t=C(e);if(!t)throw new Error("Email is required to derive an agent password.");let r=String(n||H);return(await io(`${ue}#${r}#${t}`)).slice(0,16)}function je(e,n=W){let t=C(e);if(!t)throw new Error("Email is required to derive target agent IDs.");let r=de(t),p=Array.from({length:100},(i,o)=>o).filter(i=>i!==r),u=(0,pe.default)(`${ue}#targets#${t}`);for(let i=p.length-1;i>0;i--){let o=Math.floor(u()*(i+1));[p[i],p[o]]=[p[o],p[i]]}return p.slice(0,n).map(Y)}function so(e){let n=C(e);if(!n)throw new Error("Email is required.");let t=Y(de(n)),r=je(n);return{ownAgentId:t,targetAgentIds:r}}async function De(e,n=H){let t=C(e),{ownAgentId:r,targetAgentIds:p}=so(t),u=await Ue(t,n);return{ownAgentId:r,ownPassword:u,targetAgentIds:p}}function co(e){let n=typeof e=="string"?e.trim():e;if(!n)throw new Error("Submit a JSON payload with the three secret agents.");if(typeof n=="string"&&n.length>ro)throw new Error("Submission is too large.");let t=n;if(typeof n=="string")try{t=JSON.parse(n)}catch{throw new Error("Submission must be valid JSON.")}let r=Array.isArray(t)?t:Array.isArray(t?.agents)?t.agents:null;if(!Array.isArray(r))throw new Error("Submission JSON must be an array, or an object with an 'agents' array.");if(r.length!==W)throw new Error(`Submit exactly ${W} agents.`);return r.map(p=>({agentId:lo(ce(p,["agent_id","agentId","agent","id"])),email:C(ce(p,["email","email_id","emailId"])),password:String(ce(p,["password","pass"])).trim().toLowerCase()}))}async function Ge({response:e,studentEmail:n,salt:t,env:r}){let p=C(n);if(!p)throw new Error("Unable to verify because your exam email is missing.");let u=co(e),i=je(p),o=new Set(i),s=new Set(u.map(l=>l.agentId)),c=()=>{throw new Error("Incorrect submission. Check the agent IDs, email IDs, and passwords.")};s.size!==W&&c(),i.some(l=>!s.has(l))&&c();let a=po(t,r);for(let l of u){(!l.email||!l.password||!o.has(l.agentId))&&c(),Y(de(l.email))!==l.agentId&&c();let f=await Ue(l.email,a);l.password!==f&&c()}return!0}var pe,ue,W,H,ro,C,io,Y,ce,lo,po,Je=b(()=>{"use strict";pe=Yn(Me(),1),ue="q-share-secret-server",W=3,H="tds-share-secret-default-salt",ro=5e4,C=e=>e?.trim().toLowerCase(),io=async e=>{let n=new TextEncoder().encode(e),t=await crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2,"0")).join("")},Y=e=>String(Number.parseInt(String(e),10)).padStart(3,"0");ce=(e,n)=>{for(let t of n)if(e?.[t]!=null)return e[t];return""},lo=e=>{let n=String(e??"").match(/\d+/)?.[0];if(!n)throw new Error("Every submission row must include a numeric agent ID.");let t=Number.parseInt(n,10);if(!Number.isInteger(t)||t<0||t>99)throw new Error(`Invalid agent ID ${e}. Must be between 000 and 099.`);return Y(t)};po=(e,n)=>e||n?.SHARE_SECRET_SALT||H});var Be={};S(Be,{default:()=>fo});import{html as uo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function fo({user:e,weight:n=1}){let t="q-share-secret-server",r="Secret Agent Password Exchange",p=await De(e.email),{ownAgentId:u,ownPassword:i,targetAgentIds:o}=p,s=uo`
    <div class="mb-3">
      <p>
        You are <strong>Secret Agent ${u}</strong>. Your own password is:
        <code>${i}</code>
      </p>
      <p>
        Find the passwords of these agents:
        <code>${o[0]}</code>, <code>${o[1]}</code>, <code>${o[2]}</code>.
      </p>
      <p>
        Coordinate with classmates to exchange information. You may choose to reveal your own password or
        keep it private.
      </p>

      <h6>What to submit</h6>
      <p>Submit JSON with exactly 3 entries, each containing agent ID, email ID, and password.</p>
      <pre><code>[
  { "agent_id": "${o[0]}", "email": "friend1@domain.com", "password": "16hexchars..." },
  { "agent_id": "${o[1]}", "email": "friend2@domain.com", "password": "16hexchars..." },
  { "agent_id": "${o[2]}", "email": "friend3@domain.com", "password": "16hexchars..." }
]</code></pre>
      <p class="form-text">
        You can also submit <code>{"agents":[...]}</code>. Agent IDs may be numeric or zero-padded.
      </p>

      <label for="${t}" class="form-label"><strong>Submission JSON</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="10"
        placeholder='[{"agent_id":"020","email":"...","password":"..."}]'
      ></textarea>
    </div>
  `;return{id:t,title:r,weight:n,question:s,answer:async a=>Ge({response:a,studentEmail:e.email})}}var We=b(()=>{"use strict";Je()});async function He(e){let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(r)).map(i=>i.toString(16).padStart(2,"0")).join("")}var Ye=b(()=>{"use strict"});function ho(e){if(e==null||e==="")throw new Error("Submit a JSON object with number and hash.");let n=typeof e=="string"?bo(e):e,t=n?.number,r=n?.hash;if(t==null||r==null)throw new Error("Submission must include number and hash.");return{number:String(t).trim(),hash:String(r).trim().toLowerCase()}}async function mo({number:e,hash:n}){if(!new RegExp("^\\d{"+F+"}$").test(e))throw new Error("Submit a "+F+"-digit number.");if(!/^[a-f0-9]{64}$/.test(n))throw new Error("Submit a valid SHA-256 hash.");let t=await He(e);if(n!==t)throw new Error("Submitted hash does not match the submitted number.");return!0}async function fe(e){let n=ho(e);return mo(n)}function bo(e){let n=e.trim();if(!n)throw new Error("Submit a JSON object with number and hash.");try{return JSON.parse(n)}catch{throw new Error("Submission must be valid JSON.")}}async function Ke(){return async e=>fe(e)}var F,Ve=b(()=>{"use strict";Ye();F=300});var Xe={};S(Xe,{default:()=>go});import{html as he}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function go({user:e,weight:n=1}){let t="q-transcribe-numbers-server",r="Transcribe Spoken Digits",p="0,1,2,3,4,5,6,7,8,9",u=null,i="";try{let a=await fetch(`/audiosample?n=${F}&f=${encodeURIComponent(p)}`,{method:"POST",cache:"no-store"});if(!a.ok)throw new Error(await a.text());if(u=await a.json(),typeof u?.data!="string"||typeof u?.hash!="string")throw new Error("Invalid /audiosample response.")}catch(a){i=a instanceof Error?a.message:String(a)}let o=he`
    <div class="alert alert-danger" role="alert">
      <strong>Important:</strong> This question generates a new audio sample every time you reload this page.
      Automate solving it, or solve it last and do not refresh after you start transcribing.
    </div>

    <p>
      Listen to the generated audio and transcribe the full ${F}-digit number.
    </p>

    ${i?he`<div class="alert alert-danger" role="alert">Unable to load audio sample: ${i}</div>`:he`
          <div class="mb-3">
            <audio controls preload="none" src="data:audio/mpeg;base64,${u.data}"></audio>
            <div class="form-text">Replay as many times as needed.</div>
          </div>

          <div class="mb-3">
            <label for="${t}-hash" class="form-label"><strong>Hash to submit</strong></label>
            <input
              class="form-control font-monospace"
              id="${t}-hash"
              value="${u.hash}"
              readonly
              spellcheck="false"
            />
          </div>
        `}

    <h6>What to submit</h6>
    <p>Submit JSON in this exact shape:</p>
    <pre><code>{"number":"(${F} digit)","hash":"${u.hash}"}</code></pre>

    <div class="mb-3">
      <label for="${t}" class="form-label"><strong>Submission JSON</strong></label>
      <textarea
        class="form-control font-monospace"
        id="${t}"
        name="${t}"
        rows="6"
        placeholder='{"number":"0123...","hash":"..."}'
      ></textarea>
      <div class="form-text">Your number must be exactly ${F} digits.</div>
    </div>
  `,s=await Ke(e);return{id:t,title:r,weight:n,question:o,answer:async a=>{if(i)throw new Error("Audio sample could not be loaded. Refresh and try again.");return await fe(a),s(a)}}}var Qe=b(()=>{"use strict";Ve()});function Ze(e){let n=e?.trim();if(!n)throw new Error("Enter a public GitHub pull request URL.");let t=n.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/pulls?\/(\d+)(?:[/?#].*)?$/i);if(!t)throw new Error("PR URL must look like https://github.com/OWNER/REPO/pull/NUMBER");let[,r,p,u]=t;return{owner:r,repo:p,number:u}}var wo,It,en=b(()=>{"use strict";wo="2026-02-10T23:59:59.999Z",It=Date.parse(wo)});var nn={};S(nn,{default:()=>_o});import{html as yo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function _o({user:e,weight:n=1}){let t="q-pr-merge-server",r="Get a Small Open-Source PR Merged",p=yo`
    <div class="mb-3">
      <p>
        Contribute to open source by getting <strong>one genuinely useful small PR</strong> merged in a public GitHub repository with
        <strong>1000+ stars</strong>.
      </p>
      <p>
        This is a <strong>mini-tutorial</strong>, not a case study: keep the PR tiny, useful, and respectful of maintainer time.
      </p>

      <h6>How to do this responsibly</h6>
      <ol>
        <li>Choose one active repository with clear contribution guidelines.</li>
        <li>Find a small issue: typo/docs fix, broken link, tiny test fix, minor bug, or very small code improvement.</li>
        <li>Open one focused PR with a clear title, concise description, and no unrelated changes.</li>
        <li>Be respectful in communication. If maintainers request changes, respond quickly and politely.</li>
        <li>Do not spam multiple repos with low-quality AI-generated PRs.</li>
      </ol>

      <h6>AI + open-source etiquette (important)</h6>
      <ul>
        <li>Many maintainers are currently overloaded by AI-generated low-effort PRs that ignore project context.</li>
        <li>These PRs cost reviewer time and can create cleanup work even when they are rejected.</li>
        <li>You should treat maintainer review bandwidth as scarce: send one careful, useful PR instead of many.</li>
        <li>If AI helps you draft text/code, you are still fully responsible for correctness and relevance.</li>
      </ul>

      <h6>Acceptable workaround</h6>
      <p>
        This question is intentionally hackable. If a team creates its own public repo, gets it to 1000+ stars, and merges PRs there,
        that is acceptable for this exam.
      </p>

      <h6>What to submit</h6>
      <ul>
        <li>Paste the merged PR URL as proof of completion.</li>
        <li>Keep the repository and PR public until grading is completed.</li>
      </ul>

      <div class="alert alert-secondary" role="alert">
        <strong>Automatic verification checks:</strong>
        <ol class="mb-0">
          <li>Repository has at least 1000 stars.</li>
          <li>PR author commit email matches your student email (<code>${e.email}</code>).</li>
          <li>PR merge timestamp is after <code>2026-02-10</code> (UTC).</li>
        </ol>
      </div>

      <label for="${t}" class="form-label"><strong>Merged pull request URL</strong></label>
      <input
        class="form-control"
        id="${t}"
        name="${t}"
        placeholder="https://github.com/OWNER/REPO/pull/123"
        autocomplete="off"
      />
      <p class="form-text text-muted mb-0">Only public GitHub pull request URLs are accepted.</p>
    </div>
  `;return{id:t,title:r,weight:n,question:p,answer:async i=>(Ze(i),!0)}}var on=b(()=>{"use strict";en()});var K,tn=b(()=>{K=[[`	foo	baz		bim
`,`<pre><code>foo	baz		bim
</code></pre>
`],[`  	foo	baz		bim
`,`<pre><code>foo	baz		bim
</code></pre>
`],[`    a	a
    \u1F50	a
`,`<pre><code>a	a
\u1F50	a
</code></pre>
`],[`  - foo

	bar
`,`<ul>
<li>
<p>foo</p>
<p>bar</p>
</li>
</ul>
`],[`- foo

		bar
`,`<ul>
<li>
<p>foo</p>
<pre><code>  bar
</code></pre>
</li>
</ul>
`],[`>		foo
`,`<blockquote>
<pre><code>  foo
</code></pre>
</blockquote>
`],[`-		foo
`,`<ul>
<li>
<pre><code>  foo
</code></pre>
</li>
</ul>
`],[`    foo
	bar
`,`<pre><code>foo
bar
</code></pre>
`],[` - foo
   - bar
	 - baz
`,`<ul>
<li>foo
<ul>
<li>bar
<ul>
<li>baz</li>
</ul>
</li>
</ul>
</li>
</ul>
`],[`#	Foo
`,`<h1>Foo</h1>
`],[`*	*	*	
`,`<hr />
`],[`\\!\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\\\]\\^\\_\\\`\\{\\|\\}\\~
`,"<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>\n"],[`\\	\\A\\a\\ \\3\\\u03C6\\\xAB
`,`<p>\\	\\A\\a\\ \\3\\\u03C6\\\xAB</p>
`],[`\\*not emphasized*
\\<br/> not a tag
\\[not a link](/foo)
\\\`not code\`
1\\. not a list
\\* not a list
\\# not a heading
\\[foo]: /url "not a reference"
\\&ouml; not a character entity
`,`<p>*not emphasized*
&lt;br/&gt; not a tag
[not a link](/foo)
\`not code\`
1. not a list
* not a list
# not a heading
[foo]: /url &quot;not a reference&quot;
&amp;ouml; not a character entity</p>
`],[`\\\\*emphasis*
`,`<p>\\<em>emphasis</em></p>
`],[`foo\\
bar
`,`<p>foo<br />
bar</p>
`],["`` \\[\\` ``\n","<p><code>\\[\\`</code></p>\n"],[`    \\[\\]
`,`<pre><code>\\[\\]
</code></pre>
`],[`~~~
\\[\\]
~~~
`,`<pre><code>\\[\\]
</code></pre>
`],[`<https://example.com?find=\\*>
`,`<p><a href="https://example.com?find=%5C*">https://example.com?find=\\*</a></p>
`],[`<a href="/bar\\/)">
`,`<a href="/bar\\/)">
`],[`[foo](/bar\\* "ti\\*tle")
`,`<p><a href="/bar*" title="ti*tle">foo</a></p>
`],[`[foo]

[foo]: /bar\\* "ti\\*tle"
`,`<p><a href="/bar*" title="ti*tle">foo</a></p>
`],["``` foo\\+bar\nfoo\n```\n",`<pre><code class="language-foo+bar">foo
</code></pre>
`],[`&nbsp; &amp; &copy; &AElig; &Dcaron;
&frac34; &HilbertSpace; &DifferentialD;
&ClockwiseContourIntegral; &ngE;
`,`<p>\xA0 &amp; \xA9 \xC6 \u010E
\xBE \u210B \u2146
\u2232 \u2267\u0338</p>
`],[`&#35; &#1234; &#992; &#0;
`,`<p># \u04D2 \u03E0 \uFFFD</p>
`],[`&#X22; &#XD06; &#xcab;
`,`<p>&quot; \u0D06 \u0FAB</p>
`],[`&nbsp &x; &#; &#x;
&#87654321;
&#abcdef0;
&ThisIsNotDefined; &hi?;
`,`<p>&amp;nbsp &amp;x; &amp;#; &amp;#x;
&amp;#87654321;
&amp;#abcdef0;
&amp;ThisIsNotDefined; &amp;hi?;</p>
`],[`&copy
`,`<p>&amp;copy</p>
`],[`&MadeUpEntity;
`,`<p>&amp;MadeUpEntity;</p>
`],[`<a href="&ouml;&ouml;.html">
`,`<a href="&ouml;&ouml;.html">
`],[`[foo](/f&ouml;&ouml; "f&ouml;&ouml;")
`,`<p><a href="/f%C3%B6%C3%B6" title="f\xF6\xF6">foo</a></p>
`],[`[foo]

[foo]: /f&ouml;&ouml; "f&ouml;&ouml;"
`,`<p><a href="/f%C3%B6%C3%B6" title="f\xF6\xF6">foo</a></p>
`],["``` f&ouml;&ouml;\nfoo\n```\n",`<pre><code class="language-f\xF6\xF6">foo
</code></pre>
`],["`f&ouml;&ouml;`\n",`<p><code>f&amp;ouml;&amp;ouml;</code></p>
`],[`    f&ouml;f&ouml;
`,`<pre><code>f&amp;ouml;f&amp;ouml;
</code></pre>
`],[`&#42;foo&#42;
*foo*
`,`<p>*foo*
<em>foo</em></p>
`],[`&#42; foo

* foo
`,`<p>* foo</p>
<ul>
<li>foo</li>
</ul>
`],[`foo&#10;&#10;bar
`,`<p>foo

bar</p>
`],[`&#9;foo
`,`<p>	foo</p>
`],[`[a](url &quot;tit&quot;)
`,`<p>[a](url &quot;tit&quot;)</p>
`],["- `one\n- two`\n",`<ul>
<li>\`one</li>
<li>two\`</li>
</ul>
`],[`***
---
___
`,`<hr />
<hr />
<hr />
`],[`+++
`,`<p>+++</p>
`],[`===
`,`<p>===</p>
`],[`--
**
__
`,`<p>--
**
__</p>
`],[` ***
  ***
   ***
`,`<hr />
<hr />
<hr />
`],[`    ***
`,`<pre><code>***
</code></pre>
`],[`Foo
    ***
`,`<p>Foo
***</p>
`],[`_____________________________________
`,`<hr />
`],[` - - -
`,`<hr />
`],[` **  * ** * ** * **
`,`<hr />
`],[`-     -      -      -
`,`<hr />
`],[`- - - -    
`,`<hr />
`],[`_ _ _ _ a

a------

---a---
`,`<p>_ _ _ _ a</p>
<p>a------</p>
<p>---a---</p>
`],[` *-*
`,`<p><em>-</em></p>
`],[`- foo
***
- bar
`,`<ul>
<li>foo</li>
</ul>
<hr />
<ul>
<li>bar</li>
</ul>
`],[`Foo
***
bar
`,`<p>Foo</p>
<hr />
<p>bar</p>
`],[`Foo
---
bar
`,`<h2>Foo</h2>
<p>bar</p>
`],[`* Foo
* * *
* Bar
`,`<ul>
<li>Foo</li>
</ul>
<hr />
<ul>
<li>Bar</li>
</ul>
`],[`- Foo
- * * *
`,`<ul>
<li>Foo</li>
<li>
<hr />
</li>
</ul>
`],[`# foo
## foo
### foo
#### foo
##### foo
###### foo
`,`<h1>foo</h1>
<h2>foo</h2>
<h3>foo</h3>
<h4>foo</h4>
<h5>foo</h5>
<h6>foo</h6>
`],[`####### foo
`,`<p>####### foo</p>
`],[`#5 bolt

#hashtag
`,`<p>#5 bolt</p>
<p>#hashtag</p>
`],[`\\## foo
`,`<p>## foo</p>
`],[`# foo *bar* \\*baz\\*
`,`<h1>foo <em>bar</em> *baz*</h1>
`],[`#                  foo                     
`,`<h1>foo</h1>
`],[` ### foo
  ## foo
   # foo
`,`<h3>foo</h3>
<h2>foo</h2>
<h1>foo</h1>
`],[`    # foo
`,`<pre><code># foo
</code></pre>
`],[`foo
    # bar
`,`<p>foo
# bar</p>
`],[`## foo ##
  ###   bar    ###
`,`<h2>foo</h2>
<h3>bar</h3>
`],[`# foo ##################################
##### foo ##
`,`<h1>foo</h1>
<h5>foo</h5>
`],[`### foo ###     
`,`<h3>foo</h3>
`],[`### foo ### b
`,`<h3>foo ### b</h3>
`],[`# foo#
`,`<h1>foo#</h1>
`],[`### foo \\###
## foo #\\##
# foo \\#
`,`<h3>foo ###</h3>
<h2>foo ###</h2>
<h1>foo #</h1>
`],[`****
## foo
****
`,`<hr />
<h2>foo</h2>
<hr />
`],[`Foo bar
# baz
Bar foo
`,`<p>Foo bar</p>
<h1>baz</h1>
<p>Bar foo</p>
`],[`## 
#
### ###
`,`<h2></h2>
<h1></h1>
<h3></h3>
`],[`Foo *bar*
=========

Foo *bar*
---------
`,`<h1>Foo <em>bar</em></h1>
<h2>Foo <em>bar</em></h2>
`],[`Foo *bar
baz*
====
`,`<h1>Foo <em>bar
baz</em></h1>
`],[`  Foo *bar
baz*	
====
`,`<h1>Foo <em>bar
baz</em></h1>
`],[`Foo
-------------------------

Foo
=
`,`<h2>Foo</h2>
<h1>Foo</h1>
`],[`   Foo
---

  Foo
-----

  Foo
  ===
`,`<h2>Foo</h2>
<h2>Foo</h2>
<h1>Foo</h1>
`],[`    Foo
    ---

    Foo
---
`,`<pre><code>Foo
---

Foo
</code></pre>
<hr />
`],[`Foo
   ----      
`,`<h2>Foo</h2>
`],[`Foo
    ---
`,`<p>Foo
---</p>
`],[`Foo
= =

Foo
--- -
`,`<p>Foo
...
