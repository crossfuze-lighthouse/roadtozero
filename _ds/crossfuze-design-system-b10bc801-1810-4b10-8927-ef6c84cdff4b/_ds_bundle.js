/* @ds-bundle: {"format":4,"namespace":"CrossfuzeDesignSystem_b10bc8","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GradientText","sourcePath":"components/core/GradientText.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"ScoreBar","sourcePath":"components/data/ScoreBar.jsx"},{"name":"ScoreTile","sourcePath":"components/data/ScoreTile.jsx"},{"name":"OptionCard","sourcePath":"components/forms/OptionCard.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"components/layout/SiteNav.jsx"},{"name":"Bluf","sourcePath":"components/patterns/Bluf.jsx"},{"name":"CalcCard","sourcePath":"components/patterns/CalcCard.jsx"},{"name":"ChatBubble","sourcePath":"components/patterns/ChatBubble.jsx"},{"name":"FaqItem","sourcePath":"components/patterns/FaqItem.jsx"},{"name":"Icon","sourcePath":"components/patterns/Icon.jsx"},{"name":"TrackCard","sourcePath":"components/patterns/TrackCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"2c1e2fed48c8","components/core/Card.jsx":"d2520571fc7e","components/core/Eyebrow.jsx":"20238c4082f7","components/core/GradientText.jsx":"f77fbfb03983","components/core/Pill.jsx":"498288d50a3b","components/core/Stat.jsx":"b8e5c4c5a48c","components/data/ProgressBar.jsx":"ce80926602fe","components/data/ScoreBar.jsx":"e24f8f3a3dd8","components/data/ScoreTile.jsx":"05ce987e814d","components/forms/OptionCard.jsx":"5de6e0e5a4fd","components/forms/TextInput.jsx":"b25c97311f6e","components/layout/Hero.jsx":"0ece62539ebf","components/layout/Section.jsx":"1228b7af41a9","components/layout/SiteFooter.jsx":"b6d6f17b7e2e","components/layout/SiteNav.jsx":"99ca1c6c2cab","components/patterns/Bluf.jsx":"5e60d3971046","components/patterns/CalcCard.jsx":"b04bd918db37","components/patterns/ChatBubble.jsx":"253b6aa00139","components/patterns/FaqItem.jsx":"896eed47361f","components/patterns/Icon.jsx":"c55458163ef3","components/patterns/TrackCard.jsx":"600f5f7282cb","ui_kits/marketing/Home.jsx":"01943066f50d","ui_kits/marketing/Tracks.jsx":"73f888f4257a","ui_kits/tools/AskOtto.jsx":"8636e7209b9b","ui_kits/tools/Readiness.jsx":"4080e38d24ec"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CrossfuzeDesignSystem_b10bc8 = window.CrossfuzeDesignSystem_b10bc8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  borderRadius: 'var(--r-btn)',
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  letterSpacing: '-0.005em',
  whiteSpace: 'nowrap',
  transition: 'all var(--dur-fast) var(--ease-standard)'
};
const sizes = {
  md: {
    fontSize: '14px',
    padding: '11px 22px'
  },
  lg: {
    fontSize: '15px',
    padding: '14px 28px'
  }
};
const variants = {
  primary: {
    background: 'var(--cf-bright-green)',
    color: 'var(--cf-midnight-blue)',
    borderColor: 'var(--cf-bright-green)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--cf-white)',
    borderColor: 'rgba(255,255,255,0.32)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--cf-midnight-blue)',
    borderColor: 'var(--cf-midnight-blue)'
  }
};
const hovers = {
  primary: {
    background: 'var(--cf-bright-green-hover)',
    borderColor: 'var(--cf-bright-green-hover)'
  },
  ghost: {
    background: 'var(--state-hover-on-dark)',
    borderColor: 'rgba(255,255,255,0.5)'
  },
  outline: {
    background: 'var(--cf-midnight-blue)',
    color: 'var(--cf-white)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  disabled = false,
  href,
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const css = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(disabled ? {
      opacity: 0.4,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      transition: 'transform var(--dur-fast) var(--ease-standard)',
      transform: hover ? 'translateX(2px)' : 'none'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  tone = 'light',
  hoverable = true,
  padding = '28px',
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const light = {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--fg-primary)'
  };
  const dark = {
    background: 'var(--bg-surface-on-dark)',
    border: '1px solid var(--border-on-dark)',
    color: 'var(--cf-white)'
  };
  const lightHover = {
    borderColor: 'var(--cf-utility-blue)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-card-hover)'
  };
  const darkHover = {
    background: 'var(--bg-surface-on-dark-hover)',
    borderColor: 'var(--cf-bright-green)'
  };
  const on = hoverable && hover;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--r-lg)',
      padding,
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...(tone === 'dark' ? dark : light),
      ...(on ? tone === 'dark' ? darkHover : lightHover : null),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
const tones = {
  utility: 'var(--cf-utility-blue)',
  green: 'var(--cf-bright-green)',
  cyan: 'var(--cf-bright-blue)',
  purple: 'var(--cf-lavender)',
  red: 'var(--cf-callout-red)',
  midnight: 'var(--cf-midnight-blue)',
  white: 'var(--cf-white)'
};
function Eyebrow({
  tone = 'utility',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: tones[tone],
      display: 'inline-block',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GradientText.jsx
try { (() => {
const grads = {
  vibrant: 'var(--gradient-vibrant)',
  calm: 'var(--gradient-calm)',
  storm: 'var(--gradient-storm)'
};
function GradientText({
  gradient = 'calm',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: grads[gradient],
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { GradientText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GradientText.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
const tones = {
  green: {
    bg: 'rgba(143,255,219,0.10)',
    border: 'rgba(143,255,219,0.30)',
    fg: 'var(--cf-bright-green)'
  },
  cyan: {
    bg: 'rgba(113,241,247,0.10)',
    border: 'rgba(113,241,247,0.30)',
    fg: 'var(--cf-bright-blue)'
  },
  purple: {
    bg: 'rgba(192,166,255,0.12)',
    border: 'rgba(192,166,255,0.32)',
    fg: 'var(--cf-lavender)'
  },
  red: {
    bg: 'rgba(246,82,117,0.10)',
    border: 'rgba(246,82,117,0.32)',
    fg: 'var(--cf-callout-red)'
  },
  midnight: {
    bg: 'var(--cf-midnight-05)',
    border: 'var(--border-strong)',
    fg: 'var(--cf-midnight-blue)'
  }
};
function Pill({
  tone = 'green',
  children,
  style
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: t.bg,
      border: '1px solid ' + t.border,
      color: t.fg,
      padding: '4px 10px',
      borderRadius: 'var(--r-pill)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '10px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  tone = 'light',
  size = 'md',
  style
}) {
  const num = {
    md: '48px',
    lg: '72px'
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: num,
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      margin: '0 0 8px',
      color: tone === 'dark' ? 'var(--cf-bright-green)' : 'var(--cf-midnight-blue)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      lineHeight: 1.5,
      fontWeight: 500,
      color: tone === 'dark' ? 'var(--fg-on-dark-soft)' : 'var(--fg-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '2px',
      width: '100%',
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '2px',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: Math.max(0, Math.min(100, value)) + '%',
      background: 'linear-gradient(90deg,var(--cf-callout-red) 0%,var(--cf-utility-blue) 100%)',
      borderRadius: '2px',
      transition: 'width var(--dur-slow) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/ScoreBar.jsx
try { (() => {
function ScoreBar({
  label,
  sublabel,
  score = 0,
  max = 6,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr 56px',
      gap: '14px',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px dotted rgba(255,255,255,0.08)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--cf-white)'
    }
  }, label, sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '9.5px',
      color: 'rgba(255,255,255,0.45)',
      fontWeight: 400,
      letterSpacing: '0.10em',
      marginTop: '2px'
    }
  }, sublabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.06)',
      height: '8px',
      borderRadius: '4px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: score / max * 100 + '%',
      background: 'linear-gradient(90deg,var(--cf-callout-red) 0%,var(--cf-utility-blue) 50%,var(--cf-bright-green) 100%)',
      borderRadius: '4px',
      transition: 'width var(--dur-slow) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--cf-bright-blue)',
      fontWeight: 700,
      textAlign: 'right'
    }
  }, score, " / ", max));
}
Object.assign(__ds_scope, { ScoreBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ScoreBar.jsx", error: String((e && e.message) || e) }); }

// components/data/ScoreTile.jsx
try { (() => {
const bands = {
  low: 'var(--cf-callout-red)',
  mid: 'var(--cf-lavender)',
  high: 'var(--cf-bright-green)',
  neutral: 'var(--cf-bright-blue)'
};
function ScoreTile({
  label,
  value,
  sub,
  band = 'neutral',
  valueSize = '36px',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-surface-on-dark)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '10px',
      padding: '18px 20px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '0.20em',
      textTransform: 'uppercase',
      color: 'var(--fg-on-dark-muted)',
      fontWeight: 700,
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: valueSize,
      fontWeight: 700,
      color: bands[band],
      lineHeight: 1,
      letterSpacing: '-0.03em'
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'rgba(255,255,255,0.6)',
      marginTop: '6px'
    }
  }, sub));
}
Object.assign(__ds_scope, { ScoreTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ScoreTile.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionCard.jsx
try { (() => {
function OptionCard({
  index,
  label,
  meta,
  selected = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: selected ? 'rgba(44,176,205,0.08)' : hover ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
      border: '1px solid ' + (selected ? 'var(--cf-bright-blue)' : hover ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.10)'),
      boxShadow: selected ? '0 0 0 1px var(--cf-bright-blue)' : 'none',
      borderRadius: '10px',
      padding: '16px 20px',
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      display: 'grid',
      gridTemplateColumns: '32px 1fr',
      gap: '14px',
      alignItems: 'start',
      textAlign: 'left',
      color: 'var(--cf-white)',
      fontFamily: 'var(--font-sans)',
      fontSize: '14.5px',
      lineHeight: 1.45,
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      background: selected ? 'var(--cf-bright-blue)' : 'rgba(255,255,255,0.06)',
      color: selected ? 'var(--cf-midnight-blue)' : 'rgba(255,255,255,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '11px',
      fontWeight: 700,
      marginTop: '-2px'
    }
  }, index), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cf-white)',
      display: 'block'
    }
  }, label), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '4px',
      fontSize: '11px',
      letterSpacing: '0.08em',
      color: 'var(--cf-bright-blue)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { OptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function TextInput({
  tone = 'dark',
  type = 'text',
  value,
  onChange,
  onKeyDown,
  placeholder,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const dark = {
    background: focus ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.04)',
    border: '1px solid ' + (focus ? 'var(--cf-bright-blue)' : 'rgba(255,255,255,0.15)'),
    color: 'var(--cf-white)'
  };
  const light = {
    background: 'var(--cf-white)',
    border: '1px solid ' + (focus ? 'var(--cf-utility-blue)' : 'var(--border-strong)'),
    color: 'var(--cf-midnight-blue)'
  };
  return /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    onKeyDown: onKeyDown,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    autoComplete: "off",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      padding: '11px 14px',
      borderRadius: 'var(--r-btn)',
      outline: 'none',
      width: '100%',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...(tone === 'dark' ? dark : light),
      ...style
    }
  });
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function Hero({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cf-midnight-blue)',
      color: 'var(--cf-white)',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'var(--glow-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: '88px var(--layout-gutter) 96px',
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
const tones = {
  light: {
    background: 'var(--bg-page)',
    color: 'var(--fg-primary)'
  },
  grey: {
    background: 'var(--cf-crisp-grey)',
    color: 'var(--fg-primary)'
  },
  dark: {
    background: 'var(--cf-midnight-blue)',
    color: 'var(--cf-white)'
  }
};
function Section({
  tone = 'light',
  narrow = false,
  id,
  children,
  style,
  innerStyle
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: 'var(--section-y) 0',
      position: 'relative',
      ...tones[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? 'var(--layout-narrow)' : 'var(--layout-max)',
      margin: '0 auto',
      padding: '0 var(--layout-gutter)',
      position: 'relative',
      ...innerStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function SiteFooter({
  logoSrc = 'assets/logo/crossfuze-wordmark-light.png',
  blurb,
  email = 'LetsTalk@Crossfuze.com',
  columns = [],
  legal = '© 2026 Crossfuze · Elite ServiceNow Partner · EMEA',
  version = 'v1.0'
}) {
  const h5 = {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: 'var(--cf-white)',
    margin: '0 0 16px'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cf-midnight-blue)',
      color: 'var(--fg-on-dark-soft)',
      padding: '64px 0 32px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse 60% 50% at 100% 100%,rgba(44,176,205,0.10) 0%,transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: '0 var(--layout-gutter)',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '48px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Crossfuze",
    style: {
      height: '22px',
      width: 'auto',
      marginBottom: '16px',
      filter: 'brightness(1.4)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      lineHeight: 1.55,
      maxWidth: '320px',
      margin: '0 0 16px',
      color: 'rgba(255,255,255,0.6)'
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'var(--fg-on-dark-muted)'
    }
  }, email)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("h5", {
    style: h5
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      margin: '0 0 10px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: '14px'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '64px auto 0',
      padding: '24px var(--layout-gutter) 0',
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '12.5px',
      color: 'rgba(255,255,255,0.5)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", null, version)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteNav.jsx
try { (() => {
function SiteNav({
  logoSrc = 'assets/logo/crossfuze-wordmark-light.png',
  items = [],
  active,
  ctaLabel = 'Score yourself',
  ctaHref = '#',
  secondaryLabel = 'Talk to us',
  secondaryHref = '#',
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(4,14,61,0.95)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      color: 'var(--cf-white)',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: '16px var(--layout-gutter)',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: '32px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && items[0].id);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Crossfuze",
    style: {
      height: '18px',
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      gap: '28px',
      justifyContent: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.id
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + it.id,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it.id);
    },
    style: {
      color: active === it.id ? 'var(--cf-white)' : 'var(--fg-on-dark-soft)',
      fontSize: '14px',
      fontWeight: 600
    }
  }, it.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: secondaryHref,
    style: {
      color: 'var(--fg-on-dark-soft)',
      fontSize: '14px',
      fontWeight: 600
    }
  }, secondaryLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    arrow: true,
    href: ctaHref
  }, ctaLabel))));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteNav.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Bluf.jsx
try { (() => {
function Bluf({
  label = 'Bottom line',
  tone = 'dark',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(143,255,219,0.06)',
      borderLeft: '3px solid var(--cf-bright-green)',
      padding: '18px 22px',
      borderRadius: '0 var(--r-md) var(--r-md) 0',
      margin: '24px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--cf-bright-green)',
      fontWeight: 700,
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      lineHeight: 1.45,
      fontWeight: 600,
      margin: 0,
      color: tone === 'dark' ? 'var(--cf-white)' : 'var(--cf-midnight-blue)'
    }
  }, children));
}
Object.assign(__ds_scope, { Bluf });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Bluf.jsx", error: String((e && e.message) || e) }); }

// components/patterns/CalcCard.jsx
try { (() => {
function CalcCard({
  tag,
  title,
  body,
  meta = [],
  href = '#',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'block',
      background: 'var(--bg-surface)',
      border: '1px solid ' + (hover ? 'var(--cf-utility-blue)' : 'var(--border-subtle)'),
      borderRadius: 'var(--r-lg)',
      padding: '24px',
      color: 'var(--cf-midnight-blue)',
      transition: 'all var(--dur-base) var(--ease-standard)',
      transform: hover ? 'translateY(-2px)' : 'none',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'none',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--cf-utility-blue)',
      fontWeight: 700,
      marginBottom: '10px'
    }
  }, tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '19px',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.25,
      margin: '0 0 6px',
      color: 'var(--cf-midnight-blue)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13.5px',
      lineHeight: 1.5,
      color: 'var(--fg-secondary)',
      margin: '0 0 12px'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      fontSize: '10.5px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      fontWeight: 600
    }
  }, meta.map(m => /*#__PURE__*/React.createElement("span", {
    key: m.label
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--cf-utility-blue)',
      marginRight: '4px'
    }
  }, m.label), m.value))));
}
Object.assign(__ds_scope, { CalcCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/CalcCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ChatBubble.jsx
try { (() => {
function ChatBubble({
  from = 'otto',
  children,
  meta,
  style
}) {
  const user = from === 'user';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '88%',
      padding: '14px 18px',
      fontSize: '14.5px',
      lineHeight: 1.55,
      borderRadius: '14px',
      position: 'relative',
      alignSelf: user ? 'flex-end' : 'flex-start',
      background: user ? 'var(--state-hover-on-dark)' : 'var(--cf-white)',
      color: user ? 'var(--cf-white)' : 'var(--cf-midnight-blue)',
      borderBottomRightRadius: user ? '4px' : '14px',
      borderBottomLeftRadius: user ? '14px' : '4px',
      ...style
    }
  }, !user && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-8px',
      left: '-8px',
      width: '24px',
      height: '24px',
      borderRadius: '6px',
      background: 'var(--gradient-vibrant)',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
    }
  }), children, meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '12px',
      paddingTop: '10px',
      borderTop: '1px solid var(--cf-midnight-10)',
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap',
      fontSize: '10px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--cf-utility-blue)',
      fontWeight: 700
    }
  }, meta));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/patterns/FaqItem.jsx
