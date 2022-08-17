
 export class PropertyCard {
  constructor (image, title, price, address, bathCount, bedroomCount, space, text, owner, number, templateSelector, handleCardClick, bath, kitchen) {
    this._image = image;
    this._bath = bath;
    this._kitchen = kitchen;
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
      .querySelector('.property')
      .cloneNode('true');
      return newPropertyCard;
  }

  _setEventListeners = () => {
    const newPropertyCard = this._getTemplate();
    const buttonClosePopup = document.querySelector('.popup__close-btn');


    newPropertyCard.addEventListener('click', () => {
      this._handleCardClick(this._image, this._bath, this._kitchen, this._title, this._price, this._address, this._text, this._owner, this._number, this._bathCount,this._bedroomCount, this._space )
    });

  return newPropertyCard;
  } 

  createPropertyCard = () => {
const newPropertyCard = this._setEventListeners();
const newPropertyCardImage =  newPropertyCard.querySelector('.property__image');
const newPropertyCardTitle = newPropertyCard.querySelector('.property__title');
const newPropertyCardPrice = newPropertyCard.querySelector('.property__price');
const newPropertyCardAddress = newPropertyCard.querySelector('.property__location');
const newPropertyCardBathCount = newPropertyCard.querySelector('#bath-count');
const newPropertyCardBedroomCount = newPropertyCard.querySelector('#bedroom-count');
const newPropertyCardSpace = newPropertyCard.querySelector('#space');

newPropertyCardImage.src = this._image;
newPropertyCardImage.alt = this._title;


newPropertyCardTitle.textContent = this._title;
newPropertyCardPrice.textContent = this._price;
newPropertyCardAddress.textContent = this._address;
newPropertyCardBathCount.textContent = this._bathCount;
newPropertyCardBedroomCount.textContent = this._bedroomCount;
newPropertyCardSpace.textContent = this._space;

return newPropertyCard;
  }
}