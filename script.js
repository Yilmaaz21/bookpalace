// Database of Products across Categories & Classes
const products = [
    // --- BOOKS ---
    { id: 1, name: "Mathematics Textbook", category: "books", subcategory: "Mathematics", grade: "Grade 8", price: 450, img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Urdu Textbook", category: "books", subcategory: "Urdu", grade: "Grade 8", price: 380, img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "General Science Book", category: "books", subcategory: "Science", grade: "Grade 8", price: 420, img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "English Grammar & Text", category: "books", subcategory: "English", grade: "Grade 8", price: 400, img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Chemistry Fundamentals", category: "books", subcategory: "Chemistry", grade: "Grade 9-10", price: 500, img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Physics Principles", category: "books", subcategory: "Physics", grade: "Grade 9-10", price: 520, img: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Islamiat Textbook", category: "books", subcategory: "Islamiat", grade: "All Classes", price: 300, img: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Computer Science Guide", category: "books", subcategory: "Computer", grade: "Grade 8", price: 460, img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "Biology Living World", category: "books", subcategory: "Biology", grade: "Grade 9-10", price: 490, img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "Primary Math Workbook", category: "books", subcategory: "Mathematics", grade: "Grade 3-5", price: 350, img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80" },	

    // --- NOTEBOOKS ---
    { id: 11, name: "A5 Spiral Notepad", category: "notebooks", subcategory: "Notepads", grade: "Universal", price: 180, img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "School Register Notebook", category: "notebooks", subcategory: "School notebooks", grade: "Grade 8", price: 150, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80" },
    { id: 13, name: "Leatherette Academic Diary", category: "notebooks", subcategory: "Diaries", grade: "Universal", price: 350, img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=500&q=80" },
    { id: 14, name: "Small Pocket Notepad", category: "notebooks", subcategory: "Notepads", grade: "Universal", price: 90, img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&q=80" },
    { id: 15, name: "Science Graph Notebook", category: "notebooks", subcategory: "School notebooks", grade: "Grade 8", price: 170, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=500&q=80" },

    // --- STATIONERY ---
    { id: 16, name: "Ballpoint Pen Pack (Blue/Black)", category: "stationery", subcategory: "Pens", grade: "Stationery", price: 120, img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=500&q=80" },
    { id: 17, name: "Wooden HB Pencils (Box of 10)", category: "stationery", subcategory: "Pencils", grade: "Stationery", price: 100, img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80" },
    { id: 18, name: "Dust-Free Soft Erasers", category: "stationery", subcategory: "Erasers", grade: "Stationery", price: 40, img: "https://images.unsplash.com/photo-1611078489935-0cb966de46d6?auto=format&fit=crop&w=500&q=80" },
    { id: 19, name: "Metal Pencil Sharpener", category: "stationery", subcategory: "Sharpeners", grade: "Stationery", price: 50, img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80" },
    { id: 20, name: "Plastic Transparent Ruler (30cm)", category: "stationery", subcategory: "Rulers", grade: "Stationery", price: 60, img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=500&q=80" },
    { id: 21, name: "Neon Highlighters Set", category: "stationery", subcategory: "Highlighters", grade: "Stationery", price: 220, img: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=500&q=80" },
    { id: 22, name: "Color Markers Pack", category: "stationery", subcategory: "Markers", grade: "Stationery", price: 250, img: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=500&q=80" },
    { id: 23, name: "School Glue Stick", category: "stationery", subcategory: "Glue", grade: "Stationery", price: 75, img: "https://images.unsplash.com/photo-1599689015240-a843328e937d?auto=format&fit=crop&w=500&q=80" },
    { id: 24, name: "Safety Student Scissors", category: "stationery", subcategory: "Scissors", grade: "Stationery", price: 95, img: "https://images.unsplash.com/photo-1585336261022-6fc2e2938a9e?auto=format&fit=crop&w=500&q=80" },
    { id: 25, name: "Canvas Pencil Case Pouch", category: "stationery", subcategory: "Pencil cases", grade: "Stationery", price: 200, img: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=500&q=80" }
];

let cart = [];
let currentCategory = 'all';
let currentSubcategory = 'all';

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const subFilterContainer = document.getElementById('subFilterContainer');
const sectionTitleHeading = document.getElementById('sectionTitleHeading');
const sectionTitleSub = document.getElementById('sectionTitleSub');
const heroSection = document.getElementById('heroSection');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeModal = document.getElementById('closeModal');
const checkoutForm = document.getElementById('checkoutForm');

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupEventListeners();
});

// Display Products in Grid
function displayProducts(itemsToDisplay) {
    productGrid.innerHTML = '';
    if (itemsToDisplay.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: #666; padding: 40px;">No products found.</p>`;
        return;
    }

    itemsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <span class="product-tag">${product.subcategory}</span>
                <img src="${product.img}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-details">
                <h4 class="product-title">${product.name}</h4>
                <p class="product-meta">${product.grade}</p>
                <div class="product-footer">
                    <span class="product-price">Rs. ${product.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Filter Navigation Events
function setupEventListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const category = link.getAttribute('data-category');
            filterCategory(category);
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Cart Drawer Toggle
    cartToggle.addEventListener('click', () => {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
    });

    closeCart.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);

    // Checkout Modal
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        closeCartDrawer();
        checkoutModal.classList.add('open');
    });

    closeModal.addEventListener('click', () => {
        checkoutModal.classList.remove('open');
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order placed successfully! Thank you for shopping with Book Palace.');
        cart = [];
        updateCartUI();
        checkoutModal.classList.remove('open');
    });
}

function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
}

// Category Filtering
function filterCategory(category) {
    currentCategory = category;
    currentSubcategory = 'all';

    // Toggle Hero & Titles
    if (category === 'all') {
        heroSection.style.display = 'block';
        sectionTitleHeading.textContent = "Featured Products";
        sectionTitleSub.textContent = "Browse our premium collection";
        subFilterContainer.innerHTML = '';
        displayProducts(products);
    } else {
        heroSection.style.display = 'none';
        sectionTitleHeading.textContent = category.toUpperCase();
        sectionTitleSub.textContent = `Explore our ${category} range`;
        renderSubFilters(category);
        
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Render Sub-Category Buttons
function renderSubFilters(category) {
    subFilterContainer.innerHTML = '';
    let subcategories = [];

    if (category === 'books') {
        subcategories = ["Mathematics", "Urdu", "Science", "English", "Chemistry", "Physics", "Islamiat", "Computer", "Biology"];
    } else if (category === 'notebooks') {
        subcategories = ["Notepads", "School notebooks", "Diaries"];
    } else if (category === 'stationery') {
        subcategories = ["Pens", "Pencils", "Erasers", "Sharpeners", "Rulers", "Highlighters", "Markers", "Glue", "Scissors", "Pencil cases"];
    }

    // Add "All" button for subcategory
    const allBtn = document.createElement('button');
    allBtn.className = 'sub-filter-btn active';
    allBtn.textContent = 'All ' + category;
    allBtn.onclick = () => filterSubCategory('all', allBtn);
    subFilterContainer.appendChild(allBtn);

    subcategories.forEach(sub => {
        const btn = document.createElement('button');
        btn.className = 'sub-filter-btn';
        btn.textContent = sub;
        btn.onclick = () => filterSubCategory(sub, btn);
        subFilterContainer.appendChild(btn);
    });
}

function filterSubCategory(sub, btnElement) {
    document.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    currentSubcategory = sub;

    let filtered = products.filter(p => p.category === currentCategory);
    if (sub !== 'all') {
        filtered = filtered.filter(p => p.subcategory === sub);
    }
    displayProducts(filtered);
}

// Search Logic
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;

    heroSection.style.display = 'none';
    sectionTitleHeading.textContent = `Search Results for "${query}"`;
    sectionTitleSub.textContent = "";
    subFilterContainer.innerHTML = '';

    const results = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.subcategory.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    );
    displayProducts(results);
}

// Cart Functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Quick visual notification
    cartToggle.style.transform = 'scale(1.2)';
    setTimeout(() => { cartToggle.style.transform = 'scale(1)'; }, 200);
}

function changeQuantity(productId, amount) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Your cart is empty.</p>`;
        cartTotalPrice.textContent = "Rs. 0";
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Rs. ${item.price} x ${item.quantity}</p>
            </div>
            <div class="cart-item-controls">
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(row);
    });

    cartTotalPrice.textContent = `Rs. ${total}`;
}