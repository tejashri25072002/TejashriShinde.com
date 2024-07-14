$(document).ready(function() {
  // Handle form submission on button click
  $('#submitForm').click(function(e) {
      e.preventDefault(); // Prevent default form submission

      // Retrieve form field values
      var email = $('#email').val();
      var firstname = $('#firstname').val();
      var lastname = $('#lastname').val();
      var checkbox = $('#checkbox').prop('checked');

      // Basic form validation
      if (email === '' || firstname === '' || lastname === '' || !checkbox) {
          alert('Please fill in all fields and agree to terms.');
          return;
      }

      // Form data object to send to getform.io endpoint
      var formData = {
          email: email,
          firstname: firstname,
          lastname: lastname
          // Add more fields as needed
      };

      // AJAX request to submit form data to getform.io
      $.ajax({
          url: 'https://getform.io/f/bvrewlqb', // Replace with your getform.io endpoint
          method: 'POST',
          data: formData,
          dataType: 'json',
          success: function(response) {
              // Handle successful form submission
              alert('Form submitted successfully!'); // Display success message
              // Optionally, clear form fields after submission
              $('#email').val('');
              $('#firstname').val('');
              $('#lastname').val('');
              $('#checkbox').prop('checked', false);
          },
          // error: function(xhr, status, error) {
          //     // Handle error during form submission
          //     alert('Form submission failed. Please try again later.');
          //     console.error('Error:', error);
          // }
      });
  });
});
