import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

const store = setupStore();

describe('Form', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );
  });

  test('Checking first and second fields', async () => {
    await userEvent.type(screen.getByLabelText(/Enter title:/i), 'Dmitry');
    await userEvent.type(screen.getByLabelText(/Description:/i), 'Strizhakov');
    expect(screen.getByLabelText(/Enter title:/i)).toHaveValue('Dmitry');
    expect(screen.getByLabelText(/Description:/i)).toHaveValue('Strizhakov');
  });
  test('Set date', async () => {
    await userEvent.type(screen.getByLabelText(/Created at:/i), '2023-03-26');
    expect(screen.getByLabelText(/Created at:/i)).toHaveValue('2023-03-26');
  });
  test('Checking select work', async () => {
    await userEvent.selectOptions(screen.getByLabelText(/Type:/i), 'Watercolor');
    expect(screen.getByText<HTMLOptionElement>(/Watercolor/i).selected).toBe(true);
  });
  test('Upload photo', async () => {
    const file = new File(['Some test file'], 'test.jpg', { type: 'image/jpg' });
    await userEvent.upload(screen.getByLabelText(/File:/i), file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files?.[0]).toStrictEqual(file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files?.item(0)).toStrictEqual(file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files).toHaveLength(1);
  });
  test('Checking price field', async () => {
    await userEvent.type(screen.getByLabelText(/Enter price:/i), '987');
    expect(screen.getByLabelText(/Enter price:/i)).toHaveValue('987');
  });
  test('Checking Availability switch', async () => {
    await userEvent.click(screen.getByTestId('isAvailable'));
    expect(screen.getByTestId('isAvailable')).toBeChecked();
  });
  test('Checking Sale switch work', async () => {
    await userEvent.click(screen.getByTestId('isSale'));
    expect(screen.getByTestId('isSale')).toBeChecked();
  });
  test('Create product card', async () => {
    const file = new File(['Some test file'], 'test.jpg', { type: 'image/jpeg' });
    window.URL.createObjectURL = vi.fn();
    await userEvent.type(screen.getByTestId('title'), 'Title');
    expect(screen.getByTestId('title')).toHaveValue('Title');
    await userEvent.type(screen.getByTestId('text'), 'Some description');
    expect(screen.getByTestId('text')).toHaveValue('Some description');
    await userEvent.type(screen.getByTestId('created'), '2023-01-26');
    expect(screen.getByTestId('created')).toHaveValue('2023-01-26');
    await userEvent.selectOptions(screen.getByTestId('type'), 'Watercolor');
    expect(screen.getByText<HTMLOptionElement>(/Watercolor/i).selected).toBe(true);
    await userEvent.upload(screen.getByTestId('file'), file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files?.[0]).toStrictEqual(file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files?.item(0)).toStrictEqual(file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files).toHaveLength(1);
    await userEvent.type(screen.getByTestId('price'), '678');
    expect(screen.getByTestId('price')).toHaveValue('678');
    await userEvent.click(screen.getByTestId('isAvailable'));
    await userEvent.click(screen.getByTestId('isSale'));
    expect(screen.getByTestId('isAvailable')).toBeChecked();
    expect(screen.getByTestId('isSale')).toBeChecked();
    await userEvent.click(screen.getByRole('button'));
    // Должна появиться новая карточка товара:
    const cards = screen.getAllByTestId('custom-element');
    expect(cards[0]).toHaveTextContent('Some description');
  });
});
