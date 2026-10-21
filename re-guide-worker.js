addEventListener('fetch', event => {
  event.respondWith(new Response(HTML, {
    headers: { 'content-type': 'text/html;charset=UTF-8' }
  }))
})


const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>RE Field Guide</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #090C14;
  --s1: #0F1420;
  --s2: #161B2E;
  --s3: #1E2438;
  --acc: #8B5CF6;
  --acc2: #F472B6;
  --acc3: #38BDF8;
  --text: #DDE4F0;
  --muted: #5A6580;
  --dim: #8892A4;
  --code: #0D1117;
  --border: rgba(139,92,246,0.18);
  --border2: rgba(244,114,182,0.15);
  --glow: 0 0 20px rgba(139,92,246,0.25);
  --nav-h: 64px;
  --safe-b: env(safe-area-inset-bottom, 0px);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { height: 100%; scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.65;
  min-height: 100%;
  padding-bottom: calc(var(--nav-h) + var(--safe-b));
  overflow-x: hidden;
}
body::before {
  content: '';
  position: fixed;
  inset: 0 0 auto;
  height: env(safe-area-inset-top, 0px);
  background: var(--s1);
  z-index: 100;
}

/* ─── HEADER ─── */
.hdr {
  position: sticky;
  top: env(safe-area-inset-top, 0px);
  background: rgba(9,12,20,0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 0 16px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
}
.hdr-logo {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--acc);
}
.hdr-logo span { color: var(--acc2); }
.hdr-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 2px 8px;
  border-radius: 4px;
}

/* ─── SECTIONS ─── */
.section { display: none; }
.section.active { display: block; }

/* ─── BOTTOM NAV ─── */
.nav {
  position: fixed;
  bottom: 0;
  left: 0; right: 0;
  height: calc(var(--nav-h) + var(--safe-b));
  padding-bottom: var(--safe-b);
  background: rgba(9,12,20,0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  z-index: 50;
}
.nav-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 8px 0;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted);
  transition: color 0.15s;
  -webkit-tap-highlight-color: transparent;
}
.nav-btn.active { color: var(--acc); }

.nav-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.nav-btn svg { width: 20px; height: 20px; }

/* ─── CONTENT LAYOUT ─── */
.page { padding: 20px 16px 12px; max-width: 480px; margin: 0 auto; }

/* ─── HERO ─── */
.hero {
  padding: 28px 16px 20px;
  text-align: center;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(139,92,246,0.06) 0%, transparent 100%);
}
.hero-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--acc2);
  letter-spacing: 0.12em;
  margin-bottom: 10px;
}
.hero h1 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.15;
  color: #fff;
  margin-bottom: 10px;
}
.hero h1 em { color: var(--acc); font-style: normal; }
.hero p { font-size: 14px; color: var(--dim); max-width: 320px; margin: 0 auto; }

/* ─── CARDS ─── */
.card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
}
.card-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  color: var(--acc);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.card-title .icon { font-size: 16px; }
.card p { font-size: 14px; color: var(--dim); line-height: 1.6; }
.card p + p { margin-top: 8px; }

/* ─── SECTIONS WITHIN PAGE ─── */
.sec-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 24px 0 10px;
}
h2 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 14px;
}
h3 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}

/* ─── CODE ─── */
pre {
  background: var(--code);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px;
  padding: 14px;
  overflow-x: auto;
  margin: 10px 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  line-height: 1.7;
  color: #CDD9E5;
}
code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  background: rgba(139,92,246,0.12);
  color: var(--acc);
  padding: 1px 5px;
  border-radius: 4px;
}
pre code { background: none; padding: 0; color: inherit; }
.kw { color: #F472B6; }
.cm { color: #5A6580; }
.str { color: #86EFAC; }
.num { color: #38BDF8; }
.fn { color: #C4B5FD; }

/* ─── STEPS ─── */
.steps { list-style: none; counter-reset: step; }
.steps li {
  counter-increment: step;
  display: flex;
  gap: 12px;
  margin-bottom: 14px;
  font-size: 14px;
  color: var(--dim);
  line-height: 1.6;
}
.steps li::before {
  content: counter(step);
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: rgba(139,92,246,0.15);
  border: 1px solid rgba(139,92,246,0.3);
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  color: var(--acc);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

/* ─── BULLETS ─── */
.bullets { list-style: none; }
.bullets li {
  padding: 6px 0;
  padding-left: 16px;
  position: relative;
  font-size: 14px;
  color: var(--dim);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.bullets li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: var(--acc);
  font-weight: 700;
}

/* ─── TOOL CARD ─── */
.tool-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 10px;
}
.tool-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.tool-name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
}
.tool-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  padding: 2px 7px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0.05em;
}
.tag-free { background: rgba(56,189,248,0.12); color: var(--acc3); border: 1px solid rgba(56,189,248,0.2); }
.tag-root { background: rgba(244,114,182,0.12); color: var(--acc2); border: 1px solid rgba(244,114,182,0.2); }
.tag-pc { background: rgba(139,92,246,0.12); color: var(--acc); border: 1px solid rgba(139,92,246,0.2); }
.tool-desc { font-size: 13px; color: var(--dim); line-height: 1.55; }
.tool-caps {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}
.cap {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--muted);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 2px 8px;
  border-radius: 4px;
}

/* ─── FILE TREE ─── */
.tree {
  background: var(--code);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px;
  padding: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  line-height: 1.9;
  color: #CDD9E5;
}
.tree .dir { color: var(--acc3); }
.tree .file { color: #CDD9E5; }
.tree .note { color: var(--muted); }
.tree .hi { color: var(--acc2); font-weight: 700; }

/* ─── TECHNIQUE CARD ─── */
.tech-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: 10px;
  margin-bottom: 12px;
  overflow: hidden;
}
.tech-head {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}
.tech-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  color: var(--acc);
  background: rgba(139,92,246,0.12);
  border: 1px solid rgba(139,92,246,0.25);
  padding: 2px 8px;
  border-radius: 5px;
}
.tech-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}
.tech-body { padding: 14px 16px; }
.tech-body p { font-size: 13px; color: var(--dim); margin-bottom: 10px; }

/* ─── SMALI TABLE ─── */
.smali-table { width: 100%; border-collapse: collapse; margin: 10px 0; }
.smali-table th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--muted);
  text-align: left;
  padding: 6px 8px;
  border-bottom: 1px solid var(--border);
  letter-spacing: 0.08em;
}
.smali-table td {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  padding: 8px 8px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  vertical-align: top;
}
.smali-table td:first-child { color: var(--acc2); }
.smali-table td:last-child { color: var(--dim); font-family: 'Inter', sans-serif; font-size: 12px; }

/* ─── DIVIDER ─── */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
  margin: 20px 0;
}

/* ─── PILL ─── */
.pill {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 20px;
  background: rgba(139,92,246,0.12);
  color: var(--acc);
  border: 1px solid rgba(139,92,246,0.2);
  margin-right: 4px;
  margin-bottom: 4px;
}

/* ─── WARN BOX ─── */
.warn {
  background: rgba(244,114,182,0.07);
  border: 1px solid rgba(244,114,182,0.2);
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 13px;
  color: var(--dim);
  margin: 12px 0;
  line-height: 1.6;
}
.warn strong { color: var(--acc2); font-family: 'JetBrains Mono', monospace; font-size: 11px; display: block; margin-bottom: 4px; }
.tip {
  background: rgba(56,189,248,0.06);
  border: 1px solid rgba(56,189,248,0.18);
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 13px;
  color: var(--dim);
  margin: 12px 0;
  line-height: 1.6;
}
.tip strong { color: var(--acc3); font-family: 'JetBrains Mono', monospace; font-size: 11px; display: block; margin-bottom: 4px; }

/* ─── RESOURCE ROW ─── */
.res-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.res-info { flex: 1; }
.res-name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 2px;
}
.res-desc { font-size: 12px; color: var(--muted); }
.res-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  padding: 3px 8px;
  border-radius: 4px;
  flex-shrink: 0;
  margin-left: 12px;
}
.rb-apk { background: rgba(139,92,246,0.12); color: var(--acc); border: 1px solid rgba(139,92,246,0.2); }
.rb-dyn { background: rgba(244,114,182,0.1); color: var(--acc2); border: 1px solid rgba(244,114,182,0.18); }
.rb-ref { background: rgba(56,189,248,0.08); color: var(--acc3); border: 1px solid rgba(56,189,248,0.18); }

