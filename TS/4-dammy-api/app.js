"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Определяем enum для статусов запроса и полей пользователя
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["SUCCESS"] = "success";
    RequestStatus["ERROR"] = "error";
    RequestStatus["LOADING"] = "loading";
})(RequestStatus || (RequestStatus = {}));
var UserField;
(function (UserField) {
    UserField["ID"] = "id";
    UserField["FIRST_NAME"] = "firstName";
    UserField["LAST_NAME"] = "lastName";
    UserField["AGE"] = "age";
    UserField["EMAIL"] = "email";
    UserField["PHONE"] = "phone";
})(UserField || (UserField = {}));
// Функция для получения пользователей
async function fetchUsers() {
    const url = 'https://dummyjson.com/users';
    try {
        console.log('🔍 Загружаем пользователей...');
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`✅ ${RequestStatus.SUCCESS}: Получено ${data.users.length} пользователей`);
        console.log('📋 Данные пользователей:');
        console.log('─'.repeat(50));
        // Выводим данные пользователей в консоль
        data.users.forEach((user, index) => {
            console.log(`👤 Пользователь ${index + 1}:`);
            console.log(`   ${UserField.ID}: ${user[UserField.ID]}`);
            console.log(`   Имя: ${user[UserField.FIRST_NAME]} ${user[UserField.LAST_NAME]}`);
            console.log(`   ${UserField.AGE}: ${user[UserField.AGE]}`);
            console.log(`   ${UserField.EMAIL}: ${user[UserField.EMAIL]}`);
            console.log(`   ${UserField.PHONE}: ${user[UserField.PHONE]}`);
            console.log('─'.repeat(30));
        });
    }
    catch (error) {
        console.error(`❌ ${RequestStatus.ERROR}: Не удалось получить пользователей`);
        if (error instanceof Error) {
            console.error(`   Сообщение: ${error.message}`);
        }
        else {
            console.error(`   Неизвестная ошибка: ${error}`);
        }
    }
}
// Дополнительная функция с фильтрацией полей
function displayUserInfo(user, fields) {
    console.log('📄 Выбранные поля пользователя:');
    fields.forEach(field => {
        console.log(`   ${field}: ${user[field]}`);
    });
}
// Альтернативная версия с ограничением количества пользователей
async function fetchLimitedUsers(limit = 5) {
    const url = `https://dummyjson.com/users?limit=${limit}`;
    try {
        console.log(`🔍 Загружаем ${limit} пользователей...`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`✅ ${RequestStatus.SUCCESS}: Получено ${data.users.length} пользователей`);
        // Используем функцию для отображения выбранных полей
        data.users.forEach((user, index) => {
            console.log(`\n👤 Пользователь ${index + 1}:`);
            displayUserInfo(user, [
                UserField.FIRST_NAME,
                UserField.LAST_NAME,
                UserField.EMAIL,
                UserField.PHONE
            ]);
        });
    }
    catch (error) {
        console.error(`❌ ${RequestStatus.ERROR}: Ошибка при загрузке пользователей`);
        if (error instanceof Error) {
            console.error(`   Детали: ${error.message}`);
        }
    }
}
// Запуск функций
fetchUsers();
// Через 3 секунды запускаем ограниченную версию
setTimeout(() => {
    console.log('\n' + '='.repeat(50));
    console.log('ЗАГРУЗКА ОГРАНИЧЕННОГО СПИСКА');
    console.log('='.repeat(50));
    fetchLimitedUsers(3);
}, 3000);
//# sourceMappingURL=app.js.map