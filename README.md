# ToniPR

A marketing site and product-interface prototype for turning an interview into reusable content. The screens connect the public landing page, onboarding, interview preparation, and a workspace for reviewing posts and articles.

**HTML · CSS · JavaScript**

## Explore

Start at `index.html` for the public site or `dashboard.html` for the product workspace. From there, follow the interview flow and the LinkedIn, X, blog, and founder-kit views.

The Toni character, shared styles, and responsive navigation connect the marketing and product pages.

## Run locally

No package install or build step is needed. Use Python 3 to serve the files:

```sh
git clone https://github.com/anushaxrama/toniPR.git
cd toniPR
python3 -m http.server 8080 --bind 127.0.0.1
```

Open the [landing page](http://localhost:8080) or [dashboard](http://localhost:8080/dashboard.html). Some fonts and media need an internet connection.

## Code to start with

- `index.html` — public landing page.
- `onboarding.html` and `interview.html` — onboarding and interview screens.
- `dashboard.html` — product overview.
- `linkedin-posts.html`, `x-threads.html`, and `blog-articles.html` — content views.
- `css/` — shared styles.
- `js/dashboard-shell.js` — responsive navigation drawer.

## Project status

This repository contains the frontend. The sign-in, checkout, interview, and content-generation screens are prototype UI; this source does not include authentication, payment, or generation services.
