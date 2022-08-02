import {object, FormValidator} from './validation.js';

//констранты для карточек с недвижимостью
const cardPropertyTemplate = document.querySelector('#property-template');
const propertyContainer = document.querySelector('.properties__grid');
const cardReviewTemplate = document.querySelector('#review-template');
const  reviewContainer = document.querySelector('.reviews__grid');
const popupProperty = document.querySelector('#popup_property');
const buttonClosePopup = document.querySelector('.popup__close-btn');

//константы для попапа с увеличенной картинкой
const popupPropertyImage = popupProperty.querySelector('.popup__image');
const popupPropertyTitle = popupProperty.querySelector('.popup__title');
const popupPropertyPrice = popupProperty.querySelector('.popup__price');
const popupPropertyLocation = popupProperty.querySelector('.popup__location');
const popupPropertyText = popupProperty.querySelector('#popup_text');
const popupPropertyOwner = popupProperty.querySelector('#popup_owner');
const popupPropertyNumber = popupProperty.querySelector('#popup_number');
const popupSpanOwner = popupProperty.querySelector('#span_owner');
const popupSpanNumber = popupProperty.querySelector('#span_number');
const buttonLeftSlider = document.querySelector('.popup__slide-btn_left');
const buttonRightSlider = document.querySelector('.popup__slide-btn_right');

//константы для попапа для добавления отзыва
const popupReview = document.querySelector('#popup_review');
const buttonLeaveReview = document.querySelector('.reviews__button');
const buttonClosePopupReview = document.querySelector('#popup_review_close_btn');
const buttonReviewSubmit = document.querySelector('.popup__submit-btn');
const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');
const star3 = document.querySelector('.star3');
const star4 = document.querySelector('.star4');
const star5 = document.querySelector('.star5');

const popupStar1 = document.querySelector('#star1');
const popupStar2 = document.querySelector('#star2');
const popupStar3 = document.querySelector('#star3');
const popupStar4 = document.querySelector('#star4');
const popupStar5 = document.querySelector('#star5');

//универсальные функции открытия и закрытия попапов
function openPopup (popup) {
  popup.classList.add('popup_opend');
};

function closePopup(popup) {
  popup.classList.remove('popup_opend');
};

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

//массив с данными для карточки с недвижимостью

const propertyCards = [
  {
    image: './images/IMAGE (1).png',
    kitchen: './images/KITCHEN (1).jpeg',
    bath: './images/BATH (1).jpeg',
    title: 'Уютная студия в Москве',
    price: '12 000 000' + ' руб.',
    address: 'Москва, ул.Грайвороновская, д.10',
    bathCount: '1',
    bedroomCount: '1',
    space: '40' + ' кв.м',
    text: 'Светлая студия со свежим ремонтом в 7-ми минутах от метро "Текстильщики". Во дворе частная парковка, в пешей доступности два супермаркета ("Перекресток" и "Пятерочка"). Недалеко находится аллея и зона выгула собак. Буду рада рассказать подробности при личном общении!',
    owner: 'Дёмина Анастасия',
    number: '8-962-999-30-12'
  },
  {
    image: './images/IMAGE (2).png',
    kitchen: './images/KITCHEN (2).jpeg',
    bath: './images/BATH (2).jpeg',
    title: 'Двухкомнатная квартира в Екатеринбурге',
    price: '9 800 000' + ' руб.',
    address: 'Екатеринбург, ул.8 Марта, д.66',
    bathCount: '2',
    bedroomCount: '1',
    space: '73' + ' кв.м',
    text: 'Просторная двухкомнатная квартира в Ленинском районе вблизи ТЦ "Гринвич" с минималистичным ремонтом в светлых тонах. Имеется два санузла (санузел + ванная и санузел + душевая). Также есть утепленная лоджия с видом на ул. 8 Марта.',
    owner: 'Савельев Олег',
    number: '8-916-233-14-01'
  },
  {
    image: './images/IMAGE (3).png',
    kitchen: './images/KITCHEN (3).jpeg',
    bath: './images/BATH (3).jpeg',
    title: 'Однокомнатная квартира в Санкт-Петербурге',
    price: '15 200 000.' + ' руб.',
    address: 'Санкт-Петербург, ул.Садовая, д.3',
    bathCount: '1',
    bedroomCount: '1',
    space: '53' + ' кв.м',
    text: 'Однокомнатная квартира в центре Санкт-Петербурга. Просторная кухня со всей необходимой техникой, разделенный санузел, в спальне имеется кондиционер. Окна выходят на тихую улицу.',
    owner: 'Антонов Михаил',
    number: '8-903-136-90-69'
  },
  {
    image: './images/IMAGE (4).png',
    kitchen: './images/KITCHEN (4).jpeg',
    bath: './images/BATH (4).jpeg',
    title: 'Светлая студия в центре Москвы',
    price: '30 500 000' + ' руб.',
    address: 'Москва, ул.Спортивная, д.75',
    bathCount: '1',
    bedroomCount: '1',
    space: '45' + ' кв.м',
    text: 'Студия в самом центре Москвы (5 минут до м. Курская). Близость ТЦ "Атриум", Курского вокзала. Студия просторная, санузел совмещенный, имеется джакузи. Балкон утеплен. Входная дверь оборудована кодовым замком. 6 этаж из 10.',
    owner: 'Осипова Анна',
    number: '8-916-866-55-34'
  },
  {
    image: './images/IMAGE (5).png',
    kitchen: './images/KITCHEN (5).jpeg',
    bath: './images/BATH (5).jpeg',
    title: 'Просторная 4-х комнатная квартира в Воронеже',
    price: '18 600 000' + ' руб.',
    address: 'Воронеж, ул.Карла Маркса, д.34',
    bathCount: '2',
    bedroomCount: '4',
    space: '98 кв.м',
    text: 'Идеальный вариант для многодетной семьи. До ближайшей школы 7 минут пешком, детский сад во дворе. Планировка предусматривает отдельные комнаты, проходных помещений нет. Имеется два санузла, в большом установлено джакузи. Частная парковка.',
    owner: 'Кучербаева Татьяна',
    number: '8-985-677-43-34'
  },
  {
    image: './images/IMAGE (6).png',
    kitchen: './images/KITCHEN (3).jpeg',
    bath: './images/BATH (6).jpeg',
    title: 'Комфортные апартаменты в Зеленограде',
    price: '7 300 000 ' + ' руб.',
    address: 'Зеленоград, ул.Каштановая аллея, д.108',
    bathCount: '1',
    bedroomCount: '1',
    space: '44' + ' кв.м',
    text: 'Апартаменты в центре Зеленограда в новострое. Дом расположен в зеленом районе, поблизости главный городской парк. Свежий ремонт, вся необходимая бытовая техника, новая мебель. В доме имеется консьерж, домофон с видеокамерой.',
    owner: 'Савченко Дмитрий',
    number: '8-916-533-23-65'
  },

  {
    image: './images/IMAGE (6).png',
    kitchen: './images/KITCHEN (3).jpeg',
    bath: './images/BATH (6).jpeg',
    title: 'Комфортные апартаменты в Зеленограде',
    price: '7 300 000 ' + ' руб.',
    address: 'Зеленоград, ул.Каштановая аллея, д.108',
    bathCount: '1',
    bedroomCount: '1',
    space: '44' + ' кв.м',
    text: 'Апартаменты в центре Зеленограда в новострое. Дом расположен в зеленом районе, поблизости главный городской парк. Свежий ремонт, вся необходимая бытовая техника, новая мебель. В доме имеется консьерж, домофон с видеокамерой.',
    owner: 'Савченко Дмитрий',
    number: '8-916-533-23-65'
  },
];

