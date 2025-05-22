// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Data - Tải từ file lang.json
    let langData = {};
    const fetchData = async () => {
        try {
            const response = await fetch('data/lang.json'); // Đường dẫn tới file JSON
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            langData = await response.json();
            console.log('Language data loaded:', langData); // Kiểm tra dữ liệu đã tải
            initializeLanguage(); // Khởi tạo ngôn ngữ sau khi tải xong dữ liệu
        } catch (error) {
            console.error('Failed to load language data:', error);
            // Fallback: nếu không tải được JSON, có thể dùng dữ liệu mặc định ở đây
            langData = {
                "en": { "page-title": "DTCar Website", "nav-about": "About Us", /* ... */ },
                "vi": { "page-title": "Trang web DTCar", "nav-about": "Giới thiệu", /* ... */ },
                "zh": { "page-title": "DTCar 网站", "nav-about": "关于我们", /* ... */ }
            };
            initializeLanguage();
        }
    };

    let currentLang = localStorage.getItem('dtcarLang') || 'en'; // Lấy từ localStorage, mặc định là 'en'

    function initializeLanguage() {
        applyLanguageToPage(); // Áp dụng ngôn ngữ cho trang hiện tại ngay khi tải
        updateLanguageButtons(); // Cập nhật trạng thái nút ngôn ngữ
        setupLanguageSwitchers(); // Setup sự kiện click cho các nút
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('dtcarLang', lang); // Lưu ngôn ngữ vào localStorage
        applyLanguageToPage(); // Áp dụng ngôn ngữ cho trang hiện tại
        updateLanguageButtons(); // Cập nhật trạng thái nút ngôn ngữ
    }

    function applyLanguageToPage() {
        if (!langData[currentLang]) {
            console.warn(`Language data for "${currentLang}" not found.`);
            return;
        }

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            // Check if element is a placeholder input/textarea
            if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.hasAttribute('placeholder')) {
                if (langData[currentLang][key]) {
                    element.setAttribute('placeholder', langData[currentLang][key]);
                }
            }
            // Check if element is an option in select
            else if (element.tagName === 'OPTION') {
                if (langData[currentLang][key]) {
                    element.textContent = langData[currentLang][key];
                }
            }
            // For other elements, update innerHTML
            else {
                if (langData[currentLang][key]) {
                    element.innerHTML = langData[currentLang][key];
                }
            }
        });

        // Cập nhật thuộc tính lang của thẻ html
        document.documentElement.lang = currentLang;

        // Cập nhật title trang (quan trọng vì title là phần tử riêng biệt không có data-lang-key)
        const pageTitleElement = document.querySelector('title[data-lang-key]');
        if (pageTitleElement && langData[currentLang] && langData[currentLang][pageTitleElement.getAttribute('data-lang-key')]) {
             document.title = langData[currentLang][pageTitleElement.getAttribute('data-lang-key')];
        } else if (langData[currentLang] && langData[currentLang]['page-title-default']) {
            document.title = langData[currentLang]['page-title-default']; // Fallback title
        } else {
            document.title = "DTCar Website"; // Default fallback
        }
    }

    function updateLanguageButtons() {
        document.querySelectorAll('.lang-switcher button').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = document.getElementById(`lang-${currentLang}`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }

    function setupLanguageSwitchers() {
        document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));
        document.getElementById('lang-vi')?.addEventListener('click', () => setLanguage('vi'));
        document.getElementById('lang-zh')?.addEventListener('click', () => setLanguage('zh'));
    }

    // Load language data when script runs
    fetchData();


    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Tắt/mở cuộn trang khi menu mobile mở/đóng
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden'; // Tắt cuộn
            } else {
                document.body.style.overflow = ''; // Bật lại cuộn
            }
        });

        // Đóng menu khi click vào link trong menu (trừ dropdown)
        document.querySelectorAll('.main-nav .nav-links li:not(.dropdown) a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        // Xử lý đóng menu khi click ra ngoài (mobile)
        document.addEventListener('click', (event) => {
            if (mainNav.classList.contains('active') && !mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // 3. Scroll Animations (Hiệu ứng khi cuộn)
    const scrollAnimatedElements = document.querySelectorAll('.scroll-animation');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Kích hoạt khi 10% của phần tử hiển thị
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ngừng theo dõi sau khi đã hiển thị
            }
        });
    }, observerOptions);

    scrollAnimatedElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Smooth Scrolling for Navigation Links (Cuộn mượt mà đến ID)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hash = this.getAttribute('href');
            if (hash.length > 1 && document.querySelector(hash)) { // Đảm bảo không phải chỉ là '#'
                e.preventDefault();
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Dynamic Feedback Carousels
    // Hàm này sẽ quản lý từng carousel riêng biệt dựa trên ID hoặc class
    window.setupFeedbackCarousel = (selector) => {
        const carouselElement = document.querySelector(selector);
        if (!carouselElement) return;

        const feedbackItems = Array.from(carouselElement.querySelectorAll('.feedback-item'));
        if (feedbackItems.length === 0) return;

        let currentIndex = 0;
        let intervalId;

        const showFeedback = (index) => {
            feedbackItems.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) {
                    item.classList.add('active');
                }
            });
        };

        const nextFeedback = () => {
            currentIndex = (currentIndex + 1) % feedbackItems.length;
            showFeedback(currentIndex);
        };

        const startCarousel = () => {
            if (feedbackItems.length > 1) { // Chỉ chạy carousel nếu có nhiều hơn 1 item
                intervalId = setInterval(nextFeedback, 5000); // Chuyển sau 5 giây
            }
        };

        const stopCarousel = () => {
            clearInterval(intervalId);
        };

        showFeedback(currentIndex); // Hiển thị feedback đầu tiên
        startCarousel(); // Bắt đầu tự động chuyển

        // Tùy chọn: Tạm dừng khi chuột rê vào, chạy lại khi chuột rời đi
        carouselElement.addEventListener('mouseenter', stopCarousel);
        carouselElement.addEventListener('mouseleave', startCarousel);
    };

    // Note: setupFeedbackCarousel() will be called in each HTML file's <script> tag
    // to target specific carousels on that page.
});