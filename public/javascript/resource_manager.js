function filterCategory(category) {

}

jQuery("#category-item").click(function () {
  e.stopPropagation();
  console.log('category: ' + jQuery("#category-item").innerText);
  filterCategory(jQuery("#category-item").innerText);
});
