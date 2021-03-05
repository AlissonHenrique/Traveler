/* eslint-disable no-return-assign */
import React, { useState, FormEvent, ChangeEvent } from 'react';

import { FiAlertCircle, FiArrowLeft } from 'react-icons/fi';

import MenuBar from '../../components/MenuBar';
import { Back } from '../ProfileCity/styles';

import { Container, Header, Content, BoxWhite } from './styles';

function AddProfileCity() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [namePlace, setNamePlace] = useState('');
  const [descriptionPlace, setDescriptionPlace] = useState('');
  const [categorie, setCategorie] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });
    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmint(e: FormEvent) {
    e.preventDefault();

    const data = new FormData();

    data.append('name', name);
    // images.forEach(image => {
    //   data.append('images', image);
    // });

    // await api.post('orphanages', data);
  }
  return (
    <Container>
      <MenuBar />
      <div className="content">
        <Header>
          <Back to="/list">
            <FiArrowLeft color="#A0ACB3" size={20} />
          </Back>
          <p>Adicionar um perfil</p>
          <div className="content-btn">
            <div>01</div>
            <div>-</div>
            <div>02</div>
          </div>
        </Header>

        <Content>
          <BoxWhite>
            <div className="header">
              <div className="box-number">
                <p>01</p>
              </div>
              <h1>Adicione uma cidade</h1>
            </div>

            <div className="content">
              <h2>Dados da cidade</h2>
              <div className="risco" />

              <form onSubmit={handleSubmint}>
                <div className="input-block">
                  <label htmlFor="name">Nome da cidade</label>
                  <input
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="images">Fotos</label>

                  <div className="images-container">
                    {previewImages.map(image => {
                      return <img key={image} src={image} alt={name} />;
                    })}
                    <label htmlFor="image[]" className="new-image">
                      + Adicionar uma foto
                    </label>
                    <input
                      multiple
                      type="file"
                      id="image[]"
                      onChange={handleSelectImages}
                    />
                  </div>
                </div>

                <div className="input-block">
                  <label htmlFor="description">Descrição da cidade</label>
                  <textarea
                    id="name"
                    maxLength={300}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>

                <div className="content-button">
                  <div className="content-icon">
                    <FiAlertCircle size={32} color="#F25D27" />
                    <p>
                      Preencha todos os
                      <br />
                      dados com cuidado.
                    </p>
                  </div>
                  <button type="button">Próximo</button>
                </div>

                <button type="submit">Enviar</button>
              </form>
            </div>

            <div className="header ">
              <div className="box-number">
                <p>02</p>
              </div>
              <h1>Adicione um local</h1>
            </div>
            <div className="content">
              <h2>Dados Básicos</h2>
              <div className="risco" />
              <form>
                <div className="input-block">
                  <label htmlFor="name">Nome da cidade</label>
                  <input
                    id="name"
                    value={namePlace}
                    onChange={e => setNamePlace(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="images">Foto da cidade </label>

                  <div className="images-container">
                    {previewImages.map(image => {
                      return <img key={image} src={image} alt={name} />;
                    })}
                    <label htmlFor="image[]" className="new-image">
                      + Adicionar uma foto
                    </label>
                    <input
                      multiple
                      type="file"
                      id="image[]"
                      onChange={handleSelectImages}
                    />
                  </div>
                </div>
                <div className="input-block">
                  <label htmlFor="description">Descrição do local</label>
                  <textarea
                    id="name"
                    maxLength={300}
                    value={descriptionPlace}
                    onChange={e => setDescriptionPlace(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </BoxWhite>
        </Content>
      </div>
    </Container>
  );
}

export default AddProfileCity;
