"use strict";
// User storage
var users = [
	{
	  id: 0,
	  firstName: 'Dmitry',
		lastName: 'Bondarchuk',
		birthDay: '16.07.1990',
		phones: [
			'89001234567',
			'83431234567'
		] 
	}
];
var id = idCounter();

userinterface();

function userinterface() {
  var header = document.createElement('header');
  header.innerHTML = '<h1>My Address Book</h1>';
  document.body.appendChild(header);

  var searchinput = document.createElement('input');
  searchinput.className = 'search';
  searchinput.placeholder = 'Enter name for search';
  searchinput.addEventListener('click', searchfocused);
  searchinput.addEventListener('keyup', search);
  document.body.appendChild(searchinput);

  var usersdiv = document.createElement('div');
  usersdiv.id = 'users';
  document.body.appendChild(usersdiv);

  var usersTable = document.getElementById('users');
  	users.forEach(function(user){
  		usersTable.appendChild(printUser(user));
  	});

  var footer = document.createElement('footer');
  document.body.appendChild(footer);

  var form = document.createElement('form');
  form.addEventListener("submit", function(event) {
      event.preventDefault();
    });
  footer.appendChild(form);

  var fname = document.createElement('input');
  fname.type = 'text';
  fname.className = 'fname';
  fname.placeholder = 'First Name';
  fname.addEventListener('click', fnameHandler);
  form.appendChild(fname);

  var lname = document.createElement('input');
  lname.type = 'text';
  lname.className = 'lname';
  lname.placeholder = 'Last Name';
  lname.addEventListener('click', lnameHandler);
  form.appendChild(lname);

  var birthday = document.createElement('input');
  birthday.type = 'text';
  birthday.className = 'birthday';
  birthday.placeholder = 'Birthday';
  birthday.addEventListener('click', birthdayHandler);
  form.appendChild(birthday);

  var addphones = document.createElement('div');
  addphones.className = 'addphones';
  form.appendChild(addphones);

  var addphone = document.createElement('input');
  addphone.type = 'text';
  addphone.className = 'addphone';
  addphone.placeholder = 'Phone';
  addphone.addEventListener('click', addphoneHandler);
  addphones.appendChild(addphone);

  var plusbtn = document.createElement('button');
  plusbtn.type = 'button';
  plusbtn.className = 'plusbtn';
  plusbtn.innerHTML = '+';
  plusbtn.addEventListener('click', plusphoneHandler);
  addphones.appendChild(plusbtn);

  var buttons = document.createElement('div');
  form.appendChild(buttons);
  var submitbtn = document.createElement('button');
  submitbtn.type = 'submit';
  submitbtn.className = 'submitbtn';
  submitbtn.innerHTML = 'Add cantact';
  submitbtn.addEventListener('click', addUser);
  buttons.appendChild(submitbtn);
  var resetbtn = document.createElement('button');
  resetbtn.type = 'reset';
  resetbtn.className = 'resetbtn';
  resetbtn.innerHTML = 'Reset';
  resetbtn.addEventListener('click', resetHandler);
  buttons.appendChild(resetbtn);
}

function idCounter() {
  var currentid = 1;
  return function() {
    return currentid++;
  };
}

function fnameHandler() {
  this.style.borderColor = 'black';
  this.placeholder = 'First Name';
}

function lnameHandler() {
  this.style.borderColor = 'black';
  this.placeholder = 'Last Name';
}

function birthdayHandler() {
  this.style.borderColor = 'black';
  this.placeholder = 'Birthday';
}

function addphoneHandler() {
  this.style.borderColor = 'black';
  this.placeholder = 'Phone';
}

function addUser() {
  var fname = document.getElementsByClassName('fname');
  var lname = document.getElementsByClassName('lname');
  var birthday = document.getElementsByClassName('birthday');
	var addphone = document.getElementsByClassName('addphone');
  var tst = true;
  var n = new RegExp('^[a-zA-Z \-]+$');
  var d = new RegExp('^[0-3]\\d\\.[01]\\d\\.[12][90]\\d\\d$');
  var p = new RegExp('^\\d{11}$');
  if (!n.test(fname[0].value)) {
    fname[0].style.borderColor = 'red';
    fname[0].placeholder = 'Enter correct First Name';
    fname[0].value = '';
    tst = false;
  }
  if (!n.test(lname[0].value)) {
    lname[0].style.borderColor = 'red';
    lname[0].placeholder = 'Enter correct Last Name';
    lname[0].value = '';
    tst = false;
  }
  if (!d.test(birthday[0].value)) {
    birthday[0].style.borderColor = 'red';
    birthday[0].placeholder = '__.__.____';
    birthday[0].value = '';
    tst = false;
  }
	for (var i = 0; i < addphone.length; i++) {
    if (!p.test(addphone[i].value)) {
      addphone[i].style.borderColor = 'red';
      addphone[i].placeholder = '***********';
      addphone[i].value = '';
      tst = false;
    }
  }
  if (tst == false) return;
  var fstr = fname[0].value;
  fstr = fstr.substr(0, 1).toUpperCase() + fstr.substr(1).toLowerCase();
  console.log(fstr);
  var lstr = lname[0].value;
  lstr = lstr.substr(0, 1).toUpperCase() + lstr.substr(1).toLowerCase();
  console.log(lstr);
  var user = {};
  user.firstName = fstr;
  user.lastName = lstr;
  user.birthDay = birthday[0].value;
  user.phones = [];
	for (var i = 0; i < addphone.length; i++) {
		user.phones[i] = addphone[i].value;
	}
  user.id = id();
  users.push(user);
  var usersTable = document.getElementById('users');
	usersTable.appendChild(printUser(user));
  var form = document.getElementsByTagName('form');
  form[0].reset();
  var addphones = document.getElementsByClassName('addphones');
  var minusbtn = document.getElementsByClassName('minusbtn');
  var delphone = document.getElementsByClassName('addphone');
  var len = minusbtn.length;
  if (len > 0) {
    for (var i = len - 1; i >= 0; i--) {
      addphones[0].removeChild(minusbtn[i]);
      addphones[0].removeChild(delphone[i + 1]);
    }
  }
}

