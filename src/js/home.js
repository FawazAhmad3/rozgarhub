/**
 * Home Page Logic
 */

document.addEventListener('DOMContentLoaded', async () => {
  // Load core components
  await core.initNavbar();
  await core.initFooter();
  
  // Fetch home data
  const data = await core.fetchData('../../src/data/home.json');
  if (!data) return;

  // 1. Hero Slider
  const sliderContent = document.getElementById('slider-content');
  data.hero.slides.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = `slide ${index === 0 ? 'active' : ''}`;
    slideDiv.innerHTML = `
      <img src="../../${slide.image}" alt="${slide.title}">
      <div class="slide-info">
        <div class="container">
          <h1>${slide.title}</h1>
          <p>${slide.subtitle}</p>
        </div>
      </div>
    `;
    sliderContent.appendChild(slideDiv);
  });
  
  // Slider functionality (simple interval)
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);

  // 2. Booking Form
  document.getElementById('booking-title').innerText = data.bookingForm.title;
  document.getElementById('label-name').innerText = data.bookingForm.fields.name;
  document.getElementById('label-phone').innerText = data.bookingForm.fields.phone;
  document.getElementById('label-service').innerText = data.bookingForm.fields.service;
  document.getElementById('label-area').innerText = data.bookingForm.fields.area;
  document.getElementById('label-address').innerText = data.bookingForm.fields.address;
  document.getElementById('btn-request').innerText = data.bookingForm.fields.button;

  const serviceSelect = document.getElementById('service-select');
  data.bookingForm.services.forEach(service => {
    const opt = document.createElement('option');
    opt.value = service;
    opt.textContent = service;
    serviceSelect.appendChild(opt);
  });

  const areaSelect = document.getElementById('area-select');
  data.bookingForm.areas.forEach(area => {
    const opt = document.createElement('option');
    opt.value = area;
    opt.textContent = area;
    areaSelect.appendChild(opt);
  });

  // 3. Top Services
  document.getElementById('top-services-title').innerText = data.topServices.title;
  const topServicesList = document.getElementById('top-services-list');
  data.topServices.items.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card glass-card';
    card.innerHTML = `
      <img src="../../${service.image}" alt="${service.name}">
      <div class="card-body">
        <h3>${service.name}</h3>
        <a href="services.html?id=${service.id}" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
      </div>
    `;
    topServicesList.appendChild(card);
  });

  // 4. Location Section
  document.getElementById('location-title').innerText = data.locationSection.title;
  document.getElementById('location-desc').innerText = data.locationSection.description;

  // 5. Affiliation Section
  document.getElementById('affiliation-title').innerText = data.affiliations.title;
  const affiliationLogos = document.getElementById('affiliation-logos');
  data.affiliations.logos.forEach(logo => {
    const logoImg = document.createElement('img');
    logoImg.src = `../../${logo}`;
    logoImg.alt = "Partner Logo";
    logoImg.className = "partner-logo";
    affiliationLogos.appendChild(logoImg);
  });
});
