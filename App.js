import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VinhPhucScreen from './components/VinhPhucScreen';
import { ListItem, Avatar, Icon,Header  } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import TuyenQuangScreen from './components/TuyenQuangScreen';
import ChonChuyenScreen from './components/ChonChuyenScreen';
const Stack = createStackNavigator();
import YenBaiScreen from './components/VinhPhucScreen';
import ThanhToanBangTheScreen from './components/ThanhToanBangTheScreen';
import ChuyenDi1Screen from './components/ChuyenDi1Screen';
import ChuyenDi2Screen from './components/ChuyenDi2Screen';
import ChuyenDi3Screen from './components/ChuyenDi3Screen';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  const handleLogin = async() => {
    if (username === 'LeTung01' && password === '123456') {
      navigation.navigate('Home');
    }else if(username ===  global.username && password ===  global.password)
    {
      navigation.navigate('Home');
    }
     else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };

 

  return (
    <View style={styles.container}>
     <View style={styles.image}>
      <Image source={{ uri: 'https://thietkelogo.vn/wp-content/uploads/2016/02/logo-dep.png' }} style={styles.logo} />
     </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên đăng nhập:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mật khẩu:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.DangKyButton} onPress={() => navigation.navigate('DangKy')}>
  <Text style={{ color: '#000', padding: 15, fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>Đăng Ký</Text>
</TouchableOpacity>
      
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const data = [
     { id: '1', title: 'Nhà xe Bảo Yến', content: 'Ảnh xe Bảo Yến', imageURL: 'https://i.ibb.co/5F5JZpR/xe1.jpg', icon: 'bus' },
    { id: '2', title: 'Nhà xe Cường An', content: 'Ảnh xe Cường An', imageURL: 'https://i.ibb.co/thhTdKx/xe2.jpg', icon: 'bus' },
    { id: '3', title: 'Nhà xe Hùng Cường', content: 'Ảnh xe Hùng Cường', imageURL: 'https://i.ibb.co/h28zXJZ/xe3.jpg', icon: 'bus' },
    { id: '4', title: 'Nhà xe Lâm Trì', content: 'Ảnh xe Lâm Trì', imageURL: 'https://i.ibb.co/kMdYWFX/xe4.jpg', icon: 'bus' },
    { id: '5', title: 'Nhà xe Nam Cầm', content: 'Ảnh xe Nam Cầm', imageURL: 'https://i.ibb.co/W6vypt4/x5.jpg', icon: 'bus' },
    { id: '6', title: 'Nhà xe Đức Chiến', content: 'Thông tin về nhà xe', imageURL: 'https://i.ibb.co/g7m1GW2/t-i-xu-ng.jpg', icon: 'bus' },
    // Thêm các mục khác nếu cần
  ];

  const renderItem = ({ item }) => (
    
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('Detail', { itemId: item.id, title: item.title, content: item.content,imageURL: item.imageURL })}
    >
      <ListItem bottomDivider>
        <Avatar source={{ uri: item.imageURL }} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.content}</ListItem.Subtitle>
        </ListItem.Content>
        <Icon name={item.icon} type='font-awesome' color='#517fa4' />
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container1}>
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff'}}
        centerComponent={{ text: 'Danh Sách Xe Khách', style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
        containerStyle={{ backgroundColor: '#4CAF50', justifyContent: 'space-around' }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
      />
    </View>
  );
};

const DetailScreen = ({ route, navigation }) => {
  const { itemId, title, content, imageURL } = route.params;

  return (
    <ScrollView style={styles.detail}>
      <View style={{marginTop:20,marginHorizontal:20}}>
        <Text style={{fontSize:16,fontWeight:'bold'}}><FontAwesome5Icon name="bus" size={20} color="#517fa4" style={styles.icon} /> {title}</Text>
        
      </View>
      <View style={{width:500,height:200}}>
        <Image source={{ uri: imageURL }} style={{width:300,height:200,marginLeft:50,marginTop:20,marginBottom:10}} />
      </View>
      <View style={{marginTop:40,marginHorizontal:20}}>
        <Text style={{fontSize:24,marginBottom:16,fontWeight:'bold',textAlign:'center'}}>
       
             Các tuyến đi
        </Text>
        <View style={{height:500}}>
          {/* Use navigation.navigate instead of navigateToPage */}
          <TouchableOpacity onPress={() => navigation.navigate('TuyenQuangList')}>
            <View style={styles.listAddress}>
              <Text style={styles.listText}><Icon name='square' type="font-awesome"  />  Hà Nội - Tuyên Quang</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('VinhPhuc')}>
            <View style={styles.listAddress}>
              <Text style={styles.listText}><Icon name='square' type="font-awesome"  />  Hà Nội - Vĩnh Phúc</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('YenBai')}>
            <View style={styles.listAddress}>
              <Text style={styles.listText}><Icon name='square' type="font-awesome"  />  Hà Nội - Yên Bái</Text>
            </View>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('YenBai')}>
            <View style={styles.listAddress}>
              <Text style={styles.listText}><Icon name='square' type="font-awesome"  />  Hà Nội - Hà Giang</Text>
            </View>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('YenBai')}>
            <View style={styles.listAddress}>
              <Text style={styles.listText}><Icon name='square' type="font-awesome"  />  Tuyên Quang - Thanh Hóa</Text>
            </View>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('YenBai')}>
            <View style={styles.listAddress}>
              <Text style={styles.listText}><Icon name='square' type="font-awesome"  />  Hà Giang - Cao Bằng</Text>
            </View>
          </TouchableOpacity>
        
        
        </View>
      </View>
      {/* Add more details as needed */}
    </ScrollView>
  );
};





