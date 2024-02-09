// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('#calculate-btn').click(function () {
   var hours = parseFloat($('#hours').val());
   var hourlyRate = parseFloat($('#hourly-rate').val().substring(1)); // Remove '$' sign
   var total = hours * hourlyRate;

   if (isNaN(hours) || hours <= 0) {
       alert('Please enter a valid positive number for hours.');
   } else {
       $('#total').val('$' + total.toFixed(2));
   }
 });
