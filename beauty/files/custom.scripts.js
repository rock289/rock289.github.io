$('.slider-wrapper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
});

$(".page-alternative-1 button[data-modal]").click(function(e) {
  let productModal = $(e.target).data("modal");
  let modal = $(productModal);
    
  $(".section_modal").removeClass("modal--active");
  modal.addClass("modal--active");
  
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#modalanchor").offset().top
  }, 700);
});

// $(".suffix-index .page-alternative-1 .icon-check").click(function(e) {
//   $(".product-grid_item").removeClass("product--selected"); 
//   $(e.target).closest(".product-grid_item").addClass("product--selected");
// });

// $(".suffix-index .page-alternative-1 .product-grid_item").click(function(e) {
//   $(".product-grid_item").removeClass("product--selected"); 
//   $(e.target).closest(".product-grid_item").addClass("product--selected");
// });


$(".page-alternative-1 .checkout-mobile").click(function(e) {
  let productModal = $(".product--selected .icon-check").data("modal");
  let modal = $(productModal);
  
  $(".section_modal").removeClass("modal--active");
  modal.addClass("modal--active");
  
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#modalanchor").offset().top
  }, 700);
});

$(".page-alternative-1 .button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".page-8-section .section-content").offset().top
    }, 700);
});

$(".toggle-header").click(function(e) {
  let $this = $(e.target).closest(".toggle-wrapper");
  $(".toggle-wrapper").not($this).removeClass("open");
  $this.toggleClass("open");
});

$(".message-wrapper .text--wrapper a").click(function(e) {
  e.preventDefault();
  $(".message-wrapper").toggleClass("show-hidden");
});

$(".modal_close").click(function(e) {
  e.preventDefault();
  let modal = $(this).closest(".footer_modal");
  let body = $("body");
  body.removeClass("modal--open");
  modal.removeClass("open");
});

$(".site-footer__linklist-item a").click(function(e) {
  e.preventDefault();
  let id = $(this).attr('href');
  if(id.indexOf('#') != -1) {
    e.preventDefault();
    let modal = $(id);
    let body = $("body");
    body.addClass("modal--open");
    modal.addClass("open");
  }
});

$(".suffix-alternate_2 .site-footer__linklist-item a").click(function(e) {
  e.preventDefault();
  let id = $(this).attr('href');
  if(id.indexOf('#') != -1) {
    e.preventDefault();
    let modal = $(id);
    let body = $("body");
    body.addClass("modal--open");
    modal.addClass("open");
  }
});


$(".page-8c-plus-section .qty-wrapper input").val(0);
$(".page-8-plus-section .qty-wrapper input").val(0);
$(".page-8-section .qty-wrapper input").val(0);

$('.product_button--wrapper').on('click', '.button-plus', function(e) {
  calculateValue($(this));
});

$('.product_button--wrapper').on('click', '.button-minus', function(e) {
  calculateValue($(this));
});

// $('#shopify-section-page-8c-section .product_button--wrapper').on('click', '.button-plus', function(e) {
//   calculateValue($(this));
// });

// $('#shopify-section-page-8c-section .product_button--wrapper').on('click', '.button-minus', function(e) {
//   calculateValue($(this));
// });

// $('#shopify-section-page-8d-section .product_button--wrapper').on('click', '.button-plus', function(e) {
//   calculateValue($(this));
// });

// $('#shopify-section-page-8d-section .product_button--wrapper').on('click', '.button-minus', function(e) {
//   calculateValue($(this));
// });


function changeCheckoutURL(variant, qty) {
  let button = $("#product-form a");
  let hrefChanged = button.attr("href").replace("/cart/", "");
  let href = "";
  let end = "";
  if(button.attr("href").indexOf("?") >= 0) {
    end = "?" + button.attr("href").replace("/cart/", "").split("?")[1];
    href =  button.attr("href").replace("/cart/", "").substring(0, hrefChanged.indexOf('?')).split(",");
  } else {
    href =  button.attr("href").replace("/cart/", "").split(",");
  }
  
  let newHref = "/cart/";
  let newItem = true;
  
  for(var i = 0; i < href.length; i++) {
    let hrefVariant = href[i].split(":")[0];
    let hrefQty = href[i].split(":")[1];
    
    if(hrefVariant == variant) {
      if(qty > 0) { 
        newHref += variant + ":" + qty + ","; 
      }
      newItem = false;
    } else {
        newHref += href[i] + ",";
      
    }
  }
  
  if(newItem) {
    newHref += variant + ":" + qty + ",";
  }
  
  newHref = newHref.replace("/cart/,", "/cart/");
  newHref = newHref.replace(/,\s*$/, "");
  button.attr("href", newHref + end);
}

