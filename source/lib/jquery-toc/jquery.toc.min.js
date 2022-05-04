/*!
 * jQuery-TOC
 * Table of Contents Generator Plugin for (non-)jQuery
 * 
 * @author Dolphin Wood <dolphin.w.e@gmail.com>
 * @version 0.0.6
 * Copyright 2015. MIT licensed.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){"use strict";var n=function(e){if("string"!=typeof e)return 0;var n=e.match(/\d/g);return n?Math.min.apply(null,n):1},t=function(n,t){for(;t--;)n=e("<ol/>").appendTo(n),t&&(n=e("<li/>").appendTo(n));return n},r=function(e,n){for(;n--;)e=e.parent();return e},o=function(e,n){return function(t,r,o){var i=t.text(),a=n+"-"+o;r.text(i);var c=t[0],f=r[0],u=e?a:c.id||a;u=encodeURIComponent(u),c.id=u,f.href="#"+u}},i=function(i){var a=i.selector,c=i.scope,f=e("<ol/>"),u=f,p=null,s=n(a),l=o(i.overwrite,i.prefix);return e(c).find(a).each(function(o,i){var a=n(i.tagName),c=a-s;c>0&&(u=t(p,c)),c<0&&(u=r(u,2*-c)),u.length||(u=f);var h=e("<li/>"),d=e("<a/>");l(e(i),d,o),h.append(d).appendTo(u),p=h,s=a}),f};e.fn.initTOC=function(n){var t={selector:"h1, h2, h3, h4, h5, h6",scope:"body",overwrite:!1,prefix:"toc"};n=e.extend(t,n);var r=n.selector;if("string"!=typeof r)throw new TypeError("selector must be a string");if(!r.match(/^(?:h[1-6],?\s*)+$/g))throw new TypeError("selector must contains only h1-6");e(this).append(i(n));var o=location.hash;return o&&setTimeout(function(){var e=document.getElementById(o.slice(1));e&&e.scrollIntoView()},0),e(this)}});