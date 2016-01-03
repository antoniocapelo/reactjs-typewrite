!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t,e,n){for(var r=!0;r;){var i=t,s=e,a=n;r=!1,null===i&&(i=Function.prototype);var o=Object.getOwnPropertyDescriptor(i,s);if(void 0!==o){if("value"in o)return o.value;var u=o.get;return void 0===u?void 0:u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return void 0;t=l,e=s,n=a,r=!0,o=l=void 0}},u=n(1),l=r(u),c=n(2),p=r(c),h=n(4),d=r(h),f=function(t){function e(t){i(this,e),o(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t);var n=[],r=d["default"].isArray(this.props.text)?this.props.text:[this.props.text];this.props.randomize&&this.calculateRandomTimeouts(n,r),this.state={total:r[0].length-1,base:r[0],current:0,randoms:n,cleaning:!1,textIndex:0,textsToType:r,delay:this.props.initialDelay,justStarted:!0}}return s(e,t),a(e,[{key:"render",value:function(){var t=this.ready(),e=d["default"].take(this.state.textsToType,this.state.textIndex).join(""),n=this.state.base.substring(0,this.state.current),r=this.props.cleanUp?n:e+n;return t||this.getNextState(),l["default"].createElement("div",{className:"type-container"},l["default"].createElement("p",null,r,l["default"].createElement("span",{style:t?p["default"].cursor:{}},"|")))}},{key:"getNextState",value:function(){var t=this.state.base,n=this.state.textIndex,r=this.state.cleaning&&this.state.current>0||this.stringAtEnd()&&this.props.cleanUp,i=r?this.stringAtBegining()?0:this.state.current-1:this.state.current+1,s=void 0,a=!1;s=this.state.delay?this.state.delay:this.stringAtBegining()||this.stringAtEnd()?this.props.betweenDelay||e.END_OF_STRING_DELAY:void 0,this.shouldUpdateTextIndex()&&(n=this.getNextTextIndex(),t=this.state.textsToType[n],r=!1,i=0,a=!0);var o=s?s:r?e.ERASE_SPEED:this.getTimeout();window.setTimeout(function(){this.setState({total:t.length,base:t,current:i,cleaning:r,justStarted:a,delay:void 0,textIndex:n,textsToType:this.state.textsToType})}.bind(this),o)}},{key:"calculateRandomTimeouts",value:function(t,e){for(var n=d["default"].reduce(e,function(t,e){return t>e.length?t:e.length},0),r=0;n>r;r++){var i=Math.ceil(Math.random()*this.props.timeout),s=i>150?i:150;t.push(s)}}},{key:"getTimeout",value:function(){return this.props.randomize?this.state.randoms[this.state.current]:this.props.timeout}},{key:"finishedCleaning",value:function(){return this.props.cleanUp&&this.stringAtBegining()}},{key:"shouldUpdateTextIndex",value:function(){return this.finishedCleaning()&&this.thereAreMoreStringsLeft()||!this.props.cleanUp&&this.stringAtEnd()&&this.thereAreMoreStringsLeft()}},{key:"getNextTextIndex",value:function(){return this.state.textIndex+1}},{key:"stringAtEnd",value:function(t){var e=t||this.state.current;return e===this.state.total}},{key:"stringAtBegining",value:function(t){var e=t||this.state.current;return 0===e&&!this.state.justStarted}},{key:"thereAreMoreStringsLeft",value:function(){return this.state.textIndex<this.state.textsToType.length-1}},{key:"ready",value:function(t){return this.props.cleanUp?!this.thereAreMoreStringsLeft()&&this.stringAtBegining():!this.thereAreMoreStringsLeft()&&this.stringAtEnd()}}]),e}(l["default"].Component);f.ERASE_SPEED=100,f.END_OF_STRING_DELAY=100,t.exports=f},function(t,e){t.exports=react},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),s=r(i),a=s["default"].keyframes({"0%":{opacity:"1"},"50%":{opacity:"0"},"100%":{opacity:"1"}},"TypeWriter"),o={cursor:{animation:a+" steps(1) 1s infinite"}};e["default"]=o,t.exports=e["default"]},function(t,e){t.exports=radium},function(t,e){t.exports=void 0}]);