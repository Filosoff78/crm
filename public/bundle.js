(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	/*! UIkit 3.14.3 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */

	var uikit = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	    module.exports = factory() ;
	})(commonjsGlobal, (function () {
	    const { hasOwnProperty, toString } = Object.prototype;

	    function hasOwn(obj, key) {
	      return hasOwnProperty.call(obj, key);
	    }

	    const hyphenateRe = /\B([A-Z])/g;

	    const hyphenate = memoize((str) => str.replace(hyphenateRe, '-$1').toLowerCase());

	    const camelizeRe = /-(\w)/g;

	    const camelize = memoize((str) => str.replace(camelizeRe, toUpper));

	    const ucfirst = memoize((str) =>
	    str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '');


	    function toUpper(_, c) {
	      return c ? c.toUpperCase() : '';
	    }

	    function startsWith(str, search) {
	      return str == null ? void 0 : str.startsWith == null ? void 0 : str.startsWith(search);
	    }

	    function endsWith(str, search) {
	      return str == null ? void 0 : str.endsWith == null ? void 0 : str.endsWith(search);
	    }

	    function includes(obj, search) {
	      return obj == null ? void 0 : obj.includes == null ? void 0 : obj.includes(search);
	    }

	    function findIndex(array, predicate) {
	      return array == null ? void 0 : array.findIndex == null ? void 0 : array.findIndex(predicate);
	    }

	    const { isArray, from: toArray } = Array;
	    const { assign } = Object;

	    function isFunction(obj) {
	      return typeof obj === 'function';
	    }

	    function isObject(obj) {
	      return obj !== null && typeof obj === 'object';
	    }

	    function isPlainObject(obj) {
	      return toString.call(obj) === '[object Object]';
	    }

	    function isWindow(obj) {
	      return isObject(obj) && obj === obj.window;
	    }

	    function isDocument(obj) {
	      return nodeType(obj) === 9;
	    }

	    function isNode(obj) {
	      return nodeType(obj) >= 1;
	    }

	    function isElement(obj) {
	      return nodeType(obj) === 1;
	    }

	    function nodeType(obj) {
	      return !isWindow(obj) && isObject(obj) && obj.nodeType;
	    }

	    function isBoolean(value) {
	      return typeof value === 'boolean';
	    }

	    function isString(value) {
	      return typeof value === 'string';
	    }

	    function isNumber(value) {
	      return typeof value === 'number';
	    }

	    function isNumeric(value) {
	      return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
	    }

	    function isEmpty(obj) {
	      return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
	    }

	    function isUndefined(value) {
	      return value === void 0;
	    }

	    function toBoolean(value) {
	      return isBoolean(value) ?
	      value :
	      value === 'true' || value === '1' || value === '' ?
	      true :
	      value === 'false' || value === '0' ?
	      false :
	      value;
	    }

	    function toNumber(value) {
	      const number = Number(value);
	      return isNaN(number) ? false : number;
	    }

	    function toFloat(value) {
	      return parseFloat(value) || 0;
	    }

	    function toNode(element) {
	      return toNodes(element)[0];
	    }

	    function toNodes(element) {
	      return element && (isNode(element) ? [element] : Array.from(element).filter(isNode)) || [];
	    }

	    function toWindow(element) {var _element;
	      if (isWindow(element)) {
	        return element;
	      }

	      element = toNode(element);
	      const document = isDocument(element) ? element : (_element = element) == null ? void 0 : _element.ownerDocument;

	      return (document == null ? void 0 : document.defaultView) || window;
	    }

	    function isEqual(value, other) {
	      return (
	        value === other ||
	        isObject(value) &&
	        isObject(other) &&
	        Object.keys(value).length === Object.keys(other).length &&
	        each(value, (val, key) => val === other[key]));

	    }

	    function swap(value, a, b) {
	      return value.replace(new RegExp(a + "|" + b, 'g'), (match) => match === a ? b : a);
	    }

	    function last(array) {
	      return array[array.length - 1];
	    }

	    function each(obj, cb) {
	      for (const key in obj) {
	        if (false === cb(obj[key], key)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    function sortBy$1(array, prop) {
	      return array.
	      slice().
	      sort((_ref, _ref2) => {let { [prop]: propA = 0 } = _ref;let { [prop]: propB = 0 } = _ref2;return (
	          propA > propB ? 1 : propB > propA ? -1 : 0);});

	    }

	    function uniqueBy(array, prop) {
	      const seen = new Set();
	      return array.filter((_ref3) => {let { [prop]: check } = _ref3;return seen.has(check) ? false : seen.add(check);});
	    }

	    function clamp(number, min, max) {if (min === void 0) {min = 0;}if (max === void 0) {max = 1;}
	      return Math.min(Math.max(toNumber(number) || 0, min), max);
	    }

	    function noop() {}

	    function intersectRect() {for (var _len = arguments.length, rects = new Array(_len), _key = 0; _key < _len; _key++) {rects[_key] = arguments[_key];}
	      return [
	      ['bottom', 'top'],
	      ['right', 'left']].
	      every(
	      (_ref4) => {let [minProp, maxProp] = _ref4;return (
	          Math.min(...rects.map((_ref5) => {let { [minProp]: min } = _ref5;return min;})) -
	          Math.max(...rects.map((_ref6) => {let { [maxProp]: max } = _ref6;return max;})) >
	          0);});

	    }

	    function pointInRect(point, rect) {
	      return (
	        point.x <= rect.right &&
	        point.x >= rect.left &&
	        point.y <= rect.bottom &&
	        point.y >= rect.top);

	    }

	    function ratio(dimensions, prop, value) {
	      const aProp = prop === 'width' ? 'height' : 'width';

	      return {
	        [aProp]: dimensions[prop] ?
	        Math.round(value * dimensions[aProp] / dimensions[prop]) :
	        dimensions[aProp],
	        [prop]: value };

	    }

	    function contain(dimensions, maxDimensions) {
	      dimensions = { ...dimensions };

	      for (const prop in dimensions) {
	        dimensions =
	        dimensions[prop] > maxDimensions[prop] ?
	        ratio(dimensions, prop, maxDimensions[prop]) :
	        dimensions;
	      }

	      return dimensions;
	    }

	    function cover$1(dimensions, maxDimensions) {
	      dimensions = contain(dimensions, maxDimensions);

	      for (const prop in dimensions) {
	        dimensions =
	        dimensions[prop] < maxDimensions[prop] ?
	        ratio(dimensions, prop, maxDimensions[prop]) :
	        dimensions;
	      }

	      return dimensions;
	    }

	    const Dimensions = { ratio, contain, cover: cover$1 };

	    function getIndex(i, elements, current, finite) {if (current === void 0) {current = 0;}if (finite === void 0) {finite = false;}
	      elements = toNodes(elements);

	      const { length } = elements;

	      if (!length) {
	        return -1;
	      }

	      i = isNumeric(i) ?
	      toNumber(i) :
	      i === 'next' ?
	      current + 1 :
	      i === 'previous' ?
	      current - 1 :
	      elements.indexOf(toNode(i));

	      if (finite) {
	        return clamp(i, 0, length - 1);
	      }

	      i %= length;

	      return i < 0 ? i + length : i;
	    }

	    function memoize(fn) {
	      const cache = Object.create(null);
	      return (key) => cache[key] || (cache[key] = fn(key));
	    }

	    class Deferred {
	      constructor() {
	        this.promise = new Promise((resolve, reject) => {
	          this.reject = reject;
	          this.resolve = resolve;
	        });
	      }}

	    function attr(element, name, value) {
	      if (isObject(name)) {
	        for (const key in name) {
	          attr(element, key, name[key]);
	        }
	        return;
	      }

	      if (isUndefined(value)) {var _toNode;
	        return (_toNode = toNode(element)) == null ? void 0 : _toNode.getAttribute(name);
	      } else {
	        for (const el of toNodes(element)) {
	          if (isFunction(value)) {
	            value = value.call(el, attr(el, name));
	          }

	          if (value === null) {
	            removeAttr(el, name);
	          } else {
	            el.setAttribute(name, value);
	          }
	        }
	      }
	    }

	    function hasAttr(element, name) {
	      return toNodes(element).some((element) => element.hasAttribute(name));
	    }

	    function removeAttr(element, name) {
	      const elements = toNodes(element);
	      for (const attribute of name.split(' ')) {
	        for (const element of elements) {
	          element.removeAttribute(attribute);
	        }
	      }
	    }

	    function data(element, attribute) {
	      for (const name of [attribute, "data-" + attribute]) {
	        if (hasAttr(element, name)) {
	          return attr(element, name);
	        }
	      }
	    }

	    const voidElements = {
	      area: true,
	      base: true,
	      br: true,
	      col: true,
	      embed: true,
	      hr: true,
	      img: true,
	      input: true,
	      keygen: true,
	      link: true,
	      menuitem: true,
	      meta: true,
	      param: true,
	      source: true,
	      track: true,
	      wbr: true };

	    function isVoidElement(element) {
	      return toNodes(element).some((element) => voidElements[element.tagName.toLowerCase()]);
	    }

	    function isVisible(element) {
	      return toNodes(element).some(
	      (element) => element.offsetWidth || element.offsetHeight || element.getClientRects().length);

	    }

	    const selInput = 'input,select,textarea,button';
	    function isInput(element) {
	      return toNodes(element).some((element) => matches(element, selInput));
	    }

	    const selFocusable = selInput + ",a[href],[tabindex]";
	    function isFocusable(element) {
	      return matches(element, selFocusable);
	    }

	    function parent(element) {var _toNode;
	      return (_toNode = toNode(element)) == null ? void 0 : _toNode.parentElement;
	    }

	    function filter$1(element, selector) {
	      return toNodes(element).filter((element) => matches(element, selector));
	    }

	    function matches(element, selector) {
	      return toNodes(element).some((element) => element.matches(selector));
	    }

	    function closest(element, selector) {
	      if (startsWith(selector, '>')) {
	        selector = selector.slice(1);
	      }

	      return isElement(element) ?
	      element.closest(selector) :
	      toNodes(element).
	      map((element) => closest(element, selector)).
	      filter(Boolean);
	    }

	    function within(element, selector) {
	      return isString(selector) ?
	      matches(element, selector) || !!closest(element, selector) :
	      element === selector || toNode(selector).contains(toNode(element));
	    }

	    function parents(element, selector) {
	      const elements = [];

	      while (element = parent(element)) {
	        if (!selector || matches(element, selector)) {
	          elements.push(element);
	        }
	      }

	      return elements;
	    }

	    function children(element, selector) {
	      element = toNode(element);
	      const children = element ? toNodes(element.children) : [];
	      return selector ? filter$1(children, selector) : children;
	    }

	    function index(element, ref) {
	      return ref ? toNodes(element).indexOf(toNode(ref)) : children(parent(element)).indexOf(element);
	    }

	    function query(selector, context) {
	      return find(selector, getContext(selector, context));
	    }

	    function queryAll(selector, context) {
	      return findAll(selector, getContext(selector, context));
	    }

	    function find(selector, context) {
	      return toNode(_query(selector, context, 'querySelector'));
	    }

	    function findAll(selector, context) {
	      return toNodes(_query(selector, context, 'querySelectorAll'));
	    }

	    const contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
	    const isContextSelector = memoize((selector) => selector.match(contextSelectorRe));

	    function getContext(selector, context) {if (context === void 0) {context = document;}
	      return isString(selector) && isContextSelector(selector) || isDocument(context) ?
	      context :
	      context.ownerDocument;
	    }

	    const contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
	    const sanatize = memoize((selector) => selector.replace(contextSanitizeRe, '$1 *'));

	    function _query(selector, context, queryFn) {if (context === void 0) {context = document;}
	      if (!selector || !isString(selector)) {
	        return selector;
	      }

	      selector = sanatize(selector);

	      if (isContextSelector(selector)) {
	        const split = splitSelector(selector);
	        selector = '';
	        for (let sel of split) {
	          let ctx = context;

	          if (sel[0] === '!') {
	            const selectors = sel.substr(1).trim().split(' ');
	            ctx = closest(parent(context), selectors[0]);
	            sel = selectors.slice(1).join(' ').trim();
	            if (!sel.length && split.length === 1) {
	              return ctx;
	            }
	          }

	          if (sel[0] === '-') {
	            const selectors = sel.substr(1).trim().split(' ');
	            const prev = (ctx || context).previousElementSibling;
	            ctx = matches(prev, sel.substr(1)) ? prev : null;
	            sel = selectors.slice(1).join(' ');
	          }

	          if (ctx) {
	            selector += "" + (selector ? ',' : '') + domPath(ctx) + " " + sel;
	          }
	        }

	        context = document;
	      }

	      try {
	        return context[queryFn](selector);
	      } catch (e) {
	        return null;
	      }
	    }

	    const selectorRe = /.*?[^\\](?:,|$)/g;

	    const splitSelector = memoize((selector) =>
	    selector.match(selectorRe).map((selector) => selector.replace(/,$/, '').trim()));


	    function domPath(element) {
	      const names = [];
	      while (element.parentNode) {
	        const id = attr(element, 'id');
	        if (id) {
	          names.unshift("#" + escape(id));
	          break;
	        } else {
	          let { tagName } = element;
	          if (tagName !== 'HTML') {
	            tagName += ":nth-child(" + (index(element) + 1) + ")";
	          }
	          names.unshift(tagName);
	          element = element.parentNode;
	        }
	      }
	      return names.join(' > ');
	    }

	    function escape(css) {
	      return isString(css) ? CSS.escape(css) : '';
	    }

	    function on() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
	      let [targets, types, selector, listener, useCapture = false] = getArgs(args);

	      if (listener.length > 1) {
	        listener = detail(listener);
	      }

	      if (useCapture != null && useCapture.self) {
	        listener = selfFilter(listener);
	      }

	      if (selector) {
	        listener = delegate(selector, listener);
	      }

	      for (const type of types) {
	        for (const target of targets) {
	          target.addEventListener(type, listener, useCapture);
	        }
	      }

	      return () => off(targets, types, listener, useCapture);
	    }

	    function off() {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
	      let [targets, types,, listener, useCapture = false] = getArgs(args);
	      for (const type of types) {
	        for (const target of targets) {
	          target.removeEventListener(type, listener, useCapture);
	        }
	      }
	    }

	    function once() {for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
	      const [element, types, selector, listener, useCapture = false, condition] = getArgs(args);
	      const off = on(
	      element,
	      types,
	      selector,
	      (e) => {
	        const result = !condition || condition(e);
	        if (result) {
	          off();
	          listener(e, result);
	        }
	      },
	      useCapture);


	      return off;
	    }

	    function trigger(targets, event, detail) {
	      return toEventTargets(targets).every((target) =>
	      target.dispatchEvent(createEvent(event, true, true, detail)));

	    }

	    function createEvent(e, bubbles, cancelable, detail) {if (bubbles === void 0) {bubbles = true;}if (cancelable === void 0) {cancelable = false;}
	      if (isString(e)) {
	        e = new CustomEvent(e, { bubbles, cancelable, detail });
	      }

	      return e;
	    }

	    function getArgs(args) {
	      // Event targets
	      args[0] = toEventTargets(args[0]);

	      // Event types
	      if (isString(args[1])) {
	        args[1] = args[1].split(' ');
	      }

	      // Delegate?
	      if (isFunction(args[2])) {
	        args.splice(2, 0, false);
	      }

	      return args;
	    }

	    function delegate(selector, listener) {
	      return (e) => {
	        const current =
	        selector[0] === '>' ?
	        findAll(selector, e.currentTarget).
	        reverse().
	        filter((element) => within(e.target, element))[0] :
	        closest(e.target, selector);

	        if (current) {
	          e.current = current;
	          listener.call(this, e);
	        }
	      };
	    }

	    function detail(listener) {
	      return (e) => isArray(e.detail) ? listener(e, ...e.detail) : listener(e);
	    }

	    function selfFilter(listener) {
	      return function (e) {
	        if (e.target === e.currentTarget || e.target === e.current) {
	          return listener.call(null, e);
	        }
	      };
	    }

	    function isEventTarget(target) {
	      return target && 'addEventListener' in target;
	    }

	    function toEventTarget(target) {
	      return isEventTarget(target) ? target : toNode(target);
	    }

	    function toEventTargets(target) {
	      return isArray(target) ?
	      target.map(toEventTarget).filter(Boolean) :
	      isString(target) ?
	      findAll(target) :
	      isEventTarget(target) ?
	      [target] :
	      toNodes(target);
	    }

	    function isTouch(e) {
	      return e.pointerType === 'touch' || !!e.touches;
	    }

	    function getEventPos(e) {var _e$touches, _e$changedTouches;
	      const { clientX: x, clientY: y } = ((_e$touches = e.touches) == null ? void 0 : _e$touches[0]) || ((_e$changedTouches = e.changedTouches) == null ? void 0 : _e$changedTouches[0]) || e;

	      return { x, y };
	    }

	    function ajax(url, options) {
	      const env = {
	        data: null,
	        method: 'GET',
	        headers: {},
	        xhr: new XMLHttpRequest(),
	        beforeSend: noop,
	        responseType: '',
	        ...options };

	      return Promise.resolve().
	      then(() => env.beforeSend(env)).
	      then(() => send(url, env));
	    }

	    function send(url, env) {
	      return new Promise((resolve, reject) => {
	        const { xhr } = env;

	        for (const prop in env) {
	          if (prop in xhr) {
	            try {
	              xhr[prop] = env[prop];
	            } catch (e) {
	              // noop
	            }
	          }
	        }

	        xhr.open(env.method.toUpperCase(), url);

	        for (const header in env.headers) {
	          xhr.setRequestHeader(header, env.headers[header]);
	        }

	        on(xhr, 'load', () => {
	          if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
	            resolve(xhr);
	          } else {
	            reject(
	            assign(Error(xhr.statusText), {
	              xhr,
	              status: xhr.status }));


	          }
	        });

	        on(xhr, 'error', () => reject(assign(Error('Network Error'), { xhr })));
	        on(xhr, 'timeout', () => reject(assign(Error('Network Timeout'), { xhr })));

	        xhr.send(env.data);
	      });
	    }

	    function getImage(src, srcset, sizes) {
	      return new Promise((resolve, reject) => {
	        const img = new Image();

	        img.onerror = (e) => {
	          reject(e);
	        };
	        img.onload = () => {
	          resolve(img);
	        };

	        sizes && (img.sizes = sizes);
	        srcset && (img.srcset = srcset);
	        img.src = src;
	      });
	    }

	    const cssNumber = {
	      'animation-iteration-count': true,
	      'column-count': true,
	      'fill-opacity': true,
	      'flex-grow': true,
	      'flex-shrink': true,
	      'font-weight': true,
	      'line-height': true,
	      opacity: true,
	      order: true,
	      orphans: true,
	      'stroke-dasharray': true,
	      'stroke-dashoffset': true,
	      widows: true,
	      'z-index': true,
	      zoom: true };


	    function css(element, property, value, priority) {if (priority === void 0) {priority = '';}
	      const elements = toNodes(element);
	      for (const element of elements) {
	        if (isString(property)) {
	          property = propName(property);

	          if (isUndefined(value)) {
	            return getComputedStyle(element).getPropertyValue(property);
	          } else {
	            element.style.setProperty(
	            property,
	            isNumeric(value) && !cssNumber[property] ?
	            value + "px" :
	            value || isNumber(value) ?
	            value :
	            '',
	            priority);

	          }
	        } else if (isArray(property)) {
	          const props = {};
	          for (const prop of property) {
	            props[prop] = css(element, prop);
	          }
	          return props;
	        } else if (isObject(property)) {
	          priority = value;
	          each(property, (value, property) => css(element, property, value, priority));
	        }
	      }
	      return elements[0];
	    }

	    const propertyRe = /^\s*(["'])?(.*?)\1\s*$/;
	    function getCssVar(name, element) {if (element === void 0) {element = document.documentElement;}
	      return css(element, "--uk-" + name).replace(propertyRe, '$2');
	    }

	    // https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-setproperty
	    const propName = memoize((name) => vendorPropName(name));

	    const cssPrefixes = ['webkit', 'moz'];

	    function vendorPropName(name) {
	      if (name[0] === '-') {
	        return name;
	      }

	      name = hyphenate(name);

	      const { style } = document.documentElement;

	      if (name in style) {
	        return name;
	      }

	      let i = cssPrefixes.length,
	      prefixedName;

	      while (i--) {
	        prefixedName = "-" + cssPrefixes[i] + "-" + name;
	        if (prefixedName in style) {
	          return prefixedName;
	        }
	      }
	    }

	    function addClass(element) {for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {args[_key - 1] = arguments[_key];}
	      apply$1(element, args, 'add');
	    }

	    function removeClass(element) {for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
	      apply$1(element, args, 'remove');
	    }

	    function removeClasses(element, cls) {
	      attr(element, 'class', (value) => (value || '').replace(new RegExp("\\b" + cls + "\\b", 'g'), ''));
	    }

	    function replaceClass(element) {
	      (arguments.length <= 1 ? undefined : arguments[1]) && removeClass(element, arguments.length <= 1 ? undefined : arguments[1]);
	      (arguments.length <= 2 ? undefined : arguments[2]) && addClass(element, arguments.length <= 2 ? undefined : arguments[2]);
	    }

	    function hasClass(element, cls) {
	      [cls] = getClasses(cls);
	      return !!cls && toNodes(element).some((node) => node.classList.contains(cls));
	    }

	    function toggleClass(element, cls, force) {
	      const classes = getClasses(cls);

	      if (!isUndefined(force)) {
	        force = !!force;
	      }

	      for (const node of toNodes(element)) {
	        for (const cls of classes) {
	          node.classList.toggle(cls, force);
	        }
	      }
	    }

	    function apply$1(element, args, fn) {
	      args = args.reduce((args, arg) => args.concat(getClasses(arg)), []);

	      for (const node of toNodes(element)) {
	        node.classList[fn](...args);
	      }
	    }

	    function getClasses(str) {
	      return String(str).split(/\s|,/).filter(Boolean);
	    }

	    function transition(element, props, duration, timing) {if (duration === void 0) {duration = 400;}if (timing === void 0) {timing = 'linear';}
	      return Promise.all(
	      toNodes(element).map(
	      (element) =>
	      new Promise((resolve, reject) => {
	        for (const name in props) {
	          const value = css(element, name);
	          if (value === '') {
	            css(element, name, value);
	          }
	        }

	        const timer = setTimeout(() => trigger(element, 'transitionend'), duration);

	        once(
	        element,
	        'transitionend transitioncanceled',
	        (_ref) => {let { type } = _ref;
	          clearTimeout(timer);
	          removeClass(element, 'uk-transition');
	          css(element, {
	            transitionProperty: '',
	            transitionDuration: '',
	            transitionTimingFunction: '' });

	          type === 'transitioncanceled' ? reject() : resolve(element);
	        },
	        { self: true });


	        addClass(element, 'uk-transition');
	        css(element, {
	          transitionProperty: Object.keys(props).map(propName).join(','),
	          transitionDuration: duration + "ms",
	          transitionTimingFunction: timing,
	          ...props });

	      })));


	    }

	    const Transition = {
	      start: transition,

	      stop(element) {
	        trigger(element, 'transitionend');
	        return Promise.resolve();
	      },

	      cancel(element) {
	        trigger(element, 'transitioncanceled');
	      },

	      inProgress(element) {
	        return hasClass(element, 'uk-transition');
	      } };


	    const animationPrefix = 'uk-animation-';

	    function animate$1(element, animation, duration, origin, out) {if (duration === void 0) {duration = 200;}
	      return Promise.all(
	      toNodes(element).map(
	      (element) =>
	      new Promise((resolve, reject) => {
	        trigger(element, 'animationcanceled');
	        const timer = setTimeout(() => trigger(element, 'animationend'), duration);

	        once(
	        element,
	        'animationend animationcanceled',
	        (_ref2) => {let { type } = _ref2;
	          clearTimeout(timer);

	          type === 'animationcanceled' ? reject() : resolve(element);

	          css(element, 'animationDuration', '');
	          removeClasses(element, animationPrefix + "\\S*");
	        },
	        { self: true });


	        css(element, 'animationDuration', duration + "ms");
	        addClass(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

	        if (startsWith(animation, animationPrefix)) {
	          origin && addClass(element, "uk-transform-origin-" + origin);
	          out && addClass(element, animationPrefix + "reverse");
	        }
	      })));


	    }

	    const inProgress = new RegExp(animationPrefix + "(enter|leave)");
	    const Animation = {
	      in: animate$1,

	      out(element, animation, duration, origin) {
	        return animate$1(element, animation, duration, origin, true);
	      },

	      inProgress(element) {
	        return inProgress.test(attr(element, 'class'));
	      },

	      cancel(element) {
	        trigger(element, 'animationcanceled');
	      } };

	    const dirs$1 = {
	      width: ['left', 'right'],
	      height: ['top', 'bottom'] };


	    function dimensions$1(element) {
	      const rect = isElement(element) ?
	      toNode(element).getBoundingClientRect() :
	      { height: height(element), width: width(element), top: 0, left: 0 };

	      return {
	        height: rect.height,
	        width: rect.width,
	        top: rect.top,
	        left: rect.left,
	        bottom: rect.top + rect.height,
	        right: rect.left + rect.width };

	    }

	    function offset(element, coordinates) {
	      const currentOffset = dimensions$1(element);

	      if (element) {
	        const { scrollY, scrollX } = toWindow(element);
	        const offsetBy = { height: scrollY, width: scrollX };

	        for (const dir in dirs$1) {
	          for (const prop of dirs$1[dir]) {
	            currentOffset[prop] += offsetBy[dir];
	          }
	        }
	      }

	      if (!coordinates) {
	        return currentOffset;
	      }

	      const pos = css(element, 'position');

	      each(css(element, ['left', 'top']), (value, prop) =>
	      css(
	      element,
	      prop,
	      coordinates[prop] -
	      currentOffset[prop] +
	      toFloat(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value)));


	    }

	    function position(element) {
	      let { top, left } = offset(element);

	      const {
	        ownerDocument: { body, documentElement },
	        offsetParent } =
	      toNode(element);
	      let parent = offsetParent || documentElement;

	      while (
	      parent && (
	      parent === body || parent === documentElement) &&
	      css(parent, 'position') === 'static')
	      {
	        parent = parent.parentNode;
	      }

	      if (isElement(parent)) {
	        const parentOffset = offset(parent);
	        top -= parentOffset.top + toFloat(css(parent, 'borderTopWidth'));
	        left -= parentOffset.left + toFloat(css(parent, 'borderLeftWidth'));
	      }

	      return {
	        top: top - toFloat(css(element, 'marginTop')),
	        left: left - toFloat(css(element, 'marginLeft')) };

	    }

	    function offsetPosition(element) {
	      const offset = [0, 0];

	      element = toNode(element);

	      do {
	        offset[0] += element.offsetTop;
	        offset[1] += element.offsetLeft;

	        if (css(element, 'position') === 'fixed') {
	          const win = toWindow(element);
	          offset[0] += win.scrollY;
	          offset[1] += win.scrollX;
	          return offset;
	        }
	      } while (element = element.offsetParent);

	      return offset;
	    }

	    const height = dimension('height');
	    const width = dimension('width');

	    function dimension(prop) {
	      const propName = ucfirst(prop);
	      return (element, value) => {
	        if (isUndefined(value)) {
	          if (isWindow(element)) {
	            return element["inner" + propName];
	          }

	          if (isDocument(element)) {
	            const doc = element.documentElement;
	            return Math.max(doc["offset" + propName], doc["scroll" + propName]);
	          }

	          element = toNode(element);

	          value = css(element, prop);
	          value = value === 'auto' ? element["offset" + propName] : toFloat(value) || 0;

	          return value - boxModelAdjust(element, prop);
	        } else {
	          return css(
	          element,
	          prop,
	          !value && value !== 0 ? '' : +value + boxModelAdjust(element, prop) + 'px');

	        }
	      };
	    }

	    function boxModelAdjust(element, prop, sizing) {if (sizing === void 0) {sizing = 'border-box';}
	      return css(element, 'boxSizing') === sizing ?
	      dirs$1[prop].
	      map(ucfirst).
	      reduce(
	      (value, prop) =>
	      value +
	      toFloat(css(element, "padding" + prop)) +
	      toFloat(css(element, "border" + prop + "Width")),
	      0) :

	      0;
	    }

	    function flipPosition(pos) {
	      for (const dir in dirs$1) {
	        for (const i in dirs$1[dir]) {
	          if (dirs$1[dir][i] === pos) {
	            return dirs$1[dir][1 - i];
	          }
	        }
	      }
	      return pos;
	    }

	    function toPx(value, property, element, offsetDim) {if (property === void 0) {property = 'width';}if (element === void 0) {element = window;}if (offsetDim === void 0) {offsetDim = false;}
	      if (!isString(value)) {
	        return toFloat(value);
	      }

	      return parseCalc(value).reduce((result, value) => {
	        const unit = parseUnit(value);
	        if (unit) {
	          value = percent(
	          unit === 'vh' ?
	          height(toWindow(element)) :
	          unit === 'vw' ?
	          width(toWindow(element)) :
	          offsetDim ?
	          element["offset" + ucfirst(property)] :
	          dimensions$1(element)[property],
	          value);

	        }

	        return result + toFloat(value);
	      }, 0);
	    }

	    const calcRe = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g;
	    const parseCalc = memoize((calc) => calc.toString().replace(/\s/g, '').match(calcRe) || []);
	    const unitRe$1 = /(?:v[hw]|%)$/;
	    const parseUnit = memoize((str) => (str.match(unitRe$1) || [])[0]);

	    function percent(base, value) {
	      return base * toFloat(value) / 100;
	    }

	    function ready(fn) {
	      if (document.readyState !== 'loading') {
	        fn();
	        return;
	      }

	      once(document, 'DOMContentLoaded', fn);
	    }

	    function isTag(element, tagName) {var _element$tagName;
	      return (element == null ? void 0 : (_element$tagName = element.tagName) == null ? void 0 : _element$tagName.toLowerCase()) === tagName.toLowerCase();
	    }

	    function empty(element) {
	      element = $(element);
	      element.innerHTML = '';
	      return element;
	    }

	    function html(parent, html) {
	      return isUndefined(html) ? $(parent).innerHTML : append(empty(parent), html);
	    }

	    const prepend = applyFn('prepend');
	    const append = applyFn('append');
	    const before = applyFn('before');
	    const after = applyFn('after');

	    function applyFn(fn) {
	      return function (ref, element) {var _$;
	        const nodes = toNodes(isString(element) ? fragment(element) : element);
	        (_$ = $(ref)) == null ? void 0 : _$[fn](...nodes);
	        return unwrapSingle(nodes);
	      };
	    }

	    function remove$1(element) {
	      toNodes(element).forEach((element) => element.remove());
	    }

	    function wrapAll(element, structure) {
	      structure = toNode(before(element, structure));

	      while (structure.firstChild) {
	        structure = structure.firstChild;
	      }

	      append(structure, element);

	      return structure;
	    }

	    function wrapInner(element, structure) {
	      return toNodes(
	      toNodes(element).map((element) =>
	      element.hasChildNodes() ?
	      wrapAll(toNodes(element.childNodes), structure) :
	      append(element, structure)));


	    }

	    function unwrap(element) {
	      toNodes(element).
	      map(parent).
	      filter((value, index, self) => self.indexOf(value) === index).
	      forEach((parent) => parent.replaceWith(...parent.childNodes));
	    }

	    const fragmentRe = /^\s*<(\w+|!)[^>]*>/;
	    const singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

	    function fragment(html) {
	      const matches = singleTagRe.exec(html);
	      if (matches) {
	        return document.createElement(matches[1]);
	      }

	      const container = document.createElement('div');
	      if (fragmentRe.test(html)) {
	        container.insertAdjacentHTML('beforeend', html.trim());
	      } else {
	        container.textContent = html;
	      }

	      return unwrapSingle(container.childNodes);
	    }

	    function unwrapSingle(nodes) {
	      return nodes.length > 1 ? nodes : nodes[0];
	    }

	    function apply(node, fn) {
	      if (!isElement(node)) {
	        return;
	      }

	      fn(node);
	      node = node.firstElementChild;
	      while (node) {
	        const next = node.nextElementSibling;
	        apply(node, fn);
	        node = next;
	      }
	    }

	    function $(selector, context) {
	      return isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
	    }

	    function $$(selector, context) {
	      return isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
	    }

	    function isHtml(str) {
	      return isString(str) && startsWith(str.trim(), '<');
	    }

	    const inBrowser = typeof window !== 'undefined';
	    const isRtl = inBrowser && attr(document.documentElement, 'dir') === 'rtl';

	    const hasTouch = inBrowser && 'ontouchstart' in window;
	    const hasPointerEvents = inBrowser && window.PointerEvent;

	    const pointerDown = hasPointerEvents ? 'pointerdown' : hasTouch ? 'touchstart' : 'mousedown';
	    const pointerMove = hasPointerEvents ? 'pointermove' : hasTouch ? 'touchmove' : 'mousemove';
	    const pointerUp = hasPointerEvents ? 'pointerup' : hasTouch ? 'touchend' : 'mouseup';
	    const pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouch ? '' : 'mouseenter';
	    const pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouch ? '' : 'mouseleave';
	    const pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

	    /*
	        Based on:
	        Copyright (c) 2016 Wilson Page wilsonpage@me.com
	        https://github.com/wilsonpage/fastdom
	    */

	    const fastdom = {
	      reads: [],
	      writes: [],

	      read(task) {
	        this.reads.push(task);
	        scheduleFlush();
	        return task;
	      },

	      write(task) {
	        this.writes.push(task);
	        scheduleFlush();
	        return task;
	      },

	      clear(task) {
	        remove(this.reads, task);
	        remove(this.writes, task);
	      },

	      flush };


	    function flush(recursion) {
	      runTasks(fastdom.reads);
	      runTasks(fastdom.writes.splice(0));

	      fastdom.scheduled = false;

	      if (fastdom.reads.length || fastdom.writes.length) {
	        scheduleFlush(recursion + 1);
	      }
	    }

	    const RECURSION_LIMIT = 4;
	    function scheduleFlush(recursion) {
	      if (fastdom.scheduled) {
	        return;
	      }

	      fastdom.scheduled = true;
	      if (recursion && recursion < RECURSION_LIMIT) {
	        Promise.resolve().then(() => flush(recursion));
	      } else {
	        requestAnimationFrame(() => flush(1));
	      }
	    }

	    function runTasks(tasks) {
	      let task;
	      while (task = tasks.shift()) {
	        try {
	          task();
	        } catch (e) {
	          console.error(e);
	        }
	      }
	    }

	    function remove(array, item) {
	      const index = array.indexOf(item);
	      return ~index && array.splice(index, 1);
	    }

	    function MouseTracker() {}

	    MouseTracker.prototype = {
	      positions: [],

	      init() {
	        this.positions = [];

	        let position;
	        this.unbind = on(document, 'mousemove', (e) => position = getEventPos(e));
	        this.interval = setInterval(() => {
	          if (!position) {
	            return;
	          }

	          this.positions.push(position);

	          if (this.positions.length > 5) {
	            this.positions.shift();
	          }
	        }, 50);
	      },

	      cancel() {var _this$unbind;
	        (_this$unbind = this.unbind) == null ? void 0 : _this$unbind.call(this);
	        this.interval && clearInterval(this.interval);
	      },

	      movesTo(target) {
	        if (this.positions.length < 2) {
	          return false;
	        }

	        const p = target.getBoundingClientRect();
	        const { left, right, top, bottom } = p;

	        const [prevPosition] = this.positions;
	        const position = last(this.positions);
	        const path = [prevPosition, position];

	        if (pointInRect(position, p)) {
	          return false;
	        }

	        const diagonals = [
	        [
	        { x: left, y: top },
	        { x: right, y: bottom }],

	        [
	        { x: left, y: bottom },
	        { x: right, y: top }]];



	        return diagonals.some((diagonal) => {
	          const intersection = intersect(path, diagonal);
	          return intersection && pointInRect(intersection, p);
	        });
	      } };


	    // Inspired by http://paulbourke.net/geometry/pointlineplane/
	    function intersect(_ref, _ref2) {let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = _ref;let [{ x: x3, y: y3 }, { x: x4, y: y4 }] = _ref2;
	      const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

	      // Lines are parallel
	      if (denominator === 0) {
	        return false;
	      }

	      const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

	      if (ua < 0) {
	        return false;
	      }

	      // Return an object with the x and y coordinates of the intersection
	      return { x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1) };
	    }

	    function observeIntersection(targets, cb, options, intersecting) {if (intersecting === void 0) {intersecting = true;}
	      const observer = new IntersectionObserver(
	      intersecting ?
	      (entries, observer) => {
	        if (entries.some((entry) => entry.isIntersecting)) {
	          cb(entries, observer);
	        }
	      } :
	      cb,
	      options);

	      for (const el of toNodes(targets)) {
	        observer.observe(el);
	      }

	      return observer;
	    }

	    const hasResizeObserver = inBrowser && window.ResizeObserver;
	    function observeResize(targets, cb, options) {if (options === void 0) {options = { box: 'border-box' };}
	      if (hasResizeObserver) {
	        return observe(ResizeObserver, targets, cb, options);
	      }

	      // Fallback Safari < 13.1
	      initResizeListener();
	      listeners.add(cb);

	      return {
	        disconnect() {
	          listeners.delete(cb);
	        } };

	    }

	    let listeners;
	    function initResizeListener() {
	      if (listeners) {
	        return;
	      }

	      listeners = new Set();

	      // throttle 'resize'
	      let pendingResize;
	      const handleResize = () => {
	        if (pendingResize) {
	          return;
	        }
	        pendingResize = true;
	        fastdom.read(() => pendingResize = false);
	        for (const listener of listeners) {
	          listener();
	        }
	      };

	      on(window, 'load resize', handleResize);
	      on(document, 'loadedmetadata load', handleResize, true);
	    }

	    function observeMutation(targets, cb, options) {
	      return observe(MutationObserver, targets, cb, options);
	    }

	    function observe(Observer, targets, cb, options) {
	      const observer = new Observer(cb);
	      for (const el of toNodes(targets)) {
	        observer.observe(el, options);
	      }

	      return observer;
	    }

	    const strats = {};

	    strats.events =
	    strats.created =
	    strats.beforeConnect =
	    strats.connected =
	    strats.beforeDisconnect =
	    strats.disconnected =
	    strats.destroy =
	    concatStrat;

	    // args strategy
	    strats.args = function (parentVal, childVal) {
	      return childVal !== false && concatStrat(childVal || parentVal);
	    };

	    // update strategy
	    strats.update = function (parentVal, childVal) {
	      return sortBy$1(
	      concatStrat(parentVal, isFunction(childVal) ? { read: childVal } : childVal),
	      'order');

	    };

	    // property strategy
	    strats.props = function (parentVal, childVal) {
	      if (isArray(childVal)) {
	        const value = {};
	        for (const key of childVal) {
	          value[key] = String;
	        }
	        childVal = value;
	      }

	      return strats.methods(parentVal, childVal);
	    };

	    // extend strategy
	    strats.computed = strats.methods = function (parentVal, childVal) {
	      return childVal ? parentVal ? { ...parentVal, ...childVal } : childVal : parentVal;
	    };

	    // data strategy
	    strats.data = function (parentVal, childVal, vm) {
	      if (!vm) {
	        if (!childVal) {
	          return parentVal;
	        }

	        if (!parentVal) {
	          return childVal;
	        }

	        return function (vm) {
	          return mergeFnData(parentVal, childVal, vm);
	        };
	      }

	      return mergeFnData(parentVal, childVal, vm);
	    };

	    function mergeFnData(parentVal, childVal, vm) {
	      return strats.computed(
	      isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal,
	      isFunction(childVal) ? childVal.call(vm, vm) : childVal);

	    }

	    // concat strategy
	    function concatStrat(parentVal, childVal) {
	      parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;

	      return childVal ?
	      parentVal ?
	      parentVal.concat(childVal) :
	      isArray(childVal) ?
	      childVal :
	      [childVal] :
	      parentVal;
	    }

	    // default strategy
	    function defaultStrat(parentVal, childVal) {
	      return isUndefined(childVal) ? parentVal : childVal;
	    }

	    function mergeOptions(parent, child, vm) {
	      const options = {};

	      if (isFunction(child)) {
	        child = child.options;
	      }

	      if (child.extends) {
	        parent = mergeOptions(parent, child.extends, vm);
	      }

	      if (child.mixins) {
	        for (const mixin of child.mixins) {
	          parent = mergeOptions(parent, mixin, vm);
	        }
	      }

	      for (const key in parent) {
	        mergeKey(key);
	      }

	      for (const key in child) {
	        if (!hasOwn(parent, key)) {
	          mergeKey(key);
	        }
	      }

	      function mergeKey(key) {
	        options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
	      }

	      return options;
	    }

	    function parseOptions(options, args) {if (args === void 0) {args = [];}
	      try {
	        return options ?
	        startsWith(options, '{') ?
	        JSON.parse(options) :
	        args.length && !includes(options, ':') ?
	        { [args[0]]: options } :
	        options.split(';').reduce((options, option) => {
	          const [key, value] = option.split(/:(.*)/);
	          if (key && !isUndefined(value)) {
	            options[key.trim()] = value.trim();
	          }
	          return options;
	        }, {}) :
	        {};
	      } catch (e) {
	        return {};
	      }
	    }

	    function play(el) {
	      if (isIFrame(el)) {
	        call(el, { func: 'playVideo', method: 'play' });
	      }

	      if (isHTML5(el)) {
	        try {
	          el.play().catch(noop);
	        } catch (e) {
	          // noop
	        }
	      }
	    }

	    function pause(el) {
	      if (isIFrame(el)) {
	        call(el, { func: 'pauseVideo', method: 'pause' });
	      }

	      if (isHTML5(el)) {
	        el.pause();
	      }
	    }

	    function mute(el) {
	      if (isIFrame(el)) {
	        call(el, { func: 'mute', method: 'setVolume', value: 0 });
	      }

	      if (isHTML5(el)) {
	        el.muted = true;
	      }
	    }

	    function isVideo(el) {
	      return isHTML5(el) || isIFrame(el);
	    }

	    function isHTML5(el) {
	      return isTag(el, 'video');
	    }

	    function isIFrame(el) {
	      return isTag(el, 'iframe') && (isYoutube(el) || isVimeo(el));
	    }

	    function isYoutube(el) {
	      return !!el.src.match(
	      /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);

	    }

	    function isVimeo(el) {
	      return !!el.src.match(/vimeo\.com\/video\/.*/);
	    }

	    async function call(el, cmd) {
	      await enableApi(el);
	      post(el, cmd);
	    }

	    function post(el, cmd) {
	      try {
	        el.contentWindow.postMessage(JSON.stringify({ event: 'command', ...cmd }), '*');
	      } catch (e) {
	        // noop
	      }
	    }

	    const stateKey = '_ukPlayer';
	    let counter = 0;
	    function enableApi(el) {
	      if (el[stateKey]) {
	        return el[stateKey];
	      }

	      const youtube = isYoutube(el);
	      const vimeo = isVimeo(el);

	      const id = ++counter;
	      let poller;

	      return el[stateKey] = new Promise((resolve) => {
	        youtube &&
	        once(el, 'load', () => {
	          const listener = () => post(el, { event: 'listening', id });
	          poller = setInterval(listener, 100);
	          listener();
	        });

	        once(window, 'message', resolve, false, (_ref) => {let { data } = _ref;
	          try {
	            data = JSON.parse(data);
	            return (
	              data && (
	              youtube && data.id === id && data.event === 'onReady' ||
	              vimeo && Number(data.player_id) === id));

	          } catch (e) {
	            // noop
	          }
	        });

	        el.src = "" + el.src + (includes(el.src, '?') ? '&' : '?') + (
	        youtube ? 'enablejsapi=1' : "api=1&player_id=" + id);

	      }).then(() => clearInterval(poller));
	    }

	    function isInView(element, offsetTop, offsetLeft) {if (offsetTop === void 0) {offsetTop = 0;}if (offsetLeft === void 0) {offsetLeft = 0;}
	      if (!isVisible(element)) {
	        return false;
	      }

	      return intersectRect(
	      ...scrollParents(element).
	      map((parent) => {
	        const { top, left, bottom, right } = offsetViewport(parent);

	        return {
	          top: top - offsetTop,
	          left: left - offsetLeft,
	          bottom: bottom + offsetTop,
	          right: right + offsetLeft };

	      }).
	      concat(offset(element)));

	    }

	    function scrollTop(element, top) {
	      if (isWindow(element) || isDocument(element)) {
	        element = scrollingElement(element);
	      } else {
	        element = toNode(element);
	      }

	      if (isUndefined(top)) {
	        return element.scrollTop;
	      } else {
	        element.scrollTop = top;
	      }
	    }

	    function scrollIntoView(element, _temp) {let { offset: offsetBy = 0 } = _temp === void 0 ? {} : _temp;
	      const parents = isVisible(element) ? scrollParents(element) : [];
	      return parents.reduce(
	      (fn, scrollElement, i) => {
	        const { scrollTop, scrollHeight, offsetHeight } = scrollElement;
	        const viewport = offsetViewport(scrollElement);
	        const maxScroll = scrollHeight - viewport.height;
	        const { height: elHeight, top: elTop } = parents[i - 1] ?
	        offsetViewport(parents[i - 1]) :
	        offset(element);

	        let top = Math.ceil(elTop - viewport.top - offsetBy + scrollTop);

	        if (offsetBy > 0 && offsetHeight < elHeight + offsetBy) {
	          top += offsetBy;
	        } else {
	          offsetBy = 0;
	        }

	        if (top > maxScroll) {
	          offsetBy -= top - maxScroll;
	          top = maxScroll;
	        } else if (top < 0) {
	          offsetBy -= top;
	          top = 0;
	        }

	        return () => scrollTo(scrollElement, top - scrollTop).then(fn);
	      },
	      () => Promise.resolve())();


	      function scrollTo(element, top) {
	        return new Promise((resolve) => {
	          const scroll = element.scrollTop;
	          const duration = getDuration(Math.abs(top));
	          const start = Date.now();

	          (function step() {
	            const percent = ease(clamp((Date.now() - start) / duration));

	            scrollTop(element, scroll + top * percent);

	            // scroll more if we have not reached our destination
	            if (percent === 1) {
	              resolve();
	            } else {
	              requestAnimationFrame(step);
	            }
	          })();
	        });
	      }

	      function getDuration(dist) {
	        return 40 * Math.pow(dist, 0.375);
	      }

	      function ease(k) {
	        return 0.5 * (1 - Math.cos(Math.PI * k));
	      }
	    }

	    function scrolledOver(element, startOffset, endOffset) {if (startOffset === void 0) {startOffset = 0;}if (endOffset === void 0) {endOffset = 0;}
	      if (!isVisible(element)) {
	        return 0;
	      }

	      const [scrollElement] = scrollParents(element, /auto|scroll/, true);
	      const { scrollHeight, scrollTop } = scrollElement;
	      const { height: viewportHeight } = offsetViewport(scrollElement);
	      const maxScroll = scrollHeight - viewportHeight;
	      const elementOffsetTop = offsetPosition(element)[0] - offsetPosition(scrollElement)[0];

	      const start = Math.max(0, elementOffsetTop - viewportHeight + startOffset);
	      const end = Math.min(maxScroll, elementOffsetTop + element.offsetHeight - endOffset);

	      return clamp((scrollTop - start) / (end - start));
	    }

	    function scrollParents(element, overflowRe, scrollable) {if (overflowRe === void 0) {overflowRe = /auto|scroll|hidden/;}if (scrollable === void 0) {scrollable = false;}
	      const scrollEl = scrollingElement(element);

	      let ancestors = parents(element).reverse();
	      ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);

	      const fixedIndex = findIndex(ancestors, (el) => css(el, 'position') === 'fixed');
	      if (~fixedIndex) {
	        ancestors = ancestors.slice(fixedIndex);
	      }

	      return [scrollEl].
	      concat(
	      ancestors.filter(
	      (parent) =>
	      overflowRe.test(css(parent, 'overflow')) && (
	      !scrollable || parent.scrollHeight > offsetViewport(parent).height))).


	      reverse();
	    }

	    function offsetViewport(scrollElement) {
	      let viewportElement = getViewport$1(scrollElement);

	      let rect = offset(viewportElement);
	      for (let [prop, dir, start, end] of [
	      ['width', 'x', 'left', 'right'],
	      ['height', 'y', 'top', 'bottom']])
	      {
	        if (!isWindow(viewportElement)) {
	          rect[start] += toFloat(css(viewportElement, "border" + ucfirst(start) + "Width"));
	        } else {
	          // iOS 12 returns <body> as scrollingElement
	          viewportElement = viewportElement.document.documentElement;
	        }
	        rect[prop] = rect[dir] = viewportElement["client" + ucfirst(prop)];
	        rect[end] = rect[prop] + rect[start];
	      }
	      return rect;
	    }

	    function scrollingElement(element) {
	      return toWindow(element).document.scrollingElement;
	    }

	    function getViewport$1(scrollElement) {
	      return scrollElement === scrollingElement(scrollElement) ? window : scrollElement;
	    }

	    const dirs = [
	    ['width', 'x', 'left', 'right'],
	    ['height', 'y', 'top', 'bottom']];


	    function positionAt(element, target, options) {
	      options = {
	        attach: {
	          element: ['left', 'top'],
	          target: ['left', 'top'],
	          ...options.attach },

	        offset: [0, 0],
	        ...options };


	      const dim = options.flip ?
	      attachToWithFlip(element, target, options) :
	      attachTo(element, target, options);

	      offset(element, dim);
	    }

	    function attachTo(element, target, options) {
	      let { attach, offset: offsetBy } = {
	        attach: {
	          element: ['left', 'top'],
	          target: ['left', 'top'],
	          ...options.attach },

	        offset: [0, 0],
	        ...options };


	      const position = offset(element);
	      const targetOffset = offset(target);
	      for (const [i, [prop, dir, start, end]] of Object.entries(dirs)) {
	        position[start] = position[dir] =
	        targetOffset[start] +
	        moveBy(attach.target[i], end, targetOffset[prop]) -
	        moveBy(attach.element[i], end, position[prop]) +
	        +offsetBy[i];
	        position[end] = position[start] + position[prop];
	      }
	      return position;
	    }

	    function moveBy(start, end, dim) {
	      return start === 'center' ? dim / 2 : start === end ? dim : 0;
	    }

	    function attachToWithFlip(element, target, options) {
	      const position = attachTo(element, target, options);
	      const targetDim = offset(target);

	      let {
	        flip,
	        attach: { element: elAttach, target: targetAttach },
	        offset: elOffset,
	        boundary,
	        viewport,
	        viewportOffset } =
	      options;

	      let viewports = scrollParents(element);
	      if (boundary === target) {
	        viewports = viewports.filter((viewport) => viewport !== boundary);
	      }
	      const [scrollElement] = viewports;
	      viewports.push(viewport);

	      const offsetPosition = { ...position };
	      for (const [i, [prop, dir, start, end]] of Object.entries(dirs)) {
	        if (flip !== true && !includes(flip, dir)) {
	          continue;
	        }

	        const willFlip =
	        !intersectLine(position, targetDim, i) && intersectLine(position, targetDim, 1 - i);

	        viewport = getIntersectionArea(...viewports.filter(Boolean).map(offsetViewport));

	        if (viewportOffset) {
	          viewport[start] += viewportOffset;
	          viewport[end] -= viewportOffset;
	        }

	        if (boundary && !willFlip && position[prop] <= offset(boundary)[prop]) {
	          viewport = getIntersectionArea(viewport, offset(boundary));
	        }

	        const isInStartBoundary = position[start] >= viewport[start];
	        const isInEndBoundary = position[end] <= viewport[end];

	        if (isInStartBoundary && isInEndBoundary) {
	          continue;
	        }

	        let offsetBy;

	        // Flip
	        if (willFlip) {
	          if (
	          elAttach[i] === end && isInStartBoundary ||
	          elAttach[i] === start && isInEndBoundary)
	          {
	            continue;
	          }

	          offsetBy =
	          (elAttach[i] === start ?
	          -position[prop] :
	          elAttach[i] === end ?
	          position[prop] :
	          0) + (
	          targetAttach[i] === start ?
	          targetDim[prop] :
	          targetAttach[i] === end ?
	          -targetDim[prop] :
	          0) -
	          elOffset[i] * 2;

	          if (
	          !isInScrollArea(
	          {
	            ...position,
	            [start]: position[start] + offsetBy,
	            [end]: position[end] + offsetBy },

	          scrollElement,
	          i))

	          {
	            if (isInScrollArea(position, scrollElement, i)) {
	              continue;
	            }

	            if (options.recursion) {
	              return false;
	            }

	            if (flip === true || includes(flip, dirs[1 - i][1])) {
	              const newPos = attachToWithFlip(element, target, {
	                ...options,
	                attach: {
	                  element: elAttach.map(flipDir).reverse(),
	                  target: targetAttach.map(flipDir).reverse() },

	                offset: elOffset.reverse(),
	                flip: flip === true ? flip : [...flip, dirs[1 - i][1]],
	                recursion: true });


	              if (newPos && isInScrollArea(newPos, scrollElement, 1 - i)) {
	                return newPos;
	              }
	            }
	          }

	          // Move
	        } else {
	          offsetBy =
	          clamp(
	          clamp(position[start], viewport[start], viewport[end] - position[prop]),
	          targetDim[start] - position[prop] + elOffset[i],
	          targetDim[end] - elOffset[i]) -
	          position[start];
	        }

	        offsetPosition[start] = position[dir] = position[start] + offsetBy;
	        offsetPosition[end] += offsetBy;
	      }

	      return offsetPosition;
	    }

	    function getIntersectionArea() {
	      let area = {};for (var _len = arguments.length, rects = new Array(_len), _key = 0; _key < _len; _key++) {rects[_key] = arguments[_key];}
	      for (const rect of rects) {
	        for (const [,, start, end] of dirs) {
	          area[start] = Math.max(area[start] || 0, rect[start]);
	          area[end] = Math.min(...[area[end], rect[end]].filter(Boolean));
	        }
	      }
	      return area;
	    }

	    function isInScrollArea(position, scrollElement, dir) {
	      const viewport = offsetViewport(scrollElement);
	      const [prop,, start, end] = dirs[dir];
	      viewport[start] -= scrollElement["scroll" + ucfirst(start)];
	      viewport[end] = viewport[start] + scrollElement["scroll" + ucfirst(prop)];

	      return position[start] >= viewport[start] && position[end] <= viewport[end];
	    }

	    function intersectLine(dimA, dimB, dir) {
	      const [,, start, end] = dirs[dir];
	      return dimA[end] > dimB[start] && dimB[end] > dimA[start];
	    }

	    function flipDir(prop) {
	      for (let i = 0; i < dirs.length; i++) {
	        const index = dirs[i].indexOf(prop);
	        if (~index) {
	          return dirs[1 - i][index % 2 + 2];
	        }
	      }
	    }

	    var util = /*#__PURE__*/Object.freeze({
	        __proto__: null,
	        ajax: ajax,
	        getImage: getImage,
	        transition: transition,
	        Transition: Transition,
	        animate: animate$1,
	        Animation: Animation,
	        attr: attr,
	        hasAttr: hasAttr,
	        removeAttr: removeAttr,
	        data: data,
	        addClass: addClass,
	        removeClass: removeClass,
	        removeClasses: removeClasses,
	        replaceClass: replaceClass,
	        hasClass: hasClass,
	        toggleClass: toggleClass,
	        dimensions: dimensions$1,
	        offset: offset,
	        position: position,
	        offsetPosition: offsetPosition,
	        height: height,
	        width: width,
	        boxModelAdjust: boxModelAdjust,
	        flipPosition: flipPosition,
	        toPx: toPx,
	        ready: ready,
	        isTag: isTag,
	        empty: empty,
	        html: html,
	        prepend: prepend,
	        append: append,
	        before: before,
	        after: after,
	        remove: remove$1,
	        wrapAll: wrapAll,
	        wrapInner: wrapInner,
	        unwrap: unwrap,
	        fragment: fragment,
	        apply: apply,
	        $: $,
	        $$: $$,
	        inBrowser: inBrowser,
	        isRtl: isRtl,
	        hasTouch: hasTouch,
	        pointerDown: pointerDown,
	        pointerMove: pointerMove,
	        pointerUp: pointerUp,
	        pointerEnter: pointerEnter,
	        pointerLeave: pointerLeave,
	        pointerCancel: pointerCancel,
	        on: on,
	        off: off,
	        once: once,
	        trigger: trigger,
	        createEvent: createEvent,
	        toEventTargets: toEventTargets,
	        isTouch: isTouch,
	        getEventPos: getEventPos,
	        fastdom: fastdom,
	        isVoidElement: isVoidElement,
	        isVisible: isVisible,
	        selInput: selInput,
	        isInput: isInput,
	        selFocusable: selFocusable,
	        isFocusable: isFocusable,
	        parent: parent,
	        filter: filter$1,
	        matches: matches,
	        closest: closest,
	        within: within,
	        parents: parents,
	        children: children,
	        index: index,
	        hasOwn: hasOwn,
	        hyphenate: hyphenate,
	        camelize: camelize,
	        ucfirst: ucfirst,
	        startsWith: startsWith,
	        endsWith: endsWith,
	        includes: includes,
	        findIndex: findIndex,
	        isArray: isArray,
	        toArray: toArray,
	        assign: assign,
	        isFunction: isFunction,
	        isObject: isObject,
	        isPlainObject: isPlainObject,
	        isWindow: isWindow,
	        isDocument: isDocument,
	        isNode: isNode,
	        isElement: isElement,
	        isBoolean: isBoolean,
	        isString: isString,
	        isNumber: isNumber,
	        isNumeric: isNumeric,
	        isEmpty: isEmpty,
	        isUndefined: isUndefined,
	        toBoolean: toBoolean,
	        toNumber: toNumber,
	        toFloat: toFloat,
	        toNode: toNode,
	        toNodes: toNodes,
	        toWindow: toWindow,
	        isEqual: isEqual,
	        swap: swap,
	        last: last,
	        each: each,
	        sortBy: sortBy$1,
	        uniqueBy: uniqueBy,
	        clamp: clamp,
	        noop: noop,
	        intersectRect: intersectRect,
	        pointInRect: pointInRect,
	        Dimensions: Dimensions,
	        getIndex: getIndex,
	        memoize: memoize,
	        Deferred: Deferred,
	        MouseTracker: MouseTracker,
	        observeIntersection: observeIntersection,
	        observeResize: observeResize,
	        observeMutation: observeMutation,
	        mergeOptions: mergeOptions,
	        parseOptions: parseOptions,
	        play: play,
	        pause: pause,
	        mute: mute,
	        isVideo: isVideo,
	        positionAt: positionAt,
	        query: query,
	        queryAll: queryAll,
	        find: find,
	        findAll: findAll,
	        escape: escape,
	        css: css,
	        getCssVar: getCssVar,
	        propName: propName,
	        isInView: isInView,
	        scrollTop: scrollTop,
	        scrollIntoView: scrollIntoView,
	        scrolledOver: scrolledOver,
	        scrollParents: scrollParents,
	        offsetViewport: offsetViewport
	    });

	    function globalAPI (UIkit) {
	      const DATA = UIkit.data;

	      UIkit.use = function (plugin) {
	        if (plugin.installed) {
	          return;
	        }

	        plugin.call(null, this);
	        plugin.installed = true;

	        return this;
	      };

	      UIkit.mixin = function (mixin, component) {
	        component = (isString(component) ? UIkit.component(component) : component) || this;
	        component.options = mergeOptions(component.options, mixin);
	      };

	      UIkit.extend = function (options) {
	        options = options || {};

	        const Super = this;
	        const Sub = function UIkitComponent(options) {
	          this._init(options);
	        };

	        Sub.prototype = Object.create(Super.prototype);
	        Sub.prototype.constructor = Sub;
	        Sub.options = mergeOptions(Super.options, options);

	        Sub.super = Super;
	        Sub.extend = Super.extend;

	        return Sub;
	      };

	      UIkit.update = function (element, e) {
	        element = element ? toNode(element) : document.body;

	        for (const parentEl of parents(element).reverse()) {
	          update(parentEl[DATA], e);
	        }

	        apply(element, (element) => update(element[DATA], e));
	      };

	      let container;
	      Object.defineProperty(UIkit, 'container', {
	        get() {
	          return container || document.body;
	        },

	        set(element) {
	          container = $(element);
	        } });


	      function update(data, e) {
	        if (!data) {
	          return;
	        }

	        for (const name in data) {
	          if (data[name]._connected) {
	            data[name]._callUpdate(e);
	          }
	        }
	      }
	    }

	    function hooksAPI (UIkit) {
	      UIkit.prototype._callHook = function (hook) {var _this$$options$hook;
	        (_this$$options$hook = this.$options[hook]) == null ? void 0 : _this$$options$hook.forEach((handler) => handler.call(this));
	      };

	      UIkit.prototype._callConnected = function () {
	        if (this._connected) {
	          return;
	        }

	        this._data = {};
	        this._computed = {};

	        this._initProps();

	        this._callHook('beforeConnect');
	        this._connected = true;

	        this._initEvents();
	        this._initObservers();

	        this._callHook('connected');
	        this._callUpdate();
	      };

	      UIkit.prototype._callDisconnected = function () {
	        if (!this._connected) {
	          return;
	        }

	        this._callHook('beforeDisconnect');
	        this._disconnectObservers();
	        this._unbindEvents();
	        this._callHook('disconnected');

	        this._connected = false;
	        delete this._watch;
	      };

	      UIkit.prototype._callUpdate = function (e) {if (e === void 0) {e = 'update';}
	        if (!this._connected) {
	          return;
	        }

	        if (e === 'update' || e === 'resize') {
	          this._callWatches();
	        }

	        if (!this.$options.update) {
	          return;
	        }

	        if (!this._updates) {
	          this._updates = new Set();
	          fastdom.read(() => {
	            if (this._connected) {
	              runUpdates.call(this, this._updates);
	            }
	            delete this._updates;
	          });
	        }

	        this._updates.add(e.type || e);
	      };

	      UIkit.prototype._callWatches = function () {
	        if (this._watch) {
	          return;
	        }

	        const initial = !hasOwn(this, '_watch');

	        this._watch = fastdom.read(() => {
	          if (this._connected) {
	            runWatches.call(this, initial);
	          }
	          this._watch = null;
	        });
	      };

	      function runUpdates(types) {
	        for (const { read, write, events = [] } of this.$options.update) {
	          if (!types.has('update') && !events.some((type) => types.has(type))) {
	            continue;
	          }

	          let result;
	          if (read) {
	            result = read.call(this, this._data, types);

	            if (result && isPlainObject(result)) {
	              assign(this._data, result);
	            }
	          }

	          if (write && result !== false) {
	            fastdom.write(() => write.call(this, this._data, types));
	          }
	        }
	      }

	      function runWatches(initial) {
	        const {
	          $options: { computed } } =
	        this;
	        const values = { ...this._computed };
	        this._computed = {};

	        for (const key in computed) {
	          const { watch, immediate } = computed[key];
	          if (
	          watch && (
	          initial && immediate ||
	          hasOwn(values, key) && !isEqual(values[key], this[key])))
	          {
	            watch.call(this, this[key], values[key]);
	          }
	        }
	      }
	    }

	    function stateAPI (UIkit) {
	      let uid = 0;

	      UIkit.prototype._init = function (options) {
	        options = options || {};
	        options.data = normalizeData(options, this.constructor.options);

	        this.$options = mergeOptions(this.constructor.options, options, this);
	        this.$el = null;
	        this.$props = {};

	        this._uid = uid++;
	        this._initData();
	        this._initMethods();
	        this._initComputeds();
	        this._callHook('created');

	        if (options.el) {
	          this.$mount(options.el);
	        }
	      };

	      UIkit.prototype._initData = function () {
	        const { data = {} } = this.$options;

	        for (const key in data) {
	          this.$props[key] = this[key] = data[key];
	        }
	      };

	      UIkit.prototype._initMethods = function () {
	        const { methods } = this.$options;

	        if (methods) {
	          for (const key in methods) {
	            this[key] = methods[key].bind(this);
	          }
	        }
	      };

	      UIkit.prototype._initComputeds = function () {
	        const { computed } = this.$options;

	        this._computed = {};

	        if (computed) {
	          for (const key in computed) {
	            registerComputed(this, key, computed[key]);
	          }
	        }
	      };

	      UIkit.prototype._initProps = function (props) {
	        let key;

	        props = props || getProps$1(this.$options, this.$name);

	        for (key in props) {
	          if (!isUndefined(props[key])) {
	            this.$props[key] = props[key];
	          }
	        }

	        const exclude = [this.$options.computed, this.$options.methods];
	        for (key in this.$props) {
	          if (key in props && notIn(exclude, key)) {
	            this[key] = this.$props[key];
	          }
	        }
	      };

	      UIkit.prototype._initEvents = function () {
	        this._events = [];
	        for (const event of this.$options.events || []) {
	          if (hasOwn(event, 'handler')) {
	            registerEvent(this, event);
	          } else {
	            for (const key in event) {
	              registerEvent(this, event[key], key);
	            }
	          }
	        }
	      };

	      UIkit.prototype._unbindEvents = function () {
	        this._events.forEach((unbind) => unbind());
	        delete this._events;
	      };

	      UIkit.prototype._initObservers = function () {
	        this._observers = [initPropsObserver(this)];

	        if (this.$options.computed) {
	          this.registerObserver(initChildListObserver(this));
	        }
	      };

	      UIkit.prototype.registerObserver = function (observer) {
	        this._observers.push(observer);
	      };

	      UIkit.prototype._disconnectObservers = function () {
	        this._observers.forEach((observer) => observer == null ? void 0 : observer.disconnect());
	      };
	    }

	    function getProps$1(opts, name) {
	      const data$1 = {};
	      const { args = [], props = {}, el } = opts;

	      if (!props) {
	        return data$1;
	      }

	      for (const key in props) {
	        const prop = hyphenate(key);
	        let value = data(el, prop);

	        if (isUndefined(value)) {
	          continue;
	        }

	        value = props[key] === Boolean && value === '' ? true : coerce$1(props[key], value);

	        if (prop === 'target' && (!value || startsWith(value, '_'))) {
	          continue;
	        }

	        data$1[key] = value;
	      }

	      const options = parseOptions(data(el, name), args);

	      for (const key in options) {
	        const prop = camelize(key);
	        if (props[prop] !== undefined) {
	          data$1[prop] = coerce$1(props[prop], options[key]);
	        }
	      }

	      return data$1;
	    }

	    function registerComputed(component, key, cb) {
	      Object.defineProperty(component, key, {
	        enumerable: true,

	        get() {
	          const { _computed, $props, $el } = component;

	          if (!hasOwn(_computed, key)) {
	            _computed[key] = (cb.get || cb).call(component, $props, $el);
	          }

	          return _computed[key];
	        },

	        set(value) {
	          const { _computed } = component;

	          _computed[key] = cb.set ? cb.set.call(component, value) : value;

	          if (isUndefined(_computed[key])) {
	            delete _computed[key];
	          }
	        } });

	    }

	    function registerEvent(component, event, key) {
	      if (!isPlainObject(event)) {
	        event = { name: key, handler: event };
	      }

	      let { name, el, handler, capture, passive, delegate, filter, self } = event;
	      el = isFunction(el) ? el.call(component) : el || component.$el;

	      if (isArray(el)) {
	        el.forEach((el) => registerEvent(component, { ...event, el }, key));
	        return;
	      }

	      if (!el || filter && !filter.call(component)) {
	        return;
	      }

	      component._events.push(
	      on(
	      el,
	      name,
	      delegate ? isString(delegate) ? delegate : delegate.call(component) : null,
	      isString(handler) ? component[handler] : handler.bind(component),
	      { passive, capture, self }));


	    }

	    function notIn(options, key) {
	      return options.every((arr) => !arr || !hasOwn(arr, key));
	    }

	    function coerce$1(type, value) {
	      if (type === Boolean) {
	        return toBoolean(value);
	      } else if (type === Number) {
	        return toNumber(value);
	      } else if (type === 'list') {
	        return toList(value);
	      }

	      return type ? type(value) : value;
	    }

	    function toList(value) {
	      return isArray(value) ?
	      value :
	      isString(value) ?
	      value.
	      split(/,(?![^(]*\))/).
	      map((value) => isNumeric(value) ? toNumber(value) : toBoolean(value.trim())) :
	      [value];
	    }

	    function normalizeData(_ref, _ref2) {let { data = {} } = _ref;let { args = [], props = {} } = _ref2;
	      if (isArray(data)) {
	        data = data.slice(0, args.length).reduce((data, value, index) => {
	          if (isPlainObject(value)) {
	            assign(data, value);
	          } else {
	            data[args[index]] = value;
	          }
	          return data;
	        }, {});
	      }

	      for (const key in data) {
	        if (isUndefined(data[key])) {
	          delete data[key];
	        } else if (props[key]) {
	          data[key] = coerce$1(props[key], data[key]);
	        }
	      }

	      return data;
	    }

	    function initChildListObserver(component) {
	      const { el } = component.$options;

	      const observer = new MutationObserver(() => component.$emit());
	      observer.observe(el, {
	        childList: true,
	        subtree: true });


	      return observer;
	    }

	    function initPropsObserver(component) {
	      const { $name, $options, $props } = component;
	      const { attrs, props, el } = $options;

	      if (!props || attrs === false) {
	        return;
	      }

	      const attributes = isArray(attrs) ? attrs : Object.keys(props);
	      const filter = attributes.map((key) => hyphenate(key)).concat($name);

	      const observer = new MutationObserver((records) => {
	        const data = getProps$1($options, $name);
	        if (
	        records.some((_ref3) => {let { attributeName } = _ref3;
	          const prop = attributeName.replace('data-', '');
	          return (
	          prop === $name ? attributes : [camelize(prop), camelize(attributeName)]).
	          some((prop) => !isUndefined(data[prop]) && data[prop] !== $props[prop]);
	        }))
	        {
	          component.$reset();
	        }
	      });

	      observer.observe(el, {
	        attributes: true,
	        attributeFilter: filter.concat(filter.map((key) => "data-" + key)) });


	      return observer;
	    }

	    function instanceAPI (UIkit) {
	      const DATA = UIkit.data;

	      UIkit.prototype.$create = function (component, element, data) {
	        return UIkit[component](element, data);
	      };

	      UIkit.prototype.$mount = function (el) {
	        const { name } = this.$options;

	        if (!el[DATA]) {
	          el[DATA] = {};
	        }

	        if (el[DATA][name]) {
	          return;
	        }

	        el[DATA][name] = this;

	        this.$el = this.$options.el = this.$options.el || el;

	        if (within(el, document)) {
	          this._callConnected();
	        }
	      };

	      UIkit.prototype.$reset = function () {
	        this._callDisconnected();
	        this._callConnected();
	      };

	      UIkit.prototype.$destroy = function (removeEl) {if (removeEl === void 0) {removeEl = false;}
	        const { el, name } = this.$options;

	        if (el) {
	          this._callDisconnected();
	        }

	        this._callHook('destroy');

	        if (!(el != null && el[DATA])) {
	          return;
	        }

	        delete el[DATA][name];

	        if (!isEmpty(el[DATA])) {
	          delete el[DATA];
	        }

	        if (removeEl) {
	          remove$1(this.$el);
	        }
	      };

	      UIkit.prototype.$emit = function (e) {
	        this._callUpdate(e);
	      };

	      UIkit.prototype.$update = function (element, e) {if (element === void 0) {element = this.$el;}
	        UIkit.update(element, e);
	      };

	      UIkit.prototype.$getComponent = UIkit.getComponent;

	      const componentName = memoize((name) => UIkit.prefix + hyphenate(name));
	      Object.defineProperties(UIkit.prototype, {
	        $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),

	        $name: {
	          get() {
	            return componentName(this.$options.name);
	          } } });


	    }

	    function componentAPI (UIkit) {
	      const DATA = UIkit.data;

	      const components = {};

	      UIkit.component = function (name, options) {
	        const id = hyphenate(name);

	        name = camelize(id);

	        if (!options) {
	          if (isPlainObject(components[name])) {
	            components[name] = UIkit.extend(components[name]);
	          }

	          return components[name];
	        }

	        UIkit[name] = function (element, data) {
	          const component = UIkit.component(name);

	          return component.options.functional ?
	          new component({ data: isPlainObject(element) ? element : [...arguments] }) :
	          element ?
	          $$(element).map(init)[0] :
	          init();

	          function init(element) {
	            const instance = UIkit.getComponent(element, name);

	            if (instance) {
	              if (data) {
	                instance.$destroy();
	              } else {
	                return instance;
	              }
	            }

	            return new component({ el: element, data });
	          }
	        };

	        const opt = isPlainObject(options) ? { ...options } : options.options;

	        opt.name = name;

	        opt.install == null ? void 0 : opt.install(UIkit, opt, name);

	        if (UIkit._initialized && !opt.functional) {
	          fastdom.read(() => UIkit[name]("[uk-" + id + "],[data-uk-" + id + "]"));
	        }

	        return components[name] = isPlainObject(options) ? opt : options;
	      };

	      UIkit.getComponents = (element) => (element == null ? void 0 : element[DATA]) || {};
	      UIkit.getComponent = (element, name) => UIkit.getComponents(element)[name];

	      UIkit.connect = (node) => {
	        if (node[DATA]) {
	          for (const name in node[DATA]) {
	            node[DATA][name]._callConnected();
	          }
	        }

	        for (const attribute of node.attributes) {
	          const name = getComponentName(attribute.name);

	          if (name && name in components) {
	            UIkit[name](node);
	          }
	        }
	      };

	      UIkit.disconnect = (node) => {
	        for (const name in node[DATA]) {
	          node[DATA][name]._callDisconnected();
	        }
	      };
	    }

	    const getComponentName = memoize((attribute) => {
	      return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-') ?
	      camelize(attribute.replace('data-uk-', '').replace('uk-', '')) :
	      false;
	    });

	    const UIkit = function (options) {
	      this._init(options);
	    };

	    UIkit.util = util;
	    UIkit.data = '__uikit__';
	    UIkit.prefix = 'uk-';
	    UIkit.options = {};
	    UIkit.version = '3.14.3';

	    globalAPI(UIkit);
	    hooksAPI(UIkit);
	    stateAPI(UIkit);
	    componentAPI(UIkit);
	    instanceAPI(UIkit);

	    function boot (UIkit) {
	      const { connect, disconnect } = UIkit;

	      if (!inBrowser || !window.MutationObserver) {
	        return;
	      }

	      fastdom.read(function () {
	        if (document.body) {
	          apply(document.body, connect);
	        }

	        new MutationObserver((records) => records.forEach(applyChildListMutation)).observe(
	        document,
	        {
	          childList: true,
	          subtree: true });



	        new MutationObserver((records) => records.forEach(applyAttributeMutation)).observe(
	        document,
	        {
	          attributes: true,
	          subtree: true });



	        UIkit._initialized = true;
	      });

	      function applyChildListMutation(_ref) {let { addedNodes, removedNodes } = _ref;
	        for (const node of addedNodes) {
	          apply(node, connect);
	        }

	        for (const node of removedNodes) {
	          apply(node, disconnect);
	        }
	      }

	      function applyAttributeMutation(_ref2) {var _UIkit$getComponent;let { target, attributeName } = _ref2;
	        const name = getComponentName(attributeName);

	        if (!name || !(name in UIkit)) {
	          return;
	        }

	        if (hasAttr(target, attributeName)) {
	          UIkit[name](target);
	          return;
	        }

	        (_UIkit$getComponent = UIkit.getComponent(target, name)) == null ? void 0 : _UIkit$getComponent.$destroy();
	      }
	    }

	    var Class = {
	      connected() {
	        !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
	      } };

	    var Lazyload = {
	      methods: {
	        lazyload(observeTargets, targets) {if (observeTargets === void 0) {observeTargets = this.$el;}if (targets === void 0) {targets = this.$el;}
	          this.registerObserver(
	          observeIntersection(observeTargets, (entries, observer) => {
	            for (const el of toNodes(isFunction(targets) ? targets() : targets)) {
	              $$('[loading="lazy"]', el).forEach((el) => removeAttr(el, 'loading'));
	            }
	            for (const el of entries.
	            filter((_ref) => {let { isIntersecting } = _ref;return isIntersecting;}).
	            map((_ref2) => {let { target } = _ref2;return target;})) {
	              observer.unobserve(el);
	            }
	          }));

	        } } };

	    var Togglable = {
	      props: {
	        cls: Boolean,
	        animation: 'list',
	        duration: Number,
	        velocity: Number,
	        origin: String,
	        transition: String },


	      data: {
	        cls: false,
	        animation: [false],
	        duration: 200,
	        velocity: 0.2,
	        origin: false,
	        transition: 'ease',
	        clsEnter: 'uk-togglabe-enter',
	        clsLeave: 'uk-togglabe-leave',

	        initProps: {
	          overflow: '',
	          height: '',
	          paddingTop: '',
	          paddingBottom: '',
	          marginTop: '',
	          marginBottom: '',
	          boxShadow: '' },


	        hideProps: {
	          overflow: 'hidden',
	          height: 0,
	          paddingTop: 0,
	          paddingBottom: 0,
	          marginTop: 0,
	          marginBottom: 0,
	          boxShadow: 'none' } },



	      computed: {
	        hasAnimation(_ref) {let { animation } = _ref;
	          return !!animation[0];
	        },

	        hasTransition(_ref2) {let { animation } = _ref2;
	          return this.hasAnimation && animation[0] === true;
	        } },


	      methods: {
	        toggleElement(targets, toggle, animate) {
	          return new Promise((resolve) =>
	          Promise.all(
	          toNodes(targets).map((el) => {
	            const show = isBoolean(toggle) ? toggle : !this.isToggled(el);

	            if (!trigger(el, "before" + (show ? 'show' : 'hide'), [this])) {
	              return Promise.reject();
	            }

	            if (!animate) {
	              Animation.cancel(el);
	              Transition.cancel(el);
	            }

	            const promise = (
	            isFunction(animate) ?
	            animate :
	            animate === false || !this.hasAnimation ?
	            this._toggle :
	            this.hasTransition ?
	            toggleHeight(this) :
	            toggleAnimation(this))(
	            el, show);

	            const cls = show ? this.clsEnter : this.clsLeave;

	            addClass(el, cls);

	            trigger(el, show ? 'show' : 'hide', [this]);

	            const done = () => {
	              removeClass(el, cls);
	              trigger(el, show ? 'shown' : 'hidden', [this]);
	              this.$update(el);
	            };

	            return promise ?
	            promise.then(done, () => {
	              removeClass(el, cls);
	              return Promise.reject();
	            }) :
	            done();
	          })).
	          then(resolve, noop));

	        },

	        isToggled(el) {if (el === void 0) {el = this.$el;}
	          [el] = toNodes(el);
	          return hasClass(el, this.clsEnter) ?
	          true :
	          hasClass(el, this.clsLeave) ?
	          false :
	          this.cls ?
	          hasClass(el, this.cls.split(' ')[0]) :
	          isVisible(el);
	        },

	        _toggle(el, toggled) {
	          if (!el) {
	            return;
	          }

	          toggled = Boolean(toggled);

	          let changed;
	          if (this.cls) {
	            changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
	            changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
	          } else {
	            changed = toggled === el.hidden;
	            changed && (el.hidden = !toggled);
	          }

	          $$('[autofocus]', el).some((el) => isVisible(el) ? el.focus() || true : el.blur());

	          if (changed) {
	            trigger(el, 'toggled', [toggled, this]);
	            this.$update(el);
	          }
	        } } };



	    function toggleHeight(_ref3)







	    {let { isToggled, duration, velocity, initProps, hideProps, transition, _toggle } = _ref3;
	      return (el, show) => {
	        const inProgress = Transition.inProgress(el);
	        const inner = el.hasChildNodes() ?
	        toFloat(css(el.firstElementChild, 'marginTop')) +
	        toFloat(css(el.lastElementChild, 'marginBottom')) :
	        0;
	        const currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;

	        Transition.cancel(el);

	        if (!isToggled(el)) {
	          _toggle(el, true);
	        }

	        height(el, '');

	        // Update child components first
	        fastdom.flush();

	        const endHeight = height(el) + (inProgress ? 0 : inner);
	        duration = velocity * el.offsetHeight + duration;

	        height(el, currentHeight);

	        return (
	        show ?
	        Transition.start(
	        el,
	        { ...initProps, overflow: 'hidden', height: endHeight },
	        Math.round(duration * (1 - currentHeight / endHeight)),
	        transition) :

	        Transition.start(
	        el,
	        hideProps,
	        Math.round(duration * (currentHeight / endHeight)),
	        transition).
	        then(() => _toggle(el, false))).
	        then(() => css(el, initProps));
	      };
	    }

	    function toggleAnimation(cmp) {
	      return (el, show) => {
	        Animation.cancel(el);

	        const { animation, duration, _toggle } = cmp;

	        if (show) {
	          _toggle(el, true);
	          return Animation.in(el, animation[0], duration, cmp.origin);
	        }

	        return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(() =>
	        _toggle(el, false));

	      };
	    }

	    var Accordion = {
	      mixins: [Class, Lazyload, Togglable],

	      props: {
	        targets: String,
	        active: null,
	        collapsible: Boolean,
	        multiple: Boolean,
	        toggle: String,
	        content: String,
	        offset: Number },


	      data: {
	        targets: '> *',
	        active: false,
	        animation: [true],
	        collapsible: true,
	        multiple: false,
	        clsOpen: 'uk-open',
	        toggle: '> .uk-accordion-title',
	        content: '> .uk-accordion-content',
	        offset: 0 },


	      computed: {
	        items: {
	          get(_ref, $el) {let { targets } = _ref;
	            return $$(targets, $el);
	          },

	          watch(items, prev) {
	            if (prev || hasClass(items, this.clsOpen)) {
	              return;
	            }

	            const active =
	            this.active !== false && items[Number(this.active)] ||
	            !this.collapsible && items[0];

	            if (active) {
	              this.toggle(active, false);
	            }
	          },

	          immediate: true },


	        toggles(_ref2) {let { toggle } = _ref2;
	          return this.items.map((item) => $(toggle, item));
	        },

	        contents: {
	          get(_ref3) {let { content } = _ref3;
	            return this.items.map((item) => $(content, item));
	          },

	          watch(items) {
	            for (const el of items) {
	              hide(
	              el,
	              !hasClass(
	              this.items.find((item) => item.contains(el)),
	              this.clsOpen));


	            }
	          },

	          immediate: true } },



	      connected() {
	        this.lazyload();
	      },

	      events: [
	      {
	        name: 'click',

	        delegate() {
	          return this.targets + " " + this.$props.toggle;
	        },

	        handler(e) {
	          e.preventDefault();
	          this.toggle(index(this.toggles, e.current));
	        } }],



	      methods: {
	        toggle(item, animate) {
	          let items = [this.items[getIndex(item, this.items)]];
	          const activeItems = filter$1(this.items, "." + this.clsOpen);

	          if (!this.multiple && !includes(activeItems, items[0])) {
	            items = items.concat(activeItems);
	          }

	          if (
	          !this.collapsible &&
	          activeItems.length < 2 &&
	          !filter$1(items, ":not(." + this.clsOpen + ")").length)
	          {
	            return;
	          }

	          for (const el of items) {
	            this.toggleElement(el, !hasClass(el, this.clsOpen), async (el, show) => {
	              toggleClass(el, this.clsOpen, show);
	              attr($(this.$props.toggle, el), 'aria-expanded', show);

	              const content = $("" + (el._wrapper ? '> * ' : '') + this.content, el);

	              if (animate === false || !this.hasTransition) {
	                hide(content, !show);
	                return;
	              }

	              if (!el._wrapper) {
	                el._wrapper = wrapAll(content, "<div" + (show ? ' hidden' : '') + ">");
	              }

	              hide(content, false);
	              await toggleHeight(this)(el._wrapper, show);
	              hide(content, !show);

	              delete el._wrapper;
	              unwrap(content);

	              if (show) {
	                const toggle = $(this.$props.toggle, el);
	                fastdom.read(() => {
	                  if (!isInView(toggle)) {
	                    scrollIntoView(toggle, { offset: this.offset });
	                  }
	                });
	              }
	            });
	          }
	        } } };



	    function hide(el, hide) {
	      el && (el.hidden = hide);
	    }

	    var alert = {
	      mixins: [Class, Togglable],

	      args: 'animation',

	      props: {
	        close: String },


	      data: {
	        animation: [true],
	        selClose: '.uk-alert-close',
	        duration: 150,
	        hideProps: { opacity: 0, ...Togglable.data.hideProps } },


	      events: [
	      {
	        name: 'click',

	        delegate() {
	          return this.selClose;
	        },

	        handler(e) {
	          e.preventDefault();
	          this.close();
	        } }],



	      methods: {
	        async close() {
	          await this.toggleElement(this.$el);
	          this.$destroy(true);
	        } } };

	    var Video = {
	      args: 'autoplay',

	      props: {
	        automute: Boolean,
	        autoplay: Boolean },


	      data: {
	        automute: false,
	        autoplay: true },


	      connected() {
	        this.inView = this.autoplay === 'inview';

	        if (this.inView && !hasAttr(this.$el, 'preload')) {
	          this.$el.preload = 'none';
	        }

	        if (this.automute) {
	          mute(this.$el);
	        }

	        this.registerObserver(observeIntersection(this.$el, () => this.$emit(), {}, false));
	      },

	      update: {
	        read() {
	          if (!isVideo(this.$el)) {
	            return false;
	          }

	          return {
	            visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
	            inView: this.inView && isInView(this.$el) };

	        },

	        write(_ref) {let { visible, inView } = _ref;
	          if (!visible || this.inView && !inView) {
	            pause(this.$el);
	          } else if (this.autoplay === true || this.inView && inView) {
	            play(this.$el);
	          }
	        } } };

	    var Resize = {
	      connected() {var _this$$options$resize;
	        this.registerObserver(
	        observeResize(((_this$$options$resize = this.$options.resizeTargets) == null ? void 0 : _this$$options$resize.call(this)) || this.$el, () =>
	        this.$emit('resize')));


	      } };

	    var cover = {
	      mixins: [Resize, Video],

	      props: {
	        width: Number,
	        height: Number },


	      data: {
	        automute: true },


	      events: {
	        'load loadedmetadata'() {
	          this.$emit('resize');
	        } },


	      resizeTargets() {
	        return [this.$el, parent(this.$el)];
	      },

	      update: {
	        read() {
	          const { ratio, cover } = Dimensions;
	          const { $el, width, height } = this;

	          let dim = { width, height };

	          if (!dim.width || !dim.height) {
	            const intrinsic = {
	              width: $el.naturalWidth || $el.videoWidth || $el.clientWidth,
	              height: $el.naturalHeight || $el.videoHeight || $el.clientHeight };


	            if (dim.width) {
	              dim = ratio(intrinsic, 'width', dim.width);
	            } else if (height) {
	              dim = ratio(intrinsic, 'height', dim.height);
	            } else {
	              dim = intrinsic;
	            }
	          }

	          const { offsetHeight: coverHeight, offsetWidth: coverWidth } =
	          getPositionedParent($el) || parent($el);
	          const coverDim = cover(dim, {
	            width: coverWidth + (coverWidth % 2 ? 1 : 0),
	            height: coverHeight + (coverHeight % 2 ? 1 : 0) });


	          if (!coverDim.width || !coverDim.height) {
	            return false;
	          }

	          return coverDim;
	        },

	        write(_ref) {let { height, width } = _ref;
	          css(this.$el, { height, width });
	        },

	        events: ['resize'] } };



	    function getPositionedParent(el) {
	      while (el = parent(el)) {
	        if (css(el, 'position') !== 'static') {
	          return el;
	        }
	      }
	    }

	    var Container = {
	      props: {
	        container: Boolean },


	      data: {
	        container: true },


	      computed: {
	        container(_ref) {let { container } = _ref;
	          return container === true && this.$container || container && $(container);
	        } } };

	    var Position = {
	      props: {
	        pos: String,
	        offset: null,
	        flip: Boolean },


	      data: {
	        pos: "bottom-" + (isRtl ? 'right' : 'left'),
	        flip: true,
	        offset: false },


	      connected() {
	        this.pos = this.$props.pos.split('-').concat('center').slice(0, 2);
	        this.axis = includes(['top', 'bottom'], this.pos[0]) ? 'y' : 'x';
	      },

	      methods: {
	        positionAt(element, target, boundary) {
	          const [dir, align] = this.pos;

	          let offset = toPx(
	          this.offset === false ? getCssVar('position-offset', element) : this.offset,
	          this.axis === 'x' ? 'width' : 'height',
	          element);

	          offset = [includes(['left', 'top'], dir) ? -offset : +offset, 0];

	          const attach = {
	            element: [flipPosition(dir), align],
	            target: [dir, align] };


	          if (this.axis === 'y') {
	            for (const prop in attach) {
	              attach[prop] = attach[prop].reverse();
	            }
	            offset = offset.reverse();
	          }

	          positionAt(element, target, {
	            attach,
	            offset,
	            boundary,
	            flip: this.flip,
	            viewportOffset: toPx(getCssVar('position-viewport-offset', element)) });

	        } } };

	    let active$1;

	    var drop = {
	      mixins: [Container, Lazyload, Position, Togglable],

	      args: 'pos',

	      props: {
	        mode: 'list',
	        toggle: Boolean,
	        boundary: Boolean,
	        boundaryAlign: Boolean,
	        delayShow: Number,
	        delayHide: Number,
	        display: String,
	        clsDrop: String },


	      data: {
	        mode: ['click', 'hover'],
	        toggle: '- *',
	        boundary: true,
	        boundaryAlign: false,
	        delayShow: 0,
	        delayHide: 800,
	        display: null,
	        clsDrop: false,
	        animation: ['uk-animation-fade'],
	        cls: 'uk-open',
	        container: false },


	      created() {
	        this.tracker = new MouseTracker();
	      },

	      beforeConnect() {
	        this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name;
	      },

	      connected() {
	        addClass(this.$el, this.clsDrop);

	        if (this.toggle && !this.target) {
	          this.target = this.$create('toggle', query(this.toggle, this.$el), {
	            target: this.$el,
	            mode: this.mode }).
	          $el;
	          attr(this.target, 'aria-haspopup', true);
	          this.lazyload(this.target);
	        }
	      },

	      disconnected() {
	        if (this.isActive()) {
	          active$1 = null;
	        }
	      },

	      events: [
	      {
	        name: 'click',

	        delegate() {
	          return "." + this.clsDrop + "-close";
	        },

	        handler(e) {
	          e.preventDefault();
	          this.hide(false);
	        } },


	      {
	        name: 'click',

	        delegate() {
	          return 'a[href^="#"]';
	        },

	        handler(_ref) {let { defaultPrevented, current: { hash } } = _ref;
	          if (!defaultPrevented && hash && !within(hash, this.$el)) {
	            this.hide(false);
	          }
	        } },


	      {
	        name: 'beforescroll',

	        handler() {
	          this.hide(false);
	        } },


	      {
	        name: 'toggle',

	        self: true,

	        handler(e, toggle) {
	          e.preventDefault();

	          if (this.isToggled()) {
	            this.hide(false);
	          } else {
	            this.show(toggle == null ? void 0 : toggle.$el, false);
	          }
	        } },


	      {
	        name: 'toggleshow',

	        self: true,

	        handler(e, toggle) {
	          e.preventDefault();
	          this.show(toggle == null ? void 0 : toggle.$el);
	        } },


	      {
	        name: 'togglehide',

	        self: true,

	        handler(e) {
	          e.preventDefault();
	          if (!matches(this.$el, ':focus,:hover')) {
	            this.hide();
	          }
	        } },


	      {
	        name: pointerEnter + " focusin",

	        filter() {
	          return includes(this.mode, 'hover');
	        },

	        handler(e) {
	          if (!isTouch(e)) {
	            this.clearTimers();
	          }
	        } },


	      {
	        name: pointerLeave + " focusout",

	        filter() {
	          return includes(this.mode, 'hover');
	        },

	        handler(e) {
	          if (!isTouch(e) && e.relatedTarget) {
	            this.hide();
	          }
	        } },


	      {
	        name: 'toggled',

	        self: true,

	        handler(e, toggled) {
	          if (!toggled) {
	            return;
	          }

	          this.clearTimers();
	          this.position();
	        } },


	      {
	        name: 'show',

	        self: true,

	        handler() {
	          active$1 = this;

	          this.tracker.init();

	          for (const handler of [
	          on(
	          document,
	          pointerDown,
	          (_ref2) => {let { target } = _ref2;return (
	              !within(target, this.$el) &&
	              once(
	              document,
	              pointerUp + " " + pointerCancel + " scroll",
	              (_ref3) => {let { defaultPrevented, type, target: newTarget } = _ref3;
	                if (
	                !defaultPrevented &&
	                type === pointerUp &&
	                target === newTarget &&
	                !(this.target && within(target, this.target)))
	                {
	                  this.hide(false);
	                }
	              },
	              true));}),



	          on(document, 'keydown', (e) => {
	            if (e.keyCode === 27) {
	              this.hide(false);
	            }
	          }),

	          ...(this.display === 'static' ?
	          [] :
	          (() => {
	            const handler = () => this.$emit();
	            return [
	            on(window, 'resize', handler),
	            on(document, 'scroll', handler, true),
	            (() => {
	              const observer = observeResize(
	              scrollParents(this.$el),
	              handler);

	              return () => observer.disconnect();
	            })()];

	          })())])
	          {
	            once(this.$el, 'hide', handler, { self: true });
	          }
	        } },


	      {
	        name: 'beforehide',

	        self: true,

	        handler() {
	          this.clearTimers();
	        } },


	      {
	        name: 'hide',

	        handler(_ref4) {let { target } = _ref4;
	          if (this.$el !== target) {
	            active$1 =
	            active$1 === null && within(target, this.$el) && this.isToggled() ?
	            this :
	            active$1;
	            return;
	          }

	          active$1 = this.isActive() ? null : active$1;
	          this.tracker.cancel();
	        } }],



	      update: {
	        write() {
	          if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
	            this.position();
	          }
	        } },


	      methods: {
	        show(target, delay) {if (target === void 0) {target = this.target;}if (delay === void 0) {delay = true;}
	          if (this.isToggled() && target && this.target && target !== this.target) {
	            this.hide(false);
	          }

	          this.target = target;

	          this.clearTimers();

	          if (this.isActive()) {
	            return;
	          }

	          if (active$1) {
	            if (delay && active$1.isDelaying) {
	              this.showTimer = setTimeout(() => matches(target, ':hover') && this.show(), 10);
	              return;
	            }

	            let prev;
	            while (active$1 && prev !== active$1 && !within(this.$el, active$1.$el)) {
	              prev = active$1;
	              active$1.hide(false);
	            }
	          }

	          if (this.container && parent(this.$el) !== this.container) {
	            append(this.container, this.$el);
	          }

	          this.showTimer = setTimeout(
	          () => this.toggleElement(this.$el, true),
	          delay && this.delayShow || 0);

	        },

	        hide(delay) {if (delay === void 0) {delay = true;}
	          const hide = () => this.toggleElement(this.$el, false, false);

	          this.clearTimers();

	          this.isDelaying = getPositionedElements(this.$el).some((el) =>
	          this.tracker.movesTo(el));


	          if (delay && this.isDelaying) {
	            this.hideTimer = setTimeout(this.hide, 50);
	          } else if (delay && this.delayHide) {
	            this.hideTimer = setTimeout(hide, this.delayHide);
	          } else {
	            hide();
	          }
	        },

	        clearTimers() {
	          clearTimeout(this.showTimer);
	          clearTimeout(this.hideTimer);
	          this.showTimer = null;
	          this.hideTimer = null;
	          this.isDelaying = false;
	        },

	        isActive() {
	          return active$1 === this;
	        },

	        position() {
	          removeClass(this.$el, this.clsDrop + "-stack");
	          toggleClass(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);

	          const boundary = query(this.boundary, this.$el);
	          const scrollParentOffset = offset(
	          scrollParents(boundary && this.boundaryAlign ? boundary : this.$el)[0]);

	          const boundaryOffset = boundary ? offset(boundary) : scrollParentOffset;

	          css(this.$el, 'maxWidth', '');
	          const maxWidth =
	          scrollParentOffset.width -
	          2 * toPx(getCssVar('position-viewport-offset', this.$el));

	          if (this.pos[1] === 'justify') {
	            const prop = this.axis === 'y' ? 'width' : 'height';
	            css(
	            this.$el,
	            prop,
	            Math.min(
	            (boundary ? boundaryOffset : offset(this.target))[prop],
	            scrollParentOffset[prop] -
	            2 * toPx(getCssVar('position-viewport-offset', this.$el))));


	          } else if (this.$el.offsetWidth > maxWidth) {
	            addClass(this.$el, this.clsDrop + "-stack");
	          }

	          css(this.$el, 'maxWidth', maxWidth);

	          this.positionAt(
	          this.$el,
	          boundary && this.boundaryAlign ? boundary : this.target,
	          boundary);

	        } } };



	    function getPositionedElements(el) {
	      const result = [];
	      apply(el, (el) => css(el, 'position') !== 'static' && result.push(el));
	      return result;
	    }

	    var formCustom = {
	      mixins: [Class],

	      args: 'target',

	      props: {
	        target: Boolean },


	      data: {
	        target: false },


	      computed: {
	        input(_, $el) {
	          return $(selInput, $el);
	        },

	        state() {
	          return this.input.nextElementSibling;
	        },

	        target(_ref, $el) {let { target } = _ref;
	          return (
	            target && (
	            target === true && parent(this.input) === $el && this.input.nextElementSibling ||
	            $(target, $el)));

	        } },


	      update() {var _input$files;
	        const { target, input } = this;

	        if (!target) {
	          return;
	        }

	        let option;
	        const prop = isInput(target) ? 'value' : 'textContent';
	        const prev = target[prop];
	        const value = (_input$files = input.files) != null && _input$files[0] ?
	        input.files[0].name :
	        matches(input, 'select') && (
	        option = $$('option', input).filter((el) => el.selected)[0]) // eslint-disable-line prefer-destructuring
	        ? option.textContent :
	        input.value;

	        if (prev !== value) {
	          target[prop] = value;
	        }
	      },

	      events: [
	      {
	        name: 'change',

	        handler() {
	          this.$emit();
	        } },


	      {
	        name: 'reset',

	        el() {
	          return closest(this.$el, 'form');
	        },

	        handler() {
	          this.$emit();
	        } }] };

	    var Margin = {
	      mixins: [Resize],

	      props: {
	        margin: String,
	        firstColumn: Boolean },


	      data: {
	        margin: 'uk-margin-small-top',
	        firstColumn: 'uk-first-column' },


	      resizeTargets() {
	        return [this.$el, ...toArray(this.$el.children)];
	      },

	      connected() {
	        this.registerObserver(
	        observeMutation(this.$el, () => this.$reset(), {
	          childList: true }));


	      },

	      update: {
	        read() {
	          const rows = getRows(this.$el.children);

	          return {
	            rows,
	            columns: getColumns(rows) };

	        },

	        write(_ref) {let { columns, rows } = _ref;
	          for (const row of rows) {
	            for (const column of row) {
	              toggleClass(column, this.margin, rows[0] !== row);
	              toggleClass(column, this.firstColumn, columns[0].includes(column));
	            }
	          }
	        },

	        events: ['resize'] } };



	    function getRows(items) {
	      return sortBy(items, 'top', 'bottom');
	    }

	    function getColumns(rows) {
	      const columns = [];

	      for (const row of rows) {
	        const sorted = sortBy(row, 'left', 'right');
	        for (let j = 0; j < sorted.length; j++) {
	          columns[j] = columns[j] ? columns[j].concat(sorted[j]) : sorted[j];
	        }
	      }

	      return isRtl ? columns.reverse() : columns;
	    }

	    function sortBy(items, startProp, endProp) {
	      const sorted = [[]];

	      for (const el of items) {
	        if (!isVisible(el)) {
	          continue;
	        }

	        let dim = getOffset(el);

	        for (let i = sorted.length - 1; i >= 0; i--) {
	          const current = sorted[i];

	          if (!current[0]) {
	            current.push(el);
	            break;
	          }

	          let startDim;
	          if (current[0].offsetParent === el.offsetParent) {
	            startDim = getOffset(current[0]);
	          } else {
	            dim = getOffset(el, true);
	            startDim = getOffset(current[0], true);
	          }

	          if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
	            sorted.push([el]);
	            break;
	          }

	          if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
	            current.push(el);
	            break;
	          }

	          if (i === 0) {
	            sorted.unshift([el]);
	            break;
	          }
	        }
	      }

	      return sorted;
	    }

	    function getOffset(element, offset) {if (offset === void 0) {offset = false;}
	      let { offsetTop, offsetLeft, offsetHeight, offsetWidth } = element;

	      if (offset) {
	        [offsetTop, offsetLeft] = offsetPosition(element);
	      }

	      return {
	        top: offsetTop,
	        left: offsetLeft,
	        bottom: offsetTop + offsetHeight,
	        right: offsetLeft + offsetWidth };

	    }

	    var Scroll = {
	      connected() {
	        registerScrollListener(this._uid, () => this.$emit('scroll'));
	      },

	      disconnected() {
	        unregisterScrollListener(this._uid);
	      } };


	    const scrollListeners = new Map();
	    let unbindScrollListener;
	    function registerScrollListener(id, listener) {
	      unbindScrollListener =
	      unbindScrollListener ||
	      on(window, 'scroll', () => scrollListeners.forEach((listener) => listener()), {
	        passive: true,
	        capture: true });


	      scrollListeners.set(id, listener);
	    }

	    function unregisterScrollListener(id) {
	      scrollListeners.delete(id);
	      if (unbindScrollListener && !scrollListeners.size) {
	        unbindScrollListener();
	        unbindScrollListener = null;
	      }
	    }

	    var grid = {
	      extends: Margin,

	      mixins: [Class, Scroll],

	      name: 'grid',

	      props: {
	        masonry: Boolean,
	        parallax: Number },


	      data: {
	        margin: 'uk-grid-margin',
	        clsStack: 'uk-grid-stack',
	        masonry: false,
	        parallax: 0 },


	      connected() {
	        this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
	      },

	      update: [
	      {
	        write(_ref) {let { columns } = _ref;
	          toggleClass(this.$el, this.clsStack, columns.length < 2);
	        },

	        events: ['resize'] },


	      {
	        read(data) {
	          let { columns, rows } = data;

	          // Filter component makes elements positioned absolute
	          if (
	          !columns.length ||
	          !this.masonry && !this.parallax ||
	          positionedAbsolute(this.$el))
	          {
	            data.translates = false;
	            return false;
	          }

	          let translates = false;

	          const nodes = children(this.$el);
	          const columnHeights = getColumnHeights(columns);
	          const margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
	          const elHeight = Math.max(...columnHeights) + margin;

	          if (this.masonry) {
	            columns = columns.map((column) => sortBy$1(column, 'offsetTop'));
	            translates = getTranslates(rows, columns);
	          }

	          let padding = Math.abs(this.parallax);
	          if (padding) {
	            padding = columnHeights.reduce(
	            (newPadding, hgt, i) =>
	            Math.max(
	            newPadding,
	            hgt + margin + (i % 2 ? padding : padding / 8) - elHeight),

	            0);

	          }

	          return { padding, columns, translates, height: translates ? elHeight : '' };
	        },

	        write(_ref2) {let { height, padding } = _ref2;
	          css(this.$el, 'paddingBottom', padding || '');
	          height !== false && css(this.$el, 'height', height);
	        },

	        events: ['resize'] },


	      {
	        read() {
	          if (this.parallax && positionedAbsolute(this.$el)) {
	            return false;
	          }

	          return {
	            scrolled: this.parallax ?
	            scrolledOver(this.$el) * Math.abs(this.parallax) :
	            false };

	        },

	        write(_ref3) {let { columns, scrolled, translates } = _ref3;
	          if (scrolled === false && !translates) {
	            return;
	          }

	          columns.forEach((column, i) =>
	          column.forEach((el, j) =>
	          css(
	          el,
	          'transform',
	          !scrolled && !translates ?
	          '' : "translateY(" + (

	          (translates && -translates[i][j]) + (
	          scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)")));




	        },

	        events: ['scroll', 'resize'] }] };




	    function positionedAbsolute(el) {
	      return children(el).some((el) => css(el, 'position') === 'absolute');
	    }

	    function getTranslates(rows, columns) {
	      const rowHeights = rows.map((row) => Math.max(...row.map((el) => el.offsetHeight)));

	      return columns.map((elements) => {
	        let prev = 0;
	        return elements.map(
	        (element, row) =>
	        prev += row ? rowHeights[row - 1] - elements[row - 1].offsetHeight : 0);

	      });
	    }

	    function getMarginTop(nodes, cls) {
	      const [node] = nodes.filter((el) => hasClass(el, cls));

	      return toFloat(node ? css(node, 'marginTop') : css(nodes[0], 'paddingLeft'));
	    }

	    function getColumnHeights(columns) {
	      return columns.map((column) => column.reduce((sum, el) => sum + el.offsetHeight, 0));
	    }

	    var heightMatch = {
	      mixins: [Resize],

	      args: 'target',

	      props: {
	        target: String,
	        row: Boolean },


	      data: {
	        target: '> *',
	        row: true },


	      computed: {
	        elements: {
	          get(_ref, $el) {let { target } = _ref;
	            return $$(target, $el);
	          },

	          watch() {
	            this.$reset();
	          } } },



	      resizeTargets() {
	        return [this.$el, ...this.elements];
	      },

	      update: {
	        read() {
	          return {
	            rows: (this.row ? getRows(this.elements) : [this.elements]).map(match$1) };

	        },

	        write(_ref2) {let { rows } = _ref2;
	          for (const { heights, elements } of rows) {
	            elements.forEach((el, i) => css(el, 'minHeight', heights[i]));
	          }
	        },

	        events: ['resize'] } };



	    function match$1(elements) {
	      if (elements.length < 2) {
	        return { heights: [''], elements };
	      }

	      css(elements, 'minHeight', '');
	      let heights = elements.map(getHeight);
	      const max = Math.max(...heights);

	      return {
	        heights: elements.map((el, i) => heights[i].toFixed(2) === max.toFixed(2) ? '' : max),
	        elements };

	    }

	    function getHeight(element) {
	      let style = false;
	      if (!isVisible(element)) {
	        style = element.style.display;
	        css(element, 'display', 'block', 'important');
	      }

	      const height = dimensions$1(element).height - boxModelAdjust(element, 'height', 'content-box');

	      if (style !== false) {
	        css(element, 'display', style);
	      }

	      return height;
	    }

	    var heightViewport = {
	      mixins: [Resize],

	      props: {
	        expand: Boolean,
	        offsetTop: Boolean,
	        offsetBottom: Boolean,
	        minHeight: Number },


	      data: {
	        expand: false,
	        offsetTop: false,
	        offsetBottom: false,
	        minHeight: 0 },


	      resizeTargets() {
	        // check for offsetTop change
	        return [this.$el, document.documentElement];
	      },

	      update: {
	        read(_ref) {let { minHeight: prev } = _ref;
	          if (!isVisible(this.$el)) {
	            return false;
	          }

	          let minHeight = '';
	          const box = boxModelAdjust(this.$el, 'height', 'content-box');

	          if (this.expand) {
	            minHeight = Math.max(
	            height(window) - (
	            dimensions$1(document.documentElement).height -
	            dimensions$1(this.$el).height) -
	            box,
	            0);

	          } else {
	            // on mobile devices (iOS and Android) window.innerHeight !== 100vh
	            minHeight = 'calc(100vh';

	            if (this.offsetTop) {
	              const { top } = offset(this.$el);
	              minHeight += top > 0 && top < height(window) / 2 ? " - " + top + "px" : '';
	            }

	            if (this.offsetBottom === true) {
	              minHeight += " - " + dimensions$1(this.$el.nextElementSibling).height + "px";
	            } else if (isNumeric(this.offsetBottom)) {
	              minHeight += " - " + this.offsetBottom + "vh";
	            } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {
	              minHeight += " - " + toFloat(this.offsetBottom) + "px";
	            } else if (isString(this.offsetBottom)) {
	              minHeight += " - " + dimensions$1(query(this.offsetBottom, this.$el)).height + "px";
	            }

	            minHeight += (box ? " - " + box + "px" : '') + ")";
	          }

	          return { minHeight, prev };
	        },

	        write(_ref2) {let { minHeight } = _ref2;
	          css(this.$el, { minHeight });

	          if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
	            css(this.$el, 'minHeight', this.minHeight);
	          }
	        },

	        events: ['resize'] } };

	    var SVG = {
	      args: 'src',

	      props: {
	        id: Boolean,
	        icon: String,
	        src: String,
	        style: String,
	        width: Number,
	        height: Number,
	        ratio: Number,
	        class: String,
	        strokeAnimation: Boolean,
	        focusable: Boolean, // IE 11
	        attributes: 'list' },


	      data: {
	        ratio: 1,
	        include: ['style', 'class', 'focusable'],
	        class: '',
	        strokeAnimation: false },


	      beforeConnect() {
	        this.class += ' uk-svg';
	      },

	      connected() {
	        if (!this.icon && includes(this.src, '#')) {
	          [this.src, this.icon] = this.src.split('#');
	        }

	        this.svg = this.getSvg().then((el) => {
	          if (this._connected) {
	            const svg = insertSVG(el, this.$el);

	            if (this.svgEl && svg !== this.svgEl) {
	              remove$1(this.svgEl);
	            }

	            this.applyAttributes(svg, el);

	            return this.svgEl = svg;
	          }
	        }, noop);

	        if (this.strokeAnimation) {
	          this.svg.then((el) => {
	            if (this._connected) {
	              applyAnimation(el);
	              this.registerObserver(
	              observeIntersection(el, (records, observer) => {
	                applyAnimation(el);
	                observer.disconnect();
	              }));

	            }
	          });
	        }
	      },

	      disconnected() {
	        this.svg.then((svg) => {
	          if (this._connected) {
	            return;
	          }

	          if (isVoidElement(this.$el)) {
	            this.$el.hidden = false;
	          }

	          remove$1(svg);
	          this.svgEl = null;
	        });

	        this.svg = null;
	      },

	      methods: {
	        async getSvg() {
	          if (isTag(this.$el, 'img') && !this.$el.complete && this.$el.loading === 'lazy') {
	            return new Promise((resolve) =>
	            once(this.$el, 'load', () => resolve(this.getSvg())));

	          }

	          return parseSVG(await loadSVG(this.src), this.icon) || Promise.reject('SVG not found.');
	        },

	        applyAttributes(el, ref) {
	          for (const prop in this.$options.props) {
	            if (includes(this.include, prop) && prop in this) {
	              attr(el, prop, this[prop]);
	            }
	          }

	          for (const attribute in this.attributes) {
	            const [prop, value] = this.attributes[attribute].split(':', 2);
	            attr(el, prop, value);
	          }

	          if (!this.id) {
	            removeAttr(el, 'id');
	          }

	          const props = ['width', 'height'];
	          let dimensions = props.map((prop) => this[prop]);

	          if (!dimensions.some((val) => val)) {
	            dimensions = props.map((prop) => attr(ref, prop));
	          }

	          const viewBox = attr(ref, 'viewBox');
	          if (viewBox && !dimensions.some((val) => val)) {
	            dimensions = viewBox.split(' ').slice(2);
	          }

	          dimensions.forEach((val, i) => attr(el, props[i], toFloat(val) * this.ratio || null));
	        } } };



	    const loadSVG = memoize(async (src) => {
	      if (src) {
	        if (startsWith(src, 'data:')) {
	          return decodeURIComponent(src.split(',')[1]);
	        } else {
	          return (await fetch(src)).text();
	        }
	      } else {
	        return Promise.reject();
	      }
	    });

	    function parseSVG(svg, icon) {var _svg;
	      if (icon && includes(svg, '<symbol')) {
	        svg = parseSymbols(svg, icon) || svg;
	      }

	      svg = $(svg.substr(svg.indexOf('<svg')));
	      return ((_svg = svg) == null ? void 0 : _svg.hasChildNodes()) && svg;
	    }

	    const symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
	    const symbols = {};

	    function parseSymbols(svg, icon) {
	      if (!symbols[svg]) {
	        symbols[svg] = {};

	        symbolRe.lastIndex = 0;

	        let match;
	        while (match = symbolRe.exec(svg)) {
	          symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + match[1] + "svg>";
	        }
	      }

	      return symbols[svg][icon];
	    }

	    function applyAnimation(el) {
	      const length = getMaxPathLength(el);

	      if (length) {
	        el.style.setProperty('--uk-animation-stroke', length);
	      }
	    }

	    function getMaxPathLength(el) {
	      return Math.ceil(
	      Math.max(
	      0,
	      ...$$('[stroke]', el).map((stroke) => {
	        try {
	          return stroke.getTotalLength();
	        } catch (e) {
	          return 0;
	        }
	      })));


	    }

	    function insertSVG(el, root) {
	      if (isVoidElement(root) || isTag(root, 'canvas')) {
	        root.hidden = true;

	        const next = root.nextElementSibling;
	        return equals(el, next) ? next : after(root, el);
	      }

	      const last = root.lastElementChild;
	      return equals(el, last) ? last : append(root, el);
	    }

	    function equals(el, other) {
	      return isTag(el, 'svg') && isTag(other, 'svg') && innerHTML(el) === innerHTML(other);
	    }

	    function innerHTML(el) {
	      return (
	      el.innerHTML ||
	      new XMLSerializer().serializeToString(el).replace(/<svg.*?>(.*?)<\/svg>/g, '$1')).
	      replace(/\s/g, '');
	    }

	    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

	    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

	    var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";

	    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";

	    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";

	    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

	    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

	    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

	    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

	    var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

	    var slidenavNext = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";

	    var slidenavNextLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";

	    var slidenavPrevious = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";

	    var slidenavPreviousLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";

	    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

	    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";

	    const icons = {
	      spinner,
	      totop,
	      marker,
	      'close-icon': closeIcon,
	      'close-large': closeLarge,
	      'navbar-toggle-icon': navbarToggleIcon,
	      'overlay-icon': overlayIcon,
	      'pagination-next': paginationNext,
	      'pagination-previous': paginationPrevious,
	      'search-icon': searchIcon,
	      'search-large': searchLarge,
	      'search-navbar': searchNavbar,
	      'slidenav-next': slidenavNext,
	      'slidenav-next-large': slidenavNextLarge,
	      'slidenav-previous': slidenavPrevious,
	      'slidenav-previous-large': slidenavPreviousLarge };


	    const Icon = {
	      install: install$3,

	      extends: SVG,

	      args: 'icon',

	      props: ['icon'],

	      data: {
	        include: ['focusable'] },


	      isIcon: true,

	      beforeConnect() {
	        addClass(this.$el, 'uk-icon');
	      },

	      methods: {
	        async getSvg() {
	          const icon = getIcon(this.icon);

	          if (!icon) {
	            throw 'Icon not found.';
	          }

	          return icon;
	        } } };

	    const IconComponent = {
	      args: false,

	      extends: Icon,

	      data: (vm) => ({
	        icon: hyphenate(vm.constructor.options.name) }),


	      beforeConnect() {
	        addClass(this.$el, this.$name);
	      } };


	    const Slidenav = {
	      extends: IconComponent,

	      beforeConnect() {
	        addClass(this.$el, 'uk-slidenav');
	        const icon = this.$props.icon;
	        this.icon = hasClass(this.$el, 'uk-slidenav-large') ? icon + "-large" : icon;
	      } };


	    const Search = {
	      extends: IconComponent,

	      beforeConnect() {
	        this.icon =
	        hasClass(this.$el, 'uk-search-icon') && parents(this.$el, '.uk-search-large').length ?
	        'search-large' :
	        parents(this.$el, '.uk-search-navbar').length ?
	        'search-navbar' :
	        this.$props.icon;
	      } };


	    const Close = {
	      extends: IconComponent,

	      beforeConnect() {
	        this.icon = "close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon');
	      } };


	    const Spinner = {
	      extends: IconComponent,

	      methods: {
	        async getSvg() {
	          const icon = await Icon.methods.getSvg.call(this);

	          if (this.ratio !== 1) {
	            css($('circle', icon), 'strokeWidth', 1 / this.ratio);
	          }

	          return icon;
	        } } };



	    const parsed = {};
	    function install$3(UIkit) {
	      UIkit.icon.add = (name, svg) => {
	        const added = isString(name) ? { [name]: svg } : name;
	        each(added, (svg, name) => {
	          icons[name] = svg;
	          delete parsed[name];
	        });

	        if (UIkit._initialized) {
	          apply(document.body, (el) =>
	          each(UIkit.getComponents(el), (cmp) => {
	            cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
	          }));

	        }
	      };
	    }

	    function getIcon(icon) {
	      if (!icons[icon]) {
	        return null;
	      }

	      if (!parsed[icon]) {
	        parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
	      }

	      return parsed[icon].cloneNode(true);
	    }

	    function applyRtl(icon) {
	      return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
	    }

	    const nativeLazyLoad = inBrowser && 'loading' in HTMLImageElement.prototype;

	    var img = {
	      args: 'dataSrc',

	      props: {
	        dataSrc: String,
	        sources: String,
	        offsetTop: String,
	        offsetLeft: String,
	        target: String,
	        loading: String },


	      data: {
	        dataSrc: '',
	        sources: false,
	        offsetTop: '50vh',
	        offsetLeft: '50vw',
	        target: false,
	        loading: 'lazy' },


	      connected() {
	        if (this.loading !== 'lazy') {
	          this.load();
	          return;
	        }

	        const target = [this.$el, ...queryAll(this.$props.target, this.$el)];

	        if (nativeLazyLoad && isImg(this.$el)) {
	          this.$el.loading = 'lazy';
	          setSrcAttrs(this.$el);

	          if (target.length === 1) {
	            return;
	          }
	        }

	        ensureSrcAttribute(this.$el);

	        this.registerObserver(
	        observeIntersection(
	        target,
	        (entries, observer) => {
	          this.load();
	          observer.disconnect();
	        },
	        {
	          rootMargin: toPx(this.offsetTop, 'height') + "px " + toPx(
	          this.offsetLeft,
	          'width') + "px" }));




	      },

	      disconnected() {
	        if (this._data.image) {
	          this._data.image.onload = '';
	        }
	      },

	      methods: {
	        load() {
	          if (this._data.image) {
	            return this._data.image;
	          }

	          const image = isImg(this.$el) ?
	          this.$el :
	          getImageFromElement(this.$el, this.dataSrc, this.sources);

	          removeAttr(image, 'loading');
	          setSrcAttrs(this.$el, image.currentSrc);
	          return this._data.image = image;
	        } } };



	    function setSrcAttrs(el, src) {
	      if (isImg(el)) {
	        const parentNode = parent(el);
	        const elements = isPicture(parentNode) ? children(parentNode) : [el];
	        elements.forEach((el) => setSourceProps(el, el));
	      } else if (src) {
	        const change = !includes(el.style.backgroundImage, src);
	        if (change) {
	          css(el, 'backgroundImage', "url(" + escape(src) + ")");
	          trigger(el, createEvent('load', false));
	        }
	      }
	    }

	    const srcProps = ['data-src', 'data-srcset', 'sizes'];
	    function setSourceProps(sourceEl, targetEl) {
	      srcProps.forEach((prop) => {
	        const value = data(sourceEl, prop);
	        if (value) {
	          attr(targetEl, prop.replace(/^(data-)+/, ''), value);
	        }
	      });
	    }

	    function getImageFromElement(el, src, sources) {
	      const img = new Image();

	      wrapInPicture(img, sources);
	      setSourceProps(el, img);
	      img.onload = () => {
	        setSrcAttrs(el, img.currentSrc);
	      };
	      attr(img, 'src', src);
	      return img;
	    }

	    function wrapInPicture(img, sources) {
	      sources = parseSources(sources);

	      if (sources.length) {
	        const picture = fragment('<picture>');
	        for (const attrs of sources) {
	          const source = fragment('<source>');
	          attr(source, attrs);
	          append(picture, source);
	        }
	        append(picture, img);
	      }
	    }

	    function parseSources(sources) {
	      if (!sources) {
	        return [];
	      }

	      if (startsWith(sources, '[')) {
	        try {
	          sources = JSON.parse(sources);
	        } catch (e) {
	          sources = [];
	        }
	      } else {
	        sources = parseOptions(sources);
	      }

	      if (!isArray(sources)) {
	        sources = [sources];
	      }

	      return sources.filter((source) => !isEmpty(source));
	    }

	    function ensureSrcAttribute(el) {
	      if (isImg(el) && !hasAttr(el, 'src')) {
	        attr(el, 'src', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
	      }
	    }

	    function isPicture(el) {
	      return isTag(el, 'picture');
	    }

	    function isImg(el) {
	      return isTag(el, 'img');
	    }

	    var Media = {
	      props: {
	        media: Boolean },


	      data: {
	        media: false },


	      connected() {
	        const media = toMedia(this.media);
	        this.matchMedia = true;
	        if (media) {
	          this.mediaObj = window.matchMedia(media);
	          const handler = () => {
	            this.matchMedia = this.mediaObj.matches;
	            trigger(this.$el, createEvent('mediachange', false, true, [this.mediaObj]));
	          };
	          this.offMediaObj = on(this.mediaObj, 'change', () => {
	            handler();
	            this.$emit('resize');
	          });
	          handler();
	        }
	      },

	      disconnected() {var _this$offMediaObj;
	        (_this$offMediaObj = this.offMediaObj) == null ? void 0 : _this$offMediaObj.call(this);
	      } };


	    function toMedia(value) {
	      if (isString(value)) {
	        if (startsWith(value, '@')) {
	          const name = "breakpoint-" + value.substr(1);
	          value = toFloat(getCssVar(name));
	        } else if (isNaN(value)) {
	          return value;
	        }
	      }

	      return value && isNumeric(value) ? "(min-width: " + value + "px)" : '';
	    }

	    var leader = {
	      mixins: [Class, Media, Resize],

	      props: {
	        fill: String },


	      data: {
	        fill: '',
	        clsWrapper: 'uk-leader-fill',
	        clsHide: 'uk-leader-hide',
	        attrFill: 'data-fill' },


	      computed: {
	        fill(_ref) {let { fill } = _ref;
	          return fill || getCssVar('leader-fill-content');
	        } },


	      connected() {
	        [this.wrapper] = wrapInner(this.$el, "<span class=\"" + this.clsWrapper + "\">");
	      },

	      disconnected() {
	        unwrap(this.wrapper.childNodes);
	      },

	      update: {
	        read() {
	          const width = Math.trunc(this.$el.offsetWidth / 2);

	          return {
	            width,
	            fill: this.fill,
	            hide: !this.matchMedia };

	        },

	        write(_ref2) {let { width, fill, hide } = _ref2;
	          toggleClass(this.wrapper, this.clsHide, hide);
	          attr(this.wrapper, this.attrFill, new Array(width).join(fill));
	        },

	        events: ['resize'] } };

	    const active = [];

	    var Modal = {
	      mixins: [Class, Container, Togglable],

	      props: {
	        selPanel: String,
	        selClose: String,
	        escClose: Boolean,
	        bgClose: Boolean,
	        stack: Boolean },


	      data: {
	        cls: 'uk-open',
	        escClose: true,
	        bgClose: true,
	        overlay: true,
	        stack: false },


	      computed: {
	        panel(_ref, $el) {let { selPanel } = _ref;
	          return $(selPanel, $el);
	        },

	        transitionElement() {
	          return this.panel;
	        },

	        bgClose(_ref2) {let { bgClose } = _ref2;
	          return bgClose && this.panel;
	        } },


	      beforeDisconnect() {
	        if (includes(active, this)) {
	          this.toggleElement(this.$el, false, false);
	        }
	      },

	      events: [
	      {
	        name: 'click',

	        delegate() {
	          return this.selClose;
	        },

	        handler(e) {
	          e.preventDefault();
	          this.hide();
	        } },


	      {
	        name: 'toggle',

	        self: true,

	        handler(e) {
	          if (e.defaultPrevented) {
	            return;
	          }

	          e.preventDefault();

	          if (this.isToggled() === includes(active, this)) {
	            this.toggle();
	          }
	        } },


	      {
	        name: 'beforeshow',

	        self: true,

	        handler(e) {
	          if (includes(active, this)) {
	            return false;
	          }

	          if (!this.stack && active.length) {
	            Promise.all(active.map((modal) => modal.hide())).then(this.show);
	            e.preventDefault();
	          } else {
	            active.push(this);
	          }
	        } },


	      {
	        name: 'show',

	        self: true,

	        handler() {
	          const docEl = document.documentElement;

	          if (width(window) > docEl.clientWidth && this.overlay) {
	            css(document.body, 'overflowY', 'scroll');
	          }

	          if (this.stack) {
	            css(this.$el, 'zIndex', toFloat(css(this.$el, 'zIndex')) + active.length);
	          }

	          addClass(docEl, this.clsPage);

	          if (this.bgClose) {
	            once(
	            this.$el,
	            'hide',
	            on(document, pointerDown, (_ref3) => {let { target } = _ref3;
	              if (
	              last(active) !== this ||
	              this.overlay && !within(target, this.$el) ||
	              within(target, this.panel))
	              {
	                return;
	              }

	              once(
	              document,
	              pointerUp + " " + pointerCancel + " scroll",
	              (_ref4) => {let { defaultPrevented, type, target: newTarget } = _ref4;
	                if (
	                !defaultPrevented &&
	                type === pointerUp &&
	                target === newTarget)
	                {
	                  this.hide();
	                }
	              },
	              true);

	            }),
	            { self: true });

	          }

	          if (this.escClose) {
	            once(
	            this.$el,
	            'hide',
	            on(document, 'keydown', (e) => {
	              if (e.keyCode === 27 && last(active) === this) {
	                this.hide();
	              }
	            }),
	            { self: true });

	          }
	        } },


	      {
	        name: 'shown',

	        self: true,

	        handler() {
	          if (!isFocusable(this.$el)) {
	            attr(this.$el, 'tabindex', '-1');
	          }

	          if (!$(':focus', this.$el)) {
	            this.$el.focus();
	          }
	        } },


	      {
	        name: 'hidden',

	        self: true,

	        handler() {
	          if (includes(active, this)) {
	            active.splice(active.indexOf(this), 1);
	          }

	          if (!active.length) {
	            css(document.body, 'overflowY', '');
	          }

	          css(this.$el, 'zIndex', '');

	          if (!active.some((modal) => modal.clsPage === this.clsPage)) {
	            removeClass(document.documentElement, this.clsPage);
	          }
	        } }],



	      methods: {
	        toggle() {
	          return this.isToggled() ? this.hide() : this.show();
	        },

	        show() {
	          if (this.container && parent(this.$el) !== this.container) {
	            append(this.container, this.$el);
	            return new Promise((resolve) =>
	            requestAnimationFrame(() => this.show().then(resolve)));

	          }

	          return this.toggleElement(this.$el, true, animate(this));
	        },

	        hide() {
	          return this.toggleElement(this.$el, false, animate(this));
	        } } };



	    function animate(_ref5) {let { transitionElement, _toggle } = _ref5;
	      return (el, show) =>
	      new Promise((resolve, reject) =>
	      once(el, 'show hide', () => {
	        el._reject == null ? void 0 : el._reject();
	        el._reject = reject;

	        _toggle(el, show);

	        const off = once(
	        transitionElement,
	        'transitionstart',
	        () => {
	          once(transitionElement, 'transitionend transitioncancel', resolve, {
	            self: true });

	          clearTimeout(timer);
	        },
	        { self: true });


	        const timer = setTimeout(() => {
	          off();
	          resolve();
	        }, toMs(css(transitionElement, 'transitionDuration')));
	      })).
	      then(() => delete el._reject);
	    }

	    function toMs(time) {
	      return time ? endsWith(time, 'ms') ? toFloat(time) : toFloat(time) * 1000 : 0;
	    }

	    var modal = {
	      install: install$2,

	      mixins: [Modal],

	      data: {
	        clsPage: 'uk-modal-page',
	        selPanel: '.uk-modal-dialog',
	        selClose:
	        '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full' },


	      events: [
	      {
	        name: 'show',

	        self: true,

	        handler() {
	          if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
	            addClass(this.$el, 'uk-flex');
	          } else {
	            css(this.$el, 'display', 'block');
	          }

	          height(this.$el); // force reflow
	        } },


	      {
	        name: 'hidden',

	        self: true,

	        handler() {
	          css(this.$el, 'display', '');
	          removeClass(this.$el, 'uk-flex');
	        } }] };




	    function install$2(_ref) {let { modal } = _ref;
	      modal.dialog = function (content, options) {
	        const dialog = modal("<div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" +

	        content + "</div> </div>",

	        options);


	        dialog.show();

	        on(
	        dialog.$el,
	        'hidden',
	        async () => {
	          await Promise.resolve();
	          dialog.$destroy(true);
	        },
	        { self: true });


	        return dialog;
	      };

	      modal.alert = function (message, options) {
	        return openDialog(
	        (_ref2) => {let { labels } = _ref2;return "<div class=\"uk-modal-body\">" + (
	          isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" +



	          labels.ok + "</button> </div>";},


	        options,
	        (deferred) => deferred.resolve());

	      };

	      modal.confirm = function (message, options) {
	        return openDialog(
	        (_ref3) => {let { labels } = _ref3;return "<form> <div class=\"uk-modal-body\">" + (
	          isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" +


	          labels.cancel + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" +

	          labels.ok + "</button> </div> </form>";},


	        options,
	        (deferred) => deferred.reject());

	      };

	      modal.prompt = function (message, value, options) {
	        return openDialog(
	        (_ref4) => {let { labels } = _ref4;return "<form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (

	          isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" value=\"" + (
	          value || '') + "\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" +



	          labels.cancel + "</button> <button class=\"uk-button uk-button-primary\">" +

	          labels.ok + "</button> </div> </form>";},


	        options,
	        (deferred) => deferred.resolve(null),
	        (dialog) => $('input', dialog.$el).value);

	      };

	      modal.labels = {
	        ok: 'Ok',
	        cancel: 'Cancel' };


	      function openDialog(tmpl, options, hideFn, submitFn) {
	        options = { bgClose: false, escClose: true, labels: modal.labels, ...options };

	        const dialog = modal.dialog(tmpl(options), options);
	        const deferred = new Deferred();

	        let resolved = false;

	        on(dialog.$el, 'submit', 'form', (e) => {
	          e.preventDefault();
	          deferred.resolve(submitFn == null ? void 0 : submitFn(dialog));
	          resolved = true;
	          dialog.hide();
	        });

	        on(dialog.$el, 'hide', () => !resolved && hideFn(deferred));

	        deferred.promise.dialog = dialog;

	        return deferred.promise;
	      }
	    }

	    var nav = {
	      extends: Accordion,

	      data: {
	        targets: '> .uk-parent',
	        toggle: '> a',
	        content: '> ul' } };

	    var navbar = {
	      mixins: [Class, Container],

	      props: {
	        dropdown: String,
	        mode: 'list',
	        align: String,
	        offset: Number,
	        boundary: Boolean,
	        boundaryAlign: Boolean,
	        clsDrop: String,
	        delayShow: Number,
	        delayHide: Number,
	        dropbar: Boolean,
	        dropbarAnchor: Boolean,
	        duration: Number },


	      data: {
	        dropdown: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle',
	        align: isRtl ? 'right' : 'left',
	        clsDrop: 'uk-navbar-dropdown',
	        mode: undefined,
	        offset: undefined,
	        delayShow: undefined,
	        delayHide: undefined,
	        boundaryAlign: undefined,
	        flip: 'x',
	        boundary: true,
	        dropbar: false,
	        dropbarAnchor: false,
	        duration: 200,
	        container: false },


	      computed: {
	        boundary(_ref, $el) {let { boundary } = _ref;
	          return boundary === true ? $el : boundary;
	        },

	        dropbarAnchor(_ref2, $el) {let { dropbarAnchor } = _ref2;
	          return query(dropbarAnchor, $el);
	        },

	        pos(_ref3) {let { align } = _ref3;
	          return "bottom-" + align;
	        },

	        dropbar: {
	          get(_ref4) {let { dropbar } = _ref4;
	            if (!dropbar) {
	              return null;
	            }

	            dropbar =
	            this._dropbar ||
	            query(dropbar, this.$el) ||
	            $('+ .uk-navbar-dropbar', this.$el);

	            return dropbar ? dropbar : this._dropbar = $('<div></div>');
	          },

	          watch(dropbar) {
	            addClass(dropbar, 'uk-navbar-dropbar');
	          },

	          immediate: true },


	        dropContainer(_, $el) {
	          return this.container || $el;
	        },

	        dropdowns: {
	          get(_ref5, $el) {let { clsDrop } = _ref5;
	            const dropdowns = $$("." + clsDrop, $el);

	            if (this.dropContainer !== $el) {
	              for (const el of $$("." + clsDrop, this.dropContainer)) {var _this$getDropdown;
	                const target = (_this$getDropdown = this.getDropdown(el)) == null ? void 0 : _this$getDropdown.target;
	                if (!includes(dropdowns, el) && target && within(target, this.$el)) {
	                  dropdowns.push(el);
	                }
	              }
	            }

	            return dropdowns;
	          },

	          watch(dropdowns) {
	            this.$create(
	            'drop',
	            dropdowns.filter((el) => !this.getDropdown(el)),
	            {
	              ...this.$props,
	              boundary: this.boundary,
	              pos: this.pos,
	              offset: this.dropbar || this.offset });


	          },

	          immediate: true },


	        toggles: {
	          get(_ref6, $el) {let { dropdown } = _ref6;
	            return $$(dropdown, $el);
	          },

	          watch() {
	            const justify = hasClass(this.$el, 'uk-navbar-justify');
	            for (const container of $$(
	            '.uk-navbar-nav, .uk-navbar-left, .uk-navbar-right',
	            this.$el))
	            {
	              css(container, 'flexGrow', justify ? $$(this.dropdown, container).length : '');
	            }
	          },

	          immediate: true } },



	      disconnected() {
	        this.dropbar && remove$1(this.dropbar);
	        delete this._dropbar;
	      },

	      events: [
	      {
	        name: 'mouseover focusin',

	        delegate() {
	          return this.dropdown;
	        },

	        handler(_ref7) {let { current } = _ref7;
	          const active = this.getActive();
	          if (
	          active &&
	          includes(active.mode, 'hover') &&
	          active.target &&
	          !within(active.target, current) &&
	          !active.isDelaying)
	          {
	            active.hide(false);
	          }
	        } },


	      {
	        name: 'keydown',

	        delegate() {
	          return this.dropdown;
	        },

	        handler(e) {
	          const { current, keyCode } = e;
	          const active = this.getActive();

	          if (keyCode === keyMap.DOWN && hasAttr(current, 'aria-expanded')) {
	            e.preventDefault();

	            if (!active || active.target !== current) {
	              current.click();
	              once(this.dropContainer, 'show', (_ref8) => {let { target } = _ref8;return (
	                  focusFirstFocusableElement(target));});

	            } else {
	              focusFirstFocusableElement(active.$el);
	            }
	          }

	          handleNavItemNavigation(e, this.toggles, active);
	        } },


	      {
	        name: 'keydown',

	        el() {
	          return this.dropContainer;
	        },

	        delegate() {
	          return "." + this.clsDrop;
	        },

	        handler(e) {
	          const { current, keyCode } = e;

	          if (!includes(this.dropdowns, current)) {
	            return;
	          }

	          const active = this.getActive();
	          const elements = $$(selFocusable, current);
	          const i = findIndex(elements, (el) => matches(el, ':focus'));

	          if (keyCode === keyMap.UP) {
	            e.preventDefault();
	            if (i > 0) {
	              elements[i - 1].focus();
	            }
	          }

	          if (keyCode === keyMap.DOWN) {
	            e.preventDefault();
	            if (i < elements.length - 1) {
	              elements[i + 1].focus();
	            }
	          }

	          if (keyCode === keyMap.ESC) {var _active$target;
	            active == null ? void 0 : (_active$target = active.target) == null ? void 0 : _active$target.focus();
	          }

	          handleNavItemNavigation(e, this.toggles, active);
	        } },


	      {
	        name: 'mouseleave',

	        el() {
	          return this.dropbar;
	        },

	        filter() {
	          return this.dropbar;
	        },

	        handler() {
	          const active = this.getActive();

	          if (
	          active &&
	          includes(active.mode, 'hover') &&
	          !this.dropdowns.some((el) => matches(el, ':hover')))
	          {
	            active.hide();
	          }
	        } },


	      {
	        name: 'beforeshow',

	        el() {
	          return this.dropContainer;
	        },

	        filter() {
	          return this.dropbar;
	        },

	        handler(_, _ref9) {let { $el } = _ref9;
	          if (!hasClass($el, this.clsDrop)) {
	            return;
	          }

	          if (!parent(this.dropbar)) {
	            after(this.dropbarAnchor || this.$el, this.dropbar);
	          }

	          addClass($el, this.clsDrop + "-dropbar");
	        } },


	      {
	        name: 'show',

	        el() {
	          return this.dropContainer;
	        },

	        filter() {
	          return this.dropbar;
	        },

	        handler(_, _ref10) {let { $el } = _ref10;
	          if (!hasClass($el, this.clsDrop)) {
	            return;
	          }

	          this._observer = observeResize($el, () =>
	          this.transitionTo(
	          offset($el).bottom -
	          offset(this.dropbar).top +
	          toFloat(css($el, 'marginBottom')),
	          $el));


	        } },


	      {
	        name: 'beforehide',

	        el() {
	          return this.dropContainer;
	        },

	        filter() {
	          return this.dropbar;
	        },

	        handler(e, _ref11) {let { $el } = _ref11;
	          const active = this.getActive();

	          if (
	          matches(this.dropbar, ':hover') &&
	          (active == null ? void 0 : active.$el) === $el &&
	          !this.toggles.some((el) => active.target !== el && matches(el, ':focus')))
	          {
	            e.preventDefault();
	          }
	        } },


	      {
	        name: 'hide',

	        el() {
	          return this.dropContainer;
	        },

	        filter() {
	          return this.dropbar;
	        },

	        handler(_, _ref12) {let { $el } = _ref12;
	          if (!hasClass($el, this.clsDrop)) {
	            return;
	          }

	          this._observer.disconnect();

	          const active = this.getActive();

	          if (!active || (active == null ? void 0 : active.$el) === $el) {
	            this.transitionTo(0);
	          }
	        } }],



	      methods: {
	        getActive() {
	          return active$1 && within(active$1.target, this.$el) && active$1;
	        },

	        transitionTo(newHeight, el) {
	          const { dropbar } = this;
	          const oldHeight = height(dropbar);

	          el = oldHeight < newHeight && el;

	          css(el, 'clip', "rect(0," + el.offsetWidth + "px," + oldHeight + "px,0)");

	          height(dropbar, oldHeight);

	          Transition.cancel([el, dropbar]);
	          Promise.all([
	          Transition.start(dropbar, { height: newHeight }, this.duration),
	          Transition.start(
	          el,
	          { clip: "rect(0," + el.offsetWidth + "px," + newHeight + "px,0)" },
	          this.duration)]).


	          catch(noop).
	          then(() => css(el, { clip: '' }));
	        },

	        getDropdown(el) {
	          return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
	        } } };



	    function handleNavItemNavigation(e, toggles, active) {
	      const { current, keyCode } = e;
	      const target = (active == null ? void 0 : active.target) || current;
	      const i = toggles.indexOf(target);

	      // Left
	      if (keyCode === keyMap.LEFT && i > 0) {
	        active == null ? void 0 : active.hide(false);
	        toggles[i - 1].focus();
	      }

	      // Right
	      if (keyCode === keyMap.RIGHT && i < toggles.length - 1) {
	        active == null ? void 0 : active.hide(false);
	        toggles[i + 1].focus();
	      }

	      if (keyCode === keyMap.TAB) {
	        target.focus();
	        active == null ? void 0 : active.hide(false);
	      }
	    }

	    function focusFirstFocusableElement(el) {
	      if (!$(':focus', el)) {var _$;
	        (_$ = $(selFocusable, el)) == null ? void 0 : _$.focus();
	      }
	    }

	    const keyMap = {
	      TAB: 9,
	      ESC: 27,
	      LEFT: 37,
	      UP: 38,
	      RIGHT: 39,
	      DOWN: 40 };

	    var Swipe = {
	      props: {
	        swiping: Boolean },


	      data: {
	        swiping: true },


	      computed: {
	        swipeTarget(props, $el) {
	          return $el;
	        } },


	      connected() {
	        if (!this.swiping) {
	          return;
	        }

	        registerEvent(this, {
	          el: this.swipeTarget,
	          name: pointerDown,
	          passive: true,
	          handler(e) {
	            if (!isTouch(e)) {
	              return;
	            }

	            // Handle Swipe Gesture
	            const pos = getEventPos(e);
	            const target = 'tagName' in e.target ? e.target : parent(e.target);
	            once(document, pointerUp + " " + pointerCancel + " scroll", (e) => {
	              const { x, y } = getEventPos(e);

	              // swipe
	              if (
	              e.type !== 'scroll' && target && x && Math.abs(pos.x - x) > 100 ||
	              y && Math.abs(pos.y - y) > 100)
	              {
	                setTimeout(() => {
	                  trigger(target, 'swipe');
	                  trigger(target, "swipe" + swipeDirection(pos.x, pos.y, x, y));
	                });
	              }
	            });
	          } });

	      } };


	    function swipeDirection(x1, y1, x2, y2) {
	      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ?
	      x1 - x2 > 0 ?
	      'Left' :
	      'Right' :
	      y1 - y2 > 0 ?
	      'Up' :
	      'Down';
	    }

	    var offcanvas = {
	      mixins: [Modal, Swipe],

	      args: 'mode',

	      props: {
	        mode: String,
	        flip: Boolean,
	        overlay: Boolean },


	      data: {
	        mode: 'slide',
	        flip: false,
	        overlay: false,
	        clsPage: 'uk-offcanvas-page',
	        clsContainer: 'uk-offcanvas-container',
	        selPanel: '.uk-offcanvas-bar',
	        clsFlip: 'uk-offcanvas-flip',
	        clsContainerAnimation: 'uk-offcanvas-container-animation',
	        clsSidebarAnimation: 'uk-offcanvas-bar-animation',
	        clsMode: 'uk-offcanvas',
	        clsOverlay: 'uk-offcanvas-overlay',
	        selClose: '.uk-offcanvas-close',
	        container: false },


	      computed: {
	        clsFlip(_ref) {let { flip, clsFlip } = _ref;
	          return flip ? clsFlip : '';
	        },

	        clsOverlay(_ref2) {let { overlay, clsOverlay } = _ref2;
	          return overlay ? clsOverlay : '';
	        },

	        clsMode(_ref3) {let { mode, clsMode } = _ref3;
	          return clsMode + "-" + mode;
	        },

	        clsSidebarAnimation(_ref4) {let { mode, clsSidebarAnimation } = _ref4;
	          return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
	        },

	        clsContainerAnimation(_ref5) {let { mode, clsContainerAnimation } = _ref5;
	          return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
	        },

	        transitionElement(_ref6) {let { mode } = _ref6;
	          return mode === 'reveal' ? parent(this.panel) : this.panel;
	        } },


	      update: {
	        read() {
	          if (this.isToggled() && !isVisible(this.$el)) {
	            this.hide();
	          }
	        },

	        events: ['resize'] },


	      events: [
	      {
	        name: 'click',

	        delegate() {
	          return 'a[href^="#"]';
	        },

	        handler(_ref7) {let { current: { hash }, defaultPrevented } = _ref7;
	          if (!defaultPrevented && hash && $(hash, document.body)) {
	            this.hide();
	          }
	        } },


	      {
	        name: 'touchstart',

	        passive: true,

	        el() {
	          return this.panel;
	        },

	        handler(_ref8) {let { targetTouches } = _ref8;
	          if (targetTouches.length === 1) {
	            this.clientY = targetTouches[0].clientY;
	          }
	        } },


	      {
	        name: 'touchmove',

	        self: true,
	        passive: false,

	        filter() {
	          return this.overlay;
	        },

	        handler(e) {
	          e.cancelable && e.preventDefault();
	        } },


	      {
	        name: 'touchmove',

	        passive: false,

	        el() {
	          return this.panel;
	        },

	        handler(e) {
	          if (e.targetTouches.length !== 1) {
	            return;
	          }

	          const clientY = e.targetTouches[0].clientY - this.clientY;
	          const { scrollTop, scrollHeight, clientHeight } = this.panel;

	          if (
	          clientHeight >= scrollHeight ||
	          scrollTop === 0 && clientY > 0 ||
	          scrollHeight - scrollTop <= clientHeight && clientY < 0)
	          {
	            e.cancelable && e.preventDefault();
	          }
	        } },


	      {
	        name: 'show',

	        self: true,

	        handler() {
	          if (this.mode === 'reveal' && !hasClass(parent(this.panel), this.clsMode)) {
	            wrapAll(this.panel, '<div>');
	            addClass(parent(this.panel), this.clsMode);
	          }

	          css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
	          addClass(document.body, this.clsContainer, this.clsFlip);
	          css(document.body, 'touch-action', 'pan-y pinch-zoom');
	          css(this.$el, 'display', 'block');
	          addClass(this.$el, this.clsOverlay);
	          addClass(
	          this.panel,
	          this.clsSidebarAnimation,
	          this.mode !== 'reveal' ? this.clsMode : '');


	          height(document.body); // force reflow
	          addClass(document.body, this.clsContainerAnimation);

	          this.clsContainerAnimation && suppressUserScale();
	        } },


	      {
	        name: 'hide',

	        self: true,

	        handler() {
	          removeClass(document.body, this.clsContainerAnimation);
	          css(document.body, 'touch-action', '');
	        } },


	      {
	        name: 'hidden',

	        self: true,

	        handler() {
	          this.clsContainerAnimation && resumeUserScale();

	          if (this.mode === 'reveal') {
	            unwrap(this.panel);
	          }

	          removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
	          removeClass(this.$el, this.clsOverlay);
	          css(this.$el, 'display', '');
	          removeClass(document.body, this.clsContainer, this.clsFlip);

	          css(document.documentElement, 'overflowY', '');
	        } },


	      {
	        name: 'swipeLeft swipeRight',

	        handler(e) {
	          if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
	            this.hide();
	          }
	        } }] };




	    // Chrome in responsive mode zooms page upon opening offcanvas
	    function suppressUserScale() {
	      getViewport().content += ',user-scalable=0';
	    }

	    function resumeUserScale() {
	      const viewport = getViewport();
	      viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
	    }

	    function getViewport() {
	      return (
	        $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">'));

	    }

	    var overflowAuto = {
	      mixins: [Class, Resize],

	      props: {
	        selContainer: String,
	        selContent: String,
	        minHeight: Number },


	      data: {
	        selContainer: '.uk-modal',
	        selContent: '.uk-modal-dialog',
	        minHeight: 150 },


	      computed: {
	        container(_ref, $el) {let { selContainer } = _ref;
	          return closest($el, selContainer);
	        },

	        content(_ref2, $el) {let { selContent } = _ref2;
	          return closest($el, selContent);
	        } },


	      resizeTargets() {
	        return [this.container, this.content];
	      },

	      update: {
	        read() {
	          if (!this.content || !this.container || !isVisible(this.$el)) {
	            return false;
	          }

	          return {
	            max: Math.max(
	            this.minHeight,
	            height(this.container) - (dimensions$1(this.content).height - height(this.$el))) };


	        },

	        write(_ref3) {let { max } = _ref3;
	          css(this.$el, { minHeight: this.minHeight, maxHeight: max });
	        },

	        events: ['resize'] } };

	    var responsive = {
	      mixins: [Resize],

	      props: ['width', 'height'],

	      resizeTargets() {
	        return [this.$el, parent(this.$el)];
	      },

	      connected() {
	        addClass(this.$el, 'uk-responsive-width');
	      },

	      update: {
	        read() {
	          return isVisible(this.$el) && this.width && this.height ?
	          { width: width(parent(this.$el)), height: this.height } :
	          false;
	        },

	        write(dim) {
	          height(
	          this.$el,
	          Dimensions.contain(
	          {
	            height: this.height,
	            width: this.width },

	          dim).
	          height);

	        },

	        events: ['resize'] } };

	    var scroll = {
	      props: {
	        offset: Number },


	      data: {
	        offset: 0 },


	      methods: {
	        async scrollTo(el) {
	          el = el && $(el) || document.body;

	          if (trigger(this.$el, 'beforescroll', [this, el])) {
	            await scrollIntoView(el, { offset: this.offset });
	            trigger(this.$el, 'scrolled', [this, el]);
	          }
	        } },


	      events: {
	        click(e) {
	          if (e.defaultPrevented) {
	            return;
	          }

	          e.preventDefault();
	          this.scrollTo(getTargetElement(this.$el));
	        } } };



	    function getTargetElement(el) {
	      return document.getElementById(decodeURIComponent(el.hash).substring(1));
	    }

	    var scrollspy = {
	      mixins: [Scroll],

	      args: 'cls',

	      props: {
	        cls: String,
	        target: String,
	        hidden: Boolean,
	        offsetTop: Number,
	        offsetLeft: Number,
	        repeat: Boolean,
	        delay: Number },


	      data: () => ({
	        cls: '',
	        target: false,
	        hidden: true,
	        offsetTop: 0,
	        offsetLeft: 0,
	        repeat: false,
	        delay: 0,
	        inViewClass: 'uk-scrollspy-inview' }),


	      computed: {
	        elements: {
	          get(_ref, $el) {let { target } = _ref;
	            return target ? $$(target, $el) : [$el];
	          },

	          watch(elements, prev) {
	            if (this.hidden) {
	              css(filter$1(elements, ":not(." + this.inViewClass + ")"), 'visibility', 'hidden');
	            }

	            if (!isEqual(elements, prev)) {
	              this.$reset();
	            }
	          },

	          immediate: true } },



	      connected() {
	        this._data.elements = new Map();
	        this.registerObserver(
	        observeIntersection(
	        this.elements,
	        (records) => {
	          const elements = this._data.elements;
	          for (const { target: el, isIntersecting } of records) {
	            if (!elements.has(el)) {
	              elements.set(el, {
	                cls: data(el, 'uk-scrollspy-class') || this.cls });

	            }

	            const state = elements.get(el);
	            if (!this.repeat && state.show) {
	              continue;
	            }

	            state.show = isIntersecting;
	          }

	          this.$emit();
	        },
	        {
	          rootMargin: toPx(this.offsetTop, 'height') - 1 + "px " + (
	          toPx(this.offsetLeft, 'width') - 1) + "px" },


	        false));


	      },

	      disconnected() {
	        for (const [el, state] of this._data.elements.entries()) {
	          removeClass(el, this.inViewClass, (state == null ? void 0 : state.cls) || '');
	        }
	      },

	      update: [
	      {
	        write(data) {
	          for (const [el, state] of data.elements.entries()) {
	            if (state.show && !state.inview && !state.queued) {
	              state.queued = true;

	              data.promise = (data.promise || Promise.resolve()).
	              then(() => new Promise((resolve) => setTimeout(resolve, this.delay))).
	              then(() => {
	                this.toggle(el, true);
	                setTimeout(() => {
	                  state.queued = false;
	                  this.$emit();
	                }, 300);
	              });
	            } else if (!state.show && state.inview && !state.queued && this.repeat) {
	              this.toggle(el, false);
	            }
	          }
	        } }],



	      methods: {
	        toggle(el, inview) {
	          const state = this._data.elements.get(el);

	          if (!state) {
	            return;
	          }

	          state.off == null ? void 0 : state.off();

	          css(el, 'visibility', !inview && this.hidden ? 'hidden' : '');

	          toggleClass(el, this.inViewClass, inview);
	          toggleClass(el, state.cls);

	          if (/\buk-animation-/.test(state.cls)) {
	            const removeAnimationClasses = () => removeClasses(el, 'uk-animation-[\\w-]+');
	            if (inview) {
	              state.off = once(el, 'animationcancel animationend', removeAnimationClasses);
	            } else {
	              removeAnimationClasses();
	            }
	          }

	          trigger(el, inview ? 'inview' : 'outview');

	          state.inview = inview;

	          this.$update(el);
	        } } };

	    var scrollspyNav = {
	      mixins: [Scroll],

	      props: {
	        cls: String,
	        closest: String,
	        scroll: Boolean,
	        overflow: Boolean,
	        offset: Number },


	      data: {
	        cls: 'uk-active',
	        closest: false,
	        scroll: false,
	        overflow: true,
	        offset: 0 },


	      computed: {
	        links: {
	          get(_, $el) {
	            return $$('a[href^="#"]', $el).filter((el) => el.hash);
	          },

	          watch(links) {
	            if (this.scroll) {
	              this.$create('scroll', links, { offset: this.offset || 0 });
	            }
	          },

	          immediate: true },


	        elements(_ref) {let { closest: selector } = _ref;
	          return closest(this.links, selector || '*');
	        } },


	      update: [
	      {
	        read() {
	          const targets = this.links.map(getTargetElement).filter(Boolean);

	          const { length } = targets;

	          if (!length || !isVisible(this.$el)) {
	            return false;
	          }

	          const [scrollElement] = scrollParents(targets, /auto|scroll/, true);
	          const { scrollTop, scrollHeight } = scrollElement;
	          const viewport = offsetViewport(scrollElement);
	          const max = scrollHeight - viewport.height;
	          let active = false;

	          if (scrollTop === max) {
	            active = length - 1;
	          } else {
	            for (let i = 0; i < targets.length; i++) {
	              if (offset(targets[i]).top - viewport.top - this.offset > 0) {
	                break;
	              }
	              active = +i;
	            }

	            if (active === false && this.overflow) {
	              active = 0;
	            }
	          }

	          return { active };
	        },

	        write(_ref2) {let { active } = _ref2;
	          const changed = active !== false && !hasClass(this.elements[active], this.cls);

	          this.links.forEach((el) => el.blur());
	          for (let i = 0; i < this.elements.length; i++) {
	            toggleClass(this.elements[i], this.cls, +i === active);
	          }

	          if (changed) {
	            trigger(this.$el, 'active', [active, this.elements[active]]);
	          }
	        },

	        events: ['scroll', 'resize'] }] };

	    var sticky = {
	      mixins: [Class, Media, Resize, Scroll],

	      props: {
	        position: String,
	        top: null,
	        bottom: null,
	        start: null,
	        end: null,
	        offset: String,
	        overflowFlip: Boolean,
	        animation: String,
	        clsActive: String,
	        clsInactive: String,
	        clsFixed: String,
	        clsBelow: String,
	        selTarget: String,
	        showOnUp: Boolean,
	        targetOffset: Number },


	      data: {
	        position: 'top',
	        top: false,
	        bottom: false,
	        start: false,
	        end: false,
	        offset: 0,
	        overflowFlip: false,
	        animation: '',
	        clsActive: 'uk-active',
	        clsInactive: '',
	        clsFixed: 'uk-sticky-fixed',
	        clsBelow: 'uk-sticky-below',
	        selTarget: '',
	        showOnUp: false,
	        targetOffset: false },


	      computed: {
	        selTarget(_ref, $el) {let { selTarget } = _ref;
	          return selTarget && $(selTarget, $el) || $el;
	        } },


	      resizeTargets() {
	        return document.documentElement;
	      },

	      connected() {
	        this.start = coerce(this.start || this.top);
	        this.end = coerce(this.end || this.bottom);

	        this.placeholder =
	        $('+ .uk-sticky-placeholder', this.$el) ||
	        $('<div class="uk-sticky-placeholder"></div>');
	        this.isFixed = false;
	        this.setActive(false);
	      },

	      disconnected() {
	        if (this.isFixed) {
	          this.hide();
	          removeClass(this.selTarget, this.clsInactive);
	        }

	        remove$1(this.placeholder);
	        this.placeholder = null;
	      },

	      events: [
	      {
	        name: 'resize',

	        el() {
	          return window;
	        },

	        handler() {
	          this.$emit('resize');
	        } },

	      {
	        name: 'load hashchange popstate',

	        el() {
	          return window;
	        },

	        filter() {
	          return this.targetOffset !== false;
	        },

	        handler() {
	          if (!location.hash || scrollTop(window) === 0) {
	            return;
	          }

	          setTimeout(() => {
	            const targetOffset = offset($(location.hash));
	            const elOffset = offset(this.$el);

	            if (this.isFixed && intersectRect(targetOffset, elOffset)) {
	              scrollTop(
	              window,
	              targetOffset.top -
	              elOffset.height -
	              toPx(this.targetOffset, 'height', this.placeholder) -
	              toPx(this.offset, 'height', this.placeholder));

	            }
	          });
	        } }],



	      update: [
	      {
	        read(_ref2, types) {let { height: height$1, margin } = _ref2;
	          this.inactive = !this.matchMedia || !isVisible(this.$el);

	          if (this.inactive) {
	            return false;
	          }

	          const hide = this.active && types.has('resize');
	          if (hide) {
	            css(this.selTarget, 'transition', '0s');
	            this.hide();
	          }

	          if (!this.active) {
	            height$1 = offset(this.$el).height;
	            margin = css(this.$el, 'margin');
	          }

	          if (hide) {
	            this.show();
	            requestAnimationFrame(() => css(this.selTarget, 'transition', ''));
	          }

	          const referenceElement = this.isFixed ? this.placeholder : this.$el;
	          const windowHeight = height(window);

	          let position = this.position;
	          if (this.overflowFlip && height$1 > windowHeight) {
	            position = position === 'top' ? 'bottom' : 'top';
	          }

	          let offset$1 = toPx(this.offset, 'height', referenceElement);
	          if (position === 'bottom' && (height$1 < windowHeight || this.overflowFlip)) {
	            offset$1 += windowHeight - height$1;
	          }

	          const overflow = this.overflowFlip ?
	          0 :
	          Math.max(0, height$1 + offset$1 - windowHeight);
	          const topOffset = offset(referenceElement).top;

	          const start =
	          (this.start === false ?
	          topOffset :
	          parseProp(this.start, this.$el, topOffset)) - offset$1;
	          const end =
	          this.end === false ?
	          document.scrollingElement.scrollHeight - windowHeight :
	          parseProp(this.end, this.$el, topOffset + height$1, true) -
	          offset(this.$el).height +
	          overflow -
	          offset$1;

	          return {
	            start,
	            end,
	            offset: offset$1,
	            overflow,
	            topOffset,
	            height: height$1,
	            margin,
	            width: dimensions$1(referenceElement).width,
	            top: offsetPosition(referenceElement)[0] };

	        },

	        write(_ref3) {let { height, margin } = _ref3;
	          const { placeholder } = this;

	          css(placeholder, { height, margin });

	          if (!within(placeholder, document)) {
	            after(this.$el, placeholder);
	            placeholder.hidden = true;
	          }
	        },

	        events: ['resize'] },


	      {
	        read(_ref4)






	        {let { scroll: prevScroll = 0, dir: prevDir = 'down', overflow, overflowScroll = 0, start, end } = _ref4;
	          const scroll = scrollTop(window);
	          const dir = prevScroll <= scroll ? 'down' : 'up';

	          return {
	            dir,
	            prevDir,
	            scroll,
	            prevScroll,
	            offsetParentTop: offset(
	            (this.isFixed ? this.placeholder : this.$el).offsetParent).
	            top,
	            overflowScroll: clamp(
	            overflowScroll + clamp(scroll, start, end) - clamp(prevScroll, start, end),
	            0,
	            overflow) };


	        },

	        write(data, types) {
	          const isScrollUpdate = types.has('scroll');
	          const {
	            initTimestamp = 0,
	            dir,
	            prevDir,
	            scroll,
	            prevScroll = 0,
	            top,
	            start,
	            topOffset,
	            height } =
	          data;

	          if (
	          scroll < 0 ||
	          scroll === prevScroll && isScrollUpdate ||
	          this.showOnUp && !isScrollUpdate && !this.isFixed)
	          {
	            return;
	          }

	          const now = Date.now();
	          if (now - initTimestamp > 300 || dir !== prevDir) {
	            data.initScroll = scroll;
	            data.initTimestamp = now;
	          }

	          if (
	          this.showOnUp &&
	          !this.isFixed &&
	          Math.abs(data.initScroll - scroll) <= 30 &&
	          Math.abs(prevScroll - scroll) <= 10)
	          {
	            return;
	          }

	          if (
	          this.inactive ||
	          scroll < start ||
	          this.showOnUp && (
	          scroll <= start ||
	          dir === 'down' && isScrollUpdate ||
	          dir === 'up' && !this.isFixed && scroll <= topOffset + height))
	          {
	            if (!this.isFixed) {
	              if (Animation.inProgress(this.$el) && top > scroll) {
	                Animation.cancel(this.$el);
	                this.hide();
	              }

	              return;
	            }

	            this.isFixed = false;

	            if (this.animation && scroll > topOffset) {
	              Animation.cancel(this.$el);
	              Animation.out(this.$el, this.animation).then(() => this.hide(), noop);
	            } else {
	              this.hide();
	            }
	          } else if (this.isFixed) {
	            this.update();
	          } else if (this.animation && scroll > topOffset) {
	            Animation.cancel(this.$el);
	            this.show();
	            Animation.in(this.$el, this.animation).catch(noop);
	          } else {
	            this.show();
	          }
	        },

	        events: ['resize', 'scroll'] }],



	      methods: {
	        show() {
	          this.isFixed = true;
	          this.update();
	          this.placeholder.hidden = false;
	        },

	        hide() {
	          this.setActive(false);
	          removeClass(this.$el, this.clsFixed, this.clsBelow);
	          css(this.$el, { position: '', top: '', width: '' });
	          this.placeholder.hidden = true;
	        },

	        update() {
	          let {
	            width,
	            scroll = 0,
	            overflow,
	            overflowScroll = 0,
	            start,
	            end,
	            offset,
	            topOffset,
	            height,
	            offsetParentTop } =
	          this._data;
	          const active = start !== 0 || scroll > start;
	          let position = 'fixed';

	          if (scroll > end) {
	            offset += end - offsetParentTop;
	            position = 'absolute';
	          }

	          if (overflow) {
	            offset -= overflowScroll;
	          }

	          css(this.$el, {
	            position,
	            top: offset + "px",
	            width });


	          this.setActive(active);
	          toggleClass(this.$el, this.clsBelow, scroll > topOffset + height);
	          addClass(this.$el, this.clsFixed);
	        },

	        setActive(active) {
	          const prev = this.active;
	          this.active = active;
	          if (active) {
	            replaceClass(this.selTarget, this.clsInactive, this.clsActive);
	            prev !== active && trigger(this.$el, 'active');
	          } else {
	            replaceClass(this.selTarget, this.clsActive, this.clsInactive);
	            prev !== active && trigger(this.$el, 'inactive');
	          }
	        } } };



	    function parseProp(value, el, propOffset, padding) {
	      if (!value) {
	        return 0;
	      }

	      if (isNumeric(value) || isString(value) && value.match(/^-?\d/)) {
	        return propOffset + toPx(value, 'height', el, true);
	      } else {
	        const refElement = value === true ? parent(el) : query(value, el);
	        return (
	          offset(refElement).bottom - (
	          padding && refElement && within(el, refElement) ?
	          toFloat(css(refElement, 'paddingBottom')) :
	          0));

	      }
	    }

	    function coerce(value) {
	      if (value === 'true') {
	        return true;
	      } else if (value === 'false') {
	        return false;
	      }
	      return value;
	    }

	    var Switcher = {
	      mixins: [Lazyload, Swipe, Togglable],

	      args: 'connect',

	      props: {
	        connect: String,
	        toggle: String,
	        itemNav: String,
	        active: Number },


	      data: {
	        connect: '~.uk-switcher',
	        toggle: '> * > :first-child',
	        itemNav: false,
	        active: 0,
	        cls: 'uk-active',
	        attrItem: 'uk-switcher-item' },


	      computed: {
	        connects: {
	          get(_ref, $el) {let { connect } = _ref;
	            return queryAll(connect, $el);
	          },

	          watch(connects) {
	            if (this.swiping) {
	              css(connects, 'touch-action', 'pan-y pinch-zoom');
	            }

	            const index = this.index();
	            this.connects.forEach((el) =>
	            children(el).forEach((child, i) => toggleClass(child, this.cls, i === index)));

	          },

	          immediate: true },


	        toggles: {
	          get(_ref2, $el) {let { toggle } = _ref2;
	            return $$(toggle, $el).filter(
	            (el) => !matches(el, '.uk-disabled *, .uk-disabled, [disabled]'));

	          },

	          watch(toggles) {
	            const active = this.index();
	            this.show(~active ? active : toggles[this.active] || toggles[0]);
	          },

	          immediate: true },


	        children() {
	          return children(this.$el).filter((child) =>
	          this.toggles.some((toggle) => within(toggle, child)));

	        },

	        swipeTarget() {
	          return this.connects;
	        } },


	      connected() {
	        this.lazyload(this.$el, this.connects);

	        // check for connects
	        ready(() => this.$emit());
	      },

	      events: [
	      {
	        name: 'click',

	        delegate() {
	          return this.toggle;
	        },

	        handler(e) {
	          e.preventDefault();
	          this.show(e.current);
	        } },


	      {
	        name: 'click',

	        el() {
	          return this.connects.concat(this.itemNav ? queryAll(this.itemNav, this.$el) : []);
	        },

	        delegate() {
	          return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
	        },

	        handler(e) {
	          e.preventDefault();
	          this.show(data(e.current, this.attrItem));
	        } },


	      {
	        name: 'swipeRight swipeLeft',

	        filter() {
	          return this.swiping;
	        },

	        el() {
	          return this.connects;
	        },

	        handler(_ref3) {let { type } = _ref3;
	          this.show(endsWith(type, 'Left') ? 'next' : 'previous');
	        } }],



	      methods: {
	        index() {
	          return findIndex(this.children, (el) => hasClass(el, this.cls));
	        },

	        show(item) {
	          const prev = this.index();
	          const next = getIndex(item, this.toggles, prev);
	          const active = getIndex(this.children[next], children(this.$el));
	          children(this.$el).forEach((child, i) => {
	            toggleClass(child, this.cls, active === i);
	            attr(this.toggles[i], 'aria-expanded', active === i);
	          });

	          const animate = prev >= 0 && prev !== next;
	          this.connects.forEach(async (_ref4) => {let { children } = _ref4;
	            await this.toggleElement(
	            toNodes(children).filter((child) => hasClass(child, this.cls)),
	            false,
	            animate);

	            await this.toggleElement(children[active], true, animate);
	          });
	        } } };

	    var tab = {
	      mixins: [Class],

	      extends: Switcher,

	      props: {
	        media: Boolean },


	      data: {
	        media: 960,
	        attrItem: 'uk-tab-item' },


	      connected() {
	        const cls = hasClass(this.$el, 'uk-tab-left') ?
	        'uk-tab-left' :
	        hasClass(this.$el, 'uk-tab-right') ?
	        'uk-tab-right' :
	        false;

	        if (cls) {
	          this.$create('toggle', this.$el, { cls, mode: 'media', media: this.media });
	        }
	      } };

	    const KEY_SPACE = 32;

	    var toggle = {
	      mixins: [Lazyload, Media, Togglable],

	      args: 'target',

	      props: {
	        href: String,
	        target: null,
	        mode: 'list',
	        queued: Boolean },


	      data: {
	        href: false,
	        target: false,
	        mode: 'click',
	        queued: true },


	      computed: {
	        target: {
	          get(_ref, $el) {let { href, target } = _ref;
	            target = queryAll(target || href, $el);
	            return target.length && target || [$el];
	          },

	          watch() {
	            this.updateAria();
	          },

	          immediate: true } },



	      connected() {
	        if (!includes(this.mode, 'media') && !isFocusable(this.$el)) {
	          attr(this.$el, 'tabindex', '0');
	        }

	        this.lazyload(this.$el, this.target);

	        // check for target
	        ready(() => this.$emit());
	      },

	      events: [
	      {
	        name: pointerDown,

	        filter() {
	          return includes(this.mode, 'hover');
	        },

	        handler(e) {
	          this._preventClick = null;

	          if (!isTouch(e) || this._showState) {
	            return;
	          }

	          // Clicking a button does not give it focus on all browsers and platforms
	          // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
	          trigger(this.$el, 'focus');
	          once(
	          document,
	          pointerDown,
	          () => trigger(this.$el, 'blur'),
	          true,
	          (e) => !within(e.target, this.$el));


	          // Prevent initial click to prevent double toggle through focus + click
	          if (includes(this.mode, 'click')) {
	            this._preventClick = true;
	          }
	        } },


	      {
	        name: pointerEnter + " " + pointerLeave + " focus blur",

	        filter() {
	          return includes(this.mode, 'hover');
	        },

	        handler(e) {
	          if (isTouch(e)) {
	            return;
	          }

	          const show = includes([pointerEnter, 'focus'], e.type);
	          const expanded = attr(this.$el, 'aria-expanded');

	          // Skip hide if still hovered or focused
	          if (
	          !show && (
	          e.type === pointerLeave && matches(this.$el, ':focus') ||
	          e.type === 'blur' && matches(this.$el, ':hover')))
	          {
	            return;
	          }

	          // Skip if state does not change e.g. hover + focus received
	          if (this._showState && show && expanded !== this._showState) {
	            // Ensure reset if state has changed through click
	            if (!show) {
	              this._showState = null;
	            }
	            return;
	          }

	          this._showState = show ? expanded : null;

	          this.toggle("toggle" + (show ? 'show' : 'hide'));
	        } },


	      {
	        name: 'keydown',

	        filter() {
	          return includes(this.mode, 'click') && !isTag(this.$el, 'input');
	        },

	        handler(e) {
	          if (e.keyCode === KEY_SPACE) {
	            e.preventDefault();
	            this.$el.click();
	          }
	        } },


	      {
	        name: 'click',

	        filter() {
	          return ['click', 'hover'].some((mode) => includes(this.mode, mode));
	        },

	        handler(e) {
	          let link;
	          if (
	          this._preventClick ||
	          closest(e.target, 'a[href="#"], a[href=""]') ||
	          (link = closest(e.target, 'a[href]')) && (
	          attr(this.$el, 'aria-expanded') !== 'true' ||
	          link.hash && matches(this.target, link.hash)))
	          {
	            e.preventDefault();
	          }

	          if (!this._preventClick && includes(this.mode, 'click')) {
	            this.toggle();
	          }
	        } },


	      {
	        name: 'toggled',

	        self: true,

	        el() {
	          return this.target;
	        },

	        handler(e, toggled) {
	          if (e.target === this.target[0]) {
	            this.updateAria(toggled);
	          }
	        } },


	      {
	        name: 'mediachange',

	        filter() {
	          return includes(this.mode, 'media');
	        },

	        el() {
	          return this.target;
	        },

	        handler(e, mediaObj) {
	          if (mediaObj.matches ^ this.isToggled(this.target)) {
	            this.toggle();
	          }
	        } }],



	      methods: {
	        async toggle(type) {
	          if (!trigger(this.target, type || 'toggle', [this])) {
	            return;
	          }

	          if (!this.queued) {
	            return this.toggleElement(this.target);
	          }

	          const leaving = this.target.filter((el) => hasClass(el, this.clsLeave));

	          if (leaving.length) {
	            for (const el of this.target) {
	              const isLeaving = includes(leaving, el);
	              this.toggleElement(el, isLeaving, isLeaving);
	            }
	            return;
	          }

	          const toggled = this.target.filter(this.isToggled);
	          await this.toggleElement(toggled, false);
	          await this.toggleElement(
	          this.target.filter((el) => !includes(toggled, el)),
	          true);

	        },

	        updateAria(toggled) {
	          if (includes(this.mode, 'media')) {
	            return;
	          }

	          attr(
	          this.$el,
	          'aria-expanded',
	          isBoolean(toggled) ? toggled : this.isToggled(this.target));

	        } } };

	    var components$1 = /*#__PURE__*/Object.freeze({
	        __proto__: null,
	        Accordion: Accordion,
	        Alert: alert,
	        Cover: cover,
	        Drop: drop,
	        Dropdown: drop,
	        FormCustom: formCustom,
	        Grid: grid,
	        HeightMatch: heightMatch,
	        HeightViewport: heightViewport,
	        Icon: Icon,
	        Img: img,
	        Leader: leader,
	        Margin: Margin,
	        Modal: modal,
	        Nav: nav,
	        Navbar: navbar,
	        Offcanvas: offcanvas,
	        OverflowAuto: overflowAuto,
	        Responsive: responsive,
	        Scroll: scroll,
	        Scrollspy: scrollspy,
	        ScrollspyNav: scrollspyNav,
	        Sticky: sticky,
	        Svg: SVG,
	        Switcher: Switcher,
	        Tab: tab,
	        Toggle: toggle,
	        Video: Video,
	        Close: Close,
	        Spinner: Spinner,
	        SlidenavNext: Slidenav,
	        SlidenavPrevious: Slidenav,
	        SearchIcon: Search,
	        Marker: IconComponent,
	        NavbarToggleIcon: IconComponent,
	        OverlayIcon: IconComponent,
	        PaginationNext: IconComponent,
	        PaginationPrevious: IconComponent,
	        Totop: IconComponent
	    });

	    // register components
	    each(components$1, (component, name) => UIkit.component(name, component));

	    boot(UIkit);

	    const units = ['days', 'hours', 'minutes', 'seconds'];

	    var countdown = {
	      mixins: [Class],

	      props: {
	        date: String,
	        clsWrapper: String },


	      data: {
	        date: '',
	        clsWrapper: '.uk-countdown-%unit%' },


	      connected() {
	        this.date = Date.parse(this.$props.date);
	        this.start();
	      },

	      disconnected() {
	        this.stop();
	      },

	      events: [
	      {
	        name: 'visibilitychange',

	        el() {
	          return document;
	        },

	        handler() {
	          if (document.hidden) {
	            this.stop();
	          } else {
	            this.start();
	          }
	        } }],



	      methods: {
	        start() {
	          this.stop();
	          this.update();
	          this.timer = setInterval(this.update, 1000);
	        },

	        stop() {
	          clearInterval(this.timer);
	        },

	        update() {
	          const timespan = getTimeSpan(this.date);

	          if (!this.date || timespan.total <= 0) {
	            this.stop();

	            timespan.days = timespan.hours = timespan.minutes = timespan.seconds = 0;
	          }

	          for (const unit of units) {
	            const el = $(this.clsWrapper.replace('%unit%', unit), this.$el);

	            if (!el) {
	              continue;
	            }

	            let digits = String(Math.trunc(timespan[unit]));

	            digits = digits.length < 2 ? "0" + digits : digits;

	            if (el.textContent !== digits) {
	              digits = digits.split('');

	              if (digits.length !== el.children.length) {
	                html(el, digits.map(() => '<span></span>').join(''));
	              }

	              digits.forEach((digit, i) => el.children[i].textContent = digit);
	            }
	          }
	        } } };



	    function getTimeSpan(date) {
	      const total = date - Date.now();

	      return {
	        total,
	        seconds: total / 1000 % 60,
	        minutes: total / 1000 / 60 % 60,
	        hours: total / 1000 / 60 / 60 % 24,
	        days: total / 1000 / 60 / 60 / 24 };

	    }

	    const clsLeave = 'uk-transition-leave';
	    const clsEnter = 'uk-transition-enter';

	    function fade(action, target, duration, stagger) {if (stagger === void 0) {stagger = 0;}
	      const index = transitionIndex(target, true);
	      const propsIn = { opacity: 1 };
	      const propsOut = { opacity: 0 };

	      const wrapIndexFn = (fn) => () => index === transitionIndex(target) ? fn() : Promise.reject();

	      const leaveFn = wrapIndexFn(() => {
	        addClass(target, clsLeave);

	        return Promise.all(
	        getTransitionNodes(target).map(
	        (child, i) =>
	        new Promise((resolve) =>
	        setTimeout(
	        () =>
	        Transition.start(child, propsOut, duration / 2, 'ease').then(
	        resolve),

	        i * stagger)))).



	        then(() => removeClass(target, clsLeave));
	      });

	      const enterFn = wrapIndexFn(() => {
	        const oldHeight = height(target);

	        addClass(target, clsEnter);
	        action();

	        css(children(target), { opacity: 0 });

	        // Ensure UIkit updates have propagated
	        return new Promise((resolve) =>
	        requestAnimationFrame(() => {
	          const nodes = children(target);
	          const newHeight = height(target);

	          // Ensure Grid cells do not stretch when height is applied
	          css(target, 'alignContent', 'flex-start');
	          height(target, oldHeight);

	          const transitionNodes = getTransitionNodes(target);
	          css(nodes, propsOut);

	          const transitions = transitionNodes.map(
	          (child, i) =>
	          new Promise((resolve) =>
	          setTimeout(
	          () =>
	          Transition.start(child, propsIn, duration / 2, 'ease').then(
	          resolve),

	          i * stagger)));




	          if (oldHeight !== newHeight) {
	            transitions.push(
	            Transition.start(
	            target,
	            { height: newHeight },
	            duration / 2 + transitionNodes.length * stagger,
	            'ease'));


	          }

	          Promise.all(transitions).then(() => {
	            removeClass(target, clsEnter);
	            if (index === transitionIndex(target)) {
	              css(target, { height: '', alignContent: '' });
	              css(nodes, { opacity: '' });
	              delete target.dataset.transition;
	            }
	            resolve();
	          });
	        }));

	      });

	      return hasClass(target, clsLeave) ?
	      waitTransitionend(target).then(enterFn) :
	      hasClass(target, clsEnter) ?
	      waitTransitionend(target).then(leaveFn).then(enterFn) :
	      leaveFn().then(enterFn);
	    }

	    function transitionIndex(target, next) {
	      if (next) {
	        target.dataset.transition = 1 + transitionIndex(target);
	      }

	      return toNumber(target.dataset.transition) || 0;
	    }

	    function waitTransitionend(target) {
	      return Promise.all(
	      children(target).
	      filter(Transition.inProgress).
	      map(
	      (el) =>
	      new Promise((resolve) => once(el, 'transitionend transitioncanceled', resolve))));


	    }

	    function getTransitionNodes(target) {
	      return getRows(children(target)).reduce(
	      (nodes, row) =>
	      nodes.concat(
	      sortBy$1(
	      row.filter((el) => isInView(el)),
	      'offsetLeft')),


	      []);

	    }

	    function slide (action, target, duration) {
	      return new Promise((resolve) =>
	      requestAnimationFrame(() => {
	        let nodes = children(target);

	        // Get current state
	        const currentProps = nodes.map((el) => getProps(el, true));
	        const targetProps = css(target, ['height', 'padding']);

	        // Cancel previous animations
	        Transition.cancel(target);
	        nodes.forEach(Transition.cancel);
	        reset(target);

	        // Adding, sorting, removing nodes
	        action();

	        // Find new nodes
	        nodes = nodes.concat(children(target).filter((el) => !includes(nodes, el)));

	        // Wait for update to propagate
	        Promise.resolve().then(() => {
	          // Force update
	          fastdom.flush();

	          // Get new state
	          const targetPropsTo = css(target, ['height', 'padding']);
	          const [propsTo, propsFrom] = getTransitionProps(target, nodes, currentProps);

	          // Reset to previous state
	          nodes.forEach((el, i) => propsFrom[i] && css(el, propsFrom[i]));
	          css(target, { display: 'block', ...targetProps });

	          // Start transitions on next frame
	          requestAnimationFrame(() => {
	            const transitions = nodes.
	            map(
	            (el, i) =>
	            parent(el) === target &&
	            Transition.start(el, propsTo[i], duration, 'ease')).

	            concat(Transition.start(target, targetPropsTo, duration, 'ease'));

	            Promise.all(transitions).
	            then(() => {
	              nodes.forEach(
	              (el, i) =>
	              parent(el) === target &&
	              css(el, 'display', propsTo[i].opacity === 0 ? 'none' : ''));

	              reset(target);
	            }, noop).
	            then(resolve);
	          });
	        });
	      }));

	    }

	    function getProps(el, opacity) {
	      const zIndex = css(el, 'zIndex');

	      return isVisible(el) ?
	      {
	        display: '',
	        opacity: opacity ? css(el, 'opacity') : '0',
	        pointerEvents: 'none',
	        position: 'absolute',
	        zIndex: zIndex === 'auto' ? index(el) : zIndex,
	        ...getPositionWithMargin(el) } :

	      false;
	    }

	    function getTransitionProps(target, nodes, currentProps) {
	      const propsTo = nodes.map((el, i) =>
	      parent(el) && i in currentProps ?
	      currentProps[i] ?
	      isVisible(el) ?
	      getPositionWithMargin(el) :
	      { opacity: 0 } :
	      { opacity: isVisible(el) ? 1 : 0 } :
	      false);


	      const propsFrom = propsTo.map((props, i) => {
	        const from = parent(nodes[i]) === target && (currentProps[i] || getProps(nodes[i]));

	        if (!from) {
	          return false;
	        }

	        if (!props) {
	          delete from.opacity;
	        } else if (!('opacity' in props)) {
	          const { opacity } = from;

	          if (opacity % 1) {
	            props.opacity = 1;
	          } else {
	            delete from.opacity;
	          }
	        }

	        return from;
	      });

	      return [propsTo, propsFrom];
	    }

	    function reset(el) {
	      css(el.children, {
	        height: '',
	        left: '',
	        opacity: '',
	        pointerEvents: '',
	        position: '',
	        top: '',
	        marginTop: '',
	        marginLeft: '',
	        transform: '',
	        width: '',
	        zIndex: '' });

	      css(el, { height: '', display: '', padding: '' });
	    }

	    function getPositionWithMargin(el) {
	      const { height, width } = offset(el);
	      const { top, left } = position(el);
	      const { marginLeft, marginTop } = css(el, ['marginTop', 'marginLeft']);

	      return { top, left, height, width, marginLeft, marginTop, transform: '' };
	    }

	    var Animate = {
	      props: {
	        duration: Number,
	        animation: Boolean },


	      data: {
	        duration: 150,
	        animation: 'slide' },


	      methods: {
	        animate(action, target) {if (target === void 0) {target = this.$el;}
	          const name = this.animation;
	          const animationFn =
	          name === 'fade' ?
	          fade :
	          name === 'delayed-fade' ?
	          function () {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return fade(...args, 40);} :
	          name ?
	          slide :
	          () => {
	            action();
	            return Promise.resolve();
	          };

	          return animationFn(action, target, this.duration).then(
	          () => this.$update(target, 'resize'),
	          noop);

	        } } };

	    var filter = {
	      mixins: [Animate],

	      args: 'target',

	      props: {
	        target: Boolean,
	        selActive: Boolean },


	      data: {
	        target: null,
	        selActive: false,
	        attrItem: 'uk-filter-control',
	        cls: 'uk-active',
	        duration: 250 },


	      computed: {
	        toggles: {
	          get(_ref, $el) {let { attrItem } = _ref;
	            return $$("[" + attrItem + "],[data-" + attrItem + "]", $el);
	          },

	          watch() {
	            this.updateState();

	            if (this.selActive !== false) {
	              const actives = $$(this.selActive, this.$el);
	              this.toggles.forEach((el) => toggleClass(el, this.cls, includes(actives, el)));
	            }
	          },

	          immediate: true },


	        children: {
	          get(_ref2, $el) {let { target } = _ref2;
	            return $$(target + " > *", $el);
	          },

	          watch(list, old) {
	            if (old && !isEqualList(list, old)) {
	              this.updateState();
	            }
	          },

	          immediate: true } },



	      events: [
	      {
	        name: 'click',

	        delegate() {
	          return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
	        },

	        handler(e) {
	          e.preventDefault();
	          this.apply(e.current);
	        } }],



	      methods: {
	        apply(el) {
	          const prevState = this.getState();
	          const newState = mergeState(el, this.attrItem, this.getState());

	          if (!isEqualState(prevState, newState)) {
	            this.setState(newState);
	          }
	        },

	        getState() {
	          return this.toggles.
	          filter((item) => hasClass(item, this.cls)).
	          reduce((state, el) => mergeState(el, this.attrItem, state), {
	            filter: { '': '' },
	            sort: [] });

	        },

	        setState(state, animate) {if (animate === void 0) {animate = true;}
	          state = { filter: { '': '' }, sort: [], ...state };

	          trigger(this.$el, 'beforeFilter', [this, state]);

	          this.toggles.forEach((el) =>
	          toggleClass(el, this.cls, !!matchFilter(el, this.attrItem, state)));


	          Promise.all(
	          $$(this.target, this.$el).map((target) => {
	            const filterFn = () => {
	              applyState(state, target, children(target));
	              this.$update(this.$el);
	            };
	            return animate ? this.animate(filterFn, target) : filterFn();
	          })).
	          then(() => trigger(this.$el, 'afterFilter', [this]));
	        },

	        updateState() {
	          fastdom.write(() => this.setState(this.getState(), false));
	        } } };



	    function getFilter(el, attr) {
	      return parseOptions(data(el, attr), ['filter']);
	    }

	    function isEqualState(stateA, stateB) {
	      return ['filter', 'sort'].every((prop) => isEqual(stateA[prop], stateB[prop]));
	    }

	    function applyState(state, target, children) {
	      const selector = getSelector(state);

	      children.forEach((el) => css(el, 'display', selector && !matches(el, selector) ? 'none' : ''));

	      const [sort, order] = state.sort;

	      if (sort) {
	        const sorted = sortItems(children, sort, order);
	        if (!isEqual(sorted, children)) {
	          append(target, sorted);
	        }
	      }
	    }

	    function mergeState(el, attr, state) {
	      const filterBy = getFilter(el, attr);
	      const { filter, group, sort, order = 'asc' } = filterBy;

	      if (filter || isUndefined(sort)) {
	        if (group) {
	          if (filter) {
	            delete state.filter[''];
	            state.filter[group] = filter;
	          } else {
	            delete state.filter[group];

	            if (isEmpty(state.filter) || '' in state.filter) {
	              state.filter = { '': filter || '' };
	            }
	          }
	        } else {
	          state.filter = { '': filter || '' };
	        }
	      }

	      if (!isUndefined(sort)) {
	        state.sort = [sort, order];
	      }

	      return state;
	    }

	    function matchFilter(
	    el,
	    attr, _ref3)

	    {let { filter: stateFilter = { '': '' }, sort: [stateSort, stateOrder] } = _ref3;
	      const { filter = '', group = '', sort, order = 'asc' } = getFilter(el, attr);

	      return isUndefined(sort) ?
	      group in stateFilter && filter === stateFilter[group] ||
	      !filter && group && !(group in stateFilter) && !stateFilter[''] :
	      stateSort === sort && stateOrder === order;
	    }

	    function isEqualList(listA, listB) {
	      return listA.length === listB.length && listA.every((el) => listB.includes(el));
	    }

	    function getSelector(_ref4) {let { filter } = _ref4;
	      let selector = '';
	      each(filter, (value) => selector += value || '');
	      return selector;
	    }

	    function sortItems(nodes, sort, order) {
	      return [...nodes].sort(
	      (a, b) =>
	      data(a, sort).localeCompare(data(b, sort), undefined, { numeric: true }) * (
	      order === 'asc' || -1));

	    }

	    var Animations$2 = {
	      slide: {
	        show(dir) {
	          return [{ transform: translate(dir * -100) }, { transform: translate() }];
	        },

	        percent(current) {
	          return translated(current);
	        },

	        translate(percent, dir) {
	          return [
	          { transform: translate(dir * -100 * percent) },
	          { transform: translate(dir * 100 * (1 - percent)) }];

	        } } };



	    function translated(el) {
	      return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
	    }

	    function translate(value, unit) {if (value === void 0) {value = 0;}if (unit === void 0) {unit = '%';}
	      value += value ? unit : '';
	      return "translate3d(" + value + ", 0, 0)";
	    }

	    function scale3d(value) {
	      return "scale3d(" + value + ", " + value + ", 1)";
	    }

	    var Animations$1 = {
	      ...Animations$2,
	      fade: {
	        show() {
	          return [{ opacity: 0 }, { opacity: 1 }];
	        },

	        percent(current) {
	          return 1 - css(current, 'opacity');
	        },

	        translate(percent) {
	          return [{ opacity: 1 - percent }, { opacity: percent }];
	        } },


	      scale: {
	        show() {
	          return [
	          { opacity: 0, transform: scale3d(1 - 0.2) },
	          { opacity: 1, transform: scale3d(1) }];

	        },

	        percent(current) {
	          return 1 - css(current, 'opacity');
	        },

	        translate(percent) {
	          return [
	          { opacity: 1 - percent, transform: scale3d(1 - 0.2 * percent) },
	          { opacity: percent, transform: scale3d(1 - 0.2 + 0.2 * percent) }];

	        } } };

	    function Transitioner$1(prev, next, dir, _ref) {let { animation, easing } = _ref;
	      const { percent, translate, show = noop } = animation;
	      const props = show(dir);
	      const deferred = new Deferred();

	      return {
	        dir,

	        show(duration, percent, linear) {if (percent === void 0) {percent = 0;}
	          const timing = linear ? 'linear' : easing;
	          duration -= Math.round(duration * clamp(percent, -1, 1));

	          this.translate(percent);

	          triggerUpdate$1(next, 'itemin', { percent, duration, timing, dir });
	          triggerUpdate$1(prev, 'itemout', { percent: 1 - percent, duration, timing, dir });

	          Promise.all([
	          Transition.start(next, props[1], duration, timing),
	          Transition.start(prev, props[0], duration, timing)]).
	          then(() => {
	            this.reset();
	            deferred.resolve();
	          }, noop);

	          return deferred.promise;
	        },

	        cancel() {
	          Transition.cancel([next, prev]);
	        },

	        reset() {
	          for (const prop in props[0]) {
	            css([next, prev], prop, '');
	          }
	        },

	        forward(duration, percent) {if (percent === void 0) {percent = this.percent();}
	          Transition.cancel([next, prev]);
	          return this.show(duration, percent, true);
	        },

	        translate(percent) {
	          this.reset();

	          const props = translate(percent, dir);
	          css(next, props[1]);
	          css(prev, props[0]);
	          triggerUpdate$1(next, 'itemtranslatein', { percent, dir });
	          triggerUpdate$1(prev, 'itemtranslateout', { percent: 1 - percent, dir });
	        },

	        percent() {
	          return percent(prev || next, next, dir);
	        },

	        getDistance() {
	          return prev == null ? void 0 : prev.offsetWidth;
	        } };

	    }

	    function triggerUpdate$1(el, type, data) {
	      trigger(el, createEvent(type, false, false, data));
	    }

	    var SliderAutoplay = {
	      props: {
	        autoplay: Boolean,
	        autoplayInterval: Number,
	        pauseOnHover: Boolean },


	      data: {
	        autoplay: false,
	        autoplayInterval: 7000,
	        pauseOnHover: true },


	      connected() {
	        this.autoplay && this.startAutoplay();
	      },

	      disconnected() {
	        this.stopAutoplay();
	      },

	      update() {
	        attr(this.slides, 'tabindex', '-1');
	      },

	      events: [
	      {
	        name: 'visibilitychange',

	        el() {
	          return document;
	        },

	        filter() {
	          return this.autoplay;
	        },

	        handler() {
	          if (document.hidden) {
	            this.stopAutoplay();
	          } else {
	            this.startAutoplay();
	          }
	        } }],



	      methods: {
	        startAutoplay() {
	          this.stopAutoplay();

	          this.interval = setInterval(
	          () =>
	          (!this.draggable || !$(':focus', this.$el)) && (
	          !this.pauseOnHover || !matches(this.$el, ':hover')) &&
	          !this.stack.length &&
	          this.show('next'),
	          this.autoplayInterval);

	        },

	        stopAutoplay() {
	          this.interval && clearInterval(this.interval);
	        } } };

	    var SliderDrag = {
	      props: {
	        draggable: Boolean },


	      data: {
	        draggable: true,
	        threshold: 10 },


	      created() {
	        for (const key of ['start', 'move', 'end']) {
	          const fn = this[key];
	          this[key] = (e) => {
	            const pos = getEventPos(e).x * (isRtl ? -1 : 1);

	            this.prevPos = pos === this.pos ? this.prevPos : this.pos;
	            this.pos = pos;

	            fn(e);
	          };
	        }
	      },

	      events: [
	      {
	        name: pointerDown,

	        delegate() {
	          return this.selSlides;
	        },

	        handler(e) {
	          if (
	          !this.draggable ||
	          !isTouch(e) && hasTextNodesOnly(e.target) ||
	          closest(e.target, selInput) ||
	          e.button > 0 ||
	          this.length < 2)
	          {
	            return;
	          }

	          this.start(e);
	        } },


	      {
	        name: 'dragstart',

	        handler(e) {
	          e.preventDefault();
	        } }],



	      methods: {
	        start() {
	          this.drag = this.pos;

	          if (this._transitioner) {
	            this.percent = this._transitioner.percent();
	            this.drag += this._transitioner.getDistance() * this.percent * this.dir;

	            this._transitioner.cancel();
	            this._transitioner.translate(this.percent);

	            this.dragging = true;

	            this.stack = [];
	          } else {
	            this.prevIndex = this.index;
	          }

	          on(document, pointerMove, this.move, { passive: false });

	          // 'input' event is triggered by video controls
	          on(document, pointerUp + " " + pointerCancel + " input", this.end, true);

	          css(this.list, 'userSelect', 'none');
	        },

	        move(e) {
	          const distance = this.pos - this.drag;

	          if (
	          distance === 0 ||
	          this.prevPos === this.pos ||
	          !this.dragging && Math.abs(distance) < this.threshold)
	          {
	            return;
	          }

	          // prevent click event
	          css(this.list, 'pointerEvents', 'none');

	          e.cancelable && e.preventDefault();

	          this.dragging = true;
	          this.dir = distance < 0 ? 1 : -1;

	          const { slides } = this;
	          let { prevIndex } = this;
	          let dis = Math.abs(distance);
	          let nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
	          let width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

	          while (nextIndex !== prevIndex && dis > width) {
	            this.drag -= width * this.dir;

	            prevIndex = nextIndex;
	            dis -= width;
	            nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
	            width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
	          }

	          this.percent = dis / width;

	          const prev = slides[prevIndex];
	          const next = slides[nextIndex];
	          const changed = this.index !== nextIndex;
	          const edge = prevIndex === nextIndex;

	          let itemShown;

	          [this.index, this.prevIndex].
	          filter((i) => !includes([nextIndex, prevIndex], i)).
	          forEach((i) => {
	            trigger(slides[i], 'itemhidden', [this]);

	            if (edge) {
	              itemShown = true;
	              this.prevIndex = prevIndex;
	            }
	          });

	          if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
	            trigger(slides[this.index], 'itemshown', [this]);
	          }

	          if (changed) {
	            this.prevIndex = prevIndex;
	            this.index = nextIndex;

	            !edge && trigger(prev, 'beforeitemhide', [this]);
	            trigger(next, 'beforeitemshow', [this]);
	          }

	          this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

	          if (changed) {
	            !edge && trigger(prev, 'itemhide', [this]);
	            trigger(next, 'itemshow', [this]);
	          }
	        },

	        end() {
	          off(document, pointerMove, this.move, { passive: false });
	          off(document, pointerUp + " " + pointerCancel + " input", this.end, true);

	          if (this.dragging) {
	            this.dragging = null;

	            if (this.index === this.prevIndex) {
	              this.percent = 1 - this.percent;
	              this.dir *= -1;
	              this._show(false, this.index, true);
	              this._transitioner = null;
	            } else {
	              const dirChange =
	              (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 ===
	              this.prevPos > this.pos;
	              this.index = dirChange ? this.index : this.prevIndex;

	              if (dirChange) {
	                this.percent = 1 - this.percent;
	              }

	              this.show(
	              this.dir > 0 && !dirChange || this.dir < 0 && dirChange ?
	              'next' :
	              'previous',
	              true);

	            }
	          }

	          css(this.list, { userSelect: '', pointerEvents: '' });

	          this.drag = this.percent = null;
	        } } };



	    function hasTextNodesOnly(el) {
	      return !el.children.length && el.childNodes.length;
	    }

	    var SliderNav = {
	      data: {
	        selNav: false },


	      computed: {
	        nav(_ref, $el) {let { selNav } = _ref;
	          return $(selNav, $el);
	        },

	        selNavItem(_ref2) {let { attrItem } = _ref2;
	          return "[" + attrItem + "],[data-" + attrItem + "]";
	        },

	        navItems(_, $el) {
	          return $$(this.selNavItem, $el);
	        } },


	      update: {
	        write() {
	          if (this.nav && this.length !== this.nav.children.length) {
	            html(
	            this.nav,
	            this.slides.
	            map((_, i) => "<li " + this.attrItem + "=\"" + i + "\"><a href></a></li>").
	            join(''));

	          }

	          this.navItems.concat(this.nav).forEach((el) => el && (el.hidden = !this.maxIndex));

	          this.updateNav();
	        },

	        events: ['resize'] },


	      events: [
	      {
	        name: 'click',

	        delegate() {
	          return this.selNavItem;
	        },

	        handler(e) {
	          e.preventDefault();
	          this.show(data(e.current, this.attrItem));
	        } },


	      {
	        name: 'itemshow',
	        handler: 'updateNav' }],



	      methods: {
	        updateNav() {
	          const i = this.getValidIndex();
	          for (const el of this.navItems) {
	            const cmd = data(el, this.attrItem);

	            toggleClass(el, this.clsActive, toNumber(cmd) === i);
	            toggleClass(
	            el,
	            'uk-invisible',
	            this.finite && (
	            cmd === 'previous' && i === 0 || cmd === 'next' && i >= this.maxIndex));

	          }
	        } } };

	    var Slider = {
	      mixins: [SliderAutoplay, SliderDrag, SliderNav, Resize],

	      props: {
	        clsActivated: Boolean,
	        easing: String,
	        index: Number,
	        finite: Boolean,
	        velocity: Number,
	        selSlides: String },


	      data: () => ({
	        easing: 'ease',
	        finite: false,
	        velocity: 1,
	        index: 0,
	        prevIndex: -1,
	        stack: [],
	        percent: 0,
	        clsActive: 'uk-active',
	        clsActivated: false,
	        Transitioner: false,
	        transitionOptions: {} }),


	      connected() {
	        this.prevIndex = -1;
	        this.index = this.getValidIndex(this.$props.index);
	        this.stack = [];
	      },

	      disconnected() {
	        removeClass(this.slides, this.clsActive);
	      },

	      computed: {
	        duration(_ref, $el) {let { velocity } = _ref;
	          return speedUp($el.offsetWidth / velocity);
	        },

	        list(_ref2, $el) {let { selList } = _ref2;
	          return $(selList, $el);
	        },

	        maxIndex() {
	          return this.length - 1;
	        },

	        selSlides(_ref3) {let { selList, selSlides } = _ref3;
	          return selList + " " + (selSlides || '> *');
	        },

	        slides: {
	          get() {
	            return $$(this.selSlides, this.$el);
	          },

	          watch() {
	            this.$reset();
	          } },


	        length() {
	          return this.slides.length;
	        } },


	      methods: {
	        show(index, force) {if (force === void 0) {force = false;}
	          if (this.dragging || !this.length) {
	            return;
	          }

	          const { stack } = this;
	          const queueIndex = force ? 0 : stack.length;
	          const reset = () => {
	            stack.splice(queueIndex, 1);

	            if (stack.length) {
	              this.show(stack.shift(), true);
	            }
	          };

	          stack[force ? 'unshift' : 'push'](index);

	          if (!force && stack.length > 1) {
	            if (stack.length === 2) {
	              this._transitioner.forward(Math.min(this.duration, 200));
	            }

	            return;
	          }

	          const prevIndex = this.getIndex(this.index);
	          const prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
	          const nextIndex = this.getIndex(index, this.index);
	          const next = this.slides[nextIndex];

	          if (prev === next) {
	            reset();
	            return;
	          }

	          this.dir = getDirection(index, prevIndex);
	          this.prevIndex = prevIndex;
	          this.index = nextIndex;

	          if (
	          prev && !trigger(prev, 'beforeitemhide', [this]) ||
	          !trigger(next, 'beforeitemshow', [this, prev]))
	          {
	            this.index = this.prevIndex;
	            reset();
	            return;
	          }

	          const promise = this._show(prev, next, force).then(() => {
	            prev && trigger(prev, 'itemhidden', [this]);
	            trigger(next, 'itemshown', [this]);

	            return new Promise((resolve) => {
	              fastdom.write(() => {
	                stack.shift();
	                if (stack.length) {
	                  this.show(stack.shift(), true);
	                } else {
	                  this._transitioner = null;
	                }
	                resolve();
	              });
	            });
	          });

	          prev && trigger(prev, 'itemhide', [this]);
	          trigger(next, 'itemshow', [this]);

	          return promise;
	        },

	        getIndex(index, prev) {if (index === void 0) {index = this.index;}if (prev === void 0) {prev = this.index;}
	          return clamp(getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
	        },

	        getValidIndex(index, prevIndex) {if (index === void 0) {index = this.index;}if (prevIndex === void 0) {prevIndex = this.prevIndex;}
	          return this.getIndex(index, prevIndex);
	        },

	        _show(prev, next, force) {
	          this._transitioner = this._getTransitioner(prev, next, this.dir, {
	            easing: force ?
	            next.offsetWidth < 600 ?
	            'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */ :
	            'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */ :
	            this.easing,
	            ...this.transitionOptions });


	          if (!force && !prev) {
	            this._translate(1);
	            return Promise.resolve();
	          }

	          const { length } = this.stack;
	          return this._transitioner[length > 1 ? 'forward' : 'show'](
	          length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration,
	          this.percent);

	        },

	        _getDistance(prev, next) {
	          return this._getTransitioner(prev, prev !== next && next).getDistance();
	        },

	        _translate(percent, prev, next) {if (prev === void 0) {prev = this.prevIndex;}if (next === void 0) {next = this.index;}
	          const transitioner = this._getTransitioner(prev !== next ? prev : false, next);
	          transitioner.translate(percent);
	          return transitioner;
	        },

	        _getTransitioner(
	        prev,
	        next,
	        dir,
	        options)
	        {if (prev === void 0) {prev = this.prevIndex;}if (next === void 0) {next = this.index;}if (dir === void 0) {dir = this.dir || 1;}if (options === void 0) {options = this.transitionOptions;}
	          return new this.Transitioner(
	          isNumber(prev) ? this.slides[prev] : prev,
	          isNumber(next) ? this.slides[next] : next,
	          dir * (isRtl ? -1 : 1),
	          options);

	        } } };



	    function getDirection(index, prevIndex) {
	      return index === 'next' ? 1 : index === 'previous' ? -1 : index < prevIndex ? -1 : 1;
	    }

	    function speedUp(x) {
	      return 0.5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
	    }

	    var Slideshow = {
	      mixins: [Slider],

	      props: {
	        animation: String },


	      data: {
	        animation: 'slide',
	        clsActivated: 'uk-transition-active',
	        Animations: Animations$2,
	        Transitioner: Transitioner$1 },


	      computed: {
	        animation(_ref) {let { animation, Animations } = _ref;
	          return { ...(Animations[animation] || Animations.slide), name: animation };
	        },

	        transitionOptions() {
	          return { animation: this.animation };
	        } },


	      events: {
	        beforeitemshow(_ref2) {let { target } = _ref2;
	          addClass(target, this.clsActive);
	        },

	        itemshown(_ref3) {let { target } = _ref3;
	          addClass(target, this.clsActivated);
	        },

	        itemhidden(_ref4) {let { target } = _ref4;
	          removeClass(target, this.clsActive, this.clsActivated);
	        } } };

	    var LightboxPanel = {
	      mixins: [Container, Modal, Togglable, Slideshow],

	      functional: true,

	      props: {
	        delayControls: Number,
	        preload: Number,
	        videoAutoplay: Boolean,
	        template: String },


	      data: () => ({
	        preload: 1,
	        videoAutoplay: false,
	        delayControls: 3000,
	        items: [],
	        cls: 'uk-open',
	        clsPage: 'uk-lightbox-page',
	        selList: '.uk-lightbox-items',
	        attrItem: 'uk-lightbox-item',
	        selClose: '.uk-close-large',
	        selCaption: '.uk-lightbox-caption',
	        pauseOnHover: false,
	        velocity: 2,
	        Animations: Animations$1,
	        template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>" }),










	      created() {
	        const $el = $(this.template);
	        const list = $(this.selList, $el);
	        this.items.forEach(() => append(list, '<li>'));

	        this.$mount(append(this.container, $el));
	      },

	      computed: {
	        caption(_ref, $el) {let { selCaption } = _ref;
	          return $(selCaption, $el);
	        } },


	      events: [
	      {
	        name: pointerMove + " " + pointerDown + " keydown",

	        handler: 'showControls' },


	      {
	        name: 'click',

	        self: true,

	        delegate() {
	          return this.selSlides;
	        },

	        handler(e) {
	          if (e.defaultPrevented) {
	            return;
	          }

	          this.hide();
	        } },


	      {
	        name: 'shown',

	        self: true,

	        handler() {
	          this.showControls();
	        } },


	      {
	        name: 'hide',

	        self: true,

	        handler() {
	          this.hideControls();

	          removeClass(this.slides, this.clsActive);
	          Transition.stop(this.slides);
	        } },


	      {
	        name: 'hidden',

	        self: true,

	        handler() {
	          this.$destroy(true);
	        } },


	      {
	        name: 'keyup',

	        el() {
	          return document;
	        },

	        handler(e) {
	          if (!this.isToggled(this.$el) || !this.draggable) {
	            return;
	          }

	          switch (e.keyCode) {
	            case 37:
	              this.show('previous');
	              break;
	            case 39:
	              this.show('next');
	              break;}

	        } },


	      {
	        name: 'beforeitemshow',

	        handler(e) {
	          if (this.isToggled()) {
	            return;
	          }

	          this.draggable = false;

	          e.preventDefault();

	          this.toggleElement(this.$el, true, false);

	          this.animation = Animations$1['scale'];
	          removeClass(e.target, this.clsActive);
	          this.stack.splice(1, 0, this.index);
	        } },


	      {
	        name: 'itemshow',

	        handler() {
	          html(this.caption, this.getItem().caption || '');

	          for (let j = -this.preload; j <= this.preload; j++) {
	            this.loadItem(this.index + j);
	          }
	        } },


	      {
	        name: 'itemshown',

	        handler() {
	          this.draggable = this.$props.draggable;
	        } },


	      {
	        name: 'itemload',

	        async handler(_, item) {
	          const { source: src, type, alt = '', poster, attrs = {} } = item;

	          this.setItem(item, '<span uk-spinner></span>');

	          if (!src) {
	            return;
	          }

	          let matches;
	          const iframeAttrs = {
	            frameborder: '0',
	            allow: 'autoplay',
	            allowfullscreen: '',
	            style: 'max-width: 100%; box-sizing: border-box;',
	            'uk-responsive': '',
	            'uk-video': "" + this.videoAutoplay };


	          // Image
	          if (
	          type === 'image' ||
	          src.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i))
	          {
	            try {
	              const { width, height } = await getImage(src, attrs.srcset, attrs.size);
	              this.setItem(item, createEl('img', { src, width, height, alt, ...attrs }));
	            } catch (e) {
	              this.setError(item);
	            }

	            // Video
	          } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
	            const video = createEl('video', {
	              src,
	              poster,
	              controls: '',
	              playsinline: '',
	              'uk-video': "" + this.videoAutoplay,
	              ...attrs });


	            on(video, 'loadedmetadata', () => {
	              attr(video, { width: video.videoWidth, height: video.videoHeight });
	              this.setItem(item, video);
	            });
	            on(video, 'error', () => this.setError(item));

	            // Iframe
	          } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {
	            this.setItem(
	            item,
	            createEl('iframe', {
	              src,
	              frameborder: '0',
	              allowfullscreen: '',
	              class: 'uk-lightbox-iframe',
	              ...attrs }));



	            // YouTube
	          } else if (
	          matches = src.match(
	          /\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))

	          {
	            this.setItem(
	            item,
	            createEl('iframe', {
	              src: "https://www.youtube" + (matches[1] || '') + ".com/embed/" + matches[2] + (
	              matches[3] ? "?" + matches[3] : ''),

	              width: 1920,
	              height: 1080,
	              ...iframeAttrs,
	              ...attrs }));



	            // Vimeo
	          } else if (matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
	            try {
	              const { height, width } = await (
	              await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" +
	              encodeURI(
	              src),

	              {
	                credentials: 'omit' })).


	              json();

	              this.setItem(
	              item,
	              createEl('iframe', {
	                src: "https://player.vimeo.com/video/" + matches[1] + (
	                matches[2] ? "?" + matches[2] : ''),

	                width,
	                height,
	                ...iframeAttrs,
	                ...attrs }));


	            } catch (e) {
	              this.setError(item);
	            }
	          }
	        } }],



	      methods: {
	        loadItem(index) {if (index === void 0) {index = this.index;}
	          const item = this.getItem(index);

	          if (!this.getSlide(item).childElementCount) {
	            trigger(this.$el, 'itemload', [item]);
	          }
	        },

	        getItem(index) {if (index === void 0) {index = this.index;}
	          return this.items[getIndex(index, this.slides)];
	        },

	        setItem(item, content) {
	          trigger(this.$el, 'itemloaded', [this, html(this.getSlide(item), content)]);
	        },

	        getSlide(item) {
	          return this.slides[this.items.indexOf(item)];
	        },

	        setError(item) {
	          this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
	        },

	        showControls() {
	          clearTimeout(this.controlsTimer);
	          this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

	          addClass(this.$el, 'uk-active', 'uk-transition-active');
	        },

	        hideControls() {
	          removeClass(this.$el, 'uk-active', 'uk-transition-active');
	        } } };



	    function createEl(tag, attrs) {
	      const el = fragment("<" + tag + ">");
	      attr(el, attrs);
	      return el;
	    }

	    var lightbox = {
	      install: install$1,

	      props: { toggle: String },

	      data: { toggle: 'a' },

	      computed: {
	        toggles: {
	          get(_ref, $el) {let { toggle } = _ref;
	            return $$(toggle, $el);
	          },

	          watch() {
	            this.hide();
	          } } },



	      disconnected() {
	        this.hide();
	      },

	      events: [
	      {
	        name: 'click',

	        delegate() {
	          return this.toggle + ":not(.uk-disabled)";
	        },

	        handler(e) {
	          e.preventDefault();
	          this.show(e.current);
	        } }],



	      methods: {
	        show(index) {
	          const items = uniqueBy(this.toggles.map(toItem), 'source');

	          if (isElement(index)) {
	            const { source } = toItem(index);
	            index = findIndex(items, (_ref2) => {let { source: src } = _ref2;return source === src;});
	          }

	          this.panel = this.panel || this.$create('lightboxPanel', { ...this.$props, items });

	          on(this.panel.$el, 'hidden', () => this.panel = false);

	          return this.panel.show(index);
	        },

	        hide() {var _this$panel;
	          return (_this$panel = this.panel) == null ? void 0 : _this$panel.hide();
	        } } };



	    function install$1(UIkit, Lightbox) {
	      if (!UIkit.lightboxPanel) {
	        UIkit.component('lightboxPanel', LightboxPanel);
	      }

	      assign(Lightbox.props, UIkit.component('lightboxPanel').options.props);
	    }

	    function toItem(el) {
	      const item = {};

	      for (const attr of ['href', 'caption', 'type', 'poster', 'alt', 'attrs']) {
	        item[attr === 'href' ? 'source' : attr] = data(el, attr);
	      }

	      item.attrs = parseOptions(item.attrs);

	      return item;
	    }

	    var notification = {
	      mixins: [Container],

	      functional: true,

	      args: ['message', 'status'],

	      data: {
	        message: '',
	        status: '',
	        timeout: 5000,
	        group: null,
	        pos: 'top-center',
	        clsContainer: 'uk-notification',
	        clsClose: 'uk-notification-close',
	        clsMsg: 'uk-notification-message' },


	      install,

	      computed: {
	        marginProp(_ref) {let { pos } = _ref;
	          return "margin" + (startsWith(pos, 'top') ? 'Top' : 'Bottom');
	        },

	        startProps() {
	          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
	        } },


	      created() {
	        const container =
	        $("." + this.clsContainer + "-" + this.pos, this.container) ||
	        append(
	        this.container, "<div class=\"" +
	        this.clsContainer + " " + this.clsContainer + "-" + this.pos + "\" style=\"display: block\"></div>");


	        this.$mount(
	        append(
	        container, "<div class=\"" +
	        this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : '') + "\"> <a href class=\"" +
	        this.clsClose + "\" data-uk-close></a> <div>" +
	        this.message + "</div> </div>"));



	      },

	      async connected() {
	        const margin = toFloat(css(this.$el, this.marginProp));
	        await Transition.start(css(this.$el, this.startProps), {
	          opacity: 1,
	          [this.marginProp]: margin });


	        if (this.timeout) {
	          this.timer = setTimeout(this.close, this.timeout);
	        }
	      },

	      events: {
	        click(e) {
	          if (closest(e.target, 'a[href="#"],a[href=""]')) {
	            e.preventDefault();
	          }
	          this.close();
	        },

	        [pointerEnter]() {
	          if (this.timer) {
	            clearTimeout(this.timer);
	          }
	        },

	        [pointerLeave]() {
	          if (this.timeout) {
	            this.timer = setTimeout(this.close, this.timeout);
	          }
	        } },


	      methods: {
	        async close(immediate) {
	          const removeFn = (el) => {
	            const container = parent(el);

	            trigger(el, 'close', [this]);
	            remove$1(el);

	            if (!(container != null && container.hasChildNodes())) {
	              remove$1(container);
	            }
	          };

	          if (this.timer) {
	            clearTimeout(this.timer);
	          }

	          if (!immediate) {
	            await Transition.start(this.$el, this.startProps);
	          }

	          removeFn(this.$el);
	        } } };



	    function install(UIkit) {
	      UIkit.notification.closeAll = function (group, immediate) {
	        apply(document.body, (el) => {
	          const notification = UIkit.getComponent(el, 'notification');
	          if (notification && (!group || group === notification.group)) {
	            notification.close(immediate);
	          }
	        });
	      };
	    }

	    const props = {
	      x: transformFn,
	      y: transformFn,
	      rotate: transformFn,
	      scale: transformFn,
	      color: colorFn,
	      backgroundColor: colorFn,
	      borderColor: colorFn,
	      blur: filterFn,
	      hue: filterFn,
	      fopacity: filterFn,
	      grayscale: filterFn,
	      invert: filterFn,
	      saturate: filterFn,
	      sepia: filterFn,
	      opacity: cssPropFn,
	      stroke: strokeFn,
	      bgx: backgroundFn,
	      bgy: backgroundFn };


	    const { keys } = Object;

	    var Parallax = {
	      mixins: [Media],

	      props: fillObject(keys(props), 'list'),

	      data: fillObject(keys(props), undefined),

	      computed: {
	        props(properties, $el) {
	          const stops = {};
	          for (const prop in properties) {
	            if (prop in props && !isUndefined(properties[prop])) {
	              stops[prop] = properties[prop].slice();
	            }
	          }
	          const result = {};
	          for (const prop in stops) {
	            result[prop] = props[prop](prop, $el, stops[prop], stops);
	          }
	          return result;
	        } },


	      events: {
	        load() {
	          this.$emit();
	        } },


	      methods: {
	        reset() {
	          for (const prop in this.getCss(0)) {
	            css(this.$el, prop, '');
	          }
	        },

	        getCss(percent) {
	          const css = { transform: '', filter: '' };
	          for (const prop in this.props) {
	            this.props[prop](css, percent);
	          }
	          return css;
	        } } };



	    function transformFn(prop, el, stops) {
	      let unit = getUnit(stops) || { x: 'px', y: 'px', rotate: 'deg' }[prop] || '';
	      let transformFn;

	      if (prop === 'x' || prop === 'y') {
	        prop = "translate" + ucfirst(prop);
	        transformFn = (stop) => toFloat(toFloat(stop).toFixed(unit === 'px' ? 0 : 6));
	      } else if (prop === 'scale') {
	        unit = '';
	        transformFn = (stop) =>
	        getUnit([stop]) ? toPx(stop, 'width', el, true) / el.offsetWidth : stop;
	      }

	      if (stops.length === 1) {
	        stops.unshift(prop === 'scale' ? 1 : 0);
	      }

	      stops = parseStops(stops, transformFn);

	      return (css, percent) => {
	        css.transform += " " + prop + "(" + getValue(stops, percent) + unit + ")";
	      };
	    }

	    function colorFn(prop, el, stops) {
	      if (stops.length === 1) {
	        stops.unshift(getCssValue(el, prop, ''));
	      }

	      stops = parseStops(stops, (stop) => parseColor(el, stop));

	      return (css, percent) => {
	        const [start, end, p] = getStop(stops, percent);
	        const value = start.
	        map((value, i) => {
	          value += p * (end[i] - value);
	          return i === 3 ? toFloat(value) : parseInt(value, 10);
	        }).
	        join(',');
	        css[prop] = "rgba(" + value + ")";
	      };
	    }

	    function parseColor(el, color) {
	      return getCssValue(el, 'color', color).
	      split(/[(),]/g).
	      slice(1, -1).
	      concat(1).
	      slice(0, 4).
	      map(toFloat);
	    }

	    function filterFn(prop, el, stops) {
	      if (stops.length === 1) {
	        stops.unshift(0);
	      }

	      const unit = getUnit(stops) || { blur: 'px', hue: 'deg' }[prop] || '%';
	      prop = { fopacity: 'opacity', hue: 'hue-rotate' }[prop] || prop;
	      stops = parseStops(stops);

	      return (css, percent) => {
	        const value = getValue(stops, percent);
	        css.filter += " " + prop + "(" + (value + unit) + ")";
	      };
	    }

	    function cssPropFn(prop, el, stops) {
	      if (stops.length === 1) {
	        stops.unshift(getCssValue(el, prop, ''));
	      }

	      stops = parseStops(stops);

	      return (css, percent) => {
	        css[prop] = getValue(stops, percent);
	      };
	    }

	    function strokeFn(prop, el, stops) {
	      if (stops.length === 1) {
	        stops.unshift(0);
	      }

	      const unit = getUnit(stops);
	      const length = getMaxPathLength(el);
	      stops = parseStops(stops.reverse(), (stop) => {
	        stop = toFloat(stop);
	        return unit === '%' ? stop * length / 100 : stop;
	      });

	      if (!stops.some((_ref) => {let [value] = _ref;return value;})) {
	        return noop;
	      }

	      css(el, 'strokeDasharray', length);

	      return (css, percent) => {
	        css.strokeDashoffset = getValue(stops, percent);
	      };
	    }

	    function backgroundFn(prop, el, stops, props) {
	      if (stops.length === 1) {
	        stops.unshift(0);
	      }

	      const attr = prop === 'bgy' ? 'height' : 'width';
	      props[prop] = parseStops(stops, (stop) => toPx(stop, attr, el));

	      const bgProps = ['bgx', 'bgy'].filter((prop) => prop in props);
	      if (bgProps.length === 2 && prop === 'bgx') {
	        return noop;
	      }

	      if (getCssValue(el, 'backgroundSize', '') === 'cover') {
	        return backgroundCoverFn(prop, el, stops, props);
	      }

	      const positions = {};
	      for (const prop of bgProps) {
	        positions[prop] = getBackgroundPos(el, prop);
	      }

	      return setBackgroundPosFn(bgProps, positions, props);
	    }

	    function backgroundCoverFn(prop, el, stops, props) {
	      const dimImage = getBackgroundImageDimensions(el);

	      if (!dimImage.width) {
	        return noop;
	      }

	      const dimEl = {
	        width: el.offsetWidth,
	        height: el.offsetHeight };


	      const bgProps = ['bgx', 'bgy'].filter((prop) => prop in props);

	      const positions = {};
	      for (const prop of bgProps) {
	        const values = props[prop].map((_ref2) => {let [value] = _ref2;return value;});
	        const min = Math.min(...values);
	        const max = Math.max(...values);
	        const down = values.indexOf(min) < values.indexOf(max);
	        const diff = max - min;

	        positions[prop] = (down ? -diff : 0) - (down ? min : max) + "px";
	        dimEl[prop === 'bgy' ? 'height' : 'width'] += diff;
	      }

	      const dim = Dimensions.cover(dimImage, dimEl);

	      for (const prop of bgProps) {
	        const attr = prop === 'bgy' ? 'height' : 'width';
	        const overflow = dim[attr] - dimEl[attr];
	        positions[prop] = "max(" + getBackgroundPos(el, prop) + ",-" + overflow + "px) + " + positions[prop];
	      }

	      const fn = setBackgroundPosFn(bgProps, positions, props);
	      return (css, percent) => {
	        fn(css, percent);
	        css.backgroundSize = dim.width + "px " + dim.height + "px";
	        css.backgroundRepeat = 'no-repeat';
	      };
	    }

	    function getBackgroundPos(el, prop) {
	      return getCssValue(el, "background-position-" + prop.substr(-1), '');
	    }

	    function setBackgroundPosFn(bgProps, positions, props) {
	      return function (css, percent) {
	        for (const prop of bgProps) {
	          const value = getValue(props[prop], percent);
	          css["background-position-" + prop.substr(-1)] = "calc(" + positions[prop] + " + " + value + "px)";
	        }
	      };
	    }

	    const dimensions = {};
	    function getBackgroundImageDimensions(el) {
	      const src = css(el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

	      if (dimensions[src]) {
	        return dimensions[src];
	      }

	      const image = new Image();
	      if (src) {
	        image.src = src;

	        if (!image.naturalWidth) {
	          image.onload = () => {
	            dimensions[src] = toDimensions(image);
	            trigger(el, createEvent('load', false));
	          };
	          return toDimensions(image);
	        }
	      }

	      return dimensions[src] = toDimensions(image);
	    }

	    function toDimensions(image) {
	      return {
	        width: image.naturalWidth,
	        height: image.naturalHeight };

	    }

	    function parseStops(stops, fn) {if (fn === void 0) {fn = toFloat;}
	      const result = [];
	      const { length } = stops;
	      let nullIndex = 0;
	      for (let i = 0; i < length; i++) {
	        let [value, percent] = isString(stops[i]) ? stops[i].trim().split(' ') : [stops[i]];
	        value = fn(value);
	        percent = percent ? toFloat(percent) / 100 : null;

	        if (i === 0) {
	          if (percent === null) {
	            percent = 0;
	          } else if (percent) {
	            result.push([value, 0]);
	          }
	        } else if (i === length - 1) {
	          if (percent === null) {
	            percent = 1;
	          } else if (percent !== 1) {
	            result.push([value, percent]);
	            percent = 1;
	          }
	        }

	        result.push([value, percent]);

	        if (percent === null) {
	          nullIndex++;
	        } else if (nullIndex) {
	          const leftPercent = result[i - nullIndex - 1][1];
	          const p = (percent - leftPercent) / (nullIndex + 1);
	          for (let j = nullIndex; j > 0; j--) {
	            result[i - j][1] = leftPercent + p * (nullIndex - j + 1);
	          }

	          nullIndex = 0;
	        }
	      }

	      return result;
	    }

	    function getStop(stops, percent) {
	      const index = findIndex(stops.slice(1), (_ref3) => {let [, targetPercent] = _ref3;return percent <= targetPercent;}) + 1;
	      return [
	      stops[index - 1][0],
	      stops[index][0],
	      (percent - stops[index - 1][1]) / (stops[index][1] - stops[index - 1][1])];

	    }

	    function getValue(stops, percent) {
	      const [start, end, p] = getStop(stops, percent);
	      return isNumber(start) ? start + Math.abs(start - end) * p * (start < end ? 1 : -1) : +end;
	    }

	    const unitRe = /^-?\d+(\S*)/;
	    function getUnit(stops, defaultUnit) {
	      for (const stop of stops) {
	        const match = stop.match == null ? void 0 : stop.match(unitRe);
	        if (match) {
	          return match[1];
	        }
	      }
	      return defaultUnit;
	    }

	    function getCssValue(el, prop, value) {
	      const prev = el.style[prop];
	      const val = css(css(el, prop, value), prop);
	      el.style[prop] = prev;
	      return val;
	    }

	    function fillObject(keys, value) {
	      return keys.reduce((data, prop) => {
	        data[prop] = value;
	        return data;
	      }, {});
	    }

	    var parallax = {
	      mixins: [Parallax, Resize, Scroll],

	      props: {
	        target: String,
	        viewport: Number, // Deprecated
	        easing: Number,
	        start: String,
	        end: String },


	      data: {
	        target: false,
	        viewport: 1,
	        easing: 1,
	        start: 0,
	        end: 0 },


	      computed: {
	        target(_ref, $el) {let { target } = _ref;
	          return getOffsetElement(target && query(target, $el) || $el);
	        },

	        start(_ref2) {let { start } = _ref2;
	          return toPx(start, 'height', this.target, true);
	        },

	        end(_ref3) {let { end, viewport } = _ref3;
	          return toPx(
	          end || (viewport = (1 - viewport) * 100) && viewport + "vh+" + viewport + "%",
	          'height',
	          this.target,
	          true);

	        } },


	      update: {
	        read(_ref4, types) {let { percent } = _ref4;
	          if (!types.has('scroll')) {
	            percent = false;
	          }

	          if (!this.matchMedia) {
	            return;
	          }

	          const prev = percent;
	          percent = ease(scrolledOver(this.target, this.start, this.end), this.easing);

	          return {
	            percent,
	            style: prev === percent ? false : this.getCss(percent) };

	        },

	        write(_ref5) {let { style } = _ref5;
	          if (!this.matchMedia) {
	            this.reset();
	            return;
	          }

	          style && css(this.$el, style);
	        },

	        events: ['scroll', 'resize'] } };



	    /*
	     * Inspired by https://gist.github.com/gre/1650294?permalink_comment_id=3477425#gistcomment-3477425
	     *
	     * linear: 0
	     * easeInSine: 0.5
	     * easeOutSine: -0.5
	     * easeInQuad: 1
	     * easeOutQuad: -1
	     * easeInCubic: 2
	     * easeOutCubic: -2
	     * easeInQuart: 3
	     * easeOutQuart: -3
	     * easeInQuint: 4
	     * easeOutQuint: -4
	     */
	    function ease(percent, easing) {
	      return easing >= 0 ? Math.pow(percent, easing + 1) : 1 - Math.pow(1 - percent, 1 - easing);
	    }

	    // SVG elements do not inherit from HTMLElement
	    function getOffsetElement(el) {
	      return el ? 'offsetTop' in el ? el : getOffsetElement(parent(el)) : document.documentElement;
	    }

	    var SliderReactive = {
	      update: {
	        write() {
	          if (this.stack.length || this.dragging) {
	            return;
	          }

	          const index = this.getValidIndex(this.index);

	          if (!~this.prevIndex || this.index !== index) {
	            this.show(index);
	          }
	        },

	        events: ['resize'] } };

	    var SliderPreload = {
	      mixins: [Lazyload],

	      connected() {
	        this.lazyload(this.slides, this.getAdjacentSlides);
	      } };

	    function Transitioner (prev, next, dir, _ref) {let { center, easing, list } = _ref;
	      const deferred = new Deferred();

	      const from = prev ?
	      getLeft(prev, list, center) :
	      getLeft(next, list, center) + dimensions$1(next).width * dir;
	      const to = next ?
	      getLeft(next, list, center) :
	      from + dimensions$1(prev).width * dir * (isRtl ? -1 : 1);

	      return {
	        dir,

	        show(duration, percent, linear) {if (percent === void 0) {percent = 0;}
	          const timing = linear ? 'linear' : easing;
	          duration -= Math.round(duration * clamp(percent, -1, 1));

	          this.translate(percent);

	          percent = prev ? percent : clamp(percent, 0, 1);
	          triggerUpdate(this.getItemIn(), 'itemin', { percent, duration, timing, dir });
	          prev &&
	          triggerUpdate(this.getItemIn(true), 'itemout', {
	            percent: 1 - percent,
	            duration,
	            timing,
	            dir });


	          Transition.start(
	          list,
	          { transform: translate(-to * (isRtl ? -1 : 1), 'px') },
	          duration,
	          timing).
	          then(deferred.resolve, noop);

	          return deferred.promise;
	        },

	        cancel() {
	          Transition.cancel(list);
	        },

	        reset() {
	          css(list, 'transform', '');
	        },

	        forward(duration, percent) {if (percent === void 0) {percent = this.percent();}
	          Transition.cancel(list);
	          return this.show(duration, percent, true);
	        },

	        translate(percent) {
	          const distance = this.getDistance() * dir * (isRtl ? -1 : 1);

	          css(
	          list,
	          'transform',
	          translate(
	          clamp(
	          -to + (distance - distance * percent),
	          -getWidth(list),
	          dimensions$1(list).width) * (
	          isRtl ? -1 : 1),
	          'px'));



	          const actives = this.getActives();
	          const itemIn = this.getItemIn();
	          const itemOut = this.getItemIn(true);

	          percent = prev ? clamp(percent, -1, 1) : 0;

	          for (const slide of children(list)) {
	            const isActive = includes(actives, slide);
	            const isIn = slide === itemIn;
	            const isOut = slide === itemOut;
	            const translateIn =
	            isIn ||
	            !isOut && (
	            isActive ||
	            dir * (isRtl ? -1 : 1) === -1 ^
	            getElLeft(slide, list) > getElLeft(prev || next));

	            triggerUpdate(slide, "itemtranslate" + (translateIn ? 'in' : 'out'), {
	              dir,
	              percent: isOut ? 1 - percent : isIn ? percent : isActive ? 1 : 0 });

	          }
	        },

	        percent() {
	          return Math.abs(
	          (css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));

	        },

	        getDistance() {
	          return Math.abs(to - from);
	        },

	        getItemIn(out) {if (out === void 0) {out = false;}
	          let actives = this.getActives();
	          let nextActives = inView(list, getLeft(next || prev, list, center));

	          if (out) {
	            const temp = actives;
	            actives = nextActives;
	            nextActives = temp;
	          }

	          return nextActives[findIndex(nextActives, (el) => !includes(actives, el))];
	        },

	        getActives() {
	          return inView(list, getLeft(prev || next, list, center));
	        } };

	    }

	    function getLeft(el, list, center) {
	      const left = getElLeft(el, list);

	      return center ? left - centerEl(el, list) : Math.min(left, getMax(list));
	    }

	    function getMax(list) {
	      return Math.max(0, getWidth(list) - dimensions$1(list).width);
	    }

	    function getWidth(list) {
	      return children(list).reduce((right, el) => dimensions$1(el).width + right, 0);
	    }

	    function centerEl(el, list) {
	      return dimensions$1(list).width / 2 - dimensions$1(el).width / 2;
	    }

	    function getElLeft(el, list) {
	      return (
	        el &&
	        (position(el).left + (isRtl ? dimensions$1(el).width - dimensions$1(list).width : 0)) * (
	        isRtl ? -1 : 1) ||
	        0);

	    }

	    function inView(list, listLeft) {
	      listLeft -= 1;
	      const listWidth = dimensions$1(list).width;
	      const listRight = listLeft + listWidth + 2;

	      return children(list).filter((slide) => {
	        const slideLeft = getElLeft(slide, list);
	        const slideRight = slideLeft + Math.min(dimensions$1(slide).width, listWidth);

	        return slideLeft >= listLeft && slideRight <= listRight;
	      });
	    }

	    function triggerUpdate(el, type, data) {
	      trigger(el, createEvent(type, false, false, data));
	    }

	    var slider = {
	      mixins: [Class, Slider, SliderReactive, SliderPreload],

	      props: {
	        center: Boolean,
	        sets: Boolean },


	      data: {
	        center: false,
	        sets: false,
	        attrItem: 'uk-slider-item',
	        selList: '.uk-slider-items',
	        selNav: '.uk-slider-nav',
	        clsContainer: 'uk-slider-container',
	        Transitioner },


	      computed: {
	        avgWidth() {
	          return getWidth(this.list) / this.length;
	        },

	        finite(_ref) {let { finite } = _ref;
	          return (
	            finite ||
	            Math.ceil(getWidth(this.list)) <
	            Math.trunc(dimensions$1(this.list).width + getMaxElWidth(this.list) + this.center));

	        },

	        maxIndex() {
	          if (!this.finite || this.center && !this.sets) {
	            return this.length - 1;
	          }

	          if (this.center) {
	            return last(this.sets);
	          }

	          let lft = 0;
	          const max = getMax(this.list);
	          const index = findIndex(this.slides, (el) => {
	            if (lft >= max) {
	              return true;
	            }

	            lft += dimensions$1(el).width;
	          });

	          return ~index ? index : this.length - 1;
	        },

	        sets(_ref2) {let { sets: enabled } = _ref2;
	          if (!enabled) {
	            return;
	          }

	          let left = 0;
	          const sets = [];
	          const width = dimensions$1(this.list).width;
	          for (let i = 0; i < this.slides.length; i++) {
	            const slideWidth = dimensions$1(this.slides[i]).width;

	            if (left + slideWidth > width) {
	              left = 0;
	            }

	            if (this.center) {
	              if (
	              left < width / 2 &&
	              left + slideWidth + dimensions$1(this.slides[+i + 1]).width / 2 > width / 2)
	              {
	                sets.push(+i);
	                left = width / 2 - slideWidth / 2;
	              }
	            } else if (left === 0) {
	              sets.push(Math.min(+i, this.maxIndex));
	            }

	            left += slideWidth;
	          }

	          if (sets.length) {
	            return sets;
	          }
	        },

	        transitionOptions() {
	          return {
	            center: this.center,
	            list: this.list };

	        } },


	      connected() {
	        toggleClass(this.$el, this.clsContainer, !$("." + this.clsContainer, this.$el));
	      },

	      update: {
	        write() {
	          for (const el of this.navItems) {
	            const index = toNumber(data(el, this.attrItem));
	            if (index !== false) {
	              el.hidden =
	              !this.maxIndex ||
	              index > this.maxIndex ||
	              this.sets && !includes(this.sets, index);
	            }
	          }

	          if (this.length && !this.dragging && !this.stack.length) {
	            this.reorder();
	            this._translate(1);
	          }

	          this.updateActiveClasses();
	        },

	        events: ['resize'] },


	      events: {
	        beforeitemshow(e) {
	          if (
	          !this.dragging &&
	          this.sets &&
	          this.stack.length < 2 &&
	          !includes(this.sets, this.index))
	          {
	            this.index = this.getValidIndex();
	          }

	          const diff = Math.abs(
	          this.index -
	          this.prevIndex + (
	          this.dir > 0 && this.index < this.prevIndex ||
	          this.dir < 0 && this.index > this.prevIndex ?
	          (this.maxIndex + 1) * this.dir :
	          0));


	          if (!this.dragging && diff > 1) {
	            for (let i = 0; i < diff; i++) {
	              this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
	            }

	            e.preventDefault();
	            return;
	          }

	          const index =
	          this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
	          this.duration =
	          speedUp(this.avgWidth / this.velocity) * (
	          dimensions$1(this.slides[index]).width / this.avgWidth);

	          this.reorder();
	        },

	        itemshow() {
	          if (~this.prevIndex) {
	            addClass(this._getTransitioner().getItemIn(), this.clsActive);
	          }
	        },

	        itemshown() {
	          this.updateActiveClasses();
	        } },


	      methods: {
	        reorder() {
	          if (this.finite) {
	            css(this.slides, 'order', '');
	            return;
	          }

	          const index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;

	          this.slides.forEach((slide, i) =>
	          css(
	          slide,
	          'order',
	          this.dir > 0 && i < index ? 1 : this.dir < 0 && i >= this.index ? -1 : ''));



	          if (!this.center) {
	            return;
	          }

	          const next = this.slides[index];
	          let width = dimensions$1(this.list).width / 2 - dimensions$1(next).width / 2;
	          let j = 0;

	          while (width > 0) {
	            const slideIndex = this.getIndex(--j + index, index);
	            const slide = this.slides[slideIndex];

	            css(slide, 'order', slideIndex > index ? -2 : -1);
	            width -= dimensions$1(slide).width;
	          }
	        },

	        updateActiveClasses() {
	          const actives = this._getTransitioner(this.index).getActives();
	          const activeClasses = [
	          this.clsActive,
	          (!this.sets || includes(this.sets, toFloat(this.index))) && this.clsActivated ||
	          ''];

	          for (const slide of this.slides) {
	            toggleClass(slide, activeClasses, includes(actives, slide));
	          }
	        },

	        getValidIndex(index, prevIndex) {if (index === void 0) {index = this.index;}if (prevIndex === void 0) {prevIndex = this.prevIndex;}
	          index = this.getIndex(index, prevIndex);

	          if (!this.sets) {
	            return index;
	          }

	          let prev;

	          do {
	            if (includes(this.sets, index)) {
	              return index;
	            }

	            prev = index;
	            index = this.getIndex(index + this.dir, prevIndex);
	          } while (index !== prev);

	          return index;
	        },

	        getAdjacentSlides() {
	          const { width } = dimensions$1(this.list);
	          const left = -width;
	          const right = width * 2;
	          const slideWidth = dimensions$1(this.slides[this.index]).width;
	          const slideLeft = this.center ? width / 2 - slideWidth / 2 : 0;
	          const slides = new Set();
	          for (const i of [-1, 1]) {
	            let currentLeft = slideLeft + (i > 0 ? slideWidth : 0);
	            let j = 0;
	            do {
	              const slide = this.slides[this.getIndex(this.index + i + j++ * i)];
	              currentLeft += dimensions$1(slide).width * i;
	              slides.add(slide);
	            } while (this.slides.length > j && currentLeft > left && currentLeft < right);
	          }
	          return Array.from(slides);
	        } } };



	    function getMaxElWidth(list) {
	      return Math.max(0, ...children(list).map((el) => dimensions$1(el).width));
	    }

	    var sliderParallax = {
	      mixins: [Parallax],

	      data: {
	        selItem: '!li' },


	      beforeConnect() {
	        this.item = query(this.selItem, this.$el);
	      },

	      disconnected() {
	        this.item = null;
	      },

	      events: [
	      {
	        name: 'itemin itemout',

	        self: true,

	        el() {
	          return this.item;
	        },

	        handler(_ref) {let { type, detail: { percent, duration, timing, dir } } = _ref;
	          fastdom.read(() => {
	            const propsFrom = this.getCss(getCurrentPercent(type, dir, percent));
	            const propsTo = this.getCss(isIn(type) ? 0.5 : dir > 0 ? 1 : 0);
	            fastdom.write(() => {
	              css(this.$el, propsFrom);
	              Transition.start(this.$el, propsTo, duration, timing).catch(noop);
	            });
	          });
	        } },


	      {
	        name: 'transitioncanceled transitionend',

	        self: true,

	        el() {
	          return this.item;
	        },

	        handler() {
	          Transition.cancel(this.$el);
	        } },


	      {
	        name: 'itemtranslatein itemtranslateout',

	        self: true,

	        el() {
	          return this.item;
	        },

	        handler(_ref2) {let { type, detail: { percent, dir } } = _ref2;
	          fastdom.read(() => {
	            const props = this.getCss(getCurrentPercent(type, dir, percent));
	            fastdom.write(() => css(this.$el, props));
	          });
	        } }] };




	    function isIn(type) {
	      return endsWith(type, 'in');
	    }

	    function getCurrentPercent(type, dir, percent) {
	      percent /= 2;

	      return isIn(type) ^ dir < 0 ? percent : 1 - percent;
	    }

	    var Animations = {
	      ...Animations$2,
	      fade: {
	        show() {
	          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
	        },

	        percent(current) {
	          return 1 - css(current, 'opacity');
	        },

	        translate(percent) {
	          return [{ opacity: 1 - percent, zIndex: 0 }, { zIndex: -1 }];
	        } },


	      scale: {
	        show() {
	          return [{ opacity: 0, transform: scale3d(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
	        },

	        percent(current) {
	          return 1 - css(current, 'opacity');
	        },

	        translate(percent) {
	          return [
	          { opacity: 1 - percent, transform: scale3d(1 + 0.5 * percent), zIndex: 0 },
	          { zIndex: -1 }];

	        } },


	      pull: {
	        show(dir) {
	          return dir < 0 ?
	          [
	          { transform: translate(30), zIndex: -1 },
	          { transform: translate(), zIndex: 0 }] :

	          [
	          { transform: translate(-100), zIndex: 0 },
	          { transform: translate(), zIndex: -1 }];

	        },

	        percent(current, next, dir) {
	          return dir < 0 ? 1 - translated(next) : translated(current);
	        },

	        translate(percent, dir) {
	          return dir < 0 ?
	          [
	          { transform: translate(30 * percent), zIndex: -1 },
	          { transform: translate(-100 * (1 - percent)), zIndex: 0 }] :

	          [
	          { transform: translate(-percent * 100), zIndex: 0 },
	          { transform: translate(30 * (1 - percent)), zIndex: -1 }];

	        } },


	      push: {
	        show(dir) {
	          return dir < 0 ?
	          [
	          { transform: translate(100), zIndex: 0 },
	          { transform: translate(), zIndex: -1 }] :

	          [
	          { transform: translate(-30), zIndex: -1 },
	          { transform: translate(), zIndex: 0 }];

	        },

	        percent(current, next, dir) {
	          return dir > 0 ? 1 - translated(next) : translated(current);
	        },

	        translate(percent, dir) {
	          return dir < 0 ?
	          [
	          { transform: translate(percent * 100), zIndex: 0 },
	          { transform: translate(-30 * (1 - percent)), zIndex: -1 }] :

	          [
	          { transform: translate(-30 * percent), zIndex: -1 },
	          { transform: translate(100 * (1 - percent)), zIndex: 0 }];

	        } } };

	    var slideshow = {
	      mixins: [Class, Slideshow, SliderReactive, SliderPreload],

	      props: {
	        ratio: String,
	        minHeight: Number,
	        maxHeight: Number },


	      data: {
	        ratio: '16:9',
	        minHeight: false,
	        maxHeight: false,
	        selList: '.uk-slideshow-items',
	        attrItem: 'uk-slideshow-item',
	        selNav: '.uk-slideshow-nav',
	        Animations },


	      update: {
	        read() {
	          if (!this.list) {
	            return false;
	          }

	          let [width, height] = this.ratio.split(':').map(Number);

	          height = height * this.list.offsetWidth / width || 0;

	          if (this.minHeight) {
	            height = Math.max(this.minHeight, height);
	          }

	          if (this.maxHeight) {
	            height = Math.min(this.maxHeight, height);
	          }

	          return { height: height - boxModelAdjust(this.list, 'height', 'content-box') };
	        },

	        write(_ref) {let { height } = _ref;
	          height > 0 && css(this.list, 'minHeight', height);
	        },

	        events: ['resize'] },


	      methods: {
	        getAdjacentSlides() {
	          return [1, -1].map((i) => this.slides[this.getIndex(this.index + i)]);
	        } } };

	    var sortable = {
	      mixins: [Class, Animate],

	      props: {
	        group: String,
	        threshold: Number,
	        clsItem: String,
	        clsPlaceholder: String,
	        clsDrag: String,
	        clsDragState: String,
	        clsBase: String,
	        clsNoDrag: String,
	        clsEmpty: String,
	        clsCustom: String,
	        handle: String },


	      data: {
	        group: false,
	        threshold: 5,
	        clsItem: 'uk-sortable-item',
	        clsPlaceholder: 'uk-sortable-placeholder',
	        clsDrag: 'uk-sortable-drag',
	        clsDragState: 'uk-drag',
	        clsBase: 'uk-sortable',
	        clsNoDrag: 'uk-sortable-nodrag',
	        clsEmpty: 'uk-sortable-empty',
	        clsCustom: '',
	        handle: false,
	        pos: {} },


	      created() {
	        for (const key of ['init', 'start', 'move', 'end']) {
	          const fn = this[key];
	          this[key] = (e) => {
	            assign(this.pos, getEventPos(e));
	            fn(e);
	          };
	        }
	      },

	      events: {
	        name: pointerDown,
	        passive: false,
	        handler: 'init' },


	      computed: {
	        target() {
	          return (this.$el.tBodies || [this.$el])[0];
	        },

	        items() {
	          return children(this.target);
	        },

	        isEmpty: {
	          get() {
	            return isEmpty(this.items);
	          },

	          watch(empty) {
	            toggleClass(this.target, this.clsEmpty, empty);
	          },

	          immediate: true },


	        handles: {
	          get(_ref, el) {let { handle } = _ref;
	            return handle ? $$(handle, el) : this.items;
	          },

	          watch(handles, prev) {
	            css(prev, { touchAction: '', userSelect: '' });
	            css(handles, { touchAction: hasTouch ? 'none' : '', userSelect: 'none' }); // touchAction set to 'none' causes a performance drop in Chrome 80
	          },

	          immediate: true } },



	      update: {
	        write(data) {
	          if (!this.drag || !parent(this.placeholder)) {
	            return;
	          }

	          const {
	            pos: { x, y },
	            origin: { offsetTop, offsetLeft },
	            placeholder } =
	          this;

	          css(this.drag, {
	            top: y - offsetTop,
	            left: x - offsetLeft });


	          const sortable = this.getSortable(document.elementFromPoint(x, y));

	          if (!sortable) {
	            return;
	          }

	          const { items } = sortable;

	          if (items.some(Transition.inProgress)) {
	            return;
	          }

	          const target = findTarget(items, { x, y });

	          if (items.length && (!target || target === placeholder)) {
	            return;
	          }

	          const previous = this.getSortable(placeholder);
	          const insertTarget = findInsertTarget(
	          sortable.target,
	          target,
	          placeholder,
	          x,
	          y,
	          sortable === previous && data.moved !== target);


	          if (insertTarget === false) {
	            return;
	          }

	          if (insertTarget && placeholder === insertTarget) {
	            return;
	          }

	          if (sortable !== previous) {
	            previous.remove(placeholder);
	            data.moved = target;
	          } else {
	            delete data.moved;
	          }

	          sortable.insert(placeholder, insertTarget);

	          this.touched.add(sortable);
	        },

	        events: ['move'] },


	      methods: {
	        init(e) {
	          const { target, button, defaultPrevented } = e;
	          const [placeholder] = this.items.filter((el) => within(target, el));

	          if (
	          !placeholder ||
	          defaultPrevented ||
	          button > 0 ||
	          isInput(target) ||
	          within(target, "." + this.clsNoDrag) ||
	          this.handle && !within(target, this.handle))
	          {
	            return;
	          }

	          e.preventDefault();

	          this.touched = new Set([this]);
	          this.placeholder = placeholder;
	          this.origin = { target, index: index(placeholder), ...this.pos };

	          on(document, pointerMove, this.move);
	          on(document, pointerUp, this.end);

	          if (!this.threshold) {
	            this.start(e);
	          }
	        },

	        start(e) {
	          this.drag = appendDrag(this.$container, this.placeholder);
	          const { left, top } = this.placeholder.getBoundingClientRect();
	          assign(this.origin, { offsetLeft: this.pos.x - left, offsetTop: this.pos.y - top });

	          addClass(this.drag, this.clsDrag, this.clsCustom);
	          addClass(this.placeholder, this.clsPlaceholder);
	          addClass(this.items, this.clsItem);
	          addClass(document.documentElement, this.clsDragState);

	          trigger(this.$el, 'start', [this, this.placeholder]);

	          trackScroll(this.pos);

	          this.move(e);
	        },

	        move(e) {
	          if (this.drag) {
	            this.$emit('move');
	          } else if (
	          Math.abs(this.pos.x - this.origin.x) > this.threshold ||
	          Math.abs(this.pos.y - this.origin.y) > this.threshold)
	          {
	            this.start(e);
	          }
	        },

	        end() {
	          off(document, pointerMove, this.move);
	          off(document, pointerUp, this.end);

	          if (!this.drag) {
	            return;
	          }

	          untrackScroll();

	          const sortable = this.getSortable(this.placeholder);

	          if (this === sortable) {
	            if (this.origin.index !== index(this.placeholder)) {
	              trigger(this.$el, 'moved', [this, this.placeholder]);
	            }
	          } else {
	            trigger(sortable.$el, 'added', [sortable, this.placeholder]);
	            trigger(this.$el, 'removed', [this, this.placeholder]);
	          }

	          trigger(this.$el, 'stop', [this, this.placeholder]);

	          remove$1(this.drag);
	          this.drag = null;

	          for (const { clsPlaceholder, clsItem } of this.touched) {
	            for (const sortable of this.touched) {
	              removeClass(sortable.items, clsPlaceholder, clsItem);
	            }
	          }
	          this.touched = null;
	          removeClass(document.documentElement, this.clsDragState);
	        },

	        insert(element, target) {
	          addClass(this.items, this.clsItem);

	          const insert = () => target ? before(target, element) : append(this.target, element);

	          this.animate(insert);
	        },

	        remove(element) {
	          if (!within(element, this.target)) {
	            return;
	          }

	          this.animate(() => remove$1(element));
	        },

	        getSortable(element) {
	          do {
	            const sortable = this.$getComponent(element, 'sortable');

	            if (
	            sortable && (
	            sortable === this || this.group !== false && sortable.group === this.group))
	            {
	              return sortable;
	            }
	          } while (element = parent(element));
	        } } };



	    let trackTimer;
	    function trackScroll(pos) {
	      let last = Date.now();
	      trackTimer = setInterval(() => {
	        let { x, y } = pos;
	        y += scrollTop(window);

	        const dist = (Date.now() - last) * 0.3;
	        last = Date.now();

	        scrollParents(document.elementFromPoint(x, pos.y), /auto|scroll/).
	        reverse().
	        some((scrollEl) => {
	          let { scrollTop: scroll, scrollHeight } = scrollEl;

	          const { top, bottom, height } = offsetViewport(scrollEl);

	          if (top < y && top + 35 > y) {
	            scroll -= dist;
	          } else if (bottom > y && bottom - 35 < y) {
	            scroll += dist;
	          } else {
	            return;
	          }

	          if (scroll > 0 && scroll < scrollHeight - height) {
	            scrollTop(scrollEl, scroll);
	            return true;
	          }
	        });
	      }, 15);
	    }

	    function untrackScroll() {
	      clearInterval(trackTimer);
	    }

	    function appendDrag(container, element) {
	      const clone = append(
	      container,
	      element.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, '$1div$2'));


	      css(clone, 'margin', '0', 'important');
	      css(clone, {
	        boxSizing: 'border-box',
	        width: element.offsetWidth,
	        height: element.offsetHeight,
	        padding: css(element, 'padding') });


	      height(clone.firstElementChild, height(element.firstElementChild));

	      return clone;
	    }

	    function findTarget(items, point) {
	      return items[findIndex(items, (item) => pointInRect(point, item.getBoundingClientRect()))];
	    }

	    function findInsertTarget(list, target, placeholder, x, y, sameList) {
	      if (!children(list).length) {
	        return;
	      }

	      const rect = target.getBoundingClientRect();
	      if (!sameList) {
	        if (!isHorizontal(list, placeholder)) {
	          return y < rect.top + rect.height / 2 ? target : target.nextElementSibling;
	        }

	        return target;
	      }

	      const placeholderRect = placeholder.getBoundingClientRect();
	      const sameRow = linesIntersect(
	      [rect.top, rect.bottom],
	      [placeholderRect.top, placeholderRect.bottom]);


	      const pointerPos = sameRow ? x : y;
	      const lengthProp = sameRow ? 'width' : 'height';
	      const startProp = sameRow ? 'left' : 'top';
	      const endProp = sameRow ? 'right' : 'bottom';

	      const diff =
	      placeholderRect[lengthProp] < rect[lengthProp] ?
	      rect[lengthProp] - placeholderRect[lengthProp] :
	      0;

	      if (placeholderRect[startProp] < rect[startProp]) {
	        if (diff && pointerPos < rect[startProp] + diff) {
	          return false;
	        }

	        return target.nextElementSibling;
	      }

	      if (diff && pointerPos > rect[endProp] - diff) {
	        return false;
	      }

	      return target;
	    }

	    function isHorizontal(list, placeholder) {
	      const single = children(list).length === 1;

	      if (single) {
	        append(list, placeholder);
	      }

	      const items = children(list);
	      const isHorizontal = items.some((el, i) => {
	        const rectA = el.getBoundingClientRect();
	        return items.slice(i + 1).some((el) => {
	          const rectB = el.getBoundingClientRect();
	          return !linesIntersect([rectA.left, rectA.right], [rectB.left, rectB.right]);
	        });
	      });

	      if (single) {
	        remove$1(placeholder);
	      }

	      return isHorizontal;
	    }

	    function linesIntersect(lineA, lineB) {
	      return lineA[1] > lineB[0] && lineB[1] > lineA[0];
	    }

	    var tooltip = {
	      mixins: [Container, Togglable, Position],

	      args: 'title',

	      props: {
	        delay: Number,
	        title: String },


	      data: {
	        pos: 'top',
	        title: '',
	        delay: 0,
	        animation: ['uk-animation-scale-up'],
	        duration: 100,
	        cls: 'uk-active' },


	      beforeConnect() {
	        this._hasTitle = hasAttr(this.$el, 'title');
	        attr(this.$el, 'title', '');
	        this.updateAria(false);
	        makeFocusable(this.$el);
	      },

	      disconnected() {
	        this.hide();
	        attr(this.$el, 'title', this._hasTitle ? this.title : null);
	      },

	      methods: {
	        show() {
	          if (this.isToggled(this.tooltip || null) || !this.title) {
	            return;
	          }

	          this._unbind = once(
	          document, "show keydown " +
	          pointerDown,
	          this.hide,
	          false,
	          (e) =>
	          e.type === pointerDown && !within(e.target, this.$el) ||
	          e.type === 'keydown' && e.keyCode === 27 ||
	          e.type === 'show' && e.detail[0] !== this && e.detail[0].$name === this.$name);


	          clearTimeout(this.showTimer);
	          this.showTimer = setTimeout(this._show, this.delay);
	        },

	        async hide() {
	          if (matches(this.$el, 'input:focus')) {
	            return;
	          }

	          clearTimeout(this.showTimer);

	          if (!this.isToggled(this.tooltip || null)) {
	            return;
	          }

	          await this.toggleElement(this.tooltip, false, false);
	          remove$1(this.tooltip);
	          this.tooltip = null;
	          this._unbind();
	        },

	        _show() {
	          this.tooltip = append(
	          this.container, "<div class=\"uk-" +
	          this.$options.name + "\"> <div class=\"uk-" +
	          this.$options.name + "-inner\">" + this.title + "</div> </div>");



	          on(this.tooltip, 'toggled', (e, toggled) => {
	            this.updateAria(toggled);

	            if (!toggled) {
	              return;
	            }

	            this.positionAt(this.tooltip, this.$el);

	            const [dir, align] = getAlignment(this.tooltip, this.$el, this.pos);

	            this.origin =
	            this.axis === 'y' ?
	            flipPosition(dir) + "-" + align :
	            align + "-" + flipPosition(dir);
	          });

	          this.toggleElement(this.tooltip, true);
	        },

	        updateAria(toggled) {
	          attr(this.$el, 'aria-expanded', toggled);
	        } },


	      events: {
	        focus: 'show',
	        blur: 'hide',

	        [pointerEnter + " " + pointerLeave](e) {
	          if (!isTouch(e)) {
	            this[e.type === pointerEnter ? 'show' : 'hide']();
	          }
	        },

	        // Clicking a button does not give it focus on all browsers and platforms
	        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
	        [pointerDown](e) {
	          if (isTouch(e)) {
	            this.show();
	          }
	        } } };



	    function makeFocusable(el) {
	      if (!isFocusable(el)) {
	        attr(el, 'tabindex', '0');
	      }
	    }

	    function getAlignment(el, target, _ref) {let [dir, align] = _ref;
	      const elOffset = offset(el);
	      const targetOffset = offset(target);
	      const properties = [
	      ['left', 'right'],
	      ['top', 'bottom']];


	      for (const props of properties) {
	        if (elOffset[props[0]] >= targetOffset[props[1]]) {
	          dir = props[1];
	          break;
	        }
	        if (elOffset[props[1]] <= targetOffset[props[0]]) {
	          dir = props[0];
	          break;
	        }
	      }

	      const props = includes(properties[0], dir) ? properties[1] : properties[0];
	      if (elOffset[props[0]] === targetOffset[props[0]]) {
	        align = props[0];
	      } else if (elOffset[props[1]] === targetOffset[props[1]]) {
	        align = props[1];
	      } else {
	        align = 'center';
	      }

	      return [dir, align];
	    }

	    var upload = {
	      props: {
	        allow: String,
	        clsDragover: String,
	        concurrent: Number,
	        maxSize: Number,
	        method: String,
	        mime: String,
	        msgInvalidMime: String,
	        msgInvalidName: String,
	        msgInvalidSize: String,
	        multiple: Boolean,
	        name: String,
	        params: Object,
	        type: String,
	        url: String },


	      data: {
	        allow: false,
	        clsDragover: 'uk-dragover',
	        concurrent: 1,
	        maxSize: 0,
	        method: 'POST',
	        mime: false,
	        msgInvalidMime: 'Invalid File Type: %s',
	        msgInvalidName: 'Invalid File Name: %s',
	        msgInvalidSize: 'Invalid File Size: %s Kilobytes Max',
	        multiple: false,
	        name: 'files[]',
	        params: {},
	        type: '',
	        url: '',
	        abort: noop,
	        beforeAll: noop,
	        beforeSend: noop,
	        complete: noop,
	        completeAll: noop,
	        error: noop,
	        fail: noop,
	        load: noop,
	        loadEnd: noop,
	        loadStart: noop,
	        progress: noop },


	      events: {
	        change(e) {
	          if (!matches(e.target, 'input[type="file"]')) {
	            return;
	          }

	          e.preventDefault();

	          if (e.target.files) {
	            this.upload(e.target.files);
	          }

	          e.target.value = '';
	        },

	        drop(e) {
	          stop(e);

	          const transfer = e.dataTransfer;

	          if (!(transfer != null && transfer.files)) {
	            return;
	          }

	          removeClass(this.$el, this.clsDragover);

	          this.upload(transfer.files);
	        },

	        dragenter(e) {
	          stop(e);
	        },

	        dragover(e) {
	          stop(e);
	          addClass(this.$el, this.clsDragover);
	        },

	        dragleave(e) {
	          stop(e);
	          removeClass(this.$el, this.clsDragover);
	        } },


	      methods: {
	        async upload(files) {
	          files = toArray(files);

	          if (!files.length) {
	            return;
	          }

	          trigger(this.$el, 'upload', [files]);

	          for (const file of files) {
	            if (this.maxSize && this.maxSize * 1000 < file.size) {
	              this.fail(this.msgInvalidSize.replace('%s', this.maxSize));
	              return;
	            }

	            if (this.allow && !match(this.allow, file.name)) {
	              this.fail(this.msgInvalidName.replace('%s', this.allow));
	              return;
	            }

	            if (this.mime && !match(this.mime, file.type)) {
	              this.fail(this.msgInvalidMime.replace('%s', this.mime));
	              return;
	            }
	          }

	          if (!this.multiple) {
	            files = files.slice(0, 1);
	          }

	          this.beforeAll(this, files);

	          const chunks = chunk(files, this.concurrent);
	          const upload = async (files) => {
	            const data = new FormData();

	            files.forEach((file) => data.append(this.name, file));

	            for (const key in this.params) {
	              data.append(key, this.params[key]);
	            }

	            try {
	              const xhr = await ajax(this.url, {
	                data,
	                method: this.method,
	                responseType: this.type,
	                beforeSend: (env) => {
	                  const { xhr } = env;
	                  xhr.upload && on(xhr.upload, 'progress', this.progress);
	                  for (const type of ['loadStart', 'load', 'loadEnd', 'abort']) {
	                    on(xhr, type.toLowerCase(), this[type]);
	                  }

	                  return this.beforeSend(env);
	                } });


	              this.complete(xhr);

	              if (chunks.length) {
	                await upload(chunks.shift());
	              } else {
	                this.completeAll(xhr);
	              }
	            } catch (e) {
	              this.error(e);
	            }
	          };

	          await upload(chunks.shift());
	        } } };



	    function match(pattern, path) {
	      return path.match(
	      new RegExp("^" +
	      pattern.
	      replace(/\//g, '\\/').
	      replace(/\*\*/g, '(\\/[^\\/]+)*').
	      replace(/\*/g, '[^\\/]+').
	      replace(/((?!\\))\?/g, '$1.') + "$",
	      'i'));


	    }

	    function chunk(files, size) {
	      const chunks = [];
	      for (let i = 0; i < files.length; i += size) {
	        chunks.push(files.slice(i, i + size));
	      }
	      return chunks;
	    }

	    function stop(e) {
	      e.preventDefault();
	      e.stopPropagation();
	    }

	    var components = /*#__PURE__*/Object.freeze({
	        __proto__: null,
	        Countdown: countdown,
	        Filter: filter,
	        Lightbox: lightbox,
	        LightboxPanel: LightboxPanel,
	        Notification: notification,
	        Parallax: parallax,
	        Slider: slider,
	        SliderParallax: sliderParallax,
	        Slideshow: slideshow,
	        SlideshowParallax: sliderParallax,
	        Sortable: sortable,
	        Tooltip: tooltip,
	        Upload: upload
	    });

	    each(components, (component, name) => UIkit.component(name, component));

	    return UIkit;

	}));
	});

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get() {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);

	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(arguments.length < 3 ? target : receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get.apply(this, arguments);
	}

	function set(target, property, value, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.set) {
	    set = Reflect.set;
	  } else {
	    set = function set(target, property, value, receiver) {
	      var base = _superPropBase(target, property);

	      var desc;

	      if (base) {
	        desc = Object.getOwnPropertyDescriptor(base, property);

	        if (desc.set) {
	          desc.set.call(receiver, value);
	          return true;
	        } else if (!desc.writable) {
	          return false;
	        }
	      }

	      desc = Object.getOwnPropertyDescriptor(receiver, property);

	      if (desc) {
	        if (!desc.writable) {
	          return false;
	        }

	        desc.value = value;
	        Object.defineProperty(receiver, property, desc);
	      } else {
	        _defineProperty(receiver, property, value);
	      }

	      return true;
	    };
	  }

	  return set(target, property, value, receiver);
	}

	function _set(target, property, value, receiver, isStrict) {
	  var s = set(target, property, value, receiver || target);

	  if (!s && isStrict) {
	    throw new Error('failed to set property');
	  }

	  return value;
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	/**
	  Provides details of changing model value
	  @param {Object} [details]
	  @param {string} [details.inserted] - Inserted symbols
	  @param {boolean} [details.skip] - Can skip chars
	  @param {number} [details.removeCount] - Removed symbols count
	  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
	*/
	var ChangeDetails = /*#__PURE__*/function () {
	  /** Inserted symbols */

	  /** Can skip chars */

	  /** Additional offset if any changes occurred before tail */

	  /** Raw inserted is used by dynamic mask */
	  function ChangeDetails(details) {
	    _classCallCheck(this, ChangeDetails);

	    Object.assign(this, {
	      inserted: '',
	      rawInserted: '',
	      skip: false,
	      tailShift: 0
	    }, details);
	  }
	  /**
	    Aggregate changes
	    @returns {ChangeDetails} `this`
	  */


	  _createClass(ChangeDetails, [{
	    key: "aggregate",
	    value: function aggregate(details) {
	      this.rawInserted += details.rawInserted;
	      this.skip = this.skip || details.skip;
	      this.inserted += details.inserted;
	      this.tailShift += details.tailShift;
	      return this;
	    }
	    /** Total offset considering all changes */

	  }, {
	    key: "offset",
	    get: function get() {
	      return this.tailShift + this.inserted.length;
	    }
	  }]);

	  return ChangeDetails;
	}();

	/** Checks if value is string */

	function isString(str) {
	  return typeof str === 'string' || str instanceof String;
	}
	/**
	  Direction
	  @prop {string} NONE
	  @prop {string} LEFT
	  @prop {string} FORCE_LEFT
	  @prop {string} RIGHT
	  @prop {string} FORCE_RIGHT
	*/

	var DIRECTION = {
	  NONE: 'NONE',
	  LEFT: 'LEFT',
	  FORCE_LEFT: 'FORCE_LEFT',
	  RIGHT: 'RIGHT',
	  FORCE_RIGHT: 'FORCE_RIGHT'
	};
	/** */

	function forceDirection(direction) {
	  switch (direction) {
	    case DIRECTION.LEFT:
	      return DIRECTION.FORCE_LEFT;

	    case DIRECTION.RIGHT:
	      return DIRECTION.FORCE_RIGHT;

	    default:
	      return direction;
	  }
	}
	/** Escapes regular expression control chars */

	function escapeRegExp(str) {
	  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	}
	function normalizePrepare(prep) {
	  return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
	} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

	function objectIncludes(b, a) {
	  if (a === b) return true;
	  var arrA = Array.isArray(a),
	      arrB = Array.isArray(b),
	      i;

	  if (arrA && arrB) {
	    if (a.length != b.length) return false;

	    for (i = 0; i < a.length; i++) {
	      if (!objectIncludes(a[i], b[i])) return false;
	    }

	    return true;
	  }

	  if (arrA != arrB) return false;

	  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
	    var dateA = a instanceof Date,
	        dateB = b instanceof Date;
	    if (dateA && dateB) return a.getTime() == b.getTime();
	    if (dateA != dateB) return false;
	    var regexpA = a instanceof RegExp,
	        regexpB = b instanceof RegExp;
	    if (regexpA && regexpB) return a.toString() == b.toString();
	    if (regexpA != regexpB) return false;
	    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

	    for (i = 0; i < keys.length; i++) {
	      // $FlowFixMe ... ???
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
	    }

	    for (i = 0; i < keys.length; i++) {
	      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
	    }

	    return true;
	  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
	    return a.toString() === b.toString();
	  }

	  return false;
	}

	/** Provides details of changing input */

	var ActionDetails = /*#__PURE__*/function () {
	  /** Current input value */

	  /** Current cursor position */

	  /** Old input value */

	  /** Old selection */
	  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
	    _classCallCheck(this, ActionDetails);

	    this.value = value;
	    this.cursorPos = cursorPos;
	    this.oldValue = oldValue;
	    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

	    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
	      --this.oldSelection.start;
	    }
	  }
	  /**
	    Start changing position
	    @readonly
	  */


	  _createClass(ActionDetails, [{
	    key: "startChangePos",
	    get: function get() {
	      return Math.min(this.cursorPos, this.oldSelection.start);
	    }
	    /**
	      Inserted symbols count
	      @readonly
	    */

	  }, {
	    key: "insertedCount",
	    get: function get() {
	      return this.cursorPos - this.startChangePos;
	    }
	    /**
	      Inserted symbols
	      @readonly
	    */

	  }, {
	    key: "inserted",
	    get: function get() {
	      return this.value.substr(this.startChangePos, this.insertedCount);
	    }
	    /**
	      Removed symbols count
	      @readonly
	    */

	  }, {
	    key: "removedCount",
	    get: function get() {
	      // Math.max for opposite operation
	      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
	      this.oldValue.length - this.value.length, 0);
	    }
	    /**
	      Removed symbols
	      @readonly
	    */

	  }, {
	    key: "removed",
	    get: function get() {
	      return this.oldValue.substr(this.startChangePos, this.removedCount);
	    }
	    /**
	      Unchanged head symbols
	      @readonly
	    */

	  }, {
	    key: "head",
	    get: function get() {
	      return this.value.substring(0, this.startChangePos);
	    }
	    /**
	      Unchanged tail symbols
	      @readonly
	    */

	  }, {
	    key: "tail",
	    get: function get() {
	      return this.value.substring(this.startChangePos + this.insertedCount);
	    }
	    /**
	      Remove direction
	      @readonly
	    */

	  }, {
	    key: "removeDirection",
	    get: function get() {
	      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right

	      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
	      this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
	    }
	  }]);

	  return ActionDetails;
	}();

	/** Provides details of continuous extracted tail */
	var ContinuousTailDetails = /*#__PURE__*/function () {
	  /** Tail value as string */

	  /** Tail start position */

	  /** Start position */
	  function ContinuousTailDetails() {
	    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var stop = arguments.length > 2 ? arguments[2] : undefined;

	    _classCallCheck(this, ContinuousTailDetails);

	    this.value = value;
	    this.from = from;
	    this.stop = stop;
	  }

	  _createClass(ContinuousTailDetails, [{
	    key: "toString",
	    value: function toString() {
	      return this.value;
	    }
	  }, {
	    key: "extend",
	    value: function extend(tail) {
	      this.value += String(tail);
	    }
	  }, {
	    key: "appendTo",
	    value: function appendTo(masked) {
	      return masked.append(this.toString(), {
	        tail: true
	      }).aggregate(masked._appendPlaceholder());
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        value: this.value,
	        from: this.from,
	        stop: this.stop
	      };
	    },
	    set: function set(state) {
	      Object.assign(this, state);
	    }
	  }, {
	    key: "unshift",
	    value: function unshift(beforePos) {
	      if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
	      var shiftChar = this.value[0];
	      this.value = this.value.slice(1);
	      return shiftChar;
	    }
	  }, {
	    key: "shift",
	    value: function shift() {
	      if (!this.value.length) return '';
	      var shiftChar = this.value[this.value.length - 1];
	      this.value = this.value.slice(0, -1);
	      return shiftChar;
	    }
	  }]);

	  return ContinuousTailDetails;
	}();

	/**
	 * Applies mask on element.
	 * @constructor
	 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
	 * @param {Object} opts - Custom mask options
	 * @return {InputMask}
	 */
	function IMask(el) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  // currently available only for input-like elements
	  return new IMask.InputMask(el, opts);
	}

	/** Supported mask type */

	/** Provides common masking stuff */
	var Masked = /*#__PURE__*/function () {
	  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

	  /** @type {Mask} */

	  /** */
	  // $FlowFixMe no ideas

	  /** Transforms value before mask processing */

	  /** Validates if value is acceptable */

	  /** Does additional processing in the end of editing */

	  /** Format typed value to string */

	  /** Parse strgin to get typed value */

	  /** Enable characters overwriting */

	  /** */

	  /** */
	  function Masked(opts) {
	    _classCallCheck(this, Masked);

	    this._value = '';

	    this._update(Object.assign({}, Masked.DEFAULTS, opts));

	    this.isInitialized = true;
	  }
	  /** Sets and applies new options */


	  _createClass(Masked, [{
	    key: "updateOptions",
	    value: function updateOptions(opts) {
	      if (!Object.keys(opts).length) return; // $FlowFixMe

	      this.withValueRefresh(this._update.bind(this, opts));
	    }
	    /**
	      Sets new options
	      @protected
	    */

	  }, {
	    key: "_update",
	    value: function _update(opts) {
	      Object.assign(this, opts);
	    }
	    /** Mask state */

	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        _value: this.value
	      };
	    },
	    set: function set(state) {
	      this._value = state._value;
	    }
	    /** Resets value */

	  }, {
	    key: "reset",
	    value: function reset() {
	      this._value = '';
	    }
	    /** */

	  }, {
	    key: "value",
	    get: function get() {
	      return this._value;
	    },
	    set: function set(value) {
	      this.resolve(value);
	    }
	    /** Resolve new value */

	  }, {
	    key: "resolve",
	    value: function resolve(value) {
	      this.reset();
	      this.append(value, {
	        input: true
	      }, '');
	      this.doCommit();
	      return this.value;
	    }
	    /** */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.value;
	    },
	    set: function set(value) {
	      this.reset();
	      this.append(value, {}, '');
	      this.doCommit();
	    }
	    /** */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.doParse(this.value);
	    },
	    set: function set(value) {
	      this.value = this.doFormat(value);
	    }
	    /** Value that includes raw user input */

	  }, {
	    key: "rawInputValue",
	    get: function get() {
	      return this.extractInput(0, this.value.length, {
	        raw: true
	      });
	    },
	    set: function set(value) {
	      this.reset();
	      this.append(value, {
	        raw: true
	      }, '');
	      this.doCommit();
	    }
	    /** */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return true;
	    }
	    /** */

	  }, {
	    key: "isFilled",
	    get: function get() {
	      return this.isComplete;
	    }
	    /** Finds nearest input position in direction */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos, direction) {
	      return cursorPos;
	    }
	    /** Extracts value in range considering flags */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return this.value.slice(fromPos, toPos);
	    }
	    /** Extracts tail in range */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
	    }
	    /** Appends tail */
	    // $FlowFixMe no ideas

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
	      return tail.appendTo(this);
	    }
	    /** Appends char */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      if (!ch) return new ChangeDetails();
	      this._value += ch;
	      return new ChangeDetails({
	        inserted: ch,
	        rawInserted: ch
	      });
	    }
	    /** Appends char */

	  }, {
	    key: "_appendChar",
	    value: function _appendChar(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
	      var consistentState = this.state;
	      var details;

	      var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));

	      var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

	      ch = _normalizePrepare2[0];
	      details = _normalizePrepare2[1];
	      details = details.aggregate(this._appendCharRaw(ch, flags));

	      if (details.inserted) {
	        var consistentTail;
	        var appended = this.doValidate(flags) !== false;

	        if (appended && checkTail != null) {
	          // validation ok, check tail
	          var beforeTailState = this.state;

	          if (this.overwrite === true) {
	            consistentTail = checkTail.state;
	            checkTail.unshift(this.value.length);
	          }

	          var tailDetails = this.appendTail(checkTail);
	          appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

	          if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
	            this.state = beforeTailState;
	            consistentTail = checkTail.state;
	            checkTail.shift();
	            tailDetails = this.appendTail(checkTail);
	            appended = tailDetails.rawInserted === checkTail.toString();
	          } // if ok, rollback state after tail


	          if (appended && tailDetails.inserted) this.state = beforeTailState;
	        } // revert all if something went wrong


	        if (!appended) {
	          details = new ChangeDetails();
	          this.state = consistentState;
	          if (checkTail && consistentTail) checkTail.state = consistentTail;
	        }
	      }

	      return details;
	    }
	    /** Appends optional placeholder at end */

	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      return new ChangeDetails();
	    }
	    /** Appends optional eager placeholder at end */

	  }, {
	    key: "_appendEager",
	    value: function _appendEager() {
	      return new ChangeDetails();
	    }
	    /** Appends symbols considering flags */
	    // $FlowFixMe no ideas

	  }, {
	    key: "append",
	    value: function append(str, flags, tail) {
	      if (!isString(str)) throw new Error('value should be string');
	      var details = new ChangeDetails();
	      var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
	      if (flags && flags.tail) flags._beforeTailState = this.state;

	      for (var ci = 0; ci < str.length; ++ci) {
	        details.aggregate(this._appendChar(str[ci], flags, checkTail));
	      } // append tail but aggregate only tailShift


	      if (checkTail != null) {
	        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
	        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
	        // this._resetBeforeTailState();
	      }

	      if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
	        details.aggregate(this._appendEager());
	      }

	      return details;
	    }
	    /** */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
	      return new ChangeDetails();
	    }
	    /** Calls function and reapplies current value */

	  }, {
	    key: "withValueRefresh",
	    value: function withValueRefresh(fn) {
	      if (this._refreshing || !this.isInitialized) return fn();
	      this._refreshing = true;
	      var rawInput = this.rawInputValue;
	      var value = this.value;
	      var ret = fn();
	      this.rawInputValue = rawInput; // append lost trailing chars at end

	      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
	        this.append(value.slice(this.value.length), {}, '');
	      }

	      delete this._refreshing;
	      return ret;
	    }
	    /** */

	  }, {
	    key: "runIsolated",
	    value: function runIsolated(fn) {
	      if (this._isolated || !this.isInitialized) return fn(this);
	      this._isolated = true;
	      var state = this.state;
	      var ret = fn(this);
	      this.state = state;
	      delete this._isolated;
	      return ret;
	    }
	    /**
	      Prepares string before mask processing
	      @protected
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.prepare ? this.prepare(str, this, flags) : str;
	    }
	    /**
	      Validates if value is acceptable
	      @protected
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate(flags) {
	      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
	    }
	    /**
	      Does additional processing in the end of editing
	      @protected
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.commit) this.commit(this.value, this);
	    }
	    /** */

	  }, {
	    key: "doFormat",
	    value: function doFormat(value) {
	      return this.format ? this.format(value, this) : value;
	    }
	    /** */

	  }, {
	    key: "doParse",
	    value: function doParse(str) {
	      return this.parse ? this.parse(str, this) : str;
	    }
	    /** */

	  }, {
	    key: "splice",
	    value: function splice(start, deleteCount, inserted, removeDirection) {
	      var tailPos = start + deleteCount;
	      var tail = this.extractTail(tailPos);
	      var oldRawValue;

	      if (this.eager) {
	        removeDirection = forceDirection(removeDirection);
	        oldRawValue = this.extractInput(0, tailPos, {
	          raw: true
	        });
	      }

	      var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
	      var details = new ChangeDetails({
	        tailShift: startChangePos - start // adjust tailShift if start was aligned

	      }).aggregate(this.remove(startChangePos));

	      if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
	        if (removeDirection === DIRECTION.FORCE_LEFT) {
	          var valLength;

	          while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
	            details.aggregate(new ChangeDetails({
	              tailShift: -1
	            })).aggregate(this.remove(valLength - 1));
	          }
	        } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
	          tail.unshift();
	        }
	      }

	      return details.aggregate(this.append(inserted, {
	        input: true
	      }, tail));
	    }
	  }, {
	    key: "maskEquals",
	    value: function maskEquals(mask) {
	      return this.mask === mask;
	    }
	  }]);

	  return Masked;
	}();
	Masked.DEFAULTS = {
	  format: function format(v) {
	    return v;
	  },
	  parse: function parse(v) {
	    return v;
	  }
	};
	IMask.Masked = Masked;

	/** Get Masked class by mask type */

	function maskedClass(mask) {
	  if (mask == null) {
	    throw new Error('mask property should be defined');
	  } // $FlowFixMe


	  if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

	  if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

	  if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

	  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

	  if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

	  if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

	  if (mask instanceof IMask.Masked) return mask.constructor; // $FlowFixMe

	  if (mask instanceof Function) return IMask.MaskedFunction;
	  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
	  // $FlowFixMe

	  return IMask.Masked;
	}
	/** Creates new {@link Masked} depending on mask type */

	function createMask(opts) {
	  // $FlowFixMe
	  if (IMask.Masked && opts instanceof IMask.Masked) return opts;
	  opts = Object.assign({}, opts);
	  var mask = opts.mask; // $FlowFixMe

	  if (IMask.Masked && mask instanceof IMask.Masked) return mask;
	  var MaskedClass = maskedClass(mask);
	  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
	  return new MaskedClass(opts);
	}
	IMask.createMask = createMask;

	var _excluded$4 = ["mask"];
	var DEFAULT_INPUT_DEFINITIONS = {
	  '0': /\d/,
	  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	  // http://stackoverflow.com/a/22075070
	  '*': /./
	};
	/** */

	var PatternInputDefinition = /*#__PURE__*/function () {
	  /** */

	  /** */

	  /** */

	  /** */

	  /** */

	  /** */

	  /** */
	  function PatternInputDefinition(opts) {
	    _classCallCheck(this, PatternInputDefinition);

	    var mask = opts.mask,
	        blockOpts = _objectWithoutProperties(opts, _excluded$4);

	    this.masked = createMask({
	      mask: mask
	    });
	    Object.assign(this, blockOpts);
	  }

	  _createClass(PatternInputDefinition, [{
	    key: "reset",
	    value: function reset() {
	      this.isFilled = false;
	      this.masked.reset();
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      if (fromPos === 0 && toPos >= 1) {
	        this.isFilled = false;
	        return this.masked.remove(fromPos, toPos);
	      }

	      return new ChangeDetails();
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.masked.unmaskedValue;
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return Boolean(this.masked.value) || this.isOptional;
	    }
	  }, {
	    key: "_appendChar",
	    value: function _appendChar(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (this.isFilled) return new ChangeDetails();
	      var state = this.masked.state; // simulate input

	      var details = this.masked._appendChar(ch, flags);

	      if (details.inserted && this.doValidate(flags) === false) {
	        details.inserted = details.rawInserted = '';
	        this.masked.state = state;
	      }

	      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
	        details.inserted = this.placeholderChar;
	      }

	      details.skip = !details.inserted && !this.isOptional;
	      this.isFilled = Boolean(details.inserted);
	      return details;
	    }
	  }, {
	    key: "append",
	    value: function append() {
	      var _this$masked;

	      // TODO probably should be done via _appendChar
	      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = new ChangeDetails();
	      if (this.isFilled || this.isOptional) return details;
	      this.isFilled = true;
	      details.inserted = this.placeholderChar;
	      return details;
	    }
	  }, {
	    key: "_appendEager",
	    value: function _appendEager() {
	      return new ChangeDetails();
	    }
	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this$masked2;

	      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
	    }
	  }, {
	    key: "appendTail",
	    value: function appendTail() {
	      var _this$masked3;

	      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
	    }
	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 ? arguments[2] : undefined;
	      return this.masked.extractInput(fromPos, toPos, flags);
	    }
	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      var minPos = 0;
	      var maxPos = this.value.length;
	      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

	      switch (direction) {
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          return this.isComplete ? boundPos : minPos;

	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	          return this.isComplete ? boundPos : maxPos;

	        case DIRECTION.NONE:
	        default:
	          return boundPos;
	      }
	    }
	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _this$masked4, _this$parent;

	      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
	    }
	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      this.masked.doCommit();
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        masked: this.masked.state,
	        isFilled: this.isFilled
	      };
	    },
	    set: function set(state) {
	      this.masked.state = state.masked;
	      this.isFilled = state.isFilled;
	    }
	  }]);

	  return PatternInputDefinition;
	}();

	var PatternFixedDefinition = /*#__PURE__*/function () {
	  /** */

	  /** */

	  /** */

	  /** */

	  /** */

	  /** */
	  function PatternFixedDefinition(opts) {
	    _classCallCheck(this, PatternFixedDefinition);

	    Object.assign(this, opts);
	    this._value = '';
	    this.isFixed = true;
	  }

	  _createClass(PatternFixedDefinition, [{
	    key: "value",
	    get: function get() {
	      return this._value;
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.isUnmasking ? this.value : '';
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this._isRawInput = false;
	      this._value = '';
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
	      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
	      if (!this._value) this._isRawInput = false;
	      return new ChangeDetails();
	    }
	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      var minPos = 0;
	      var maxPos = this._value.length;

	      switch (direction) {
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          return minPos;

	        case DIRECTION.NONE:
	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	        default:
	          return maxPos;
	      }
	    }
	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
	      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: "isFilled",
	    get: function get() {
	      return Boolean(this._value);
	    }
	  }, {
	    key: "_appendChar",
	    value: function _appendChar(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var details = new ChangeDetails();
	      if (this._value) return details;
	      var appended = this.char === ch;
	      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
	      if (isResolved) details.rawInserted = this.char;
	      this._value = details.inserted = this.char;
	      this._isRawInput = isResolved && (flags.raw || flags.input);
	      return details;
	    }
	  }, {
	    key: "_appendEager",
	    value: function _appendEager() {
	      return this._appendChar(this.char);
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = new ChangeDetails();
	      if (this._value) return details;
	      this._value = details.inserted = this.char;
	      return details;
	    }
	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return new ContinuousTailDetails('');
	    } // $FlowFixMe no ideas

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
	      return tail.appendTo(this);
	    }
	  }, {
	    key: "append",
	    value: function append(str, flags, tail) {
	      var details = this._appendChar(str[0], flags);

	      if (tail != null) {
	        details.tailShift += this.appendTail(tail).tailShift;
	      }

	      return details;
	    }
	  }, {
	    key: "doCommit",
	    value: function doCommit() {}
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        _value: this._value,
	        _isRawInput: this._isRawInput
	      };
	    },
	    set: function set(state) {
	      Object.assign(this, state);
	    }
	  }]);

	  return PatternFixedDefinition;
	}();

	var _excluded$3 = ["chunks"];

	var ChunksTailDetails = /*#__PURE__*/function () {
	  /** */
	  function ChunksTailDetails() {
	    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	    _classCallCheck(this, ChunksTailDetails);

	    this.chunks = chunks;
	    this.from = from;
	  }

	  _createClass(ChunksTailDetails, [{
	    key: "toString",
	    value: function toString() {
	      return this.chunks.map(String).join('');
	    } // $FlowFixMe no ideas

	  }, {
	    key: "extend",
	    value: function extend(tailChunk) {
	      if (!String(tailChunk)) return;
	      if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
	      var lastChunk = this.chunks[this.chunks.length - 1];
	      var extendLast = lastChunk && ( // if stops are same or tail has no stop
	      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
	      tailChunk.from === lastChunk.from + lastChunk.toString().length;

	      if (tailChunk instanceof ContinuousTailDetails) {
	        // check the ability to extend previous chunk
	        if (extendLast) {
	          // extend previous chunk
	          lastChunk.extend(tailChunk.toString());
	        } else {
	          // append new chunk
	          this.chunks.push(tailChunk);
	        }
	      } else if (tailChunk instanceof ChunksTailDetails) {
	        if (tailChunk.stop == null) {
	          // unwrap floating chunks to parent, keeping `from` pos
	          var firstTailChunk;

	          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
	            firstTailChunk = tailChunk.chunks.shift();
	            firstTailChunk.from += tailChunk.from;
	            this.extend(firstTailChunk);
	          }
	        } // if tail chunk still has value


	        if (tailChunk.toString()) {
	          // if chunks contains stops, then popup stop to container
	          tailChunk.stop = tailChunk.blockIndex;
	          this.chunks.push(tailChunk);
	        }
	      }
	    }
	  }, {
	    key: "appendTo",
	    value: function appendTo(masked) {
	      // $FlowFixMe
	      if (!(masked instanceof IMask.MaskedPattern)) {
	        var tail = new ContinuousTailDetails(this.toString());
	        return tail.appendTo(masked);
	      }

	      var details = new ChangeDetails();

	      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
	        var chunk = this.chunks[ci];

	        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

	        var stop = chunk.stop;
	        var chunkBlock = void 0;

	        if (stop != null && ( // if block not found or stop is behind lastBlock
	        !lastBlockIter || lastBlockIter.index <= stop)) {
	          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
	          masked._stops.indexOf(stop) >= 0) {
	            details.aggregate(masked._appendPlaceholder(stop));
	          }

	          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
	        }

	        if (chunkBlock) {
	          var tailDetails = chunkBlock.appendTail(chunk);
	          tailDetails.skip = false; // always ignore skip, it will be set on last

	          details.aggregate(tailDetails);
	          masked._value += tailDetails.inserted; // get not inserted chars

	          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
	          if (remainChars) details.aggregate(masked.append(remainChars, {
	            tail: true
	          }));
	        } else {
	          details.aggregate(masked.append(chunk.toString(), {
	            tail: true
	          }));
	        }
	      }
	      return details;
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        chunks: this.chunks.map(function (c) {
	          return c.state;
	        }),
	        from: this.from,
	        stop: this.stop,
	        blockIndex: this.blockIndex
	      };
	    },
	    set: function set(state) {
	      var chunks = state.chunks,
	          props = _objectWithoutProperties(state, _excluded$3);

	      Object.assign(this, props);
	      this.chunks = chunks.map(function (cstate) {
	        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

	        chunk.state = cstate;
	        return chunk;
	      });
	    }
	  }, {
	    key: "unshift",
	    value: function unshift(beforePos) {
	      if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
	      var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
	      var ci = 0;

	      while (ci < this.chunks.length) {
	        var chunk = this.chunks[ci];
	        var shiftChar = chunk.unshift(chunkShiftPos);

	        if (chunk.toString()) {
	          // chunk still contains value
	          // but not shifted - means no more available chars to shift
	          if (!shiftChar) break;
	          ++ci;
	        } else {
	          // clean if chunk has no value
	          this.chunks.splice(ci, 1);
	        }

	        if (shiftChar) return shiftChar;
	      }

	      return '';
	    }
	  }, {
	    key: "shift",
	    value: function shift() {
	      if (!this.chunks.length) return '';
	      var ci = this.chunks.length - 1;

	      while (0 <= ci) {
	        var chunk = this.chunks[ci];
	        var shiftChar = chunk.shift();

	        if (chunk.toString()) {
	          // chunk still contains value
	          // but not shifted - means no more available chars to shift
	          if (!shiftChar) break;
	          --ci;
	        } else {
	          // clean if chunk has no value
	          this.chunks.splice(ci, 1);
	        }

	        if (shiftChar) return shiftChar;
	      }

	      return '';
	    }
	  }]);

	  return ChunksTailDetails;
	}();

	var PatternCursor = /*#__PURE__*/function () {
	  function PatternCursor(masked, pos) {
	    _classCallCheck(this, PatternCursor);

	    this.masked = masked;
	    this._log = [];

	    var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? // first
	    {
	      index: 0,
	      offset: 0
	    } : // last
	    {
	      index: this.masked._blocks.length,
	      offset: 0
	    }),
	        offset = _ref.offset,
	        index = _ref.index;

	    this.offset = offset;
	    this.index = index;
	    this.ok = false;
	  }

	  _createClass(PatternCursor, [{
	    key: "block",
	    get: function get() {
	      return this.masked._blocks[this.index];
	    }
	  }, {
	    key: "pos",
	    get: function get() {
	      return this.masked._blockStartPos(this.index) + this.offset;
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        index: this.index,
	        offset: this.offset,
	        ok: this.ok
	      };
	    },
	    set: function set(s) {
	      Object.assign(this, s);
	    }
	  }, {
	    key: "pushState",
	    value: function pushState() {
	      this._log.push(this.state);
	    }
	  }, {
	    key: "popState",
	    value: function popState() {
	      var s = this._log.pop();

	      this.state = s;
	      return s;
	    }
	  }, {
	    key: "bindBlock",
	    value: function bindBlock() {
	      if (this.block) return;

	      if (this.index < 0) {
	        this.index = 0;
	        this.offset = 0;
	      }

	      if (this.index >= this.masked._blocks.length) {
	        this.index = this.masked._blocks.length - 1;
	        this.offset = this.block.value.length;
	      }
	    }
	  }, {
	    key: "_pushLeft",
	    value: function _pushLeft(fn) {
	      this.pushState();

	      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
	        var _this$block;

	        if (fn()) return this.ok = true;
	      }

	      return this.ok = false;
	    }
	  }, {
	    key: "_pushRight",
	    value: function _pushRight(fn) {
	      this.pushState();

	      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
	        if (fn()) return this.ok = true;
	      }

	      return this.ok = false;
	    }
	  }, {
	    key: "pushLeftBeforeFilled",
	    value: function pushLeftBeforeFilled() {
	      var _this = this;

	      return this._pushLeft(function () {
	        if (_this.block.isFixed || !_this.block.value) return;
	        _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
	        if (_this.offset !== 0) return true;
	      });
	    }
	  }, {
	    key: "pushLeftBeforeInput",
	    value: function pushLeftBeforeInput() {
	      var _this2 = this;

	      // cases:
	      // filled input: 00|
	      // optional empty input: 00[]|
	      // nested block: XX<[]>|
	      return this._pushLeft(function () {
	        if (_this2.block.isFixed) return;
	        _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
	        return true;
	      });
	    }
	  }, {
	    key: "pushLeftBeforeRequired",
	    value: function pushLeftBeforeRequired() {
	      var _this3 = this;

	      return this._pushLeft(function () {
	        if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
	        _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
	        return true;
	      });
	    }
	  }, {
	    key: "pushRightBeforeFilled",
	    value: function pushRightBeforeFilled() {
	      var _this4 = this;

	      return this._pushRight(function () {
	        if (_this4.block.isFixed || !_this4.block.value) return;
	        _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
	        if (_this4.offset !== _this4.block.value.length) return true;
	      });
	    }
	  }, {
	    key: "pushRightBeforeInput",
	    value: function pushRightBeforeInput() {
	      var _this5 = this;

	      return this._pushRight(function () {
	        if (_this5.block.isFixed) return; // const o = this.offset;

	        _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
	        // aa|X
	        // aa<X|[]>X_    - this will not work
	        // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

	        return true;
	      });
	    }
	  }, {
	    key: "pushRightBeforeRequired",
	    value: function pushRightBeforeRequired() {
	      var _this6 = this;

	      return this._pushRight(function () {
	        if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_

	        _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
	        return true;
	      });
	    }
	  }]);

	  return PatternCursor;
	}();

	/** Masking by RegExp */

	var MaskedRegExp = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedRegExp, _Masked);

	  var _super = _createSuper(MaskedRegExp);

	  function MaskedRegExp() {
	    _classCallCheck(this, MaskedRegExp);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedRegExp, [{
	    key: "_update",
	    value:
	    /**
	      @override
	      @param {Object} opts
	    */
	    function _update(opts) {
	      if (opts.mask) opts.validate = function (value) {
	        return value.search(opts.mask) >= 0;
	      };

	      _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
	    }
	  }]);

	  return MaskedRegExp;
	}(Masked);
	IMask.MaskedRegExp = MaskedRegExp;

	var _excluded$2 = ["_blocks"];

	/**
	  Pattern mask
	  @param {Object} opts
	  @param {Object} opts.blocks
	  @param {Object} opts.definitions
	  @param {string} opts.placeholderChar
	  @param {boolean} opts.lazy
	*/
	var MaskedPattern = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedPattern, _Masked);

	  var _super = _createSuper(MaskedPattern);

	  /** */

	  /** */

	  /** Single char for empty input */

	  /** Show placeholder only when needed */
	  function MaskedPattern() {
	    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, MaskedPattern);

	    // TODO type $Shape<MaskedPatternOptions>={} does not work
	    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
	    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
	  }
	  /**
	    @override
	    @param {Object} opts
	  */


	  _createClass(MaskedPattern, [{
	    key: "_update",
	    value: function _update() {
	      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

	      _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

	      this._rebuildMask();
	    }
	    /** */

	  }, {
	    key: "_rebuildMask",
	    value: function _rebuildMask() {
	      var _this = this;

	      var defs = this.definitions;
	      this._blocks = [];
	      this._stops = [];
	      this._maskedBlocks = {};
	      var pattern = this.mask;
	      if (!pattern || !defs) return;
	      var unmaskingBlock = false;
	      var optionalBlock = false;

	      for (var i = 0; i < pattern.length; ++i) {
	        if (this.blocks) {
	          var _ret = function () {
	            var p = pattern.slice(i);
	            var bNames = Object.keys(_this.blocks).filter(function (bName) {
	              return p.indexOf(bName) === 0;
	            }); // order by key length

	            bNames.sort(function (a, b) {
	              return b.length - a.length;
	            }); // use block name with max length

	            var bName = bNames[0];

	            if (bName) {
	              // $FlowFixMe no ideas
	              var maskedBlock = createMask(Object.assign({
	                parent: _this,
	                lazy: _this.lazy,
	                eager: _this.eager,
	                placeholderChar: _this.placeholderChar,
	                overwrite: _this.overwrite
	              }, _this.blocks[bName]));

	              if (maskedBlock) {
	                _this._blocks.push(maskedBlock); // store block index


	                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

	                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
	              }

	              i += bName.length - 1;
	              return "continue";
	            }
	          }();

	          if (_ret === "continue") continue;
	        }

	        var char = pattern[i];
	        var isInput = (char in defs);

	        if (char === MaskedPattern.STOP_CHAR) {
	          this._stops.push(this._blocks.length);

	          continue;
	        }

	        if (char === '{' || char === '}') {
	          unmaskingBlock = !unmaskingBlock;
	          continue;
	        }

	        if (char === '[' || char === ']') {
	          optionalBlock = !optionalBlock;
	          continue;
	        }

	        if (char === MaskedPattern.ESCAPE_CHAR) {
	          ++i;
	          char = pattern[i];
	          if (!char) break;
	          isInput = false;
	        }

	        var def = isInput ? new PatternInputDefinition({
	          parent: this,
	          lazy: this.lazy,
	          eager: this.eager,
	          placeholderChar: this.placeholderChar,
	          mask: defs[char],
	          isOptional: optionalBlock
	        }) : new PatternFixedDefinition({
	          char: char,
	          eager: this.eager,
	          isUnmasking: unmaskingBlock
	        });

	        this._blocks.push(def);
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "state",
	    get: function get() {
	      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
	        _blocks: this._blocks.map(function (b) {
	          return b.state;
	        })
	      });
	    },
	    set: function set(state) {
	      var _blocks = state._blocks,
	          maskedState = _objectWithoutProperties(state, _excluded$2);

	      this._blocks.forEach(function (b, bi) {
	        return b.state = _blocks[bi];
	      });

	      _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "reset",
	    value: function reset() {
	      _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

	      this._blocks.forEach(function (b) {
	        return b.reset();
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return this._blocks.every(function (b) {
	        return b.isComplete;
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isFilled",
	    get: function get() {
	      return this._blocks.every(function (b) {
	        return b.isFilled;
	      });
	    }
	  }, {
	    key: "isFixed",
	    get: function get() {
	      return this._blocks.every(function (b) {
	        return b.isFixed;
	      });
	    }
	  }, {
	    key: "isOptional",
	    get: function get() {
	      return this._blocks.every(function (b) {
	        return b.isOptional;
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      this._blocks.forEach(function (b) {
	        return b.doCommit();
	      });

	      _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._blocks.reduce(function (str, b) {
	        return str += b.unmaskedValue;
	      }, '');
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      // TODO return _value when not in change?
	      return this._blocks.reduce(function (str, b) {
	        return str += b.value;
	      }, '');
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendEager",
	    value: function _appendEager() {
	      var _this$_mapPosToBlock;

	      var details = new ChangeDetails();
	      var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
	      if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

	      if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

	      for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
	        var d = this._blocks[bi]._appendEager();

	        if (!d.inserted) break;
	        details.aggregate(d);
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var blockIter = this._mapPosToBlock(this.value.length);

	      var details = new ChangeDetails();
	      if (!blockIter) return details;

	      for (var bi = blockIter.index;; ++bi) {
	        var _flags$_beforeTailSta;

	        var _block = this._blocks[bi];
	        if (!_block) break;

	        var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
	          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi]
	        }));

	        var skip = blockDetails.skip;
	        details.aggregate(blockDetails);
	        if (skip || blockDetails.rawInserted) break; // go next char
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this2 = this;

	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var chunkTail = new ChunksTailDetails();
	      if (fromPos === toPos) return chunkTail;

	      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
	        var blockChunk = b.extractTail(bFromPos, bToPos);
	        blockChunk.stop = _this2._findStopBefore(bi);
	        blockChunk.from = _this2._blockStartPos(bi);
	        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
	        chunkTail.extend(blockChunk);
	      });

	      return chunkTail;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      if (fromPos === toPos) return '';
	      var input = '';

	      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
	        input += b.extractInput(fromPos, toPos, flags);
	      });

	      return input;
	    }
	  }, {
	    key: "_findStopBefore",
	    value: function _findStopBefore(blockIndex) {
	      var stopBefore;

	      for (var si = 0; si < this._stops.length; ++si) {
	        var stop = this._stops[si];
	        if (stop <= blockIndex) stopBefore = stop;else break;
	      }

	      return stopBefore;
	    }
	    /** Appends placeholder depending on laziness */

	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder(toBlockIndex) {
	      var _this3 = this;

	      var details = new ChangeDetails();
	      if (this.lazy && toBlockIndex == null) return details;

	      var startBlockIter = this._mapPosToBlock(this.value.length);

	      if (!startBlockIter) return details;
	      var startBlockIndex = startBlockIter.index;
	      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

	      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
	        if (!b.lazy || toBlockIndex != null) {
	          // $FlowFixMe `_blocks` may not be present
	          var args = b._blocks != null ? [b._blocks.length] : [];

	          var bDetails = b._appendPlaceholder.apply(b, args);

	          _this3._value += bDetails.inserted;
	          details.aggregate(bDetails);
	        }
	      });

	      return details;
	    }
	    /** Finds block in pos */

	  }, {
	    key: "_mapPosToBlock",
	    value: function _mapPosToBlock(pos) {
	      var accVal = '';

	      for (var bi = 0; bi < this._blocks.length; ++bi) {
	        var _block2 = this._blocks[bi];
	        var blockStartPos = accVal.length;
	        accVal += _block2.value;

	        if (pos <= accVal.length) {
	          return {
	            index: bi,
	            offset: pos - blockStartPos
	          };
	        }
	      }
	    }
	    /** */

	  }, {
	    key: "_blockStartPos",
	    value: function _blockStartPos(blockIndex) {
	      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
	        return pos += b.value.length;
	      }, 0);
	    }
	    /** */

	  }, {
	    key: "_forEachBlocksInRange",
	    value: function _forEachBlocksInRange(fromPos) {
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var fn = arguments.length > 2 ? arguments[2] : undefined;

	      var fromBlockIter = this._mapPosToBlock(fromPos);

	      if (fromBlockIter) {
	        var toBlockIter = this._mapPosToBlock(toPos); // process first block


	        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
	        var fromBlockStartPos = fromBlockIter.offset;
	        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
	        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

	        if (toBlockIter && !isSameBlock) {
	          // process intermediate blocks
	          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
	            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
	          } // process last block


	          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
	        }
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

	      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
	        removeDetails.aggregate(b.remove(bFromPos, bToPos));
	      });

	      return removeDetails;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      if (!this._blocks.length) return 0;
	      var cursor = new PatternCursor(this, cursorPos);

	      if (direction === DIRECTION.NONE) {
	        // -------------------------------------------------
	        // NONE should only go out from fixed to the right!
	        // -------------------------------------------------
	        if (cursor.pushRightBeforeInput()) return cursor.pos;
	        cursor.popState();
	        if (cursor.pushLeftBeforeInput()) return cursor.pos;
	        return this.value.length;
	      } // FORCE is only about a|* otherwise is 0


	      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
	        // try to break fast when *|a
	        if (direction === DIRECTION.LEFT) {
	          cursor.pushRightBeforeFilled();
	          if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
	          cursor.popState();
	        } // forward flow


	        cursor.pushLeftBeforeInput();
	        cursor.pushLeftBeforeRequired();
	        cursor.pushLeftBeforeFilled(); // backward flow

	        if (direction === DIRECTION.LEFT) {
	          cursor.pushRightBeforeInput();
	          cursor.pushRightBeforeRequired();
	          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
	          cursor.popState();
	          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
	          cursor.popState();
	        }

	        if (cursor.ok) return cursor.pos;
	        if (direction === DIRECTION.FORCE_LEFT) return 0;
	        cursor.popState();
	        if (cursor.ok) return cursor.pos;
	        cursor.popState();
	        if (cursor.ok) return cursor.pos; // cursor.popState();
	        // if (
	        //   cursor.pushRightBeforeInput() &&
	        //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
	        //   (!this.lazy || this.extractInput())
	        // ) return cursor.pos;

	        return 0;
	      }

	      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
	        // forward flow
	        cursor.pushRightBeforeInput();
	        cursor.pushRightBeforeRequired();
	        if (cursor.pushRightBeforeFilled()) return cursor.pos;
	        if (direction === DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

	        cursor.popState();
	        if (cursor.ok) return cursor.pos;
	        cursor.popState();
	        if (cursor.ok) return cursor.pos;
	        return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
	      }

	      return cursorPos;
	    }
	    /** Get block by name */

	  }, {
	    key: "maskedBlock",
	    value: function maskedBlock(name) {
	      return this.maskedBlocks(name)[0];
	    }
	    /** Get all blocks by name */

	  }, {
	    key: "maskedBlocks",
	    value: function maskedBlocks(name) {
	      var _this4 = this;

	      var indices = this._maskedBlocks[name];
	      if (!indices) return [];
	      return indices.map(function (gi) {
	        return _this4._blocks[gi];
	      });
	    }
	  }]);

	  return MaskedPattern;
	}(Masked);
	MaskedPattern.DEFAULTS = {
	  lazy: true,
	  placeholderChar: '_'
	};
	MaskedPattern.STOP_CHAR = '`';
	MaskedPattern.ESCAPE_CHAR = '\\';
	MaskedPattern.InputDefinition = PatternInputDefinition;
	MaskedPattern.FixedDefinition = PatternFixedDefinition;
	IMask.MaskedPattern = MaskedPattern;

	/** Pattern which accepts ranges */

	var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
	  _inherits(MaskedRange, _MaskedPattern);

	  var _super = _createSuper(MaskedRange);

	  function MaskedRange() {
	    _classCallCheck(this, MaskedRange);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedRange, [{
	    key: "_matchFrom",
	    get:
	    /**
	      Optionally sets max length of pattern.
	      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
	    */

	    /** Min bound */

	    /** Max bound */

	    /** */
	    function get() {
	      return this.maxLength - String(this.from).length;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_update",
	    value: function _update(opts) {
	      // TODO type
	      opts = Object.assign({
	        to: this.to || 0,
	        from: this.from || 0,
	        maxLength: this.maxLength || 0
	      }, opts);
	      var maxLength = String(opts.to).length;
	      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
	      opts.maxLength = maxLength;
	      var fromStr = String(opts.from).padStart(maxLength, '0');
	      var toStr = String(opts.to).padStart(maxLength, '0');
	      var sameCharsCount = 0;

	      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
	        ++sameCharsCount;
	      }

	      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

	      _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
	    }
	  }, {
	    key: "boundaries",
	    value: function boundaries(str) {
	      var minstr = '';
	      var maxstr = '';

	      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
	          _ref2 = _slicedToArray(_ref, 3),
	          placeholder = _ref2[1],
	          num = _ref2[2];

	      if (num) {
	        minstr = '0'.repeat(placeholder.length) + num;
	        maxstr = '9'.repeat(placeholder.length) + num;
	      }

	      minstr = minstr.padEnd(this.maxLength, '0');
	      maxstr = maxstr.padEnd(this.maxLength, '9');
	      return [minstr, maxstr];
	    } // TODO str is a single char everytime

	    /**
	      @override
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var details;

	      var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

	      var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

	      ch = _normalizePrepare2[0];
	      details = _normalizePrepare2[1];
	      if (!this.autofix || !ch) return ch;
	      var fromStr = String(this.from).padStart(this.maxLength, '0');
	      var toStr = String(this.to).padStart(this.maxLength, '0');
	      var nextVal = this.value + ch;
	      if (nextVal.length > this.maxLength) return '';

	      var _this$boundaries = this.boundaries(nextVal),
	          _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
	          minstr = _this$boundaries2[0],
	          maxstr = _this$boundaries2[1];

	      if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

	      if (Number(minstr) > this.to) {
	        if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
	          return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
	        }

	        return toStr[nextVal.length - 1];
	      }

	      return ch;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2;

	      var str = this.value;
	      var firstNonZero = str.search(/[^0]/);
	      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

	      var _this$boundaries3 = this.boundaries(str),
	          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
	          minstr = _this$boundaries4[0],
	          maxstr = _this$boundaries4[1];

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
	    }
	  }]);

	  return MaskedRange;
	}(MaskedPattern);
	IMask.MaskedRange = MaskedRange;

	/** Date mask */

	var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
	  _inherits(MaskedDate, _MaskedPattern);

	  var _super = _createSuper(MaskedDate);

	  /** Pattern mask for date according to {@link MaskedDate#format} */

	  /** Start date */

	  /** End date */

	  /** */

	  /**
	    @param {Object} opts
	  */
	  function MaskedDate(opts) {
	    _classCallCheck(this, MaskedDate);

	    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedDate, [{
	    key: "_update",
	    value: function _update(opts) {
	      if (opts.mask === Date) delete opts.mask;
	      if (opts.pattern) opts.mask = opts.pattern;
	      var blocks = opts.blocks;
	      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

	      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
	      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

	      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
	        opts.blocks.m.from = opts.min.getMonth() + 1;
	        opts.blocks.m.to = opts.max.getMonth() + 1;

	        if (opts.blocks.m.from === opts.blocks.m.to) {
	          opts.blocks.d.from = opts.min.getDate();
	          opts.blocks.d.to = opts.max.getDate();
	        }
	      }

	      Object.assign(opts.blocks, this.blocks, blocks); // add autofix

	      Object.keys(opts.blocks).forEach(function (bk) {
	        var b = opts.blocks[bk];
	        if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
	      });

	      _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2;

	      var date = this.date;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
	    }
	    /** Checks if date is exists */

	  }, {
	    key: "isDateExist",
	    value: function isDateExist(str) {
	      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
	    }
	    /** Parsed Date */

	  }, {
	    key: "date",
	    get: function get() {
	      return this.typedValue;
	    },
	    set: function set(date) {
	      this.typedValue = date;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "maskEquals",
	    value: function maskEquals(mask) {
	      return mask === Date || _get(_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, mask);
	    }
	  }]);

	  return MaskedDate;
	}(MaskedPattern);
	MaskedDate.DEFAULTS = {
	  pattern: 'd{.}`m{.}`Y',
	  format: function format(date) {
	    if (!date) return '';
	    var day = String(date.getDate()).padStart(2, '0');
	    var month = String(date.getMonth() + 1).padStart(2, '0');
	    var year = date.getFullYear();
	    return [day, month, year].join('.');
	  },
	  parse: function parse(str) {
	    var _str$split = str.split('.'),
	        _str$split2 = _slicedToArray(_str$split, 3),
	        day = _str$split2[0],
	        month = _str$split2[1],
	        year = _str$split2[2];

	    return new Date(year, month - 1, day);
	  }
	};

	MaskedDate.GET_DEFAULT_BLOCKS = function () {
	  return {
	    d: {
	      mask: MaskedRange,
	      from: 1,
	      to: 31,
	      maxLength: 2
	    },
	    m: {
	      mask: MaskedRange,
	      from: 1,
	      to: 12,
	      maxLength: 2
	    },
	    Y: {
	      mask: MaskedRange,
	      from: 1900,
	      to: 9999
	    }
	  };
	};

	IMask.MaskedDate = MaskedDate;

	/**
	  Generic element API to use with mask
	  @interface
	*/
	var MaskElement = /*#__PURE__*/function () {
	  function MaskElement() {
	    _classCallCheck(this, MaskElement);
	  }

	  _createClass(MaskElement, [{
	    key: "selectionStart",
	    get:
	    /** */

	    /** */

	    /** */

	    /** Safely returns selection start */
	    function get() {
	      var start;

	      try {
	        start = this._unsafeSelectionStart;
	      } catch (e) {}

	      return start != null ? start : this.value.length;
	    }
	    /** Safely returns selection end */

	  }, {
	    key: "selectionEnd",
	    get: function get() {
	      var end;

	      try {
	        end = this._unsafeSelectionEnd;
	      } catch (e) {}

	      return end != null ? end : this.value.length;
	    }
	    /** Safely sets element selection */

	  }, {
	    key: "select",
	    value: function select(start, end) {
	      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

	      try {
	        this._unsafeSelect(start, end);
	      } catch (e) {}
	    }
	    /** Should be overriden in subclasses */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {}
	    /** Should be overriden in subclasses */

	  }, {
	    key: "isActive",
	    get: function get() {
	      return false;
	    }
	    /** Should be overriden in subclasses */

	  }, {
	    key: "bindEvents",
	    value: function bindEvents(handlers) {}
	    /** Should be overriden in subclasses */

	  }, {
	    key: "unbindEvents",
	    value: function unbindEvents() {}
	  }]);

	  return MaskElement;
	}();
	IMask.MaskElement = MaskElement;

	/** Bridge between HTMLElement and {@link Masked} */

	var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
	  _inherits(HTMLMaskElement, _MaskElement);

	  var _super = _createSuper(HTMLMaskElement);

	  /** Mapping between HTMLElement events and mask internal events */

	  /** HTMLElement to use mask on */

	  /**
	    @param {HTMLInputElement|HTMLTextAreaElement} input
	  */
	  function HTMLMaskElement(input) {
	    var _this;

	    _classCallCheck(this, HTMLMaskElement);

	    _this = _super.call(this);
	    _this.input = input;
	    _this._handlers = {};
	    return _this;
	  }
	  /** */
	  // $FlowFixMe https://github.com/facebook/flow/issues/2839


	  _createClass(HTMLMaskElement, [{
	    key: "rootElement",
	    get: function get() {
	      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

	      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
	    }
	    /**
	      Is element in focus
	      @readonly
	    */

	  }, {
	    key: "isActive",
	    get: function get() {
	      //$FlowFixMe
	      return this.input === this.rootElement.activeElement;
	    }
	    /**
	      Returns HTMLElement selection start
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionStart",
	    get: function get() {
	      return this.input.selectionStart;
	    }
	    /**
	      Returns HTMLElement selection end
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionEnd",
	    get: function get() {
	      return this.input.selectionEnd;
	    }
	    /**
	      Sets HTMLElement selection
	      @override
	    */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {
	      this.input.setSelectionRange(start, end);
	    }
	    /**
	      HTMLElement value
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      return this.input.value;
	    },
	    set: function set(value) {
	      this.input.value = value;
	    }
	    /**
	      Binds HTMLElement events to mask internal events
	      @override
	    */

	  }, {
	    key: "bindEvents",
	    value: function bindEvents(handlers) {
	      var _this2 = this;

	      Object.keys(handlers).forEach(function (event) {
	        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
	      });
	    }
	    /**
	      Unbinds HTMLElement events to mask internal events
	      @override
	    */

	  }, {
	    key: "unbindEvents",
	    value: function unbindEvents() {
	      var _this3 = this;

	      Object.keys(this._handlers).forEach(function (event) {
	        return _this3._toggleEventHandler(event);
	      });
	    }
	    /** */

	  }, {
	    key: "_toggleEventHandler",
	    value: function _toggleEventHandler(event, handler) {
	      if (this._handlers[event]) {
	        this.input.removeEventListener(event, this._handlers[event]);
	        delete this._handlers[event];
	      }

	      if (handler) {
	        this.input.addEventListener(event, handler);
	        this._handlers[event] = handler;
	      }
	    }
	  }]);

	  return HTMLMaskElement;
	}(MaskElement);
	HTMLMaskElement.EVENTS_MAP = {
	  selectionChange: 'keydown',
	  input: 'input',
	  drop: 'drop',
	  click: 'click',
	  focus: 'focus',
	  commit: 'blur'
	};
	IMask.HTMLMaskElement = HTMLMaskElement;

	var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
	  _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

	  var _super = _createSuper(HTMLContenteditableMaskElement);

	  function HTMLContenteditableMaskElement() {
	    _classCallCheck(this, HTMLContenteditableMaskElement);

	    return _super.apply(this, arguments);
	  }

	  _createClass(HTMLContenteditableMaskElement, [{
	    key: "_unsafeSelectionStart",
	    get:
	    /**
	      Returns HTMLElement selection start
	      @override
	    */
	    function get() {
	      var root = this.rootElement;
	      var selection = root.getSelection && root.getSelection();
	      var anchorOffset = selection && selection.anchorOffset;
	      var focusOffset = selection && selection.focusOffset;

	      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
	        return anchorOffset;
	      }

	      return focusOffset;
	    }
	    /**
	      Returns HTMLElement selection end
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionEnd",
	    get: function get() {
	      var root = this.rootElement;
	      var selection = root.getSelection && root.getSelection();
	      var anchorOffset = selection && selection.anchorOffset;
	      var focusOffset = selection && selection.focusOffset;

	      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
	        return anchorOffset;
	      }

	      return focusOffset;
	    }
	    /**
	      Sets HTMLElement selection
	      @override
	    */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {
	      if (!this.rootElement.createRange) return;
	      var range = this.rootElement.createRange();
	      range.setStart(this.input.firstChild || this.input, start);
	      range.setEnd(this.input.lastChild || this.input, end);
	      var root = this.rootElement;
	      var selection = root.getSelection && root.getSelection();

	      if (selection) {
	        selection.removeAllRanges();
	        selection.addRange(range);
	      }
	    }
	    /**
	      HTMLElement value
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      // $FlowFixMe
	      return this.input.textContent;
	    },
	    set: function set(value) {
	      this.input.textContent = value;
	    }
	  }]);

	  return HTMLContenteditableMaskElement;
	}(HTMLMaskElement);
	IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

	var _excluded$1 = ["mask"];
	/** Listens to element events and controls changes between element and {@link Masked} */

	var InputMask = /*#__PURE__*/function () {
	  /**
	    View element
	    @readonly
	  */

	  /**
	    Internal {@link Masked} model
	    @readonly
	  */

	  /**
	    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
	    @param {Object} opts
	  */
	  function InputMask(el, opts) {
	    _classCallCheck(this, InputMask);

	    this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
	    this.masked = createMask(opts);
	    this._listeners = {};
	    this._value = '';
	    this._unmaskedValue = '';
	    this._saveSelection = this._saveSelection.bind(this);
	    this._onInput = this._onInput.bind(this);
	    this._onChange = this._onChange.bind(this);
	    this._onDrop = this._onDrop.bind(this);
	    this._onFocus = this._onFocus.bind(this);
	    this._onClick = this._onClick.bind(this);
	    this.alignCursor = this.alignCursor.bind(this);
	    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

	    this._bindEvents(); // refresh


	    this.updateValue();

	    this._onChange();
	  }
	  /** Read or update mask */


	  _createClass(InputMask, [{
	    key: "mask",
	    get: function get() {
	      return this.masked.mask;
	    },
	    set: function set(mask) {
	      if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

	      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
	        this.masked.updateOptions({
	          mask: mask
	        });
	        return;
	      }

	      var masked = createMask({
	        mask: mask
	      });
	      masked.unmaskedValue = this.masked.unmaskedValue;
	      this.masked = masked;
	    }
	    /** Raw value */

	  }, {
	    key: "maskEquals",
	    value: function maskEquals(mask) {
	      var _this$masked;

	      return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this._value;
	    },
	    set: function set(str) {
	      this.masked.value = str;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /** Unmasked value */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._unmaskedValue;
	    },
	    set: function set(str) {
	      this.masked.unmaskedValue = str;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /** Typed unmasked value */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.masked.typedValue;
	    },
	    set: function set(val) {
	      this.masked.typedValue = val;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /**
	      Starts listening to element events
	      @protected
	    */

	  }, {
	    key: "_bindEvents",
	    value: function _bindEvents() {
	      this.el.bindEvents({
	        selectionChange: this._saveSelection,
	        input: this._onInput,
	        drop: this._onDrop,
	        click: this._onClick,
	        focus: this._onFocus,
	        commit: this._onChange
	      });
	    }
	    /**
	      Stops listening to element events
	      @protected
	     */

	  }, {
	    key: "_unbindEvents",
	    value: function _unbindEvents() {
	      if (this.el) this.el.unbindEvents();
	    }
	    /**
	      Fires custom event
	      @protected
	     */

	  }, {
	    key: "_fireEvent",
	    value: function _fireEvent(ev) {
	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var listeners = this._listeners[ev];
	      if (!listeners) return;
	      listeners.forEach(function (l) {
	        return l.apply(void 0, args);
	      });
	    }
	    /**
	      Current selection start
	      @readonly
	    */

	  }, {
	    key: "selectionStart",
	    get: function get() {
	      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
	    }
	    /** Current cursor position */

	  }, {
	    key: "cursorPos",
	    get: function get() {
	      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
	    },
	    set: function set(pos) {
	      if (!this.el || !this.el.isActive) return;
	      this.el.select(pos, pos);

	      this._saveSelection();
	    }
	    /**
	      Stores current selection
	      @protected
	    */

	  }, {
	    key: "_saveSelection",
	    value: function
	      /* ev */
	    _saveSelection() {
	      if (this.value !== this.el.value) {
	        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
	      }

	      this._selection = {
	        start: this.selectionStart,
	        end: this.cursorPos
	      };
	    }
	    /** Syncronizes model value from view */

	  }, {
	    key: "updateValue",
	    value: function updateValue() {
	      this.masked.value = this.el.value;
	      this._value = this.masked.value;
	    }
	    /** Syncronizes view from model value, fires change events */

	  }, {
	    key: "updateControl",
	    value: function updateControl() {
	      var newUnmaskedValue = this.masked.unmaskedValue;
	      var newValue = this.masked.value;
	      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
	      this._unmaskedValue = newUnmaskedValue;
	      this._value = newValue;
	      if (this.el.value !== newValue) this.el.value = newValue;
	      if (isChanged) this._fireChangeEvents();
	    }
	    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

	  }, {
	    key: "updateOptions",
	    value: function updateOptions(opts) {
	      var mask = opts.mask,
	          restOpts = _objectWithoutProperties(opts, _excluded$1);

	      var updateMask = !this.maskEquals(mask);
	      var updateOpts = !objectIncludes(this.masked, restOpts);
	      if (updateMask) this.mask = mask;
	      if (updateOpts) this.masked.updateOptions(restOpts);
	      if (updateMask || updateOpts) this.updateControl();
	    }
	    /** Updates cursor */

	  }, {
	    key: "updateCursor",
	    value: function updateCursor(cursorPos) {
	      if (cursorPos == null) return;
	      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

	      this._delayUpdateCursor(cursorPos);
	    }
	    /**
	      Delays cursor update to support mobile browsers
	      @private
	    */

	  }, {
	    key: "_delayUpdateCursor",
	    value: function _delayUpdateCursor(cursorPos) {
	      var _this = this;

	      this._abortUpdateCursor();

	      this._changingCursorPos = cursorPos;
	      this._cursorChanging = setTimeout(function () {
	        if (!_this.el) return; // if was destroyed

	        _this.cursorPos = _this._changingCursorPos;

	        _this._abortUpdateCursor();
	      }, 10);
	    }
	    /**
	      Fires custom events
	      @protected
	    */

	  }, {
	    key: "_fireChangeEvents",
	    value: function _fireChangeEvents() {
	      this._fireEvent('accept', this._inputEvent);

	      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
	    }
	    /**
	      Aborts delayed cursor update
	      @private
	    */

	  }, {
	    key: "_abortUpdateCursor",
	    value: function _abortUpdateCursor() {
	      if (this._cursorChanging) {
	        clearTimeout(this._cursorChanging);
	        delete this._cursorChanging;
	      }
	    }
	    /** Aligns cursor to nearest available position */

	  }, {
	    key: "alignCursor",
	    value: function alignCursor() {
	      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
	    }
	    /** Aligns cursor only if selection is empty */

	  }, {
	    key: "alignCursorFriendly",
	    value: function alignCursorFriendly() {
	      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

	      this.alignCursor();
	    }
	    /** Adds listener on custom event */

	  }, {
	    key: "on",
	    value: function on(ev, handler) {
	      if (!this._listeners[ev]) this._listeners[ev] = [];

	      this._listeners[ev].push(handler);

	      return this;
	    }
	    /** Removes custom event listener */

	  }, {
	    key: "off",
	    value: function off(ev, handler) {
	      if (!this._listeners[ev]) return this;

	      if (!handler) {
	        delete this._listeners[ev];
	        return this;
	      }

	      var hIndex = this._listeners[ev].indexOf(handler);

	      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
	      return this;
	    }
	    /** Handles view input event */

	  }, {
	    key: "_onInput",
	    value: function _onInput(e) {
	      this._inputEvent = e;

	      this._abortUpdateCursor(); // fix strange IE behavior


	      if (!this._selection) return this.updateValue();
	      var details = new ActionDetails( // new state
	      this.el.value, this.cursorPos, // old state
	      this.value, this._selection);
	      var oldRawValue = this.masked.rawInputValue;
	      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
	      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

	      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
	      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
	      if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
	      this.updateControl();
	      this.updateCursor(cursorPos);
	      delete this._inputEvent;
	    }
	    /** Handles view change event and commits model value */

	  }, {
	    key: "_onChange",
	    value: function _onChange() {
	      if (this.value !== this.el.value) {
	        this.updateValue();
	      }

	      this.masked.doCommit();
	      this.updateControl();

	      this._saveSelection();
	    }
	    /** Handles view drop event, prevents by default */

	  }, {
	    key: "_onDrop",
	    value: function _onDrop(ev) {
	      ev.preventDefault();
	      ev.stopPropagation();
	    }
	    /** Restore last selection on focus */

	  }, {
	    key: "_onFocus",
	    value: function _onFocus(ev) {
	      this.alignCursorFriendly();
	    }
	    /** Restore last selection on focus */

	  }, {
	    key: "_onClick",
	    value: function _onClick(ev) {
	      this.alignCursorFriendly();
	    }
	    /** Unbind view events and removes element reference */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this._unbindEvents(); // $FlowFixMe why not do so?


	      this._listeners.length = 0; // $FlowFixMe

	      delete this.el;
	    }
	  }]);

	  return InputMask;
	}();
	IMask.InputMask = InputMask;

	/** Pattern which validates enum values */

	var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
	  _inherits(MaskedEnum, _MaskedPattern);

	  var _super = _createSuper(MaskedEnum);

	  function MaskedEnum() {
	    _classCallCheck(this, MaskedEnum);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedEnum, [{
	    key: "_update",
	    value:
	    /**
	      @override
	      @param {Object} opts
	    */
	    function _update(opts) {
	      // TODO type
	      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

	      _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _this = this,
	          _get2;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.enum.some(function (e) {
	        return e.indexOf(_this.unmaskedValue) >= 0;
	      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
	    }
	  }]);

	  return MaskedEnum;
	}(MaskedPattern);
	IMask.MaskedEnum = MaskedEnum;

	/**
	  Number mask
	  @param {Object} opts
	  @param {string} opts.radix - Single char
	  @param {string} opts.thousandsSeparator - Single char
	  @param {Array<string>} opts.mapToRadix - Array of single chars
	  @param {number} opts.min
	  @param {number} opts.max
	  @param {number} opts.scale - Digits after point
	  @param {boolean} opts.signed - Allow negative
	  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
	  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
	*/
	var MaskedNumber = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedNumber, _Masked);

	  var _super = _createSuper(MaskedNumber);

	  /** Single char */

	  /** Single char */

	  /** Array of single chars */

	  /** */

	  /** */

	  /** Digits after point */

	  /** */

	  /** Flag to remove leading and trailing zeros in the end of editing */

	  /** Flag to pad trailing zeros after point in the end of editing */
	  function MaskedNumber(opts) {
	    _classCallCheck(this, MaskedNumber);

	    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedNumber, [{
	    key: "_update",
	    value: function _update(opts) {
	      _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

	      this._updateRegExps();
	    }
	    /** */

	  }, {
	    key: "_updateRegExps",
	    value: function _updateRegExps() {
	      // use different regexp to process user input (more strict, input suffix) and tail shifting
	      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
	      var midInput = '(0|([1-9]+\\d*))?';
	      var mid = '\\d*';
	      var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
	      this._numberRegExpInput = new RegExp(start + midInput + end);
	      this._numberRegExp = new RegExp(start + mid + end);
	      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
	      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
	    }
	    /** */

	  }, {
	    key: "_removeThousandsSeparators",
	    value: function _removeThousandsSeparators(value) {
	      return value.replace(this._thousandsSeparatorRegExp, '');
	    }
	    /** */

	  }, {
	    key: "_insertThousandsSeparators",
	    value: function _insertThousandsSeparators(value) {
	      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
	      var parts = value.split(this.radix);
	      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
	      return parts.join(this.radix);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(ch) {
	      var _get2;

	      ch = ch.replace(this._mapToRadixRegExp, this.radix);

	      var noSepCh = this._removeThousandsSeparators(ch);

	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
	          _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
	          prepCh = _normalizePrepare2[0],
	          details = _normalizePrepare2[1];

	      if (ch && !noSepCh) details.skip = true;
	      return [prepCh, details];
	    }
	    /** */

	  }, {
	    key: "_separatorsCount",
	    value: function _separatorsCount(to) {
	      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var count = 0;

	      for (var pos = 0; pos < to; ++pos) {
	        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
	          ++count;
	          if (extendOnSeparators) to += this.thousandsSeparator.length;
	        }
	      }

	      return count;
	    }
	    /** */

	  }, {
	    key: "_separatorsCountFromSlice",
	    value: function _separatorsCountFromSlice() {
	      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
	      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 ? arguments[2] : undefined;

	      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

	      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

	      fromPos = _this$_adjustRangeWit2[0];
	      toPos = _this$_adjustRangeWit2[1];
	      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
	      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

	      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

	      this._value = this._removeThousandsSeparators(this.value);

	      var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

	      this._value = this._insertThousandsSeparators(this._value);
	      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

	      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

	      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
	      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
	      return appendDetails;
	    }
	    /** */

	  }, {
	    key: "_findSeparatorAround",
	    value: function _findSeparatorAround(pos) {
	      if (this.thousandsSeparator) {
	        var searchFrom = pos - this.thousandsSeparator.length + 1;
	        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
	        if (separatorPos <= pos) return separatorPos;
	      }

	      return -1;
	    }
	  }, {
	    key: "_adjustRangeWithSeparators",
	    value: function _adjustRangeWithSeparators(from, to) {
	      var separatorAroundFromPos = this._findSeparatorAround(from);

	      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

	      var separatorAroundToPos = this._findSeparatorAround(to);

	      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
	      return [from, to];
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

	      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

	      fromPos = _this$_adjustRangeWit4[0];
	      toPos = _this$_adjustRangeWit4[1];
	      var valueBeforePos = this.value.slice(0, fromPos);
	      var valueAfterPos = this.value.slice(toPos);

	      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

	      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

	      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

	      return new ChangeDetails({
	        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos, direction) {
	      if (!this.thousandsSeparator) return cursorPos;

	      switch (direction) {
	        case DIRECTION.NONE:
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          {
	            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

	            if (separatorAtLeftPos >= 0) {
	              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

	              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
	                return separatorAtLeftPos;
	              }
	            }

	            break;
	          }

	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	          {
	            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

	            if (separatorAtRightPos >= 0) {
	              return separatorAtRightPos + this.thousandsSeparator.length;
	            }
	          }
	      }

	      return cursorPos;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate(flags) {
	      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

	      var valid = regexp.test(this._removeThousandsSeparators(this.value));

	      if (valid) {
	        // validate as number
	        var number = this.number;
	        valid = valid && !isNaN(number) && ( // check min bound for negative values
	        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
	        this.max == null || this.max <= 0 || this.number <= this.max);
	      }

	      return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.value) {
	        var number = this.number;
	        var validnum = number; // check bounds

	        if (this.min != null) validnum = Math.max(validnum, this.min);
	        if (this.max != null) validnum = Math.min(validnum, this.max);
	        if (validnum !== number) this.unmaskedValue = String(validnum);
	        var formatted = this.value;
	        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
	        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
	        this._value = formatted;
	      }

	      _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
	    }
	    /** */

	  }, {
	    key: "_normalizeZeros",
	    value: function _normalizeZeros(value) {
	      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


	      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
	        return sign + num;
	      }); // add leading zero

	      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

	      if (parts.length > 1) {
	        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

	        if (!parts[1].length) parts.length = 1; // remove fractional
	      }

	      return this._insertThousandsSeparators(parts.join(this.radix));
	    }
	    /** */

	  }, {
	    key: "_padFractionalZeros",
	    value: function _padFractionalZeros(value) {
	      if (!value) return value;
	      var parts = value.split(this.radix);
	      if (parts.length < 2) parts.push('');
	      parts[1] = parts[1].padEnd(this.scale, '0');
	      return parts.join(this.radix);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return Number(this.unmaskedValue);
	    },
	    set: function set(n) {
	      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
	    }
	    /** Parsed Number */

	  }, {
	    key: "number",
	    get: function get() {
	      return this.typedValue;
	    },
	    set: function set(number) {
	      this.typedValue = number;
	    }
	    /**
	      Is negative allowed
	      @readonly
	    */

	  }, {
	    key: "allowNegative",
	    get: function get() {
	      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
	    }
	  }]);

	  return MaskedNumber;
	}(Masked);
	MaskedNumber.DEFAULTS = {
	  radix: ',',
	  thousandsSeparator: '',
	  mapToRadix: ['.'],
	  scale: 2,
	  signed: false,
	  normalizeZeros: true,
	  padFractionalZeros: false
	};
	IMask.MaskedNumber = MaskedNumber;

	/** Masking by custom Function */

	var MaskedFunction = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedFunction, _Masked);

	  var _super = _createSuper(MaskedFunction);

	  function MaskedFunction() {
	    _classCallCheck(this, MaskedFunction);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedFunction, [{
	    key: "_update",
	    value:
	    /**
	      @override
	      @param {Object} opts
	    */
	    function _update(opts) {
	      if (opts.mask) opts.validate = opts.mask;

	      _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
	    }
	  }]);

	  return MaskedFunction;
	}(Masked);
	IMask.MaskedFunction = MaskedFunction;

	var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

	/** Dynamic mask for choosing apropriate mask in run-time */
	var MaskedDynamic = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedDynamic, _Masked);

	  var _super = _createSuper(MaskedDynamic);

	  /** Currently chosen mask */

	  /** Compliled {@link Masked} options */

	  /** Chooses {@link Masked} depending on input value */

	  /**
	    @param {Object} opts
	  */
	  function MaskedDynamic(opts) {
	    var _this;

	    _classCallCheck(this, MaskedDynamic);

	    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
	    _this.currentMask = null;
	    return _this;
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedDynamic, [{
	    key: "_update",
	    value: function _update(opts) {
	      _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

	      if ('mask' in opts) {
	        // mask could be totally dynamic with only `dispatch` option
	        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
	          return createMask(m);
	        }) : [];
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var details = this._applyDispatch(ch, flags);

	      if (this.currentMask) {
	        details.aggregate(this.currentMask._appendChar(ch, flags));
	      }

	      return details;
	    }
	  }, {
	    key: "_applyDispatch",
	    value: function _applyDispatch() {
	      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
	      var inputValue = this.rawInputValue;
	      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
	      flags._beforeTailState._rawInputValue : inputValue;
	      var tailValue = inputValue.slice(insertValue.length);
	      var prevMask = this.currentMask;
	      var details = new ChangeDetails();
	      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

	      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

	      if (this.currentMask) {
	        if (this.currentMask !== prevMask) {
	          // if mask changed reapply input
	          this.currentMask.reset();

	          if (insertValue) {
	            // $FlowFixMe - it's ok, we don't change current mask above
	            var d = this.currentMask.append(insertValue, {
	              raw: true
	            });
	            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
	          }

	          if (tailValue) {
	            // $FlowFixMe - it's ok, we don't change current mask above
	            details.tailShift += this.currentMask.append(tailValue, {
	              raw: true,
	              tail: true
	            }).tailShift;
	          }
	        } else {
	          // Dispatch can do something bad with state, so
	          // restore prev mask state
	          this.currentMask.state = prevMaskState;
	        }
	      }

	      return details;
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = this._applyDispatch.apply(this, arguments);

	      if (this.currentMask) {
	        details.aggregate(this.currentMask._appendPlaceholder());
	      }

	      return details;
	    }
	    /**
	     @override
	    */

	  }, {
	    key: "_appendEager",
	    value: function _appendEager() {
	      var details = this._applyDispatch.apply(this, arguments);

	      if (this.currentMask) {
	        details.aggregate(this.currentMask._appendEager());
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doDispatch",
	    value: function doDispatch(appended) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.dispatch(appended, this, flags);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2, _this$currentMask;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "reset",
	    value: function reset() {
	      var _this$currentMask2;

	      (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.reset();
	      this.compiledMasks.forEach(function (m) {
	        return m.reset();
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      return this.currentMask ? this.currentMask.value : '';
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.currentMask ? this.currentMask.unmaskedValue : '';
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.currentMask ? this.currentMask.typedValue : '';
	    } // probably typedValue should not be used with dynamic
	    ,
	    set: function set(value) {
	      var unmaskedValue = String(value); // double check it

	      if (this.currentMask) {
	        this.currentMask.typedValue = value;
	        unmaskedValue = this.currentMask.unmaskedValue;
	      }

	      this.unmaskedValue = unmaskedValue;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      var _this$currentMask3;

	      return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isFilled",
	    get: function get() {
	      var _this$currentMask4;

	      return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var details = new ChangeDetails();

	      if (this.currentMask) {
	        var _this$currentMask5;

	        details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)) // update with dispatch
	        .aggregate(this._applyDispatch());
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "state",
	    get: function get() {
	      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
	        _rawInputValue: this.rawInputValue,
	        compiledMasks: this.compiledMasks.map(function (m) {
	          return m.state;
	        }),
	        currentMaskRef: this.currentMask,
	        currentMask: this.currentMask && this.currentMask.state
	      });
	    },
	    set: function set(state) {
	      var compiledMasks = state.compiledMasks,
	          currentMaskRef = state.currentMaskRef,
	          currentMask = state.currentMask,
	          maskedState = _objectWithoutProperties(state, _excluded);

	      this.compiledMasks.forEach(function (m, mi) {
	        return m.state = compiledMasks[mi];
	      });

	      if (currentMaskRef != null) {
	        this.currentMask = currentMaskRef;
	        this.currentMask.state = currentMask;
	      }

	      _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var _this$currentMask6;

	      return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this$currentMask7, _get3;

	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.currentMask) this.currentMask.doCommit();

	      _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos() {
	      var _this$currentMask8, _get4;

	      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
	    }
	  }, {
	    key: "overwrite",
	    get: function get() {
	      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
	    },
	    set: function set(overwrite) {
	      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
	    }
	  }, {
	    key: "eager",
	    get: function get() {
	      return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), "eager", this);
	    },
	    set: function set(eager) {
	      console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "maskEquals",
	    value: function maskEquals(mask) {
	      return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
	        var _mask$mi;

	        return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
	      });
	    }
	  }]);

	  return MaskedDynamic;
	}(Masked);
	MaskedDynamic.DEFAULTS = {
	  dispatch: function dispatch(appended, masked, flags) {
	    if (!masked.compiledMasks.length) return;
	    var inputValue = masked.rawInputValue; // simulate input

	    var inputs = masked.compiledMasks.map(function (m, index) {
	      m.reset();
	      m.append(inputValue, {
	        raw: true
	      });
	      m.append(appended, flags);
	      var weight = m.rawInputValue.length;
	      return {
	        weight: weight,
	        index: index
	      };
	    }); // pop masks with longer values first

	    inputs.sort(function (i1, i2) {
	      return i2.weight - i1.weight;
	    });
	    return masked.compiledMasks[inputs[0].index];
	  }
	};
	IMask.MaskedDynamic = MaskedDynamic;

	/** Mask pipe source and destination types */

	var PIPE_TYPE = {
	  MASKED: 'value',
	  UNMASKED: 'unmaskedValue',
	  TYPED: 'typedValue'
	};
	/** Creates new pipe function depending on mask type, source and destination options */

	function createPipe(mask) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
	  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
	  var masked = createMask(mask);
	  return function (value) {
	    return masked.runIsolated(function (m) {
	      m[from] = value;
	      return m[to];
	    });
	  };
	}
	/** Pipes value through mask depending on mask type, source and destination options */

	function pipe(value) {
	  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    pipeArgs[_key - 1] = arguments[_key];
	  }

	  return createPipe.apply(void 0, pipeArgs)(value);
	}
	IMask.PIPE_TYPE = PIPE_TYPE;
	IMask.createPipe = createPipe;
	IMask.pipe = pipe;

	try {
	  globalThis.IMask = IMask;
	} catch (e) {}

	class Popup {

	    constructor(title, body, okey = 'Окей', cancel = 'Отмена') {
	        this.id = Date.now();
	        this.title = title;
	        this.body = body;
	        this.okey = okey;
	        this.cancel = cancel;

	        this.render();
	        this.popElement = document.getElementById(`popup-${this.id}`);
	        this.dialogElement = this.popElement.querySelector('.uk-modal-dialog');

	        return new Promise(resolve => {
	            this.dialogElement.querySelectorAll('.js-close').forEach(el => {
	                el.addEventListener('click', () => {
	                    resolve(false);
	                    this.unRender();
	                });
	            });
	            this.dialogElement.addEventListener('click', (e) => (e._isClickInModal = true));
	            document.querySelector('body').addEventListener('click', (e) => {
	                if (!e._isClickInModal && e.path[0].className != 'table-delete__contact') {
	                    resolve(false);
	                    this.unRender();
	                }
	            });
	            this.dialogElement.querySelector('.save__button')
	                .addEventListener('click', () => {
	                    resolve(true);
	                    this.unRender();
	                });
	        });
	    }

	    render() {
	        document.querySelector('body').append(this.getTemplate());
	    }

	    unRender(save) {
	        this.popElement.remove();
	        return save;
	    }

	    getTemplate = () => {
	        const div = document.createElement('div');

	        const template = `
        <div id="popup-${this.id}">
            <div class="uk-modal uk-open" style="display: block;" tabindex="-1">
                <div class="uk-modal-dialog">
                    <h2 class="uk-modal-title uk-text-center">${this.title}</h2>
                    <p class="uk-text-center">${this.body}</p>
                    <div class="d-flex justify-content-center align-items-center">
                        <button class="uk-button save__button">${this.okey}</button>
                    </div>
                    <p class="uk-text-center underline__text pb-3 js-close">${this.cancel}</p>
                    <button class="uk-modal-close-default uk-icon js-close" type="button">
                        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                            <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        `;
	        div.innerHTML = template;
	        return div;
	    }
	}

	class PopupAddEdit {
	    popupDiv = document.querySelector('div.js-render__popupAddEdit');
	    modalDiv = this.popupDiv.querySelector('div.uk-modal');

	    contactId = 0;
	    masks = [];
	    contacts = [];

	    phoneMask = ['phone', 'dopPhone'];

	    constructor(type) {
	        this.type = type;
	    }

	    render(user = API.user) {
	        this.popupDiv.innerHTML = this.templatePopup();
	        this.modalDiv = this.popupDiv.querySelector('div.uk-modal');
	        this.getInputs();
	        this.addEvents();
	        this.user = user;

	        if (user.id) {
	            const inputs = this.inputs;

	            inputs.surname.input.value = user.surname;
	            inputs.name.input.value = user.name;
	            inputs.secondName.input.value = user.secondName;

	            this.modalDiv.querySelector('h2.uk-modal-title > span').innerHTML = 'ID: ' + user.id;

	            if (user.contacts) {
	                user.contacts.forEach(contact => {
	                    const contactId = this.addContact();
	                    const el = document.querySelector(`div[data-contact-id="${contactId}"]`);
	                    el.querySelector('input').value = contact.value;
	                    el.querySelector('select').value = contact.type;
	                    if (!this.phoneMask.includes(contact.type))
	                        this.removePhoneMask(contactId);
	                    else this.updatePhoneMask(contactId);
	                });
	            }
	        }
	    }

	    unRender() {
	        this.popupDiv.innerHTML = '';
	        return true;
	    }

	    validation() {
	        const validate = (input, text) => {
	            if (!input.value.length) {
	                input.classList.add('is-invalid');
	                text.style.display = 'block';
	                return false;
	            } else {
	                input.classList.remove('is-invalid');
	                text.style.display = 'none';
	                return true;
	            }
	        };
	        let find = false, errorFind = false;

	        for (const value of Object.entries(this.inputs)) {
	            find = validate(value[1].input, value[1].label);
	            if (!find) errorFind = true;
	        }
	        return errorFind;
	    }

	    addEvents() {
	        const closeButton = this.popupDiv.querySelector('button.uk-modal-close-default');
	        const popup = this.popupDiv.querySelector('#popupAddEdit');
	        const addContactButton = this.popupDiv.querySelector('p.contact__text');
	        const saveButton = this.popupDiv.querySelector('.save__button');

	        closeButton.addEventListener('click', () => this.unRender());
	        popup.addEventListener('click', (e) => (e._isClickInModal = true));
	        this.modalDiv.addEventListener('click', (e) => {
	            if (!e._isClickInModal) this.unRender();
	        });

	        addContactButton.addEventListener('click', () => this.addContact());
	        saveButton.addEventListener('click', () => this.save());

	        const inputs = this.inputs;
	        inputs.name.input.addEventListener('change', () => this.user.name = inputs.name.input.value);
	        inputs.surname.input.addEventListener('change', () => this.user.surname = inputs.surname.input.value);
	        inputs.secondName.input.addEventListener('change', () => this.user.secondName = inputs.secondName.input.value);

	        if (this.type === 'edit') {
	            document.querySelector('.popup-delete__contact').addEventListener('click', async () => {
	                const promise = new Popup(
	                    'Удалить клиента',
	                    'Вы действительно хотите удалить данного клиента?',
	                    'Удалить');
	                if (await promise) {
	                    API.delete(this.user.id).then(() => console.log('Контакт удален'));
	                    this.unRender();
	                }
	            });
	        }
	    }

	    error(text) {
	        const errorText = this.popupDiv.querySelector('.error__text');
	        errorText.style.display = 'block';
	        errorText.innerHTML = 'Ошибка: ' + text;
	    }

	    save() {
	        if (this.validation()) return false;
	        const contactDiv = document.querySelectorAll('div.contact__add__div');
	        const contacts = [];
	        contactDiv.forEach(contact => {
	            if (contact.querySelector('input').value.length) {
	                contacts.push({
	                    id: Date.now(),
	                    type: contact.querySelector('select').value,
	                    value: contact.querySelector('input').value,
	                });
	            }
	        });
	        this.user.contacts = contacts;
	        this.user.changeDate = new Date();
	        if (this.type === 'edit') {
	            API.change(this.user);
	        } else {
	            this.user.createDate = new Date();
	            API.add(this.user);
	            this.unRender();
	        }
	    }

	    addContact() {
	        const countContacts = this.popupDiv.querySelectorAll('.contact__add__div').length;
	        if (countContacts > 8) this.popupDiv.querySelector('.contact__text').style.display = 'none';

	        this.contactId++;

	        const contactDiv = this.popupDiv.querySelector('div.contact__div');

	        const div = document.createElement("div");
	        div.innerHTML = this.templateContact;
	        div.classList.add('pb-2', 'contact__add__div');
	        div.dataset.contactId = this.contactId;

	        contactDiv.append(div);

	        const delButton = div.querySelector('i.fa-minus-square-o');
	        delButton.addEventListener('click',() => {
	            const countContacts = this.popupDiv.querySelectorAll('.contact__add__div').length;
	            if (countContacts < 11) this.popupDiv.querySelector('.contact__text').style.display = 'block';
	            delButton.closest('.contact__add__div').remove();
	        });

	        const select = div.querySelector('select');
	        select.addEventListener('input', () => {
	            const value = select.value;
	            const contactDiv = select.closest('.contact__add__div');
	            if (!this.phoneMask.includes(value)) {
	                this.removePhoneMask(contactDiv.dataset.contactId);
	            } else {
	                this.addPhoneMask(
	                    contactDiv.querySelector('input'),
	                    contactDiv.dataset.contactId
	                );
	            }
	        });

	        const iconDelete = div.querySelector('i.fa-trash-o');
	        iconDelete.addEventListener('click', () => {
	            iconDelete.closest('div.input-icon__delete').querySelector('input').value = '';
	        });

	        this.addPhoneMask(div.querySelector('input.contact'), this.contactId);
	        return this.contactId;
	    }

	    addPhoneMask(el, id) {
	        const index = this.masks.findIndex(mask => mask.contactId === Number(id));

	        if (index !== -1) return false;
	        const mask = IMask(el, {
	                mask: '+{7}(000)000-00-00'
	            });
	        mask.contactId = this.contactId;
	        this.masks.push(mask);
	    }

	    removePhoneMask(id) {
	        const index = this.masks.findIndex(mask => mask.contactId === Number(id));
	        this.masks[index].destroy();
	        this.masks = this.masks.filter(mask => mask.contactId !== Number(id));
	    }

	    updatePhoneMask(id) {
	        const index = this.masks.findIndex(mask => mask.contactId === Number(id));
	        this.masks[index].updateValue();
	    }

	    templatePopup = () => (`
    <div class="uk-modal uk-open" style="display: block;" tabindex="-1">
        <div class="uk-modal-dialog">
            <div id="popupAddEdit">
                <div class="uk-modal-body">
                    <h2 class="uk-modal-title">${this.type === 'create' ? `Создать` : `Изменить`} клиента<span class="ps-2"></span></h2>
                    <div class="did-floating-label-content" id="inputSurname">
                        <input class="uk-input uk-form-width-large did-floating-input required" type="text" placeholder=" ">
                        <label class="did-floating-label">Фамилия</label>
                        <p class="error__text" style="display: none">Поле не заполнено.</p>
                    </div>
                    <div class="did-floating-label-content" id="inputName">
                        <input class="uk-input uk-form-width-large did-floating-input required" type="text" placeholder=" ">
                        <label class="did-floating-label">Имя</label>
                        <p class="error__text" style="display: none">Поле не заполнено.</p>
                    </div>
                    <div class="did-floating-label-content" id="inputSecondName">
                        <input class="uk-input uk-form-width-large did-floating-input" type="text" placeholder=" ">
                        <label class="did-floating-label">Отчество</label>
                        <p class="error__text" style="display: none">Поле не заполнено.</p>
                    </div>
                </div>
                <div style="background-color: #C8C5D1">
                    <div class="uk-modal-body">
                        <div class="contact__div">

                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <p class="contact__text">
                                Добавить контакт
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 d-flex justify-content-center pt-2 align-items-center">
                        <p class="error__text" style="display: none"></p>
                    </div>
                    <div class="col-12 d-flex justify-content-center align-items-center pt-3
                    ${this.type === 'create' ? `pb-3` : ``}">
                        <button class="uk-button save__button" type="button">Сохранить</button>
                    </div>
                    ${this.type === 'edit' ? 
                    `<div class="col-12 d-flex justify-content-center align-items-center pt-3">
                        <p class="underline__text popup-delete__contact">
                            Удалить контакт
                        </p>
                    </div>` : ``}
                </div>
                <button class="uk-modal-close-default uk-icon" type="button">
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                        <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    `);

	    templateContact = `
    <div class="row">
        <div class="col-4">
            <div uk-form-custom="target: > * > span:first-child">
                <select class="select-css">
                    <option value="phone">Телефон</option>
                    <option value="dopPhone">Доп. Телефон</option>
                    <option value="email">Email</option>
                    <option value="vk">Vk</option>
                    <option value="facebook">Facebook</option>
                    <option value="other">Другое</option>
                </select>
                <button class="uk-button uk-button-default contact__button" type="button" tabindex="-1">
                    <span></span>
                    <span uk-icon="icon: chevron-down"></span>
                </button>
            </div>
        </div>
        <div class="col-7">
            <div class="input-icon__delete">
                <input class="uk-input uk-form-width-large contact" required type="text" placeholder="Введите данные контакта">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </div>
        </div>
        <div class="col-1 d-flex justify-content-center align-items-center">
            <i class="fa fa-minus-square-o" aria-hidden="true"></i>
        </div>
    </div>
    `;

	    getInputs() {
	        this.inputs = {
	            surname: {
	                input: document.querySelector('#inputSurname > input'),
	                label: document.querySelector('#inputSurname > p'),
	            },
	            name: {
	                input: document.querySelector('#inputName > input'),
	                label: document.querySelector('#inputName > p'),
	            },
	            secondName: {
	                input: document.querySelector('#inputSecondName > input'),
	                label: document.querySelector('#inputSecondName > p'),
	            }
	        };
	    }
	}

	const API = {
	    user: {
	        name: null,
	        surname: null,
	        secondName: null,
	        createDate: null,
	        changeDate: null,
	        contacts: null,
	    },

	    add: (user) => {
	        fetch('http://localhost:3000/users', {
	            method: 'POST',
	            body: JSON.stringify(user),
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        })
	            .then(res => console.log(res))
	            .then(res => new Table(document.querySelector('div.js-render__table')));
	    },

	    get: async (id = '') => {
	        try {
	            const response = await fetch(`http://localhost:3000/users/${id}`, {
	                method: 'GET',
	                headers: {
	                    'Content-Type': 'application/json'
	                }
	            });
	            return await response.json();
	        } catch (error) {
	            console.error('Ошибка:', error);
	        }
	    },

	    find: async (query) => {
	        try {
	            const response = await fetch(`http://localhost:3000/users?q=${query}`, {
	                method: 'GET',
	                headers: {
	                    'Content-Type': 'application/json'
	                }
	            });
	            return await response.json();
	        } catch (error) {
	            console.error('Ошибка:', error);
	        }
	    },

	    change: (user) => {
	        fetch(`http://localhost:3000/users/${user.id}`, {
	            method: 'PATCH',
	            body: JSON.stringify(user),
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        })
	            .then(res => {
	                switch (res.status) {
	                    case 200:
	                    case 201:
	                        new PopupAddEdit().unRender(); break;
	                    default: {
	                        if (res.statusText) {
	                            new PopupAddEdit('edit').error(res.statusText);
	                        } else {
	                            new PopupAddEdit('edit').error('Что-то пошло не так...');
	                        }
	                    }

	                }
	            })
	            .then(res => new Table(document.querySelector('div.js-render__table')));
	    },

	    delete: async (id = '') => {
	        try {
	            const response = await fetch(`http://localhost:3000/users/${id}`, {
	                method: 'DELETE',
	                headers: {
	                    'Content-Type': 'application/json'
	                }
	            });
	            new Table(document.querySelector('div.js-render__table'));
	            return await response.json();
	        } catch (error) {
	            console.error('Ошибка:', error);
	        }
	    },
	};

	var top = 'top';
	var bottom = 'bottom';
	var right = 'right';
	var left = 'left';
	var auto = 'auto';
	var basePlacements = [top, bottom, right, left];
	var start = 'start';
	var end = 'end';
	var clippingParents = 'clippingParents';
	var viewport = 'viewport';
	var popper = 'popper';
	var reference = 'reference';
	var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
	  return acc.concat([placement + "-" + start, placement + "-" + end]);
	}, []);
	var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
	  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
	}, []); // modifiers that need to read the DOM

	var beforeRead = 'beforeRead';
	var read = 'read';
	var afterRead = 'afterRead'; // pure-logic modifiers

	var beforeMain = 'beforeMain';
	var main = 'main';
	var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

	var beforeWrite = 'beforeWrite';
	var write = 'write';
	var afterWrite = 'afterWrite';
	var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

	function getNodeName(element) {
	  return element ? (element.nodeName || '').toLowerCase() : null;
	}

	function getWindow(node) {
	  if (node == null) {
	    return window;
	  }

	  if (node.toString() !== '[object Window]') {
	    var ownerDocument = node.ownerDocument;
	    return ownerDocument ? ownerDocument.defaultView || window : window;
	  }

	  return node;
	}

	function isElement$1(node) {
	  var OwnElement = getWindow(node).Element;
	  return node instanceof OwnElement || node instanceof Element;
	}

	function isHTMLElement(node) {
	  var OwnElement = getWindow(node).HTMLElement;
	  return node instanceof OwnElement || node instanceof HTMLElement;
	}

	function isShadowRoot(node) {
	  // IE 11 has no ShadowRoot
	  if (typeof ShadowRoot === 'undefined') {
	    return false;
	  }

	  var OwnElement = getWindow(node).ShadowRoot;
	  return node instanceof OwnElement || node instanceof ShadowRoot;
	}

	// and applies them to the HTMLElements such as popper and arrow

	function applyStyles(_ref) {
	  var state = _ref.state;
	  Object.keys(state.elements).forEach(function (name) {
	    var style = state.styles[name] || {};
	    var attributes = state.attributes[name] || {};
	    var element = state.elements[name]; // arrow is optional + virtual elements

	    if (!isHTMLElement(element) || !getNodeName(element)) {
	      return;
	    } // Flow doesn't support to extend this property, but it's the most
	    // effective way to apply styles to an HTMLElement
	    // $FlowFixMe[cannot-write]


	    Object.assign(element.style, style);
	    Object.keys(attributes).forEach(function (name) {
	      var value = attributes[name];

	      if (value === false) {
	        element.removeAttribute(name);
	      } else {
	        element.setAttribute(name, value === true ? '' : value);
	      }
	    });
	  });
	}

	function effect$2(_ref2) {
	  var state = _ref2.state;
	  var initialStyles = {
	    popper: {
	      position: state.options.strategy,
	      left: '0',
	      top: '0',
	      margin: '0'
	    },
	    arrow: {
	      position: 'absolute'
	    },
	    reference: {}
	  };
	  Object.assign(state.elements.popper.style, initialStyles.popper);
	  state.styles = initialStyles;

	  if (state.elements.arrow) {
	    Object.assign(state.elements.arrow.style, initialStyles.arrow);
	  }

	  return function () {
	    Object.keys(state.elements).forEach(function (name) {
	      var element = state.elements[name];
	      var attributes = state.attributes[name] || {};
	      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

	      var style = styleProperties.reduce(function (style, property) {
	        style[property] = '';
	        return style;
	      }, {}); // arrow is optional + virtual elements

	      if (!isHTMLElement(element) || !getNodeName(element)) {
	        return;
	      }

	      Object.assign(element.style, style);
	      Object.keys(attributes).forEach(function (attribute) {
	        element.removeAttribute(attribute);
	      });
	    });
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var applyStyles$1 = {
	  name: 'applyStyles',
	  enabled: true,
	  phase: 'write',
	  fn: applyStyles,
	  effect: effect$2,
	  requires: ['computeStyles']
	};

	function getBasePlacement$1(placement) {
	  return placement.split('-')[0];
	}

	var max = Math.max;
	var min = Math.min;
	var round = Math.round;

	function getBoundingClientRect(element, includeScale) {
	  if (includeScale === void 0) {
	    includeScale = false;
	  }

	  var rect = element.getBoundingClientRect();
	  var scaleX = 1;
	  var scaleY = 1;

	  if (isHTMLElement(element) && includeScale) {
	    var offsetHeight = element.offsetHeight;
	    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
	    // Fallback to 1 in case both values are `0`

	    if (offsetWidth > 0) {
	      scaleX = round(rect.width) / offsetWidth || 1;
	    }

	    if (offsetHeight > 0) {
	      scaleY = round(rect.height) / offsetHeight || 1;
	    }
	  }

	  return {
	    width: rect.width / scaleX,
	    height: rect.height / scaleY,
	    top: rect.top / scaleY,
	    right: rect.right / scaleX,
	    bottom: rect.bottom / scaleY,
	    left: rect.left / scaleX,
	    x: rect.left / scaleX,
	    y: rect.top / scaleY
	  };
	}

	// means it doesn't take into account transforms.

	function getLayoutRect(element) {
	  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
	  // Fixes https://github.com/popperjs/popper-core/issues/1223

	  var width = element.offsetWidth;
	  var height = element.offsetHeight;

	  if (Math.abs(clientRect.width - width) <= 1) {
	    width = clientRect.width;
	  }

	  if (Math.abs(clientRect.height - height) <= 1) {
	    height = clientRect.height;
	  }

	  return {
	    x: element.offsetLeft,
	    y: element.offsetTop,
	    width: width,
	    height: height
	  };
	}

	function contains(parent, child) {
	  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

	  if (parent.contains(child)) {
	    return true;
	  } // then fallback to custom implementation with Shadow DOM support
	  else if (rootNode && isShadowRoot(rootNode)) {
	      var next = child;

	      do {
	        if (next && parent.isSameNode(next)) {
	          return true;
	        } // $FlowFixMe[prop-missing]: need a better way to handle this...


	        next = next.parentNode || next.host;
	      } while (next);
	    } // Give up, the result is false


	  return false;
	}

	function getComputedStyle$1(element) {
	  return getWindow(element).getComputedStyle(element);
	}

	function isTableElement(element) {
	  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
	}

	function getDocumentElement(element) {
	  // $FlowFixMe[incompatible-return]: assume body is always available
	  return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
	  element.document) || window.document).documentElement;
	}

	function getParentNode(element) {
	  if (getNodeName(element) === 'html') {
	    return element;
	  }

	  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
	    // $FlowFixMe[incompatible-return]
	    // $FlowFixMe[prop-missing]
	    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
	    element.parentNode || ( // DOM Element detected
	    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
	    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
	    getDocumentElement(element) // fallback

	  );
	}

	function getTrueOffsetParent(element) {
	  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
	  getComputedStyle$1(element).position === 'fixed') {
	    return null;
	  }

	  return element.offsetParent;
	} // `.offsetParent` reports `null` for fixed elements, while absolute elements
	// return the containing block


	function getContainingBlock(element) {
	  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
	  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

	  if (isIE && isHTMLElement(element)) {
	    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
	    var elementCss = getComputedStyle$1(element);

	    if (elementCss.position === 'fixed') {
	      return null;
	    }
	  }

	  var currentNode = getParentNode(element);

	  if (isShadowRoot(currentNode)) {
	    currentNode = currentNode.host;
	  }

	  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
	    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
	    // create a containing block.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

	    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
	      return currentNode;
	    } else {
	      currentNode = currentNode.parentNode;
	    }
	  }

	  return null;
	} // Gets the closest ancestor positioned element. Handles some edge cases,
	// such as table ancestors and cross browser bugs.


	function getOffsetParent(element) {
	  var window = getWindow(element);
	  var offsetParent = getTrueOffsetParent(element);

	  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
	    offsetParent = getTrueOffsetParent(offsetParent);
	  }

	  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
	    return window;
	  }

	  return offsetParent || getContainingBlock(element) || window;
	}

	function getMainAxisFromPlacement(placement) {
	  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
	}

	function within(min$1, value, max$1) {
	  return max(min$1, min(value, max$1));
	}
	function withinMaxClamp(min, value, max) {
	  var v = within(min, value, max);
	  return v > max ? max : v;
	}

	function getFreshSideObject() {
	  return {
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	  };
	}

	function mergePaddingObject(paddingObject) {
	  return Object.assign({}, getFreshSideObject(), paddingObject);
	}

	function expandToHashMap(value, keys) {
	  return keys.reduce(function (hashMap, key) {
	    hashMap[key] = value;
	    return hashMap;
	  }, {});
	}

	var toPaddingObject = function toPaddingObject(padding, state) {
	  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : padding;
	  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	};

	function arrow(_ref) {
	  var _state$modifiersData$;

	  var state = _ref.state,
	      name = _ref.name,
	      options = _ref.options;
	  var arrowElement = state.elements.arrow;
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var basePlacement = getBasePlacement$1(state.placement);
	  var axis = getMainAxisFromPlacement(basePlacement);
	  var isVertical = [left, right].indexOf(basePlacement) >= 0;
	  var len = isVertical ? 'height' : 'width';

	  if (!arrowElement || !popperOffsets) {
	    return;
	  }

	  var paddingObject = toPaddingObject(options.padding, state);
	  var arrowRect = getLayoutRect(arrowElement);
	  var minProp = axis === 'y' ? top : left;
	  var maxProp = axis === 'y' ? bottom : right;
	  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
	  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
	  var arrowOffsetParent = getOffsetParent(arrowElement);
	  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
	  // outside of the popper bounds

	  var min = paddingObject[minProp];
	  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
	  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

	  var axisProp = axis;
	  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
	}

	function effect$1(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options;
	  var _options$element = options.element,
	      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

	  if (arrowElement == null) {
	    return;
	  } // CSS selector


	  if (typeof arrowElement === 'string') {
	    arrowElement = state.elements.popper.querySelector(arrowElement);

	    if (!arrowElement) {
	      return;
	    }
	  }

	  {
	    if (!isHTMLElement(arrowElement)) {
	      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
	    }
	  }

	  if (!contains(state.elements.popper, arrowElement)) {
	    {
	      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
	    }

	    return;
	  }

	  state.elements.arrow = arrowElement;
	} // eslint-disable-next-line import/no-unused-modules


	var arrow$1 = {
	  name: 'arrow',
	  enabled: true,
	  phase: 'main',
	  fn: arrow,
	  effect: effect$1,
	  requires: ['popperOffsets'],
	  requiresIfExists: ['preventOverflow']
	};

	function getVariation(placement) {
	  return placement.split('-')[1];
	}

	var unsetSides = {
	  top: 'auto',
	  right: 'auto',
	  bottom: 'auto',
	  left: 'auto'
	}; // Round the offsets to the nearest suitable subpixel based on the DPR.
	// Zooming can change the DPR, but it seems to report a value that will
	// cleanly divide the values into the appropriate subpixels.

	function roundOffsetsByDPR(_ref) {
	  var x = _ref.x,
	      y = _ref.y;
	  var win = window;
	  var dpr = win.devicePixelRatio || 1;
	  return {
	    x: round(x * dpr) / dpr || 0,
	    y: round(y * dpr) / dpr || 0
	  };
	}

	function mapToStyles(_ref2) {
	  var _Object$assign2;

	  var popper = _ref2.popper,
	      popperRect = _ref2.popperRect,
	      placement = _ref2.placement,
	      variation = _ref2.variation,
	      offsets = _ref2.offsets,
	      position = _ref2.position,
	      gpuAcceleration = _ref2.gpuAcceleration,
	      adaptive = _ref2.adaptive,
	      roundOffsets = _ref2.roundOffsets,
	      isFixed = _ref2.isFixed;
	  var _offsets$x = offsets.x,
	      x = _offsets$x === void 0 ? 0 : _offsets$x,
	      _offsets$y = offsets.y,
	      y = _offsets$y === void 0 ? 0 : _offsets$y;

	  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };

	  x = _ref3.x;
	  y = _ref3.y;
	  var hasX = offsets.hasOwnProperty('x');
	  var hasY = offsets.hasOwnProperty('y');
	  var sideX = left;
	  var sideY = top;
	  var win = window;

	  if (adaptive) {
	    var offsetParent = getOffsetParent(popper);
	    var heightProp = 'clientHeight';
	    var widthProp = 'clientWidth';

	    if (offsetParent === getWindow(popper)) {
	      offsetParent = getDocumentElement(popper);

	      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
	        heightProp = 'scrollHeight';
	        widthProp = 'scrollWidth';
	      }
	    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


	    offsetParent = offsetParent;

	    if (placement === top || (placement === left || placement === right) && variation === end) {
	      sideY = bottom;
	      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
	      offsetParent[heightProp];
	      y -= offsetY - popperRect.height;
	      y *= gpuAcceleration ? 1 : -1;
	    }

	    if (placement === left || (placement === top || placement === bottom) && variation === end) {
	      sideX = right;
	      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
	      offsetParent[widthProp];
	      x -= offsetX - popperRect.width;
	      x *= gpuAcceleration ? 1 : -1;
	    }
	  }

	  var commonStyles = Object.assign({
	    position: position
	  }, adaptive && unsetSides);

	  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };

	  x = _ref4.x;
	  y = _ref4.y;

	  if (gpuAcceleration) {
	    var _Object$assign;

	    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
	  }

	  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
	}

	function computeStyles(_ref5) {
	  var state = _ref5.state,
	      options = _ref5.options;
	  var _options$gpuAccelerat = options.gpuAcceleration,
	      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
	      _options$adaptive = options.adaptive,
	      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
	      _options$roundOffsets = options.roundOffsets,
	      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

	  {
	    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

	    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
	      return transitionProperty.indexOf(property) >= 0;
	    })) {
	      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
	    }
	  }

	  var commonStyles = {
	    placement: getBasePlacement$1(state.placement),
	    variation: getVariation(state.placement),
	    popper: state.elements.popper,
	    popperRect: state.rects.popper,
	    gpuAcceleration: gpuAcceleration,
	    isFixed: state.options.strategy === 'fixed'
	  };

	  if (state.modifiersData.popperOffsets != null) {
	    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.popperOffsets,
	      position: state.options.strategy,
	      adaptive: adaptive,
	      roundOffsets: roundOffsets
	    })));
	  }

	  if (state.modifiersData.arrow != null) {
	    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.arrow,
	      position: 'absolute',
	      adaptive: false,
	      roundOffsets: roundOffsets
	    })));
	  }

	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-placement': state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var computeStyles$1 = {
	  name: 'computeStyles',
	  enabled: true,
	  phase: 'beforeWrite',
	  fn: computeStyles,
	  data: {}
	};

	var passive = {
	  passive: true
	};

	function effect(_ref) {
	  var state = _ref.state,
	      instance = _ref.instance,
	      options = _ref.options;
	  var _options$scroll = options.scroll,
	      scroll = _options$scroll === void 0 ? true : _options$scroll,
	      _options$resize = options.resize,
	      resize = _options$resize === void 0 ? true : _options$resize;
	  var window = getWindow(state.elements.popper);
	  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

	  if (scroll) {
	    scrollParents.forEach(function (scrollParent) {
	      scrollParent.addEventListener('scroll', instance.update, passive);
	    });
	  }

	  if (resize) {
	    window.addEventListener('resize', instance.update, passive);
	  }

	  return function () {
	    if (scroll) {
	      scrollParents.forEach(function (scrollParent) {
	        scrollParent.removeEventListener('scroll', instance.update, passive);
	      });
	    }

	    if (resize) {
	      window.removeEventListener('resize', instance.update, passive);
	    }
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var eventListeners = {
	  name: 'eventListeners',
	  enabled: true,
	  phase: 'write',
	  fn: function fn() {},
	  effect: effect,
	  data: {}
	};

	var hash$1 = {
	  left: 'right',
	  right: 'left',
	  bottom: 'top',
	  top: 'bottom'
	};
	function getOppositePlacement(placement) {
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash$1[matched];
	  });
	}

	var hash = {
	  start: 'end',
	  end: 'start'
	};
	function getOppositeVariationPlacement(placement) {
	  return placement.replace(/start|end/g, function (matched) {
	    return hash[matched];
	  });
	}

	function getWindowScroll(node) {
	  var win = getWindow(node);
	  var scrollLeft = win.pageXOffset;
	  var scrollTop = win.pageYOffset;
	  return {
	    scrollLeft: scrollLeft,
	    scrollTop: scrollTop
	  };
	}

	function getWindowScrollBarX(element) {
	  // If <html> has a CSS width greater than the viewport, then this will be
	  // incorrect for RTL.
	  // Popper 1 is broken in this case and never had a bug report so let's assume
	  // it's not an issue. I don't think anyone ever specifies width on <html>
	  // anyway.
	  // Browsers where the left scrollbar doesn't cause an issue report `0` for
	  // this (e.g. Edge 2019, IE11, Safari)
	  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
	}

	function getViewportRect(element) {
	  var win = getWindow(element);
	  var html = getDocumentElement(element);
	  var visualViewport = win.visualViewport;
	  var width = html.clientWidth;
	  var height = html.clientHeight;
	  var x = 0;
	  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
	  // can be obscured underneath it.
	  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
	  // if it isn't open, so if this isn't available, the popper will be detected
	  // to overflow the bottom of the screen too early.

	  if (visualViewport) {
	    width = visualViewport.width;
	    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
	    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
	    // errors due to floating point numbers, so we need to check precision.
	    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
	    // Feature detection fails in mobile emulation mode in Chrome.
	    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
	    // 0.001
	    // Fallback here: "Not Safari" userAgent

	    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
	      x = visualViewport.offsetLeft;
	      y = visualViewport.offsetTop;
	    }
	  }

	  return {
	    width: width,
	    height: height,
	    x: x + getWindowScrollBarX(element),
	    y: y
	  };
	}

	// of the `<html>` and `<body>` rect bounds if horizontally scrollable

	function getDocumentRect(element) {
	  var _element$ownerDocumen;

	  var html = getDocumentElement(element);
	  var winScroll = getWindowScroll(element);
	  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
	  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
	  var y = -winScroll.scrollTop;

	  if (getComputedStyle$1(body || html).direction === 'rtl') {
	    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
	  }

	  return {
	    width: width,
	    height: height,
	    x: x,
	    y: y
	  };
	}

	function isScrollParent(element) {
	  // Firefox wants us to check `-x` and `-y` variations as well
	  var _getComputedStyle = getComputedStyle$1(element),
	      overflow = _getComputedStyle.overflow,
	      overflowX = _getComputedStyle.overflowX,
	      overflowY = _getComputedStyle.overflowY;

	  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
	}

	function getScrollParent(node) {
	  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
	    // $FlowFixMe[incompatible-return]: assume body is always available
	    return node.ownerDocument.body;
	  }

	  if (isHTMLElement(node) && isScrollParent(node)) {
	    return node;
	  }

	  return getScrollParent(getParentNode(node));
	}

	/*
	given a DOM element, return the list of all scroll parents, up the list of ancesors
	until we get to the top window object. This list is what we attach scroll listeners
	to, because if any of these parent elements scroll, we'll need to re-calculate the
	reference element's position.
	*/

	function listScrollParents(element, list) {
	  var _element$ownerDocumen;

	  if (list === void 0) {
	    list = [];
	  }

	  var scrollParent = getScrollParent(element);
	  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
	  var win = getWindow(scrollParent);
	  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	  var updatedList = list.concat(target);
	  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
	  updatedList.concat(listScrollParents(getParentNode(target)));
	}

	function rectToClientRect(rect) {
	  return Object.assign({}, rect, {
	    left: rect.x,
	    top: rect.y,
	    right: rect.x + rect.width,
	    bottom: rect.y + rect.height
	  });
	}

	function getInnerBoundingClientRect(element) {
	  var rect = getBoundingClientRect(element);
	  rect.top = rect.top + element.clientTop;
	  rect.left = rect.left + element.clientLeft;
	  rect.bottom = rect.top + element.clientHeight;
	  rect.right = rect.left + element.clientWidth;
	  rect.width = element.clientWidth;
	  rect.height = element.clientHeight;
	  rect.x = rect.left;
	  rect.y = rect.top;
	  return rect;
	}

	function getClientRectFromMixedType(element, clippingParent) {
	  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
	} // A "clipping parent" is an overflowable container with the characteristic of
	// clipping (or hiding) overflowing elements with a position different from
	// `initial`


	function getClippingParents(element) {
	  var clippingParents = listScrollParents(getParentNode(element));
	  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
	  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

	  if (!isElement$1(clipperElement)) {
	    return [];
	  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


	  return clippingParents.filter(function (clippingParent) {
	    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
	  });
	} // Gets the maximum area that the element is visible in due to any number of
	// clipping parents


	function getClippingRect(element, boundary, rootBoundary) {
	  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
	  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
	  var firstClippingParent = clippingParents[0];
	  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
	    var rect = getClientRectFromMixedType(element, clippingParent);
	    accRect.top = max(rect.top, accRect.top);
	    accRect.right = min(rect.right, accRect.right);
	    accRect.bottom = min(rect.bottom, accRect.bottom);
	    accRect.left = max(rect.left, accRect.left);
	    return accRect;
	  }, getClientRectFromMixedType(element, firstClippingParent));
	  clippingRect.width = clippingRect.right - clippingRect.left;
	  clippingRect.height = clippingRect.bottom - clippingRect.top;
	  clippingRect.x = clippingRect.left;
	  clippingRect.y = clippingRect.top;
	  return clippingRect;
	}

	function computeOffsets(_ref) {
	  var reference = _ref.reference,
	      element = _ref.element,
	      placement = _ref.placement;
	  var basePlacement = placement ? getBasePlacement$1(placement) : null;
	  var variation = placement ? getVariation(placement) : null;
	  var commonX = reference.x + reference.width / 2 - element.width / 2;
	  var commonY = reference.y + reference.height / 2 - element.height / 2;
	  var offsets;

	  switch (basePlacement) {
	    case top:
	      offsets = {
	        x: commonX,
	        y: reference.y - element.height
	      };
	      break;

	    case bottom:
	      offsets = {
	        x: commonX,
	        y: reference.y + reference.height
	      };
	      break;

	    case right:
	      offsets = {
	        x: reference.x + reference.width,
	        y: commonY
	      };
	      break;

	    case left:
	      offsets = {
	        x: reference.x - element.width,
	        y: commonY
	      };
	      break;

	    default:
	      offsets = {
	        x: reference.x,
	        y: reference.y
	      };
	  }

	  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

	  if (mainAxis != null) {
	    var len = mainAxis === 'y' ? 'height' : 'width';

	    switch (variation) {
	      case start:
	        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
	        break;

	      case end:
	        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
	        break;
	    }
	  }

	  return offsets;
	}

	function detectOverflow(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      _options$placement = _options.placement,
	      placement = _options$placement === void 0 ? state.placement : _options$placement,
	      _options$boundary = _options.boundary,
	      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
	      _options$rootBoundary = _options.rootBoundary,
	      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
	      _options$elementConte = _options.elementContext,
	      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
	      _options$altBoundary = _options.altBoundary,
	      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
	      _options$padding = _options.padding,
	      padding = _options$padding === void 0 ? 0 : _options$padding;
	  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	  var altContext = elementContext === popper ? reference : popper;
	  var popperRect = state.rects.popper;
	  var element = state.elements[altBoundary ? altContext : elementContext];
	  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
	  var referenceClientRect = getBoundingClientRect(state.elements.reference);
	  var popperOffsets = computeOffsets({
	    reference: referenceClientRect,
	    element: popperRect,
	    strategy: 'absolute',
	    placement: placement
	  });
	  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
	  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
	  // 0 or negative = within the clipping rect

	  var overflowOffsets = {
	    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
	    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
	    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
	    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	  };
	  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

	  if (elementContext === popper && offsetData) {
	    var offset = offsetData[placement];
	    Object.keys(overflowOffsets).forEach(function (key) {
	      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
	      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
	      overflowOffsets[key] += offset[axis] * multiply;
	    });
	  }

	  return overflowOffsets;
	}

	function computeAutoPlacement(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      placement = _options.placement,
	      boundary = _options.boundary,
	      rootBoundary = _options.rootBoundary,
	      padding = _options.padding,
	      flipVariations = _options.flipVariations,
	      _options$allowedAutoP = _options.allowedAutoPlacements,
	      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	  var variation = getVariation(placement);
	  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
	    return getVariation(placement) === variation;
	  }) : basePlacements;
	  var allowedPlacements = placements$1.filter(function (placement) {
	    return allowedAutoPlacements.indexOf(placement) >= 0;
	  });

	  if (allowedPlacements.length === 0) {
	    allowedPlacements = placements$1;

	    {
	      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
	    }
	  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


	  var overflows = allowedPlacements.reduce(function (acc, placement) {
	    acc[placement] = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding
	    })[getBasePlacement$1(placement)];
	    return acc;
	  }, {});
	  return Object.keys(overflows).sort(function (a, b) {
	    return overflows[a] - overflows[b];
	  });
	}

	function getExpandedFallbackPlacements(placement) {
	  if (getBasePlacement$1(placement) === auto) {
	    return [];
	  }

	  var oppositePlacement = getOppositePlacement(placement);
	  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
	}

	function flip(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;

	  if (state.modifiersData[name]._skip) {
	    return;
	  }

	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
	      specifiedFallbackPlacements = options.fallbackPlacements,
	      padding = options.padding,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      _options$flipVariatio = options.flipVariations,
	      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
	      allowedAutoPlacements = options.allowedAutoPlacements;
	  var preferredPlacement = state.options.placement;
	  var basePlacement = getBasePlacement$1(preferredPlacement);
	  var isBasePlacement = basePlacement === preferredPlacement;
	  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
	    return acc.concat(getBasePlacement$1(placement) === auto ? computeAutoPlacement(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding,
	      flipVariations: flipVariations,
	      allowedAutoPlacements: allowedAutoPlacements
	    }) : placement);
	  }, []);
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var checksMap = new Map();
	  var makeFallbackChecks = true;
	  var firstFittingPlacement = placements[0];

	  for (var i = 0; i < placements.length; i++) {
	    var placement = placements[i];

	    var _basePlacement = getBasePlacement$1(placement);

	    var isStartVariation = getVariation(placement) === start;
	    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
	    var len = isVertical ? 'width' : 'height';
	    var overflow = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      altBoundary: altBoundary,
	      padding: padding
	    });
	    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

	    if (referenceRect[len] > popperRect[len]) {
	      mainVariationSide = getOppositePlacement(mainVariationSide);
	    }

	    var altVariationSide = getOppositePlacement(mainVariationSide);
	    var checks = [];

	    if (checkMainAxis) {
	      checks.push(overflow[_basePlacement] <= 0);
	    }

	    if (checkAltAxis) {
	      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
	    }

	    if (checks.every(function (check) {
	      return check;
	    })) {
	      firstFittingPlacement = placement;
	      makeFallbackChecks = false;
	      break;
	    }

	    checksMap.set(placement, checks);
	  }

	  if (makeFallbackChecks) {
	    // `2` may be desired in some cases – research later
	    var numberOfChecks = flipVariations ? 3 : 1;

	    var _loop = function _loop(_i) {
	      var fittingPlacement = placements.find(function (placement) {
	        var checks = checksMap.get(placement);

	        if (checks) {
	          return checks.slice(0, _i).every(function (check) {
	            return check;
	          });
	        }
	      });

	      if (fittingPlacement) {
	        firstFittingPlacement = fittingPlacement;
	        return "break";
	      }
	    };

	    for (var _i = numberOfChecks; _i > 0; _i--) {
	      var _ret = _loop(_i);

	      if (_ret === "break") break;
	    }
	  }

	  if (state.placement !== firstFittingPlacement) {
	    state.modifiersData[name]._skip = true;
	    state.placement = firstFittingPlacement;
	    state.reset = true;
	  }
	} // eslint-disable-next-line import/no-unused-modules


	var flip$1 = {
	  name: 'flip',
	  enabled: true,
	  phase: 'main',
	  fn: flip,
	  requiresIfExists: ['offset'],
	  data: {
	    _skip: false
	  }
	};

	function getSideOffsets(overflow, rect, preventedOffsets) {
	  if (preventedOffsets === void 0) {
	    preventedOffsets = {
	      x: 0,
	      y: 0
	    };
	  }

	  return {
	    top: overflow.top - rect.height - preventedOffsets.y,
	    right: overflow.right - rect.width + preventedOffsets.x,
	    bottom: overflow.bottom - rect.height + preventedOffsets.y,
	    left: overflow.left - rect.width - preventedOffsets.x
	  };
	}

	function isAnySideFullyClipped(overflow) {
	  return [top, right, bottom, left].some(function (side) {
	    return overflow[side] >= 0;
	  });
	}

	function hide(_ref) {
	  var state = _ref.state,
	      name = _ref.name;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var preventedOffsets = state.modifiersData.preventOverflow;
	  var referenceOverflow = detectOverflow(state, {
	    elementContext: 'reference'
	  });
	  var popperAltOverflow = detectOverflow(state, {
	    altBoundary: true
	  });
	  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	  state.modifiersData[name] = {
	    referenceClippingOffsets: referenceClippingOffsets,
	    popperEscapeOffsets: popperEscapeOffsets,
	    isReferenceHidden: isReferenceHidden,
	    hasPopperEscaped: hasPopperEscaped
	  };
	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-reference-hidden': isReferenceHidden,
	    'data-popper-escaped': hasPopperEscaped
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var hide$1 = {
	  name: 'hide',
	  enabled: true,
	  phase: 'main',
	  requiresIfExists: ['preventOverflow'],
	  fn: hide
	};

	function distanceAndSkiddingToXY(placement, rects, offset) {
	  var basePlacement = getBasePlacement$1(placement);
	  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

	  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
	    placement: placement
	  })) : offset,
	      skidding = _ref[0],
	      distance = _ref[1];

	  skidding = skidding || 0;
	  distance = (distance || 0) * invertDistance;
	  return [left, right].indexOf(basePlacement) >= 0 ? {
	    x: distance,
	    y: skidding
	  } : {
	    x: skidding,
	    y: distance
	  };
	}

	function offset(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options,
	      name = _ref2.name;
	  var _options$offset = options.offset,
	      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
	  var data = placements.reduce(function (acc, placement) {
	    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
	    return acc;
	  }, {});
	  var _data$state$placement = data[state.placement],
	      x = _data$state$placement.x,
	      y = _data$state$placement.y;

	  if (state.modifiersData.popperOffsets != null) {
	    state.modifiersData.popperOffsets.x += x;
	    state.modifiersData.popperOffsets.y += y;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var offset$1 = {
	  name: 'offset',
	  enabled: true,
	  phase: 'main',
	  requires: ['popperOffsets'],
	  fn: offset
	};

	function popperOffsets(_ref) {
	  var state = _ref.state,
	      name = _ref.name;
	  // Offsets are the actual position the popper needs to have to be
	  // properly positioned near its reference element
	  // This is the most basic placement, and will be adjusted by
	  // the modifiers in the next step
	  state.modifiersData[name] = computeOffsets({
	    reference: state.rects.reference,
	    element: state.rects.popper,
	    strategy: 'absolute',
	    placement: state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var popperOffsets$1 = {
	  name: 'popperOffsets',
	  enabled: true,
	  phase: 'read',
	  fn: popperOffsets,
	  data: {}
	};

	function getAltAxis(axis) {
	  return axis === 'x' ? 'y' : 'x';
	}

	function preventOverflow(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;
	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      padding = options.padding,
	      _options$tether = options.tether,
	      tether = _options$tether === void 0 ? true : _options$tether,
	      _options$tetherOffset = options.tetherOffset,
	      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	  var overflow = detectOverflow(state, {
	    boundary: boundary,
	    rootBoundary: rootBoundary,
	    padding: padding,
	    altBoundary: altBoundary
	  });
	  var basePlacement = getBasePlacement$1(state.placement);
	  var variation = getVariation(state.placement);
	  var isBasePlacement = !variation;
	  var mainAxis = getMainAxisFromPlacement(basePlacement);
	  var altAxis = getAltAxis(mainAxis);
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : tetherOffset;
	  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
	    mainAxis: tetherOffsetValue,
	    altAxis: tetherOffsetValue
	  } : Object.assign({
	    mainAxis: 0,
	    altAxis: 0
	  }, tetherOffsetValue);
	  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
	  var data = {
	    x: 0,
	    y: 0
	  };

	  if (!popperOffsets) {
	    return;
	  }

	  if (checkMainAxis) {
	    var _offsetModifierState$;

	    var mainSide = mainAxis === 'y' ? top : left;
	    var altSide = mainAxis === 'y' ? bottom : right;
	    var len = mainAxis === 'y' ? 'height' : 'width';
	    var offset = popperOffsets[mainAxis];
	    var min$1 = offset + overflow[mainSide];
	    var max$1 = offset - overflow[altSide];
	    var additive = tether ? -popperRect[len] / 2 : 0;
	    var minLen = variation === start ? referenceRect[len] : popperRect[len];
	    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
	    // outside the reference bounds

	    var arrowElement = state.elements.arrow;
	    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
	      width: 0,
	      height: 0
	    };
	    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
	    var arrowPaddingMin = arrowPaddingObject[mainSide];
	    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
	    // to include its full size in the calculation. If the reference is small
	    // and near the edge of a boundary, the popper can overflow even if the
	    // reference is not overflowing as well (e.g. virtual elements with no
	    // width or height)

	    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
	    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
	    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
	    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
	    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
	    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
	    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
	    var tetherMax = offset + maxOffset - offsetModifierValue;
	    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
	    popperOffsets[mainAxis] = preventedOffset;
	    data[mainAxis] = preventedOffset - offset;
	  }

	  if (checkAltAxis) {
	    var _offsetModifierState$2;

	    var _mainSide = mainAxis === 'x' ? top : left;

	    var _altSide = mainAxis === 'x' ? bottom : right;

	    var _offset = popperOffsets[altAxis];

	    var _len = altAxis === 'y' ? 'height' : 'width';

	    var _min = _offset + overflow[_mainSide];

	    var _max = _offset - overflow[_altSide];

	    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

	    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

	    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

	    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

	    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

	    popperOffsets[altAxis] = _preventedOffset;
	    data[altAxis] = _preventedOffset - _offset;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var preventOverflow$1 = {
	  name: 'preventOverflow',
	  enabled: true,
	  phase: 'main',
	  fn: preventOverflow,
	  requiresIfExists: ['offset']
	};

	function getHTMLElementScroll(element) {
	  return {
	    scrollLeft: element.scrollLeft,
	    scrollTop: element.scrollTop
	  };
	}

	function getNodeScroll(node) {
	  if (node === getWindow(node) || !isHTMLElement(node)) {
	    return getWindowScroll(node);
	  } else {
	    return getHTMLElementScroll(node);
	  }
	}

	function isElementScaled(element) {
	  var rect = element.getBoundingClientRect();
	  var scaleX = round(rect.width) / element.offsetWidth || 1;
	  var scaleY = round(rect.height) / element.offsetHeight || 1;
	  return scaleX !== 1 || scaleY !== 1;
	} // Returns the composite rect of an element relative to its offsetParent.
	// Composite means it takes into account transforms as well as layout.


	function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	  if (isFixed === void 0) {
	    isFixed = false;
	  }

	  var isOffsetParentAnElement = isHTMLElement(offsetParent);
	  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
	  var documentElement = getDocumentElement(offsetParent);
	  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
	  var scroll = {
	    scrollLeft: 0,
	    scrollTop: 0
	  };
	  var offsets = {
	    x: 0,
	    y: 0
	  };

	  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
	    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
	    isScrollParent(documentElement)) {
	      scroll = getNodeScroll(offsetParent);
	    }

	    if (isHTMLElement(offsetParent)) {
	      offsets = getBoundingClientRect(offsetParent, true);
	      offsets.x += offsetParent.clientLeft;
	      offsets.y += offsetParent.clientTop;
	    } else if (documentElement) {
	      offsets.x = getWindowScrollBarX(documentElement);
	    }
	  }

	  return {
	    x: rect.left + scroll.scrollLeft - offsets.x,
	    y: rect.top + scroll.scrollTop - offsets.y,
	    width: rect.width,
	    height: rect.height
	  };
	}

	function order(modifiers) {
	  var map = new Map();
	  var visited = new Set();
	  var result = [];
	  modifiers.forEach(function (modifier) {
	    map.set(modifier.name, modifier);
	  }); // On visiting object, check for its dependencies and visit them recursively

	  function sort(modifier) {
	    visited.add(modifier.name);
	    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
	    requires.forEach(function (dep) {
	      if (!visited.has(dep)) {
	        var depModifier = map.get(dep);

	        if (depModifier) {
	          sort(depModifier);
	        }
	      }
	    });
	    result.push(modifier);
	  }

	  modifiers.forEach(function (modifier) {
	    if (!visited.has(modifier.name)) {
	      // check for visited object
	      sort(modifier);
	    }
	  });
	  return result;
	}

	function orderModifiers(modifiers) {
	  // order based on dependencies
	  var orderedModifiers = order(modifiers); // order based on phase

	  return modifierPhases.reduce(function (acc, phase) {
	    return acc.concat(orderedModifiers.filter(function (modifier) {
	      return modifier.phase === phase;
	    }));
	  }, []);
	}

	function debounce$1(fn) {
	  var pending;
	  return function () {
	    if (!pending) {
	      pending = new Promise(function (resolve) {
	        Promise.resolve().then(function () {
	          pending = undefined;
	          resolve(fn());
	        });
	      });
	    }

	    return pending;
	  };
	}

	function format(str) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return [].concat(args).reduce(function (p, c) {
	    return p.replace(/%s/, c);
	  }, str);
	}

	var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
	var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
	var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
	function validateModifiers(modifiers) {
	  modifiers.forEach(function (modifier) {
	    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
	    .filter(function (value, index, self) {
	      return self.indexOf(value) === index;
	    }).forEach(function (key) {
	      switch (key) {
	        case 'name':
	          if (typeof modifier.name !== 'string') {
	            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
	          }

	          break;

	        case 'enabled':
	          if (typeof modifier.enabled !== 'boolean') {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
	          }

	          break;

	        case 'phase':
	          if (modifierPhases.indexOf(modifier.phase) < 0) {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
	          }

	          break;

	        case 'fn':
	          if (typeof modifier.fn !== 'function') {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
	          }

	          break;

	        case 'effect':
	          if (modifier.effect != null && typeof modifier.effect !== 'function') {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
	          }

	          break;

	        case 'requires':
	          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
	          }

	          break;

	        case 'requiresIfExists':
	          if (!Array.isArray(modifier.requiresIfExists)) {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
	          }

	          break;

	        case 'options':
	        case 'data':
	          break;

	        default:
	          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
	            return "\"" + s + "\"";
	          }).join(', ') + "; but \"" + key + "\" was provided.");
	      }

	      modifier.requires && modifier.requires.forEach(function (requirement) {
	        if (modifiers.find(function (mod) {
	          return mod.name === requirement;
	        }) == null) {
	          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
	        }
	      });
	    });
	  });
	}

	function uniqueBy(arr, fn) {
	  var identifiers = new Set();
	  return arr.filter(function (item) {
	    var identifier = fn(item);

	    if (!identifiers.has(identifier)) {
	      identifiers.add(identifier);
	      return true;
	    }
	  });
	}

	function mergeByName(modifiers) {
	  var merged = modifiers.reduce(function (merged, current) {
	    var existing = merged[current.name];
	    merged[current.name] = existing ? Object.assign({}, existing, current, {
	      options: Object.assign({}, existing.options, current.options),
	      data: Object.assign({}, existing.data, current.data)
	    }) : current;
	    return merged;
	  }, {}); // IE11 does not support Object.values

	  return Object.keys(merged).map(function (key) {
	    return merged[key];
	  });
	}

	var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
	var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
	var DEFAULT_OPTIONS = {
	  placement: 'bottom',
	  modifiers: [],
	  strategy: 'absolute'
	};

	function areValidElements() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return !args.some(function (element) {
	    return !(element && typeof element.getBoundingClientRect === 'function');
	  });
	}

	function popperGenerator(generatorOptions) {
	  if (generatorOptions === void 0) {
	    generatorOptions = {};
	  }

	  var _generatorOptions = generatorOptions,
	      _generatorOptions$def = _generatorOptions.defaultModifiers,
	      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
	      _generatorOptions$def2 = _generatorOptions.defaultOptions,
	      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	  return function createPopper(reference, popper, options) {
	    if (options === void 0) {
	      options = defaultOptions;
	    }

	    var state = {
	      placement: 'bottom',
	      orderedModifiers: [],
	      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
	      modifiersData: {},
	      elements: {
	        reference: reference,
	        popper: popper
	      },
	      attributes: {},
	      styles: {}
	    };
	    var effectCleanupFns = [];
	    var isDestroyed = false;
	    var instance = {
	      state: state,
	      setOptions: function setOptions(setOptionsAction) {
	        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
	        cleanupModifierEffects();
	        state.options = Object.assign({}, defaultOptions, state.options, options);
	        state.scrollParents = {
	          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
	          popper: listScrollParents(popper)
	        }; // Orders the modifiers based on their dependencies and `phase`
	        // properties

	        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

	        state.orderedModifiers = orderedModifiers.filter(function (m) {
	          return m.enabled;
	        }); // Validate the provided modifiers so that the consumer will get warned
	        // if one of the modifiers is invalid for any reason

	        {
	          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
	            var name = _ref.name;
	            return name;
	          });
	          validateModifiers(modifiers);

	          if (getBasePlacement$1(state.options.placement) === auto) {
	            var flipModifier = state.orderedModifiers.find(function (_ref2) {
	              var name = _ref2.name;
	              return name === 'flip';
	            });

	            if (!flipModifier) {
	              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
	            }
	          }

	          var _getComputedStyle = getComputedStyle$1(popper),
	              marginTop = _getComputedStyle.marginTop,
	              marginRight = _getComputedStyle.marginRight,
	              marginBottom = _getComputedStyle.marginBottom,
	              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
	          // cause bugs with positioning, so we'll warn the consumer


	          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
	            return parseFloat(margin);
	          })) {
	            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
	          }
	        }

	        runModifierEffects();
	        return instance.update();
	      },
	      // Sync update – it will always be executed, even if not necessary. This
	      // is useful for low frequency updates where sync behavior simplifies the
	      // logic.
	      // For high frequency updates (e.g. `resize` and `scroll` events), always
	      // prefer the async Popper#update method
	      forceUpdate: function forceUpdate() {
	        if (isDestroyed) {
	          return;
	        }

	        var _state$elements = state.elements,
	            reference = _state$elements.reference,
	            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
	        // anymore

	        if (!areValidElements(reference, popper)) {
	          {
	            console.error(INVALID_ELEMENT_ERROR);
	          }

	          return;
	        } // Store the reference and popper rects to be read by modifiers


	        state.rects = {
	          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
	          popper: getLayoutRect(popper)
	        }; // Modifiers have the ability to reset the current update cycle. The
	        // most common use case for this is the `flip` modifier changing the
	        // placement, which then needs to re-run all the modifiers, because the
	        // logic was previously ran for the previous placement and is therefore
	        // stale/incorrect

	        state.reset = false;
	        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
	        // is filled with the initial data specified by the modifier. This means
	        // it doesn't persist and is fresh on each update.
	        // To ensure persistent data, use `${name}#persistent`

	        state.orderedModifiers.forEach(function (modifier) {
	          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
	        });
	        var __debug_loops__ = 0;

	        for (var index = 0; index < state.orderedModifiers.length; index++) {
	          {
	            __debug_loops__ += 1;

	            if (__debug_loops__ > 100) {
	              console.error(INFINITE_LOOP_ERROR);
	              break;
	            }
	          }

	          if (state.reset === true) {
	            state.reset = false;
	            index = -1;
	            continue;
	          }

	          var _state$orderedModifie = state.orderedModifiers[index],
	              fn = _state$orderedModifie.fn,
	              _state$orderedModifie2 = _state$orderedModifie.options,
	              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
	              name = _state$orderedModifie.name;

	          if (typeof fn === 'function') {
	            state = fn({
	              state: state,
	              options: _options,
	              name: name,
	              instance: instance
	            }) || state;
	          }
	        }
	      },
	      // Async and optimistically optimized update – it will not be executed if
	      // not necessary (debounced to run at most once-per-tick)
	      update: debounce$1(function () {
	        return new Promise(function (resolve) {
	          instance.forceUpdate();
	          resolve(state);
	        });
	      }),
	      destroy: function destroy() {
	        cleanupModifierEffects();
	        isDestroyed = true;
	      }
	    };

	    if (!areValidElements(reference, popper)) {
	      {
	        console.error(INVALID_ELEMENT_ERROR);
	      }

	      return instance;
	    }

	    instance.setOptions(options).then(function (state) {
	      if (!isDestroyed && options.onFirstUpdate) {
	        options.onFirstUpdate(state);
	      }
	    }); // Modifiers have the ability to execute arbitrary code before the first
	    // update cycle runs. They will be executed in the same order as the update
	    // cycle. This is useful when a modifier adds some persistent data that
	    // other modifiers need to use, but the modifier is run after the dependent
	    // one.

	    function runModifierEffects() {
	      state.orderedModifiers.forEach(function (_ref3) {
	        var name = _ref3.name,
	            _ref3$options = _ref3.options,
	            options = _ref3$options === void 0 ? {} : _ref3$options,
	            effect = _ref3.effect;

	        if (typeof effect === 'function') {
	          var cleanupFn = effect({
	            state: state,
	            name: name,
	            instance: instance,
	            options: options
	          });

	          var noopFn = function noopFn() {};

	          effectCleanupFns.push(cleanupFn || noopFn);
	        }
	      });
	    }

	    function cleanupModifierEffects() {
	      effectCleanupFns.forEach(function (fn) {
	        return fn();
	      });
	      effectCleanupFns = [];
	    }

	    return instance;
	  };
	}

	var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
	var createPopper = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers
	}); // eslint-disable-next-line import/no-unused-modules

	/**!
	* tippy.js v6.3.7
	* (c) 2017-2021 atomiks
	* MIT License
	*/
	var BOX_CLASS = "tippy-box";
	var CONTENT_CLASS = "tippy-content";
	var BACKDROP_CLASS = "tippy-backdrop";
	var ARROW_CLASS = "tippy-arrow";
	var SVG_ARROW_CLASS = "tippy-svg-arrow";
	var TOUCH_OPTIONS = {
	  passive: true,
	  capture: true
	};
	var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
	  return document.body;
	};

	function hasOwnProperty(obj, key) {
	  return {}.hasOwnProperty.call(obj, key);
	}
	function getValueAtIndexOrReturn(value, index, defaultValue) {
	  if (Array.isArray(value)) {
	    var v = value[index];
	    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
	  }

	  return value;
	}
	function isType(value, type) {
	  var str = {}.toString.call(value);
	  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
	}
	function invokeWithArgsOrReturn(value, args) {
	  return typeof value === 'function' ? value.apply(void 0, args) : value;
	}
	function debounce(fn, ms) {
	  // Avoid wrapping in `setTimeout` if ms is 0 anyway
	  if (ms === 0) {
	    return fn;
	  }

	  var timeout;
	  return function (arg) {
	    clearTimeout(timeout);
	    timeout = setTimeout(function () {
	      fn(arg);
	    }, ms);
	  };
	}
	function removeProperties(obj, keys) {
	  var clone = Object.assign({}, obj);
	  keys.forEach(function (key) {
	    delete clone[key];
	  });
	  return clone;
	}
	function splitBySpaces(value) {
	  return value.split(/\s+/).filter(Boolean);
	}
	function normalizeToArray(value) {
	  return [].concat(value);
	}
	function pushIfUnique(arr, value) {
	  if (arr.indexOf(value) === -1) {
	    arr.push(value);
	  }
	}
	function unique(arr) {
	  return arr.filter(function (item, index) {
	    return arr.indexOf(item) === index;
	  });
	}
	function getBasePlacement(placement) {
	  return placement.split('-')[0];
	}
	function arrayFrom(value) {
	  return [].slice.call(value);
	}
	function removeUndefinedProps(obj) {
	  return Object.keys(obj).reduce(function (acc, key) {
	    if (obj[key] !== undefined) {
	      acc[key] = obj[key];
	    }

	    return acc;
	  }, {});
	}

	function div() {
	  return document.createElement('div');
	}
	function isElement(value) {
	  return ['Element', 'Fragment'].some(function (type) {
	    return isType(value, type);
	  });
	}
	function isNodeList(value) {
	  return isType(value, 'NodeList');
	}
	function isMouseEvent(value) {
	  return isType(value, 'MouseEvent');
	}
	function isReferenceElement(value) {
	  return !!(value && value._tippy && value._tippy.reference === value);
	}
	function getArrayOfElements(value) {
	  if (isElement(value)) {
	    return [value];
	  }

	  if (isNodeList(value)) {
	    return arrayFrom(value);
	  }

	  if (Array.isArray(value)) {
	    return value;
	  }

	  return arrayFrom(document.querySelectorAll(value));
	}
	function setTransitionDuration(els, value) {
	  els.forEach(function (el) {
	    if (el) {
	      el.style.transitionDuration = value + "ms";
	    }
	  });
	}
	function setVisibilityState(els, state) {
	  els.forEach(function (el) {
	    if (el) {
	      el.setAttribute('data-state', state);
	    }
	  });
	}
	function getOwnerDocument(elementOrElements) {
	  var _element$ownerDocumen;

	  var _normalizeToArray = normalizeToArray(elementOrElements),
	      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


	  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
	}
	function isCursorOutsideInteractiveBorder(popperTreeData, event) {
	  var clientX = event.clientX,
	      clientY = event.clientY;
	  return popperTreeData.every(function (_ref) {
	    var popperRect = _ref.popperRect,
	        popperState = _ref.popperState,
	        props = _ref.props;
	    var interactiveBorder = props.interactiveBorder;
	    var basePlacement = getBasePlacement(popperState.placement);
	    var offsetData = popperState.modifiersData.offset;

	    if (!offsetData) {
	      return true;
	    }

	    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
	    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
	    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
	    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
	    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
	    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
	    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
	    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
	    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
	  });
	}
	function updateTransitionEndListener(box, action, listener) {
	  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
	  // `webkitTransitionEnd`...

	  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
	    box[method](event, listener);
	  });
	}
	/**
	 * Compared to xxx.contains, this function works for dom structures with shadow
	 * dom
	 */

	function actualContains(parent, child) {
	  var target = child;

	  while (target) {
	    var _target$getRootNode;

	    if (parent.contains(target)) {
	      return true;
	    }

	    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
	  }

	  return false;
	}

	var currentInput = {
	  isTouch: false
	};
	var lastMouseMoveTime = 0;
	/**
	 * When a `touchstart` event is fired, it's assumed the user is using touch
	 * input. We'll bind a `mousemove` event listener to listen for mouse input in
	 * the future. This way, the `isTouch` property is fully dynamic and will handle
	 * hybrid devices that use a mix of touch + mouse input.
	 */

	function onDocumentTouchStart() {
	  if (currentInput.isTouch) {
	    return;
	  }

	  currentInput.isTouch = true;

	  if (window.performance) {
	    document.addEventListener('mousemove', onDocumentMouseMove);
	  }
	}
	/**
	 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
	 * the user is using mouse input again. `mousemove` can fire on touch devices as
	 * well, but very rarely that quickly.
	 */

	function onDocumentMouseMove() {
	  var now = performance.now();

	  if (now - lastMouseMoveTime < 20) {
	    currentInput.isTouch = false;
	    document.removeEventListener('mousemove', onDocumentMouseMove);
	  }

	  lastMouseMoveTime = now;
	}
	/**
	 * When an element is in focus and has a tippy, leaving the tab/window and
	 * returning causes it to show again. For mouse users this is unexpected, but
	 * for keyboard use it makes sense.
	 * TODO: find a better technique to solve this problem
	 */

	function onWindowBlur() {
	  var activeElement = document.activeElement;

	  if (isReferenceElement(activeElement)) {
	    var instance = activeElement._tippy;

	    if (activeElement.blur && !instance.state.isVisible) {
	      activeElement.blur();
	    }
	  }
	}
	function bindGlobalEventListeners() {
	  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
	  window.addEventListener('blur', onWindowBlur);
	}

	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
	var isIE11 = isBrowser ? // @ts-ignore
	!!window.msCrypto : false;

	function createMemoryLeakWarning(method) {
	  var txt = method === 'destroy' ? 'n already-' : ' ';
	  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
	}
	function clean(value) {
	  var spacesAndTabs = /[ \t]{2,}/g;
	  var lineStartWithSpaces = /^[ \t]*/gm;
	  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
	}

	function getDevMessage(message) {
	  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
	}

	function getFormattedMessage(message) {
	  return [getDevMessage(message), // title
	  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
	  'line-height: 1.5', // footer
	  'color: #a6a095;'];
	} // Assume warnings and errors never have the same message

	var visitedMessages;

	{
	  resetVisitedMessages();
	}

	function resetVisitedMessages() {
	  visitedMessages = new Set();
	}
	function warnWhen(condition, message) {
	  if (condition && !visitedMessages.has(message)) {
	    var _console;

	    visitedMessages.add(message);

	    (_console = console).warn.apply(_console, getFormattedMessage(message));
	  }
	}
	function errorWhen(condition, message) {
	  if (condition && !visitedMessages.has(message)) {
	    var _console2;

	    visitedMessages.add(message);

	    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
	  }
	}
	function validateTargets(targets) {
	  var didPassFalsyValue = !targets;
	  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
	  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
	  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
	}

	var pluginProps = {
	  animateFill: false,
	  followCursor: false,
	  inlinePositioning: false,
	  sticky: false
	};
	var renderProps = {
	  allowHTML: false,
	  animation: 'fade',
	  arrow: true,
	  content: '',
	  inertia: false,
	  maxWidth: 350,
	  role: 'tooltip',
	  theme: '',
	  zIndex: 9999
	};
	var defaultProps = Object.assign({
	  appendTo: TIPPY_DEFAULT_APPEND_TO,
	  aria: {
	    content: 'auto',
	    expanded: 'auto'
	  },
	  delay: 0,
	  duration: [300, 250],
	  getReferenceClientRect: null,
	  hideOnClick: true,
	  ignoreAttributes: false,
	  interactive: false,
	  interactiveBorder: 2,
	  interactiveDebounce: 0,
	  moveTransition: '',
	  offset: [0, 10],
	  onAfterUpdate: function onAfterUpdate() {},
	  onBeforeUpdate: function onBeforeUpdate() {},
	  onCreate: function onCreate() {},
	  onDestroy: function onDestroy() {},
	  onHidden: function onHidden() {},
	  onHide: function onHide() {},
	  onMount: function onMount() {},
	  onShow: function onShow() {},
	  onShown: function onShown() {},
	  onTrigger: function onTrigger() {},
	  onUntrigger: function onUntrigger() {},
	  onClickOutside: function onClickOutside() {},
	  placement: 'top',
	  plugins: [],
	  popperOptions: {},
	  render: null,
	  showOnCreate: false,
	  touch: true,
	  trigger: 'mouseenter focus',
	  triggerTarget: null
	}, pluginProps, renderProps);
	var defaultKeys = Object.keys(defaultProps);
	var setDefaultProps = function setDefaultProps(partialProps) {
	  /* istanbul ignore else */
	  {
	    validateProps(partialProps, []);
	  }

	  var keys = Object.keys(partialProps);
	  keys.forEach(function (key) {
	    defaultProps[key] = partialProps[key];
	  });
	};
	function getExtendedPassedProps(passedProps) {
	  var plugins = passedProps.plugins || [];
	  var pluginProps = plugins.reduce(function (acc, plugin) {
	    var name = plugin.name,
	        defaultValue = plugin.defaultValue;

	    if (name) {
	      var _name;

	      acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
	    }

	    return acc;
	  }, {});
	  return Object.assign({}, passedProps, pluginProps);
	}
	function getDataAttributeProps(reference, plugins) {
	  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
	    plugins: plugins
	  }))) : defaultKeys;
	  var props = propKeys.reduce(function (acc, key) {
	    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

	    if (!valueAsString) {
	      return acc;
	    }

	    if (key === 'content') {
	      acc[key] = valueAsString;
	    } else {
	      try {
	        acc[key] = JSON.parse(valueAsString);
	      } catch (e) {
	        acc[key] = valueAsString;
	      }
	    }

	    return acc;
	  }, {});
	  return props;
	}
	function evaluateProps(reference, props) {
	  var out = Object.assign({}, props, {
	    content: invokeWithArgsOrReturn(props.content, [reference])
	  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
	  out.aria = Object.assign({}, defaultProps.aria, out.aria);
	  out.aria = {
	    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
	    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
	  };
	  return out;
	}
	function validateProps(partialProps, plugins) {
	  if (partialProps === void 0) {
	    partialProps = {};
	  }

	  if (plugins === void 0) {
	    plugins = [];
	  }

	  var keys = Object.keys(partialProps);
	  keys.forEach(function (prop) {
	    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
	    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

	    if (didPassUnknownProp) {
	      didPassUnknownProp = plugins.filter(function (plugin) {
	        return plugin.name === prop;
	      }).length === 0;
	    }

	    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
	  });
	}

	var innerHTML = function innerHTML() {
	  return 'innerHTML';
	};

	function dangerouslySetInnerHTML(element, html) {
	  element[innerHTML()] = html;
	}

	function createArrowElement(value) {
	  var arrow = div();

	  if (value === true) {
	    arrow.className = ARROW_CLASS;
	  } else {
	    arrow.className = SVG_ARROW_CLASS;

	    if (isElement(value)) {
	      arrow.appendChild(value);
	    } else {
	      dangerouslySetInnerHTML(arrow, value);
	    }
	  }

	  return arrow;
	}

	function setContent(content, props) {
	  if (isElement(props.content)) {
	    dangerouslySetInnerHTML(content, '');
	    content.appendChild(props.content);
	  } else if (typeof props.content !== 'function') {
	    if (props.allowHTML) {
	      dangerouslySetInnerHTML(content, props.content);
	    } else {
	      content.textContent = props.content;
	    }
	  }
	}
	function getChildren(popper) {
	  var box = popper.firstElementChild;
	  var boxChildren = arrayFrom(box.children);
	  return {
	    box: box,
	    content: boxChildren.find(function (node) {
	      return node.classList.contains(CONTENT_CLASS);
	    }),
	    arrow: boxChildren.find(function (node) {
	      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
	    }),
	    backdrop: boxChildren.find(function (node) {
	      return node.classList.contains(BACKDROP_CLASS);
	    })
	  };
	}
	function render(instance) {
	  var popper = div();
	  var box = div();
	  box.className = BOX_CLASS;
	  box.setAttribute('data-state', 'hidden');
	  box.setAttribute('tabindex', '-1');
	  var content = div();
	  content.className = CONTENT_CLASS;
	  content.setAttribute('data-state', 'hidden');
	  setContent(content, instance.props);
	  popper.appendChild(box);
	  box.appendChild(content);
	  onUpdate(instance.props, instance.props);

	  function onUpdate(prevProps, nextProps) {
	    var _getChildren = getChildren(popper),
	        box = _getChildren.box,
	        content = _getChildren.content,
	        arrow = _getChildren.arrow;

	    if (nextProps.theme) {
	      box.setAttribute('data-theme', nextProps.theme);
	    } else {
	      box.removeAttribute('data-theme');
	    }

	    if (typeof nextProps.animation === 'string') {
	      box.setAttribute('data-animation', nextProps.animation);
	    } else {
	      box.removeAttribute('data-animation');
	    }

	    if (nextProps.inertia) {
	      box.setAttribute('data-inertia', '');
	    } else {
	      box.removeAttribute('data-inertia');
	    }

	    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

	    if (nextProps.role) {
	      box.setAttribute('role', nextProps.role);
	    } else {
	      box.removeAttribute('role');
	    }

	    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
	      setContent(content, instance.props);
	    }

	    if (nextProps.arrow) {
	      if (!arrow) {
	        box.appendChild(createArrowElement(nextProps.arrow));
	      } else if (prevProps.arrow !== nextProps.arrow) {
	        box.removeChild(arrow);
	        box.appendChild(createArrowElement(nextProps.arrow));
	      }
	    } else if (arrow) {
	      box.removeChild(arrow);
	    }
	  }

	  return {
	    popper: popper,
	    onUpdate: onUpdate
	  };
	} // Runtime check to identify if the render function is the default one; this
	// way we can apply default CSS transitions logic and it can be tree-shaken away

	render.$$tippy = true;

	var idCounter = 1;
	var mouseMoveListeners = []; // Used by `hideAll()`

	var mountedInstances = [];
	function createTippy(reference, passedProps) {
	  var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
	  // 🔒 Private members
	  // ===========================================================================

	  var showTimeout;
	  var hideTimeout;
	  var scheduleHideAnimationFrame;
	  var isVisibleFromClick = false;
	  var didHideDueToDocumentMouseDown = false;
	  var didTouchMove = false;
	  var ignoreOnFirstUpdate = false;
	  var lastTriggerEvent;
	  var currentTransitionEndListener;
	  var onFirstUpdate;
	  var listeners = [];
	  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
	  var currentTarget; // ===========================================================================
	  // 🔑 Public members
	  // ===========================================================================

	  var id = idCounter++;
	  var popperInstance = null;
	  var plugins = unique(props.plugins);
	  var state = {
	    // Is the instance currently enabled?
	    isEnabled: true,
	    // Is the tippy currently showing and not transitioning out?
	    isVisible: false,
	    // Has the instance been destroyed?
	    isDestroyed: false,
	    // Is the tippy currently mounted to the DOM?
	    isMounted: false,
	    // Has the tippy finished transitioning in?
	    isShown: false
	  };
	  var instance = {
	    // properties
	    id: id,
	    reference: reference,
	    popper: div(),
	    popperInstance: popperInstance,
	    props: props,
	    state: state,
	    plugins: plugins,
	    // methods
	    clearDelayTimeouts: clearDelayTimeouts,
	    setProps: setProps,
	    setContent: setContent,
	    show: show,
	    hide: hide,
	    hideWithInteractivity: hideWithInteractivity,
	    enable: enable,
	    disable: disable,
	    unmount: unmount,
	    destroy: destroy
	  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
	  // it doesn't seem to happen in the browser

	  /* istanbul ignore if */

	  if (!props.render) {
	    {
	      errorWhen(true, 'render() function has not been supplied.');
	    }

	    return instance;
	  } // ===========================================================================
	  // Initial mutations
	  // ===========================================================================


	  var _props$render = props.render(instance),
	      popper = _props$render.popper,
	      onUpdate = _props$render.onUpdate;

	  popper.setAttribute('data-tippy-root', '');
	  popper.id = "tippy-" + instance.id;
	  instance.popper = popper;
	  reference._tippy = instance;
	  popper._tippy = instance;
	  var pluginsHooks = plugins.map(function (plugin) {
	    return plugin.fn(instance);
	  });
	  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
	  addListeners();
	  handleAriaExpandedAttribute();
	  handleStyles();
	  invokeHook('onCreate', [instance]);

	  if (props.showOnCreate) {
	    scheduleShow();
	  } // Prevent a tippy with a delay from hiding if the cursor left then returned
	  // before it started hiding


	  popper.addEventListener('mouseenter', function () {
	    if (instance.props.interactive && instance.state.isVisible) {
	      instance.clearDelayTimeouts();
	    }
	  });
	  popper.addEventListener('mouseleave', function () {
	    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
	      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
	    }
	  });
	  return instance; // ===========================================================================
	  // 🔒 Private methods
	  // ===========================================================================

	  function getNormalizedTouchSettings() {
	    var touch = instance.props.touch;
	    return Array.isArray(touch) ? touch : [touch, 0];
	  }

	  function getIsCustomTouchBehavior() {
	    return getNormalizedTouchSettings()[0] === 'hold';
	  }

	  function getIsDefaultRenderFn() {
	    var _instance$props$rende;

	    // @ts-ignore
	    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
	  }

	  function getCurrentTarget() {
	    return currentTarget || reference;
	  }

	  function getDocument() {
	    var parent = getCurrentTarget().parentNode;
	    return parent ? getOwnerDocument(parent) : document;
	  }

	  function getDefaultTemplateChildren() {
	    return getChildren(popper);
	  }

	  function getDelay(isShow) {
	    // For touch or keyboard input, force `0` delay for UX reasons
	    // Also if the instance is mounted but not visible (transitioning out),
	    // ignore delay
	    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
	      return 0;
	    }

	    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
	  }

	  function handleStyles(fromHide) {
	    if (fromHide === void 0) {
	      fromHide = false;
	    }

	    popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
	    popper.style.zIndex = "" + instance.props.zIndex;
	  }

	  function invokeHook(hook, args, shouldInvokePropsHook) {
	    if (shouldInvokePropsHook === void 0) {
	      shouldInvokePropsHook = true;
	    }

	    pluginsHooks.forEach(function (pluginHooks) {
	      if (pluginHooks[hook]) {
	        pluginHooks[hook].apply(pluginHooks, args);
	      }
	    });

	    if (shouldInvokePropsHook) {
	      var _instance$props;

	      (_instance$props = instance.props)[hook].apply(_instance$props, args);
	    }
	  }

	  function handleAriaContentAttribute() {
	    var aria = instance.props.aria;

	    if (!aria.content) {
	      return;
	    }

	    var attr = "aria-" + aria.content;
	    var id = popper.id;
	    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
	    nodes.forEach(function (node) {
	      var currentValue = node.getAttribute(attr);

	      if (instance.state.isVisible) {
	        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
	      } else {
	        var nextValue = currentValue && currentValue.replace(id, '').trim();

	        if (nextValue) {
	          node.setAttribute(attr, nextValue);
	        } else {
	          node.removeAttribute(attr);
	        }
	      }
	    });
	  }

	  function handleAriaExpandedAttribute() {
	    if (hasAriaExpanded || !instance.props.aria.expanded) {
	      return;
	    }

	    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
	    nodes.forEach(function (node) {
	      if (instance.props.interactive) {
	        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
	      } else {
	        node.removeAttribute('aria-expanded');
	      }
	    });
	  }

	  function cleanupInteractiveMouseListeners() {
	    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
	    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
	      return listener !== debouncedOnMouseMove;
	    });
	  }

	  function onDocumentPress(event) {
	    // Moved finger to scroll instead of an intentional tap outside
	    if (currentInput.isTouch) {
	      if (didTouchMove || event.type === 'mousedown') {
	        return;
	      }
	    }

	    var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper

	    if (instance.props.interactive && actualContains(popper, actualTarget)) {
	      return;
	    } // Clicked on the event listeners target


	    if (normalizeToArray(instance.props.triggerTarget || reference).some(function (el) {
	      return actualContains(el, actualTarget);
	    })) {
	      if (currentInput.isTouch) {
	        return;
	      }

	      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
	        return;
	      }
	    } else {
	      invokeHook('onClickOutside', [instance, event]);
	    }

	    if (instance.props.hideOnClick === true) {
	      instance.clearDelayTimeouts();
	      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
	      // currentTarget. This lets a tippy with `focus` trigger know that it
	      // should not show

	      didHideDueToDocumentMouseDown = true;
	      setTimeout(function () {
	        didHideDueToDocumentMouseDown = false;
	      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
	      // before it shows, and hide()'s early bail-out behavior can prevent it
	      // from being cleaned up

	      if (!instance.state.isMounted) {
	        removeDocumentPress();
	      }
	    }
	  }

	  function onTouchMove() {
	    didTouchMove = true;
	  }

	  function onTouchStart() {
	    didTouchMove = false;
	  }

	  function addDocumentPress() {
	    var doc = getDocument();
	    doc.addEventListener('mousedown', onDocumentPress, true);
	    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
	    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
	    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
	  }

	  function removeDocumentPress() {
	    var doc = getDocument();
	    doc.removeEventListener('mousedown', onDocumentPress, true);
	    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
	    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
	    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
	  }

	  function onTransitionedOut(duration, callback) {
	    onTransitionEnd(duration, function () {
	      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
	        callback();
	      }
	    });
	  }

	  function onTransitionedIn(duration, callback) {
	    onTransitionEnd(duration, callback);
	  }

	  function onTransitionEnd(duration, callback) {
	    var box = getDefaultTemplateChildren().box;

	    function listener(event) {
	      if (event.target === box) {
	        updateTransitionEndListener(box, 'remove', listener);
	        callback();
	      }
	    } // Make callback synchronous if duration is 0
	    // `transitionend` won't fire otherwise


	    if (duration === 0) {
	      return callback();
	    }

	    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
	    updateTransitionEndListener(box, 'add', listener);
	    currentTransitionEndListener = listener;
	  }

	  function on(eventType, handler, options) {
	    if (options === void 0) {
	      options = false;
	    }

	    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
	    nodes.forEach(function (node) {
	      node.addEventListener(eventType, handler, options);
	      listeners.push({
	        node: node,
	        eventType: eventType,
	        handler: handler,
	        options: options
	      });
	    });
	  }

	  function addListeners() {
	    if (getIsCustomTouchBehavior()) {
	      on('touchstart', onTrigger, {
	        passive: true
	      });
	      on('touchend', onMouseLeave, {
	        passive: true
	      });
	    }

	    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
	      if (eventType === 'manual') {
	        return;
	      }

	      on(eventType, onTrigger);

	      switch (eventType) {
	        case 'mouseenter':
	          on('mouseleave', onMouseLeave);
	          break;

	        case 'focus':
	          on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
	          break;

	        case 'focusin':
	          on('focusout', onBlurOrFocusOut);
	          break;
	      }
	    });
	  }

	  function removeListeners() {
	    listeners.forEach(function (_ref) {
	      var node = _ref.node,
	          eventType = _ref.eventType,
	          handler = _ref.handler,
	          options = _ref.options;
	      node.removeEventListener(eventType, handler, options);
	    });
	    listeners = [];
	  }

	  function onTrigger(event) {
	    var _lastTriggerEvent;

	    var shouldScheduleClickHide = false;

	    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
	      return;
	    }

	    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
	    lastTriggerEvent = event;
	    currentTarget = event.currentTarget;
	    handleAriaExpandedAttribute();

	    if (!instance.state.isVisible && isMouseEvent(event)) {
	      // If scrolling, `mouseenter` events can be fired if the cursor lands
	      // over a new target, but `mousemove` events don't get fired. This
	      // causes interactive tooltips to get stuck open until the cursor is
	      // moved
	      mouseMoveListeners.forEach(function (listener) {
	        return listener(event);
	      });
	    } // Toggle show/hide when clicking click-triggered tooltips


	    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
	      shouldScheduleClickHide = true;
	    } else {
	      scheduleShow(event);
	    }

	    if (event.type === 'click') {
	      isVisibleFromClick = !shouldScheduleClickHide;
	    }

	    if (shouldScheduleClickHide && !wasFocused) {
	      scheduleHide(event);
	    }
	  }

	  function onMouseMove(event) {
	    var target = event.target;
	    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

	    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
	      return;
	    }

	    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
	      var _instance$popperInsta;

	      var instance = popper._tippy;
	      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

	      if (state) {
	        return {
	          popperRect: popper.getBoundingClientRect(),
	          popperState: state,
	          props: props
	        };
	      }

	      return null;
	    }).filter(Boolean);

	    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
	      cleanupInteractiveMouseListeners();
	      scheduleHide(event);
	    }
	  }

	  function onMouseLeave(event) {
	    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

	    if (shouldBail) {
	      return;
	    }

	    if (instance.props.interactive) {
	      instance.hideWithInteractivity(event);
	      return;
	    }

	    scheduleHide(event);
	  }

	  function onBlurOrFocusOut(event) {
	    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
	      return;
	    } // If focus was moved to within the popper


	    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
	      return;
	    }

	    scheduleHide(event);
	  }

	  function isEventListenerStopped(event) {
	    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
	  }

	  function createPopperInstance() {
	    destroyPopperInstance();
	    var _instance$props2 = instance.props,
	        popperOptions = _instance$props2.popperOptions,
	        placement = _instance$props2.placement,
	        offset = _instance$props2.offset,
	        getReferenceClientRect = _instance$props2.getReferenceClientRect,
	        moveTransition = _instance$props2.moveTransition;
	    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
	    var computedReference = getReferenceClientRect ? {
	      getBoundingClientRect: getReferenceClientRect,
	      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
	    } : reference;
	    var tippyModifier = {
	      name: '$$tippy',
	      enabled: true,
	      phase: 'beforeWrite',
	      requires: ['computeStyles'],
	      fn: function fn(_ref2) {
	        var state = _ref2.state;

	        if (getIsDefaultRenderFn()) {
	          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
	              box = _getDefaultTemplateCh.box;

	          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
	            if (attr === 'placement') {
	              box.setAttribute('data-placement', state.placement);
	            } else {
	              if (state.attributes.popper["data-popper-" + attr]) {
	                box.setAttribute("data-" + attr, '');
	              } else {
	                box.removeAttribute("data-" + attr);
	              }
	            }
	          });
	          state.attributes.popper = {};
	        }
	      }
	    };
	    var modifiers = [{
	      name: 'offset',
	      options: {
	        offset: offset
	      }
	    }, {
	      name: 'preventOverflow',
	      options: {
	        padding: {
	          top: 2,
	          bottom: 2,
	          left: 5,
	          right: 5
	        }
	      }
	    }, {
	      name: 'flip',
	      options: {
	        padding: 5
	      }
	    }, {
	      name: 'computeStyles',
	      options: {
	        adaptive: !moveTransition
	      }
	    }, tippyModifier];

	    if (getIsDefaultRenderFn() && arrow) {
	      modifiers.push({
	        name: 'arrow',
	        options: {
	          element: arrow,
	          padding: 3
	        }
	      });
	    }

	    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
	    instance.popperInstance = createPopper(computedReference, popper, Object.assign({}, popperOptions, {
	      placement: placement,
	      onFirstUpdate: onFirstUpdate,
	      modifiers: modifiers
	    }));
	  }

	  function destroyPopperInstance() {
	    if (instance.popperInstance) {
	      instance.popperInstance.destroy();
	      instance.popperInstance = null;
	    }
	  }

	  function mount() {
	    var appendTo = instance.props.appendTo;
	    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
	    // it's directly after the reference element so the elements inside the
	    // tippy can be tabbed to
	    // If there are clipping issues, the user can specify a different appendTo
	    // and ensure focus management is handled correctly manually

	    var node = getCurrentTarget();

	    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
	      parentNode = node.parentNode;
	    } else {
	      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
	    } // The popper element needs to exist on the DOM before its position can be
	    // updated as Popper needs to read its dimensions


	    if (!parentNode.contains(popper)) {
	      parentNode.appendChild(popper);
	    }

	    instance.state.isMounted = true;
	    createPopperInstance();
	    /* istanbul ignore else */

	    {
	      // Accessibility check
	      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
	    }
	  }

	  function getNestedPopperTree() {
	    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
	  }

	  function scheduleShow(event) {
	    instance.clearDelayTimeouts();

	    if (event) {
	      invokeHook('onTrigger', [instance, event]);
	    }

	    addDocumentPress();
	    var delay = getDelay(true);

	    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
	        touchValue = _getNormalizedTouchSe[0],
	        touchDelay = _getNormalizedTouchSe[1];

	    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
	      delay = touchDelay;
	    }

	    if (delay) {
	      showTimeout = setTimeout(function () {
	        instance.show();
	      }, delay);
	    } else {
	      instance.show();
	    }
	  }

	  function scheduleHide(event) {
	    instance.clearDelayTimeouts();
	    invokeHook('onUntrigger', [instance, event]);

	    if (!instance.state.isVisible) {
	      removeDocumentPress();
	      return;
	    } // For interactive tippies, scheduleHide is added to a document.body handler
	    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
	    // events when trigger contains mouseenter and click, and the tip is
	    // currently shown as a result of a click.


	    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
	      return;
	    }

	    var delay = getDelay(false);

	    if (delay) {
	      hideTimeout = setTimeout(function () {
	        if (instance.state.isVisible) {
	          instance.hide();
	        }
	      }, delay);
	    } else {
	      // Fixes a `transitionend` problem when it fires 1 frame too
	      // late sometimes, we don't want hide() to be called.
	      scheduleHideAnimationFrame = requestAnimationFrame(function () {
	        instance.hide();
	      });
	    }
	  } // ===========================================================================
	  // 🔑 Public methods
	  // ===========================================================================


	  function enable() {
	    instance.state.isEnabled = true;
	  }

	  function disable() {
	    // Disabling the instance should also hide it
	    // https://github.com/atomiks/tippy.js-react/issues/106
	    instance.hide();
	    instance.state.isEnabled = false;
	  }

	  function clearDelayTimeouts() {
	    clearTimeout(showTimeout);
	    clearTimeout(hideTimeout);
	    cancelAnimationFrame(scheduleHideAnimationFrame);
	  }

	  function setProps(partialProps) {
	    /* istanbul ignore else */
	    {
	      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
	    }

	    if (instance.state.isDestroyed) {
	      return;
	    }

	    invokeHook('onBeforeUpdate', [instance, partialProps]);
	    removeListeners();
	    var prevProps = instance.props;
	    var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
	      ignoreAttributes: true
	    }));
	    instance.props = nextProps;
	    addListeners();

	    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
	      cleanupInteractiveMouseListeners();
	      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
	    } // Ensure stale aria-expanded attributes are removed


	    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
	      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
	        node.removeAttribute('aria-expanded');
	      });
	    } else if (nextProps.triggerTarget) {
	      reference.removeAttribute('aria-expanded');
	    }

	    handleAriaExpandedAttribute();
	    handleStyles();

	    if (onUpdate) {
	      onUpdate(prevProps, nextProps);
	    }

	    if (instance.popperInstance) {
	      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
	      // and the nested ones get re-rendered first.
	      // https://github.com/atomiks/tippyjs-react/issues/177
	      // TODO: find a cleaner / more efficient solution(!)

	      getNestedPopperTree().forEach(function (nestedPopper) {
	        // React (and other UI libs likely) requires a rAF wrapper as it flushes
	        // its work in one
	        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
	      });
	    }

	    invokeHook('onAfterUpdate', [instance, partialProps]);
	  }

	  function setContent(content) {
	    instance.setProps({
	      content: content
	    });
	  }

	  function show() {
	    /* istanbul ignore else */
	    {
	      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
	    } // Early bail-out


	    var isAlreadyVisible = instance.state.isVisible;
	    var isDestroyed = instance.state.isDestroyed;
	    var isDisabled = !instance.state.isEnabled;
	    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
	    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

	    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
	      return;
	    } // Normalize `disabled` behavior across browsers.
	    // Firefox allows events on disabled elements, but Chrome doesn't.
	    // Using a wrapper element (i.e. <span>) is recommended.


	    if (getCurrentTarget().hasAttribute('disabled')) {
	      return;
	    }

	    invokeHook('onShow', [instance], false);

	    if (instance.props.onShow(instance) === false) {
	      return;
	    }

	    instance.state.isVisible = true;

	    if (getIsDefaultRenderFn()) {
	      popper.style.visibility = 'visible';
	    }

	    handleStyles();
	    addDocumentPress();

	    if (!instance.state.isMounted) {
	      popper.style.transition = 'none';
	    } // If flipping to the opposite side after hiding at least once, the
	    // animation will use the wrong placement without resetting the duration


	    if (getIsDefaultRenderFn()) {
	      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
	          box = _getDefaultTemplateCh2.box,
	          content = _getDefaultTemplateCh2.content;

	      setTransitionDuration([box, content], 0);
	    }

	    onFirstUpdate = function onFirstUpdate() {
	      var _instance$popperInsta2;

	      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
	        return;
	      }

	      ignoreOnFirstUpdate = true; // reflow

	      void popper.offsetHeight;
	      popper.style.transition = instance.props.moveTransition;

	      if (getIsDefaultRenderFn() && instance.props.animation) {
	        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
	            _box = _getDefaultTemplateCh3.box,
	            _content = _getDefaultTemplateCh3.content;

	        setTransitionDuration([_box, _content], duration);
	        setVisibilityState([_box, _content], 'visible');
	      }

	      handleAriaContentAttribute();
	      handleAriaExpandedAttribute();
	      pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
	      // popper has been positioned for the first time

	      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
	      invokeHook('onMount', [instance]);

	      if (instance.props.animation && getIsDefaultRenderFn()) {
	        onTransitionedIn(duration, function () {
	          instance.state.isShown = true;
	          invokeHook('onShown', [instance]);
	        });
	      }
	    };

	    mount();
	  }

	  function hide() {
	    /* istanbul ignore else */
	    {
	      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
	    } // Early bail-out


	    var isAlreadyHidden = !instance.state.isVisible;
	    var isDestroyed = instance.state.isDestroyed;
	    var isDisabled = !instance.state.isEnabled;
	    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

	    if (isAlreadyHidden || isDestroyed || isDisabled) {
	      return;
	    }

	    invokeHook('onHide', [instance], false);

	    if (instance.props.onHide(instance) === false) {
	      return;
	    }

	    instance.state.isVisible = false;
	    instance.state.isShown = false;
	    ignoreOnFirstUpdate = false;
	    isVisibleFromClick = false;

	    if (getIsDefaultRenderFn()) {
	      popper.style.visibility = 'hidden';
	    }

	    cleanupInteractiveMouseListeners();
	    removeDocumentPress();
	    handleStyles(true);

	    if (getIsDefaultRenderFn()) {
	      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
	          box = _getDefaultTemplateCh4.box,
	          content = _getDefaultTemplateCh4.content;

	      if (instance.props.animation) {
	        setTransitionDuration([box, content], duration);
	        setVisibilityState([box, content], 'hidden');
	      }
	    }

	    handleAriaContentAttribute();
	    handleAriaExpandedAttribute();

	    if (instance.props.animation) {
	      if (getIsDefaultRenderFn()) {
	        onTransitionedOut(duration, instance.unmount);
	      }
	    } else {
	      instance.unmount();
	    }
	  }

	  function hideWithInteractivity(event) {
	    /* istanbul ignore else */
	    {
	      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
	    }

	    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
	    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
	    debouncedOnMouseMove(event);
	  }

	  function unmount() {
	    /* istanbul ignore else */
	    {
	      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
	    }

	    if (instance.state.isVisible) {
	      instance.hide();
	    }

	    if (!instance.state.isMounted) {
	      return;
	    }

	    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
	    // tree by default. This seems mainly for interactive tippies, but we should
	    // find a workaround if possible

	    getNestedPopperTree().forEach(function (nestedPopper) {
	      nestedPopper._tippy.unmount();
	    });

	    if (popper.parentNode) {
	      popper.parentNode.removeChild(popper);
	    }

	    mountedInstances = mountedInstances.filter(function (i) {
	      return i !== instance;
	    });
	    instance.state.isMounted = false;
	    invokeHook('onHidden', [instance]);
	  }

	  function destroy() {
	    /* istanbul ignore else */
	    {
	      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
	    }

	    if (instance.state.isDestroyed) {
	      return;
	    }

	    instance.clearDelayTimeouts();
	    instance.unmount();
	    removeListeners();
	    delete reference._tippy;
	    instance.state.isDestroyed = true;
	    invokeHook('onDestroy', [instance]);
	  }
	}

	function tippy(targets, optionalProps) {
	  if (optionalProps === void 0) {
	    optionalProps = {};
	  }

	  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
	  /* istanbul ignore else */

	  {
	    validateTargets(targets);
	    validateProps(optionalProps, plugins);
	  }

	  bindGlobalEventListeners();
	  var passedProps = Object.assign({}, optionalProps, {
	    plugins: plugins
	  });
	  var elements = getArrayOfElements(targets);
	  /* istanbul ignore else */

	  {
	    var isSingleContentElement = isElement(passedProps.content);
	    var isMoreThanOneReferenceElement = elements.length > 1;
	    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
	  }

	  var instances = elements.reduce(function (acc, reference) {
	    var instance = reference && createTippy(reference, passedProps);

	    if (instance) {
	      acc.push(instance);
	    }

	    return acc;
	  }, []);
	  return isElement(targets) ? instances[0] : instances;
	}

	tippy.defaultProps = defaultProps;
	tippy.setDefaultProps = setDefaultProps;
	tippy.currentInput = currentInput;

	// every time the popper is destroyed (i.e. a new target), removing the styles
	// and causing transitions to break for singletons when the console is open, but
	// most notably for non-transform styles being used, `gpuAcceleration: false`.

	Object.assign({}, applyStyles$1, {
	  effect: function effect(_ref) {
	    var state = _ref.state;
	    var initialStyles = {
	      popper: {
	        position: state.options.strategy,
	        left: '0',
	        top: '0',
	        margin: '0'
	      },
	      arrow: {
	        position: 'absolute'
	      },
	      reference: {}
	    };
	    Object.assign(state.elements.popper.style, initialStyles.popper);
	    state.styles = initialStyles;

	    if (state.elements.arrow) {
	      Object.assign(state.elements.arrow.style, initialStyles.arrow);
	    } // intentionally return no cleanup function
	    // return () => { ... }

	  }
	});

	tippy.setDefaultProps({
	  render: render
	});

	class Table {
	    constructor(el) {
	        this.tableDiv = el;
	        this.tableDiv.innerHTML = this.templateTable;

	        API.get().then(response => {
	            this.render(response);
	            this.addEvents();
	        });
	    }

	    render(users) {
	        let renderTr = '';

	        users.forEach(user => {
	            renderTr += this.templateTr(user);
	        });
	        this.tableDiv.querySelector('tbody').innerHTML = renderTr;
	        this.users = users;
	    }

	    addEvents() {
	        const addButton = document.querySelector('.add__button');
	        addButton.addEventListener('click', () => {
	            new PopupAddEdit('create').render();
	        });

	        const spanEdit = this.tableDiv.querySelectorAll('span.table-edit__contact');
	        spanEdit.forEach(span => {
	            span.addEventListener('click', () => {
	                const id = span.closest('tr').dataset.id;
	                API.get(id).then(response => {
	                    new PopupAddEdit('edit').render(response);
	                });
	            });
	        });

	        const spanDelete = this.tableDiv.querySelectorAll('span.table-delete__contact');
	        spanDelete.forEach(span => {
	            span.addEventListener('click',  async () => {
	                    const promise = new Popup(
	                        'Удалить клиента',
	                        'Вы действительно хотите удалить данного клиента?',
	                        'Удалить');
	                    if (await promise) {
	                        const id = span.closest('tr').dataset.id;
	                        API.delete(id).then(() => console.log('Контакт удален'));
	                    }
	                }
	            );
	        });

	        const thSort = this.tableDiv.querySelectorAll('th[data-sort-type]');
	        thSort.forEach(th => {
	            th.addEventListener('click', () => {
	                switch (th.dataset.sort) {
	                    case 'asc' : {
	                        th.dataset.sort = 'desc';
	                        break;
	                    }
	                    case 'desc': {
	                        th.dataset.sort = 'asc';
	                        break;
	                    }
	                    default: th.dataset.sort = 'asc';
	                }

	                this.sort(th.dataset.sortType, th.dataset.sort);
	            });
	        });

	        const i = this.tableDiv.querySelectorAll('i.tippy.fa');
	        i.forEach(i => {
	            tippy(i, {
	                content: i.getAttribute('contact-type') + ': ' + i.getAttribute('contact-value'),
	            });
	        });
	    };

	    sort(type, sort) {
	        switch (type) {
	            case 'id': {
	                this.users = this.users.sort(function(a, b) {
	                    console.log([a.id, b.id]);
	                    if (sort === 'asc') return a.id - b.id;
	                    else return b.id - a.id;
	                });
	                break;
	            }
	            case 'name': {
	                this.users = this.users.sort(function(a, b) {
	                    const nameA = a.surname.toLowerCase()+a.name.toLowerCase()+a.secondName.toLowerCase();
	                    const nameB = b.surname.toLowerCase()+b.name.toLowerCase()+b.secondName.toLowerCase();
	                    if (sort === 'asc') {
	                        if (nameA < nameB) return -1;
	                        if (nameA > nameB) return 1;
	                        return 0;
	                    } else {
	                        if (nameA > nameB) return -1;
	                        if (nameA < nameB) return 1;
	                        return 0;
	                    }
	                });
	                break;
	            }
	            case 'changeDate':
	            case 'createDate': {
	                this.users = this.users.sort(function(a, b){
	                    const dateA = new Date(a[type]).getTime();
	                    const dateB = new Date(b[type]).getTime();

	                    if (sort === 'asc') return dateA - dateB;
	                    else return dateB - dateA;
	                });
	                break;
	            }
	        }
	        const thSort = this.tableDiv.querySelectorAll(`th[data-sort-type]:not(th[data-sort-type="${type}"])`);

	        thSort.forEach(th => {
	            th.dataset.sort = '';
	        });
	        this.render(this.users);
	    }

	    templateTr = (user) => {
	        const dateCreate = new Date(user.createDate);
	        const dateChange = new Date(user.changeDate);

	        const tdContacts = document.createElement("td");

	        if (user.contacts) {
	            user.contacts.forEach(contact => {
	                const i = document.createElement("i");
	                i.classList.add('fa', 'tippy');
	                i.setAttribute('aria-hidden', "true");
	                i.setAttribute('contact-value', contact.value);

	                switch (contact.type) {
	                    case 'phone':
	                        i.setAttribute('contact-type', 'Телефон');
	                        i.classList.add('fa-phone'); break;
	                    case 'dopPhone':
	                        i.setAttribute('contact-type', 'Доп. телефон');
	                        i.classList.add('fa-phone'); break;
	                    case 'vk':
	                        i.setAttribute('contact-type', 'VK');
	                        i.classList.add('fa-vk'); break;
	                    case 'facebook':
	                        i.setAttribute('contact-type', 'Facebook');
	                        i.classList.add('fa-facebook'); break;
	                    case 'email':
	                        i.setAttribute('contact-type', 'Почта');
	                        i.classList.add('fa-envelope'); break;
	                    case 'other':
	                        i.setAttribute('contact-type', 'Контакт');
	                        i.classList.add('fa-address-card'); break;
	                }
	                tdContacts.append(i);
	            });
	        }

	        return `
        <tr data-id="${user.id}">
            <td>${user.id}</td>
            <td>${user.surname} ${user.name} ${user.secondName}</td>
            <td>
                ${dateCreate.toLocaleDateString()} 
                <span class="time">${dateCreate.toLocaleTimeString().slice(0,-3)}</span>
            </td>
            <td>
                ${dateChange.toLocaleDateString()} 
                <span class="time">${dateChange.toLocaleTimeString().slice(0,-3)}</span>
            </td>
            <td>
                ${tdContacts.innerHTML}
            </td>
            <td>
                <span class="table-edit__contact">Изменить</span>
                <span class="table-delete__contact">Удалить</span>
            </td>
        </tr>
        `
	    };

	    templateTable =
	        `
           <table class="uk-table uk-table-divider pb-5">
                <thead>
                <tr>
                    <th data-sort="asc" data-sort-type="id">ID</th>
                    <th data-sort-type="name">Фамилия Имя Отчество</th>
                    <th data-sort-type="createDate">Дата и время и создания</th>
                    <th data-sort-type="changeDate">Последние изменение</th>
                    <th>Контакты</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
        
                </tbody>
            </table>
        `;
	}

	/*! UIkit 3.14.3 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */

	var uikitIcons = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	    module.exports = factory() ;
	})(commonjsGlobal, (function () {
	    function plugin(UIkit) {
	      if (plugin.installed) {
	        return;
	      }

	      UIkit.icon.add({
	        "500px": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z\"/><path d=\"M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z\"/><path d=\"M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z\"/><path d=\"M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z\"/></svg>",
	        "album": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"5\" y=\"2\" width=\"10\" height=\"1\"/><rect x=\"3\" y=\"4\" width=\"14\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"6.5\" width=\"17\" height=\"11\"/></svg>",
	        "arrow-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66\"/><line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"4\" x2=\"10.5\" y2=\"15\"/></svg>",
	        "arrow-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"10 14 5 9.5 10 5\"/><line fill=\"none\" stroke=\"#000\" x1=\"16\" y1=\"9.5\" x2=\"5\" y2=\"9.52\"/></svg>",
	        "arrow-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"10 5 15 9.5 10 14\"/><line fill=\"none\" stroke=\"#000\" x1=\"4\" y1=\"9.5\" x2=\"15\" y2=\"9.5\"/></svg>",
	        "arrow-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4\"/><line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"16\" x2=\"10.5\" y2=\"5\"/></svg>",
	        "bag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M7.5,7.5V4A2.48,2.48,0,0,1,10,1.5,2.54,2.54,0,0,1,12.5,4V7.5\"/><polygon fill=\"none\" stroke=\"#000\" points=\"16.5 7.5 3.5 7.5 2.5 18.5 17.5 18.5 16.5 7.5\"/></svg>",
	        "ban": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"4\" y1=\"3.5\" x2=\"16\" y2=\"16.5\"/></svg>",
	        "behance": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z\"/><path d=\"M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z\"/><rect x=\"13\" y=\"4\" width=\"5\" height=\"1.4\"/></svg>",
	        "bell": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z\"/><path fill=\"none\" stroke=\"#000\" d=\"M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16\"/></svg>",
	        "bold": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z\"/></svg>",
	        "bolt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z\"/></svg>",
	        "bookmark": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5\"/></svg>",
	        "calendar": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z\"/><rect width=\"1\" height=\"3\" x=\"6\" y=\"2\"/><rect width=\"1\" height=\"3\" x=\"13\" y=\"2\"/></svg>",
	        "camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10.8\" r=\"3.8\"/><path fill=\"none\" stroke=\"#000\" d=\"M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z\"/></svg>",
	        "cart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/><circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/><polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/></svg>",
	        "check": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"4,10 8,15 17,4\"/></svg>",
	        "chevron-double-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"10 14 6 10 10 6\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"14 14 10 10 14 6\"/></svg>",
	        "chevron-double-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"10 6 14 10 10 14\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"6 6 10 10 6 14\"/></svg>",
	        "chevron-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"16 7 10 13 4 7\"/></svg>",
	        "chevron-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"13 16 7 10 13 4\"/></svg>",
	        "chevron-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"7 4 13 10 7 16\"/></svg>",
	        "chevron-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"4 13 10 7 16 13\"/></svg>",
	        "clock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\"/></svg>",
	        "close": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,16 L4,4\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,4 L4,16\"/></svg>",
	        "cloud-download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"/><polyline fill=\"none\" stroke=\"#000\" points=\"11.75 16 9.5 18.25 7.25 16\"/><path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"/></svg>",
	        "cloud-upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"/><polyline fill=\"none\" stroke=\"#000\" points=\"7.25 11.75 9.5 9.5 11.75 11.75\"/><path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"/></svg>",
	        "code": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"13,4 19,10 13,16\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"7,4 1,10 7,16\"/></svg>",
	        "cog": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"9.997\" cy=\"10\" r=\"3.31\"/><path fill=\"none\" stroke=\"#000\" d=\"M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z\"/></svg>",
	        "comment": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z\"/></svg>",
	        "commenting": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5\"/><circle cx=\"10\" cy=\"8\" r=\"1\"/><circle cx=\"6\" cy=\"8\" r=\"1\"/><circle cx=\"14\" cy=\"8\" r=\"1\"/></svg>",
	        "comments": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"2 0.5 19.5 0.5 19.5 13\"/><path d=\"M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z\"/></svg>",
	        "copy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/><polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/></svg>",
	        "credit-card": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"4.5\" width=\"17\" height=\"12\"/><rect x=\"1\" y=\"7\" width=\"18\" height=\"3\"/></svg>",
	        "database": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"4.64\" rx=\"7.5\" ry=\"3.14\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64\"/></svg>",
	        "desktop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"15\" width=\"1\" height=\"2\"/><rect x=\"11\" y=\"15\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"16\" width=\"10\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"3.5\" width=\"17\" height=\"11\"/></svg>",
	        "discord": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M16.074,4.361a14.243,14.243,0,0,0-3.61-1.134,10.61,10.61,0,0,0-.463.96,13.219,13.219,0,0,0-4,0,10.138,10.138,0,0,0-.468-.96A14.206,14.206,0,0,0,3.919,4.364,15.146,15.146,0,0,0,1.324,14.5a14.435,14.435,0,0,0,4.428,2.269A10.982,10.982,0,0,0,6.7,15.21a9.294,9.294,0,0,1-1.494-.727c.125-.093.248-.19.366-.289a10.212,10.212,0,0,0,8.854,0c.119.1.242.2.366.289a9.274,9.274,0,0,1-1.5.728,10.8,10.8,0,0,0,.948,1.562,14.419,14.419,0,0,0,4.431-2.27A15.128,15.128,0,0,0,16.074,4.361Zm-8.981,8.1a1.7,1.7,0,0,1-1.573-1.79A1.689,1.689,0,0,1,7.093,8.881a1.679,1.679,0,0,1,1.573,1.791A1.687,1.687,0,0,1,7.093,12.462Zm5.814,0a1.7,1.7,0,0,1-1.573-1.79,1.689,1.689,0,0,1,1.573-1.791,1.679,1.679,0,0,1,1.573,1.791A1.688,1.688,0,0,1,12.907,12.462Z\"/></svg>",
	        "download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"14,10 9.5,14.5 5,10\"/><rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"13.91\" x2=\"9.5\" y2=\"3\"/></svg>",
	        "dribbble": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
	        "etsy": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z\"/></svg>",
	        "expand": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"13 2 18 2 18 7 17 7 17 3 13 3\"/><polygon points=\"2 13 3 13 3 17 7 17 7 18 2 18\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11,9 L17,3\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M3,17 L9,11\"/></svg>",
	        "facebook": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z\"/></svg>",
	        "file-edit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z\"/><polyline fill=\"none\" stroke=\"#000\" points=\"16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5\"/></svg>",
	        "file-pdf": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" width=\"13\" height=\"17\" x=\"3.5\" y=\"1.5\"/><path d=\"M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z\"/></svg>",
	        "file-text": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" width=\"13\" height=\"17\" x=\"3.5\" y=\"1.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"12\" y1=\"12.5\" y2=\"12.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"8.5\" y2=\"8.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"6.5\" y2=\"6.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"10.5\" y2=\"10.5\"/></svg>",
	        "file": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"1.5\" width=\"13\" height=\"17\"/></svg>",
	        "flickr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5.5\" cy=\"9.5\" r=\"3.5\"/><circle cx=\"14.5\" cy=\"9.5\" r=\"3.5\"/></svg>",
	        "folder": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5\"/></svg>",
	        "forward": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z\"/></svg>",
	        "foursquare": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z\"/></svg>",
	        "future": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"19 2 18 2 18 6 14 6 14 7 19 7 19 2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path d=\"M13.018,14.197 L9.445,10.625\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\"/></svg>",
	        "git-branch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"3\" r=\"2\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14\" cy=\"6\" r=\"2\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"17\" r=\"2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5\"/></svg>",
	        "git-fork": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"5.79\" cy=\"2.79\" r=\"1.79\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14.19\" cy=\"2.79\" r=\"1.79\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"10.03\" cy=\"16.79\" r=\"1.79\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57\"/></svg>",
	        "github-alt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z\"/></svg>",
	        "github": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z\"/></svg>",
	        "gitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3.5\" y=\"1\" width=\"1.531\" height=\"11.471\"/><rect x=\"7.324\" y=\"4.059\" width=\"1.529\" height=\"15.294\"/><rect x=\"11.148\" y=\"4.059\" width=\"1.527\" height=\"15.294\"/><rect x=\"14.971\" y=\"4.059\" width=\"1.529\" height=\"8.412\"/></svg>",
	        "google": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z\"/></svg>",
	        "grid": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"2\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"2\" y=\"14\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"14\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"14\" width=\"3\" height=\"3\"/></svg>",
	        "happy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"1\"/><circle cx=\"7\" cy=\"7\" r=\"1\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"8.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4\"/></svg>",
	        "hashtag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z\"/></svg>",
	        "heart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/></svg>",
	        "history": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"#000\" points=\"1 2 2 2 2 6 6 6 6 7 1 7 1 2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\"/></svg>",
	        "home": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65\"/><polygon points=\"15 4 18 4 18 7 17 7 17 5 15 5\"/><polygon points=\"3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19\"/></svg>",
	        "image": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16.1\" cy=\"6.1\" r=\"1.1\"/><rect fill=\"none\" stroke=\"#000\" x=\".5\" y=\"2.5\" width=\"19\" height=\"15\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"4,13 8,9 13,14\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"11,12 12.5,10.5 16,14\"/></svg>",
	        "info": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
	        "instagram": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z\"/><circle cx=\"14.87\" cy=\"5.26\" r=\"1.09\"/><path d=\"M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z\"/></svg>",
	        "italic": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z\"/></svg>",
	        "joomla": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z\"/><path d=\"M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8\"/><path d=\"M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8\"/><path d=\"M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7\"/></svg>",
	        "laptop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"16\" width=\"20\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"2.5\" y=\"4.5\" width=\"15\" height=\"10\"/></svg>",
	        "lifesaver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z\"/></svg>",
	        "link": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M7.925,11.875 L11.925,7.975\"/></svg>",
	        "linkedin": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z\"/><path d=\"M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z\"/></svg>",
	        "list": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"1\"/><rect x=\"6\" y=\"9\" width=\"12\" height=\"1\"/><rect x=\"6\" y=\"14\" width=\"12\" height=\"1\"/><rect x=\"2\" y=\"4\" width=\"2\" height=\"1\"/><rect x=\"2\" y=\"9\" width=\"2\" height=\"1\"/><rect x=\"2\" y=\"14\" width=\"2\" height=\"1\"/></svg>",
	        "location": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"6.8\" r=\"2.3\"/></svg>",
	        "lock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" height=\"10\" width=\"13\" y=\"8.5\" x=\"3.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8\"/></svg>",
	        "mail": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"1.4,6.5 10,11 18.6,6.5\"/><path d=\"M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z\"/></svg>",
	        "menu": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"4\" width=\"16\" height=\"1\"/><rect x=\"2\" y=\"9\" width=\"16\" height=\"1\"/><rect x=\"2\" y=\"14\" width=\"16\" height=\"1\"/></svg>",
	        "microphone": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" x1=\"10\" x2=\"10\" y1=\"16.44\" y2=\"18.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"7\" x2=\"13\" y1=\"18.5\" y2=\"18.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6\"/></svg>",
	        "minus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"/></svg>",
	        "minus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect height=\"1\" width=\"18\" y=\"9\" x=\"1\"/></svg>",
	        "more-vertical": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"3\" r=\"2\"/><circle cx=\"10\" cy=\"10\" r=\"2\"/><circle cx=\"10\" cy=\"17\" r=\"2\"/></svg>",
	        "more": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3\" cy=\"10\" r=\"2\"/><circle cx=\"10\" cy=\"10\" r=\"2\"/><circle cx=\"17\" cy=\"10\" r=\"2\"/></svg>",
	        "move": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"4,5 1,5 1,9 2,9 2,6 4,6\"/><polygon points=\"1,16 2,16 2,18 4,18 4,19 1,19\"/><polygon points=\"14,16 14,19 11,19 11,18 13,18 13,16\"/><rect fill=\"none\" stroke=\"#000\" x=\"5.5\" y=\"1.5\" width=\"13\" height=\"13\"/><rect x=\"1\" y=\"11\" width=\"1\" height=\"3\"/><rect x=\"6\" y=\"18\" width=\"3\" height=\"1\"/></svg>",
	        "nut": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"3.5\"/></svg>",
	        "pagekit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19\"/></svg>",
	        "paint-bucket": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.42,2.33 L11.7,7.61\"/><path d=\"M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z\"/></svg>",
	        "pencil": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z\"/><path fill=\"none\" stroke=\"#000\" d=\"M15.98,7.268 L13.851,5.148\"/></svg>",
	        "phone-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z\"/><circle cx=\"3.8\" cy=\"10.5\" r=\".8\"/></svg>",
	        "phone": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z\"/><circle cx=\"10.5\" cy=\"16.5\" r=\".8\"/></svg>",
	        "pinterest": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1\"/></svg>",
	        "play-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"8.5 7 13.5 10 8.5 13\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
	        "play": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"6.5,5 14.5,10 6.5,15\"/></svg>",
	        "plus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"5\" x2=\"9.5\" y2=\"14\"/><line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"/></svg>",
	        "plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"1\" width=\"1\" height=\"17\"/><rect x=\"1\" y=\"9\" width=\"17\" height=\"1\"/></svg>",
	        "print": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5\"/><polyline fill=\"none\" stroke=\"#000\" points=\"15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5\"/><rect fill=\"none\" stroke=\"#000\" width=\"11\" height=\"6\" x=\"4.5\" y=\"11.5\"/><rect width=\"8\" height=\"1\" x=\"6\" y=\"13\"/><rect width=\"8\" height=\"1\" x=\"6\" y=\"15\"/></svg>",
	        "pull": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"11\" x2=\"9.5\" y2=\"2\"/><polyline fill=\"none\" stroke=\"#000\" points=\"6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5\"/></svg>",
	        "push": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"10\" x2=\"9.5\" y2=\"1\"/><polyline fill=\"none\" stroke=\"#000\" points=\"6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5\"/></svg>",
	        "question": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><circle cx=\"10.44\" cy=\"14.42\" r=\"1.05\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" d=\"M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75\"/></svg>",
	        "quote-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z\"/><path d=\"M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z\"/></svg>",
	        "receiver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611\"/></svg>",
	        "reddit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z\"/><path d=\"M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z\"/><path d=\"M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z\"/><path d=\"M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z\"/></svg>",
	        "refresh": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5\"/><polyline fill=\"none\" stroke=\"#000\" points=\"9.9 2 12.79 4.89 9.79 7.9\"/></svg>",
	        "reply": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z\"/></svg>",
	        "rss": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3.12\" cy=\"16.8\" r=\"1.85\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5\"/></svg>",
	        "search": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>",
	        "server": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"7\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"16\" y=\"3\" width=\"1\" height=\"1\"/><rect x=\"16\" y=\"10\" width=\"1\" height=\"1\"/><circle fill=\"none\" stroke=\"#000\" cx=\"9.9\" cy=\"17.4\" r=\"1.4\"/><rect x=\"3\" y=\"10\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"10\" width=\"1\" height=\"2\"/><rect x=\"9.5\" y=\"14\" width=\"1\" height=\"2\"/><rect x=\"3\" y=\"17\" width=\"6\" height=\"1\"/><rect x=\"11\" y=\"17\" width=\"6\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"1.5\" width=\"17\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"8.5\" width=\"17\" height=\"5\"/></svg>",
	        "settings": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"3.55\" rx=\"2.11\" ry=\"2.15\"/><ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"15.55\" rx=\"2.11\" ry=\"2.15\"/><circle fill=\"none\" stroke=\"#000\" cx=\"13.15\" cy=\"9.55\" r=\"2.15\"/><rect x=\"1\" y=\"3\" width=\"3\" height=\"1\"/><rect x=\"10\" y=\"3\" width=\"8\" height=\"1\"/><rect x=\"1\" y=\"9\" width=\"8\" height=\"1\"/><rect x=\"15\" y=\"9\" width=\"3\" height=\"1\"/><rect x=\"1\" y=\"15\" width=\"3\" height=\"1\"/><rect x=\"10\" y=\"15\" width=\"8\" height=\"1\"/></svg>",
	        "shrink": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"11 4 12 4 12 8 16 8 16 9 11 9\"/><polygon points=\"4 11 9 11 9 16 8 16 8 12 4 12\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M12,8 L18,2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2,18 L8,12\"/></svg>",
	        "sign-in": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3\"/><polygon points=\"9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5\"/></svg>",
	        "sign-out": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5\"/><polygon points=\"13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3\"/></svg>",
	        "social": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.4\" y1=\"14\" x2=\"6.3\" y2=\"10.7\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.5\" y1=\"5.5\" x2=\"6.5\" y2=\"8.8\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"4.6\" r=\"2.3\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"14.8\" r=\"2.3\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"4.5\" cy=\"9.8\" r=\"2.3\"/></svg>",
	        "soundcloud": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z\"/><rect x=\"6\" y=\"6.5\" width=\"1.5\" height=\"8.5\"/><rect x=\"3\" y=\"8\" width=\"1.5\" height=\"7\"/><rect y=\"10\" width=\"1.5\" height=\"5\"/></svg>",
	        "star": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27\"/></svg>",
	        "strikethrough": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z\"/><rect x=\"3\" y=\"10\" width=\"15\" height=\"1\"/></svg>",
	        "table": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1\" y=\"3\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"7\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"11\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"15\" width=\"18\" height=\"1\"/></svg>",
	        "tablet-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z\"/><circle cx=\"3.7\" cy=\"10.5\" r=\".8\"/></svg>",
	        "tablet": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z\"/><circle cx=\"10.5\" cy=\"16.3\" r=\".8\"/></svg>",
	        "tag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z\"/><circle cx=\"14\" cy=\"6\" r=\"1\"/></svg>",
	        "thumbnails": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"3.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"3.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"11.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"11.5\" width=\"5\" height=\"5\"/></svg>",
	        "tiktok": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z\"/></svg>",
	        "trash": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"6.5 3 6.5 1.5 13.5 1.5 13.5 3\"/><polyline fill=\"none\" stroke=\"#000\" points=\"4.5 4 4.5 18.5 15.5 18.5 15.5 4\"/><rect x=\"8\" y=\"7\" width=\"1\" height=\"9\"/><rect x=\"11\" y=\"7\" width=\"1\" height=\"9\"/><rect x=\"2\" y=\"3\" width=\"16\" height=\"1\"/></svg>",
	        "triangle-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"5 7 15 7 10 12\"/></svg>",
	        "triangle-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"12 5 7 10 12 15\"/></svg>",
	        "triangle-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"8 5 13 10 8 15\"/></svg>",
	        "triangle-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"5 13 10 8 15 13\"/></svg>",
	        "tripadvisor": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z\"/></svg>",
	        "tumblr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z\"/></svg>",
	        "tv": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"7\" y=\"16\" width=\"6\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\".5\" y=\"3.5\" width=\"19\" height=\"11\"/></svg>",
	        "twitch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z\"/><rect x=\"12.98\" y=\"4.55\" width=\"1.29\" height=\"3.88\"/><rect x=\"9.43\" y=\"4.55\" width=\"1.29\" height=\"3.88\"/></svg>",
	        "twitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74\"/></svg>",
	        "uikit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3\"/><polygon points=\"9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3\"/></svg>",
	        "unlock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"8.5\" width=\"13\" height=\"10\"/><path fill=\"none\" stroke=\"#000\" d=\"M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9\"/></svg>",
	        "upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"5 8 9.5 3.5 14 8\"/><rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"15\" x2=\"9.5\" y2=\"4\"/></svg>",
	        "user": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.9\" cy=\"6.4\" r=\"4.4\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2\"/></svg>",
	        "users": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"7.7\" cy=\"8.6\" r=\"3.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1\"/></svg>",
	        "video-camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9\"/></svg>",
	        "vimeo": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z\"/></svg>",
	        "warning": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"14\" r=\"1\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><path d=\"M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z\"/></svg>",
	        "whatsapp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9\"/></svg>",
	        "wordpress": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z\"/></svg>",
	        "world": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M1,10.5 L19,10.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M2.35,15.5 L17.65,15.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M2.35,5.5 L17.523,5.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10.5\" r=\"9\"/></svg>",
	        "xing": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z\"/><path d=\"M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z\"/></svg>",
	        "yelp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z\"/></svg>",
	        "youtube": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z\"/></svg>" });

	    }

	    if (typeof window !== 'undefined' && window.UIkit) {
	      window.UIkit.use(plugin);
	    }

	    return plugin;

	}));
	});

	class findUser {
	    constructor(el) {
	        this.inputDiv = el;
	        this.addEvents();
	    }

	    addEvents() {
	        const input = this.inputDiv.querySelector('input');
	        input.addEventListener('input', () => {
	            if (input.value.length > 0) {
	                clearTimeout(this.timerId);
	                this.timerId = setTimeout(this.render, 300, input.value);
	            } else this.unRender();
	        });

	        this.inputDiv.addEventListener('click', (e) => (e._isClickInFindInput = true));
	        document.querySelector('body').addEventListener('click', (e) => {
	            if (!e._isClickInFindInput) this.unRender();
	        });
	    }

	    render = (value) => {
	        this.unRender();

	        API.find(value).then(response => {
	            const ul = document.createElement("ul");
	            let countFind = 0;
	            response.forEach(f => {
	                countFind++;
	                if (countFind > 5) return true;
	                ul.innerHTML += `<li data-find-id="${f.id}">${f.surname} ${f.name} ${f.secondName}</li>`;
	            });

	            document.querySelector('div.js-find__user').append(ul);

	            const liElements = ul.querySelectorAll('li');
	            liElements.forEach(li => {
	               li.addEventListener('click', () => {
	                   const tr = document.querySelector(`tr[data-id="${li.dataset.findId}"]`);
	                   tr.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
	                   tr.classList.add('active__find');
	                   setTimeout(() => tr.classList.remove('active__find'), 3000);
	                   this.unRender();
	               });
	            });
	        });
	    }

	    unRender = () => {
	        const div = document.querySelector('div.js-find__user > ul');
	        if (div) div.remove();
	    }
	}

	class RandomUsers {
	    constructor(count) {
	        for (let i = 0; i < count; i++) {
	            const sex = RandomUsers.getRandomInt(2);
	            const user = {
	                name: RandomUsers.name[sex][RandomUsers.getRandomInt(RandomUsers.name[sex].length)],
	                surname: RandomUsers.surname[RandomUsers.getRandomInt(RandomUsers.surname.length)] + (sex ? 'a' : ''),
	                secondName: RandomUsers.secondName[RandomUsers.getRandomInt(RandomUsers.secondName.length)] + (sex ? 'на' : 'ич'),
	                createDate: RandomUsers.randomDate('01-01-1900', '01-01-2004'),
	                changeDate: RandomUsers.randomDate('01-01-2004'),
	                contacts: null,
	            };
	            setTimeout(() => API.add(user), 100 * (i + 1));
	        }
	    }

	    static surname = [
	        'Смирнов', 'Иванов', 'Кузнецов', 'Соколов', 'Попов', 'Лебедев', 'Козлов', 'Новиков', 'Морозов', 'Петров', 'Волков',
	        'Соловьёв', 'Васильев', 'Зайцев', 'Павлов', 'Семёнов', 'Голубев', 'Виноградов', 'Богданов', 'Воробьёв', 'Фёдоров',
	        'Михайлов', 'Беляев', 'Тарасов', 'Белов',
	    ];

	    static name = [
	        ['Александр', 'Матвей', 'Артем', 'Михаил', 'Иван', 'Тимофей', 'Кирилл', 'Дмитрий','Даниил'],
	        ['Мария', 'Варвара', 'Виктория', 'Алиса', 'Ксения', 'Василиса', 'Милана', 'Ева', 'Александра'],
	    ];

	    static secondName = [
	        'Александров', 'Алексеев', 'Богданов', 'Борисов', 'Всеволодов', 'Вячеславов', 'Глебов', 'Григорьев', 'Ефимов',
	        'Иль', 'Иосифов', 'Константинов', 'Леонидов', 'Олегов', 'Степанов']
	    ;

	    static randomDate = (date1 = '01-01-1900', date2 = new Date().toISOString()) => {
	        function getRandomArbitrary(min, max) {
	            return Math.random() * (max - min) + min;
	        }
	        date1 = new Date(date1).getTime();
	        date2 = new Date(date2).getTime();
	        if(date1 > date2) {
	            return new Date(getRandomArbitrary(date2,date1));
	        } else {
	            return new Date(getRandomArbitrary(date1, date2));
	        }
	    }

	    static getRandomInt = (max) => {
	        return Math.floor(Math.random() * max);
	    }
	}

	uikit.use(uikitIcons);

	document.addEventListener("DOMContentLoaded", async () => {
	    const tableDiv = document.querySelector('div.js-render__table');
	    const findDiv = document.querySelector('div.js-find__user');

	    new Table(tableDiv);
	    new findUser(findDiv);

	    const buttonRandomUsers = document.querySelector('button.js-random-user');
	    const inputRandomUsers = document.querySelector('input.js-random-user');
	    buttonRandomUsers.addEventListener('click', () => {
	        new RandomUsers(inputRandomUsers.value);
	    });
	});

})();
//# sourceMappingURL=bundle.js.map
