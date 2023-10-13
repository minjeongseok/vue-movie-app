exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify({
			name: 'MJS',
			age: 27,
			email: 'mjs1677@gmail.com',
		}),
	};
};
