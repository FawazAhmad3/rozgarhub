/**
 * RozgarHub Core Logic
 * Handles component loading and dynamic data injection
 */

const core = {
  async loadComponent(selector, path) {
    try {
      const response = await fetch(path);
      const html = await response.text();
      document.querySelector(selector).innerHTML = html;
    } catch (error) {
      console.error(`Error loading component from ${path}:`, error);
    }
  },

  async fetchData(path) {
    try {
      const response = await fetch(path);
      return await response.json();
    } catch (error) {
      console.error(`Error fetching data from ${path}:`, error);
      return null;
    }
  },

  async initNavbar() {
    await this.loadComponent('#navbar-placeholder', '../../src/components/navbar.html');
    
    // Fix relative paths for images in the component
    const images = document.querySelectorAll('#navbar-placeholder img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('/')) {
        img.src = '../../' + src;
      }
    });

    const servicesData = await this.fetchData('../../src/data/services.json');
    if (servicesData && servicesData.categories) {
      const dropdown = document.getElementById('services-dropdown');
      if (dropdown) {
        dropdown.innerHTML = ''; // Clear placeholder
        servicesData.categories.forEach(cat => {
          const catDiv = document.createElement('div');
          catDiv.className = 'dropdown-item';
          catDiv.innerHTML = `
            <span class="category-name">${cat.name}</span>
            <div class="category-items">
              ${cat.items.map(item => `<a href="services.html">${item}</a>`).join('')}
            </div>
          `;
          dropdown.appendChild(catDiv);
        });
      }
    }

    // Mobile Menu Toggle Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileBtn.querySelector('i').classList.toggle('fa-bars');
        mobileBtn.querySelector('i').classList.toggle('fa-times');
      });
    }
  },

  async initFooter() {
    await this.loadComponent('#footer-placeholder', '../../src/components/footer.html');
    // Fix relative paths for images in the footer
    const images = document.querySelectorAll('#footer-placeholder img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('/')) {
        img.src = '../../' + src;
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Global initialization can go here if needed
});
