import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../Sections/Header';
import MainBanner from '../Sections/MainBanner';
import CompaniesSection from '../Sections/CompaniesSection';
import AboutSection from '../Sections/AboutSection';
import StatsSection from '../Sections/StatsSection';
import ServicesSection from '../Sections/ServicesSection';
import PortfolioSection from '../Sections/PortfolioSection';
import TestimonialsSection from '../Sections/TestimonialSection';
import ContactSection from '../Sections/ContactSection';
import Footer from '../Sections/Footer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <MainBanner />
        <CompaniesSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%', 
  },
  scrollContainer: {
    flexGrow: 1, 
  },
});

export default HomeScreen;