function removeVariant(variant, money) {
  let button = $("#product-form a");
  let hrefChanged = button.attr("href").replace("/cart/", "");
  let href = "";
  let end = "";
  if(button.attr("href").indexOf("?") >= 0) {
    end = "?" + button.attr("href").replace("/cart/", "").split("?")[1];
    href =  button.attr("href").replace("/cart/", "").substring(0, hrefChanged.indexOf('?')).split(",");
  } else {
    href =  button.attr("href").replace("/cart/", "").split(",");
  }

  let newHref = "/cart/";
    
  for(var i = 0; i < href.length; i++) {
    let hrefVariant = href[i].split(":")[0];
    let hrefQty = href[i].split(":")[1];

    if(hrefVariant == variant) {
      
    } else {
        newHref += href[i] + ",";
      
    }
  }
  
  let total = $('#product-form .price');
  let totalValue = $('#product-form .price').data('total') - money;
  
  total.data('total', totalValue);
  total.html(theme.Currency.formatMoney(total.data('total'), theme.moneyFormat));
    
  newHref = newHref.replace("/cart/,", "/cart/");
  newHref = newHref.replace(/,\s*$/, "");
  button.attr("href", newHref + end);
}

function changeTotalPrice(price) {
  let total = $('#product-form .price');
  let totalValue = $('#product-form .price').data('total') + price;
  
  total.data('total', totalValue);
  total.html(theme.Currency.formatMoney(total.data('total'), theme.moneyFormat));
}

function calculateValue($this) {
  let itemWrapper = $this.closest(".add_item--wrapper");
  let variant = itemWrapper.data("variant");
  let price = itemWrapper.data("price");
  let input = itemWrapper.find('input[type=number]');
  let inputValue = $this.hasClass("button-plus") ? 1 : -1;
  let currentInputVal = parseInt(input.val(), 10) + inputValue;
  let priceValue = $this.hasClass("button-plus") ? price : -Math.abs(price);
  
  if(currentInputVal > 0) {
    itemWrapper.addClass("product--selected");
  }
  
  if(currentInputVal === 0) {
    itemWrapper.removeClass("product--selected");
  }
  
  if(!isNaN(currentInputVal) && currentInputVal >= 0) {
    input.val(currentInputVal); 
    changeTotalPrice(priceValue);
    changeCheckoutURL(variant, currentInputVal);
  }
  
  // TEMP
  let first = $(".page-8-section .qty-wrapper input")[0];
  let second = $(".page-8-section .qty-wrapper input")[1];
  let third = $(".page-8-section .qty-wrapper input")[2];
  
  if($(third).val() == 0 && $(first).val() == 0 && $(second).val() == 0) {
    $("#product-form").addClass("hide");
  } else {
    $("#product-form").removeClass("hide");
  }
}

// Additional item: checkbox
$(".page-8-plus-section .icon-check").click(function(e) {
  let itemWrapper = $(e.target).closest(".add_item--wrapper");
  let input = itemWrapper.find('input[type=number]');
  let variant = itemWrapper.data("variant");
  let price = itemWrapper.data("price");
  let qty = itemWrapper.find('input[type=number]').val();
  let total = price * qty;
  
  if(itemWrapper.hasClass("product--selected")) {
    itemWrapper.removeClass("product--selected");
    input.val(0);
    console.log(total);
    removeVariant(variant, total);
    
  } else {
    itemWrapper.addClass("product--selected");
    calculateValue(itemWrapper.find(".button-plus"));
  }
});

$(".suffix-index .page-alternative-1 #shopify-section-page-8b-section .page-8-section .icon-check").click(function(e) {
  if(!$('body').hasClass("checkout")) {
    
    let itemWrapper = $(e.target).closest(".add_item--wrapper");
    let input = itemWrapper.find('input[type=number]');
    let variant = itemWrapper.data("variant");
    let price = itemWrapper.data("price");
    let qty = itemWrapper.find('input[type=number]').val();
    let total = price * qty;

    if(itemWrapper.hasClass("product--selected")) {
      itemWrapper.removeClass("product--selected");
      input.val(0);
      removeVariant(variant, total);
      
        // TEMP
  let first = $(".page-8-section .qty-wrapper input")[0];
  let second = $(".page-8-section .qty-wrapper input")[1];
  let third = $(".page-8-section .qty-wrapper input")[2];
  
  if($(third).val() == 0 && $(first).val() == 0 && $(second).val() == 0) {
    $("#product-form").addClass("hide");
  } else {
    $("#product-form").removeClass("hide");
  }

    } else {
      itemWrapper.addClass("product--selected");
      calculateValue(itemWrapper.find(".button-plus"));
    }
  }
});




