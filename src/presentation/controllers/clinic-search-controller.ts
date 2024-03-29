import { Controller } from '@/presentation/controllers/ports/controller';
import { HttpRequest } from '@/presentation/controllers/ports/http-request';
import { HttpResponse } from '@/presentation/controllers/ports/http-response';
import { IQuery } from '@/usecases/datatypes/interface-query';
import { UseCase } from '@/usecases/ports/use-case';

export class ClinicSearchController implements Controller {
  constructor(private useCase: UseCase) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const token = request.token;
      const query: IQuery = request.query;
      const clinics = await this.useCase.perform(query, token);
      return {
        statusCode: 200,
        body: clinics,
      };
    } catch (error) {
      const userUnauthorized = error.constructor.name === 'UnauthorizedError';

      if (userUnauthorized) {
        return {
          statusCode: error.httpStatus,
          body: {
            errorType: error.constructor.name,
            message: error.message,
          },
        };
      }
      
      return {
        statusCode: 500,
        body: error.message,
      };
    }
  }
}
