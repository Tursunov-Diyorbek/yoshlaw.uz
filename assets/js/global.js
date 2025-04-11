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
                        ><span data-i18n="Speakers"></span> <i class="fa-solid fa-angle-down"></i
                      ></a>
                      <ul class="dropdown-padding">
                        <li><a href="speakers1.html" data-i18n="Prof.Dr. Islambek Rustambekov"></a></li>
                        <li><a href="speakers2.html" data-i18n="Professor Urfan Khaliq"></a></li>
                        <li><a href="speakers3.html" data-i18n="Professor Michele DeStefano"></a></li>
                        <li><a href="speakers4.html" data-i18n="Mr. Mitchell E. Kowalski"></a></li>
                      </ul>
                    </li>

                    <li>
                      <a style="cursor: pointer"
                        > <span data-i18n="Programs"></span> <i class="fa-solid fa-angle-down"></i
                      ></a>
                      <ul class="dropdown-padding">
                        <li><a href="first-tashkent.html" data-i18n="1st Tashkent International Mediation Competition"></a></li>
                        <li>
                          <a href="nations-festival.html" data-i18n="Nations festival"></a>
                        </li>
                        <li><a href="panel-sessions.html" data-i18n="Panel Sessions"></a></li>
                        <li><a href="debate-competitions.html" data-i18n="Model of parliamentary debates (CUDC)"></a></li>
                      </ul>
                    </li>
                    <li>
                      <a style="cursor: pointer" href="faq.html">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div class="btn-area">
                  <ul>
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
        <a href="/">
          <img
            src="assets/logos/Yosh Law logo.png"
            alt=""
            style="width: 50px"
          />
          </a>
        </div>
        <div class="menu-close">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="mobile-nav mobile-nav1">
        <ul class="mobile-nav-list nav-list1">
          <li>
            <a data-i18n="Speakers"></a>
            <ul class="sub-menu">
              <li><a href="speakers1.html" data-i18n="Prof.Dr. Islambek Rustambekov"></a></li>
              <li><a href="speakers2.html" data-i18n="Professor Urfan Khaliq"></a></li>
              <li><a href="speakers3.html" data-i18n="Professor Michele DeStefano"></a></li>
              <li><a href="speakers4.html" data-i18n="Mr. Mitchell E. Kowalski"></a></li>
            </ul>
          </li>
          <li>
            <a data-i18n="Programs"></a>
            <ul class="sub-menu">
             <li><a href="first-tashkent.html" data-i18n="1st Tashkent International Mediation Competition"></a></li>
                        <li>
                          <a href="nations-festival.html" data-i18n="Nations festival"></a>
                        </li>
                        <li><a href="panel-sessions.html" data-i18n="Panel Sessions"></a></li>
                        <li><a href="debate-competitions.html" data-i18n="Model of parliamentary debates (CUDC)"></a></li>
            </ul>
          </li>
          <li>
            <a style="cursor: pointer" href="faq.html">FAQ</a>
          </li>
        </ul>
        <div class="allmobilesection">
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
          <div class="single-footer">
            <h3 data-i18n="Contact Us"></h3>
            <div class="footer1-contact-info">
              <div class="contact-info-single">
                <div class="contact-info-icon">
                  <span><i class="fa-solid fa-phone-volume"></i></span>
                </div>
                <div class="contact-info-text">
                  <a href="tel:+998936974222">+998 93 697 42 22</a>
                </div>
              </div>
              <div class="contact-info-single">
                <div class="contact-info-icon">
                  <span><i class="fa-solid fa-phone-volume"></i></span>
                </div>
                <div class="contact-info-text">
                  <a href="tel:+998949835444">+998 94 983 54 44</a>
                </div>
              </div>
              <div class="contact-info-single">
                <div class="contact-info-icon">
                  <span><i class="fa-solid fa-envelope"></i></span>
                </div>
                <div class="contact-info-text">
                  <a href="mailto:yoshlaw.uz@gmail.com"
                    >yoshlaw.uz@gmail.com</a
                  >
                </div>
              </div>
              <div class="single-footer">
                <div class="contact-info-single">
                  <div class="contact-info-icon">
                    <span><i class="fa-solid fa-location-dot"></i></span>
                  </div>
                  <div class="contact-info-text">
                    <a
                    href="https://yandex.uz/maps/10335/tashkent/search/Toshkent%20davlat%20yuridik%20universiteti/?ll=69.281417%2C41.312007&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJTl5kAn6N3z8RHVpkO99Pzz8iBgABAgMEBSgKOABAnp8GSAFqAnV6nQHNzMw9oAEAqAEAvQEXh%2F4wwgESq622v%2FwC8Z2OjtYF49rTtJgBggIkVG9zaGtlbnQgZGF2bGF0IHl1cmlkaWsgdW5pdmVyc2l0ZXRpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.281417%2C41.312007&sspn=0.015407%2C0.007644&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=17"
                    target="_blank"
                    data-i18n="Tashkent State University of Law"
                    ></a
                  >
                  </div>
                </div>
              </div>
              <div class="single-footer">
                <div class="social-links-mobile-menu">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/share/1BFJatGR6C/?mibextid=wwXIfr" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/yoshlaw.uz" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="https://t.me/yoshlaw" target="_blank"><i class="fa-brands fa-telegram"></i
                  ></a>
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
                    ><img src="assets/img/icons/location1.svg" alt="" /><span data-i18n="Tashkent State University of Law"></span></a
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

