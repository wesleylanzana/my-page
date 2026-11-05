function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('btnSwitchTheme');
    
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        button.value = 'Tema Claro';
    } else {
        button.value = 'Tema Escuro';
    }
}


document.getElementById('btnSwitchTheme').addEventListener('click', toggleTheme);