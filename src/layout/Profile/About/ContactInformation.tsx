import { Descriptions, Divider, Row } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';

const useStyles = createStyles(({ css }) => ({
    noColon: css`
        .ant-descriptions-item-label {
            width: 200px;
        }
        .ant-descriptions-item-label::after {
            content: none !important;
        }
    `,
    divider: css`
        margin: 0 0 10px 0 !important;
    `,
}));

const ContactInformation: React.FC = () => {
    const { styles, cx } = useStyles();

    return (
        <>
            <Row>
                <p className="fs-mediumfw-lighter fs-5 mb-0">Contact Information</p>
                <Divider className={cx(styles.divider)} />
                <Descriptions column={1} layout="horizontal" className={cx(styles.noColon)}>
                    <Descriptions.Item label="Email">Bnijohn@gmail.com</Descriptions.Item>
                    <Descriptions.Item label="Mobile">(001) 4544 565 456</Descriptions.Item>
                    <Descriptions.Item label="Address">United States of America</Descriptions.Item>
                </Descriptions>
                <p className="fs-mediumfw-lighter fs-5 mt-4">Websites and Social Links</p>
                <Divider className={cx(styles.divider)} />
                <Descriptions column={1} layout="horizontal" className={cx(styles.noColon)}>
                    <Descriptions.Item label="Website">www.bootstrap.com</Descriptions.Item>
                    <Descriptions.Item label="Social Link">www.bootstrap.com</Descriptions.Item>
                </Descriptions>
                <p className="fs-mediumfw-lighter fs-5 mt-4">Basic Information</p>
                <Divider className={cx(styles.divider)} />
                <Descriptions column={1} layout="horizontal" className={cx(styles.noColon)}>
                    <Descriptions.Item label="Birth Date">24 January</Descriptions.Item>
                    <Descriptions.Item label="Birth Year">1994</Descriptions.Item>
                    <Descriptions.Item label="Gender">Female</Descriptions.Item>
                    <Descriptions.Item label="interested in">Designing</Descriptions.Item>
                    <Descriptions.Item label="language">English, French</Descriptions.Item>
                </Descriptions>
            </Row>
        </>
    );
};
export default ContactInformation;
