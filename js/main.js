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
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;
    var message = document.getElementById('message').value;

    var text =
      "New booking request:\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Service: " + service + "\n" +
      "Preferred date: " + date + "\n" +
      "Message: " + (message || "-");

    var whatsappNumber = "233246155531"; // <-- put his real number here, country code, no + or spaces
    var url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
  });
}   
// Hero slideshow
var slides = document.querySelectorAll('.hero-slide');
if (slides.length > 1) {
  var current = 0;
  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000); // change every 5 seconds
}
});
