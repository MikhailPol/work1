import { getUserInfo, getInitialCards, toggleLike_1} from './api.js';
import {renderCards } from './card.js';

const userData = await getUserInfo();
const cards = await getInitialCards();
const userName = document.querySelector('.profile__title');
const userAbot = document.querySelector('.profile__description');
const userAvatar = document.querySelector('.profile__image');

function display(userData, cards) {
  userAvatar.style.backgroundImage = `url(${userData.avatar})`;
  userName.textContent = userData.name;
  userAbot.textContent = userData.about;
  renderCards(cards, userData._id);
  const likeButtons = document.querySelectorAll('.card__like-button');
  const likeCount = document.querySelectorAll('.card__like-count');
  likeButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const currentCard = cards[index];
          const cardId = currentCard._id;
          const isLiked1 = button.classList.contains('card__like-button_is-active');
          toggleLike_1(cardId, isLiked1);
          console.log(isLiked1);
          isLiked1 == true ?likeCount[index].textContent-- : likeCount[index].textContent++;
          button.classList.toggle('card__like-button_is-active');
      });
  });
}

export function startDisplay(){
  display(userData, cards)
}