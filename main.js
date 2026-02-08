document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const logoText = document.getElementById('logoText');
    const heroImg = document.getElementById('hero-img');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // 1. Mobile Menu Logic
    window.toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // 2. Navigation Scroll Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('nav-scrolled');
            logoText.classList.add('text-[#D4AF37]');
        } else {
            navbar.classList.remove('nav-scrolled');
            logoText.classList.remove('text-[#D4AF37]');
        }
    });

    // 3. Property Listing Data with Actual Redirects
    const listings = [
        { 
            title: "4751 W Adkisson Street", 
            price: "$1,850,000", 
            url: "https://marcimetzger.com/listings",
            img: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg",
            specs: "4 BD | 5 BA | 5,530 SQ. FT."
        },
        { 
            title: "3736 S Spring Mountain Blvd", 
            price: "$1,595,000", 
            url: "https://marcimetzger.com/listings",
            img: "https://img1.wsimg.com/isteam/stock/3395",
            specs: "4 BD | 6 BA | 2,110 SQ. FT."
        },
        { 
            title: "2221 W Windsong Lane", 
            price: "$1,450,000", 
            url: "https://marcimetzger.com/listings",
            img: "https://img1.wsimg.com/isteam/stock/771",
            specs: "3 BD | 3 BA | 1,876 SQ. FT."
        }
    ];

    const grid = document.getElementById('listingsGrid');

    function renderListings() {
        if (!grid) return;
        if (listings.length === 0) {
            grid.innerHTML = `<div class="col-span-full py-20 text-center border border-dashed border-stone-300 text-white">
                <p class="font-serif text-2xl italic">New premium listings are arriving soon.</p>
            </div>`;
            return;
        }

        grid.innerHTML = '';
        listings.forEach(item => {
            grid.innerHTML += `
                <a href="${item.url}" target="_blank" class="group relative overflow-hidden bg-white shadow-2xl reveal cursor-pointer h-[500px] block">
                    <img src="${item.img}" class="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-[2s]">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90"></div>
                    <div class="absolute bottom-0 left-0 p-10 text-white w-full text-left">
                        <p class="text-[#D4AF37] font-bold tracking-[0.3em] text-[9px] mb-3 uppercase underline underline-offset-4">${item.specs}</p>
                        <h3 class="font-serif text-2xl mb-2">${item.title}</h3>
                        <p class="text-xl font-serif text-[#D4AF37]">${item.price}</p>
                    </div>
                </a>`;
        });
    }

    renderListings();

    // 4. Scroll Reveal Logic
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});