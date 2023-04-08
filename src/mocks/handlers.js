import { rest } from 'msw';

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
