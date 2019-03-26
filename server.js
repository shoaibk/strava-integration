//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/commute-tracker'));

app.get('/code_callback', 
    (req, res) => res.send('Got the code')
);

app.get('/.well-known/assetlinks.json',
    (req, res) => res.send(`{"name": "Shoaib Khan", "address": "2012 Merivale"}`)
);

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/commute-tracker/index.html'));
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);