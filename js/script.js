// Toggle class active
const navbarnav = document.querySelector
('.navbar-nav');

// ketika menu di klik
document.querySelector('#menu-logo').onclick = ( ) => {
    navbarnav.classList.toggle('active')
};

// hilangkan nav
const menulogo = document.querySelector
('#menu-logo');

document.addEventListener('click', function(e){
    if(!menulogo.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});

// slider
document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const slides = container.querySelectorAll('.slide');
    const prevButton = container.querySelector('#prev'); // Ganti ID menjadi kelas
    const nextButton = container.querySelector('#next'); // Ganti ID menjadi kelas

    let currentIndex = 0;

    // Fungsi untuk memperbarui posisi slider
    const updateSliderPosition = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Fungsi untuk memperbarui status tombol
    const updateButtons = () => {
        prevButton.disabled = (currentIndex === 0);
        nextButton.disabled = (currentIndex === slides.length - 1);
    };

    // Event listener untuk tombol prev
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            updateSliderPosition();
            updateButtons();
        }
    });

    // Event listener untuk tombol next
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex += 1;
            updateSliderPosition();
            updateButtons();
        }
    });

    // Panggil saat pertama kali untuk inisialisasi tombol dan posisi slider
    updateSliderPosition();
    updateButtons();
});


// history
// JavaScript untuk slider
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide_history');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        currentIndex = index;
    }


    // Auto-slide
    setInterval(() => {
        const newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }, 5000);

    // Tampilkan slide pertama
    showSlide(0);
});

