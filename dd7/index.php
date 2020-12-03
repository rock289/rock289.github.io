<!DOCTYPE html>
<html>

<head>
  <meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <title>DD7 online game</title>
  <script src="js/jquery.js"></script>
  <script src="js/vegas.js"></script>
  <script src="js/jquery.countdown.js"></script>
  <!--<script src="js/check.js"></script>-->
  <link href="css/style.css" type="text/css" rel="stylesheet">
</head>

<body id="home" class="vegas-container">
  <div class="vegas-timer">
    <div class="vegas-timer-progress" style="transition-duration: 0ms;"></div>
  </div>
  <div class="vegas-slide vegas-transition-fade vegas-transition-fade-in vegas-transition-fade-out" style="transition: all 2000ms ease 0s;">
    <div class="vegas-slide-inner" style="background-image: url('img/slide1.jpg'); background-color: #eeeeee; background-position: center center; background-size: cover;"></div>
  </div>
  <div class="vegas-slide vegas-transition-fade vegas-transition-fade-in vegas-transition-fade-out" style="transition: all 2000ms ease 0s;">
    <div class="vegas-slide-inner" style="background-image: url('img/slide1.jpg'); background-color: #eeeeee; background-position: center center; background-size: cover;"></div>
  </div>
  <div class="vegas-slide vegas-transition-fade vegas-transition-fade-in vegas-transition-fade-out" style="transition: all 2000ms ease 0s;">
    <div class="vegas-slide-inner" style="background-image: url('img/slide1.jpg'); background-color: #eeeeee; background-position: center center; background-size: cover;"></div>
  </div>
  <div class="vegas-slide vegas-transition-fade vegas-transition-fade-in vegas-transition-fade-out" style="transition: all 2000ms ease 0s;">
    <div class="vegas-slide-inner" style="background-image: url('img/slide1.jpg'); background-color: #eeeeee; background-position: center center; background-size: cover;"></div>
  </div>
  <div class="vegas-slide vegas-transition-fade vegas-transition-fade-in" style="transition: all 2000ms ease 0s;">
    <div class="vegas-slide-inner" style="background-image: url('img/slide1.jpg'); background-color: #eeeeee; background-position: center center; background-size: cover;"></div>
  </div>
  <div class="vegas-timer vegas-timer-running">
    <div class="vegas-timer-progress" style="transition-duration: 2400ms;"></div>
  </div>
  <div class="container">
    <div class="row nav-wrapper">
      <div class="col-md-12 col-sm-12 col-xs-12 text-center">
        <a href="#"><img alt="Tinder" src="img/logo-white2.png" /></a>
      </div>
    </div>
    <div class="row hero-content text-center">
      <div class="col-md-6 col-md-offset-3 wowload fadeInRight">
        <div class="spacer"></div>
        <div class="content">
          <div class="clock">01:07</div>
          <h1>Pháp luật Việt Nam khuyến cáo, nghiêm cấm các hành vi cá cược đối với người dưới 18 tuổi.</h1>
        </div>
        <div class="step">
          <p>Bạn trên 18 tuổi?</p><a class="btn btn-end" href="https://www.dd7.com/?uagt=facebook5" onclick="trackCVR();"><span>Yes</span></a><a class="btn btn-end" href="https://free.moneylifee.top/?utm_medium=55fba785879f2191f3107469742cffa8d8102344&amp;utm_campaign=BACKOFFER&amp;cid={clickid}"
            span="">No</a>
        </div>
      </div>
    </div>
  </div>
  <p>
    <script language="JavaScript" type="text/javascript">
      function clear_delay(e) {
        window.clearTimeout(e)
      }

      function run_loading_run_1(e) {
        timeoutID1 = window.setTimeout(run_loading_1, e)
      }

      function run_loading_1() {
        $(".thank_for_close, .run_loading_2").fadeIn();
        $(".main_review").hide()
      }

      function run_loading_run_2(e) {
        timeoutID2 = window.setTimeout(run_loading_2, e)
      }

      function run_loading_2() {
        $(".thank_for_close, .run_loading_2").hide();
        $(".run_loading_3, .li_run_loading_1, .li_run_loading_2").fadeIn()
      }

      function run_loading_run_3(e) {
        timeoutID3 = window.setTimeout(run_loading_3, e)
      }

      function run_loading_3() {
        $(".run_loading_3").hide();
        $(".run_loading_4, .li_run_loading_3").fadeIn()
      }

      function run_loading_run_4(e) {
        timeoutID3 = window.setTimeout(run_loading_4, e)
      }

      function run_loading_4() {
        $(".run_loading_4, .loading").hide();
        $(".li_run_loading_4, li_run_loading_5, .run_loading_5, .show_end").fadeIn()
      }
      $(function() {
        $(document).on("click", ".next", function(e) {
          e.preventDefault();
          $(this).parent().hide().next().fadeIn()
        });
        $(document).on("click", ".run_loading", function(e) {
          e.preventDefault();
          $(this).parent().hide().next().fadeIn();
          $(".step4 .loading").show();
          run_loading_run_1("1000");
          run_loading_run_2("2250");
          run_loading_run_3("3000");
          run_loading_run_4("4000")
        })
      })
    </script>
    <script type="text/javascript">
      $("#example, body").vegas({
        delay: 2500,
        timer: false,
        shuffle: true,
        timer: true,
        transition: 'fade',
        transitionDuration: 2000,
        slides: [{
          src: 'img/slide1.jpg'
        }, {
          src: 'img/slide1.jpg'
        }, {
          src: 'img/slide1.jpg'
        }, {
          src: 'img/slide1.jpg'
        }]
      });
    </script>
    <script type="text/javascript">
      var interval = setInterval(function() {
        var timer = $('.clock').html();
        timer = timer.split(':');
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        seconds -= 1;
        if (minutes < 0) return clearInterval(interval);
        if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
        if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
        } else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
        $('.clock').html(minutes + ':' + seconds);
        if (minutes == 0 && seconds == 0) clearInterval(interval);
      }, 1000);
    </script>
  </p>


  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/translate.js"></script>
  <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  <script type="text/javascript">

  function trackCVR() {
      var img = document.createElement('img')
      img.height=1;
      img.width=1;
      img.display = "none"
      img.src = "https://www.facebook.com/tr?id=<?php  echo $_GET['pixel']; ?>&ev=lead&noscript=1"
      document.body.append(img)

  }
    </script>

  <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?php  echo $_GET['pixel']; ?>&ev=PageView&noscript=1"/>
</body>

</html>
