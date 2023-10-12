var drinkName = 'bloody mary'

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cocktail?name=' + drinkName,
    headers: { 'X-Api-Key': "HDpeNyqtTjwHQjF5lVs1Zg==pOwZrE93LfASTjer"},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

