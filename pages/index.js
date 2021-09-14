import Head from "next/head";
import { Box } from "grommet";

export default function Home() {
	return (
		<div>
			<Head>
				<title>US UK Baby Lingo</title>
				<meta
					name="description"
					content="UK equivalent of US words used to discuss baby related things!"
				/>
				<link rel="icon" href="/babyfeet_32px.ico" />
			</Head>

			<main>
				<Box direction="row" gap="large" pad="medium">
					<Box align="center" fill={true}>
						<Box align="center">
							<h1>American Version</h1>
              <Box pad="medium" gap="small" fill={true} background="accent-2">
                <Box direction="row">Diaper</Box>
                <Box direction="row">Binky</Box>
                <Box direction="row">Stroller</Box>
                <Box direction="row">Crib</Box>
                <Box direction="row">Wash cloth</Box>
                <Box direction="row">Onsie</Box>
              </Box>
            </Box>
					</Box>
					<Box align="center" fill={true}>
						<Box align="center">
							<h1>British Equivalent</h1>
              <Box pad="medium" gap="small" fill={true} background="accent-3">
                <Box direction="row">Nappy</Box>
                <Box direction="row">NuNu</Box>
                <Box direction="row">Pram</Box>
                <Box direction="row">Cot</Box>
                <Box direction="row">Flannel</Box>
                <Box direction="row">Bodysuit</Box>
              </Box>
            </Box>
					</Box>
				</Box>
			</main>

			<footer>
				<Box pad="xlarge" background="brand">
					US UK babies
				</Box>
			</footer>
		</div>
	);
}
