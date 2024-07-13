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
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      setMovieData(movieData.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Movie List</h2>
      <div className="row">
        {movieData.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <Card className="h-100 bg-dark text-light">
              <Card.Img
                variant="top"
                src={movie.foto}
                alt="Movie image"
                style={{ height: '20rem', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between mb-2 text-warning">
                  <div>
                    <i className="bi bi-star-fill"></i> {movie.rating}
                  </div>
                </div>
                <Card.Title className="mb-2">{movie.judul}</Card.Title>
                <Card.Text className="flex-grow-5">{movie.deskripsi}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="success" className="me-2">
                    Trailer
                  </Button>
                  <Button variant="danger">
                    Tonton
                  </Button>
                </div>
                <Button
                  variant="secondary"
                  className="mt-2"
                  onClick={() => handleDelete(movie.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
