import React, {useRef, useState} from "react";
import "./style.scss";
import {GoBackBtn} from "../../components/go-back-btn";
import {Social} from "../../components/social";
import {Modal} from "../../components/modal";
import {Button} from "../../components/button";
import {PhotoGallery} from "../../components/photogallery";
import {useCreateCallMutation} from "../../services/api/products.api";

const contacts = [
  {name: "+1 (901) 650 - 45 - 50", title: "Call us", id: 1},
  {name: "helpme@boltaeva.pro", title: "Support", id: 2},
  {name: "UAE, Dubai, 54, 560 of.", title: "Address", id: 3},
  {name: "parthers@boltaeva.pro", title: "Partners department", id: 4},
];

interface RequestState {
  name: string;
  number: number | string;
  email: string;
}

export const Contacts = () => {
  const [isActive, setIsActive] = useState(false);
  const [request, setRequest] = useState<RequestState>({
    name: "",
    number: "",
    email: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [createCall] = useCreateCallMutation()
  const buttonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive(true);
    createCall(request)
    setRequest({name: "", number: "", email: ""});
  };

  const inputsHandler = () => {
    if (nameRef.current && numberRef.current && emailRef.current)
      setRequest({
        name: nameRef.current.value,
        number: numberRef.current.value,
        email: emailRef.current.value,
      });
  };

  return (
    <div className='contacts'>
      <GoBackBtn className='contacts__back-btn'/>
      <h1 className='article-title contacts__title'>About Boltaeva</h1>
      <div className='contacts-image__top'/>
      <div className='contacts-table'>
        {contacts.map((contact) => (
          <div key={contact.id} className='table__item'>
            <span className='item__title'>{contact.title}</span>
            <span className='item__name'>{contact.name}</span>
          </div>
        ))}
      </div>
      <div className='contacts-image__top contacts-image__bot'/>
      <div className='contacts__social-media'>
        <p className='social-media__text bigger-text'>
          Each Boltaeva brand product is truly unique - everything is thought
          out to the smallest detail.
        </p>
        <Social className='social-media__links' size='large'/>
      </div>
      <PhotoGallery/>
      <div className='request'>
        <div className='request__column'>
          <h3 className='logo-title column__title'>Boltaeva</h3>
          <h2 className='bigger-text column__subtitle'>Request a call back</h2>
          <form className='request__form' action='contacts' method='post'>
            <div className='form__field'>
              <input
                name='name'
                type='text'
                maxLength={25}
                ref={nameRef}
                value={request.name}
                onChange={inputsHandler}
                autoComplete='false'
                placeholder='Surname, name and patronymic'
              />
              <label htmlFor='name'>Surname, name and patronymic</label>
            </div>
            <div className='form__field'>
              <input
                name='number'
                type='number'
                ref={numberRef}
                value={request.number}
                onChange={inputsHandler}
                autoComplete='false'
                placeholder='Contact number'
              />
              <label htmlFor='number'>Contact number</label>
            </div>
            <div className='form__field'>
              <input
                name='email'
                type='email'
                ref={emailRef}
                value={request.email}
                onChange={inputsHandler}
                autoComplete='false'
                placeholder='email'
              />
              <label htmlFor='e-mail'>Email</label>
            </div>
            <Button
              className='form__btn'
              text='Request call'
              onClick={buttonClick}
              disabled={
                request.name.length < 3 ||
                !request.number ||
                request.email.length < 12
              }
            />
          </form>
        </div>
        <div className='request__column'>
          <img
            src='https://cstor.nn2.ru/forum/data/forum/files/2020-10/250829853-xpf95q4un_k-1-.jpg'
            alt='production'
            className='request__img'
          />
        </div>
      </div>
      <Modal
        active={isActive}
        setActive={setIsActive}
        text='Thank you! We`ll call you as soon as possible'
      />
    </div>
  );
};
