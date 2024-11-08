import { GraphQLError } from 'graphql';

export class ValidationError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'VALIDATION_ERROR',
      },
    });
  }
}

export class DatabaseError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'DATABASE_ERROR',
      },
    });
  }
}

export class AuthenticationError extends GraphQLError {
  constructor(message = 'Not authenticated') {
    super(message, {
      extensions: {
        code: 'UNAUTHENTICATED',
      },
    });
  }
}

export class ForbiddenError extends GraphQLError {
  constructor(message = 'Not authorized') {
    super(message, {
      extensions: {
        code: 'FORBIDDEN',
      },
    });
  }
}
