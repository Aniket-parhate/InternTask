import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const Stock = props => {
  return (
    <View
      style={{
        width: '98%',
        marginLeft: 8,
        padding: 17,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        marginBottom: 5,
        marginTop: 10,
      }}>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#2c334faf',
            marginBottom: 14,
          }}>
          {props.Titles}
        </Text>
      </View>

      <View style={{flexDirection: 'row', gap: 30}}>
        <View style={{flexDirection: 'column', gap: 4}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Silver</Text>
          <Text style={{fontSize: 15, color: 'red', fontWeight: 'bold'}}>
            {props.silver}
          </Text>
        </View>
        <View style={{flexDirection: 'column', gap: 4}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Gold</Text>
          <Text style={{fontSize: 15, color: '#00ca00', fontWeight: 'bold'}}>
            {props.gold}
          </Text>
        </View>
        <View style={{flexDirection: 'column', gap: 4}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Amount</Text>
          <Text style={{fontSize: 15, color: '#00ca00', fontWeight: 'bold'}}>
            {props.amount}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Stock;

const styles = StyleSheet.create({});
