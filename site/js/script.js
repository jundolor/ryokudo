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
  if(state == 'in'){
    console.log('went in');
    console.log(document.querySelector("#recycle_process"));
    document.querySelector("#recycle_process h3").style.color = "#339900";
    document.querySelector("#recycle_process > div").style.backgroundImage = "url('https://jundolor.github.io/ryokudo/site/images/recycle-02.png')";
    document.querySelector("#recycle_process p").style.color = "#339900";
    document.querySelector("#recycle_process p a").style.color = "#339900";
    document.querySelector("#recycle_process").style.borderColor = "#339900";
  }
  else{
    console.log('went out');
    document.querySelector("#recycle_process h3").style.color = "#333333";
    document.querySelector("#recycle_process > div").style.backgroundImage = "url('https://jundolor.github.io/ryokudo/site/images/recycle-01.png')";
    document.querySelector("#recycle_process p").style.color = "#333333";
    document.querySelector("#recycle_process p a").style.color = "#333333";
    document.querySelector("#recycle_process").style.borderColor = "#333333";
  }
};

var rpf_switch = function(state){
  if(state == 'in'){
    console.log('went in');
    console.log(document.querySelector("#recycle_plastic_fuel"));
    document.querySelector("#recycle_plastic_fuel h3").style.color = "#339900";
    document.querySelector("#recycle_plastic_fuel > div").style.backgroundImage = "url('https://jundolor.github.io/ryokudo/site/images/rpfuel_02.png')";
    document.querySelector("#recycle_plastic_fuel p").style.color = "#339900";
    document.querySelector("#recycle_plastic_fuel p a").style.color = "#339900";
    document.querySelector("#recycle_plastic_fuel").style.borderColor = "#339900";
  }
  else{
    console.log('went out');
    document.querySelector("#recycle_plastic_fuel h3").style.color = "#333333";
    document.querySelector("#recycle_plastic_fuel > div").style.backgroundImage = "url('https://jundolor.github.io/ryokudo/site/images/rpfuel_01.png')";
    document.querySelector("#recycle_plastic_fuel p").style.color = "#333333";
    document.querySelector("#recycle_plastic_fuel p a").style.color = "#333333";
    document.querySelector("#recycle_plastic_fuel").style.borderColor = "#333333";
  }
};

var pfw_switch = function(state){
  if(state == 'in'){
    console.log('went in');
    console.log(document.querySelector("#products_from_waste"));
    document.querySelector("#products_from_waste h3").style.color = "#339900";
    document.querySelector("#products_from_waste > div").style.backgroundImage = "url('https://jundolor.github.io/ryokudo/site/images/prod-02.png')";
    document.querySelector("#products_from_waste p").style.color = "#339900";
    document.querySelector("#products_from_waste p a").style.color = "#339900";
    document.querySelector("#products_from_waste").style.borderColor = "#339900";
  }
  else{
    console.log('went out');
    document.querySelector("#products_from_waste h3").style.color = "#333333";
    document.querySelector("#products_from_waste > div").style.backgroundImage = "url('https://jundolor.github.io/ryokudo/site/images/prod-01.png')";
    document.querySelector("#products_from_waste p").style.color = "#333333";
    document.querySelector("#products_from_waste p a").style.color = "#333333";
    document.querySelector("#products_from_waste").style.borderColor = "#333333";
  }
};