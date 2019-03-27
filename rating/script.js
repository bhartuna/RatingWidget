let formStatus = false;
let content = [
	'<p>test</p>',
	'<p>test</p>'
	];

document.addEventListener('DOMContentLoaded', function() {

	setTimeout(function(){
		showWidget();
	}, 500);

});

function showWidget(){

	let widget = document.getElementsByClassName('widget');
	widget[0].classList.add('showWidget');
	widget[0].addEventListener('click', function(){
		formWidget();
	});

}

function formWidget(){

	let formWidget = document.getElementsByClassName('formWidget');
	let showFormWidget = document.getElementsByClassName('showFormWidget');
	if(formStatus == false){
		formWidget[0].classList.add('showFormWidget');
		setTimeout(function(){
			showContent();
		}, 400);
		formStatus = true;
	}
	else{
		showFormWidget[0].innerHTML = '';
		formWidget[0].classList.remove('showFormWidget');
		formStatus = false;
	}
}

function showContent(){

	let showFormWidget = document.getElementsByClassName('showFormWidget');
	for(let i = 0; i < content.length; i++){
		showFormWidget[0].innerHTML += content[i];
	}

}