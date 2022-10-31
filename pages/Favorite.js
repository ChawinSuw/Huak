import { useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert, Modal, Button } from 'react-native';
import DoubleClick from "react-native-double-click-instagram";

const Favorite = ({ route }) => {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 2000);
  };

  if (JSON.stringify(route.params) !== undefined) {
    route.params = undefined;
    showModal();
  }

  //wวกที่ทำ firebase ให้ getData แล้วยัดเข้า item น่าจะได้เป็น json 
  //ทำข้อมูลให้เหมือนที่ทำไว้ด้วย ถ้าไม่อยากงานงอก555
  //purse ให้เรียบร้อย ไม่ต้องแก้อะไร ถ้าได้มันจะขึ้นรูปเอง
  let item = [
    {
      'id': 1,
      'image': require('../img/frog.jpg'),
      'like': useState(false),
    },
    {
      'id': 2,
      'image': require('../img/frog1.jpg'),
      'like': useState(false),
    },
  ];

  const renderPhoto = () => {
    let type = [];

    item.map((i) => {
      type.push(
        <View
        key={i.id}>
          <DoubleClick
            icon
            delay={300}
            timeout={1000}
            doubleClick={() => {
              var setlike = i.like[1];
              setlike(true);
            }}
          >
            <View>
              <Image style={styles.timeline}
                source={i.image} />
            </View>
          </DoubleClick>
          <TouchableOpacity
          style={styles.bottomFrog}
          onPress = {()=>{
            var setlike = i.like[1];
            setlike(true);}}
          >
          <Image style={styles.bottomFrog}
            source={i.like[0] ? require('../img/frogIc2.png') : require('../img/frogIc1.png')} />
          </TouchableOpacity>
        </View>
      );
    });
    return type
  }

 return (
    <View style={styles.container} >
      <Modal visible={modalOpen} transparent={true}>
        <View style={styles.main}>
          <View>
            <Image source={require('../img/frogPop.png')}
              style={styles.frogPop}
            />
            <Text>Success!</Text>
          </View>
        </View>
      </Modal>

      <ScrollView>
        {/* <Button
              title='open'
              size={24}
              onPress={() => showModal()}></Button> */}
        {renderPhoto()}
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTask: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 60,
    width: 60,
    backgroundColor: '#003300',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 5
    }
  },
  timeline: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 350,
    marginTop: 12,
    borderRadius: 20
  },
  bottomFrog: {
    marginTop: 12,
    width: 35,
    height: 35,
    bottom: 10,
    left: 10,
  },
  main: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#FFFACDaa', 
    marginHorizontal: '20%', 
    marginVertical: '85%', 
    borderRadius: 20
  },
  frogPop: {
    height: 40, 
    width: 40, 
    alignItems: 'center', 
    justifyContent:'center'
  }
});

export default Favorite