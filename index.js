const config = require('./config');
const twitter = require('twitter-lite');
const client = new twitter(config);
const axios = require('axios');



axios("https://official-joke-api.appspot.com/random_joke").then(Response => {
	return [Response.data.setup, Response.data.punchline];
}).then(([setup, punch]) => {
	client.post('statuses/update', 
                {status: `${setup}\n${punch}`},
                 function(error, tweet, response){
		if(!error){
			console.log(tweet);
		}
	})
});

// client.post('statuses/update', { status: 'Hello world again!' }).then(result => {
//     console.log('You successfully tweeted this : "' + result.text + '"');
//   }).catch(console.error);
  
