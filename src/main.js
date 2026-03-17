// Car inventory data
const carInventory = [
  {
    id: 1,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    price: 125000,
    mileage: 1200,
    fuel: 'Hybrid',
    transmission: 'Automatic',
    type: 'Luxury',
    image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
    featured: true,
    specs: {
      engine: '3.0L Inline-6 Turbo + Electric',
      horsepower: '429 HP',
      acceleration: '0-60 mph in 4.9s',
      topSpeed: '155 mph',
      fuelEconomy: '28 city / 35 highway',
      seating: '5 passengers'
    }
  },
  {
    id: 2,
    make: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    price: 89900,
    mileage: 3500,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    type: 'Sports',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    featured: true,
    specs: {
      engine: '3.0L Twin-Turbo Inline-6',
      horsepower: '503 HP',
      acceleration: '0-60 mph in 3.8s',
      topSpeed: '180 mph',
      fuelEconomy: '16 city / 23 highway',
      seating: '4 passengers'
    }
  },
  {
    id: 3,
    make: 'Audi',
    model: 'e-tron GT',
    year: 2024,
    price: 106900,
    mileage: 800,
    fuel: 'Electric',
    transmission: 'Automatic',
    type: 'Electric',
    image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    featured: false,
    specs: {
      engine: 'Dual Electric Motors',
      horsepower: '469 HP',
      acceleration: '0-60 mph in 3.9s',
      topSpeed: '152 mph',
      range: '238 miles',
      seating: '5 passengers'
    }
  },
  {
    id: 4,
    make: 'Porsche',
    model: '911 Turbo',
    year: 2023,
    price: 198000,
    mileage: 5200,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    type: 'Sports',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    featured: true,
    specs: {
      engine: '3.7L Twin-Turbo Flat-6',
      horsepower: '572 HP',
      acceleration: '0-60 mph in 2.7s',
      topSpeed: '199 mph',
      fuelEconomy: '15 city / 20 highway',
      seating: '4 passengers'
    }
  },
  {
    id: 5,
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 108900,
    mileage: 2100,
    fuel: 'Electric',
    transmission: 'Automatic',
    type: 'Electric',
    image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg',
    featured: false,
    specs: {
      engine: 'Tri-Motor All-Wheel Drive',
      horsepower: '1020 HP',
      acceleration: '0-60 mph in 1.99s',
      topSpeed: '200 mph',
      range: '396 miles',
      seating: '5 passengers'
    }
  },
  {
    id: 6,
    make: 'Range Rover',
    model: 'Sport',
    year: 2024,
    price: 83000,
    mileage: 4300,
    fuel: 'Hybrid',
    transmission: 'Automatic',
    type: 'SUV',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
    featured: false,
    specs: {
      engine: '3.0L Inline-6 Turbo + Electric',
      horsepower: '395 HP',
      acceleration: '0-60 mph in 5.5s',
      topSpeed: '140 mph',
      fuelEconomy: '21 city / 26 highway',
      seating: '7 passengers'
    }
  },
  {
    id: 7,
    make: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2023,
    price: 287000,
    mileage: 1800,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    type: 'Sports',
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg',
    featured: true,
    specs: {
      engine: '5.2L V10',
      horsepower: '631 HP',
      acceleration: '0-60 mph in 2.9s',
      topSpeed: '202 mph',
      fuelEconomy: '13 city / 18 highway',
      seating: '2 passengers'
    }
  },
  {
    id: 8,
    make: 'Bentley',
    model: 'Continental GT',
    year: 2024,
    price: 245000,
    mileage: 2900,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    type: 'Luxury',
    image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg',
    featured: false,
    specs: {
      engine: '4.0L Twin-Turbo V8',
      horsepower: '542 HP',
      acceleration: '0-60 mph in 3.9s',
      topSpeed: '198 mph',
      fuelEconomy: '16 city / 26 highway',
      seating: '4 passengers'
    }
  }
];

// DOM Elements
let currentFilter = 'all';
let searchTerm = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  setupEventListeners();
  setupScrollAnimations();
});

