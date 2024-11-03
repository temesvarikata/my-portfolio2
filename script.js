document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const usersDiv = document.getElementById('users');
            data.results.forEach(user => {
                const userCard = document.createElement('div');
                userCard.innerHTML = `
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p>Email: ${user.email}</p>
                    <img src="${user.picture.medium}" alt="Profilkép">
                `;
                usersDiv.appendChild(userCard);
            });
        })
        .catch(error => console.error('Hiba a felhasználók betöltésekor:', error));
});
