// --- Publications Database ---
const publications = [
  {
    type: "journal",
    title: "Analysing Brownian motion and thermophoretic effects on unsteady Maxwell MHD radiative hybrid nanofluid flow over a permeable stretching surface, with generalised Fick’s and Fourier’s laws",
    authors: "V.J. Prajapati and R. Meher",
    journal: "Journal of the Brazilian Society of Mechanical Sciences and Engineering",
    details: "Vol. 48, No. 3, 2026",
    publisher: "Springer",
    tags: ["SCIE IF=2.8", "Q2", "Springer"],
    categoryClass: "scie"
  },
  {
    type: "journal",
    title: "Shear thinning and shear thickening effects in radiative MHD flow of Carreau hybrid nanofluid with hall current and heat source/sink",
    authors: "H. Jafari, V.J. Prajapati, R. Meher and O. Nikan",
    journal: "Alexandria Engineering Journal",
    details: "Vol. 130, p. 927-943, 2026",
    publisher: "Elsevier",
    tags: ["SCIE IF=6.8", "Q1", "Elsevier"],
    categoryClass: "scie"
  },
  {
    type: "journal",
    title: "Analysing Soret, Dufour, and activation energy effects on heat and mass transfer thin film flow of an MHD Williamson ternary hybrid nanofluid over a non-Darcy porous stretching surface",
    authors: "V.J. Prajapati and R. Meher",
    journal: "The European Physical Journal Plus",
    details: "Vol. 140, No. 177, 2025",
    publisher: "Springer",
    tags: ["SCIE IF=2.8", "Q2", "Springer"],
    categoryClass: "scie"
  },
  {
    type: "journal",
    title: "Study on tangent hyperbolic thermal fluid flow over a porous stretching sheet with magnetic field and the effect of suction/injection",
    authors: "V.J. Prajapati and R. Meher",
    journal: "International Journal of Ambient Energy",
    details: "Vol. 45, No. 1, p. 2406909, 2024",
    publisher: "Taylor & Francis",
    tags: ["Scopus", "Q1", "Taylor & Francis"],
    categoryClass: "scopus"
  },
  {
    type: "journal",
    title: "Analysis of mhd tangent hyperbolic hybrid nanofluid flow with different base fluids over a porous stretched sheet",
    authors: "V.J. Prajapati and R. Meher",
    journal: "Journal of Taibah University for Science",
    details: "Vol. 18, No. 1, p. 2300851, 2024",
    publisher: "Taylor & Francis",
    tags: ["SCIE IF=2.8", "Q2", "Taylor & Francis"],
    categoryClass: "scie"
  },
  {
    type: "journal",
    title: "A novel hybrid approach to solve non-linear fractional partial differential equations via new integral transform",
    authors: "V.J. Prajapati and R. Meher",
    journal: "An International Journal Linear and Nonlinear Analysis",
    details: "Vol. 9, No. 3, pp. 231–243, 2024",
    publisher: "Yokohama",
    tags: ["International Journal", "Yokohama"],
    categoryClass: "peer"
  },
  {
    type: "journal",
    title: "A robust analytical approach to the generalized burgers–fisher equation with fractional derivatives including singular and non-singular kernels",
    authors: "V.J. Prajapati and R. Meher",
    journal: "Journal of Ocean Engineering and Science",
    details: "Vol. 7, 2022",
    publisher: "Elsevier",
    tags: ["SCIE IF=11.8", "Q1", "Elsevier"],
    categoryClass: "scie"
  },
  {
    type: "journal",
    title: "Solution of time-fractional rosenau-hyman model using a robust homotopy approach via formable transform",
    authors: "V.J. Prajapati and R. Meher",
    journal: "Iranian Journal of Science and Technology, Transactions A: Science",
    details: "Vol. 46, No. 5, pp. 1431–1444, 2022",
    publisher: "Springer",
    tags: ["SCIE IF=1.7", "Q2", "Springer"],
    categoryClass: "scie"
  },
  {
    type: "conference",
    title: "Analysis of a fractional-order model for diabetes mellitus incorporating education and media awareness campaigns using the two-step Newtonian polynomial approach",
    authors: "V.J. Prajapati, L. Verma and R. Meher",
    journal: "95th Annual Meeting of the International Association of Applied Mathematics and Mechanics (GAMM)",
    details: "Proceedings in Applied Mathematics and Mechanics (Wiley), Vol. 26, No. 2, 2026",
    publisher: "Wiley",
    tags: ["Conference Proceeding", "GAMM"],
    categoryClass: "conference"
  },
  {
    type: "conference",
    title: "Effect of magnetic field on tangent hyperbolic nanofluid flow over a porous stretching sheet with varying thermal conductivity",
    authors: "V.J. Prajapati and R. Meher",
    journal: "The 2nd International Conference on Recent Advances in Fluid Mechanics and Nanoelectronics (ICRAFMN-2024)",
    details: "Interactions (Springer), Vol. 246, No. 52, 2025",
    publisher: "Springer",
    tags: ["Conference Proceeding", "ICRAFMN"],
    categoryClass: "conference"
  },
  {
    type: "conference",
    title: "An analytical investigation of time-fractional Sharma–Tasso–Olever equation arising in physical sciences",
    authors: "V.J. Prajapati and R. Meher",
    journal: "International Conference on Fractional Differentiation and Its Applications (ICFDA)",
    details: "IEEE, pp. 1–6, 2023",
    publisher: "IEEE",
    tags: ["Conference Proceeding", "ICFDA", "IEEE"],
    categoryClass: "conference"
  },
  {
    type: "conference",
    title: "A robust analytic approach to solve non-linear fractional partial differential equations using fractional complex transform",
    authors: "V.J. Prajapati and R. Meher",
    journal: "International Conference on Mathematics and Computing",
    details: "Springer, pp. 385–398, 2023",
    publisher: "Springer",
    tags: ["Conference Proceeding", "ICMC"],
    categoryClass: "conference"
  },
  {
    type: "chapter",
    title: "A robust analytical method to solve IVPs and BVPs for systems of linear and nonlinear ordinary differential equations",
    authors: "V.J. Prajapati and R. Meher",
    journal: "Continuous and Discrete Dynamics: Theory and Applications",
    details: "Continuous and Discrete Dynamics: Theory and Applications, Springer, 2026",
    publisher: "Springer",
    tags: ["Book Chapter", "Scopus", "Accepted"],
    categoryClass: "scopus"
  },
  {
    type: "chapter",
    title: "Some invariant solutions of (3+1)-dimensional Zakharov-Kuznetsov-Burgers equation",
    authors: "V.J. Prajapati and R. Meher",
    journal: "Advanced Analytical and Numerical Methods with their Applications to Industrial Problems",
    details: "Central West Publishing, Australia, 2026",
    publisher: "Central West Publishing",
    tags: ["Book Chapter"],
    categoryClass: "chapter"
  }
];

