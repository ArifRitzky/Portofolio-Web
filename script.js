document.addEventListener("DOMContentLoaded", function() {
    
    // Memilih semua elemen dengan class 'fade-in'
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const appearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jika masuk layar, tambahkan class appear (elemen muncul ke atas)
                entry.target.classList.add('appear');
            } else {
                // Jika keluar layar, cabut class appear (elemen kembali turun & transparan)
                // Ini yang bikin animasinya bisa berulang terus saat naik-turun!
                entry.target.classList.remove('appear');
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});