import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url, options, category) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getFetch = async () => {
		if (localCache[url]) {
			setData(localCache[url]);
			setIsLoading(true);
			return;
		}

		const response = await fetch(url, options);
		const result = await response.json();
		setData(result);
		setIsLoading(false);
	};

	useEffect(() => {
		getFetch();
	}, [category]);

	return { data, isLoading, getFetch };
};