try { (() => {
function FaqItem({
  question,
  bluf,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      padding: '24px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '22px',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.3,
      color: 'var(--cf-midnight-blue)',
      margin: '0 0 12px'
    }
  }, question), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      fontWeight: 600,
      lineHeight: 1.45,
      margin: '0 0 8px',
      color: 'var(--cf-midnight-blue)'
    }
  }, bluf), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--fg-secondary)',
      margin: 0,
      maxWidth: '820px'
    }
  }, children));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Icon.jsx
try { (() => {
function Icon({
  name,
  tone = 'midnight',
  size = 96,
  basePath = 'assets',
  alt = '',
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: basePath + '/' + name + '-' + tone + '.png',
    alt: alt,
    "aria-hidden": alt ? undefined : true,
    style: {
      width: size,
      height: size,
      objectFit: 'contain',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Icon.jsx", error: String((e && e.message) || e) }); }

// components/patterns/TrackCard.jsx
try { (() => {
function TrackCard({
  label,
  tone = 'green',
  title,
  body,
  items = [],
  ctaLabel,
  ctaHref,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const accent = tone === 'purple' ? 'var(--cf-lavender)' : 'var(--cf-bright-green)';
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? 'var(--bg-surface-on-dark-hover)' : 'var(--bg-surface-on-dark)',
      border: '1px solid ' + (hover ? accent : 'var(--border-on-dark)'),
      borderRadius: 'var(--r-xl)',
      padding: '32px',
      color: 'var(--cf-white)',
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: accent,
      marginBottom: '12px'
    }
  }, label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '26px',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.15,
      margin: '0 0 12px',
      color: 'var(--cf-white)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--fg-on-dark-soft)',
      margin: '0 0 24px'
    }
  }, body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 24px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      fontSize: '13.5px',
      lineHeight: 1.5,
      color: 'var(--fg-on-dark-soft)',
      padding: '6px 0 6px 18px',
      position: 'relative',
      borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '14px',
      width: '8px',
      height: '1.5px',
      background: accent
    }
  }), it))), ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    arrow: true,
    href: ctaHref
  }, ctaLabel));
}
Object.assign(__ds_scope, { TrackCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/TrackCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Home.jsx
try { (() => {
const {
  Hero,
  Section,
  Eyebrow,
  GradientText,
  Button,
  Card,
  Stat,
  Bluf,
  TrackCard,
  CalcCard,
  FaqItem,
  Icon
} = window.CrossfuzeDesignSystem_b10bc8;
function ProofStrip() {
  const items = [['End of sale', '1 July 2026', '5 SKUs collapse to 1 Otto tier'], ['Readiness', '12 statements', '5 minutes to a score'], ['Launch', '12 weeks', 'CoreEssentials · fixed price'], ['Partner', 'Elite', 'ServiceNow Partner · EMEA']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32,
      marginTop: 72,
      paddingTop: 32,
      borderTop: '1px solid rgba(255,255,255,0.16)'
    }
  }, items.map(([k, v, s]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "green",
    style: {
      fontSize: 10,
      marginBottom: 8
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1.1,
      letterSpacing: '-0.01em'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.6)',
      marginTop: 4
    }
  }, s))));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "green"
  }, "Crossfuze \xB7 Enterprise Service Management"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px,5.6vw,76px)',
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      color: '#fff',
      margin: '14px 0 0',
      maxWidth: 1000
    }
  }, "Prepare for the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GradientText, {
    gradient: "calm"
  }, "Autonomous Enterprise"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      lineHeight: 1.45,
      color: 'rgba(255,255,255,0.85)',
      margin: '28px 0 0',
      maxWidth: 720
    }
  }, "Otto goes live in 2026. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Most enterprises are not ready."), " We get you there in two tracks, with one Center of Excellence, on the ServiceNow platform you already pay for."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: () => go('readiness')
  }, "Take the 5-minute readiness test"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => go('tracks')
  }, "See the two tracks")), /*#__PURE__*/React.createElement(ProofStrip, null)), /*#__PURE__*/React.createElement(Section, {
    narrow: true,
    style: {
      paddingTop: 96
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Question"), /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: 820,
      marginTop: 14
    }
  }, "Are you ready to meet Otto where it is about to land?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      marginTop: 18,
      maxWidth: 720
    }
  }, "ServiceNow has spent eighteen months collapsing five distinct AI products into a single layer called Otto. You do not choose whether this happens to your platform. You choose how ready you are when it does."), /*#__PURE__*/React.createElement(Bluf, {
    tone: "light"
  }, "Most ServiceNow enterprises sit at stage 1 or 2 of a 5-stage maturity curve. Otto delivers business value above stage 3, and the work to get there is operational, not technical.")), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "green"
  }, "Two Tracks \xB7 One CoE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      maxWidth: 820,
      marginTop: 14
    }
  }, "Pick the track that matches your ", /*#__PURE__*/React.createElement(GradientText, {
    gradient: "calm"
  }, "renewal pressure"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--fg-on-dark-soft)',
      marginTop: 18,
      maxWidth: 720
    }
  }, "Most enterprises run both, but one always leads. Crossfuze runs both tracks under one Center of Excellence so nothing gets re-architected later."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(TrackCard, {
    label: "Track A \xB7 Autonomous IT",
    title: "Tier-1 graduates from automated to autonomous.",
    body: "Mature the IT function to agentic resolution. Incident self-heal, request auto-fulfilment, change automation.",
    items: ['Now Assist for ITSM, ITOM, SecOps', 'Agentic incident, request and change workflows', 'CMDB and knowledge-base remediation', 'AI Control Tower governance integration'],
    ctaLabel: "See Track A detail",
    ctaHref: "#"
  }), /*#__PURE__*/React.createElement(TrackCard, {
    tone: "purple",
    label: "Track B \xB7 Business Re-invention",
    title: "Bring HR, Legal, Finance and Procurement up to the bar IT cleared.",
    body: "Onboarding, PTO, contract intake, vendor risk. The painful manual processes inside every business unit.",
    items: ['HR Service Delivery and Workplace Services', 'Legal Service Management', 'Finance Service Management', 'Sourcing and Procurement Operations'],
    ctaLabel: "See Track B detail",
    ctaHref: "#"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "grey"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Calculators \xB7 Self-serve"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Five tools. Answers in minutes."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      marginTop: 18
    }
  }, "No salesperson. No demo booking. Run the numbers yourself, save your results, and decide what to do with them.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(CalcCard, {
    tag: "Calculator 01 \xB7 AI Readiness",
    title: "Score your AI readiness.",
    body: "12 statements across four pillars. Returns a band: foundation first, pilot under governance, or Otto in 90 days.",
    meta: [{
      label: '5 min',
      value: '12 questions'
    }, {
      label: 'Score',
      value: '0 to 24'
    }]
  }), /*#__PURE__*/React.createElement(CalcCard, {
    tag: "Calculator 02 \xB7 Renewal cost-avoidance",
    title: "What does collapsing 5 SKUs save?",
    body: "Model the saving from consolidating five AI line items into one Otto tier.",
    meta: [{
      label: '3 min',
      value: '4 inputs'
    }, {
      label: 'Output',
      value: 'Annual'
    }]
  }), /*#__PURE__*/React.createElement(CalcCard, {
    tag: "Calculator 03 \xB7 Cost of delay",
    title: "What does a quarter of waiting cost?",
    body: "Compounds renewal cliff, shadow-AI sprawl and bad-AI-in-production risk.",
    meta: [{
      label: '2 min',
      value: '5 inputs'
    }, {
      label: 'Output',
      value: 'Quarterly'
    }]
  }), /*#__PURE__*/React.createElement(CalcCard, {
    tag: "Calculator 04 \xB7 Service desk ROI",
    title: "Model your Tier-1 deflection ROI.",
    body: "Ticket volume, cost per ticket and Otto deflection rate. Returns annual headcount released.",
    meta: [{
      label: '4 min',
      value: '6 inputs'
    }, {
      label: 'Output',
      value: 'FTE'
    }]
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Services \xB7 How we engage"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Three engagement shapes.", /*#__PURE__*/React.createElement("br", null), "One destination."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      marginTop: 18
    }
  }, "Crossfuze runs three engagement models, each engineered to compound the last. You can start at any stage.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, [['Stage 01', 'CoreEssentials', 'Fixed-price launch. CoE plus global config and 2 BUs live in 12 weeks. From $100K.', 'governance'], ['Stage 02', 'RunState', 'Monthly flat-rate hybrid pod. 90-day delivery cycles, CoE-governed. $22K per month.', 'ongoing'], ['Stage 03', 'CBS Delivery', 'Bespoke end-to-end automation use cases. Funded by renewal cost-avoidance.', 'automation']].map(([s, t, b, icon]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "24px"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    tone: "midnight",
    size: 64,
    basePath: "../../assets",
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, null, s), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '8px 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      margin: 0
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32,
      marginTop: 48,
      padding: '32px 0',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "5 \u2192 1",
    label: "SKUs consolidated into one Otto tier on 1 July 2026."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "12 wk",
    label: "CoreEssentials launch, CoE plus two BUs live."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "~18mo",
    label: "Median age of foundation data when Otto first lands without remediation."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3 / 5",
    label: "Shadow AI tools the average sub-5k enterprise has in production."
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "grey",
    narrow: true
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Answers, with the bottom line up front."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(FaqItem, {
    question: "What is the autonomous enterprise?",
    bluf: "An organisation where AI agents handle the work, not just answer about it."
  }, "On ServiceNow this is delivered through Otto, the unified AI layer that consolidates Now Assist, Moveworks, the Context Engine, Workflow Data Fabric and AI Control Tower into one tier."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "When does Otto launch?",
    bluf: "Otto goes live in 2026. Legacy AI SKUs end of sale on 1 July 2026."
  }, "At that cutover, the five separate AI line items on your renewal collapse into a single Otto tier price. Whatever you do not consolidate before that date, you pay separately, at the new tier, with new minimums."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "How much does CoreEssentials cost?",
    bluf: "$100K fixed price for a 12-week launch. Plus $30K per additional business unit."
  }, "CoreEssentials establishes the Center of Excellence, configures the platform globally and brings two business units live. After it, most clients move to RunState or scope CBS Delivery."))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    narrow: true,
    innerStyle: {
      textAlign: 'center'
    },
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "green"
  }, "Three decisions before your next ExCo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      maxWidth: 820,
      margin: '18px auto 0'
    }
  }, "Funding. Mandate. Direction.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GradientText, {
    gradient: "calm"
  }, "Decide all three in 30 minutes.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--fg-on-dark-soft)',
      margin: '24px auto 0',
      maxWidth: 720
    }
  }, "Bring the AI readiness score, the renewal audit and the Crossfuze track recommendation to one room. 45-minute audit, free of charge."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true
  }, "Book a 45-min audit"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => go('readiness')
  }, "Score yourself first"))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Tracks.jsx
