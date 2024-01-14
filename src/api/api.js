import axios from 'axios';
import { Notify } from 'notiflix';

const KEY = '992758a4802a699e8df27d4d6efc34fb';
const URL = 'https://api.themoviedb.org/3';

export const styleNotify = {
  position: 'top-right',
  timeout: 2000,
  width: '300px',
  fontSize: '20px',
};

export async function fetchMovies(endPoint) {
  const url = `${URL}${endPoint}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchSearchMovies(endPoint, query) {
  const url = `${URL}${endPoint}?api_key=${KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieDetails(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieCast(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}/credits?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieReviews(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}/reviews?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export function fetchError() {
  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or make another choice!',
    styleNotify
  );
}
