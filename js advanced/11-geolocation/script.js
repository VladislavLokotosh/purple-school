function getCurrentLocationPromise() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Геолокация не поддерживается вашим браузером.'));
            return;
        }
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error)
        );
    });
}

// Запрос координат и вывод в консоль
console.log('Запрашиваем координаты...');

getCurrentLocationPromise()
    .then(position => {
        const { latitude, longitude } = position.coords;
        console.log(`Широта: ${latitude.toFixed(6)}`);
        console.log(`Долгота: ${longitude.toFixed(6)}`);
    })
    .catch(error => {
        console.error(`Ошибка при получении геолокации: ${error.message}`);
    })
    .finally(() => {
        console.log('Запрос геолокации завершён.');
    });
