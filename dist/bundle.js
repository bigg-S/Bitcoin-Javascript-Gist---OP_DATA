/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/helperfns/index.js":
/*!************************************!*\
  !*** ./modules/helperfns/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelperFunctions: () => (/* binding */ HelperFunctions)
/* harmony export */ });
/* harmony import */ var _scure_bip39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scure/bip39 */ "./node_modules/@scure/bip39/esm/index.js");
/* harmony import */ var _scure_bip39_wordlists_english__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scure/bip39/wordlists/english */ "./node_modules/@scure/bip39/esm/wordlists/english.js");
/* harmony import */ var _scure_bip32__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scure/bip32 */ "./node_modules/@scure/bip32/lib/esm/index.js");
/* harmony import */ var _scure_btc_signer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scure/btc-signer */ "./node_modules/@scure/btc-signer/lib/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// index.js

// class with helper functions for reading file data and converting plain text to UTF-8 byte array

// import necessary libraries






var HelperFunctions = /*#__PURE__*/function () {
  function HelperFunctions() {
    _classCallCheck(this, HelperFunctions);
    this.mnemonic = this.generateMnemonic();
    console.log("Am in the constructor!");
    this.feeEstiamtor = ''; //new btc._Estimator({});
  }

  // read file using the FileReader API
  _createClass(HelperFunctions, [{
    key: "readFileAsByteArray",
    value: function () {
      var _readFileAsByteArray = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, callback) {
        var reader;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              reader = new FileReader(); // set up an event listener for when the file is loaded
              reader.onload = function (event) {
                // access the result property which contain the file content as an ArrayBuffer
                var arrayBuffer = event.target.result;

                // convert the ArrayBuffer to a Uint8Array (byte array)
                var byteArray = new Uint8Array(arrayBuffer);

                // call the provided callback with byte array
                callback(null, byteArray);
              };

              // set up an event listener for when an error occurs
              reader.onerror = function (event) {
                // call the callback with an error object
                callback(new Error('Error reading the file', event.target.error));
              };

              // read the file as an array buffer
              reader.readAsArrayBuffer(file);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function readFileAsByteArray(_x, _x2) {
        return _readFileAsByteArray.apply(this, arguments);
      }
      return readFileAsByteArray;
    }() // convert plain text to UTF-8 array
  }, {
    key: "textToUTF8Array",
    value: function textToUTF8Array(plainText) {
      // create a TextEncoder instance
      var textEncoder = new TextEncoder();

      // use the encode method to convert the text to a UintArray (UTF-8 byte array)
      var byteArray = textEncoder.encode(plainText);
      return byteArray;
    }

    // generate mnemonic
  }, {
    key: "generateMnemonic",
    value: function generateMnemonic() {
      return _scure_bip39__WEBPACK_IMPORTED_MODULE_0__.generateMnemonic(_scure_bip39_wordlists_english__WEBPACK_IMPORTED_MODULE_1__.wordlist, 128);
    }

    // validate menmonic
  }, {
    key: "validateMnemonic",
    value: function validateMnemonic(mnemonic) {
      return _scure_bip39__WEBPACK_IMPORTED_MODULE_0__.validateMnemonic(mnemonic, _scure_bip39_wordlists_english__WEBPACK_IMPORTED_MODULE_1__.wordlist);
    }

    // get estimated fee
  }, {
    key: "getEstimatedFee",
    value: function () {
      var _getEstimatedFee = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var feeRate;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.feeEstiamtor.getFeeRate();
            case 3:
              feeRate = _context2.sent;
              return _context2.abrupt("return", feeRate);
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              this.handleError(_context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 7]]);
      }));
      function getEstimatedFee() {
        return _getEstimatedFee.apply(this, arguments);
      }
      return getEstimatedFee;
    }() // get inputs
  }, {
    key: "getInputs",
    value: function () {
      var _getInputs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(amount, privateKey) {
        var nodeUrl, response, inputs, totalAmount, selectedInputs, _iterator, _step, input;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              nodeUrl = process.env.BITCOIN_API;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(nodeUrl, "/unspent/").concat(privateKey.getAddress()));
            case 4:
              response = _context3.sent;
              inputs = response.data; // filter inputs until the required amount is covered
              totalAmount = 0;
              selectedInputs = [];
              _iterator = _createForOfIteratorHelper(inputs);
              _context3.prev = 9;
              _iterator.s();
            case 11:
              if ((_step = _iterator.n()).done) {
                _context3.next = 19;
                break;
              }
              input = _step.value;
              totalAmount += input.amount;
              selectedInputs.push(input);
              if (!(totalAmount >= amount)) {
                _context3.next = 17;
                break;
              }
              return _context3.abrupt("break", 19);
            case 17:
              _context3.next = 11;
              break;
            case 19:
              _context3.next = 24;
              break;
            case 21:
              _context3.prev = 21;
              _context3.t0 = _context3["catch"](9);
              _iterator.e(_context3.t0);
            case 24:
              _context3.prev = 24;
              _iterator.f();
              return _context3.finish(24);
            case 27:
              // check if inputs cover the required amount
              if (totalAmount < amount) {
                this.handleError("Insufficient funds");
              }
              return _context3.abrupt("return", selectedInputs);
            case 31:
              _context3.prev = 31;
              _context3.t1 = _context3["catch"](0);
              this.handleError(_context3.t1);
            case 34:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 31], [9, 21, 24, 27]]);
      }));
      function getInputs(_x3, _x4) {
        return _getInputs.apply(this, arguments);
      }
      return getInputs;
    }() // derive key pairs
  }, {
    key: "derivePrivateKey",
    value: function derivePrivateKey(seed) {
      console.log("Master key!", seed);
      var masterKey = _scure_bip32__WEBPACK_IMPORTED_MODULE_4__.HDKey.fromMasterSeed(seed);
      var path = "m/44'/0'/0'/0/0"; //bip44 path
      var privateKey = masterKey.derive(path).privateKey;
      return privateKey;
    }

    // create a transaction
  }, {
    key: "createTransaction",
    value: function () {
      var _createTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data, privateKey) {
        var txBuilder, dataHex, script, adjustedDataHex, dataLength, pushSize, outputScript, feeRate, estimatedFee, inputs, _iterator2, _step2, input;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              // initislize transaction builder
              txBuilder = new _scure_btc_signer__WEBPACK_IMPORTED_MODULE_5__.Transaction();
              txBuilder.unsignedTx;

              // Assuming `data` is a byte array containing the correct data:
              dataHex = buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(data).toString('hex');
              script = _scure_btc_signer__WEBPACK_IMPORTED_MODULE_5__.OutScript.encode(data).buffer('hex'); // Ensure even hex length:
              adjustedDataHex = dataHex.length % 2 === 0 ? dataHex : '0' + dataHex; // Calculate correct push size:
              dataLength = adjustedDataHex.length / 2;
              pushSize = dataLength <= 75 ? dataLength : Math.ceil(Math.log2(dataLength) / 8) + 76; // Construct complete output script:
              outputScript = "OP_RETURN ".concat(pushSize.toString(16)).concat(adjustedDataHex); //new Uint8Array([0x4c + data.length]).join(data);
              console.log("Output script: ", outputScript);

              // add the output with a value of 0 (no value transfer)
              txBuilder.addOutput({
                script: script,
                amount: BigInt("0")
              });

              // set teh network parameters
              //txBuilder. // here you can use the other networks i.e mainnet, regtest as needed

              console.log("Estimating transaction fee...");
              // estimate the transaction fee
              _context4.next = 14;
              return this.getEstimatedFee();
            case 14:
              feeRate = _context4.sent;
              console.log("Fee rate: ", feeRate);
              estimatedFee = Math.ceil(txBuilder.fee({
                feeRate: feeRate
              }));
              console.log("Fee rate: ", estimatedFee);
              console.log("Generating inputs...");
              // add inputs to cover the data output and transaction fee
              _context4.next = 21;
              return this.getInputs(estimatedFee, privateKey);
            case 21:
              inputs = _context4.sent;
              console.log("Inputs: ", inputs);

              // add the inputs to the transaction
              _iterator2 = _createForOfIteratorHelper(inputs);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  input = _step2.value;
                  txBuilder.addInput({
                    txid: input.txid,
                    index: input.index,
                    witnessUtxo: {
                      amount: input.amount,
                      script: buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(input.script, 'hex')
                    }
                  });
                }

                // sign the transaction
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              txBuilder.sign(0, privateKey);

              // return the signed transaction
              return _context4.abrupt("return", txBuilder.build());
            case 29:
              _context4.prev = 29;
              _context4.t0 = _context4["catch"](0);
              this.handleError(_context4.t0);
            case 32:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 29]]);
      }));
      function createTransaction(_x5, _x6) {
        return _createTransaction.apply(this, arguments);
      }
      return createTransaction;
    }() // broadcast the transaction
  }, {
    key: "broadcastTx",
    value: function () {
      var _broadcastTx = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(signedTx) {
        var nodeUrl, requestBody, response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              // the bitcoin node API for broadcasting
              nodeUrl = process.env.BITCOIN_API; // build the request body
              requestBody = {
                txid: signedTx.id,
                hex: signedTx.toHex()
              }; // send the POST request to broadcast the transaction
              _context5.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(nodeUrl, requestBody);
            case 5:
              response = _context5.sent;
              console.log("Transaction broadcast successfully: ", response.data);
              this.displayResults(response.data);
              _context5.next = 14;
              break;
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              console.error("Error broadcasting transaction: ", _context5.t0);
              this.handleError(_context5.t0);
            case 14:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 10]]);
      }));
      function broadcastTx(_x7) {
        return _broadcastTx.apply(this, arguments);
      }
      return broadcastTx;
    }() // upload file or write plain text to bitcoin mainchain
  }, {
    key: "uploadToBitcoin",
    value: function uploadToBitcoin(data, password) {
      console.log("Starting the upload process: ", data);
      try {
        var mnemonic = this.mnemonic;
        console.log("Generated mnemonic: ", mnemonic);

        // valiadet mnemonic for being 12 words
        if (this.validateMnemonic(mnemonic)) {
          // derive key data from mnemonic(generate seed)
          var seed = _scure_bip39__WEBPACK_IMPORTED_MODULE_0__.mnemonicToSeedSync(mnemonic, password); // password is optional
          console.log("The mnemonic was valid!", seed);
          //derive private key from master key for address ("m/44' /0' /0' /0/0")
          var privateKey = this.derivePrivateKey(seed);
          console.log("Private Key", privateKey);

          // build the transaction (signed)
          var transaction = this.createTransaction(data, privateKey);
          console.log("Transaction: ", transaction);

          // broadcast the transaction
          //this.broadcastTx(transaction);         
        } else {
          this.handleError("Invalid mnemonic");
        }
      } catch (error) {
        this.handleError("Error during upload: " + error);
      }
    }

    // display results
  }, {
    key: "displayResults",
    value: function displayResults(message) {
      var resultDiv = document.getElementById('result');
      resultDiv.innerHTML = "Broadcasting transaction: ".concat(message);
    }

    // handle errors
  }, {
    key: "handleError",
    value: function handleError(message) {
      console.log(message);
      var resultDiv = document.getElementById('result');
      resultDiv.innerHTML = "<span style=\"color: red;\">Error: ".concat(message, "</span>");
    }
  }]);
  return HelperFunctions;
}(); // export class as a module


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
const ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/@noble/curves/esm/_shortw_utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@noble/curves/esm/_shortw_utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCurve: () => (/* binding */ createCurve),
/* harmony export */   getHash: () => (/* binding */ getHash)
/* harmony export */ });
/* harmony import */ var _noble_hashes_hmac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noble/hashes/hmac */ "./node_modules/@noble/hashes/esm/hmac.js");
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @noble/hashes/utils */ "./node_modules/@noble/hashes/esm/utils.js");
/* harmony import */ var _abstract_weierstrass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract/weierstrass.js */ "./node_modules/@noble/curves/esm/abstract/weierstrass.js");
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */



// connects noble-curves to noble-hashes
function getHash(hash) {
    return {
        hash,
        hmac: (key, ...msgs) => (0,_noble_hashes_hmac__WEBPACK_IMPORTED_MODULE_0__.hmac)(hash, key, (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.concatBytes)(...msgs)),
        randomBytes: _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.randomBytes,
    };
}
function createCurve(curveDef, defHash) {
    const create = (hash) => (0,_abstract_weierstrass_js__WEBPACK_IMPORTED_MODULE_2__.weierstrass)({ ...curveDef, ...getHash(hash) });
    return Object.freeze({ ...create(defHash), create });
}
//# sourceMappingURL=_shortw_utils.js.map

/***/ }),

/***/ "./node_modules/@noble/curves/esm/abstract/curve.js":
/*!**********************************************************!*\
  !*** ./node_modules/@noble/curves/esm/abstract/curve.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateBasic: () => (/* binding */ validateBasic),
/* harmony export */   wNAF: () => (/* binding */ wNAF)
/* harmony export */ });
/* harmony import */ var _modular_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modular.js */ "./node_modules/@noble/curves/esm/abstract/modular.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/curves/esm/abstract/utils.js");
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Abelian group utilities


const _0n = BigInt(0);
const _1n = BigInt(1);
// Elliptic curve multiplication of Point by scalar. Fragile.
// Scalars should always be less than curve order: this should be checked inside of a curve itself.
// Creates precomputation tables for fast multiplication:
// - private scalar is split by fixed size windows of W bits
// - every window point is collected from window's table & added to accumulator
// - since windows are different, same point inside tables won't be accessed more than once per calc
// - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
// - +1 window is neccessary for wNAF
// - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
// TODO: Research returning 2d JS array of windows, instead of a single window. This would allow
// windows to be in different memory locations
function wNAF(c, bits) {
    const constTimeNegate = (condition, item) => {
        const neg = item.negate();
        return condition ? neg : item;
    };
    const opts = (W) => {
        const windows = Math.ceil(bits / W) + 1; // +1, because
        const windowSize = 2 ** (W - 1); // -1 because we skip zero
        return { windows, windowSize };
    };
    return {
        constTimeNegate,
        // non-const time multiplication ladder
        unsafeLadder(elm, n) {
            let p = c.ZERO;
            let d = elm;
            while (n > _0n) {
                if (n & _1n)
                    p = p.add(d);
                d = d.double();
                n >>= _1n;
            }
            return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @returns precomputed point tables flattened to a single array
         */
        precomputeWindow(elm, W) {
            const { windows, windowSize } = opts(W);
            const points = [];
            let p = elm;
            let base = p;
            for (let window = 0; window < windows; window++) {
                base = p;
                points.push(base);
                // =1, because we skip zero
                for (let i = 1; i < windowSize; i++) {
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */
        wNAF(W, precomputes, n) {
            // TODO: maybe check that scalar is less than group order? wNAF behavious is undefined otherwise
            // But need to carefully remove other checks before wNAF. ORDER == bits here
            const { windows, windowSize } = opts(W);
            let p = c.ZERO;
            let f = c.BASE;
            const mask = BigInt(2 ** W - 1); // Create mask with W ones: 0b1111 for W=4 etc.
            const maxNumber = 2 ** W;
            const shiftBy = BigInt(W);
            for (let window = 0; window < windows; window++) {
                const offset = window * windowSize;
                // Extract W bits.
                let wbits = Number(n & mask);
                // Shift number by W bits.
                n >>= shiftBy;
                // If the bits are bigger than max size, we'll split those.
                // +224 => 256 - 32
                if (wbits > windowSize) {
                    wbits -= maxNumber;
                    n += _1n;
                }
                // This code was first written with assumption that 'f' and 'p' will never be infinity point:
                // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
                // there is negate now: it is possible that negated element from low value
                // would be the same as high element, which will create carry into next window.
                // It's not obvious how this can fail, but still worth investigating later.
                // Check if we're onto Zero point.
                // Add random point inside current window to f.
                const offset1 = offset;
                const offset2 = offset + Math.abs(wbits) - 1; // -1 because we skip zero
                const cond1 = window % 2 !== 0;
                const cond2 = wbits < 0;
                if (wbits === 0) {
                    // The most important part for const-time getPublicKey
                    f = f.add(constTimeNegate(cond1, precomputes[offset1]));
                }
                else {
                    p = p.add(constTimeNegate(cond2, precomputes[offset2]));
                }
            }
            // JIT-compiler should not eliminate f here, since it will later be used in normalizeZ()
            // Even if the variable is still unused, there are some checks which will
            // throw an exception, so compiler needs to prove they won't happen, which is hard.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return { p, f };
        },
        wNAFCached(P, precomputesMap, n, transform) {
            // @ts-ignore
            const W = P._WINDOW_SIZE || 1;
            // Calculate precomputes on a first run, reuse them after
            let comp = precomputesMap.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1) {
                    precomputesMap.set(P, transform(comp));
                }
            }
            return this.wNAF(W, comp, n);
        },
    };
}
function validateBasic(curve) {
    (0,_modular_js__WEBPACK_IMPORTED_MODULE_0__.validateField)(curve.Fp);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.validateObject)(curve, {
        n: 'bigint',
        h: 'bigint',
        Gx: 'field',
        Gy: 'field',
    }, {
        nBitLength: 'isSafeInteger',
        nByteLength: 'isSafeInteger',
    });
    // Set defaults
    return Object.freeze({
        ...(0,_modular_js__WEBPACK_IMPORTED_MODULE_0__.nLength)(curve.n, curve.nBitLength),
        ...curve,
        ...{ p: curve.Fp.ORDER },
    });
}
//# sourceMappingURL=curve.js.map

/***/ }),

/***/ "./node_modules/@noble/curves/esm/abstract/hash-to-curve.js":
/*!******************************************************************!*\
  !*** ./node_modules/@noble/curves/esm/abstract/hash-to-curve.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHasher: () => (/* binding */ createHasher),
/* harmony export */   expand_message_xmd: () => (/* binding */ expand_message_xmd),
/* harmony export */   expand_message_xof: () => (/* binding */ expand_message_xof),
/* harmony export */   hash_to_field: () => (/* binding */ hash_to_field),
/* harmony export */   isogenyMap: () => (/* binding */ isogenyMap)
/* harmony export */ });
/* harmony import */ var _modular_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modular.js */ "./node_modules/@noble/curves/esm/abstract/modular.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/curves/esm/abstract/utils.js");


function validateDST(dst) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBytes)(dst))
        return dst;
    if (typeof dst === 'string')
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.utf8ToBytes)(dst);
    throw new Error('DST must be Uint8Array or string');
}
// Octet Stream to Integer. "spec" implementation of os2ip is 2.5x slower vs bytesToNumberBE.
const os2ip = _utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToNumberBE;
// Integer to Octet Stream (numberToBytesBE)
function i2osp(value, length) {
    if (value < 0 || value >= 1 << (8 * length)) {
        throw new Error(`bad I2OSP call: value=${value} length=${length}`);
    }
    const res = Array.from({ length }).fill(0);
    for (let i = length - 1; i >= 0; i--) {
        res[i] = value & 0xff;
        value >>>= 8;
    }
    return new Uint8Array(res);
}
function strxor(a, b) {
    const arr = new Uint8Array(a.length);
    for (let i = 0; i < a.length; i++) {
        arr[i] = a[i] ^ b[i];
    }
    return arr;
}
function abytes(item) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isBytes)(item))
        throw new Error('Uint8Array expected');
}
function isNum(item) {
    if (!Number.isSafeInteger(item))
        throw new Error('number expected');
}
// Produces a uniformly random byte string using a cryptographic hash function H that outputs b bits
// https://www.rfc-editor.org/rfc/rfc9380#section-5.3.1
function expand_message_xmd(msg, DST, lenInBytes, H) {
    abytes(msg);
    abytes(DST);
    isNum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    if (DST.length > 255)
        DST = H((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.concatBytes)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.utf8ToBytes)('H2C-OVERSIZE-DST-'), DST));
    const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
    const ell = Math.ceil(lenInBytes / b_in_bytes);
    if (ell > 255)
        throw new Error('Invalid xmd length');
    const DST_prime = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.concatBytes)(DST, i2osp(DST.length, 1));
    const Z_pad = i2osp(0, r_in_bytes);
    const l_i_b_str = i2osp(lenInBytes, 2); // len_in_bytes_str
    const b = new Array(ell);
    const b_0 = H((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.concatBytes)(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
    b[0] = H((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.concatBytes)(b_0, i2osp(1, 1), DST_prime));
    for (let i = 1; i <= ell; i++) {
        const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
        b[i] = H((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.concatBytes)(...args));
    }
    const pseudo_random_bytes = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.concatBytes)(...b);
    return pseudo_random_bytes.slice(0, lenInBytes);
}
// Produces a uniformly random byte string using an extendable-output function (XOF) H.
// 1. The collision resistance of H MUST be at least k bits.
// 2. H MUST be an XOF that has been proved indifferentiable from
//    a random oracle under a reasonable cryptographic assumption.
// https://www.rfc-editor.org/rfc/rfc9380#section-5.3.2
function expand_message_xof(msg, DST, lenInBytes, k, H) {
    abytes(msg);
    abytes(DST);
    isNum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    // DST = H('H2C-OVERSIZE-DST-' || a_very_long_DST, Math.ceil((lenInBytes * k) / 8));
    if (DST.length > 255) {
        const dkLen = Math.ceil((2 * k) / 8);
        DST = H.create({ dkLen }).update((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.utf8ToBytes)('H2C-OVERSIZE-DST-')).update(DST).digest();
    }
    if (lenInBytes > 65535 || DST.length > 255)
        throw new Error('expand_message_xof: invalid lenInBytes');
    return (H.create({ dkLen: lenInBytes })
        .update(msg)
        .update(i2osp(lenInBytes, 2))
        // 2. DST_prime = DST || I2OSP(len(DST), 1)
        .update(DST)
        .update(i2osp(DST.length, 1))
        .digest());
}
/**
 * Hashes arbitrary-length byte strings to a list of one or more elements of a finite field F
 * https://www.rfc-editor.org/rfc/rfc9380#section-5.2
 * @param msg a byte string containing the message to hash
 * @param count the number of elements of F to output
 * @param options `{DST: string, p: bigint, m: number, k: number, expand: 'xmd' | 'xof', hash: H}`, see above
 * @returns [u_0, ..., u_(count - 1)], a list of field elements.
 */
function hash_to_field(msg, count, options) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.validateObject)(options, {
        DST: 'stringOrUint8Array',
        p: 'bigint',
        m: 'isSafeInteger',
        k: 'isSafeInteger',
        hash: 'hash',
    });
    const { p, k, m, hash, expand, DST: _DST } = options;
    abytes(msg);
    isNum(count);
    const DST = validateDST(_DST);
    const log2p = p.toString(2).length;
    const L = Math.ceil((log2p + k) / 8); // section 5.1 of ietf draft link above
    const len_in_bytes = count * m * L;
    let prb; // pseudo_random_bytes
    if (expand === 'xmd') {
        prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
    }
    else if (expand === 'xof') {
        prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
    }
    else if (expand === '_internal_pass') {
        // for internal tests only
        prb = msg;
    }
    else {
        throw new Error('expand must be "xmd" or "xof"');
    }
    const u = new Array(count);
    for (let i = 0; i < count; i++) {
        const e = new Array(m);
        for (let j = 0; j < m; j++) {
            const elm_offset = L * (j + i * m);
            const tv = prb.subarray(elm_offset, elm_offset + L);
            e[j] = (0,_modular_js__WEBPACK_IMPORTED_MODULE_1__.mod)(os2ip(tv), p);
        }
        u[i] = e;
    }
    return u;
}
function isogenyMap(field, map) {
    // Make same order as in spec
    const COEFF = map.map((i) => Array.from(i).reverse());
    return (x, y) => {
        const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
        x = field.div(xNum, xDen); // xNum / xDen
        y = field.mul(y, field.div(yNum, yDen)); // y * (yNum / yDev)
        return { x, y };
    };
}
function createHasher(Point, mapToCurve, def) {
    if (typeof mapToCurve !== 'function')
        throw new Error('mapToCurve() must be defined');
    return {
        // Encodes byte string to elliptic curve.
        // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        hashToCurve(msg, options) {
            const u = hash_to_field(msg, 2, { ...def, DST: def.DST, ...options });
            const u0 = Point.fromAffine(mapToCurve(u[0]));
            const u1 = Point.fromAffine(mapToCurve(u[1]));
            const P = u0.add(u1).clearCofactor();
            P.assertValidity();
            return P;
        },
        // Encodes byte string to elliptic curve.
        // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        encodeToCurve(msg, options) {
            const u = hash_to_field(msg, 1, { ...def, DST: def.encodeDST, ...options });
            const P = Point.fromAffine(mapToCurve(u[0])).clearCofactor();
            P.assertValidity();
            return P;
        },
    };
}
//# sourceMappingURL=hash-to-curve.js.map

/***/ }),

/***/ "./node_modules/@noble/curves/esm/abstract/modular.js":
/*!************************************************************!*\
  !*** ./node_modules/@noble/curves/esm/abstract/modular.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* binding */ Field),
/* harmony export */   FpDiv: () => (/* binding */ FpDiv),
/* harmony export */   FpInvertBatch: () => (/* binding */ FpInvertBatch),
/* harmony export */   FpIsSquare: () => (/* binding */ FpIsSquare),
/* harmony export */   FpPow: () => (/* binding */ FpPow),
/* harmony export */   FpSqrt: () => (/* binding */ FpSqrt),
/* harmony export */   FpSqrtEven: () => (/* binding */ FpSqrtEven),
/* harmony export */   FpSqrtOdd: () => (/* binding */ FpSqrtOdd),
/* harmony export */   getFieldBytesLength: () => (/* binding */ getFieldBytesLength),
/* harmony export */   getMinHashLength: () => (/* binding */ getMinHashLength),
/* harmony export */   hashToPrivateScalar: () => (/* binding */ hashToPrivateScalar),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   isNegativeLE: () => (/* binding */ isNegativeLE),
/* harmony export */   mapHashToField: () => (/* binding */ mapHashToField),
/* harmony export */   mod: () => (/* binding */ mod),
/* harmony export */   nLength: () => (/* binding */ nLength),
/* harmony export */   pow: () => (/* binding */ pow),
/* harmony export */   pow2: () => (/* binding */ pow2),
/* harmony export */   tonelliShanks: () => (/* binding */ tonelliShanks),
/* harmony export */   validateField: () => (/* binding */ validateField)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/curves/esm/abstract/utils.js");
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Utilities for modular arithmetics and finite fields

// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3);
// prettier-ignore
const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
// prettier-ignore
const _9n = BigInt(9), _16n = BigInt(16);
// Calculates a modulo b
function mod(a, b) {
    const result = a % b;
    return result >= _0n ? result : b + result;
}
/**
 * Efficiently raise num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * @example
 * pow(2n, 6n, 11n) // 64n % 11n == 9n
 */
// TODO: use field version && remove
function pow(num, power, modulo) {
    if (modulo <= _0n || power < _0n)
        throw new Error('Expected power/modulo > 0');
    if (modulo === _1n)
        return _0n;
    let res = _1n;
    while (power > _0n) {
        if (power & _1n)
            res = (res * num) % modulo;
        num = (num * num) % modulo;
        power >>= _1n;
    }
    return res;
}
// Does x ^ (2 ^ power) mod p. pow2(30, 4) == 30 ^ (2 ^ 4)
function pow2(x, power, modulo) {
    let res = x;
    while (power-- > _0n) {
        res *= res;
        res %= modulo;
    }
    return res;
}
// Inverses number over modulo
function invert(number, modulo) {
    if (number === _0n || modulo <= _0n) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    // Euclidean GCD https://brilliant.org/wiki/extended-euclidean-algorithm/
    // Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
    let a = mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = _0n, y = _1n, u = _1n, v = _0n;
    while (a !== _0n) {
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        // prettier-ignore
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n)
        throw new Error('invert: does not exist');
    return mod(x, modulo);
}
/**
 * Tonelli-Shanks square root search algorithm.
 * 1. https://eprint.iacr.org/2012/685.pdf (page 12)
 * 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
 * Will start an infinite loop if field order P is not prime.
 * @param P field order
 * @returns function that takes field Fp (created from P) and number n
 */
function tonelliShanks(P) {
    // Legendre constant: used to calculate Legendre symbol (a | p),
    // which denotes the value of a^((p-1)/2) (mod p).
    // (a | p) ≡ 1    if a is a square (mod p)
    // (a | p) ≡ -1   if a is not a square (mod p)
    // (a | p) ≡ 0    if a ≡ 0 (mod p)
    const legendreC = (P - _1n) / _2n;
    let Q, S, Z;
    // Step 1: By factoring out powers of 2 from p - 1,
    // find q and s such that p - 1 = q*(2^s) with q odd
    for (Q = P - _1n, S = 0; Q % _2n === _0n; Q /= _2n, S++)
        ;
    // Step 2: Select a non-square z such that (z | p) ≡ -1 and set c ≡ zq
    for (Z = _2n; Z < P && pow(Z, legendreC, P) !== P - _1n; Z++)
        ;
    // Fast-path
    if (S === 1) {
        const p1div4 = (P + _1n) / _4n;
        return function tonelliFast(Fp, n) {
            const root = Fp.pow(n, p1div4);
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Slow-path
    const Q1div2 = (Q + _1n) / _2n;
    return function tonelliSlow(Fp, n) {
        // Step 0: Check that n is indeed a square: (n | p) should not be ≡ -1
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE))
            throw new Error('Cannot find square root');
        let r = S;
        // TODO: will fail at Fp2/etc
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q); // will update both x and b
        let x = Fp.pow(n, Q1div2); // first guess at the square root
        let b = Fp.pow(n, Q); // first guess at the fudge factor
        while (!Fp.eql(b, Fp.ONE)) {
            if (Fp.eql(b, Fp.ZERO))
                return Fp.ZERO; // https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm (4. If t = 0, return r = 0)
            // Find m such b^(2^m)==1
            let m = 1;
            for (let t2 = Fp.sqr(b); m < r; m++) {
                if (Fp.eql(t2, Fp.ONE))
                    break;
                t2 = Fp.sqr(t2); // t2 *= t2
            }
            // NOTE: r-m-1 can be bigger than 32, need to convert to bigint before shift, otherwise there will be overflow
            const ge = Fp.pow(g, _1n << BigInt(r - m - 1)); // ge = 2^(r-m-1)
            g = Fp.sqr(ge); // g = ge * ge
            x = Fp.mul(x, ge); // x *= ge
            b = Fp.mul(b, g); // b *= g
            r = m;
        }
        return x;
    };
}
function FpSqrt(P) {
    // NOTE: different algorithms can give different roots, it is up to user to decide which one they want.
    // For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
    // P ≡ 3 (mod 4)
    // √n = n^((P+1)/4)
    if (P % _4n === _3n) {
        // Not all roots possible!
        // const ORDER =
        //   0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn;
        // const NUM = 72057594037927816n;
        const p1div4 = (P + _1n) / _4n;
        return function sqrt3mod4(Fp, n) {
            const root = Fp.pow(n, p1div4);
            // Throw if root**2 != n
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Atkin algorithm for q ≡ 5 (mod 8), https://eprint.iacr.org/2012/685.pdf (page 10)
    if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
            const n2 = Fp.mul(n, _2n);
            const v = Fp.pow(n2, c1);
            const nv = Fp.mul(n, v);
            const i = Fp.mul(Fp.mul(nv, _2n), v);
            const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // P ≡ 9 (mod 16)
    if (P % _16n === _9n) {
        // NOTE: tonelli is too slow for bls-Fp2 calculations even on start
        // Means we cannot use sqrt for constants at all!
        //
        // const c1 = Fp.sqrt(Fp.negate(Fp.ONE)); //  1. c1 = sqrt(-1) in F, i.e., (c1^2) == -1 in F
        // const c2 = Fp.sqrt(c1);                //  2. c2 = sqrt(c1) in F, i.e., (c2^2) == c1 in F
        // const c3 = Fp.sqrt(Fp.negate(c1));     //  3. c3 = sqrt(-c1) in F, i.e., (c3^2) == -c1 in F
        // const c4 = (P + _7n) / _16n;           //  4. c4 = (q + 7) / 16        # Integer arithmetic
        // sqrt = (x) => {
        //   let tv1 = Fp.pow(x, c4);             //  1. tv1 = x^c4
        //   let tv2 = Fp.mul(c1, tv1);           //  2. tv2 = c1 * tv1
        //   const tv3 = Fp.mul(c2, tv1);         //  3. tv3 = c2 * tv1
        //   let tv4 = Fp.mul(c3, tv1);           //  4. tv4 = c3 * tv1
        //   const e1 = Fp.equals(Fp.square(tv2), x); //  5.  e1 = (tv2^2) == x
        //   const e2 = Fp.equals(Fp.square(tv3), x); //  6.  e2 = (tv3^2) == x
        //   tv1 = Fp.cmov(tv1, tv2, e1); //  7. tv1 = CMOV(tv1, tv2, e1)  # Select tv2 if (tv2^2) == x
        //   tv2 = Fp.cmov(tv4, tv3, e2); //  8. tv2 = CMOV(tv4, tv3, e2)  # Select tv3 if (tv3^2) == x
        //   const e3 = Fp.equals(Fp.square(tv2), x); //  9.  e3 = (tv2^2) == x
        //   return Fp.cmov(tv1, tv2, e3); //  10.  z = CMOV(tv1, tv2, e3)  # Select the sqrt from tv1 and tv2
        // }
    }
    // Other cases: Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
// Little-endian check for first LE bit (last BE bit);
const isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n) === _1n;
// prettier-ignore
const FIELD_FIELDS = [
    'create', 'isValid', 'is0', 'neg', 'inv', 'sqrt', 'sqr',
    'eql', 'add', 'sub', 'mul', 'pow', 'div',
    'addN', 'subN', 'mulN', 'sqrN'
];
function validateField(field) {
    const initial = {
        ORDER: 'bigint',
        MASK: 'bigint',
        BYTES: 'isSafeInteger',
        BITS: 'isSafeInteger',
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = 'function';
        return map;
    }, initial);
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.validateObject)(field, opts);
}
// Generic field functions
/**
 * Same as `pow` but for Fp: non-constant-time.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 */
function FpPow(f, num, power) {
    // Should have same speed as pow for bigints
    // TODO: benchmark!
    if (power < _0n)
        throw new Error('Expected power > 0');
    if (power === _0n)
        return f.ONE;
    if (power === _1n)
        return num;
    let p = f.ONE;
    let d = num;
    while (power > _0n) {
        if (power & _1n)
            p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n;
    }
    return p;
}
/**
 * Efficiently invert an array of Field elements.
 * `inv(0)` will return `undefined` here: make sure to throw an error.
 */
function FpInvertBatch(f, nums) {
    const tmp = new Array(nums.length);
    // Walk from first to last, multiply them by each other MOD p
    const lastMultiplied = nums.reduce((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
    }, f.ONE);
    // Invert last element
    const inverted = f.inv(lastMultiplied);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
    }, inverted);
    return tmp;
}
function FpDiv(f, lhs, rhs) {
    return f.mul(lhs, typeof rhs === 'bigint' ? invert(rhs, f.ORDER) : f.inv(rhs));
}
// This function returns True whenever the value x is a square in the field F.
function FpIsSquare(f) {
    const legendreConst = (f.ORDER - _1n) / _2n; // Integer arithmetic
    return (x) => {
        const p = f.pow(x, legendreConst);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
    };
}
// CURVE.n lengths
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
}
/**
 * Initializes a finite field over prime. **Non-primes are not supported.**
 * Do not init in loop: slow. Very fragile: always run a benchmark on a change.
 * Major performance optimizations:
 * * a) denormalized operations like mulN instead of mul
 * * b) same object shape: never add or remove keys
 * * c) Object.freeze
 * @param ORDER prime positive bigint
 * @param bitLen how many bits the field consumes
 * @param isLE (def: false) if encoding / decoding should be in little-endian
 * @param redef optional faster redefinitions of sqrt and other methods
 */
function Field(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= _0n)
        throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048)
        throw new Error('Field lengths over 2048 bytes are not supported');
    const sqrtP = FpSqrt(ORDER);
    const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bitMask)(BITS),
        ZERO: _0n,
        ONE: _1n,
        create: (num) => mod(num, ORDER),
        isValid: (num) => {
            if (typeof num !== 'bigint')
                throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
            return _0n <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num) => num === _0n,
        isOdd: (num) => (num & _1n) === _1n,
        neg: (num) => mod(-num, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num) => mod(num * num, ORDER),
        add: (lhs, rhs) => mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
        pow: (num, power) => FpPow(f, num, power),
        div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num) => num * num,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num) => invert(num, ORDER),
        sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
        invertBatch: (lst) => FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c) => (c ? b : a),
        toBytes: (num) => (isLE ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.numberToBytesLE)(num, BYTES) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.numberToBytesBE)(num, BYTES)),
        fromBytes: (bytes) => {
            if (bytes.length !== BYTES)
                throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
            return isLE ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToNumberLE)(bytes) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToNumberBE)(bytes);
        },
    });
    return Object.freeze(f);
}
function FpSqrtOdd(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? root : Fp.neg(root);
}
function FpSqrtEven(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? Fp.neg(root) : root;
}
/**
 * "Constant-time" private key generation utility.
 * Same as mapKeyToField, but accepts less bytes (40 instead of 48 for 32-byte field).
 * Which makes it slightly more biased, less secure.
 * @deprecated use mapKeyToField instead
 */
function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ensureBytes)('privateHash', hash);
    const hashLen = hash.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
    const num = isLE ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToNumberLE)(hash) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToNumberBE)(hash);
    return mod(num, groupOrder - _1n) + _1n;
}
/**
 * Returns total number of bytes consumed by the field element.
 * For example, 32 bytes for usual 256-bit weierstrass curve.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of field
 */
function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== 'bigint')
        throw new Error('field order must be bigint');
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
}
/**
 * Returns minimal amount of bytes that can be safely reduced
 * by field order.
 * Should be 2^-128 for 128-bit curve such as P256.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of target hash
 */
function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
}
/**
 * "Constant-time" private key generation utility.
 * Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being negligible.
 * Needs at least 48 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
 * RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
 * @param hash hash output from SHA3 or a similar function
 * @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
 * @param isLE interpret hash bytes as LE num
 * @returns valid private scalar
 */
function mapHashToField(key, fieldOrder, isLE = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    // No small numbers: need to understand bias story. No huge numbers: easier to detect JS timings.
    if (len < 16 || len < minLen || len > 1024)
        throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num = isLE ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToNumberBE)(key) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToNumberLE)(key);
    // `mod(x, 11)` can sometimes produce 0. `mod(x, 10) + 1` is the same, but no 0
    const reduced = mod(num, fieldOrder - _1n) + _1n;
    return isLE ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.numberToBytesLE)(reduced, fieldLen) : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.numberToBytesBE)(reduced, fieldLen);
}
//# sourceMappingURL=modular.js.map

/***/ }),

/***/ "./node_modules/@noble/curves/esm/abstract/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@noble/curves/esm/abstract/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bitGet: () => (/* binding */ bitGet),
/* harmony export */   bitLen: () => (/* binding */ bitLen),
/* harmony export */   bitMask: () => (/* binding */ bitMask),
/* harmony export */   bitSet: () => (/* binding */ bitSet),
/* harmony export */   bytesToHex: () => (/* binding */ bytesToHex),
/* harmony export */   bytesToNumberBE: () => (/* binding */ bytesToNumberBE),
/* harmony export */   bytesToNumberLE: () => (/* binding */ bytesToNumberLE),
/* harmony export */   concatBytes: () => (/* binding */ concatBytes),
/* harmony export */   createHmacDrbg: () => (/* binding */ createHmacDrbg),
/* harmony export */   ensureBytes: () => (/* binding */ ensureBytes),
/* harmony export */   equalBytes: () => (/* binding */ equalBytes),
/* harmony export */   hexToBytes: () => (/* binding */ hexToBytes),
/* harmony export */   hexToNumber: () => (/* binding */ hexToNumber),
/* harmony export */   isBytes: () => (/* binding */ isBytes),
/* harmony export */   numberToBytesBE: () => (/* binding */ numberToBytesBE),
/* harmony export */   numberToBytesLE: () => (/* binding */ numberToBytesLE),
/* harmony export */   numberToHexUnpadded: () => (/* binding */ numberToHexUnpadded),
/* harmony export */   numberToVarBytesBE: () => (/* binding */ numberToVarBytesBE),
/* harmony export */   utf8ToBytes: () => (/* binding */ utf8ToBytes),
/* harmony export */   validateObject: () => (/* binding */ validateObject)
/* harmony export */ });
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
function isBytes(a) {
    return (a instanceof Uint8Array ||
        (a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array'));
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    if (!isBytes(bytes))
        throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    // Big Endian
    return BigInt(hex === '' ? '0' : `0x${hex}`);
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('padded hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
    }
    return array;
}
// BE: Big Endian, LE: Little Endian
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
    if (!isBytes(bytes))
        throw new Error('Uint8Array expected');
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function numberToBytesLE(n, len) {
    return numberToBytesBE(n, len).reverse();
}
// Unpadded, rarely used
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */
function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') {
        try {
            res = hexToBytes(hex);
        }
        catch (e) {
            throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
    }
    else if (isBytes(hex)) {
        // Uint8Array.from() instead of hash.slice() because node.js Buffer
        // is instance of Uint8Array, and its slice() creates **mutable** copy
        res = Uint8Array.from(hex);
    }
    else {
        throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength)
        throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        if (!isBytes(a))
            throw new Error('Uint8Array expected');
        sum += a.length;
    }
    let res = new Uint8Array(sum);
    let pad = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
// Compares 2 u8a-s in kinda constant time
function equalBytes(a, b) {
    if (a.length !== b.length)
        return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++)
        diff |= a[i] ^ b[i];
    return diff === 0;
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 */
function bitLen(n) {
    let len;
    for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
    return len;
}
/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */
function bitGet(n, pos) {
    return (n >> BigInt(pos)) & _1n;
}
/**
 * Sets single bit at position.
 */
const bitSet = (n, pos, value) => {
    return n | ((value ? _1n : _0n) << BigInt(pos));
};
/**
 * Calculate mask for N bits. Not using ** operator with bigints because of old engines.
 * Same as BigInt(`0b${Array(i).fill('1').join('')}`)
 */
const bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
// DRBG
const u8n = (data) => new Uint8Array(data); // creates Uint8Array
const u8fr = (arr) => Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2)
        throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2)
        throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function')
        throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n()) => {
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([0x00]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0)
            return;
        k = h(u8fr([0x01]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = () => {
        // HMAC-DRBG generate() function
        if (i++ >= 1000)
            throw new Error('drbg: tried 1000 values');
        let len = 0;
        const out = [];
        while (len < qByteLen) {
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while (!(res = pred(gen())))
            reseed();
        reset();
        return res;
    };
    return genUntil;
}
// Validating curves and fields
const validatorFns = {
    bigint: (val) => typeof val === 'bigint',
    function: (val) => typeof val === 'function',
    boolean: (val) => typeof val === 'boolean',
    string: (val) => typeof val === 'string',
    stringOrUint8Array: (val) => typeof val === 'string' || isBytes(val),
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === 'function' && Number.isSafeInteger(val.outputLen),
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function')
            throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === undefined)
            return;
        if (!checkVal(val, object)) {
            throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
        }
    };
    for (const [fieldName, type] of Object.entries(validators))
        checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
        checkField(fieldName, type, true);
    return object;
}
// validate type tests
// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@noble/curves/esm/abstract/weierstrass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@noble/curves/esm/abstract/weierstrass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DER: () => (/* binding */ DER),
/* harmony export */   SWUFpSqrtRatio: () => (/* binding */ SWUFpSqrtRatio),
/* harmony export */   mapToCurveSimpleSWU: () => (/* binding */ mapToCurveSimpleSWU),
/* harmony export */   weierstrass: () => (/* binding */ weierstrass),
/* harmony export */   weierstrassPoints: () => (/* binding */ weierstrassPoints)
/* harmony export */ });
/* harmony import */ var _modular_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modular.js */ "./node_modules/@noble/curves/esm/abstract/modular.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/curves/esm/abstract/utils.js");
/* harmony import */ var _curve_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve.js */ "./node_modules/@noble/curves/esm/abstract/curve.js");
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Short Weierstrass curve. The formula is: y² = x³ + ax + b




function validatePointOpts(curve) {
    const opts = (0,_curve_js__WEBPACK_IMPORTED_MODULE_0__.validateBasic)(curve);
    _utils_js__WEBPACK_IMPORTED_MODULE_1__.validateObject(opts, {
        a: 'field',
        b: 'field',
    }, {
        allowedPrivateKeyLengths: 'array',
        wrapPrivateKey: 'boolean',
        isTorsionFree: 'function',
        clearCofactor: 'function',
        allowInfinityPoint: 'boolean',
        fromBytes: 'function',
        toBytes: 'function',
    });
    const { endo, Fp, a } = opts;
    if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
            throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
        }
        if (typeof endo !== 'object' ||
            typeof endo.beta !== 'bigint' ||
            typeof endo.splitScalar !== 'function') {
            throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
        }
    }
    return Object.freeze({ ...opts });
}
// ASN.1 DER encoding utilities
const { bytesToNumberBE: b2n, hexToBytes: h2b } = _utils_js__WEBPACK_IMPORTED_MODULE_1__;
const DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
        constructor(m = '') {
            super(m);
        }
    },
    _parseInt(data) {
        const { Err: E } = DER;
        if (data.length < 2 || data[0] !== 0x02)
            throw new E('Invalid signature integer tag');
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len)
            throw new E('Invalid signature integer: wrong length');
        // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
        // since we always use positive integers here. It must always be empty:
        // - add zero byte if exists
        // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
        if (res[0] & 0b10000000)
            throw new E('Invalid signature integer: negative');
        if (res[0] === 0x00 && !(res[1] & 0b10000000))
            throw new E('Invalid signature integer: unnecessary leading zero');
        return { d: b2n(res), l: data.subarray(len + 2) }; // d is data, l is left
    },
    toSig(hex) {
        // parse DER signature
        const { Err: E } = DER;
        const data = typeof hex === 'string' ? h2b(hex) : hex;
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__.isBytes(data))
            throw new Error('ui8a expected');
        let l = data.length;
        if (l < 2 || data[0] != 0x30)
            throw new E('Invalid signature tag');
        if (data[1] !== l - 2)
            throw new E('Invalid signature: incorrect length');
        const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
        const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
        if (rBytesLeft.length)
            throw new E('Invalid signature: left bytes after parsing');
        return { r, s };
    },
    hexFromSig(sig) {
        // Add leading zero if first byte has negative bit enabled. More details in '_parseInt'
        const slice = (s) => (Number.parseInt(s[0], 16) & 0b1000 ? '00' + s : s);
        const h = (num) => {
            const hex = num.toString(16);
            return hex.length & 1 ? `0${hex}` : hex;
        };
        const s = slice(h(sig.s));
        const r = slice(h(sig.r));
        const shl = s.length / 2;
        const rhl = r.length / 2;
        const sl = h(shl);
        const rl = h(rhl);
        return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
    },
};
// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3), _4n = BigInt(4);
function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp } = CURVE; // All curves has same field / group length as for now, but they can differ
    const toBytes = CURVE.toBytes ||
        ((_c, point, _isCompressed) => {
            const a = point.toAffine();
            return _utils_js__WEBPACK_IMPORTED_MODULE_1__.concatBytes(Uint8Array.from([0x04]), Fp.toBytes(a.x), Fp.toBytes(a.y));
        });
    const fromBytes = CURVE.fromBytes ||
        ((bytes) => {
            // const head = bytes[0];
            const tail = bytes.subarray(1);
            // if (head !== 0x04) throw new Error('Only non-compressed encoding is supported');
            const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
            const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
            return { x, y };
        });
    /**
     * y² = x³ + ax + b: Short weierstrass curve formula
     * @returns y²
     */
    function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x); // x * x
        const x3 = Fp.mul(x2, x); // x2 * x
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b); // x3 + a * x + b
    }
    // Validate whether the passed curve params are valid.
    // We check if curve equation works for generator point.
    // `assertValidity()` won't work: `isTorsionFree()` is not available at this point in bls12-381.
    // ProjectivePoint class has not been initialized yet.
    if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
        throw new Error('bad generator point: equation left != right');
    // Valid group elements reside in range 1..n-1
    function isWithinCurveOrder(num) {
        return typeof num === 'bigint' && _0n < num && num < CURVE.n;
    }
    function assertGE(num) {
        if (!isWithinCurveOrder(num))
            throw new Error('Expected valid bigint: 0 < bigint < curve.n');
    }
    // Validates if priv key is valid and converts it to bigint.
    // Supports options allowedPrivateKeyLengths and wrapPrivateKey.
    function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
        if (lengths && typeof key !== 'bigint') {
            if (_utils_js__WEBPACK_IMPORTED_MODULE_1__.isBytes(key))
                key = _utils_js__WEBPACK_IMPORTED_MODULE_1__.bytesToHex(key);
            // Normalize to hex string, pad. E.g. P521 would norm 130-132 char hex to 132-char bytes
            if (typeof key !== 'string' || !lengths.includes(key.length))
                throw new Error('Invalid key');
            key = key.padStart(nByteLength * 2, '0');
        }
        let num;
        try {
            num =
                typeof key === 'bigint'
                    ? key
                    : _utils_js__WEBPACK_IMPORTED_MODULE_1__.bytesToNumberBE((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('private key', key, nByteLength));
        }
        catch (error) {
            throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey)
            num = _modular_js__WEBPACK_IMPORTED_MODULE_2__.mod(num, n); // disabled by default, enabled for BLS
        assertGE(num); // num in range [1..N-1]
        return num;
    }
    const pointPrecomputes = new Map();
    function assertPrjPoint(other) {
        if (!(other instanceof Point))
            throw new Error('ProjectivePoint expected');
    }
    /**
     * Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
     * Default Point works in 2d / affine coordinates: (x, y)
     * We're doing calculations in projective, because its operations don't require costly inversion.
     */
    class Point {
        constructor(px, py, pz) {
            this.px = px;
            this.py = py;
            this.pz = pz;
            if (px == null || !Fp.isValid(px))
                throw new Error('x required');
            if (py == null || !Fp.isValid(py))
                throw new Error('y required');
            if (pz == null || !Fp.isValid(pz))
                throw new Error('z required');
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
            const { x, y } = p || {};
            if (!p || !Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('invalid affine point');
            if (p instanceof Point)
                throw new Error('projective point not allowed');
            const is0 = (i) => Fp.eql(i, Fp.ZERO);
            // fromAffine(x:0, y:0) would produce (x:0, y:0, z:1), but we need (x:0, y:1, z:0)
            if (is0(x) && is0(y))
                return Point.ZERO;
            return new Point(x, y, Fp.ONE);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */
        static normalizeZ(points) {
            const toInv = Fp.invertBatch(points.map((p) => p.pz));
            return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */
        static fromHex(hex) {
            const P = Point.fromAffine(fromBytes((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('pointHex', hex)));
            P.assertValidity();
            return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
            return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            this._WINDOW_SIZE = windowSize;
            pointPrecomputes.delete(this);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
            if (this.is0()) {
                // (0, 1, 0) aka ZERO is invalid in most contexts.
                // In BLS, ZERO can be serialized, so we allow it.
                // (0, 0, 0) is wrong representation of ZERO and is always invalid.
                if (CURVE.allowInfinityPoint && !Fp.is0(this.py))
                    return;
                throw new Error('bad point: ZERO');
            }
            // Some 3rd-party test vectors require different wording between here & `fromCompressedHex`
            const { x, y } = this.toAffine();
            // Check if x, y are valid field elements
            if (!Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('bad point: x or y not FE');
            const left = Fp.sqr(y); // y²
            const right = weierstrassEquation(x); // x³ + ax + b
            if (!Fp.eql(left, right))
                throw new Error('bad point: equation left != right');
            if (!this.isTorsionFree())
                throw new Error('bad point: not in prime-order subgroup');
        }
        hasEvenY() {
            const { y } = this.toAffine();
            if (Fp.isOdd)
                return !Fp.isOdd(y);
            throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */
        equals(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
            const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
            return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */
        negate() {
            return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
            const { a, b } = CURVE;
            const b3 = Fp.mul(b, _3n);
            const { px: X1, py: Y1, pz: Z1 } = this;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            let t0 = Fp.mul(X1, X1); // step 1
            let t1 = Fp.mul(Y1, Y1);
            let t2 = Fp.mul(Z1, Z1);
            let t3 = Fp.mul(X1, Y1);
            t3 = Fp.add(t3, t3); // step 5
            Z3 = Fp.mul(X1, Z1);
            Z3 = Fp.add(Z3, Z3);
            X3 = Fp.mul(a, Z3);
            Y3 = Fp.mul(b3, t2);
            Y3 = Fp.add(X3, Y3); // step 10
            X3 = Fp.sub(t1, Y3);
            Y3 = Fp.add(t1, Y3);
            Y3 = Fp.mul(X3, Y3);
            X3 = Fp.mul(t3, X3);
            Z3 = Fp.mul(b3, Z3); // step 15
            t2 = Fp.mul(a, t2);
            t3 = Fp.sub(t0, t2);
            t3 = Fp.mul(a, t3);
            t3 = Fp.add(t3, Z3);
            Z3 = Fp.add(t0, t0); // step 20
            t0 = Fp.add(Z3, t0);
            t0 = Fp.add(t0, t2);
            t0 = Fp.mul(t0, t3);
            Y3 = Fp.add(Y3, t0);
            t2 = Fp.mul(Y1, Z1); // step 25
            t2 = Fp.add(t2, t2);
            t0 = Fp.mul(t2, t3);
            X3 = Fp.sub(X3, t0);
            Z3 = Fp.mul(t2, t1);
            Z3 = Fp.add(Z3, Z3); // step 30
            Z3 = Fp.add(Z3, Z3);
            return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            const a = CURVE.a;
            const b3 = Fp.mul(CURVE.b, _3n);
            let t0 = Fp.mul(X1, X2); // step 1
            let t1 = Fp.mul(Y1, Y2);
            let t2 = Fp.mul(Z1, Z2);
            let t3 = Fp.add(X1, Y1);
            let t4 = Fp.add(X2, Y2); // step 5
            t3 = Fp.mul(t3, t4);
            t4 = Fp.add(t0, t1);
            t3 = Fp.sub(t3, t4);
            t4 = Fp.add(X1, Z1);
            let t5 = Fp.add(X2, Z2); // step 10
            t4 = Fp.mul(t4, t5);
            t5 = Fp.add(t0, t2);
            t4 = Fp.sub(t4, t5);
            t5 = Fp.add(Y1, Z1);
            X3 = Fp.add(Y2, Z2); // step 15
            t5 = Fp.mul(t5, X3);
            X3 = Fp.add(t1, t2);
            t5 = Fp.sub(t5, X3);
            Z3 = Fp.mul(a, t4);
            X3 = Fp.mul(b3, t2); // step 20
            Z3 = Fp.add(X3, Z3);
            X3 = Fp.sub(t1, Z3);
            Z3 = Fp.add(t1, Z3);
            Y3 = Fp.mul(X3, Z3);
            t1 = Fp.add(t0, t0); // step 25
            t1 = Fp.add(t1, t0);
            t2 = Fp.mul(a, t2);
            t4 = Fp.mul(b3, t4);
            t1 = Fp.add(t1, t2);
            t2 = Fp.sub(t0, t2); // step 30
            t2 = Fp.mul(a, t2);
            t4 = Fp.add(t4, t2);
            t0 = Fp.mul(t1, t4);
            Y3 = Fp.add(Y3, t0);
            t0 = Fp.mul(t5, t4); // step 35
            X3 = Fp.mul(t3, X3);
            X3 = Fp.sub(X3, t0);
            t0 = Fp.mul(t3, t1);
            Z3 = Fp.mul(t5, Z3);
            Z3 = Fp.add(Z3, t0); // step 40
            return new Point(X3, Y3, Z3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
                const toInv = Fp.invertBatch(comp.map((p) => p.pz));
                return comp.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
            });
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */
        multiplyUnsafe(n) {
            const I = Point.ZERO;
            if (n === _0n)
                return I;
            assertGE(n); // Will throw on 0
            if (n === _1n)
                return this;
            const { endo } = CURVE;
            if (!endo)
                return wnaf.unsafeLadder(this, n);
            // Apply endomorphism
            let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
            let k1p = I;
            let k2p = I;
            let d = this;
            while (k1 > _0n || k2 > _0n) {
                if (k1 & _1n)
                    k1p = k1p.add(d);
                if (k2 & _1n)
                    k2p = k2p.add(d);
                d = d.double();
                k1 >>= _1n;
                k2 >>= _1n;
            }
            if (k1neg)
                k1p = k1p.negate();
            if (k2neg)
                k2p = k2p.negate();
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            return k1p.add(k2p);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */
        multiply(scalar) {
            assertGE(scalar);
            let n = scalar;
            let point, fake; // Fake point is used to const-time mult
            const { endo } = CURVE;
            if (endo) {
                const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
                let { p: k1p, f: f1p } = this.wNAF(k1);
                let { p: k2p, f: f2p } = this.wNAF(k2);
                k1p = wnaf.constTimeNegate(k1neg, k1p);
                k2p = wnaf.constTimeNegate(k2neg, k2p);
                k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                point = k1p.add(k2p);
                fake = f1p.add(f2p);
            }
            else {
                const { p, f } = this.wNAF(n);
                point = p;
                fake = f;
            }
            // Normalize `z` for both points, but return only real one
            return Point.normalizeZ([point, fake])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */
        multiplyAndAddUnsafe(Q, a, b) {
            const G = Point.BASE; // No Strauss-Shamir trick: we have 10% faster G precomputes
            const mul = (P, a // Select faster multiply() method
            ) => (a === _0n || a === _1n || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a));
            const sum = mul(this, a).add(mul(Q, b));
            return sum.is0() ? undefined : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
            const { px: x, py: y, pz: z } = this;
            const is0 = this.is0();
            // If invZ was 0, we return zero point. However we still want to execute
            // all operations, so we replace invZ with a random number, 1.
            if (iz == null)
                iz = is0 ? Fp.ONE : Fp.inv(z);
            const ax = Fp.mul(x, iz);
            const ay = Fp.mul(y, iz);
            const zz = Fp.mul(z, iz);
            if (is0)
                return { x: Fp.ZERO, y: Fp.ZERO };
            if (!Fp.eql(zz, Fp.ONE))
                throw new Error('invZ was invalid');
            return { x: ax, y: ay };
        }
        isTorsionFree() {
            const { h: cofactor, isTorsionFree } = CURVE;
            if (cofactor === _1n)
                return true; // No subgroups, always torsion-free
            if (isTorsionFree)
                return isTorsionFree(Point, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
        }
        clearCofactor() {
            const { h: cofactor, clearCofactor } = CURVE;
            if (cofactor === _1n)
                return this; // Fast-path
            if (clearCofactor)
                return clearCofactor(Point, this);
            return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
            this.assertValidity();
            return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
            return _utils_js__WEBPACK_IMPORTED_MODULE_1__.bytesToHex(this.toRawBytes(isCompressed));
        }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = (0,_curve_js__WEBPACK_IMPORTED_MODULE_0__.wNAF)(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    // Validate if generator point is on curve
    return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder,
    };
}
function validateOpts(curve) {
    const opts = (0,_curve_js__WEBPACK_IMPORTED_MODULE_0__.validateBasic)(curve);
    _utils_js__WEBPACK_IMPORTED_MODULE_1__.validateObject(opts, {
        hash: 'hash',
        hmac: 'function',
        randomBytes: 'function',
    }, {
        bits2int: 'function',
        bits2int_modN: 'function',
        lowS: 'boolean',
    });
    return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp.BYTES + 1; // e.g. 33 for 32
    const uncompressedLen = 2 * Fp.BYTES + 1; // e.g. 65 for 32
    function isValidFieldElement(num) {
        return _0n < num && num < Fp.ORDER; // 0 is banned since it's not invertible FE
    }
    function modN(a) {
        return _modular_js__WEBPACK_IMPORTED_MODULE_2__.mod(a, CURVE_ORDER);
    }
    function invN(a) {
        return _modular_js__WEBPACK_IMPORTED_MODULE_2__.invert(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder, } = weierstrassPoints({
        ...CURVE,
        toBytes(_c, point, isCompressed) {
            const a = point.toAffine();
            const x = Fp.toBytes(a.x);
            const cat = _utils_js__WEBPACK_IMPORTED_MODULE_1__.concatBytes;
            if (isCompressed) {
                return cat(Uint8Array.from([point.hasEvenY() ? 0x02 : 0x03]), x);
            }
            else {
                return cat(Uint8Array.from([0x04]), x, Fp.toBytes(a.y));
            }
        },
        fromBytes(bytes) {
            const len = bytes.length;
            const head = bytes[0];
            const tail = bytes.subarray(1);
            // this.assertValidity() is done inside of fromHex
            if (len === compressedLen && (head === 0x02 || head === 0x03)) {
                const x = _utils_js__WEBPACK_IMPORTED_MODULE_1__.bytesToNumberBE(tail);
                if (!isValidFieldElement(x))
                    throw new Error('Point is not on curve');
                const y2 = weierstrassEquation(x); // y² = x³ + ax + b
                let y = Fp.sqrt(y2); // y = y² ^ (p+1)/4
                const isYOdd = (y & _1n) === _1n;
                // ECDSA
                const isHeadOdd = (head & 1) === 1;
                if (isHeadOdd !== isYOdd)
                    y = Fp.neg(y);
                return { x, y };
            }
            else if (len === uncompressedLen && head === 0x04) {
                const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                return { x, y };
            }
            else {
                throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
            }
        },
    });
    const numToNByteStr = (num) => _utils_js__WEBPACK_IMPORTED_MODULE_1__.bytesToHex(_utils_js__WEBPACK_IMPORTED_MODULE_1__.numberToBytesBE(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> _1n;
        return number > HALF;
    }
    function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    // slice bytes num
    const slcNum = (b, from, to) => _utils_js__WEBPACK_IMPORTED_MODULE_1__.bytesToNumberBE(b.slice(from, to));
    /**
     * ECDSA signature with its (r, s) properties. Supports DER & compact representations.
     */
    class Signature {
        constructor(r, s, recovery) {
            this.r = r;
            this.s = s;
            this.recovery = recovery;
            this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
            const l = CURVE.nByteLength;
            hex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('compactSignature', hex, l * 2);
            return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
            const { r, s } = DER.toSig((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('DER', hex));
            return new Signature(r, s);
        }
        assertValidity() {
            // can use assertGE here
            if (!isWithinCurveOrder(this.r))
                throw new Error('r must be 0 < r < CURVE.n');
            if (!isWithinCurveOrder(this.s))
                throw new Error('s must be 0 < s < CURVE.n');
        }
        addRecoveryBit(recovery) {
            return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
            const { r, s, recovery: rec } = this;
            const h = bits2int_modN((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('msgHash', msgHash)); // Truncate hash
            if (rec == null || ![0, 1, 2, 3].includes(rec))
                throw new Error('recovery id invalid');
            const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
            if (radj >= Fp.ORDER)
                throw new Error('recovery id 2 or 3 invalid');
            const prefix = (rec & 1) === 0 ? '02' : '03';
            const R = Point.fromHex(prefix + numToNByteStr(radj));
            const ir = invN(radj); // r^-1
            const u1 = modN(-h * ir); // -hr^-1
            const u2 = modN(s * ir); // sr^-1
            const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2); // (sr^-1)R-(hr^-1)G = -(hr^-1)G + (sr^-1)
            if (!Q)
                throw new Error('point at infinify'); // unsafe is fine: no priv data leaked
            Q.assertValidity();
            return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
            return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
            return _utils_js__WEBPACK_IMPORTED_MODULE_1__.hexToBytes(this.toDERHex());
        }
        toDERHex() {
            return DER.hexFromSig({ r: this.r, s: this.s });
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
            return _utils_js__WEBPACK_IMPORTED_MODULE_1__.hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
            return numToNByteStr(this.r) + numToNByteStr(this.s);
        }
    }
    const utils = {
        isValidPrivateKey(privateKey) {
            try {
                normPrivateKeyToScalar(privateKey);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        normPrivateKeyToScalar: normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */
        randomPrivateKey: () => {
            const length = _modular_js__WEBPACK_IMPORTED_MODULE_2__.getMinHashLength(CURVE.n);
            return _modular_js__WEBPACK_IMPORTED_MODULE_2__.mapHashToField(CURVE.randomBytes(length), CURVE.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */
        precompute(windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3)); // 3 is arbitrary, just need any number here
            return point;
        },
    };
    /**
     * Computes public key for a private key. Checks for validity of the private key.
     * @param privateKey private key
     * @param isCompressed whether to return compact (default), or full key
     * @returns Public key, full when isCompressed=false; short when isCompressed=true
     */
    function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    /**
     * Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
     */
    function isProbPub(item) {
        const arr = _utils_js__WEBPACK_IMPORTED_MODULE_1__.isBytes(item);
        const str = typeof item === 'string';
        const len = (arr || str) && item.length;
        if (arr)
            return len === compressedLen || len === uncompressedLen;
        if (str)
            return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point)
            return true;
        return false;
    }
    /**
     * ECDH (Elliptic Curve Diffie Hellman).
     * Computes shared public key from private key and public key.
     * Checks: 1) private key validity 2) shared key is on-curve.
     * Does NOT hash the result.
     * @param privateA private key
     * @param publicB different public key
     * @param isCompressed whether to return compact (default), or full key
     * @returns shared public key
     */
    function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA))
            throw new Error('first arg must be private key');
        if (!isProbPub(publicB))
            throw new Error('second arg must be public key');
        const b = Point.fromHex(publicB); // check for being on-curve
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    // RFC6979: ensure ECDSA msg is X bytes and < N. RFC suggests optional truncating via bits2octets.
    // FIPS 186-4 4.6 suggests the leftmost min(nBitLen, outLen) bits, which matches bits2int.
    // bits2int can produce res>N, we can do mod(res, N) since the bitLen is the same.
    // int2octets can't be used; pads small msgs with 0: unacceptatble for trunc as per RFC vectors
    const bits2int = CURVE.bits2int ||
        function (bytes) {
            // For curves with nBitLength % 8 !== 0: bits2octets(bits2octets(m)) !== bits2octets(m)
            // for some cases, since bytes.length * 8 is not actual bitLength.
            const num = _utils_js__WEBPACK_IMPORTED_MODULE_1__.bytesToNumberBE(bytes); // check for == u8 done here
            const delta = bytes.length * 8 - CURVE.nBitLength; // truncate to nBitLength leftmost bits
            return delta > 0 ? num >> BigInt(delta) : num;
        };
    const bits2int_modN = CURVE.bits2int_modN ||
        function (bytes) {
            return modN(bits2int(bytes)); // can't use bytesToNumberBE here
        };
    // NOTE: pads output with zero as per spec
    const ORDER_MASK = _utils_js__WEBPACK_IMPORTED_MODULE_1__.bitMask(CURVE.nBitLength);
    /**
     * Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
     */
    function int2octets(num) {
        if (typeof num !== 'bigint')
            throw new Error('bigint expected');
        if (!(_0n <= num && num < ORDER_MASK))
            throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
        // works with order, can have different size than numToField!
        return _utils_js__WEBPACK_IMPORTED_MODULE_1__.numberToBytesBE(num, CURVE.nByteLength);
    }
    // Steps A, D of RFC6979 3.2
    // Creates RFC6979 seed; converts msg/privKey to numbers.
    // Used only in sign, not in verify.
    // NOTE: we cannot assume here that msgHash has same amount of bytes as curve order, this will be wrong at least for P521.
    // Also it can be bigger for P224 + SHA256
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (['recovered', 'canonical'].some((k) => k in opts))
            throw new Error('sign() legacy options not supported');
        const { hash, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts; // generates low-s sigs by default
        if (lowS == null)
            lowS = true; // RFC6979 3.2: we skip step A, because we already provide hash
        msgHash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('msgHash', msgHash);
        if (prehash)
            msgHash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('prehashed msgHash', hash(msgHash));
        // We can't later call bits2octets, since nested bits2int is broken for curves
        // with nBitLength % 8 !== 0. Because of that, we unwrap it here as int2octets call.
        // const bits2octets = (bits) => int2octets(bits2int_modN(bits))
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey); // validate private key, convert to bigint
        const seedArgs = [int2octets(d), int2octets(h1int)];
        // extraEntropy. RFC6979 3.6: additional k' (optional).
        if (ent != null) {
            // K = HMAC_K(V || 0x00 || int2octets(x) || bits2octets(h1) || k')
            const e = ent === true ? randomBytes(Fp.BYTES) : ent; // generate random bytes OR pass as-is
            seedArgs.push((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('extraEntropy', e)); // check for being bytes
        }
        const seed = _utils_js__WEBPACK_IMPORTED_MODULE_1__.concatBytes(...seedArgs); // Step D of RFC6979 3.2
        const m = h1int; // NOTE: no need to call bits2int second time here, it is inside truncateHash!
        // Converts signature params into point w r/s, checks result for validity.
        function k2sig(kBytes) {
            // RFC 6979 Section 3.2, step 3: k = bits2int(T)
            const k = bits2int(kBytes); // Cannot use fields methods, since it is group element
            if (!isWithinCurveOrder(k))
                return; // Important: all mod() calls here must be done over N
            const ik = invN(k); // k^-1 mod n
            const q = Point.BASE.multiply(k).toAffine(); // q = Gk
            const r = modN(q.x); // r = q.x mod n
            if (r === _0n)
                return;
            // Can use scalar blinding b^-1(bm + bdr) where b ∈ [1,q−1] according to
            // https://tches.iacr.org/index.php/TCHES/article/view/7337/6509. We've decided against it:
            // a) dependency on CSPRNG b) 15% slowdown c) doesn't really help since bigints are not CT
            const s = modN(ik * modN(m + r * d)); // Not using blinding here
            if (s === _0n)
                return;
            let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n); // recovery bit (2 or 3, when q.x > n)
            let normS = s;
            if (lowS && isBiggerThanHalfOrder(s)) {
                normS = normalizeS(s); // if lowS was passed, ensure s is always
                recovery ^= 1; // // in the bottom half of N
            }
            return new Signature(r, normS, recovery); // use normS, not s
        }
        return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    /**
     * Signs message hash with a private key.
     * ```
     * sign(m, d, k) where
     *   (x, y) = G × k
     *   r = x mod n
     *   s = (m + dr)/k mod n
     * ```
     * @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
     * @param privKey private key
     * @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
     * @returns signature with recovery param
     */
    function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts); // Steps A, D of RFC6979 3.2.
        const C = CURVE;
        const drbg = _utils_js__WEBPACK_IMPORTED_MODULE_1__.createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig); // Steps B, C, D, E, F, G
    }
    // Enable precomputes. Slows down first publicKey computation by 20ms.
    Point.BASE._setWindowSize(8);
    // utils.precompute(8, ProjectivePoint.BASE)
    /**
     * Verifies a signature against message hash and public key.
     * Rejects lowS signatures by default: to override,
     * specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
     *
     * ```
     * verify(r, s, h, P) where
     *   U1 = hs^-1 mod n
     *   U2 = rs^-1 mod n
     *   R = U1⋅G - U2⋅P
     *   mod(R.x, n) == r
     * ```
     */
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        const sg = signature;
        msgHash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('msgHash', msgHash);
        publicKey = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureBytes)('publicKey', publicKey);
        if ('strict' in opts)
            throw new Error('options.strict was renamed to lowS');
        const { lowS, prehash } = opts;
        let _sig = undefined;
        let P;
        try {
            if (typeof sg === 'string' || _utils_js__WEBPACK_IMPORTED_MODULE_1__.isBytes(sg)) {
                // Signature can be represented in 2 ways: compact (2*nByteLength) & DER (variable-length).
                // Since DER can also be 2*nByteLength bytes, we check for it first.
                try {
                    _sig = Signature.fromDER(sg);
                }
                catch (derError) {
                    if (!(derError instanceof DER.Err))
                        throw derError;
                    _sig = Signature.fromCompact(sg);
                }
            }
            else if (typeof sg === 'object' && typeof sg.r === 'bigint' && typeof sg.s === 'bigint') {
                const { r, s } = sg;
                _sig = new Signature(r, s);
            }
            else {
                throw new Error('PARSE');
            }
            P = Point.fromHex(publicKey);
        }
        catch (error) {
            if (error.message === 'PARSE')
                throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
            return false;
        }
        if (lowS && _sig.hasHighS())
            return false;
        if (prehash)
            msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash); // Cannot use fields methods, since it is group element
        const is = invN(s); // s^-1
        const u1 = modN(h * is); // u1 = hs^-1 mod n
        const u2 = modN(r * is); // u2 = rs^-1 mod n
        const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine(); // R = u1⋅G + u2⋅P
        if (!R)
            return false;
        const v = modN(R.x);
        return v === r;
    }
    return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils,
    };
}
/**
 * Implementation of the Shallue and van de Woestijne method for any weierstrass curve.
 * TODO: check if there is a way to merge this with uvRatio in Edwards; move to modular.
 * b = True and y = sqrt(u / v) if (u / v) is square in F, and
 * b = False and y = sqrt(Z * (u / v)) otherwise.
 * @param Fp
 * @param Z
 * @returns
 */
function SWUFpSqrtRatio(Fp, Z) {
    // Generic implementation
    const q = Fp.ORDER;
    let l = _0n;
    for (let o = q - _1n; o % _2n === _0n; o /= _2n)
        l += _1n;
    const c1 = l; // 1. c1, the largest integer such that 2^c1 divides q - 1.
    // We need 2n ** c1 and 2n ** (c1-1). We can't use **; but we can use <<.
    // 2n ** c1 == 2n << (c1-1)
    const _2n_pow_c1_1 = _2n << (c1 - _1n - _1n);
    const _2n_pow_c1 = _2n_pow_c1_1 * _2n;
    const c2 = (q - _1n) / _2n_pow_c1; // 2. c2 = (q - 1) / (2^c1)  # Integer arithmetic
    const c3 = (c2 - _1n) / _2n; // 3. c3 = (c2 - 1) / 2            # Integer arithmetic
    const c4 = _2n_pow_c1 - _1n; // 4. c4 = 2^c1 - 1                # Integer arithmetic
    const c5 = _2n_pow_c1_1; // 5. c5 = 2^(c1 - 1)                  # Integer arithmetic
    const c6 = Fp.pow(Z, c2); // 6. c6 = Z^c2
    const c7 = Fp.pow(Z, (c2 + _1n) / _2n); // 7. c7 = Z^((c2 + 1) / 2)
    let sqrtRatio = (u, v) => {
        let tv1 = c6; // 1. tv1 = c6
        let tv2 = Fp.pow(v, c4); // 2. tv2 = v^c4
        let tv3 = Fp.sqr(tv2); // 3. tv3 = tv2^2
        tv3 = Fp.mul(tv3, v); // 4. tv3 = tv3 * v
        let tv5 = Fp.mul(u, tv3); // 5. tv5 = u * tv3
        tv5 = Fp.pow(tv5, c3); // 6. tv5 = tv5^c3
        tv5 = Fp.mul(tv5, tv2); // 7. tv5 = tv5 * tv2
        tv2 = Fp.mul(tv5, v); // 8. tv2 = tv5 * v
        tv3 = Fp.mul(tv5, u); // 9. tv3 = tv5 * u
        let tv4 = Fp.mul(tv3, tv2); // 10. tv4 = tv3 * tv2
        tv5 = Fp.pow(tv4, c5); // 11. tv5 = tv4^c5
        let isQR = Fp.eql(tv5, Fp.ONE); // 12. isQR = tv5 == 1
        tv2 = Fp.mul(tv3, c7); // 13. tv2 = tv3 * c7
        tv5 = Fp.mul(tv4, tv1); // 14. tv5 = tv4 * tv1
        tv3 = Fp.cmov(tv2, tv3, isQR); // 15. tv3 = CMOV(tv2, tv3, isQR)
        tv4 = Fp.cmov(tv5, tv4, isQR); // 16. tv4 = CMOV(tv5, tv4, isQR)
        // 17. for i in (c1, c1 - 1, ..., 2):
        for (let i = c1; i > _1n; i--) {
            let tv5 = i - _2n; // 18.    tv5 = i - 2
            tv5 = _2n << (tv5 - _1n); // 19.    tv5 = 2^tv5
            let tvv5 = Fp.pow(tv4, tv5); // 20.    tv5 = tv4^tv5
            const e1 = Fp.eql(tvv5, Fp.ONE); // 21.    e1 = tv5 == 1
            tv2 = Fp.mul(tv3, tv1); // 22.    tv2 = tv3 * tv1
            tv1 = Fp.mul(tv1, tv1); // 23.    tv1 = tv1 * tv1
            tvv5 = Fp.mul(tv4, tv1); // 24.    tv5 = tv4 * tv1
            tv3 = Fp.cmov(tv2, tv3, e1); // 25.    tv3 = CMOV(tv2, tv3, e1)
            tv4 = Fp.cmov(tvv5, tv4, e1); // 26.    tv4 = CMOV(tv5, tv4, e1)
        }
        return { isValid: isQR, value: tv3 };
    };
    if (Fp.ORDER % _4n === _3n) {
        // sqrt_ratio_3mod4(u, v)
        const c1 = (Fp.ORDER - _3n) / _4n; // 1. c1 = (q - 3) / 4     # Integer arithmetic
        const c2 = Fp.sqrt(Fp.neg(Z)); // 2. c2 = sqrt(-Z)
        sqrtRatio = (u, v) => {
            let tv1 = Fp.sqr(v); // 1. tv1 = v^2
            const tv2 = Fp.mul(u, v); // 2. tv2 = u * v
            tv1 = Fp.mul(tv1, tv2); // 3. tv1 = tv1 * tv2
            let y1 = Fp.pow(tv1, c1); // 4. y1 = tv1^c1
            y1 = Fp.mul(y1, tv2); // 5. y1 = y1 * tv2
            const y2 = Fp.mul(y1, c2); // 6. y2 = y1 * c2
            const tv3 = Fp.mul(Fp.sqr(y1), v); // 7. tv3 = y1^2; 8. tv3 = tv3 * v
            const isQR = Fp.eql(tv3, u); // 9. isQR = tv3 == u
            let y = Fp.cmov(y2, y1, isQR); // 10. y = CMOV(y2, y1, isQR)
            return { isValid: isQR, value: y }; // 11. return (isQR, y) isQR ? y : y*c2
        };
    }
    // No curves uses that
    // if (Fp.ORDER % _8n === _5n) // sqrt_ratio_5mod8
    return sqrtRatio;
}
/**
 * Simplified Shallue-van de Woestijne-Ulas Method
 * https://www.rfc-editor.org/rfc/rfc9380#section-6.6.2
 */
function mapToCurveSimpleSWU(Fp, opts) {
    _modular_js__WEBPACK_IMPORTED_MODULE_2__.validateField(Fp);
    if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error('mapToCurveSimpleSWU: invalid opts');
    const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
    if (!Fp.isOdd)
        throw new Error('Fp.isOdd is not implemented!');
    // Input: u, an element of F.
    // Output: (x, y), a point on E.
    return (u) => {
        // prettier-ignore
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u); // 1.  tv1 = u^2
        tv1 = Fp.mul(tv1, opts.Z); // 2.  tv1 = Z * tv1
        tv2 = Fp.sqr(tv1); // 3.  tv2 = tv1^2
        tv2 = Fp.add(tv2, tv1); // 4.  tv2 = tv2 + tv1
        tv3 = Fp.add(tv2, Fp.ONE); // 5.  tv3 = tv2 + 1
        tv3 = Fp.mul(tv3, opts.B); // 6.  tv3 = B * tv3
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO)); // 7.  tv4 = CMOV(Z, -tv2, tv2 != 0)
        tv4 = Fp.mul(tv4, opts.A); // 8.  tv4 = A * tv4
        tv2 = Fp.sqr(tv3); // 9.  tv2 = tv3^2
        tv6 = Fp.sqr(tv4); // 10. tv6 = tv4^2
        tv5 = Fp.mul(tv6, opts.A); // 11. tv5 = A * tv6
        tv2 = Fp.add(tv2, tv5); // 12. tv2 = tv2 + tv5
        tv2 = Fp.mul(tv2, tv3); // 13. tv2 = tv2 * tv3
        tv6 = Fp.mul(tv6, tv4); // 14. tv6 = tv6 * tv4
        tv5 = Fp.mul(tv6, opts.B); // 15. tv5 = B * tv6
        tv2 = Fp.add(tv2, tv5); // 16. tv2 = tv2 + tv5
        x = Fp.mul(tv1, tv3); // 17.   x = tv1 * tv3
        const { isValid, value } = sqrtRatio(tv2, tv6); // 18. (is_gx1_square, y1) = sqrt_ratio(tv2, tv6)
        y = Fp.mul(tv1, u); // 19.   y = tv1 * u  -> Z * u^3 * y1
        y = Fp.mul(y, value); // 20.   y = y * y1
        x = Fp.cmov(x, tv3, isValid); // 21.   x = CMOV(x, tv3, is_gx1_square)
        y = Fp.cmov(y, value, isValid); // 22.   y = CMOV(y, y1, is_gx1_square)
        const e1 = Fp.isOdd(u) === Fp.isOdd(y); // 23.  e1 = sgn0(u) == sgn0(y)
        y = Fp.cmov(Fp.neg(y), y, e1); // 24.   y = CMOV(-y, y, e1)
        x = Fp.div(x, tv4); // 25.   x = x / tv4
        return { x, y };
    };
}
//# sourceMappingURL=weierstrass.js.map

/***/ }),

/***/ "./node_modules/@noble/curves/esm/secp256k1.js":
/*!*****************************************************!*\
  !*** ./node_modules/@noble/curves/esm/secp256k1.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeToCurve: () => (/* binding */ encodeToCurve),
/* harmony export */   hashToCurve: () => (/* binding */ hashToCurve),
/* harmony export */   schnorr: () => (/* binding */ schnorr),
/* harmony export */   secp256k1: () => (/* binding */ secp256k1)
/* harmony export */ });
/* harmony import */ var _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @noble/hashes/sha256 */ "./node_modules/@noble/hashes/esm/sha256.js");
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @noble/hashes/utils */ "./node_modules/@noble/hashes/esm/utils.js");
/* harmony import */ var _abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/modular.js */ "./node_modules/@noble/curves/esm/abstract/modular.js");
/* harmony import */ var _abstract_weierstrass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abstract/weierstrass.js */ "./node_modules/@noble/curves/esm/abstract/weierstrass.js");
/* harmony import */ var _abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/utils.js */ "./node_modules/@noble/curves/esm/abstract/utils.js");
/* harmony import */ var _abstract_hash_to_curve_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abstract/hash-to-curve.js */ "./node_modules/@noble/curves/esm/abstract/hash-to-curve.js");
/* harmony import */ var _shortw_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_shortw_utils.js */ "./node_modules/@noble/curves/esm/_shortw_utils.js");
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */







const secp256k1P = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
const secp256k1N = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
const _1n = BigInt(1);
const _2n = BigInt(2);
const divNearest = (a, b) => (a + b / _2n) / b;
/**
 * √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
 * (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
 */
function sqrtMod(y) {
    const P = secp256k1P;
    // prettier-ignore
    const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    // prettier-ignore
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = (y * y * y) % P; // x^3, 11
    const b3 = (b2 * b2 * y) % P; // x^7
    const b6 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b3, _3n, P) * b3) % P;
    const b9 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b6, _3n, P) * b3) % P;
    const b11 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b9, _2n, P) * b2) % P;
    const b22 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b11, _11n, P) * b11) % P;
    const b44 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b22, _22n, P) * b22) % P;
    const b88 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b44, _44n, P) * b44) % P;
    const b176 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b88, _88n, P) * b88) % P;
    const b220 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b176, _44n, P) * b44) % P;
    const b223 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b220, _3n, P) * b3) % P;
    const t1 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(b223, _23n, P) * b22) % P;
    const t2 = ((0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(t1, _6n, P) * b2) % P;
    const root = (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(t2, _2n, P);
    if (!Fp.eql(Fp.sqr(root), y))
        throw new Error('Cannot find square root');
    return root;
}
const Fp = (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.Field)(secp256k1P, undefined, undefined, { sqrt: sqrtMod });
const secp256k1 = (0,_shortw_utils_js__WEBPACK_IMPORTED_MODULE_1__.createCurve)({
    a: BigInt(0), // equation params: a, b
    b: BigInt(7), // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
    Fp, // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
    n: secp256k1N, // Curve order, total count of valid points in the field
    // Base point (x, y) aka generator point
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    h: BigInt(1), // Cofactor
    lowS: true, // Allow only low-S signatures by default in sign() and verify()
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (k) => {
            const n = secp256k1N;
            const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
            const b1 = -_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
            const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
            const b2 = a1;
            const POW_2_128 = BigInt('0x100000000000000000000000000000000'); // (2n**128n).toString(16)
            const c1 = divNearest(b2 * k, n);
            const c2 = divNearest(-b1 * k, n);
            let k1 = (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.mod)(k - c1 * a1 - c2 * a2, n);
            let k2 = (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.mod)(-c1 * b1 - c2 * b2, n);
            const k1neg = k1 > POW_2_128;
            const k2neg = k2 > POW_2_128;
            if (k1neg)
                k1 = n - k1;
            if (k2neg)
                k2 = n - k2;
            if (k1 > POW_2_128 || k2 > POW_2_128) {
                throw new Error('splitScalar: Endomorphism failed, k=' + k);
            }
            return { k1neg, k1, k2neg, k2 };
        },
    },
}, _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256);
// Schnorr signatures are superior to ECDSA from above. Below is Schnorr-specific BIP0340 code.
// https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
const _0n = BigInt(0);
const fe = (x) => typeof x === 'bigint' && _0n < x && x < secp256k1P;
const ge = (x) => typeof x === 'bigint' && _0n < x && x < secp256k1N;
/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */
const TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === undefined) {
        const tagH = (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256)(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
        tagP = (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.concatBytes)(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256)((0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.concatBytes)(tagP, ...messages));
}
// ECDSA compact points are 33-byte. Schnorr is 32: we strip first byte 0x02 or 0x03
const pointToBytes = (point) => point.toRawBytes(true).slice(1);
const numTo32b = (n) => (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.numberToBytesBE)(n, 32);
const modP = (x) => (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.mod)(x, secp256k1P);
const modN = (x) => (0,_abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.mod)(x, secp256k1N);
const Point = secp256k1.ProjectivePoint;
const GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
// Calculate point, scalar and bytes
function schnorrGetExtPubKey(priv) {
    let d_ = secp256k1.utils.normPrivateKeyToScalar(priv); // same method executed in fromPrivateKey
    let p = Point.fromPrivateKey(d_); // P = d'⋅G; 0 < d' < n check is done inside
    const scalar = p.hasEvenY() ? d_ : modN(-d_);
    return { scalar: scalar, bytes: pointToBytes(p) };
}
/**
 * lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
 * @returns valid point checked for being on-curve
 */
function lift_x(x) {
    if (!fe(x))
        throw new Error('bad x: need 0 < x < p'); // Fail if x ≥ p.
    const xx = modP(x * x);
    const c = modP(xx * x + BigInt(7)); // Let c = x³ + 7 mod p.
    let y = sqrtMod(c); // Let y = c^(p+1)/4 mod p.
    if (y % _2n !== _0n)
        y = modP(-y); // Return the unique point P such that x(P) = x and
    const p = new Point(x, y, _1n); // y(P) = y if y mod 2 = 0 or y(P) = p-y otherwise.
    p.assertValidity();
    return p;
}
/**
 * Create tagged hash, convert it to bigint, reduce modulo-n.
 */
function challenge(...args) {
    return modN((0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToNumberBE)(taggedHash('BIP0340/challenge', ...args)));
}
/**
 * Schnorr public key is just `x` coordinate of Point as per BIP340.
 */
function schnorrGetPublicKey(privateKey) {
    return schnorrGetExtPubKey(privateKey).bytes; // d'=int(sk). Fail if d'=0 or d'≥n. Ret bytes(d'⋅G)
}
/**
 * Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
 * auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
 */
function schnorrSign(message, privateKey, auxRand = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_4__.randomBytes)(32)) {
    const m = (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.ensureBytes)('message', message);
    const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey); // checks for isWithinCurveOrder
    const a = (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.ensureBytes)('auxRand', auxRand, 32); // Auxiliary random data a: a 32-byte array
    const t = numTo32b(d ^ (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToNumberBE)(taggedHash('BIP0340/aux', a))); // Let t be the byte-wise xor of bytes(d) and hash/aux(a)
    const rand = taggedHash('BIP0340/nonce', t, px, m); // Let rand = hash/nonce(t || bytes(P) || m)
    const k_ = modN((0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToNumberBE)(rand)); // Let k' = int(rand) mod n
    if (k_ === _0n)
        throw new Error('sign failed: k is zero'); // Fail if k' = 0.
    const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_); // Let R = k'⋅G.
    const e = challenge(rx, px, m); // Let e = int(hash/challenge(bytes(R) || bytes(P) || m)) mod n.
    const sig = new Uint8Array(64); // Let sig = bytes(R) || bytes((k + ed) mod n).
    sig.set(rx, 0);
    sig.set(numTo32b(modN(k + e * d)), 32);
    // If Verify(bytes(P), m, sig) (see below) returns failure, abort
    if (!schnorrVerify(sig, m, px))
        throw new Error('sign: Invalid signature produced');
    return sig;
}
/**
 * Verifies Schnorr signature.
 * Will swallow errors & return false except for initial type validation of arguments.
 */
function schnorrVerify(signature, message, publicKey) {
    const sig = (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.ensureBytes)('signature', signature, 64);
    const m = (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.ensureBytes)('message', message);
    const pub = (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.ensureBytes)('publicKey', publicKey, 32);
    try {
        const P = lift_x((0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToNumberBE)(pub)); // P = lift_x(int(pk)); fail if that fails
        const r = (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToNumberBE)(sig.subarray(0, 32)); // Let r = int(sig[0:32]); fail if r ≥ p.
        if (!fe(r))
            return false;
        const s = (0,_abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToNumberBE)(sig.subarray(32, 64)); // Let s = int(sig[32:64]); fail if s ≥ n.
        if (!ge(s))
            return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m); // int(challenge(bytes(r)||bytes(P)||m))%n
        const R = GmulAdd(P, s, modN(-e)); // R = s⋅G - e⋅P
        if (!R || !R.hasEvenY() || R.toAffine().x !== r)
            return false; // -eP == (n-e)P
        return true; // Fail if is_infinite(R) / not has_even_y(R) / x(R) ≠ r.
    }
    catch (error) {
        return false;
    }
}
const schnorr = /* @__PURE__ */ (() => ({
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    utils: {
        randomPrivateKey: secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE: _abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.numberToBytesBE,
        bytesToNumberBE: _abstract_utils_js__WEBPACK_IMPORTED_MODULE_3__.bytesToNumberBE,
        taggedHash,
        mod: _abstract_modular_js__WEBPACK_IMPORTED_MODULE_0__.mod,
    },
}))();
const isoMap = /* @__PURE__ */ (() => (0,_abstract_hash_to_curve_js__WEBPACK_IMPORTED_MODULE_5__.isogenyMap)(Fp, [
    // xNum
    [
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
        '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
        '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c',
    ],
    // xDen
    [
        '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
        '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
    // yNum
    [
        '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
        '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
        '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
        '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84',
    ],
    // yDen
    [
        '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
        '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
        '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
].map((i) => i.map((j) => BigInt(j)))))();
const mapSWU = /* @__PURE__ */ (() => (0,_abstract_weierstrass_js__WEBPACK_IMPORTED_MODULE_6__.mapToCurveSimpleSWU)(Fp, {
    A: BigInt('0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'),
    B: BigInt('1771'),
    Z: Fp.create(BigInt('-11')),
}))();
const htf = /* @__PURE__ */ (() => (0,_abstract_hash_to_curve_js__WEBPACK_IMPORTED_MODULE_5__.createHasher)(secp256k1.ProjectivePoint, (scalars) => {
    const { x, y } = mapSWU(Fp.create(scalars[0]));
    return isoMap(x, y);
}, {
    DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
    encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
    p: Fp.ORDER,
    m: 1,
    k: 128,
    expand: 'xmd',
    hash: _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256,
}))();
const hashToCurve = /* @__PURE__ */ (() => htf.hashToCurve)();
const encodeToCurve = /* @__PURE__ */ (() => htf.encodeToCurve)();
//# sourceMappingURL=secp256k1.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/_assert.js":
/*!***************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/_assert.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bool: () => (/* binding */ bool),
/* harmony export */   bytes: () => (/* binding */ bytes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   exists: () => (/* binding */ exists),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   output: () => (/* binding */ output)
/* harmony export */ });
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
    if (typeof b !== 'boolean')
        throw new Error(`Expected boolean, not ${b}`);
}
// copied from utils
function isBytes(a) {
    return (a instanceof Uint8Array ||
        (a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array'));
}
function bytes(b, ...lengths) {
    if (!isBytes(b))
        throw new Error('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number(hash.outputLen);
    number(hash.blockLen);
}
function exists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}

const assert = { number, bool, bytes, hash, exists, output };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assert);
//# sourceMappingURL=_assert.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/_sha2.js":
/*!*************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/_sha2.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHA2: () => (/* binding */ SHA2)
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assert.js */ "./node_modules/@noble/hashes/esm/_assert.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/hashes/esm/utils.js");


// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function')
        return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number((value >> _32n) & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends _utils_js__WEBPACK_IMPORTED_MODULE_0__.Hash {
    constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createView)(this.buffer);
    }
    update(data) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__.exists)(this);
        const { view, buffer, blockLen } = this;
        data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createView)(data);
                for (; blockLen <= len - pos; pos += blockLen)
                    this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__.exists)(this);
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__.output)(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for (let i = pos; i < blockLen; i++)
            buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
            throw new Error('_sha2: outputLen bigger than state');
        for (let i = 0; i < outLen; i++)
            oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen)
            to.buffer.set(buffer);
        return to;
    }
}
//# sourceMappingURL=_sha2.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/_u64.js":
/*!************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/_u64.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   add3H: () => (/* binding */ add3H),
/* harmony export */   add3L: () => (/* binding */ add3L),
/* harmony export */   add4H: () => (/* binding */ add4H),
/* harmony export */   add4L: () => (/* binding */ add4L),
/* harmony export */   add5H: () => (/* binding */ add5H),
/* harmony export */   add5L: () => (/* binding */ add5L),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fromBig: () => (/* binding */ fromBig),
/* harmony export */   rotlBH: () => (/* binding */ rotlBH),
/* harmony export */   rotlBL: () => (/* binding */ rotlBL),
/* harmony export */   rotlSH: () => (/* binding */ rotlSH),
/* harmony export */   rotlSL: () => (/* binding */ rotlSL),
/* harmony export */   rotr32H: () => (/* binding */ rotr32H),
/* harmony export */   rotr32L: () => (/* binding */ rotr32L),
/* harmony export */   rotrBH: () => (/* binding */ rotrBH),
/* harmony export */   rotrBL: () => (/* binding */ rotrBL),
/* harmony export */   rotrSH: () => (/* binding */ rotrSH),
/* harmony export */   rotrSL: () => (/* binding */ rotrSL),
/* harmony export */   shrSH: () => (/* binding */ shrSH),
/* harmony export */   shrSL: () => (/* binding */ shrSL),
/* harmony export */   split: () => (/* binding */ split),
/* harmony export */   toBig: () => (/* binding */ toBig)
/* harmony export */ });
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s) => h >>> s;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l) => l;
const rotr32L = (h, _l) => h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
// prettier-ignore

// prettier-ignore
const u64 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (u64);
//# sourceMappingURL=_u64.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/crypto.js":
/*!**************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/crypto.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   crypto: () => (/* binding */ crypto)
/* harmony export */ });
const crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/hmac.js":
/*!************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/hmac.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HMAC: () => (/* binding */ HMAC),
/* harmony export */   hmac: () => (/* binding */ hmac)
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assert.js */ "./node_modules/@noble/hashes/esm/_assert.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/hashes/esm/utils.js");


// HMAC (RFC 2104)
class HMAC extends _utils_js__WEBPACK_IMPORTED_MODULE_0__.Hash {
    constructor(hash, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__.hash)(hash);
        const key = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function')
            throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for (let i = 0; i < pad.length; i++)
            pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for (let i = 0; i < pad.length; i++)
            pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__.exists)(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__.exists)(this);
        (0,_assert_js__WEBPACK_IMPORTED_MODULE_1__.bytes)(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 */
const hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key) => new HMAC(hash, key);
//# sourceMappingURL=hmac.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/pbkdf2.js":
/*!**************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/pbkdf2.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbkdf2: () => (/* binding */ pbkdf2),
/* harmony export */   pbkdf2Async: () => (/* binding */ pbkdf2Async)
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assert.js */ "./node_modules/@noble/hashes/esm/_assert.js");
/* harmony import */ var _hmac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hmac.js */ "./node_modules/@noble/hashes/esm/hmac.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/hashes/esm/utils.js");



// Common prologue and epilogue for sync/async functions
function pbkdf2Init(hash, _password, _salt, _opts) {
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_0__.hash)(hash);
    const opts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.checkOpts)({ dkLen: 32, asyncTick: 10 }, _opts);
    const { c, dkLen, asyncTick } = opts;
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_0__.number)(c);
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_0__.number)(dkLen);
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_0__.number)(asyncTick);
    if (c < 1)
        throw new Error('PBKDF2: iterations (c) should be >= 1');
    const password = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toBytes)(_password);
    const salt = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toBytes)(_salt);
    // DK = PBKDF2(PRF, Password, Salt, c, dkLen);
    const DK = new Uint8Array(dkLen);
    // U1 = PRF(Password, Salt + INT_32_BE(i))
    const PRF = _hmac_js__WEBPACK_IMPORTED_MODULE_2__.hmac.create(hash, password);
    const PRFSalt = PRF._cloneInto().update(salt);
    return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW)
        prfW.destroy();
    u.fill(0);
    return DK;
}
/**
 * PBKDF2-HMAC: RFC 2898 key derivation function
 * @param hash - hash function that would be used e.g. sha256
 * @param password - password from which a derived key is generated
 * @param salt - cryptographic salt
 * @param opts - {c, dkLen} where c is work factor and dkLen is output message size
 */
function pbkdf2(hash, password, salt, opts) {
    const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createView)(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        for (let ui = 1; ui < c; ui++) {
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for (let i = 0; i < Ti.length; i++)
                Ti[i] ^= u[i];
        }
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
async function pbkdf2Async(hash, password, salt, opts) {
    const { c, dkLen, asyncTick, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createView)(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        await (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.asyncLoop)(c - 1, asyncTick, () => {
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for (let i = 0; i < Ti.length; i++)
                Ti[i] ^= u[i];
        });
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
//# sourceMappingURL=pbkdf2.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/ripemd160.js":
/*!*****************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/ripemd160.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RIPEMD160: () => (/* binding */ RIPEMD160),
/* harmony export */   ripemd160: () => (/* binding */ ripemd160)
/* harmony export */ });
/* harmony import */ var _sha2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_sha2.js */ "./node_modules/@noble/hashes/esm/_sha2.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/hashes/esm/utils.js");


// https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
// https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
const Rho = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
const Id = /* @__PURE__ */ Uint8Array.from({ length: 16 }, (_, i) => i);
const Pi = /* @__PURE__ */ Id.map((i) => (9 * i + 5) % 16);
let idxL = [Id];
let idxR = [Pi];
for (let i = 0; i < 4; i++)
    for (let j of [idxL, idxR])
        j.push(j[i].map((k) => Rho[k]));
const shifts = /* @__PURE__ */ [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
].map((i) => new Uint8Array(i));
const shiftsL = /* @__PURE__ */ idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
const shiftsR = /* @__PURE__ */ idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
const Kl = /* @__PURE__ */ new Uint32Array([
    0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e,
]);
const Kr = /* @__PURE__ */ new Uint32Array([
    0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000,
]);
// The rotate left (circular left shift) operation for uint32
const rotl = (word, shift) => (word << shift) | (word >>> (32 - shift));
// It's called f() in spec.
function f(group, x, y, z) {
    if (group === 0)
        return x ^ y ^ z;
    else if (group === 1)
        return (x & y) | (~x & z);
    else if (group === 2)
        return (x | ~y) ^ z;
    else if (group === 3)
        return (x & z) | (y & ~z);
    else
        return x ^ (y | ~z);
}
// Temporary buffer, not used to store anything between runs
const BUF = /* @__PURE__ */ new Uint32Array(16);
class RIPEMD160 extends _sha2_js__WEBPACK_IMPORTED_MODULE_0__.SHA2 {
    constructor() {
        super(64, 20, 8, true);
        this.h0 = 0x67452301 | 0;
        this.h1 = 0xefcdab89 | 0;
        this.h2 = 0x98badcfe | 0;
        this.h3 = 0x10325476 | 0;
        this.h4 = 0xc3d2e1f0 | 0;
    }
    get() {
        const { h0, h1, h2, h3, h4 } = this;
        return [h0, h1, h2, h3, h4];
    }
    set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
    }
    process(view, offset) {
        for (let i = 0; i < 16; i++, offset += 4)
            BUF[i] = view.getUint32(offset, true);
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for (let group = 0; group < 5; group++) {
            const rGroup = 4 - group;
            const hbl = Kl[group], hbr = Kr[group]; // prettier-ignore
            const rl = idxL[group], rr = idxR[group]; // prettier-ignore
            const sl = shiftsL[group], sr = shiftsR[group]; // prettier-ignore
            for (let i = 0; i < 16; i++) {
                const tl = (rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el) | 0;
                al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for (let i = 0; i < 16; i++) {
                const tr = (rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er) | 0;
                ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set((this.h1 + cl + dr) | 0, (this.h2 + dl + er) | 0, (this.h3 + el + ar) | 0, (this.h4 + al + br) | 0, (this.h0 + bl + cr) | 0);
    }
    roundClean() {
        BUF.fill(0);
    }
    destroy() {
        this.destroyed = true;
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0);
    }
}
/**
 * RIPEMD-160 - a hash function from 1990s.
 * @param message - msg that would be hashed
 */
const ripemd160 = /* @__PURE__ */ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.wrapConstructor)(() => new RIPEMD160());
//# sourceMappingURL=ripemd160.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/sha256.js":
/*!**************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/sha256.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sha224: () => (/* binding */ sha224),
/* harmony export */   sha256: () => (/* binding */ sha256)
/* harmony export */ });
/* harmony import */ var _sha2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_sha2.js */ "./node_modules/@noble/hashes/esm/_sha2.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/hashes/esm/utils.js");


// SHA2-256 need to try 2^128 hashes to execute birthday attack.
// BTC network is doing 2^67 hashes/sec as per early 2023.
// Choice: a ? b : c
const Chi = (a, b, c) => (a & b) ^ (~a & c);
// Majority function, true if any two inpust is true
const Maj = (a, b, c) => (a & b) ^ (a & c) ^ (b & c);
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = /* @__PURE__ */ new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = /* @__PURE__ */ new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends _sha2_js__WEBPACK_IMPORTED_MODULE_0__.SHA2 {
    constructor() {
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(W15, 7) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(W15, 18) ^ (W15 >>> 3);
            const s1 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(W2, 17) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(W2, 19) ^ (W2 >>> 10);
            SHA256_W[i] = (s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16]) | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
            const sigma1 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(E, 6) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(E, 11) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(E, 25);
            const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const sigma0 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(A, 2) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(A, 13) ^ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.rotr)(A, 22);
            const T2 = (sigma0 + Maj(A, B, C)) | 0;
            H = G;
            G = F;
            F = E;
            E = (D + T1) | 0;
            D = C;
            C = B;
            B = A;
            A = (T1 + T2) | 0;
        }
        // Add the compressed chunk to the current hash value
        A = (A + this.A) | 0;
        B = (B + this.B) | 0;
        C = (C + this.C) | 0;
        D = (D + this.D) | 0;
        E = (E + this.E) | 0;
        F = (F + this.F) | 0;
        G = (G + this.G) | 0;
        H = (H + this.H) | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor() {
        super();
        this.A = 0xc1059ed8 | 0;
        this.B = 0x367cd507 | 0;
        this.C = 0x3070dd17 | 0;
        this.D = 0xf70e5939 | 0;
        this.E = 0xffc00b31 | 0;
        this.F = 0x68581511 | 0;
        this.G = 0x64f98fa7 | 0;
        this.H = 0xbefa4fa4 | 0;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */
const sha256 = /* @__PURE__ */ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.wrapConstructor)(() => new SHA256());
const sha224 = /* @__PURE__ */ (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.wrapConstructor)(() => new SHA224());
//# sourceMappingURL=sha256.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/sha512.js":
/*!**************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/sha512.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHA512: () => (/* binding */ SHA512),
/* harmony export */   sha384: () => (/* binding */ sha384),
/* harmony export */   sha512: () => (/* binding */ sha512),
/* harmony export */   sha512_224: () => (/* binding */ sha512_224),
/* harmony export */   sha512_256: () => (/* binding */ sha512_256)
/* harmony export */ });
/* harmony import */ var _sha2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_sha2.js */ "./node_modules/@noble/hashes/esm/_sha2.js");
/* harmony import */ var _u64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_u64.js */ "./node_modules/@noble/hashes/esm/_u64.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@noble/hashes/esm/utils.js");



// Round contants (first 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409):
// prettier-ignore
const [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].split([
    '0x428a2f98d728ae22', '0x7137449123ef65cd', '0xb5c0fbcfec4d3b2f', '0xe9b5dba58189dbbc',
    '0x3956c25bf348b538', '0x59f111f1b605d019', '0x923f82a4af194f9b', '0xab1c5ed5da6d8118',
    '0xd807aa98a3030242', '0x12835b0145706fbe', '0x243185be4ee4b28c', '0x550c7dc3d5ffb4e2',
    '0x72be5d74f27b896f', '0x80deb1fe3b1696b1', '0x9bdc06a725c71235', '0xc19bf174cf692694',
    '0xe49b69c19ef14ad2', '0xefbe4786384f25e3', '0x0fc19dc68b8cd5b5', '0x240ca1cc77ac9c65',
    '0x2de92c6f592b0275', '0x4a7484aa6ea6e483', '0x5cb0a9dcbd41fbd4', '0x76f988da831153b5',
    '0x983e5152ee66dfab', '0xa831c66d2db43210', '0xb00327c898fb213f', '0xbf597fc7beef0ee4',
    '0xc6e00bf33da88fc2', '0xd5a79147930aa725', '0x06ca6351e003826f', '0x142929670a0e6e70',
    '0x27b70a8546d22ffc', '0x2e1b21385c26c926', '0x4d2c6dfc5ac42aed', '0x53380d139d95b3df',
    '0x650a73548baf63de', '0x766a0abb3c77b2a8', '0x81c2c92e47edaee6', '0x92722c851482353b',
    '0xa2bfe8a14cf10364', '0xa81a664bbc423001', '0xc24b8b70d0f89791', '0xc76c51a30654be30',
    '0xd192e819d6ef5218', '0xd69906245565a910', '0xf40e35855771202a', '0x106aa07032bbd1b8',
    '0x19a4c116b8d2d0c8', '0x1e376c085141ab53', '0x2748774cdf8eeb99', '0x34b0bcb5e19b48a8',
    '0x391c0cb3c5c95a63', '0x4ed8aa4ae3418acb', '0x5b9cca4f7763e373', '0x682e6ff3d6b2b8a3',
    '0x748f82ee5defb2fc', '0x78a5636f43172f60', '0x84c87814a1f0ab72', '0x8cc702081a6439ec',
    '0x90befffa23631e28', '0xa4506cebde82bde9', '0xbef9a3f7b2c67915', '0xc67178f2e372532b',
    '0xca273eceea26619c', '0xd186b8c721c0c207', '0xeada7dd6cde0eb1e', '0xf57d4f7fee6ed178',
    '0x06f067aa72176fba', '0x0a637dc5a2c898a6', '0x113f9804bef90dae', '0x1b710b35131c471b',
    '0x28db77f523047d84', '0x32caab7b40c72493', '0x3c9ebe0a15c9bebc', '0x431d67c49c100d4c',
    '0x4cc5d4becb3e42b6', '0x597f299cfc657e2a', '0x5fcb6fab3ad6faec', '0x6c44198c4a475817'
].map(n => BigInt(n))))();
// Temporary buffer, not used to store anything between runs
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA512 extends _sha2_js__WEBPACK_IMPORTED_MODULE_1__.SHA2 {
    constructor() {
        super(128, 64, 16, false);
        // We cannot use array here since array allows indexing by variable which means optimizer/compiler cannot use registers.
        // Also looks cleaner and easier to verify with spec.
        // Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0x6a09e667 | 0;
        this.Al = 0xf3bcc908 | 0;
        this.Bh = 0xbb67ae85 | 0;
        this.Bl = 0x84caa73b | 0;
        this.Ch = 0x3c6ef372 | 0;
        this.Cl = 0xfe94f82b | 0;
        this.Dh = 0xa54ff53a | 0;
        this.Dl = 0x5f1d36f1 | 0;
        this.Eh = 0x510e527f | 0;
        this.El = 0xade682d1 | 0;
        this.Fh = 0x9b05688c | 0;
        this.Fl = 0x2b3e6c1f | 0;
        this.Gh = 0x1f83d9ab | 0;
        this.Gl = 0xfb41bd6b | 0;
        this.Hh = 0x5be0cd19 | 0;
        this.Hl = 0x137e2179 | 0;
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4) {
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32((offset += 4));
        }
        for (let i = 16; i < 80; i++) {
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSH(W15h, W15l, 1) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSH(W15h, W15l, 8) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].shrSH(W15h, W15l, 7);
            const s0l = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSL(W15h, W15l, 1) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSL(W15h, W15l, 8) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSH(W2h, W2l, 19) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrBH(W2h, W2l, 61) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].shrSH(W2h, W2l, 6);
            const s1l = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSL(W2h, W2l, 19) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrBL(W2h, W2l, 61) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for (let i = 0; i < 80; i++) {
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSH(Eh, El, 14) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSH(Eh, El, 18) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrBH(Eh, El, 41);
            const sigma1l = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSL(Eh, El, 14) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSL(Eh, El, 18) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = (Eh & Fh) ^ (~Eh & Gh);
            const CHIl = (El & Fl) ^ (~El & Gl);
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSH(Ah, Al, 28) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrBH(Ah, Al, 34) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrBH(Ah, Al, 39);
            const sigma0l = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrSL(Ah, Al, 28) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrBL(Ah, Al, 34) ^ _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotrBL(Ah, Al, 39);
            const MAJh = (Ah & Bh) ^ (Ah & Ch) ^ (Bh & Ch);
            const MAJl = (Al & Bl) ^ (Al & Cl) ^ (Bl & Cl);
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add3L(T1l, sigma0l, MAJl);
            Ah = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = _u64_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        SHA512_W_H.fill(0);
        SHA512_W_L.fill(0);
    }
    destroy() {
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
class SHA512_224 extends SHA512 {
    constructor() {
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0x8c3d37c8 | 0;
        this.Al = 0x19544da2 | 0;
        this.Bh = 0x73e19966 | 0;
        this.Bl = 0x89dcd4d6 | 0;
        this.Ch = 0x1dfab7ae | 0;
        this.Cl = 0x32ff9c82 | 0;
        this.Dh = 0x679dd514 | 0;
        this.Dl = 0x582f9fcf | 0;
        this.Eh = 0x0f6d2b69 | 0;
        this.El = 0x7bd44da8 | 0;
        this.Fh = 0x77e36f73 | 0;
        this.Fl = 0x04c48942 | 0;
        this.Gh = 0x3f9d85a8 | 0;
        this.Gl = 0x6a1d36c8 | 0;
        this.Hh = 0x1112e6ad | 0;
        this.Hl = 0x91d692a1 | 0;
        this.outputLen = 28;
    }
}
class SHA512_256 extends SHA512 {
    constructor() {
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0x22312194 | 0;
        this.Al = 0xfc2bf72c | 0;
        this.Bh = 0x9f555fa3 | 0;
        this.Bl = 0xc84c64c2 | 0;
        this.Ch = 0x2393b86b | 0;
        this.Cl = 0x6f53b151 | 0;
        this.Dh = 0x96387719 | 0;
        this.Dl = 0x5940eabd | 0;
        this.Eh = 0x96283ee2 | 0;
        this.El = 0xa88effe3 | 0;
        this.Fh = 0xbe5e1e25 | 0;
        this.Fl = 0x53863992 | 0;
        this.Gh = 0x2b0199fc | 0;
        this.Gl = 0x2c85b8aa | 0;
        this.Hh = 0x0eb72ddc | 0;
        this.Hl = 0x81c52ca2 | 0;
        this.outputLen = 32;
    }
}
class SHA384 extends SHA512 {
    constructor() {
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0xcbbb9d5d | 0;
        this.Al = 0xc1059ed8 | 0;
        this.Bh = 0x629a292a | 0;
        this.Bl = 0x367cd507 | 0;
        this.Ch = 0x9159015a | 0;
        this.Cl = 0x3070dd17 | 0;
        this.Dh = 0x152fecd8 | 0;
        this.Dl = 0xf70e5939 | 0;
        this.Eh = 0x67332667 | 0;
        this.El = 0xffc00b31 | 0;
        this.Fh = 0x8eb44a87 | 0;
        this.Fl = 0x68581511 | 0;
        this.Gh = 0xdb0c2e0d | 0;
        this.Gl = 0x64f98fa7 | 0;
        this.Hh = 0x47b5481d | 0;
        this.Hl = 0xbefa4fa4 | 0;
        this.outputLen = 48;
    }
}
const sha512 = /* @__PURE__ */ (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.wrapConstructor)(() => new SHA512());
const sha512_224 = /* @__PURE__ */ (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.wrapConstructor)(() => new SHA512_224());
const sha512_256 = /* @__PURE__ */ (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.wrapConstructor)(() => new SHA512_256());
const sha384 = /* @__PURE__ */ (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.wrapConstructor)(() => new SHA384());
//# sourceMappingURL=sha512.js.map

/***/ }),

/***/ "./node_modules/@noble/hashes/esm/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@noble/hashes/esm/utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hash: () => (/* binding */ Hash),
/* harmony export */   asyncLoop: () => (/* binding */ asyncLoop),
/* harmony export */   bytesToHex: () => (/* binding */ bytesToHex),
/* harmony export */   checkOpts: () => (/* binding */ checkOpts),
/* harmony export */   concatBytes: () => (/* binding */ concatBytes),
/* harmony export */   createView: () => (/* binding */ createView),
/* harmony export */   hexToBytes: () => (/* binding */ hexToBytes),
/* harmony export */   isLE: () => (/* binding */ isLE),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   randomBytes: () => (/* binding */ randomBytes),
/* harmony export */   rotr: () => (/* binding */ rotr),
/* harmony export */   toBytes: () => (/* binding */ toBytes),
/* harmony export */   u32: () => (/* binding */ u32),
/* harmony export */   u8: () => (/* binding */ u8),
/* harmony export */   utf8ToBytes: () => (/* binding */ utf8ToBytes),
/* harmony export */   wrapConstructor: () => (/* binding */ wrapConstructor),
/* harmony export */   wrapConstructorWithOpts: () => (/* binding */ wrapConstructorWithOpts),
/* harmony export */   wrapXOFConstructorWithOpts: () => (/* binding */ wrapXOFConstructorWithOpts)
/* harmony export */ });
/* harmony import */ var _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noble/hashes/crypto */ "./node_modules/@noble/hashes/esm/crypto.js");
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.

// Cast array to different type
const u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
function isBytes(a) {
    return (a instanceof Uint8Array ||
        (a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array'));
}
// Cast array to view
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
// Other libraries would silently corrupt the data instead of throwing an error,
// when they don't support it.
const isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
if (!isLE)
    throw new Error('Non little-endian hardware is not supported');
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    if (!isBytes(bytes))
        throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('padded hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
    }
    return array;
}
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async () => { };
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
            continue;
        await nextTick();
        ts += diff;
    }
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    if (!isBytes(data))
        throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        if (!isBytes(a))
            throw new Error('Uint8Array expected');
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
const toStr = {}.toString;
function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== '[object Object]')
        throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */
function randomBytes(bytesLength = 32) {
    if (_noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto && typeof _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.getRandomValues === 'function') {
        return _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@scure/base/lib/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@scure/base/lib/esm/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertNumber: () => (/* binding */ assertNumber),
/* harmony export */   base16: () => (/* binding */ base16),
/* harmony export */   base32: () => (/* binding */ base32),
/* harmony export */   base32crockford: () => (/* binding */ base32crockford),
/* harmony export */   base32hex: () => (/* binding */ base32hex),
/* harmony export */   base58: () => (/* binding */ base58),
/* harmony export */   base58check: () => (/* binding */ base58check),
/* harmony export */   base58flickr: () => (/* binding */ base58flickr),
/* harmony export */   base58xmr: () => (/* binding */ base58xmr),
/* harmony export */   base58xrp: () => (/* binding */ base58xrp),
/* harmony export */   base64: () => (/* binding */ base64),
/* harmony export */   base64url: () => (/* binding */ base64url),
/* harmony export */   base64urlnopad: () => (/* binding */ base64urlnopad),
/* harmony export */   bech32: () => (/* binding */ bech32),
/* harmony export */   bech32m: () => (/* binding */ bech32m),
/* harmony export */   bytes: () => (/* binding */ bytes),
/* harmony export */   bytesToString: () => (/* binding */ bytesToString),
/* harmony export */   createBase58check: () => (/* binding */ createBase58check),
/* harmony export */   hex: () => (/* binding */ hex),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   stringToBytes: () => (/* binding */ stringToBytes),
/* harmony export */   utf8: () => (/* binding */ utf8),
/* harmony export */   utils: () => (/* binding */ utils)
/* harmony export */ });
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Utilities
/**
 * @__NO_SIDE_EFFECTS__
 */
function assertNumber(n) {
    if (!Number.isSafeInteger(n))
        throw new Error(`Wrong integer: ${n}`);
}
function isBytes(a) {
    return (a instanceof Uint8Array ||
        (a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array'));
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function chain(...args) {
    const id = (a) => a;
    // Wrap call in closure so JIT can inline calls
    const wrap = (a, b) => (c) => a(b(c));
    // Construct chain of args[-1].encode(args[-2].encode([...]))
    const encode = args.map((x) => x.encode).reduceRight(wrap, id);
    // Construct chain of args[0].decode(args[1].decode(...))
    const decode = args.map((x) => x.decode).reduce(wrap, id);
    return { encode, decode };
}
/**
 * Encodes integer radix representation to array of strings using alphabet and back
 * @__NO_SIDE_EFFECTS__
 */
function alphabet(alphabet) {
    return {
        encode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('alphabet.encode input should be an array of numbers');
            return digits.map((i) => {
                assertNumber(i);
                if (i < 0 || i >= alphabet.length)
                    throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet.length})`);
                return alphabet[i];
            });
        },
        decode: (input) => {
            if (!Array.isArray(input) || (input.length && typeof input[0] !== 'string'))
                throw new Error('alphabet.decode input should be array of strings');
            return input.map((letter) => {
                if (typeof letter !== 'string')
                    throw new Error(`alphabet.decode: not string element=${letter}`);
                const index = alphabet.indexOf(letter);
                if (index === -1)
                    throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet}`);
                return index;
            });
        },
    };
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function join(separator = '') {
    if (typeof separator !== 'string')
        throw new Error('join separator should be string');
    return {
        encode: (from) => {
            if (!Array.isArray(from) || (from.length && typeof from[0] !== 'string'))
                throw new Error('join.encode input should be array of strings');
            for (let i of from)
                if (typeof i !== 'string')
                    throw new Error(`join.encode: non-string input=${i}`);
            return from.join(separator);
        },
        decode: (to) => {
            if (typeof to !== 'string')
                throw new Error('join.decode input should be string');
            return to.split(separator);
        },
    };
}
/**
 * Pad strings array so it has integer number of bits
 * @__NO_SIDE_EFFECTS__
 */
function padding(bits, chr = '=') {
    assertNumber(bits);
    if (typeof chr !== 'string')
        throw new Error('padding chr should be string');
    return {
        encode(data) {
            if (!Array.isArray(data) || (data.length && typeof data[0] !== 'string'))
                throw new Error('padding.encode input should be array of strings');
            for (let i of data)
                if (typeof i !== 'string')
                    throw new Error(`padding.encode: non-string input=${i}`);
            while ((data.length * bits) % 8)
                data.push(chr);
            return data;
        },
        decode(input) {
            if (!Array.isArray(input) || (input.length && typeof input[0] !== 'string'))
                throw new Error('padding.encode input should be array of strings');
            for (let i of input)
                if (typeof i !== 'string')
                    throw new Error(`padding.decode: non-string input=${i}`);
            let end = input.length;
            if ((end * bits) % 8)
                throw new Error('Invalid padding: string should have whole number of bytes');
            for (; end > 0 && input[end - 1] === chr; end--) {
                if (!(((end - 1) * bits) % 8))
                    throw new Error('Invalid padding: string has too much padding');
            }
            return input.slice(0, end);
        },
    };
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function normalize(fn) {
    if (typeof fn !== 'function')
        throw new Error('normalize fn should be function');
    return { encode: (from) => from, decode: (to) => fn(to) };
}
/**
 * Slow: O(n^2) time complexity
 * @__NO_SIDE_EFFECTS__
 */
function convertRadix(data, from, to) {
    // base 1 is impossible
    if (from < 2)
        throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
    if (to < 2)
        throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
    if (!Array.isArray(data))
        throw new Error('convertRadix: data should be array');
    if (!data.length)
        return [];
    let pos = 0;
    const res = [];
    const digits = Array.from(data);
    digits.forEach((d) => {
        assertNumber(d);
        if (d < 0 || d >= from)
            throw new Error(`Wrong integer: ${d}`);
    });
    while (true) {
        let carry = 0;
        let done = true;
        for (let i = pos; i < digits.length; i++) {
            const digit = digits[i];
            const digitBase = from * carry + digit;
            if (!Number.isSafeInteger(digitBase) ||
                (from * carry) / from !== carry ||
                digitBase - digit !== from * carry) {
                throw new Error('convertRadix: carry overflow');
            }
            carry = digitBase % to;
            const rounded = Math.floor(digitBase / to);
            digits[i] = rounded;
            if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
                throw new Error('convertRadix: carry overflow');
            if (!done)
                continue;
            else if (!rounded)
                pos = i;
            else
                done = false;
        }
        res.push(carry);
        if (done)
            break;
    }
    for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
        res.push(0);
    return res.reverse();
}
const gcd = /* @__NO_SIDE_EFFECTS__ */ (a, b) => (!b ? a : gcd(b, a % b));
const radix2carry = /*@__NO_SIDE_EFFECTS__ */ (from, to) => from + (to - gcd(from, to));
/**
 * Implemented with numbers, because BigInt is 5x slower
 * @__NO_SIDE_EFFECTS__
 */
function convertRadix2(data, from, to, padding) {
    if (!Array.isArray(data))
        throw new Error('convertRadix2: data should be array');
    if (from <= 0 || from > 32)
        throw new Error(`convertRadix2: wrong from=${from}`);
    if (to <= 0 || to > 32)
        throw new Error(`convertRadix2: wrong to=${to}`);
    if (radix2carry(from, to) > 32) {
        throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
    }
    let carry = 0;
    let pos = 0; // bitwise position in current element
    const mask = 2 ** to - 1;
    const res = [];
    for (const n of data) {
        assertNumber(n);
        if (n >= 2 ** from)
            throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
        carry = (carry << from) | n;
        if (pos + from > 32)
            throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for (; pos >= to; pos -= to)
            res.push(((carry >> (pos - to)) & mask) >>> 0);
        carry &= 2 ** pos - 1; // clean carry, otherwise it will cause overflow
    }
    carry = (carry << (to - pos)) & mask;
    if (!padding && pos >= from)
        throw new Error('Excess padding');
    if (!padding && carry)
        throw new Error(`Non-zero padding: ${carry}`);
    if (padding && pos > 0)
        res.push(carry >>> 0);
    return res;
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function radix(num) {
    assertNumber(num);
    return {
        encode: (bytes) => {
            if (!isBytes(bytes))
                throw new Error('radix.encode input should be Uint8Array');
            return convertRadix(Array.from(bytes), 2 ** 8, num);
        },
        decode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('radix.decode input should be array of numbers');
            return Uint8Array.from(convertRadix(digits, num, 2 ** 8));
        },
    };
}
/**
 * If both bases are power of same number (like `2**8 <-> 2**64`),
 * there is a linear algorithm. For now we have implementation for power-of-two bases only.
 * @__NO_SIDE_EFFECTS__
 */
function radix2(bits, revPadding = false) {
    assertNumber(bits);
    if (bits <= 0 || bits > 32)
        throw new Error('radix2: bits should be in (0..32]');
    if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
        throw new Error('radix2: carry overflow');
    return {
        encode: (bytes) => {
            if (!isBytes(bytes))
                throw new Error('radix2.encode input should be Uint8Array');
            return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('radix2.decode input should be array of numbers');
            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
        },
    };
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function unsafeWrapper(fn) {
    if (typeof fn !== 'function')
        throw new Error('unsafeWrapper fn should be function');
    return function (...args) {
        try {
            return fn.apply(null, args);
        }
        catch (e) { }
    };
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function checksum(len, fn) {
    assertNumber(len);
    if (typeof fn !== 'function')
        throw new Error('checksum fn should be function');
    return {
        encode(data) {
            if (!isBytes(data))
                throw new Error('checksum.encode: input should be Uint8Array');
            const checksum = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(checksum, data.length);
            return res;
        },
        decode(data) {
            if (!isBytes(data))
                throw new Error('checksum.decode: input should be Uint8Array');
            const payload = data.slice(0, -len);
            const newChecksum = fn(payload).slice(0, len);
            const oldChecksum = data.slice(-len);
            for (let i = 0; i < len; i++)
                if (newChecksum[i] !== oldChecksum[i])
                    throw new Error('Invalid checksum');
            return payload;
        },
    };
}
// prettier-ignore
const utils = {
    alphabet, chain, checksum, convertRadix, convertRadix2, radix, radix2, join, padding,
};
// RFC 4648 aka RFC 3548
// ---------------------
const base16 = /* @__PURE__ */ chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
const base32 = /* @__PURE__ */ chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
const base32hex = /* @__PURE__ */ chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
const base32crockford = /* @__PURE__ */ chain(radix2(5), alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), join(''), normalize((s) => s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1')));
const base64 = /* @__PURE__ */ chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), padding(6), join(''));
const base64url = /* @__PURE__ */ chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), padding(6), join(''));
const base64urlnopad = /* @__PURE__ */ chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), join(''));
// base58 code
// -----------
const genBase58 = (abc) => chain(radix(58), alphabet(abc), join(''));
const base58 = /* @__PURE__ */ genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
const base58flickr = /* @__PURE__ */ genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
const base58xrp = /* @__PURE__ */ genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
// xmr ver is done in 8-byte blocks (which equals 11 chars in decoding). Last (non-full) block padded with '1' to size in XMR_BLOCK_LEN.
// Block encoding significantly reduces quadratic complexity of base58.
// Data len (index) -> encoded block len
const XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
const base58xmr = {
    encode(data) {
        let res = '';
        for (let i = 0; i < data.length; i += 8) {
            const block = data.subarray(i, i + 8);
            res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], '1');
        }
        return res;
    },
    decode(str) {
        let res = [];
        for (let i = 0; i < str.length; i += 11) {
            const slice = str.slice(i, i + 11);
            const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
            const block = base58.decode(slice);
            for (let j = 0; j < block.length - blockLen; j++) {
                if (block[j] !== 0)
                    throw new Error('base58xmr: wrong padding');
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
    },
};
const createBase58check = /* @__PURE__ */ (sha256) => chain(checksum(4, (data) => sha256(sha256(data))), base58);
// legacy export, bad name
const base58check = createBase58check;
const BECH_ALPHABET = /* @__PURE__ */ chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
const POLYMOD_GENERATORS = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
/**
 * @__NO_SIDE_EFFECTS__
 */
function bech32Polymod(pre) {
    const b = pre >> 25;
    let chk = (pre & 0x1ffffff) << 5;
    for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
        if (((b >> i) & 1) === 1)
            chk ^= POLYMOD_GENERATORS[i];
    }
    return chk;
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function bechChecksum(prefix, words, encodingConst = 1) {
    const len = prefix.length;
    let chk = 1;
    for (let i = 0; i < len; i++) {
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
            throw new Error(`Invalid prefix (${prefix})`);
        chk = bech32Polymod(chk) ^ (c >> 5);
    }
    chk = bech32Polymod(chk);
    for (let i = 0; i < len; i++)
        chk = bech32Polymod(chk) ^ (prefix.charCodeAt(i) & 0x1f);
    for (let v of words)
        chk = bech32Polymod(chk) ^ v;
    for (let i = 0; i < 6; i++)
        chk = bech32Polymod(chk);
    chk ^= encodingConst;
    return BECH_ALPHABET.encode(convertRadix2([chk % 2 ** 30], 30, 5, false));
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function genBech32(encoding) {
    const ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
    const _words = radix2(5);
    const fromWords = _words.decode;
    const toWords = _words.encode;
    const fromWordsUnsafe = unsafeWrapper(fromWords);
    function encode(prefix, words, limit = 90) {
        if (typeof prefix !== 'string')
            throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
        if (!Array.isArray(words) || (words.length && typeof words[0] !== 'number'))
            throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
        const actualLength = prefix.length + 7 + words.length;
        if (limit !== false && actualLength > limit)
            throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        const lowered = prefix.toLowerCase();
        const sum = bechChecksum(lowered, words, ENCODING_CONST);
        return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
    }
    function decode(str, limit = 90) {
        if (typeof str !== 'string')
            throw new Error(`bech32.decode input should be string, not ${typeof str}`);
        if (str.length < 8 || (limit !== false && str.length > limit))
            throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
        // don't allow mixed case
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase())
            throw new Error(`String must be lowercase or uppercase`);
        str = lowered;
        const sepIndex = str.lastIndexOf('1');
        if (sepIndex === 0 || sepIndex === -1)
            throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = str.slice(0, sepIndex);
        const _words = str.slice(sepIndex + 1);
        if (_words.length < 6)
            throw new Error('Data must be at least 6 characters long');
        const words = BECH_ALPHABET.decode(_words).slice(0, -6);
        const sum = bechChecksum(prefix, words, ENCODING_CONST);
        if (!_words.endsWith(sum))
            throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return { prefix, words };
    }
    const decodeUnsafe = unsafeWrapper(decode);
    function decodeToBytes(str) {
        const { prefix, words } = decode(str, false);
        return { prefix, words, bytes: fromWords(words) };
    }
    return { encode, decode, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
}
const bech32 = /* @__PURE__ */ genBech32('bech32');
const bech32m = /* @__PURE__ */ genBech32('bech32m');
const utf8 = {
    encode: (data) => new TextDecoder().decode(data),
    decode: (str) => new TextEncoder().encode(str),
};
const hex = /* @__PURE__ */ chain(radix2(4), alphabet('0123456789abcdef'), join(''), normalize((s) => {
    if (typeof s !== 'string' || s.length % 2)
        throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
    return s.toLowerCase();
}));
// prettier-ignore
const CODERS = {
    utf8, hex, base16, base32, base64, base64url, base58, base58xmr
};
const coderTypeError = 'Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr';
const bytesToString = (type, bytes) => {
    if (typeof type !== 'string' || !CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
    if (!isBytes(bytes))
        throw new TypeError('bytesToString() expects Uint8Array');
    return CODERS[type].encode(bytes);
};
const str = bytesToString; // as in python, but for bytes only
const stringToBytes = (type, str) => {
    if (!CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
    if (typeof str !== 'string')
        throw new TypeError('stringToBytes() expects string');
    return CODERS[type].decode(str);
};
const bytes = stringToBytes;


/***/ }),

/***/ "./node_modules/@scure/bip32/lib/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@scure/bip32/lib/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HARDENED_OFFSET: () => (/* binding */ HARDENED_OFFSET),
/* harmony export */   HDKey: () => (/* binding */ HDKey)
/* harmony export */ });
/* harmony import */ var _noble_hashes_hmac__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @noble/hashes/hmac */ "./node_modules/@noble/hashes/esm/hmac.js");
/* harmony import */ var _noble_hashes_ripemd160__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @noble/hashes/ripemd160 */ "./node_modules/@noble/hashes/esm/ripemd160.js");
/* harmony import */ var _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @noble/hashes/sha256 */ "./node_modules/@noble/hashes/esm/sha256.js");
/* harmony import */ var _noble_hashes_sha512__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @noble/hashes/sha512 */ "./node_modules/@noble/hashes/esm/sha512.js");
/* harmony import */ var _noble_hashes_assert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @noble/hashes/_assert */ "./node_modules/@noble/hashes/esm/_assert.js");
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @noble/hashes/utils */ "./node_modules/@noble/hashes/esm/utils.js");
/* harmony import */ var _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noble/curves/secp256k1 */ "./node_modules/@noble/curves/esm/secp256k1.js");
/* harmony import */ var _noble_curves_abstract_modular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @noble/curves/abstract/modular */ "./node_modules/@noble/curves/esm/abstract/modular.js");
/* harmony import */ var _scure_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scure/base */ "./node_modules/@scure/base/lib/esm/index.js");
/*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */









const Point = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.ProjectivePoint;
const base58check = (0,_scure_base__WEBPACK_IMPORTED_MODULE_1__.createBase58check)(_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256);
function bytesToNumber(bytes) {
    return BigInt(`0x${(0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.bytesToHex)(bytes)}`);
}
function numberToBytes(num) {
    return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.hexToBytes)(num.toString(16).padStart(64, '0'));
}
const MASTER_SECRET = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.utf8ToBytes)('Bitcoin seed');
// Bitcoin hardcoded by default
const BITCOIN_VERSIONS = { private: 0x0488ade4, public: 0x0488b21e };
const HARDENED_OFFSET = 0x80000000;
const hash160 = (data) => (0,_noble_hashes_ripemd160__WEBPACK_IMPORTED_MODULE_4__.ripemd160)((0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256)(data));
const fromU32 = (data) => (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.createView)(data).getUint32(0, false);
const toU32 = (n) => {
    if (!Number.isSafeInteger(n) || n < 0 || n > 2 ** 32 - 1) {
        throw new Error(`Invalid number=${n}. Should be from 0 to 2 ** 32 - 1`);
    }
    const buf = new Uint8Array(4);
    (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.createView)(buf).setUint32(0, n, false);
    return buf;
};
class HDKey {
    get fingerprint() {
        if (!this.pubHash) {
            throw new Error('No publicKey set!');
        }
        return fromU32(this.pubHash);
    }
    get identifier() {
        return this.pubHash;
    }
    get pubKeyHash() {
        return this.pubHash;
    }
    get privateKey() {
        return this.privKeyBytes || null;
    }
    get publicKey() {
        return this.pubKey || null;
    }
    get privateExtendedKey() {
        const priv = this.privateKey;
        if (!priv) {
            throw new Error('No private key');
        }
        return base58check.encode(this.serialize(this.versions.private, (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.concatBytes)(new Uint8Array([0]), priv)));
    }
    get publicExtendedKey() {
        if (!this.pubKey) {
            throw new Error('No public key');
        }
        return base58check.encode(this.serialize(this.versions.public, this.pubKey));
    }
    static fromMasterSeed(seed, versions = BITCOIN_VERSIONS) {
        (0,_noble_hashes_assert__WEBPACK_IMPORTED_MODULE_5__.bytes)(seed);
        if (8 * seed.length < 128 || 8 * seed.length > 512) {
            throw new Error(`HDKey: wrong seed length=${seed.length}. Should be between 128 and 512 bits; 256 bits is advised)`);
        }
        const I = (0,_noble_hashes_hmac__WEBPACK_IMPORTED_MODULE_6__.hmac)(_noble_hashes_sha512__WEBPACK_IMPORTED_MODULE_7__.sha512, MASTER_SECRET, seed);
        return new HDKey({
            versions,
            chainCode: I.slice(32),
            privateKey: I.slice(0, 32),
        });
    }
    static fromExtendedKey(base58key, versions = BITCOIN_VERSIONS) {
        // => version(4) || depth(1) || fingerprint(4) || index(4) || chain(32) || key(33)
        const keyBuffer = base58check.decode(base58key);
        const keyView = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.createView)(keyBuffer);
        const version = keyView.getUint32(0, false);
        const opt = {
            versions,
            depth: keyBuffer[4],
            parentFingerprint: keyView.getUint32(5, false),
            index: keyView.getUint32(9, false),
            chainCode: keyBuffer.slice(13, 45),
        };
        const key = keyBuffer.slice(45);
        const isPriv = key[0] === 0;
        if (version !== versions[isPriv ? 'private' : 'public']) {
            throw new Error('Version mismatch');
        }
        if (isPriv) {
            return new HDKey({ ...opt, privateKey: key.slice(1) });
        }
        else {
            return new HDKey({ ...opt, publicKey: key });
        }
    }
    static fromJSON(json) {
        return HDKey.fromExtendedKey(json.xpriv);
    }
    constructor(opt) {
        this.depth = 0;
        this.index = 0;
        this.chainCode = null;
        this.parentFingerprint = 0;
        if (!opt || typeof opt !== 'object') {
            throw new Error('HDKey.constructor must not be called directly');
        }
        this.versions = opt.versions || BITCOIN_VERSIONS;
        this.depth = opt.depth || 0;
        this.chainCode = opt.chainCode;
        this.index = opt.index || 0;
        this.parentFingerprint = opt.parentFingerprint || 0;
        if (!this.depth) {
            if (this.parentFingerprint || this.index) {
                throw new Error('HDKey: zero depth with non-zero index/parent fingerprint');
            }
        }
        if (opt.publicKey && opt.privateKey) {
            throw new Error('HDKey: publicKey and privateKey at same time.');
        }
        if (opt.privateKey) {
            if (!_noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.utils.isValidPrivateKey(opt.privateKey)) {
                throw new Error('Invalid private key');
            }
            this.privKey =
                typeof opt.privateKey === 'bigint' ? opt.privateKey : bytesToNumber(opt.privateKey);
            this.privKeyBytes = numberToBytes(this.privKey);
            this.pubKey = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.getPublicKey(opt.privateKey, true);
        }
        else if (opt.publicKey) {
            this.pubKey = Point.fromHex(opt.publicKey).toRawBytes(true); // force compressed point
        }
        else {
            throw new Error('HDKey: no public or private key provided');
        }
        this.pubHash = hash160(this.pubKey);
    }
    derive(path) {
        if (!/^[mM]'?/.test(path)) {
            throw new Error('Path must start with "m" or "M"');
        }
        if (/^[mM]'?$/.test(path)) {
            return this;
        }
        const parts = path.replace(/^[mM]'?\//, '').split('/');
        // tslint:disable-next-line
        let child = this;
        for (const c of parts) {
            const m = /^(\d+)('?)$/.exec(c);
            const m1 = m && m[1];
            if (!m || m.length !== 3 || typeof m1 !== 'string') {
                throw new Error(`Invalid child index: ${c}`);
            }
            let idx = +m1;
            if (!Number.isSafeInteger(idx) || idx >= HARDENED_OFFSET) {
                throw new Error('Invalid index');
            }
            // hardened key
            if (m[2] === "'") {
                idx += HARDENED_OFFSET;
            }
            child = child.deriveChild(idx);
        }
        return child;
    }
    deriveChild(index) {
        if (!this.pubKey || !this.chainCode) {
            throw new Error('No publicKey or chainCode set');
        }
        let data = toU32(index);
        if (index >= HARDENED_OFFSET) {
            // Hardened
            const priv = this.privateKey;
            if (!priv) {
                throw new Error('Could not derive hardened child key');
            }
            // Hardened child: 0x00 || ser256(kpar) || ser32(index)
            data = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.concatBytes)(new Uint8Array([0]), priv, data);
        }
        else {
            // Normal child: serP(point(kpar)) || ser32(index)
            data = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.concatBytes)(this.pubKey, data);
        }
        const I = (0,_noble_hashes_hmac__WEBPACK_IMPORTED_MODULE_6__.hmac)(_noble_hashes_sha512__WEBPACK_IMPORTED_MODULE_7__.sha512, this.chainCode, data);
        const childTweak = bytesToNumber(I.slice(0, 32));
        const chainCode = I.slice(32);
        if (!_noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.utils.isValidPrivateKey(childTweak)) {
            throw new Error('Tweak bigger than curve order');
        }
        const opt = {
            versions: this.versions,
            chainCode,
            depth: this.depth + 1,
            parentFingerprint: this.fingerprint,
            index,
        };
        try {
            // Private parent key -> private child key
            if (this.privateKey) {
                const added = (0,_noble_curves_abstract_modular__WEBPACK_IMPORTED_MODULE_8__.mod)(this.privKey + childTweak, _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.CURVE.n);
                if (!_noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.utils.isValidPrivateKey(added)) {
                    throw new Error('The tweak was out of range or the resulted private key is invalid');
                }
                opt.privateKey = added;
            }
            else {
                const added = Point.fromHex(this.pubKey).add(Point.fromPrivateKey(childTweak));
                // Cryptographically impossible: hmac-sha512 preimage would need to be found
                if (added.equals(Point.ZERO)) {
                    throw new Error('The tweak was equal to negative P, which made the result key invalid');
                }
                opt.publicKey = added.toRawBytes(true);
            }
            return new HDKey(opt);
        }
        catch (err) {
            return this.deriveChild(index + 1);
        }
    }
    sign(hash) {
        if (!this.privateKey) {
            throw new Error('No privateKey set!');
        }
        (0,_noble_hashes_assert__WEBPACK_IMPORTED_MODULE_5__.bytes)(hash, 32);
        return _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.sign(hash, this.privKey).toCompactRawBytes();
    }
    verify(hash, signature) {
        (0,_noble_hashes_assert__WEBPACK_IMPORTED_MODULE_5__.bytes)(hash, 32);
        (0,_noble_hashes_assert__WEBPACK_IMPORTED_MODULE_5__.bytes)(signature, 64);
        if (!this.publicKey) {
            throw new Error('No publicKey set!');
        }
        let sig;
        try {
            sig = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.Signature.fromCompact(signature);
        }
        catch (error) {
            return false;
        }
        return _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.verify(sig, hash, this.publicKey);
    }
    wipePrivateData() {
        this.privKey = undefined;
        if (this.privKeyBytes) {
            this.privKeyBytes.fill(0);
            this.privKeyBytes = undefined;
        }
        return this;
    }
    toJSON() {
        return {
            xpriv: this.privateExtendedKey,
            xpub: this.publicExtendedKey,
        };
    }
    serialize(version, key) {
        if (!this.chainCode) {
            throw new Error('No chainCode set');
        }
        (0,_noble_hashes_assert__WEBPACK_IMPORTED_MODULE_5__.bytes)(key, 33);
        // version(4) || depth(1) || fingerprint(4) || index(4) || chain(32) || key(33)
        return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_3__.concatBytes)(toU32(version), new Uint8Array([this.depth]), toU32(this.parentFingerprint), toU32(this.index), this.chainCode, key);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@scure/bip39/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/@scure/bip39/esm/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entropyToMnemonic: () => (/* binding */ entropyToMnemonic),
/* harmony export */   generateMnemonic: () => (/* binding */ generateMnemonic),
/* harmony export */   mnemonicToEntropy: () => (/* binding */ mnemonicToEntropy),
/* harmony export */   mnemonicToSeed: () => (/* binding */ mnemonicToSeed),
/* harmony export */   mnemonicToSeedSync: () => (/* binding */ mnemonicToSeedSync),
/* harmony export */   validateMnemonic: () => (/* binding */ validateMnemonic)
/* harmony export */ });
/* harmony import */ var _noble_hashes_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noble/hashes/_assert */ "./node_modules/@noble/hashes/esm/_assert.js");
/* harmony import */ var _noble_hashes_pbkdf2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @noble/hashes/pbkdf2 */ "./node_modules/@noble/hashes/esm/pbkdf2.js");
/* harmony import */ var _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @noble/hashes/sha256 */ "./node_modules/@noble/hashes/esm/sha256.js");
/* harmony import */ var _noble_hashes_sha512__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @noble/hashes/sha512 */ "./node_modules/@noble/hashes/esm/sha512.js");
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @noble/hashes/utils */ "./node_modules/@noble/hashes/esm/utils.js");
/* harmony import */ var _scure_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scure/base */ "./node_modules/@scure/base/lib/esm/index.js");
/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */






// Japanese wordlist
const isJapanese = (wordlist) => wordlist[0] === '\u3042\u3044\u3053\u304f\u3057\u3093';
// Normalization replaces equivalent sequences of characters
// so that any two texts that are equivalent will be reduced
// to the same sequence of code points, called the normal form of the original text.
// https://tonsky.me/blog/unicode/#why-is-a----
function nfkd(str) {
    if (typeof str !== 'string')
        throw new TypeError(`Invalid mnemonic type: ${typeof str}`);
    return str.normalize('NFKD');
}
function normalize(str) {
    const norm = nfkd(str);
    const words = norm.split(' ');
    if (![12, 15, 18, 21, 24].includes(words.length))
        throw new Error('Invalid mnemonic');
    return { nfkd: norm, words };
}
function assertEntropy(entropy) {
    (0,_noble_hashes_assert__WEBPACK_IMPORTED_MODULE_0__.bytes)(entropy, 16, 20, 24, 28, 32);
}
/**
 * Generate x random words. Uses Cryptographically-Secure Random Number Generator.
 * @param wordlist imported wordlist for specific language
 * @param strength mnemonic strength 128-256 bits
 * @example
 * generateMnemonic(wordlist, 128)
 * // 'legal winner thank year wave sausage worth useful legal winner thank yellow'
 */
function generateMnemonic(wordlist, strength = 128) {
    (0,_noble_hashes_assert__WEBPACK_IMPORTED_MODULE_0__.number)(strength);
    if (strength % 32 !== 0 || strength > 256)
        throw new TypeError('Invalid entropy');
    return entropyToMnemonic((0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.randomBytes)(strength / 8), wordlist);
}
const calcChecksum = (entropy) => {
    // Checksum is ent.length/4 bits long
    const bitsLeft = 8 - entropy.length / 4;
    // Zero rightmost "bitsLeft" bits in byte
    // For example: bitsLeft=4 val=10111101 -> 10110000
    return new Uint8Array([((0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_2__.sha256)(entropy)[0] >> bitsLeft) << bitsLeft]);
};
function getCoder(wordlist) {
    if (!Array.isArray(wordlist) || wordlist.length !== 2048 || typeof wordlist[0] !== 'string')
        throw new Error('Wordlist: expected array of 2048 strings');
    wordlist.forEach((i) => {
        if (typeof i !== 'string')
            throw new Error(`Wordlist: non-string element: ${i}`);
    });
    return _scure_base__WEBPACK_IMPORTED_MODULE_3__.utils.chain(_scure_base__WEBPACK_IMPORTED_MODULE_3__.utils.checksum(1, calcChecksum), _scure_base__WEBPACK_IMPORTED_MODULE_3__.utils.radix2(11, true), _scure_base__WEBPACK_IMPORTED_MODULE_3__.utils.alphabet(wordlist));
}
/**
 * Reversible: Converts mnemonic string to raw entropy in form of byte array.
 * @param mnemonic 12-24 words
 * @param wordlist imported wordlist for specific language
 * @example
 * const mnem = 'legal winner thank year wave sausage worth useful legal winner thank yellow';
 * mnemonicToEntropy(mnem, wordlist)
 * // Produces
 * new Uint8Array([
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f,
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f
 * ])
 */
function mnemonicToEntropy(mnemonic, wordlist) {
    const { words } = normalize(mnemonic);
    const entropy = getCoder(wordlist).decode(words);
    assertEntropy(entropy);
    return entropy;
}
/**
 * Reversible: Converts raw entropy in form of byte array to mnemonic string.
 * @param entropy byte array
 * @param wordlist imported wordlist for specific language
 * @returns 12-24 words
 * @example
 * const ent = new Uint8Array([
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f,
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f
 * ]);
 * entropyToMnemonic(ent, wordlist);
 * // 'legal winner thank year wave sausage worth useful legal winner thank yellow'
 */
function entropyToMnemonic(entropy, wordlist) {
    assertEntropy(entropy);
    const words = getCoder(wordlist).encode(entropy);
    return words.join(isJapanese(wordlist) ? '\u3000' : ' ');
}
/**
 * Validates mnemonic for being 12-24 words contained in `wordlist`.
 */
function validateMnemonic(mnemonic, wordlist) {
    try {
        mnemonicToEntropy(mnemonic, wordlist);
    }
    catch (e) {
        return false;
    }
    return true;
}
const salt = (passphrase) => nfkd(`mnemonic${passphrase}`);
/**
 * Irreversible: Uses KDF to derive 64 bytes of key data from mnemonic + optional password.
 * @param mnemonic 12-24 words
 * @param passphrase string that will additionally protect the key
 * @returns 64 bytes of key data
 * @example
 * const mnem = 'legal winner thank year wave sausage worth useful legal winner thank yellow';
 * await mnemonicToSeed(mnem, 'password');
 * // new Uint8Array([...64 bytes])
 */
function mnemonicToSeed(mnemonic, passphrase = '') {
    return (0,_noble_hashes_pbkdf2__WEBPACK_IMPORTED_MODULE_4__.pbkdf2Async)(_noble_hashes_sha512__WEBPACK_IMPORTED_MODULE_5__.sha512, normalize(mnemonic).nfkd, salt(passphrase), { c: 2048, dkLen: 64 });
}
/**
 * Irreversible: Uses KDF to derive 64 bytes of key data from mnemonic + optional password.
 * @param mnemonic 12-24 words
 * @param passphrase string that will additionally protect the key
 * @returns 64 bytes of key data
 * @example
 * const mnem = 'legal winner thank year wave sausage worth useful legal winner thank yellow';
 * mnemonicToSeedSync(mnem, 'password');
 * // new Uint8Array([...64 bytes])
 */
function mnemonicToSeedSync(mnemonic, passphrase = '') {
    return (0,_noble_hashes_pbkdf2__WEBPACK_IMPORTED_MODULE_4__.pbkdf2)(_noble_hashes_sha512__WEBPACK_IMPORTED_MODULE_5__.sha512, normalize(mnemonic).nfkd, salt(passphrase), { c: 2048, dkLen: 64 });
}


/***/ }),

/***/ "./node_modules/@scure/bip39/esm/wordlists/english.js":
/*!************************************************************!*\
  !*** ./node_modules/@scure/bip39/esm/wordlists/english.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wordlist: () => (/* binding */ wordlist)
/* harmony export */ });
const wordlist = `abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split('\n');


/***/ }),

/***/ "./node_modules/@scure/btc-signer/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@scure/btc-signer/lib/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* binding */ Address),
/* harmony export */   BTCArray: () => (/* binding */ BTCArray),
/* harmony export */   CompactSize: () => (/* binding */ CompactSize),
/* harmony export */   DEFAULT_LOCKTIME: () => (/* binding */ DEFAULT_LOCKTIME),
/* harmony export */   DEFAULT_SEQUENCE: () => (/* binding */ DEFAULT_SEQUENCE),
/* harmony export */   DEFAULT_VERSION: () => (/* binding */ DEFAULT_VERSION),
/* harmony export */   Decimal: () => (/* binding */ Decimal),
/* harmony export */   NETWORK: () => (/* binding */ NETWORK),
/* harmony export */   OP: () => (/* binding */ OP),
/* harmony export */   OpToNum: () => (/* binding */ OpToNum),
/* harmony export */   OutScript: () => (/* binding */ OutScript),
/* harmony export */   PRECISION: () => (/* binding */ PRECISION),
/* harmony export */   PSBTCombine: () => (/* binding */ PSBTCombine),
/* harmony export */   RawInput: () => (/* binding */ RawInput),
/* harmony export */   RawOutput: () => (/* binding */ RawOutput),
/* harmony export */   RawPSBTV0: () => (/* binding */ RawPSBTV0),
/* harmony export */   RawPSBTV2: () => (/* binding */ RawPSBTV2),
/* harmony export */   RawTx: () => (/* binding */ RawTx),
/* harmony export */   RawWitness: () => (/* binding */ RawWitness),
/* harmony export */   Script: () => (/* binding */ Script),
/* harmony export */   ScriptNum: () => (/* binding */ ScriptNum),
/* harmony export */   SigHash: () => (/* binding */ SigHash),
/* harmony export */   SignatureHash: () => (/* binding */ SignatureHash),
/* harmony export */   TAPROOT_UNSPENDABLE_KEY: () => (/* binding */ TAPROOT_UNSPENDABLE_KEY),
/* harmony export */   TAP_LEAF_VERSION: () => (/* binding */ TAP_LEAF_VERSION),
/* harmony export */   TEST_NETWORK: () => (/* binding */ TEST_NETWORK),
/* harmony export */   TaprootControlBlock: () => (/* binding */ TaprootControlBlock),
/* harmony export */   Transaction: () => (/* binding */ Transaction),
/* harmony export */   VarBytes: () => (/* binding */ VarBytes),
/* harmony export */   WIF: () => (/* binding */ WIF),
/* harmony export */   _DebugPSBT: () => (/* binding */ _DebugPSBT),
/* harmony export */   _Estimator: () => (/* binding */ _Estimator),
/* harmony export */   _RawPSBTV0: () => (/* binding */ _RawPSBTV0),
/* harmony export */   _RawPSBTV2: () => (/* binding */ _RawPSBTV2),
/* harmony export */   _cmpBig: () => (/* binding */ _cmpBig),
/* harmony export */   _cmpBytes: () => (/* binding */ _cmpBytes),
/* harmony export */   _sortPubkeys: () => (/* binding */ _sortPubkeys),
/* harmony export */   base58check: () => (/* binding */ base58check),
/* harmony export */   bip32Path: () => (/* binding */ bip32Path),
/* harmony export */   cloneDeep: () => (/* binding */ cloneDeep),
/* harmony export */   combinations: () => (/* binding */ combinations),
/* harmony export */   getAddress: () => (/* binding */ getAddress),
/* harmony export */   multisig: () => (/* binding */ multisig),
/* harmony export */   p2ms: () => (/* binding */ p2ms),
/* harmony export */   p2pk: () => (/* binding */ p2pk),
/* harmony export */   p2pkh: () => (/* binding */ p2pkh),
/* harmony export */   p2sh: () => (/* binding */ p2sh),
/* harmony export */   p2tr: () => (/* binding */ p2tr),
/* harmony export */   p2tr_ms: () => (/* binding */ p2tr_ms),
/* harmony export */   p2tr_ns: () => (/* binding */ p2tr_ns),
/* harmony export */   p2tr_pk: () => (/* binding */ p2tr_pk),
/* harmony export */   p2wpkh: () => (/* binding */ p2wpkh),
/* harmony export */   p2wsh: () => (/* binding */ p2wsh),
/* harmony export */   programToWitness: () => (/* binding */ programToWitness),
/* harmony export */   selectUTXO: () => (/* binding */ selectUTXO),
/* harmony export */   sortedMultisig: () => (/* binding */ sortedMultisig),
/* harmony export */   tapLeafHash: () => (/* binding */ tapLeafHash),
/* harmony export */   taprootListToTree: () => (/* binding */ taprootListToTree),
/* harmony export */   taprootTweakPrivKey: () => (/* binding */ taprootTweakPrivKey),
/* harmony export */   taprootTweakPubkey: () => (/* binding */ taprootTweakPubkey)
/* harmony export */ });
/* harmony import */ var _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noble/curves/secp256k1 */ "./node_modules/@noble/curves/esm/secp256k1.js");
/* harmony import */ var _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @noble/hashes/sha256 */ "./node_modules/@noble/hashes/esm/sha256.js");
/* harmony import */ var _noble_hashes_ripemd160__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @noble/hashes/ripemd160 */ "./node_modules/@noble/hashes/esm/ripemd160.js");
/* harmony import */ var _scure_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scure/base */ "./node_modules/@scure/base/lib/esm/index.js");
/* harmony import */ var micro_packed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micro-packed */ "./node_modules/micro-packed/lib/esm/index.js");
/*! scure-btc-signer - MIT License (c) 2022 Paul Miller (paulmillr.com) */





const { ProjectivePoint: ProjPoint, sign: _signECDSA, getPublicKey: _pubECDSA } = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1;
const CURVE_ORDER = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.CURVE.n;
// Same as value || def, but doesn't overwrites zero ('0', 0, 0n, etc)
const def = (value, def) => (value === undefined ? def : value);
const isBytes = micro_packed__WEBPACK_IMPORTED_MODULE_1__.isBytes;
const hash160 = (msg) => (0,_noble_hashes_ripemd160__WEBPACK_IMPORTED_MODULE_2__.ripemd160)((0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(msg));
const sha256x2 = (...msgs) => (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)((0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(concat(...msgs)));
const concat = micro_packed__WEBPACK_IMPORTED_MODULE_1__.concatBytes;
// Make base58check work
const base58check = (0,_scure_base__WEBPACK_IMPORTED_MODULE_4__.createBase58check)(_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256);
function cloneDeep(obj) {
    if (Array.isArray(obj))
        return obj.map((i) => cloneDeep(i));
    // slice of nodejs Buffer doesn't copy
    else if (obj instanceof Uint8Array)
        return Uint8Array.from(obj);
    // immutable
    else if (['number', 'bigint', 'boolean', 'string', 'undefined'].includes(typeof obj))
        return obj;
    // null is object
    else if (obj === null)
        return obj;
    // should be last, so it won't catch other types
    else if (typeof obj === 'object') {
        return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, cloneDeep(v)]));
    }
    throw new Error(`cloneDeep: unknown type=${obj} (${typeof obj})`);
}
var PubT;
(function (PubT) {
    PubT[PubT["ecdsa"] = 0] = "ecdsa";
    PubT[PubT["schnorr"] = 1] = "schnorr";
})(PubT || (PubT = {}));
function validatePubkey(pub, type) {
    const len = pub.length;
    if (type === PubT.ecdsa) {
        if (len === 32)
            throw new Error('Expected non-Schnorr key');
        ProjPoint.fromHex(pub); // does assertValidity
        return pub;
    }
    else if (type === PubT.schnorr) {
        if (len !== 32)
            throw new Error('Expected 32-byte Schnorr key');
        _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.utils.lift_x(_noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.utils.bytesToNumberBE(pub));
        return pub;
    }
    else {
        throw new Error('Unknown key type');
    }
}
function isValidPubkey(pub, type) {
    try {
        validatePubkey(pub, type);
        return true;
    }
    catch (e) {
        return false;
    }
}
// low-r signature grinding. Used to reduce tx size by 1 byte.
// noble/secp256k1 does not support the feature: it is not used outside of BTC.
// We implement it manually, because in BTC it's common.
// Not best way, but closest to bitcoin implementation (easier to check)
const hasLowR = (sig) => sig.r < CURVE_ORDER / 2n;
function signECDSA(hash, privateKey, lowR = false) {
    let sig = _signECDSA(hash, privateKey);
    if (lowR && !hasLowR(sig)) {
        const extraEntropy = new Uint8Array(32);
        for (let cnt = 0; cnt < Number.MAX_SAFE_INTEGER; cnt++) {
            extraEntropy.set(micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(cnt));
            sig = _signECDSA(hash, privateKey, { extraEntropy });
            if (hasLowR(sig))
                break;
        }
    }
    return sig.toDERRawBytes();
}
function tapTweak(a, b) {
    const u = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.utils;
    const t = u.taggedHash('TapTweak', a, b);
    const tn = u.bytesToNumberBE(t);
    if (tn >= CURVE_ORDER)
        throw new Error('tweak higher than curve order');
    return tn;
}
function taprootTweakPrivKey(privKey, merkleRoot = new Uint8Array()) {
    const u = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.utils;
    const seckey0 = u.bytesToNumberBE(privKey); // seckey0 = int_from_bytes(seckey0)
    const P = ProjPoint.fromPrivateKey(seckey0); // P = point_mul(G, seckey0)
    // seckey = seckey0 if has_even_y(P) else SECP256K1_ORDER - seckey0
    const seckey = P.hasEvenY() ? seckey0 : u.mod(-seckey0, CURVE_ORDER);
    const xP = u.pointToBytes(P);
    // t = int_from_bytes(tagged_hash("TapTweak", bytes_from_int(x(P)) + h)); >= SECP256K1_ORDER check
    const t = tapTweak(xP, merkleRoot);
    // bytes_from_int((seckey + t) % SECP256K1_ORDER)
    return u.numberToBytesBE(u.mod(seckey + t, CURVE_ORDER), 32);
}
function taprootTweakPubkey(pubKey, h) {
    const u = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.utils;
    const t = tapTweak(pubKey, h); // t = int_from_bytes(tagged_hash("TapTweak", pubkey + h))
    const P = u.lift_x(u.bytesToNumberBE(pubKey)); // P = lift_x(int_from_bytes(pubkey))
    const Q = P.add(ProjPoint.fromPrivateKey(t)); // Q = point_add(P, point_mul(G, t))
    const parity = Q.hasEvenY() ? 0 : 1; // 0 if has_even_y(Q) else 1
    return [u.pointToBytes(Q), parity]; // bytes_from_int(x(Q))
}
// Can be 33 or 64 bytes
const PubKeyECDSA = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(null), (pub) => validatePubkey(pub, PubT.ecdsa));
const PubKeySchnorr = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(32), (pub) => validatePubkey(pub, PubT.schnorr));
const SignatureSchnorr = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(null), (sig) => {
    if (sig.length !== 64 && sig.length !== 65)
        throw new Error('Schnorr signature should be 64 or 65 bytes long');
    return sig;
});
function uniqPubkey(pubkeys) {
    const map = {};
    for (const pub of pubkeys) {
        const key = _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(pub);
        if (map[key])
            throw new Error(`Multisig: non-uniq pubkey: ${pubkeys.map(_scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode)}`);
        map[key] = true;
    }
}
const NETWORK = {
    bech32: 'bc',
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
};
const TEST_NETWORK = {
    bech32: 'tb',
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
};
const PRECISION = 8;
const DEFAULT_VERSION = 2;
const DEFAULT_LOCKTIME = 0;
const DEFAULT_SEQUENCE = 4294967295;
const EMPTY32 = new Uint8Array(32);
// Utils
const Decimal = micro_packed__WEBPACK_IMPORTED_MODULE_1__.coders.decimal(PRECISION);
// Exported for tests, internal method
function _cmpBytes(a, b) {
    if (!isBytes(a) || !isBytes(b))
        throw new Error(`cmp: wrong type a=${typeof a} b=${typeof b}`);
    // -1 -> a<b, 0 -> a==b, 1 -> a>b
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++)
        if (a[i] != b[i])
            return Math.sign(a[i] - b[i]);
    return Math.sign(a.length - b.length);
}
// Coders
// prettier-ignore
var OP;
(function (OP) {
    OP[OP["OP_0"] = 0] = "OP_0";
    OP[OP["PUSHDATA1"] = 76] = "PUSHDATA1";
    OP[OP["PUSHDATA2"] = 77] = "PUSHDATA2";
    OP[OP["PUSHDATA4"] = 78] = "PUSHDATA4";
    OP[OP["1NEGATE"] = 79] = "1NEGATE";
    OP[OP["RESERVED"] = 80] = "RESERVED";
    OP[OP["OP_1"] = 81] = "OP_1";
    OP[OP["OP_2"] = 82] = "OP_2";
    OP[OP["OP_3"] = 83] = "OP_3";
    OP[OP["OP_4"] = 84] = "OP_4";
    OP[OP["OP_5"] = 85] = "OP_5";
    OP[OP["OP_6"] = 86] = "OP_6";
    OP[OP["OP_7"] = 87] = "OP_7";
    OP[OP["OP_8"] = 88] = "OP_8";
    OP[OP["OP_9"] = 89] = "OP_9";
    OP[OP["OP_10"] = 90] = "OP_10";
    OP[OP["OP_11"] = 91] = "OP_11";
    OP[OP["OP_12"] = 92] = "OP_12";
    OP[OP["OP_13"] = 93] = "OP_13";
    OP[OP["OP_14"] = 94] = "OP_14";
    OP[OP["OP_15"] = 95] = "OP_15";
    OP[OP["OP_16"] = 96] = "OP_16";
    // Control
    OP[OP["NOP"] = 97] = "NOP";
    OP[OP["VER"] = 98] = "VER";
    OP[OP["IF"] = 99] = "IF";
    OP[OP["NOTIF"] = 100] = "NOTIF";
    OP[OP["VERIF"] = 101] = "VERIF";
    OP[OP["VERNOTIF"] = 102] = "VERNOTIF";
    OP[OP["ELSE"] = 103] = "ELSE";
    OP[OP["ENDIF"] = 104] = "ENDIF";
    OP[OP["VERIFY"] = 105] = "VERIFY";
    OP[OP["RETURN"] = 106] = "RETURN";
    // Stack
    OP[OP["TOALTSTACK"] = 107] = "TOALTSTACK";
    OP[OP["FROMALTSTACK"] = 108] = "FROMALTSTACK";
    OP[OP["2DROP"] = 109] = "2DROP";
    OP[OP["2DUP"] = 110] = "2DUP";
    OP[OP["3DUP"] = 111] = "3DUP";
    OP[OP["2OVER"] = 112] = "2OVER";
    OP[OP["2ROT"] = 113] = "2ROT";
    OP[OP["2SWAP"] = 114] = "2SWAP";
    OP[OP["IFDUP"] = 115] = "IFDUP";
    OP[OP["DEPTH"] = 116] = "DEPTH";
    OP[OP["DROP"] = 117] = "DROP";
    OP[OP["DUP"] = 118] = "DUP";
    OP[OP["NIP"] = 119] = "NIP";
    OP[OP["OVER"] = 120] = "OVER";
    OP[OP["PICK"] = 121] = "PICK";
    OP[OP["ROLL"] = 122] = "ROLL";
    OP[OP["ROT"] = 123] = "ROT";
    OP[OP["SWAP"] = 124] = "SWAP";
    OP[OP["TUCK"] = 125] = "TUCK";
    // Splice
    OP[OP["CAT"] = 126] = "CAT";
    OP[OP["SUBSTR"] = 127] = "SUBSTR";
    OP[OP["LEFT"] = 128] = "LEFT";
    OP[OP["RIGHT"] = 129] = "RIGHT";
    OP[OP["SIZE"] = 130] = "SIZE";
    // Boolean logic
    OP[OP["INVERT"] = 131] = "INVERT";
    OP[OP["AND"] = 132] = "AND";
    OP[OP["OR"] = 133] = "OR";
    OP[OP["XOR"] = 134] = "XOR";
    OP[OP["EQUAL"] = 135] = "EQUAL";
    OP[OP["EQUALVERIFY"] = 136] = "EQUALVERIFY";
    OP[OP["RESERVED1"] = 137] = "RESERVED1";
    OP[OP["RESERVED2"] = 138] = "RESERVED2";
    // Numbers
    OP[OP["1ADD"] = 139] = "1ADD";
    OP[OP["1SUB"] = 140] = "1SUB";
    OP[OP["2MUL"] = 141] = "2MUL";
    OP[OP["2DIV"] = 142] = "2DIV";
    OP[OP["NEGATE"] = 143] = "NEGATE";
    OP[OP["ABS"] = 144] = "ABS";
    OP[OP["NOT"] = 145] = "NOT";
    OP[OP["0NOTEQUAL"] = 146] = "0NOTEQUAL";
    OP[OP["ADD"] = 147] = "ADD";
    OP[OP["SUB"] = 148] = "SUB";
    OP[OP["MUL"] = 149] = "MUL";
    OP[OP["DIV"] = 150] = "DIV";
    OP[OP["MOD"] = 151] = "MOD";
    OP[OP["LSHIFT"] = 152] = "LSHIFT";
    OP[OP["RSHIFT"] = 153] = "RSHIFT";
    OP[OP["BOOLAND"] = 154] = "BOOLAND";
    OP[OP["BOOLOR"] = 155] = "BOOLOR";
    OP[OP["NUMEQUAL"] = 156] = "NUMEQUAL";
    OP[OP["NUMEQUALVERIFY"] = 157] = "NUMEQUALVERIFY";
    OP[OP["NUMNOTEQUAL"] = 158] = "NUMNOTEQUAL";
    OP[OP["LESSTHAN"] = 159] = "LESSTHAN";
    OP[OP["GREATERTHAN"] = 160] = "GREATERTHAN";
    OP[OP["LESSTHANOREQUAL"] = 161] = "LESSTHANOREQUAL";
    OP[OP["GREATERTHANOREQUAL"] = 162] = "GREATERTHANOREQUAL";
    OP[OP["MIN"] = 163] = "MIN";
    OP[OP["MAX"] = 164] = "MAX";
    OP[OP["WITHIN"] = 165] = "WITHIN";
    // Crypto
    OP[OP["RIPEMD160"] = 166] = "RIPEMD160";
    OP[OP["SHA1"] = 167] = "SHA1";
    OP[OP["SHA256"] = 168] = "SHA256";
    OP[OP["HASH160"] = 169] = "HASH160";
    OP[OP["HASH256"] = 170] = "HASH256";
    OP[OP["CODESEPARATOR"] = 171] = "CODESEPARATOR";
    OP[OP["CHECKSIG"] = 172] = "CHECKSIG";
    OP[OP["CHECKSIGVERIFY"] = 173] = "CHECKSIGVERIFY";
    OP[OP["CHECKMULTISIG"] = 174] = "CHECKMULTISIG";
    OP[OP["CHECKMULTISIGVERIFY"] = 175] = "CHECKMULTISIGVERIFY";
    // Expansion
    OP[OP["NOP1"] = 176] = "NOP1";
    OP[OP["CHECKLOCKTIMEVERIFY"] = 177] = "CHECKLOCKTIMEVERIFY";
    OP[OP["CHECKSEQUENCEVERIFY"] = 178] = "CHECKSEQUENCEVERIFY";
    OP[OP["NOP4"] = 179] = "NOP4";
    OP[OP["NOP5"] = 180] = "NOP5";
    OP[OP["NOP6"] = 181] = "NOP6";
    OP[OP["NOP7"] = 182] = "NOP7";
    OP[OP["NOP8"] = 183] = "NOP8";
    OP[OP["NOP9"] = 184] = "NOP9";
    OP[OP["NOP10"] = 185] = "NOP10";
    // BIP 342
    OP[OP["CHECKSIGADD"] = 186] = "CHECKSIGADD";
    // Invalid
    OP[OP["INVALID"] = 255] = "INVALID";
})(OP || (OP = {}));
// Converts script bytes to parsed script
// 5221030000000000000000000000000000000000000000000000000000000000000001210300000000000000000000000000000000000000000000000000000000000000022103000000000000000000000000000000000000000000000000000000000000000353ae
// =>
// OP_2
//   030000000000000000000000000000000000000000000000000000000000000001
//   030000000000000000000000000000000000000000000000000000000000000002
//   030000000000000000000000000000000000000000000000000000000000000003
//   OP_3
//   CHECKMULTISIG
const Script = micro_packed__WEBPACK_IMPORTED_MODULE_1__.wrap({
    encodeStream: (w, value) => {
        for (let o of value) {
            if (typeof o === 'string') {
                if (OP[o] === undefined)
                    throw new Error(`Unknown opcode=${o}`);
                w.byte(OP[o]);
                continue;
            }
            else if (typeof o === 'number') {
                if (o === 0x00) {
                    w.byte(0x00);
                    continue;
                }
                else if (1 <= o && o <= 16) {
                    w.byte(OP.OP_1 - 1 + o);
                    continue;
                }
            }
            // Encode big numbers
            if (typeof o === 'number')
                o = ScriptNum().encode(BigInt(o));
            if (!isBytes(o))
                throw new Error(`Wrong Script OP=${o} (${typeof o})`);
            // Bytes
            const len = o.length;
            if (len < OP.PUSHDATA1)
                w.byte(len);
            else if (len <= 0xff) {
                w.byte(OP.PUSHDATA1);
                w.byte(len);
            }
            else if (len <= 0xffff) {
                w.byte(OP.PUSHDATA2);
                w.bytes(micro_packed__WEBPACK_IMPORTED_MODULE_1__.U16LE.encode(len));
            }
            else {
                w.byte(OP.PUSHDATA4);
                w.bytes(micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(len));
            }
            w.bytes(o);
        }
    },
    decodeStream: (r) => {
        const out = [];
        while (!r.isEnd()) {
            const cur = r.byte();
            // if 0 < cur < 78
            if (OP.OP_0 < cur && cur <= OP.PUSHDATA4) {
                let len;
                if (cur < OP.PUSHDATA1)
                    len = cur;
                else if (cur === OP.PUSHDATA1)
                    len = micro_packed__WEBPACK_IMPORTED_MODULE_1__.U8.decodeStream(r);
                else if (cur === OP.PUSHDATA2)
                    len = micro_packed__WEBPACK_IMPORTED_MODULE_1__.U16LE.decodeStream(r);
                else if (cur === OP.PUSHDATA4)
                    len = micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.decodeStream(r);
                else
                    throw new Error('Should be not possible');
                out.push(r.bytes(len));
            }
            else if (cur === 0x00) {
                out.push(0);
            }
            else if (OP.OP_1 <= cur && cur <= OP.OP_16) {
                out.push(cur - (OP.OP_1 - 1));
            }
            else {
                const op = OP[cur];
                if (op === undefined)
                    throw new Error(`Unknown opcode=${cur.toString(16)}`);
                out.push(op);
            }
        }
        return out;
    },
});
// We can encode almost any number as ScriptNum, however, parsing will be a problem
// since we can't know if buffer is a number or something else.
function ScriptNum(bytesLimit = 6, forceMinimal = false) {
    return micro_packed__WEBPACK_IMPORTED_MODULE_1__.wrap({
        encodeStream: (w, value) => {
            if (value === 0n)
                return;
            const neg = value < 0;
            const val = BigInt(value);
            const nums = [];
            for (let abs = neg ? -val : val; abs; abs >>= 8n)
                nums.push(Number(abs & 0xffn));
            if (nums[nums.length - 1] >= 0x80)
                nums.push(neg ? 0x80 : 0);
            else if (neg)
                nums[nums.length - 1] |= 0x80;
            w.bytes(new Uint8Array(nums));
        },
        decodeStream: (r) => {
            const len = r.leftBytes;
            if (len > bytesLimit)
                throw new Error(`ScriptNum: number (${len}) bigger than limit=${bytesLimit}`);
            if (len === 0)
                return 0n;
            if (forceMinimal) {
                // MSB is zero (without sign bit) -> not minimally encoded
                if ((r.data[len - 1] & 0x7f) === 0) {
                    // exception
                    if (len <= 1 || (r.data[len - 2] & 0x80) === 0)
                        throw new Error('Non-minimally encoded ScriptNum');
                }
            }
            let last = 0;
            let res = 0n;
            for (let i = 0; i < len; ++i) {
                last = r.byte();
                res |= BigInt(last) << (8n * BigInt(i));
            }
            if (last >= 0x80) {
                res &= (2n ** BigInt(len * 8) - 1n) >> 1n;
                res = -res;
            }
            return res;
        },
    });
}
function OpToNum(op, bytesLimit = 4, forceMinimal = true) {
    if (typeof op === 'number')
        return op;
    if (isBytes(op)) {
        try {
            const val = ScriptNum(bytesLimit, forceMinimal).decode(op);
            if (val > Number.MAX_SAFE_INTEGER)
                return;
            return Number(val);
        }
        catch (e) {
            return;
        }
    }
    return;
}
// BTC specific variable length integer encoding
// https://en.bitcoin.it/wiki/Protocol_documentation#Variable_length_integer
const CSLimits = {
    0xfd: [0xfd, 2, 253n, 65535n],
    0xfe: [0xfe, 4, 65536n, 4294967295n],
    0xff: [0xff, 8, 4294967296n, 18446744073709551615n],
};
const CompactSize = micro_packed__WEBPACK_IMPORTED_MODULE_1__.wrap({
    encodeStream: (w, value) => {
        if (typeof value === 'number')
            value = BigInt(value);
        if (0n <= value && value <= 252n)
            return w.byte(Number(value));
        for (const [flag, bytes, start, stop] of Object.values(CSLimits)) {
            if (start > value || value > stop)
                continue;
            w.byte(flag);
            for (let i = 0; i < bytes; i++)
                w.byte(Number((value >> (8n * BigInt(i))) & 0xffn));
            return;
        }
        throw w.err(`VarInt too big: ${value}`);
    },
    decodeStream: (r) => {
        const b0 = r.byte();
        if (b0 <= 0xfc)
            return BigInt(b0);
        const [_, bytes, start] = CSLimits[b0];
        let num = 0n;
        for (let i = 0; i < bytes; i++)
            num |= BigInt(r.byte()) << (8n * BigInt(i));
        if (num < start)
            throw r.err(`Wrong CompactSize(${8 * bytes})`);
        return num;
    },
});
// Same thing, but in number instead of bigint. Checks for safe integer inside
const CompactSizeLen = micro_packed__WEBPACK_IMPORTED_MODULE_1__.apply(CompactSize, micro_packed__WEBPACK_IMPORTED_MODULE_1__.coders.number);
// Array of size <CompactSize>
const BTCArray = (t) => micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(CompactSize, t);
// ui8a of size <CompactSize>
const VarBytes = micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(CompactSize);
const RawInput = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    txid: micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(32, true), // hash(prev_tx),
    index: micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, // output number of previous tx
    finalScriptSig: VarBytes, // btc merges input and output script, executes it. If ok = tx passes
    sequence: micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, // ?
});
const RawOutput = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({ amount: micro_packed__WEBPACK_IMPORTED_MODULE_1__.U64LE, script: VarBytes });
const EMPTY_OUTPUT = {
    amount: 0xffffffffffffffffn,
    script: micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY,
};
// SegWit v0 stack of witness buffers
const RawWitness = micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(CompactSizeLen, VarBytes);
// https://en.bitcoin.it/wiki/Protocol_documentation#tx
const _RawTx = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    version: micro_packed__WEBPACK_IMPORTED_MODULE_1__.I32LE,
    segwitFlag: micro_packed__WEBPACK_IMPORTED_MODULE_1__.flag(new Uint8Array([0x00, 0x01])),
    inputs: BTCArray(RawInput),
    outputs: BTCArray(RawOutput),
    witnesses: micro_packed__WEBPACK_IMPORTED_MODULE_1__.flagged('segwitFlag', micro_packed__WEBPACK_IMPORTED_MODULE_1__.array('inputs/length', RawWitness)),
    // < 500000000	Block number at which this transaction is unlocked
    // >= 500000000	UNIX timestamp at which this transaction is unlocked
    // Handled as part of PSBTv2
    lockTime: micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE,
});
function validateRawTx(tx) {
    if (tx.segwitFlag && tx.witnesses && !tx.witnesses.length)
        throw new Error('Segwit flag with empty witnesses array');
    return tx;
}
const RawTx = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(_RawTx, validateRawTx);
function PSBTKeyInfo(info) {
    const [type, kc, vc, reqInc, allowInc, silentIgnore] = info;
    return { type, kc, vc, reqInc, allowInc, silentIgnore };
}
const BIP32Der = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    fingerprint: micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32BE,
    path: micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(null, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE),
});
// Complex structure for PSBT fields
// <control byte with leaf version and parity bit> <internal key p> <C> <E> <AB>
const _TaprootControlBlock = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    version: micro_packed__WEBPACK_IMPORTED_MODULE_1__.U8, // With parity :(
    internalKey: micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(32),
    merklePath: micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(null, micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(32)),
});
const TaprootControlBlock = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(_TaprootControlBlock, (cb) => {
    if (cb.merklePath.length > 128)
        throw new Error('TaprootControlBlock: merklePath should be of length 0..128 (inclusive)');
    return cb;
});
const TaprootBIP32Der = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    hashes: micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(CompactSizeLen, micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(32)),
    der: BIP32Der,
});
// The 78 byte serialized extended public key as defined by BIP 32.
const GlobalXPUB = micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(78);
const tapScriptSigKey = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({ pubKey: PubKeySchnorr, leafHash: micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(32) });
// {<8-bit uint depth> <8-bit uint leaf version> <compact size uint scriptlen> <bytes script>}*
const tapTree = micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(null, micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    depth: micro_packed__WEBPACK_IMPORTED_MODULE_1__.U8,
    version: micro_packed__WEBPACK_IMPORTED_MODULE_1__.U8,
    script: VarBytes,
}));
const BytesInf = micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(null); // Bytes will conflict with Bytes type
const Bytes20 = micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(20);
const Bytes32 = micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(32);
// versionsRequiringExclusing = !versionsAllowsInclusion (as set)
// {name: [tag, keyCoder, valueCoder, versionsRequiringInclusion, versionsRequiringExclusing, versionsAllowsInclusion, silentIgnore]}
// SilentIgnore: we use some v2 fields for v1 representation too, so we just clean them before serialize
// Tables from BIP-0174 (https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)
// prettier-ignore
const PSBTGlobal = {
    unsignedTx: [0x00, false, RawTx, [0], [0], false],
    xpub: [0x01, GlobalXPUB, BIP32Der, [], [0, 2], false],
    txVersion: [0x02, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, [2], [2], false],
    fallbackLocktime: [0x03, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, [], [2], false],
    inputCount: [0x04, false, CompactSizeLen, [2], [2], false],
    outputCount: [0x05, false, CompactSizeLen, [2], [2], false],
    txModifiable: [0x06, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U8, [], [2], false], // TODO: bitfield
    version: [0xfb, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, [], [0, 2], false],
    proprietary: [0xfc, BytesInf, BytesInf, [], [0, 2], false],
};
// prettier-ignore
const PSBTInput = {
    nonWitnessUtxo: [0x00, false, RawTx, [], [0, 2], false],
    witnessUtxo: [0x01, false, RawOutput, [], [0, 2], false],
    partialSig: [0x02, PubKeyECDSA, BytesInf, [], [0, 2], false],
    sighashType: [0x03, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, [], [0, 2], false],
    redeemScript: [0x04, false, BytesInf, [], [0, 2], false],
    witnessScript: [0x05, false, BytesInf, [], [0, 2], false],
    bip32Derivation: [0x06, PubKeyECDSA, BIP32Der, [], [0, 2], false],
    finalScriptSig: [0x07, false, BytesInf, [], [0, 2], false],
    finalScriptWitness: [0x08, false, RawWitness, [], [0, 2], false],
    porCommitment: [0x09, false, BytesInf, [], [0, 2], false],
    ripemd160: [0x0a, Bytes20, BytesInf, [], [0, 2], false],
    sha256: [0x0b, Bytes32, BytesInf, [], [0, 2], false],
    hash160: [0x0c, Bytes20, BytesInf, [], [0, 2], false],
    hash256: [0x0d, Bytes32, BytesInf, [], [0, 2], false],
    txid: [0x0e, false, Bytes32, [2], [2], true],
    index: [0x0f, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, [2], [2], true],
    sequence: [0x10, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, [], [2], true],
    requiredTimeLocktime: [0x11, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, [], [2], false],
    requiredHeightLocktime: [0x12, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE, [], [2], false],
    tapKeySig: [0x13, false, SignatureSchnorr, [], [0, 2], false],
    tapScriptSig: [0x14, tapScriptSigKey, SignatureSchnorr, [], [0, 2], false],
    tapLeafScript: [0x15, TaprootControlBlock, BytesInf, [], [0, 2], false],
    tapBip32Derivation: [0x16, Bytes32, TaprootBIP32Der, [], [0, 2], false],
    tapInternalKey: [0x17, false, PubKeySchnorr, [], [0, 2], false],
    tapMerkleRoot: [0x18, false, Bytes32, [], [0, 2], false],
    proprietary: [0xfc, BytesInf, BytesInf, [], [0, 2], false],
};
// All other keys removed when finalizing
const PSBTInputFinalKeys = [
    'txid',
    'sequence',
    'index',
    'witnessUtxo',
    'nonWitnessUtxo',
    'finalScriptSig',
    'finalScriptWitness',
    'unknown',
];
// Can be modified even on signed input
const PSBTInputUnsignedKeys = [
    'partialSig',
    'finalScriptSig',
    'finalScriptWitness',
    'tapKeySig',
    'tapScriptSig',
];
// prettier-ignore
const PSBTOutput = {
    redeemScript: [0x00, false, BytesInf, [], [0, 2], false],
    witnessScript: [0x01, false, BytesInf, [], [0, 2], false],
    bip32Derivation: [0x02, PubKeyECDSA, BIP32Der, [], [0, 2], false],
    amount: [0x03, false, micro_packed__WEBPACK_IMPORTED_MODULE_1__.I64LE, [2], [2], true],
    script: [0x04, false, BytesInf, [2], [2], true],
    tapInternalKey: [0x05, false, PubKeySchnorr, [], [0, 2], false],
    tapTree: [0x06, false, tapTree, [], [0, 2], false],
    tapBip32Derivation: [0x07, PubKeySchnorr, TaprootBIP32Der, [], [0, 2], false],
    proprietary: [0xfc, BytesInf, BytesInf, [], [0, 2], false],
};
// Can be modified even on signed input
const PSBTOutputUnsignedKeys = [];
const PSBTKeyPair = micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(micro_packed__WEBPACK_IMPORTED_MODULE_1__.NULL, micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    //  <key> := <keylen> <keytype> <keydata> WHERE keylen = len(keytype)+len(keydata)
    key: micro_packed__WEBPACK_IMPORTED_MODULE_1__.prefix(CompactSizeLen, micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({ type: CompactSizeLen, key: micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(null) })),
    //  <value> := <valuelen> <valuedata>
    value: micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(CompactSizeLen),
}));
const PSBTUnknownKey = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({ type: CompactSizeLen, key: micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(null) });
// Key cannot be 'unknown', value coder cannot be array for elements with empty key
function PSBTKeyMap(psbtEnum) {
    // -> Record<type, [keyName, ...coders]>
    const byType = {};
    for (const k in psbtEnum) {
        const [num, kc, vc] = psbtEnum[k];
        byType[num] = [k, kc, vc];
    }
    return micro_packed__WEBPACK_IMPORTED_MODULE_1__.wrap({
        encodeStream: (w, value) => {
            let out = [];
            // Because we use order of psbtEnum, keymap is sorted here
            for (const name in psbtEnum) {
                const val = value[name];
                if (val === undefined)
                    continue;
                const [type, kc, vc] = psbtEnum[name];
                if (!kc) {
                    out.push({ key: { type, key: micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY }, value: vc.encode(val) });
                }
                else {
                    // Low level interface, returns keys as is (with duplicates). Useful for debug
                    const kv = val.map(([k, v]) => [
                        kc.encode(k),
                        vc.encode(v),
                    ]);
                    // sort by keys
                    kv.sort((a, b) => _cmpBytes(a[0], b[0]));
                    for (const [key, value] of kv)
                        out.push({ key: { key, type }, value });
                }
            }
            if (value.unknown) {
                value.unknown.sort((a, b) => _cmpBytes(a[0].key, b[0].key));
                for (const [k, v] of value.unknown)
                    out.push({ key: k, value: v });
            }
            PSBTKeyPair.encodeStream(w, out);
        },
        decodeStream: (r) => {
            const raw = PSBTKeyPair.decodeStream(r);
            const out = {};
            const noKey = {};
            for (const elm of raw) {
                let name = 'unknown';
                let key = elm.key.key;
                let value = elm.value;
                if (byType[elm.key.type]) {
                    const [_name, kc, vc] = byType[elm.key.type];
                    name = _name;
                    if (!kc && key.length) {
                        throw new Error(`PSBT: Non-empty key for ${name} (key=${_scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(key)} value=${_scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(value)}`);
                    }
                    key = kc ? kc.decode(key) : undefined;
                    value = vc.decode(value);
                    if (!kc) {
                        if (out[name])
                            throw new Error(`PSBT: Same keys: ${name} (key=${key} value=${value})`);
                        out[name] = value;
                        noKey[name] = true;
                        continue;
                    }
                }
                else {
                    // For unknown: add key type inside key
                    key = { type: elm.key.type, key: elm.key.key };
                }
                // Only keyed elements at this point
                if (noKey[name])
                    throw new Error(`PSBT: Key type with empty key and no key=${name} val=${value}`);
                if (!out[name])
                    out[name] = [];
                out[name].push([key, value]);
            }
            return out;
        },
    });
}
// Basic sanity check for scripts
function checkWSH(s, witnessScript) {
    if (!micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(s.hash, (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(witnessScript)))
        throw new Error('checkScript: wsh wrong witnessScript hash');
    const w = OutScript.decode(witnessScript);
    if (w.type === 'tr' || w.type === 'tr_ns' || w.type === 'tr_ms')
        throw new Error(`checkScript: P2${w.type} cannot be wrapped in P2SH`);
    if (w.type === 'wpkh' || w.type === 'sh')
        throw new Error(`checkScript: P2${w.type} cannot be wrapped in P2WSH`);
}
function checkScript(script, redeemScript, witnessScript) {
    if (script) {
        const s = OutScript.decode(script);
        // ms||pk maybe work, but there will be no address, hard to spend
        if (s.type === 'tr_ns' || s.type === 'tr_ms' || s.type === 'ms' || s.type == 'pk')
            throw new Error(`checkScript: non-wrapped ${s.type}`);
        if (s.type === 'sh' && redeemScript) {
            if (!micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(s.hash, hash160(redeemScript)))
                throw new Error('checkScript: sh wrong redeemScript hash');
            const r = OutScript.decode(redeemScript);
            if (r.type === 'tr' || r.type === 'tr_ns' || r.type === 'tr_ms')
                throw new Error(`checkScript: P2${r.type} cannot be wrapped in P2SH`);
            // Not sure if this unspendable, but we cannot represent this via PSBT
            if (r.type === 'sh')
                throw new Error('checkScript: P2SH cannot be wrapped in P2SH');
        }
        if (s.type === 'wsh' && witnessScript)
            checkWSH(s, witnessScript);
    }
    if (redeemScript) {
        const r = OutScript.decode(redeemScript);
        if (r.type === 'wsh' && witnessScript)
            checkWSH(r, witnessScript);
    }
}
const PSBTInputCoder = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(PSBTKeyMap(PSBTInput), (i) => {
    if (i.finalScriptWitness && !i.finalScriptWitness.length)
        throw new Error('validateInput: wmpty finalScriptWitness');
    //if (i.finalScriptSig && !i.finalScriptSig.length) throw new Error('validateInput: empty finalScriptSig');
    if (i.partialSig && !i.partialSig.length)
        throw new Error('Empty partialSig');
    if (i.partialSig)
        for (const [k] of i.partialSig)
            validatePubkey(k, PubT.ecdsa);
    if (i.bip32Derivation)
        for (const [k] of i.bip32Derivation)
            validatePubkey(k, PubT.ecdsa);
    // Locktime = unsigned little endian integer greater than or equal to 500000000 representing
    if (i.requiredTimeLocktime !== undefined && i.requiredTimeLocktime < 500000000)
        throw new Error(`validateInput: wrong timeLocktime=${i.requiredTimeLocktime}`);
    // unsigned little endian integer greater than 0 and less than 500000000
    if (i.requiredHeightLocktime !== undefined &&
        (i.requiredHeightLocktime <= 0 || i.requiredHeightLocktime >= 500000000))
        throw new Error(`validateInput: wrong heighLocktime=${i.requiredHeightLocktime}`);
    if (i.nonWitnessUtxo && i.index !== undefined) {
        const last = i.nonWitnessUtxo.outputs.length - 1;
        if (i.index > last)
            throw new Error(`validateInput: index(${i.index}) not in nonWitnessUtxo`);
        const prevOut = i.nonWitnessUtxo.outputs[i.index];
        if (i.witnessUtxo &&
            (!micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(i.witnessUtxo.script, prevOut.script) ||
                i.witnessUtxo.amount !== prevOut.amount))
            throw new Error('validateInput: witnessUtxo different from nonWitnessUtxo');
    }
    if (i.tapLeafScript) {
        // tap leaf version appears here twice: in control block and at the end of script
        for (const [k, v] of i.tapLeafScript) {
            if ((k.version & 254) !== v[v.length - 1])
                throw new Error('validateInput: tapLeafScript version mimatch');
            if (v[v.length - 1] & 1)
                throw new Error('validateInput: tapLeafScript version has parity bit!');
        }
    }
    // Validate txid for nonWitnessUtxo is correct
    if (i.nonWitnessUtxo && i.index !== undefined && i.txid) {
        const outputs = i.nonWitnessUtxo.outputs;
        if (outputs.length - 1 < i.index)
            throw new Error('nonWitnessUtxo: incorect output index');
        // At this point, we are using previous tx output to create new input.
        // Script safety checks are unnecessary:
        // - User has no control over previous tx. If somebody send money in same tx
        //   as unspendable output, we still want user able to spend money
        // - We still want some checks to notify user about possible errors early
        //   in case user wants to use wrong input by mistake
        // - Worst case: tx will be rejected by nodes. Still better than disallowing user
        //   to spend real input, no matter how broken it looks
        const tx = Transaction.fromRaw(RawTx.encode(i.nonWitnessUtxo), {
            allowUnknownOutputs: true,
            disableScriptCheck: true,
            allowUnknownInputs: true,
        });
        const txid = _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(i.txid);
        // PSBTv2 vectors have non-final tx in inputs
        if (tx.isFinal && tx.id !== txid)
            throw new Error(`nonWitnessUtxo: wrong txid, exp=${txid} got=${tx.id}`);
    }
    return i;
});
const PSBTOutputCoder = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(PSBTKeyMap(PSBTOutput), (o) => {
    if (o.bip32Derivation)
        for (const [k] of o.bip32Derivation)
            validatePubkey(k, PubT.ecdsa);
    return o;
});
const PSBTGlobalCoder = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(PSBTKeyMap(PSBTGlobal), (g) => {
    const version = g.version || 0;
    if (version === 0) {
        if (!g.unsignedTx)
            throw new Error('PSBTv0: missing unsignedTx');
        if (g.unsignedTx.segwitFlag || g.unsignedTx.witnesses)
            throw new Error('PSBTv0: witness in unsingedTx');
        for (const inp of g.unsignedTx.inputs)
            if (inp.finalScriptSig && inp.finalScriptSig.length)
                throw new Error('PSBTv0: input scriptSig found in unsignedTx');
    }
    return g;
});
const _RawPSBTV0 = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    magic: micro_packed__WEBPACK_IMPORTED_MODULE_1__.magic(micro_packed__WEBPACK_IMPORTED_MODULE_1__.string(new Uint8Array([0xff])), 'psbt'),
    global: PSBTGlobalCoder,
    inputs: micro_packed__WEBPACK_IMPORTED_MODULE_1__.array('global/unsignedTx/inputs/length', PSBTInputCoder),
    outputs: micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(null, PSBTOutputCoder),
});
const _RawPSBTV2 = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    magic: micro_packed__WEBPACK_IMPORTED_MODULE_1__.magic(micro_packed__WEBPACK_IMPORTED_MODULE_1__.string(new Uint8Array([0xff])), 'psbt'),
    global: PSBTGlobalCoder,
    inputs: micro_packed__WEBPACK_IMPORTED_MODULE_1__.array('global/inputCount', PSBTInputCoder),
    outputs: micro_packed__WEBPACK_IMPORTED_MODULE_1__.array('global/outputCount', PSBTOutputCoder),
});
const _DebugPSBT = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({
    magic: micro_packed__WEBPACK_IMPORTED_MODULE_1__.magic(micro_packed__WEBPACK_IMPORTED_MODULE_1__.string(new Uint8Array([0xff])), 'psbt'),
    items: micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(null, micro_packed__WEBPACK_IMPORTED_MODULE_1__.apply(micro_packed__WEBPACK_IMPORTED_MODULE_1__.array(micro_packed__WEBPACK_IMPORTED_MODULE_1__.NULL, micro_packed__WEBPACK_IMPORTED_MODULE_1__.tuple([micro_packed__WEBPACK_IMPORTED_MODULE_1__.hex(CompactSizeLen), micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(CompactSize)])), micro_packed__WEBPACK_IMPORTED_MODULE_1__.coders.dict())),
});
function validatePSBTFields(version, info, lst) {
    for (const k in lst) {
        if (k === 'unknown')
            continue;
        if (!info[k])
            continue;
        const { allowInc } = PSBTKeyInfo(info[k]);
        if (!allowInc.includes(version))
            throw new Error(`PSBTv${version}: field ${k} is not allowed`);
    }
    for (const k in info) {
        const { reqInc } = PSBTKeyInfo(info[k]);
        if (reqInc.includes(version) && lst[k] === undefined)
            throw new Error(`PSBTv${version}: missing required field ${k}`);
    }
}
function cleanPSBTFields(version, info, lst) {
    const out = {};
    for (const _k in lst) {
        const k = _k;
        if (k !== 'unknown') {
            if (!info[k])
                continue;
            const { allowInc, silentIgnore } = PSBTKeyInfo(info[k]);
            if (!allowInc.includes(version)) {
                if (silentIgnore)
                    continue;
                throw new Error(`Failed to serialize in PSBTv${version}: ${k} but versions allows inclusion=${allowInc}`);
            }
        }
        out[k] = lst[k];
    }
    return out;
}
function validatePSBT(tx) {
    const version = (tx && tx.global && tx.global.version) || 0;
    validatePSBTFields(version, PSBTGlobal, tx.global);
    for (const i of tx.inputs)
        validatePSBTFields(version, PSBTInput, i);
    for (const o of tx.outputs)
        validatePSBTFields(version, PSBTOutput, o);
    // We allow only one empty element at the end of map (compat with bitcoinjs-lib bug)
    const inputCount = !version ? tx.global.unsignedTx.inputs.length : tx.global.inputCount;
    if (tx.inputs.length < inputCount)
        throw new Error('Not enough inputs');
    const inputsLeft = tx.inputs.slice(inputCount);
    if (inputsLeft.length > 1 || (inputsLeft.length && Object.keys(inputsLeft[0]).length))
        throw new Error(`Unexpected inputs left in tx=${inputsLeft}`);
    // Same for inputs
    const outputCount = !version ? tx.global.unsignedTx.outputs.length : tx.global.outputCount;
    if (tx.outputs.length < outputCount)
        throw new Error('Not outputs inputs');
    const outputsLeft = tx.outputs.slice(outputCount);
    if (outputsLeft.length > 1 || (outputsLeft.length && Object.keys(outputsLeft[0]).length))
        throw new Error(`Unexpected outputs left in tx=${outputsLeft}`);
    return tx;
}
function mergeKeyMap(psbtEnum, val, cur, allowedFields) {
    const res = { ...cur, ...val };
    // All arguments can be provided as hex
    for (const k in psbtEnum) {
        const key = k;
        const [_, kC, vC] = psbtEnum[key];
        const cannotChange = allowedFields && !allowedFields.includes(k);
        if (val[k] === undefined && k in val) {
            if (cannotChange)
                throw new Error(`Cannot remove signed field=${k}`);
            delete res[k];
        }
        else if (kC) {
            const oldKV = (cur && cur[k] ? cur[k] : []);
            let newKV = val[key];
            if (newKV) {
                if (!Array.isArray(newKV))
                    throw new Error(`keyMap(${k}): KV pairs should be [k, v][]`);
                // Decode hex in k-v
                newKV = newKV.map((val) => {
                    if (val.length !== 2)
                        throw new Error(`keyMap(${k}): KV pairs should be [k, v][]`);
                    return [
                        typeof val[0] === 'string' ? kC.decode(_scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.decode(val[0])) : val[0],
                        typeof val[1] === 'string' ? vC.decode(_scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.decode(val[1])) : val[1],
                    ];
                });
                const map = {};
                const add = (kStr, k, v) => {
                    if (map[kStr] === undefined) {
                        map[kStr] = [k, v];
                        return;
                    }
                    const oldVal = _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(vC.encode(map[kStr][1]));
                    const newVal = _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(vC.encode(v));
                    if (oldVal !== newVal)
                        throw new Error(`keyMap(${key}): same key=${kStr} oldVal=${oldVal} newVal=${newVal}`);
                };
                for (const [k, v] of oldKV) {
                    const kStr = _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(kC.encode(k));
                    add(kStr, k, v);
                }
                for (const [k, v] of newKV) {
                    const kStr = _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(kC.encode(k));
                    // undefined removes previous value
                    if (v === undefined) {
                        if (cannotChange)
                            throw new Error(`Cannot remove signed field=${key}/${k}`);
                        delete map[kStr];
                    }
                    else
                        add(kStr, k, v);
                }
                res[key] = Object.values(map);
            }
        }
        else if (typeof res[k] === 'string') {
            res[k] = vC.decode(_scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.decode(res[k]));
        }
        else if (cannotChange && k in val && cur && cur[k] !== undefined) {
            if (!micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(vC.encode(val[k]), vC.encode(cur[k])))
                throw new Error(`Cannot change signed field=${k}`);
        }
    }
    // Remove unknown keys
    for (const k in res)
        if (!psbtEnum[k])
            delete res[k];
    return res;
}
const RawPSBTV0 = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(_RawPSBTV0, validatePSBT);
const RawPSBTV2 = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(_RawPSBTV2, validatePSBT);
// (TxHash, Idx)
const TxHashIdx = micro_packed__WEBPACK_IMPORTED_MODULE_1__.struct({ txid: micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(32, true), index: micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE });
const OutPK = {
    encode(from) {
        if (from.length !== 2 ||
            !isBytes(from[0]) ||
            !isValidPubkey(from[0], PubT.ecdsa) ||
            from[1] !== 'CHECKSIG')
            return;
        return { type: 'pk', pubkey: from[0] };
    },
    decode: (to) => (to.type === 'pk' ? [to.pubkey, 'CHECKSIG'] : undefined),
};
// @ts-ignore
const p2pk = (pubkey, network = NETWORK) => {
    // network is unused
    if (!isValidPubkey(pubkey, PubT.ecdsa))
        throw new Error('P2PK: invalid publicKey');
    return {
        type: 'pk',
        script: OutScript.encode({ type: 'pk', pubkey }),
    };
};
const OutPKH = {
    encode(from) {
        if (from.length !== 5 || from[0] !== 'DUP' || from[1] !== 'HASH160' || !isBytes(from[2]))
            return;
        if (from[3] !== 'EQUALVERIFY' || from[4] !== 'CHECKSIG')
            return;
        return { type: 'pkh', hash: from[2] };
    },
    decode: (to) => to.type === 'pkh' ? ['DUP', 'HASH160', to.hash, 'EQUALVERIFY', 'CHECKSIG'] : undefined,
};
const p2pkh = (publicKey, network = NETWORK) => {
    if (!isValidPubkey(publicKey, PubT.ecdsa))
        throw new Error('P2PKH: invalid publicKey');
    const hash = hash160(publicKey);
    return {
        type: 'pkh',
        script: OutScript.encode({ type: 'pkh', hash }),
        address: Address(network).encode({ type: 'pkh', hash }),
    };
};
const OutSH = {
    encode(from) {
        if (from.length !== 3 || from[0] !== 'HASH160' || !isBytes(from[1]) || from[2] !== 'EQUAL')
            return;
        return { type: 'sh', hash: from[1] };
    },
    decode: (to) => to.type === 'sh' ? ['HASH160', to.hash, 'EQUAL'] : undefined,
};
const p2sh = (child, network = NETWORK) => {
    // It is already tested inside noble-hashes and checkScript
    const cs = child.script;
    if (!isBytes(cs))
        throw new Error(`Wrong script: ${typeof child.script}, expected Uint8Array`);
    const hash = hash160(cs);
    const script = OutScript.encode({ type: 'sh', hash });
    checkScript(script, cs, child.witnessScript);
    const res = {
        type: 'sh',
        redeemScript: cs,
        script: OutScript.encode({ type: 'sh', hash }),
        address: Address(network).encode({ type: 'sh', hash }),
    };
    if (child.witnessScript)
        res.witnessScript = child.witnessScript;
    return res;
};
const OutWSH = {
    encode(from) {
        if (from.length !== 2 || from[0] !== 0 || !isBytes(from[1]))
            return;
        if (from[1].length !== 32)
            return;
        return { type: 'wsh', hash: from[1] };
    },
    decode: (to) => (to.type === 'wsh' ? [0, to.hash] : undefined),
};
const p2wsh = (child, network = NETWORK) => {
    const cs = child.script;
    if (!isBytes(cs))
        throw new Error(`Wrong script: ${typeof cs}, expected Uint8Array`);
    const hash = (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(cs);
    const script = OutScript.encode({ type: 'wsh', hash });
    checkScript(script, undefined, cs);
    return {
        type: 'wsh',
        witnessScript: cs,
        script: OutScript.encode({ type: 'wsh', hash }),
        address: Address(network).encode({ type: 'wsh', hash }),
    };
};
const OutWPKH = {
    encode(from) {
        if (from.length !== 2 || from[0] !== 0 || !isBytes(from[1]))
            return;
        if (from[1].length !== 20)
            return;
        return { type: 'wpkh', hash: from[1] };
    },
    decode: (to) => (to.type === 'wpkh' ? [0, to.hash] : undefined),
};
const p2wpkh = (publicKey, network = NETWORK) => {
    if (!isValidPubkey(publicKey, PubT.ecdsa))
        throw new Error('P2WPKH: invalid publicKey');
    if (publicKey.length === 65)
        throw new Error('P2WPKH: uncompressed public key');
    const hash = hash160(publicKey);
    return {
        type: 'wpkh',
        script: OutScript.encode({ type: 'wpkh', hash }),
        address: Address(network).encode({ type: 'wpkh', hash }),
    };
};
const OutMS = {
    encode(from) {
        const last = from.length - 1;
        if (from[last] !== 'CHECKMULTISIG')
            return;
        const m = from[0];
        const n = from[last - 1];
        if (typeof m !== 'number' || typeof n !== 'number')
            return;
        const pubkeys = from.slice(1, -2);
        if (n !== pubkeys.length)
            return;
        for (const pub of pubkeys)
            if (!isBytes(pub))
                return;
        return { type: 'ms', m, pubkeys: pubkeys }; // we don't need n, since it is the same as pubkeys
    },
    // checkmultisig(n, ..pubkeys, m)
    decode: (to) => to.type === 'ms' ? [to.m, ...to.pubkeys, to.pubkeys.length, 'CHECKMULTISIG'] : undefined,
};
const p2ms = (m, pubkeys, allowSamePubkeys = false) => {
    if (!allowSamePubkeys)
        uniqPubkey(pubkeys);
    return { type: 'ms', script: OutScript.encode({ type: 'ms', pubkeys, m }) };
};
const OutTR = {
    encode(from) {
        if (from.length !== 2 || from[0] !== 1 || !isBytes(from[1]))
            return;
        return { type: 'tr', pubkey: from[1] };
    },
    decode: (to) => (to.type === 'tr' ? [1, to.pubkey] : undefined),
};
// Helper for generating binary tree from list, with weights
function taprootListToTree(taprootList) {
    // Clone input in order to not corrupt it
    const lst = Array.from(taprootList);
    // We have at least 2 elements => can create branch
    while (lst.length >= 2) {
        // Sort: elements with smallest weight are in the end of queue
        lst.sort((a, b) => (b.weight || 1) - (a.weight || 1));
        const b = lst.pop();
        const a = lst.pop();
        const weight = (a?.weight || 1) + (b?.weight || 1);
        lst.push({
            weight,
            // Unwrap children array
            // TODO: Very hard to remove any here
            childs: [a?.childs || a, b?.childs || b],
        });
    }
    // At this point there is always 1 element in lst
    const last = lst[0];
    return (last?.childs || last);
}
function checkTaprootScript(script, internalPubKey, allowUnknownOutputs = false) {
    const out = OutScript.decode(script);
    if (out.type === 'unknown' && allowUnknownOutputs)
        return;
    if (!['tr_ns', 'tr_ms'].includes(out.type))
        throw new Error(`P2TR: invalid leaf script=${out.type}`);
    const outms = out;
    if (!allowUnknownOutputs && outms.pubkeys) {
        for (const p of outms.pubkeys) {
            if (micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(p, TAPROOT_UNSPENDABLE_KEY))
                throw new Error('Unspendable taproot key in leaf script');
            // It's likely a mistake at this point:
            // 1. p2tr(A, p2tr_ns(2, [A, B])) == p2tr(A, p2tr_pk(B)) (A or B key)
            // but will take more space and fees.
            // 2. For multi-sig p2tr(A, p2tr_ns(2, [A, B, C])) it's probably a security issue:
            // User creates 2 of 3 multisig of keys [A, B, C],
            // but key A always can spend whole output without signatures from other keys.
            // p2tr(A, p2tr_ns(2, [B, C, D])) is ok: A or (B and C) or (B and D) or (C and D)
            if (micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(p, internalPubKey)) {
                throw new Error('Using P2TR with leaf script with same key as internal key is not supported');
            }
        }
    }
}
function taprootHashTree(tree, internalPubKey, allowUnknownOutputs = false) {
    if (!tree)
        throw new Error('taprootHashTree: empty tree');
    if (Array.isArray(tree) && tree.length === 1)
        tree = tree[0];
    // Terminal node (leaf)
    if (!Array.isArray(tree)) {
        const { leafVersion: version, script: leafScript } = tree;
        // Earliest tree walk where we can validate tapScripts
        if (tree.tapLeafScript || (tree.tapMerkleRoot && !micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(tree.tapMerkleRoot, micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY)))
            throw new Error('P2TR: tapRoot leafScript cannot have tree');
        const script = typeof leafScript === 'string' ? _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.decode(leafScript) : leafScript;
        if (!isBytes(script))
            throw new Error(`checkScript: wrong script type=${script}`);
        checkTaprootScript(script, internalPubKey, allowUnknownOutputs);
        return {
            type: 'leaf',
            version,
            script,
            hash: tapLeafHash(script, version),
        };
    }
    // If tree / branch is not binary tree, convert it
    if (tree.length !== 2)
        tree = taprootListToTree(tree);
    if (tree.length !== 2)
        throw new Error('hashTree: non binary tree!');
    // branch
    // Both nodes should exist
    const left = taprootHashTree(tree[0], internalPubKey, allowUnknownOutputs);
    const right = taprootHashTree(tree[1], internalPubKey, allowUnknownOutputs);
    // We cannot swap left/right here, since it will change structure of tree
    let [lH, rH] = [left.hash, right.hash];
    if (_cmpBytes(rH, lH) === -1)
        [lH, rH] = [rH, lH];
    return { type: 'branch', left, right, hash: _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.utils.taggedHash('TapBranch', lH, rH) };
}
function taprootAddPath(tree, path = []) {
    if (!tree)
        throw new Error(`taprootAddPath: empty tree`);
    if (tree.type === 'leaf')
        return { ...tree, path };
    if (tree.type !== 'branch')
        throw new Error(`taprootAddPath: wrong type=${tree}`);
    return {
        ...tree,
        path,
        // Left element has right hash in path and otherwise
        left: taprootAddPath(tree.left, [tree.right.hash, ...path]),
        right: taprootAddPath(tree.right, [tree.left.hash, ...path]),
    };
}
function taprootWalkTree(tree) {
    if (!tree)
        throw new Error(`taprootAddPath: empty tree`);
    if (tree.type === 'leaf')
        return [tree];
    if (tree.type !== 'branch')
        throw new Error(`taprootWalkTree: wrong type=${tree}`);
    return [...taprootWalkTree(tree.left), ...taprootWalkTree(tree.right)];
}
// Another stupid decision, where lack of standard affects security.
// Multisig needs to be generated with some key.
// We are using approach from BIP 341/bitcoinjs-lib: SHA256(uncompressedDER(SECP256K1_GENERATOR_POINT))
// It is possible to switch SECP256K1_GENERATOR_POINT with some random point;
// but it's too complex to prove.
// Also used by bitcoin-core and bitcoinjs-lib
const TAPROOT_UNSPENDABLE_KEY = (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(ProjPoint.BASE.toRawBytes(false));
// Works as key OR tree.
// If we only have tree, need to add unspendable key, otherwise
// complex multisig wallet can be spent by owner of key only. See TAPROOT_UNSPENDABLE_KEY
function p2tr(internalPubKey, tree, network = NETWORK, allowUnknownOutputs = false) {
    // Unspendable
    if (!internalPubKey && !tree)
        throw new Error('p2tr: should have pubKey or scriptTree (or both)');
    const pubKey = typeof internalPubKey === 'string'
        ? _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.decode(internalPubKey)
        : internalPubKey || TAPROOT_UNSPENDABLE_KEY;
    if (!isValidPubkey(pubKey, PubT.schnorr))
        throw new Error('p2tr: non-schnorr pubkey');
    let hashedTree = tree
        ? taprootAddPath(taprootHashTree(tree, pubKey, allowUnknownOutputs))
        : undefined;
    const tapMerkleRoot = hashedTree ? hashedTree.hash : undefined;
    const [tweakedPubkey, parity] = taprootTweakPubkey(pubKey, tapMerkleRoot || micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY);
    let leaves;
    if (hashedTree) {
        leaves = taprootWalkTree(hashedTree).map((l) => ({
            ...l,
            controlBlock: TaprootControlBlock.encode({
                version: (l.version || TAP_LEAF_VERSION) + parity,
                internalKey: pubKey,
                merklePath: l.path,
            }),
        }));
    }
    let tapLeafScript;
    if (leaves) {
        tapLeafScript = leaves.map((l) => [
            TaprootControlBlock.decode(l.controlBlock),
            concat(l.script, new Uint8Array([l.version || TAP_LEAF_VERSION])),
        ]);
    }
    const res = {
        type: 'tr',
        script: OutScript.encode({ type: 'tr', pubkey: tweakedPubkey }),
        address: Address(network).encode({ type: 'tr', pubkey: tweakedPubkey }),
        // For tests
        tweakedPubkey,
        // PSBT stuff
        tapInternalKey: pubKey,
    };
    // Just in case someone would want to select a specific script
    if (leaves)
        res.leaves = leaves;
    if (tapLeafScript)
        res.tapLeafScript = tapLeafScript;
    if (tapMerkleRoot)
        res.tapMerkleRoot = tapMerkleRoot;
    return res;
}
const OutTRNS = {
    encode(from) {
        const last = from.length - 1;
        if (from[last] !== 'CHECKSIG')
            return;
        const pubkeys = [];
        // On error return, since it can be different script
        for (let i = 0; i < last; i++) {
            const elm = from[i];
            if (i & 1) {
                if (elm !== 'CHECKSIGVERIFY' || i === last - 1)
                    return;
                continue;
            }
            if (!isBytes(elm))
                return;
            pubkeys.push(elm);
        }
        return { type: 'tr_ns', pubkeys };
    },
    decode: (to) => {
        if (to.type !== 'tr_ns')
            return;
        const out = [];
        for (let i = 0; i < to.pubkeys.length - 1; i++)
            out.push(to.pubkeys[i], 'CHECKSIGVERIFY');
        out.push(to.pubkeys[to.pubkeys.length - 1], 'CHECKSIG');
        return out;
    },
};
// Returns all combinations of size M from lst
function combinations(m, list) {
    const res = [];
    if (!Array.isArray(list))
        throw new Error('combinations: lst arg should be array');
    const n = list.length;
    if (m > n)
        throw new Error('combinations: m > lst.length, no combinations possible');
    /*
    Basically works as M nested loops like:
    for (;idx[0]<lst.length;idx[0]++) for (idx[1]=idx[0]+1;idx[1]<lst.length;idx[1]++)
    but since we cannot create nested loops dynamically, we unroll it to a single loop
    */
    const idx = Array.from({ length: m }, (_, i) => i);
    const last = idx.length - 1;
    main: for (;;) {
        res.push(idx.map((i) => list[i]));
        idx[last] += 1;
        let i = last;
        // Propagate increment
        // idx[i] cannot be bigger than n-m+i, otherwise last elements in right part will overflow
        for (; i >= 0 && idx[i] > n - m + i; i--) {
            idx[i] = 0;
            // Overflow in idx[0], break
            if (i === 0)
                break main;
            idx[i - 1] += 1;
        }
        // Propagate: idx[i+1] = idx[idx]+1
        for (i += 1; i < idx.length; i++)
            idx[i] = idx[i - 1] + 1;
    }
    return res;
}
/**
 * M-of-N multi-leaf wallet via p2tr_ns. If m == n, single script is emitted.
 * Takes O(n^2) if m != n. 99-of-100 is ok, 5-of-100 is not.
 * `2-of-[A,B,C] => [A,B] | [A,C] | [B,C]`
 */
const p2tr_ns = (m, pubkeys, allowSamePubkeys = false) => {
    if (!allowSamePubkeys)
        uniqPubkey(pubkeys);
    return combinations(m, pubkeys).map((i) => ({
        type: 'tr_ns',
        script: OutScript.encode({ type: 'tr_ns', pubkeys: i }),
    }));
};
// Taproot public key (case of p2tr_ns)
const p2tr_pk = (pubkey) => p2tr_ns(1, [pubkey], undefined)[0];
const OutTRMS = {
    encode(from) {
        const last = from.length - 1;
        if (from[last] !== 'NUMEQUAL' || from[1] !== 'CHECKSIG')
            return;
        const pubkeys = [];
        const m = OpToNum(from[last - 1]);
        if (typeof m !== 'number')
            return;
        for (let i = 0; i < last - 1; i++) {
            const elm = from[i];
            if (i & 1) {
                if (elm !== (i === 1 ? 'CHECKSIG' : 'CHECKSIGADD'))
                    throw new Error('OutScript.encode/tr_ms: wrong element');
                continue;
            }
            if (!isBytes(elm))
                throw new Error('OutScript.encode/tr_ms: wrong key element');
            pubkeys.push(elm);
        }
        return { type: 'tr_ms', pubkeys, m };
    },
    decode: (to) => {
        if (to.type !== 'tr_ms')
            return;
        const out = [to.pubkeys[0], 'CHECKSIG'];
        for (let i = 1; i < to.pubkeys.length; i++)
            out.push(to.pubkeys[i], 'CHECKSIGADD');
        out.push(to.m, 'NUMEQUAL');
        return out;
    },
};
function p2tr_ms(m, pubkeys, allowSamePubkeys = false) {
    if (!allowSamePubkeys)
        uniqPubkey(pubkeys);
    return {
        type: 'tr_ms',
        script: OutScript.encode({ type: 'tr_ms', pubkeys, m }),
    };
}
const OutUnknown = {
    encode(from) {
        return { type: 'unknown', script: Script.encode(from) };
    },
    decode: (to) => to.type === 'unknown' ? Script.decode(to.script) : undefined,
};
// /Payments
const OutScripts = [
    OutPK,
    OutPKH,
    OutSH,
    OutWSH,
    OutWPKH,
    OutMS,
    OutTR,
    OutTRNS,
    OutTRMS,
    OutUnknown,
];
// TODO: we can support user supplied output scripts now
// - addOutScript
// - removeOutScript
// - We can do that as log we modify array in-place
// - Actually is very hard, since there is sign/finalize logic
const _OutScript = micro_packed__WEBPACK_IMPORTED_MODULE_1__.apply(Script, micro_packed__WEBPACK_IMPORTED_MODULE_1__.coders.match(OutScripts));
// We can validate this once, because of packed & coders
const OutScript = micro_packed__WEBPACK_IMPORTED_MODULE_1__.validate(_OutScript, (i) => {
    if (i.type === 'pk' && !isValidPubkey(i.pubkey, PubT.ecdsa))
        throw new Error('OutScript/pk: wrong key');
    if ((i.type === 'pkh' || i.type === 'sh' || i.type === 'wpkh') &&
        (!isBytes(i.hash) || i.hash.length !== 20))
        throw new Error(`OutScript/${i.type}: wrong hash`);
    if (i.type === 'wsh' && (!isBytes(i.hash) || i.hash.length !== 32))
        throw new Error(`OutScript/wsh: wrong hash`);
    if (i.type === 'tr' && (!isBytes(i.pubkey) || !isValidPubkey(i.pubkey, PubT.schnorr)))
        throw new Error('OutScript/tr: wrong taproot public key');
    if (i.type === 'ms' || i.type === 'tr_ns' || i.type === 'tr_ms')
        if (!Array.isArray(i.pubkeys))
            throw new Error('OutScript/multisig: wrong pubkeys array');
    if (i.type === 'ms') {
        const n = i.pubkeys.length;
        for (const p of i.pubkeys)
            if (!isValidPubkey(p, PubT.ecdsa))
                throw new Error('OutScript/multisig: wrong pubkey');
        if (i.m <= 0 || n > 16 || i.m > n)
            throw new Error('OutScript/multisig: invalid params');
    }
    if (i.type === 'tr_ns' || i.type === 'tr_ms') {
        for (const p of i.pubkeys)
            if (!isValidPubkey(p, PubT.schnorr))
                throw new Error(`OutScript/${i.type}: wrong pubkey`);
    }
    if (i.type === 'tr_ms') {
        const n = i.pubkeys.length;
        if (i.m <= 0 || n > 999 || i.m > n)
            throw new Error('OutScript/tr_ms: invalid params');
    }
    return i;
});
// Address
function validateWitness(version, data) {
    if (data.length < 2 || data.length > 40)
        throw new Error('Witness: invalid length');
    if (version > 16)
        throw new Error('Witness: invalid version');
    if (version === 0 && !(data.length === 20 || data.length === 32))
        throw new Error('Witness: invalid length for version');
}
function programToWitness(version, data, network = NETWORK) {
    validateWitness(version, data);
    const coder = version === 0 ? _scure_base__WEBPACK_IMPORTED_MODULE_4__.bech32 : _scure_base__WEBPACK_IMPORTED_MODULE_4__.bech32m;
    return coder.encode(network.bech32, [version].concat(coder.toWords(data)));
}
function formatKey(hashed, prefix) {
    return base58check.encode(concat(Uint8Array.from(prefix), hashed));
}
function WIF(network = NETWORK) {
    return {
        encode(privKey) {
            const compressed = concat(privKey, new Uint8Array([0x01]));
            return formatKey(compressed.subarray(0, 33), [network.wif]);
        },
        decode(wif) {
            let parsed = base58check.decode(wif);
            if (parsed[0] !== network.wif)
                throw new Error('Wrong WIF prefix');
            parsed = parsed.subarray(1);
            // Check what it is. Compressed flag?
            if (parsed.length !== 33)
                throw new Error('Wrong WIF length');
            if (parsed[32] !== 0x01)
                throw new Error('Wrong WIF postfix');
            return parsed.subarray(0, -1);
        },
    };
}
// Returns OutType, which can be used to create outscript
function Address(network = NETWORK) {
    return {
        encode(from) {
            const { type } = from;
            if (type === 'wpkh')
                return programToWitness(0, from.hash, network);
            else if (type === 'wsh')
                return programToWitness(0, from.hash, network);
            else if (type === 'tr')
                return programToWitness(1, from.pubkey, network);
            else if (type === 'pkh')
                return formatKey(from.hash, [network.pubKeyHash]);
            else if (type === 'sh')
                return formatKey(from.hash, [network.scriptHash]);
            throw new Error(`Unknown address type=${type}`);
        },
        decode(address) {
            if (address.length < 14 || address.length > 74)
                throw new Error('Invalid address length');
            // Bech32
            if (network.bech32 && address.toLowerCase().startsWith(network.bech32)) {
                let res;
                try {
                    res = _scure_base__WEBPACK_IMPORTED_MODULE_4__.bech32.decode(address);
                    if (res.words[0] !== 0)
                        throw new Error(`bech32: wrong version=${res.words[0]}`);
                }
                catch (_) {
                    // Starting from version 1 it is decoded as bech32m
                    res = _scure_base__WEBPACK_IMPORTED_MODULE_4__.bech32m.decode(address);
                    if (res.words[0] === 0)
                        throw new Error(`bech32m: wrong version=${res.words[0]}`);
                }
                if (res.prefix !== network.bech32)
                    throw new Error(`wrong bech32 prefix=${res.prefix}`);
                const [version, ...program] = res.words;
                const data = _scure_base__WEBPACK_IMPORTED_MODULE_4__.bech32.fromWords(program);
                validateWitness(version, data);
                if (version === 0 && data.length === 32)
                    return { type: 'wsh', hash: data };
                else if (version === 0 && data.length === 20)
                    return { type: 'wpkh', hash: data };
                else if (version === 1 && data.length === 32)
                    return { type: 'tr', pubkey: data };
                else
                    throw new Error('Unknown witness program');
            }
            const data = base58check.decode(address);
            if (data.length !== 21)
                throw new Error('Invalid base58 address');
            // Pay To Public Key Hash
            if (data[0] === network.pubKeyHash) {
                return { type: 'pkh', hash: data.slice(1) };
            }
            else if (data[0] === network.scriptHash) {
                return {
                    type: 'sh',
                    hash: data.slice(1),
                };
            }
            throw new Error(`Invalid address prefix=${data[0]}`);
        },
    };
}
// /Address
/**
 * Internal, exported only for backwards-compat. Use `SigHash` instead.
 * @deprecated
 */
var SignatureHash;
(function (SignatureHash) {
    SignatureHash[SignatureHash["DEFAULT"] = 0] = "DEFAULT";
    SignatureHash[SignatureHash["ALL"] = 1] = "ALL";
    SignatureHash[SignatureHash["NONE"] = 2] = "NONE";
    SignatureHash[SignatureHash["SINGLE"] = 3] = "SINGLE";
    SignatureHash[SignatureHash["ANYONECANPAY"] = 128] = "ANYONECANPAY";
})(SignatureHash || (SignatureHash = {}));
var SigHash;
(function (SigHash) {
    SigHash[SigHash["DEFAULT"] = 0] = "DEFAULT";
    SigHash[SigHash["ALL"] = 1] = "ALL";
    SigHash[SigHash["NONE"] = 2] = "NONE";
    SigHash[SigHash["SINGLE"] = 3] = "SINGLE";
    SigHash[SigHash["DEFAULT_ANYONECANPAY"] = 128] = "DEFAULT_ANYONECANPAY";
    SigHash[SigHash["ALL_ANYONECANPAY"] = 129] = "ALL_ANYONECANPAY";
    SigHash[SigHash["NONE_ANYONECANPAY"] = 130] = "NONE_ANYONECANPAY";
    SigHash[SigHash["SINGLE_ANYONECANPAY"] = 131] = "SINGLE_ANYONECANPAY";
})(SigHash || (SigHash = {}));
function validateSigHash(s) {
    if (typeof s !== 'number' || typeof SigHash[s] !== 'string')
        throw new Error(`Invalid SigHash=${s}`);
    return s;
}
function unpackSighash(hashType) {
    const masked = hashType & 0b0011111;
    return {
        isAny: !!(hashType & SignatureHash.ANYONECANPAY),
        isNone: masked === SignatureHash.NONE,
        isSingle: masked === SignatureHash.SINGLE,
    };
}
const _sortPubkeys = (pubkeys) => Array.from(pubkeys).sort(_cmpBytes);
// Force check index/txid/sequence
function inputBeforeSign(i) {
    if (i.txid === undefined || i.index === undefined)
        throw new Error('Transaction/input: txid and index required');
    return {
        txid: i.txid,
        index: i.index,
        sequence: def(i.sequence, DEFAULT_SEQUENCE),
        finalScriptSig: def(i.finalScriptSig, micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY),
    };
}
function cleanFinalInput(i) {
    for (const _k in i) {
        const k = _k;
        if (!PSBTInputFinalKeys.includes(k))
            delete i[k];
    }
}
// Force check amount/script
function outputBeforeSign(i) {
    if (i.script === undefined || i.amount === undefined)
        throw new Error('Transaction/output: script and amount required');
    return { script: i.script, amount: i.amount };
}
const TAP_LEAF_VERSION = 0xc0;
const tapLeafHash = (script, version = TAP_LEAF_VERSION) => _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.utils.taggedHash('TapLeaf', new Uint8Array([version]), VarBytes.encode(script));
function getTaprootKeys(privKey, pubKey, internalKey, merkleRoot = micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY) {
    if (micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(internalKey, pubKey)) {
        privKey = taprootTweakPrivKey(privKey, merkleRoot);
        pubKey = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.getPublicKey(privKey);
    }
    return { privKey, pubKey };
}
const toStr = {}.toString;
function validateOpts(opts) {
    if (opts !== undefined && toStr.call(opts) !== '[object Object]')
        throw new Error(`Wrong object type for transaction options: ${opts}`);
    const _opts = {
        ...opts,
        // Defaults
        version: def(opts.version, DEFAULT_VERSION),
        lockTime: def(opts.lockTime, 0),
        PSBTVersion: def(opts.PSBTVersion, 0),
    };
    if (typeof _opts.allowUnknowInput !== 'undefined')
        opts.allowUnknownInputs = _opts.allowUnknowInput;
    if (typeof _opts.allowUnknowOutput !== 'undefined')
        opts.allowUnknownOutputs = _opts.allowUnknowOutput;
    // 0 and -1 happens in tests
    if (![-1, 0, 1, 2].includes(_opts.version))
        throw new Error(`Unknown version: ${_opts.version}`);
    if (typeof _opts.lockTime !== 'number')
        throw new Error('Transaction lock time should be number');
    micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(_opts.lockTime); // Additional range checks that lockTime
    // There is no PSBT v1, and any new version will probably have fields which we don't know how to parse, which
    // can lead to constructing broken transactions
    if (_opts.PSBTVersion !== 0 && _opts.PSBTVersion !== 2)
        throw new Error(`Unknown PSBT version ${_opts.PSBTVersion}`);
    // Flags
    for (const k of [
        'allowUnknownOutputs',
        'allowUnknownInputs',
        'disableScriptCheck',
        'bip174jsCompat',
        'allowLegacyWitnessUtxo',
        'lowR',
    ]) {
        const v = _opts[k];
        if (v === undefined)
            continue; // optional
        if (typeof v !== 'boolean')
            throw new Error(`Transation options wrong type: ${k}=${v} (${typeof v})`);
    }
    return Object.freeze(_opts);
}
// Normalizes input
function getPrevOut(input) {
    if (input.nonWitnessUtxo) {
        if (input.index === undefined)
            throw new Error('Unknown input index');
        return input.nonWitnessUtxo.outputs[input.index];
    }
    else if (input.witnessUtxo)
        return input.witnessUtxo;
    else
        throw new Error('Cannot find previous output info');
}
function normalizeInput(i, cur, allowedFields, disableScriptCheck = false) {
    let { nonWitnessUtxo, txid } = i;
    // String support for common fields. We usually prefer Uint8Array to avoid errors
    // like hex looking string accidentally passed, however, in case of nonWitnessUtxo
    // it is better to expect string, since constructing this complex object will be
    // difficult for user
    if (typeof nonWitnessUtxo === 'string')
        nonWitnessUtxo = _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.decode(nonWitnessUtxo);
    if (isBytes(nonWitnessUtxo))
        nonWitnessUtxo = RawTx.decode(nonWitnessUtxo);
    if (!('nonWitnessUtxo' in i) && nonWitnessUtxo === undefined)
        nonWitnessUtxo = cur?.nonWitnessUtxo;
    if (typeof txid === 'string')
        txid = _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.decode(txid);
    // TODO: if we have nonWitnessUtxo, we can extract txId from here
    if (txid === undefined)
        txid = cur?.txid;
    let res = { ...cur, ...i, nonWitnessUtxo, txid };
    if (!('nonWitnessUtxo' in i) && res.nonWitnessUtxo === undefined)
        delete res.nonWitnessUtxo;
    if (res.sequence === undefined)
        res.sequence = DEFAULT_SEQUENCE;
    if (res.tapMerkleRoot === null)
        delete res.tapMerkleRoot;
    res = mergeKeyMap(PSBTInput, res, cur, allowedFields);
    PSBTInputCoder.encode(res); // Validates that everything is correct at this point
    let prevOut;
    if (res.nonWitnessUtxo && res.index !== undefined)
        prevOut = res.nonWitnessUtxo.outputs[res.index];
    else if (res.witnessUtxo)
        prevOut = res.witnessUtxo;
    if (prevOut && !disableScriptCheck)
        checkScript(prevOut && prevOut.script, res.redeemScript, res.witnessScript);
    return res;
}
function getInputType(input, allowLegacyWitnessUtxo = false) {
    let txType = 'legacy';
    let defaultSighash = SignatureHash.ALL;
    const prevOut = getPrevOut(input);
    const first = OutScript.decode(prevOut.script);
    let type = first.type;
    let cur = first;
    const stack = [first];
    if (first.type === 'tr') {
        defaultSighash = SignatureHash.DEFAULT;
        return {
            txType: 'taproot',
            type: 'tr',
            last: first,
            lastScript: prevOut.script,
            defaultSighash,
            sighash: input.sighashType || defaultSighash,
        };
    }
    else {
        if (first.type === 'wpkh' || first.type === 'wsh')
            txType = 'segwit';
        if (first.type === 'sh') {
            if (!input.redeemScript)
                throw new Error('inputType: sh without redeemScript');
            let child = OutScript.decode(input.redeemScript);
            if (child.type === 'wpkh' || child.type === 'wsh')
                txType = 'segwit';
            stack.push(child);
            cur = child;
            type += `-${child.type}`;
        }
        // wsh can be inside sh
        if (cur.type === 'wsh') {
            if (!input.witnessScript)
                throw new Error('inputType: wsh without witnessScript');
            let child = OutScript.decode(input.witnessScript);
            if (child.type === 'wsh')
                txType = 'segwit';
            stack.push(child);
            cur = child;
            type += `-${child.type}`;
        }
        const last = stack[stack.length - 1];
        if (last.type === 'sh' || last.type === 'wsh')
            throw new Error('inputType: sh/wsh cannot be terminal type');
        const lastScript = OutScript.encode(last);
        const res = {
            type,
            txType,
            last,
            lastScript,
            defaultSighash,
            sighash: input.sighashType || defaultSighash,
        };
        if (txType === 'legacy' && !allowLegacyWitnessUtxo && !input.nonWitnessUtxo) {
            throw new Error(`Transaction/sign: legacy input without nonWitnessUtxo, can result in attack that forces paying higher fees. Pass allowLegacyWitnessUtxo=true, if you sure`);
        }
        return res;
    }
}
const toVsize = (weight) => Math.ceil(weight / 4);
class Transaction {
    constructor(opts = {}) {
        this.global = {};
        this.inputs = []; // use getInput()
        this.outputs = []; // use getOutput()
        const _opts = (this.opts = validateOpts(opts));
        // Merge with global structure of PSBTv2
        if (_opts.lockTime !== DEFAULT_LOCKTIME)
            this.global.fallbackLocktime = _opts.lockTime;
        this.global.txVersion = _opts.version;
    }
    // Import
    static fromRaw(raw, opts = {}) {
        const parsed = RawTx.decode(raw);
        const tx = new Transaction({ ...opts, version: parsed.version, lockTime: parsed.lockTime });
        for (const o of parsed.outputs)
            tx.addOutput(o);
        tx.outputs = parsed.outputs;
        tx.inputs = parsed.inputs;
        if (parsed.witnesses) {
            for (let i = 0; i < parsed.witnesses.length; i++)
                tx.inputs[i].finalScriptWitness = parsed.witnesses[i];
        }
        return tx;
    }
    // PSBT
    static fromPSBT(psbt, opts = {}) {
        let parsed;
        try {
            parsed = RawPSBTV0.decode(psbt);
        }
        catch (e0) {
            try {
                parsed = RawPSBTV2.decode(psbt);
            }
            catch (e2) {
                // Throw error for v0 parsing, since it popular, otherwise it would be shadowed by v2 error
                throw e0;
            }
        }
        const PSBTVersion = parsed.global.version || 0;
        if (PSBTVersion !== 0 && PSBTVersion !== 2)
            throw new Error(`Wrong PSBT version=${PSBTVersion}`);
        const unsigned = parsed.global.unsignedTx;
        const version = PSBTVersion === 0 ? unsigned?.version : parsed.global.txVersion;
        const lockTime = PSBTVersion === 0 ? unsigned?.lockTime : parsed.global.fallbackLocktime;
        const tx = new Transaction({ ...opts, version, lockTime, PSBTVersion });
        // We need slice here, because otherwise
        const inputCount = PSBTVersion === 0 ? unsigned?.inputs.length : parsed.global.inputCount;
        tx.inputs = parsed.inputs.slice(0, inputCount).map((i, j) => ({
            finalScriptSig: micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY,
            ...parsed.global.unsignedTx?.inputs[j],
            ...i,
        }));
        const outputCount = PSBTVersion === 0 ? unsigned?.outputs.length : parsed.global.outputCount;
        tx.outputs = parsed.outputs.slice(0, outputCount).map((i, j) => ({
            ...i,
            ...parsed.global.unsignedTx?.outputs[j],
        }));
        tx.global = { ...parsed.global, txVersion: version }; // just in case proprietary/unknown fields
        if (lockTime !== DEFAULT_LOCKTIME)
            tx.global.fallbackLocktime = lockTime;
        return tx;
    }
    toPSBT(PSBTVersion = this.opts.PSBTVersion) {
        if (PSBTVersion !== 0 && PSBTVersion !== 2)
            throw new Error(`Wrong PSBT version=${PSBTVersion}`);
        const inputs = this.inputs.map((i) => cleanPSBTFields(PSBTVersion, PSBTInput, i));
        for (const inp of inputs) {
            // Don't serialize empty fields
            if (inp.partialSig && !inp.partialSig.length)
                delete inp.partialSig;
            if (inp.finalScriptSig && !inp.finalScriptSig.length)
                delete inp.finalScriptSig;
            if (inp.finalScriptWitness && !inp.finalScriptWitness.length)
                delete inp.finalScriptWitness;
        }
        const outputs = this.outputs.map((i) => cleanPSBTFields(PSBTVersion, PSBTOutput, i));
        const global = { ...this.global };
        if (PSBTVersion === 0) {
            global.unsignedTx = RawTx.decode(this.unsignedTx);
            delete global.fallbackLocktime;
            delete global.txVersion;
        }
        else {
            global.version = PSBTVersion;
            global.txVersion = this.version;
            global.inputCount = this.inputs.length;
            global.outputCount = this.outputs.length;
            if (global.fallbackLocktime && global.fallbackLocktime === DEFAULT_LOCKTIME)
                delete global.fallbackLocktime;
        }
        if (this.opts.bip174jsCompat) {
            if (!inputs.length)
                inputs.push({});
            if (!outputs.length)
                outputs.push({});
        }
        return (PSBTVersion === 0 ? RawPSBTV0 : RawPSBTV2).encode({
            global,
            inputs,
            outputs,
        });
    }
    // BIP370 lockTime (https://github.com/bitcoin/bips/blob/master/bip-0370.mediawiki#determining-lock-time)
    get lockTime() {
        let height = DEFAULT_LOCKTIME;
        let heightCnt = 0;
        let time = DEFAULT_LOCKTIME;
        let timeCnt = 0;
        for (const i of this.inputs) {
            if (i.requiredHeightLocktime) {
                height = Math.max(height, i.requiredHeightLocktime);
                heightCnt++;
            }
            if (i.requiredTimeLocktime) {
                time = Math.max(time, i.requiredTimeLocktime);
                timeCnt++;
            }
        }
        if (heightCnt && heightCnt >= timeCnt)
            return height;
        if (time !== DEFAULT_LOCKTIME)
            return time;
        return this.global.fallbackLocktime || DEFAULT_LOCKTIME;
    }
    get version() {
        // Should be not possible
        if (this.global.txVersion === undefined)
            throw new Error('No global.txVersion');
        return this.global.txVersion;
    }
    inputStatus(idx) {
        this.checkInputIdx(idx);
        const input = this.inputs[idx];
        // Finalized
        if (input.finalScriptSig && input.finalScriptSig.length)
            return 'finalized';
        if (input.finalScriptWitness && input.finalScriptWitness.length)
            return 'finalized';
        // Signed taproot
        if (input.tapKeySig)
            return 'signed';
        if (input.tapScriptSig && input.tapScriptSig.length)
            return 'signed';
        // Signed
        if (input.partialSig && input.partialSig.length)
            return 'signed';
        return 'unsigned';
    }
    // Cannot replace unpackSighash, tests rely on very generic implemenetation with signing inputs outside of range
    // We will lose some vectors -> smaller test coverage of preimages (very important!)
    inputSighash(idx) {
        this.checkInputIdx(idx);
        const sighash = getInputType(this.inputs[idx], this.opts.allowLegacyWitnessUtxo).sighash;
        // ALL or DEFAULT -- everything signed
        // NONE           -- all inputs + no outputs
        // SINGLE         -- all inputs + output with same index
        // ALL + ANYONE   -- specific input + all outputs
        // NONE + ANYONE  -- specific input + no outputs
        // SINGLE         -- specific inputs + output with same index
        const sigOutputs = sighash === SignatureHash.DEFAULT ? SignatureHash.ALL : sighash & 0b11;
        const sigInputs = sighash & SignatureHash.ANYONECANPAY;
        return { sigInputs, sigOutputs };
    }
    // Very nice for debug purposes, but slow. If there is too much inputs/outputs to add, will be quadratic.
    // Some cache will be nice, but there chance to have bugs with cache invalidation
    signStatus() {
        // if addInput or addOutput is not possible, then all inputs or outputs are signed
        let addInput = true, addOutput = true;
        let inputs = [], outputs = [];
        for (let idx = 0; idx < this.inputs.length; idx++) {
            const status = this.inputStatus(idx);
            // Unsigned input doesn't affect anything
            if (status === 'unsigned')
                continue;
            const { sigInputs, sigOutputs } = this.inputSighash(idx);
            // Input type
            if (sigInputs === SignatureHash.ANYONECANPAY)
                inputs.push(idx);
            else
                addInput = false;
            // Output type
            if (sigOutputs === SignatureHash.ALL)
                addOutput = false;
            else if (sigOutputs === SignatureHash.SINGLE)
                outputs.push(idx);
            else if (sigOutputs === SignatureHash.NONE) {
                // Doesn't affect any outputs at all
            }
            else
                throw new Error(`Wrong signature hash output type: ${sigOutputs}`);
        }
        return { addInput, addOutput, inputs, outputs };
    }
    get isFinal() {
        for (let idx = 0; idx < this.inputs.length; idx++)
            if (this.inputStatus(idx) !== 'finalized')
                return false;
        return true;
    }
    // Info utils
    get hasWitnesses() {
        let out = false;
        for (const i of this.inputs)
            if (i.finalScriptWitness && i.finalScriptWitness.length)
                out = true;
        return out;
    }
    // https://en.bitcoin.it/wiki/Weight_units
    get weight() {
        if (!this.isFinal)
            throw new Error('Transaction is not finalized');
        let out = 32;
        // Outputs
        const outputs = this.outputs.map(outputBeforeSign);
        out += 4 * CompactSizeLen.encode(this.outputs.length).length;
        for (const o of outputs)
            out += 32 + 4 * VarBytes.encode(o.script).length;
        // Inputs
        if (this.hasWitnesses)
            out += 2;
        out += 4 * CompactSizeLen.encode(this.inputs.length).length;
        for (const i of this.inputs) {
            out += 160 + 4 * VarBytes.encode(i.finalScriptSig || micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY).length;
            if (this.hasWitnesses && i.finalScriptWitness)
                out += RawWitness.encode(i.finalScriptWitness).length;
        }
        return out;
    }
    get vsize() {
        return toVsize(this.weight);
    }
    toBytes(withScriptSig = false, withWitness = false) {
        return RawTx.encode({
            version: this.version,
            lockTime: this.lockTime,
            inputs: this.inputs.map(inputBeforeSign).map((i) => ({
                ...i,
                finalScriptSig: (withScriptSig && i.finalScriptSig) || micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY,
            })),
            outputs: this.outputs.map(outputBeforeSign),
            witnesses: this.inputs.map((i) => i.finalScriptWitness || []),
            segwitFlag: withWitness && this.hasWitnesses,
        });
    }
    get unsignedTx() {
        return this.toBytes(false, false);
    }
    get hex() {
        return _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(this.toBytes(true, this.hasWitnesses));
    }
    get hash() {
        if (!this.isFinal)
            throw new Error('Transaction is not finalized');
        return _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(sha256x2(this.toBytes(true)));
    }
    get id() {
        if (!this.isFinal)
            throw new Error('Transaction is not finalized');
        return _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.encode(sha256x2(this.toBytes(true)).reverse());
    }
    // Input stuff
    checkInputIdx(idx) {
        if (!Number.isSafeInteger(idx) || 0 > idx || idx >= this.inputs.length)
            throw new Error(`Wrong input index=${idx}`);
    }
    getInput(idx) {
        this.checkInputIdx(idx);
        return cloneDeep(this.inputs[idx]);
    }
    get inputsLength() {
        return this.inputs.length;
    }
    // Modification
    addInput(input, _ignoreSignStatus = false) {
        if (!_ignoreSignStatus && !this.signStatus().addInput)
            throw new Error('Tx has signed inputs, cannot add new one');
        this.inputs.push(normalizeInput(input, undefined, undefined, this.opts.disableScriptCheck));
        return this.inputs.length - 1;
    }
    updateInput(idx, input, _ignoreSignStatus = false) {
        this.checkInputIdx(idx);
        let allowedFields = undefined;
        if (!_ignoreSignStatus) {
            const status = this.signStatus();
            if (!status.addInput || status.inputs.includes(idx))
                allowedFields = PSBTInputUnsignedKeys;
        }
        this.inputs[idx] = normalizeInput(input, this.inputs[idx], allowedFields, this.opts.disableScriptCheck);
    }
    // Output stuff
    checkOutputIdx(idx) {
        if (!Number.isSafeInteger(idx) || 0 > idx || idx >= this.outputs.length)
            throw new Error(`Wrong output index=${idx}`);
    }
    getOutput(idx) {
        this.checkOutputIdx(idx);
        return cloneDeep(this.outputs[idx]);
    }
    get outputsLength() {
        return this.outputs.length;
    }
    normalizeOutput(o, cur, allowedFields) {
        let { amount, script } = o;
        if (amount === undefined)
            amount = cur?.amount;
        if (typeof amount !== 'bigint')
            throw new Error('amount must be bigint sats');
        if (typeof script === 'string')
            script = _scure_base__WEBPACK_IMPORTED_MODULE_4__.hex.decode(script);
        if (script === undefined)
            script = cur?.script;
        let res = { ...cur, ...o, amount, script };
        if (res.amount === undefined)
            delete res.amount;
        res = mergeKeyMap(PSBTOutput, res, cur, allowedFields);
        PSBTOutputCoder.encode(res);
        if (res.script &&
            !this.opts.allowUnknownOutputs &&
            OutScript.decode(res.script).type === 'unknown') {
            throw new Error('Transaction/output: unknown output script type, there is a chance that input is unspendable. Pass allowUnknownOutputs=true, if you sure');
        }
        if (!this.opts.disableScriptCheck)
            checkScript(res.script, res.redeemScript, res.witnessScript);
        return res;
    }
    addOutput(o, _ignoreSignStatus = false) {
        if (!_ignoreSignStatus && !this.signStatus().addOutput)
            throw new Error('Tx has signed outputs, cannot add new one');
        this.outputs.push(this.normalizeOutput(o));
        return this.outputs.length - 1;
    }
    updateOutput(idx, output, _ignoreSignStatus = false) {
        this.checkOutputIdx(idx);
        let allowedFields = undefined;
        if (!_ignoreSignStatus) {
            const status = this.signStatus();
            if (!status.addOutput || status.outputs.includes(idx))
                allowedFields = PSBTOutputUnsignedKeys;
        }
        this.outputs[idx] = this.normalizeOutput(output, this.outputs[idx], allowedFields);
    }
    addOutputAddress(address, amount, network = NETWORK) {
        return this.addOutput({ script: OutScript.encode(Address(network).decode(address)), amount });
    }
    // Utils
    get fee() {
        let res = 0n;
        for (const i of this.inputs) {
            const prevOut = getPrevOut(i);
            if (!prevOut)
                throw new Error('Empty input amount');
            res += prevOut.amount;
        }
        const outputs = this.outputs.map(outputBeforeSign);
        for (const o of outputs)
            res -= o.amount;
        return res;
    }
    // Signing
    // Based on https://github.com/bitcoin/bitcoin/blob/5871b5b5ab57a0caf9b7514eb162c491c83281d5/test/functional/test_framework/script.py#L624
    // There is optimization opportunity to re-use hashes for multiple inputs for witness v0/v1,
    // but we are trying to be less complicated for audit purpose for now.
    preimageLegacy(idx, prevOutScript, hashType) {
        const { isAny, isNone, isSingle } = unpackSighash(hashType);
        if (idx < 0 || !Number.isSafeInteger(idx))
            throw new Error(`Invalid input idx=${idx}`);
        if ((isSingle && idx >= this.outputs.length) || idx >= this.inputs.length)
            return micro_packed__WEBPACK_IMPORTED_MODULE_1__.U256BE.encode(1n);
        prevOutScript = Script.encode(Script.decode(prevOutScript).filter((i) => i !== 'CODESEPARATOR'));
        let inputs = this.inputs
            .map(inputBeforeSign)
            .map((input, inputIdx) => ({
            ...input,
            finalScriptSig: inputIdx === idx ? prevOutScript : micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY,
        }));
        if (isAny)
            inputs = [inputs[idx]];
        else if (isNone || isSingle) {
            inputs = inputs.map((input, inputIdx) => ({
                ...input,
                sequence: inputIdx === idx ? input.sequence : 0,
            }));
        }
        let outputs = this.outputs.map(outputBeforeSign);
        if (isNone)
            outputs = [];
        else if (isSingle) {
            outputs = outputs.slice(0, idx).fill(EMPTY_OUTPUT).concat([outputs[idx]]);
        }
        const tmpTx = RawTx.encode({
            lockTime: this.lockTime,
            version: this.version,
            segwitFlag: false,
            inputs,
            outputs,
        });
        return sha256x2(tmpTx, micro_packed__WEBPACK_IMPORTED_MODULE_1__.I32LE.encode(hashType));
    }
    preimageWitnessV0(idx, prevOutScript, hashType, amount) {
        const { isAny, isNone, isSingle } = unpackSighash(hashType);
        let inputHash = EMPTY32;
        let sequenceHash = EMPTY32;
        let outputHash = EMPTY32;
        const inputs = this.inputs.map(inputBeforeSign);
        const outputs = this.outputs.map(outputBeforeSign);
        if (!isAny)
            inputHash = sha256x2(...inputs.map(TxHashIdx.encode));
        if (!isAny && !isSingle && !isNone)
            sequenceHash = sha256x2(...inputs.map((i) => micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(i.sequence)));
        if (!isSingle && !isNone) {
            outputHash = sha256x2(...outputs.map(RawOutput.encode));
        }
        else if (isSingle && idx < outputs.length)
            outputHash = sha256x2(RawOutput.encode(outputs[idx]));
        const input = inputs[idx];
        return sha256x2(micro_packed__WEBPACK_IMPORTED_MODULE_1__.I32LE.encode(this.version), inputHash, sequenceHash, micro_packed__WEBPACK_IMPORTED_MODULE_1__.bytes(32, true).encode(input.txid), micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(input.index), VarBytes.encode(prevOutScript), micro_packed__WEBPACK_IMPORTED_MODULE_1__.U64LE.encode(amount), micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(input.sequence), outputHash, micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(this.lockTime), micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(hashType));
    }
    preimageWitnessV1(idx, prevOutScript, hashType, amount, codeSeparator = -1, leafScript, leafVer = 0xc0, annex) {
        if (!Array.isArray(amount) || this.inputs.length !== amount.length)
            throw new Error(`Invalid amounts array=${amount}`);
        if (!Array.isArray(prevOutScript) || this.inputs.length !== prevOutScript.length)
            throw new Error(`Invalid prevOutScript array=${prevOutScript}`);
        const out = [
            micro_packed__WEBPACK_IMPORTED_MODULE_1__.U8.encode(0),
            micro_packed__WEBPACK_IMPORTED_MODULE_1__.U8.encode(hashType), // U8 sigHash
            micro_packed__WEBPACK_IMPORTED_MODULE_1__.I32LE.encode(this.version),
            micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(this.lockTime),
        ];
        const outType = hashType === SignatureHash.DEFAULT ? SignatureHash.ALL : hashType & 0b11;
        const inType = hashType & SignatureHash.ANYONECANPAY;
        const inputs = this.inputs.map(inputBeforeSign);
        const outputs = this.outputs.map(outputBeforeSign);
        if (inType !== SignatureHash.ANYONECANPAY) {
            out.push(...[
                inputs.map(TxHashIdx.encode),
                amount.map(micro_packed__WEBPACK_IMPORTED_MODULE_1__.U64LE.encode),
                prevOutScript.map(VarBytes.encode),
                inputs.map((i) => micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(i.sequence)),
            ].map((i) => (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(concat(...i))));
        }
        if (outType === SignatureHash.ALL) {
            out.push((0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(concat(...outputs.map(RawOutput.encode))));
        }
        const spendType = (annex ? 1 : 0) | (leafScript ? 2 : 0);
        out.push(new Uint8Array([spendType]));
        if (inType === SignatureHash.ANYONECANPAY) {
            const inp = inputs[idx];
            out.push(TxHashIdx.encode(inp), micro_packed__WEBPACK_IMPORTED_MODULE_1__.U64LE.encode(amount[idx]), VarBytes.encode(prevOutScript[idx]), micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(inp.sequence));
        }
        else
            out.push(micro_packed__WEBPACK_IMPORTED_MODULE_1__.U32LE.encode(idx));
        if (spendType & 1)
            out.push((0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(VarBytes.encode(annex || micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY)));
        if (outType === SignatureHash.SINGLE)
            out.push(idx < outputs.length ? (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(RawOutput.encode(outputs[idx])) : EMPTY32);
        if (leafScript)
            out.push(tapLeafHash(leafScript, leafVer), micro_packed__WEBPACK_IMPORTED_MODULE_1__.U8.encode(0), micro_packed__WEBPACK_IMPORTED_MODULE_1__.I32LE.encode(codeSeparator));
        return _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.utils.taggedHash('TapSighash', ...out);
    }
    // Signer can be privateKey OR instance of bip32 HD stuff
    signIdx(privateKey, idx, allowedSighash, _auxRand) {
        this.checkInputIdx(idx);
        const input = this.inputs[idx];
        const inputType = getInputType(input, this.opts.allowLegacyWitnessUtxo);
        // Handle BIP32 HDKey
        if (!isBytes(privateKey)) {
            if (!input.bip32Derivation || !input.bip32Derivation.length)
                throw new Error('bip32Derivation: empty');
            const signers = input.bip32Derivation
                .filter((i) => i[1].fingerprint == privateKey.fingerprint)
                .map(([pubKey, { path }]) => {
                let s = privateKey;
                for (const i of path)
                    s = s.deriveChild(i);
                if (!micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(s.publicKey, pubKey))
                    throw new Error('bip32Derivation: wrong pubKey');
                if (!s.privateKey)
                    throw new Error('bip32Derivation: no privateKey');
                return s;
            });
            if (!signers.length)
                throw new Error(`bip32Derivation: no items with fingerprint=${privateKey.fingerprint}`);
            let signed = false;
            for (const s of signers)
                if (this.signIdx(s.privateKey, idx))
                    signed = true;
            return signed;
        }
        // Sighash checks
        // Just for compat with bitcoinjs-lib, so users won't face unexpected behaviour.
        if (!allowedSighash)
            allowedSighash = [inputType.defaultSighash];
        else
            allowedSighash.forEach(validateSigHash);
        const sighash = inputType.sighash;
        if (!allowedSighash.includes(sighash)) {
            throw new Error(`Input with not allowed sigHash=${sighash}. Allowed: ${allowedSighash.join(', ')}`);
        }
        // It is possible to sign these inputs for legacy/segwit v0 (but no taproot!),
        // however this was because of bug in bitcoin-core, which remains here because of consensus.
        // If this is absolutely neccessary for your case, please open issue.
        // We disable it to avoid complicated workflow where SINGLE will block adding new outputs
        const { sigOutputs } = this.inputSighash(idx);
        if (sigOutputs === SignatureHash.SINGLE && idx >= this.outputs.length) {
            throw new Error(`Input with sighash SINGLE, but there is no output with corresponding index=${idx}`);
        }
        // Actual signing
        // Taproot
        const prevOut = getPrevOut(input);
        if (inputType.txType === 'taproot') {
            if (input.tapBip32Derivation)
                throw new Error('tapBip32Derivation unsupported');
            const prevOuts = this.inputs.map(getPrevOut);
            const prevOutScript = prevOuts.map((i) => i.script);
            const amount = prevOuts.map((i) => i.amount);
            let signed = false;
            let schnorrPub = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.getPublicKey(privateKey);
            let merkleRoot = input.tapMerkleRoot || micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
            if (input.tapInternalKey) {
                // internal + tweak = tweaked key
                // if internal key == current public key, we need to tweak private key,
                // otherwise sign as is. bitcoinjs implementation always wants tweaked
                // priv key to be provided
                const { pubKey, privKey } = getTaprootKeys(privateKey, schnorrPub, input.tapInternalKey, merkleRoot);
                const [taprootPubKey, _] = taprootTweakPubkey(input.tapInternalKey, merkleRoot);
                if (micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(taprootPubKey, pubKey)) {
                    const hash = this.preimageWitnessV1(idx, prevOutScript, sighash, amount);
                    const sig = concat(_noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.sign(hash, privKey, _auxRand), sighash !== SignatureHash.DEFAULT ? new Uint8Array([sighash]) : micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY);
                    this.updateInput(idx, { tapKeySig: sig }, true);
                    signed = true;
                }
            }
            if (input.tapLeafScript) {
                input.tapScriptSig = input.tapScriptSig || [];
                for (const [_, _script] of input.tapLeafScript) {
                    const script = _script.subarray(0, -1);
                    const scriptDecoded = Script.decode(script);
                    const ver = _script[_script.length - 1];
                    const hash = tapLeafHash(script, ver);
                    // NOTE: no need to tweak internal key here, since we don't support nested p2tr
                    const pos = scriptDecoded.findIndex((i) => isBytes(i) && micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(i, schnorrPub));
                    // Skip if there is no public key in tapLeafScript
                    if (pos === -1)
                        continue;
                    const msg = this.preimageWitnessV1(idx, prevOutScript, sighash, amount, undefined, script, ver);
                    const sig = concat(_noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.sign(msg, privateKey, _auxRand), sighash !== SignatureHash.DEFAULT ? new Uint8Array([sighash]) : micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY);
                    this.updateInput(idx, { tapScriptSig: [[{ pubKey: schnorrPub, leafHash: hash }, sig]] }, true);
                    signed = true;
                }
            }
            if (!signed)
                throw new Error('No taproot scripts signed');
            return true;
        }
        else {
            // only compressed keys are supported for now
            const pubKey = _pubECDSA(privateKey);
            // TODO: replace with explicit checks
            // Check if script has public key or its has inside
            let hasPubkey = false;
            const pubKeyHash = hash160(pubKey);
            for (const i of Script.decode(inputType.lastScript)) {
                if (isBytes(i) && (micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(i, pubKey) || micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(i, pubKeyHash)))
                    hasPubkey = true;
            }
            if (!hasPubkey)
                throw new Error(`Input script doesn't have pubKey: ${inputType.lastScript}`);
            let hash;
            if (inputType.txType === 'legacy') {
                hash = this.preimageLegacy(idx, inputType.lastScript, sighash);
            }
            else if (inputType.txType === 'segwit') {
                let script = inputType.lastScript;
                // If wpkh OR sh-wpkh, wsh-wpkh is impossible, so looks ok
                if (inputType.last.type === 'wpkh')
                    script = OutScript.encode({ type: 'pkh', hash: inputType.last.hash });
                hash = this.preimageWitnessV0(idx, script, sighash, prevOut.amount);
            }
            else
                throw new Error(`Transaction/sign: unknown tx type: ${inputType.txType}`);
            const sig = signECDSA(hash, privateKey, this.opts.lowR);
            this.updateInput(idx, {
                partialSig: [[pubKey, concat(sig, new Uint8Array([sighash]))]],
            }, true);
        }
        return true;
    }
    // This is bad API. Will work if user creates and signs tx, but if
    // there is some complex workflow with exchanging PSBT and signing them,
    // then it is better to validate which output user signs. How could a better API look like?
    // Example: user adds input, sends to another party, then signs received input (mixer etc),
    // another user can add different input for same key and user will sign it.
    // Even worse: another user can add bip32 derivation, and spend money from different address.
    // Better api: signIdx
    sign(privateKey, allowedSighash, _auxRand) {
        let num = 0;
        for (let i = 0; i < this.inputs.length; i++) {
            try {
                if (this.signIdx(privateKey, i, allowedSighash, _auxRand))
                    num++;
            }
            catch (e) { }
        }
        if (!num)
            throw new Error('No inputs signed');
        return num;
    }
    finalizeIdx(idx) {
        this.checkInputIdx(idx);
        if (this.fee < 0n)
            throw new Error('Outputs spends more than inputs amount');
        const input = this.inputs[idx];
        const inputType = getInputType(input, this.opts.allowLegacyWitnessUtxo);
        // Taproot finalize
        if (inputType.txType === 'taproot') {
            if (input.tapKeySig)
                input.finalScriptWitness = [input.tapKeySig];
            else if (input.tapLeafScript && input.tapScriptSig) {
                // Sort leafs by control block length.
                const leafs = input.tapLeafScript.sort((a, b) => TaprootControlBlock.encode(a[0]).length - TaprootControlBlock.encode(b[0]).length);
                for (const [cb, _script] of leafs) {
                    // Last byte is version
                    const script = _script.slice(0, -1);
                    const ver = _script[_script.length - 1];
                    const outScript = OutScript.decode(script);
                    const hash = tapLeafHash(script, ver);
                    const scriptSig = input.tapScriptSig.filter((i) => micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(i[0].leafHash, hash));
                    let signatures = [];
                    if (outScript.type === 'tr_ms') {
                        const m = outScript.m;
                        const pubkeys = outScript.pubkeys;
                        let added = 0;
                        for (const pub of pubkeys) {
                            const sigIdx = scriptSig.findIndex((i) => micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(i[0].pubKey, pub));
                            // Should have exact amount of signatures (more -- will fail)
                            if (added === m || sigIdx === -1) {
                                signatures.push(micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY);
                                continue;
                            }
                            signatures.push(scriptSig[sigIdx][1]);
                            added++;
                        }
                        // Should be exact same as m
                        if (added !== m)
                            continue;
                    }
                    else if (outScript.type === 'tr_ns') {
                        for (const pub of outScript.pubkeys) {
                            const sigIdx = scriptSig.findIndex((i) => micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(i[0].pubKey, pub));
                            if (sigIdx === -1)
                                continue;
                            signatures.push(scriptSig[sigIdx][1]);
                        }
                        if (signatures.length !== outScript.pubkeys.length)
                            continue;
                    }
                    else if (outScript.type === 'unknown' && this.opts.allowUnknownInputs) {
                        // Trying our best to sign what we can
                        const scriptDecoded = Script.decode(script);
                        signatures = scriptSig
                            .map(([{ pubKey }, signature]) => {
                            const pos = scriptDecoded.findIndex((i) => isBytes(i) && micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(i, pubKey));
                            if (pos === -1)
                                throw new Error('finalize/taproot: cannot find position of pubkey in script');
                            return { signature, pos };
                        })
                            // Reverse order (because witness is stack and we take last element first from it)
                            .sort((a, b) => a.pos - b.pos)
                            .map((i) => i.signature);
                        if (!signatures.length)
                            continue;
                    }
                    else
                        throw new Error('Finalize: Unknown tapLeafScript');
                    // Witness is stack, so last element will be used first
                    input.finalScriptWitness = signatures
                        .reverse()
                        .concat([script, TaprootControlBlock.encode(cb)]);
                    break;
                }
                if (!input.finalScriptWitness)
                    throw new Error('finalize/taproot: empty witness');
            }
            else
                throw new Error('finalize/taproot: unknown input');
            input.finalScriptSig = micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
            cleanFinalInput(input);
            return;
        }
        if (!input.partialSig || !input.partialSig.length)
            throw new Error('Not enough partial sign');
        let inputScript = micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
        let witness = [];
        // TODO: move input scripts closer to payments/output scripts
        // Multisig
        if (inputType.last.type === 'ms') {
            const m = inputType.last.m;
            const pubkeys = inputType.last.pubkeys;
            let signatures = [];
            // partial: [pubkey, sign]
            for (const pub of pubkeys) {
                const sign = input.partialSig.find((s) => micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(pub, s[0]));
                if (!sign)
                    continue;
                signatures.push(sign[1]);
            }
            signatures = signatures.slice(0, m);
            if (signatures.length !== m) {
                throw new Error(`Multisig: wrong signatures count, m=${m} n=${pubkeys.length} signatures=${signatures.length}`);
            }
            inputScript = Script.encode([0, ...signatures]);
        }
        else if (inputType.last.type === 'pk') {
            inputScript = Script.encode([input.partialSig[0][1]]);
        }
        else if (inputType.last.type === 'pkh') {
            inputScript = Script.encode([input.partialSig[0][1], input.partialSig[0][0]]);
        }
        else if (inputType.last.type === 'wpkh') {
            inputScript = micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
            witness = [input.partialSig[0][1], input.partialSig[0][0]];
        }
        else if (inputType.last.type === 'unknown' && !this.opts.allowUnknownInputs)
            throw new Error('Unknown inputs not allowed');
        // Create final scripts (generic part)
        let finalScriptSig, finalScriptWitness;
        if (inputType.type.includes('wsh-')) {
            // P2WSH
            if (inputScript.length && inputType.lastScript.length) {
                witness = Script.decode(inputScript).map((i) => {
                    if (i === 0)
                        return micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
                    if (isBytes(i))
                        return i;
                    throw new Error(`Wrong witness op=${i}`);
                });
            }
            witness = witness.concat(inputType.lastScript);
        }
        if (inputType.txType === 'segwit')
            finalScriptWitness = witness;
        if (inputType.type.startsWith('sh-wsh-')) {
            finalScriptSig = Script.encode([Script.encode([0, (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(inputType.lastScript)])]);
        }
        else if (inputType.type.startsWith('sh-')) {
            finalScriptSig = Script.encode([...Script.decode(inputScript), inputType.lastScript]);
        }
        else if (inputType.type.startsWith('wsh-')) {
        }
        else if (inputType.txType !== 'segwit')
            finalScriptSig = inputScript;
        if (!finalScriptSig && !finalScriptWitness)
            throw new Error('Unknown error finalizing input');
        if (finalScriptSig)
            input.finalScriptSig = finalScriptSig;
        if (finalScriptWitness)
            input.finalScriptWitness = finalScriptWitness;
        cleanFinalInput(input);
    }
    finalize() {
        for (let i = 0; i < this.inputs.length; i++)
            this.finalizeIdx(i);
    }
    extract() {
        if (!this.isFinal)
            throw new Error('Transaction has unfinalized inputs');
        if (!this.outputs.length)
            throw new Error('Transaction has no outputs');
        if (this.fee < 0n)
            throw new Error('Outputs spends more than inputs amount');
        return this.toBytes(true, true);
    }
    combine(other) {
        for (const k of ['PSBTVersion', 'version', 'lockTime']) {
            if (this.opts[k] !== other.opts[k]) {
                throw new Error(`Transaction/combine: different ${k} this=${this.opts[k]} other=${other.opts[k]}`);
            }
        }
        for (const k of ['inputs', 'outputs']) {
            if (this[k].length !== other[k].length) {
                throw new Error(`Transaction/combine: different ${k} length this=${this[k].length} other=${other[k].length}`);
            }
        }
        const thisUnsigned = this.global.unsignedTx ? RawTx.encode(this.global.unsignedTx) : micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
        const otherUnsigned = other.global.unsignedTx ? RawTx.encode(other.global.unsignedTx) : micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
        if (!micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(thisUnsigned, otherUnsigned))
            throw new Error(`Transaction/combine: different unsigned tx`);
        this.global = mergeKeyMap(PSBTGlobal, this.global, other.global);
        for (let i = 0; i < this.inputs.length; i++)
            this.updateInput(i, other.inputs[i], true);
        for (let i = 0; i < this.outputs.length; i++)
            this.updateOutput(i, other.outputs[i], true);
        return this;
    }
    clone() {
        // deepClone probably faster, but this enforces that encoding is valid
        return Transaction.fromPSBT(this.toPSBT(this.opts.PSBTVersion), this.opts);
    }
}
// User facing API?
// Simple pubkey address, without complex scripts
function getAddress(type, privKey, network = NETWORK) {
    if (type === 'tr') {
        return p2tr(_noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.schnorr.getPublicKey(privKey), undefined, network).address;
    }
    const pubKey = _pubECDSA(privKey);
    if (type === 'pkh')
        return p2pkh(pubKey, network).address;
    if (type === 'wpkh')
        return p2wpkh(pubKey, network).address;
    throw new Error(`getAddress: unknown type=${type}`);
}
function multisig(m, pubkeys, sorted = false, witness = false) {
    const ms = p2ms(m, sorted ? _sortPubkeys(pubkeys) : pubkeys);
    return witness ? p2wsh(ms) : p2sh(ms);
}
function sortedMultisig(m, pubkeys, witness = false) {
    return multisig(m, pubkeys, true, witness);
}
// Copy-pasted from bip32 derive, maybe do something like 'bip32.parsePath'?
const HARDENED_OFFSET = 0x80000000;
function bip32Path(path) {
    const out = [];
    if (!/^[mM]'?/.test(path))
        throw new Error('Path must start with "m" or "M"');
    if (/^[mM]'?$/.test(path))
        return out;
    const parts = path.replace(/^[mM]'?\//, '').split('/');
    for (const c of parts) {
        const m = /^(\d+)('?)$/.exec(c);
        if (!m || m.length !== 3)
            throw new Error(`Invalid child index: ${c}`);
        let idx = +m[1];
        if (!Number.isSafeInteger(idx) || idx >= HARDENED_OFFSET)
            throw new Error('Invalid index');
        // hardened key
        if (m[2] === "'")
            idx += HARDENED_OFFSET;
        out.push(idx);
    }
    return out;
}
function PSBTCombine(psbts) {
    if (!psbts || !Array.isArray(psbts) || !psbts.length)
        throw new Error('PSBTCombine: wrong PSBT list');
    const tx = Transaction.fromPSBT(psbts[0]);
    for (let i = 1; i < psbts.length; i++)
        tx.combine(Transaction.fromPSBT(psbts[i]));
    return tx.toPSBT();
}
function estimateInput(inputType, input, opts) {
    let script = micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY, witness;
    // schnorr sig is always 64 bytes. except for cases when sighash is not default!
    if (inputType.txType === 'taproot') {
        const SCHNORR_SIG_SIZE = inputType.sighash !== SignatureHash.DEFAULT ? 65 : 64;
        if (input.tapInternalKey && !micro_packed__WEBPACK_IMPORTED_MODULE_1__.equalBytes(input.tapInternalKey, TAPROOT_UNSPENDABLE_KEY)) {
            witness = [new Uint8Array(SCHNORR_SIG_SIZE)];
        }
        else if (input.tapLeafScript) {
            // If user want to select specific leaf (which can signed, it is possible to remove all other leafs manually);
            // Sort leafs by control block length.
            const leafs = input.tapLeafScript.sort((a, b) => TaprootControlBlock.encode(a[0]).length - TaprootControlBlock.encode(b[0]).length);
            for (const [cb, _script] of leafs) {
                // Last byte is version
                const script = _script.slice(0, -1);
                const outScript = OutScript.decode(script);
                let signatures = [];
                if (outScript.type === 'tr_ms') {
                    const m = outScript.m;
                    for (let i = 0; i < m; i++)
                        signatures.push(new Uint8Array(SCHNORR_SIG_SIZE));
                    const n = outScript.pubkeys.length - m;
                    for (let i = 0; i < n; i++)
                        signatures.push(micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY);
                }
                else if (outScript.type === 'tr_ns') {
                    for (const _pub of outScript.pubkeys)
                        signatures.push(new Uint8Array(SCHNORR_SIG_SIZE));
                }
                else
                    throw new Error('Finalize: Unknown tapLeafScript');
                // Witness is stack, so last element will be used first
                witness = signatures.reverse().concat([script, TaprootControlBlock.encode(cb)]);
                break;
            }
        }
        else
            throw new Error('estimateInput/taproot: unknown input');
    }
    else {
        // It is possible to grind signatures until it has minimal size (but changing fee value +N satoshi),
        // which will make estimations exact. But will be very hard for multi sig (need to make sure all signatures has small size).
        const SIG_SIZE = 72; // Maximum size of signatures
        const PUB_KEY_SIZE = 33;
        let inputScript = micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
        let inputWitness = [];
        if (inputType.last.type === 'ms') {
            const m = inputType.last.m;
            const sig = [0];
            for (let i = 0; i < m; i++)
                sig.push(new Uint8Array(SIG_SIZE));
            inputScript = Script.encode(sig);
        }
        else if (inputType.last.type === 'pk') {
            // 71 sig + 1 sighash
            inputScript = Script.encode([new Uint8Array(SIG_SIZE)]);
        }
        else if (inputType.last.type === 'pkh') {
            inputScript = Script.encode([new Uint8Array(SIG_SIZE), new Uint8Array(PUB_KEY_SIZE)]);
        }
        else if (inputType.last.type === 'wpkh') {
            inputScript = micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
            inputWitness = [new Uint8Array(SIG_SIZE), new Uint8Array(PUB_KEY_SIZE)];
        }
        else if (inputType.last.type === 'unknown' && !opts.allowUnknownInputs)
            throw new Error('Unknown inputs not allowed');
        if (inputType.type.includes('wsh-')) {
            // P2WSH
            if (inputScript.length && inputType.lastScript.length) {
                inputWitness = Script.decode(inputScript).map((i) => {
                    if (i === 0)
                        return micro_packed__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
                    if (isBytes(i))
                        return i;
                    throw new Error(`Wrong witness op=${i}`);
                });
            }
            inputWitness = inputWitness.concat(inputType.lastScript);
        }
        if (inputType.txType === 'segwit')
            witness = inputWitness;
        if (inputType.type.startsWith('sh-wsh-')) {
            script = Script.encode([Script.encode([0, new Uint8Array(_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256.outputLen)])]);
        }
        else if (inputType.type.startsWith('sh-')) {
            script = Script.encode([...Script.decode(inputScript), inputType.lastScript]);
        }
        else if (inputType.type.startsWith('wsh-')) {
        }
        else if (inputType.txType !== 'segwit')
            script = inputScript;
    }
    let weight = 160 + 4 * VarBytes.encode(script).length;
    let hasWitnesses = false;
    if (witness) {
        weight += RawWitness.encode(witness).length;
        hasWitnesses = true;
    }
    return { weight, hasWitnesses };
}
// Exported for tests, internal method
const _cmpBig = (a, b) => {
    const n = a - b;
    if (n < 0n)
        return -1;
    else if (n > 0n)
        return 1;
    return 0;
};
function getScript(o, opts = {}, network = NETWORK) {
    let script;
    if ('script' in o && o.script instanceof Uint8Array) {
        script = o.script;
    }
    if ('address' in o) {
        if (typeof o.address !== 'string')
            throw new Error(`Estimator: wrong output address=${o.address}`);
        script = OutScript.encode(Address(network).decode(o.address));
    }
    if (!script)
        throw new Error('Estimator: wrong output script');
    if (typeof o.amount !== 'bigint')
        throw new Error(`Estimator: wrong output amount=${o.amount}`);
    if (script && !opts.allowUnknownOutputs && OutScript.decode(script).type === 'unknown') {
        throw new Error('Estimator: unknown output script type, there is a chance that input is unspendable. Pass allowUnknownOutputs=true, if you sure');
    }
    if (!opts.disableScriptCheck)
        checkScript(script);
    return script;
}
// class, because we need to re-use normalized inputs, instead of parsing each time
// internal stuff, exported for tests only
class _Estimator {
    constructor(inputs, outputs, opts) {
        this.inputs = inputs;
        this.outputs = outputs;
        this.opts = opts;
        // https://github.com/bitcoin/bitcoin/blob/f90603ac6d24f5263649675d51233f1fce8b2ecd/src/policy/policy.cpp#L44
        // 32 + 4 + 1 + 107 + 4
        // Dust used in accumExact + change address algo
        // - change address: can be smaller for segwit
        // - accumExact: ???
        this.dust = 148n; // compat with coinselect
        if (typeof opts.feePerByte !== 'bigint')
            throw new Error(`Estimator: wrong feePerByte=${opts.feePerByte}`);
        if (opts.dust) {
            if (typeof opts.dust !== 'bigint')
                throw new Error(`Estimator: wrong dust=${opts.dust}`);
            this.dust = opts.dust;
        }
        const network = opts.network || NETWORK;
        let amount = 0n;
        // Base weight: tx with outputs, no inputs
        let baseWeight = 32;
        for (const o of outputs) {
            const script = getScript(o, opts, opts.network);
            baseWeight += 32 + 4 * VarBytes.encode(script).length;
            amount += o.amount;
        }
        if (typeof opts.changeAddress !== 'string')
            throw new Error(`Estimator: wrong change address=${opts.changeAddress}`);
        let changeWeight = baseWeight +
            32 +
            4 * VarBytes.encode(OutScript.encode(Address(network).decode(opts.changeAddress))).length;
        baseWeight += 4 * CompactSizeLen.encode(outputs.length).length;
        // If there a lot of outputs change can change fee
        changeWeight += 4 * CompactSizeLen.encode(outputs.length + 1).length;
        this.baseWeight = baseWeight;
        this.changeWeight = changeWeight;
        this.amount = amount;
        this.normalizedInputs = this.inputs.map((i) => {
            const normalized = normalizeInput(i, undefined, undefined, opts.disableScriptCheck);
            inputBeforeSign(normalized); // check fields
            const inputType = getInputType(normalized, opts.allowLegacyWitnessUtxo);
            const prev = getPrevOut(normalized);
            const estimate = estimateInput(inputType, normalized, this.opts);
            const value = prev.amount - opts.feePerByte * BigInt(toVsize(estimate.weight)); // value = amount-fee
            return { inputType, normalized, amount: prev.amount, value, estimate };
        });
    }
    checkInputIdx(idx) {
        if (!Number.isSafeInteger(idx) || 0 > idx || idx >= this.inputs.length)
            throw new Error(`Wrong input index=${idx}`);
        return idx;
    }
    sortIndices(indices) {
        return indices.slice().sort((a, b) => {
            const ai = this.normalizedInputs[this.checkInputIdx(a)];
            const bi = this.normalizedInputs[this.checkInputIdx(b)];
            const out = _cmpBytes(ai.normalized.txid, bi.normalized.txid);
            if (out !== 0)
                return out;
            return ai.normalized.index - bi.normalized.index;
        });
    }
    sortOutputs(outputs) {
        const scripts = outputs.map((o) => getScript(o, this.opts, this.opts.network));
        const indices = outputs.map((_, j) => j);
        return indices.sort((a, b) => {
            const aa = outputs[a].amount;
            const ba = outputs[b].amount;
            const out = _cmpBig(aa, ba);
            if (out !== 0)
                return out;
            return _cmpBytes(scripts[a], scripts[b]);
        });
    }
    getSatoshi(weigth) {
        return this.opts.feePerByte * BigInt(toVsize(weigth));
    }
    // Sort by value instead of amount
    get biggest() {
        return this.inputs
            .map((_i, j) => j)
            .sort((a, b) => _cmpBig(this.normalizedInputs[b].value, this.normalizedInputs[a].value));
    }
    get smallest() {
        return this.biggest.reverse();
    }
    // These assume that UTXO array has historical order.
    // Otherwise, we have no way to know which tx is oldest
    // Explorers usually give UTXO in this order.
    get oldest() {
        return this.inputs.map((_i, j) => j);
    }
    get newest() {
        return this.oldest.reverse();
    }
    // exact - like blackjack from coinselect.
    // exact(biggest) will select one big utxo which is closer to targetValue+dust, if possible.
    // If not, it will accumulate largest utxo until value is close to targetValue+dust.
    accumulate(indices, exact = false, skipNegative = true, all = false) {
        const { feePerByte } = this.opts;
        // TODO: how to handle change addresses?
        // - cost of input
        // - cost of change output (if input requires change)
        // - cost of output spending
        // Dust threshold should be significantly bigger, no point in
        // creating an output, which cannot be spent.
        // coinselect doesn't consider cost of output address for dust.
        // Changing that can actually reduce privacy
        let weight = this.opts.alwaysChange ? this.changeWeight : this.baseWeight;
        let hasWitnesses = false;
        let num = 0;
        let inputsAmount = 0n;
        const targetAmount = this.amount;
        const res = [];
        let fee;
        for (const idx of indices) {
            this.checkInputIdx(idx);
            const { estimate, amount, value } = this.normalizedInputs[idx];
            let newWeight = weight + estimate.weight;
            if (!hasWitnesses && estimate.hasWitnesses)
                newWeight += 2; // enable witness if needed
            const totalWeight = newWeight + 4 * CompactSizeLen.encode(num).length; // number of outputs can change weight
            fee = this.getSatoshi(totalWeight);
            // Best case scenario exact(biggest) -> we find biggest output, less than target+threshold
            if (exact) {
                const dust = this.dust * feePerByte;
                // skip if added value is bigger than dust
                if (amount + inputsAmount > targetAmount + fee + dust)
                    continue;
            }
            // Negative: cost of using input is more than value provided (negative)
            // By default 'blackjack' mode in coinselect doesn't use that, which means
            // it will use negative output if sorted by 'smallest'
            if (skipNegative && value <= 0n)
                continue;
            weight = newWeight;
            if (estimate.hasWitnesses)
                hasWitnesses = true;
            num++;
            inputsAmount += amount;
            res.push(idx);
            // inputsAmount is enough to cover cost of tx
            if (!all && targetAmount + fee < inputsAmount)
                return { indices: res, fee, weight: totalWeight, total: inputsAmount };
        }
        if (all) {
            const newWeight = weight + 4 * CompactSizeLen.encode(num).length;
            return { indices: res, fee, weight: newWeight, total: inputsAmount };
        }
        return undefined;
    }
    // Works like coinselect default method
    default() {
        const { biggest } = this;
        const exact = this.accumulate(biggest, true, false);
        if (exact)
            return exact;
        return this.accumulate(biggest);
    }
    select(strategy) {
        if (strategy === 'all') {
            return this.accumulate(this.inputs.map((_, j) => j), false, true, true);
        }
        if (strategy === 'default')
            return this.default();
        const data = {
            Oldest: () => this.oldest,
            Newest: () => this.newest,
            Smallest: () => this.smallest,
            Biggest: () => this.biggest,
        };
        if (strategy.startsWith('exact')) {
            const [exactData, left] = strategy.slice(5).split('/');
            if (!data[exactData])
                throw new Error(`Estimator.select: wrong strategy=${strategy}`);
            strategy = left;
            const exact = this.accumulate(data[exactData](), true, true);
            if (exact)
                return exact;
        }
        if (strategy.startsWith('accum')) {
            const accumData = strategy.slice(5);
            if (!data[accumData])
                throw new Error(`Estimator.select: wrong strategy=${strategy}`);
            return this.accumulate(data[accumData]());
        }
        throw new Error(`Estimator.select: wrong strategy=${strategy}`);
    }
    result(strategy) {
        const s = this.select(strategy);
        if (!s)
            return;
        const { indices, weight, total } = s;
        let needChange = this.opts.alwaysChange;
        const changeWeight = this.opts.alwaysChange
            ? weight
            : weight + (this.changeWeight - this.baseWeight);
        const changeFee = this.getSatoshi(changeWeight);
        let fee = s.fee;
        const change = total - this.amount - changeFee;
        if (change > this.dust)
            needChange = true;
        let inputs = indices;
        let outputs = Array.from(this.outputs);
        if (needChange) {
            fee = changeFee;
            // this shouldn't happen!
            if (change < 0n)
                throw new Error(`Estimator.result: negative change=${change}`);
            outputs.push({ address: this.opts.changeAddress, amount: change });
        }
        if (this.opts.bip69) {
            inputs = this.sortIndices(inputs);
            outputs = this.sortOutputs(outputs).map((i) => outputs[i]);
        }
        const res = {
            inputs: inputs.map((i) => this.inputs[i]),
            outputs,
            fee,
            weight: this.opts.alwaysChange ? s.weight : changeWeight,
            change: !!needChange,
        };
        let tx;
        if (this.opts.createTx) {
            const { inputs, outputs } = res;
            tx = new Transaction(this.opts);
            for (const i of inputs)
                tx.addInput(i);
            for (const o of outputs)
                tx.addOutput({ ...o, script: getScript(o, this.opts, this.opts.network) });
        }
        return { ...res, tx };
    }
}
function selectUTXO(inputs, outputs, strategy, opts) {
    // Defaults: do we want bip69 by default?
    const _opts = { createTx: true, bip69: true, ...opts };
    const est = new _Estimator(inputs, outputs, _opts);
    return est.result(strategy);
}


/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}

_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    let {responseType, withXSRFToken} = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if(_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv) {
      withXSRFToken && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));

      if (withXSRFToken || (withXSRFToken !== false && (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      const dummy = {}
      if (Error.captureStackTrace) {
        Error.captureStackTrace(dummy)
      } else {
        dummy.stack = new Error().stack;
      }
      // slice off the Error: ... line
      dummy.stack = dummy.stack.replace(/^.+\n/, '');
      // match without the 2 top stack lines
      if (!err.stack.endsWith(dummy.stack.replace(/^.+\n.+\n/, ''))) {
        err.stack += '\n' + dummy.stack
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      headers[config.method]
    );

    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
      config,
      config.transformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.6.6";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ?
      params.toString() :
      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path) && cookie.push('path=' + path);

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });



/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(
        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/common/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/platform/common/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasBrowserEnv: () => (/* binding */ hasBrowserEnv),
/* harmony export */   hasStandardBrowserEnv: () => (/* binding */ hasStandardBrowserEnv),
/* harmony export */   hasStandardBrowserWebWorkerEnv: () => (/* binding */ hasStandardBrowserWebWorkerEnv)
/* harmony export */ });
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (
  (product) => {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
  })(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();




/***/ }),

/***/ "./node_modules/axios/lib/platform/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/platform/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils.js */ "./node_modules/axios/lib/platform/common/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ..._common_utils_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._node_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});


/***/ }),

/***/ "./node_modules/micro-packed/lib/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/micro-packed/lib/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY: () => (/* binding */ EMPTY),
/* harmony export */   I128BE: () => (/* binding */ I128BE),
/* harmony export */   I128LE: () => (/* binding */ I128LE),
/* harmony export */   I16BE: () => (/* binding */ I16BE),
/* harmony export */   I16LE: () => (/* binding */ I16LE),
/* harmony export */   I256BE: () => (/* binding */ I256BE),
/* harmony export */   I256LE: () => (/* binding */ I256LE),
/* harmony export */   I32BE: () => (/* binding */ I32BE),
/* harmony export */   I32LE: () => (/* binding */ I32LE),
/* harmony export */   I64BE: () => (/* binding */ I64BE),
/* harmony export */   I64LE: () => (/* binding */ I64LE),
/* harmony export */   I8: () => (/* binding */ I8),
/* harmony export */   NULL: () => (/* binding */ NULL),
/* harmony export */   Reader: () => (/* binding */ Reader),
/* harmony export */   U128BE: () => (/* binding */ U128BE),
/* harmony export */   U128LE: () => (/* binding */ U128LE),
/* harmony export */   U16BE: () => (/* binding */ U16BE),
/* harmony export */   U16LE: () => (/* binding */ U16LE),
/* harmony export */   U256BE: () => (/* binding */ U256BE),
/* harmony export */   U256LE: () => (/* binding */ U256LE),
/* harmony export */   U32BE: () => (/* binding */ U32BE),
/* harmony export */   U32LE: () => (/* binding */ U32LE),
/* harmony export */   U64BE: () => (/* binding */ U64BE),
/* harmony export */   U64LE: () => (/* binding */ U64LE),
/* harmony export */   U8: () => (/* binding */ U8),
/* harmony export */   Writer: () => (/* binding */ Writer),
/* harmony export */   ZeroPad: () => (/* binding */ ZeroPad),
/* harmony export */   _TEST: () => (/* binding */ _TEST),
/* harmony export */   apply: () => (/* binding */ apply),
/* harmony export */   array: () => (/* binding */ array),
/* harmony export */   base64armor: () => (/* binding */ base64armor),
/* harmony export */   bigint: () => (/* binding */ bigint),
/* harmony export */   bits: () => (/* binding */ bits),
/* harmony export */   bitset: () => (/* binding */ bitset),
/* harmony export */   bool: () => (/* binding */ bool),
/* harmony export */   bytes: () => (/* binding */ bytes),
/* harmony export */   bytesFormatted: () => (/* binding */ bytesFormatted),
/* harmony export */   checkBounds: () => (/* binding */ checkBounds),
/* harmony export */   coders: () => (/* binding */ coders),
/* harmony export */   concatBytes: () => (/* binding */ concatBytes),
/* harmony export */   constant: () => (/* binding */ constant),
/* harmony export */   cstring: () => (/* binding */ cstring),
/* harmony export */   debug: () => (/* binding */ debug),
/* harmony export */   equalBytes: () => (/* binding */ equalBytes),
/* harmony export */   flag: () => (/* binding */ flag),
/* harmony export */   flagged: () => (/* binding */ flagged),
/* harmony export */   hex: () => (/* binding */ hex),
/* harmony export */   int: () => (/* binding */ int),
/* harmony export */   isBytes: () => (/* binding */ isBytes),
/* harmony export */   isCoder: () => (/* binding */ isCoder),
/* harmony export */   lazy: () => (/* binding */ lazy),
/* harmony export */   magic: () => (/* binding */ magic),
/* harmony export */   magicBytes: () => (/* binding */ magicBytes),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   mappedTag: () => (/* binding */ mappedTag),
/* harmony export */   nothing: () => (/* binding */ nothing),
/* harmony export */   optional: () => (/* binding */ optional),
/* harmony export */   padLeft: () => (/* binding */ padLeft),
/* harmony export */   padRight: () => (/* binding */ padRight),
/* harmony export */   pointer: () => (/* binding */ pointer),
/* harmony export */   prefix: () => (/* binding */ prefix),
/* harmony export */   string: () => (/* binding */ string),
/* harmony export */   struct: () => (/* binding */ struct),
/* harmony export */   tag: () => (/* binding */ tag),
/* harmony export */   tuple: () => (/* binding */ tuple),
/* harmony export */   validate: () => (/* binding */ validate),
/* harmony export */   wrap: () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var _scure_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scure/base */ "./node_modules/@scure/base/lib/esm/index.js");

/**
 * TODO:
 * - Holes, simplify pointers. Hole is some sized element which is skipped at encoding,
 *   but later other elements can write to it by path
 * - Composite / tuple keys for dict
 * - Web UI for easier debugging. We can wrap every coder to something that would write
 *   start & end positions to; and we can colorize specific bytes used by specific coder
 */
// Useful default values
const EMPTY = /* @__PURE__ */ new Uint8Array(); // Empty bytes array
const NULL = /* @__PURE__ */ new Uint8Array([0]); // NULL
function equalBytes(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (a[i] !== b[i])
            return false;
    return true;
}
function concatBytes(...arrays) {
    if (arrays.length === 1)
        return arrays[0];
    const length = arrays.reduce((a, arr) => a + arr.length, 0);
    const result = new Uint8Array(length);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
const isBytes = (b) => b instanceof Uint8Array;
// Utils
// Small bitset structure to store position of ranges that have been read.
// Possible can be even more efficient by using some interval trees, but would be more complex
// Needs O(N/8) memory for parsing.
// Purpose: if there are pointers in parsed structure,
// they can cause read of two distinct ranges:
// [0-32, 64-128], which means 'pos' is not enough to handle them
const _bitset = /* @__PURE__ */ {
    BITS: 32,
    FULL_MASK: -1 >>> 0, // 1<<32 will overflow
    len: (len) => Math.ceil(len / 32),
    create: (len) => new Uint32Array(_bitset.len(len)),
    clean: (bs) => bs.fill(0),
    debug: (bs) => Array.from(bs).map((i) => (i >>> 0).toString(2).padStart(32, '0')),
    checkLen: (bs, len) => {
        if (_bitset.len(len) === bs.length)
            return;
        throw new Error(`bitSet: wrong length=${bs.length}. Expected: ${_bitset.len(len)}`);
    },
    chunkLen: (bsLen, pos, len) => {
        if (pos < 0)
            throw new Error(`bitset: wrong pos=${pos}`);
        if (pos + len > bsLen)
            throw new Error(`bitSet: wrong range=${pos}/${len} of ${bsLen}`);
    },
    set: (bs, chunk, value, allowRewrite = true) => {
        if (!allowRewrite && (bs[chunk] & value) !== 0)
            return false;
        bs[chunk] |= value;
        return true;
    },
    pos: (pos, i) => ({
        chunk: Math.floor((pos + i) / 32),
        mask: 1 << (32 - ((pos + i) % 32) - 1),
    }),
    indices: (bs, len, invert = false) => {
        _bitset.checkLen(bs, len);
        const { FULL_MASK, BITS } = _bitset;
        const left = BITS - (len % BITS);
        const lastMask = left ? (FULL_MASK >>> left) << left : FULL_MASK;
        const res = [];
        for (let i = 0; i < bs.length; i++) {
            let c = bs[i];
            if (invert)
                c = ~c; // allows to gen unset elements
            // apply mask to last element, so we won't iterate non-existent items
            if (i === bs.length - 1)
                c &= lastMask;
            if (c === 0)
                continue; // fast-path
            for (let j = 0; j < BITS; j++) {
                const m = 1 << (BITS - j - 1);
                if (c & m)
                    res.push(i * BITS + j);
            }
        }
        return res;
    },
    range: (arr) => {
        const res = [];
        let cur;
        for (const i of arr) {
            if (cur === undefined || i !== cur.pos + cur.length)
                res.push((cur = { pos: i, length: 1 }));
            else
                cur.length += 1;
        }
        return res;
    },
    rangeDebug: (bs, len, invert = false) => `[${_bitset
        .range(_bitset.indices(bs, len, invert))
        .map((i) => `(${i.pos}/${i.length})`)
        .join(', ')}]`,
    setRange: (bs, bsLen, pos, len, allowRewrite = true) => {
        _bitset.chunkLen(bsLen, pos, len);
        const { FULL_MASK, BITS } = _bitset;
        // Try to set range with maximum efficiency:
        // - first chunk is always    '0000[1111]' (only right ones)
        // - middle chunks are set to '[1111 1111]' (all ones)
        // - last chunk is always     '[1111]0000' (only left ones)
        // - max operations:          (N/32) + 2 (first and last)
        const first = pos % BITS ? Math.floor(pos / BITS) : undefined;
        const lastPos = pos + len;
        const last = lastPos % BITS ? Math.floor(lastPos / BITS) : undefined;
        // special case, whole range inside single chunk
        if (first !== undefined && first === last)
            return _bitset.set(bs, first, (FULL_MASK >>> (BITS - len)) << (BITS - len - pos), allowRewrite);
        if (first !== undefined) {
            if (!_bitset.set(bs, first, FULL_MASK >>> pos % BITS, allowRewrite))
                return false; // first chunk
        }
        // middle chunks
        const start = first !== undefined ? first + 1 : pos / BITS;
        const end = last !== undefined ? last : lastPos / BITS;
        for (let i = start; i < end; i++)
            if (!_bitset.set(bs, i, FULL_MASK, allowRewrite))
                return false;
        if (last !== undefined && first !== last)
            if (!_bitset.set(bs, last, FULL_MASK << (BITS - (lastPos % BITS)), allowRewrite))
                return false; // last chunk
        return true;
    },
};
class Reader {
    constructor(data, opts = {}, path = [], fieldPath = [], parent = undefined, parentOffset = 0) {
        this.data = data;
        this.opts = opts;
        this.path = path;
        this.fieldPath = fieldPath;
        this.parent = parent;
        this.parentOffset = parentOffset;
        this.pos = 0;
        this.bitBuf = 0;
        this.bitPos = 0;
    }
    enablePtr() {
        if (this.parent)
            return this.parent.enablePtr();
        if (this.bs)
            return;
        this.bs = _bitset.create(this.data.length);
        _bitset.setRange(this.bs, this.data.length, 0, this.pos, this.opts.allowMultipleReads);
    }
    markBytesBS(pos, len) {
        if (this.parent)
            return this.parent.markBytesBS(this.parentOffset + pos, len);
        if (!len)
            return true;
        if (!this.bs)
            return true;
        return _bitset.setRange(this.bs, this.data.length, pos, len, false);
    }
    markBytes(len) {
        const pos = this.pos;
        this.pos += len;
        const res = this.markBytesBS(pos, len);
        if (!this.opts.allowMultipleReads && !res)
            throw this.err(`multiple read pos=${this.pos} len=${len}`);
        return res;
    }
    err(msg) {
        return new Error(`Reader(${this.fieldPath.join('/')}): ${msg}`);
    }
    // read bytes by absolute offset
    absBytes(n) {
        if (n > this.data.length)
            throw new Error('absBytes: Unexpected end of buffer');
        return this.data.subarray(n);
    }
    // return reader using offset
    offsetReader(n) {
        return new Reader(this.absBytes(n), this.opts, this.path, this.fieldPath, this, n);
    }
    bytes(n, peek = false) {
        if (this.bitPos)
            throw this.err('readBytes: bitPos not empty');
        if (!Number.isFinite(n))
            throw this.err(`readBytes: wrong length=${n}`);
        if (this.pos + n > this.data.length)
            throw this.err('readBytes: Unexpected end of buffer');
        const slice = this.data.subarray(this.pos, this.pos + n);
        if (!peek)
            this.markBytes(n);
        return slice;
    }
    byte(peek = false) {
        if (this.bitPos)
            throw this.err('readByte: bitPos not empty');
        const data = this.data[this.pos];
        if (!peek)
            this.markBytes(1);
        return data;
    }
    get leftBytes() {
        return this.data.length - this.pos;
    }
    isEnd() {
        return this.pos >= this.data.length && !this.bitPos;
    }
    length(len) {
        let byteLen;
        if (isCoder(len))
            byteLen = Number(len.decodeStream(this));
        else if (typeof len === 'number')
            byteLen = len;
        else if (typeof len === 'string')
            byteLen = getPath(this.path, len.split('/'));
        if (typeof byteLen === 'bigint')
            byteLen = Number(byteLen);
        if (typeof byteLen !== 'number')
            throw this.err(`Wrong length: ${byteLen}`);
        return byteLen;
    }
    // bits are read in BE mode (left to right): (0b1000_0000).readBits(1) == 1
    bits(bits) {
        if (bits > 32)
            throw this.err('BitReader: cannot read more than 32 bits in single call');
        let out = 0;
        while (bits) {
            if (!this.bitPos) {
                this.bitBuf = this.byte();
                this.bitPos = 8;
            }
            const take = Math.min(bits, this.bitPos);
            this.bitPos -= take;
            out = (out << take) | ((this.bitBuf >> this.bitPos) & (2 ** take - 1));
            this.bitBuf &= 2 ** this.bitPos - 1;
            bits -= take;
        }
        // Fix signed integers
        return out >>> 0;
    }
    find(needle, pos = this.pos) {
        if (!isBytes(needle))
            throw this.err(`find: needle is not bytes! ${needle}`);
        if (this.bitPos)
            throw this.err('findByte: bitPos not empty');
        if (!needle.length)
            throw this.err(`find: needle is empty`);
        // indexOf should be faster than full equalBytes check
        for (let idx = pos; (idx = this.data.indexOf(needle[0], idx)) !== -1; idx++) {
            if (idx === -1)
                return;
            const leftBytes = this.data.length - idx;
            if (leftBytes < needle.length)
                return;
            if (equalBytes(needle, this.data.subarray(idx, idx + needle.length)))
                return idx;
        }
        return;
    }
    finish() {
        if (this.opts.allowUnreadBytes)
            return;
        if (this.bitPos) {
            throw this.err(`${this.bitPos} bits left after unpack: ${_scure_base__WEBPACK_IMPORTED_MODULE_0__.hex.encode(this.data.slice(this.pos))}`);
        }
        if (this.bs && !this.parent) {
            const notRead = _bitset.indices(this.bs, this.data.length, true);
            if (notRead.length) {
                const formatted = _bitset
                    .range(notRead)
                    .map(({ pos, length }) => `(${pos}/${length})[${_scure_base__WEBPACK_IMPORTED_MODULE_0__.hex.encode(this.data.subarray(pos, pos + length))}]`)
                    .join(', ');
                throw this.err(`unread byte ranges: ${formatted} (total=${this.data.length})`);
            }
            else
                return; // all bytes read, everything is ok
        }
        // Default: no pointers enabled
        if (!this.isEnd()) {
            throw this.err(`${this.leftBytes} bytes ${this.bitPos} bits left after unpack: ${_scure_base__WEBPACK_IMPORTED_MODULE_0__.hex.encode(this.data.slice(this.pos))}`);
        }
    }
    fieldPathPush(s) {
        this.fieldPath.push(s);
    }
    fieldPathPop() {
        this.fieldPath.pop();
    }
}
class Writer {
    constructor(path = [], fieldPath = []) {
        this.path = path;
        this.fieldPath = fieldPath;
        this.buffers = [];
        this.pos = 0;
        this.ptrs = [];
        this.bitBuf = 0;
        this.bitPos = 0;
    }
    err(msg) {
        return new Error(`Writer(${this.fieldPath.join('/')}): ${msg}`);
    }
    bytes(b) {
        if (this.bitPos)
            throw this.err('writeBytes: ends with non-empty bit buffer');
        this.buffers.push(b);
        this.pos += b.length;
    }
    byte(b) {
        if (this.bitPos)
            throw this.err('writeByte: ends with non-empty bit buffer');
        this.buffers.push(new Uint8Array([b]));
        this.pos++;
    }
    get buffer() {
        if (this.bitPos)
            throw this.err('buffer: ends with non-empty bit buffer');
        let buf = concatBytes(...this.buffers);
        for (let ptr of this.ptrs) {
            const pos = buf.length;
            buf = concatBytes(buf, ptr.buffer);
            const val = ptr.ptr.encode(pos);
            for (let i = 0; i < val.length; i++)
                buf[ptr.pos + i] = val[i];
        }
        return buf;
    }
    length(len, value) {
        if (len === null)
            return;
        if (isCoder(len))
            return len.encodeStream(this, value);
        let byteLen;
        if (typeof len === 'number')
            byteLen = len;
        else if (typeof len === 'string')
            byteLen = getPath(this.path, len.split('/'));
        if (typeof byteLen === 'bigint')
            byteLen = Number(byteLen);
        if (byteLen === undefined || byteLen !== value)
            throw this.err(`Wrong length: ${byteLen} len=${len} exp=${value}`);
    }
    bits(value, bits) {
        if (bits > 32)
            throw this.err('writeBits: cannot write more than 32 bits in single call');
        if (value >= 2 ** bits)
            throw this.err(`writeBits: value (${value}) >= 2**bits (${bits})`);
        while (bits) {
            const take = Math.min(bits, 8 - this.bitPos);
            this.bitBuf = (this.bitBuf << take) | (value >> (bits - take));
            this.bitPos += take;
            bits -= take;
            value &= 2 ** bits - 1;
            if (this.bitPos === 8) {
                this.bitPos = 0;
                this.buffers.push(new Uint8Array([this.bitBuf]));
                this.pos++;
            }
        }
    }
    fieldPathPush(s) {
        this.fieldPath.push(s);
    }
    fieldPathPop() {
        this.fieldPath.pop();
    }
}
// Immutable LE<->BE
const swap = (b) => Uint8Array.from(b).reverse();
function checkBounds(p, value, bits, signed) {
    if (signed) {
        // [-(2**(32-1)), 2**(32-1)-1]
        const signBit = 2n ** (bits - 1n);
        if (value < -signBit || value >= signBit)
            throw p.err('sInt: value out of bounds');
    }
    else {
        // [0, 2**32-1]
        if (0n > value || value >= 2n ** bits)
            throw p.err('uInt: value out of bounds');
    }
}
// Wrap stream encoder into generic encoder
function wrap(inner) {
    return {
        ...inner,
        encode: (value) => {
            const w = new Writer();
            inner.encodeStream(w, value);
            return w.buffer;
        },
        decode: (data, opts = {}) => {
            const r = new Reader(data, opts);
            const res = inner.decodeStream(r);
            r.finish();
            return res;
        },
    };
}
function getPath(objPath, path) {
    objPath = Array.from(objPath);
    let i = 0;
    for (; i < path.length; i++) {
        if (path[i] === '..')
            objPath.pop();
        else
            break;
    }
    let cur = objPath.pop();
    for (; i < path.length; i++) {
        if (!cur || cur[path[i]] === undefined)
            return undefined;
        cur = cur[path[i]];
    }
    return cur;
}
function isCoder(elm) {
    return (typeof elm.encode === 'function' &&
        typeof elm.encodeStream === 'function' &&
        typeof elm.decode === 'function' &&
        typeof elm.decodeStream === 'function');
}
// Coders (like in @scure/base) for common operations
// TODO:
// - move to base? very generic converters, not releated to base and packed
// - encode/decode -> from/to? coder->convert?
function dict() {
    return {
        encode: (from) => {
            const to = {};
            for (const [name, value] of from) {
                if (to[name] !== undefined)
                    throw new Error(`coders.dict: same key(${name}) appears twice in struct`);
                to[name] = value;
            }
            return to;
        },
        decode: (to) => Object.entries(to),
    };
}
// Safely converts bigint to number
// Sometimes pointers / tags use u64 or other big numbers which cannot be represented by number,
// but we still can use them since real value will be smaller than u32
const number = {
    encode: (from) => {
        if (from > BigInt(Number.MAX_SAFE_INTEGER))
            throw new Error(`coders.number: element bigger than MAX_SAFE_INTEGER=${from}`);
        return Number(from);
    },
    decode: (to) => BigInt(to),
};
function tsEnum(e) {
    return {
        encode: (from) => e[from],
        decode: (to) => e[to],
    };
}
function decimal(precision) {
    const decimalMask = 10n ** BigInt(precision);
    return {
        encode: (from) => {
            let s = (from < 0n ? -from : from).toString(10);
            let sep = s.length - precision;
            if (sep < 0) {
                s = s.padStart(s.length - sep, '0');
                sep = 0;
            }
            let i = s.length - 1;
            for (; i >= sep && s[i] === '0'; i--)
                ;
            let [int, frac] = [s.slice(0, sep), s.slice(sep, i + 1)];
            if (!int)
                int = '0';
            if (from < 0n)
                int = '-' + int;
            if (!frac)
                return int;
            return `${int}.${frac}`;
        },
        decode: (to) => {
            let neg = false;
            if (to.startsWith('-')) {
                neg = true;
                to = to.slice(1);
            }
            let sep = to.indexOf('.');
            sep = sep === -1 ? to.length : sep;
            const [intS, fracS] = [to.slice(0, sep), to.slice(sep + 1)];
            const int = BigInt(intS) * decimalMask;
            const fracLen = Math.min(fracS.length, precision);
            const frac = BigInt(fracS.slice(0, fracLen)) * 10n ** BigInt(precision - fracLen);
            const value = int + frac;
            return neg ? -value : value;
        },
    };
}
/**
 * Allows to split big conditional coders into a small one; also sort of parser combinator:
 *
 *   `encode = [Ae, Be]; decode = [Ad, Bd]`
 *   ->
 *   `match([{encode: Ae, decode: Ad}, {encode: Be; decode: Bd}])`
 *
 * 1. It is easier to reason: encode/decode of specific part are closer to each other
 * 2. Allows composable coders and ability to add conditions on runtime
 * @param lst
 * @returns
 */
function match(lst) {
    return {
        encode: (from) => {
            for (const c of lst) {
                const elm = c.encode(from);
                if (elm !== undefined)
                    return elm;
            }
            throw new Error(`match/encode: cannot find match in ${from}`);
        },
        decode: (to) => {
            for (const c of lst) {
                const elm = c.decode(to);
                if (elm !== undefined)
                    return elm;
            }
            throw new Error(`match/decode: cannot find match in ${to}`);
        },
    };
}
const coders = { dict, number, tsEnum, decimal, match };
// PackedCoders
const bits = (len) => wrap({
    encodeStream: (w, value) => w.bits(value, len),
    decodeStream: (r) => r.bits(len),
});
const bigint = (size, le = false, signed = false) => wrap({
    size,
    encodeStream: (w, value) => {
        if (typeof value !== 'number' && typeof value !== 'bigint')
            throw w.err(`bigint: invalid value: ${value}`);
        let _value = BigInt(value);
        const bLen = BigInt(size);
        checkBounds(w, _value, 8n * bLen, !!signed);
        const signBit = 2n ** (8n * bLen - 1n);
        if (signed && _value < 0)
            _value = _value | signBit;
        let b = [];
        for (let i = 0; i < size; i++) {
            b.push(Number(_value & 255n));
            _value >>= 8n;
        }
        let res = new Uint8Array(b).reverse();
        w.bytes(le ? res.reverse() : res);
    },
    decodeStream: (r) => {
        const bLen = BigInt(size);
        let value = r.bytes(size);
        if (le)
            value = swap(value);
        const b = swap(value);
        const signBit = 2n ** (8n * bLen - 1n);
        let res = 0n;
        for (let i = 0; i < b.length; i++)
            res |= BigInt(b[i]) << (8n * BigInt(i));
        if (signed && res & signBit)
            res = (res ^ signBit) - signBit;
        checkBounds(r, res, 8n * bLen, !!signed);
        return res;
    },
});
const U256LE = bigint(32, true);
const U256BE = bigint(32, false);
const I256LE = bigint(32, true, true);
const I256BE = bigint(32, false, true);
const U128LE = bigint(16, true);
const U128BE = bigint(16, false);
const I128LE = bigint(16, true, true);
const I128BE = bigint(16, false, true);
const U64LE = bigint(8, true);
const U64BE = bigint(8, false);
const I64LE = bigint(8, true, true);
const I64BE = bigint(8, false, true);
const int = (size, le = false, signed = false) => {
    if (size > 6)
        throw new Error('int supports size up to 6 bytes (48 bits), for other use bigint');
    return apply(bigint(size, le, signed), coders.number);
};
const U32LE = int(4, true);
const U32BE = int(4, false);
const I32LE = int(4, true, true);
const I32BE = int(4, false, true);
const U16LE = int(2, true);
const U16BE = int(2, false);
const I16LE = int(2, true, true);
const I16BE = int(2, false, true);
const U8 = int(1, false);
const I8 = int(1, false, true);
const bool = wrap({
    size: 1,
    encodeStream: (w, value) => w.byte(value ? 1 : 0),
    decodeStream: (r) => {
        const value = r.byte();
        if (value !== 0 && value !== 1)
            throw r.err(`bool: invalid value ${value}`);
        return value === 1;
    },
});
// Can be done w array, but specific implementation should be
// faster: no need to create js array of numbers.
const bytes = (len, le = false) => wrap({
    size: typeof len === 'number' ? len : undefined,
    encodeStream: (w, value) => {
        if (!isBytes(value))
            throw w.err(`bytes: invalid value ${value}`);
        if (!isBytes(len))
            w.length(len, value.length);
        w.bytes(le ? swap(value) : value);
        if (isBytes(len))
            w.bytes(len);
    },
    decodeStream: (r) => {
        let bytes;
        if (isBytes(len)) {
            const tPos = r.find(len);
            if (!tPos)
                throw r.err(`bytes: cannot find terminator`);
            bytes = r.bytes(tPos - r.pos);
            r.bytes(len.length);
        }
        else
            bytes = r.bytes(len === null ? r.leftBytes : r.length(len));
        return le ? swap(bytes) : bytes;
    },
});
const string = (len, le = false) => {
    const inner = bytes(len, le);
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => inner.encodeStream(w, _scure_base__WEBPACK_IMPORTED_MODULE_0__.utf8.decode(value)),
        decodeStream: (r) => _scure_base__WEBPACK_IMPORTED_MODULE_0__.utf8.encode(inner.decodeStream(r)),
    });
};
const cstring = string(NULL);
const hex = (len, le = false, withZero = false) => {
    const inner = bytes(len, le);
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => {
            if (withZero && !value.startsWith('0x'))
                throw new Error('hex(withZero=true).encode input should start with 0x');
            const bytes = _scure_base__WEBPACK_IMPORTED_MODULE_0__.hex.decode(withZero ? value.slice(2) : value);
            return inner.encodeStream(w, bytes);
        },
        decodeStream: (r) => (withZero ? '0x' : '') + _scure_base__WEBPACK_IMPORTED_MODULE_0__.hex.encode(inner.decodeStream(r)),
    });
};
// Interoperability with base
function apply(inner, b) {
    if (!isCoder(inner))
        throw new Error(`apply: invalid inner value ${inner}`);
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => {
            let innerValue;
            try {
                innerValue = b.decode(value);
            }
            catch (e) {
                throw w.err('' + e);
            }
            return inner.encodeStream(w, innerValue);
        },
        decodeStream: (r) => {
            const innerValue = inner.decodeStream(r);
            try {
                return b.encode(innerValue);
            }
            catch (e) {
                throw r.err('' + e);
            }
        },
    });
}
// Additional check of values both on encode and decode steps.
// E.g. to force uint32 to be 1..10
function validate(inner, fn) {
    if (!isCoder(inner))
        throw new Error(`validate: invalid inner value ${inner}`);
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => inner.encodeStream(w, fn(value)),
        decodeStream: (r) => fn(inner.decodeStream(r)),
    });
}
function lazy(fn) {
    return wrap({
        encodeStream: (w, value) => fn().encodeStream(w, value),
        decodeStream: (r) => fn().decodeStream(r),
    });
}
const bytesFormatted = (len, fmt, le = false) => {
    const inner = bytes(len, le);
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => inner.encodeStream(w, (0,_scure_base__WEBPACK_IMPORTED_MODULE_0__.bytes)(fmt, value)),
        decodeStream: (r) => (0,_scure_base__WEBPACK_IMPORTED_MODULE_0__.str)(fmt, inner.decodeStream(r)),
    });
};
// Returns true if some marker exists, otherwise false. Xor argument flips behaviour
const flag = (flagValue, xor = false) => wrap({
    size: flagValue.length,
    encodeStream: (w, value) => {
        if (!!value !== xor)
            w.bytes(flagValue);
    },
    decodeStream: (r) => {
        let hasFlag = r.leftBytes >= flagValue.length;
        if (hasFlag) {
            hasFlag = equalBytes(r.bytes(flagValue.length, true), flagValue);
            // Found flag, advance cursor position
            if (hasFlag)
                r.bytes(flagValue.length);
        }
        // hasFlag ^ xor
        return hasFlag !== xor;
    },
});
// Decode/encode only if flag found
function flagged(path, inner, def) {
    if (!isCoder(inner))
        throw new Error(`flagged: invalid inner value ${inner}`);
    return wrap({
        encodeStream: (w, value) => {
            if (typeof path === 'string') {
                if (getPath(w.path, path.split('/')))
                    inner.encodeStream(w, value);
                else if (def)
                    inner.encodeStream(w, def);
            }
            else {
                path.encodeStream(w, !!value);
                if (!!value)
                    inner.encodeStream(w, value);
                else if (def)
                    inner.encodeStream(w, def);
            }
        },
        decodeStream: (r) => {
            let hasFlag = false;
            if (typeof path === 'string')
                hasFlag = getPath(r.path, path.split('/'));
            else
                hasFlag = path.decodeStream(r);
            // If there is a flag -- decode and return value
            if (hasFlag)
                return inner.decodeStream(r);
            else if (def)
                inner.decodeStream(r);
            return;
        },
    });
}
function optional(flag, inner, def) {
    if (!isCoder(flag) || !isCoder(inner))
        throw new Error(`optional: invalid flag or inner value flag=${flag} inner=${inner}`);
    return wrap({
        size: def !== undefined && flag.size && inner.size ? flag.size + inner.size : undefined,
        encodeStream: (w, value) => {
            flag.encodeStream(w, !!value);
            if (value)
                inner.encodeStream(w, value);
            else if (def !== undefined)
                inner.encodeStream(w, def);
        },
        decodeStream: (r) => {
            if (flag.decodeStream(r))
                return inner.decodeStream(r);
            else if (def !== undefined)
                inner.decodeStream(r);
            return;
        },
    });
}
function magic(inner, constant, check = true) {
    if (!isCoder(inner))
        throw new Error(`flagged: invalid inner value ${inner}`);
    return wrap({
        size: inner.size,
        encodeStream: (w, _value) => inner.encodeStream(w, constant),
        decodeStream: (r) => {
            const value = inner.decodeStream(r);
            if ((check && typeof value !== 'object' && value !== constant) ||
                (isBytes(constant) && !equalBytes(constant, value))) {
                throw r.err(`magic: invalid value: ${value} !== ${constant}`);
            }
            return;
        },
    });
}
const magicBytes = (constant) => {
    const c = typeof constant === 'string' ? _scure_base__WEBPACK_IMPORTED_MODULE_0__.utf8.decode(constant) : constant;
    return magic(bytes(c.length), c);
};
function constant(c) {
    return wrap({
        encodeStream: (_w, value) => {
            if (value !== c)
                throw new Error(`constant: invalid value ${value} (exp: ${c})`);
        },
        decodeStream: (_r) => c,
    });
}
function sizeof(fields) {
    let size = 0;
    for (let f of fields) {
        if (f.size === undefined)
            return;
        if (!Number.isSafeInteger(f.size))
            throw new Error(`sizeof: wrong element size=${size}`);
        size += f.size;
    }
    return size;
}
function struct(fields) {
    if (Array.isArray(fields))
        throw new Error('Packed.Struct: got array instead of object');
    return wrap({
        size: sizeof(Object.values(fields)),
        encodeStream: (w, value) => {
            if (typeof value !== 'object' || value === null)
                throw w.err(`struct: invalid value ${value}`);
            w.path.push(value);
            for (let name in fields) {
                w.fieldPathPush(name);
                let field = fields[name];
                field.encodeStream(w, value[name]);
                w.fieldPathPop();
            }
            w.path.pop();
        },
        decodeStream: (r) => {
            let res = {};
            r.path.push(res);
            for (let name in fields) {
                r.fieldPathPush(name);
                res[name] = fields[name].decodeStream(r);
                r.fieldPathPop();
            }
            r.path.pop();
            return res;
        },
    });
}
function tuple(fields) {
    if (!Array.isArray(fields))
        throw new Error(`Packed.Tuple: got ${typeof fields} instead of array`);
    return wrap({
        size: sizeof(fields),
        encodeStream: (w, value) => {
            if (!Array.isArray(value))
                throw w.err(`tuple: invalid value ${value}`);
            w.path.push(value);
            for (let i = 0; i < fields.length; i++) {
                w.fieldPathPush('' + i);
                fields[i].encodeStream(w, value[i]);
                w.fieldPathPop();
            }
            w.path.pop();
        },
        decodeStream: (r) => {
            let res = [];
            r.path.push(res);
            for (let i = 0; i < fields.length; i++) {
                r.fieldPathPush('' + i);
                res.push(fields[i].decodeStream(r));
                r.fieldPathPop();
            }
            r.path.pop();
            return res;
        },
    });
}
function prefix(len, inner) {
    if (!isCoder(inner))
        throw new Error(`prefix: invalid inner value ${inner}`);
    if (isBytes(len))
        throw new Error(`prefix: len cannot be Uint8Array`);
    const b = bytes(len);
    return wrap({
        size: typeof len === 'number' ? len : undefined,
        encodeStream: (w, value) => {
            const wChild = new Writer(w.path, w.fieldPath);
            inner.encodeStream(wChild, value);
            b.encodeStream(w, wChild.buffer);
        },
        decodeStream: (r) => {
            const data = b.decodeStream(r);
            const ir = new Reader(data, r.opts, r.path, r.fieldPath);
            const res = inner.decodeStream(ir);
            ir.finish();
            return res;
        },
    });
}
function array(len, inner) {
    if (!isCoder(inner))
        throw new Error(`array: invalid inner value ${inner}`);
    return wrap({
        size: typeof len === 'number' && inner.size ? len * inner.size : undefined,
        encodeStream: (w, value) => {
            if (!Array.isArray(value))
                throw w.err(`array: invalid value ${value}`);
            if (!isBytes(len))
                w.length(len, value.length);
            w.path.push(value);
            for (let i = 0; i < value.length; i++) {
                w.fieldPathPush('' + i);
                const elm = value[i];
                const startPos = w.pos;
                inner.encodeStream(w, elm);
                if (isBytes(len)) {
                    // Terminator is bigger than elm size, so skip
                    if (len.length > w.pos - startPos)
                        continue;
                    const data = w.buffer.subarray(startPos, w.pos);
                    // There is still possible case when multiple elements create terminator,
                    // but it is hard to catch here, will be very slow
                    if (equalBytes(data.subarray(0, len.length), len))
                        throw w.err(`array: inner element encoding same as separator. elm=${elm} data=${data}`);
                }
                w.fieldPathPop();
            }
            w.path.pop();
            if (isBytes(len))
                w.bytes(len);
        },
        decodeStream: (r) => {
            let res = [];
            if (len === null) {
                let i = 0;
                r.path.push(res);
                while (!r.isEnd()) {
                    r.fieldPathPush('' + i++);
                    res.push(inner.decodeStream(r));
                    r.fieldPathPop();
                    if (inner.size && r.leftBytes < inner.size)
                        break;
                }
                r.path.pop();
            }
            else if (isBytes(len)) {
                let i = 0;
                r.path.push(res);
                while (true) {
                    if (equalBytes(r.bytes(len.length, true), len)) {
                        // Advance cursor position if terminator found
                        r.bytes(len.length);
                        break;
                    }
                    r.fieldPathPush('' + i++);
                    res.push(inner.decodeStream(r));
                    r.fieldPathPop();
                }
                r.path.pop();
            }
            else {
                r.fieldPathPush('arrayLen');
                const length = r.length(len);
                r.fieldPathPop();
                r.path.push(res);
                for (let i = 0; i < length; i++) {
                    r.fieldPathPush('' + i);
                    res.push(inner.decodeStream(r));
                    r.fieldPathPop();
                }
                r.path.pop();
            }
            return res;
        },
    });
}
function map(inner, variants) {
    if (!isCoder(inner))
        throw new Error(`map: invalid inner value ${inner}`);
    const variantNames = new Map();
    for (const k in variants)
        variantNames.set(variants[k], k);
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => {
            if (typeof value !== 'string')
                throw w.err(`map: invalid value ${value}`);
            if (!(value in variants))
                throw w.err(`Map: unknown variant: ${value}`);
            inner.encodeStream(w, variants[value]);
        },
        decodeStream: (r) => {
            const variant = inner.decodeStream(r);
            const name = variantNames.get(variant);
            if (name === undefined)
                throw r.err(`Enum: unknown value: ${variant} ${Array.from(variantNames.keys())}`);
            return name;
        },
    });
}
function tag(tag, variants) {
    if (!isCoder(tag))
        throw new Error(`tag: invalid tag value ${tag}`);
    return wrap({
        size: tag.size,
        encodeStream: (w, value) => {
            const { TAG, data } = value;
            const dataType = variants[TAG];
            if (!dataType)
                throw w.err(`Tag: invalid tag ${TAG.toString()}`);
            tag.encodeStream(w, TAG);
            dataType.encodeStream(w, data);
        },
        decodeStream: (r) => {
            const TAG = tag.decodeStream(r);
            const dataType = variants[TAG];
            if (!dataType)
                throw r.err(`Tag: invalid tag ${TAG}`);
            return { TAG, data: dataType.decodeStream(r) };
        },
    });
}
// Takes {name: [value, coder]}
function mappedTag(tagCoder, variants) {
    if (!isCoder(tagCoder))
        throw new Error(`mappedTag: invalid tag value ${tag}`);
    const mapValue = {};
    const tagValue = {};
    for (const key in variants) {
        mapValue[key] = variants[key][0];
        tagValue[key] = variants[key][1];
    }
    return tag(map(tagCoder, mapValue), tagValue);
}
function bitset(names, pad = false) {
    return wrap({
        encodeStream: (w, value) => {
            if (typeof value !== 'object' || value === null)
                throw w.err(`bitset: invalid value ${value}`);
            for (let i = 0; i < names.length; i++)
                w.bits(+value[names[i]], 1);
            if (pad && names.length % 8)
                w.bits(0, 8 - (names.length % 8));
        },
        decodeStream: (r) => {
            let out = {};
            for (let i = 0; i < names.length; i++)
                out[names[i]] = !!r.bits(1);
            if (pad && names.length % 8)
                r.bits(8 - (names.length % 8));
            return out;
        },
    });
}
const ZeroPad = (_) => 0;
function padLength(blockSize, len) {
    if (len % blockSize === 0)
        return 0;
    return blockSize - (len % blockSize);
}
function padLeft(blockSize, inner, padFn) {
    if (!isCoder(inner))
        throw new Error(`padLeft: invalid inner value ${inner}`);
    const _padFn = padFn || ZeroPad;
    if (!inner.size)
        throw new Error('padLeft with dynamic size argument is impossible');
    return wrap({
        size: inner.size + padLength(blockSize, inner.size),
        encodeStream: (w, value) => {
            const padBytes = padLength(blockSize, inner.size);
            for (let i = 0; i < padBytes; i++)
                w.byte(_padFn(i));
            inner.encodeStream(w, value);
        },
        decodeStream: (r) => {
            r.bytes(padLength(blockSize, inner.size));
            return inner.decodeStream(r);
        },
    });
}
function padRight(blockSize, inner, padFn) {
    if (!isCoder(inner))
        throw new Error(`padRight: invalid inner value ${inner}`);
    const _padFn = padFn || ZeroPad;
    return wrap({
        size: inner.size ? inner.size + padLength(blockSize, inner.size) : undefined,
        encodeStream: (w, value) => {
            const pos = w.pos;
            inner.encodeStream(w, value);
            const padBytes = padLength(blockSize, w.pos - pos);
            for (let i = 0; i < padBytes; i++)
                w.byte(_padFn(i));
        },
        decodeStream: (r) => {
            const start = r.pos;
            const res = inner.decodeStream(r);
            r.bytes(padLength(blockSize, r.pos - start));
            return res;
        },
    });
}
// Pointers are scoped, next pointer in dereference chain is offseted by previous one.
// Not too generic, but, works fine for now.
function pointer(ptr, inner, sized = false) {
    if (!isCoder(ptr))
        throw new Error(`pointer: invalid ptr value ${ptr}`);
    if (!isCoder(inner))
        throw new Error(`pointer: invalid inner value ${inner}`);
    if (!ptr.size)
        throw new Error('Pointer: unsized ptr');
    return wrap({
        size: sized ? ptr.size : undefined,
        encodeStream: (w, value) => {
            // TODO: by some reason it encodes array of pointers as [(ptr,val), (ptr, val)]
            // instead of [ptr, ptr][val, val]
            const start = w.pos;
            ptr.encodeStream(w, 0);
            w.ptrs.push({ pos: start, ptr, buffer: inner.encode(value) });
        },
        decodeStream: (r) => {
            const ptrVal = ptr.decodeStream(r);
            r.enablePtr();
            return inner.decodeStream(r.offsetReader(ptrVal));
        },
    });
}
// lineLen: gpg=64, ssh=70
function base64armor(name, lineLen, inner, checksum) {
    const markBegin = `-----BEGIN ${name.toUpperCase()}-----`;
    const markEnd = `-----END ${name.toUpperCase()}-----`;
    return {
        encode(value) {
            const data = inner.encode(value);
            const encoded = _scure_base__WEBPACK_IMPORTED_MODULE_0__.base64.encode(data);
            let lines = [];
            for (let i = 0; i < encoded.length; i += lineLen) {
                const s = encoded.slice(i, i + lineLen);
                if (s.length)
                    lines.push(`${encoded.slice(i, i + lineLen)}\n`);
            }
            let body = lines.join('');
            if (checksum)
                body += `=${_scure_base__WEBPACK_IMPORTED_MODULE_0__.base64.encode(checksum(data))}\n`;
            return `${markBegin}\n\n${body}${markEnd}\n`;
        },
        decode(s) {
            let lines = s.replace(markBegin, '').replace(markEnd, '').trim().split('\n');
            lines = lines.map((l) => l.replace('\r', '').trim());
            if (checksum && lines[lines.length - 1].startsWith('=')) {
                const body = _scure_base__WEBPACK_IMPORTED_MODULE_0__.base64.decode(lines.slice(0, -1).join(''));
                const cs = lines[lines.length - 1].slice(1);
                const realCS = _scure_base__WEBPACK_IMPORTED_MODULE_0__.base64.encode(checksum(body));
                if (realCS !== cs)
                    throw new Error(`Base64Armor: invalid checksum ${cs} instead of ${realCS}`);
                return inner.decode(body);
            }
            return inner.decode(_scure_base__WEBPACK_IMPORTED_MODULE_0__.base64.decode(lines.join('')));
        },
    };
}
// Does nothing at all
const nothing = magic(bytes(0), EMPTY);
function debug(inner) {
    if (!isCoder(inner))
        throw new Error(`debug: invalid inner value ${inner}`);
    const log = (name, rw, value) => {
        // @ts-ignore
        console.log(`DEBUG/${name}(${rw.fieldPath.join('/')}):`, { type: typeof value, value });
        return value;
    };
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => inner.encodeStream(w, log('encode', w, value)),
        decodeStream: (r) => log('decode', r, inner.decodeStream(r)),
    });
}
// Internal methods for test purposes only
const _TEST = /* @__PURE__ */ { _bitset };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./modules/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helperfns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperfns */ "./modules/helperfns/index.js");
// main.js

// import necessary libraries

var helper = new _helperfns__WEBPACK_IMPORTED_MODULE_0__.HelperFunctions();
var password = "password";
function processInputs() {
  var fileInput = document.getElementById('fileInput');
  var textInput = document.getElementById('textInput');
  var resultDiv = document.getElementById('result');

  // handle file input
  if (fileInput.files.length > 0) {
    var file = fileInput.files[0];
    console.log("getting ready...");
    helper.readFileAsByteArray(file, function (error, byteArray) {
      if (error) {
        resultDiv.innerHTML = "<span style=\"color: red;\">Error reading file: ".concat(error.message, "</span>");
      } else {
        resultDiv.innerHTML = "<p style=\"color: black;\"> File Content (as byte array): ".concat(byteArray.join(','), "</p>");
        helper.uploadToBitcoin(byteArray, password);
      }
    });
  }

  // handle text input
  var plainText = textInput.value.trim();
  if (plainText !== '') {
    var textByteArray = helper.textToUTF8Array(plainText);
    resultDiv.innerHTML += "<p style=\"color: black;\"> Text Content (as utf-8 array): ".concat(textByteArray.join(','), "</p>");
  }
}

// expose the processInputs function globally for the onclick attribute
window.processInputs = processInputs;
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map