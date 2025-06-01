let products = {
  data: [
    {
      productName: 'White T-Shirt',
      category: 'Topwear',
      price: '30',
      Image:
        'https://static2.goldengoose.com/public/Style/ECOMM/GMP01220.P000638-10363.jpg',
    },
    {
      productName: 'short skirt',
      category: 'Bottomwear',
      price: '49',
      Image: 'https://i.ebayimg.com/images/g/FcgAAOSwn9VfXsPa/s-l1600.webp',
    },
    {
      productName: 'smart watch',
      category: 'Watch',
      price: '99',
      Image:
        'https://m.media-amazon.com/images/I/61mRz53vLQL._AC_UF894,1000_QL80_.jpg',
    },
    {
      productName: 'knitted top',
      category: 'Topwear',
      price: '20',
      Image:
        'https://b2773916.smushcdn.com/2773916/wp-content/uploads/2022/05/Summer-Top-Knitting-Pattern-768x1152.png?lossy=2&strip=1&webp=1',
    },
    {
      productName: 'jacket',
      category: 'Jacket',
      price: '130',
      Image: 'https://m.media-amazon.com/images/I/71E7c09iTdL._AC_SX425_.jpg',
    },
    {
      productName: 'trouser',
      category: 'Bottomwear',
      price: '66',
      Image: 'https://m.media-amazon.com/images/I/51NUGszUjUL._AC_SY445_.jpg',
    },
    {
      productName: 'another jacket',
      category: 'Jacket',
      price: '156',
      Image:
        'https://www.stussy.com/cdn/shop/files/115716_BLAC_1.jpg?v=1741178366',
    },
    {
      productName: 'another trouser',
      category: 'Bottomwear',
      price: '45',
      Image:
        'https://godwincharli.com/cdn/shop/files/comocharcheck_800x.jpg?v=1741143230',
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement('div');
  card.classList.add('card', i.category, 'hide');
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');

  let image = document.createElement('img');
  image.setAttribute('src', i.Image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement('div');
  container.classList.add('container');
  let name = document.createElement('h5');
  name.classList.add('product-name');
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement('h6');
  price.innerText = '$' + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById('products').appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll('.button-value');
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  let elements = document.querySelectorAll('.card');
  elements.forEach((element) => {
    if (value == 'all') {
      element.classList.remove('hide');
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove('hide');
      } else {
        element.classList.add('hide');
      }
    }
  });
}

document.getElementById('search').addEventListener('click', () => {
  let searchInput = document.getElementById('search-input').value;
  let elements = document.querySelectorAll('.product-name');
  let cards = document.querySelectorAll('.card');

  elements.forEach((element, index) => {
    if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
      cards[index].classList.remove('hide');
    } else {
      cards[index].classList.add('hide');
    }
  });
});

window.onload = () => {
  filterProduct('all');
};
