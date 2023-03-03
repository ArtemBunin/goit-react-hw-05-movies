"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[804],{641:function(n,e,t){t.d(e,{HI:function(){return p},Hg:function(){return s},TP:function(){return d},nv:function(){return h},zv:function(){return v}});var r=t(861),a=t(757),i=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="b934e9743eee394e4eeac4052d9d4c4f";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(u,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},804:function(n,e,t){t.r(e);var r=t(861),a=t(439),i=t(757),c=t.n(i),u=t(641),s=t(791),o=t(689),p=t(87),l=t(454),d=t(184);e.default=function(){var n,e,t,i,f,v,x=(0,o.UO)().movieId,h=(0,s.useState)("null"),m=(0,a.Z)(h,2),g=m[0],w=m[1],j=(0,o.TH)();if((0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.TP)(x);case 3:e=n.sent,w(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]),!g)return null;var y=g.poster_path,Z=g.title,k=g.genres,b=g.vote_average,_=g.overview,L=g.release_date;if(k){var P=new Date(L);return(0,d.jsxs)("main",{children:[(0,d.jsx)("div",{style:{marginLeft:"25px"},children:(0,d.jsx)(p.OL,{to:null!==(n=null===(e=j.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"})}),(0,d.jsxs)(l.xu,{children:[(0,d.jsx)(l.Ry,{src:"https://image.tmdb.org/t/p/w500".concat(y),alt:Z}),(0,d.jsxs)("div",{children:[(0,d.jsxs)(l.Dx,{children:[Z,"(",P.getFullYear(),")"]}),(0,d.jsxs)(l.xv,{children:["User Score: ",(10*b).toFixed(),"%"]}),(0,d.jsx)(l.Dx,{children:"Overview"}),(0,d.jsx)(l.xv,{children:_}),(0,d.jsx)(l.Dx,{children:"Genres"}),(0,d.jsx)(l.xv,{children:function(n){return n.map((function(n){return n.name})).join(",")}(k)})]})]}),(0,d.jsx)(l.xv,{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(p.OL,{to:"cast",state:{from:null!==(t=null===(i=j.state)||void 0===i?void 0:i.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(p.OL,{to:"review",state:{from:null!==(f=null===(v=j.state)||void 0===v?void 0:v.from)&&void 0!==f?f:"/"},children:"Reviews"})})]}),(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(o.j3,{})})]})}}},454:function(n,e,t){t.d(e,{Dx:function(){return p},Ry:function(){return o},xu:function(){return l},xv:function(){return d}});var r,a,i,c,u=t(168),s=t(444),o=s.ZP.img(r||(r=(0,u.Z)(["\n width: 250px;\n  margin-right: 20px;\n"]))),p=s.ZP.h2(a||(a=(0,u.Z)(["\n \n  margin-right: 20px;\n"]))),l=s.ZP.div(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 10px 0;\n  padding-bottom: 10px;\n  border-bottom: 1px solid grey;\n"]))),d=s.ZP.p(c||(c=(0,u.Z)(["\n  font-size: 16px;\n  margin: 15px 0;\n"])))}}]);
//# sourceMappingURL=804.cddee8be.chunk.js.map