const headerMenu = () => {
  const headerDiv = document.querySelector(".header-menu");
  if (headerDiv) {
    headerDiv.innerHTML = ` <div class="preloader">
      <div class="loading-container">
        <div class="loading"></div>
        <div id="loading-icon">
          <img src="assets/logos/Yosh Law logo.png" alt="" />
        </div>
      </div>
    </div>

    <div class="paginacontainer">
      <div class="progress-wrap">
        <svg
          class="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
    
     <header>
      <div
        class="header-area homepage1 header header-sticky d-none d-lg-block"
        id="header"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-elements">
                <div class="site-logo">
                  <a href="/"
                    ><img src="assets/logos/Yosh Law word logo.png" alt=""
                  /></a>
                </div>
                <div class="main-menu">
                  <ul>
                    <li>
                      <a href="#"
                        >Speakers <i class="fa-solid fa-angle-down"></i
                      ></a>
                      <ul class="dropdown-padding">
                        <li><a href="speakers.html">Speakers</a></li>
                        <li>
                          <a href="speakers-single.html">Speakers Details</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#"
                        >Schedule <i class="fa-solid fa-angle-down"></i
                      ></a>
                      <ul class="dropdown-padding">
                        <li><a href="event.html">Our Event</a></li>
                        <li>
                          <a href="event-schedule.html">Event Schedule</a>
                        </li>
                        <li><a href="event-single.html">Event Details</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#"
                        >Blogs <i class="fa-solid fa-angle-down"></i
                      ></a>
                      <ul class="dropdown-padding">
                        <li><a href="blog.html">Our Blog</a></li>
                        <li><a href="blog-single.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#"
                        >Pages <i class="fa-solid fa-angle-down"></i
                      ></a>
                      <ul class="dropdown-padding">
                        <li><a href="memories.html">Our Memories</a></li>
                        <li><a href="pricing-plan.html">Pricing Plan</a></li>
                        <li><a href="faq.html">FAQ,s</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="btn-area">
                  <ul>
                    <li>
                      <div class="custom-select">
                        <div class="select-selected">
                          <img src="assets/flags/en.png" alt="en" /> English
                        </div>
                        <div class="select-items select-hide">
                          <div data-value="uz">
                            <img src="assets/flags/uz.png" alt="uz" />
                            Uzbek
                          </div>
                          <div data-value="ru">
                            <img src="assets/flags/ru.png" alt="ru" />
                            Russian
                          </div>
                          <div data-value="en">
                            <img src="assets/flags/en.png" alt="en" />
                            English
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/share/1BFJatGR6C/?mibextid=wwXIfr" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/yoshlaw.uz" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="https://t.me/yoshlaw" target="_blank"><i class="fa-brands fa-telegram"></i></a>
                    </li>
                    <li>
                      <a href="mailto:yoshlaw.uz@gmail.com" target="_blank" class="m-0"
                        ><i class="fa-regular fa-envelope"></i></a>
                    </li>
                  </ul>
                </div>

                <div class="header-search-form-wrapper">
                  <div class="tx-search-close tx-close">
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                  <div class="header-search-container">
                    <form role="search" class="search-form">
                      <input
                        type="search"
                        class="search-field"
                        placeholder="Search …"
                        value=""
                        name="s"
                      />
                      <button type="submit" class="search-submit">
                        <img src="assets/img/icons/search1.svg" alt="" />
                      </button>
                    </form>
                  </div>
                </div>
                <div class="body-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="mobile-header mobile-haeder1 d-block d-lg-none">
      <div class="container-fluid">
        <div class="col-12">
          <div class="mobile-header-elements">
            <div class="mobile-logo">
              <a href="/"
                ><img src="assets/logos/Yosh Law word logo.png" alt=""
              /></a>
            </div>
            <div class="mobile-nav-icon dots-menu">
              <i class="fa-solid fa-bars-staggered"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-sidebar mobile-sidebar1">
      <div class="logosicon-area">
        <div class="logos">
          <img
            src="assets/logos/Yosh Law logo.png"
            alt=""
            style="width: 50px"
          />
        </div>
        <div class="menu-close">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="mobile-nav mobile-nav1">
        <ul class="mobile-nav-list nav-list1">
          <li>
            <a href="features.html">Speakers</a>
            <ul class="sub-menu">
              <li><a href="speakers.html">Speakers</a></li>
              <li><a href="speakers-single.html">Speakers Details</a></li>
            </ul>
          </li>
          <li>
            <a href="features.html">Schedule</a>
            <ul class="sub-menu">
              <li><a href="event.html">Our Event</a></li>
              <li><a href="event-schedule.html">Event Schedule</a></li>
              <li><a href="event-single.html">Event Details</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Blogs</a>
            <ul class="sub-menu">
              <li><a href="blog.html">Our Blog</a></li>
              <li><a href="blog-single.html">Blog Details</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul class="sub-menu">
              <li><a href="memories.html">Our Memories</a></li>
              <li><a href="pricing-plan.html">Pricing Plan</a></li>
              <li><a href="faq.html">FAQ,s</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <div class="allmobilesection">
          <a href="contact.html" class="vl-btn1">Contact Now</a>
          <div class="single-footer">
            <h3>Contact Info</h3>
            <div class="footer1-contact-info">
              <div class="contact-info-single">
                <div class="contact-info-icon">
                  <span><i class="fa-solid fa-phone-volume"></i></span>
                </div>
                <div class="contact-info-text">
                  <a href="tel:+3(924)4596512">+3(924)4596512</a>
                </div>
              </div>
              <div class="contact-info-single">
                <div class="contact-info-icon">
                  <span><i class="fa-solid fa-envelope"></i></span>
                </div>
                <div class="contact-info-text">
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
              </div>
              <div class="single-footer">
                <h3>Our Location</h3>
                <div class="contact-info-single">
                  <div class="contact-info-icon">
                    <span><i class="fa-solid fa-location-dot"></i></span>
                  </div>
                  <div class="contact-info-text">
                    <a href="mailto:info@example.com"
                      >55 East Birchwood Ave.Brooklyn, <br />
                      New York 11201,United States</a
                    >
                  </div>
                </div>
              </div>
              <div class="single-footer">
                <h3>Social Links</h3>
                <div class="social-links-mobile-menu">
                  <ul>
                    <li>
                      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    `;
  }
};

