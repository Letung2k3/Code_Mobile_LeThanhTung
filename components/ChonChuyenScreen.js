import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem, Icon } from 'react-native-elements';
const ChonChuyenScreen = ({ route }) => {
  const { scheduleItem } = route.params;
  const navigation = useNavigation(); // Sử dụng useNavigation để lấy đối tượng navigation

  const formatPrice = (price) => {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${formattedPrice} VND`;
  };

  const fareData = [
    { id: '1', type: 'Ghế ngồi', price: formatPrice(150000),icon:'bus' },
    { id: '2', type: 'Giường năm', price: formatPrice(200000) ,icon:'bus'},
    { id: '3', type: 'Giường năm toa 1', price: formatPrice(210000),icon:'bus' },
    { id: '4', type: 'Ghế ngồi toa 1', price: formatPrice(200000),icon:'bus' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleBookTicket(item)}>
      <View style={styles.fareItem}>
        <Text style={styles.fareType}><Icon name={item.icon} type="font-awesome" color='#517fa4' /> {item.type}</Text>
        <Text style={styles.farePrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

 
  const handleBookTicket = (selectedFare) => {
    alert(`Đặt vé chuyến đi ${scheduleItem.id} với vé loại ${selectedFare.type}`);
   
    navigation.navigate('ThanhToanBangThe', { scheduleItem, selectedFare });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}><Icon name='ticket' type="font-awesome" color='#517fa4' /> Chọn Loại Vé</Text>
      <Text style={styles.scheduleInfo}>{scheduleItem.time} - {scheduleItem.destination}</Text>
      <FlatList
        data={fareData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.fareList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7feff',
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    paddingBottom:20,
    fontStyle:'italic'
  },
  scheduleInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  fareList: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  fareItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  fareType: {
    fontSize: 16,
  },
  farePrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChonChuyenScreen;