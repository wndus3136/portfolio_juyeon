// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/portfoilo.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
$(function () {
  var btn = $('.lnb ul li');
  var page = $('.wrap > div');
  var index = 0;
  var top = 0;
  btn.click(function () {
    index = $(this).index();
    top = page.eq(index).offset().top;
    $('html, body').stop().animate({
      scrolltop: top
    }, 1000);
  }); //lnb 메뉴 바에서 이동

  var indi = $('.indicate li');
  $('.indicate').css('top', $(window).height() / 2 - $('.indicate').height() / 2);
  $(window).scroll(function () {
    var point = $(this).scrollTop() + ($(window).height() / 2 - $('.indicate').height() / 2);
    $('.indicate').stop().animate({
      top: point
    }, 500);
    page.each(function () {
      var point = $(window).scrollTop();
      var index = $(this).index();
      if (point >= $(this).offset().top) {
        indi.removeClass('on');
        indi.eq(index).addClass('on');
      }
    });
  });
  indi.click(function () {
    var index = $(this).index();
    var top = page.eq(index).offset().top;
    $('html, body').stop().animate({
      scrollTop: top
    }, 1000);
  }); //btn_click_event

  /*********************************************************/
  var h1 = document.querySelector("h1");
  h1.addEventListener("input", function () {
    this.setAttribute("data-heading", this.innerText);
  });
  /*********************************************************/

  var $text = document.querySelector(".typing .text");
  var $tag = document.querySelector(".page1_tit .tag");

  // 글자 모음
  var textLetters = ["이 주 연"];

  // 글자 입력 속도
  var textSpeed = 150;
  var textIndex = 0;

  // 타이핑 효과
  var typingText = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var letter;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            letter = textLetters[textIndex].split("");
          case 1:
            if (!letter.length) {
              _context.next = 7;
              break;
            }
            _context.next = 4;
            return wait(textSpeed);
          case 4:
            $text.innerHTML += letter.shift();
            _context.next = 1;
            break;
          case 7:
            _context.next = 9;
            return wait(900);
          case 9:
            // 지우는 효과
            removeText();
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function typingText() {
      return _ref.apply(this, arguments);
    };
  }();

  // 글자 지우는 효과
  var removeText = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var letter;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            letter = textLetters[textIndex].split("");
          case 1:
            if (!letter.length) {
              _context2.next = 8;
              break;
            }
            _context2.next = 4;
            return wait(textSpeed);
          case 4:
            letter.pop();
            $text.innerHTML = letter.join("");
            _context2.next = 1;
            break;
          case 8:
            // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
            textIndex = (textIndex + 1) % textLetters.length;
            typingText();
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function removeText() {
      return _ref2.apply(this, arguments);
    };
  }();

  // 글자 모음
  var tagLetters = ["# 긍정적", "# 도전적", "# 끈기있는"];

  // 글자 입력 속도
  var tagSpeed = 100;
  var tagIndex = 0;

  // 타이핑 효과
  var typingTags = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var tag, displayTag, k;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            tag = tagLetters[tagIndex];
            displayTag = "";
            k = 0;
          case 3:
            if (!(k < tag.length)) {
              _context3.next = 11;
              break;
            }
            _context3.next = 6;
            return wait(tagSpeed);
          case 6:
            displayTag += tag[k];
            $tag.textContent = displayTag;
          case 8:
            k++;
            _context3.next = 3;
            break;
          case 11:
            _context3.next = 13;
            return wait(800);
          case 13:
            // 지우는 효과
            removeTags();
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function typingTags() {
      return _ref3.apply(this, arguments);
    };
  }();

  // 글자 지우는 효과
  var removeTags = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var tag, displayTag, k;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            tag = tagLetters[tagIndex];
            displayTag = tag;
            k = tag.length - 1;
          case 3:
            if (!(k >= 0)) {
              _context4.next = 11;
              break;
            }
            _context4.next = 6;
            return wait(tagSpeed);
          case 6:
            displayTag = displayTag.slice(0, -1);
            $tag.textContent = displayTag;
          case 8:
            k--;
            _context4.next = 3;
            break;
          case 11:
            // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
            tagIndex = (tagIndex + 1) % tagLetters.length;
            typingTags();
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function removeTags() {
      return _ref4.apply(this, arguments);
    };
  }();

  // 딜레이 기능 (마이크로초)
  function wait(ms) {
    return new Promise(function (res) {
      return setTimeout(res, ms);
    });
  }

  // 초기 실행
  setTimeout(typingText, 1500);
  setTimeout(typingTags, 1500);

  /*********************************************************/

  var tab1 = document.querySelector('#page_tab01');
  var tab2 = document.querySelector('#page_tab02');
  var tab3 = document.querySelector('#page_tab03');
  var tab4 = document.querySelector('#page_tab04');
  var pageBack = document.querySelector('#page_back');
  tab1.addEventListener('click', function () {
    pageBack.src = "./image/back_1.jpg";
  });
  tab2.addEventListener('click', function () {
    pageBack.src = "./image/back_2.jpg";
  });
  tab3.addEventListener('click', function () {
    pageBack.src = "./image/back_3.jpg";
  });
  tab4.addEventListener('click', function () {
    pageBack.src = "./image/back_4.jpg";
  });
  var templateParams = {
    name: 'juyeon'
  };
});
$(document).ready(function () {
  $('.Project_tab > li').click(function () {
    $('.Project_tab > li').removeClass('on');
    $(this).addClass('on');
    var i = $(this).index();
    $('.Project_sheet > li').fadeOut(0);
    $('.Project_sheet > li').eq(i).fadeIn();
  }); //sheet_tab

  $('.plan_tab1 > li').click(function () {
    $('.plan_tab1 > li').removeClass('choice');
    $(this).addClass('choice');
    var i = $(this).index();
    $('.plan_sheet1 > li').fadeOut(0);
    $('.plan_sheet1> li').eq(i).fadeIn();
  }); //plan_tab

  $('.plan_tab3 > li').click(function () {
    $('.plan_tab3 > li').removeClass('choice3');
    $(this).addClass('choice3');
    var i = $(this).index();
    $('.plan_sheet3 > li').fadeOut(0);
    $('.plan_sheet3 > li').eq(i).fadeIn();
  }); //plan_tab3
});

