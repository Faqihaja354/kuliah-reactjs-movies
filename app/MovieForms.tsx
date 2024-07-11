"use client";

import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieForms = () => {
  // State for form inputs
  const [judul, setJudul] = useState('');
  const [sutradara, setSutradara] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [rating, setRating] = useState('');
  const [durasi, setDurasi] = useState('');

  const fileInputRef = useRef(null);

  // Handle form submission
  const simpanData = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('sutradara', sutradara);
    formData.append('deskripsi', deskripsi);
    formData.append('rating', rating);
    formData.append('durasi', durasi);

    if (fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files[0]) {
      formData.append('image', fileInputRef.current.files[0]);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/movies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Tambah Film</h2>
      <Form onSubmit={simpanData} className="bg-dark text-light p-4 rounded">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Judul Film</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="bg-light text-dark"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Sutradara</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Sutradara"
              value={sutradara}
              onChange={(e) => setSutradara(e.target.value)}
              className="bg-light text-dark"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Deskripsi</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className="bg-light text-dark"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Durasi (min)</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Durasi"
              value={durasi}
              onChange={(e) => setDurasi(e.target.value)}
              className="bg-light text-dark"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Gambar Cover</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="file"
              ref={fileInputRef}
              className="bg-light text-dark"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Rating</Form.Label>
          <Col sm={10}>
            <div className="star-rating">
              {Array.from({ length: 5 }, (_, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    id={`${5 - index}-stars`}
                    name="rating"
                    value={`${5 - index}`}
                    onClick={(e) => setRating(`${5 - index}`)}
                    className="d-none"
                  />
                  <label htmlFor={`${5 - index}-stars`}>&#9733;</label>
                </React.Fragment>
              ))}
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" variant="primary">
              Simpan Data
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default MovieForms;
