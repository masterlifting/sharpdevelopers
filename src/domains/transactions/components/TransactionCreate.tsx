/** @format */

import { ITransactionGet } from '../TransactionTypes';
import { useCustomModal } from '../../../shared/modals/CustomModalHooks';
import { ValidationError } from '../../../shared/errors/ErrorComponents';
import { useTransactionCreate } from '../TransactionsHooks';
import { ButtonStyle } from '../../../styles/Buttons';

interface ITransactionProps {
  transaction?: ITransactionGet;
  updateTransactions: (transaction: ITransactionGet) => void;
}

export const TransactionCreate = ({ transaction, updateTransactions }: ITransactionProps) => {
  const { closeModal } = useCustomModal();
  const { transactionPost, recipients, validation, onChangeAmount, onChangeRecipient, onSubmit } = useTransactionCreate(transaction, updateTransactions);

  return (
    <form onSubmit={onSubmit}>
      <div className='flex justify-between items-center mb-2'>
        <input className='w-40 border p-2 m-2 outline-0 rounded-md' type='number' placeholder='Amount' value={transactionPost.amount} onChange={onChangeAmount} />
        <select className='w-40 border p-2 m-2 outline-0 rounded-md' value={transactionPost.user.email} onChange={onChangeRecipient}>
          {recipients.map(x => (
            <option key={x.id} value={x.email}>
              {x.email}
            </option>
          ))}
        </select>
      </div>
      {!validation.isValid && <ValidationError message={validation.message} />}
      <div className='flex justify-end gap-2'>
        <button className={ButtonStyle.secondary} onClick={closeModal}>
          Close
        </button>
        <button disabled={!validation} className={validation ? ButtonStyle.success : ButtonStyle.disable}>
          Commit
        </button>
      </div>
    </form>
  );
};
