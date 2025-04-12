import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;
const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    zIndex:10
  };
const FooterPage:React.FC=()=>{
    return (
        <Footer style={footerStyle}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
    )
}
export default FooterPage;