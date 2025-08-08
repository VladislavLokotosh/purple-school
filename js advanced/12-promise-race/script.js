function race(promises) {
    return new Promise((resolve, reject) => {
        for (const p of promises) {
            Promise.resolve(p).then(resolve, reject);
        }
    });
}

const fast = new Promise(resolve => setTimeout(() => resolve("Быстрый ответ"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Медленный ответ"), 1000));
const error = new Promise((_, reject) => setTimeout(() => reject("Ошибка!"), 500));

race([slow, error, fast])
    .then(result => {
        console.log("Успех:", result);
    })
    .catch(err => {
        console.error("Не успех:", err);
    });
