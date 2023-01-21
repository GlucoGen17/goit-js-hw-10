import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';


const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector("#search-box");
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

searchBox.addEventListener('input', debounce(e => {
    const name = searchBox.value.trim();
    if (!name) {
        createPage();
        return;
    } else {
        fetchCountries(name)
            .then(nameData)
            .catch(nameError)
    }
}, DEBOUNCE_DELAY))

function nameData() {
    
}

function nameError() {

}

// Функція виводу інформації про країни в назві яких є символи, що ми передираємо

// Функція виводу інформації про країну в назві якої всі символи повністю збігаються
