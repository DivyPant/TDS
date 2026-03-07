"""
TDS GA4 Answer Checker — Streamlit deployment.
Embeds the same client-side checker (HTML + JS) in an iframe so answers match the exam exactly.
Admin: enter vivek05@tds to see how many people checked in and their email addresses.
"""
import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path
from datetime import datetime

# Page config (must be first Streamlit command)
st.set_page_config(
    page_title="TDS GA4 - Answer Checker",
    page_icon="📋",
    layout="centered",
    initial_sidebar_state="collapsed",
)

# Paths relative to this script
BASE = Path(__file__).resolve().parent
INDEX_HTML = BASE / "index.html"
APP_JS = BASE / "app.js"
SEEDRANDOM_JS = BASE / "seedrandom.min.js"
DATA_DIR = BASE / "data"
CHECKS_FILE = DATA_DIR / "checks.txt"

ADMIN_EMAIL = "vivek05@tds"


def ensure_data_dir():
    DATA_DIR.mkdir(parents=True, exist_ok=True)


def log_check(email: str):
    """Append one check (email) to the log file."""
    if not email or email.strip().lower() == ADMIN_EMAIL.lower():
        return
    ensure_data_dir()
    with open(CHECKS_FILE, "a", encoding="utf-8") as f:
        f.write(email.strip() + "\n")


def read_checks():
    """Return list of (email, optional_timestamp) for all checks. Timestamp not stored for now."""
    if not CHECKS_FILE.exists():
        return []
    with open(CHECKS_FILE, "r", encoding="utf-8") as f:
        lines = [ln.strip() for ln in f if ln.strip()]
    return lines


def load_seedrandom():
    """Load seedrandom: from local file if present, else minimal inline that sets Math.seedrandom."""
    if SEEDRANDOM_JS.exists():
        return SEEDRANDOM_JS.read_text(encoding="utf-8")
    # Minimal UMD bundle that exposes seedrandom (from cdn jsdelivr seedrandom@3.0.5)
    return r"""
!function(f,a,c){var s,l=256,p="random",d=c.pow(l,6),g=c.pow(2,52),y=2*g,h=l-1;function n(n,t,r){function e(){for(var n=u.g(6),t=d,r=0;n<g;)n=(n+r)*l,t*=l,r=u.g(1);for(;y<=n;)n/=2,t/=2,r>>>=1;return(n+r)/t}var o=[],i=j(function n(t,r){var e,o=[],i=typeof t;if(r&&"object"==i)for(e in t)try{o.push(n(t[e],r-1))}catch(n){}return o.length?o:"string"==i?t:t+"\0"}((t=1==t?{entropy:!0}:t||{}).entropy?[n,S(a)]:null==n?function(){try{var n;return s&&(n=s.randomBytes)?n=n(l):(n=new Uint8Array(l),(f.crypto||f.msCrypto).getRandomValues(n)),S(n)}catch(n){var t=f.navigator,r=t&&t.plugins;return[+new Date,f,r,f.screen,S(a)]}}():n,3),o),u=new m(o);return e.int32=function(){return 0|u.g(4)},e.quick=function(){return u.g(4)/4294967296},e.double=e,j(S(u.S),a),(t.pass||r||function(n,t,r,e){return e&&(e.S&&v(e,u),n.state=function(){return v(u,{})}),r?(c[p]=n,t):n})(e,i,"global"in t?t.global:this==c,t.state)}function m(n){var t,r=n.length,u=this,e=0,o=u.i=u.j=0,i=u.S=[];for(r||(n=[r++]);e<l;)i[e]=e++;for(e=0;e<l;e++)i[e]=i[o=h&o+n[e%r]+(t=i[e])],i[o]=t;(u.g=function(n){for(var t,r=0,e=u.i,o=u.j,i=u.S;n--;)t=i[e=h&e+1],r=r*l+i[h&(i[e]=i[o=h&o+t])+(i[o]=t)];return u.i=e,u.j=o,r})(l)}function v(n,t){return t.i=n.i,t.j=n.j,t.S=n.S.slice(),t}function j(n,t){for(var r,e=n+"",o=0;o<e.length;)t[h&o]=h&(r^=19*t[h&o])+e.charCodeAt(o++);return S(t)}function S(n){return String.fromCharCode.apply(0,n)}if(j(c.random(),a),"object"==typeof module&&module.exports){module.exports=n;try{s=require("crypto")}catch(n){}}else"function"==typeof define&&define.amd?define(function(){return n}):c["seed"+p]=n}("undefined"!=typeof self?self:this,[],Math);
"""


