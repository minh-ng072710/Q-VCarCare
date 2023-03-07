import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
    // < navigate dùng để chuyển hướng > //
    const navigate = useNavigate();
    // < values chính trong login chỉ gồm username và password> //
    const [values, setValues] = useState({
        username: "",
        password: "",
    });


    useEffect(() => {
        if (localStorage.getItem('car-app-user')) {
            navigate('/pagequantri')
        }
    }, [])

    // <  Submit form -> kiểm tra values, nếu giống db thì chạy loginRoute  > //
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
            const { password, username } = values;
            const { data } = await axios.post(loginRoute, {
                username,
                password,
            });
            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem("car-app-user", JSON.stringify(data.user));
                navigate("/pagequantri")
            }
        }
    };

    // < Hàm kiểm tra dữ liệu > //
    const handleValidation = () => {
        const { password, username } = values;
        if (password === "") {
            toast.error("Password is required.", toastOptions);
            return false;
        }
        else if (username.length === "") {
            toast.error("Username is required.", toastOptions);
            return false;
        }
        return true;
    };

    // < Hàm để input text ( do react khác với thông thường) > //
    const handleOnChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    // < Design thông báo > //
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        draggable: true,
        pauseOnHover: true,
        theme: "dark"
    };
    return (
        <>
            <FormContainer>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="brand">
                        <img src={Logo} alt="Logo" />
                        <h1>Q&V</h1>
                    </div>
                    <input type="text" placeholder="Username" name="username" min="3" onChange={(e) => handleOnChange(e)} />
                    <input type="password" placeholder="Password" name="password" onChange={(e) => handleOnChange(e)} />
                    <button type="submit">Login</button>
                    <span>Don't have an account? <Link to="/register">Register</Link></span>
                    <span>Forgot your password?<Link to="/forgotpassword">Forget password</Link></span>

                </form>

            </FormContainer>
            <ToastContainer />
        </>
    );
}
const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #e8f3ff;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;
        }
        h1 {
            /* color: white; */
            text-transform: uppercase
        }
    }
    .phone-input {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        p {
            height: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            padding: 0.5rem;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #fff;
        border-radius: 2rem;
        padding: 3rem 5rem; 
        box-shadow: 0 8px 24px rgb(21 48 142 / 14%);
    }
    input {
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #ccc;
        border-radius: 0.4rem;
        /* color: white; */
        width: 100%;
        font-size: 1rem;
        &:focus {
            /* border: 0.1rem solid #997af0; */
            outline: none;
        }
    }
    select {
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #ccc;
        border-radius: 0.4rem;
        /* color: white; */
        width: 100%;
        font-size: 1rem;
        &:focus {
            /* border: 0.1rem solid #997af0; */
            outline: none;
        }
        option {
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #ccc;
            border-radius: 0.4rem;
            color: black;
            width: 100%;
            font-size: 1rem;
            &:focus {
                /* border: 0.1rem solid #997af0; */
                outline: none;
            }
        }
    }
    button {
        background-color: #0068ff;
        padding: 1rem 2rem;
        color: white;
        cursor: pointer;
        border: none;
        font-weight: bold;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
        &:hover {
            background-color: #0184e0;
        }
    }
    span {
        /* color: white; */
        text-transform: uppercase;
        a {
            text-decoration: none;
            font-weight: bold;
            color: #0068ff;
        }
    }
`;

