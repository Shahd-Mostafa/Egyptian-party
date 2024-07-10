$("#openMenu").click(function () {
  $(".side-menu").animate({ width: "250px" }, 50);
  $(".main-text").animate({ marginLeft: "250px" }, 50);
});

$("#closeBtn").click(function () {
  $(".side-menu").animate({ width: "0px" }, 50);
  $(".main-text").animate({ marginLeft: "0px" }, 50);
});

$(".scroller h3").click(function () {
  $(".scroller p").not($(this).next()).slideUp("slow");
  $(this).next().slideToggle("slow");
});

$('.side-menu a[href^="#"]').click(function () {
  let ahref = this.attr("href");
  let topOffset = $(ahref).offset().top;
  $("body,html").animate({ scrollTop: topOffset }, 2000);
});

function startCountDown(finalDate) {
  let endTime = new Date(finalDate);
  endTime = Date.parse(endTime) / 1000;
  let now = new Date();
  now = Date.parse(now) / 1000;
  let timeLeft = endTime - now;
  let days = Math.floor(timeLeft / 86400);
  let hours = Math.floor((timeLeft - days * 86400) / 3600);
  let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  let seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );
  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }
  $("#day").html(`${days} D`);
  $("#hour").html(`${hours} h`);
  $("#minute").html(`${minutes} m`);
  $("#second").html(`${seconds} s`);
  setInterval(function () {
    startCountDown(finalDate);
  }, 1000);
}

window.onload = function () {
  startCountDown("25 october 2023 9:56:00");
};

var maxCharacters = 100;
$("#message").keyup(function () {
  $("#char").text(maxCharacters - this.value.length);
  if (maxCharacters - this.value.length <= 0) {
    $("textarea").prop("disabled", true);
    $("#char").text("0");
    $("#charText").text(
      "0 characters left.Your available characters are finished"
    );
  }
});
