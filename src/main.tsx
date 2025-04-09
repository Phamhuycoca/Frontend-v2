import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './styles/index.scss';
import { legacyLogicalPropertiesTransformer, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
            <ConfigProvider theme={{ cssVar: false, hashed: false }} >
                <App />
            </ConfigProvider>
        </StyleProvider>
    </StrictMode>,
);
