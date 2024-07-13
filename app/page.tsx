"use client";
import React, { useEffect, useState } from 'react';
import { Button, Card, CardText, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import MovieCard from './MovieCard';
import MovieForms from './MovieForms';
import MovieSlide from './MovieSlide';

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className='container'>
      <Card className="text-center">
        <Card.Header className ='large-header'>HOME MOVIES LIST</Card.Header>
        <Card.Body>
          <Card.Title className='xxi-style'>FAQIH MATUZ SAHRO</Card.Title>
          <Card.Title className='xxi-style'>22570023</Card.Title>
        </Card.Body>
      </Card>
      <div className='button-container'>
        <Button as="a" variant="primary">
            Button as link
          </Button>
          <Button as="a" variant="success">
            Button as link
          </Button>
      </div>



      <div className='movie-form'>
        <MovieForms/>

      </div>

      <div className='movie-card'>
        <MovieCard/>
        <MovieSlide/>
      </div>
    </div>
  );
}
