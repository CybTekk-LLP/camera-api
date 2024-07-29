import {
  s as ne,
  x as j,
  y as Le,
  r as Me,
  o as Ae,
  e as X,
  n as J,
  z as oe,
} from "../chunks/scheduler.C7t7VQCU.js";
import {
  S as ie,
  i as re,
  e as b,
  s as y,
  w as x,
  c as p,
  d as P,
  g as k,
  h as D,
  x as $,
  m as U,
  n as o,
  A as O,
  r as ue,
  j as V,
  k as m,
  y as ee,
  o as z,
  t as te,
  a as le,
  z as se,
  p as _e,
  b as ve,
  f as be,
  B as de,
  l as pe,
  C as he,
  D as fe,
} from "../chunks/index.BuEixCZg.js";
import { g as Pe } from "../chunks/entry.D7-KK50d.js";
import {
  g as ae,
  u as Ve,
  b as Se,
  d as He,
  c as Fe,
  e as Ge,
} from "../chunks/api.service.BgHuHbvB.js";
function Q(a) {
  return (a == null ? void 0 : a.length) !== void 0 ? a : Array.from(a);
}
function Ne(a) {
  let e,
    t,
    l,
    s,
    i,
    c,
    f,
    u,
    h,
    _,
    r,
    q = `By clicking "I Consent," you agree to our use of your images, which will
      be processed and stored on AWS. Your privacy and data security are
      assured.`,
    n,
    B,
    d,
    C,
    T,
    H,
    I,
    W = "I consent",
    v,
    L,
    R,
    S,
    K = "Take Again",
    G,
    g,
    w,
    E,
    Y = "Submit",
    F,
    ce,
    ge;
  return (
    (h = new Ye({ props: { images: a[4] } })),
    {
      c() {
        (e = b("div")),
          (t = y()),
          (l = b("dialog")),
          (s = b("div")),
          (i = b("img")),
          (f = y()),
          (u = b("div")),
          x(h.$$.fragment),
          (_ = y()),
          (r = b("p")),
          (r.textContent = q),
          (n = y()),
          (B = b("br")),
          (d = y()),
          (C = b("div")),
          (T = b("input")),
          (H = y()),
          (I = b("label")),
          (I.textContent = W),
          (v = y()),
          (L = b("br")),
          (R = y()),
          (S = b("button")),
          (S.textContent = K),
          (G = y()),
          (g = b("br")),
          (w = y()),
          (E = b("button")),
          (E.textContent = Y),
          this.h();
      },
      l(M) {
        (e = p(M, "DIV", { class: !0 })),
          P(e).forEach(k),
          (t = D(M)),
          (l = p(M, "DIALOG", { class: !0 }));
        var N = P(l);
        s = p(N, "DIV", {});
        var A = P(s);
        (i = p(A, "IMG", { class: !0, src: !0, alt: !0 })),
          (f = D(A)),
          (u = p(A, "DIV", { style: !0 }));
        var me = P(u);
        $(h.$$.fragment, me),
          me.forEach(k),
          (_ = D(A)),
          (r = p(A, "P", { "data-svelte-h": !0 })),
          U(r) !== "svelte-vd2xim" && (r.textContent = q),
          (n = D(A)),
          (B = p(A, "BR", {})),
          (d = D(A)),
          (C = p(A, "DIV", { class: !0 }));
        var Z = P(C);
        (T = p(Z, "INPUT", { id: !0, type: !0 })),
          (H = D(Z)),
          (I = p(Z, "LABEL", { for: !0, "data-svelte-h": !0 })),
          U(I) !== "svelte-137263i" && (I.textContent = W),
          Z.forEach(k),
          (v = D(A)),
          (L = p(A, "BR", {})),
          (R = D(A)),
          (S = p(A, "BUTTON", { class: !0, "data-svelte-h": !0 })),
          U(S) !== "svelte-1idmocm" && (S.textContent = K),
          (G = D(A)),
          (g = p(A, "BR", {})),
          (w = D(A)),
          (E = p(A, "BUTTON", { class: !0, "data-svelte-h": !0 })),
          U(E) !== "svelte-1qxv37p" && (E.textContent = Y),
          A.forEach(k),
          N.forEach(k),
          this.h();
      },
      h() {
        o(e, "class", "modal-bg svelte-2mvxsa"),
          O(e, "show-filter", a[2]),
          o(i, "class", "cancel"),
          j(i.src, (c = "../build/images/Preview/Cancel.svg")) ||
            o(i, "src", c),
          o(i, "alt", "alert"),
          ue(u, "text-align", "center"),
          ue(u, "margin", "10px auto 30px auto"),
          o(T, "id", "condition"),
          o(T, "type", "checkbox"),
          o(I, "for", "condition"),
          o(C, "class", "checkbox"),
          o(S, "class", "btn-secondary btn"),
          o(E, "class", "btn"),
          O(E, "disabled", !a[0]),
          o(l, "class", "svelte-2mvxsa");
      },
      m(M, N) {
        V(M, e, N),
          V(M, t, N),
          V(M, l, N),
          m(l, s),
          m(s, i),
          m(s, f),
          m(s, u),
          ee(h, u, null),
          m(s, _),
          m(s, r),
          m(s, n),
          m(s, B),
          m(s, d),
          m(s, C),
          m(C, T),
          (T.checked = a[0]),
          m(C, H),
          m(C, I),
          m(s, v),
          m(s, L),
          m(s, R),
          m(s, S),
          m(s, G),
          m(s, g),
          m(s, w),
          m(s, E),
          a[10](l),
          (F = !0),
          ce ||
            ((ge = [
              z(i, "click", a[6]),
              z(T, "change", a[7]),
              z(S, "click", a[8]),
              z(E, "click", a[9]),
              Le(a[5].call(null, l)),
            ]),
            (ce = !0));
      },
      p(M, [N]) {
        (!F || N & 4) && O(e, "show-filter", M[2]);
        const A = {};
        N & 16 && (A.images = M[4]),
          h.$set(A),
          N & 1 && (T.checked = M[0]),
          (!F || N & 1) && O(E, "disabled", !M[0]);
      },
      i(M) {
        F || (te(h.$$.fragment, M), (F = !0));
      },
      o(M) {
        le(h.$$.fragment, M), (F = !1);
      },
      d(M) {
        M && (k(e), k(t), k(l)), se(h), a[10](null), (ce = !1), Me(ge);
      },
    }
  );
}
function Oe(a, e, t) {
  let { checked: l } = e,
    { dialog: s } = e,
    { showBackdrop: i } = e,
    { handleClick: c } = e,
    { images: f = [] } = e;
  const u = (d) => {
      const C = (T) => {
        d &&
          !d.contains(T.target) &&
          !T.defaultPrevented &&
          d.dispatchEvent(new CustomEvent("click_outside", d));
      };
      return (
        document.addEventListener("click", C, !0),
        {
          destroy() {
            document.removeEventListener("click", C, !0);
          },
        }
      );
    },
    h = () => {
      s.close(), t(2, (i = !1));
    };
  Ae(() => {
    s.addEventListener("click_outside", () => {
      h();
    });
  });
  const _ = () => {
    s.close(), t(2, (i = !1));
  };
  function r() {
    (l = this.checked), t(0, l);
  }
  const q = () => {
      s.close(), t(2, (i = !1)), Pe("/");
    },
    n = () => {
      s.close(), t(2, (i = !1)), c();
    };
  function B(d) {
    X[d ? "unshift" : "push"](() => {
      (s = d), t(1, s);
    });
  }
  return (
    (a.$$set = (d) => {
      "checked" in d && t(0, (l = d.checked)),
        "dialog" in d && t(1, (s = d.dialog)),
        "showBackdrop" in d && t(2, (i = d.showBackdrop)),
        "handleClick" in d && t(3, (c = d.handleClick)),
        "images" in d && t(4, (f = d.images));
    }),
    [l, s, i, c, f, u, _, r, q, n, B]
  );
}
class Re extends ie {
  constructor(e) {
    super(),
      re(this, e, Oe, Ne, ne, {
        checked: 0,
        dialog: 1,
        showBackdrop: 2,
        handleClick: 3,
        images: 4,
      });
  }
}
function ke(a) {
  let e,
    t,
    l,
    s = a[2].heading + "",
    i,
    c,
    f,
    u = a[2].description + "",
    h,
    _,
    r,
    q =
      '<img class="cancel" src="../build/images/Preview/Cancel.svg" alt="Dismiss Invite Card"/>',
    n,
    B;
  return {
    c() {
      (e = b("article")),
        (t = b("div")),
        (l = b("h1")),
        (i = ve(s)),
        (c = y()),
        (f = b("p")),
        (h = ve(u)),
        (_ = y()),
        (r = b("a")),
        (r.innerHTML = q),
        this.h();
    },
    l(d) {
      e = p(d, "ARTICLE", { class: !0 });
      var C = P(e);
      t = p(C, "DIV", { class: !0 });
      var T = P(t);
      l = p(T, "H1", { class: !0 });
      var H = P(l);
      (i = be(H, s)), H.forEach(k), (c = D(T)), (f = p(T, "P", { class: !0 }));
      var I = P(f);
      (h = be(I, u)),
        I.forEach(k),
        T.forEach(k),
        (_ = D(C)),
        (r = p(C, "A", {
          "aria-label": !0,
          href: !0,
          class: !0,
          "data-svelte-h": !0,
        })),
        U(r) !== "svelte-1v7q7xb" && (r.innerHTML = q),
        C.forEach(k),
        this.h();
    },
    h() {
      o(l, "class", "svelte-1739tkq"),
        o(f, "class", "svelte-1739tkq"),
        o(t, "class", "svelte-1739tkq"),
        o(r, "aria-label", "Dismiss Invite Card"),
        o(r, "href", "/"),
        o(r, "class", "cross svelte-1739tkq"),
        o(e, "class", "svelte-1739tkq"),
        O(e, "out", a[4]),
        O(e, "failure", a[1] === "failure");
    },
    m(d, C) {
      V(d, e, C),
        m(e, t),
        m(t, l),
        m(l, i),
        m(t, c),
        m(t, f),
        m(f, h),
        m(e, _),
        m(e, r),
        a[8](e),
        n || ((B = z(r, "click", de(a[7]))), (n = !0));
    },
    p(d, C) {
      C & 4 && s !== (s = d[2].heading + "") && pe(i, s),
        C & 4 && u !== (u = d[2].description + "") && pe(h, u),
        C & 16 && O(e, "out", d[4]),
        C & 2 && O(e, "failure", d[1] === "failure");
    },
    d(d) {
      d && k(e), a[8](null), (n = !1), B();
    },
  };
}
function Ue(a) {
  let e,
    t = a[0] && ke(a);
  return {
    c() {
      t && t.c(), (e = _e());
    },
    l(l) {
      t && t.l(l), (e = _e());
    },
    m(l, s) {
      t && t.m(l, s), V(l, e, s);
    },
    p(l, [s]) {
      l[0]
        ? t
          ? t.p(l, s)
          : ((t = ke(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: J,
    o: J,
    d(l) {
      l && k(e), t && t.d(l);
    },
  };
}
function ze(a, e, t) {
  let { variant: l } = e,
    { showToast: s = !1 } = e,
    { visibleTime: i = 3e3 } = e,
    { content: c } = e,
    f,
    u = !1,
    h = () => {
      t(3, (f.style.display = "none"), f);
    };
  const _ = (n) => {
      n &&
        (setTimeout(() => {
          t(4, (u = !0));
        }, i - 500),
        setTimeout(() => {
          t(0, (s = !1)), t(4, (u = !1));
        }, i));
    },
    r = () => {
      h();
    };
  function q(n) {
    X[n ? "unshift" : "push"](() => {
      (f = n), t(3, f);
    });
  }
  return (
    (a.$$set = (n) => {
      "variant" in n && t(1, (l = n.variant)),
        "showToast" in n && t(0, (s = n.showToast)),
        "visibleTime" in n && t(6, (i = n.visibleTime)),
        "content" in n && t(2, (c = n.content));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && _(s ?? !1);
    }),
    [s, l, c, f, u, h, i, r, q]
  );
}
class we extends ie {
  constructor(e) {
    super(),
      re(this, e, ze, Ue, ne, {
        variant: 1,
        showToast: 0,
        visibleTime: 6,
        content: 2,
      });
  }
}
function Ce(a, e, t) {
  const l = a.slice();
  return (l[1] = e[t]), l;
}
function Te(a) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = p(l, "IMG", { draggable: !0, src: !0, alt: !0, class: !0 })),
        this.h();
    },
    h() {
      o(e, "draggable", "false"),
        j(e.src, (t = a[1])) || o(e, "src", t),
        o(e, "alt", "taken from camera"),
        o(e, "class", "svelte-t3m68y");
    },
    m(l, s) {
      V(l, e, s);
    },
    p(l, s) {
      s & 1 && !j(e.src, (t = l[1])) && o(e, "src", t);
    },
    d(l) {
      l && k(e);
    },
  };
}
function je(a) {
  let e,
    t = Q(a[0] ?? []),
    l = [];
  for (let s = 0; s < t.length; s += 1) l[s] = Te(Ce(a, t, s));
  return {
    c() {
      e = b("div");
      for (let s = 0; s < l.length; s += 1) l[s].c();
      this.h();
    },
    l(s) {
      e = p(s, "DIV", { id: !0, class: !0 });
      var i = P(e);
      for (let c = 0; c < l.length; c += 1) l[c].l(i);
      i.forEach(k), this.h();
    },
    h() {
      o(e, "id", "pictures"), o(e, "class", "svelte-t3m68y");
    },
    m(s, i) {
      V(s, e, i);
      for (let c = 0; c < l.length; c += 1) l[c] && l[c].m(e, null);
    },
    p(s, [i]) {
      if (i & 1) {
        t = Q(s[0] ?? []);
        let c;
        for (c = 0; c < t.length; c += 1) {
          const f = Ce(s, t, c);
          l[c] ? l[c].p(f, i) : ((l[c] = Te(f)), l[c].c(), l[c].m(e, null));
        }
        for (; c < l.length; c += 1) l[c].d(1);
        l.length = t.length;
      }
    },
    i: J,
    o: J,
    d(s) {
      s && k(e), he(l, s);
    },
  };
}
function We(a, e, t) {
  let { images: l = [] } = e;
  return (
    (a.$$set = (s) => {
      "images" in s && t(0, (l = s.images));
    }),
    [l]
  );
}
class Ye extends ie {
  constructor(e) {
    super(), re(this, e, We, je, ne, { images: 0 });
  }
}
function Ie(a, e, t) {
  const l = a.slice();
  return (l[18] = e[t]), (l[20] = t), l;
}
function qe(a, e, t) {
  const l = a.slice();
  return (l[18] = e[t]), (l[20] = t), l;
}
function Ee(a) {
  let e,
    t = "<p>Post</p>",
    l,
    s;
  return {
    c() {
      (e = b("a")), (e.innerHTML = t), this.h();
    },
    l(i) {
      (e = p(i, "A", { class: !0, href: !0, "data-svelte-h": !0 })),
        U(e) !== "svelte-16slb96" && (e.innerHTML = t),
        this.h();
    },
    h() {
      o(e, "class", "post svelte-19qbl8q"), o(e, "href", "/");
    },
    m(i, c) {
      V(i, e, c), l || ((s = z(e, "click", de(a[9]))), (l = !0));
    },
    p: J,
    d(i) {
      i && k(e), (l = !1), s();
    },
  };
}
function Je(a) {
  let e,
    t,
    l,
    s,
    i,
    c = "Store upto three images";
  return {
    c() {
      (e = b("div")),
        (t = b("img")),
        (s = y()),
        (i = b("h3")),
        (i.textContent = c),
        this.h();
    },
    l(f) {
      e = p(f, "DIV", { class: !0 });
      var u = P(e);
      (t = p(u, "IMG", { draggable: !0, src: !0, alt: !0, class: !0 })),
        (s = D(u)),
        (i = p(u, "H3", { class: !0, "data-svelte-h": !0 })),
        U(i) !== "svelte-rf0s05" && (i.textContent = c),
        u.forEach(k),
        this.h();
    },
    h() {
      o(t, "draggable", "false"),
        j(t.src, (l = "../build/images/Preview/EmptyState.svg")) ||
          o(t, "src", l),
        o(t, "alt", "empty state"),
        o(t, "class", "svelte-19qbl8q"),
        o(i, "class", "svelte-19qbl8q"),
        ue(i, "color", "#ffffff"),
        o(e, "class", "empty-state svelte-19qbl8q");
    },
    m(f, u) {
      V(f, e, u), m(e, t), m(e, s), m(e, i);
    },
    p: J,
    d(f) {
      f && k(e);
    },
  };
}
function Ke(a) {
  let e,
    t,
    l,
    s,
    i,
    c = Q(a[0]),
    f = [];
  for (let r = 0; r < c.length; r += 1) f[r] = Be(qe(a, c, r));
  let u = Q(a[0]),
    h = [];
  for (let r = 0; r < u.length; r += 1) h[r] = ye(Ie(a, u, r));
  let _ = a[0].length !== 0 && De(a);
  return {
    c() {
      e = b("div");
      for (let r = 0; r < f.length; r += 1) f[r].c();
      (t = y()), (l = b("div")), (s = b("div"));
      for (let r = 0; r < h.length; r += 1) h[r].c();
      (i = y()), _ && _.c(), this.h();
    },
    l(r) {
      e = p(r, "DIV", { class: !0 });
      var q = P(e);
      for (let d = 0; d < f.length; d += 1) f[d].l(q);
      q.forEach(k), (t = D(r)), (l = p(r, "DIV", { class: !0 }));
      var n = P(l);
      s = p(n, "DIV", { class: !0 });
      var B = P(s);
      for (let d = 0; d < h.length; d += 1) h[d].l(B);
      B.forEach(k), (i = D(n)), _ && _.l(n), n.forEach(k), this.h();
    },
    h() {
      o(e, "class", "image-slider svelte-19qbl8q"),
        o(s, "class", "thumbnails svelte-19qbl8q"),
        o(l, "class", "bottom svelte-19qbl8q");
    },
    m(r, q) {
      V(r, e, q);
      for (let n = 0; n < f.length; n += 1) f[n] && f[n].m(e, null);
      V(r, t, q), V(r, l, q), m(l, s);
      for (let n = 0; n < h.length; n += 1) h[n] && h[n].m(s, null);
      m(l, i), _ && _.m(l, null);
    },
    p(r, q) {
      if (q & 1) {
        c = Q(r[0]);
        let n;
        for (n = 0; n < c.length; n += 1) {
          const B = qe(r, c, n);
          f[n] ? f[n].p(B, q) : ((f[n] = Be(B)), f[n].c(), f[n].m(e, null));
        }
        for (; n < f.length; n += 1) f[n].d(1);
        f.length = c.length;
      }
      if (q & 3) {
        u = Q(r[0]);
        let n;
        for (n = 0; n < u.length; n += 1) {
          const B = Ie(r, u, n);
          h[n] ? h[n].p(B, q) : ((h[n] = ye(B)), h[n].c(), h[n].m(s, null));
        }
        for (; n < h.length; n += 1) h[n].d(1);
        h.length = u.length;
      }
      r[0].length !== 0
        ? _
          ? _.p(r, q)
          : ((_ = De(r)), _.c(), _.m(l, null))
        : _ && (_.d(1), (_ = null));
    },
    d(r) {
      r && (k(e), k(t), k(l)), he(f, r), he(h, r), _ && _.d();
    },
  };
}
function Be(a) {
  let e, t;
  return {
    c() {
      (e = b("img")), this.h();
    },
    l(l) {
      (e = p(l, "IMG", {
        draggable: !0,
        class: !0,
        width: !0,
        height: !0,
        src: !0,
        id: !0,
        alt: !0,
      })),
        this.h();
    },
    h() {
      o(e, "draggable", "false"),
        o(e, "class", "gallery-image svelte-19qbl8q"),
        o(e, "width", "100%"),
        o(e, "height", "100%"),
        j(e.src, (t = a[18])) || o(e, "src", t),
        o(e, "id", `image-${a[20]}`),
        o(e, "alt", "gallery");
    },
    m(l, s) {
      V(l, e, s);
    },
    p(l, s) {
      s & 1 && !j(e.src, (t = l[18])) && o(e, "src", t);
    },
    d(l) {
      l && k(e);
    },
  };
}
function ye(a) {
  let e, t, l, s, i, c;
  function f() {
    return a[10](a[20]);
  }
  return {
    c() {
      (e = b("a")), (t = b("img")), (s = y()), this.h();
    },
    l(u) {
      e = p(u, "A", { class: !0, href: !0 });
      var h = P(e);
      (t = p(h, "IMG", { draggable: !0, class: !0, src: !0, alt: !0 })),
        (s = D(h)),
        h.forEach(k),
        this.h();
    },
    h() {
      o(t, "draggable", "false"),
        o(t, "class", "thumbnail-image svelte-19qbl8q"),
        j(t.src, (l = a[18])) || o(t, "src", l),
        o(t, "alt", "thumbnail"),
        o(e, "class", "thumbnail svelte-19qbl8q"),
        o(e, "href", `#image-${a[20]}`),
        O(e, "active", a[1] === a[20]);
    },
    m(u, h) {
      V(u, e, h), m(e, t), m(e, s), i || ((c = z(e, "click", f)), (i = !0));
    },
    p(u, h) {
      (a = u),
        h & 1 && !j(t.src, (l = a[18])) && o(t, "src", l),
        h & 2 && O(e, "active", a[1] === a[20]);
    },
    d(u) {
      u && k(e), (i = !1), c();
    },
  };
}
function De(a) {
  let e,
    t =
      '<img draggable="false" src="../build/images/Preview/Delete.svg" alt="delete"/>',
    l,
    s;
  return {
    c() {
      (e = b("a")), (e.innerHTML = t), this.h();
    },
    l(i) {
      (e = p(i, "A", { href: !0, "data-svelte-h": !0 })),
        U(e) !== "svelte-oxoea9" && (e.innerHTML = t),
        this.h();
    },
    h() {
      o(e, "href", "/");
    },
    m(i, c) {
      V(i, e, c), l || ((s = z(e, "click", de(a[8]))), (l = !0));
    },
    p: J,
    d(i) {
      i && k(e), (l = !1), s();
    },
  };
}
function Qe(a) {
  let e,
    t,
    l,
    s =
      '<img draggable="false" src="../build/images/Preview/Back.svg" alt="back"/>',
    i,
    c,
    f,
    u,
    h,
    _,
    r,
    q,
    n,
    B,
    d,
    C,
    T,
    H,
    I = a[0].length !== 0 && Ee(a);
  function W(g, w) {
    return g[0].length !== 0 ? Ke : Je;
  }
  let v = W(a),
    L = v(a);
  function R(g) {
    a[12](g);
  }
  function S(g) {
    a[13](g);
  }
  function K(g) {
    a[14](g);
  }
  let G = { images: ae(), handleClick: a[11] };
  return (
    a[3] !== void 0 && (G.dialog = a[3]),
    a[4] !== void 0 && (G.showBackdrop = a[4]),
    a[2] !== void 0 && (G.checked = a[2]),
    (u = new Re({ props: G })),
    X.push(() => fe(u, "dialog", R)),
    X.push(() => fe(u, "showBackdrop", S)),
    X.push(() => fe(u, "checked", K)),
    (n = new we({
      props: {
        showToast: a[5] && !(a[5] = void 0),
        visibleTime: 3e3,
        variant: "success",
        content: {
          heading: "Success",
          description: "Your images have been submitted successfully",
        },
      },
    })),
    (d = new we({
      props: {
        showToast: a[5] === !1 && !(a[5] = void 0),
        visibleTime: 3e3,
        variant: "failure",
        content: {
          heading: "Failure",
          description: "Failed to submit your images",
        },
      },
    })),
    {
      c() {
        (e = b("main")),
          (t = b("nav")),
          (l = b("a")),
          (l.innerHTML = s),
          (i = y()),
          I && I.c(),
          (c = y()),
          L.c(),
          (f = y()),
          x(u.$$.fragment),
          (q = y()),
          x(n.$$.fragment),
          (B = y()),
          x(d.$$.fragment),
          (C = y()),
          (T = b("canvas")),
          this.h();
      },
      l(g) {
        e = p(g, "MAIN", { class: !0 });
        var w = P(e);
        t = p(w, "NAV", { class: !0 });
        var E = P(t);
        (l = p(E, "A", { href: !0, "data-svelte-h": !0 })),
          U(l) !== "svelte-m2wzz6" && (l.innerHTML = s),
          (i = D(E)),
          I && I.l(E),
          E.forEach(k),
          (c = D(w)),
          L.l(w),
          (f = D(w)),
          $(u.$$.fragment, w),
          (q = D(w)),
          $(n.$$.fragment, w),
          (B = D(w)),
          $(d.$$.fragment, w),
          w.forEach(k),
          (C = D(g)),
          (T = p(g, "CANVAS", { width: !0, height: !0, id: !0, class: !0 })),
          P(T).forEach(k),
          this.h();
      },
      h() {
        o(l, "href", "/"),
          o(t, "class", "nav-bar svelte-19qbl8q"),
          o(e, "class", "camera-preview svelte-19qbl8q"),
          o(T, "width", "512"),
          o(T, "height", "464"),
          o(T, "id", "canvas"),
          o(T, "class", "svelte-19qbl8q");
      },
      m(g, w) {
        V(g, e, w),
          m(e, t),
          m(t, l),
          m(t, i),
          I && I.m(t, null),
          m(e, c),
          L.m(e, null),
          m(e, f),
          ee(u, e, null),
          m(e, q),
          ee(n, e, null),
          m(e, B),
          ee(d, e, null),
          V(g, C, w),
          V(g, T, w),
          a[15](T),
          (H = !0);
      },
      p(g, [w]) {
        g[0].length !== 0
          ? I
            ? I.p(g, w)
            : ((I = Ee(g)), I.c(), I.m(t, null))
          : I && (I.d(1), (I = null)),
          v === (v = W(g)) && L
            ? L.p(g, w)
            : (L.d(1), (L = v(g)), L && (L.c(), L.m(e, f)));
        const E = {};
        !h && w & 8 && ((h = !0), (E.dialog = g[3]), oe(() => (h = !1))),
          !_ &&
            w & 16 &&
            ((_ = !0), (E.showBackdrop = g[4]), oe(() => (_ = !1))),
          !r && w & 4 && ((r = !0), (E.checked = g[2]), oe(() => (r = !1))),
          u.$set(E);
        const Y = {};
        w & 32 && (Y.showToast = g[5] && !(g[5] = void 0)), n.$set(Y);
        const F = {};
        w & 32 && (F.showToast = g[5] === !1 && !(g[5] = void 0)), d.$set(F);
      },
      i(g) {
        H ||
          (te(u.$$.fragment, g),
          te(n.$$.fragment, g),
          te(d.$$.fragment, g),
          (H = !0));
      },
      o(g) {
        le(u.$$.fragment, g),
          le(n.$$.fragment, g),
          le(d.$$.fragment, g),
          (H = !1);
      },
      d(g) {
        g && (k(e), k(C), k(T)),
          I && I.d(),
          L.d(),
          se(u),
          se(n),
          se(d),
          a[15](null);
      },
    }
  );
}
async function Xe(a) {
  return await (await fetch(a)).blob();
}
function Ze(a, e) {
  return new File([a], e, { type: a.type });
}
async function xe(a) {
  const e = [];
  for (let t = 0; t < a.length; t++) {
    const l = await Xe(a[t]),
      s = Ze(l, `file${t + 1}.png`);
    e.push(s);
  }
  return e;
}
function $e(a, e, t) {
  let l = ae(),
    s = 0,
    i,
    c,
    f = !1,
    u,
    h,
    _ = "",
    r = async () => {
      const v = await xe(ae()),
        L = new FormData();
      v.forEach((R, S) => {
        L.append(`file${S + 1}`, R);
      }),
        t(5, (u = !!(await Ve(v)))),
        u && _ && (await Se(_, h));
    };
  const q = () => {
    He(s), t(0, (l = ae()));
  };
  let n;
  Ae(() => {
    _ = Fe();
    const v = n.getContext("2d"),
      L = w("../build/images/Preview/Prompt for first Email.svg", g),
      R = w(l[0], g),
      S = w(l[1], g),
      K = w(l[2], g);
    let G = 0;
    async function g() {
      if (((G += 1), G === 4 && v)) {
        v.beginPath(),
          (v.strokeStyle = "#75861B"),
          (v.lineWidth = 0),
          (v.fillStyle = "#F0EBE2"),
          v.drawImage(L, 0, 0, n.width, n.height),
          (v.font = "18px serif"),
          (v.fillStyle = "#75861B"),
          (v.textAlign = "center"),
          v.fillText(
            ((_ == null ? void 0 : _.toUpperCase()) ?? "").replace(/@.*/, "") +
              "'s Images",
            n.width / 2,
            370
          ),
          v.rotate(-0.23),
          v.drawImage(R, 14.4, 171.5, 108, 117),
          v.rotate(0.22),
          v.drawImage(S, 201, 136, 108, 117),
          v.rotate(0.226),
          v.drawImage(K, 375, 62, 108, 117);
        let E = n.toDataURL("image/jpeg", 1);
        E && (h = await Ge(E));
      }
    }
    function w(E, Y) {
      const F = new Image();
      return (F.onload = Y), (F.src = E), F;
    }
  });
  const B = () => {
      c.show(), t(4, (f = !0));
    },
    d = (v) => t(1, (s = v)),
    C = () => r();
  function T(v) {
    (c = v), t(3, c);
  }
  function H(v) {
    (f = v), t(4, f);
  }
  function I(v) {
    (i = v), t(2, i);
  }
  function W(v) {
    X[v ? "unshift" : "push"](() => {
      (n = v), t(6, n);
    });
  }
  return [l, s, i, c, f, u, n, r, q, B, d, C, T, H, I, W];
}
class at extends ie {
  constructor(e) {
    super(), re(this, e, $e, Qe, ne, {});
  }
}
export { at as component };