$(".suffix-index .page-alternative-1 #shopify-section-page-8c-section .page-8-section .product--js").click(function(e) {
  let block = $(this).data("block");
  let wrapper = $(this).closest(".product-grid_item");
  let variant = wrapper.data("variant");
  let price = wrapper.data("price");

  if(!wrapper.hasClass("product--selected")) {
    $(".colour_item--wrapper").removeClass("error");
    if($(".product-grid_item.product--selected").length > 0) {
      let variantTitle = $(".product-grid_item.product--selected").data("variant") + ":" + "1";
      let variantPrice = $(".product-grid_item.product--selected").data("price");
      
      changeTotalPrice(-Math.abs(variantPrice));
      
      changeTotalPrice(price);
      let button = $("#product-form a");
      let hrefChanged = button.attr("href").replace(variantTitle, variant + ":1");
      if(button.attr("href").indexOf("?") >= 0) {
        hrefChanged = hrefChanged.substring(0, hrefChanged.indexOf('?'))
      }
      
  	  $('body').removeClass("checkout-2nd");
      button.attr("href", hrefChanged);
    } else {
      changeTotalPrice(price);
      changeCheckoutURL(variant, 1);
    }
    
    $(".product_colour").removeClass("selected");
    $('body').addClass("checkout");
    $("#product-form").removeClass("hide");
    $(".product-grid_item").not(wrapper).removeClass("product--selected");
    wrapper.addClass("product--selected");
    
    $('.colour_item--wrapper').removeClass("active");
    $('.colour_item--wrapper[data-block="' + block + '"]').addClass("active");
    
    $(".page-8-colour-section").slideDown( "300ms", function() {});
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".page-8-colour-section").offset().top
    }, 700);
  }
});

// Additional item: qty inputs
$('.page-8-plus-section').on('click', '.button-plus', function(e) {
  	calculateValue($(this));
});

$('.page-8-plus-section').on('click', '.button-minus', function(e) {
    calculateValue($(this));
});

// Additional item: display 
$( "#show_add" ).click(function() {
  $('body').addClass("checkout");
  $( ".page-8-plus-section" ).slideDown( "300ms", function() {});
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".page-8-plus-section").offset().top
  }, 700);
});

$( "#shopify-section-page-8c-section  .product--js .button--wrapper, #shopify-section-page-8d-section  .product--js .button--wrapper, #shopify-section-page-8test-section  .product--js .button--wrapper" ).click(function() {
  let block = $(this).data("block");
  let wrapper = $(this).closest(".product-grid_item");
  let variant = wrapper.data("variant");
  let price = wrapper.data("price");

  if(!wrapper.hasClass("product--selected")) {
    $(".colour_item--wrapper").removeClass("error");
    if($(".product-grid_item.product--selected").length > 0) {
      let variantTitle = $(".product-grid_item.product--selected").data("variant") + ":" + "1";
      let variantPrice = $(".product-grid_item.product--selected").data("price");
      
      changeTotalPrice(-Math.abs(variantPrice));
      
      changeTotalPrice(price);
      let button = $("#product-form a");
      let hrefChanged = button.attr("href").replace(variantTitle, variant + ":1");
      if(button.attr("href").indexOf("?") >= 0) {
        hrefChanged = hrefChanged.substring(0, hrefChanged.indexOf('?'))
      }
      
  	  $('body').removeClass("checkout-2nd");
      button.attr("href", hrefChanged);
    } else {
      changeTotalPrice(price);
      changeCheckoutURL(variant, 1);
    }
    
    $(".product_colour").removeClass("selected");
    $('body').addClass("checkout");
    $("#product-form").removeClass("hide");
    $(".product-grid_item").not(wrapper).removeClass("product--selected");
    wrapper.addClass("product--selected");
    
    $('.colour_item--wrapper').removeClass("active");
    $('.colour_item--wrapper[data-block="' + block + '"]').addClass("active");
    
    $(".page-8-colour-section").slideDown( "300ms", function() {});
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".page-8-colour-section").offset().top
    }, 700);
  }
});

