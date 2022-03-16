var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var countDownDate5 = new Date("march 25, 2022 06:57:59").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate5 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-1").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-1").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);

var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-2").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-2").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-3").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-3").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);

var countDownDate1 = new Date("March 8, 2022 05:57:42").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate1 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-4").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-4").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate2 = new Date("march 30, 2022 05:41:27").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate2 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-5").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-5").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);

var countDownDate2 = new Date("march 30, 2022 05:41:27").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate2 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-6").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-6").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate2 = new Date("march 30, 2022 05:41:27").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate2 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-7").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-7").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);

var countDownDate2 = new Date("march 30, 2022 05:41:27").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate2 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-8").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-8").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate3 = new Date("April 01, 2022 16:54:33").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate3 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-9").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-9").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);

var countDownDate3 = new Date("April 01, 2022 16:54:33").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate3 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-10").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-10").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);

var countDownDate3 = new Date("April 01, 2022 16:54:33").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate3 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-11").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-11").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);

var countDownDate3 = new Date("April 01, 2022 16:54:33").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate3 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-11").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-11").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate3 = new Date("April 01, 2022 16:54:33").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate3 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-12").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-12").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate3 = new Date("April 01, 2022 16:54:33").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate3 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-13").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-13").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate3 = new Date("April 01, 2022 16:54:33").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate3 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-14").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-14").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate3 = new Date("April 01, 2022 16:54:33").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate3 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-15").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-15").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate3 = new Date("April 01, 2022 16:54:33").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate3 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-16").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-16").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate5 = new Date("march 25, 2022 06:57:59").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate5 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-16").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-16").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-17").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-17").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);

var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-18").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-18").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-19").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-19").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-20").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-20").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-21").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-21").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-22").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-22").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-23").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-23").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-24").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-24").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate6 = new Date("April 28, 2022 08:54:17").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate6 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-25").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-25").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate6 = new Date("April 28, 2022 08:54:17").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate6 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-26").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-26").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate6 = new Date("April 28, 2022 08:54:17").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate6 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-27").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-27").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate6 = new Date("April 28, 2022 08:54:17").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate6 - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-28").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-28").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-29").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-29").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-30").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-30").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-31").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-31").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
var countDownDate = new Date("April 14, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo-32").innerHTML = days + " - " + hours + "  :  "
  + minutes + "  :  " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-32").innerHTML = "زمان تخفیف به پایان رسیده است";
  }
}, 1000);
// $('.owl-carousel').owlCarousel({
//   rtl:true,
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })
$('.owl-carousel').owlCarousel({
  rtl:true,
  loop:true,
  center:true,
  items:1,
  margin:0,
  nav:true,
  autoplay:true,
  autoplayTimeout:3000,
  responsive:{
      0:{
          items:1
      },
      570:{
        items:2
      },
     800:{
          items:3
      },
      1100:{
          items:4
      }
  }
})
				