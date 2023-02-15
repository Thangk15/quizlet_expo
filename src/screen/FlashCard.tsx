import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';

import {LinearProgress} from '@rneui/themed';
import useTinderCard from '../component/useFlashCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import Speedometer from 'react-native-speedometer-chart';
function FlashCard() {
  const [
    data,
    _panResponder,
    animation,
    scale,
    opacity,
    dataHeader,
    checkPlay,
    setDataHeader,
    handlePlay,
    hanldeUndo,
  ] = useTinderCard([
    {
      // image: Bobo,
      id: 1,
      name: 'Bobo',
      animal: 'Cat',
    },
    {
      // image: Dolly,
      id: 2,
      name: 'Dolly',
      animal: 'Dog',
    },
    {
      // image: Giraffe,
      id: 3,
      name: 'Milo',
      animal: 'Giraffe',
    },
    {
      // image: Goat,
      id: 4,
      name: 'Ollie',
      animal: 'Goat',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="close" color="white" size={30} marginTop={30} />
        <Text
          style={[
            styles.textHeader,
            {marginTop: 30, marginLeft: 50, marginRight: 50},
          ]}>
          {dataHeader.indexFashCard}/{dataHeader.lenghtData}
        </Text>
        <Icon name="cog" color="white" size={30} marginTop={30} />
      </View>
      <LinearProgress
        style={{marginVertical: 10}}
        value={dataHeader.linearProgress}
        variant="determinate"
        color="#596280"
        animation={50}
      />
      {dataHeader.indexFashCard !== dataHeader.lenghtData && (
        <View style={[styles.pointContainer, {marginBottom: 20}]}>
          <View
            style={[
              styles.pointBox,
              {
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderColor: '#B74D05',
                borderLeftWidth: 0,
              },
            ]}>
            <Text
              style={[
                styles.textHeader,
                {marginRight: 20, marginTop: 5, color: '#B74D05'},
              ]}>
              {dataHeader.indexStudying}
            </Text>
          </View>
          <View
            style={[
              styles.pointBox,
              {
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                borderColor: '#1CAE79',
                paddingLeft: 20,
                borderRightWidth: 0,
              },
            ]}>
            <Text
              style={[
                styles.textHeader,
                {marginRight: 30, marginTop: 5, color: '#1CAE79'},
              ]}>
              {dataHeader.indexStudied}
            </Text>
          </View>
        </View>
      )}
      {data
        .slice(0, 2)
        .reverse()
        .map((item, index, items) => {
          const isLastItem = index === items.length - 1;
          const panHandlers = isLastItem ? {..._panResponder.panHandlers} : {};
          const isSecondToLast = index === items.length - 2;
          const rotate = animation.x.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: ['-30deg', '0deg', '30deg'],
            extrapolate: 'clamp',
          });

          const animatedCardStyles = {
            transform: [{rotate}, ...animation.getTranslateTransform()],
            opacity,
          };

          const cardStyle = isLastItem ? animatedCardStyles : undefined;
          const nextStyle = isSecondToLast
            ? {transform: [{scale: scale}], borderRadius: 5}
            : undefined;
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Animated.View
                {...panHandlers}
                style={[styles.card, cardStyle, nextStyle]}
                key={item.id}>
                <Icon name="volume-down" color="white" size={30} margin={20} />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 40, color: 'white', fontWeight: "500"}}>
                    {item.name}
                  </Text>
                </View>
              </Animated.View>
            </View>
          );
        })}
      {dataHeader.indexFashCard !== dataHeader.lenghtData && (
        <View
          style={{
            height: '75%',
            flexDirection: 'column-reverse',
            position: 'relative',
            zIndex: -1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 40,
              paddingRight: 40,
            }}>
            <Icon
              name="undo"
              color="white"
              size={30}
              marginTop={50}
              onPress={() => hanldeUndo()}
            />
            {checkPlay ? (
              <Icon
                name="play"
                color="white"
                size={30}
                marginTop={50}
                onPress={() => handlePlay()}
              />
            ) : (
              <Icon name="pause" color="white" size={30} marginTop={50} />
            )}
          </View>
        </View>
      )}
      {dataHeader.indexFashCard === dataHeader.lenghtData && (
        <View style={{marginLeft: 30, marginRight: 30}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '75%'}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: "700"}}>
                Bạn đang làm rất tuyệt! Hãy tiếp tục tập trung vào các thuật ngữ
                khó.
              </Text>
            </View>
            <Image
              style={{width: '15%', height: '100%'}}
              source={require('./Birthday.png')}
            />
          </View>
          <View style={{marginTop: 50, marginBottom: 50, flexDirection: 'row'}}>
            <View style={{marginRight: 20}}>
              <Speedometer
                size={150}
                value={dataHeader.indexStudied}
                totalValue={dataHeader.lenghtData}
                internalColor="#82E5B8"
                outerColor="#C15E24"
                innerColor="#0A092D"
                showPercent
                percentStyle={{color: 'white', fontSize: 20, fontWeight: "500"}}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: "700",
                    color: '#82E5B8',
                  }}>
                  Biết
                </Text>
                <View
                  style={{
                    borderColor: '#82E5B8',
                    borderWidth: 1,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 1,
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{color: '#82E5B8', fontWeight: "600", fontSize: 10}}>
                   {dataHeader.indexStudied}
                  </Text>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: "700",
                    color: '#C15E24',
                  }}>
                  Đang học
                </Text>
                <View
                  style={{
                    borderColor: '#C15E24',
                    borderWidth: 1,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 1,
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{color: '#C15E24', fontWeight: "600", fontSize: 10}}>
                   {dataHeader.indexStudying}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={hanldeUndo}>
            <Text
              style={{
                color: '#4654F6',
                fontWeight: "600",
                fontSize: 15,
                textAlign: 'center',
              }}>
              Quay lại thuật ngữ cuối cùng
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              height: '55%',
              justifyContent: 'flex-end',
            }}>
            <View style={{backgroundColor: '#4654F6', borderRadius: 7}}>
              <TouchableOpacity style={{margin: 20}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: "700",
                    fontSize: 15,
                  }}>
                  Làm bài kiểm tra thử
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderRadius: 7,
                marginTop: 10,
                borderColor: '#596280',
                borderWidth: 2,
              }}>
              <TouchableOpacity style={{margin: 20}} onPress={handlePlay}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: "700",
                    fontSize: 15,
                  }}>
                  Đặt lại thẻ ghi nhớ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A092D',
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'white',
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  pointContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pointBox: {
    paddingLeft: 30,
    height: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  card: {
    width: '85%',
    height: 520,
    backgroundColor: '#2F3856',
    position: 'absolute',
    borderRadius: 20,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      web: {
        boxShadow: '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
      },
    }),
    borderWidth: 1,
    borderColor: '#2F3856',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    padding: 10,
  },
  nameText: {
    fontSize: 16,
  },
  animalText: {
    fontSize: 14,
    color: '#757575',
    paddingTop: 5,
  },
});

export default FlashCard;
