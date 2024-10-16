    // JavaScript code for form validation
	// Prevent form from submitting
 let my_form = document.forms["myForm"]
 my_form.addEventListener('submit', myValidation)
   
 function myValidation(event) {  
    let input_field = my_form.elements["inputField"]
    let input_value = input_field.value;
    let alphanumeric_regex = new RegExp(/^[a-z0-9]+$/i)

    if  ((alphanumeric_regex.test(input_value))) {
      input_field.setCustomValidity("")
      window.alert("Valid alphanumeric string. Submitting the form")
      my_form.submit()  
    } else {
      input_field.setCustomValidity("Enter a valid alphanumeric string")
      event.preventDefault()
    }

  }

  

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message