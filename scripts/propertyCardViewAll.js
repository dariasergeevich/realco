const selectCity = document.querySelector('.sort__city');
  
  
  export class PropertyCardViewAll {
    constructor (image, title, price, address, bathCount, bedroomCount, space, text, owner, number, templateSelector, handleCardClick) {
      this._image = image;
      this._title = title;
      this._price = price;
      this._address = address;
      this._bathCount = bathCount;
      this._bedroomCount = bedroomCount;
      this._space = space;
      this._text = text;
      this._owner = owner;
      this._number = number;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
    }

    _getTemplate = () => {
        const newPropertyCard = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.property_view-all')
        .cloneNode('true');
        return newPropertyCard;
    } 

    createPropertyCard = () => {
const newPropertyCard = this._getTemplate();
const newPropertyCardImage =  newPropertyCard.querySelector('.property__image_view-all');
const newPropertyCardTitle = newPropertyCard.querySelector('.property__title_view-all');
const newPropertyCardPrice = newPropertyCard.querySelector('.property__price_view-all');
const newPropertyCardAddress = newPropertyCard.querySelector('.property__location');
const newPropertyCardText = newPropertyCard.querySelector('.property__text');
const newPropertyCardBathCount = newPropertyCard.querySelector('#bath-count');
const newPropertyCardBedroomCount = newPropertyCard.querySelector('#bedroom-count');
const newPropertyCardSpace = newPropertyCard.querySelector('#space');

newPropertyCardImage.src = this._image;
newPropertyCardImage.alt = this._title;
newPropertyCardTitle.textContent = this._title;
newPropertyCardPrice.textContent = this._price;
newPropertyCardText.textContent = this._text;
newPropertyCardAddress.textContent = this._address;
newPropertyCardBathCount.textContent = this._bathCount;
newPropertyCardBedroomCount.textContent = this._bedroomCount;
newPropertyCardSpace.textContent = this._space;

//фильтрация новых карточек по городу
const filterCity = () => {  

  if (selectCity.value == 'Все города') {
    newPropertyCard.classList.remove('property_view-all_hidden');
  }

  if (selectCity.value == 'Балашиха' && !newPropertyCardAddress.textContent.includes('Балашиха')) {
    newPropertyCard.classList.add('property_view-all_hidden');
  }
  if (selectCity.value == 'Балашиха' && newPropertyCardAddress.textContent.includes('Балашиха')) {
    newPropertyCard.classList.remove('property_view-all_hidden');
  }


  if (selectCity.value == 'Воронеж' && !newPropertyCardAddress.textContent.includes('Воронеж')) {
    newPropertyCard.classList.add('property_view-all_hidden');
  }
  if (selectCity.value == 'Воронеж' && newPropertyCardAddress.textContent.includes('Воронеж')) {
    newPropertyCard.classList.remove('property_view-all_hidden');
  }

  if (selectCity.value == 'Екатeринбург' && !newPropertyCardAddress.textContent.includes('Екатеринбург')) {
    newPropertyCard.classList.add('property_view-all_hidden');
  }
  if (selectCity.value == 'Екатeринбург' && newPropertyCardAddress.textContent.includes('Екатеринбург')) {
    newPropertyCard.classList.remove('property_view-all_hidden');
  }

  if (selectCity.value == 'Зеленоград' && !newPropertyCardAddress.textContent.includes('Зеленоград')) {
    newPropertyCard.classList.add('property_view-all_hidden');
  }
  if (selectCity.value == 'Зеленоград' && newPropertyCardAddress.textContent.includes('Зеленоград')) {
    newPropertyCard.classList.remove('property_view-all_hidden');
  }

  if (selectCity.value == 'Казань' && !newPropertyCardAddress.textContent.includes('Казань')) {
    newPropertyCard.classList.add('property_view-all_hidden');
  }
  if (selectCity.value == 'Казань' && newPropertyCardAddress.textContent.includes('Казань')) {
    newPropertyCard.classList.remove('property_view-all_hidden');
  }

  if (selectCity.value == 'Курск' && !newPropertyCardAddress.textContent.includes('Курск')) {
    newPropertyCard.classList.add('property_view-all_hidden');
  }
  if (selectCity.value == 'Курск' && newPropertyCardAddress.textContent.includes('Курск')) {
    newPropertyCard.classList.remove('property_view-all_hidden');
  }

  if (selectCity.value == 'Новосибирск' && !newPropertyCardAddress.textContent.includes('Новосибирск')) {
    newPropertyCard.classList.add('property_view-all_hidden');
  }
  if (selectCity.value == 'Новосибирск' && newPropertyCardAddress.textContent.includes('Новосибирск')) {
    newPropertyCard.classList.remove('property_view-all_hidden');
  }

  if (selectCity.value == 'Самара' && !newPropertyCardAddress.textContent.includes('Самара')) {
    newPropertyCard.classList.add('property_view-all_hidden')}
    if (selectCity.value == 'Самара' && newPropertyCardAddress.textContent.includes('Самара')) {
      newPropertyCard.classList.remove('property_view-all_hidden')}

      if (selectCity.value == 'Тольятти' && !newPropertyCardAddress.textContent.includes('Тольятти')) {
        newPropertyCard.classList.add('property_view-all_hidden')}
        if (selectCity.value == 'Тольятти' && newPropertyCardAddress.textContent.includes('Тольятти')) {
          newPropertyCard.classList.remove('property_view-all_hidden')}
}


selectCity.addEventListener('change', filterCity);



return newPropertyCard;
    }
  }
 