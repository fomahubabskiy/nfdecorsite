// 1. Показываем имя компьютера
document.getElementById('hostName').textContent = window.location.hostname;

// 2. Текущее время с обновлением
function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
updateTime();
setInterval(updateTime, 1000);

// 3. Счетчик нажатий
let count = 0;
document.getElementById('clickBtn').addEventListener('click', function() {
    count++;
    document.getElementById('clickCount').textContent = `Нажат: ${count}`;
});

// 4. Попытка получить IP из Radmin VPN (через API)
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        // Это внешний IP, не Radmin. Но для демонстрации подойдет.
        document.getElementById('ipDisplay').textContent = data.ip;
    })
    .catch(() => {
        document.getElementById('ipDisplay').textContent = 'не удалось определить';
    });

// 5. Дополнительно: сохраняем дату первого запуска
if (!localStorage.getItem('firstVisit')) {
    localStorage.setItem('firstVisit', new Date().toLocaleString('ru-RU'));
}
console.log(`Сайт запущен! Первое посещение: ${localStorage.getItem('firstVisit')}`);