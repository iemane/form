const form = document.getElementById('form');
const preview = document.getElementById('preview');
const resFullName = document.getElementById('res-fullName');
const resMessage = document.getElementById('res-message');
const resImage = document.getElementById('res-image');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const message = document.getElementById('message').value;
    const imageFile = document.getElementById('image').files[0];

    resFullName.textContent = fullName;
    resMessage.textContent = message;

    resImage.innerHTML = '';
    if (imageFile) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(imageFile);
        img.alt = 'Uploaded Image';
        resImage.appendChild(img);
    } else {
        resImage.innerHTML = '<p>No image attached.</p>';
    }

    preview.classList.remove('hidden');
});
