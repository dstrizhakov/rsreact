import { rest } from 'msw';

const UNSPLASH_ACCESS_KEY = 'GQpboVLxSu8scxvDv9g3SOJtb4cEg3q9t5ekYwiivas';
const orientation = 'landscape';
const limit = 12;
const query = 'test';
const url = `https://api.unsplash.com/photos/random?orientation=${orientation}&query=${query}&count=${limit}&client_id=${UNSPLASH_ACCESS_KEY}`;

export const handlers = [
  // Handles a GET /user request
  rest.get('https://api.unsplash.com/photos/', (req, res, ctx) => {
    const isCorrect = sessionStorage.getItem('is-correct');
    if (isCorrect) {
      return res(ctx.status(200), ctx.json({}));
    } else {
      return res(ctx.status(403), ctx.json({ errorMessage: 'error 403' }));
    }
  }),
];
