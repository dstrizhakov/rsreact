import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { BrowserRouter } from 'react-router-dom';

describe('FormPage', () => {
  test('Checking first and second fields', async () => {
    render(<Form />, { wrapper: BrowserRouter });
    await userEvent.type(screen.getByLabelText(/Item title:/i), 'Dmitry');
    await userEvent.type(screen.getByLabelText(/Item description:/i), 'Strizhakov');
    expect(screen.getByLabelText(/Item title:/i)).toHaveValue('Dmitry');
    expect(screen.getByLabelText(/Item description:/i)).toHaveValue('Strizhakov');
  });
  test('Set date', async () => {
    render(<Form />, { wrapper: BrowserRouter });
    await userEvent.type(screen.getByLabelText(/date/i), '2023-03-26');
    expect(screen.getByLabelText(/date/i)).toHaveValue('2023-03-26');
  });
  test('Checking select work', async () => {
    render(<Form />, { wrapper: BrowserRouter });
    await userEvent.selectOptions(screen.getByLabelText(/Type:/i), 'Watercolor');
    expect(screen.getByText<HTMLOptionElement>(/Watercolor/i).selected).toBe(true);
  });
  test('Upload photo', async () => {
    const file = new File(['Some test file'], 'test.jpg', { type: 'image/jpg' });
    render(<Form />, { wrapper: BrowserRouter });
    await userEvent.upload(screen.getByLabelText(/File:/i), file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files?.[0]).toStrictEqual(file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files?.item(0)).toStrictEqual(file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files).toHaveLength(1);
  });
  test('Checking price field', async () => {
    render(<Form />, { wrapper: BrowserRouter });
    await userEvent.type(screen.getByLabelText(/Item price:/i), '987');
    expect(screen.getByLabelText(/Item price:/i)).toHaveValue('987');
  });
  test('Checking Availability switch work', async () => {
    render(<Form />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByTestId('availability'));
    expect(screen.getByTestId('availability')).toBeChecked();
  });
  test('Checking Sale switch work', async () => {
    render(<Form />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByTestId('sale'));
    expect(screen.getByTestId('sale')).toBeChecked();
  });

  test('Create product card', async () => {
    const file = new File(['Some test file'], 'test.jpg', { type: 'image/jpg' });
    window.URL.createObjectURL = vi.fn();
    render(<Form />, { wrapper: BrowserRouter });
    await userEvent.type(screen.getByLabelText(/Item title:/i), 'Title');
    expect(screen.getByLabelText(/Item title:/i)).toHaveValue('Title');
    await userEvent.type(screen.getByLabelText(/Item description:/i), 'Some description');
    expect(screen.getByLabelText(/Item description:/i)).toHaveValue('Some description');
    await userEvent.type(screen.getByLabelText(/date/i), '2023-03-26');
    expect(screen.getByLabelText(/date/i)).toHaveValue('2023-03-26');
    await userEvent.selectOptions(screen.getByLabelText(/Type:/i), 'Watercolor');
    expect(screen.getByText<HTMLOptionElement>(/Watercolor/i).selected).toBe(true);
    await userEvent.upload(screen.getByLabelText(/File:/i), file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files?.[0]).toStrictEqual(file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files?.item(0)).toStrictEqual(file);
    expect(screen.getByLabelText<HTMLInputElement>(/File:/i).files).toHaveLength(1);
    await userEvent.type(screen.getByLabelText(/Item price:/i), '678');
    expect(screen.getByLabelText(/Item price:/i)).toHaveValue('678');
    await userEvent.click(screen.getByTestId('availability'));
    await userEvent.click(screen.getByTestId('sale'));
    expect(screen.getByTestId('availability')).toBeChecked();
    expect(screen.getByTestId('sale')).toBeChecked();
    await userEvent.click(screen.getByRole('button'));

    // ?почему отсутствует карточка после сабмита
    // const cards = screen.getAllByTestId('custom-element');
    // console.log(cards);
    // expect(cards[0]).toHaveTextContent('Some description');
  });
});
