//функция переноса звезд рейтинга из попапа на страницу
 export const renderStars = () => {
    const starsContainer = document.querySelector('.review__rating_popup');
    const star1 = document.querySelector('.star1');
  const star2 = document.querySelector('.star2');
  const star3 = document.querySelector('.star3');
  const star4 = document.querySelector('.star4');
  const star5 = document.querySelector('.star5');
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
  }
  

