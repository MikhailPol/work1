import { validation } from "./validation";
import { check } from "./validation";


export function showPopup(popup) {
    popup.classList.add('popup-opened');
    document.addEventListener('keydown', pressEscape);
}

export function closePopup(popup) {
    popup.classList.remove('popup-opened');
    document.removeEventListener('keydown', pressEscape);
}

function pressEscape(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup-opened');
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
}
 
export function handleCardImageClick(cardData) {
    const popupImg = document.querySelector('.popup_type_image');
    const popupImage = popupImg.querySelector('.popup__image');
    const popupCaption = popupImg.querySelector('.popup__caption');
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupCaption.textContent = cardData.name;
    showPopup(popupImg);
}

// export function handleFormSubmitForEditProfilePopup(evt) {
//     evt.preventDefault();
//     const popupEdit = document.querySelector('.popup_type_edit');
//     const profileTitle = document.querySelector('.profile__title');
//     const profileDesc = document.querySelector('.profile__description');
//     const nameInput = document.querySelector('.popup__input_type_name');
//     const jobInput = document.querySelector('.popup__input_type_description');
//     const nameValue = nameInput.value;
//     const jobValue = jobInput.value;
//     profileTitle.textContent = nameValue;
//     profileDesc.textContent = jobValue;
//     closePopup(popupEdit);
// }


export const handleButtonClick = (event) => {
    // Получаем кнопку, которая была нажата
    const button = event.target;
    if (button.tagName != "BUTTON") return; // Если это не кнопка, прекращаем выполнение
    //Открываем
    // Поп-апп добавления карточки
    if (button.classList.contains('profile__add-button')) {
        const addCardPop = document.querySelector('.popup_type_new-card');
        showPopup(addCardPop);
    }
    // Поп-апп изменения профиля
    if (button.classList.contains('profile__edit-button')) {
        const editProfilePop = document.querySelector('.popup_type_edit');
        showPopup(editProfilePop);
    }
    // Поп-апп изменения аватара
    if (button.classList.contains('profile-pen')) {
        const editProfilePop = document.querySelector('.popup_type_avatar');
        showPopup(editProfilePop);
    }
    //Закрытия поп-апов.
    if(button.classList.contains('popup__close')) {
        // const rmPop = document.querySelector('.popup-opened');
        const rmPop = button.closest('.popup');
        closePopup(rmPop);
    }
    // Кнопка "Сохранить"
    if(button.innerText == 'Сохранить') {
        const openPopup = button.closest('.popup')
        const form = button.closest('.popup__form');
        // validation(form, button)
        check()
        // console.log(form)
        // closePopup(openPopup)
    }
}

//popup__button
//popup__button