function switchTab(tabId) {
    // Sembunyikan semua section konten
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Hilangkan status aktif dari semua tombol navigasi
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Tampilkan section yang dipilih
    document.getElementById(tabId).classList.add('active');

    // Tambahkan status aktif pada tombol yang ditekan
    const clickedButton = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick') === `switchTab('${tabId}')`
    );
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}