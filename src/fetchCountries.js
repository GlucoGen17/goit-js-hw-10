let countryNameURL = 'https://restcountries.com/v3.1/name/';
let filterfeatures = 'name,capital,population,flags,languages';

function fetchCountries(name) {
    return fetch(`${countryNameURL}${name}?fields=${filterfeatures}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}
export { fetchCountries};
    


// fetch('http://example.com/movies.json')
//   .then(response => {
//     return response.json();
//   })