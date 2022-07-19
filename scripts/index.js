const cardPropertyTemplate = document.querySelector('#property-template');
const propertyContainer = document.querySelector('.properties__grid');
const cardReviewTemplate = document.querySelector('#review-template');
const  reviewContainer = document.querySelector('.reviews__grid');
const popup = document.querySelector('.popup');
const popupProperty = document.querySelector('#popup_property');
const buttonClosePopup = document.querySelector('.popup__close-btn');

//универсальные функции открытия и закрытия попапов
function openPopup (popup) {
  popup.classList.add('popup_opend');
};

function closePopup(popup) {
  popup.classList.remove('popup_opend');
};


//массив с данными для карточки с недвижимостью

const propertyCards = [
  {
    image: './images/IMAGE (1).png',
    title: 'Уютная студия в Москве',
    price: '12 000 000' + ' руб.',
    address: 'Москва, ул.Грайвороновская, д.10',
    bathCount: '1',
    bedroomCount: '1',
    space: '40' + ' кв.м'
  },
  {
    image: './images/IMAGE (2).png',
    title: 'Двухкомнатная квартира в Екатеринбурге',
    price: '9 800 000' + ' руб.',
    address: 'Екатеринбург, ул.8 Марта, д.66',
    bathCount: '2',
    bedroomCount: '1',
    space: '73' + ' кв.м'
  },
  {
    image: './images/IMAGE (3).png',
    title: 'Однокомнатная квартира в Санкт-Петербурге',
    price: '15 200 000.' + ' руб.',
    address: 'Санкт-Петербург, ул.Садовая, д.3',
    bathCount: '1',
    bedroomCount: '1',
    space: '53' + ' кв.м'
  },
  {
    image: './images/IMAGE (4).png',
    title: 'Светлая студия в центре Москвы',
    price: '30 500 000' + ' руб.',
    address: 'Москва, ул.Спортивная, д.75',
    bathCount: '1',
    bedroomCount: '1',
    space: '45' + ' кв.м'
  },
  {
    image: './images/IMAGE (5).png',
    title: 'Просторная 4-х комнатная квартира в Воронеже',
    price: '18 600 000' + ' руб.',
    address: 'Воронеж, ул.Карла Маркса, д.34',
    bathCount: '2',
    bedroomCount: '4',
    space: '98 кв.м'
  },
  {
    image: './images/IMAGE (6).png',
    title: 'Комфортные апартаменты в Зеленограде',
    price: '7 300 000 ' + ' руб.',
    address: 'Зеленоград, ул.Каштановая аллея, д.108',
    bathCount: '1',
    bedroomCount: '1',
    space: '44' + ' кв.м'
  },
];


//создание разметки карточки для добавления из массива
const createPropertyCard = (image, title, price, address, bathCount, bedroomCount, space) => {
  const newPropertyCard = cardPropertyTemplate.content.querySelector('.property').cloneNode('true');
  const newPropertyCardImage =  newPropertyCard.querySelector('.property__image');
  const newPropertyCardTitle = newPropertyCard.querySelector('.property__title');
  const newPropertyCardPrice = newPropertyCard.querySelector('.property__price');
  const newPropertyCardAddress = newPropertyCard.querySelector('.property__location');
  const newPropertyCardBathCount = newPropertyCard.querySelector('#bath-count');
  const newPropertyCardBedroomCount = newPropertyCard.querySelector('#bedroom-count');
  const newPropertyCardSpace = newPropertyCard.querySelector('#space');

  newPropertyCardImage.src = image;
  newPropertyCardImage.alt = title;
  newPropertyCardTitle.textContent = title;
  newPropertyCardPrice.textContent = price;
  newPropertyCardAddress.textContent = address;
  newPropertyCardBathCount.textContent = bathCount;
  newPropertyCardBedroomCount.textContent = bedroomCount;
  newPropertyCardSpace.textContent = space;

  //открытие попапа карточки с недвижимостью
  newPropertyCard.addEventListener('click', function () {
    /*newPopupImagePic.setAttribute('src', image);
    newPopupImagePic.setAttribute('alt', name);
    newPopupTitle.textContent = name;*/
    openPopup(popupProperty);
  });

//закрытие попапа с увеличенной картинкой
buttonClosePopup.addEventListener('click', function () {
  closePopup(popupProperty);
});


  return newPropertyCard;
}

//добавление карточки на страницу
const renderPropertyCard = (image, title, price, address, bathCount, bedroomCount, space) => {
  propertyContainer.append(createPropertyCard(image, title, price, address, bathCount, bedroomCount, space))
};

//перебор с функцией добавления карточек из массива на страницу
propertyCards.forEach(function (property) {
  renderPropertyCard(property.image, property.title, property.price, property.address, property.bathCount, property.bedroomCount, property.space);
});

//массив с данными для карточки с отзывом

const reviewCards = [
  {
    text: '"Искала на этом сервисе квартиру для нашей многодетной семьи. В приоритете был большой метраж, детский сад и школа в шаговой доступности. Квартира найдена, на днях переезжаем!"',
    avatar: './images/avatar1.jpg',
    name: 'Дарья Амелина',
    about: 'Заказчик'
  },
  {
    text: '"Недавно переехала в Санкт-Петербург, нужна была уютная, светлая студия в тихом районе недалеко от центра. Жильё найдено в кратчайшие сроки, переезд состоялся, спасибо сервису!"',
    avatar: './images/avatar2.jpg',
    name: 'Наталья Кругова',
    about: 'Заказчик'
  },
  {
    text: '"Приняли решение переехать из квартиры в дом. Стояла задача найти небольшой симпатичный дом в пригороде Москвы. Нашли замечательный вариант, быстро оформили договор и получили ключи. Мы дома!"',
    avatar: './images/avatar3.jpg',
    name: 'Анастасия Филатова',
    about: 'Заказчик'
  },
];

//создание разметки карточки для добавления из массива
const createReviewCard = (text, avatar, name, about) => {
const newReviewCard = cardReviewTemplate.content.querySelector('.review').cloneNode('true');
const newReviewCardText = newReviewCard.querySelector('.review__text');
const newReviewCardAvatar = newReviewCard.querySelector('.review__avatar');
const newReviewCardName = newReviewCard.querySelector('.review__name');
const newReviewCardAbout = newReviewCard.querySelector('.review__customer');

newReviewCardText.textContent = text;
newReviewCardAvatar.src = avatar;
newReviewCardAvatar.alt = 'аватар';
newReviewCardName.textContent = name;
newReviewCardAbout.textContent = about;

return newReviewCard;
}

//добавление карточки на страницу
const renderReviewCard = (text, avatar, name, about) => {
  reviewContainer.append(createReviewCard(text, avatar, name, about))
};

//перебор с функцией добавления карточек из массива на страницу
reviewCards.forEach(function (review) {
  renderReviewCard(review.text, review.avatar, review.name, review.about);
});