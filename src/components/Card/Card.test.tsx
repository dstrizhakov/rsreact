import { fireEvent, render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Card from './Card';

const data = {
  id: '1',
  image: 'product01.jpg',
  title: 'Test title',
  text: 'Lorem ipsum dolor',
  price: '12345',
  likes: 987,
  isAvailable: true,
  isSale: true,
};

describe('Card', () => {
  it('should have all content', () => {
    render(
      <Card
        key={data.id}
        id={data.id}
        image={data.image}
        title={data.title}
        text={data.text}
        price={data.price}
        likes={data.likes}
        isAvailable={data.isAvailable}
        isSale={data.isSale}
      />
    );
    expect(screen.getByTestId('card-title')).toHaveTextContent(/Test title/);
    expect(screen.getByTestId('card-text')).toHaveTextContent(/Lorem ipsum dolor/);
    expect(screen.getByTestId('card-price')).toHaveTextContent(/12345/);
    expect(screen.getByTestId('card-like')).toHaveTextContent(/987/);
  });

  it('should have not avail text', () => {
    render(
      <Card
        key={data.id}
        id={data.id}
        image={data.image}
        title={data.title}
        text={data.text}
        price={data.price}
        likes={data.likes}
        isAvailable={false}
        isSale={data.isSale}
      />
    );
    expect(screen.getByTestId('card-price-na')).toHaveTextContent(/Not Avail/);
  });

  it('likes should inrement by click', () => {
    render(
      <Card
        key={data.id}
        id={data.id}
        image={data.image}
        title={data.title}
        text={data.text}
        price={data.price}
        likes={data.likes}
        isAvailable={data.isAvailable}
        isSale={data.isSale}
      />
    );
    const likeButton = screen.getByTestId('card-like') as HTMLSpanElement;
    expect(likeButton.innerHTML).toBe(`<img src="/src/assets/heart-icon.svg" alt="like">987`);
    fireEvent.click(likeButton);
    expect(likeButton.innerHTML).toBe(`<img src="/src/assets/heart-icon.svg" alt="like">988`);
  });
});
