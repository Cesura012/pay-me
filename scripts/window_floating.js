const showWindowBtn = document.getElementById('showWindowBtn');
const floatingWindow = document.getElementById('floatingWindow');
const closeWindowBtn = document.getElementById('closeWindowBtn');
const overlay = document.getElementById('overlay');

showWindowBtn.addEventListener('click', () => {
    floatingWindow.style.display = 'block';
    overlay.style.display = 'block';
});

closeWindowBtn.addEventListener('click', () => {
    floatingWindow.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    floatingWindow.style.display = 'none';
    overlay.style.display = 'none';
});
