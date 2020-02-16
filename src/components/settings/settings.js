import { StyleSheet, Text, View } from 'react-native';

import { BORDER } from '../../constants/styles/border';
import { COLORS } from '../../constants/styles/colors';
import { FONTS } from '../../constants/styles/fonts';
import React from 'react';
import { SPACER } from '../../constants/styles/spacer';
import { Screen } from '../screen/screen';
import { SettingsLanguageOptionSelectorConnected } from './settings-language-option-radio-selector/settings-language-option-radio-selector.connected';
import { SettingsRainToleranceModeRadioSelectorConnected } from './settings-rain-tolerance-mode-radio-selector/settings-rain-tolerance-mode-radio-selector.connected';
import { SettingsTemperatureMeasurementRadioSelectorConnected } from './settings-temperature-measurement-radio-selector/settings-temperature-measurement-radio-selector.connected';
import { SettingsTemperatureMinimumSliderSelectorConnected } from './settings-temperature-minimum-slider-selector/settings-temperature-minimum-slider-selector';
import { SettingsWindSpeedMaximumSliderSelectorConnected } from './settings-wind-speed-maximum-slider-selector/settings-wind-speed-maximum-slider-selector';
import { scaledLineHeight } from '../../util/scaled-line-height/scaled-line-height';
import { scaledValue } from '../../util/scaled-value/scaled-value';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  minimumRidingToleranceContainer: {
    borderColor: COLORS.WHITE,
    borderRadius: BORDER.RADIUS,
    borderWidth: BORDER.WIDTH,
    marginBottom: SPACER,
    padding: SPACER,
    width: '100%'
  },
  rainToleranceSelector: {
    marginBottom: SPACER / 2
  },
  temperatureSelector: {
    marginBottom: SPACER
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.BOLD,
    fontSize: scaledValue(14),
    lineHeight: scaledLineHeight(14),
    marginBottom: SPACER / 2,
    textAlign: 'left',
    textTransform: 'uppercase'
  }
});

export const Settings = () => {
  return (
    <Screen backgroundColor={COLORS.TWITTER} style={styles.container}>
      <SettingsTemperatureMeasurementRadioSelectorConnected style={styles.temperatureSelector} />
      <Text style={styles.text}>Minimum Riding Tolerance</Text>
      <View style={styles.minimumRidingToleranceContainer}>
        <SettingsRainToleranceModeRadioSelectorConnected style={styles.rainToleranceSelector} />
        <SettingsTemperatureMinimumSliderSelectorConnected />
        <SettingsWindSpeedMaximumSliderSelectorConnected />
      </View>
      <Text style={styles.text}>Language</Text>
      <SettingsLanguageOptionSelectorConnected />
    </Screen>
  );
};
