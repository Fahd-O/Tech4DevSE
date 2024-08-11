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
        "text": "Omi"
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

appi.post
(
    '/ingredients',

    function(request, response)
    {
        var alekun = request.body;
        if (!alekun || alekun.text === "")
        {
            response.status(500).send({error: "Your ingredient addition must have text"});
        }
        else
        {
            awonEroja.push(alekun);
            response.status(200).send(awonEroja);
        }
    }
);

appi.put
(
    '/ingredients/:ingredientId',
    function(request, response)
    {
        var newIngredientText = request.body.text;

        if(!newIngredientText || newIngredientText === "")
        {
            response.status(500).send({error:"You must provide ingredient text"})
        }
        else
        {
            for(var x = 0; x < awonEroja.length; x++)
                {
                    var eroja = awonEroja[x];

                    if (eroja.id === request.params.ingredientId)
                    {
                        awonEroja[x].text = newIngredientText;
                        break;
                    }
                }

                response.send(awonEroja);
        }

    }
);



appi.listen(3000, function()
{
    console.log('1st API is running successfully on port 3000 !');
});