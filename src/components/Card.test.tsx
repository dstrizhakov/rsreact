import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Card from './Card';

const data = {
  id: 1,
  image: 'product01.jpg',
  title: 'Test title',
  text: 'Lorem ipsum dolor',
  price: 12345,
  likes: 987,
};

describe('Card', () => {
  it('should have headline', () => {
    render(
      <Card
        key={data.id}
        id={data.id}
        image={data.image}
        title={data.title}
        text={data.text}
        price={data.price}
        likes={data.likes}
      />
    );
    expect(screen.getByText(/Test title/)).toBeInTheDocument();
  });
  it('should have text', () => {
    render(
      <Card
        key={data.id}
        id={data.id}
        image={data.image}
        title={data.title}
        text={data.text}
        price={data.price}
        likes={data.likes}
      />
    );
    expect(screen.getByText(/Lorem ipsum dolor/)).toBeInTheDocument();
  });
  it('should have price', () => {
    render(
      <Card
        key={data.id}
        id={data.id}
        image={data.image}
        title={data.title}
        text={data.text}
        price={data.price}
        likes={data.likes}
      />
    );
    expect(screen.getByText(/12345/)).toBeInTheDocument();
  });
  it('should have likes', () => {
    render(
      <Card
        key={data.id}
        id={data.id}
        image={data.image}
        title={data.title}
        text={data.text}
        price={data.price}
        likes={data.likes}
      />
    );
    expect(screen.getByText(/987/)).toBeInTheDocument();
  });
});
