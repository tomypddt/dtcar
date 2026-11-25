# DT Car SEO and AI-search implementation — 25 November 2026

## Changes prepared for deployment
- Twelve original guides, each with a checklist illustration (SVG for web, PNG social image), answer summary, author organization, reviewed date, source links and related service links.
- Topics: VF 3 and VF 5 pricing; battery subscription comparison; appraisal photos; used-car inspection; Green GSM driver applications; Filipino rental guide; VinFast service preparation; EV charging costs; charging-site proposals; selling a car in Vietnamese; fleet installation preparation.
- Guide hub, editorial policy and interactive electricity-versus-petrol energy calculator. Sample consumption and petrol price are explicitly illustrative. This is not total cost of ownership or financial advice.
- Fleet installation service page; guide links across all seven services; main navigation and mobile menu links.
- Article and breadcrumb structured data, canonical URLs, unique search titles, social images; shorter search titles for 18 existing articles.
- Current operating city changed to Pasay, based on owner confirmation. No street, hours, coordinates or completed showroom claimed.
- Sitemap includes the separate /sell-your-car/ landing page added concurrently by another workflow; that page is preserved.
- Contact-click events queue only method and page path in dataLayer. No GA4 tag or server reporting is configured by this change.

## Baseline evidence
Search Console domain property sc-domain:dtcar.ph is connected to OpenSEO. DNS verification and initial sitemap submission succeeded. Before expansion, Search Console showed 33 discovered URLs. Homepage inspection returned indexed; two service URLs were discovered but not yet crawled/indexed. New property performance returned no rows, not evidence of zero market demand.

OpenSEO project: b92049dc-0d32-42d4-92a5-a78d4256bd21. AI visibility tracking is not configured; no AI citation/ranking baseline is claimed.

## Validation
Production build and TypeScript pass after merging the concurrent landing page. scripts/check-export.py checks sitemap files, single H1, canonical, unique titles, internal links/images, duplicate IDs and JSON-LD parsing. All 50 sitemap URLs passed after merging the concurrent landing page. ESLint initially passed with 0 errors and 25 existing/conventional static img warnings. Final results belong in the deployment report.

## Remaining external dependencies
- Maps pin verified directly: XPERT AUTO CASA INC, located in HK Sun Plaza, Pasay; plus code GXWQ+PP; coordinates 14.5468006, 120.9892693. Contact page labels the host location. Current DT Car customer-reception status/hours/signage still unconfirmed; owner says leasing part of the premises is planned. Do not register a future office as an operating showroom.
- GitHub Pages deployment source setting requires browser login. Existing Actions deployment can still publish through the connected GitHub API.
- GA4 measurement account/property, Bing Webmaster Tools, and appropriate business-profile ownership/authentication.
- Offsite submissions require factual identity/address and relevant account access. No backlinks, directory profiles, outreach messages, or reviews have been submitted in this implementation.
- Indexing, rank gains, enquiries and third-party AI citations need later observation. Completing implementation does not complete 90 days of measurement.

## Verified source set
- https://vinfastauto.ph/en/price-list — checked 25 November 2026.
- https://vinfastauto.ph/en/introducing-charging-payments-on-the-v-green-network — 20 November payment update; avoid repeating outdated unconditional free-charging claims.
- https://www.greengsm.ph/en/driver-car — application process and requirements; eligibility and final terms remain provider-controlled.
- https://vinfastauto.ph/en/does-an-electric-car-need-maintenance-heres-what-to-know
- https://developers.google.com/search/docs/appearance/ai-features — standard search accessibility remains the foundation; no special markup guarantees an AI citation.

## Analytics follow-up
Created GA4 web stream DT Car website (16409805013), measurement ID G-NMJEB0W2HP, under the existing Hữu Dương account (123736184) via huuduongdna@gmail.com. Optional consent-based loading is implemented with explicit reject/withdraw controls, page-path-only page locations, disabled advertising personalization and custom contact-method events. Enhanced measurement is off in the stream. GA4 receipt and OpenSEO OAuth binding still need verification.

## Live verification of first deployment
GitHub deployment 45533480561 succeeded for commit 4166a6d16c375f5454f77fdfc1eddd7e0b3c418c. Live guides hub rendered all 12 guides. Calculator default: PHP2550 versus4200; 2000km:5100 versus8400; negative distance shows validation; reset restores defaults. Mobile menu opened successfully and document width equalled viewport width.
