const history = document.getElementById('history');
function toggleTab(id,e) {
    let idTargetElement =  document.getElementById(id);
    if(idTargetElement.classList.contains('d-none')){    
        let allTabs = document.querySelectorAll('.tab-content');        
        allTabs.forEach(tab => {
            tab.classList.add('d-none');
        });
        idTargetElement.classList.remove('d-none');
    }

    let allTabsBtns = document.querySelectorAll('.tab-btn');
    allTabsBtns.forEach(tabBtn => {
        tabBtn.classList.remove('bg-tab-active');
    });
    e.currentTarget.classList.add('bg-tab-active');
}


