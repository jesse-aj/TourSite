# 1OneSkyKing Adventure Guide — Website

Plain HTML/CSS/JS static site. No build tools, no server required — open any `.html` file in a browser, or serve the folder with any static host.

## Structure

```
1oneskyking-website/
├── index.html        Homepage
├── about.html         About / mission / certifications
├── services.html      All 10 services (anchor sections: #hiking, #ziplining, etc.)
├── gallery.html        Filterable photo/video gallery
├── contact.html         Booking form + contact details + map
├── css/style.css        All styling (one shared file)
├── js/main.js            Nav toggle, gallery filters, form handling
└── images/               Put real photos here (see below)
```

## Before you launch

1. **Add real images.** The CSS references these files — drop matching photos into `/images` with these exact names, or update the CSS/HTML paths:
   - `images/hero-adventure.jpg` — homepage hero background
   - Service/gallery thumbnails currently use flat color placeholders (`.thumb` / `.gallery-item` background color in CSS). Easiest fix: add `background-image: url('../images/your-photo.jpg')` inline on each element, or extend the CSS.

2. **Wire up the booking form.** Right now, submitting the form just shows a confirmation message — nothing is actually sent anywhere. Fastest fix under a deadline: sign up for a free plan on **Formspree** or **Getform**, get a form endpoint URL, and replace the TODO block in `js/main.js` (`booking-form` submit handler) with a real `fetch()` POST to that URL. No backend needed.

3. **Replace placeholder contact details:**
   - WhatsApp number in the floating button (all 5 pages) and on `contact.html`
   - Phone number and email on `contact.html`
   - Business address and Google Maps embed URL on `contact.html`
   - Real social media links on `contact.html`

4. **Update the page `<title>` and meta description** in each file if anything changes (address, phone, etc.).

## Notes

- Mobile nav collapses under 760px automatically — no config needed.
- Gallery filter buttons use `data-filter` / `data-cat` attributes — add more gallery items by copying a `.gallery-item` block and giving it a matching category.
- Services page uses one page with anchor links (`services.html#hiking`) instead of 10 separate pages, to keep load time and maintenance low.
