
const d = document;

export function buttonMenu(btn, nav, navItem){

    d.addEventListener('click', e => {
        if(e.target.matches(`${btn} *`) || e.target.matches(navItem)){
           const $nav = document.querySelector(nav);
           const $btn = d.querySelector(btn);

           $nav.classList.toggle('is-active');
           $btn.classList.toggle('is-active');
        }
    });
}