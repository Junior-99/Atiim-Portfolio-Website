import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainBanner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerTitle}>Crafting Innovative Software Solutions</Text>
      <Text style={styles.bannerText}>
        We transform businesses through our innovative software. Our seasoned software engineering team specializes in crafting cutting-edge digital solutions that drive tangible business growth.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    padding: 32,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bannerText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MainBanner;
