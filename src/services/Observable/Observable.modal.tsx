// modalService.ts
import { BehaviorSubject } from 'rxjs';

export interface ModalType {
  form: string;
  isOpen: boolean;
}

const initialModal: ModalType = {
  form: '',
  isOpen: false,
};

const modalSubject = new BehaviorSubject<ModalType>(initialModal);

const modalService = {
  // Mở đúng modal
  setOpenModal: (form: string) => {
    modalSubject.next({ form, isOpen: true });
  },

  // Đóng chỉ khi form khớp
  setCloseModal: (form: string) => {
    const current = modalSubject.getValue();
    if (current.form === form) {
      modalSubject.next({ ...current, isOpen: false });
    }
  },

  //getModalObservable: () => modalSubject.asObservable(),
  getModalObservable: (): BehaviorSubject<ModalType> => modalSubject,
};

export default modalService;
