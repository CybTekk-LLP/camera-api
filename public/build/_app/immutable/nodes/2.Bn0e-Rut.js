import {
  s as V,
  n as q,
  r as U,
  b as D,
  o as A,
} from "../chunks/scheduler.C7t7VQCU.js";
import {
  S as j,
  i as $,
  e as k,
  s as S,
  c as w,
  d as z,
  g as M,
  h as T,
  m as E,
  n as s,
  j as O,
  k as h,
  o as I,
} from "../chunks/index.BuEixCZg.js";
import { s as R, a as P } from "../chunks/api.service.BgHuHbvB.js";
import { g as B } from "../chunks/entry.D7-KK50d.js";
import { p as Z } from "../chunks/stores.BNvda3AP.js";
function W(f) {
  let i,
    o,
    y,
    g,
    u =
      '<input type="range" name="range" id="range" aria-label="Zoom Level"/> <img draggable="false" src="../build/images/Camera/trackMeter.svg" alt="zoom feature" class="svelte-1cpe0hi"/> <img draggable="false" class="slider svelte-1cpe0hi" src="../build/images/Camera/line.svg" alt="zoom slider"/> <p class="zoom-multiplier svelte-1cpe0hi" aria-live="polite"></p>',
    x,
    l,
    b,
    m,
    a =
      '<img draggable="false" class="preview svelte-1cpe0hi" src="../build/images/Camera/rect.svg" height="48px" width="48px" alt="preview shot"/>',
    t,
    r,
    n =
      '<svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.3333" stroke="#2C2C2C" stroke-width="1.33333"></circle><circle cx="32" cy="32" r="24" fill="white" class="capture-icon svelte-1cpe0hi"></circle></svg>',
    c,
    e,
    p =
      '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="23.5" stroke="#2C2C2C"></circle><mask id="mask0_63_76" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="11" width="26" height="26"><path d="M11 11H37V37H11V11Z" fill="white"></path></mask><g mask="url(#mask0_63_76)"><g class="rotate svelte-1cpe0hi"><path d="M18.2887 26.8558V25.2241C18.2887 22.0719 20.8478 19.5129 23.9999 19.5129C25.5758 19.5129 27.0036 20.1525 28.0377 21.1863" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.6572 25.2241L18.289 26.8558L19.9208 25.2241" stroke="white" stroke-width="1.52344" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29.7113 23.592V25.2237C29.7113 28.3759 27.1522 30.9349 24.0001 30.9349C22.4242 30.9349 20.9964 30.2952 19.9623 29.2615" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31.3431 25.2236L29.7114 23.5919L28.0796 25.2236" stroke="white" stroke-width="1.52344" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g><path d="M11.7617 21.1445C11.7617 20.0627 12.1917 19.0249 12.9566 18.26C13.7215 17.4951 14.7593 17.0651 15.8411 17.0651H17.2804C17.8984 17.0651 18.4634 16.7159 18.74 16.1632C18.8273 15.9878 18.9223 15.7985 19.0186 15.6055C19.5714 14.5 20.7014 13.8016 21.9374 13.8016H26.0626C27.2986 13.8016 28.4286 14.5 28.9814 15.6055C29.0777 15.7985 29.1727 15.9878 29.26 16.1632C29.5366 16.7159 30.1016 17.0651 30.7196 17.0651H32.1589C33.2407 17.0651 34.2785 17.4951 35.0434 18.26C35.8083 19.0249 36.2383 20.0627 36.2383 21.1445V30.1193C36.2383 31.2012 35.8083 32.239 35.0434 33.0038C34.2785 33.7688 33.2407 34.1987 32.1589 34.1987H15.8411C14.7593 34.1987 13.7215 33.7688 12.9566 33.0038C12.1917 32.239 11.7617 31.2012 11.7617 30.1193V21.1445Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',
    d,
    C;
  return {
    c() {
      (i = k("section")),
        (o = k("video")),
        (y = S()),
        (g = k("div")),
        (g.innerHTML = u),
        (x = S()),
        (l = k("div")),
        (b = k("div")),
        (m = k("div")),
        (m.innerHTML = a),
        (t = S()),
        (r = k("div")),
        (r.innerHTML = n),
        (c = S()),
        (e = k("div")),
        (e.innerHTML = p),
        this.h();
    },
    l(_) {
      i = w(_, "SECTION", { id: !0, class: !0 });
      var v = z(i);
      (o = w(v, "VIDEO", { id: !0, "data-lens": !0, class: !0 })),
        z(o).forEach(M),
        (y = T(v)),
        (g = w(v, "DIV", { class: !0, "data-svelte-h": !0 })),
        E(g) !== "svelte-b501lz" && (g.innerHTML = u),
        (x = T(v)),
        (l = w(v, "DIV", { class: !0, role: !0, tabindex: !0 }));
      var L = z(l);
      b = w(L, "DIV", { class: !0 });
      var H = z(b);
      (m = w(H, "DIV", {
        class: !0,
        role: !0,
        tabindex: !0,
        "data-svelte-h": !0,
      })),
        E(m) !== "svelte-1s7k8yu" && (m.innerHTML = a),
        H.forEach(M),
        (t = T(L)),
        (r = w(L, "DIV", {
          class: !0,
          role: !0,
          tabindex: !0,
          "aria-label": !0,
          "data-svelte-h": !0,
        })),
        E(r) !== "svelte-6urfd8" && (r.innerHTML = n),
        (c = T(L)),
        (e = w(L, "DIV", {
          class: !0,
          role: !0,
          tabindex: !0,
          "data-facing-mode": !0,
          "aria-label": !0,
          "data-svelte-h": !0,
        })),
        E(e) !== "svelte-ydi9hp" && (e.innerHTML = p),
        L.forEach(M),
        v.forEach(M),
        this.h();
    },
    h() {
      s(o, "id", "stream"),
        (o.muted = !0),
        (o.autoplay = !0),
        (o.playsInline = !0),
        s(o, "data-lens", "none"),
        s(o, "class", "svelte-1cpe0hi"),
        s(g, "class", "range-container svelte-1cpe0hi"),
        s(m, "class", "image svelte-1cpe0hi"),
        s(m, "role", "button"),
        s(m, "tabindex", "0"),
        s(b, "class", "lenses svelte-1cpe0hi"),
        s(r, "class", "capture-button svelte-1cpe0hi"),
        s(r, "role", "button"),
        s(r, "tabindex", "0"),
        s(r, "aria-label", "take a picture"),
        s(e, "class", "switch-camera-facing-mode svelte-1cpe0hi"),
        s(e, "role", "button"),
        s(e, "tabindex", "0"),
        s(e, "data-facing-mode", "front"),
        s(e, "aria-label", "switch camera facing mode"),
        s(l, "class", "controls svelte-1cpe0hi"),
        s(l, "role", "button"),
        s(l, "tabindex", "0"),
        s(i, "id", "camera"),
        s(i, "class", "svelte-1cpe0hi");
    },
    m(_, v) {
      O(_, i, v),
        h(i, o),
        h(i, y),
        h(i, g),
        h(i, x),
        h(i, l),
        h(l, b),
        h(b, m),
        h(l, t),
        h(l, r),
        h(l, c),
        h(l, e),
        d || ((C = [I(m, "click", f[0]), I(m, "keydown", G)]), (d = !0));
    },
    p: q,
    i: q,
    o: q,
    d(_) {
      _ && M(i), (d = !1), U(C);
    },
  };
}
function N(f, i) {
  let o = atob(f),
    y = new Array(o.length);
  for (let u = 0; u < o.length; u++) y[u] = o.charCodeAt(u);
  let g = new Uint8Array(y);
  return new Blob([g], { type: i });
}
function F(f, i) {
  let o = N(f, i);
  return URL.createObjectURL(o);
}
const G = () => null;
function J(f, i, o) {
  let y;
  return (
    D(f, Z, (u) => o(1, (y = u))),
    A(async () => {
      let u = decodeURIComponent(new URL(y.url).searchParams.get("email"));
      R(u);
      const x = (a = !0) => {
          const t = document.getElementById("stream"),
            r = { video: { facingMode: a ? "user" : "environment", zoom: !0 } };
          window.navigator.mediaDevices
            .getUserMedia(r)
            .then((n) => {
              (t.srcObject = n),
                (t.onloadedmetadata = (C) => {
                  a && (t == null || t.setAttribute("style", "scale: -1 1")),
                    !a && (t == null || t.removeAttribute("style")),
                    t.play();
                });
              const [c] = n.getVideoTracks(),
                e = c.getCapabilities(),
                p = c.getSettings(),
                d = document.querySelector('input[type="range"]');
              if (!("zoom" in p))
                return Promise.reject("Zoom is not supported by " + c.label);
              (d.min = e.zoom.min),
                (d.max = e.zoom.max),
                (d.step = e.zoom.step),
                (d.value = p.zoom),
                (document.querySelector(".zoom-multiplier").textContent =
                  `${~~e.zoom.min}x ${~~(e.zoom.max + 3 * e.zoom.min) / 4}x ${~~(3 * e.zoom.max + e.zoom.min) / 4}x ${~~e.zoom.max}x`),
                (d.oninput = function (C) {
                  c.applyConstraints({ advanced: [{ zoom: C.target.value }] }),
                    (document.querySelector(".slider").style.left =
                      ((d.value - 1) * 120) / (e.zoom.max - 1) + 3 + "px");
                }),
                (d.hidden = !1),
                (document.querySelector(".range-container").style.visibility =
                  "visible");
            })
            .catch((n) => {
              console.error(n);
            });
        },
        l = () => {
          let a = !1;
          const t = document.querySelector(".switch-camera-facing-mode");
          t.addEventListener("click", () => {
            t.querySelector(".rotate").classList.add("rotating"),
              setTimeout(() => {
                t.querySelector(".rotate").classList.remove("rotating");
              }, 1500),
              x(a),
              (t.dataset.facingMode = a ? "front" : "back"),
              (a = !a);
          });
        },
        b = () => {
          var t;
          const a = document.querySelector(".capture-button");
          (t = a == null ? void 0 : a.querySelector(".capture-icon")) == null ||
            t.setAttribute("style", "scale: 1"),
            a.addEventListener("click", () => {
              var n;
              const r = document.querySelector(".switch-camera-facing-mode");
              (n = a == null ? void 0 : a.querySelector(".capture-icon")) ==
                null || n.setAttribute("style", "scale: 0.90"),
                setTimeout(() => {
                  var c;
                  (c = a == null ? void 0 : a.querySelector(".capture-icon")) ==
                    null || c.setAttribute("style", "scale: 1");
                }, 500),
                m(r.dataset.facingMode === "front");
            });
        },
        m = async (a = !1) => {
          const t = document.getElementById("stream"),
            r = document.createElement("canvas"),
            n = r.getContext("2d"),
            c = 2;
          (r.width = t.videoWidth * c),
            (r.height = t.videoHeight * c),
            a && (n.translate(r.width, 0), n.scale(-1, 1)),
            t.dataset.lens === "monochrome" && (n.filter = "grayscale(1)"),
            t.dataset.lens.startsWith("gradient") &&
              (n.filter = "saturate(0.1)");
          const e = document.createElement("div");
          (e.style.position = "fixed"),
            (e.style.top = "0"),
            (e.style.left = "0"),
            (e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.backgroundColor = "rgba(0, 0, 0, 0.3)"),
            document.body.appendChild(e),
            setTimeout(() => {
              e.remove();
            }, 200),
            n.drawImage(t, 0, 0, r.width, r.height);
          try {
            const p = r.toDataURL("image/png", 0.9),
              d = document.createElement("a"),
              C = new Date().toISOString().replace(/[:.]/g, "");
            (d.href = p),
              (d.download = `photo_${C}.png`),
              (document.querySelector(".preview").src = p);
            let v = F(p.replace("data:image/png;base64,", ""), "image/png");
            P(v);
          } catch (p) {
            console.error("Error capturing photo:", p);
          }
        };
      x(), l(), b();
    }),
    [() => B("/preview")]
  );
}
class te extends j {
  constructor(i) {
    super(), $(this, i, J, W, V, {});
  }
}
export { te as component };