/* ─── SCROLLBAR ─── */
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
</style>
</head>
<body>

<header class="hdr">
  <div class="hdr-logo">RE<span>//</span>GUIDE</div>
  <div class="hdr-badge">MT MANAGER</div>
</header>

<!-- ══════════════ HOME ══════════════ -->
<section class="section active" id="sec-home">
  <div class="hero">
    <div class="hero-tag">// REVERSE ENGINEERING FIELD MANUAL</div>
    <h1>Break it.<br><em>Understand</em> it.<br>Mod it.</h1>
    <p>Everything you need to go from APK to modified app — static analysis, smali patching, signing, and dynamic hooking.</p>
  </div>

  <div class="page">
    <div class="sec-label">// what is this</div>
    <div class="card">
      <div class="card-title"><span class="icon">⬡</span> Reverse Engineering</div>
      <p>RE is the process of taking a compiled application — an APK — and working backwards to understand how it functions without having the original source code. On Android, every app is just a ZIP containing compiled bytecode. MT Manager lets you crack that open directly on your phone.</p>
    </div>

    <div class="sec-label">// the stack</div>
    <div class="card">
      <div class="card-title"><span class="icon">◈</span> Android App Layer Model</div>
      <pre>Java/Kotlin Source
    ↓  javac / kotlinc
  .class bytecode
    ↓  dx / d8
  Dalvik (.dex)
    ↓  packed into
  APK (ZIP)
    ↓  you open with
  MT Manager / JADX</pre>
    </div>

    <div class="sec-label">// concepts you need first</div>
    <div class="card">
      <div class="card-title"><span class="icon">◎</span> Core Concepts</div>
      <ul class="bullets">
        <li><strong>DEX</strong> — Dalvik Executable. The compiled bytecode Android runs.</li>
        <li><strong>Smali</strong> — Human-readable assembly of DEX. What you actually edit.</li>
        <li><strong>JADX</strong> — Decompiles DEX back to Java pseudo-code so you can read logic.</li>
        <li><strong>APKTool</strong> — Disassembles/reassembles APKs including resources.</li>
        <li><strong>Frida</strong> — Runtime injection framework. Hooks methods while the app runs.</li>
        <li><strong>Signing</strong> — Every APK needs a valid signature before Android will install it.</li>
      </ul>
    </div>

    <div class="tip"><strong>// WHERE TO START</strong>Nav the tabs below. Start with APK to understand structure, then Smali to learn the language, then Techniques for actual mods.</div>

    <div class="sec-label">// workflow at a glance</div>
    <ol class="steps">
      <li>Open the APK in MT Manager and inspect its structure</li>
      <li>Identify the target class/method using JADX (decompile to Java)</li>
      <li>Navigate to the same method in Smali inside MT Manager</li>
      <li>Patch the Smali bytecode to change the behaviour</li>
      <li>Save and repackage the APK</li>
      <li>Sign the APK with MT Manager's built-in signer</li>
      <li>Install and verify</li>
    </ol>
  </div>
</section>

<!-- ══════════════ TOOLS ══════════════ -->
<section class="section" id="sec-tools">
  <div class="page" style="padding-top:20px;">
    <h2>Tools</h2>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-name">MT Manager</div>
        <span class="tool-tag tag-free">FREE+PRO</span>
      </div>
      <div class="tool-desc">The main weapon. A file manager with built-in APK editor, DEX editor, Smali viewer, resource editor, and APK signer — all on-device. The VIP version unlocks the DEX editor and advanced features. Worth it.</div>
      <div class="tool-caps">
        <span class="cap">APK open/edit</span>
        <span class="cap">Smali editor</span>
        <span class="cap">Resource edit</span>
        <span class="cap">Manifest edit</span>
        <span class="cap">Signer</span>
        <span class="cap">Hex viewer</span>
        <span class="cap">DEX merge</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-name">JADX / JADX-GUI</div>
        <span class="tool-tag tag-pc">PC</span>
      </div>
      <div class="tool-desc">Decompiles DEX/APK to readable Java pseudocode. Not perfect — complex obfuscation will confuse it — but it's your first read of any app's logic. Use it to find method names and class structure, then patch in Smali.</div>
      <div class="tool-caps">
        <span class="cap">DEX → Java</span>
        <span class="cap">Cross-refs</span>
        <span class="cap">Search</span>
        <span class="cap">Export source</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-name">APKTool</div>
        <span class="tool-tag tag-pc">PC</span>
      </div>
      <div class="tool-desc">Gold standard for disassembling and rebuilding APKs with full resource support. Better for resource mods (XML layouts, strings, drawables) than MT Manager. Rebuilds cleanly.</div>
      <div class="tool-caps">
        <span class="cap">Disassemble</span>
        <span class="cap">Rebuild</span>
        <span class="cap">Resource XML</span>
        <span class="cap">Framework</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-name">Frida</div>
        <span class="tool-tag tag-root">ROOT</span>
      </div>
      <div class="tool-desc">Dynamic instrumentation. Hooks running methods in real time using JavaScript. No recompile needed. Powerful for bypassing checks at runtime — SSL pinning, root detection, license verification — without touching the APK.</div>
      <div class="tool-caps">
        <span class="cap">Hook methods</span>
        <span class="cap">Replace return</span>
        <span class="cap">SSL bypass</span>
        <span class="cap">Root bypass</span>
        <span class="cap">Trace calls</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-name">Objection</div>
        <span class="tool-tag tag-root">ROOT</span>
      </div>
      <div class="tool-desc">Frida wrapper with CLI shortcuts for the most common tasks — SSL unpinning, root detection bypass, method tracing. One-liner for things that would need 40 lines of Frida JS.</div>
      <div class="tool-caps">
        <span class="cap">android sslpinning disable</span>
        <span class="cap">env</span>
        <span class="cap">memory list</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-name">apksigner / zipalign</div>
        <span class="tool-tag tag-pc">PC</span>
      </div>
      <div class="tool-desc">Part of Android SDK build tools. Signs your modded APK so Android will install it. MT Manager has a built-in signer but for scripted pipelines on PC these are the CLI tools.</div>
      <div class="tool-caps">
        <span class="cap">v1 sign (JAR)</span>
        <span class="cap">v2 sign (APK)</span>
        <span class="cap">zipalign</span>
      </div>
    </div>

    <div class="warn"><strong>// KEY SETUP</strong>MT Manager → Functions → Sign APK → create a test keystore. Use this keystore for all your modded APKs. Keep it consistent — each new keystore = you must uninstall the original app first.</div>
  </div>
</section>

<!-- ══════════════ APK ══════════════ -->
<section class="section" id="sec-apk">
  <div class="page" style="padding-top:20px;">
    <h2>APK Structure</h2>

    <p style="font-size:14px;color:var(--dim);margin-bottom:16px;">An APK is a ZIP. Long-press it in MT Manager → Open As Archive and you'll see all of this.</p>

    <div class="tree">
