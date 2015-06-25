function get (url) {
	return new Promise(function(resolve, reject){
		var req = new XMLHttpRequest();
		req.open("GET", url);

		req.onload = function(){
			if (req.status == 200){
				resolve(req.response);
			} else {
				reject(Error(req.statusText));
			}
		};

		req.onerror = function(){
			reject(Error('Network error'));
		};

		req.send();
	});
}

// Step 1:

// get('story.json').then(function(response){
// 	console.log('Success!', response);
// }, function(error){
// 	console.error("Failed!", error);
// });

// Step 2:

get('story.json').then(function(response){
	return JSON.parse(response);
}).then(function(response){
	console.log("Yey JSON!", response)
});

// Step 2: simplest

get('story.json')
	.then(JSON.parse)
	.then(function(response){
		console.log("Yey JSON!", response)
	});

// function getJSON (url) {
// 	return get(url).then(JSON.parse);
// }

// getJSON('story.json');