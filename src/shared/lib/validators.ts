import type {Rule} from 'antd/es/form';

export const COMMON_VALIDATOR: Rule = {
    required: true,
    message: 'Пожалуйста, заполните поле!'
};

export const EMAIL_VALIDATOR: Rule = {
    type: 'email',
    message: 'Некорректный email'
};

export const TEXT_ONLY_VALIDATOR: Rule = {
    pattern: /^[A-Za-zА-Яа-яЁё\s\-']+$/,
    message: 'Поле должно содержать только буквы'
};
