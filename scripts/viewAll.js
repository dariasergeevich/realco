
import {propertyCards} from './propertyCardsArray.js'; //массив с данными для карточки с недвижимостью
import { PropertyCardViewAll} from './propertyCardViewAll.js';

//констранты для карточек с недвижимостью
const propertyContainer = document.querySelector('.properties');
const popupProperty = document.querySelector('#popup_property');
const buttonClosePopup = document.querySelector('.popup__close-btn');

//универсальные функции открытия и закрытия попапов
function openPopup (popup) {
  popup.classList.add('popup_opend');
};

function closePopup(popup) {
  popup.classList.remove('popup_opend');
};


//закрытие попапа с увеличенной картинкой
buttonClosePopup.addEventListener('click', function () {
  closePopup(popupProperty);
});

function createPropertyCard(image, title, price, address, bathCount, bedroomCount, space, text, owner, number) {
  const card = new PropertyCardViewAll(image, title, price, address, bathCount, bedroomCount, space, text, owner, number, '#property-template', handleCardClick);
  const cardElement = card.createPropertyCard();
  return cardElement
}

//добавление карточки на страницу
const renderPropertyCard = (image, title, price, address, bathCount, bedroomCount, space, text, owner, number,kitchen, bath) => {
  propertyContainer.append(createPropertyCard(image, title, price, address, bathCount, bedroomCount, space, text, owner, number,kitchen,bath))
};

//перебор с функцией добавления карточек из массива на страницу
propertyCards.forEach(function (property) {
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