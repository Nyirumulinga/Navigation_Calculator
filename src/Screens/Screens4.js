// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>App Settings</Text>
      <View style={styles.setting}>
        <Text>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsToggle}
        />
      </View>
      <View style={styles.setting}>
        <Text>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={handleDarkModeToggle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
});

export default SettingsScreen;