// $( "#shopify-section-page-8d-section  .product--js .button--wrapper" ).click(function() {
//   let block = $(this).data("block");
//   let wrapper = $(this).closest(".product-grid_item");
//   let variant = wrapper.data("variant");
//   let price = wrapper.data("price");

//   if(!wrapper.hasClass("product--selected")) {
//     $(".colour_item--wrapper").removeClass("error");
//     if($(".product-grid_item.product--selected").length > 0) {
//       let variantTitle = $(".product-grid_item.product--selected").data("variant") + ":" + "1";
//       let variantPrice = $(".product-grid_item.product--selected").data("price");
      
//       changeTotalPrice(-Math.abs(variantPrice));
      
//       changeTotalPrice(price);
//       let button = $("#product-form a");
//       let hrefChanged = button.attr("href").replace(variantTitle, variant + ":1");
//       if(button.attr("href").indexOf("?") >= 0) {
//         hrefChanged = hrefChanged.substring(0, hrefChanged.indexOf('?'))
//       }
      
//   	  $('body').removeClass("checkout-2nd");
//       button.attr("href", hrefChanged);
//     } else {
//       changeTotalPrice(price);
//       changeCheckoutURL(variant, 1);
//     }
    
//     $(".product_colour").removeClass("selected");
//     $('body').addClass("checkout");
//     $("#product-form").removeClass("hide");
//     $(".product-grid_item").not(wrapper).removeClass("product--selected");
//     wrapper.addClass("product--selected");
    
//     $('.colour_item--wrapper').removeClass("active");
//     $('.colour_item--wrapper[data-block="' + block + '"]').addClass("active");
    
//     $(".page-8-colour-section").slideDown( "300ms", function() {});
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $(".page-8-colour-section").offset().top
//     }, 700);
//   }
// });

$( "#show_additional_product" ).click(function() {
  let selecteColour = $('.colour_item--wrapper.active .product_colour.selected').data("colour");
  

  let checkoutButton = $("#product-form a");
  let href = checkoutButton.attr("href");
  if(checkoutButton.attr("href").indexOf("?") > -1) {
    $(".colour_item--wrapper").removeClass("error");
    

    $(this).addClass("hide");

    $( ".page-8c-plus-section" ).slideDown( "300ms", function() {});
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".page-8c-plus-section").offset().top
    }, 700);

    $('body').addClass("checkout-2nd");
    $('#product-form').addClass("hide--button");
  } else {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".page-8-colour-section").offset().top
    }, 700);
    $(".colour_item--wrapper.active").addClass("error");
  }

});


// Colours
$( ".product_colours--wrapper .product_colour" ).click(function() {
  let button = $(this);
  let mainImage = button.closest(".colour_item--wrapper").find(".product_image");
  let image = button.data("image");
  let checkoutButton = $("#product-form a");
  
  if(!button.hasClass("selected")) {    
    
    button.closest(".colour_item--wrapper").find(".product_colour").not(button).removeClass("selected");
    mainImage.attr("src", image);
    button.addClass("selected");
    let selecteColour = $('.colour_item--wrapper.active .product_colour.selected').data("colour");
    let href = checkoutButton.attr("href");
    
  	$('body').addClass("checkout-2nd");
    if(checkoutButton.attr("href").indexOf("?") >= 0) {
	 var regex = /=(\w+)\+?(\w+)?/;
   	  href =  href.replace(regex, "=" + selecteColour);
      checkoutButton.attr("href", href);
    } else {
      
      href =  href + "?attributes[colour]=" + selecteColour;
      checkoutButton.attr("href", href);
    }


  }
});


// Additional item: qty inputs
$('.page-8c-plus-section').on('click', '.button-plus', function(e) {
  	calculateValue($(this));
});

$('.page-8c-plus-section').on('click', '.button-minus', function(e) {
    calculateValue($(this));
});

$(".page-8c-plus-section .add_item--wrapper").click(function(e) {
  if (!$(e.target).hasClass("noselect")) {
    let itemWrapper = $(e.target).closest(".add_item--wrapper");
    console.log(itemWrapper);
    let input = itemWrapper.find('input[type=number]');
    let variant = itemWrapper.data("variant");
    let price = itemWrapper.data("price");
    let qty = itemWrapper.find('input[type=number]').val();
    let total = price * qty;

    if(itemWrapper.hasClass("product--selected")) {
      itemWrapper.removeClass("product--selected");
      input.val(0);
      removeVariant(variant, total);

    } else {
      itemWrapper.addClass("product--selected");
      calculateValue(itemWrapper.find(".button-plus"));
    }
  }
});

