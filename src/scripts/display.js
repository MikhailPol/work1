import {updateUserInfo, addNewCard, updateAvatar, fetchCards,  loadUserInfoFromServer, getUserInfo, getInitialCards, toggleLike_1, updateCards, che } from './api.js';
import { createCard, renderCards } from './card.js';

const userData = await getUserInfo();
const cards = await getInitialCards();

function display(userData, cards) {
  renderCards(cards, userData._id);
  const likeButtons = document.querySelectorAll('.card__like-button');
  const likeCount = document.querySelectorAll('.card__like-count')
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