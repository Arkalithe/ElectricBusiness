import { Payment } from './payment';

export class Invoice {
  constructor(
    public id: number,
    public issueDate: Date,
    public invoiceDate: Date,
    public totalAmount: number,
    public status: string,
    public payment: Payment,
    public createdAt: Date,
  ) {}
}
