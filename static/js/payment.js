var RequestData = {
	key: 'rjQUPktU',
	txnid: '123456789',
	hash: 'defdfaadgerhetiwerer',
	amount: '1',
	firstname: '',
	email: '',
	phone: '',
	productinfo: 'Testing',
	surl : 'http://codastra.com/success',
	furl: 'http://codastra.com',
	mode:'dropout'// non-mandatory for Customized Response Handling
}



var Handler = {

	responseHandler: function(BOLT){
		console.log(BOLT);
	  // your payment response Code goes here, BOLT is the response object

	},
	catchException: function(BOLT){
		console.log(BOLT);
	  // the code you use to handle the integration errors goes here

	}
}


function payment_launch(){

	RequestData.amount=document.getElementById('payment_value').value;
	RequestData.firstname=document.getElementById('first_name').value;
	RequestData.email=document.getElementById('email').value;
	RequestData.phone=document.getElementById('contact_no').value;

	bolt.launch(RequestData,Handler);
}

var FormCheck = {
	name:0,
	email:0,
	number:0,
}

function form_check(variable){
	if(variable=='name'){
		FormCheck.name=1;
		if(FormCheck.name==1&&FormCheck.email==1&&FormCheck.number==1){
			document.getElementById('payment_button').disabled=false;
		};
	} else if(variable=='email'){
		FormCheck.email=1;
		if(FormCheck.name==1&&FormCheck.email==1&&FormCheck.number==1){
			document.getElementById('payment_button').disabled=false;
		};
	} else if(variable=='number'){
		FormCheck.number=1;
		if(FormCheck.name==1&&FormCheck.email==1&&FormCheck.number==1){
			document.getElementById('payment_button').disabled=false;
		};
	}
}