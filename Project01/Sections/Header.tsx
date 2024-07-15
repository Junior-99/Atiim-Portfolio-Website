import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Atiim Technology Suite</Text>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.navLink}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLink}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLink}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLink}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  navbar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#000',
    fontSize: 14,
    marginRight: 10,
  },
});

export default Header;
