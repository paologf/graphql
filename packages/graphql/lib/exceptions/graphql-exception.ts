import { GraphQLError } from 'graphql';

export class GraphQLException extends GraphQLError {
  constructor(message: string) {
    super(message);
  }
}
