import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Stock from '../Components/Stock';
import {Modal} from 'react-native';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleModalPress = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{backgroundColor: 'hsl(0, 0%, 100%)', padding: 13}}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
        <Ionicons
          name="ios-person-circle-outline"
          size={42}
          color={'#2c334fd8'}
        />
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#2c334fd8'}}>
          Mannalal Manaklal
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          alignItems: 'center',
          padding: 12,

          margin: 15,
          borderRadius: 10,
          shadowColor: '#e9e5e5',
          shadowOpacity: 0.2,
          elevation: 3,
        }}>
        <AntDesign
          name="search1"
          size={20}
          style={{marginLeft: 1, marginRight: 4}}
        />
        <TextInput style={{fontSize: 15}} placeholder="Search Party" />
      </View>
      <View
        style={{
          marginTop: -2,
          paddingLeft: 15,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}>
        <Text
          style={{
            height: 30,
            width: 60,
            borderWidth: 1,
            paddingLeft: 15,
            backgroundColor: '#2c334faf',
            padding: 6,
            borderRadius: 40,
            color: 'white',
          }}>
          Both
        </Text>
        <Text
          style={{
            height: 30,
            width: 60,
            borderWidth: 1,
            paddingLeft: 15,
            borderColor: '#2c334faf',
            padding: 6,
            borderRadius: 40,
            color: '#2c334faf',
          }}>
          Gold
        </Text>
        <Text
          style={{
            height: 30,
            width: 60,
            borderWidth: 1,
            paddingLeft: 13,
            borderColor: '#2c334faf',
            padding: 6,
            borderRadius: 40,
            color: '#2c334faf',
          }}>
          Silver
        </Text>
      </View>

      <Stock
        Titles="Total"
        silver="-14500.00 Gms"
        gold="+133.500 Gms"
        amount="+₹6,76,000"
      />
      <Stock
        Titles="Stock"
        silver="-14500.00 Gms"
        gold="+133.500 Gms"
        amount="+₹6,76,000"
      />
      <Stock
        Titles="Karigar"
        silver="-14500.00 Gms"
        gold="+133.500 Gms"
        amount="+₹6,76,000"
      />
      <Stock
        Titles="Supplier"
        silver="-14500.00 Gms"
        gold="+133.500 Gms"
        amount="+₹6,76,000"
      />
      <TouchableOpacity
        onPress={handleModalPress}
        style={{
          position: 'absolute',
          backgroundColor: '#2c334ff9',
          padding: 5,
          height: 50,
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50 / 2,
          bottom: 20,
          right: 20,
        }}>
        <AntDesign name="plus" size={24} color={'white'} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 10,
              elevation: 5,
            }}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={handleModalPress} // Add onPress event handler
            >
              <Entypo name="cross" size={24} />
            </TouchableOpacity>
            <AntDesign
              name="contacts"
              size={30}
              backgroundColor="#3b62ff30"
              style={{
                height: 49,
                width: 49,
                borderRadius: 48 / 2,
                alignItems: 'center',
                padding: 10,
                marginBottom: 10,
              }}
            />
            <Text style={{marginBottom: 17}}>Add Party</Text>
            <View
              style={{flexDirection: 'row', gap: 35, justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'column',
                  gap: 5,
                  justifyContent: 'center',
                }}>
                <MaterialIcons
                  name="compare-arrows"
                  size={30}
                  backgroundColor="#3b62ff30"
                  style={{
                    height: 49,
                    width: 49,
                    borderRadius: 48 / 2,
                    alignItems: 'center',
                    padding: 10,
                  }}
                />
                <Text>Transaction</Text>
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <MaterialCommunityIcons
                  name="iron-outline"
                  size={30}
                  backgroundColor="#3b62ff30"
                  style={{
                    height: 49,
                    width: 49,
                    borderRadius: 48 / 2,
                    alignItems: 'center',
                    padding: 10,
                  }}
                />
                <Text>Metal</Text>
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <MaterialCommunityIcons
                  name="cash-multiple"
                  size={30}
                  backgroundColor="#3b62ff30"
                  style={{
                    height: 49,
                    width: 49,
                    borderRadius: 48 / 2,
                    alignItems: 'center',
                    padding: 10,
                  }}
                />
                <Text>Cash</Text>
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <AntDesign
                  name="barchart"
                  size={30}
                  backgroundColor="#3b62ff30"
                  style={{
                    height: 49,
                    width: 49,
                    borderRadius: 48 / 2,
                    alignItems: 'center',
                    padding: 10,
                  }}
                />
                <Text>Bhavcut</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
