//thx to ionic => https://github.com/driftyco/ionic/blob/master/js/angular/directive/spinner.js

/**
* @ngdoc directive
* @name ionSpinner
* @module ionic
* @restrict E
 *
 * @description
 * The `ionSpinner` directive provides a variety of animated spinners.
 * Spinners enables you to give your users feedback that the app is
 * processing/thinking/waiting/chillin' out, or whatever you'd like it to indicate.
 * By default, the {@link ionic.directive:ionRefresher} feature uses this spinner, rather
 * than rotating font icons (previously included in [ionicons](http://ionicons.com/)).
 * While font icons are great for simple or stationary graphics, they're not suited to
 * provide great animations, which is why Ionic uses SVG instead.
 *
 * Ionic offers ten spinners out of the box, and by default, it will use the appropriate spinner
 * for the platform on which it's running. Under the hood, the `ionSpinner` directive dynamically
 * builds the required SVG element, which allows Ionic to provide all ten of the animated SVGs
 * within 3KB.
 *
 * <style>
 * .spinner-table {
 *   max-width: 280px;
 * }
 * .spinner-table tbody > tr > th, .spinner-table tbody > tr > td {
 *   vertical-align: middle;
 *   width: 42px;
 *   height: 42px;
 * }
 * .spinner {
 *   stroke: #444;
 *   fill: #444; }
 *   .spinner svg {
 *     width: 28px;
 *     height: 28px; }
 *   .spinner.spinner-inverse {
 *     stroke: #fff;
 *     fill: #fff; }
 *
 * .spinner-android {
 *   stroke: #4b8bf4; }
 *
 * .spinner-ios, .spinner-ios-small {
 *   stroke: #69717d; }
 *
 * .spinner-spiral .stop1 {
 *   stop-color: #fff;
 *   stop-opacity: 0; }
 * .spinner-spiral.spinner-inverse .stop1 {
 *   stop-color: #000; }
 * .spinner-spiral.spinner-inverse .stop2 {
 *   stop-color: #fff; }
 * </style>
 *
 * <script src="http://code.ionicframework.com/nightly/js/ionic.bundle.min.js"></script>
 * <table class="table spinner-table" ng-app="ionic">
 *  <tr>
 *    <th>
 *      <code>android</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="android"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>ios</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="ios"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>ios-small</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="ios-small"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>bubbles</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="bubbles"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>circles</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="circles"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>crescent</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="crescent"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>dots</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="dots"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>lines</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="lines"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>ripple</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="ripple"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>spiral</code>
 *    </th>
 *    <td>
 *      <ion-spinner icon="spiral"></ion-spinner>
 *    </td>
 *  </tr>
 * </table>
 *
 * Each spinner uses SVG with SMIL animations, however, the Android spinner also uses JavaScript
 * so it also works on Android 4.0-4.3. Additionally, each spinner can be styled with CSS,
 * and scaled to any size.
 *
 *
 * @usage
 * The following code would use the default spinner for the platform it's running from. If it's neither
 * iOS or Android, it'll default to use `ios`.
 *
 * ```html
 * <ion-spinner></ion-spinner>
 * ```
 *
 * By setting the `icon` attribute, you can specify which spinner to use, no matter what
 * the platform is.
 *
 * ```html
 * <ion-spinner icon="spiral"></ion-spinner>
 * ```
 *
 * ## Spinner Colors
 * Like with most of Ionic's other components, spinners can also be styled using
 * Ionic's standard color naming convention. For example:
 *
 * ```html
 * <ion-spinner class="spinner-energized"></ion-spinner>
 * ```
 *
 *
 * ## Styling SVG with CSS
 * One cool thing about SVG is its ability to be styled with CSS! Some of the properties
 * have different names, for example, SVG uses the term `stroke` instead of `border`, and
 * `fill` instead of `background-color`.
 *
 * ```css
 * .spinner svg {
 *   width: 28px;
 *   height: 28px;
 *   stroke: #444;
 *   fill: #444;
 * }
 * ```
 *
*/

