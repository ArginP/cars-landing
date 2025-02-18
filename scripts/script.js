// Фильтр по марке автомобиля

const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carContent = document.querySelector('#cars-content');

filterItems.forEach(item => {
    item.onclick = () => {
        filterItems.forEach(el => el.classList.remove('active'));
        item.classList.add('active');

        const filterText = item.textContent.toLowerCase();

        carItems.forEach(item => {
            if (filterText === 'все марки' || item.querySelector("h4").textContent.toLowerCase().includes(filterText)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        })

        carContent.scrollIntoView({
            behavior: 'instant'
        });
    }
})

// Валидация форм

const orderButton = document.getElementById('order-action');
const validationRules = {
    car: { minLength: 1 },
    name: { minLength: 2 },
    phone: { minLength: 10 }
};

// Валидация по клику на кнопку заказа
orderButton.addEventListener('click', function () {

    let isValid = true;
    const inputs = ['car', 'name', 'phone'];

    inputs.forEach(input => {
        const field = document.getElementById(input);

        // Проверка минимальной длины введенной информации
        if (field.value.trim().length < validationRules[input].minLength) {
            // .trim() убирает пробелы с начала и конца строки
            isValid = false;
            field.classList.add('invalid');
        } else {
            field.classList.remove('invalid');
        }
    });

    if (isValid) { // Проверка пройдена: вывести сообщение
        alert("Thank you for your order! We'll contact you soon.");

        // И очистить все поля ввода
        inputs.forEach(input => {
            document.getElementById(input).value = '';
        });
    }
});