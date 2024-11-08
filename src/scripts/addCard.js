import { addNewCard, toggleLike_1 } from "./api";
import { checkImageInput, checkTextInput } from "./validation";
import { createCard } from "./card";
import { closePopup } from "./modal";
const saveButton = document.querySelector('.popup__button'); // Кнопка "Сохранить"

const cardLinkField = document.querySelector('.popup__input_type_url');
const cardDescField = document.querySelector('.popup__input_type_card-name');
const gal = document.querySelector('.places__list');

// Функции для проверки корректности введенных значений
function isValidLink(inputValue) {
    return checkImageInput(inputValue);
}
function isValidDesc(inputValue) {
    return checkTextInput(inputValue);
}
// Функция для обновления состояния кнопки
function updateButtonState() {
    const linkIsValid = isValidLink(cardLinkField.value);
    const descIsValid = isValidDesc(cardDescField.value);
    console.log(saveButton.disabled)

// Переключение кнопки из активного состояния в неактивное и обратно
    if (linkIsValid && descIsValid) {
        saveButton.disabled = false;
        saveButton.classList.remove('popup__button-disabled');
        console.log(saveButton.classList)

    } else {
        saveButton.disabled = true;
        saveButton.classList.add('popup__button-disabled')
        console.log(saveButton.classList)
    }
}

// Обработчики событий для каждого поля ввода
cardLinkField.addEventListener('input', updateButtonState);
cardDescField.addEventListener('input', updateButtonState);

export function addCard() {

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
                    isLiked == true ? likeCount.textContent-- : likeCount.textContent++;
                    likeButton.classList.toggle('card__like-button_is-active');
                });
                // Добавляем карточку в разметку
                gal.prepend(cardElement);
            };
            
            closePopup(document.querySelector('.popup_type_new-card'));
        ;}
    };
    updateButtonState();
    getNewCard();
};

//2222222222222222222222222-----------------------------------------------------------------------------------

// // import { addNewCard, toggleLike_1 } from './api';
// // import { checkImageInput, checkTextInput } from './validation';
// // import { createCard } from './card';
// // import { closePopup } from './modal';

// // const saveButton = document.querySelector('.popup__button'); // Кнопка "Сохранить"
// // const cardLinkField = document.querySelector('.popup__input_type_url');
// // const cardDescField = document.querySelector('.popup__input_type_card-name');
// // const gal = document.querySelector('.places__list');

// // // Функции для проверки корректности введенных значений
// // function isValidLink(inputValue) {
// //     return checkImageInput(inputValue);
// // }

// // function isValidDesc(inputValue) {
// //     return checkTextInput(inputValue);
// // }

// // // Функция для обновления состояния кнопки
// // function updateButtonState() {
// //     const linkIsValid = isValidLink(cardLinkField.value);
// //     const descIsValid = isValidDesc(cardDescField.value);

// //     // Переключение кнопки из активного состояния в неактивное и обратно
// //     if (linkIsValid && descIsValid) {
// //         saveButton.disabled = false;
// //     } else {
// //         saveButton.disabled = true;
// //     }
// // }

// // // Обработчики событий для каждого поля ввода
// // cardLinkField.addEventListener('input', updateButtonState);
// // cardDescField.addEventListener('input', updateButtonState);

// // export function addCard() {
// //     let isAddingCard = false; // Флаг, чтобы отслеживать процесс добавления карточки

// //     // Если оба поля заполнены корректно, обновляем данные
// //     const getNewCard = async function () {
// //         if (!isAddingCard && isValidLink(cardLinkField.value) && isValidDesc(cardDescField.value)) {
// //             isAddingCard = true; // Устанавливаем флаг, что карточка добавляется
// //             saveButton.disabled = true; // Блокируем кнопку

// //             try {
// //                 const newCard = await addNewCard(cardDescField.value, cardLinkField.value);
// //                 if (newCard) {
// //                     // Создаем карточку и получаем данные
// //                     const cardElement = createCard(newCard, newCard.owner._id);
// //                     const likeButton = cardElement.querySelector('.card__like-button');
// //                     const cardId = newCard._id;
// //                     const likeCount = cardElement.querySelector('.card__like-count');

