import { render, screen } from '@testing-library/react';
import Card from './Card';

const data = {
  id: 1,
  image: 'product01.jpg',
  title: 'Test title',
  text: 'Test text',
  price: 999,
  likes: 99,
};

describe('Card component', () => {
  it('Card renders', () => {
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
  });
});
