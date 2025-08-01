'use strict';

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
    .then(pokemonData => {
        const abilityUrl = pokemonData.abilities[0].ability.url;
        return fetch(abilityUrl);
    })
    .then(abilityResponse => {
        if (!abilityResponse.ok) throw new Error(`Ability request failed! status: ${abilityResponse.status}`);
        return abilityResponse.json();
    })
    .then(abilityData => {
        const englishEffect = abilityData.effect_entries.find(
            entry => entry.language.name === 'en'
        );
        if (englishEffect) {
            console.log(englishEffect.effect);
        } else {
            console.log('English effect entry not found');
        }
    })
    .catch(error => {
        console.error('Error in request chain:', error.message);
    });