def build_embedded_html(prefill_email: str = "") -> str:
    """Build a single HTML string with Bootstrap, seedrandom, and app.js inlined for iframe embedding.
    If prefill_email is set, the iframe's email input will be pre-filled (HTML-escaped).
    """
    html = INDEX_HTML.read_text(encoding="utf-8")

    # Remove the two script tags and replace with inline scripts so it works inside Streamlit's iframe
    seedrandom_src = load_seedrandom()
    app_js_src = APP_JS.read_text(encoding="utf-8")

    # Replace script tags with inline versions
    old_scripts = """  <script src="https://cdn.jsdelivr.net/npm/seedrandom@3.0.5/seedrandom.min.js"></script>
  <script src="app.js?v=3"></script>"""
    new_scripts = f"""  <script>{seedrandom_src}</script>
  <script>{app_js_src}</script>"""
    html = html.replace(old_scripts, new_scripts)

    # Optionally pre-fill the email input (escape for JS string)
    if prefill_email:
        escaped = prefill_email.replace("\\", "\\\\").replace("'", "\\'").replace('"', '\\"')
        inject = f"""  <script>document.addEventListener("DOMContentLoaded",function(){{var i=document.getElementById("emailInput");if(i)i.value="{escaped}";}});</script>
</body>"""
        html = html.replace("</body>", inject)

    return html


def main():
    st.title("TDS GA4 Answer Checker")
    st.caption("Compute answers for [TDS 2026-01 GA4](https://exam.sanand.workers.dev/tds-2026-01-ga4) using your registered email.")

    # Admin button: one-click to see visitor stats (no need to type email)
    admin_clicked = st.button("admin)", type="secondary", use_container_width=True)
    if admin_clicked:
        ensure_data_dir()
        checks = read_checks()
        count = len(checks)
        st.success(f"**{count}** people have used the checker so far.")
        if count > 0:
            st.subheader("Emails")
            seen = set()
            unique = []
            for e in checks:
                if e not in seen:
                    seen.add(e)
                    unique.append(e)
            st.write(f"({len(unique)} unique)")
            for i, e in enumerate(unique, 1):
                st.text(f"{i}. {e}")
            st.download_button("Download list (one email per line)", "\n".join(unique), file_name="checker_emails.txt", mime="text/plain")
        else:
            st.caption("No entries yet. When users enter their email and click Go, they are counted here.")
        return

    # Email input: for answer checker (and optional admin via email)
    email = st.text_input("Your registered email", placeholder="you@example.com", key="email_input")
    go = st.button("Go", type="primary")

    if not go and not admin_clicked:
        st.info("Enter your email above and click **Go** to open the answer checker.")
        return
    if not go:
        return

    if not email or not email.strip():
        st.warning("Please enter your email.")
        return

    email_clean = email.strip()

    # Admin view: show count and list of people who checked in
    if email_clean.lower() == ADMIN_EMAIL.lower():
        ensure_data_dir()
        checks = read_checks()
        count = len(checks)
        st.success(f"**{count}** people have used the checker so far.")
        if count > 0:
            st.subheader("Emails")
            # Deduplicate but preserve order (first occurrence)
            seen = set()
            unique = []
            for e in checks:
                if e not in seen:
                    seen.add(e)
                    unique.append(e)
            st.write(f"({len(unique)} unique)")
            for i, e in enumerate(unique, 1):
                st.text(f"{i}. {e}")
            st.download_button("Download list (one email per line)", "\n".join(unique), file_name="checker_emails.txt", mime="text/plain")
        else:
            st.caption("No entries yet. When users enter their email and click Go, they are counted here.")
        return

    # Normal user: log this check and show the answer checker iframe
    log_check(email_clean)

    if not INDEX_HTML.exists():
        st.error(f"Missing {INDEX_HTML}. Run this app from the project root (e.g. `streamlit run streamlit_app.py`).")
        return
    if not APP_JS.exists():
        st.error(f"Missing {APP_JS}.")
        return

    embedded = build_embedded_html(prefill_email=email_clean)
    components.html(embedded, height=900, scrolling=True)


if __name__ == "__main__":
    main()