const footerMenu = () => {
  const footerDiv = document.querySelector(".footer-menu");
  if (footerDiv) {
    footerDiv.innerHTML = `
        <div class="footer1-sertion-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-logo-area">
              <img
                src="assets/logos/Yosh Law word logo.png"
                alt=""
                style="width: 200px"
              />
              <div class="space16"></div>
              <p
                data-i18n="JOIN MINISTRY OF JUSTICE the First International Youth Legal Forum in Tashkent! Calling all students worldwide!"
              ></p>
              <div class="space24"></div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/share/1BFJatGR6C/?mibextid=wwXIfr"
                    target="_blank"
                    ><i class="fa-brands fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/yoshlaw.uz" target="_blank"
                    ><i class="fa-brands fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="https://t.me/yoshlaw" target="_blank"
                    ><i class="fa-brands fa-telegram"></i
                  ></a>
                </li>
                <li>
                  <a href="mailto:yoshlaw.uz@gmail.com" class="m-0"
                    ><i class="fa-regular fa-envelope"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="link-content">
              <h3 data-i18n="Links"></h3>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="blog.html">Our Blogs</a></li>
                <li><a href="event.html">Event Listing</a></li>
                <li><a href="pricing-plan.html">Pricing Plan</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="link-content2">
              <h3 data-i18n="Contact Us"></h3>
              <ul>
                <li>
                  <a href="tel:+998936974222"
                    ><img src="assets/img/icons/phn1.svg" alt="" />+998 93 697
                    42 22</a
                  >
                </li>
                <li>
                  <a href="tel:+998949835444"
                    ><img src="assets/img/icons/phn1.svg" alt="" />+998 94 983
                    54 44</a
                  >
                </li>
                <li>
                  <a
                    href="https://yandex.uz/maps/10335/tashkent/search/Toshkent%20davlat%20yuridik%20universiteti/?ll=69.281417%2C41.312007&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJTl5kAn6N3z8RHVpkO99Pzz8iBgABAgMEBSgKOABAnp8GSAFqAnV6nQHNzMw9oAEAqAEAvQEXh%2F4wwgESq622v%2FwC8Z2OjtYF49rTtJgBggIkVG9zaGtlbnQgZGF2bGF0IHl1cmlkaWsgdW5pdmVyc2l0ZXRpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.281417%2C41.312007&sspn=0.015407%2C0.007644&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=17"
                    target="_blank"
                    ><img src="assets/img/icons/location1.svg" alt="" />Toshkent
                    davlat yuridik universiteti</a
                  >
                </li>
                <li>
                  <a href="mailto:yoshlaw.uz@gmail.com"
                    ><img
                      src="assets/img/icons/mail1.svg"
                      alt=""
                    />yoshlaw.uz@gmail.com</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="footer-social-box">
              <h3 data-i18n="Gallery"></h3>
              <div class="space12"></div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-4">
                  <div class="img1">
                    <img
                      src="assets/images/e88d35ee-dad0-46bb-88f5-0562c4f36340.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-4">
                  <div class="img1">
                    <img
                      src="assets/images/photo_2025-03-28_11-41-24.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-4">
                  <div class="img1">
                    <img
                      src="assets/images/35494e4e-ef3d-4596-95cc-7d07bb7d8ea6.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-4">
                  <div class="img1">
                    <img
                      src="assets/images/481c7e22-0770-4ae5-bfab-a856dd92ec9f.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-4">
                  <div class="img1">
                    <img
                      src="assets/images/46492acf-1dbe-4acc-9c85-5ba5295f58dd.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-4">
                  <div class="img1">
                    <img
                      src="assets/images/82b90338-c366-4522-9e5b-ccb020724763.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space60"></div>
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright">
              <p>&copy; Copyright 2025 -Eventify. All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
  }
};

const downloadFiles = () => {
  document.getElementById("downloadPdf").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/file/ru/CUDC.pdf";
    link.download = "Loyiha qoidalari.pdf";
    link.target = "_blank";
    link.click();
  });

  document.getElementById("downloadPdf2").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/file/uz/Yoshlar uchun muhokama savollari.docx";
    link.download = "Yoshlar uchun muhokama savollari uz.docx";
    link.target = "_blank";
    link.click();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const defaultLang = localStorage.getItem("lang") || "uz";
  let currentLang = localStorage.getItem("lang") || "uz";

  document.getElementById("SignUp").addEventListener("click", () => {
    let url = "";
    if (currentLang === "uz") {
      url =
        "https://docs.google.com/forms/d/e/1FAIpQLSdDXDPRSTeUpnly-yEzUZIMSZtR3j26HdiqOSfCaH-VSm33ug/viewform";
    } else if (currentLang === "ru") {
      url =
        "https://docs.google.com/forms/d/e/1FAIpQLSc7PAREua9RkeQyVwkxRHyblMs-2uVa3TIuDyp4LOBIxmg8sQ/viewform";
    } else {
      url =
        "https://docs.google.com/forms/d/e/1FAIpQLSfr8C41inYu6JO5t2L8c_9oY7pNXJqxhGyg3kPEwjubUhFVZQ/viewform";
    }
    window.open(url, "_blank");
  });

  async function loadTranslations(lang) {
    currentLang = lang;
    if (lang === "en") return translate({}, lang);

    try {
      const res = await fetch(`assets/locales/${lang}/translation.json`);
      const text = await res.text();
      const dict = JSON.parse(text);
      translate(dict, lang);
    } catch (e) {
      console.error("Xato:", e.message);
    }
  }

  function translate(dict, lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "en") {
        el.textContent = key;
      } else if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  function setSelectedLangUI(lang) {
    const selected = document.querySelector(".select-selected");
    const option = document.querySelector(
      `.select-items div[data-value="${lang}"]`
    );
    if (selected && option) {
      selected.innerHTML = "";
      const img = option.querySelector("img")?.cloneNode(true);
      if (img) selected.appendChild(img);
      selected.appendChild(
        document.createTextNode(" " + option.textContent.trim())
      );
      selected.dataset.value = lang;
    }
  }

  function setupLangSelect() {
    const selector = document.querySelector(".custom-select");
    if (!selector) return;

    const selected = selector.querySelector(".select-selected");
    const items = selector.querySelector(".select-items");

    selector
      .querySelectorAll(".select-items div[data-value]")
      .forEach((option) => {
        option.addEventListener("click", () => {
          const lang = option.dataset.value;
          localStorage.setItem("lang", lang);
          loadTranslations(lang);
          setSelectedLangUI(lang);
          items.classList.add("select-hide");
        });
      });

    selected?.addEventListener("click", (e) => {
      e.stopPropagation();
      items.classList.toggle("select-hide");
    });

    document.addEventListener("click", (e) => {
      if (!selector.contains(e.target)) {
        items.classList.add("select-hide");
      }
    });
  }

  setSelectedLangUI(defaultLang);
  loadTranslations(defaultLang);
  setupLangSelect();
});

headerMenu();
footerMenu();
downloadFiles();