function resetHandler() {
  var fname = document.getElementsByClassName('fname');
  var lname = document.getElementsByClassName('lname');
  var birthday = document.getElementsByClassName('birthday');
  var addphones = document.getElementsByClassName('addphones');
  var minusbtn = document.getElementsByClassName('minusbtn');
  var addphone = document.getElementsByClassName('addphone');
  fname[0].style.borderColor = 'black';
  fname[0].placeholder = 'First Name';
  fname[0].value = '';
  lname[0].style.borderColor = 'black';
  lname[0].placeholder = 'Last Name';
  lname[0].value = '';
  birthday[0].style.borderColor = 'black';
  birthday[0].placeholder = 'Birthday';
  birthday[0].value = '';
  var len = minusbtn.length;
  if (len > 0) {
    for (var i = len - 1; i >= 0; i--) {
      addphones[0].removeChild(minusbtn[i]);
      addphones[0].removeChild(addphone[i + 1]);
    }
  }
  addphone[0].style.borderColor = 'black';
  addphone[0].placeholder = 'Phone';
  addphone[0].value = '';
}

function csvFormat(users) {
  return users.map(function(user) {
    return Object.keys(user).map(function(key) { 
      if(typeof user[key] == 'string' || typeof user[key] == 'number') return '"' + user[key] + '"'; 
      else return user[key].map(function(phone) { return '"' + phone + '"'; }).join(';');
    }).join(';');
  }).join('\r\n');
}

function searchfocused() {
  if (this.value == null) this.value = '';
}

function search() {
  var names = document.getElementsByClassName('name');
	if (this.value == null) {
    for (var i = 0; i < names.length; i++) {
			names[i].parentNode.style.display = 'inline-block';
    }
  }
  var re = new RegExp(this.value, 'i');
	for (var i = 0; i < names.length; i++) {
		var findString =  names[i].innerHTML;
		if (re.test(findString)) {
			names[i].parentNode.style.display = 'inline-block';
		}
    else {
 			names[i].parentNode.style.display = 'none';
    }
	}
}

function printUser(user){
  var row = document.createElement('div');
	row.id = 'u_' + user.id;
	row.className = 'row';
  var nn = document.createElement('div');
  nn.className = 'nn';
  nn.innerHTML = users.length;
  row.appendChild(nn);
  var name = document.createElement('div');
  name.className = 'name';
  name.innerHTML = user.firstName + ' ' + user.lastName;
  name.addEventListener('click', nameHandler);
  row.appendChild(name);
  var delbtn = document.createElement('button');
  delbtn.type = 'button';
  delbtn.className = 'delbtn';
  delbtn.innerHTML = 'X';
  delbtn.addEventListener('click', delHandler);
  row.appendChild(delbtn);
  var birth = document.createElement('div');
  birth.className = 'birth';
  birth.innerHTML = 'Birthday: ' + user.birthDay;
  row.appendChild(birth);
  var phone = document.createElement('div');
  phone.className = 'phone';
  phone.innerHTML = 'Phone: ' + user.phones.join(', ');
  row.appendChild(phone);
  return row;
}

function nameHandler() {
  var row = this.parentNode;
  var phone = row.lastChild;
  var birth = phone.previousSibling;
  if (phone.style.display == 'none') {
    phone.style.display = 'inline-block';
    birth.style.display = 'inline-block';
  }
  else {
    phone.style.display = 'none';
    birth.style.display = 'none';
  }
}

function delHandler() {
  var row = this.parentNode;
  var id = row.firstChild;
  var del = id.innerHTML - 1;
  users.splice(del, 1);
  var usersTable = row.parentNode;
  usersTable.removeChild(row);
  var nn = document.getElementsByClassName('nn');
  for (var i = 0; i < nn.length; i++) nn[i].innerHTML = i + 1;
}

function plusphoneHandler() {
  var addphones = document.getElementsByClassName('addphones');
  if (addphones[0].childNodes.length > 6) {
    alert('Too many numbers');
    return;
  }
  var addphone = document.createElement('input');
  addphone.type = 'text';
  addphone.name = 'addphone';
  addphone.className = 'addphone';
  addphone.placeholder = 'Phone';
  addphone.addEventListener('click', addphoneHandler);
  addphones[0].appendChild(addphone);
  var minusbtn = document.createElement('button');
  minusbtn.type = 'button';
  minusbtn.className = 'minusbtn';
  minusbtn.innerHTML = '-';
  minusbtn.addEventListener('click', minusphoneHandler);
  addphones[0].appendChild(minusbtn);
}

function minusphoneHandler() {
  var minusbtn = document.getElementsByClassName('minusbtn');
  var delphone = document.getElementsByClassName('addphone');
  var addphones = document.getElementsByClassName('addphones');
  addphones[0].removeChild(minusbtn[minusbtn.length - 1]);
  addphones[0].removeChild(delphone[delphone.length - 1]);
}