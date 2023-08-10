import React from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import MainScreens from "./MainScreen.css";
import {
	Breadcrumb,
	Layout,
	Menu,
	theme,
	Col,
	Row,
	Typography,
	Section,
	Space,
	T,
	Divider,
} from "antd";
import User from "./User";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const MainScreen = () => {
	const user = useSelector((state) => state.user.value);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ height: "100vh" }}>
		<section className="entire-Container">
			<Row>
				<Col span={24}>
					<Row>
						<Col span={24} justify="end">
							<Space>
								{" "}
								{/* <T></T>
								<T></T> */}
							</Space>
							<Divider className="horizontal-line"></Divider>
						</Col>
					</Row>
					<Row justify="space-between" >
						<Col span={12} className="middleleft">
							<Typography>
								<Title className="middlelefthead">Lorem Ipsum Dolor</Title>
								<Paragraph className="middleleftpara">
									lLorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</Paragraph>
							</Typography>
						</Col>

						<Col span={6} className="firstpara" >
							<img src={img1} height="200" border-radius="8px"></img>
							<Typography>
								<Paragraph className="firstparap">
									lLorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</Paragraph>
							</Typography>
						</Col>

						<Col span={6} className="secondndpara">
							<img src={img2} height="200"></img>
							<Typography>
								<Paragraph className="secondndparap">
									lLorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
								</Paragraph>
							</Typography>
						</Col>
						

					
					</Row>
				</Col>
			</Row>
		</section>
	</Layout>
	);
};

export default MainScreen;
