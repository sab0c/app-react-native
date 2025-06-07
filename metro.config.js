const {withNativeWind} = require('nativewind/metro');
const {getDefaultConfig,mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const config = mergeConfig(getDefaultConfig(__dirname),{
	resolver: {
		extraNodeModules: {
			'react-dom': path.resolve(__dirname,'shim','react-dom.js'),
		},
	},
	watchFolders: [path.resolve(__dirname,'shim')],
});

module.exports = withNativeWind(config,{
	input: './global.css',
});
