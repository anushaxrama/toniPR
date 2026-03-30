(function () {
  var toggle = document.querySelector('.nav-drawer-toggle');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.querySelector('.sidebar-overlay');
  if (!sidebar || !toggle) return;

  function close() {
    sidebar.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function open() {
    sidebar.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    if (sidebar.classList.contains('is-open')) close();
    else open();
  });
  if (overlay) overlay.addEventListener('click', close);

  sidebar.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 900px)').matches) close();
    });
  });
})();
