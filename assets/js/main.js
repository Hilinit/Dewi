/**
* Template Name: Dewi
* Template URL: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

//Featured Srvices  
class Services {
  constructor(img,title,text,icon){
    this.img = img,
    this.title = title,
    this.text = text
    this.icon = icon
  }
}
const service = [
  new Services("assets/img/services-1.jpg","Nesciunt Mete","Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.","bi bi-activity"),

  new Services("assets/img/services-2.jpg","Eosle Commodi","Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.","bi bi-broadcast"),

  new Services("assets/img/services-3.jpg","Ledo Markt","Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.","bi bi-easel")
];

const Cards = document.getElementById("CardS")
let HTML = ''
for(const key of service){
    HTML += `
        <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
        <div class="service-item">
          <div class="img">
            <img src="${key.img}" class="img-fluid" alt="">
          </div>
          <div class="details position-relative">
            <div class="icon">
              <i class="${key.icon}"></i>
            </div>
            <a href="service-details.html" class="stretched-link">
            <h3>${key.title}</h3>
            </a>
            <p>${key.text}</p>
          </div>
        </div>
      </div><!-- End Service Item -->
  `
}
Cards.innerHTML = HTML

class Portfolios {
   constructor(sekil,Apps,texts,sekil1,portfo){
        this.sekil = sekil,
        this.Apps = Apps,
        this.texts = texts,
        this.sekil1 = sekil1,
        this.portfo = portfo
   }
}
const portfolio =[
  new Portfolios("assets/img/portfolio/app-1.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/app-1.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/product-1.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/product-1.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/branding-1.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/branding-1.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/books-1.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/books-1.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/app-2.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/app-2.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/product-2.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/product-2.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/branding-2.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/branding-2.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/books-2.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/books-2.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/app-3.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/app-3.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/product-3.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/product-3.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/branding-3.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/branding-3.jpg","portfolio-details.html"),
  new Portfolios("assets/img/portfolio/books-3.jpg","App","Lorem ipsum, dolor sit amet consectetur","assets/img/portfolio/books-3.jpg","portfolio-details.html")
];
let x = 1
let html = ''
const card = document.getElementById("cardss")
for(const key of portfolio){
            html +=`
            <div class="col-lg-4 col-md-6 portfolio-item  isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img src="${key.sekil}" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>${key.Apps} ${x++}</h4>
                  <p>${key.texts}</p>
                  <a href="${key.sekil1}" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="${key.portfo}" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->
            `
}
card.innerHTML = html