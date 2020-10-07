// Copyright 2019-2020 @paritytech/bridge-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useCallback, useMemo, useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import styled from 'styled-components';

interface Props {
	className?: string;
}

// Helper function
// it gives a ramdom int between 0 and max
const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * Math.floor(max));
};

// Function that could be external
const useNewName = (): { changeName: () => void; name: string; } => {
	const someNames = useMemo(() => ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Franz'], []);
	const [name, setName] = useState('');

	const changeName = useCallback(() => {
		const newName = someNames[getRandomInt(someNames.length)];
		setName(newName);
	}, [someNames]);

	return { changeName, name };
};

// Main component
const NameGen = ({ className }: Props) => {
	const { name, changeName } = useNewName();

	return (
		<Container className={className}>
			<h1>Hello <span className='orange'>{name}</span>!</h1>
			<Button onClick={changeName}>Change name</Button>
		</Container>
	);
};

export default styled(NameGen)`
	.orange {
		color: orange;
	}
`;
