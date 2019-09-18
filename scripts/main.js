// Make the page take up 100% width
$("body").css("padding-top", $(".navbar").outerHeight())
$("#scrollbar").height($(window).height() - $(".navbar").outerHeight());

// Set up tooltips
$('[data-toggle="tooltip"]').tooltip();
