import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const registerPage: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{
                height: '100vh',
                maxHeight: '100vh',
                width: '100%',
                maxWidth: '100%',
            }}
        >
            <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: 600, width: 360 }}>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Register
                    </Button>
                    or <Link to="/login">Login now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default registerPage;
