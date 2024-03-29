import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FullPizza: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://65e9cfcfc9bf92ae3d3a4e2e.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('sorry pitsa netu brat chut chut ruski govoru');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container">
        <h1>fetching...</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} tenge</h4>
    </div>
  );
};

export default FullPizza;
