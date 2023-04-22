import { galleryItems } from './imgs';

function createLi(email, password) {
  const markup = `<li> Email: ${email}, Password: ${password}</li>`;
  return markup;
}

function createLiFromStorage(VALUES_KEY) {
  if (localStorage.getItem(VALUES_KEY)) {
    const values = localStorage.getItem(VALUES_KEY);
    const parseValue = JSON.parse(values);

    const item = parseValue
      .map(({ email, password }) => {
        const markupMap = `<li> Email: ${email}, Password: ${password}</li>`;

        return markupMap;
      })
      .join(' ');
    return item;
  }
  console.log(item);
}

function createLiImg(filterValue) {
  if (filterValue) {
    return galleryItems
      .filter(({ filter }) => filter === filterValue)
      .map(({ preview, original, description }) => {
        return `<li class="galleryItem">
              <a class="gallery-link" href="${original}">
                <img class="gallery-img" src="${preview}" alt="${description}" data-sourse="${original}"  >
              </a>
            </li>`;
      })
      .join(' ');
  }

  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="galleryItem">
              <a class="gallery-link" href="${original}">
                <img class="gallery-img" src="${preview}" alt="${description}" data-sourse="${original}"  >
              </a>
            </li>`;
    })
    .join(' ');
}

function createFilters() {
  const filtersObj = galleryItems.map(({ filter }) => filter);
  const unique = [...new Set(filtersObj)];
  // Array.flatMap()
  // Array.flat()
  const filter = unique
    .map(item => {
      return `<li class="filter-item">
             ${item}
            </li>`;
    })
    .join(' ');
  return filter;
}

function createCountrys(countrys) {
  const markUp = countrys
    .map(
      ({ name, capital, flags }) =>
        `<li class="">
        <p> <img src="${flags.png}" alt="${flags.alt}" width="30"> ${name.common}</p>
   <p>${capital}</p>
   </li>`
    )
    .join(' ');

  return markUp;
}

function createCountry(country) {
  const markUp = country
    .map(
      ({ currencies, population, languages }) => `<div class="">
    <p>currencies --->  ${[...Object.keys(currencies)]} </p>
    <p>population --->  ${population} </p>
    <p>languages --->  ${[...Object.values(languages)]} </p>
 </div>`
    )
    .join(' ');

  return markUp;
}

export {
  createLi,
  createLiFromStorage,
  createLiImg,
  createFilters,
  createCountrys,
  createCountry,
};
