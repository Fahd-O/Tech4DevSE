var expressi = require('express');
var appi = expressi();
var bodyParseri = require('body-parser');

appi.use(bodyParseri.json());
appi.use(bodyParseri.urlencoded({extended: false}));

var awonEroja = 
[
    {
        "id": "esd584",
        "text": "Eja"
    },
    
    {
        "id": "jva582",
        "text": "Miliki"
    },
    
    {
        "id": "dkv936",
        "text": "Iyo"
    },
    
    {
        "id": "uaf306",
        "text": "Iru"
    }
    
]

appi.get('/', function(request, response){
    response.send('This is supposed to be my 1st API ! Can you see this ?');
});

appi.get('/page2', function(request, response){
    response.send('This is the second page, or is it API ?');
});

appi.get('/ingredients', function(request, response){
    response.send(awonEroja);
});

appi.listen(3000, function()
{
    console.log('1st API is running successfully !');
});