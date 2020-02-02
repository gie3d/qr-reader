import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const Home = () => {
	const [data, setData] = useState(null);

	const handleScan = data => {
		if (data) {
			setData(data);
		}
	};
	const handleError = err => {
		alert(err);
	};

	return (
		<div>
			<QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
			<p>Read data: {data}</p>
		</div>
	);
};

export default Home;
