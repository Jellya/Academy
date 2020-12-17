import jQuery from "jquery";

jQuery(document).ready(function () {
    jQuery("#form-lesson").hide();
  });
  
  jQuery("#edit").click(function() {
    jQuery("#form-lesson").show();
    jQuery("#lesson").hide();
  })
  
  jQuery("#lesson-button").click(function() {
    jQuery("#form-lesson").hide();
    jQuery("#lesson").show();
  })
  