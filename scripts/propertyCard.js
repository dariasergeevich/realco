
  export class PropertyCard {
    constructor (image, title, price, address, bathCount, bedroomCount, space, text, owner, number, templateSelector, handleCardClick) {
      this.image = image;
      this.title = title;
      this.price = price;
      this.address = address;
      this.bathCount = bathCount;
      this.bedroomCount = bedroomCount;
      this.space = space;
      this.text = text;
      this.owner = owner;
      this.number = number;
      this.templateSelector = templateSelector;
      this.handleCardClick = handleCardClick;
    }

    _getTemplate = () => {
        const newPropertyCard = document
        .querySelector(this.templateSelector)
        .content
        .querySelector('.property')
        .cloneNode('true');
        return newPropertyCard;
    }

    _setEventListeners = () => {
      const newPropertyCard = this._getTemplate();
      const buttonClosePopup = document.querySelector('.popup__close-btn');


      newPropertyCard.addEventListener('click', () => {
        this.handleCardClick(this.image, this.title, this.price, this.address, this.text, this.owner, this.number)
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

newPropertyCardImage.src = this.image;
newPropertyCardImage.alt = this.title;
newPropertyCardTitle.textContent = this.title;
newPropertyCardPrice.textContent = this.price;
newPropertyCardAddress.textContent = this.address;
newPropertyCardBathCount.textContent = this.bathCount;
newPropertyCardBedroomCount.textContent = this.bedroomCount;
newPropertyCardSpace.textContent = this.space;

return newPropertyCard;
    }
  }

