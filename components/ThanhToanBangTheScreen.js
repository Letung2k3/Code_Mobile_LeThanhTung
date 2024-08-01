import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const ThanhToanBangTheScreen = ({ route, navigation }) => {
  const { scheduleItem, selectedFare } = route.params;

  const formatPrice = (price) => {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${formattedPrice}`;
  };

  const paymentData = [
    { id: '1', label: 'Chuyến đi', value: `${scheduleItem.time}` },
    { id: '2', label: 'Loại vé', value: selectedFare.type },
    { id: '3', label: 'Giá vé', value: formatPrice(selectedFare.price) },
    { id: '4', label: 'Số ghế', value: `${scheduleItem.destination}` },
  ];

  const bankOptions = ['Ngân hàng Công Thương Việt Nam - Vietinbank', 'Ngân hàng Kỹ Thương Việt Nam - Techcombank', 'Ngân hàng Á Châu - ACB', 'Ngân hàng Đầu tư và Phát triển - BIDV', 'Ngân hàng Ngoại thương Việt Nam - Vietcombank', 'Ngân hàng Quân đội - MB','Ngân hàng Phương Đông - OCB','Ngân hàng Quốc tế Việt Nam - VIB','Ngân hàng Đại chúng Việt Nam - PVcombank','Ngân hàng An Bình - ABBANK','Ngân hàng Kiêng Long - KienLongBank','Ngân hàng nông nghiệp và phát triền nông thôn - Agribank','Ngân hàng Bảo Việt - Bao Viet Bank/BVB','Ngân hàng Phát triển Việt Nam - VDB'];

  const [selectedBank, setSelectedBank] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [isBankModalVisible, setBankModalVisible] = useState(false);

  const handlePayment = () => {
    if (selectedBank && (cardNumber || accountNumber)) {
      alert(`Thanh toán thành công với ngân hàng ${selectedBank}, số thẻ ${cardNumber}, số tài khoản ${accountNumber}!`);
      // Chuyển về trang Home
      navigation.navigate('Home');
    } else {
      alert('Vui lòng nhập đầy đủ thông tin thanh toán.');
    }
  };

  const renderItem = ({ item }) => {
    if (!item) {
      return null;
    }

    return (
      <View style={styles.paymentItem}>
        <Text style={styles.paymentLabel}>{item.label}</Text>
        <Text style={styles.paymentValue}>{item.value}</Text>
      </View>
    );
  };

  const renderBankOption = ({ item }) => (
    <TouchableOpacity
      style={styles.bankOption}
      onPress={() => {
        setSelectedBank(item);
        setBankModalVisible(false);
      }}
    >
      <Text style={styles.bankOptionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}><Icon name='paypal' type="font-awesome" color='#517fa4' /> Thanh Toán</Text>
      <FlatList
        data={paymentData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.paymentList}
      />
      
      <TouchableOpacity
        style={styles.bankPickerContainer}
        onPress={() => setBankModalVisible(true)}
      >
        <Text style={styles.bankPickerLabel}>Chọn ngân hàng thanh toán:</Text>
        <View style={styles.selectedBankContainer}>
          <Text style={styles.selectedBank}>{selectedBank || 'Chọn ngân hàng'}</Text>
          <Icon name='caret-down' type='font-awesome' color='#000' />
        </View>
      </TouchableOpacity>
      
      <Text style={styles.bankPickerLabel}>Nhập số thẻ/số tài khoản thanh toán:</Text>
      <TextInput
        style={styles.input}
        placeholder="Số thẻ/số tài khoản"
        onChangeText={(text) => setCardNumber(text)}
      />
      <Text style={styles.bankPickerLabel}>Nhập tên thẻ (Nếu sử dụng thẻ):</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên thẻ"
        onChangeText={(text) => setAccountNumber(text)}
      />
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Thanh Toán</Text>
      </TouchableOpacity>

      {/* Ảnh bản đồ */}
      <Image
        source={{ uri: 'https://i.ibb.co/gDN2PyZ/images.jpg' }}
        style={styles.mapImage}
      />

      {/* Modal for bank selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBankModalVisible}
        onRequestClose={() => setBankModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={bankOptions}
            renderItem={renderBankOption}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e7feff',
  },
  screenTitle: {
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paymentList: {
    marginBottom: 16,
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  paymentLabel: {
    fontWeight: 'bold',
  },
  paymentValue: {
    marginLeft: 8,
  },
  bankPickerContainer: {
    marginBottom: 16,
  },
  bankPickerLabel: {
    marginBottom: 8,
  },
  selectedBankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedBank: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  paymentButton: {
    backgroundColor: '#517fa4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bankOption: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
     backgroundColor:'#ccc'
    
  },
  bankOptionText: {
    fontSize: 16,
    color:'#000',
    fontStyle:'bold',
   
  },
  mapImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
    marginTop:12
  },
});

export default ThanhToanBangTheScreen;