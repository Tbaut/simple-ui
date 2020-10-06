// Copyright 2019-2020 @paritytech/bridge-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'semantic-ui-css/semantic.min.css';

import React from 'react';

import Menu from './components/MenuBar';
import NameGen from './screens/NameGen';

const App = () => {

	return (
		<>
			<Menu/>
			<NameGen/>
		</>
	);
};

export default App;
