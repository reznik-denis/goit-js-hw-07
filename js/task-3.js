const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galerysEl = ({url, alt}) => {
    return `
    <li>
        <img class="galery-margin" src="${url}" alt="${alt}" width=300 height=200>
    </li>`;
};

const makeImagesGaleryMorkup = images.map(galerysEl).join('');

const idGaleryEl = document.querySelector('#gallery');
idGaleryEl.insertAdjacentHTML("beforeend", makeImagesGaleryMorkup);

//код нижче додає тільки перший елемент масиву, як додати всі елементи так і не розібрався.
// const galerysEl = ({ url, alt }) => {
//     const listEl = document.createElement('li');
//     const imgEl = document.createElement('img');
//     listEl.appendChild(imgEl);
//     imgEl.src = url;
//     imgEl.alt = alt;
//     imgEl.width = 300;
//     imgEl.height = 200;
//     return listEl; 
// };

// const makeImagesGaleryMorkup = images.map(galerysEl);

// const idGaleryEl = document.querySelector('#gallery');
// idGaleryEl.insertAdjacentElement("beforeend", ...makeImagesGaleryMorkup);



