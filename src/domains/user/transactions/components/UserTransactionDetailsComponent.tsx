/** @format */

import { TextColors } from '../../../../shared/styles/Colors';

interface ITransactionDetailsProps {
  transactionId: string;
  description?: string;
}

export const UserTransactionDetails = ({ transactionId, description }: ITransactionDetailsProps) => {
  return (
    <div className={`${TextColors.Secondary} p-2 text-sm`}>
      {description ? <p>{description}</p> : <p>Additional details for the transaction: {transactionId}</p>}
    </div>
  );
};
