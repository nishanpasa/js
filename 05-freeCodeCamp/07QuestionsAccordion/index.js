contentElements = document.querySelectorAll(`.content`)
function showBtn(x) {  

    contentElements.forEach(contentElement => {        
        if (contentElement.id !== `content${x}`) {
            contentElement.classList.add('d-none');
        }
    });
    
    document.querySelector(`#content${x}`).classList.toggle('d-none');
}


