// -------------------------header btn------------------------
document.addEventListener('DOMContentLoaded', function () {
    // Helper function to safely set up toggle functionality
    function setupToggle(sumId, subtractId, dataParaId) {
        const sumBtn = document.getElementById(sumId);
        const subtractBtn = document.getElementById(subtractId);
        const dataPara = document.getElementById(dataParaId);

        // Only add event listeners if elements exist
        if (sumBtn && subtractBtn && dataPara) {
            sumBtn.addEventListener('click', function () {
                sumBtn.style.display = 'none';
                subtractBtn.style.display = 'flex';
                dataPara.style.display = 'flex';
            });

            subtractBtn.addEventListener('click', function () {
                sumBtn.style.display = 'flex';
                subtractBtn.style.display = 'none';
                dataPara.style.display = 'none';
            });
        }
    }

    // Set up all toggle pairs
    setupToggle('sum1', 'subtract1', 'data-para1');
    setupToggle('sum2', 'subtract2', 'data-para2');
    setupToggle('sum3', 'subtract3', 'data-para3');
    setupToggle('sum4', 'subtract4', 'data-para4');
    setupToggle('sum5', 'subtract5', 'data-para5');
});

// ------------------------------mobile-menu---------

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById("menu-toggle")
    const menuBtns = document.getElementById("menu-btns")

    menuToggle.addEventListener("click", function () {
        if (menuBtns.style.display === "none" || menuBtns.style.display === "") {
            menuBtns.style.display = "block";
            console.log("done")
        } else {
            menuBtns.style.display = "none";
        }
    });
})

// -------------------------------الممارسات----hoverbtn---------------

const CLickList = document.getElementById('CLick-list')
const toggleBtn = document.getElementById('toggle-btn')

function btnHover() {
    CLickList.addEventListener("mouseover", () => {
        toggleBtn.style.display = 'flex'
    })
    CLickList.addEventListener("click", () => {
        toggleBtn.style.display = 'none'
    })
}

// -------------------------------------Service-box---------------------

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelector('.slider2');
    const button = document.querySelector('.btnHover');

    if (!boxes || !button) {
        return
    }

    boxes.addEventListener('mouseover', () => {
        button.style.display = 'flex';
    });

    boxes.addEventListener('mouseout', () => {
        button.style.display = 'none';
    });
});

// ------------------------------------sliderhovering-----------------
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('target-hover3');
    const details3Hover = document.getElementById("details3Bg")

    if (!target || !details3Hover) {
        return
    }

    target.addEventListener('mouseover', () => {
        details3Hover.style.display = 'flex'
        details3Hover.style.transition = "all 0.3s ease-In"
    })

    target.addEventListener('mouseout', () => {
        details3Hover.style.display = 'none'
        details3Hover.style.transition = "all 0.3s ease-In"
    })
});

// --------------------box-animation----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.price-box1, .price-box2, .price-box3, .price-box4');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('in-view');
                }, index * 300); // Stagger animation by 300ms
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    boxes.forEach(box => {
        observer.observe(box);
    });
});

// ----------------------------------trainer-slider-------------------------
document.addEventListener('DOMContentLoaded', () => {
    let scrollContainer = document.querySelector(".trainer-slider")
    let backBtn = document.getElementById("backBtn")
    let nextBtn = document.getElementById("nextBtn")

    if (!scrollContainer || !backBtn || !nextBtn) {
        return
    }

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY
        scrollContainer.style.scrollBehavior = 'auto'
    })

    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = 'smooth'
        scrollContainer.scrollLeft -= 900
    })


    nextBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft += 900
        scrollContainer.style.scrollBehavior = 'smooth'
    })
})

// -----------------------------------certicateslider-------------

function LeftButtonClick() {
    let scrollSlider = document.querySelector(".certificate-slider");
    let btnLeft = document.getElementById("btnLeft");
    scrollSlider.style.scrollBehavior = 'smooth';
    scrollSlider.scrollLeft -= 900;
}

function rightButtonClick() {
    let scrollSlider = document.querySelector(".certificate-slider");
    let btnRight = document.getElementById("btnRight");
    scrollSlider.style.scrollBehavior = 'smooth';
    scrollSlider.scrollLeft += 900;
}

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    let scrollSlider = document.querySelector(".certificate-slider");
    let btnLeft = document.getElementById("btnLeft");
    let btnRight = document.getElementById("btnRight");

    if (scrollSlider && btnLeft && btnRight) {
        scrollSlider.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollSlider.scrollLeft += evt.deltaY * 0.5; // Smoother scrolling
            scrollSlider.style.scrollBehavior = 'auto';
        });
    }
});

// ---------------------------------------من نحن-----
// ------todo-----
document.addEventListener("DOMContentLoaded", () => {
    const cartPara2 = document.getElementById('cart-para2')
    const cartUp2 = document.getElementById('cart-up2')
    const cartDown2 = document.getElementById('cart-down2')

    if (!cartPara2 || !cartUp2 || !cartDown2) {
        return
    }

    cartDown2.addEventListener('click', () => {
        cartPara2.style.display = 'flex'
        cartUp2.style.display = 'flex'
        cartDown2.style.display = "none"
    })

    cartUp2.addEventListener('click', () => {
        cartPara2.style.display = 'none'
        cartUp2.style.display = 'none'
        cartDown2.style.display = "flex"
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const cartPara3 = document.getElementById('cart-para3')
    const cartUp3 = document.getElementById('cart-up3')
    const cartDown3 = document.getElementById('cart-down3')

    if (!cartPara3 || !cartUp3 || !cartDown3) {
        return
    }

    cartDown3.addEventListener('click', () => {
        cartPara3.style.display = 'flex'
        cartUp3.style.display = 'flex'
        cartDown3.style.display = "none"
    })

    cartUp3.addEventListener('click', () => {
        cartPara3.style.display = 'none'
        cartUp3.style.display = 'none'
        cartDown3.style.display = "flex"
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const cartPara4 = document.getElementById('cart-para4')
    const cartUp4 = document.getElementById('cart-up4')
    const cartDown4 = document.getElementById('cart-down4')

    if (!cartPara4 || !cartUp4 || !cartDown4) {
        return
    }

    cartDown4.addEventListener('click', () => {
        cartPara4.style.display = 'flex'
        cartUp4.style.display = 'flex'
        cartDown4.style.display = "none"
    })

    cartUp4.addEventListener('click', () => {
        cartPara4.style.display = 'none'
        cartUp4.style.display = 'none'
        cartDown4.style.display = "flex"
    })
})