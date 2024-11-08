import { updateUserInfo } from "./api";
import { checkTextInput } from "./validation";
import { closePopup } from "./modal";

export function editProfile(button, form) {
    const profileName = document.querySelector('.popup__input_type_name');
    const profileDesc = document.querySelector('.popup__input_type_description');
    const currentName = document.querySelector('.profile__title');
    const currentDesc = document.querySelector('.profile__description');

    // Функция для проверки корректности введенных значений
    function isValidInput(inputValue) {
        return checkTextInput(inputValue);
    }

    // Обработчики событий для каждого поля ввода
    profileName.addEventListener('input', updateButtonState);
    profileDesc.addEventListener('input', updateButtonState);

    // Функция для обновления состояния кнопки
    function updateButtonState() {
        const nameIsValid = isValidInput(profileName.value);
        const descIsValid = isValidInput(profileDesc.value);

        if (nameIsValid && descIsValid) {
            button.disabled = false;

        } else {
            button.disabled = true;
        }
    }

    // Если оба поля заполнены корректно, обновляем данные
    if (isValidInput(profileName.value) && isValidInput(profileDesc.value)) {
        currentName.textContent = profileName.value;
        currentDesc.textContent = profileDesc.value;
        
        updateUserInfo(currentName.textContent, currentDesc.textContent);
        closePopup(form)
    }
    
    // Изначально проверяем состояние полей
    updateButtonState();
}