// --- Galleries Database ---
const galleryItems = [
  {
    title: "On the day of Defence at SVNIT, Surat",
    description: "June 23, 2026",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUBxkFb-F0Dz4MW2D8PAsudtNMfLtlnEiIsJ9PE2befJ09KcxiSYpWVEqrAkrcEvhBLZ0jseAIqqSLqqmpYJBdcCNqOBXxl58zk9XDUWFhMQARgcDREk6bPai6zKGHpM7t5atioih5QP0zNZIguScT_uGFByo2n2uzdFlR2DIeszFrNjANE-4nB3hj7VtFU=w16383"
  },
  {
    title: "With my Ph.D. Supervisor Dr. Ramakanta Meher",
    description: "Doctoral Guidance, SVNIT Surat",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUBJswE6sZr_Cf2b4k5eG6soet2S0kR-ELgJXLpI7-MvareMpZgy9MSc7LkRNFXATxW91hVyVbk_mT3kUig5QkXt6Tc2FfEo8AfhHixARRZxpT8qYWs95LcCuDqVKLyryuTI_lw2U6Hp64jMlYeKNqGikB6L-9ek5ttXzA3iFVgHgzxl8modmE--iWvsKOM=w16383"
  },
  {
    title: "With our Research Group",
    description: "Department of Mathematics, SVNIT Surat",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUAjoU-VYO-IipwPKYyR0P_MFmy05Bx_f9_yNN-ivoR64_vT3tZj-O7obkHhC1h84j1JFH3b9T60ta1wBZJc4qpjFAJRuo7jiQoWqWc7OVfQy6UvJG1Zgvm30TnASnxumX0lWK3TzsxK4-QU_A3XSWc23aq7YFOXy1B2VxdoqPCSOT7FmUV7vGfaSxp9hNE=w16383"
  },
  {
    title: "Attended 2025 CMS Winter Meeting, Toronto, Canada",
    description: "December 05-08, 2025",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUBSKHRSOHo0gAqxFsZtyMPKRhz8g9vjogvs3sTT3bkZJuxFaDxHV-CHymaiAAM2trilMivfeV34BpgzHZHDUxjhuSTVgH3d7aG6SVZwdEmIo-a_FzAgUbjqPR36FvtLEVPoO0VUlkzZO4DUOa_MoWzrQ0jyBTjh06jZrHHisA9KwofcfdjkylZxgHW323E=w16383"
  },
  {
    title: "Attended 2025 CMS Winter Meeting, Toronto, Canada",
    description: "Conference Paper presentation sessions",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUBsKs-Ikqedicn3--qhgFqzmnUQiNrZEI2T0-DU2PX8vHzIerzMFeDHufZEsjp31LsIJQ-T07ColN-8KviSY8BjNm34ZHKCvC7umc0Ibd7V86Av0x7CtQ_CwGwlPqq-ErIQkIUApEZBNTNCukydGkuWjFroj9bRGR31iMk-nqs6NS3wgsy52rU8obWn=w16383"
  },
  {
    title: "At Ontario Lake near CN Tower, Toronto, Canada",
    description: "December 2025, Toronto visit",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUA7HoUD0SoFGHInlgyoG9f-WVEVq2a73kZOiEgssoLw74hk8XEi4SBIPUP8XYJ0sTVORqmQQF1QtWerIVWewmB51AaiFDtLF2Yg7885Z1NCWK7aMBS9uaYuDFLrFD4Q82gYKYyFW3_PFAR6vtqggzdxPuHnqkXrF5VBBm5UrPazwdfC2uqjIKRmUQ=w16383"
  },
  {
    title: "Attended 95th Annual Meeting (GAMM-2025), Poznan, Poland",
    description: "April 07-11, 2025",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUC0yAncKxAvudkNKbOUvYfmNEqjnCc-0jKgTZVh2EG6IrF8TS63adiKI1uL69310AdEaknyZjrKzHJsLle_IiJkY9u62HBzyuZijINPYhMwQhqp9AX4uLPVytQSfesP5_t0VsDrEoidoUuaELQWbpPp6efkSgzF9-K3sgZkHSHPnbCi82EiZ6S9ecR9=w16383"
  },
  {
    title: "At Poznan University of Technology, Poznan, Poland",
    description: "GAMM 2025 Conference Venue",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUAuUI7157FvPPYdjbg-RlACOfRxRMR4W5oY21YDaaW-2W5bkTsIP329mAT-GbLR19Twj-84Q64lrX407nu9WhSyCrtdfRt61rzgqWbSfAMP7GBOUNoJzaeLDRgccTKvWy1ezP68wF1O7ZJgRJE16yDNZus5-f-lKrHCdoEgnd-x8VWrnxrFVjSWR5s-INg=w16383"
  },
  {
    title: "Photo with Polish Military",
    description: "Poznan, Poland trip",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUCuTRZaugYbusKl9EHdtFsFI4scDgoxIwsX741yQWWORMAMWPp4CZHt4Sfq8zA1Z3XRF3ov3IyVtgXlmfSxxli4Nrb0H9dSa5HVmLKSOy36I_S1ltMKnwHB6fN-EvQ_zu_EWS0gXnP2p5zioyZ1k_jMcXqHjJMllqSmwN0ZvGK3QauvdH-xFjXZmIkkpcc=w16383"
  },
  {
    title: "Photo with Abdelkader Hemaizia, Ph.D. in Mechanical Engineering, Germany",
    description: "Scientific Networking, GAMM 2025",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUBsIXj6tEyHB_SLuQqKjV47vpVWvE-Z9A3Y_ht4S65-dvxB-GoDxt6kA8PdyZA5KX3-keeAYVG7zIIcSWiSqH0clw2s3AqJI49XxdDyap4AlJ3WSrBpUL9o2rv32DWzOeuJJUk3zBHGCdEjMbC5a3XPkcgZG_VewhPe6GJz0Q9VYyddZfy_ty5WKdyaRsU=w16383"
  },
  {
    title: "Attended ICRAFMN-2023 at MIT, Bengaluru",
    description: "July 12-14, 2023",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUAJYXn5u6MtR-gY7PU-fb8I_aGRQux2eLzXbaxyd5ztUjtduHKwJMsRKe6cIvyhlEwdofB86rfsCWZGyxre3yovz0XwgcrogMNEklkSo_-FBUg1rNMcoEgQtW-0nYe2i39c0YD_b6Q45-_fURvuARW0ZqeuKdjHlEUsuODs_e3_klX4SpyYUYRNoGgl_RM=w16383"
  },
  {
    title: "Presented paper in ICRAFMN-2023, MIT (MAHE), Bengaluru",
    description: "Oral Presentation at Fluid Conference",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUAfYtsrmnZ4jcm5Eehbstm455pL8G-bchID_JybwcpIrN5T8piDMmlhKy1VKWlHvwwqM1s8hn1eV-ufCBOWxx46-bOGkXgb_pwv2uOf9cQ4PjwOKLLp_Qd7oh7tBbo9S5KW9raMPfz5mrQZIO7PJM4xJ9YSboLTa6T3jROQJsFFoJEbyi683HQdudBamV8=w16383"
  },
  {
    title: "Visited AdiYogi ar Isha Foundation, Bengaluru",
    description: "AdiYogi Shiva Statue Visit, July 2023",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUBrTtL2R19hlJCB-ocnGH1x6fSbjkXHFlrxZQU4o78-ATYmDDdu_OCzSlImjOtUWWsh9B0qKuMd9QGsZt-lgVM58Le8N6RTUCl6Z7vJo08CCgIcAp4KWh826NUfjX6k3rLNql9mfk6NLb4uVNIvkfXSGt01N0E_skzt8W4CRuHZDx1gl6Z6Dv4XlQokK34=w16383"
  },
  {
    title: "Visited AdiYogi ar Isha Foundation, Bengaluru (2nd Photo)",
    description: "Moments from Isha Foundation excursion",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUA7y3Wg-9ptZXxcJGrPvBzlTJ37p7wZ6VsH6Mumyo9FPP5ols4WVNe1dIcUFUCavQW9hOcHF793UwH4nwddgwNxZxi9iLM7Lk24YFkivgLIPeSDpd-w8gEuUHfpUEX1-t8evTynbUuszq6d3i7ooxJQB3Ht9Eqh5DMPXQoQ6XGcDxSLygyvMizN9eJl=w16383"
  },
  {
    title: "Attended ICMC 2023 at BITS Pilani, Goa Campus, South Goa",
    description: "January 06-08, 2023",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUDdHDYgIbMcr5QozV2sP1y-lK_OZcTefOBmu5SvUZNoaYsdy1IYExMnf18kjnxL7dxH67ZBvNrAzQ1TuG7B6oPyGvM7I4wLMvKhSkWi6YZ7cEL0bm6cUvOdiHA4jwOzNpZZTrcShDiWyHrY8UkMJDqKe9r8L-VXJRbjqlK2-HA21Zi37i3togJ4Beex=w16383"
  },
  {
    title: "Presented paper in ICMC 2023 at BITS Pilani, Goa Campus, South Goa",
    description: "BITS Pilani, Goa Campus, South Goa presentation",
    img: "https://lh3.googleusercontent.com/sitesv/AA5AbUABPbsiX76nHGeVGsuSE-fNSsqbLr0ayC3gdvc6V80NVbcLaoNZbUpOHuaWIoFfaa9dNevBYyg2AW5ZHiVhzs78JK7p88MCxFwCQI71909XFEzMzkdRy_5DWg19QzjyWLG6d_ThU1ngvLLJzpULVcKuGjr14fZ1CtyJ6m0f8t-MjRVk0Xv4gEyHr1YTGDs=w16383"
  }
];

