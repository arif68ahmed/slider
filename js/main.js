var btn = document.getElementsByClassName('dots');
var allslides = document.getElementById('slider');
btn[0].onclick = function () {
    allslides.style.transform = 'translateX(0px)';
    allslides.style.transition = '1s';

    for (var i = 0; i < 5; i++) {
        btn[i].classList.remove('active');
    }
    this.classList.add('active');
}
btn[1].onclick = function () {
    allslides.style.transform = 'translateX(-800px)';
    allslides.style.transition = '1s';

    for (var i = 0; i < 5; i++) {
        btn[i].classList.remove('active');
    }
    this.classList.add('active');
}
btn[2].onclick = function () {
    allslides.style.transform = 'translateX(-1600px)';
    allslides.style.transition = '1s';


    for (var i = 0; i < 5; i++) {
        btn[i].classList.remove('active');
    }
    this.classList.add('active');
}
btn[3].onclick = function () {
    allslides.style.transform = 'translateX(-2400px)';
    allslides.style.transition = '1s';


    for (var i = 0; i < 5; i++) {
        btn[i].classList.remove('active');
    }
    this.classList.add('active');
}
btn[4].onclick = function () {
    allslides.style.transform = 'translateX(-3200px)';
    allslides.style.transition = '1s';


    for (var i = 0; i < 5; i++) {
        btn[i].classList.remove('active');
    }
    this.classList.add('active');
}
