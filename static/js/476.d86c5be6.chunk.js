"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[476],{975:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(2982),i=t(885),c=t(2791),s=t(3504),a=t(4304),o=t(3394),l=t(9613),u=t(184),m=function(){var n=(0,c.useState)([]),e=(0,i.Z)(n,2),t=e[0],m=e[1],d=(0,c.useState)(!1),f=(0,i.Z)(d,2),h=f[0],j=f[1],x=(0,c.useState)(0),b=(0,i.Z)(x,2),v=b[0],_=b[1],p=(0,c.useState)(!1),Z=(0,i.Z)(p,2),y=Z[0],g=Z[1],N=(0,a.Z)(),S=N.loading,k=N.error,w=N.getAllComics;(0,c.useEffect)((function(){C(v,!0)}),[]);var C=function(n,e){j(!e),w(n).then(A)},A=function(n){var e=!1;n<8&&(e=!0),m([].concat((0,r.Z)(t),(0,r.Z)(n))),j(!1),_(v+8),g(e)};var E=function(n){var e=n.map((function(n,e){return(0,u.jsx)("li",{className:"comics__item",children:(0,u.jsxs)(s.rU,{to:"/comics/".concat(n.id),children:[(0,u.jsx)("img",{src:n.thumbnail,alt:n.title,className:"comics__item-img"}),(0,u.jsx)("div",{className:"comics__item-name",children:n.title}),(0,u.jsx)("div",{className:"comics__item-price",children:n.price})]})},e)}));return(0,u.jsx)("ul",{className:"comics__grid",children:e})}(t),I=k?(0,u.jsx)(l.Z,{}):null,q=S&&!h?(0,u.jsx)(o.Z,{}):null;return(0,u.jsxs)("div",{className:"comics__list",children:[I,q,E,(0,u.jsx)("button",{disabled:h,style:{display:y?"none":"block"},className:"button button__main button__long",onClick:function(){return C(v)},children:(0,u.jsx)("div",{className:"inner",children:"load more"})})]})},d=t(8077),f=t(4270),h=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(f.q,{children:[(0,u.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,u.jsx)("title",{children:"Comics page"})]}),(0,u.jsx)(d.Z,{}),(0,u.jsx)(m,{})]})}},2982:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(907);var i=t(181);function c(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=476.d86c5be6.chunk.js.map