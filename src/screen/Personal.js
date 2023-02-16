import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { ScrollView } from 'react-native-web';

const Avatar = 'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/avatar-anime-1.jpg?ssl=1'

const HOCPHAN=[
  {Name: 'hocphan1', SL: 1, Avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg', UserName: 'Sơn Trần'},
  {Name: 'hocphan2', SL: 1, Avt: Avatar, UserName: 'Tài Tài'},
  {Name: 'hocphan3', SL: 1, Avt: Avatar, UserName: 'Thắng Nguyễn'},
  {Name: 'hocphan3', SL: 1, Avt: Avatar, UserName: 'Sơn Trần'},
  {Name: 'hocphan3', SL: 1, Avt: Avatar, UserName: 'Tài Tài'},
  {Name: 'hocphan3', SL: 1, Avt: Avatar, UserName: 'Sơn Tần'}
]

const FOLDER=[
  {Name: 'folder1', Avt: Avatar, UserName: 'Sơn Trần'},
  {Name: 'folder2', Avt: Avatar, UserName: 'Sơn Trần'},
  {Name: 'folder3', Avt: Avatar, UserName: 'Thắng Nguyễn'},
  {Name: 'folder35', Avt: Avatar, UserName: 'Thắng Nguyễn'},
  {Name: 'folder4', Avt: Avatar, UserName: 'name'},
  {Name: 'folder5', Avt: Avatar, UserName: 'name'}
]

export default function Personal() {
  const [Page, setPage] = useState('HOC_PHAN');
  const [Content, setContent] = useState(HOCPHAN);

  // _onPressSetting = () => {
  //   Alert.alert("adfadfa")

  // }
  return (
    <View style={{height: '100%'}}>
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#2e3969'}}>
          <TouchableOpacity style={styles.ButtonSetting}><Text style={{textAlign: 'center'}}><Icon name="settings" size={30} color="white" style={styles.setting}/></Text></TouchableOpacity>
          <TouchableOpacity style={styles.ButtonSetting1}><Text style={styles.Upgrade}>Nâng Cấp</Text></TouchableOpacity>
        </View>

        <View style={{flex: 4, alignItems: 'center',  width: '100%', height: '100%'}}>
          <Image source={{uri: Avatar}} style={styles.Img}/>
          <Text style={styles.Name}>Sơn Trần</Text>

          <View style={{flex: 1, flexDirection: 'row', marginTop: 10, bottom: 0}}>
            <TouchableOpacity style={styles.ButtonContent1} 
            onPress ={()=>{setPage('HOC_PHAN'), setContent(HOCPHAN)}}
            disabled={Page === 'HOC_PHAN' ? true : false}>
              <Text style={styles.Title}>Các học phần</Text>
              {Page === 'HOC_PHAN' ? <View style={{position: 'absolute', height: 5, width: '100%', backgroundColor: '#546999', bottom: 0}}></View> : null}
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonContent2}
            onPress ={()=>{setPage('FOLDER'), setContent(FOLDER)}}
            disabled={Page === 'FOLDER' ? true : false}>
              <Text style={styles.Title}>Thư  mục</Text>
              {Page === 'FOLDER' ? <View style={{position: 'absolute', height: 5, width: '100%', backgroundColor: '#546999', bottom: 0}}></View> : null}
            </TouchableOpacity>
          </View>

        </View>
        {/* <Text>abc {} </Text> */}
        {/* <StatusBar style="auto" /> */}
      </View>
      
      <View style={{flex:7, backgroundColor: '#000044'}}>
      {Page === 'FOLDER' ? 
      <ScrollView>
        {Content.map((Contents, index) => {
          return(
            <TouchableOpacity key={index}
             style={{backgroundColor: '#2e3969', margin: 20, marginBottom: 0, borderRadius: 10, padding: 20, paddingTop: 10, height: 127}}>
                <Icon name='folder' size={25} color='white' style={{}}></Icon>

                <Text style={{color:'white', fontSize: 25, fontWeight: '700'}}>{Contents.Name}</Text>

                <View style={{flexDirection: 'row', paddingTop: 10}}>
                  <Image source={{uri: Contents.Avt}} style={styles.Hpimg}/>
                  <Text style={{color:'white',fontSize: 16,fontWeight: '500', textAlign: 'center', padding: 5, marginLeft: 5}}>{Contents.UserName}</Text>
                </View>
            </TouchableOpacity>
          )
        })}
  
        {Content.length == 0 ?
        <View style={{flexDirection: 'column', justifyContent: 'center', paddingTop: 240}}>
          <Icon name="folder" color="white" size={40} style={{textAlign: 'center'}}></Icon>
          <Text style={{fontSize: 22, textAlign: 'center', color: 'white', paddingTop: 5}}>Bạn chưa có thư mục nào.</Text>
        </View> 
        :
          null
        }
      </ScrollView> :
      <ScrollView>
        {Content.map((Contents, index) => {
          return(
          <TouchableOpacity key={index}
          style={{backgroundColor: '#2e3969', margin: 20, marginBottom: 0, borderRadius: 10, padding: 20, paddingTop: 10, height: 127, width: 350}}>
            <Text style={{color:'white', fontSize: 25, fontWeight: '700'}}>{Contents.Name}</Text>
            <Text style={{color:'white', fontSize: 18}}>{Contents.SL} Thuật ngữ</Text>
            <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image source={{uri: Contents.Avt}} style={styles.Hpimg}/>
            <Text style={{color:'white',fontSize: 16,fontWeight: '500', textAlign: 'center', padding: 5, marginLeft: 5}}>{Contents.UserName}</Text>
            </View>
          </TouchableOpacity>
          )
        })}
        {Content.length == 0 ?
          <View style={{flexDirection: 'column', justifyContent: 'center', paddingTop: 240}}>
            <Icon name="book-open" color="white" size={40} style={{textAlign: 'center'}}></Icon>
            <Text style={{fontSize: 22, textAlign: 'center', color: 'white', paddingTop: 5}}>Bạn chưa tạo học phần nào.</Text>
          </View> 
          :
            null
        }

      </ScrollView>}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#2e3969',
    height: '30%',
    // alignContent: 'center' ,
  },
  ButtonSetting: {
    color: 'red',
    marginTop: 30,
    marginLeft: '10%',
    height: 40,
    width:  40,
    backgroundColor: '#2e3969',
    justifyContent: 'center',
    // padding: '10%',
  },
  Upgrade: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    textAlign:'center',

  },
  ButtonSetting1: {
    // color: 'green',
    height: 40,
    width:  110,
    marginTop: 30,
    marginLeft: '47%',
    justifyContent: 'center',
    // alignContent: 'center' ,
    backgroundColor: '#2e3969',
  },
  Img: {
    width: 75,
    height: 75,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'green',
    
    // marginTop: -15,
    // alignContent: 'center'
    // textAlign: 'center',
  },
  Name: {
    marginTop: 5,
    fontSize: 25,
    color: 'white',
    flex: 1,
  },
  ButtonContent1: {
    width: '50%',
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  ButtonContent2: {
    width: '50%',
    // backgroundColor: 'blue',
    justifyContent: 'center',

  },
  Title: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
  Hpimg: {
    height: 30,
    width: 30,
    borderRadius: 20,
  }
});



{/* <TouchableOpacity key={index}
 style={{backgroundColor: 'green', margin: 20, marginBottom: 0, borderRadius: 10, padding: 15, paddingTop: 10}}>
  <Text style={{color:'white', fontSize: 20, fontWeight: '700'}}>{HOCPHANS.Name}</Text>
  <Text style={{color:'white'}}>{HOCPHANS.SL} Thuật ngữ</Text>
  <View style={{flexDirection: 'row', paddingTop: 10}}>
  <Image source={HOCPHANS.Avt} style={styles.Hpimg}/>
  <Text style={{color:'white', backgroundColor: 'red', textAlign: 'center', padding: 5, marginLeft: 5}}>{HOCPHANS.UserName}</Text>
  </View>
</TouchableOpacity> */}