<span class="dir">YourApp.apk/</span>
├── <span class="hi">classes.dex</span>      <span class="note">← main bytecode</span>
├── <span class="hi">classes2.dex</span>     <span class="note">← multidex overflow</span>
├── <span class="hi">classes3.dex</span>     <span class="note">← multidex overflow</span>
├── <span class="dir">res/</span>
│   ├── <span class="dir">layout/</span>      <span class="note">← UI XML files</span>
│   ├── <span class="dir">drawable/</span>    <span class="note">← images, icons</span>
│   └── <span class="dir">values/</span>      <span class="note">← strings, colors</span>
├── <span class="file">resources.arsc</span>   <span class="note">← compiled resources</span>
├── <span class="hi">AndroidManifest.xml</span> <span class="note">← app config</span>
├── <span class="dir">assets/</span>          <span class="note">← raw files</span>
├── <span class="dir">lib/</span>
│   ├── <span class="dir">armeabi-v7a/</span>  <span class="note">← native .so files</span>
│   └── <span class="dir">arm64-v8a/</span>
└── <span class="dir">META-INF/</span>        <span class="note">← signature files</span>
    ├── MANIFEST.MF
    └── *.SF / *.RSA
    </div>

    <div class="sec-label">// key files explained</div>

    <div class="card">
      <div class="card-title">classes.dex — The Code</div>
      <p>All your Java/Kotlin source compiled to Dalvik bytecode. This is what you decompile, read in JADX, and patch in Smali. Large apps split into classes2.dex, classes3.dex etc (multidex).</p>
      <p>In MT Manager: tap classes.dex → opens DEX editor → browse packages → classes → methods.</p>
    </div>

    <div class="card">
      <div class="card-title">AndroidManifest.xml</div>
      <p>The app's identity card. Declares permissions, activities, services, receivers. MT Manager decompresses it automatically (it's stored in binary XML).</p>
      <ul class="bullets" style="margin-top:8px;">
        <li>Remove permissions you want to block</li>
        <li>Change <code>android:debuggable="true"</code> to allow debug attachment</li>
        <li>Add <code>android:networkSecurityConfig</code> to bypass cleartext blocks</li>
        <li>Change <code>android:extractNativeLibs</code> for lib access</li>
      </ul>
    </div>

    <div class="card">
      <div class="card-title">res/ — Resources</div>
      <p>Layouts, images, strings. <code>res/values/strings.xml</code> has all user-visible text. <code>res/layout/</code> has the UI XML. Easy targets for UI mods without touching code.</p>
    </div>

    <div class="card">
      <div class="card-title">lib/ — Native Libraries</div>
      <p>.so files compiled from C/C++/Rust. Significantly harder to reverse — need Ghidra or IDA. Games often put DRM, physics engines, and cheat detection here. MT Manager can view them in hex.</p>
    </div>

    <div class="card">
      <div class="card-title">META-INF/ — Signature</div>
      <p>Original developer signature. When you modify the APK, Android invalidates this. You must delete these files (MT Manager does this on rebuild) and resign with your own keystore.</p>
    </div>

    <div class="sec-label">// mt manager workflow</div>
    <ol class="steps">
      <li>Find the APK in <code>/sdcard/Android/data/</code> or wherever it's installed. Long-press → Copy.</li>
      <li>Paste to a working directory. Never edit the original.</li>
      <li>Long-press copied APK → <strong>Open With → APK Editor</strong></li>
      <li>This gives you the MT Manager APK editing interface — files listed, you can tap into DEX or resources.</li>
      <li>After edits, tap <strong>Save</strong> (top right) → MT Manager repacks and optionally signs.</li>
    </ol>

    <div class="tip"><strong>// PRO TIP</strong>Use MT Manager's <strong>APK + Sign</strong> mode — it repacks and signs in one step. Go to Functions → APK Tools → Sign APK to set up your keystore first.</div>
  </div>
</section>

