function _defineProperties(t,n){for(var e=0;e<n.length;e++){var l=n[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8JnZ":function(t,n,e){"use strict";e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return u}));var l=e("ApNh"),r=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],o=function(t){function n(t,e,l){var o;_classCallCheck(this,n),(o=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,t)))._focusMonitor=e,o._animationMode=l,o.isRoundButton=o._hasHostAttributes("mat-fab","mat-mini-fab"),o.isIconButton=o._hasHostAttributes("mat-icon-button");var u=!0,i=!1,a=void 0;try{for(var s,c=r[Symbol.iterator]();!(u=(s=c.next()).done);u=!0){var f=s.value;o._hasHostAttributes(f)&&o._getHostElement().classList.add(f)}}catch(b){i=!0,a=b}finally{try{u||null==c.return||c.return()}finally{if(i)throw a}}return t.nativeElement.classList.add("mat-button-base"),o._focusMonitor.monitor(o._elementRef,!0),o.isRoundButton&&(o.color="accent"),o}return _inherits(n,t),_createClass(n,[{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"focus",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"program",n=arguments.length>1?arguments[1]:void 0;this._focusMonitor.focusVia(this._getHostElement(),t,n)}},{key:"_getHostElement",value:function(){return this._elementRef.nativeElement}},{key:"_isRippleDisabled",value:function(){return this.disableRipple||this.disabled}},{key:"_hasHostAttributes",value:function(){for(var t=this,n=arguments.length,e=new Array(n),l=0;l<n;l++)e[l]=arguments[l];return e.some((function(n){return t._getHostElement().hasAttribute(n)}))}}]),n}(Object(l.z)(Object(l.B)(Object(l.A)((function t(n){_classCallCheck(this,t),this._elementRef=n}))))),u=function(t){function n(t,e,l){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,e,t,l))}return _inherits(n,t),_createClass(n,[{key:"_haltDisabledEvents",value:function(t){this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}]),n}(o),i=function t(){_classCallCheck(this,t)}},Ux2z:function(t,n,e){"use strict";e.r(n);var l=e("kZht"),r=function t(){_classCallCheck(this,t)},o=e("C9Ky"),u=e("1VvW"),i=e("An66"),a=function t(){_classCallCheck(this,t)},s=l.pb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex-direction:column}"]],data:{}});function c(t){return l.Nb(2,[(t()(),l.rb(0,0,null,null,15,"div",[["class","jumbotron"]],null,null,null,null,null)),(t()(),l.rb(1,0,null,null,1,"h1",[["class","display-4"]],null,null,null,null,null)),(t()(),l.Lb(-1,null,[" Layouts! "])),(t()(),l.rb(3,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(t()(),l.Lb(-1,null,[' Here are a couple of examples for Layouts. Use the "Editable" to play around with different panel settings, and use the "Application" to see a working example. '])),(t()(),l.rb(5,0,null,null,0,"hr",[["class","my-4"]],null,null,null,null,null)),(t()(),l.rb(6,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),l.Lb(-1,null,[" Select one of the demos before, and click the arrow icon to return here. "])),(t()(),l.rb(8,0,null,null,3,"a",[["class","btn btn-primary btn-lg mr-3"],["role","button"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(t,n,e){var r=!0;return"click"===n&&(r=!1!==l.Db(t,9).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),l.qb(9,671744,null,0,u.m,[u.k,u.a,i.i],{routerLink:[0,"routerLink"]},null),l.Eb(10,1),(t()(),l.Lb(-1,null,[" Editable "])),(t()(),l.rb(12,0,null,null,3,"a",[["class","btn btn-primary btn-lg"],["role","button"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(t,n,e){var r=!0;return"click"===n&&(r=!1!==l.Db(t,13).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),l.qb(13,671744,null,0,u.m,[u.k,u.a,i.i],{routerLink:[0,"routerLink"]},null),l.Eb(14,1),(t()(),l.Lb(-1,null,[" Application "]))],(function(t,n){var e=t(n,10,0,"/editable");t(n,9,0,e);var l=t(n,14,0,"/mobile");t(n,13,0,l)}),(function(t,n){t(n,8,0,l.Db(n,9).target,l.Db(n,9).href),t(n,12,0,l.Db(n,13).target,l.Db(n,13).href)}))}var f=l.nb("rg-outlet-home",a,(function(t){return l.Nb(0,[(t()(),l.rb(0,0,null,null,1,"rg-outlet-home",[],null,null,null,c,s)),l.qb(1,49152,null,0,a,[],null,null)],null,null)}),{},{},[]),b=function t(){_classCallCheck(this,t)},h=e("pOQZ"),p=e("ApNh"),d=e("ENSU"),_=e("4rR8"),m=e("8JnZ");e.d(n,"HomeModuleNgFactory",(function(){return y}));var y=l.ob(r,[],(function(t){return l.Ab([l.Bb(512,l.j,l.Z,[[8,[o.a,f]],[3,l.j],l.v]),l.Bb(4608,i.n,i.m,[l.s,[2,i.E]]),l.Bb(1073742336,i.c,i.c,[]),l.Bb(1073742336,u.n,u.n,[[2,u.s],[2,u.k]]),l.Bb(1073742336,b,b,[]),l.Bb(1073742336,h.a,h.a,[]),l.Bb(1073742336,p.l,p.l,[[2,p.d],[2,d.f]]),l.Bb(1073742336,_.b,_.b,[]),l.Bb(1073742336,p.u,p.u,[]),l.Bb(1073742336,m.c,m.c,[]),l.Bb(1073742336,r,r,[]),l.Bb(1024,u.i,(function(){return[[{path:"",component:a}]]}),[])])}))},pOQZ:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return i}));var l=e("An66"),r=e("kZht"),o=new r.o("cdk-dir-doc",{providedIn:"root",factory:function(){return Object(r.U)(l.d)}}),u=function(){var t=function(){function t(n){if(_classCallCheck(this,t),this.value="ltr",this.change=new r.m,n){var e=n.documentElement?n.documentElement.dir:null,l=(n.body?n.body.dir:null)||e;this.value="ltr"===l||"rtl"===l?l:"ltr"}}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.change.complete()}}]),t}();return t.ngInjectableDef=Object(r.Rb)({factory:function(){return new t(Object(r.Sb)(o,8))},token:t,providedIn:"root"}),t}(),i=function t(){_classCallCheck(this,t)}}}]);