// --- Global variables ---
let currentFilter = "all";
let searchQuery = "";

// --- DOM Elements ---
const header = document.getElementById("main-header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const pubContainer = document.getElementById("pub-list-container");
const searchInput = document.getElementById("pub-search");
const filterTabs = document.getElementById("pub-filter-tabs");
const galleryContainer = document.getElementById("gallery-grid");

// --- Initialize Page ---
document.addEventListener("DOMContentLoaded", () => {
  renderPublications();
  renderGallery();
  setupEventListeners();
  setupIntersectionObserver();
});

// --- Scroll & Header Effects ---
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Mobile Hamburger Toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Mobile menu close on link click
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // Publication Filtering
  filterTabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      // Update UI active states
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      
      currentFilter = e.target.getAttribute("data-filter");
      renderPublications();
    }
  });

  // Publication Searching
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderPublications();
  });
}

// --- Active Link Highlighting on Scroll ---
function setupIntersectionObserver() {
  const options = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // Detect when section is in the upper middle part of viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        
        links.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
}

// --- Render Publications function ---
function renderPublications() {
  pubContainer.innerHTML = "";
  
  // 1. Filter publications
  const filtered = publications.filter(pub => {
    // Type checking
    if (currentFilter !== "all" && pub.type !== currentFilter) {
      return false;
    }
    
    // Search checking
    if (searchQuery !== "") {
      const matchTitle = pub.title.toLowerCase().includes(searchQuery);
      const matchAuthors = pub.authors.toLowerCase().includes(searchQuery);
      const matchJournal = pub.journal.toLowerCase().includes(searchQuery);
      const matchPublisher = pub.publisher.toLowerCase().includes(searchQuery);
      
      return matchTitle || matchAuthors || matchJournal || matchPublisher;
    }
    
    return true;
  });

  // 2. Display Empty State if no results
  if (filtered.length === 0) {
    pubContainer.innerHTML = `
      <div class="no-results">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path></svg>
        <h3>No publications match your search</h3>
        <p>Try checking your spelling or selecting a different category filter.</p>
      </div>
    `;
    return;
  }

  // 3. Render items
  filtered.forEach((pub, index) => {
    const card = document.createElement("div");
    card.className = "publication-card";
    
    // Determine badge theme based on tags
    let isScie = pub.categoryClass === "scie";
    let isScopus = pub.categoryClass === "scopus" || pub.tags.includes("Scopus");
    let categoryBadgeClass = isScie ? "pub-category-tag scie" : (isScopus ? "pub-category-tag scopus" : "pub-category-tag");
    let categoryText = pub.type === "journal" ? "Journal Article" : (pub.type === "conference" ? "Conference Paper" : "Book Chapter");

    // Dynamic highlights helper
    const highlight = (text) => {
      if (!searchQuery) return text;
      const regex = new RegExp(`(${searchQuery})`, 'gi');
      return text.replace(regex, '<mark style="background-color: #fef08a; padding: 0.1rem 0.2rem; border-radius: 2px;">$1</mark>');
    };

    // Render HTML structure
    card.innerHTML = `
      <div class="pub-index">${index + 1}</div>
      <div class="pub-content">
        <h4 class="pub-title">${highlight(pub.title)}</h4>
        <div class="pub-authors">
          ${pub.authors.replace("V.J. Prajapati", "<strong>V.J. Prajapati</strong>")}
        </div>
        <div class="pub-journal">
          ${highlight(pub.journal)}, <span>${pub.details}</span>
        </div>
        <div class="pub-meta-row">
          <span class="${categoryBadgeClass}">${categoryText}</span>
          ${pub.tags.map(tag => `<span class="pub-badge-val">${tag}</span>`).join("")}
          <span class="pub-publisher">${pub.publisher}</span>
        </div>
      </div>
    `;
    
    pubContainer.appendChild(card);
  });
}

// --- Render Gallery function ---
function renderGallery() {
  if (!galleryContainer) return;
  galleryContainer.innerHTML = "";
  
  galleryItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    
    card.innerHTML = `
      <div class="gallery-visual-box">
        <img src="${item.img}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
      </div>
      <div class="gallery-info-box">
        <span class="gallery-card-title">${item.title}</span>
        <span class="gallery-card-desc">${item.description}</span>
      </div>
    `;
    
    galleryContainer.appendChild(card);
  });
}
