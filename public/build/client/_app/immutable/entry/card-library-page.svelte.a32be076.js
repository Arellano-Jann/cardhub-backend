import{S as F,i as M,s as Q,k as v,q as L,a as D,l as g,m,r as T,h as f,c as I,n as k,b as P,G as d,J as R,d as B,f as z,g as V,v as G,K as J,H as N,y as W,z as Y,A as Z,u as K,B as $}from"../chunks/index.310c7e73.js";import{C as ee}from"../chunks/Card.70eb115a.js";function O(h,l,s){const a=h.slice();return a[3]=l[s],a}function S(h,l,s){const a=h.slice();return a[3]=l[s],a}function te(h){let l,s,a=h[1],t=[];for(let e=0;e<a.length;e+=1)t[e]=U(O(h,a,e));const o=e=>B(t[e],1,1,()=>{t[e]=null});return{c(){l=v("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){l=g(e,"DIV",{class:!0});var i=m(l);for(let r=0;r<t.length;r+=1)t[r].l(i);i.forEach(f),this.h()},h(){k(l,"class","flex")},m(e,i){P(e,l,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(l,null);s=!0},p(e,i){if(i&2){a=e[1];let r;for(r=0;r<a.length;r+=1){const u=O(e,a,r);t[r]?(t[r].p(u,i),V(t[r],1)):(t[r]=U(u),t[r].c(),V(t[r],1),t[r].m(l,null))}for(G(),r=a.length;r<t.length;r+=1)o(r);z()}},i(e){if(!s){for(let i=0;i<a.length;i+=1)V(t[i]);s=!0}},o(e){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)B(t[i]);s=!1},d(e){e&&f(l),J(t,e)}}}function le(h){let l,s=h[1],a=[];for(let t=0;t<s.length;t+=1)a[t]=X(S(h,s,t));return{c(){l=v("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){l=g(t,"DIV",{class:!0});var o=m(l);for(let e=0;e<a.length;e+=1)a[e].l(o);o.forEach(f),this.h()},h(){k(l,"class","flex flex-col")},m(t,o){P(t,l,o);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(l,null)},p(t,o){if(o&2){s=t[1];let e;for(e=0;e<s.length;e+=1){const i=S(t,s,e);a[e]?a[e].p(i,o):(a[e]=X(i),a[e].c(),a[e].m(l,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=s.length}},i:N,o:N,d(t){t&&f(l),J(a,t)}}}function U(h){let l,s,a,t=h[3].quantity+"",o,e,i,r,u;return i=new ee({}),{c(){l=v("div"),s=v("div"),a=v("p"),o=L(t),e=D(),W(i.$$.fragment),r=D(),this.h()},l(n){l=g(n,"DIV",{class:!0});var c=m(l);s=g(c,"DIV",{class:!0});var p=m(s);a=g(p,"P",{});var b=m(a);o=T(b,t),b.forEach(f),p.forEach(f),e=I(c),Y(i.$$.fragment,c),r=I(c),c.forEach(f),this.h()},h(){k(s,"class","absolute right-4 top-1 bg-red-500 text-white rounded-full p-2 text-sm"),k(l,"class","relative")},m(n,c){P(n,l,c),d(l,s),d(s,a),d(a,o),d(l,e),Z(i,l,null),d(l,r),u=!0},p(n,c){(!u||c&2)&&t!==(t=n[3].quantity+"")&&K(o,t)},i(n){u||(V(i.$$.fragment,n),u=!0)},o(n){B(i.$$.fragment,n),u=!1},d(n){n&&f(l),$(i)}}}function X(h){let l,s,a,t,o=h[3].name+"",e,i,r,u,n,c;return{c(){l=v("a"),s=v("div"),a=v("div"),t=v("p"),e=L(o),i=D(),r=v("div"),u=v("button"),n=L("X"),c=D(),this.h()},l(p){l=g(p,"A",{href:!0});var b=m(l);s=g(b,"DIV",{class:!0});var x=m(s);a=g(x,"DIV",{class:!0});var C=m(a);t=g(C,"P",{class:!0});var y=m(t);e=T(y,o),y.forEach(f),C.forEach(f),i=I(x),r=g(x,"DIV",{class:!0});var q=m(r);u=g(q,"BUTTON",{});var _=m(u);n=T(_,"X"),_.forEach(f),q.forEach(f),x.forEach(f),c=I(b),b.forEach(f),this.h()},h(){k(t,"class",""),k(a,"class",""),k(r,"class","hover:bg-black hover:text-white p-2"),k(s,"class","border-[var(--white)] border-2 p-2 m-2 flex flex-row justify-between align-middle"),k(l,"href","google.com")},m(p,b){P(p,l,b),d(l,s),d(s,a),d(a,t),d(t,e),d(s,i),d(s,r),d(r,u),d(u,n),d(l,c)},p(p,b){b&2&&o!==(o=p[3].name+"")&&K(e,o)},d(p){p&&f(l)}}}function ae(h){let l,s,a,t,o,e,i,r,u,n,c,p,b,x;const C=[le,te],y=[];function q(_,E){return _[0]?0:1}return n=q(h),c=y[n]=C[n](h),{c(){l=v("div"),s=v("div"),a=v("h1"),t=L("Card Library"),o=D(),e=v("div"),i=v("button"),r=L("Toggle View"),u=D(),c.c(),this.h()},l(_){l=g(_,"DIV",{class:!0});var E=m(l);s=g(E,"DIV",{class:!0});var w=m(s);a=g(w,"H1",{});var j=m(a);t=T(j,"Card Library"),j.forEach(f),o=I(w),e=g(w,"DIV",{class:!0});var A=m(e);i=g(A,"BUTTON",{});var H=m(i);r=T(H,"Toggle View"),H.forEach(f),A.forEach(f),w.forEach(f),u=I(E),c.l(E),E.forEach(f),this.h()},h(){k(e,"class",""),k(s,"class","flex justify-between p-2"),k(l,"class","p-2 m-2")},m(_,E){P(_,l,E),d(l,s),d(s,a),d(a,t),d(s,o),d(s,e),d(e,i),d(i,r),d(l,u),y[n].m(l,null),p=!0,b||(x=R(i,"click",h[2]),b=!0)},p(_,[E]){let w=n;n=q(_),n===w?y[n].p(_,E):(G(),B(y[w],1,1,()=>{y[w]=null}),z(),c=y[n],c?c.p(_,E):(c=y[n]=C[n](_),c.c()),V(c,1),c.m(l,null))},i(_){p||(V(c),p=!0)},o(_){B(c),p=!1},d(_){_&&f(l),y[n].d(),b=!1,x()}}}function se(h,l,s){let{isListview:a=!1}=l,{dummyCards:t=[{name:"asdgasha",description:"asdgsdga asdgasdgasg asdgasgd asdga",quantity:5},{name:"asdgasha",description:"asdgsdga asdgasdgasg asdgasgd asdga",quantity:2}]}=l;const o=()=>s(0,a=!a);return h.$$set=e=>{"isListview"in e&&s(0,a=e.isListview),"dummyCards"in e&&s(1,t=e.dummyCards)},[a,t,o]}class ne extends F{constructor(l){super(),M(this,l,se,ae,Q,{isListview:0,dummyCards:1})}}export{ne as default};
