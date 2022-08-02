export const reviewCards = [
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

  export class reviewCard {
    constructor (text, avatar, name, about, templateSelector) {
      this.text = text;
      this.avatar = avatar;
      this.name = name;
      this.about = about;
      this.templateSelector = templateSelector;
    }
    _getTemplate = () => {
        const newReviewCard = document
        .querySelector(this.templateSelector)
        .content
        .querySelector('.review')
        .cloneNode('true');
        return newReviewCard;
    }


    createReviewCard = () => {
const newReviewCard = this._getTemplate();
const newReviewCardText = newReviewCard.querySelector('.review__text');
const newReviewCardAvatar = newReviewCard.querySelector('.review__avatar');
const newReviewCardName = newReviewCard.querySelector('.review__name');
const newReviewCardAbout = newReviewCard.querySelector('.review__customer');

newReviewCardText.textContent = this.text;
newReviewCardAvatar.src = this.avatar;
newReviewCardAvatar.alt = 'аватар';
newReviewCardName.textContent = this.name;
newReviewCardAbout.textContent = this.about;

//рендер звезд
const newStar1 = newReviewCard.querySelector('.t-star1');
const newStar2 = newReviewCard.querySelector('.t-star2');
const newStar3 = newReviewCard.querySelector('.t-star3');
const newStar4 = newReviewCard.querySelector('.t-star4');
const newStar5 = newReviewCard.querySelector('.t-star5');

const popupStar1 = document.querySelector('#star1');
const popupStar2 = document.querySelector('#star2');
const popupStar3 = document.querySelector('#star3');
const popupStar4 = document.querySelector('#star4');
const popupStar5 = document.querySelector('#star5');

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

return newReviewCard;
    }
  }

