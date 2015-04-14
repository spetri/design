function launchParticlesJS(e, a) {
    function i() {
        pJS.fn.canvasInit(), pJS.fn.canvasSize(), pJS.fn.canvasPaint(), pJS.fn.particlesCreate(), pJS.fn.particlesDraw()
    }

    function t() {
        pJS.fn.particlesDraw(), requestAnimFrame(t)
    }
    pJS = {
        canvas: {
            el: document.querySelector("#" + e + " > canvas"),
            w: document.querySelector("#" + e + " > canvas").offsetWidth,
            h: document.querySelector("#" + e + " > canvas").offsetHeight
        },
        particles: {
            color: "#fff",
            shape: "circle",
            opacity: 1,
            size: 2.5,
            size_random: !0,
            nb: 200,
            line_linked: {
                enable_auto: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1,
                condensed_mode: {
                    enable: !0,
                    rotateX: 65e3,
                    rotateY: 65e3
                }
            },
            anim: {
                enable: !0,
                speed: 1
            },
            array: []
        },
        interactivity: {
            enable: !0,
            mouse: {
                distance: 100
            },
            detect_on: "canvas",
            mode: "grab"
        },
        retina_detect: !1,
        fn: {
            vendors: {
                interactivity: {}
            }
        }
    }, a && (a.particles && (a.particles.color && (pJS.particles.color = a.particles.color), a.particles.shape && (pJS.particles.shape = a.particles.shape), a.particles.opacity && (pJS.particles.opacity = a.particles.opacity), a.particles.size && (pJS.particles.size = a.particles.size), 0 == a.particles.size_random && (pJS.particles.size_random = a.particles.size_random), a.particles.nb && (pJS.particles.nb = a.particles.nb), a.particles.line_linked && (0 == a.particles.line_linked.enable_auto && (pJS.particles.line_linked.enable_auto = a.particles.line_linked.enable_auto), a.particles.line_linked.distance && (pJS.particles.line_linked.distance = a.particles.line_linked.distance), a.particles.line_linked.color && (pJS.particles.line_linked.color = a.particles.line_linked.color), a.particles.line_linked.opacity && (pJS.particles.line_linked.opacity = a.particles.line_linked.opacity), a.particles.line_linked.width && (pJS.particles.line_linked.width = a.particles.line_linked.width), a.particles.line_linked.condensed_mode && (0 == a.particles.line_linked.condensed_mode.enable && (pJS.particles.line_linked.condensed_mode.enable = a.particles.line_linked.condensed_mode.enable), a.particles.line_linked.condensed_mode.rotateX && (pJS.particles.line_linked.condensed_mode.rotateX = a.particles.line_linked.condensed_mode.rotateX), a.particles.line_linked.condensed_mode.rotateY && (pJS.particles.line_linked.condensed_mode.rotateY = a.particles.line_linked.condensed_mode.rotateY))), a.particles.anim && (0 == a.particles.anim.enable && (pJS.particles.anim.enable = a.particles.anim.enable), a.particles.anim.speed && (pJS.particles.anim.speed = a.particles.anim.speed))), a.interactivity && (0 == a.interactivity.enable && (pJS.interactivity.enable = a.interactivity.enable), a.interactivity.mouse && a.interactivity.mouse.distance && (pJS.interactivity.mouse.distance = a.interactivity.mouse.distance), a.interactivity.mode && (pJS.interactivity.mode = a.interactivity.mode), a.interactivity.detect_on && (pJS.interactivity.detect_on = a.interactivity.detect_on)), pJS.retina_detect = a.retina_detect), pJS.particles.color_rgb = hexToRgb(pJS.particles.color), pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color), pJS.retina_detect && window.devicePixelRatio > 1 && (pJS.retina = !0, pJS.canvas.w = 2 * pJS.canvas.el.offsetWidth, pJS.canvas.h = 2 * pJS.canvas.el.offsetHeight, pJS.particles.anim.speed = 2 * pJS.particles.anim.speed, pJS.particles.line_linked.distance = 2 * pJS.particles.line_linked.distance, pJS.particles.line_linked.width = 2 * pJS.particles.line_linked.width, pJS.interactivity.mouse.distance = 2 * pJS.interactivity.mouse.distance), pJS.fn.canvasInit = function() {
        pJS.canvas.ctx = pJS.canvas.el.getContext("2d")
    }, pJS.fn.canvasSize = function() {
        pJS.canvas.el.width = pJS.canvas.w, pJS.canvas.el.height = pJS.canvas.h, window.onresize = function() {
            pJS.retina ? (pJS.canvas.w = 2 * pJS.canvas.el.offsetWidth, pJS.canvas.h = 2 * pJS.canvas.el.offsetHeight) : (pJS.canvas.w = pJS.canvas.el.offsetWidth, pJS.canvas.h = pJS.canvas.el.offsetHeight), pJS.canvas.el.width = pJS.canvas.w, pJS.canvas.el.height = pJS.canvas.h, pJS.fn.canvasPaint(), pJS.particles.anim.enable || (pJS.fn.particlesRemove(), pJS.fn.canvasRemove(), i())
        }
    }, pJS.fn.canvasPaint = function() {
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    }, pJS.fn.canvasRemove = function() {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    }, pJS.fn.particle = function(e, a) {
        this.x = Math.random() * pJS.canvas.w, this.y = Math.random() * pJS.canvas.h, this.radius = pJS.retina ? pJS.particles.size_random ? Math.random() * pJS.particles.size * 2 : 2 * pJS.particles.size : pJS.particles.size_random ? Math.random() * pJS.particles.size * 1 : 1 * pJS.particles.size, this.color = e, this.opacity = a, this.vx = -.5 + Math.random(), this.vy = -.5 + Math.random(), this.draw = function() {
            switch (pJS.canvas.ctx.fillStyle = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.opacity + ")", pJS.canvas.ctx.beginPath(), pJS.particles.shape) {
                case "circle":
                    pJS.canvas.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1);
                    break;
                case "edge":
                    pJS.canvas.ctx.rect(this.x, this.y, 2 * this.radius, 2 * this.radius);
                    break;
                case "triangle":
                    pJS.canvas.ctx.moveTo(this.x, this.y), pJS.canvas.ctx.lineTo(this.x + this.radius, this.y + 2 * this.radius), pJS.canvas.ctx.lineTo(this.x - this.radius, this.y + 2 * this.radius), pJS.canvas.ctx.closePath()
            }
            pJS.canvas.ctx.fill()
        }
    }, pJS.fn.particlesCreate = function() {
        for (var e = 0; e < pJS.particles.nb; e++) pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity))
    }, pJS.fn.particlesAnimate = function() {
        for (var e = 0; e < pJS.particles.array.length; e++) {
            var a = pJS.particles.array[e];
            a.x += a.vx * (pJS.particles.anim.speed / 2), a.y += a.vy * (pJS.particles.anim.speed / 2), a.x - a.radius > pJS.canvas.w ? a.x = a.radius : a.x + a.radius < 0 && (a.x = pJS.canvas.w + a.radius), a.y - a.radius > pJS.canvas.h ? a.y = a.radius : a.y + a.radius < 0 && (a.y = pJS.canvas.h + a.radius);
            for (var i = e + 1; i < pJS.particles.array.length; i++) {
                var t = pJS.particles.array[i];
                if (pJS.particles.line_linked.enable_auto && pJS.fn.vendors.distanceParticles(a, t), pJS.interactivity.enable) switch (pJS.interactivity.mode) {
                    case "grab":
                        pJS.fn.vendors.interactivity.grabParticles(a, t)
                }
            }
        }
    }, pJS.fn.particlesDraw = function() {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h), pJS.fn.particlesAnimate();
        for (var e = 0; e < pJS.particles.array.length; e++) {
            var a = pJS.particles.array[e];
            a.draw("rgba(" + a.color.r + "," + a.color.g + "," + a.color.b + "," + a.opacity + ")")
        }
    }, pJS.fn.particlesRemove = function() {
        pJS.particles.array = []
    }, pJS.fn.vendors.distanceParticles = function(e, a) {
        var i = e.x - a.x,
            t = e.y - a.y,
            n = Math.sqrt(i * i + t * t);
        if (n <= pJS.particles.line_linked.distance) {
            var s = pJS.particles.line_linked.color_rgb_line;
            if (pJS.canvas.ctx.beginPath(), pJS.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + (pJS.particles.line_linked.opacity - n / pJS.particles.line_linked.distance) + ")", pJS.canvas.ctx.moveTo(e.x, e.y), pJS.canvas.ctx.lineTo(a.x, a.y), pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width, pJS.canvas.ctx.stroke(), pJS.canvas.ctx.closePath(), pJS.particles.line_linked.condensed_mode.enable) {
                var i = e.x - a.x;
                t = e.y - a.y;
                var c = i / (1e3 * pJS.particles.line_linked.condensed_mode.rotateX),
                    r = t / (1e3 * pJS.particles.line_linked.condensed_mode.rotateY);
                a.vx += c, a.vy += r
            }
        }
    }, pJS.fn.vendors.interactivity.listeners = function() {
        if ("window" == pJS.interactivity.detect_on) var e = window;
        else var e = pJS.canvas.el;
        e.onmousemove = function(e) {
            pJS.retina ? (pJS.interactivity.mouse.pos_x = 2 * e.pageX, pJS.interactivity.mouse.pos_y = 2 * e.pageY) : (pJS.interactivity.mouse.pos_x = e.pageX, pJS.interactivity.mouse.pos_y = e.pageY), pJS.interactivity.status = "mousemove"
        }, e.onmouseleave = function(e) {
            pJS.interactivity.mouse.pos_x = 0, pJS.interactivity.mouse.pos_y = 0, pJS.interactivity.status = "mouseleave"
        }
    }, pJS.fn.vendors.interactivity.grabParticles = function(e, a) {
        var i = e.x - a.x,
            t = e.y - a.y,
            n = Math.sqrt(i * i + t * t),
            s = e.x - pJS.interactivity.mouse.pos_x,
            c = e.y - pJS.interactivity.mouse.pos_y,
            r = Math.sqrt(s * s + c * c);
        if (n <= pJS.particles.line_linked.distance && r <= pJS.interactivity.mouse.distance && "mousemove" == pJS.interactivity.status) {
            var p = pJS.particles.line_linked.color_rgb_line;
            pJS.canvas.ctx.beginPath(), pJS.canvas.ctx.strokeStyle = "rgba(" + p.r + "," + p.g + "," + p.b + "," + (pJS.particles.line_linked.opacity - r / pJS.interactivity.mouse.distance) + ")", pJS.canvas.ctx.moveTo(e.x, e.y), pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y), pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width, pJS.canvas.ctx.stroke(), pJS.canvas.ctx.closePath()
        }
    }, i(), pJS.particles.anim.enable && t(), pJS.interactivity.enable && pJS.fn.vendors.interactivity.listeners()
}