try { (() => {
const {
  Hero,
  Section,
  Eyebrow,
  GradientText,
  Button,
  Card,
  Bluf,
  Icon
} = window.CrossfuzeDesignSystem_b10bc8;
function ChangeList({
  items,
  accent
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '16px 0 0'
    }
  }, items.map(([b, t], i) => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      padding: '10px 0',
      borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--border-subtle)',
      fontSize: 15,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--cf-midnight-blue)'
    }
  }, b), " ", t)));
}
function Tracks({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "green"
  }, "Two Tracks \xB7 One CoE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px,5.6vw,76px)',
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      color: '#fff',
      margin: '14px 0 0'
    }
  }, "Two routes to the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GradientText, {
    gradient: "calm"
  }, "autonomous enterprise"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--fg-on-dark-soft)',
      margin: '24px 0 0',
      maxWidth: 720
    }
  }, "Most enterprises run both. The Center of Excellence is what keeps them from re-architecting each other."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Bluf, {
    tone: "dark"
  }, "If IT is your strongest function, start Track A. If a business unit has the most painful manual process, start Track B. Either is fine. Do not start without the CoE."))), /*#__PURE__*/React.createElement(Section, {
    id: "track-a"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Track A"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Autonomous ", /*#__PURE__*/React.createElement(GradientText, {
    gradient: "calm"
  }, "IT"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      marginTop: 18
    }
  }, "Mature the IT function from automated, humans pressing buttons faster, to autonomous, workflows firing end to end. The service desk role re-centers on judgement and escalation."), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginTop: 40
    }
  }, "What changes"), /*#__PURE__*/React.createElement(ChangeList, {
    items: [['Tier-1 self-heal.', 'Incidents detected, triaged and resolved without human handoff.'], ['Request fulfilment becomes a conversation.', 'No catalog items. Users state intent, Otto routes, fulfils and confirms.'], ['Change moves with the platform.', 'Risk-graded, audited, rolled back behind feature flags.'], ['CMDB and KB are owned, not orphaned.', 'Otto answers are only as good as the foundation they pull from.']]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cf-midnight-blue)',
      color: '#fff',
      borderRadius: 'var(--r-lg)',
      padding: 28,
      boxShadow: '0 20px 50px rgba(4,14,61,0.18)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "green",
    style: {
      fontSize: 10
    }
  }, "Example \xB7 Incident self-heal"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: '12px 0 18px',
      color: '#fff'
    }
  }, "Payment gateway latency spike"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, [['MTTD', '38s', '#fff'], ['MTTC', '4m 12s', 'var(--cf-bright-green)'], ['Customer impact', 'None', 'var(--cf-bright-green)'], ['Avoided', '~£180K/hr', 'var(--cf-bright-green)']].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--fg-on-dark-muted)',
      marginBottom: 4,
      fontWeight: 700
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: c
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid var(--border-on-dark)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--fg-on-dark-soft)'
    }
  }, "Otto detected the anomaly, failed over to the secondary region, rolled back the v4.7 release behind a feature flag and drafted comms. SLA held. Maria, SRE lead, signed off the audit trail.")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    arrow: true,
    style: {
      marginTop: 24
    }
  }, "Model your Track A ROI")))), /*#__PURE__*/React.createElement(Section, {
    tone: "grey",
    id: "track-b"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, [['HR Service Delivery', 'Onboarding · PTO · Benefits', 'Single front door for every employee question.', 'hr-team'], ['Workplace Services', 'Facilities · MAC · Space', 'Move-add-change workflows trigger cross-departmental provisioning.', 'service-desk'], ['Legal Service Management', 'Contract intake · NDA · Matter', 'Legal Ops shifts from triage to oversight. Otto drafts, routes and tracks.', 'contract'], ['Finance / Procurement', 'FSM · SPRM · Vendor risk', 'Expense, vendor onboarding and contract lifecycle under a single AI policy.', 'supply-chain']].map(([e, t, b, icon]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "24px"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    tone: "midnight",
    size: 48,
    basePath: "../../assets",
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "purple",
    style: {
      color: 'var(--cf-purple)'
    }
  }, e), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '8px 0 6px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      margin: 0
    }
  }, b)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--cf-purple)'
    }
  }, "Track B"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Business ", /*#__PURE__*/React.createElement(GradientText, {
    gradient: "storm"
  }, "Re-invention"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      marginTop: 18
    }
  }, "Bring HR, Legal, Finance and Procurement up to the maturity bar IT has already cleared. Otto picks up the painful manual processes inside every business unit."), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginTop: 40,
      color: 'var(--cf-purple)'
    }
  }, "What changes"), /*#__PURE__*/React.createElement(ChangeList, {
    items: [['One platform, every function.', 'No more BU-specific tools to govern, audit and renew.'], ['Universal Request, one front door.', 'Employees stop hunting catalog items. Intent in plain language.'], ['Shadow AI pulled back under governance.', 'Copilot, ChatGPT Enterprise and in-app vendor AI inventoried and replaced.']]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    arrow: true,
    style: {
      marginTop: 24
    },
    onClick: () => go('readiness')
  }, "Score your readiness")))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    narrow: true,
    innerStyle: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "green"
  }, "The CoE \xB7 Both tracks"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      maxWidth: 820,
      margin: '18px auto 0'
    }
  }, "One Center of Excellence,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GradientText, {
    gradient: "calm"
  }, "four pillars"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--fg-on-dark-soft)',
      margin: '24px auto 0',
      maxWidth: 720
    }
  }, "Both tracks run under one governance body. Without it, BU-led pilots multiply and never compound."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      marginTop: 56,
      textAlign: 'left'
    }
  }, [['Pillar 01', 'Data', 'CMDB freshness · KB ownership · single source of truth.', 'cyan'], ['Pillar 02', 'Workflows', 'Top-20 documented · cross-BU on one platform · AHT measured.', 'purple'], ['Pillar 03', 'AI', 'Published policy · shadow inventory · Now Assist live with agents in pilot.', 'green'], ['Pillar 04', 'Governance', 'Named platform owner · CoE on cadence · AI control tower accountable.', 'red']].map(([p, t, b, tone]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "dark",
    padding: "24px"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: tone
  }, p), /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      margin: '8px 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--fg-on-dark-soft)',
      margin: 0
    }
  }, b))))));
}
Object.assign(window, {
  Tracks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Tracks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tools/AskOtto.jsx
try { (() => {
const {
  Eyebrow,
  Button,
  TextInput,
  ChatBubble,
  Pill
} = window.CrossfuzeDesignSystem_b10bc8;
const PROMPTS = ['Are we ready for Otto?', 'What is happening with the 2026 renewal?', 'What is the difference between Track A and Track B?', 'How much does CoreEssentials cost?', 'What is the autonomous enterprise?', 'What happens if I do nothing?', 'Where do we start?'];
const RESPONSES = [{
  m: /(ready|readiness|prepared)/i,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "I can answer that exactly. ", /*#__PURE__*/React.createElement("strong", null, "Take the 5-minute readiness assessment"), ", 12 statements across Data, Workflows, AI and Governance."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "0 to 11"), " foundation first. ", /*#__PURE__*/React.createElement("strong", null, "12 to 17"), " pilot under governance. ", /*#__PURE__*/React.createElement("strong", null, "18 to 24"), " Otto can land in 90 days.")),
  meta: 'Start the assessment →'
}, {
  m: /(2026|renewal|sku|consolidat|1 july|legacy)/i,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, "1 July 2026."), " That is when the legacy AI SKUs end of sale and collapse into a single Otto tier price."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0'
    }
  }, "If your renewal lands before that date you can consolidate Now Assist, Moveworks, Context Engine, Workflow Data Fabric and AI Control Tower: five line items into one tier.")),
  meta: 'Model your saving →'
}, {
  m: /(track|two tracks|business re|autonomous it)/i,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Two tracks, one Center of Excellence."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Track A, Autonomous IT."), " Tier-1 incidents and service requests self-heal."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Track B, Business Re-invention."), " HR, Legal, Finance and Procurement up to the bar IT already cleared.")),
  meta: 'See both tracks →'
}, {
  m: /(core\s*essential|how much|price|cost|engagement)/i,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, "CoreEssentials, $100K fixed."), " A 12-week launch. Establishes the CoE, configures the platform globally and brings 2 BUs live. Each extra BU is $30K."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0'
    }
  }, "After that, most clients move to ", /*#__PURE__*/React.createElement("strong", null, "RunState"), " at $22K per month, or scope ", /*#__PURE__*/React.createElement("strong", null, "CBS Delivery"), " for bespoke automation.")),
  meta: 'See all three engagement shapes →'
}, {
  m: /(autonomous enterprise|what is otto)/i,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "An organisation where AI agents ", /*#__PURE__*/React.createElement("strong", null, "handle the work"), ", not just answer about it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0'
    }
  }, "On ServiceNow this is delivered through Otto, the unified AI layer that consolidates five products into one tier.")),
  meta: 'Read the full guide →'
}, {
  m: /(do nothing|wait|delay|cost of delay)/i,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Doing nothing is not a neutral position. Three risks compound."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "01 Bad AI in production."), " Otto on a stale CMDB amplifies wrong answers at scale."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "02 Shadow AI calcifies."), " Each quarter without a sanctioned AI experience entrenches another tool."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "03 Renewal cliff."), " Miss 1 July 2026 and legacy pricing is gone.")),
  meta: 'Model your per-quarter cost →'
}, {
  m: /(start|begin|where do|first step)/i,
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Three decisions, in this order."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "01 Score yourself."), " Five minutes. It tells you whether you remediate first or pilot first."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "02 Audit your renewal."), " Crossfuze does the line-item audit free of charge."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "03 Name the CoE chair."), " One name. One charter. One Friday.")),
  meta: 'Start with the assessment →'
}];
const INTRO = {
  body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Hi. I am Otto, the agentic interface ServiceNow has built on top of your platform."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0'
    }
  }, "Ask me about Otto-readiness, the two tracks, the 1 July 2026 renewal cutover, or where Crossfuze recommends you start."))
};
function AskOtto() {
  const [thread, setThread] = React.useState([{
    from: 'otto',
    ...INTRO
  }]);
  const [text, setText] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const endRef = React.useRef(null);
  React.useEffect(() => {
    if (endRef.current) endRef.current.parentNode.scrollTop = endRef.current.parentNode.scrollHeight;
  }, [thread, typing]);
  const ask = q => {
    if (!q.trim()) return;
    setThread(t => [...t, {
      from: 'user',
      text: q
    }]);
    setText('');
    setTyping(true);
    setTimeout(() => {
      const r = RESPONSES.find(r => r.m.test(q));
      setTyping(false);
      setThread(t => [...t, r ? {
        from: 'otto',
        body: r.body,
        meta: r.meta
      } : {
        from: 'otto',
        body: /*#__PURE__*/React.createElement("p", {
          style: {
            margin: 0
          }
        }, "That one is best handled by a human, I am a scripted demo for now. Try asking about readiness, the 2026 renewal, the two tracks, or pricing."),
        meta: 'Book a 45-min audit →'
      }]);
    }, 700);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingBottom: 16,
      marginBottom: 18,
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: 'var(--gradient-vibrant)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 700,
      fontSize: 14
    }
  }, "Ask Otto"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--fg-on-dark-muted)',
      letterSpacing: '0.16em'
    }
  }, "CROSSFUZE \xB7 DEMO"))), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: 'var(--fg-on-dark-muted)',
      marginBottom: 14
    }
  }, "Try a question"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, PROMPTS.map(p => /*#__PURE__*/React.createElement(PromptButton, {
    key: p,
    label: p,
    onClick: () => ask(p)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 540,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      overflowY: 'auto',
      maxHeight: 520
    }
  }, thread.map((m, i) => /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    from: m.from,
    meta: m.meta && /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, m.meta)
  }, m.body || m.text)), typing && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      display: 'flex',
      gap: 4,
      padding: '12px 16px',
      background: '#fff',
      borderRadius: '14px 14px 14px 4px'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 6,
      height: 6,
      background: 'var(--cf-utility-blue)',
      borderRadius: '50%',
      opacity: 0.3 + i * 0.25
    }
  }))), /*#__PURE__*/React.createElement("div", {
    ref: endRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '18px 24px',
      background: 'rgba(255,255,255,0.02)',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    tone: "dark",
    value: text,
    placeholder: "Ask Otto a question",
    onChange: e => setText(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') ask(text);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: () => ask(text)
  }, "Send")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      fontSize: 12,
      color: 'rgba(255,255,255,0.42)',
      letterSpacing: '0.08em',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.04)'
    }
  }, "Otto demo \xB7 Scripted answers \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--cf-bright-green)'
    }
  }, "Talk to a human \u2192"))));
}
function PromptButton({
  label,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      background: h ? 'rgba(143,255,219,0.06)' : 'rgba(255,255,255,0.03)',
      border: '1px solid ' + (h ? 'var(--cf-bright-green)' : 'rgba(255,255,255,0.08)'),
      borderRadius: 8,
      padding: '12px 14px',
      color: h ? '#fff' : 'rgba(255,255,255,0.85)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      lineHeight: 1.4,
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, label);
}
Object.assign(window, {
  AskOtto,
  PromptButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tools/AskOtto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tools/Readiness.jsx
try { (() => {
const {
  Eyebrow,
  Button,
  ProgressBar,
  ScoreTile,
  ScoreBar,
  OptionCard,
  TextInput,
  Pill
} = window.CrossfuzeDesignSystem_b10bc8;
const PILLARS = [{
  id: 'data',
  n: '01',
  name: 'Data',
  tone: 'cyan'
}, {
  id: 'workflows',
  n: '02',
  name: 'Workflows',
  tone: 'purple'
}, {
  id: 'ai',
  n: '03',
  name: 'AI',
  tone: 'green'
}, {
  id: 'governance',
  n: '04',
  name: 'Governance',
  tone: 'red'
}];
const QUESTIONS = [{
  pillar: 'data',
  q: 'How well-maintained is your CMDB?',
  sub: 'The CMDB is the source of truth Otto relies on to route incidents and resolve requests. Stale data produces wrong answers, fast.',
  options: [['CMDB is unmaintained or unreliable.', 'Not maintained'], ['CMDB exists but ownership is unclear and reviews are ad-hoc.', 'Ad-hoc'], ['CMDB is reviewed at least quarterly with named ownership.', 'Quarterly · owned']]
}, {
  pillar: 'data',
  q: 'How fresh is your top knowledge base?',
  sub: 'Otto draws answers from knowledge articles. If your top 50 are 18 months stale, Otto will surface stale answers with confidence.',
  options: [['Knowledge articles are old, unmaintained, or non-existent.', 'Stale / missing'], ['Some articles refreshed, no formal review cycle.', 'Partial'], ['Top-50 articles refreshed within the last 6 months.', 'Under 6mo · owned']]
}, {
  pillar: 'data',
  q: 'Do your records reconcile to one source?',
  sub: 'Employee, asset and service records on multiple sources of truth lead to conflicting Otto answers across HR, IT and finance.',
  options: [['Multiple sources of truth, no reconciliation process.', 'Multiple sources'], ['Reconciliation happens manually or only on specific datasets.', 'Partial'], ['Employee, asset and service records reconcile to one source.', 'Single source']]
}, {
  pillar: 'workflows',
  q: 'Are your top workflows documented?',
  sub: 'Otto chains workflows into end-to-end outcomes. Undocumented workflows cannot be chained, they have to be re-discovered first.',
  options: [['Top workflows live in heads, runbooks or tribal knowledge.', 'Tribal'], ['Some workflows documented, ownership inconsistent.', 'Partial'], ['Top-20 workflows are documented with named owners.', 'Top-20 · owned']]
}, {
  pillar: 'workflows',
  q: 'Are you running cross-BU on one platform?',
  sub: 'Otto delivers most value when BUs share a platform. Siloed instances multiply the integration cost without multiplying the value.',
  options: [['Each BU runs its own platform, instance or process.', 'Siloed'], ['One BU on a shared platform, others in flight.', 'In progress'], ['Two or more BUs operate on a shared, un-siloed platform.', '2+ BUs shared']]
}, {
  pillar: 'workflows',
  q: 'Do you measure ticket handling time?',
  sub: 'Otto deflection ROI lands against measured baselines. Without AHT, ROI claims are theory.',
  options: [['AHT is not measured or measured inconsistently.', 'Not measured'], ['AHT measured for some queues but no targets.', 'No targets'], ['Tier-1 tickets have measured AHT targets.', 'Targets in place']]
}, {
  pillar: 'ai',
  q: 'Do you have a published AI policy?',
  sub: 'Otto introduces agents that take action. Policy gates what action they may take and what records must be kept.',
  options: [['No published AI policy in the organisation.', 'No policy'], ['Draft policy or one specific to a single tool.', 'Draft / partial'], ['A published AI policy defines what AI may and may not do.', 'Published']]
}, {
  pillar: 'ai',
  q: 'Have you inventoried in-production AI?',
  sub: 'Shadow AI hardens into the org chart fast. Otto governance starts with an inventory.',
  options: [['No inventory of AI tools in use.', 'No inventory'], ['Partial inventory, shadow AI in some BUs.', 'Partial'], ['All in-production AI tools are inventoried.', 'Inventoried']]
}, {
  pillar: 'ai',
  q: 'Where are you with Now Assist and agents?',
  sub: 'Now Assist is the foundation Otto sits on. At least one agentic workflow in pilot is what separates a buyer from a builder.',
  options: [['Now Assist not in production.', 'Not in production'], ['Now Assist licensed but not yet activated.', 'Licensed · not live'], ['Now Assist live, at least one agentic workflow in pilot.', 'Live · agent pilot']]
}, {
  pillar: 'governance',
  q: 'Who owns the ServiceNow platform?',
  sub: 'Otto delivers across functions. Without one accountable owner, every BU brings its own remediation.',
  options: [['Platform ownership is shared, unclear or contested.', 'Unclear'], ['Named owner but limited mandate across BUs.', 'Named · limited'], ['One named platform owner with cross-BU mandate.', 'Owned · empowered']]
}, {
  pillar: 'governance',
  q: 'Does a Centre of Excellence run on a cadence?',
  sub: 'The CoE is the venue where data, workflows and AI governance get governed enterprise-wide.',
  options: [['No CoE, decisions made BU by BU.', 'No CoE'], ['CoE exists informally, meetings are ad-hoc.', 'Informal'], ['A CoE meets on a published cadence.', 'On cadence']]
}, {
  pillar: 'governance',
  q: 'Who owns the AI control tower decision?',
  sub: 'AI Control Tower and the audit trail is the artefact your auditor wants. One named role makes the renewal conversation easy.',
  options: [['Nobody yet owns AI control tower or audit decisions.', 'Unowned'], ['Decision shared between CIO, CISO and Legal.', 'Shared'], ['AI control tower and audit decision sits with one role.', 'One role']]
}];
const BANDS = {
  low: {
    title: 'Foundation first',
    range: 'Score 0-11',
    rec: 'CoreEssentials',
    recSub: '12 weeks · fixed price',
    blurb: 'Most of your score is in the lower bands. The good news: the work is operational, not technical. CoreEssentials closes the gap in 12 weeks.',
    body: 'CoreEssentials establishes the Center of Excellence, configures the platform globally and brings two business units live. Foundation work is sequenced first, so Otto activates once the platform is ready, not before.',
    meta: ['12 wk · fixed price', '$100K plus $30K per extra BU', 'CoE included']
  },
  mid: {
    title: 'Pilot under governance',
    range: 'Score 12-17',
    rec: 'CoreEssentials → RunState',
    recSub: '$22K per month',
    blurb: 'You can pilot Otto on one Track A workflow or one Track B function, with CoE oversight, scoped audit and a hard stop date. Foundation gaps are remediated in parallel.',
    body: 'Start with CoreEssentials to lock in the CoE and one priority BU. Then move to RunState, a monthly hybrid pod on 90-day cycles, to bring the second BU and the first agentic workflow into production.',
    meta: ['CoreEssentials plus RunState', '$22K / month run rate', '90-day cycles']
  },
  high: {
    title: 'Otto can land in 90 days',
    range: 'Score 18-24',
    rec: 'CBS Delivery',
    recSub: 'Scoped per use case',
    blurb: 'You are ready to roll out Otto and measure value. Most enterprises take 12 to 18 months to reach this band. If you are already here, accelerate before the 1 July 2026 cutover.',
    body: 'Scope a bespoke CBS Delivery engagement around one high-value Otto use case, funded by renewal cost-avoidance from collapsing five SKUs into one Otto tier.',
    meta: ['CBS Delivery · scoped', 'Funded by renewal saving', '90-day production target']
  }
};
const bandFor = t => t <= 11 ? 'low' : t <= 17 ? 'mid' : 'high';
function Readiness() {
  const [view, setView] = React.useState('intro');
  const [idx, setIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState(() => new Array(QUESTIONS.length).fill(null));
  const total = answers.reduce((a, b) => a + (b == null ? 0 : b), 0);
  const bk = bandFor(total),
    b = BANDS[bk];
  const pick = v => setAnswers(a => {
    const n = [...a];
    n[idx] = v;
    return n;
  });
  const pillarScore = id => QUESTIONS.reduce((s, q, i) => q.pillar === id && answers[i] != null ? s + answers[i] : s, 0);
  if (view === 'intro') return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "cyan"
  }, "AI Readiness Assessment \xB7 Crossfuze"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(32px,4vw,44px)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '16px 0 18px'
    }
  }, "Where does ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cf-bright-blue)'
    }
  }, "Otto"), " land", /*#__PURE__*/React.createElement("br", null), "in your platform?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--fg-on-dark-soft)',
      margin: '0 0 24px',
      maxWidth: 600
    }
  }, "Twelve statements across the four CoE pillars: Data, Workflows, AI and Governance. Score honestly against today's reality, not the roadmap. Five minutes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 40
    }
  }, ['5 minutes', '12 statements', 'Score 0 to 24', 'ServiceNow-specific'].map(t => /*#__PURE__*/React.createElement(Pill, {
    key: t,
    tone: "cyan"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(44,176,205,0.04)',
      border: '1px solid rgba(44,176,205,0.25)',
      borderRadius: 10,
      padding: '20px 24px',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "cyan",
    style: {
      fontSize: 10
    }
  }, "Before you start"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#fff',
      margin: '10px 0 8px'
    }
  }, "Score against reality. Not the roadmap."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--fg-on-dark-soft)',
      margin: 0
    }
  }, "If you are unsure on a statement, choose the lower option. Over-scoring just produces a recommendation that will not work in production.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: () => {
      setView('question');
      setIdx(0);
    }
  }, "Start the assessment")));
  if (view === 'question') {
    const q = QUESTIONS[idx],
      p = PILLARS.find(x => x.id === q.pillar),
      sel = answers[idx];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProgressBar, {
      value: idx / QUESTIONS.length * 100
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: '0.18em',
        color: 'var(--fg-on-dark-muted)',
        margin: '12px 0 48px'
      }
    }, "QUESTION ", idx + 1, " OF ", QUESTIONS.length), /*#__PURE__*/React.createElement(Eyebrow, {
      tone: p.tone
    }, "Pillar ", p.n, " \xB7 ", p.name), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(24px,3vw,32px)',
        lineHeight: 1.25,
        letterSpacing: '-0.015em',
        color: '#fff',
        margin: '14px 0 14px'
      }
    }, q.q), /*#__PURE__*/React.createElement("p", {
      style: {
        fontStyle: 'italic',
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--fg-on-dark-muted)',
        margin: '0 0 32px',
        maxWidth: 620
      }
    }, q.sub), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, q.options.map((o, i) => /*#__PURE__*/React.createElement(OptionCard, {
      key: i,
      index: i + 1,
      label: o[0],
      meta: o[1],
      selected: sel === i,
      onClick: () => pick(i)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      disabled: idx === 0,
      onClick: () => setIdx(i => Math.max(0, i - 1))
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      arrow: true,
      disabled: sel == null,
      onClick: () => {
        if (idx < QUESTIONS.length - 1) setIdx(i => i + 1);else setView('results');
      }
    }, idx === QUESTIONS.length - 1 ? 'See your score' : 'Next')));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "cyan"
  }, "Your AI readiness score"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(28px,3.6vw,38px)',
      lineHeight: 1.18,
      letterSpacing: '-0.015em',
      color: '#fff',
      margin: '14px 0 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: bk === 'low' ? 'var(--cf-callout-red)' : bk === 'mid' ? 'var(--cf-lavender)' : 'var(--cf-bright-green)'
    }
  }, b.title), ". You scored ", total, " of 24."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--fg-on-dark-soft)',
      margin: 0,
      maxWidth: 620
    }
  }, b.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12,
      margin: '28px 0'
    }
  }, /*#__PURE__*/React.createElement(ScoreTile, {
    label: "Total score",
    band: bk,
    value: /*#__PURE__*/React.createElement("span", null, total, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 18
      }
    }, "/ 24")),
    sub: "12 of 12 statements answered"
  }), /*#__PURE__*/React.createElement(ScoreTile, {
    label: "Band",
    band: bk,
    value: b.title,
    valueSize: "22px",
    sub: b.range
  }), /*#__PURE__*/React.createElement(ScoreTile, {
    label: "Recommendation",
    band: bk,
    value: b.rec,
    valueSize: "22px",
    sub: b.recSub
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--fg-on-dark-muted)',
      margin: '36px 0 12px',
      fontWeight: 700
    }
  }, "Pillar breakdown"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 10,
      padding: '8px 24px'
    }
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement(ScoreBar, {
    key: p.id,
    label: 'Pillar ' + p.n + ' · ' + p.name,
    sublabel: "/ 6",
    score: pillarScore(p.id),
    style: i === 3 ? {
      borderBottom: 'none'
    } : null
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--fg-on-dark-muted)',
      margin: '36px 0 12px',
      fontWeight: 700
    }
  }, "Recommended next step"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,rgba(100,0,236,0.18) 0%,rgba(44,176,205,0.14) 100%)',
      border: '1px solid rgba(143,255,219,0.20)',
      borderRadius: 12,
      padding: '22px 26px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "green",
    style: {
      fontSize: 10
    }
  }, b.rec), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: '#fff',
      margin: '10px 0 8px'
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--fg-on-dark-soft)',
      margin: '0 0 14px'
    }
  }, b.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap',
      fontSize: 11,
      letterSpacing: '0.12em',
      color: 'rgba(255,255,255,0.65)'
    }
  }, b.meta.map(m => /*#__PURE__*/React.createElement("span", {
    key: m
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--cf-bright-green)',
      marginRight: 4
    }
  }, "\xB7"), m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 10,
      padding: '20px 24px',
      margin: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: '#fff',
      margin: '0 0 4px'
    }
  }, "Get your full readiness report"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.65)',
      margin: 0
    }
  }, "Pillar-by-pillar narrative, the gap-closure plan, and a quote-ready CoreEssentials estimate. We email it once, no follow-up sequence."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    tone: "dark",
    type: "email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true
  }, "Send the PDF"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 30,
      paddingTop: 26,
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.62)',
      margin: '0 auto 16px',
      maxWidth: 480
    }
  }, "Want to review the score with a Crossfuze specialist? Book a 45-minute walk-through, no commitment required."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true
  }, "Book a 45-min audit"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setAnswers(new Array(QUESTIONS.length).fill(null));
      setIdx(0);
      setView('intro');
    }
  }, "Retake the assessment"))));
}
Object.assign(window, {
  Readiness
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tools/Readiness.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GradientText = __ds_scope.GradientText;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.ScoreBar = __ds_scope.ScoreBar;

__ds_ns.ScoreTile = __ds_scope.ScoreTile;

__ds_ns.OptionCard = __ds_scope.OptionCard;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

__ds_ns.Bluf = __ds_scope.Bluf;

__ds_ns.CalcCard = __ds_scope.CalcCard;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.TrackCard = __ds_scope.TrackCard;

})();
