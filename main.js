$('#search').on('submit', function(event){

	event.preventDefault();
	$('#results').html(
		'<div class="loader"></div>');
	let searchName = $('#searchText').val();
	let url = 'https://www.reddit.com/r/' + searchName + '.json'
	fetch(url).then(function(response){
		let promise = response.json();
		return promise;
	}).then(function(lists){

		console.log('success', lists);
		let html = '';

		lists.data.children.forEach(function(list){
			  html += `
		      <div>
		      	<p>Title: ${list.data.title}</p>
		        <p>Score: ${list.data.score}</p>
		        <p>Author: ${list.data.author}</p></br>
		      </div>
		    `	
	    });
	$('#results').html(html);
	}, function(error){
		console.log('error', error);
	});
});

