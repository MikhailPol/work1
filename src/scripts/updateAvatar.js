import { updateAvatar } from "./api";
import { checkImageInput } from "./validation";
import { closePopup } from "./modal";


export function updateUserAvatar(button, form) {
    const avatarInput = document.querySelector('.popup__input_type_avatar-link')
    const userAvatar = document.querySelector('.profile__image');

    // Функция для проверки корректности введенных значений
    function isValidInput(inputValue) {
        return checkImageInput(inputValue);
    }

    // Обработчики событий для каждого поля ввода
    avatarInput.addEventListener('input', updateButtonState);

    // Функция для обновления состояния кнопки
    function updateButtonState() {
        const linkIsValid = isValidInput(avatarInput.value);

        if (linkIsValid) {
            button.disabled = false;

        } else {
            button.disabled = true;
        }
    }
    // Если ссылка корректа
    if (isValidInput(avatarInput.value)) {
        userAvatar.style.backgroundImage = `url(${avatarInput.value})`;
        
        updateAvatar(avatarInput.value);
        console.log(avatarInput.value)
        console.log(userAvatar)
        closePopup(form)
    }
    
    // Изначально проверяем состояние поля
    updateButtonState();
}


// .style.backgroundImage