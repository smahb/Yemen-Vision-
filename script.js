// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    // تحميل المحتوى الديناميكي
    loadDynamicContent();
    
    // إظهار الصفحة الرئيسية عند التحميل
    showPage('home');
    
    // إضافة مستمعي الأحداث لروابط التنقل
    document.querySelectorAll('nav a, .btn[data-page], footer a[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    // تحميل الصور مع مؤشر
    loadImagesWithIndicator();

    // تهيئة عارض الصور
    initGalleryLightbox();

    // حساب التكلفة التلقائي
    calculateTotalCost();
});

// تحميل المحتوى الديناميكي
function loadDynamicContent() {
    loadFeatures();
    loadTestimonials();
    loadAboutPage();
    loadServicesPage();
    loadPackagesPage();
    loadGalleryPage();
    loadBlogPage();
    loadBookingPage();
    loadContactPage();
    loadFooter();
}

// تحميل الميزات
function loadFeatures() {
    const container = document.getElementById('features-container');
    if (!container) return;

    container.innerHTML = siteData.features.map(feature => `
        <div class="feature-card fade-in">
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
}

// تحميل آراء العملاء
function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    container.innerHTML = siteData.testimonials.map(testimonial => `
        <div class="testimonial-card fade-in">
            <div class="testimonial-content">
                <p>${testimonial.content}</p>
            </div>
            <div class="testimonial-author">
                <div class="testimonial-avatar">
                    ${testimonial.avatar}
                </div>
                <div class="author-info">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.date}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// تحميل صفحة عن القاعة
function loadAboutPage() {
    const container = document.getElementById('about');
    if (!container) return;

    container.innerHTML = `
        <div class="about">
            <div class="container">
                <h2 class="section-title">عن قاعة الأفراح اليمنية</h2>
                <div class="about-container">
                    <div class="about-content">
                        <h2>قصتنا ورسالتنا</h2>
                        <p>تأسست قاعة الأفراح اليمنية في صنعاء عام 2005، وتعتبر من أبرز وأفخم قاعات الأفراح في اليمن. نحن نقدم خدمات متكاملة وشاملة لجميع مناسباتكم.</p>
                        <p>تتميز قاعتنا بتصميمها الفريد الذي يجمع بين الأصالة اليمنية والحداثة، مع توفر أحدث التقنيات والأجهزة الصوتية والإضاءة. نحرص على توفير بيئة احتفالية راقية وآمنة لجميع ضيوفكم.</p>
                        <p>نقدم في قاعتنا جميع خدمات تنظيم الحفلات والمناسبات، بما في ذلك التصميم والديكور، الضيافة والطعام، التصوير والفيديو، والترفيه.</p>
                        <h3>رؤيتنا</h3>
                        <p>أن نكون الوجهة الأولى لحفلات الزفاف والمناسبات في اليمن، من خلال تقديم خدمات استثنائية تلبي تطلعات عملائنا وتجعل من كل مناسبة ذكرى خالدة.</p>
                        <h3>مميزات موقعنا</h3>
                        <ul style="list-style-type: disc; padding-right: 20px; margin-top: 15px;">
                            <li>موقع مركزي في قلب صنعاء</li>
                            <li>مواقف سيارات واسعة ومؤمنة</li>
                            <li>تصميم داخلي فاخر وأنيق</li>
                            <li>أحدث أنظمة الصوت والإضاءة</li>
                            <li>فريق عمل محترف ومدرب</li>
                            <li>أسعار تنافسية ومناسبة</li>
                        </ul>
                    </div>
                    <div class="about-image">
                        <img src="https://i.imgur.com/8w9k7aA.jpg" alt="قاعة الأفراح اليمنية">
                    </div>
                </div>
            </div>
        </div>

        <div class="features">
            <div class="container">
                <h2 class="section-title">لماذا تختار قاعتنا؟</h2>
                <div class="features-grid">
                    <div class="feature-card fade-in">
                        <div class="feature-icon">
                            <i class="fas fa-award"></i>
                        </div>
                        <h3>خبرة 18 عاماً</h3>
                        <p>أكثر من 18 عاماً من الخبرة في تنظيم الحفلات والمناسبات</p>
                    </div>
                    <div class="feature-card fade-in">
                        <div class="feature-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <h3>جودة عالية</h3>
                        <p>نلتزم بأعلى معايير الجودة في جميع خدماتنا</p>
                    </div>
                    <div class="feature-card fade-in">
                        <div class="feature-icon">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <h3>ثقة العملاء</h3>
                        <p>أكثر من 1000 حفل ناجح ورضا تام من العملاء</p>
                    </div>
                    <div class="feature-card fade-in">
                        <div class="feature-icon">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h3>اهتمام بالتفاصيل</h3>
                        <p>نهتم بكل التفاصيل الصغيرة لنجعل مناسبتك مميزة</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// تحميل صفحة الخدمات
function loadServicesPage() {
    const container = document.getElementById('services');
    if (!container) return;

    container.innerHTML = `
        <div class="services">
            <div class="container">
                <h2 class="section-title">خدماتنا المتكاملة</h2>
                <div class="services-grid">
                    ${siteData.services.map(service => `
                        <div class="service-card fade-in">
                            <div class="service-img">
                                <img src="${service.image}" alt="${service.title}">
                            </div>
                            <div class="service-content">
                                <h3>${service.title}</h3>
                                <p>${service.description}</p>
                                <ul style="list-style-type: disc; padding-right: 20px; margin-top: 10px;">
                                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// تحميل صفحة الباقات
function loadPackagesPage() {
    const container = document.getElementById('packages');
    if (!container) return;

    container.innerHTML = `
        <div class="packages">
            <div class="container">
                <h2 class="section-title">باقاتنا المميزة</h2>
                <div class="packages-grid">
                    ${siteData.packages.map(pkg => `
                        <div class="package-card fade-in">
                            ${pkg.popular ? '<div class="popular-tag">الأكثر طلباً</div>' : ''}
                            <div class="package-header">
                                <h3>${pkg.name}</h3>
                                <div class="package-price">${pkg.price} ريال</div>
                            </div>
                            <div class="package-features">
                                <ul>
                                    ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                                <a href="#" data-page="booking" class="btn">احجز الآن</a>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="additional-services">
                    <h2 class="section-title">خدمات إضافية</h2>
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-cake"></i>
                            </div>
                            <h3>كعكة الزفاف</h3>
                            <p>تصميم كعكة زفاف فاخرة حسب الطلب</p>
                            <p style="color: var(--primary); font-weight: bold; margin-top: 10px;">50,000 - 200,000 ريال</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-gift"></i>
                            </div>
                            <h3>هدايا الضيوف</h3>
                            <p>توفير هدايا تذكارية للضيوف</p>
                            <p style="color: var(--primary); font-weight: bold; margin-top: 10px;">10,000 - 50,000 ريال</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-car"></i>
                            </div>
                            <h3>سيارات الزفاف</h3>
                            <p>تأجير سيارات فاخرة لليوم الخاص</p>
                            <p style="color: var(--primary); font-weight: bold; margin-top: 10px;">100,000 - 300,000 ريال</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-fireworks"></i>
                            </div>
                            <h3>الألعاب النارية</h3>
                            <p>عرض ألعاب نارية مميز</p>
                            <p style="color: var(--primary); font-weight: bold; margin-top: 10px;">150,000 - 500,000 ريال</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// تحميل صفحة المعرض
function loadGalleryPage() {
    const container = document.getElementById('gallery');
    if (!container) return;

    container.innerHTML = `
        <div class="gallery">
            <div class="container">
                <h2 class="section-title">معرض الصور</h2>
                <div class="gallery-grid">
                    ${siteData.gallery.map((image, index) => `
                        <div class="gallery-item fade-in">
                            <img src="${image}" alt="صورة ${index + 1}">
                            <div class="gallery-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// تحميل صفحة المدونة
function loadBlogPage() {
    const container = document.getElementById('blog');
    if (!container) return;

    container.innerHTML = `
        <div class="blog">
            <div class="container">
                <h2 class="section-title">مدونة قاعة الأفراح اليمنية</h2>
                <div class="blog-grid">
                    ${siteData.blogPosts.map(post => `
                        <div class="blog-card fade-in">
                            <div class="blog-img">
                                <img src="${post.image}" alt="${post.title}">
                            </div>
                            <div class="blog-content">
                                <h3>${post.title}</h3>
                                <div class="blog-meta">
                                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                                    <span><i class="far fa-user"></i> ${post.author}</span>
                                </div>
                                <p>${post.excerpt}</p>
                                <a href="#" class="btn" style="margin-top: 15px;">اقرأ المزيد</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// تحميل صفحة الحجز
function loadBookingPage() {
    const container = document.getElementById('booking');
    if (!container) return;

    container.innerHTML = `
        <div class="booking">
            <div class="container">
                <h2 class="section-title">حجز القاعة والدفع الإلكتروني</h2>
                <div class="booking-container">
                    <div class="booking-form">
                        <form id="bookingForm">
                            <div class="form-group">
                                <label for="name">الاسم الكامل</label>
                                <input type="text" id="name" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">رقم الهاتف</label>
                                <input type="tel" id="phone" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="email">البريد الإلكتروني</label>
                                <input type="email" id="email" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="date">تاريخ الحفل</label>
                                <input type="date" id="date" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="guests">عدد الضيوف المتوقع</label>
                                <input type="number" id="guests" class="form-control" min="50" max="500" required>
                            </div>
                            <div class="form-group">
                                <label for="package">اختر الباقة</label>
                                <select id="package" class="form-control" required>
                                    <option value="">-- اختر الباقة --</option>
                                    <option value="silver">الباقة الفضية - 500,000 ريال</option>
                                    <option value="gold">الباقة الذهبية - 1,000,000 ريال</option>
                                    <option value="diamond">الباقة الماسية - 2,000,000 ريال</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="message">ملاحظات إضافية</label>
                                <textarea id="message" class="form-control" placeholder="أي متطلبات خاصة أو تفاصيل إضافية..."></textarea>
                            </div>
                            
                            <div class="payment-section">
                                <h3>طريقة الدفع</h3>
                                <div class="payment-methods">
                                    <div class="payment-method" data-method="cash">
                                        <i class="fas fa-money-bill-wave"></i>
                                        <div>الدفع نقداً</div>
                                    </div>
                                    <div class="payment-method" data-method="card">
                                        <i class="fas fa-credit-card"></i>
                                        <div>البطاقة الائتمانية</div>
                                    </div>
                                    <div class="payment-method" data-method="mobile">
                                        <i class="fas fa-mobile-alt"></i>
                                        <div>المحفظة الإلكترونية</div>
                                    </div>
                                </div>
                                
                                <div class="payment-details" id="cardDetails">
                                    <div class="form-group">
                                        <label for="cardNumber">رقم البطاقة</label>
                                        <input type="text" id="cardNumber" class="form-control" placeholder="1234 5678 9012 3456">
                                    </div>
                                    <div class="form-group">
                                        <label for="cardName">اسم حامل البطاقة</label>
                                        <input type="text" id="cardName" class="form-control" placeholder="اسم حامل البطاقة">
                                    </div>
                                    <div class="form-group" style="display: flex; gap: 15px;">
                                        <div style="flex: 1;">
                                            <label for="expiryDate">تاريخ الانتهاء</label>
                                            <input type="text" id="expiryDate" class="form-control" placeholder="MM/YY">
                                        </div>
                                        <div style="flex: 1;">
                                            <label for="cvv">CVV</label>
                                            <input type="text" id="cvv" class="form-control" placeholder="123">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="payment-details" id="mobileDetails">
                                    <div class="form-group">
                                        <label for="mobileNumber">رقم الهاتف</label>
                                        <input type="text" id="mobileNumber" class="form-control" placeholder="77X XXX XXX">
                                    </div>
                                    <div class="form-group">
                                        <label for="provider">مزود الخدمة</label>
                                        <select id="provider" class="form-control">
                                            <option value="yemenMobile">يمن موبايل</option>
                                            <option value="sabafon">صبةفون</option>
                                            <option value="mtn">MTN</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-accent" style="width: 100%; margin-top: 20px;">تأكيد الحجز والدفع</button>
                        </form>
                    </div>
                    <div class="booking-info">
                        <h3>معلومات الحجز</h3>
                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <h3>العنوان</h3>
                                    <p>${siteData.contactInfo.address}</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-phone"></i>
                                <div>
                                    <h3>الهاتف</h3>
                                    <p>${siteData.contactInfo.phone}</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <div>
                                    <h3>البريد الإلكتروني</h3>
                                    <p>${siteData.contactInfo.email}</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-clock"></i>
                                <div>
                                    <h3>ساعات العمل</h3>
                                    <p>${siteData.contactInfo.hours.weekdays}</p>
                                    <p>${siteData.contactInfo.hours.friday}</p>
                                </div>
                            </div>
                        </div>
                        <div class="pricing-info" style="margin-top: 30px;">
                            <h3>أسعار الباقات</h3>
                            <ul style="list-style-type: none; padding: 0;">
                                ${siteData.packages.map(pkg => `<li style="padding: 10px 0; border-bottom: 1px solid #eee;">${pkg.name}: ${pkg.price} ريال يمني</li>`).join('')}
                            </ul>
                        </div>
                        <div class="booking-terms" style="margin-top: 30px; background: #f9f9f9; padding: 15px; border-radius: 5px;">
                            <h4>شروط الحجز</h4>
                            <ul style="list-style-type: disc; padding-right: 20px; font-size: 0.9rem;">
                                <li>يتم تأكيد الحجز بدفع 30% من قيمة الباقة</li>
                                <li>يمكن إلغاء الحجز قبل 15 يوماً من الموعد</li>
                                <li>يتم دفع المبلغ المتبقي قبل أسبوع من الحفل</li>
                                <li>للاستفسارات يرجى الاتصال على الأرقام المذكورة</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // إعادة ربط أحداث النماذج بعد تحميل المحتوى
    setTimeout(() => {
        document.getElementById('bookingForm').addEventListener('submit', handleBookingSubmit);
        initPaymentMethods();
    }, 100);
}

// تحميل صفحة الاتصال
function loadContactPage() {
    const container = document.getElementById('contact');
    if (!container) return;

    container.innerHTML = `
        <div class="contact">
            <div class="container">
                <h2 class="section-title">اتصل بنا</h2>
                <div class="contact-container">
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>العنوان</h3>
                                <p>${siteData.contactInfo.address}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h3>الهاتف</h3>
                                <p>${siteData.contactInfo.phone}</p>
                                <p>${siteData.contactInfo.phone2}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h3>البريد الإلكتروني</h3>
                                <p>${siteData.contactInfo.email}</p>
                                <p>${siteData.contactInfo.email2}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-clock"></i>
                            <div>
                                <h3>ساعات العمل</h3>
                                <p>${siteData.contactInfo.hours.weekdays}</p>
                                <p>${siteData.contactInfo.hours.friday}</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map"></i>
                            <div>
                                <h3>الموقع على الخريطة</h3>
                                <p>يمكنك زيارة قاعتنا في الموقع المذكور أعلاه</p>
                                <a href="#" class="btn" style="margin-top: 10px;">فتح خرائط جوجل</a>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form">
                        <form id="contactForm">
                            <div class="form-group">
                                <label for="contactName">الاسم الكامل</label>
                                <input type="text" id="contactName" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="contactEmail">البريد الإلكتروني</label>
                                <input type="email" id="contactEmail" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="contactPhone">رقم الهاتف</label>
                                <input type="tel" id="contactPhone" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="contactSubject">الموضوع</label>
                                <input type="text" id="contactSubject" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="contactMessage">الرسالة</label>
                                <textarea id="contactMessage" class="form-control" required></textarea>
                            </div>
                            <button type="submit" class="btn">إرسال الرسالة</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    // إعادة ربط أحداث النماذج بعد تحميل المحتوى
    setTimeout(() => {
        document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
    }, 100);
}

// تحميل الفوتر
function loadFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="container">
            <div class="footer-container">
                <div class="footer-col">
                    <h3>قاعة الأفراح اليمنية</h3>
                    <p>${siteData.footerData.description}</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>روابط سريعة</h3>
                    <ul>
                        ${siteData.footerData.quickLinks.map(link => `
                            <li><a href="#" data-page="${link.page}">${link.text}</a></li>
                        `).join('')}
                        <li><a href="#" data-page="booking">الحجز والدفع</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>خدماتنا</h3>
                    <ul>
                        ${siteData.footerData.services.map(service => `
                            <li><a href="#">${service}</a></li>
                        `).join('')}
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>النشرة البريدية</h3>
                    <p>اشترك لتحصل على آخر العروض والأخبار</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="بريدك الإلكتروني" class="form-control" style="margin-bottom: 10px;">
                        <button type="submit" class="btn">اشترك</button>
                    </form>
                </div>
            </div>
            <div class="copyright">
                <p>جميع الحقوق محفوظة &copy; 2023 قاعة الأفراح اليمنية</p>
            </div>
        </div>
    `;
}

// نظام التنقل بين الصفحات
function showPage(pageId) {
    // إخفاء جميع الصفحات
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // إظهار الصفحة المطلوبة
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // إزالة النشاط من جميع روابط التنقل
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // تفعيل رابط التنقل الحالي
    const currentLink = document.querySelector(`nav a[data-page="${pageId}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }
    
    // التمرير إلى الأعلى
    window.scrollTo(0, 0);
    
    // إعادة تهيئة جميع النماذج والتأثيرات
    initializePage();
}

// القائمة المتنقلة
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav ul').classList.remove('active');
    });
});

// نظام الحجز والدفع
function handleBookingSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const package = document.getElementById('package').options[document.getElementById('package').selectedIndex].text;
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;
    const paymentMethod = document.querySelector('.payment-method.active')?.getAttribute('data-method');
    
    let paymentText = '';
    if (paymentMethod === 'cash') {
        paymentText = 'الدفع نقداً في القاعة';
    } else if (paymentMethod === 'card') {
        paymentText = 'الدفع بالبطاقة الائتمانية';
    } else if (paymentMethod === 'mobile') {
        paymentText = 'الدفع عبر المحفظة الإلكترونية';
    }
    
    showToast(`شكراً ${name}! تم استلام حجزك بنجاح`, 'success');
    document.getElementById('bookingForm').reset();
    resetPaymentMethods();
}

// نظام الدفع
function initPaymentMethods() {
    const paymentMethods = document.querySelectorAll('.payment-method');
    
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            // إزالة النشاط من جميع الطرق
            paymentMethods.forEach(m => m.classList.remove('active'));
            // إخفاء جميع تفاصيل الدفع
            document.querySelectorAll('.payment-details').forEach(detail => {
                detail.classList.remove('active');
            });
            
            // تفعيل الطريقة المحددة
            this.classList.add('active');
            const methodType = this.getAttribute('data-method');
            
            // إظهار تفاصيل الدفع المناسبة
            if (methodType === 'card') {
                document.getElementById('cardDetails').classList.add('active');
            } else if (methodType === 'mobile') {
                document.getElementById('mobileDetails').classList.add('active');
            }
        });
    });
}

function resetPaymentMethods() {
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.payment-details').forEach(detail => {
        detail.classList.remove('active');
    });
}

// نموذج الاتصال
function handleContactSubmit(e) {
    e.preventDefault();
    showToast('شكراً لك! تم إرسال رسالتك بنجاح وسنقوم بالرد عليك في أقرب وقت.', 'success');
    document.getElementById('contactForm').reset();
}

// تأثيرات الظهور عند التمرير
const fadeInOnScroll = () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// شريط التقدم
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
});

// زر العودة للأعلى
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// تحديد تاريخ اليوم كحد أدنى لتاريخ الحجز
const today = new Date().toISOString().split('T')[0];
setTimeout(() => {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.setAttribute('min', today);
    }
}, 100);

// نظام Toast Notifications
function showToast(message, type = 'info') {
    const toastContainer = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    
    toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // إظهار الـ toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // إخفاء الـ toast بعد 5 ثوان
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
}

// Lightbox للمعرض
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => item.querySelector('img').src);
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            currentIndex = index;
        });
    });
    
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    lightboxPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    });
    
    lightboxNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    });
    
    // إغلاق Lightbox بالضغط على الخلفية
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

// حساب التكلفة التلقائي
function calculateTotalCost() {
    setTimeout(() => {
        const packageSelect = document.getElementById('package');
        const guestsInput = document.getElementById('guests');
        if (!packageSelect || !guestsInput) return;

        const totalDisplay = document.createElement('div');
        totalDisplay.className = 'total-cost';
        totalDisplay.style.marginTop = '15px';
        
        packageSelect.parentNode.appendChild(totalDisplay);
        
        function updateTotal() {
            const packagePrice = {
                'silver': 500000,
                'gold': 1000000,
                'diamond': 2000000
            };
            
            const selectedPackage = packageSelect.value;
            const guests = parseInt(guestsInput.value) || 0;
            
            if (selectedPackage && guests > 0) {
                let total = packagePrice[selectedPackage];
                
                // إضافة تكلفة إضافية للضيوف الزائدين
                if (guests > 150 && selectedPackage === 'silver') {
                    total += (guests - 150) * 5000;
                } else if (guests > 300 && selectedPackage === 'gold') {
                    total += (guests - 300) * 4000;
                } else if (guests > 500 && selectedPackage === 'diamond') {
                    total += (guests - 500) * 3000;
                }
                
                totalDisplay.textContent = `التكلفة الإجمالية: ${total.toLocaleString()} ريال يمني`;
            } else {
                totalDisplay.textContent = '';
            }
        }
        
        packageSelect.addEventListener('change', updateTotal);
        guestsInput.addEventListener('input', updateTotal);
    }, 500);
}

// تحميل الصور مع مؤشر
function loadImagesWithIndicator() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        const parent = img.parentElement;
        
        img.addEventListener('load', () => {
            if (parent.classList.contains('gallery-item') || 
                parent.classList.contains('service-img') || 
                parent.classList.contains('about-image') ||
                parent.classList.contains('blog-img')) {
                parent.classList.add('loaded');
            }
        });
        
        // إذا كانت الصورة محملة مسبقاً
        if (img.complete) {
            if (parent.classList.contains('gallery-item') || 
                parent.classList.contains('service-img') || 
                parent.classList.contains('about-image') ||
                parent.classList.contains('blog-img')) {
                parent.classList.add('loaded');
            }
        }
    });
}

function initializePage() {
    // إعادة تهيئة جميع التأثيرات والنماذج عند تغيير الصفحة
    fadeInOnScroll();
    
    // إعادة ربط الأحداث للروابط في الصفحة الجديدة
    document.querySelectorAll('.btn[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });
}