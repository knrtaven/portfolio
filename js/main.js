/** change background header */

function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)


/** mixitup */

let mixerPortfolio = mixitup('.project_container', {
    selectors: {
        target: '.project_card'
    },
    animation: {
        duration: 300
    }
});


/* active project link function */

const linkProj = document.querySelectorAll('.project_item')

function activeProject(){
    linkProj.forEach(i=> i.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkProj.forEach(i=> i.addEventListener('click',activeProject))