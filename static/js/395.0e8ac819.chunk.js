"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[395],{641:function(t,n,e){e.d(n,{HI:function(){return p},Hg:function(){return s},TP:function(){return h},nv:function(){return x},zv:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="b934e9743eee394e4eeac4052d9d4c4f";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},395:function(t,n,e){e.r(n);var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(641),s=e(791),o=e(689),p=e(184);n.default=function(){var t=(0,s.useState)(),n=(0,a.Z)(t,2),e=n[0],c=n[1],f=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.nv)(f);case 3:n=t.sent,c(n.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[f]),e&&0!==e.length?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("hr",{}),(0,p.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:(0,p.jsx)("b",{children:e})}),(0,p.jsx)("p",{children:r})]},n)}))})]}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})}}}]);
//# sourceMappingURL=395.0e8ac819.chunk.js.map