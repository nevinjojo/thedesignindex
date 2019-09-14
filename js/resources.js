// filters chosen by the user
let selected_category = "All Categories";
let selected_job_type = "All Job Types";
let selected_price = "All Price Ranges";

// Colours that represents the categories
let category_colours = {
  "All Categories": "#000000",
  "Photo & Video": "#1BC7A4",
  "Mockups": "#01B0D6",
  "Illustration": "#3684EF",
  "Icons": "#8F55E2",
  "Fonts": "#E56FBB",
  "Colour": "#FF3423",
  "Inspiration": "#FF8300",
  "UX & UI": "#FFBA01",
  "Other": "#42C241"
};

// List of Resource objects that will be displayed on the website.
let resources = [
  {
    title: "Kaboompics",
    description: "Great place to get breathtaking free pictures for business or personal projects.",
    category: "Photo & Video",
    job_types: ["Designer", "Web Designer"], price: "Free",
    url: "http://kaboompics.com/",
    icon_link: "images/resource_icons/1_Kaboompics.svg"
  },
  {
    title: "Pexels",
    description: "Free high quality photos you can use anywhere that require no attribution.",
    category: "Photo & Video",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "http://pexels.com/",
    icon_link: "images/resource_icons/1_Pexels.svg"
  },
  {
    title: "Stocksnap",
    description: "High quality and high resolution images free from all copyright restrictions.",
    category: "Photo & Video",
    job_types: ["Designer", "Web Designer"], price: "Free",
    url: "https://stocksnap.io/",
    icon_link: "images/resource_icons/1_Stocksnap.svg"
  },
  {
    title: "Unsplash",
    description: "The internet's source of freely usable images. Powered by creators everywhere.",
    category: "Photo & Video",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://unsplash.com/",
    icon_link: "images/resource_icons/1_Unsplash.svg"
  },
  {
    title: "Graphic Burger",
    description: "Tasty design resources made with care that are free for commercial use.",
    category: "Mockups",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://graphicburger.com/",
    icon_link: "images/resource_icons/2_Graphicburger.svg"
  },
  {
    title: "Pixeden",
    description: "Premium design mockups for packaging, stationery, technology and more.",
    category: "Mockups",
    job_types: ["Designer"], price: "$",
    url: "https://www.pixeden.com/free-design-web-resources",
    icon_link: "images/resource_icons/2_Pixaden.svg"
  },
  {
    title: "Pixel Buddha",
    description: "Free mock-ups and various other design resources such as UI kits & fonts.",
    category: "Mockups",
    job_types: ["Designer", "Web Designer"], price: "Free",
    url: "https://pixelbuddha.net/freebies",
    icon_link: "images/resource_icons/2_Pixelbuddha.svg"
  },
  {
    title: "Humaaans",
    description: "Free mix & match illustrations of minimal people with a customisable design library.",
    category: "Illustration",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://www.humaaans.com",
    icon_link: "images/resource_icons/3_Humaaans.svg"
  },
  {
    title: "Ouch!",
    description: "Free beautiful illustration sets by various different designers. Tons of styles to choose.",
    category: "Illustration",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://icons8.com/ouch",
    icon_link: "images/resource_icons/3_Ouch.svg"
  },
  {
    title: "The Noun Project",
    description: "Over 2 million curated icons in various styles and packs.",
    category: "Icons",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://thenounproject.com",
    icon_link: "images/resource_icons/4_Thenounproject.svg"
  },
  {
    title: "Flat Icon",
    description: "Curated packs of icons that are great for keeping a consistent style throughout a project.",
    category: "Icons",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://www.flaticon.com",
    icon_link: "images/resource_icons/4_Flaticon.svg"
  },
  {
    title: "Icons8",
    description: "Great minimal icon packs for UI projects that you can filter by device type.",
    category: "Icons",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://icons8.com/icons",
    icon_link: "images/resource_icons/4_Icons8.svg"
  },
  {
    title: "Icon Finder",
    description: "Various different icon styles including coloured and isometric sets.",
    category: "Icons",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://www.iconfinder.com/icon-sets/featured/free",
    icon_link: "images/resource_icons/4_Iconfinder.svg"
  },
  {
    title: "Google Fonts",
    description: "The best website for implementing fonts into online projects, or quickly downloading great simple fonts.",
    category: "Fonts",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://fonts.google.com",
    icon_link: "images/resource_icons/5_Googlefonts.svg"
  },
  {
    title: "Calligraphr",
    description: "Easy way to transform your handwriting into its own font to share or use in projects.",
    category: "Fonts",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://www.calligraphr.com/en/",
    icon_link: "images/resource_icons/5_Calligraphr.svg"
  },
  {
    title: "Font Squirrel",
    description: "Great collections of free fonts for commercial use with great filters.",
    category: "Fonts",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://www.fontsquirrel.com",
    icon_link: "images/resource_icons/5_Fontsquirrel.svg"
  },
  {
    title: "Font Space",
    description: "Collection of more obscure and unusual fonts that are great for design projects.",
    category: "Fonts",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://www.fontspace.com",
    icon_link: "images/resource_icons/5_Fontspace.svg"
  },
  {
    title: "Coolors",
    description: "Best colour palette generator website with public gallery to find or download great inspiration.",
    category: "Colour",
    job_types: ["Designer", "Web Designer"], price: "$$",
    url: "https://coolors.co/ea526f-e76b74-d7af70-937d64-585b56",
    icon_link: "images/resource_icons/6_Coolors.svg"
  },
  {
    title: "Colour Hunt",
    description: "Curated list of soft and beautiful colour palettes.",
    category: "Colour",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://colorhunt.co",
    icon_link: "images/resource_icons/6_Colourhunt.svg"
  },
  {
    title: "Gradients.io",
    description: "Short list of colourful and bold gradient for modern design projects.",
    category: "Colour",
    job_types: ["Designer", "Web Designer"], price: "$$$",
    url: "http://gradients.io",
    icon_link: "images/resource_icons/6_Gradientsio.svg"
  },
  {
    title: "Khroma",
    description: "An AI colour tool that learns off you to recommend you personalised colour palettes.",
    category: "Colour",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "http://khroma.co/generator/",
    icon_link: "images/resource_icons/6_Khroma.svg"
  },
  {
    title: "Awwwards",
    description: "Best curated list and collects of interesting and trending website inspiration.",
    category: "Inspiration",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://www.awwwards.com",
    icon_link: "images/resource_icons/7_Awwwards.svg"
  },
  {
    title: "Behance",
    description: "Adobe's website for creatives to show off great in depth design projects.",
    category: "Inspiration",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://www.behance.net",
    icon_link: "images/resource_icons/7_Behance.svg"
  },
  {
    title: "Dribbble",
    description: "Quick snippets of colourful and exciting UI and illustration inspiration.",
    category: "Inspiration",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://dribbble.com",
    icon_link: "images/resource_icons/7_Dribbble.svg"
  },
  {
    title: "Mobbin",
    description: "Great collection of the latest iOS UI design patterns and screens.",
    category: "UX & UI",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://mobbin.design",
    icon_link: "images/resource_icons/8_Mobbin.svg"
  },
  {
    title: "Sketchsheets",
    description: "Ready to print sketch sheet templates for UX designers.",
    category: "UX & UI",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://sketchsheets.com",
    icon_link: "images/resource_icons/8_Sketchsheets.svg"
  },
  {
    title: "UI Sources",
    description: "More creative and unusual UI modern design patterns and screens.",
    category: "UX & UI",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://www.uisources.com",
    icon_link: "images/resource_icons/8_Uisources.svg"
  },
  {
    title: "Paper Sizes",
    description: "The best resource for international paper sizes, dimensions & formats.",
    category: "Other",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://papersizes.io",
    icon_link: "images/resource_icons/9_Papersizes.svg"
  },
  {
    title: "Briefbox",
    description: "Practice design briefs & skill development for when you feel stuck.",
    category: "Other",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://briefbox.me",
    icon_link: "images/resource_icons/9_Briefbox.svg"
  },
  {
    title: "SmallPDF",
    description: "All-in-one easy-to-use online PDF tools with tons of different quick features.",
    category: "Other",
    job_types: ["Designer", "Web Designer"], price: "$",
    url: "https://smallpdf.com",
    icon_link: "images/resource_icons/9_Smallpdf.svg"
  }
];

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
  let resourceDiv = document.getElementById('resourceRow');
  let child = resourceDiv.lastElementChild;
  while (child) {
    resourceDiv.removeChild(child);
    child = resourceDiv.lastElementChild;
  }
}