//создание экземпляра класса валидации 

const validPopupForm = new FormValidator(object, '#popupForm'); 
const validFooterForm = new FormValidator(object, '#footerForm'); 
validPopupForm.enableValidation(); 
validFooterForm.enableValidation(); 

//создание разметки карточки для добавления из массива
const createPropertyCard = (image, title, price, address, bathCount, bedroomCount, space, text, owner, number,kitchen,bath) => {
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
  });

//закрытие попапа с увеличенной картинкой
buttonClosePopup.addEventListener('click', function () {
  closePopup(popupProperty);
});


  return newPropertyCard;
}

//добавление карточки на страницу
const renderPropertyCard = (image, title, price, address, bathCount, bedroomCount, space, text, owner, number,kitchen, bath) => {
  propertyContainer.append(createPropertyCard(image, title, price, address, bathCount, bedroomCount, space, text, owner, number,kitchen,bath))
};

//перебор с функцией добавления карточек из массива на страницу
let sixCards = propertyCards.slice(0,6);

sixCards.forEach(function (property) {
  renderPropertyCard(property.image, property.title, property.price, property.address, property.bathCount, property.bedroomCount, property.space, property.text, property.owner, property.number, property.kitchen, property.bath);
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

//рендер звезд
const newStar1 = newReviewCard.querySelector('.t-star1');
const newStar2 = newReviewCard.querySelector('.t-star2');
const newStar3 = newReviewCard.querySelector('.t-star3');
const newStar4 = newReviewCard.querySelector('.t-star4');
const newStar5 = newReviewCard.querySelector('.t-star5');

if (popupStar1.classList.contains('review__star_inactive')) {
  newStar1.classList.add('review__star_inactive')
}else{
  newStar1.classList.remove('review__star_inactive')
}

if (popupStar2.classList.contains('review__star_inactive')) {
  newStar2.classList.add('review__star_inactive')
}else{
  newStar2.classList.remove('review__star_inactive')
}

if (popupStar3.classList.contains('review__star_inactive')) {
  newStar3.classList.add('review__star_inactive')
}else{
  newStar3.classList.remove('review__star_inactive')
}

if (popupStar4.classList.contains('review__star_inactive')) {
  newStar4.classList.add('review__star_inactive')
}else{
  newStar4.classList.remove('review__star_inactive')
}

if (popupStar5.classList.contains('review__star_inactive')) {
  newStar5.classList.add('review__star_inactive')
}else{
  newStar5.classList.remove('review__star_inactive')
}

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

const reviewForm = document.querySelector('.popup__container_review');
const nameInput = reviewForm.querySelector('#input_name');
const textInput = reviewForm.querySelector('#input_text');
const submit = reviewForm.querySelector('.popup__submit-btn');
const customerCheckbox = reviewForm.querySelector('#radio_customer');

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

const starsContainer = document.querySelector('.review__rating_popup');

let stars = [
  star1, star2, star3, star4, star5
]

starsContainer.addEventListener('click', (evt) => {
  for (let i = 0; i <= stars.indexOf(evt.target); i++) {
    stars[i].classList.remove('review__star_inactive')
  };
  starsContainer.removeEventListener('mouseout', turnStarActiveOff)
})

//функция добавления селектора неактивности
const turnStarActiveOn = (evt) => {
  for (let i = 0; i <= stars.indexOf(evt.target); i++) {
    stars[i].classList.remove('review__star_inactive')}
};

const turnStarActiveOff = (evt) => {
  for (let i = 0; i <= stars.indexOf(evt.target); i++) {
    stars[i].classList.add('review__star_inactive')}
};

starsContainer.addEventListener('mouseover', turnStarActiveOn);
starsContainer.addEventListener('mouseout', turnStarActiveOff)