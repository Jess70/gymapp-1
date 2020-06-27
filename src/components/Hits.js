/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native'
import PropTypes from 'prop-types';
import fontSizes from "../constants/fontSizes";
import {appTheme} from "../constants/colors";
import fonts from "../constants/fonts";

const Hits = (props) => {
  const {count, property} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.count}>
        {count}
      </Text>
      <Text style={styles.property}>
        {property}
      </Text>
    </View>
  );
}

Hits.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  property: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  count:{
    color:'white',
    fontSize:fontSizes.h0,
    paddingLeft:0,
    fontFamily:fonts.MontserratSemiBold
  },
  property:{
    fontSize:fontSizes.h3,
    paddingLeft:0,
    color:'lightgrey',
    fontFamily:fonts.MontserratMedium

  }
});

export default Hits;