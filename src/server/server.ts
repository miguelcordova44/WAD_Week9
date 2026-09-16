import express from 'express';
import songRouter from './routes/songRoutes.js';
import userRouter from './routes/userRoutes.js';
// TODO Task 3: import the logger middleware from ./middleware/logger.js.
import { logger } from './middleware/logger.js';

const app = express();
const port = 3000;

app.use(express.json());

// This inline logger keeps the starter observable before Task 3.
// TODO Task 3: remove this block and replace it with app.use(logger).
app.use(logger);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', message: 'HitTastic API is playing!' });
});

// TODO Task 4: explain why mounting once groups every song URL.
app.use('/api/songs', songRouter);
app.use('/api/users', userRouter);

app.use((_request, response) => {
  response.status(404).json({ message: 'Route not found.' });
});

app.listen(port, () => {
  console.log(`HitTastic API listening on http://localhost:${port}`);
});
