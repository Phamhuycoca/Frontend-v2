import { List, Row } from 'antd';
import React from 'react';
import { HistorySearch} from '../../../stores/reducers/historysearch.slice';
type PropHistorySearch = {
    historyList: HistorySearch[];
    deleteHistory: (id: number) => void;
};
const SearchHistory: React.FC<PropHistorySearch> = ({ historyList,deleteHistory }) => {

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={historyList}
                renderItem={(item, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            title={
                                <Row justify={'space-between'}>
                                    <a href="https://ant.design">{item.title}</a>
                                    <a
                                        onClick={() => {
                                            if (item.id !== undefined) {
                                                deleteHistory(item.id)
                                            }
                                        }}
                                    >
                                        Xóa
                                    </a>
                                </Row>
                            }
                        />
                    </List.Item>
                )}
            />
        </>
    );
};
export default SearchHistory;
