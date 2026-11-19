import { AppService } from './app.service';

describe('AppService', () => {
  it('should return the expected message', () => {
    const service = new AppService();
    expect(service.getHello()).toBe('Hello World!');
  });
});