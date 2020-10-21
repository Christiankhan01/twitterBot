var Twitter = require('twitter');
require('dotenv').config(); 
var axios = require('axios'); 

var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY, 
    consumer_secret: process.env.CONSUMER_SECRET, 
    access_token_key: process.env.ACCESS_TOKEN_KEY, 
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
}); 

axios("https://official-joke-api.appspot.com/random_joke").then(Response => {
    return [Response.data.setup, Response.data.punchline];
}).then(([setup, punch]) => {
    client.post('statuses/update', {status: `${setup}\n${punch}`}, 
                function(error, tweet, response){
        if(!error){
            console.log(tweet);
        }
    })
});
