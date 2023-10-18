$(document).ready(function(){
$('#frm').validate({
	rules:{
		name:"required",
		dob:{
			required:true,
			date:true
		},
		email:{
			required:true,
			email:true
		},
		contact:{
			required:true,
			digits:true,
			maxlength:10,
			minlength:10
		},
		password:{
			required:true,
			minlength:5
		},
		cpass:{
                	required:true,
                	minlength:5,
                	equalTo:"#password"
            	}
	},messages:{
		name:"Please enter your name",
		dob:{
			required:"Please enter your D.O.B",
			date:"please enter correct date format"
		},
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		contact:{
			required:"Please enter your contact number",
			digits:"Contact number must be numeric",
			minlength:"Length must be 10",
			maxlength:"Length must be 10"
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 5 char long"
		},
		cpass:{
                	required:"Please Enter Your Confirm Password",
                	minlength:"Password length Must be 5",
                	equalTo:"Mismatch Password"
            	}
	},
	submitHandler:function(form){
		form.submit();
	}
})
});