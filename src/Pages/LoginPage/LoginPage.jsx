import { Input, Button, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('accesstoken');

        useEffect(()=>{
           if(token){
            navigate('/home')
         }else{
            navigate('/')
         }
    }, [])

    const handleSubmit = (values) => {
        setLoading(true)
        fetch('https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
                phone_number: values.phone_number,
                password: values.password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Muvaffaqiyatli autentifikatsiyadan o'tganidan keyin tokenni saqlash va navigatsiya qilish
            if (data.accessToken) {
                localStorage.setItem('accesstoken', data.accessToken);
                navigate('/home');
            }
        })
        .catch((err) => {
            console.log(err.message);
        }).finally(()=>{
            setLoading(false)
        })
    };

    return (
        <div className='login-page'>
            <div className="container">
                <Form
                    onFinish={handleSubmit}
                    className="login-form"
                    name="login"
                    initialValues={{ remember: true }}
                    layout="vertical"
                >
                    <Form.Item
                        label="Telefon raqam"
                        name="phone_number"
                        rules={[{ required: true, message: 'Iltimos, telefon raqamingizni kiriting!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Parol"
                        name="password"
                        rules={[{ required: true, message: 'Iltimos, parolingizni kiriting!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} disabled={loading}  >
                         {loading ? "Yunorilmoqda" :"Kirish"}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
