import { Controller, HttpResponse } from '@/presentation/controllers/ports';

export class HomeController implements Controller {
  constructor(
  ) {}

  async handle(): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: "Hello world!",
    };
  }
}
