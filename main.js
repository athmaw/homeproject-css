document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const logoText = document.getElementById('logoText');
    const heroImg = document.getElementById('hero-img');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // 1. Navigation & Mobile Menu Logic
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('nav-scrolled');
            logoText.classList.add('text-[#D4AF37]');
        } else {
            navbar.classList.remove('nav-scrolled');
            logoText.classList.remove('text-[#D4AF37]');
        }
    });

    // 2. Property Listing Data (Actual data from marcimetzger.com)
    const listings = [
        { 
            title: "4751 W Adkisson Street", 
            price: "$1,850,000", 
            img: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg",
            specs: "4 BD | 5 BA | 5,530 SQ. FT."
        },
        { 
            title: "3736 S Spring Mountain Blvd", 
            price: "$1,595,000", 
            img: "https://img1.wsimg.com/isteam/stock/3395",
            specs: "4 BD | 6 BA | 2,110 SQ. FT."
        },
        { 
            title: "2221 W Windsong Lane", 
            price: "$1,450,000", 
            img: "https://img1.wsimg.com/isteam/stock/771",
            specs: "3 BD | 3 BA | 1,876 SQ. FT."
        }
    ];

    const grid = document.getElementById('listingsGrid');

    // 3. Render Logic with "Empty State" Handler
    function renderListings() {
        if (!grid) return;

        // Check if listings exist
        if (listings.length === 0) {
            grid.classList.remove('grid-cols-3'); // Center the message
            grid.innerHTML = `
                <div class="col-span-full py-20 text-center border border-dashed border-stone-300">
                    <p class="font-serif text-2xl text-stone-400 italic">New premium listings are arriving soon.</p>
                    <p class="text-stone-500 mt-4 uppercase tracking-widest text-[10px]">Contact Marci for off-market opportunities.</p>
                    <a href="#contact" class="mt-8 inline-block text-[#D4AF37] underline tracking-widest text-xs font-bold">INQUIRE NOW</a>
                </div>`;
            return;
        }

        // If listings exist, inject cards
        grid.innerHTML = '';
        listings.forEach(item => {
            grid.innerHTML += `
                <div class="group relative overflow-hidden bg-white shadow-2xl reveal cursor-pointer h-[500px]">
                    <img src="${item.img}" class="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-[2s]">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90"></div>
                    <div class="absolute bottom-0 left-0 p-10 text-white w-full text-left">
                        <p class="text-[#D4AF37] font-bold tracking-[0.3em] text-[9px] mb-3 uppercase underline decoration-1 underline-offset-4">${item.specs}</p>
                        <h3 class="font-serif text-2xl mb-2">${item.title}</h3>
                        <p class="text-xl font-serif text-[#D4AF37]">${item.price}</p>
                    </div>
                </div>`;
        });
    }

    renderListings();

    // 4. Scroll Reveal Logic (Must run after rendering)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});