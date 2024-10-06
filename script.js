async function searchUsers() {
    const searchInput = document.getElementById('username').value;
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';
    
    if (searchInput === '') {
        alert("Search bar is empty.");
        return;
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const Users = data.filter(user => user.username.includes(searchInput));

        if (Users.length === 0) {
            usersList.innerHTML = "<p>No Username has found.</p>";
        } else {
            Users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                    <hr>
                `;
                usersList.appendChild(userElement);
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}