openModal = document.querySelector('#openModal');
closeModal = document.querySelector('#closeModal');

openModal.addEventListener('click', () => {
    modalElement.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modalElement.style.display = 'none';
});


 modalElement.addEventListener('click', (event) => {
        console.log(event.target.id);
        console.log(typeof (event.target.id));

        if (event.target.id !== 'imgElement') {
            document.querySelector('#modalElement').style.display = 'none';
        }
    })