// //                     // Слушатель для добавления и снятия лайка
// //                     likeButton.addEventListener('click', () => {
// //                         const isLiked = likeButton.classList.contains(
// //                             'card__like-button_is-active'
// //                         );
// //                         toggleLike_1(cardId, isLiked);
// //                         isLiked === true ? likeCount.textContent-- : likeCount.textContent++;
// //                         likeButton.classList.toggle('card__like-button_is-active');
// //                     });

// //                     // Добавляем карточку в разметку
// //                     gal.prepend(cardElement);
// //                 }
// //             } finally {
// //                 isAddingCard = false; // Сбрасываем флаг после завершения операции
// //                 updateButtonState(); // Обновляем состояние кнопки
// //                 closePopup(document.querySelector('.popup_type_new-card')); // Закрываем попап
// //             }
// //         }
// //     };

// //     getNewCard();
// //     updateButtonState();
// // };

// import { addNewCard, toggleLike_1 } from './api';
// import { checkImageInput, checkTextInput } from './validation';
// import { createCard } from './card';
// import { closePopup } from './modal';

// const saveButton = document.querySelector('.popup__button'); // Кнопка "Сохранить"
// const cardLinkField = document.querySelector('.popup__input_type_url');
// const cardDescField = document.querySelector('.popup__input_type_card-name');
// const gal = document.querySelector('.places__list');

// let isAddingCard = false; // Флаг, чтобы отслеживать процесс добавления карточки

// // Функции для проверки корректности введенных значений
// function isValidLink(inputValue) {
//     return checkImageInput(inputValue);
// }

// function isValidDesc(inputValue) {
//     return checkTextInput(inputValue);
// }

// // Функция для обновления состояния кнопки
// function updateButtonState() {
//     const linkIsValid = isValidLink(cardLinkField.value);
//     const descIsValid = isValidDesc(cardDescField.value);

//     // Переключение кнопки из активного состояния в неактивное и обратно
//     if (linkIsValid && descIsValid && !isAddingCard) {
//         saveButton.disabled = false;
//         saveButton.classList.remove('popup__button-disabled');
//     } else {
//         saveButton.disabled = true;
//         saveButton.classList.add('popup__button-disabled')
//     }
// }

// // Обработчики событий для каждого поля ввода
// cardLinkField.addEventListener('input', updateButtonState);
// cardDescField.addEventListener('input', updateButtonState);

// export function addCard(form) {
//     // Если оба поля заполнены корректно, обновляем данные
//     const getNewCard = async function () {
//         if (!isAddingCard && isValidLink(cardLinkField.value) && isValidDesc(cardDescField.value)) {
//             isAddingCard = true; // Устанавливаем флаг, что карточка добавляется
//             saveButton.disabled = true; // Блокируем кнопку

//             try {
//                 const newCard = await addNewCard(cardDescField.value, cardLinkField.value);
//                 if (newCard) {
//                     // Создаем карточку и получаем данные
//                     const cardElement = createCard(newCard, newCard.owner._id);
//                     const likeButton = cardElement.querySelector('.card__like-button');
//                     const cardId = newCard._id;
//                     const likeCount = cardElement.querySelector('.card__like-count');

//                     // Слушатель для добавления и снятия лайка
//                     likeButton.addEventListener('click', () => {
//                         const isLiked = likeButton.classList.contains(
//                             'card__like-button_is-active'
//                         );
//                         toggleLike_1(cardId, isLiked);
//                         isLiked === true ? likeCount.textContent-- : likeCount.textContent++;
//                         likeButton.classList.toggle('card__like-button_is-active');
//                     });

//                     // Добавляем карточку в разметку
//                     gal.prepend(cardElement);
//                 }
//             } catch (error) {
//                 console.error('Ошибка при добавлении карточки:', error); // Логируем ошибку
//             } finally {
//                 isAddingCard = false; // Сбрасываем флаг после завершения операции
//                 closePopup(document.querySelector('.popup_type_new-card')); // Закрываем попап
//                 updateButtonState(); // Обновляем состояние кнопки
//             }
//         }
//     };

//     getNewCard();
//     updateButtonState();
// }
