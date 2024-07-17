let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');

// Simule sugestões de pesquisa (você pode buscar sugestões de um servidor ou outra fonte de dados)
const suggestions = [
    "Exemplo 1",
    "Exemplo 2",
    "Exemplo 3",
    "Exemplo 4",
    "Exemplo 5"
];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchSuggestions.innerHTML = '';

    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));

    filteredSuggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', () => {
            searchInput.value = suggestion;
            searchSuggestions.innerHTML = '';
        });
        searchSuggestions.appendChild(li);
    });
});

// Fechar a lista de sugestões quando clicar em qualquer lugar na página
document.addEventListener('click', (event) => {
    if (event.target !== searchInput) {
        searchSuggestions.innerHTML = '';
    }
});
