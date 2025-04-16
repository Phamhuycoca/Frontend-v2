import React, { useRef, useState } from 'react';
import { Tabs, Button } from 'antd';
import { createStyles } from 'antd-style';
import { PlusOutlined } from '@ant-design/icons';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const defaultPanes = Array.from({ length: 3 }).map((_, index) => {
    const id = String(index + 1);
    return { label: `Tab ${id}`, children: `Content of Tab Pane ${index + 1}`, key: id };
});

const useStyles = createStyles(({ css }) => ({
    bottomTabs: css`
        height: 300px;
        position: fixed;
        bottom: 0;
        left: 63.5%;
        transform: translateX(-50%);
        
        width: 50%;
        background: #fff;
        box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
        z-index: 9;

        .ant-tabs-nav {
            display: flex !important;
            justify-content: flex-end !important;
            width: 100%;
        }
        .ant-tabs-nav-wrap {
            display: flex !important;
            flex: none !important;
        }
        .ant-tabs-nav-list{
            width: 952px !important;
        }
        .ant-tabs-tab {
            flex: 1;
            text-align: center;
            padding: 10px 0;
            font-size: 16px;
            color: #555;
            width: 100% !important;
        }
        .ant-tabs-tab-active {
            color: #0078d4;
            font-weight: bold;
        }

        .ant-tabs-content-holder {
            display: none;
        }
        .ant-tabs-tab .ant-tabs-tab-with-remove {
            width: 100% !important;
            
        }
        .ant-tabs-card.ant-tabs-top >.ant-tabs-nav .ant-tabs-tab{
         display: flex !important;
             justify-content: space-between !important;
        }
        .add-tab-btn {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px;
        }
    `,
}));

const BottomTabs: React.FC = () => {
    const { styles, cx } = useStyles();
    const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
    const [items, setItems] = useState(defaultPanes);
    const newTabIndex = useRef(0);

    const onChange = (newActiveKey: string) => {
        setActiveKey(newActiveKey);
    };

    const add = () => {
        if (items.length >= 3) return; // Giới hạn tối đa chỉ có 3 tab
        const newActiveKey = `newTab${newTabIndex.current++}`;
        const newPanes = [...items];
        newPanes.push({ label: 'New Tab', children: 'Content of new Tab', key: newActiveKey });
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };

    const remove = (targetKey: TargetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = items.filter((item) => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };

    const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };

    return (
        <>
            <div className={cx(styles.bottomTabs)}>
                <Tabs
                    tabPosition="top"
                    activeKey={activeKey}
                    onChange={onChange}
                    items={items}
                    hideAdd
                    type="editable-card"
                    onEdit={onEdit}
                />
                <Button className="add-tab-btn" icon={<PlusOutlined />} onClick={add} type="primary" shape="circle" />
            </div>
        </>
    );
};

export default BottomTabs;
