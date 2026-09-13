// 1OneSkyKing Adventure Guide — shared site behavior

document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  document.querySelectorAll('#year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu after tapping a link (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Gallery filters (gallery.html)
  var filterBar = document.getElementById('gallery-filters');
  var grid = document.getElementById('gallery-grid');
  if (filterBar && grid) {
    var buttons = filterBar.querySelectorAll('button');
    var items = grid.querySelectorAll('.gallery-item');
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      items.forEach(function (item) {
        var match = filter === 'all' || item.getAttribute('data-cat') === filter;
        item.classList.toggle('hidden', !match);
      });
    });
  }

  // Pre-select service on contact.html from ?service=Xyz link
  var serviceSelect = document.getElementById('service');
  if (serviceSelect) {
    var params = new URLSearchParams(window.location.search);
    var wanted = params.get('service');
    if (wanted) {
      var wantedLower = wanted.toLowerCase();
      Array.prototype.forEach.call(serviceSelect.options, function (opt) {
        if (opt.text.toLowerCase().indexOf(wantedLower) !== -1) {
          serviceSelect.value = opt.value;
        }
      });
    }
  }

  // Booking form
  var form = document.getElementById('booking-form');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // TODO: replace this block with a real submission, e.g.:
      //   fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //     method: 'POST',
      //     headers: { 'Accept': 'application/json' },
      //     body: new FormData(form)
      //   })
      // Until then, this just confirms the form was filled correctly
      // and shows a message — no data is sent anywhere yet.

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      status.textContent = 'Thanks — your request looks good. (Connect this form to Formspree, Getform, or your own backend to actually send it — see README.md.)';
      status.className = 'form-status ok';
      form.reset();
    });
  }
});
