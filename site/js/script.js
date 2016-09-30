$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    alert("clicked 1");
    $(event.target).focus();
  });

/*
  $("#main-content").on('click', 'p', function(){
    console.log(this);
  })

*/
  
});

(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}



// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {


// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);

  
});


global.$dc = dc;

})(window);

  var recyle_process_switch = function(state){
    img_switch(state, 'recycle_process');

  };

  var rpf_switch = function(state){
    img_switch(state, 'recycle_plastic_fuel');

  };

  var pfw_switch = function(state){
    img_switch(state, 'products_from_waste');
  }

  var img_switch = function(state, source){
    var selector = '';
    var img_in = '';
    var img_out = '';

    if(source == 'recycle_process'){
      selector = '#recycle_process';
      img_in = 'recycle-02.png';
      img_out = 'recycle-01.png';

    }
    else if(source == 'recycle_plastic_fuel'){
      selector = '#recycle_plastic_fuel';
      img_in = 'rpf-02.png';
      img_out = 'rpf-01.png';   

    }
    else{
      selector = '#products_from_waste';
      img_in = 'prod-02.png';
      img_out = 'prod-01.png';   

    }


    if(state == 'in'){
      document.querySelector(selector + " h3").style.color = "#339900";
      document.querySelector(selector + " > div").style.backgroundImage = "url('https://jundolor.github.io/ryokudo/site/images/" + img_in + "')";
      document.querySelector(selector + " p").style.color = "#339900";
      document.querySelector(selector + " p a").style.color = "#339900";
      document.querySelector(selector).style.borderColor = "#339900";
    }
    else{
      document.querySelector(selector + " h3").style.color = "#333333";
      document.querySelector(selector + " > div").style.backgroundImage = "url('https://jundolor.github.io/ryokudo/site/images/" + img_out + "')";
      document.querySelector(selector + " p").style.color = "#333333";
      document.querySelector(selector + " p a").style.color = "#333333";
      document.querySelector(selector).style.borderColor = "#333333";
    }
  };