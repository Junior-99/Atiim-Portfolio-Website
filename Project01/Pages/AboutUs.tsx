import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../Sections/Header';
import AboutSection from '../Sections/AboutSection';
import StatsSection from '../Sections/StatsSection';
import ContactSection from '../Sections/ContactSection';
import Footer from '../Sections/Footer';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <AboutSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutUs;
