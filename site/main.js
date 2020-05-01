if (confirm('Please click "OK" if you want to have access to this website '))
	
	{alert('Acces granted!');

}	else{
	alert('Sorry your access request has been denied');
}

var message = 'This is a global value';
function showMsg(){
	var message = 'And now the local one';
	alert(message);
}
showMsg();
alert(message);

function myFunction(arg){
	alert('Your argument : ' + arg);
}
myFunction(prompt('What would would like to say to the function?'));

function sayHello(){
	return 'Hello!';
	alert('Watch Out!');
}
alert(sayHello());

var sayHello = (function(){
	return 'Yup';
})();
alert(sayHello);