import { Router } from 'express';

const router = Router();

router.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', message: 'Backend funcionando' });
});

export default router;
