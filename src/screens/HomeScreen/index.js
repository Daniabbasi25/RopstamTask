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
  // const [cars, setcars] = useState(cars);
  const handleEdit = item => {
    console.log(item);
    navigation.navigate('AddCar', {item});
  };
  // const handledelete = id => {
  //   console.log(id);
  //   const newdata = cars.filter(item => item.id != id);
  //   setcars(newdata);
  // };
  const Item = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>

      <TouchableOpacity onPress={() => deleteCarItem(item.id)}>
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
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
  },
});
