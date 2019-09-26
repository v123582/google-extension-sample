setInterval(function(){ 

	document.querySelector('.btn-primary').click()

	d = document.querySelector('.date').textContent
	console.log('data = ', d)

	setTimeout(function(){

		row = document.querySelector('#DataTables_Table_2_wrapper').querySelectorAll('tr')[1].querySelectorAll('td')
		date = row[0].textContent
		description = row[1].textContent
		expenditure = row[2].textContent
		balance = row[3].textContent
		note = row[4].textContent
		account = row[5].textContent
		mark = row[6].textContent

		var data = {
			date: date,
			description: description,
			expenditure: expenditure,
			balance: balance,
			note: note,
			account: account,
			mark: mark
		};

		console.log(data)

		var url = 'https://api.github.com/gists';
		fetch(url, {
		  method: 'POST', // or 'PUT'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers: {
		    'Accept': 'application/json',
	      	'Content-Type': 'application/json'
		  }
		}).then(res => res.json())
		.then(response => console.log('Success:', response));

		chrome.runtime.sendMessage({
		    data: d
		});

	}, 1000);

}, 5000);
