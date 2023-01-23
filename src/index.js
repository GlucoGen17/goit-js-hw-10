import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const searhBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searhBox.addEventListener(
  'input',
  debounce(e => {
    const name = e.target.value.trim();
    if (!name) {
      clearPage();
      return;
    } else {
      fetchCountries(name)
        .then(country => {
          clearPage();
          if (country.length > 10) {
            Notiflix.Notify.info(
              'Too many matches found. Please enter a more specific name.'
            );
            // clearPage();
            return;
          } else if (country.length >= 2 && country.length <= 10) {
            createListCountry(country);
            countryInfo.innerHTML = '';
          } else if (country.length === 1) {
            createInfoCountry(country);
            countryList.innerHTML = '';
          }
        })
        .catch(error => {
          Notiflix.Notify.failure('Oops, there is no country with that name');
          clearPage();
          return error;
        });
    }
  }, DEBOUNCE_DELAY)
);

function createInfoCountry(countries) {
  const markup = countries
    .map(
      ({ name, capital, population, flags, languages }) =>
        ` <div>
        <img src="${flags.svg}" alt="${name}" width="30", height="20">
        </h1><b>${name.official}</b></h1>
        </div>
        <p><span><b>Capital:</b> </span>${capital}</p>
        <p><span><b>Population:</b> </span>${population}</p>
        <p><span><b>Languages:</b> </span>${Object.values(languages).join(
          ','
        )}</p>`
    )
    .join('');

  countryInfo.innerHTML = markup;
}

function createListCountry(countries) {
  const markup = countries
    .map(
      ({ name, flags }) =>
        `<li>
            <img src='${flags.svg}' alt='${name}' width='30'>
            <span>${name.official}</span>
        </li>`
    )
    .join('');

  countryList.innerHTML = markup;
}

function clearPage() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}
