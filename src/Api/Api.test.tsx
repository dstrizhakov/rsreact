import { vi } from 'vitest';
import { getUnsplashPhotos, getUnsplashPhoto } from './Api';

describe('API functions', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('getUnsplashPhotos returns an array', async () => {
    const data = [{ id: '12au6t', title: 'Test title', price: 10 }];

    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => data,
      })
    );
    const items = await getUnsplashPhotos('test query');
    expect(Array.isArray(items)).toBe(true);
    expect(items[0]).toHaveProperty('id');
    expect(items[0]).toHaveProperty('title');
    expect(items[0]).toHaveProperty('price');
  });

  test('getUnsplashPhoto returns a object', async () => {
    const mockItem = { id: '124', title: 'Test title', price: 34 };
    const mockResponseProduct = Promise.resolve(mockItem);
    const mockFetchPromiseItem = Promise.resolve({
      json: () => mockResponseProduct,
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchPromiseItem);

    const product = await getUnsplashPhoto('124');
    expect(typeof product).toBe('object');
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('price');
  });
});
