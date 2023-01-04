export const getFoundryVersion = (game) => {
	let versionParts;

	if (game.version) {
		versionParts = game.version.split('.');
		return {
			major: parseInt(versionParts[0]),
			minor: parseInt(versionParts[1]),
		};
	}

	versionParts = game.data.version.split('.');
	return {
		major: parseInt(versionParts[1]),
		minor: parseInt(versionParts[2]),
	};
};
