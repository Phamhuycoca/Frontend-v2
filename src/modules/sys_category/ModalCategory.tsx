import React, { useEffect, useState } from 'react';
import modalService, { ModalType } from '../../services/Observable/Observable.service';
import { Modal } from 'antd';

const ModalCategory: React.FC = () => {
    const [modal, setModal] = useState<ModalType>({ form: '', isOpen: false });
    useEffect(() => {
        const subscription = modalService.getModalObservable().subscribe((modal:ModalType)=>{
            if(modal.form==='category'){
                setModal(modal)
            }
        });
        
        return () => subscription.unsubscribe();
    }, [modalService]);
    return (
        <>
            <Modal
                title="Basic Modal"
                open={modal.isOpen}
                onOk={() => modalService.setCloseModal('category')}
                onCancel={() => modalService.setCloseModal('category')}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default ModalCategory;
