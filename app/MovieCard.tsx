"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/movie');
      setMovieData(response.data.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Movie List</h2>
      <div className="row">
        {movieData.map((movie, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card className="h-100 bg-dark text-light">
              <Card.Img variant="top" src={movie.foto} alt="Movie image" style={{ height: '20rem', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between mb-2 text-warning">
                  <div>
                    <i className="bi bi-star-fill"></i> {movie.rating}
                  </div>
                  <div>
                    <i className="bi bi-clock"></i> {movie.durasi} min
                  </div>
                </div>
                <Card.Title className="mb-2">{movie.judul}</Card.Title>
                <Card.Text className="flex-grow-1">{movie.deskripsi}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="success" className="me-2">Trailer</Button>
                  <Button variant="danger">Tonton</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
