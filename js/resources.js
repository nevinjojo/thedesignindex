// filters chosen by the user
let selected_category = "All-Categories";
let selected_job_type = "All Jobs";
let selected_price = "All Prices";

// Colours that represents the categories
let category_colours = {
  "All-Categories": "#000000",
  "Photo-&-Video": "#1BC7A4",
  "Mockups": "#01B0D6",
  "Illustration": "#3684EF",
  "Icons": "#8F55E2",
  "Fonts": "#E56FBB",
  "Colour": "#FF3423",
  "Inspiration": "#FF8300",
  "Applications": "#FFBA01",
  "Other": "#42C241"
};

// List of Resource objects that will be displayed on the website.
let resources = [
  {
    title: "Unsplash",
    description: "The largest and best source for free to use images.",
    category: "Photo-&-Video",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://unsplash.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/1_Unsplash.svg"
  },
  {
    title: "Stocksnap",
    description: "High quality and high resolution images for free.",
    category: "Photo-&-Video",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://stocksnap.io/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/1_Stocksnap.svg"
  },
  {
    title: "Pexels",
    description: "Free high quality photos you can use anywhere with no attribution.",
    category: "Photo-&-Video",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "http://pexels.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/1_Pexels.svg"
  },
  {
    title: "Coverr",
    description: "Beautiful free videos to use in projects or websites.",
    category: "Photo-&-Video",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://coverr.co/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/1_Coverr.svg"
  },
  {
    title: "Graphic Burger",
    description: "Tasty design resources made with care that are free for commercial use.",
    category: "Mockups",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://graphicburger.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/2_Graphicburger.svg"
  },
  {
    title: "Pixeden",
    description: "Premium design mockups for packaging, stationery, technology and more.",
    category: "Mockups",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://www.pixeden.com/free-design-web-resources/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/2_Pixaden.svg"
  },
  {
    title: "Pixel Buddha",
    description: "Free mock-ups and various other design resources such as UI kits & fonts.",
    category: "Mockups",
    job_types: ["Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://pixelbuddha.net/freebies/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/2_Pixelbuddha.svg"
  },
  {
    title: "Humaaans",
    description: "Free mix & match illustrations of minimal people with a customisable design library.",
    category: "Illustration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://www.humaaans.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/3_Humaaans.svg"
  },
  {
    title: "Ouch!",
    description: "Free beautiful illustration sets by various different designers. Tons of styles to choose.",
    category: "Illustration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://icons8.com/ouch/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/3_Ouch.svg"
  },
  {
    title: "The Noun Project",
    description: "Over 2 million curated icons in various styles and packs.",
    category: "Icons",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://thenounproject.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/4_Thenounproject.svg"
  },
  {
    title: "Flat Icon",
    description: "Curated packs of icons that are great for keeping a consistent style throughout a project.",
    category: "Icons",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://www.flaticon.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/4_Flaticon.svg"
  },
  {
    title: "Icons8",
    description: "Great minimal icon packs for UI projects that you can filter by device type.",
    category: "Icons",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://icons8.com/icons/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/4_Icons8.svg"
  },
  {
    title: "Icon Finder",
    description: "Various different icon styles including coloured and isometric sets.",
    category: "Icons",
    job_types: ["Graphic Designer", "Web Designer"],
    price: "Free",
    url: "https://www.iconfinder.com/icon-sets/featured/free/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/4_Iconfinder.svg"
  },
  {
    title: "Google Fonts",
    description: "The best website for implementing fonts into online projects.",
    category: "Fonts",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://fonts.google.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/5_Googlefonts.svg"
  },
  {
    title: "Calligraphr",
    description: "Easy way to transform your handwriting into its own font.",
    category: "Fonts",
    job_types: ["Graphic Designer", "Illustrator"],
    price: "Free",
    url: "https://www.calligraphr.com/en/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/5_Calligraphr.svg"
  },
  {
    title: "Font Squirrel",
    description: "Great collections of free fonts for commercial use with great filters.",
    category: "Fonts",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://www.fontsquirrel.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/5_Fontsquirrel.svg"
  },
  {
    title: "Font Space",
    description: "Collection of more obscure and unusual fonts that are great for design projects.",
    category: "Fonts",
    job_types: ["Graphic Designer"],
    price: "Free",
    url: "https://www.fontspace.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/5_Fontspace.svg"
  },
  {
    title: "Coolors",
    description: "Best colour palette generator website with public gallery to find and download.",
    category: "Colour",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://coolors.co/ea526f-e76b74-d7af70-937d64-585b56/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/6_Coolors.svg"
  },
  {
    title: "Colour Hunt",
    description: "Curated list of soft and beautiful colour palettes.",
    category: "Colour",
    job_types: ["Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://colorhunt.co/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/6_Colourhunt.svg"
  },
  {
    title: "WebGradients",
    description: "A free collection of gradients great for digital projects.",
    category: "Colour",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://webgradients.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/6_WebGradients.svg"
  },
  {
    title: "Khroma",
    description: "An AI colour tool that learns off you to recommend you personalised colour palettes.",
    category: "Colour",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "http://khroma.co/generator/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/6_Khroma.svg"
  },
  {
    title: "Awwwards",
    description: "Best curated list and collects of interesting and trending website inspiration.",
    category: "Inspiration",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://www.awwwards.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Awwwards.svg"
  },
  {
    title: "Behance",
    description: "Adobe's website for creatives to show off great in depth design projects.",
    category: "Inspiration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://www.behance.net/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Behance.svg"
  },
  {
    title: "Dribbble",
    description: "Quick snippets of colourful and exciting UI and illustration inspiration.",
    category: "Inspiration",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer", "Illustrator"],
    price: "Free",
    url: "https://dribbble.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Dribbble.svg"
  },
  {
    title: "Mobbin",
    description: "Great collection of the latest iOS UI design patterns and screens.",
    category: "Inspiration",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://mobbin.design/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Mobbin.svg"
  },
  {
    title: "Collect UI",
    description: "Large UI inspiration collection categorised by type.",
    category: "Inspiration",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "http://collectui.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/7_Collectui.svg"
  },
  {
    title: "Notion",
    description: "A minimal and beautiful notes and project organisation application.",
    category: "Applications",
    job_types: ["Graphic Designer", "Illustrator", "Web Designer", "UX/UI Designer"],
    price: "Free or $4/m",
    url: "https://www.notion.so/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Notion.svg"
  },
  {
    title: "Dotgrid",
    description: "A grid-based vector drawing software designed to create logos, icons and type.",
    category: "Applications",
    job_types: ["Graphic Designer", "Illustrator"],
    price: "Free",
    url: "https://hundredrabbits.itch.io/dotgrid/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Dotgrid.svg"
  },
  {
    title: "Spark Mail",
    description: "The best simple personal email client currently available.",
    category: "Applications",
    job_types: ["Graphic Designer", "Illustrator", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://sparkmailapp.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Spark.svg"
  },
  {
    title: "Numi",
    description: "A beautiful simple and smart calculator app for Mac.",
    category: "Applications",
    job_types: ["Graphic Designer", "Illustrator", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://numi.app/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Numi.svg"
  },
  {
    title: "Sketch",
    description: "The best design program for UX/UI ideation and designing.",
    category: "Applications",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "$99",
    url: "https://numi.app/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/8_Sketch.svg"
  },
  {
    title: "Paper Sizes",
    description: "The best resource for international paper sizes, dimensions & formats.",
    category: "Other",
    job_types: ["Graphic Designer", "Web Designer"],
    price: "Free",
    url: "https://papersizes.io/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/9_Papersizes.svg"
  },
  {
    title: "Sketchsheets",
    description: "Ready to print sketch sheet templates for UX designers.",
    category: "Other",
    job_types: ["Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://sketchsheets.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/9_Sketchsheets.svg"
  },
  {
    title: "Sharpen",
    description: "Practice design briefs & challenges for when you feel stuck.",
    category: "Other",
    job_types: ["Graphic Designer", "Web Designer", "UX/UI Designer"],
    price: "Free",
    url: "https://sharpen.design/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/9_Sharpen.svg"
  },
  {
    title: "SmallPDF",
    description: "All-in-one easy-to-use online PDF tools with tons of different quick features.",
    category: "Other",
    job_types: ["Graphic Designer", "Web Designer"],
    price: "Free",
    url: "https://smallpdf.com/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/9_Smallpdf.svg"
  },
  {
    title: "FocusFox",
    description: "An online markdown text editor with background sounds to help you focus.",
    category: "Other",
    job_types: ["Graphic Designer", "Web Designer"],
    price: "Free",
    url: "https://focusfox.co/?ref=thedesignindex.co",
    icon_link: "images/resource_icons/9_focusfox.svg"
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
  Object.keys(category_colours).forEach(function(category) {
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
  if (resources.length === 0) {
    let resourceString = '<div class="none"><img src="images/logo2.svg" style="width:100px;"><br><br><br>No resources found!</div>';
    let div = document.getElementsByClassName('box')[0];
    div.insertAdjacentHTML('beforeend', resourceString);
  } else {
    for (let resource of resources) {
      let resourceString = '<div class="resource-card">' +
        '        <a href="' + resource.url + '" rel="noopener" target="_blank">' +
        '          <div class="resource-card-wrapper">' +
        '            <div class="card-content">' +
        '              <div class="card-open">' +
        '                <img src="images/open.svg">' +
        '              </div>' +
        '              <div class="card-icon-container">' +
        '                <div class="card-icon">' +
        '                  <img draggable="false" class="card-icon-img" src="' + resource.icon_link + '" alt="' + resource.title + 'Logo"/>' +
        '                </div>' +
        '              </div>' +
        '              <div class="card-text-container">' +
        '                <div class="card-text card-category"' +
        '                     style="color: ' + category_colours[resource.category] + '">' + resource.category + '<span class="divider">\xa0\xa0|\xa0\xa0</span>' + resource.price  +'</div>' +
        '                <div class="card-text card-title">' + resource.title + '</div>' +
        '                <div class="card-text card-description">' + resource.description + '</div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '        </a>' +
        '      </div>'
      ;
      let div = document.getElementById(resource.category);
      let section = div.getElementsByClassName('categorySection')[0];
      section.insertAdjacentHTML('beforeend', resourceString);
    }
  }

  Object.keys(category_colours).forEach(function(category) {
    if (category !== "All-Categories") {
      let resourceDiv = document.getElementById(category);
      let section = resourceDiv.getElementsByClassName('categorySection')[0];
      if (!section.hasChildNodes()) {
        resourceDiv.style.display = "none";
        document.querySelectorAll("a[href='#" + category + "']")[0].style.display = "none";
      }
    }
  });
}
