fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => featuredBooks(res));

    let DivFeaturedBooks = document.getElementById('featured-books');
    function  featuredBooks(res)
    {
      for (let index = 45; index >= 42; index--) {

        console.log(res);
        DivFeaturedBooks.innerHTML += `
        <div class="col-lg-3 col-6-md col-sm-12">
            <img class="w-75 shadow p-4 bg-color-2" src="${res[index].simple_thumb}"/>
            <h3 class="card-title p-3">${res[index].title}</h3>
            <p class="card-author fs-6">${res[index].author}</p>
        </div>

            `
        
        }
    };

    fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(res => res.json())
    .then(res => bestSellingBook(res));

    let DivBestSellingBook = document.getElementById('best-selling-book');
    function bestSellingBook(res)
    {
        for  (let index = 0; index < 2; index++) {

        console.log(res);
        DivBestSellingBook.innerHTML +=`
        <div>
            <div>
             <img class="w-75 shadow p-4 bg-color-2" src={${res[index].simple_thumb}}/>
            </div>
        
        </div>
        `

        }
    };

    
