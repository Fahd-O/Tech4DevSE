var expressi = require('express');
var appi = expressi();

appi.get('/', function(request, response){
    response.send('This is supposed to be my 1st API ! Can you see this ?');
});

appi.get('/page2', function(request, response){
    response.send('This is the second page, or is it API ?');
});

appi.listen(3000, function()
{
    console.log('1st API is running successfully !');
});