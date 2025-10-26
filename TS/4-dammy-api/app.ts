// Определяем enum для статусов запроса и полей пользователя
enum RequestStatus {
  SUCCESS = 'success',
  ERROR = 'error',
  LOADING = 'loading'
}

enum UserField {
  ID = 'id',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  AGE = 'age',
  EMAIL = 'email',
  PHONE = 'phone'
}

// Интерфейс для ответа API
interface User {
  [UserField.ID]: number;
  [UserField.FIRST_NAME]: string;
  [UserField.LAST_NAME]: string;
  [UserField.AGE]: number;
  [UserField.EMAIL]: string;
  [UserField.PHONE]: string;
}

interface ApiResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

// Функция для получения пользователей
async function fetchUsers(): Promise<void> {
  const url = 'https://dummyjson.com/users';
  
  try {
    console.log('🔍 Загружаем пользователей...');
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    
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
    
  } catch (error) {
    console.error(`❌ ${RequestStatus.ERROR}: Не удалось получить пользователей`);
    
    if (error instanceof Error) {
      console.error(`   Сообщение: ${error.message}`);
    } else {
      console.error(`   Неизвестная ошибка: ${error}`);
    }
  }
}

// Дополнительная функция с фильтрацией полей
function displayUserInfo(user: User, fields: UserField[]): void {
  console.log('📄 Выбранные поля пользователя:');
  fields.forEach(field => {
    console.log(`   ${field}: ${user[field]}`);
  });
}

// Альтернативная версия с ограничением количества пользователей
async function fetchLimitedUsers(limit: number = 5): Promise<void> {
  const url = `https://dummyjson.com/users?limit=${limit}`;
  
  try {
    console.log(`🔍 Загружаем ${limit} пользователей...`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    
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
    
  } catch (error) {
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