<!-- ══════════════ SMALI ══════════════ -->
<section class="section" id="sec-smali">
  <div class="page" style="padding-top:20px;">
    <h2>Smali</h2>
    <p style="font-size:14px;color:var(--dim);margin-bottom:16px;">Smali is the assembly language of Dalvik bytecode. It's what you read and edit when you patch a DEX. Learn this — it's the core skill.</p>

    <div class="sec-label">// type signatures</div>
    <div class="card">
      <table class="smali-table">
        <tr><th>SMALI</th><th>JAVA TYPE</th></tr>
        <tr><td>V</td><td>void</td></tr>
        <tr><td>Z</td><td>boolean</td></tr>
        <tr><td>B</td><td>byte</td></tr>
        <tr><td>S</td><td>short</td></tr>
        <tr><td>I</td><td>int</td></tr>
        <tr><td>J</td><td>long (64-bit, uses 2 regs)</td></tr>
        <tr><td>F</td><td>float</td></tr>
        <tr><td>D</td><td>double (64-bit)</td></tr>
        <tr><td>C</td><td>char</td></tr>
        <tr><td>Ljava/lang/String;</td><td>String (object)</td></tr>
        <tr><td>Lcom/app/MyClass;</td><td>Any class object</td></tr>
        <tr><td>[I</td><td>int[] (array prefix)</td></tr>
      </table>
    </div>

    <div class="sec-label">// method signature format</div>
    <pre><span class="cm"># Format:</span>
<span class="fn">Lpackage/ClassName;</span>-><span class="fn">methodName</span>(<span class="kw">params</span>)<span class="str">ReturnType</span>

<span class="cm"># Examples:</span>
<span class="fn">Lcom/app/License;</span>-><span class="fn">isPremium</span>()<span class="str">Z</span>
<span class="cm"># isPremium() returns boolean</span>

<span class="fn">Lcom/app/User;</span>-><span class="fn">getScore</span>(<span class="kw">II</span>)<span class="str">I</span>
<span class="cm"># getScore(int, int) returns int</span>

<span class="fn">Ljava/lang/String;</span>-><span class="fn">equals</span>(<span class="kw">Ljava/lang/Object;</span>)<span class="str">Z</span>
<span class="cm"># equals(Object) returns boolean</span></pre>

    <div class="sec-label">// registers</div>
    <div class="card">
      <div class="card-title">Registers — p vs v</div>
      <p>Dalvik uses a register-based VM (unlike stack-based JVM).</p>
      <ul class="bullets" style="margin-top:10px;">
        <li><code>v0, v1, v2...</code> — local variables</li>
        <li><code>p0</code> — <code>this</code> (in instance methods)</li>
        <li><code>p1, p2...</code> — method parameters</li>
        <li>Registers are fixed-width. Long/double use two consecutive regs.</li>
      </ul>
    </div>

    <div class="sec-label">// common opcodes</div>
    <table class="smali-table" style="margin-bottom:12px;">
      <tr><th>OPCODE</th><th>MEANING</th></tr>
      <tr><td>const/4 v0, 0x1</td><td>v0 = 1 (small int)</td></tr>
      <tr><td>const-string v0, "hello"</td><td>v0 = "hello"</td></tr>
      <tr><td>return-void</td><td>return (void method)</td></tr>
      <tr><td>return v0</td><td>return v0's value</td></tr>
      <tr><td>if-eqz v0, :label</td><td>if v0 == 0, jump to label</td></tr>
      <tr><td>if-nez v0, :label</td><td>if v0 != 0, jump</td></tr>
      <tr><td>if-eq v0, v1, :lbl</td><td>if v0 == v1, jump</td></tr>
      <tr><td>if-ne, if-lt, if-gt</td><td>other comparisons</td></tr>
      <tr><td>goto :label</td><td>unconditional jump</td></tr>
      <tr><td>move v0, v1</td><td>v0 = v1</td></tr>
      <tr><td>add-int v0, v1, v2</td><td>v0 = v1 + v2</td></tr>
      <tr><td>invoke-virtual</td><td>call instance method</td></tr>
      <tr><td>invoke-static</td><td>call static method</td></tr>
      <tr><td>invoke-direct</td><td>call constructor/private</td></tr>
      <tr><td>move-result v0</td><td>capture return value</td></tr>
      <tr><td>iget v0, p0, field</td><td>v0 = this.field</td></tr>
      <tr><td>iput v0, p0, field</td><td>this.field = v0</td></tr>
      <tr><td>sget v0, class->field</td><td>v0 = StaticField</td></tr>
      <tr><td>sput v0, class->field</td><td>StaticField = v0</td></tr>
    </table>

    <div class="sec-label">// anatomy of a method</div>
    <pre><span class="kw">.method</span> <span class="str">public</span> <span class="fn">isPremium</span>()<span class="kw">Z</span>
    <span class="kw">.registers</span> <span class="num">2</span>       <span class="cm"># total reg count</span>
    <span class="cm"># p0 = this</span>

    <span class="cm"># original: reads from SharedPrefs</span>
    iget-object v0, p0, <span class="fn">Lcom/app/Prefs;->pref:Landroid/content/SharedPreferences;</span>
    const-string v1, <span class="str">"is_premium"</span>
    invoke-interface {v0, v1}, <span class="fn">Landroid/content/SharedPreferences;->getBoolean(Ljava/lang/String;Z)Z</span>
    move-result v0
    return v0
<span class="kw">.end method</span></pre>

    <div class="sec-label">// patched version</div>
    <pre><span class="kw">.method</span> <span class="str">public</span> <span class="fn">isPremium</span>()<span class="kw">Z</span>
    <span class="kw">.registers</span> <span class="num">2</span>

    <span class="cm"># patch: always return true</span>
    const/4 v0, <span class="num">0x1</span>    <span class="cm"># v0 = 1 (true)</span>
    return v0
<span class="kw">.end method</span></pre>

    <div class="tip"><strong>// MT MANAGER TIP</strong>In the DEX editor, tap a method → Edit → you get a raw Smali text editor. Make your changes, hit Save. It validates the bytecode on save and warns you of errors.</div>
  </div>
</section>

<!-- ══════════════ TECHNIQUES ══════════════ -->
<section class="section" id="sec-tech">
  <div class="page" style="padding-top:20px;">
    <h2>Techniques</h2>

    <div class="tech-card">
      <div class="tech-head">
        <span class="tech-num">01</span>
        <span class="tech-title">Always-True Patch</span>
      </div>
      <div class="tech-body">
        <p>The most common mod. Find the boolean check that gates premium/paid features. Replace the entire method body with <code>const/4 v0, 0x1 / return v0</code>.</p>
        <p><strong style="color:var(--text);font-size:12px;">In JADX, look for:</strong></p>
        <pre><span class="cm">// Java pseudocode you'll see:</span>
<span class="kw">public boolean</span> <span class="fn">isPremium</span>() {
    <span class="kw">return</span> <span class="num">false</span>; <span class="cm">// ← this</span>
}

<span class="cm">// Or conditionals like:</span>
<span class="kw">if</span> (<span class="fn">getPurchaseState</span>() == <span class="num">0</span>) {
    showPaywall();
}</pre>
        <p><strong style="color:var(--text);font-size:12px;">Smali fix:</strong></p>
        <pre><span class="cm"># Force return true always</span>
const/4 v0, <span class="num">0x1</span>
return v0</pre>
      </div>
    </div>

    <div class="tech-card">
      <div class="tech-head">
        <span class="tech-num">02</span>
        <span class="tech-title">Flip a Branch</span>
      </div>
      <div class="tech-body">
        <p>When the logic branches (if/else), flip the condition opcode instead of rewriting the body. Less invasive, less likely to break side effects.</p>
        <pre><span class="cm"># Original: skip if NOT licensed</span>
if-eqz v0, :unlicensed

<span class="cm"># Flipped: skip if IS licensed (inverted)</span>
if-nez v0, :unlicensed

<span class="cm"># Or — skip the check entirely:</span>
goto :licensed   <span class="cm"># jump past the check</span></pre>
        <div class="warn"><strong>// NOTE</strong>Flipping branches is safer when the method has side effects (analytics calls, state updates). Gutting the whole method might skip things you actually need.</div>
      </div>
    </div>

    <div class="tech-card">
      <div class="tech-head">
        <span class="tech-num">03</span>
        <span class="tech-title">NOP Sled</span>
      </div>
      <div class="tech-body">
        <p>Replace specific instructions with <code>nop</code> (no-operation) to neutralize them without changing the control flow structure. Good for disabling individual checks mid-method.</p>
        <pre><span class="cm"># Kill an invoke without removing surrounding logic</span>
<span class="cm"># Original:</span>
invoke-virtual {p0}, <span class="fn">Lcom/app/Tracker;->checkLicense()V</span>

<span class="cm"># NOP'd:</span>
nop
nop
nop
nop
nop   <span class="cm"># one nop per 16-bit unit the original occupied</span></pre>
        <div class="tip"><strong>// TIP</strong>MT Manager's Smali editor auto-adjusts instruction sizes. When in doubt, just delete the invoke line and save — it'll error if there's a register/stack mismatch.</div>
      </div>
    </div>

    <div class="tech-card">
      <div class="tech-head">
        <span class="tech-num">04</span>
        <span class="tech-title">Return-Void Early Exit</span>
      </div>
      <div class="tech-body">
        <p>To completely disable a void method (ad loading, analytics, crash reporters), insert <code>return-void</code> as the very first line.</p>
        <pre><span class="kw">.method</span> <span class="str">public</span> <span class="fn">loadInterstitialAd</span>()V
    <span class="kw">.registers</span> <span class="num">1</span>

    return-void   <span class="cm"># ← add this as first line</span>

    <span class="cm"># everything below is now dead code</span>
    ...
<span class="kw">.end method</span></pre>
      </div>
    </div>

    <div class="tech-card">
      <div class="tech-head">
        <span class="tech-num">05</span>
        <span class="tech-title">String Constant Patch</span>
      </div>
      <div class="tech-body">
        <p>Change hardcoded strings — API endpoints, server URLs, license server addresses. Find via JADX search, then edit in Smali or MT Manager's hex editor.</p>
        <pre><span class="cm"># Original:</span>
const-string v0, <span class="str">"https://api.paywall.com/check"</span>

<span class="cm"># Patched:</span>
const-string v0, <span class="str">"https://127.0.0.1/check"</span></pre>
        <p>MT Manager also has a binary search (Functions → Search) — search the .dex file directly for URL strings and edit in hex.</p>
      </div>
    </div>

    <div class="tech-card">
      <div class="tech-head">
        <span class="tech-num">06</span>
        <span class="tech-title">Manifest Patches</span>
      </div>
      <div class="tech-body">
        <p>No code needed for these — just edit AndroidManifest.xml in MT Manager.</p>
        <ul class="bullets">
          <li>Add <code>android:debuggable="true"</code> to <code>&lt;application&gt;</code> to allow ADB debugging</li>
          <li>Remove <code>android:allowBackup="false"</code> to enable ADB backups</li>
          <li>Remove specific <code>&lt;uses-permission&gt;</code> entries to block certain access</li>
          <li>Add <code>android:networkSecurityConfig="@xml/nsc"</code> to allow HTTP traffic for traffic analysis</li>
          <li>Remove <code>android:testOnly="true"</code> if present</li>
        </ul>
      </div>
    </div>

    <div class="tech-card">
      <div class="tech-head">
        <span class="tech-num">07</span>
        <span class="tech-title">Frida — Runtime Hooking</span>
      </div>
      <div class="tech-body">
        <p>No APK modification. Hook methods while the app runs. Requires rooted device + Frida server.</p>
        <pre><span class="cm">// Hook isPremium() at runtime</span>
Java.perform(<span class="kw">function</span>() {
    <span class="kw">var</span> License = Java.use(<span class="str">"com.app.License"</span>);
    
    License.isPremium.implementation = <span class="kw">function</span>() {
        console.log(<span class="str">"[+] isPremium hooked"</span>);
        <span class="kw">return</span> <span class="num">true</span>;  <span class="cm">// always true</span>
    };
});</pre>
        <pre><span class="cm"># Start Frida on device:</span>
frida-server &amp;

<span class="cm"># Inject script:</span>
frida -U -n com.target.app -l hook.js

<span class="cm"># Objection shortcut (SSL unpin):</span>
objection -g com.target.app explore
<span class="cm"># then:</span>
android sslpinning disable</pre>
      </div>
    </div>

    <div class="tech-card">
      <div class="tech-head">
        <span class="tech-num">08</span>
        <span class="tech-title">Finding Entry Points — Complete</span>
      </div>
      <div class="tech-body">
        <p>The hardest skill in RE. Nine methods below — use whichever fits the situation. Most sessions combine two or three of them.</p>
      </div>
    </div>

    <div class="sec-label" style="margin-top:4px;">// method A — manifest declared entry points</div>
    <div class="card">
      <div class="card-title">AndroidManifest.xml — What the App Exposes</div>
      <p>The manifest declares every component Android can launch. This is the authoritative list of real entry points — the OS uses it, so it can't be hidden.</p>
      <pre><span class="cm">&lt;!-- Main launcher — always your first entry point --&gt;</span>
&lt;activity android:name=<span class="str">".MainActivity"</span>&gt;
  &lt;intent-filter&gt;
    &lt;action android:name=<span class="str">"android.intent.action.MAIN"</span>/&gt;
    &lt;category android:name=<span class="str">"android.intent.category.LAUNCHER"</span>/&gt;
  &lt;/intent-filter&gt;
&lt;/activity&gt;

<span class="cm">&lt;!-- Exported activities — launchable by other apps/ADB --&gt;</span>
&lt;activity android:name=<span class="str">".PaywallActivity"</span>
          android:exported=<span class="str">"true"</span>/&gt;

<span class="cm">&lt;!-- Deep link handler --&gt;</span>
&lt;activity android:name=<span class="str">".DeepLinkActivity"</span>&gt;
  &lt;intent-filter&gt;
    &lt;data android:scheme=<span class="str">"myapp"</span> android:host=<span class="str">"open"</span>/&gt;
  &lt;/intent-filter&gt;
&lt;/activity&gt;</pre>
      <p><strong style="color:var(--text);font-size:13px;">What to look for:</strong></p>
      <ul class="bullets" style="margin-top:8px;">
        <li><code>android:exported="true"</code> — you can launch this activity directly via ADB without going through normal app flow</li>
        <li>Activities with <code>intent-filter</code> containing custom schemes — deep link handlers, often skip auth</li>
        <li><code>&lt;service&gt;</code> tags — background workers, license check daemons</li>
        <li><code>&lt;receiver&gt;</code> tags — broadcast receivers for purchase events (<code>com.android.vending.INSTALL_REFERRER</code>, billing callbacks)</li>
        <li><code>&lt;provider&gt;</code> tags — content providers, sometimes expose data without auth</li>
      </ul>
      <pre><span class="cm"># Launch exported activity directly via ADB (bypass normal flow):</span>
adb shell am start -n com.target.app/.PaywallActivity

<span class="cm"># Trigger deep link:</span>
adb shell am start -a android.intent.action.VIEW \
  -d "myapp://open/premium" com.target.app</pre>
    </div>

    <div class="sec-label">// method B — main activity flow trace</div>
    <div class="card">
      <div class="card-title">Follow the Launch Chain from MainActivity</div>
      <p>Every app starts at the LAUNCHER activity. Follow execution from there — this maps the entire startup flow and usually hits the license/session check within 3–4 hops.</p>
      <ol class="steps" style="margin-top:10px;">
        <li>In JADX, open the class declared as MAIN+LAUNCHER in the manifest.</li>
        <li>Read <code>onCreate()</code> — this is always called first. Note every method it calls.</li>
        <li>Look for calls that go to other classes. Follow each one. You're looking for: auth checks, session validation, subscription status reads.</li>
        <li>In JADX: right-click any called method → <strong>Go to declaration</strong> to jump to it.</li>
        <li>Look for <code>startActivity()</code> calls — these transition to other screens. Which screen gets launched depends on a condition? That condition is your target.</li>
      </ol>
      <pre><span class="cm">// Typical launch chain pattern:</span>
<span class="kw">protected void</span> <span class="fn">onCreate</span>(Bundle b) {
    <span class="fn">initApp</span>();           <span class="cm">// ← follow this</span>
    <span class="fn">checkSession</span>();      <span class="cm">// ← and this</span>
    <span class="kw">if</span> (<span class="fn">isLoggedIn</span>()) {  <span class="cm">// ← boolean gate here</span>
        <span class="fn">startActivity</span>(<span class="kw">new</span> Intent(<span class="kw">this</span>, HomeActivity.<span class="kw">class</span>));
    } <span class="kw">else</span> {
        <span class="fn">startActivity</span>(<span class="kw">new</span> Intent(<span class="kw">this</span>, LoginActivity.<span class="kw">class</span>));
    }
}</pre>
      <p><code>isLoggedIn()</code>, <code>isPremium()</code>, <code>hasValidLicense()</code> — these gating methods show up here. That's where you patch.</p>
    </div>

    <div class="sec-label">// method C — string search (most reliable)</div>
    <div class="card">
      <div class="card-title">Anchor on UI Strings You Can See</div>
      <p>Strings shown in the app UI — button labels, dialog messages, error text — are almost never obfuscated because the app needs to display them. They live in <code>res/values/strings.xml</code> or hardcoded inline.</p>
      <p><strong style="color:var(--text);font-size:13px;">In JADX — Navigation → Text Search:</strong></p>
      <ul class="bullets" style="margin-top:8px;">
        <li>Search the exact text of a paywall dialog: <code>"Upgrade to Premium"</code></li>
        <li>Search error messages: <code>"Your trial has expired"</code>, <code>"Purchase required"</code></li>
        <li>Search SharedPrefs keys (guess common ones): <code>"is_premium"</code>, <code>"subscription_status"</code>, <code>"trial_end"</code>, <code>"license_key"</code></li>
        <li>Search for billing-related strings: <code>"purchase"</code>, <code>"billing"</code>, <code>"sku"</code>, <code>"entitlement"</code></li>
        <li>Search log tags — devs often leave these matching the original class name even after obfuscation</li>
      </ul>
      <pre><span class="cm">// String found in class a.b.c, method d():</span>
Toast.makeText(ctx, <span class="str">"Premium feature — please upgrade"</span>, ...);

<span class="cm">// Now you're in the right method.</span>
<span class="cm">// Read what calls it — that's the check.</span>
<span class="cm">// Read what it calls — that's the paywall UI.</span></pre>
      <p><strong style="color:var(--text);font-size:13px;">In MT Manager:</strong> Functions → Search in File → search the .dex bytes directly for string literals. Finds them even without full decompile.</p>
    </div>

    <div class="sec-label">// method D — logcat live tracing</div>
    <div class="card">
      <div class="card-title">Let the App Tell You Where It Is</div>
      <p>Developers leave log statements everywhere — especially around billing, auth, and feature gating. Run the app with ADB logcat live while triggering the feature you want to unlock.</p>
      <pre><span class="cm"># Capture all logs while you tap through the app:</span>
adb logcat -v time | tee app_trace.txt

<span class="cm"># Filter to just your target app's process:</span>
adb logcat --pid=$(adb shell pidof com.target.app)

<span class="cm"># Filter for billing/purchase keywords:</span>
adb logcat | grep -iE "premium|license|purchase|billing|trial|subscribe|unlock"

<span class="cm"># Filter by log tag if you found one in JADX:</span>
adb logcat -s "PurchaseManager:D" "BillingHelper:V"</pre>
      <p>What you're reading from the output:</p>
      <ul class="bullets" style="margin-top:8px;">
        <li>Log tags reveal real class names even in obfuscated builds</li>
        <li>Log messages right before a paywall shows = that code is the gate</li>
        <li>Exception stack traces show the exact call chain: class name, method, line number</li>
        <li><code>D/PurchaseManager: checking license for user 1234</code> → class is PurchaseManager, go find it in JADX</li>
      </ul>
      <div class="tip"><strong>// STACK TRACES ARE GOLD</strong>Force a crash near the feature you want. The stack trace in logcat gives you the exact obfuscated class.method at every frame — now you have the full call chain to patch.</div>
    </div>

    <div class="sec-label">// method E — billing SDK anchor</div>
    <div class="card">
      <div class="card-title">Android Billing SDK Classes Are Never Obfuscated</div>
      <p>Google Play Billing, RevenueCat, Adapty, and other billing SDKs are third-party libraries. ProGuard doesn't obfuscate them. Search for their known class names in JADX — they lead directly to the purchase handling code.</p>
      <pre><span class="cm">// Search JADX for these exact class references:</span>

<span class="cm">// Google Play Billing (most common):</span>
<span class="fn">com.android.billingclient.api.BillingClient</span>
<span class="fn">com.android.billingclient.api.Purchase</span>
<span class="fn">com.android.billingclient.api.PurchasesUpdatedListener</span>
<span class="fn">com.android.billingclient.api.SkuDetails</span>       <span class="cm">// old</span>
<span class="fn">com.android.billingclient.api.ProductDetails</span>    <span class="cm">// new</span>

<span class="cm">// RevenueCat:</span>
<span class="fn">com.revenuecat.purchases.Purchases</span>
<span class="fn">com.revenuecat.purchases.CustomerInfo</span>

<span class="cm">// Adapty:</span>
<span class="fn">io.adapty.sdk.Adapty</span>

<span class="cm">// Old IAB helper (legacy apps):</span>
<span class="fn">com.anjlab.android.iab.v3.BillingProcessor</span></pre>
      <p>Find the class in your app that <strong>imports or references</strong> <code>BillingClient</code>. That class owns purchase state. Every method in it that returns <code>boolean</code> or manages a <code>Purchase</code> object is a target.</p>
      <pre><span class="cm">// The listener is always the key entry point:</span>
<span class="kw">class</span> <span class="fn">a</span> <span class="kw">implements</span> <span class="fn">PurchasesUpdatedListener</span> {

    <span class="cm">// This method fires when a purchase completes:</span>
    <span class="kw">public void</span> <span class="fn">onPurchasesUpdated</span>(BillingResult r, List&lt;Purchase&gt; purchases) {
        <span class="cm">// ← THIS is where purchase state gets saved</span>
        <span class="cm">// patch here OR patch whatever reads the saved state</span>
    }
}</pre>
    </div>

    <div class="sec-label">// method F — frida method tracer</div>
    <div class="card">
      <div class="card-title">Trace Every Method Call at Runtime</div>
      <p>When static analysis hits a wall — heavy obfuscation, dynamic class loading, reflection — switch to Frida and trace what actually executes when you trigger the feature.</p>
      <pre><span class="cm">// Trace all methods in a class (replace a.b.c with obfuscated name):</span>
Java.perform(<span class="kw">function</span>() {
    <span class="kw">var</span> cls = Java.use(<span class="str">"a.b.c"</span>);
    <span class="kw">var</span> methods = cls.class.getDeclaredMethods();

    methods.forEach(<span class="kw">function</span>(m) {
        <span class="kw">var</span> name = m.getName();
        <span class="kw">try</span> {
            cls[name].overloads.forEach(<span class="kw">function</span>(overload) {
                overload.implementation = <span class="kw">function</span>() {
                    console.log(<span class="str">"[→] "</span> + <span class="str">"a.b.c."</span> + name +
                        <span class="str">" args: "</span> + JSON.stringify([].slice.call(arguments)));
                    <span class="kw">var</span> ret = overload.apply(<span class="kw">this</span>, arguments);
                    console.log(<span class="str">"[←] "</span> + name + <span class="str">" returned: "</span> + ret);
                    <span class="kw">return</span> ret;
                };
            });
        } <span class="kw">catch</span>(e) {}
    });
});</pre>
      <pre><span class="cm"># Inject and watch output while you use the app:</span>
frida -U -n com.target.app -l tracer.js

<span class="cm"># Now tap the locked feature in the app.</span>
<span class="cm"># The console shows every method that fired, with args and return values.</span>
<span class="cm"># Find the boolean that came back false — that's your gate.</span></pre>
      <div class="tip"><strong>// FRIDA TRACE SHORTCUT</strong><code>frida-trace -U -n com.target.app -j "a.b.c!*"</code> — traces every method in a class automatically. Generates stub JS files per method you can edit to hook.</div>
    </div>

    <div class="sec-label">// method G — network call interception</div>
    <div class="card">
      <div class="card-title">Find Server-Side Checks via Traffic</div>
      <p>License validation often happens server-side — the app sends a request, the server says yes/no, the app gates on the response. Intercept the traffic to find where the response is handled.</p>
      <p><strong style="color:var(--text);font-size:13px;">Setup:</strong></p>
      <ol class="steps" style="margin-top:8px;">
        <li>Install <strong>HTTP Toolkit</strong> or set up <strong>mitmproxy</strong> on your PC. Point your phone's WiFi proxy to it.</li>
        <li>If the app uses SSL pinning, disable it first: <code>objection -g com.target.app explore</code> → <code>android sslpinning disable</code></li>
        <li>Trigger the premium/license check in the app while traffic is captured.</li>
        <li>Find the request that checks subscription status. Note the endpoint URL and response format.</li>
        <li>Search that URL string in JADX — finds the exact class that makes the call.</li>
        <li>Find the response parser — the method that reads the JSON and extracts the boolean. That's your patch target.</li>
      </ol>
      <pre><span class="cm">// After finding the endpoint "api.app.com/v1/license/check"</span>
<span class="cm">// JADX search for that string → lands in:</span>
<span class="kw">class</span> <span class="fn">LicenseApiClient</span> {
    <span class="kw">void</span> <span class="fn">checkLicense</span>(String userId, <span class="fn">Callback</span> cb) {
        <span class="cm">// makes the network call</span>
    }

    <span class="kw">void</span> <span class="fn">handleResponse</span>(JSONObject json) {
        <span class="cm">// parses response</span>
        <span class="kw">boolean</span> valid = json.getBoolean(<span class="str">"is_valid"</span>);
        cb.onResult(valid);  <span class="cm">// ← patch this callback, or patch handleResponse</span>
    }
}</pre>
    </div>

    <div class="sec-label">// method H — sharedprefs key hunting</div>
    <div class="card">
      <div class="card-title">Find Where Flags Are Stored and Read</div>
      <p>Most apps persist subscription state to SharedPreferences. Find the key, find the reader, patch the reader — or edit the prefs file directly.</p>
      <pre><span class="cm"># Search JADX for SharedPreferences reads:</span>
<span class="cm"># Text search: "getBoolean" "getString" "getLong"</span>

<span class="cm">// What you'll find:</span>
prefs.getBoolean(<span class="str">"premium_unlocked"</span>, <span class="kw">false</span>);
<span class="cm">// The key is "premium_unlocked", default is false</span>
<span class="cm">// Patch: always return true here</span>

prefs.getString(<span class="str">"license_token"</span>, <span class="kw">null</span>);
<span class="cm">// Patch: always return a fake non-null token</span>

prefs.getLong(<span class="str">"subscription_expiry"</span>, 0L);
<span class="cm">// Patch: return Long.MAX_VALUE</span></pre>
      <p><strong style="color:var(--text);font-size:13px;">Direct prefs edit (root required):</strong></p>
      <pre><span class="cm"># SharedPrefs files live here:</span>
/data/data/com.target.app/shared_prefs/

<span class="cm"># Pull the file:</span>
adb shell "su -c 'cat /data/data/com.target.app/shared_prefs/prefs.xml'"

<span class="cm"># Edit it directly with root:</span>
adb shell "su -c 'echo &lt;?xml...&gt; &gt; /data/data/com.target.app/shared_prefs/prefs.xml'"

<span class="cm"># Or via Frida — write the value at runtime:</span>
Java.perform(<span class="kw">function</span>() {
    <span class="kw">var</span> ctx = Java.use(<span class="str">"android.app.ActivityThread"</span>)
        .currentApplication().getApplicationContext();
    <span class="kw">var</span> prefs = ctx.getSharedPreferences(<span class="str">"app_prefs"</span>, <span class="num">0</span>);
    prefs.edit().putBoolean(<span class="str">"premium_unlocked"</span>, <span class="kw">true</span>).commit();
    console.log(<span class="str">"[+] pref written"</span>);
});</pre>
    </div>

    <div class="sec-label">// method I — reflection and dynamic loading</div>
    <div class="card">
      <div class="card-title">When Classes Are Loaded at Runtime</div>
      <p>Advanced apps use reflection or <code>DexClassLoader</code> to load code at runtime — the class doesn't exist in the APK's DEX, it's downloaded or decrypted on first run. Static analysis finds nothing. Dynamic analysis is the only path.</p>
      <pre><span class="cm">// Signs you're dealing with dynamic loading:</span>
<span class="cm">// JADX shows these patterns:</span>
<span class="fn">DexClassLoader</span>(<span class="str">"path/to/plugin.dex"</span>, ...);
<span class="fn">Class.forName</span>(<span class="str">"com.some.ClassName"</span>);
<span class="fn">Method.invoke</span>(...);
<span class="fn">loadClass</span>(<span class="str">"encrypted_name"</span>);</pre>
      <pre><span class="cm">// Frida hook to catch dynamic class loading:</span>
Java.perform(<span class="kw">function</span>() {

    <span class="cm">// Hook DexClassLoader to see what DEX files get loaded:</span>
    <span class="fn">Java.use</span>(<span class="str">"dalvik.system.DexClassLoader"</span>).$init.implementation =
    <span class="kw">function</span>(dexPath, outDir, libPath, parent) {
        console.log(<span class="str">"[DexClassLoader] loading: "</span> + dexPath);
        <span class="kw">return</span> <span class="kw">this</span>.$init(dexPath, outDir, libPath, parent);
    };

    <span class="cm">// Hook Class.forName to see what's being reflected:</span>
    <span class="fn">Java.use</span>(<span class="str">"java.lang.Class"</span>).forName.overload(<span class="str">"java.lang.String"</span>)
        .implementation = <span class="kw">function</span>(name) {
        console.log(<span class="str">"[forName] "</span> + name);
        <span class="kw">return</span> <span class="kw">this</span>.forName(name);
    };
});</pre>
      <p>Once you see the real class names being loaded, you can either pull the downloaded DEX from the device's cache directory and analyze it, or hook into it directly with Frida using <code>Java.use()</code> once the class is loaded.</p>
      <pre><span class="cm"># Downloaded DEX files land here usually:</span>
/data/data/com.target.app/files/
/data/data/com.target.app/cache/
/data/data/com.target.app/app_dex/

<span class="cm"># Pull it:</span>
adb pull /data/data/com.target.app/files/plugin.dex ./
<span class="cm"># Then open in JADX like a normal APK.</span></pre>
    </div>

    <div class="sec-label">// decision tree — which method first</div>
    <div class="card">
      <table class="smali-table">
        <tr><th>SITUATION</th><th>START WITH</th></tr>
        <tr><td>App is not obfuscated</td><td>Method B (MainActivity trace)</td></tr>
        <tr><td>Obfuscated, no root</td><td>Method C (strings) + Method E (billing SDK)</td></tr>
        <tr><td>Obfuscated, have root</td><td>Method D (logcat) + Method F (Frida tracer)</td></tr>
        <tr><td>Online license check</td><td>Method G (traffic interception)</td></tr>
        <tr><td>Remembers state offline</td><td>Method H (SharedPrefs hunt)</td></tr>
        <tr><td>JADX shows almost nothing</td><td>Method I (dynamic loading) + Method F</td></tr>
        <tr><td>Any app, any situation</td><td>Method A (manifest) first — always</td></tr>
      </table>
    </div>

    <div class="warn"><strong>// REAL TALK</strong>You rarely need just one method. The move is: manifest scan → string search → follow call chain → if stuck, drop Frida on it. Static gets you 80% there. Dynamic closes the rest.</div>

    <div class="tech-card">
      <div class="tech-head">
        <span class="tech-num">09</span>
        <span class="tech-title">Sign + Install</span>
      </div>
      <div class="tech-body">
        <p>After any modification, you must resign the APK or Android will reject it.</p>
        <ol class="steps" style="margin-top:8px;">
          <li>MT Manager → Functions → Sign APK → select your keystore → sign your modded APK.</li>
          <li>Uninstall the original app (unless using same keystore as before).</li>
          <li>Install the signed modded APK.</li>
          <li>If app crashes on launch — check logcat for the error. Usually a missing method or corrupt DEX.</li>
        </ol>
        <pre><span class="cm"># PC alternative (SDK build-tools):</span>
zipalign -v 4 modded.apk aligned.apk
apksigner sign --ks my.keystore aligned.apk</pre>
        <div class="warn"><strong>// CRASH DEBUGGING</strong>Connect via ADB and run <code>adb logcat | grep -E "AndroidRuntime|FATAL"</code> to see exactly what's crashing. 9/10 times it's a Smali register count mismatch or a deleted method that something else calls.</div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════ DEOBF ══════════════ -->
<section class="section" id="sec-deobf">
  <div class="page" style="padding-top:20px;">
    <h2>Deobfuscation</h2>
    <p style="font-size:14px;color:var(--dim);margin-bottom:16px;">Most production apps run through ProGuard or R8. Class names become <code>a.b.c</code>, methods become <code>a()</code>, fields become <code>b</code>. Here's how to read through it.</p>

    <div class="sec-label">// what obfuscation actually does</div>
    <div class="card">
      <div class="card-title"><span class="icon">⬡</span> ProGuard / R8 Output</div>
      <pre><span class="cm">// Original source:</span>
<span class="kw">class</span> <span class="fn">PurchaseManager</span> {
    <span class="kw">boolean</span> <span class="fn">isPremiumUser</span>(<span class="kw">String</span> userId) { ... }
}

<span class="cm">// After ProGuard/R8:</span>
<span class="kw">class</span> <span class="fn">a</span> {
    <span class="kw">boolean</span> <span class="fn">a</span>(<span class="kw">String</span> <span class="fn">a</span>) { ... }
}</pre>
      <p>The logic is identical. Only the names changed. Your job is to figure out what <code>a.a()</code> actually does by reading its body and what calls it.</p>
    </div>

    <div class="sec-label">// technique 1 — mapping file</div>
    <div class="card">
      <div class="card-title"><span class="icon">◈</span> mapping.txt — The Cheat Sheet</div>
      <p>When devs build with ProGuard, a <code>mapping.txt</code> is generated that maps obfuscated names back to originals. Sometimes you can find it:</p>
      <ul class="bullets" style="margin-top:10px;">
        <li>Inside the APK's <code>assets/</code> folder (lazy devs)</li>
        <li>On the app's crash reporting service (Crashlytics, Sentry) — not accessible to you but explains why crashes show real names</li>
        <li>GitHub repo if the app is open-source — check for <code>proguard-mapping.txt</code></li>
        <li>Sometimes in <code>META-INF/</code> by accident</li>
      </ul>
      <pre><span class="cm"># mapping.txt format:</span>
<span class="fn">com.app.billing.PurchaseManager</span> -> <span class="fn">a.b</span>:
    <span class="kw">boolean</span> <span class="fn">isPremiumUser</span>(<span class="kw">java.lang.String</span>) -> <span class="fn">a</span>
    <span class="kw">void</span> <span class="fn">initBilling</span>() -> <span class="fn">b</span></pre>
      <div class="tip"><strong>// IF YOU HAVE IT</strong>JADX supports mapping files natively. Open your APK in JADX-GUI → File → Load ProGuard mapping file → select your mapping.txt. All names instantly deobfuscated in the viewer.</div>
    </div>

    <div class="sec-label">// technique 2 — string hunting</div>
    <div class="card">
      <div class="card-title"><span class="icon">◎</span> Strings Are Rarely Obfuscated</div>
      <p>ProGuard renames identifiers but can't touch string literals used at runtime — log tags, error messages, SharedPrefs keys, API endpoints. These are your anchors.</p>
      <ol class="steps" style="margin-top:10px;">
        <li>In JADX: Navigation → Search → select <strong>String</strong> type. Search for text you see in the app UI — "Premium", "Subscribe", "Trial expired", "Invalid license".</li>
        <li>JADX shows you which obfuscated class+method contains that string.</li>
        <li>That method is now your entry point. Read its logic. Follow what calls it.</li>
        <li>Work backwards up the call chain until you hit the boolean gate or the paywall trigger.</li>
      </ol>
      <pre><span class="cm">// JADX search finds this in class a.b, method c():</span>
Log.d(<span class="str">"PurchaseManager"</span>, <span class="str">"Checking premium status"</span>);

<span class="cm">// Log tag "PurchaseManager" just told you</span>
<span class="cm">// what this obfuscated class actually is.</span>
<span class="cm">// Rename it mentally (or in JADX) and keep going.</span></pre>
    </div>

    <div class="sec-label">// technique 3 — jadx rename</div>
    <div class="card">
      <div class="card-title"><span class="icon">◈</span> Rename As You Go (JADX-GUI)</div>
      <p>JADX-GUI lets you rename classes and methods in-session so the decompiled view becomes readable as you work through it.</p>
      <ol class="steps" style="margin-top:10px;">
        <li>Right-click any class/method name in JADX-GUI → <strong>Rename</strong></li>
        <li>Give it a descriptive name based on what you've understood: <code>a.b</code> → <code>PurchaseManager</code></li>
        <li>JADX updates every reference to that class across the whole decompile immediately</li>
        <li>Rinse and repeat — as you rename 5–6 key classes, the whole app's structure becomes legible</li>
      </ol>
      <div class="tip"><strong>// WORKFLOW</strong>Start from strings → rename the class that contains them → follow its callers → rename those too. Within 20 minutes of this you usually have enough of the map to find exactly what to patch.</div>
    </div>

    <div class="sec-label">// technique 4 — signature reading</div>
    <div class="card">
      <div class="card-title"><span class="icon">◎</span> Read the Method Signature</div>
      <p>Even with obfuscated names, the parameter types and return type tell you a lot. Android SDK classes are never obfuscated — they can't be.</p>
      <pre><span class="cm">// What does a() do? Read its signature:</span>
<span class="kw">boolean</span> <span class="fn">a</span>(Context a, <span class="fn">Ljava/lang/String;</span> b)

<span class="cm">// Takes a Context and a String, returns boolean.</span>
<span class="cm">// Probably a check function. isPremium? isValidLicense?</span>

<span class="cm">// Another one:</span>
<span class="kw">void</span> <span class="fn">a</span>(<span class="fn">Landroid/app/Activity;</span> a)

<span class="cm">// Takes an Activity, returns void.</span>
<span class="cm">// Probably shows a dialog, launches a screen, or starts billing.</span></pre>
      <ul class="bullets" style="margin-top:10px;">
        <li>Methods returning <code>boolean</code> and taking no SDK args → likely a gate/check</li>
        <li>Methods taking <code>Activity</code> → UI launchers (paywall screens)</li>
        <li>Methods taking <code>Context</code> + <code>String</code> → SharedPrefs reads or DB queries</li>
        <li>Methods taking <code>JSONObject</code> or <code>String</code> and returning an object → response parsers</li>
        <li>Static methods returning <code>boolean</code> → global flag checks</li>
      </ul>
    </div>

    <div class="sec-label">// technique 5 — cross references</div>
    <div class="card">
      <div class="card-title"><span class="icon">◈</span> Follow the Call Graph</div>
      <p>In JADX-GUI: right-click any method → <strong>Find Usage</strong>. Shows every place that method is called from. Use this to navigate the call chain.</p>
      <pre><span class="cm">// You found a() returns boolean.</span>
<span class="cm">// Find Usage shows it's called in b.c():</span>

<span class="kw">if</span> (!<span class="fn">a</span>()) {
    <span class="cm">// this is the paywall trigger</span>
    <span class="fn">showPaywallActivity</span>();
    <span class="kw">return</span>;
}
<span class="cm">// premium feature code continues here</span>

<span class="cm">// Now you know: patch a() to return true.</span></pre>
      <p>In MT Manager's DEX editor: search by string within the DEX to find call sites. It's less powerful than JADX cross-refs but works on-device.</p>
    </div>

    <div class="sec-label">// technique 6 — field type inference</div>
    <div class="card">
      <div class="card-title"><span class="icon">◎</span> Read the Fields</div>
      <p>Class fields give away purpose even when named <code>a</code>, <code>b</code>, <code>c</code>.</p>
      <pre><span class="kw">class</span> <span class="fn">a</span> {
    <span class="kw">private boolean</span> <span class="fn">a</span>;         <span class="cm">// a flag. isPremium? isLoggedIn?</span>
    <span class="kw">private</span> <span class="fn">String</span> <span class="fn">b</span>;           <span class="cm">// an ID or token</span>
    <span class="kw">private long</span> <span class="fn">c</span>;              <span class="cm">// timestamp. expiry?</span>
    <span class="kw">private</span> <span class="fn">SharedPreferences</span> <span class="fn">d</span>; <span class="cm">// persistence. reads flags.</span>
    <span class="kw">private</span> <span class="fn">BillingClient</span> <span class="fn">e</span>;     <span class="cm">// Google Play billing. this is the class.</span>
}</pre>
      <p><code>BillingClient</code>, <code>IabHelper</code>, <code>Purchase</code>, <code>SkuDetails</code> — any Google Play Billing SDK class tells you exactly which class manages purchases. That's your target class.</p>
    </div>

    <div class="sec-label">// technique 7 — deobfuscator tools</div>
    <div class="card">
      <div class="card-title"><span class="icon">◈</span> Automated Deobfuscation</div>
      <ul class="bullets">
        <li><strong>deobfuscator.io</strong> — web tool, upload APK, applies heuristic renaming based on Android API usage patterns. Good first pass on heavily obfuscated apps.</li>
        <li><strong>Simplify</strong> (GitHub: CalebFenton/simplify) — PC tool, runs the obfuscated code virtually and simplifies the output. Breaks string encryption.</li>
        <li><strong>jadx --deobf flag</strong> — <code>jadx --deobf input.apk</code> applies basic deobfuscation heuristics on export. Renames short identifiers based on context.</li>
        <li><strong>apkid</strong> — identifies which obfuscator was used (ProGuard, DexGuard, Allatori, etc.) so you know what you're dealing with.</li>
      </ul>
      <pre><span class="cm"># JADX with deobfuscation + min name length:</span>
jadx --deobf --deobf-min-len 3 --deobf-max-len 64 app.apk -d ./output</pre>
    </div>

    <div class="sec-label">// technique 8 — encrypted strings</div>
    <div class="card">
      <div class="card-title"><span class="icon">◎</span> String Encryption (Advanced)</div>
      <p>High-end obfuscators (DexGuard, Allatori) encrypt string literals. Instead of <code>"isPremium"</code> you'll see a call to a decrypt helper:</p>
      <pre><span class="cm">// Obfuscated string access looks like:</span>
<span class="kw">String</span> key = <span class="fn">a.a</span>(<span class="num">1337</span>);   <span class="cm">// decrypts to "is_premium"</span>
<span class="fn">prefs.getBoolean</span>(key, <span class="kw">false</span>);</pre>
      <p>Two approaches:</p>
      <ul class="bullets" style="margin-top:8px;">
        <li><strong>Static:</strong> Find the decrypt method, read its algorithm (usually XOR or AES with hardcoded key), reimplement it in Python, decrypt all the string constants.</li>
        <li><strong>Dynamic (easier):</strong> Use Frida to hook the decrypt method and log its output at runtime — every string decryption gets printed as the app runs.</li>
      </ul>
      <pre><span class="cm">// Frida hook to intercept string decryption:</span>
Java.perform(<span class="kw">function</span>() {
    <span class="kw">var</span> Decryptor = Java.use(<span class="str">"a.a"</span>);
    Decryptor.a.overload(<span class="str">"int"</span>).implementation = <span class="kw">function</span>(id) {
        <span class="kw">var</span> result = <span class="kw">this</span>.a(id);
        console.log(<span class="str">"[decrypt] id="</span> + id + <span class="str">" → "</span> + result);
        <span class="kw">return</span> result;
    };
});</pre>
      <p>Run the app through a few flows and you'll get a dump of all decrypted strings with their IDs. Now you know what every obfuscated constant actually is.</p>
    </div>

    <div class="sec-label">// quick reference — what to look for</div>
    <div class="card">
      <table class="smali-table">
        <tr><th>YOU SEE IN JADX</th><th>PROBABLY IS</th></tr>
        <tr><td>class with BillingClient field</td><td>Purchase/license manager</td></tr>
        <tr><td>method returns Z, no params</td><td>Boolean flag check (isPremium etc)</td></tr>
        <tr><td>method takes Activity param</td><td>Shows a screen (paywall, login)</td></tr>
        <tr><td>static method, returns Z</td><td>Global check (isDebug, isRooted)</td></tr>
        <tr><td>SharedPreferences + String + Z</td><td>Persistent flag storage</td></tr>
        <tr><td>field of type long near expiry logic</td><td>Trial/subscription timestamp</td></tr>
        <tr><td>a.a(int) called everywhere</td><td>String decryptor</td></tr>
        <tr><td>class with "okhttp" / "retrofit"</td><td>Network/API layer</td></tr>
      </table>
    </div>

    <div class="warn"><strong>// REALITY CHECK</strong>Heavy obfuscation + string encryption + native DRM (in .so files) is the full stack. Static analysis alone won't crack it. That's when you go full Frida — hook everything at runtime and let the app decrypt itself for you.</div>
  </div>
</section>

<!-- ══════════════ NAV ══════════════ -->
<nav class="nav">
  <button class="nav-btn active" onclick="show('home',this)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
    <span class="nav-label">HOME</span>
  </button>
  <button class="nav-btn" onclick="show('tools',this)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
    <span class="nav-label">TOOLS</span>
  </button>
  <button class="nav-btn" onclick="show('apk',this)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
    <span class="nav-label">APK</span>
  </button>
  <button class="nav-btn" onclick="show('smali',this)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
    <span class="nav-label">SMALI</span>
  </button>
  <button class="nav-btn" onclick="show('tech',this)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
    </svg>
    <span class="nav-label">TECH</span>
  </button>
  <button class="nav-btn" onclick="show('deobf',this)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
    <span class="nav-label">DEOBF</span>
  </button>
</nav>

<script>
function show(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo(0, 0);
}
</script>
</body>
</html>`
