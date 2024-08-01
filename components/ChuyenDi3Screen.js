import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const ChuyenDi3Screen = ({ navigation }) => {
  const scheduleData = [
    { id: '1', time: '7:00 - 9:00 AM', destination: '45/45 ghế trống', icon: 'bus' },
    { id: '2', time: '9:30 - 11:30 AM', destination: '45/45 ghế trống', icon: 'bus' },
    { id: '3', time: '12:45 - 14:45 PM', destination: '43/45 ghế trống', icon: 'bus' },
    { id: '4', time: '15:05 - 17:05 PM', destination: '42/45 ghế trống', icon: 'bus' },
    { id: '5', time: '17:35 - 19:35 PM', destination: '41/45 ghế trống', icon: 'bus' },
    { id: '6', time: '20:05 - 10:05 PM', destination: '45/45 ghế trống', icon: 'bus' },
    // Add more schedule items as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ChonChuyen', { scheduleItem: item })}>
      <ListItem containerStyle={styles.ListAddress} bottomDivider>
        <Icon name="clock" type="entypo" color="#000" />
        <ListItem.Content>
          <ListItem.Title style={styles.ListText}>{item.time}</ListItem.Title>
          <ListItem.Subtitle style={styles.ListText}><Icon name={item.icon} type="font-awesome" color='#517fa4' /> {item.destination}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
     <Text style={styles.screenTitle}><Icon name='road' type="font-awesome" color='#517fa4' /> Chọn Chuyến Đi</Text>
      <FlatList
        data={scheduleData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor:'#e7feff'
  },
  listContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  ListAddress: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
  },
  ListText: {
    padding: 10,
    fontSize: 16,
  },
};

export default ChuyenDi3Screen;