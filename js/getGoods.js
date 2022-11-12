const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://willberris-db-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    links.forEach(function (link) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        });
    });

    localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4]));

    console.log(JSON.parse(localStorage.getItem('goods')));

    localStorage.removeItem('goods');
};

getGoods();
