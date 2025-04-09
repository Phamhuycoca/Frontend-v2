import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'antd';
import { ToastMessage } from './utils/Toast';
function App() {
    const handleClick = () => {
        ToastMessage({message: 'Hello World!', type: 'success', duration: 5});
    };
    return (
        <>
            <Button onClick={handleClick}/>
            <ToastContainer position="top-center" />
        </>
    );
}

export default App;
