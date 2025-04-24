import React from 'react';
import modalService from '../../services/Observable/Observable.service';
import { Button } from 'antd';
import ModalCategory from './ModalCategory';

const CategoryPage: React.FC = () => {
    return (
        <>
            <Button
                onClick={() => {
                    modalService.setOpenModal('category');
                }}
            >OK day</Button>
            <ModalCategory />
        </>
    );
};
export default CategoryPage;
