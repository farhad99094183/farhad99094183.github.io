function showPhone(event) {
    event.preventDefault();
    var display = document.getElementById('phoneDisplay');
    display.innerHTML = '📞 09211463013';
    display.style.display = 'block';
}
document.addEventListener('click', function(event) {
    var display = document.getElementById('phoneDisplay');
    var button = document.querySelector('.btn-primary');
    
    // اگه کلیک روی دکمه یا خود شماره نباشه، شماره رو پنهان کن
    if (display.style.display === 'block') {
        if (!button.contains(event.target) && !display.contains(event.target)) {
            display.style.display = 'none';
        }
    }
});
