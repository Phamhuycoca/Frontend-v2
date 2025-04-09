import { toast } from 'react-toastify';

interface ToastMessageProps {
    message?: string;
    type?: 'success' | 'error' | 'info';
    duration?: number;
}

const ToastMessage = ({ message = '', type = 'info', duration = 3 }: ToastMessageProps) => {
        toast[type](message, {
            autoClose: duration * 1000,
        });
};

export { ToastMessage };
