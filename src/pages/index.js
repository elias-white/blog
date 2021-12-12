import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
	return (
		<Layout pageTitle={"Home"}>
			<p>Welcome to my website.</p>
			<StaticImage
				alt="EFF Logo"
				src="https://www.eff.org/files/2018/06/14/eff-logo-lockup-1color.png"
			/>
		</Layout>
	)
}

export default IndexPage