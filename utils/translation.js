import * as React from 'react';
import { Text } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
export default i18n.translations = {
    en: { welcome: 'Hello', name: 'Charlie' },
    ja: { welcome: 'こんにちは' },
};