// Load resources based on filter parameters specified by the user.
function loadResources() {
  resetResources();
  document.getElementsByClassName("category-dropdown")[0].innerHTML = selected_category;
  document.getElementsByClassName("jobType-dropdown")[0].innerHTML = selected_job_type;
  document.getElementsByClassName("price-dropdown")[0].innerHTML = selected_price;
  let selected_resources = [];
  for (let resource of resources) {
    if (resource.category === selected_category || selected_category === "All Categories") {
      if (resource.job_types.includes(selected_job_type) || selected_job_type === "All Job Types") {
        if (resource.price === selected_price || selected_price === "All Price Ranges") {
          selected_resources.push(resource);
        }
      }
    }
  }
  createResources(selected_resources);
}

// Append resource children to `resourceRow` div iteratively.
function createResources(resources) {
  if (resources.length === 0) {
    let resourceString = '<div class="card-text card-title">No resources found.</div>';
    let div = document.getElementById('resourceRow');
    div.insertAdjacentHTML('beforeend', resourceString);
  } else {
    for (let resource of resources) {
      let resourceString = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 resource-card">' +
        '        <a href="' + resource.url + '" rel="noopener" target="_blank">' +
        '          <div class="resource-card-wrapper">' +
        '            <div class="card-content">' +
        '              <div class="card-open">' +
        '                <img src="images/open.svg">' +
        '              </div>' +
        '              <div class="card-icon-container">' +
        '                <div class="card-icon" alt="' + resource.title + 'Logo">' +
        '                  <img src="' + resource.icon_link + '" alt="' + resource.title + 'Logo"/>' +
        '                </div>' +
        '              </div>' +
        '              <div class="card-text-container">' +
        '                <div class="card-text card-category"' +
        '                     style="color: ' + category_colours[resource.category] + '">' + resource.category + ' | ' + resource.price  +'</div>' +
        '                <div class="card-text card-title">' + resource.title + '</div>' +
        '                <div class="card-text card-description">' + resource.description + '</div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '        </a>' +
        '      </div>'
      ;
      let div = document.getElementById('resourceRow');
      div.insertAdjacentHTML('beforeend', resourceString);
    }
  }
}
