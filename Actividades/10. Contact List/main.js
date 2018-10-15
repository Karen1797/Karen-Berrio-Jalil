
let e = fetch('https://randomuser.me/api/?results=10');
let sisas = e.then(function (resultados) {
	return resultados.json();
}).then(here => {
    const authors = here.results;
    const miSection = document.querySelector('section');

    authors.forEach((author) => {
        const figCapt = document.createElement('figcaption');
        const img = document.createElement('img');
        const fig = document.createElement('figure');
        const article = document.createElement('article');
        const article2 = document.createElement('article');
        const image = img.src = author.picture.large;
        const completeName = figCapt.innerHTML = author.name.first + 
                            ' ' + author.name.last;
        const email = author.email;
        
        fig.append(img);
        fig.append(figCapt);
        article.append(fig);
        miSection.append(article);
        var i=0;
        fig.addEventListener('click', ()=> {
            
            switch(i){
                case 0:
                    fig.addEventListener('click', ()=> {
                     console.log("le di click" + email);
                    });
                    var articleOriginal = document.getElementById(email);
                    articleOriginal.remove;
                    const aside = document.querySelector('aside');
                    var articleFavorite = document.getElementById(email);
                    fig.append(img);
                    fig.append(figCapt);
                    articleFavorite.append(fig);
                    aside.append(articleFavorite);
                    i=1;
                break;
                case 1:
                    fig.addEventListener('click', ()=> {
                       console.log("le di click" + email);
                    });
                    articleFavorite = document.getElementById(email);
                    articleFavorite.remove;
                    const section = document.querySelector('section');
                    var articleOriginal = document.getElementById(email);                
                    fig.append(img);
                    fig.append(figCapt);
                    articleOriginal.append(fig);
                    section.append(articleOriginal);
                    i=0;
                break;
            }
        })
        article.setAttribute('id', author.email);
    });
});


















