const ripples = document.querySelectorAll('.ripple');

ripples.forEach((button) => {
    button.addEventListener('click', function (e) {
        //where we click on viewport
        const x = e.clientX;
        const y = e.clientY;
        const targetTop = e.target.offsetTop;
        const targetLeft = e.target.offsetLeft;

        const xInside = x - targetTop;
        const yInside = y - targetLeft;

        const cir = document.createElement('span');
        cir.classList.add('circle');
        cir.style.top = yInside + 'px';
        cir.style.left = xInside + 'px';
        this.appendChild(cir);
        setTimeout(() => {
            cir.remove();
        }, 1000);
    });
});
