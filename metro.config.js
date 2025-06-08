const {withNativeWind} = require('nativewind/metro');
const {getDefaultConfig,mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const config = mergeConfig(getDefaultConfig(__dirname),{
	transformer: {
		babelTransformerPath: require.resolve('react-native-svg-transformer'),
	},
	resolver: {
		extraNodeModules: {
			'react-dom': path.resolve(__dirname,'shim','react-dom.js'),
		},
		assetExts: ['png','jpg','jpeg','gif','svg'],
		sourceExts: ['js','jsx','json','ts','tsx','cjs'],
	},
	watchFolders: [path.resolve(__dirname,'shim')],
});

module.exports = withNativeWind(config,{
	input: './global.css',
});