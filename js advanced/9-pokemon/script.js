'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
request.addEventListener('load', function() {
    const {abilities}  = JSON.parse(request.responseText);
    const abilityUrl = (abilities[0].ability.url);
    const newRequest = new XMLHttpRequest();
    newRequest.open('GET', abilityUrl);
    newRequest.send();
    newRequest.addEventListener('load', function() {
        const {effect_entries}  = JSON.parse(newRequest.responseText);
        for (const entry of effect_entries) {
            if (entry.language.name === 'en') {
                console.log(entry.effect)
            }
        }
    })
})