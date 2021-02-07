


$(document).ready(function() {
    switchSelected2();
});

var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var _this = this;
	var _sheetId = "pseudoStyles";
	var _head = document.head || document.getElementsByTagName('head')[0];
	var _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	var className = "pseudoStyle" + UID.getNew();

	_this.className +=  " "+className;

	_sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
	_head.appendChild(_sheet);
	return this;
};

var firstInfoTitle = [
  "First, a user books a doctor's appointment.",
  "First, request a health screening from your user.",
];
var firstInfoDesc = [
  "An authorized user books an appointment for a health assessment or diagnostic testing (as mandated by your organization or law) with a physician on Immunodex. Our app reminds them with location and time prior to the reservation.",
  "An authorized user (staff, student or client) is notified to complete a health screening prior to entering your premises. This notification can be set to automatically run at regular intervals.",
];
var firstImg = [
  "../images/immunodex-how-1-new-2.gif",
  "../images/how-it-works/health-declaration/How_1.gif",
];

var secInfoTitle = [
  "Next, the physician performs the assessment & issues the credential",
  "Next, the user completes the screening",
];
var secInfoDesc = [
  "After onsite check-in at the healthcare provider's, the user is assessed by a physician or tested, creating a record in their VHP. The outcomes are sent directly to the VHP, with any" +
    "doctor's orders" +
    " if needed.",
  "The user self-assess their health, reporting any symptoms and contact, travel and medical histories in a few taps. Our easy-to-use interface is designed for the elderly and children in mind.",
];
var secImg = [
  "../images/immunodex-how-2-new.png",
  "../images/how-it-works/health-declaration/how 2.png",
];

var thirdInfoTitle = [
  "The user's VHP is ready for inspection",
  "The user's VHP is ready for inspection",
];
var thirdInfoDesc = [
  "With their consent, you can now inspect your user's VHP, exchanging information via a QR code and authorizing them to proceed with the task at hand.",
  "With their consent, you can now inspect your user's VHP, exchanging information via a QR code and authorizing them to proceed with the task at hand.",
  ,
];
var thirdImg = [
  "../images/immunodex-how-3.gif",
  "../images/immunodex-how-3.gif",
];

// web
var htwSelected1 = document.getElementById("htw-selected1");
var htwSelected2 = document.getElementById("htw-selected2");

// mb
var htwSelectedMB1 = document.getElementById("htw-selectedMB1");
var htwSelectedMB2 = document.getElementById("htw-selectedMB2");

// content 1-3, title;desc;img
var htwInfo1Title = document.getElementById("htw-info1Title");
var htwInfo1Desc = document.getElementById("htw-info1Desc");
var htwInfo1Img = document.getElementById("htw-info1Img");

var htwInfo2Title = document.getElementById("htw-info2Title");
var htwInfo2Desc = document.getElementById("htw-info2Desc");
var htwInfo2Img = document.getElementById("htw-info2Img");

var htwInfo3Title = document.getElementById("htw-info3Title");
var htwInfo3Desc = document.getElementById("htw-info3Desc");
var htwInfo3Img = document.getElementById("htw-info3Img");

var htwInfo4Title = document.getElementById("htw-info4Title");
var htwInfo4Desc = document.getElementById("htw-info4Desc");
var htwInfo4Img = document.getElementById("htw-info4Img");
var htwStep4wrapper = document.getElementById("htw-step4wrapper");

var htwStep3wrapper = document.getElementById("htw-step3wrapper");

function switchSelected2() {
  if (
    htwSelectedMB1.classList.contains("htw-selected") &&
    htwSelected1.classList.contains("htw-selected")
  ) {
    htwStep4wrapper.classList.add("d-block");
    htwStep4wrapper.classList.remove("d-none");
    htwStep3wrapper.pseudoStyle("after","display","block");

    htwSelectedMB2.classList.add("htw-selected", "text-white");
    htwSelected2.classList.add("htw-selected", "text-white");

    htwSelectedMB1.classList.remove("htw-selected", "text-white");
    htwSelected1.classList.remove("htw-selected", "text-white");
    changeContent(1);
  }
}

function switchSelected1() {
  if (
    htwSelectedMB2.classList.contains("htw-selected") &&
    htwSelected2.classList.contains("htw-selected")
  ) {
    htwStep4wrapper.classList.add("d-none");
    htwStep4wrapper.classList.remove("d-block");
    htwStep3wrapper.pseudoStyle("after","display","none");

    htwSelected1.classList.add("htw-selected", "text-white");
    htwSelectedMB1.classList.add("htw-selected", "text-white");

    htwSelectedMB2.classList.remove("htw-selected", "text-white");
    htwSelected2.classList.remove("htw-selected", "text-white");
    changeContent(0);
  }
}

function changeContent(index) {
  htwInfo1Title.innerHTML = firstInfoTitle[index];
  htwInfo1Desc.innerHTML = firstInfoDesc[index];
  htwInfo1Img.src = firstImg[index];

  htwInfo2Title.innerHTML = secInfoTitle[index];
  htwInfo2Desc.innerHTML = secInfoDesc[index];
  htwInfo2Img.src = secImg[index];

  htwInfo3Title.innerHTML = thirdInfoTitle[index];
  htwInfo3Desc.innerHTML = thirdInfoDesc[index];
  htwInfo3Img.src = thirdImg[index];
}