function hexToRgb(e) {
    var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(a, function(e, a, i, t) {
        return a + a + i + i + t + t
    });
    var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return i ? {
        r: parseInt(i[1], 16),
        g: parseInt(i[2], 16),
        b: parseInt(i[3], 16)
    } : null
}
$(document).ready(function() {
    function e() {
        setTimeout(function() {
            $(".left-wing").addClass("animate"), $(".right-wing").addClass("animate")
        }, 350)
    }
    if ($("body").hasClass("profile-load") ? $("#profile-background").on("load", function() {
            e()
        }).each(function() {
            this.complete && $(this).load()
        }) : e(), $("body").hasClass("sticky-head")) {
        var a = $("header"),
            i = a.before(a.clone().addClass("clone"));
        $("header.clone nav").append("<a class='social twitter' href='https://twitter.com/ivomynttinen' target='_blank'></a><a class='social facebook' href='https://www.facebook.com/ivomynttinendesign' target='_blank'></a>"), $(window).on("scroll", function() {
            var e = $(window).scrollTop();
            $("body").toggleClass("down", e > 1e3)
        })
    }
    setTimeout(function() {
        var e = $("#ca-wrap").height();
        0 == e && ($("#ca-wrap").addClass("hidden"), $("#fa-wrap .fa").removeClass("hidden")), $("#fa-wrap").addClass("show")
    }, 1e3)
}), window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), window.particlesJS = function(e, a) {
    "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
    var i = document.createElement("canvas");
    i.style.width = "100%", i.style.height = "100%";
    var t = document.getElementById(e).appendChild(i);
    null != t && launchParticlesJS(e, a)
}, particlesJS("footer-particles", {
    particles: {
        color: "#313944",
        shape: "circle",
        opacity: 1,
        size: 2,
        size_random: !0,
        nb: 40,
        line_linked: {
            enable_auto: !0,
            distance: 300,
            color: "#313944",
            opacity: .7,
            width: 1,
            condensed_mode: {
                enable: !1,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: !0,
            speed: 1
        }
    },
    interactivity: {
        enable: !1,
        mouse: {
            distance: 200
        },
        mode: "grab"
    },
    retina_detect: !0
});
