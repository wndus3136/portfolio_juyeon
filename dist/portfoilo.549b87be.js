parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DUUU":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){"use strict";e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(j){s=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new E(r||[]);return i(a,"_invoke",{value:k(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}n.wrap=p;var d={};function h(){}function y(){}function v(){}var m={};s(m,c,function(){return this});var g=Object.getPrototypeOf,b=g&&g(g(q([])));b&&b!==r&&o.call(b,c)&&(m=b);var w=v.prototype=h.prototype=Object.create(m);function x(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function _(e,n){var r;i(this,"_invoke",{value:function(i,a){function c(){return new n(function(r,c){!function r(i,a,c,l){var u=f(e[i],e,a);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==t(p)&&o.call(p,"__await")?n.resolve(p.__await).then(function(t){r("next",t,c,l)},function(t){r("throw",t,c,l)}):n.resolve(p).then(function(t){s.value=t,c(s)},function(t){return r("throw",t,c,l)})}l(u.arg)}(i,a,r,c)})}return r=r?r.then(c,c):c()}})}function k(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function q(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return y.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},x(_.prototype),s(_.prototype,l,function(){return this}),n.AsyncIterator=_,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new _(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(w),s(w,u,"Generator"),s(w,c,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=q,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;$(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:q(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)})}}$(function(){var t=$(".lnb ul li"),n=$(".wrap > div"),o=0,i=0;t.click(function(){o=$(this).index(),i=n.eq(o).offset().top,$("html, body").stop().animate({scrolltop:i},1e3)});var a=$(".indicate li");$(".indicate").css("top",$(window).height()/2-$(".indicate").height()/2),$(window).scroll(function(){var t=$(this).scrollTop()+($(window).height()/2-$(".indicate").height()/2);$(".indicate").stop().animate({top:t},500),n.each(function(){var t=$(window).scrollTop(),e=$(this).index();t>=$(this).offset().top&&(a.removeClass("on"),a.eq(e).addClass("on"))})}),a.click(function(){var t=$(this).index(),e=n.eq(t).offset().top;$("html, body").stop().animate({scrollTop:e},1e3)});var c=document.querySelector(".typing .text"),l=document.querySelector(".page1_tit .tag"),u=["이 주 연"],s=0,p=function(){var t=r(e().mark(function t(){var n;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=u[s].split("");case 1:if(!n.length){t.next=7;break}return t.next=4,m(100);case 4:c.innerHTML+=n.shift(),t.next=1;break;case 7:return t.next=9,m(900);case 9:f();case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),f=function(){var t=r(e().mark(function t(){var n;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=u[s].split("");case 1:if(!n.length){t.next=8;break}return t.next=4,m(100);case 4:n.pop(),c.innerHTML=n.join(""),t.next=1;break;case 8:s=(s+1)%u.length,p();case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),d=["# 긍정적","# 도전적","# 끈기있는"],h=0,y=function(){var t=r(e().mark(function t(){var n,r,o;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=d[h],r="",o=0;case 3:if(!(o<n.length)){t.next=11;break}return t.next=6,m(100);case 6:r+=n[o],l.textContent=r;case 8:o++,t.next=3;break;case 11:return t.next=13,m(800);case 13:v();case 14:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),v=function(){var t=r(e().mark(function t(){var n,r,o;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=n=d[h],o=n.length-1;case 3:if(!(o>=0)){t.next=11;break}return t.next=6,m(100);case 6:r=r.slice(0,-1),l.textContent=r;case 8:o--,t.next=3;break;case 11:h=(h+1)%d.length,y();case 13:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();function m(t){return new Promise(function(e){return setTimeout(e,t)})}setTimeout(p,1500),setTimeout(y,1500);var g=document.querySelector("#page_tab01"),b=document.querySelector("#page_tab02"),w=document.querySelector("#page_tab03"),x=document.querySelector("#page_tab04"),_=document.querySelector("#page_back");g.addEventListener("click",function(){_.src="./image/back_1.jpg"}),b.addEventListener("click",function(){_.src="./image/back_2.jpg"}),w.addEventListener("click",function(){_.src="./image/back_3.jpg"}),x.addEventListener("click",function(){_.src="./image/back_4.jpg"})}),$(document).ready(function(){$(".Project_tab > li").click(function(){$(".Project_tab > li").removeClass("on"),$(this).addClass("on");var t=$(this).index();$(".Project_sheet > li").fadeOut(0),$(".Project_sheet > li").eq(t).fadeIn()}),$(".plan_tab > li").click(function(){$(".plan_tab > li").removeClass("choice"),$(this).addClass("choice");var t=$(this).index();$(".plan_sheet > li").fadeOut(0),$(".plan_sheet > li").eq(t).fadeIn()})});var o=$(".top_btn");$(window).scroll(function(){$(this).scrollTop()>200?o.fadeIn():o.fadeOut()}),o.click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:0},1e3)}),$(".wrap > div").mousewheel(function(t,e){if(e>0){var n=$(this).prev().offset().top;$("html, body").stop().animate({scrollTop:n},1e3)}else if(e<0){var r=$(this).next().offset().top;$("html, body").stop().animate({scrollTop:r},1e3)}}),window.addEventListener("DOMContentLoaded",function(t){var e=document.querySelector(".right .progress"),n=document.querySelector(".right1 .progress"),r=document.querySelector(".right2 .progress"),o=document.querySelector(".right3 .progress"),i=document.querySelector(".numb"),a=document.querySelector(".numb1"),c=document.querySelector(".numb2"),l=document.querySelector(".numb3"),u=50,s=50,p=50,f=50;window.addEventListener("scroll",function t(){var d=document.getElementById("page2").getBoundingClientRect();d.top>=0&&d.bottom<=window.innerHeight&&(e.style.animation="right 3s linear both",n.style.animation="right1 3s linear both",r.style.animation="right2 3s linear both",o.style.animation="right3 3s linear both",setInterval(function(){95===u?clearInterval():(u+=1,i.textContent=u+"%")},62),setInterval(function(){95===s?clearInterval():(s+=1,a.textContent=s+"%")},62),setInterval(function(){80===p?clearInterval():(p+=1,c.textContent=p+"%")},62),setInterval(function(){70===f?clearInterval():(f+=1,l.textContent=f+"%")},62),window.removeEventListener("scroll",t))});var d=document.querySelectorAll(".circular"),h=document.querySelectorAll(".skill_page"),y=document.querySelector(".skill_text");d.forEach(function(t,e){t.addEventListener("mouseover",function(){h[e].style.display="block",y.style.display="none"}),t.addEventListener("mouseout",function(){h[e].style.display="none",y.style.display="block"})}),document.querySelector(".plan_1").addEventListener("click",function(){document.querySelector(".plan_pop").style.display="block"},300),document.querySelector(".plan_pop_btn").addEventListener("click",function(){document.querySelector(".plan_pop").style.display="none"},300),document.querySelector(".plan_2").addEventListener("click",function(){document.querySelector(".plan_pop2").style.display="block"},300),document.querySelector(".plan_pop2_btn").addEventListener("click",function(){document.querySelector(".plan_pop2").style.display="none"},300),document.querySelector(".plan_3").addEventListener("click",function(){document.querySelector(".plan_pop3").style.display="block"},300),document.querySelector(".plan_pop3_btn").addEventListener("click",function(){document.querySelector(".plan_pop3").style.display="none"},300),document.querySelector(".plan_4").addEventListener("click",function(){document.querySelector(".plan_pop4").style.display="block"},300),document.querySelector(".plan_pop4_btn").addEventListener("click",function(){document.querySelector(".plan_pop4").style.display="none"},300)}),$(document).ready(function(){$("input[name=submit]").click(function(t){t.preventDefault();var e=$("input[name=name]").val(),n=$("input[name=email]").val(),r=$("textarea[name=message]").val();if(""===e||""===n||""===r)alert("이름, 이메일, 메시지는 필수 입력 사항입니다.");else{var o={name:e,email:n,message:r,phone:$("input[name=phone]").val()};emailjs.send("wndus3136@gmail.com","template_m96llhh",o).then(function(t){console.log("SUCCESS!",t.status,t.text),alert("이메일이 성공적으로 전송되었습니다.")},function(t){console.log("FAILED...",t),alert("이메일 전송에 실패했습니다. 다시 시도해주세요.")})}})});
},{}]},{},["DUUU"], null)
//# sourceMappingURL=/portfoilo.549b87be.js.map