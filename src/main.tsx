// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './styles/index.scss';
import { legacyLogicalPropertiesTransformer, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import 'remixicon/fonts/remixicon.css';
createRoot(document.getElementById('root')!).render(
    // <StrictMode>
        <ConfigProvider theme={{ token: {},cssVar:false, hashed: false }}>
            <StyleProvider hashPriority="low" transformers={[legacyLogicalPropertiesTransformer]}>
                <App />
            </StyleProvider>
        </ConfigProvider>
    // </StrictMode>,
);
