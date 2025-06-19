const body = document.querySelector('body');
const extensions = [
  {
    id: 'devlens',
    name: 'DevLens',
    description:
      'Quickly inspect page layouts and visualize element boundaries.',
    active: true,
    icon: './images/logo-devlens.svg',
  },
  {
    id: 'stylespy',
    name: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    active: true,
    icon: './images/logo-stylespy.svg',
  },
  {
    id: 'speedboost',
    name: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    active: false,
    icon: './images/logo-speedboost.svg',
  },
  {
    id: 'jsonwizard',
    name: 'JSONWizard',
    description:
      'Formats, validates, and prettifies JSON responses in-browser.',
    active: true,
    icon: './images/logo-jsonwizard.svg',
  },
  {
    id: 'tabmasterpro',
    name: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    active: true,
    icon: './images/logo-tabmasterpro.svg',
  },
  {
    id: 'viewportbuddy',
    name: 'ViewportBuddy',
    description:
      'Simulates various screen resolutions directly within the browser.',
    active: false,
    icon: './images/logo-viewportbuddy.svg',
  },
  {
    id: 'markupnotes',
    name: 'Markup Notes',
    description:
      'Enables annotation and notes directly onto webpages for collaborative debugging.',
    active: true,
    icon: './images/logo-markupnotes.svg',
  },
  {
    id: 'gridguides',
    name: 'GridGuides',
    description:
      'Overlay customizable grids and alignment guides on any webpage.',
    active: false,
    icon: './images/logo-gridguides.svg',
  },
  {
    id: 'palettepicker',
    name: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    active: true,
    icon: './images/logo-palettepicker.svg',
  },
  {
    id: 'linkchecker',
    name: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    active: true,
    icon: './images/logo-linkchecker.svg',
  },
  {
    id: 'domsnapshot',
    name: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    active: false,
    icon: './images/logo-domsnapshot.svg',
  },
  {
    id: 'consoleplus',
    name: 'ConsolePlus',
    description:
      'Enhanced developer console with advanced filtering and logging.',
    active: true,
    icon: './images/logo-consoleplus.svg',
  },
];
let currentFilter = 'all';

function renderExtensions() {
  const extensionsSection = document.querySelector('.extensions-section');

  extensionsSection.innerHTML = '';

  const filtered = extensions.filter((ext) => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'active') return ext.active;
    if (currentFilter === 'inactive') return !ext.active;
  });

  filtered.forEach((ext) => {
    const extensionsCard = document.createElement('div');
    extensionsCard.className = 'extensions-card';

    extensionsCard.innerHTML = `<div class="card-body">
                <div class="card-icon">
                  <img src="./images/logo-${ext.id}.svg" alt="" />
                </div>
                <div class="card-info">
                  <h3 class="card-title">${ext.name}</h3>
                  <p class="card-description">
                    ${ext.description}
                  </p>
                </div>
              </div>

             <div class="card-actions">
                <button class="remove-btn">Remove</button>
                <label class="card-toggle">
                  <input type="checkbox" />
                  <div class="toggle-btn"></div>
                </label>
              </div>`;

    extensionsSection.appendChild(extensionsCard);
    const toggle = extensionsCard.querySelector('input[type="checkbox"]');
    toggle.checked = ext.active;
    toggle.addEventListener('change', () => {
      ext.active = toggle.checked;
      renderExtensions();
    });
    const removeBtn = extensionsCard.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
      ext.active = false;
      renderExtensions();
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  body.classList.add('dark');
  renderExtensions();

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      renderExtensions();

      document.querySelectorAll('.filter-btn').forEach((b) => {
        b.classList.remove('active');
      });

      btn.classList.add('active');
    });
  });
});
const toggleBtn = document.querySelector('.theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  const icon = toggleBtn.querySelector('img');
  if (body.classList.contains('light')) {
    icon.setAttribute('src', './images/icon-moon.svg');
  } else {
    icon.setAttribute('src', './images/icon-sun.svg');
  }
  const headerLogo = document.querySelector('.header-logo');
  if (body.classList.contains('light')) {
    headerLogo.setAttribute('src', './images/logo.svg');
  } else {
    headerLogo.setAttribute('src', './images/logo-d.svg');
  }
});
