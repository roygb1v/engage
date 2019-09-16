$('input').geocomplete();

// Trigger geocoding request
$("#btn").on('click', function() {
  $('input').trigger("geocode");
})