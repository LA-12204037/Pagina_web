const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('btn-click');

        if (navigator.vibrate) {
            navigator.vibrate(40);
        }

        setTimeout(() => {
            btn.classList.remove('btn-click');
        }, 200);
    });
});
