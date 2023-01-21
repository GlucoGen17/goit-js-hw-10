import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';


const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector("search-box");
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

searchBox.addEventListener('input', debounce ( e => {
    const name = searchBox.value.trim();
    if (!name) {
        createPage();
        return;
    };
    fetchCountries(name)
        .then()
        .catch()
}, DEBOUNCE_DELAY))