import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./MainScreen.css";
import {
	theme,
	Col,
	Row,
	Typography,
	Divider,
	Image,
} from "antd";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
const { Title, Paragraph } = Typography;

const MainScreen = () => {
	const user = useSelector((state) => state.users.value);

	return (
		<section className="entire-Container">
			<Row>
				<Col span={24}>
					<Row className="top-row" justify={"end"}>
						<Col span={24}>
							<Typography className="typo-username">{user}</Typography>
							<Divider className="horizontal-line"/>
						</Col>
					</Row>
				
					<Row justify="space-between" className="bottom-row" gutter={[32,16]}>
						<Col span={12} className="first-col">
							<Typography>
								<Title className="first-title">Lorem Ipsum Dolor</Title>
								<Paragraph className="para">
									lLorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</Paragraph>
							</Typography>
						</Col>

						<Col span={6} className="col" >
							<Image src={img1} className="image"></Image>
							<Typography>
								<Paragraph className="para">
									lLorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</Paragraph>
							</Typography>
						</Col>

						<Col span={6} className="col">
							<Image src={img2} className="image"></Image>
							<Typography>
								<Paragraph className="para">
									lLorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</Paragraph>
							</Typography>
						</Col>
						

					
					</Row>
				</Col>
			</Row>
		</section>

	);
};

export default MainScreen;
