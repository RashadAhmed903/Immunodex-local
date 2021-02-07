$(document).ready(function () {
  var removeActiveByDefault = document.getElementById("removeActiveByDefault");
  removeActiveByDefault.classList.remove("active");
});

function useCaseHrefChange() {
  if (window.matchMedia("(max-width:767px)").matches) {
    $("#useCasesMB").attr("href", "#use-casesMB");
    $("#useCasesMB").attr("data-scrollto", "use-casesMB");
  } else if (window.matchMedia("(min-width:768px)").matches) {
    $("#useCasesMB").attr("href", "#use-cases");
    $("#useCasesMB").attr("data-scrollto", "use-cases");
  }
}

function useCaseHrefChange2() {
  if (window.matchMedia("(max-width:767px)").matches) {
    $("#useCasesMB").attr("href", "./index.html#use-casesMB");
    // $("#useCasesMB").attr("data-scrollto", "index.html#use-casesMB");
  } else if (window.matchMedia("(min-width:768px)").matches) {
    $("#useCasesMB").attr("href", "./index.html#use-cases");
    // $("#useCasesMB").attr("data-scrollto", "index.html#use-cases");
  }
}

function useCaseHrefChange3() {
  if (window.matchMedia("(max-width:767px)").matches) {
    $("#useCasesMB2").attr("href", "./index.html#use-casesMB");
    // $("#useCasesMB2").attr("data-scrollto", "index.html#use-casesMB");
  } else if (window.matchMedia("(min-width:768px)").matches) {
    $("#useCasesMB2").attr("href", "./index.html#use-cases");
    // $("#useCasesMB2").attr("data-scrollto", "index.html#use-cases");
  }
}

function hamburgerBtnControlInMB() {
  var hamburgerBtnInMB = document.getElementById("hamburgerBtnInMB");
  hamburgerBtnInMB.classList.remove("active");
}
