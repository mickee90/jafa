import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isLoginMutation = req.body?.operationName === 'LoginUser';

  if (isLoginMutation) {
    next();
  }

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const secretKey = process.env.JWT_SECRET || 'your_secret_key';
    const decoded = jwt.verify(token, secretKey) as { id: string };

    req.user = { id: decoded.id };

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
