import { Card, Col, Row, Tabs } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import ContactInformation from './ContactInformation';
import Relationship from './Relationship';
import Work from './Work';
import CurrentCityAndHometown from './CurrentCityAndHometown';
import AboutYou from './AboutYou';

const lst_menu = [
    { key: 1, label: 'Contact and Basic info', component: <ContactInformation /> },
    { key: 2, label: 'Family and Relationship', component: <Relationship /> },
    { key: 3, label: 'Work and Education', component: <Work /> },
    { key: 4, label: `Places You've Lived`, component: <CurrentCityAndHometown /> },
    { key: 5, label: 'Details About You', component: <AboutYou /> },
];
const useStyles = createStyles(({ css }) => ({
    tabswrap: css`
        .ant-tabs-nav {
            margin: 0 !important;
            border-radius: 10px;
            padding: 1px;
            display: flex;
            justify-content: center;
        }

        .ant-tabs-nav-list {
            width: auto !important;
            display: flex;
            justify-content: space-around;
            background-color: none !important;
        }

        .ant-tabs-tab {
            background-color: white !important;
            border-radius: 8px !important;
            padding: 12px 24px;
            color: #777;
            transition: all 0.3s ease;
            font-weight: 500;
            height: 60px;
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab {
            border-radius: 8px;
            color: #66bbff !important;
        }

        .ant-tabs-nav-wrap {
            width: 360px !important;
        }
        .ant-tabs-tab-active {
            background-color: #dcf0ff !important;
            color: #66bbff !important;
            border-radius: 8px !important;
        }

        div.ant-tabs.ant-tabs-top > div.ant-tabs-nav::before {
            display: none !important;
            background: transparent !important;
        }

        .ant-tabs-tab-active .ant-tabs-tab-btn {
            color: #66bbff !important;
            border-radius: 8px;
        }

        .ant-tabs-tab:hover {
            // color: #DCF0FF;
        }

        .ant-tabs-ink-bar {
            display: none !important;
        }

        .ant-tabs-content-holder {
            color: transparent !important;
            background-color: transparent !important;
            border-left: transparent !important;
        }
    `,
}));
const AboutPage: React.FC = () => {
    const { styles, cx } = useStyles();
    const [activeKey, setActiveKey] = useState('1');
    return (
        <>
            <Card>
                <Row gutter={[20, 10]}>
                    <Col span={8}>
                        <Tabs
                            className={cx(styles.tabswrap)}
                            size="small"
                            tabPosition="left"
                            activeKey={activeKey}
                            onChange={setActiveKey}
                            items={lst_menu.map((menu) => {
                                return {
                                    label: menu.label,
                                    key: String(menu.key),
                                };
                            })}
                        />
                    </Col>
                    <Col span={16}>
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            {lst_menu.find((x) => x.key === parseInt(activeKey))?.component}
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    );
};
export default AboutPage;
