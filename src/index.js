import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';


const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector("#search-box");
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

searchBox.addEventListener('input', debounce(e => {
    const name = e.target.value.trim();
    if (!name) {
        clearPage();
        return;
    } else {
        fetchCountries(name)
            .then(nameData)
            .catch(nameError)
    }
}, DEBOUNCE_DELAY))
// функція порівняння назв за їх складовою частиною. назва === назві то виводимо інформацію, якщо частина назви === частині то виводимо список де є ці частини
function nameData() {
    clearPage();
    if (country.length > 10) {
        Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.');
            return;
    } else if (country.length >= 2 && country.length <= 10) {
        createLIstCountry(country);
    } else if (country.length === 1) {
        createInfoCountry(country);
    }
}
function nameError(error) {
Notiflix.Notify.failure('Oops, there is no country with that name');
clearPage();
return error;
}

// Функція виводу інформації про країни в назві яких є символи, що ми передираємо
function createLIstCountry(country) {
const markup = country
  .map(
    ({ name, flags }) => `<li>
        <img src="${flags.svg}" alt="${name}" width="30", height="15">&nbsp${name.official}`
  )
  .join('');
}
// Функція виводу інформації про країну в назві якої всі символи повністю збігаються
function createInfoCountry(country) {

}