# TDS GA4 Answer Checker

Compute answers for [TDS 2026-01 GA4](https://exam.sanand.workers.dev/tds-2026-01-ga4) questions based on your registered email. All logic runs client-side with the same seeded RNG as the exam.

## Run locally (browser)

Open `index.html` in a browser, or serve the folder:

```bash
npx http-server -p 8080
# Then open http://localhost:8080
```

## Run with Streamlit (local)

```bash
pip install -r requirements.txt
streamlit run streamlit_app.py
```

Open the URL shown (e.g. http://localhost:8501).

## Deploy on Streamlit Community Cloud

1. Push this repo to GitHub (ensure `index.html`, `app.js`, and `streamlit_app.py` are in the repo root).
2. Go to [share.streamlit.io](https://share.streamlit.io), sign in with GitHub.
3. Click **New app**, choose your repo, set **Main file path** to `streamlit_app.py`, branch `main`.
4. Click **Deploy**. The app will build and run; the embedded checker runs in an iframe.

No secrets or environment variables are required.
