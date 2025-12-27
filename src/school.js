// scroll to top button

// document.addEventListener("DOMContentLoaded", function() {

    
    let backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
           
            backToTopButton.classList.remove('hidden');
        } else {
           
            backToTopButton.classList.add("hidden");
        }
    });
    
    backToTopButton.addEventListener("click" , () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Newsletter Form Submission
    document.addEventListener('DOMContentLoaded', function() {
        const newsletterForm = document.querySelector('.join');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                if (emailInput.value) {
                    // Here you would typically send the email to your server
                    alert('Thank you for subscribing to our newsletter!');
                    emailInput.value = '';
                }
            });
        }
    });

    // // script for when toggleMenu is click it bring the dropMenu -->

    // let offScreenMenu = document.querySelector(".off-screen-menu");
    // let hamburger = document.querySelector(".hamburger");
    // let fa_xmark = document.querySelector(".fa-xmark");
    // // let body = document.body;
    
    // hamburger.addEventListener("click", () => {
    //     if(offScreenMenu.classList.toggle('active')){
    //         // Disable scrolling and interaction on the body
    //     body.style.overflow = "hidden"; // Prevents scrolling
    //     }
    //     else{
    //     body.style.overflow = "auto";
    //     }
    // });

    // fa_xmark.addEventListener("click", () => {
    //     offScreenMenu.classList.remove('active');
    //     body.style.overflow ="auto";
    // });


    //menu ends here

// });

// side menu bar with hamburger



// Simple working JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const mobileMenu = document.getElementById('mobile-menu');
    const menuPanel = document.getElementById('menu-panel');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-menu');
    const backdrop = document.getElementById('menu-backdrop');
    
    // Open menu
    function openMenu() {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            menuPanel.classList.remove('translate-x-full');
            backdrop.classList.toggle("hidden")
        }, 700);
    }
    
    // Close menu
    function closeMenu() {
        menuPanel.classList.add('translate-x-full');
        document.body.style.overflow = "auto";
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
    
    // Add event listeners
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openMenu);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    
    if (backdrop) {
        backdrop.addEventListener('click', closeMenu);
    }
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            closeMenu();
        }
    });
});
