
document.querySelectorAll('ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, 
                behavior: 'smooth'
            });
        }
    });
});


document.getElementById('seeMoreButton').addEventListener('click', function () {
    const targetSection = document.getElementById('characters');

    window.scrollTo({
        top: targetSection.offsetTop - 50, 
        behavior: 'smooth'
    });
});


let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.photo-container .photo');


function showPhoto(index) {
    photos.forEach((photo, i) => {
        photo.style.transform = `translateX(${(i - index) * 100}%)`;  
    });
}


function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;  
    showPhoto(currentPhotoIndex);
}


function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;  
    showPhoto(currentPhotoIndex);
}
