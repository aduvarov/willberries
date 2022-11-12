const search = function () {
    const cartBtn = document.querySelector('.button-cart');
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > button');

    searchBtn.addEventListener('click', (event) => {
        console.log(input.value);
    });
};

search();
