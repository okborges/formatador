async function getClient(authCookie) {
	const cacheBuster = (url) => `${url}?noncached=${Date.now()}`;

	const req = await fetch(
		cacheBuster(`${rootPath()}/_v/rota/custom`),