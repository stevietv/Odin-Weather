const weatherContainer = document.querySelector('.weatherContainer');

const loadingContainer = document.createElement('div');
loadingContainer.classList.add('loaderContainer');
const loader = document.createElement('span');
loader.classList.add('loader');

loadingContainer.append(loader);



export function showLoading(){
  weatherContainer.innerHTML = '';
  weatherContainer.appendChild(loadingContainer);
}

export function hideLoading(){
  weatherContainer.removeChild(loadingContainer);
}