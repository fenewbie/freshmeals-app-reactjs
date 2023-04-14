const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@features': path.resolve(__dirname, 'src/features/'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
		},
	},
};
