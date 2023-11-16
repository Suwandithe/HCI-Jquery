$("#formValidation").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength:10,
            maxlength:13
        }
    },
    messages:{
        name:{

            required:"Please enter your name",
            minlength:"Name at least 2 characters"
        } ,
        email:{
            required:"Please enter your name",
            email: "enter your email in the correct format",
      
        },
        phone:"Please enter your phone number",
        subject: "Please enter your subject",
        formMessage: "Please enter your messages"
       

    },

    
    submitHandler: function(form){
        form.submit();
        alert("Your submission has been saved")
    },

    
});