$('.mobile_slider').slick({
  infinite: true,
  slidesToShow: 1,
  dots: true,
  arrows: false,
  slidesToScroll: 1
});

$('#product-form a').on('click', function(e) {
    let checkoutButton = $("#product-form a");
    let href = checkoutButton.attr("href");
    if(checkoutButton.attr("href").indexOf("?") > -1) {
      $(".colour_item--wrapper").removeClass("error");
      
    } else {
      e.preventDefault();
      $([document.documentElement, document.body]).animate({
          scrollTop: $(".page-8-colour-section").offset().top
      }, 700);
      $(".colour_item--wrapper.active").addClass("error");
    }
});







// $(".suffix-index .page-alternative-1 #shopify-section-page-8c-section .page-8-section .simple_form").click(function(e) {

//   let wrapper = $(this).closest(".product-grid_item");


//   if(!wrapper.hasClass("product--selected")) {
//     $(".product-grid_item").not(wrapper).removeClass("product--selected");
//     wrapper.addClass("product--selected");
    
//   }
// });

$(".suffix-index .page-alternative-1 #shopify-section-page-8c-section .page-8-section .simple_form, .page-alternative-1 #shopify-section-page-8d-section .page-8-section .simple_form, .page-alternative-1 #shopify-section-page-8test-section .page-8-section .simple_form").click(function(e) {

  let wrapper = $(this).closest(".product-grid_item");


  if(!wrapper.hasClass("product--selected")) {
    $(".product-grid_item").not(wrapper).removeClass("product--selected");
    wrapper.addClass("product--selected");
    
  }
});


// $(".suffix-index .page-alternative-1 #shopify-section-page-8c-section .order_button_js, .page-alternative-1 #shopify-section-page-8d-section .order_button_js").click(function(e) {

//   e.preventDefault();
//   let splitURL = $(this).attr("href").split("/");
//   let lang;
//   let id;
//   let qty;
//   let currency = "";
  

//   if(splitURL.length > 3) {
//     lang = "/" + splitURL[1];
//      id = splitURL[3].split(":")[0];
//     qty = splitURL[3].split(":")[1];
    
//   } else {
//     lang = "";
//     id = splitURL[2].split(":")[0];
//     qty = splitURL[2].split(":")[1];
//   }
  
//   $.ajax({
//     type: "POST",
//     url: '/cart/clear.js',
//     success: function(){
//       $.ajax({
//         type: 'POST',     
//         async: false,
//         url: '/cart/add.js',
//         dataType: 'json',                              
//         data: {quantity:qty, id : id},           
//         success: function(response){
//           $( "#loading" ).fadeIn( "fast", function() { });
//           window.location.replace( lang + "/checkout" + currency);
//         }
//       });
//     },
//     dataType: 'json'
//   });
// });

// $(".page-alternative-1 #shopify-section-page-8test-section .order_button_js").click(function(e) {

//   e.preventDefault();
//   let splitURL = $(this).attr("href").split("/");
//   let lang;
//   let id;
//   let qty;
//   let currency = "";
  

//   if(splitURL.length > 3) {
//     lang = "/" + splitURL[1];
//      id = splitURL[3].split(":")[0];
//     qty = splitURL[3].split(":")[1];
    
//   } else {
//     lang = "";
//     id = splitURL[2].split(":")[0];
//     qty = splitURL[2].split(":")[1];
//   }
  
//   $.ajax({
//     type: "POST",
//     url: '/cart/clear.js',
//     success: function(){
//       $.ajax({
//         type: 'POST',     
//         async: false,
//         url: '/cart/add.js',
//         dataType: 'json',                              
//         data: {quantity:qty, id : id},           
//         success: function(response){
//           $( "#loading" ).fadeIn( "fast", function() { });
//           window.location.replace( lang + "/checkout" + currency);
//         }
//       });
//     },
//     dataType: 'json'
//   });
// });






$("button.temp_add_to_cart").click(function(e) {
  e.preventDefault();
  let splitURL = $(this).attr("data-url");
  //window.location.replace( splitURL);
  window.location.href = splitURL;

});
