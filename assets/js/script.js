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
      console.log(res);
      DivBestSellingBook.innerHTML +=`
      <div class="d-flex justify-content-center align-content-center">
          <div class="col-lg-4 col-md-12 col-sm-12">
             <img class="w-75 shadow p-4 bg-color-2" src="${res.simple_thumb}"/>
          </div>
          <div class=""col-lg-4 col-md-12 col-sm-12"">
            <h2 class="fs-1 pb-5 mb-4">Best Selling Book</h2>
            <p class="card-author pb-2"> By ${res.authors[0].name}</p>
            <h2 class="mb-4">${res.title}</h2>
            <div class ="w-50">
              <p class="card-author class=">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur perspiciatis fugiat, totam eos praesentium eveniet quae placeat minus dicta ipsum harum amet aliquam dignissimos cupiditate laboriosam, dolorum odit.</p>
            </div>
            <p class="view_more fs-6 fw-bolder text-start py-5">Shop It Now <i class="fa-solid fa-arrow-right"></i></p>
          </div>
      </div>
      `
    };

    fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => popularBooks(res));

    let DivPopulardBooks = document.getElementById('popular-books');
    function  popularBooks(res)
    {
      for (let index = 0; index <8; index++ ) {

        console.log(res);
        DivPopulardBooks.innerHTML += `
        <div class="col-lg-3 col-6-md col-sm-12 ">
            <img class="w-75 shadow p-4 bg-color-2 " src="${res[index].simple_thumb}"/>
            <h3 class="card-title p-3">${res[index].title}</h3>
            <p class="card-author fs-6">${res[index].author}</p>
        </div>

            `
        
        }
    };

    
