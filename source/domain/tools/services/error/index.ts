export class ServiceError {
  public readonly status: number;
  public readonly message: string;

  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}
