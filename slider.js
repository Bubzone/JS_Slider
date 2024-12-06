document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelector('.photos')
    const rightArrow = document.querySelector('.arrow.right');
    const leftArrow = document.querySelector('.arrow.left');
    let position = 0;

    leftArrow.addEventListener('click', function() {
        position += 100;
        if (position>0) {   
            photos.style.transform = `translateX(${position}%)`;
            console.log(`${position}`)
            position -= 100;
            photos.style.transform = `translateX(${position}%)`;
            console.log(`${position}`)
        } else {
            photos.style.transform = `translateX(${position}%)`;
        }
        
    });

    rightArrow.addEventListener('click', function() {
        position -= 100;
        photos.style.transform = `translateX(${position}%)`;
    });
});