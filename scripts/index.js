import {object, FormValidator} from './validation.js';
import {propertyCards} from './propertyCardsArray.js'; //массив с данными для карточки с недвижимостью
import {reviewCards, reviewCard} from './reviewCard.js';
import { renderStars } from './stars.js';
import { PropertyCard} from './propertyCard.js';

//констранты для карточек с недвижимостью
const cardPropertyTemplate = document.querySelector('#property-template');
const propertyContainer = document.querySelector('.properties__grid');
const  reviewContainer = document.querySelector('.reviews__grid');
const popupProperty = document.querySelector('#popup_property');
const buttonClosePopup = document.querySelector('.popup__close-btn');

//константы для попапа для добавления отзыва
const popupReview = document.querySelector('#popup_review');
const buttonLeaveReview = document.querySelector('.reviews__button');
const buttonClosePopupReview = document.querySelector('#popup_review_close_btn');
const buttonReviewSubmit = document.querySelector('.popup__submit-btn');
const reviewForm = document.querySelector('.popup__container_review');
const nameInput = reviewForm.querySelector('#input_name');
const textInput = reviewForm.querySelector('#input_text');
const customerCheckbox = reviewForm.querySelector('#radio_customer');

//конставнты для отправки email
const footerButton = document.querySelector('.footer__button');
const submitSuccess = document.querySelector('.input-email-success');

//универсальные функции открытия и закрытия попапов
function openPopup (popup) {
  popup.classList.add('popup_opend');
};

function closePopup(popup) {
  popup.classList.remove('popup_opend');
};

footerButton.addEventListener('click', function() {
  submitSuccess.classList.add('input-email-success_active');

})

//открытие и закрытие попапа для отзыва
buttonLeaveReview.addEventListener('click', function () {
star1.classList.add('review__star_inactive');
star2.classList.add('review__star_inactive');
star3.classList.add('review__star_inactive');
star4.classList.add('review__star_inactive');
star5.classList.add('review__star_inactive');
  openPopup(popupReview);
});

buttonClosePopupReview.addEventListener('click', function () {
  closePopup(popupReview);
});

//создание экземпляра класса валидации 

const validPopupForm = new FormValidator(object, '#popupForm'); 
const validFooterForm = new FormValidator(object, '#footerForm'); 
validPopupForm.enableValidation(); 
validFooterForm.enableValidation(); 



//закрытие попапа с увеличенной картинкой
buttonClosePopup.addEventListener('click', function () {
  closePopup(popupProperty);
});

function createPropertyCard(image, title, price, address, bathCount, bedroomCount, space, text, owner, number) {
  const card = new PropertyCard(image, title, price, address, bathCount, bedroomCount, space, text, owner, number, '#property-template', handleCardClick);
  const cardElement = card.createPropertyCard();
  return cardElement
}

//добавление карточки на страницу
const renderPropertyCard = (image, title, price, address, bathCount, bedroomCount, space, text, owner, number,kitchen, bath) => {
  propertyContainer.append(createPropertyCard(image, title, price, address, bathCount, bedroomCount, space, text, owner, number,kitchen,bath))
};

//ограничение: только 6 карточек на странице
let sixCards = propertyCards.slice(0,6);

//перебор с функцией добавления карточек из массива на страницу
sixCards.forEach(function (property) {
  renderPropertyCard(property.image, property.title, property.price, property.address, property.bathCount, property.bedroomCount, property.space, property.text, property.owner, property.number, property.kitchen, property.bath);
});

function handleCardClick(image, title, price, address, text, owner, number) {

  const popupProperty = document.querySelector('#popup_property');
  const popupPropertyImage = popupProperty.querySelector('.popup__image');
const popupPropertyTitle = popupProperty.querySelector('.popup__title');
const popupPropertyPrice = popupProperty.querySelector('.popup__price');
const popupPropertyLocation = popupProperty.querySelector('.popup__location');
const popupPropertyText = popupProperty.querySelector('#popup_text');
const popupPropertyOwner = popupProperty.querySelector('#popup_owner');
const popupPropertyNumber = popupProperty.querySelector('#popup_number');


  popupPropertyImage.setAttribute('src', image);
  popupPropertyImage.setAttribute('alt', title);
  popupPropertyTitle.textContent = title;
  popupPropertyPrice.textContent = price;
  popupPropertyLocation.textContent = address;
  popupPropertyText.textContent = text;
  popupPropertyOwner.textContent = owner;
  popupPropertyNumber.textContent = number;
  popupPropertyOwner.insertAdjacentHTML('afterbegin', "<span class='popup__span'>Имя собственника: </span>");
  popupPropertyNumber.insertAdjacentHTML('afterbegin', "<span class='popup__span'>Номер телефона: </span>");
  openPopup(popupProperty);
}

//создание карточки отзыва
let createReviewCard = (text, avatar, name, about) => {
  const card = new reviewCard(text, avatar, name, about, '#review-template');
  const reviewCardElement = card.createReviewCard();
  return reviewCardElement;
}

//добавление карточки отзыва через попап на страницу
const renderReviewCard = (text, avatar, name, about) => {
  reviewContainer.append(createReviewCard(text, avatar, name, about))
};

//перебор с функцией добавления карточек из массива на страницу
reviewCards.forEach(function (review) {
  renderReviewCard(review.text, review.avatar, review.name, review.about);
});

//добавление карточки через написание отзыва
const renderPopupReviewCard = (text, avatar, name, about) => {
  reviewContainer.prepend(createReviewCard(text, avatar, name, about))
};

const handleClick = (evt) => {
  evt.preventDefault();
  let customer = '';
  if (customerCheckbox.checked == true) {
    customer = 'Заказчик';
  }else{
    customer = 'Собственник';
  };
let image = './images/anon.jpg';
  renderPopupReviewCard(textInput.value, image, nameInput.value, customer);
  textInput.value = '';
  nameInput.value = '';
  reviewContainer.lastElementChild.remove();
  closePopup(popupReview);
}

buttonReviewSubmit.addEventListener('click', handleClick);

renderStars();