import React, { useState } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";

interface Props {
	initCount: number;
}

const MainPage: React.FC<Props> = ({ initCount }) => {
	const [count, setCount] = useState(initCount);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	return (
		<Box>
			<Heading> Count: {count}</Heading>
			<Button onClick={increment}> Increment</Button>
			<Button onClick={decrement}> Decrement</Button>
		</Box>
	);
};

export default MainPage;