;(function() {
    'use strict';

   
    var TRANSLATE32 = 'translate(32,32)';
	  var STROKE_OPACITY = 'stroke-opacity';
	  var ROUND = 'round';
	  var INDEFINITE = 'indefinite';
	  var DURATION = '750ms';
	  var NONE = 'none';
	  var SHORTCUTS = {
	    a: 'animate',
	    an: 'attributeName',
	    at: 'animateTransform',
	    c: 'circle',
	    da: 'stroke-dasharray',
	    os: 'stroke-dashoffset',
	    f: 'fill',
	    lc: 'stroke-linecap',
	    rc: 'repeatCount',
	    sw: 'stroke-width',
	    t: 'transform',
	    v: 'values'
	  };

	  var SPIN_ANIMATION = {
	    v: '0,32,32;360,32,32',
	    an: 'transform',
	    type: 'rotate',
	    rc: INDEFINITE,
	    dur: DURATION
	  };

	  function createSvgElement(tagName, data, parent, spinnerName) {
	    var ele = document.createElement(SHORTCUTS[tagName] || tagName);
	    var k, x, y;

	    for (k in data) {

	      if (angular.isArray(data[k])) {
	        for (x = 0; x < data[k].length; x++) {
	          if (data[k][x].fn) {
	            for (y = 0; y < data[k][x].t; y++) {
	              createSvgElement(k, data[k][x].fn(y, spinnerName), ele, spinnerName);
	            }
	          } else {
	            createSvgElement(k, data[k][x], ele, spinnerName);
	          }
	        }

	      } else {
	        setSvgAttribute(ele, k, data[k]);
	      }
	    }

	    parent.appendChild(ele);
	  }

	  function setSvgAttribute(ele, k, v) {
	    ele.setAttribute(SHORTCUTS[k] || k, v);
	  }

	  function animationValues(strValues, i) {
	    var values = strValues.split(';');
	    var back = values.slice(i);
	    var front = values.slice(0, values.length - back.length);
	    values = back.concat(front).reverse();
	    return values.join(';') + ';' + values[0];
	  }

	  var IOS_SPINNER = {
	    sw: 4,
	    lc: ROUND,
	    line: [{
	      fn: function(i, spinnerName) {
	        return {
	          y1: spinnerName == 'ios' ? 17 : 12,
	          y2: spinnerName == 'ios' ? 29 : 20,
	          t: TRANSLATE32 + ' rotate(' + (30 * i + (i < 6 ? 180 : -180)) + ')',
	          a: [{
	            fn: function() {
	              return {
	                an: STROKE_OPACITY,
	                dur: DURATION,
	                v: animationValues('0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1', i),
	                rc: INDEFINITE
	              };
	            },
	            t: 1
	          }]
	        };
	      },
	      t: 12
	    }]
	  };

	  var spinners = {

	    android: {
	      c: [{
	        sw: 6,
	        da: 128,
	        os: 82,
	        r: 26,
	        cx: 32,
	        cy: 32,
	        f: NONE
	      }]
	    },

	    ios: IOS_SPINNER,

	    'ios-small': IOS_SPINNER,

	    bubbles: {
	      sw: 0,
	      c: [{
	        fn: function(i) {
	          return {
	            cx: 24 * Math.cos(2 * Math.PI * i / 8),
	            cy: 24 * Math.sin(2 * Math.PI * i / 8),
	            t: TRANSLATE32,
	            a: [{
	              fn: function() {
	                return {
	                  an: 'r',
	                  dur: DURATION,
	                  v: animationValues('1;2;3;4;5;6;7;8', i),
	                  rc: INDEFINITE
	                };
	              },
	              t: 1
	            }]
	          };
	        },
	        t: 8
	      }]
	    },

	    circles: {

	      c: [{
	        fn: function(i) {
	          return {
	            r: 5,
	            cx: 24 * Math.cos(2 * Math.PI * i / 8),
	            cy: 24 * Math.sin(2 * Math.PI * i / 8),
	            t: TRANSLATE32,
	            sw: 0,
	            a: [{
	              fn: function() {
	                return {
	                  an: 'fill-opacity',
	                  dur: DURATION,
	                  v: animationValues('.3;.3;.3;.4;.7;.85;.9;1', i),
	                  rc: INDEFINITE
	                };
	              },
	              t: 1
	            }]
	          };
	        },
	        t: 8
	      }]
	    },

	    crescent: {
	      c: [{
	        sw: 4,
	        da: 128,
	        os: 82,
	        r: 26,
	        cx: 32,
	        cy: 32,
	        f: NONE,
	        at: [SPIN_ANIMATION]
	      }]
	    },

	    dots: {

	      c: [{
	        fn: function(i) {
	          return {
	            cx: 16 + (16 * i),
	            cy: 32,
	            sw: 0,
	            a: [{
	              fn: function() {
	                return {
	                  an: 'fill-opacity',
	                  dur: DURATION,
	                  v: animationValues('.5;.6;.8;1;.8;.6;.5', i),
	                  rc: INDEFINITE
	                };
	              },
	              t: 1
	            }, {
	              fn: function() {
	                return {
	                  an: 'r',
	                  dur: DURATION,
	                  v: animationValues('4;5;6;5;4;3;3', i),
	                  rc: INDEFINITE
	                };
	              },
	              t: 1
	            }]
	          };
	        },
	        t: 3
	      }]
	    },

	    lines: {
	      sw: 7,
	      lc: ROUND,
	      line: [{
	        fn: function(i) {
	          return {
	            x1: 10 + (i * 14),
	            x2: 10 + (i * 14),
	            a: [{
	              fn: function() {
	                return {
	                  an: 'y1',
	                  dur: DURATION,
	                  v: animationValues('16;18;28;18;16', i),
	                  rc: INDEFINITE
	                };
	              },
	              t: 1
	            }, {
	              fn: function() {
	                return {
	                  an: 'y2',
	                  dur: DURATION,
	                  v: animationValues('48;44;36;46;48', i),
	                  rc: INDEFINITE
	                };
	              },
	              t: 1
	            }, {
	              fn: function() {
	                return {
	                  an: STROKE_OPACITY,
	                  dur: DURATION,
	                  v: animationValues('1;.8;.5;.4;1', i),
	                  rc: INDEFINITE
	                };
	              },
	              t: 1
	            }]
	          };
	        },
	        t: 4
	      }]
	    },

	    ripple: {
	      f: NONE,
	      'fill-rule': 'evenodd',
	      sw: 3,
	      circle: [{
	        fn: function(i) {
	          return {
	            cx: 32,
	            cy: 32,
	            a: [{
	              fn: function() {
	                return {
	                  an: 'r',
	                  begin: (i * -1) + 's',
	                  dur: '2s',
	                  v: '0;24',
	                  keyTimes: '0;1',
	                  keySplines: '0.1,0.2,0.3,1',
	                  calcMode: 'spline',
	                  rc: INDEFINITE
	                };
	              },
	              t: 1
	            }, {
	              fn: function() {
	                return {
	                  an: STROKE_OPACITY,
	                  begin: (i * -1) + 's',
	                  dur: '2s',
	                  v: '.2;1;.2;0',
	                  rc: INDEFINITE
	                };
	              },
	              t: 1
	            }]
	          };
	        },
	        t: 2
	      }]
	    },

	    spiral: {
	      defs: [{
	        linearGradient: [{
	          id: 'sGD',
	          gradientUnits: 'userSpaceOnUse',
	          x1: 55, y1: 46, x2: 2, y2: 46,
	          stop: [{
	            offset: 0.1,
	            class: 'stop1'
	          }, {
	            offset: 1,
	            class: 'stop2'
	          }]
	        }]
	      }],
	      g: [{
	        sw: 4,
	        lc: ROUND,
	        f: NONE,
	        path: [{
	          stroke: 'url(#sGD)',
	          d: 'M4,32 c0,15,12,28,28,28c8,0,16-4,21-9'
	        }, {
	          d: 'M60,32 C60,16,47.464,4,32,4S4,16,4,32'
	        }],
	        at: [SPIN_ANIMATION]
	      }]
	    }

	  };

	  var animations = {

	    android: function(ele) {
	      var rIndex = 0;
	      var rotateCircle = 0;
	      var startTime;
	      var svgEle = ele.querySelector('g');
	      var circleEle = ele.querySelector('circle');

	      function run() {
	        var v = easeInOutCubic(Date.now() - startTime, 650);
	        var scaleX = 1;
	        var translateX = 0;
	        var dasharray = (188 - (58 * v));
	        var dashoffset = (182 - (182 * v));

	        if (rIndex % 2) {
	          scaleX = -1;
	          translateX = -64;
	          dasharray = (128 - (-58 * v));
	          dashoffset = (182 * v);
	        }

	        var rotateLine = [0, -101, -90, -11, -180, 79, -270, -191][rIndex];

	        setSvgAttribute(circleEle, 'da', Math.max(Math.min(dasharray, 188), 128));
	        setSvgAttribute(circleEle, 'os', Math.max(Math.min(dashoffset, 182), 0));
	        setSvgAttribute(circleEle, 't', 'scale(' + scaleX + ',1) translate(' + translateX + ',0) rotate(' + rotateLine + ',32,32)');

	        rotateCircle += 4.1;
	        if (rotateCircle > 359) rotateCircle = 0;
	        setSvgAttribute(svgEle, 't', 'rotate(' + rotateCircle + ',32,32)');

	        if (v >= 1) {
	          rIndex++;
	          if (rIndex > 7) rIndex = 0;
	          startTime = Date.now();
	        }
	        
	        //ionic.requestAnimationFrame(run);
	        
	      }

	      return function() {
	        startTime = Date.now();
	        run();
	      };

	    }

	  };

	  function easeInOutCubic(t, c) {
	    t /= c / 2;
	    if (t < 1) return 1 / 2 * t * t * t;
	    t -= 2;
	    return 1 / 2 * (t * t * t + 2);
	  }

	  
	  angular
      .module('commons.directives.ionSpinner', [])
      .directive('ionSpinner', ionSpinner)
 		.controller('$ionicSpinner', [
        	    '$element',
        	    '$attrs',
        	  function($element, $attrs) {
        	    var spinnerName;

        	    this.init = function() {
        	      spinnerName = $attrs.icon || 'android';

        	     
        	      var container = document.createElement('div');
        	      createSvgElement('svg', {
        	        viewBox: '0 0 64 64',
        	        g: [spinners[spinnerName]]
        	      }, container, spinnerName);

        	      // Specifically for animations to work,
        	      // Android 4.3 and below requires the element to be
        	      // added as an html string, rather than dynmically
        	      // building up the svg element and appending it.
        	      $element.html(container.innerHTML);

        	      this.start();

        	      return spinnerName;
        	    };

        	    this.start = function() {
        	      animations[spinnerName] && animations[spinnerName]($element[0])();
        	      console.log('SDAF'); 
        	    };

        	  }]);


  /** @ngInject */
  function ionSpinner() {

  	return {
  	    restrict: 'E',
  	    controller: '$ionicSpinner',
  	    link: function($scope, $element, $attrs, ctrl) {
  	    	
  	    	var spinnerName = ctrl.init();
  
  	      $element.addClass('spinner spinner-' + spinnerName);
  	    }
  	  };


  };
	  


})();