const DangKyScreen = ({ navigation }) => {
  // Thêm mã cho trang đăng ký ở đây

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        alert('Mật khẩu nhập lại không khớp.');
        return;
      }
  
      global.username = username;
      global.password = password;
      // Navigate back to the login screen after successful registratio
      alert("Đăng ký thành công!");
      navigation.navigate('Login');
    } catch (error) {
      alert('Lỗi khi đăng kí thông tin tài khoản:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: 'https://thietkelogo.vn/wp-content/uploads/2016/02/logo-dep.png' }} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
         
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên đăng nhập:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
         
        />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mật khẩu:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nhập lại mật khẩu:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
        <Text style={styles.loginButtonText}>Đăng Ký</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="TuyenQuangList" component={TuyenQuangScreen} />
        <Stack.Screen name="VinhPhuc" component={VinhPhucScreen} />
        <Stack.Screen name="YenBai" component={YenBaiScreen} />
        <Stack.Screen name="ChonChuyen" component={ChonChuyenScreen} />
        <Stack.Screen name="DangKy" component={DangKyScreen} /> 
        <Stack.Screen name="ThanhToanBangThe" component={ThanhToanBangTheScreen} /> 
        <Stack.Screen name="ChuyenDi1" component={ChuyenDi1Screen} /> 
        <Stack.Screen name="ChuyenDi2" component={ChuyenDi2Screen} /> 
        <Stack.Screen name="ChuyenDi3" component={ChuyenDi3Screen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container1:{
    flex: 1,
    backgroundColor:'#e7feff'
  },
  container: {
    flex:1,
    paddingTop:50,
    padding: 16,
    backgroundColor:'#e7feff'
  },
  detail:{
    backgroundColor:'#e7feff',
    height:'auto'
  },
  image:{
    justifyContent:'center',
    alignItems:'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 32,
    borderRadius: 75,
  },
  inputContainer: {
    marginBottom: 16,
   
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor:'#fff',
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 12,
    borderRadius: 8,
    color:'#000',
    
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon:{
    marginRight:6
  },
  listContainer: {
    width: '100%',
  },
  listItem: {
    padding: 16,
    border: 1,
    borderColor: '#ccc',
    borderWidth:1,
    borderRadius:16,
    marginHorizontal:10,
    backgroundColor:'#fff',
    marginTop:12
  },
  
  listAddress:{
    borderColor:'#ccc',
    borderWidth:2,
    marginBottom:20,
    borderRadius:10,
    
  },
  listText:{
    backgroundColor:'#fff',
    padding:10,
    fontSize:16
  },
  DangKyButton:{
    backgroundColor:'#eee',
    borderRadius:8,
    marginTop:16
  }
 
});