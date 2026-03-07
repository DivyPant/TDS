"""
TDS GA4 Answer Checker — Streamlit deployment.
Embeds the same client-side checker (HTML + JS) in an iframe so answers match the exam exactly.
"""
import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path

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
ADMIN_EMAIL = "vivek@tds"


def load_seedrandom():
    """Load seedrandom: from local file if present, else minimal inline that sets Math.seedrandom."""
    if SEEDRANDOM_JS.exists():
        return SEEDRANDOM_JS.read_text(encoding="utf-8")
    # Minimal UMD bundle that exposes seedrandom (from cdn jsdelivr seedrandom@3.0.5)
    return r"""
!function(f,a,c){var s,l=256,p="random",d=c.pow(l,6),g=c.pow(2,52),y=2*g,h=l-1;function n(n,t,r){function e(){for(var n=u.g(6),t=d,r=0;n<g;)n=(n+r)*l,t*=l,r=u.g(1);for(;y<=n;)n/=2,t/=2,r>>>=1;return(n+r)/t}var o=[],i=j(function n(t,r){var e,o=[],i=typeof t;if(r&&"object"==i)for(e in t)try{o.push(n(t[e],r-1))}catch(n){}return o.length?o:"string"==i?t:t+"\0"}((t=1==t?{entropy:!0}:t||{}).entropy?[n,S(a)]:null==n?function(){try{var n;return s&&(n=s.randomBytes)?n=n(l):(n=new Uint8Array(l),(f.crypto||f.msCrypto).getRandomValues(n)),S(n)}catch(n){var t=f.navigator,r=t&&t.plugins;return[+new Date,f,r,f.screen,S(a)]}}():n,3),o),u=new m(o);return e.int32=function(){return 0|u.g(4)},e.quick=function(){return u.g(4)/4294967296},e.double=e,j(S(u.S),a),(t.pass||r||function(n,t,r,e){return e&&(e.S&&v(e,u),n.state=function(){return v(u,{})}),r?(c[p]=n,t):n})(e,i,"global"in t?t.global:this==c,t.state)}function m(n){var t,r=n.length,u=this,e=0,o=u.i=u.j=0,i=u.S=[];for(r||(n=[r++]);e<l;)i[e]=e++;for(e=0;e<l;e++)i[e]=i[o=h&o+n[e%r]+(t=i[e])],i[o]=t;(u.g=function(n){for(var t,r=0,e=u.i,o=u.j,i=u.S;n--;)t=i[e=h&e+1],r=r*l+i[h&(i[e]=i[o=h&o+t])+(i[o]=t)];return u.i=e,u.j=o,r})(l)}function v(n,t){return t.i=n.i,t.j=n.j,t.S=n.S.slice(),t}function j(n,t){for(var r,e=n+"",o=0;o<e.length;)t[h&o]=h&(r^=19*t[h&o])+e.charCodeAt(o++);return S(t)}function S(n){return String.fromCharCode.apply(0,n)}if(j(c.random(),a),"object"==typeof module&&module.exports){module.exports=n;try{s=require("crypto")}catch(n){}}else"function"==typeof define&&define.amd?define(function(){return n}):c["seed"+p]=n}("undefined"!=typeof self?self:this,[],Math);
"""


def build_embedded_html(prefill_email: str | None = None) -> str:
    """Build a single HTML string with Bootstrap, seedrandom, and app.js inlined for iframe embedding."""
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

    if prefill_email:
        esc = prefill_email.replace("\\", "\\\\").replace('"', '\\"').replace("<", "\\u003c")
        inject = f'<script>document.addEventListener("DOMContentLoaded",function(){{var e=document.getElementById("emailInput");if(e)e.value="{esc}";}});</script>'
        html = html.replace("</body>", inject + "\n</body>")

    return html


def log_visitor(email: str) -> None:
    """Append visitor email to data/checks.txt (one per line)."""
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(CHECKS_FILE, "a", encoding="utf-8") as f:
        f.write(email.strip() + "\n")


def render_admin_view() -> None:
    """Show how many people checked in and list their emails."""
    st.subheader("Visitor stats")
    if not CHECKS_FILE.exists():
        st.info("No check-ins yet.")
        return
    lines = CHECKS_FILE.read_text(encoding="utf-8").strip().splitlines()
    emails = [ln.strip() for ln in lines if ln.strip()]
    st.metric("Total check-ins", len(emails))
    st.write("**Emails:**")
    for i, e in enumerate(emails, 1):
        st.text(f"{i}. {e}")


def main():
    st.title("TDS GA4 Answer Checker")
    st.caption("Compute answers for [TDS 2026-01 GA4](https://exam.sanand.workers.dev/tds-2026-01-ga4) using your registered email.")

    if not INDEX_HTML.exists():
        st.error(f"Missing {INDEX_HTML}. Run this app from the project root (e.g. `streamlit run streamlit_app.py`).")
        return
    if not APP_JS.exists():
        st.error(f"Missing {APP_JS}.")
        return

    with st.form("email_form"):
        email = st.text_input("Email address", placeholder="you@example.com", key="visitor_email")
        submitted = st.form_submit_button("Go")

    if submitted and email and email.strip().lower() == ADMIN_EMAIL.lower():
        render_admin_view()
        return

    if submitted and email and email.strip():
        log_visitor(email.strip())
        prefill = email.strip()
    else:
        prefill = None

    embedded = build_embedded_html(prefill_email=prefill)
    components.html(embedded, height=900, scrolling=True)


if __name__ == "__main__":
    main()
