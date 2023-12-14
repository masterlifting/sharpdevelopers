/** @format */

import React from 'react';
import { TextColor } from '../../../shared/styles/colors';

interface ITransactionDetailsProps {
  transactionId: string;
  description?: string;
}

export const UserTransactionDetails = ({ transactionId, description }: ITransactionDetailsProps) => {
  return (
    <div className={`${TextColor.Secondary} p-2 text-sm`}>
      {description ? <p>{description}</p> : <p>Additional details for the transaction: {transactionId}</p>}
    </div>
  );
};
