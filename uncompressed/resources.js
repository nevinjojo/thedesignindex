// filters chosen by the user
let selected_category = "All-Categories";
let selected_job_type = "All Jobs";
let selected_price = "All Prices";

// Colours that represents the categories
let categories = [
  "All-Categories",
  "Photo-&-Video",
  "Mockups",
  "Illustration",
  "Development",
  "Icons",
  "Fonts",
  "Colour",
  "Inspiration",
  "Applications",
  "Productivity",
  "Other"
];

// List of Resource objects that will be displayed on the website.
let resources = [
  {
    title: "Unsplash",
    description: "The largest and best source for free to use images.",
    category: "Photo-&-Video",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://unsplash.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/1_Unsplash.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Generate Photo",
    description: "Model photos generated completely by AI.",
    category: "Photo-&-Video",
    job_types: ["Graphic Designer, Illustrator"],
    price: "Free",
    url: "https://generated.photos/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/1_Generated.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Stocksnap",
    description: "High quality and high resolution images for free.",
    category: "Photo-&-Video",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://stocksnap.io/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/1_Stocksnap.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Pexels",
    description: "Free high quality photos you can use anywhere with no attribution.",
    category: "Photo-&-Video",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "http://pexels.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/1_Pexels.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Coverr",
    description: "Beautiful free videos to use in projects or websites.",
    category: "Photo-&-Video",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://coverr.co/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/1_Coverr.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Graphic Burger",
    description: "Tasty design resources made with care that are free for commercial use.",
    category: "Mockups",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://graphicburger.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/2_Graphicburger.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Frrames",
    description: "Realistic mockups for browsers, software and mobile devices.",
    category: "Mockups",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free to $9",
    url: "https://frrames.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/2_Frrames.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Dimmy Club",
    description: "Device mockup generator for your screenshots.",
    category: "Mockups",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free to $9",
    url: "https://dimmy.club/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/2_Dimmy.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Animockup",
    description: "Animated product mockups with videos and animated GIFs.",
    category: "Mockups",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free to $9",
    url: "https://animockup.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/2_Animockup.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Pixeden",
    description: "Premium design mockups for packaging, stationery, technology and more.",
    category: "Mockups",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://www.pixeden.com/free-design-web-resources/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/2_Pixaden.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Pixel Buddha",
    description: "Free mock-ups and various other design resources such as UI kits & fonts.",
    category: "Mockups",
    job_types: ["Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://pixelbuddha.net/freebies/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/2_Pixelbuddha.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Open Doodles",
    description: "A massive free of sketchy illustrations.",
    category: "Illustration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://opendoodles.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/3_Doodles.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Humaaans",
    description: "Free mix & match illustrations of people with a customisable design library.",
    category: "Illustration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://www.humaaans.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/3_Humaaans.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Ouch!",
    description: "Free beautiful illustration sets by various different designers.",
    category: "Illustration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://icons8.com/ouch/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/3_Ouch.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Open Peeps",
    description: "A minimal hand-drawn people illustration library.",
    category: "Illustration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://www.openpeeps.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/3_Peeps.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Blush",
    description: "Customisable illustration sets by various designers from around the globe.",
    category: "Illustration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://blush.design/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/3_Blush.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "The Noun Project",
    description: "Over 2 million curated icons in various styles and packs.",
    category: "Icons",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://thenounproject.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/4_Thenounproject.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Flat Icon",
    description: "Curated packs of icons that are great for keeping a consistent style throughout a project.",
    category: "Icons",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://www.flaticon.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/4_Flaticon.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Icons8",
    description: "Great minimal icon packs for UI projects that you can filter by device type.",
    category: "Icons",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://icons8.com/icons/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/4_Icons8.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Icon Finder",
    description: "Various different icon styles including coloured and isometric sets.",
    category: "Icons",
    job_types: ["Graphic Designer", "Web Designer"],
    price: "Free",
    url: "https://www.iconfinder.com/icon-sets/featured/free/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/4_Iconfinder.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Google Fonts",
    description: "The best website for implementing fonts into online projects.",
    category: "Fonts",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://fonts.google.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/5_Googlefonts.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Calligraphr",
    description: "Easy way to transform your handwriting into its own font.",
    category: "Fonts",
    job_types: ["Graphic Designer", "Illustrator"],
    price: "Free",
    url: "https://www.calligraphr.com/en/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/5_Calligraphr.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Font Squirrel",
    description: "Great collections of free fonts for commercial use with great filters.",
    category: "Fonts",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://www.fontsquirrel.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/5_Fontsquirrel.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Type Wolf",
    description: "The lastest in what is treading in type.",
    category: "Fonts",
    job_types: ["Graphic Designer", "Web Designer"],
    price: "Free",
    url: "https://www.typewolf.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/5_Typewolf.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Font Space",
    description: "Collection of more obscure and unusual fonts that are great for design projects.",
    category: "Fonts",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://www.fontspace.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/5_Fontspace.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Coolors",
    description: "Best colour palette generator website with public gallery to find and download.",
    category: "Colour",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://coolors.co/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/6_Coolors.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Colour Hunt",
    description: "Curated list of soft and beautiful colour palettes.",
    category: "Colour",
    job_types: ["Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://colorhunt.co/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/6_Colourhunt.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "WebGradients",
    description: "A free collection of gradients great for digital projects.",
    category: "Colour",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://webgradients.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/6_WebGradients.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Khroma",
    description: "An AI colour tool that learns off you to recommend you personalised colour palettes.",
    category: "Colour",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "http://khroma.co/generator/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/6_Khroma.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Awwwards",
    description: "Best curated list and collects of interesting and trending website inspiration.",
    category: "Inspiration",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://www.awwwards.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Awwwards.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Behance",
    description: "Adobe's website for creatives to show off great in depth design projects.",
    category: "Inspiration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://www.behance.net/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Behance.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Dribbble",
    description: "Quick snippets of colourful and exciting UI and illustration inspiration.",
    category: "Inspiration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://dribbble.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Dribbble.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Mobbin",
    description: "Great collection of the latest iOS UI design patterns and screens.",
    category: "Inspiration",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://mobbin.design/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Mobbin.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Collect UI",
    description: "Large UI inspiration collection categorised by type.",
    category: "Inspiration",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "http://collectui.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Collectui.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Notion",
    description: "A minimal and beautiful notes and project organisation application.",
    category: "Productivity",
    job_types: ["Graphic Designer", "Illustrator", "Web Designer", "UX/UI Designer"],
    price: "Starting at Free",
    url: "https://www.notion.so/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/11_Notion.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Dotgrid",
    description: "A grid-based vector drawing software designed to create logos, icons and type.",
    category: "Applications",
    job_types: ["Graphic Designer", "Illustrator"],
    price: "Free",
    url: "https://hundredrabbits.itch.io/dotgrid/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Dotgrid.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Spark Mail",
    description: "The best simple personal email client currently available.",
    category: "Applications",
    job_types: ["Graphic Designer", "Illustrator", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://sparkmailapp.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Spark.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Numi",
    description: "A beautiful simple and smart calculator app for Mac.",
    category: "Applications",
    job_types: ["Graphic Designer", "Illustrator", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://numi.app/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Numi.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Figma",
    description: "The best design program for UX/UI ideation and designing.",
    category: "Applications",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://Figma.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Figma.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Sketch",
    description: "To create, prototype and collaborate on UX/UI and web designs.",
    category: "Applications",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "$99",
    url: "https://numi.app/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Sketch.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Paper Sizes",
    description: "The best resource for international paper sizes, dimensions & formats.",
    category: "Other",
    job_types: ["Graphic Designer", "Web Designer"],
    price: "Free",
    url: "https://papersizes.io/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/9_Papersizes.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Sketchsheets",
    description: "Ready to print sketch sheet templates for UX designers.",
    category: "Other",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://sketchsheets.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/9_Sketchsheets.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Sharpen",
    description: "Practice design briefs & challenges for when you feel stuck.",
    category: "Other",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://sharpen.design/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/9_Sharpen.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "SmallPDF",
    description: "All-in-one easy-to-use online PDF tools with tons of different quick features.",
    category: "Other",
    job_types: ["Graphic Designer", "Web Designer"],
    price: "Free",
    url: "https://smallpdf.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/9_Smallpdf.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "FocusFox",
    description: "An online markdown text editor with background sounds to help you focus.",
    category: "Productivity",
    job_types: ["Graphic Designer", "Web Designer"],
    price: "Free",
    url: "https://focusfox.co/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/11_focusfox.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Webflow",
    description: "Build better websites, faster, all without coding.",
    category: "Development",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://www.webflow.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/10_Webflow.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Visual Studio",
    description: "Best free code editing software.",
    category: "Development",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://code.visualstudio.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/10_Visual.svg",
    favorite_count: 0,
    visit_count: 0
  },
  {
    title: "Atom",
    description: "Ultra minimal code editor that integrates with GutHub.",
    category: "Development",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://atom.io/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/10_Atom.svg",
    favorite_count: 0,
    visit_count: 0
  }
];

let submitResourceString = '<div class="resource-card" data-toggle="modal" data-target="#modal">' +
  '          <div class="resource-card-wrapper-submit">' +
  '            <div class="card-content">' +
  '                <div class="card-icon-submit">' +
  '                  <img draggable="false" class="card-icon-img-submit" src="images/plus.svg" alt="Submit resource"/>' +
  '                </div>' +
  '              <div class="card-text-container">' +
  '                <div class="card-text card-title-submit">Suggest a resource</div>' +
  '                <div class="card-text card-description-submit">Can\'t find your favourite resource? Submit it!</div>' +
  '              </div>' +
  '            </div>' +
  '          </div>' +
  '      </div>'
;

// Sets the Category to filter through resources.
function setCategory(category) {
  selected_category = category;
  loadResources();
}

// Sets the Job Type to filter through resources.
function setJobTypes(jobType) {
  selected_job_type = jobType;
  loadResources();
}

// Sets the Price to filter through resources.
function setPrice(price) {
  selected_price = price;
  loadResources();
}

// Removes children of `resourceRow` to load filtered resource list.
function resetResources() {
  categories.forEach(function (category) {
    if (category !== "All-Categories") {
      let resourceDiv = document.getElementById(category);
      resourceDiv.style.display = "block";
      document.querySelectorAll("a[href='#" + category + "']")[0].style.display = "block";
      let section = resourceDiv.lastElementChild;
      let child = section.lastElementChild;
      while (child) {
        section.removeChild(child);
        child = section.lastElementChild;
      }
    }
  });
}

// Load resources based on filter parameters specified by the user.
function loadResources() {
  resetResources();
  document.getElementsByClassName("jobType-dropdown")[0].innerHTML = selected_job_type;
  document.getElementsByClassName("price-dropdown")[0].innerHTML = selected_price;
  let selected_resources = [];
  for (let resource of resources) {
    if (resource.category === selected_category || selected_category === "All-Categories") {
      if (resource.job_types.includes(selected_job_type) || selected_job_type === "All Jobs") {
        if (resource.price === selected_price || selected_price === "All Prices" || (selected_price === "Paid" && resource.price.includes("$"))) {
          selected_resources.push(resource)
        }
      }
    }
  }
  createResources(selected_resources);
}

// Append resource children to `resourceRow` div iteratively.
function createResources(resources) {
  let noneClass = document.getElementsByClassName('none');
  if (resources.length === 0) {
    noneClass[0].style.display = "block";
  } else {
    noneClass[0].style.display = "none";
    for (let resource of resources) {
      let resourceString = '<div class="resource-card">' +
        '          <div class="resource-card-wrapper">' +
        '            <div class="card-content">' +
        '              <div class="card-open">' +
        '                <img src="" alt="Open Link">' +
        '              </div>' +
        '            <a href="' + resource.url + '" rel="noopener" target="_blank" onclick="updateVisitCount(\'' + resource.title + '\')">' +
        '              <div class="card-icon-container">' +
        '                <div class="card-icon">' +
        '                  <img draggable="false" class="card-icon-img" src="' + resource.icon_link + '" alt="' + resource.title + 'Logo"/>' +
        '                </div>' +
        '              </div>' +
        '            </a>' +
        '              <div class="card-text-container">' +
        '                <div class="card-text card-category"' + '">' + resource.price + '</div>' +
        '                <button class="card-favorite" id="' + resource.title + '-fav-btn" onclick="updateFavCount(\'' + resource.title + '\')">' +
        '                  <img src="images/heart.svg">' +
        '                  <div class="favourite-button">' + resource.favorite_count + '</div>' +
        '                </button>' +
        '                <a href="' + resource.url + '" rel="noopener" target="_blank" onclick="updateVisitCount(\'' + resource.title + '\')">' +
        '                 <div class="card-text card-title">' + resource.title + '</div>' +
        '                 <div class="card-text card-description">' + resource.description + '</div>' +
        '                </a>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '      </div>'
      ;
      let div = document.getElementById(resource.category);
      let section = div.getElementsByClassName('categorySection')[0];
      section.insertAdjacentHTML('beforeend', resourceString);
    }
  }

  categories.forEach(function (category) {
    if (category !== "All-Categories") {
      let resourceDiv = document.getElementById(category);
      let section = resourceDiv.getElementsByClassName('categorySection')[0];
      if (!section.hasChildNodes()) {
        resourceDiv.style.display = "none";
        document.querySelectorAll("a[href='#" + category + "']")[0].style.display = "none";
      }
    }
  });

  let categorySections = document.getElementsByClassName('categorySection');
  for (let section of categorySections) {
    section.insertAdjacentHTML('beforeend', submitResourceString);
  }
}

//Reset contents of the modal
function resetModal() {
  let header = document.getElementById('modal-header');
  let body = document.getElementById('modal-body');
  let footer = document.getElementById('modal-footer');
}

// Update resource content of modal before displaying
function updateModal(resourceTitle) {
  resetModal();
  let resource;
  for (let res of resources) {
    if (res.title === resourceTitle) {
      resource = res;
      document.getElementsByClassName('modal-title')[0].innerHTML = resource.title;
      document.getElementById('modal-body').lastElementChild.innerHTML = resource.description;
      document.getElementById('modal-footer').lastElementChild.innerHTML = resource.price;
    }
  }
}
