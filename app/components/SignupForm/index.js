import React, { Component } from 'react';
import Button from 'components/Button';



const styles = {

	field: {
		border: 0,
		boxShadow: 'rgb(229, 181, 209) 0px -2px 0px 0px inset',
		padding: 10,
		marginLeft: 10,
		width: 200,
		float: 'left'
	},

	input: {
		width: '100%',
	    background: 0,
	    border: 'none',
	    outline: 0,
	    padding: 0,
	    chromeOffset: 26,
	    top: 4,
	},

	button: {
		padding: 10,
		paddingTop: 10,
		paddingBottom: 10,
	    float: 'left',
	    background: 'rgb(228, 181, 209)',
	    marginLeft: 20,
	    color: '#fff'
	}

}

class SignupForm extends Component{

	constructor(props){
		super(props);

		this.show = this.show.bind(this);
		this.validEmail = this.validEmail.bind(this);
		this.getFormData = this.getFormData.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);

		this.state = {
			opacity: 0
		}
	}

	render(){
		var pEvents = this.state.opacity == 0 ? 'none' : 'auto';

		return (
			<div style={styles.formWrapper} style={{position: 'absolute', marginTop: 10, opacity: this.state.opacity, pointerEvents: pEvents}}>
				<form id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbztRwA93Et_OFYpHRn4Y4uWGPGakxMDpWcbc5kMgnfcCjKZwdke/exec">
					<fieldset style={styles.field}>
						{/*<label htmlFor="email">Email: </label>*/}
						<input 
							style={styles.input}
							id="email" name="email" placeholder="Enter your email" />
					</fieldset>
					<button type="submit" style={styles.button}>SIGN UP</button>
				</form>
			</div>
		);
	}

	componentDidMount(){
		var form = document.getElementById('gform');
  		form.addEventListener("submit", this.handleFormSubmit, false);
	}

	show(){
		this.setState({opacity: 1});
	}

	validEmail(email) { // see:
	  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	  return re.test(email);
	}
	// get all data in form and return object
	getFormData() {
	  var elements = document.getElementById("gform").elements; // all form elements
	  var fields = Object.keys(elements).map(function(k) {
	    if(elements[k].name !== undefined) {
	      return elements[k].name;
	    // special case for Edge's html collection
	    }else if(elements[k].length > 0){
	      return elements[k].item(0).name;
	    }
	  }).filter(function(item, pos, self) {
	    return self.indexOf(item) == pos && item;
	  });
	  var data = {};
	  fields.forEach(function(k){
	    data[k] = elements[k].value;
	    if(elements[k].type === "checkbox"){
	      data[k] = elements[k].checked;
	    // special case for Edge's html collection
	    }else if(elements[k].length){
	      for(var i = 0; i < elements[k].length; i++){
	        if(elements[k].item(i).checked){
	          data[k] = elements[k].item(i).value;
	        }
	      }
	    }
	  });
	  console.log(data);
	  return data;
	}

	handleFormSubmit(event) {  // handles form submit withtout any jquery
	  event.preventDefault();           // we are submitting via xhr below
	  var data = this.getFormData();         // get the values submitted in the form
	  if( !this.validEmail(data.email) ) {   // if email is not valid show error
	    //document.getElementById('email-invalid').style.display = 'block';
	    console.log('invalid email')
	    return false;
	  } else {
	    var url = event.target.action;  //
	    var xhr = new XMLHttpRequest();
	    xhr.open('POST', url);
	    // xhr.withCredentials = true;
	    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	    xhr.onreadystatechange = function() {
	        console.log( xhr.status, xhr.statusText )
	        console.log(xhr.responseText);
	        //document.getElementById('gform').style.display = 'none'; // hide form
	        //document.getElementById('thankyou_message').style.display = 'block';
	        return;
	    };
	    // url encode form data for sending as post data
	    var encoded = Object.keys(data).map(function(k) {
	        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
	    }).join('&');
	    xhr.send(encoded);
	  }
	}

	

}

export default SignupForm;
