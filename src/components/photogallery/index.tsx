import React from 'react';
import './style.scss'
const gallery = [
  {
    url: "https://avatars.mds.yandex.net/i?id=2d6ed94fdd03e97ef5385611d3db8195-5194713-images-thumbs&n=13&exp=1",
    id: 1,
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=f03cf47085acbc2146d1cc8a9f2fa705720fc08a-7011592-images-thumbs&n=13&exp=1",
    id: 2,
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=2d6ed94fdd03e97ef5385611d3db8195-5194713-images-thumbs&n=13&exp=1",
    id: 3,
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=f03cf47085acbc2146d1cc8a9f2fa705720fc08a-7011592-images-thumbs&n=13&exp=1",
    id: 4,
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=2a00000179e8b4a2e9874c3c74720cebcb11-4012839-images-thumbs&n=13&exp=1",
    id: 5,
  },
  {
    url: "https://www.cosasdearquitectos.com/wp-content/uploads/Originales-tarjetas-de-visita-para-arquitectos-09.jpg",
    id: 6,
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=2a00000179e8b4a2e9874c3c74720cebcb11-4012839-images-thumbs&n=13&exp=1",
    id: 7,
  },
  {
    url: "https://www.cosasdearquitectos.com/wp-content/uploads/Originales-tarjetas-de-visita-para-arquitectos-09.jpg",
    id: 8,
  },
];


export const PhotoGallery = ():JSX.Element => {

  return (
    <div className='photo-gallery'>
      {gallery.map((photo) => (
        <img
          key={photo.id}
          className='photo-gallery__item'
          src={photo.url}
          alt='product'
        />
      ))}
    </div>
  );
}