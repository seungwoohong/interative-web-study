(function () {
    const $house = document.querySelector('.house');
    const $progressbar = document.querySelector('.progress-bar');
    const $stage =  document.querySelector('.stage');
    const mousePos = { x: 0, y: 0 };

    let maxScrollValue = null;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    function onScroll() {
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        $house.style.transform = 'translateZ(' + zMove + 'vw)';
        $progressbar.style.width = scrollPer * 100 + '%';
    }

    function onMouseMove(e) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

        $stage.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mousemove', onMouseMove);

    $stage.addEventListener('click', function() {
        const options = {
            xPos: e.clientX / window.innerWidth * 100
        };
        
        new Character(options);
    })

    resizeHandler();
})();
