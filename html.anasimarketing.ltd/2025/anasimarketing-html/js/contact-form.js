  (function($) {
    // Handle form submission
    $("#contact_form").on('submit', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      var form = this;
      var $form = $(form);
      
      // Validate form
      if (!$form.valid()) {
        return false;
      }
      
      // All fields valid - show success and redirect
      var form_btn = $form.find('button[type="submit"]');
      form_btn.prop('disabled', true).html(form_btn.data("loading-text"));
      
      // Show success message
      var form_result_div = '#form-result';
      $(form_result_div).remove();
      form_btn.before('<div id="form-result" class="alert alert-success" role="alert">Message sent successfully! Redirecting...</div>');
      
      // Redirect to thank-you page
      setTimeout(function() {
        window.location.href = 'thank-you.html';
      }, 1500);
      
      return false;
    });
    
    // Initialize validation
    $("#contact_form").validate({
      rules: {
        form_name: { required: true },
        form_email: { required: true, email: true },
        form_subject: { required: true },
        form_phone: { required: true },
        form_message: { required: true }
      }
    });
  })(jQuery);
