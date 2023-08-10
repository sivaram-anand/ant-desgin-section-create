import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import LoginScreens from "./LoginScreen.css";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./User";
import { useState } from "react";
const LoginScreen = () => {
	const onFinish = (values) => {
		setGoToContact(true);
		console.log(values.username);
		dispatch(login(values.username));
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	const dispatch = useDispatch();
	// const [name, setName] = useState("");
	const [goToContact, setGoToContact] = React.useState(false);

	if (goToContact === true) {
		return <Navigate to="/mainscreen" />;
	}
	return (
		<div className="backgrounds">
			<div className="mainform">
				<Form
					name="basic"
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}
					style={{
						maxWidth: 600,
					}}
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off">
					<Form.Item
						label="Username"
						name="username"
						required="true"
						// value={name}
						// onChange={(e) => setName(e.target.value)}
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						wrapperCol={{
							offset: 8,
							span: 16,
						}}>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 8,
							span: 16,
						}}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default LoginScreen;
