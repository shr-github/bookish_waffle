function validate() {
	//name verification
	if( document.myForm.Name.value =="") {
		alert( "Please provide your full name!" );
		document.myForm.Name.focus() ;
		return false;
	}
	else if(!isNaN(document.myForm.Name.value)) {
		alert("Please enter only characters!");
		document.myForm.Name.focus();
		return false;
	}
	else if ((document.myForm.Name.value.length < 5) || (document.myForm.Name.value.length > 25)) {
		alert("Name should be atleast of 5 letters!");
		document.myForm.Name.focus();
		return false;
	}
	else {	
	}
	
	//mobile number verification
	if (document.myForm.mob.value == "") {
		alert("Please enter your mobile number!");
		return false;
	}
	else if (/^\d{10}$/.test(document.myForm.mob.value)) {
	}
	else {
		alert("Invalid mobile number!");
		document.myForm.mob.focus();
		return false;
	}
	
	//email verification
	if(document.myForm.EMail.value == "" ) {
		alert( "Please provide your Email!" );
		document.myForm.EMail.focus() ;
		return false;
	}
	else{
		atpos = document.myForm.EMail.value.indexOf("@");
		dotpos = document.myForm.EMail.value.lastIndexOf(".");
		if (atpos < 1 || ( dotpos - atpos < 2 )) {
			alert("Please enter correct email ID");
			document.myForm.EMail.focus() ;
			return false;
		}
		else {			
		}
	}
	
	//college verification
	if( document.myForm.college.value == "" ) {
		alert( "Please provide your college name!" );
		document.myForm.college.focus() ;
		return false;
	}
	else if(!isNaN(document.myForm.college.value)) {
		alert("Please enter only characters!");
		document.myForm.college.focus();
		return false;
	}
	else if ((document.myForm.college.value.length < 15) || (document.myForm.Name.value.length > 50)) {
		alert("College name should be atleast of 15 letters!");
		document.myForm.Name.focus();
		return false;
	}
	else {		
	}
	
	//degree verification
	if( document.myForm.degree.value == "-1" ) {
		alert( "Please provide your Degree!" );
		return false;
	}
	alert("Form Submitted!");
	return( true );
}
