import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import * as CarList from '../../../assets/Cars.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import useCar from '../../hooks/useCar';
const {width, height} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const {deleteCarItem, cars} = useCar();
  const handleEdit = item => {
    console.log(item);
    navigation.navigate('AddCar', {item});
  };

  const Item = ({item}) => (
    <View style={styles.item}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.label}>Make:</Text>
          <Text style={styles.title}>{item.make}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.label}>Model:</Text>
          <Text style={styles.title}>{item.model}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.label}>Reg#:</Text>
          <Text style={styles.title}>{item.registration_no}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => deleteCarItem(item.id)}
          style={{marginRight: 5}}>
          <View style={{backgroundColor: 'red', padding: 10, color: '#fff'}}>
            <Icon name="trash" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <View style={{backgroundColor: 'green', padding: 10, color: '#fff'}}>
            <Icon name="edit" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // style={{backgroundColor: 'red'}}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#52B6DF',
          padding: 20,
          position: 'absolute',
          bottom: height / 15,
          right: width / 15,
          borderRadius: 80,
        }}
        onPress={() => navigation.navigate('AddCar')}>
        <Icon2 name="plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#000',

    fontWeight: '400',
    marginLeft: 10,
  },
});