// Render the main app structure
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-container">
        <div class="logo">Premium Auto</div>
        <div class="nav-links">
          <a href="#home" class="nav-link">Home</a>
          <a href="#inventory" class="nav-link">Inventory</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="#contact" class="btn btn-primary">Get Quote</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-bg"></div>
      <div class="hero-container">
        <div class="hero-content fade-in">
          <h1>Drive Your Dreams</h1>
          <p>Discover our exclusive collection of luxury and performance vehicles, handpicked for the discerning driver.</p>
          <div class="hero-buttons">
            <a href="#inventory" class="btn btn-primary">Browse Inventory</a>
            <a href="#contact" class="btn btn-secondary">Schedule Test Drive</a>
          </div>
        </div>
        <div class="hero-image slide-in-right">
          <img src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg" alt="Luxury car">
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats fade-in">
      <div class="stats-container">
        <div class="stat-item">
          <h3>500+</h3>
          <p>Premium Vehicles Sold</p>
        </div>
        <div class="stat-item">
          <h3>98%</h3>
          <p>Customer Satisfaction</p>
        </div>
        <div class="stat-item">
          <h3>15+</h3>
          <p>Years of Excellence</p>
        </div>
        <div class="stat-item">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </div>
    </section>

    <!-- Inventory Section -->
    <section id="inventory" class="inventory">
      <div class="section-header fade-in">
        <h2>Our Premium Collection</h2>
        <p>Explore our handpicked selection of luxury and performance vehicles</p>
      </div>
      
      <div class="filter-bar fade-in">
        <select class="filter-select" id="typeFilter">
          <option value="all">All Types</option>
          <option value="Luxury">Luxury</option>
          <option value="Sports">Sports</option>
          <option value="SUV">SUV</option>
          <option value="Electric">Electric</option>
        </select>
        <select class="filter-select" id="priceFilter">
          <option value="all">All Prices</option>
          <option value="0-100000">Under $100,000</option>
          <option value="100000-200000">$100,000 - $200,000</option>
          <option value="200000-999999">Over $200,000</option>
        </select>
        <input type="text" class="search-input" id="searchInput" placeholder="Search by make, model, or year...">
      </div>
      
      <div class="car-grid" id="carGrid">
        <!-- Cars will be rendered here -->
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact fade-in">
      <div class="contact-container">
        <div class="contact-form">
          <h2>Get In Touch</h2>
          <p>Ready to find your perfect vehicle? Contact us today.</p>
          <form id="contactForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" class="form-input" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" class="form-input" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" class="form-input" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" class="form-textarea" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div class="contact-info">
          <h3>Visit Our Showroom</h3>
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div>
              <h4>Location</h4>
              <p>123 Luxury Lane, Beverly Hills, CA 90210</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+1 (112) 333-3444</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">⏰</div>
            <div>
              <h4>Hours</h4>
              <p>Mon-Sat: 9AM-7PM<br>Sunday: 11AM-5PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
          <a href="#" class="footer-link">Financing</a>
          <a href="#" class="footer-link">Trade-In</a>
        </div>
        <p>&copy; 2025 Premium Auto. All rights reserved.</p>
      </div>
    </footer>

    <!-- Modal -->
    <div class="modal" id="carModal">
      <div class="modal-content">
        <button class="modal-close" onclick="closeModal()">✕</button>
        <div id="modalBody">
          <!-- Modal content will be rendered here -->
        </div>
      </div>
    </div>
  `;

  renderCars();
}

// Render car grid
function renderCars() {
  const carGrid = document.getElementById('carGrid');
  const filteredCars = filterCars();
  
  carGrid.innerHTML = filteredCars.map(car => `
    <div class="car-card fade-in" onclick="openCarModal(${car.id})">
      <div class="car-image">
        <img src="${car.image}" alt="${car.make} ${car.model}">
        ${car.featured ? '<div class="car-badge">Featured</div>' : ''}
      </div>
      <div class="car-details">
        <h3>${car.make} ${car.model}</h3>
        <p class="car-subtitle">${car.year} • ${car.mileage.toLocaleString()} miles</p>
        <div class="car-price">$${car.price.toLocaleString()}</div>
        <div class="car-features">
          <div class="car-feature">⚡ ${car.fuel}</div>
          <div class="car-feature">⚙️ ${car.transmission}</div>
          <div class="car-feature">🚗 ${car.type}</div>
        </div>
        <button class="btn btn-primary" style="width: 100%;">View Details</button>
      </div>
    </div>
  `).join('');
  
  // Trigger animations for newly rendered cards
  setTimeout(() => {
    document.querySelectorAll('.car-card').forEach(card => {
      card.classList.add('visible');
    });
  }, 100);
}

// Filter cars based on current filters
function filterCars() {
  return carInventory.filter(car => {
    // Type filter
    if (currentFilter !== 'all' && car.type !== currentFilter) {
      return false;
    }
    
    // Price filter
    const priceFilter = document.getElementById('priceFilter').value;
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      if (car.price < min || car.price > max) {
        return false;
      }
    }
    
    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const carText = `${car.make} ${car.model} ${car.year}`.toLowerCase();
      if (!carText.includes(searchLower)) {
        return false;
      }
    }
    
    return true;
  });
}

// Open car modal
function openCarModal(carId) {
  const car = carInventory.find(c => c.id === carId);
  if (!car) return;
  
  const modal = document.getElementById('carModal');
  const modalBody = document.getElementById('modalBody');
  
  modalBody.innerHTML = `
    <div class="modal-car">
      <div class="modal-image">
        <img src="${car.image}" alt="${car.make} ${car.model}">
      </div>
      <div class="modal-details">
        <h2>${car.make} ${car.model}</h2>
        <p class="car-subtitle">${car.year} • ${car.mileage.toLocaleString()} miles</p>
        <div class="modal-price">$${car.price.toLocaleString()}</div>
        
        <h3>Specifications</h3>
        <div class="specs-grid">
          <div class="spec-item">
            <div class="spec-label">Engine</div>
            <div class="spec-value">${car.specs.engine}</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Power</div>
            <div class="spec-value">${car.specs.horsepower}</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Acceleration</div>
            <div class="spec-value">${car.specs.acceleration}</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Top Speed</div>
            <div class="spec-value">${car.specs.topSpeed}</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">${car.fuel === 'Electric' ? 'Range' : 'Fuel Economy'}</div>
            <div class="spec-value">${car.fuel === 'Electric' ? car.specs.range : car.specs.fuelEconomy}</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Seating</div>
            <div class="spec-value">${car.specs.seating}</div>
          </div>
        </div>
        
        <div class="hero-buttons" style="margin-top: 32px;">
          <button class="btn btn-primary" onclick="scheduleDrive(${car.id})">Schedule Test Drive</button>
          <button class="btn btn-secondary" onclick="requestQuote(${car.id})">Request Quote</button>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  const modal = document.getElementById('carModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Schedule test drive
function scheduleDrive(carId) {
  closeModal();
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  const car = carInventory.find(c => c.id === carId);
  if (car) {
    document.getElementById('message').value = `I would like to schedule a test drive for the ${car.year} ${car.make} ${car.model}.`;
  }
}

// Request quote
function requestQuote(carId) {
  closeModal();
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  const car = carInventory.find(c => c.id === carId);
  if (car) {
    document.getElementById('message').value = `I would like to request a quote for the ${car.year} ${car.make} ${car.model}.`;
  }
}

// Setup event listeners
function setupEventListeners() {
  // Type filter
  document.getElementById('typeFilter').addEventListener('change', (e) => {
    currentFilter = e.target.value;
    renderCars();
  });
  
  // Price filter
  document.getElementById('priceFilter').addEventListener('change', () => {
    renderCars();
  });
  
  // Search input
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderCars();
  });
  
  // Contact form
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you within 24 hours.');
    e.target.reset();
  });
  
  // Modal close on outside click
  document.getElementById('carModal').addEventListener('click', (e) => {
    if (e.target.id === 'carModal') {
      closeModal();
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Navbar scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.style.background = 'rgba(23, 23, 23, 0.95)';
      nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      nav.style.background = 'rgba(23, 23, 23, 0.8)';
      nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

// Setup scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all animated elements
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
}

// Make functions globally available
window.openCarModal = openCarModal;
window.closeModal = closeModal;
window.scheduleDrive = scheduleDrive;
window.requestQuote = requestQuote;
