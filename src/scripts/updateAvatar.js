import { updateAvatar } from "./api";
import { checkImageInput } from "./validation";
import { closePopup } from "./modal";

const avatarInput = document.querySelector('.popup__input_type_avatar-link')
const userAvatar = document.querySelector('.profile__image');
const saveButton = document.querySelector('.popup__button'); // Кнопка "Сохранить"
const msgError = document.querySelector('#avatar-error') // Сообщение о ошибке

// Функция для проверки корректности введенных значений
function isValidInput(inputValue) {
    return checkImageInput(inputValue);
}

function updateButtonState() {
    const linkIsValid = isValidInput(avatarInput.value);
    // Если ОК
    if (linkIsValid) {
        saveButton.disabled = false;
        saveButton.classList.remove('popup__button-disabled');
        msgError.textContent = '';
    // Если не ОК
    } else {
        saveButton.disabled = true;
        saveButton.classList.add('popup__button-disabled');
        msgError.textContent = 'Разрешены только ссылки на изображения с расширением jpg | jpeg | png | gif | bmp | webp';
    }
}

// Обработчик событий для поля ввода
avatarInput.addEventListener('input', updateButtonState);

export function updateUserAvatar() {

    if (isValidInput(avatarInput.value)) {
        updateAvatar(avatarInput.value);
        userAvatar.style.backgroundImage = `url(${avatarInput.value})`;
        closePopup(document.querySelector('.popup_type_avatar'))
    }
    // Изначально проверяем состояние поля
}
updateButtonState();


// .style.backgroundImage