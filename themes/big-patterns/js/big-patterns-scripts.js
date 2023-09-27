(function ($) {
  "use strict"; // Start of use strict

  //Add Smooth scroll to inner page links
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value and links to this page before overriding default behavior
      if (this.getAttribute("href").startsWith("#")  && (this.getAttribute("href") !== "#bb-after-header") && (this.getAttribute("href") !== "#primary") && (this.getAttribute("href") !== "#") ){
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        if ($('#wpadminbar')[0]) {
          $('html, body').animate({
            scrollTop: ($(hash).offset().top - 160)
          }, 800);
        } else {
          $('html, body').animate({
            scrollTop: ($(hash).offset().top - 135)
          }, 800);
        }
      } // End if
    });
    $(window).scroll(function () {
      $('#site-navigation').toggleClass('scrolled', $(this).scrollTop() > 30);
      if (($(this).scrollTop() > 50) && ((window.innerHeight + window.scrollY) < ($(document).height() - 100 ) )) {
        $('#bb-back-to-top').fadeIn();
      } else {
        $('#bb-back-to-top').fadeOut();
      }
      if ($(this).scrollTop() < 25) {
        $('#bb-scroll-down').fadeIn();
      } else {
        $('#bb-scroll-down').fadeOut();
      }
      var adscreensmall = window.matchMedia("(max-width: 600px)");
      if (($(this).scrollTop() > 25) && $('#wpadminbar')[0] && adscreensmall.matches) {
        document.getElementsByClassName("bb-fixed-top")[0].style.top = '0px';
        document.getElementById("bb-popout").style.top = '0px';
        if ($(".bb-toggle-no-descrip-no-logo").length) {
          document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "32px";
        } else {
          document.getElementById("bb-toggle").style.top = "36px";
        }
      } else if ($('#wpadminbar')[0] && adscreensmall.matches){
        document.getElementsByClassName("bb-fixed-top")[0].style.top = '46px';
        document.getElementById("bb-popout").style.top = '46px';
        if ($(".bb-toggle-no-descrip-no-logo").length) {
          if ($(".bb-has-borders").length) {
            document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "74px";
          } else {
            document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "67px";
          }
        } else {
          if ($(".bb-has-borders").length) {
            document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "83px";
          } else {
            document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "78px";
          }
        }
      }
    });
    // scroll body to 0px on click
    $('#bb-back-to-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  });

  $("#bb-menu-icon").click(function () {
    $('#bb-popout').animate({ left: 0 }, 'slow', function () {
      // Animation complete.
    });
    $('#bb-menu-icon').css('display', 'none');
    $('#bb-close-icon').css('display', 'initial');
  });

  $("#bb-popout").focus(function () {
    $('#bb-popout').animate({ left: 0 }, 'slow', function () {
      // Animation complete.
    });
    $('#bb-menu-icon').css('display', 'none');
    $('#bb-close-icon').css('display', 'initial');
  });

  $("#bb-close-icon").click(function () {
    $('#bb-popout').animate({ left: -250 }, 'slow', function () {
      // Animation complete.
    });
    $('#bb-menu-icon').css('display', 'initial');
    $('#bb-close-icon').css('display', 'none');
  });

  $("body").click(function () {
    if ($('#bb-popout')[0].style.left == "0px") {
      $('#bb-popout').animate({ left: -250 }, 'slow', function () {
        // Animation complete.
      });
      $('#bb-menu-icon').css('display', 'initial');
      $('#bb-close-icon').css('display', 'none');
    }
  });

  $("#bb-in").focus(function () {
    if ($('#bb-popout')[0].style.left == "" || $('#bb-popout')[0].style.left == "-250px") {
      $('#bb-popout').animate({ left: 0 }, 'slow', function () {
        // Animation complete.
      });
      $('#bb-menu-icon').css('display', 'none');
      $('#bb-close-icon').css('display', 'initial');
    } else {
      $('#bb-popout').animate({ left: -250 }, 'slow', function () {
        // Animation complete.
      });
      $('#bb-menu-icon').css('display', 'initial');
      $('#bb-close-icon').css('display', 'none');
    }
  });

  $("#bb-out").focus(function () {
    if ($('#bb-popout')[0].style.left == "" || $('#bb-popout')[0].style.left == "0px") {
      $('#bb-popout').animate({ left: -250 }, 'slow', function () {
        // Animation complete.
      });
      $('#bb-menu-icon').css('display', 'initial');
      $('#bb-close-icon').css('display', 'none');
    } else {
      $('#bb-popout').animate({ left: 0 }, 'slow', function () {
        // Animation complete.
      });
      $('#bb-menu-icon').css('display', 'none');
      $('#bb-close-icon').css('display', 'initial');
    }
  });

  //if page reloads in the middle of the screen
  if ($(this).scrollTop() > 30) {
    $('#site-navigation').addClass('scrolled');
  }

  $('#bb-scroll-down').on('click', function (event) {
    var target = $('#bb-after-header');
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 150
      }, 400);
    }
  });

  //After the page loads
    $(window).on('load', function () {
      if ($('#bb-preloader').length) {
        $('#bb-preloader').delay(600).fadeOut('slow', function () {
          $(this).remove();
        });
      }
      //default value
      if ($(".bb-toggle-no-descrip-no-logo").length) {
        if ($(".bb-has-borders").length) {
          document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "37px";
        } else {
          document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "32px";
        }
      }
      //If it doesn't load at the top of the page then this will set it to make room for the navbar
      if (window.location.href.includes("#") && (document.documentElement.scrollTop > 135)) {
        if ($('#wpadminbar')[0]) {
          document.documentElement.scrollTop = document.documentElement.scrollTop - 160;
        } else {
          document.documentElement.scrollTop = document.documentElement.scrollTop - 135;
        }
      }
      var ol = window.matchMedia("(max-width: 600px)");
      if ((ol.matches) && (document.body.scrollTop <= 30 || document.documentElement.scrollTop <= 30)) {
        bb_shrinkNavStuff();
      }

      bb_adminBarAdjust();
      
      /*Extra space is formed on mobile applications.  It pushes the menu button out of position.
      This can not be updated at the CSS level.*/
      if (document.getElementsByClassName("wp-block-search__label screen-reader-text")[0]) {
        $('.wp-block-search__label.screen-reader-text').width(0);
      }

      //js sometimes needs a second before height and width are available.
      if ($('#wp-custom-header img')[0]) {
        bb_sizeImageHI();
        setTimeout(bb_sizeImageHI, 5000);
        setTimeout(bb_sizeImageHI, 3000);
        setTimeout(bb_sizeImageHI, 1250);
        setTimeout(bb_sizeImageHI, 500);
      }

      //js sometimes needs a second before height and width are available.
      //now do it for feature images
      if ($('#bb-feature-image img')[0]) {
        bb_sizeImageFI();
        setTimeout(bb_sizeImageFI, 5000);
        setTimeout(bb_sizeImageFI, 3000);
        setTimeout(bb_sizeImageFI, 1250);
        setTimeout(bb_sizeImageFI, 500);
      }

      //js sometimes needs a second before height and width are available.
      //now do it for feature images
      if ($('#bb-back-image img')[0]) {
        bb_sizeImageBI();
        setTimeout(bb_sizeImageBI, 5000);
        setTimeout(bb_sizeImageBI, 3000);
        setTimeout(bb_sizeImageBI, 1250);
        setTimeout(bb_sizeImageBI, 500);
      }

      if ($('#secondary')) {
        setTimeout(sideSticker, 500);
      }
    });
    if ($(".site-branding .custom-logo").length) {
      var startingLogoWidth = document.getElementsByClassName("custom-logo")[0].width;
      var reducedLogoWidth = startingLogoWidth;
    } else if ($(".custom-logo").length) {
      var startingLogoWidth = document.getElementsByClassName("custom-logo")[0].width;
      var reducedLogoWidth = startingLogoWidth * .707;
    }

    var sidePiece = "";
    try {
      sidePiece = document.getElementById("secondary").innerHTML;
    } catch {
      //There would be an error when there is no sidebar.
    }
    var sidePiece2 = "";
    try {
      sidePiece2 = document.getElementById("bb-secondSide").innerHTML;
    } catch {
      //There would be an error when there is no sidebar.
    }
    var popOut = document.getElementById("bb-popout").innerHTML;
    var sideSlide = popOut + "<div id='bb-sideSlide'>" + sidePiece + sidePiece2 + "</div>";
    if (window.innerWidth < 751 && sidePiece) {
      document.getElementById("bb-popout").innerHTML = sideSlide;
      try {
        document.getElementsByClassName("bb-alignrightstyle")[0].style.display = "none";
      } catch {
        //There would be an error when there is no sidebar.
      }
      try {
        document.getElementsByClassName("bb-alignrightstyle")[1].style.display = "none";
      } catch {
        //There would be an error when there is no sidebar.
      }
    }

    function bb_adminBarAdjust() {
      if ($('#wpadminbar')[0]){
        var adminWidth = window.matchMedia("(min-width: 783px)");
        if (adminWidth.matches) {
          document.getElementsByClassName("bb-fixed-top")[0].style.top = '32px';
          document.getElementById("bb-popout").style.top = '32px';
          document.getElementById("bb-popout").style.height = '92%';
          if ($(".bb-toggle-no-descrip-no-logo").length) {
            if ($(".bb-has-borders").length) {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "70px";
            } else {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "62px";
            }
            document.getElementById("site-navigation").style.top = "32px";
          } else {
            if ($(".bb-has-borders").length) {
              document.getElementById("bb-toggle").style.top = "83px";
            } else {
              document.getElementById("bb-toggle").style.top = "78px";
            }
          }
        } else {
          document.getElementsByClassName("bb-fixed-top")[0].style.top = '46px';
          document.getElementById("bb-popout").style.top = '46px';
          document.getElementById("bb-popout").style.height = '92%';
          var adscreensmall = window.matchMedia("(max-width: 600px)");
          if ($(".bb-toggle-no-descrip-no-logo").length) {
            if (adscreensmall.matches) {
              if ($(".bb-has-borders").length) {
                document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "74px";
              } else {
                document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "67px";
              }
            } else {
              if ($(".bb-has-borders").length) {
                document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "83px";
              } else {
                document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "78px";
              }
            }
            document.getElementById("site-navigation").style.top = "46px";
          } else {
            if (adscreensmall.matches) {
              document.getElementById("bb-toggle").style.top = "83px";
            } else {
              document.getElementById("bb-toggle").style.top = "92px";
            }
          }
        }
      }
    }

    function sideSticker() {
      if ($('#wpadminbar')[0] && $('.bb-sideStick')[0]){
        $('.bb-sideStick')[0].style.top = "170px";
      }
      //if there are two sidebars
      var bb_second_sidebar;
      var bb_buffer = 100;//make sure that there is room to scroll
      if (document.getElementsByClassName("bb-sideStick")[1] && document.getElementsByClassName("bb-indie-left")[0]) {
        document.getElementsByClassName("bb-sideStick")[0].style.position = "relative";
        document.getElementsByClassName("bb-sideStick")[0].style.top = "0px";
        document.getElementsByClassName("bb-sideStick")[0].style.overflow = "visible";
        document.getElementsByClassName("bb-sideStick")[0].style.maxHeight = "100%";
        bb_second_sidebar = document.getElementsByClassName("bb-sideStick")[1].offsetHeight;
        if ((document.getElementsByClassName("bb-sideStick")[0].offsetHeight + bb_buffer + bb_second_sidebar)  > document.getElementsByClassName("bb-indie-left")[0].offsetHeight ) {
          document.getElementsByClassName("bb-sideStick")[1].style.position = "relative";
          document.getElementsByClassName("bb-sideStick")[1].style.top = "0px";
          document.getElementsByClassName("bb-sideStick")[1].style.overflow = "visible";
          document.getElementsByClassName("bb-sideStick")[1].style.maxHeight = "100%";
          var bb_newHeight = document.getElementsByClassName("bb-sideStick")[0].offsetHeight + bb_buffer + bb_second_sidebar;
          document.getElementsByClassName("bb-indie-left")[0].style.minHeight = bb_newHeight + "px";
        }
      }
      else if (document.getElementsByClassName("bb-sideStick")[0] && document.getElementsByClassName("bb-indie-left")[0]) {
        //firefox is inconsitent with handling single sidebars
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (isFirefox) {
          document.getElementsByClassName("bb-sideStick")[0].style.position = "relative";
          document.getElementsByClassName("bb-sideStick")[0].style.top = "0px";
          document.getElementsByClassName("bb-sideStick")[0].style.overflow = "visible";
          document.getElementsByClassName("bb-sideStick")[0].style.maxHeight = "100%";
        }
        if ((document.getElementsByClassName("bb-sideStick")[0].offsetHeight + bb_buffer)  > document.getElementsByClassName("bb-indie-left")[0].offsetHeight ) {
          document.getElementsByClassName("bb-sideStick")[0].style.position = "relative";
          document.getElementsByClassName("bb-sideStick")[0].style.top = "0px";
          document.getElementsByClassName("bb-sideStick")[0].style.overflow = "visible";
          document.getElementsByClassName("bb-sideStick")[0].style.maxHeight = "100%";
        }
      }
    }

    function bb_shrinkNavStuff() {
      if (document.getElementById("bb-site-title-top")) {
        var mq = window.matchMedia("(max-width: 1064px)");
        if (document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0] && !(mq.matches)) {
          document.getElementById("bb-site-title-top").style.fontSize = "21px";
        } else {
          document.getElementById("bb-site-title-top").style.fontSize = "25px";
        }
      }
      if (document.getElementById("bb-site-description-top")) {
        document.getElementById("bb-site-description-top").style.fontSize = "15px";
      }
      document.getElementById("bb-toggle").style.top = "37px";
      if ($('#wpadminbar')[0]){
        document.getElementById("bb-toggle").style.top = "68px";
        var adminWidth = window.matchMedia("(max-width: 783px)");
          if (adminWidth.matches) {
            document.getElementById("bb-toggle").style.top = "83px";
          }
      }
      if(document.getElementsByClassName("nav-menu")[0]) {
        document.getElementsByClassName("nav-menu")[0].style.paddingTop = "42px";
      }
      if ($(".bb-no-descrip-no-logo").length) {
        document.getElementsByClassName("bb-no-descrip-no-logo")[0].style.paddingTop = "30px";
        var bb_wideScreen = window.matchMedia("(min-width: 1065px)");
        if (!document.getElementsByClassName("bb-center-nav")[0] && document.getElementsByClassName("nav-menu")[0] && bb_wideScreen.matches) {
          document.getElementsByClassName("nav-menu")[0].style.paddingBottom = "15px";
        } else {
          document.getElementsByClassName("nav-menu")[0].style.paddingBottom = "0px";
        }
      }
      if ($(".bb-toggle-no-descrip-no-logo").length) {
        document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "25px";
        var adminWidth = window.matchMedia("(max-width: 600px)");
          if (adminWidth.matches) {
            if ($(".bb-has-borders").length) {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "30px";
            } else {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "25px";
            }
          }
        if ($('#wpadminbar')[0]){
          var adminWidth = window.matchMedia("(min-width: 783px)");
          if (adminWidth.matches) {
            document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "56px";
          } else {
            if ($(".bb-has-borders").length) {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "74px";
            } else {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "67px";
            }
          }
        }
      }
      if ($(".custom-logo").length) {
        document.getElementsByClassName("main-navigation")[0].getElementsByClassName("custom-logo")[0].width = reducedLogoWidth;
      }
      adminWidth = window.matchMedia("(min-width: 1065px)");
      if (document.getElementById('wpadminbar') && document.getElementsByClassName("bb-center-nav")[0] && document.getElementsByClassName("main-navigation")[0].getElementsByClassName("custom-logo-link")[0] && adminWidth.matches && document.getElementsByClassName("bb-fixed-top scrolled")[0]) {
        document.getElementsByClassName("bb-fixed-top scrolled")[0].style.top = '-55px';
      }
    }
    function bb_growNavStuff() {
      if (document.getElementById("bb-site-title-top")) {
        document.getElementById("bb-site-title-top").style.fontSize = "35px";
      }
      if (document.getElementById("bb-site-description-top")) {
        document.getElementById("bb-site-description-top").style.fontSize = "20px";
      }
      if ($(".bb-has-borders").length) {
        document.getElementById("bb-toggle").style.top = "53px";
      } else {
        document.getElementById("bb-toggle").style.top = "46px";
      }
      if ($('#wpadminbar')[0]){
        var adminWidth = window.matchMedia("(min-width: 783px)");
        if (adminWidth.matches) {
          document.getElementById("bb-toggle").style.top = "78px";
        } else {
          document.getElementById("bb-toggle").style.top = "92px";
        }
      }
      if(document.getElementsByClassName("nav-menu")[0]) {
        document.getElementsByClassName("nav-menu")[0].style.paddingTop = "50px";
      }
      if ($(".bb-no-descrip-no-logo").length) {
        document.getElementsByClassName("bb-no-descrip-no-logo")[0].style.paddingTop = "37px";
      }
      if ($(".bb-toggle-no-descrip-no-logo").length) {
        if ($(".bb-has-borders").length) {
          document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "37px";
        } else {
          document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "32px";
        }
        if ($('#wpadminbar')[0]){
          var adminWidth = window.matchMedia("(min-width: 783px)");
          if (adminWidth.matches) {
            if ($(".bb-has-borders").length) {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "70px";
            } else {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "62px";
            }
          } else {
            if ($(".bb-has-borders").length) {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "83px";
            } else {
              document.getElementsByClassName("bb-toggle-no-descrip-no-logo")[0].style.top = "78px";
            }
          }
        }
      }
      if ($(".custom-logo").length) {
        document.getElementsByClassName("custom-logo")[0].width = startingLogoWidth;
      }
      adminWidth = window.matchMedia("(min-width: 1065px)");
      if (document.getElementById('wpadminbar') && document.getElementsByClassName("bb-center-nav")[0] && document.getElementsByClassName("custom-logo-link")[0] && adminWidth.matches && document.getElementsByClassName("bb-fixed-top")[0]) {
        document.getElementsByClassName("bb-fixed-top")[0].style.top = '32px';
      }
    }

    function bb_screenAdjust() {
      bb_adminBarAdjust();
      if ($('#bb-feature-image img')[0]) {
        bb_sizeImageFI();
      }
      if ($('#wp-custom-header img')[0]) {
        bb_sizeImageHI();
      }
      if ($('#bb-back-image img')[0]) {
        bb_sizeImageBI();
      }
      if ($('#secondary')) {
        setTimeout(sideSticker, 500);
      }
      var sideWidth = window.matchMedia("(max-width: 750px)");
      if (sideWidth.matches) {
        if (sidePiece) {
          document.getElementById("bb-popout").innerHTML = sideSlide;
        }
        try {
          document.getElementsByClassName("bb-alignrightstyle")[0].style.display = "none";
        } catch (error) {
          //just keep going
        }
        try {
          document.getElementsByClassName("bb-alignrightstyle")[1].style.display = "none";
        } catch (error) {
          //just keep going
        }
      }
      sideWidth = window.matchMedia("(min-width: 751px)");
      if (sideWidth.matches) {
        if (document.getElementById("bb-sideSlide")) {
          document.getElementById("bb-sideSlide").style.display = "none";
        }
        try {
          document.getElementsByClassName("bb-alignrightstyle")[0].style.display = "block";
        } catch (error) {
          //just keep going
        }
        try {
          document.getElementsByClassName("bb-alignrightstyle")[1].style.display = "block";
        } catch (error) {
          //just keep going
        }
      }
      var mq = window.matchMedia("(max-width: 600px)");
      if ((mq.matches) && (document.body.scrollTop <= 30 || document.documentElement.scrollTop <= 30)) {
        bb_shrinkNavStuff();
      }
      var mqs = window.matchMedia("(min-width: 600px)");
      if ((mqs.matches) && (document.body.scrollTop <= 30 || document.documentElement.scrollTop <= 30)) {
        bb_growNavStuff();
      }
      if ((mqs.matches) && (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)) {
        bb_shrinkNavStuff();
      }
    }

    $(window).resize(function () {
      var ua = navigator.userAgent.toLowerCase();
      var isAndroid = ua.indexOf("android") > -1; 
      if ((document.activeElement.tagName === "INPUT") && isAndroid) {
        //This was probably triggered by an android keyboard so don't do anything.
      } else {
        bb_screenAdjust();
      }
    });

    window.addEventListener("orientationchange", function (event) {
      bb_screenAdjust();
    });

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      var mq = window.matchMedia("(min-width: 600px)");
      if (mq.matches) {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          bb_shrinkNavStuff();
        } else {
          bb_growNavStuff();
        }
      }
    }

    //placing a variable inside "$()" can throw an error,
    //and a fresh object should be called for cases of incomplete data
    //DON'T try to generalize and combine this with bb_sizeImageFI() or bb_sizeImageBI().
    //The differences are subtle but significant and not passable as arguments
    function bb_sizeImageHI() {
      if (!$('#wp-custom-header video')[0]) {//an image and video will throw an error
        function bb_bigHorizontal() {
          height = height * proportionWidth;
          var adjust = proportionWidth * 100;
          var move = adjust/2;
          move = (height - winHeight)/2;
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.minWidth = "100vw";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.minHeight = height.toString() + "px";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.maxWidth = "100vw";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.maxHeight = height.toString() + "px";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.top = "-" + move.toString() + "px";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.left = "0px";
        }
        function bb_bigVertical() {
          width = width * proportionHeight;
          var adjust = proportionHeight * 100;
          var move = adjust/2;
          move = (width - winWidth)/2;
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.minHeight = "100vh";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.minWidth = width.toString() + "px";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.maxHeight = "100vh";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.maxWidth = width.toString() + "px";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.left = "-" + move.toString() + "px";
          document.getElementById("wp-custom-header").getElementsByTagName('img')[0].style.top = "0px";
        }
        function bb_padHorizontal() {
          width = width * proportionHeight;
          var diff = winWidth - width;
          var pad = diff / 2;
          $('#wp-custom-header img')[0].style.paddingTop = "0px";
          $('#wp-custom-header img')[0].style.paddingBottom = "0px";
          $('#wp-custom-header img')[0].style.paddingLeft = pad.toString() + "px";
          $('#wp-custom-header img')[0].style.paddingRight = pad.toString() + "px";
        }
        function bb_padVertical() {
          height = height * proportionWidth;
          var diff = winHeight - height;
          var pad = diff / 2;
          $('#wp-custom-header img')[0].style.paddingLeft = "0px";
          $('#wp-custom-header img')[0].style.paddingRight = "0px";
          $('#wp-custom-header img')[0].style.paddingTop = pad.toString() + "px";
          $('#wp-custom-header img')[0].style.paddingBottom = pad.toString() + "px"
        }
        var height = $('#wp-custom-header img')[0].naturalHeight;
        var width = $('#wp-custom-header img')[0].naturalWidth;
        //for mobile address bar or other interior mobile screen manipulation
        var winWidth = $('#wp-custom-header').width();
        var winHeight = $('#wp-custom-header').height();
        var proportionHeight = winHeight / height;
        var proportionWidth = winWidth / width;
        if (winHeight > winWidth) {
          if (proportionHeight < proportionWidth) {
            if (document.getElementsByClassName("bb-bigHeaderImage")[0]) {
              bb_bigHorizontal();
            } else {
              bb_padHorizontal();
            }
          } else {
            if (document.getElementsByClassName("bb-bigHeaderImage")[0]) {
              bb_bigVertical();
            } else {
              bb_padVertical();
            }
          }
        } else {
          if (proportionHeight > proportionWidth) {
            if (document.getElementsByClassName("bb-bigHeaderImage")[0]) {
              bb_bigVertical();
            } else {
              bb_padVertical();
            }
          } else {
            if (document.getElementsByClassName("bb-bigHeaderImage")[0]) {
              bb_bigHorizontal();
            } else {
              bb_padHorizontal();
            }
          }
        }
      }
    }

    //placing a variable inside "$()" can throw an error
    //and a fresh object should be called for cases of incomplete data
    //DON'T try to generalize and combine this with bb_sizeImageHI() or bb_sizeImageBI().
    //The differences are subtle but significant and not passable as arguments.
    function bb_sizeImageFI() {
      function bb_bigHorizontal() {
        height = height * proportionWidth;
        var adjust = proportionWidth * 100;
        var move = adjust/2;
        move = (height - winHeight)/2;
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.minWidth = "100vw";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.minHeight = height.toString() + "px";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.maxWidth = "100vw";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.maxHeight = height.toString() + "px";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.top = "-" + move.toString() + "px";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.left = "0px";
      }
      function bb_bigVertical() {
        width = width * proportionHeight;
        var adjust = proportionHeight * 100;
        var move = adjust/2;
        move = (width - winWidth)/2;
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.minHeight = "100vh";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.minWidth = width.toString() + "px";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.maxHeight = "100vh";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.maxWidth = width.toString() + "px";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.left = "-" + move.toString() + "px";
        document.getElementById("bb-feature-image").getElementsByTagName('img')[0].style.top = "0px";
      }
      function bb_padHorizontal() {
        width = width * proportionHeight;
        var diff = winWidth - width;
        var pad = diff / 2;
        $('#bb-feature-image img')[0].style.paddingTop = "0px";
        $('#bb-feature-image img')[0].style.paddingBottom = "0px";
        $('#bb-feature-image img')[0].style.paddingLeft = pad.toString() + "px";
        $('#bb-feature-image img')[0].style.paddingRight = pad.toString() + "px";
      }
      function bb_padVertical() {
        height = height * proportionWidth;
        var diff = winHeight - height;
        var pad = diff / 2;
        $('#bb-feature-image img')[0].style.paddingLeft = "0px";
        $('#bb-feature-image img')[0].style.paddingRight = "0px";
        $('#bb-feature-image img')[0].style.paddingTop = pad.toString() + "px";
        $('#bb-feature-image img')[0].style.paddingBottom = pad.toString() + "px";
      }
      if ($('.is-style-bb-block-fi-full')[0]) {
        $('.is-style-bb-block-fi-full').addClass('bb-bigFI');
      }
      var height = $('#bb-feature-image img')[0].naturalHeight;
      var width = $('#bb-feature-image img')[0].naturalWidth;
      //for mobile address bar or other interior mobile screen manipulation
      var winWidth = $('#bb-feature-image').width();
      var winHeight = $('#bb-feature-image').height();
      var proportionHeight = winHeight / height;
      var proportionWidth = winWidth / width;
      if (winHeight > winWidth) {
        if (proportionHeight < proportionWidth) {
          if (document.getElementsByClassName("bb-bigFI")[0]) {
            bb_bigHorizontal();
          } else {
            bb_padHorizontal();
          }
        } else {
          if (document.getElementsByClassName("bb-bigFI")[0]) {
            bb_bigVertical();
          } else {
            bb_padVertical();
          }
        }
      } else {
        if (proportionHeight > proportionWidth) {
          if (document.getElementsByClassName("bb-bigFI")[0]) {
            bb_bigVertical();
          } else {
            bb_padVertical();
          }
        } else {
          if (document.getElementsByClassName("bb-bigFI")[0]) {
            bb_bigHorizontal();
          } else {
            bb_padHorizontal();
          }
        }
      }
    }

    //placing a variable inside "$()" can throw an error
    //and a fresh object should be called for cases of incomplete data
    //DON'T try to generalize and combine this with bb_sizeImageHI() or bb_sizeImageFI().
    //The differences are subtle but significant and not passable as arguments.
    function bb_sizeImageBI() {
      function bb_bigHorizontal() {
        height = height * proportionWidth;
        var adjust = proportionWidth * 100;
        var move = adjust/2;
        move = (height - winHeight)/2;
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.minWidth = "100vw";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.minHeight = height.toString() + "px";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.maxWidth = "100vw";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.maxHeight = height.toString() + "px";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.top = "-" + move.toString() + "px";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.left = "0px";
      }
      function bb_bigVertical() {
        width = width * proportionHeight;
        var adjust = proportionHeight * 100;
        var move = adjust/2;
        move = (width - winWidth)/2;
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.minHeight = "100vh";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.minWidth = width.toString() + "px";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.maxHeight = "100vh";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.maxWidth = width.toString() + "px";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.left = "-" + move.toString() + "px";
        document.getElementById("bb-back-image").getElementsByTagName('img')[0].style.top = "0px";
      }
      function bb_padHorizontal() {
        width = width * proportionHeight;
        var diff = winWidth - width;
        var pad = diff / 2;
        $('#bb-back-image img')[0].style.paddingTop = "0px";
        $('#bb-back-image img')[0].style.paddingBottom = "0px";
        $('#bb-back-image img')[0].style.paddingLeft = pad.toString() + "px";
        $('#bb-back-image img')[0].style.paddingRight = pad.toString() + "px";
      }
      function bb_padVertical() {
        height = height * proportionWidth;
        var diff = winHeight - height;
        var pad = diff / 2;
        $('#bb-back-image img')[0].style.paddingLeft = "0px";
        $('#bb-back-image img')[0].style.paddingRight = "0px";
        $('#bb-back-image img')[0].style.paddingTop = pad.toString() + "px";
        $('#bb-back-image img')[0].style.paddingBottom = pad.toString() + "px";
      }
      var height = $('#bb-back-image img')[0].naturalHeight;
      var width = $('#bb-back-image img')[0].naturalWidth;
      //for mobile address bar or other interior mobile screen manipulation
      var winWidth = $('#bb-back-image').width();
      var winHeight = $('#bb-back-image').height();
      var proportionHeight = winHeight / height;
      var proportionWidth = winWidth / width;
      if (winHeight > winWidth) {
        if (proportionHeight < proportionWidth) {
          if (document.getElementsByClassName("bb-bigBG")[0]) {
            bb_bigHorizontal();
          } else {
            bb_padHorizontal();
          }
        } else {
          if (document.getElementsByClassName("bb-bigBG")[0]) {
            bb_bigVertical();
          } else {
            bb_padVertical();
          }
        }
      } else {
        if (proportionHeight > proportionWidth) {
          if (document.getElementsByClassName("bb-bigBG")[0]) {
            bb_bigVertical();
          } else {
            bb_padVertical();
          }
        } else {
          if (document.getElementsByClassName("bb-bigBG")[0]) {
            bb_bigHorizontal();
          } else {
            bb_padHorizontal();
          }
        }
      }
    }

    //The size of the logo on small screns can't be determined until after the page is loaded.
    var mq = window.matchMedia("(max-width: 600px)");
    if ((mq.matches) && (document.body.scrollTop <= 30 || document.documentElement.scrollTop <= 30)) {
      if ($(".custom-logo").length) {
        document.getElementsByClassName("main-navigation")[0].getElementsByClassName("custom-logo")[0].width = reducedLogoWidth;
      }
    }

    //For the main background video
    if ($('.bb-backVid video')[0]) {
      $('.bb-backVid video')[0].controls = false;
      $('.bb-backVid video')[0].muted = true;
      $('.bb-backVid video')[0].autoplay = true;
      $('.bb-backVid video')[0].loop = true;
    }
  //END OF OLD ERROR PAGE CHECK AREA
})(jQuery);

