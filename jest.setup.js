jest.mock('@react-native-async-storage/async-storage',() => ({
	setItem: jest.fn(),
	getItem: jest.fn(),
	removeItem: jest.fn(),
	multiSet: jest.fn(),
	multiGet: jest.fn(),
	multiRemove: jest.fn(),
	clear: jest.fn(),
}));

jest.mock('react-native-toast-message',() => ({
	show: jest.fn(),
	hide: jest.fn(),
}));

jest.mock('@gluestack-ui/themed',() => ({
	GluestackUIProvider: ({children}) => children,
	Button: ({children}) => children,
	ButtonText: ({children}) => children,
	Input: () => null,
	FormControl: ({children}) => children,
	FormControlLabel: ({children}) => children,
	FormControlLabelText: ({children}) => children,
	FormControlError: ({children}) => children,
	FormControlErrorText: ({children}) => children,
}));

jest.mock('react-native',() => {
	const mockEventEmitter = {
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
	};

	const mockAppearance = {
		getColorScheme: () => 'light',
		addChangeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
	};

	return {
		Alert: {
			alert: jest.fn(),
		},
		Platform: {
			OS: 'android',
			select: jest.fn(),
		},
		View: 'View',
		Text: 'Text',
		TouchableOpacity: 'TouchableOpacity',
		TextInput: 'TextInput',
		ScrollView: 'ScrollView',
		StyleSheet: {
			create: jest.fn(),
		},
		Appearance: mockAppearance,
		NativeEventEmitter: jest.fn(() => mockEventEmitter),
		EventEmitter: jest.fn(() => mockEventEmitter),
		NativeModules: {
			AppearanceModule: {
				getColorScheme: jest.fn(() => 'light'),
				addListener: jest.fn(),
				removeListeners: jest.fn(),
			},
		},
	};
});

jest.mock('react-native-safe-area-context',() => ({
	SafeAreaProvider: ({children}) => children,
	useSafeAreaInsets: () => ({top: 0,right: 0,bottom: 0,left: 0}),
})); 