import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createLiImg, createFilters } from '../js/renderHtml';

const refs = {
  filters: document.querySelector('.filters'),
  list: document.querySelector('.list'),
};

refs.filters.insertAdjacentHTML('beforeend', createFilters());
refs.list.insertAdjacentHTML('beforeend', createLiImg());

refs.filters.addEventListener('click', filter);

function filter(e) {
  e.preventDefault();
  const filterValue = e.target.textContent.trim();

  if (e.target.nodeName === 'LI') {
    e.target.classList.add('active');
    refs.list.innerHTML = '';

    refs.list.insertAdjacentHTML('beforeend', createLiImg(filterValue));
  }

  const filterItems = refs.filters.querySelectorAll('li');

  filterItems.forEach(item => {
    if (item.textContent.trim() !== filterValue) {
      item.classList.remove('active');
    }
  });


  if (e.target.nodeName !== 'LI') {
    refs.list.innerHTML = '';
    refs.list.insertAdjacentHTML('beforeend', createLiImg());
  }
}



let lightbox = new SimpleLightbox('.list a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
