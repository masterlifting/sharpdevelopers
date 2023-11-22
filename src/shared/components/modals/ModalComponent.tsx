/** @format */

import { useModalState } from './ModalHooks';

interface IModalProps {
  children: React.ReactNode;
  id: string;
  title: string;
  onClose?: () => void;
}

export const Modal = ({ children, id, title, onClose }: IModalProps) => {
  const { isModalOpen, modalId } = useModalState();

  return isModalOpen && modalId === id ? (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black opacity-70' onClick={onClose} />
      <div className='absolute bg-white p-5 rounded-md'>
        <h1 className='text-xl font-bold mb-2'>{title}</h1>
        {children}
      </div>
    </div>
  ) : null;
};
