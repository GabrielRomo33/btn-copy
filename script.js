const button = document.querySelector('.ctrlV');

const input = document.querySelector('.clipboard');

button.addEventListener('click', function() {
    document.execCommand('selectAll');
    document.execCommand('copy');
});


