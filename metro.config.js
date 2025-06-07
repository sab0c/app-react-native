const {getDefaultConfig,mergeConfig} = require('@react-native/metro-config');

const config = {
	transformer: {
		babelTransformerPath: require.resolve('react-native-svg-transformer'),
	},
	resolver: {
		assetExts: ['png','jpg','jpeg','gif','svg'],
		sourceExts: ['js','jsx','json','ts','tsx','cjs'],
	},
};

module.exports = mergeConfig(getDefaultConfig(__dirname),config);