var topButton = $('.top_btn');
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    topButton.fadeIn();
  } else {
    topButton.fadeOut();
  }
});
topButton.click(function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
}); //top버튼

$('.wrap > div').mousewheel(function (event, delta) {
  if (delta > 0) {
    //스크롤을 위로 움직임
    var prev = $(this).prev().offset().top;
    $('html, body').stop().animate({
      scrollTop: prev
    }, 1000);
  } else if (delta < 0) {
    //스크롤을 아래로 움직임
    var next = $(this).next().offset().top;
    $('html, body').stop().animate({
      scrollTop: next
    }, 1000);
  }
}); //mousewheel_event

window.addEventListener('DOMContentLoaded', function (event) {
  var progress = document.querySelector('.right .progress');
  var progress1 = document.querySelector('.right1 .progress');
  var progress2 = document.querySelector('.right2 .progress');
  var progress3 = document.querySelector('.right3 .progress');
  var numb = document.querySelector('.numb');
  var numb1 = document.querySelector('.numb1');
  var numb2 = document.querySelector('.numb2');
  var numb3 = document.querySelector('.numb3');
  var counter = 50;
  var counter1 = 50;
  var counter2 = 50;
  var counter3 = 50;
  function startAnimation() {
    progress.style.animation = 'right 3s linear both';
    progress1.style.animation = 'right1 3s linear both';
    progress2.style.animation = 'right2 3s linear both';
    progress3.style.animation = 'right3 3s linear both';
    setInterval(function () {
      if (counter === 95) {
        clearInterval();
      } else {
        counter += 1;
        numb.textContent = counter + '%';
      }
    }, 62);
    setInterval(function () {
      if (counter1 === 95) {
        clearInterval();
      } else {
        counter1 += 1;
        numb1.textContent = counter1 + '%';
      }
    }, 62);
    setInterval(function () {
      if (counter2 === 80) {
        clearInterval();
      } else {
        counter2 += 1;
        numb2.textContent = counter2 + '%';
      }
    }, 62);
    setInterval(function () {
      if (counter3 === 75) {
        clearInterval();
      } else {
        counter3 += 1;
        numb3.textContent = counter3 + '%';
      }
    }, 62);
  } //게이지 숫자 증가

  function handleScroll() {
    var page2Element = document.getElementById('page2');
    var rect = page2Element.getBoundingClientRect();
    var threshold = 5;
    if (rect.top >= -threshold && rect.bottom <= window.innerHeight + threshold) {
      startAnimation();
      window.removeEventListener('scroll', handleScroll);
    }
  }
  window.addEventListener('scroll', handleScroll);
  //page2가 되면 실행

  var circulars = document.querySelectorAll('.circular');
  var skillPages = document.querySelectorAll('.skill_page');
  var skilltext = document.querySelector('.skill_text');
  circulars.forEach(function (circular, index) {
    circular.addEventListener('mouseover', function () {
      skillPages[index].style.display = 'block';
      skilltext.style.display = 'none';
    });
    circular.addEventListener('mouseout', function () {
      skillPages[index].style.display = 'none';
      skilltext.style.display = 'block';
    });
  }); //skill_hover text

  /*  */
  //plan_pop click close 
  document.querySelector('.plan_1').addEventListener('click', function () {
    document.querySelector('.plan_pop').style.display = 'block';
  });
  document.querySelector('.plan_pop_btn').addEventListener('click', function () {
    document.querySelector('.plan_pop').style.display = 'none';
  });
  /* plan_1 */

  document.querySelector('.plan_2').addEventListener('click', function () {
    document.querySelector('.plan_pop2').style.display = 'block';
  });
  document.querySelector('.plan_pop2_btn').addEventListener('click', function () {
    document.querySelector('.plan_pop2').style.display = 'none';
  });
  /* plan_2 */

  document.querySelector('.plan_3').addEventListener('click', function () {
    document.querySelector('.plan_pop3').style.display = 'block';
  });
  document.querySelector('.plan_pop3_btn').addEventListener('click', function () {
    document.querySelector('.plan_pop3').style.display = 'none';
  });
  /* plan_3 */

  document.querySelector('.plan_4').addEventListener('click', function () {
    document.querySelector('.plan_pop4').style.display = 'block';
  });
  document.querySelector('.plan_pop4_btn').addEventListener('click', function () {
    document.querySelector('.plan_pop4').style.display = 'none';
  });
  /* plan_4 */
});

$(document).ready(function () {
  $('input[name=submit]').click(function (event) {
    event.preventDefault(); // 폼 제출을 방지합니다.
    var name = $('input[name=name]').val();
    var email = $('input[name=email]').val();
    var message = $('textarea[name=message]').val();
    if (name === '' || email === '' || message === '') {
      alert('이름, 이메일, 메시지는 필수 입력 사항입니다.');
    } else {
      var templateParams = {
        name: name,
        email: email,
        message: message,
        phone: $('input[name=phone]').val()
      };
      emailjs.send("wndus3136@gmail.com", "template_m96llhh", templateParams).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('이메일이 성공적으로 전송되었습니다.');
      }, function (error) {
        console.log('FAILED...', error);
        alert('이메일 전송에 실패했습니다. 다시 시도해주세요.');
      });
    }
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "13557" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/portfoilo.js"], null)
//# sourceMappingURL=/portfoilo.d2062899.js.map