const language = () => {
  const selects = document.querySelectorAll(".custom-select");
  const savedLang = localStorage.getItem("lang") || "uz";
  let currentLang = savedLang;

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

  document.querySelector(".downloadPdf4")?.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href =
      "assets/file/en/2025 Tashkent International Mediation Competition.docx";
    link.download = "2025 Tashkent International Mediation Competition.docx";
    link.target = "_blank";
    link.click();
  });

  document.querySelector(".downloadPdf3")?.addEventListener("click", () => {
    const link = document.createElement("a");
    if (currentLang === "uz") {
      link.href = "assets/file/uz/new2025-миллатлар фестивали.docx";
      link.download = "Millatlar festivali.docx";
    } else if (currentLang === "ru") {
      link.href = "assets/file/ru/new2025-миллатлар фестивали (1).docx";
      link.download = "Фестиваль наций.docx";
    } else {
      link.href = "assets/file/en/Фестиваль.docx";
      link.download = "Nations festival.docx";
    }
    link.target = "_blank";
    link.click();
  });

  document.querySelector(".downloadPdf2")?.addEventListener("click", () => {
    const link = document.createElement("a");
    if (currentLang === "uz") {
      link.href = "assets/file/uz/Yoshlar uchun muhokama savollari.docx";
      link.download = "Yoshlar uchun muhokama savollari uz.docx";
    } else if (currentLang === "ru") {
      link.href = "assets/file/ru/Talabalar uchun muhokama savollar ru.docx";
      link.download = "Вопросы для обсуждения для молодежи.docx";
    } else {
      link.href = "assets/file/en/Talabalar uchun muhokama savollari en.docx";
      link.download = "Discussion questions for young people.docx";
    }
    link.target = "_blank";
    link.click();
  });

  document.querySelector(".downloadPdf")?.addEventListener("click", () => {
    const link = document.createElement("a");
    if (currentLang === "uz") {
      link.href = "assets/file/uz/CUDC qoidalari.docx";
      link.download = "Loyiha qoidalari.docx";
    } else if (currentLang === "ru") {
      link.href = "assets/file/ru/CUDC.pdf";
      link.download = "Правила проекта.pdf";
    } else {
      link.href = "assets/file/en/CUDC.ru.en.pdf_20250402_232635_0000.pdf";
      link.download = "Project rules.pdf";
    }
    link.target = "_blank";
    link.click();
  });

  document.querySelector(".SignUp")?.addEventListener("click", () => {
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

  document.querySelector(".FirstTashkent")?.addEventListener("click", () => {
    let url = "";
    if (currentLang === "uz" || currentLang === "ru") {
      url =
        "https://docs.google.com/forms/d/e/1FAIpQLSczvE3mjePtcbRXug0qMQfSydBB1HQD7CZ9GcbqKwGg2Dp7rw/viewform?usp=sharing";
    } else {
      url =
        "https://docs.google.com/forms/u/0/d/1RiWdj1tyMfjhs1sd5SAEDy-3SFyoOd6ipvV3wha8hDY/viewform?pli=1&usp=sharing_eil_se_dm&ts=67ef39b4&pli=1&edit_requested=true";
    }
    window.open(url, "_blank");
  });

  selects.forEach((select) => {
    const selected = select.querySelector(".select-selected");
    const items = select.querySelector(".select-items");
    const options = items.querySelectorAll("div[data-value]");

    options.forEach((opt) => {
      if (opt.getAttribute("data-value") === savedLang) {
        const img = opt.querySelector("img")?.cloneNode(true);
        const text = opt.textContent.trim();
        selected.innerHTML = "";
        if (img) selected.appendChild(img);
        selected.innerHTML += " " + text;
        selected.setAttribute("data-value", savedLang);
      }
    });

    selected?.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelects(this);
      items.classList.toggle("select-hide");
      selected.classList.toggle("select-arrow-active");
    });

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const img = this.querySelector("img")?.cloneNode(true);
        const text = this.textContent.trim();
        const value = this.getAttribute("data-value");

        selected.innerHTML = "";
        if (img) selected.appendChild(img);
        selected.innerHTML += " " + text;
        selected.setAttribute("data-value", value);

        localStorage.setItem("lang", value);
        loadTranslations(value);
        syncSelects(value);

        items.classList.add("select-hide");
        selected.classList.remove("select-arrow-active");
      });
    });
  });

  function syncSelects(value) {
    selects.forEach((select) => {
      const selected = select.querySelector(".select-selected");
      const options = select.querySelectorAll("div[data-value]");
      options.forEach((opt) => {
        if (opt.getAttribute("data-value") === value) {
          const img = opt.querySelector("img")?.cloneNode(true);
          const text = opt.textContent.trim();
          selected.innerHTML = "";
          if (img) selected.appendChild(img);
          selected.innerHTML += " " + text;
          selected.setAttribute("data-value", value);
        }
      });
    });
  }

  function closeAllSelects() {
    const allItems = document.querySelectorAll(".select-items");
    const allSelected = document.querySelectorAll(".select-selected");

    allItems.forEach((el) => el.classList.add("select-hide"));
    allSelected.forEach((el) => el.classList.remove("select-arrow-active"));
  }

  document.addEventListener("click", closeAllSelects);
  loadTranslations(savedLang);
};

headerMenu();
footerMenu();
language();
