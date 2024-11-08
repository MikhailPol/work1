import { addNewCard, toggleLike_1 } from "./api";
import { checkImageInput, checkTextInput } from "./validation";
import { createCard } from "./card";
import { closePopup } from "./modal";


export async function addCard(button, form) {
    const cardLinkField = document.querySelector('.popup__input_type_url');
    const cardDescField = document.querySelector('.popup__input_type_card-name');
    const gal = document.querySelector('.places__list');

    // Функция для проверки корректности введенных значений
    function isValidLink(inputValue) {
        return checkImageInput(inputValue);
    }
    function isValidDesc(inputValue) {
        return checkTextInput(inputValue);
    }
    // Обработчики событий для каждого поля ввода
    cardLinkField.addEventListener('input', updateButtonState);
    cardDescField.addEventListener('input', updateButtonState);

    // Функция для обновления состояния кнопки
    function updateButtonState() {
        const linkIsValid = isValidLink(cardLinkField.value);
        const descIsValid = isValidDesc(cardDescField.value);

    // Переключение кнопки из активного состояния в неактивное и обратно
        if (linkIsValid && descIsValid) {
            button.disabled = false;

        } else {
            button.disabled = true;
        }
    }

    // Если оба поля заполнены корректно, обновляем данные
        const getNewCard = async function(){
        if (isValidLink(cardLinkField.value) && isValidDesc(cardDescField.value)) {
            const newCard = await addNewCard(cardDescField.value, cardLinkField.value);
            if(newCard) {
                // Создаем карточку и получаем данные
                const cardElement = createCard(newCard, newCard.owner._id);
                const likeButton = cardElement.querySelector('.card__like-button');
                const cardId = newCard._id;
                const likeCount = cardElement.querySelector('.card__like-count');
                //Слушатель для добавления и снятия лайка
                likeButton.addEventListener('click', () => {
                    const isLiked = likeButton.classList.contains('card__like-button_is-active');
                    toggleLike_1(cardId, isLiked)
                    isLiked == true ?likeCount.textContent-- : likeCount.textContent++;
                    likeButton.classList.toggle('card__like-button_is-active');
                });
                // Добавляем карточку в разметку
                gal.prepend(cardElement);
            };
            
            closePopup(form);
        ;}
    };
    getNewCard();
    updateButtonState();
};