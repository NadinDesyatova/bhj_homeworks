const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

subscribeModal.classList.add('modal_active');

modalClose.onclick = () => {
  subscribeModal.classList.remove('modal_active');
  document.cookie = encodeURIComponent('popup') + '=' + encodeURIComponent('closed');
}

(() => {
  const value = "; " + document.cookie;
  const cookiesValue = value.split('; popup=');
  if (cookiesValue.length === 2) {
    subscribeModal.classList.remove('modal_active');
  }
})();
