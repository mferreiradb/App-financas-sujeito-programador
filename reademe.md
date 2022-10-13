*Projeto criado com npx create-expo-app --template*

    - Iniciar com *npm run android*

*const statusBarHeight = StatusBar.currentHeight;*

    - Variável usada para atrinuir ao header o padding igual ao tamanho da StatusBar

        - Somente aplicável a dispositivos android

*TouchableOpacity*
    - Área com opacidade ao tocar

*moti*
    - Lib para animações
        *expo install moti*

    - Necessita da lib *React Native Reanimated*
        *expo install react-native-reanimated*

        - Adicionar ao *babel.config*
                plugins: [
                    'react-native-reanimated/plugin',
                ],

    - Necessário importar *react-native-reanimated* no App.js