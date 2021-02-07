var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  // console.log('a');
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  // console.log('b');
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesR");
  var dots = document.getElementsByClassName("demo");
  // console.log(x.length);
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeRed", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeRed";
}

function chText1() {
  document.getElementById("useCasesMainText").innerHTML =
    "Employers who rely on in-person operations or physical interactions can allow staff recognized to be free from Covid-19 and in good health to return to the workplace. Staff and customers can be reassured that they are in premises posing a low risk of Covid-19 transmission.";
  document.getElementById("useCasesHolder").innerHTML = "An employee";
  document.getElementById("useCasesVerifier").innerHTML =
    "An employer (e.g. restaurant, shopping mall, grocery store, warehouse, etc.)";
}

function chText2() {
  document.getElementById("useCasesMainText").innerHTML =
    "Schools and daycares can allow students to return. Parents can rest assured knowing that their child is interacting with other certifiably healthy children and school staff. Coverage can be extended to include critical immunizations such as those for measles, pertussis etc";
  document.getElementById("useCasesHolder").innerHTML =
    "An student, teacher or school employee";
  document.getElementById("useCasesVerifier").innerHTML =
    "A school, nursery, daycare, university, etc.";
}

function chText3() {
  document.getElementById("useCasesMainText").innerHTML =
    "Airlines, trains and transportation industries can resume carrying passengers, especially in proposed “travel bubbles” aimed at reviving the tourism industry.  People can be allowed to cross borders upon presentation of a recognized proof-of-health that is tamperproof and verifiable. Likewise, hotels and hospitality sectors can resume serving guests.";
  document.getElementById("useCasesHolder").innerHTML =
    "A tourist, cross-border commuter, traveller";
  document.getElementById("useCasesVerifier").innerHTML =
    "Airport/train security control/check-in desk, border customs";
}

function chText4() {
  document.getElementById("useCasesMainText").innerHTML =
    "Physicians and healthcare workers can return to hospitals and clinics, especially for non-emergency yet important services such as ophthalmology, dermatology, dentistry and elective surgeries. Long-term care homes housing a highly vulnerable demographic could better mobilize and prioritize staff based on their health status. ";
  document.getElementById("useCasesHolder").innerHTML =
    "A doctor, healthcare worker, clinician, patient or visitor of patient.";
  document.getElementById("useCasesVerifier").innerHTML =
    "A hospital, clinic, long-term care home";
}
