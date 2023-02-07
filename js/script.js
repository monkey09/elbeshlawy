let bshlawyContent = document.getElementsByClassName("text-content");
let products = document.getElementsByClassName("product");
let footerCols = document.getElementsByClassName("footer-col");
let briefContent = document.getElementsByClassName("brief-content");
let briefImages = document.getElementsByClassName("brief-image");
window.onload = function () {
  'use strict';
  scrollCollection ();
};
window.onscroll = function () {
  'use strict';
  scrollCollection ();
};
function scrollCollection () {
	'use strict';
  scrollActions (bshlawyContent, "text-content-animate", 70);
  scrollActions (products, "product-animate", 70);
  scrollActions (footerCols, "col-animate", 80);
  scrollActions (briefContent, "brief-content-animate", 70);
  scrollActions (briefImages, "brief-image-animate", 70);
}
function scrollActions (sections, action, heig) {
	'use strict';
  for (let i = 0; i < sections.length; i++) {
    scrollBehavior (sections[i], action, heig);
  }
}
function scrollBehavior (section, action, heig) {
  'use strict';
  let rect = section.getBoundingClientRect();
  if (rect.top <= (((window.innerHeight)*heig)/100)) {
    section.classList.add(action);
  }
}
