"use strict";

(function Efecss() {
  //################################################################
  // Capture all elements with efecss data attribute
  //################################################################

  var efecss_elements = document.querySelectorAll('[data-efecss]');

  //################################################################
  // Set initial attributes
  //################################################################

  Array.prototype.forEach.call(efecss_elements, function (efecss_element) {
    // If animation delay is set up, it overrides css default value
    if (efecss_element.dataset.animationDelay) efecss_element.style.animationDelay = efecss_element.dataset.animationDelay;

    // If animation duration is set up, it overrides css default value
    if (efecss_element.dataset.animationDuration) efecss_element.style.animationDuration = efecss_element.dataset.animationDuration;
  });

  //################################################################
  // Set initial attributes
  //################################################################

  var _startAnimation = function _startAnimation(efecss_element) {
    return efecss_element.classList.add(efecss_element.dataset.efecss);
  };

  var _verifyElementOnScreen = function _verifyElementOnScreen() {
    setTimeout(function () {
      Array.prototype.forEach.call(efecss_elements, function (efecss_element) {
        // If element is already animated, it is ignored
        if (efecss_element.dataset.alreadyAnimated) return;

        // Captures elements bounding box
        var element_box = efecss_element.getBoundingClientRect();
        var element_box_top = element_box.top + parseInt(efecss_element.dataset.animationOffset) || element_box.top;
        var element_box_bottom = element_box.bottom - parseInt(efecss_element.dataset.animationOffset) || element_box.bottom;

        // If element is on offset area, animate it
        if (element_box_bottom > 0 && element_box_top < window.innerHeight) {
          _startAnimation(efecss_element);
          efecss_element.dataset.alreadyAnimated = true;
        }
      });
    });
  };

  //################################################################
  // Initialize Event Listeners
  //################################################################

  window.addEventListener("load", _verifyElementOnScreen, false);
  window.addEventListener("scroll", _verifyElementOnScreen, false);
  window.addEventListener("resize", _verifyElementOnScreen, false);
})();
//# sourceMappingURL=script.js.map
