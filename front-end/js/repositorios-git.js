const d = document;

/*
<div class="card-project">
    <div class="card-press">
        <i class="fa-solid fa-bullseye"></i>
    </div>
        <img src="/assets/img/post-1.png" alt="">
    <div class="container-hover">
        <header class="header-card">
            <h4>Titulo del proyecto</h4>
        </header>
        <section class="description-project">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
            </p>
        </section>   
        <footer class="footer-card">
            <a href="#"><i class="fa-solid fa-link"></i></a>
            <a href="#"><i class="fa-brands fa-github-alt"></i></a>
        </footer>
    </div>
*/


const renderProjects = (rep) => {
    let $template = '';

    $template = `
        <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
                <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
            <header class="header-card">
                <h4>${rep.name}</h4>
            </header>
            <section class="description-project">
                <p>
                    ${rep.description}
                </p>
            </section>   
            <footer class="footer-card">
                <a href="${rep.repo}" target="_blank" rel="noopener"><i class="fa-brands fa-github-alt"></i></a>
            </footer>
        </div>
    `;

    return $template;
} 

export const getDataRepo = (data, name) => {
    
    const $containerProjects = d.querySelector(name);

    data.forEach( project => {
        $containerProjects.innerHTML += renderProjects(project);
    });

    // console.log($fragment);

    // $containerProjects.innerHTML = $fragment;
};

/*

<!-- <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
            <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
               <header class="header-card">
                   <h4>Titulo del proyecto</h4>
                </header>
                <div class="description-project">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
                    </p>
                </div>   
                <footer class="footer-card">
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                    <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                </footer>
            </div>
        </div>  
        <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
            <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
               <header class="header-card">
                   <h4>Titulo del proyecto</h4>
                </header>
                <div class="description-project">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
                    </p>
                </div>   
                <footer class="footer-card">
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                    <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                </footer>
            </div>
        </div>
        <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
            <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
               <header class="header-card">
                   <h4>Titulo del proyecto</h4>
                </header>
                <div class="description-project">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
                    </p>
                </div>   
                <footer class="footer-card">
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                    <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                </footer>
            </div>
        </div>
        <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
            <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
               <header class="header-card">
                   <h4>Titulo del proyecto</h4>
                </header>
                <div class="description-project">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
                    </p>
                </div>   
                <footer class="footer-card">
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                    <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                </footer>
            </div>
        </div>
        <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
            <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
               <header class="header-card">
                   <h4>Titulo del proyecto</h4>
                </header>
                <div class="description-project">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
                    </p>
                </div>   
                <footer class="footer-card">
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                    <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                </footer>
            </div>
        </div>
        <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
            <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
               <header class="header-card">
                   <h4>Titulo del proyecto</h4>
                </header>
                <div class="description-project">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
                    </p>
                </div>   
                <footer class="footer-card">
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                    <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                </footer>
            </div>
        </div>
        <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
            <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
               <header class="header-card">
                   <h4>Titulo del proyecto</h4>
                </header>
                <div class="description-project">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
                    </p>
                </div>   
                <footer class="footer-card">
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                    <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                </footer>
            </div>
        </div>
        <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
            <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
               <header class="header-card">
                   <h4>Titulo del proyecto</h4>
                </header>
                <div class="description-project">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
                    </p>
                </div>   
                <footer class="footer-card">
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                    <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                </footer>
            </div>
        </div>
        <div class="card-project">
            <div class="card-press">
                <i class="fa-solid fa-bullseye"></i>
            </div>
            <img src="/assets/img/post-1.png" alt="">
            <div class="container-hover">
               <header class="header-card">
                   <h4>Titulo del proyecto</h4>
                </header>
                <div class="description-project">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, alias?
                    </p>
                </div>   
                <footer class="footer-card">
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                    <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                </footer>
            </div>
        </div> -->
        
*/