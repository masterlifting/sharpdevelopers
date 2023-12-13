/** @format */

import { IPagination } from '../../frontend/src/shared/components/paginations/paginationTypes';
import { ISorting } from '../../frontend/src/shared/components/sortings/sortingFieldTypes';
import { IMoney } from '../../shared/types/MoneyTypes';
import { IUserGet } from '../../shared/types/UserTypes';

type TransactionType = 'Income' | 'Outcome';
type TransactionStatus = 'Created' | 'Pending' | 'Completed' | 'Failed';

interface IUserTransaction {
  user: IUserGet;
  amount: IMoney;
}

export interface IUserTransactionGet extends IUserTransaction {
  id: string;
  date: Date;
  type: TransactionType;
  status: TransactionStatus;
  description?: string;
}

export interface IUserTransactionsFilter {
  pagination?: IPagination;
  sorting?: ISorting;
}

export interface IUserTransactionsGet {
  totalCount: number;
  items: IUserTransactionGet[];
}

export interface IUserTransactionPost extends IUserTransaction {}
