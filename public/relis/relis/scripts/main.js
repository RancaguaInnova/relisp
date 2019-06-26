;(function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = 'function' == typeof require && require
          if (!f && c) return c(i, !0)
          if (u) return u(i, !0)
          var a = new Error("Cannot find module '" + i + "'")
          throw ((a.code = 'MODULE_NOT_FOUND'), a)
        }
        var p = (n[i] = { exports: {} })
        e[i][0].call(
          p.exports,
          function(r) {
            var n = e[i][1][r]
            return o(n || r)
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        )
      }
      return n[i].exports
    }
    for (
      var u = 'function' == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i])
    return o
  }
  return r
})()(
  {
    1: [
      function(require, module, exports) {
        'use strict'

        // Constructor
        var Header = function() {
          var header = $('.header')
          var body = $('body')
          var menuOpen = $('.header__hamburguer')

          menuOpen.on('click', function() {
            header.toggleClass('-open')
            body.toggleClass('-hideOverflow')
          })

          var targets = $('[data-target]')
          var contents = $('[data-content]')

          function init() {
            targets.first().addClass('-active')
            contents.first().addClass('-active')
          }

          if (targets.length > 0) {
            targets.on('click', function(e) {
              e.preventDefault()
              var $this = $(this)
              var targettedContent = $this.data('target')

              targets.removeClass('-active')
              contents.removeClass('-active')

              $('[data-target="' + targettedContent + '"]').addClass('-active')
              contents
                .filter(function() {
                  return $(this).data('content') === targettedContent
                })
                .addClass('-active')
            })

            init()
          }

          var days = $('[data-day]')
          var schedule = $('[data-schedule]')

          if (days.length > 0) {
            days.on('click', function(e) {
              e.preventDefault()
              var $this = $(this)
              var targettedContent = $this.data('day')

              days.removeClass('-active')
              schedule.removeClass('-active')

              $('[data-day="' + targettedContent + '"]').addClass('-active')
              schedule
                .filter(function() {
                  return $(this).data('schedule') === targettedContent
                })
                .addClass('-active')
            })
          }
        }

        module.exports = Header
      },
      {}
    ],
    2: [
      function(require, module, exports) {
        'use strict'

        // Constructor
        var Slider = function() {
          var slider = $('._slider')
          if (slider) {
            slider.each(function() {
              $(this).slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: true,
                centerMode: true,
                autoplay: false
              })
            })
          }
        }

        module.exports = Slider
      },
      {}
    ],
    3: [
      function(require, module, exports) {
        ;(function(global) {
          // Main javascript entry point
          // Should handle bootstrapping/starting application

          'use strict'

          global.$ = global.jQuery
          //global._ = require('underscore');
          var Header = require('../_modules/header/header')
          var Slider = require('../_modules/slider/slider')

          $(function() {
            //require('../../bower_components/slick-carousel/slick/slick');

            new Header()
            new Slider()
          })
        }.call(
          this,
          typeof global !== 'undefined'
            ? global
            : typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
            ? window
            : {}
        ))
      },
      { '../_modules/header/header': 1, '../_modules/slider/slider': 2 }
    ]
  },
  {},
  [3]
)

//# sourceMappingURL=main.js.map
