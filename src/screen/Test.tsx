import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import Speedometer from 'react-native-speedometer-chart';
import {Switch} from '@rneui/themed';
import {useState, useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearProgress, Dialog, Button} from '@rneui/themed';
import useStudy from '../component/useStudy';

const Test = () => {
  const pickerRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [
    datas,
    tests,
    modalVisible,
    setModalVisible,
    getInf,
    setGetInf,
    setDatas,
    shuffle,
    result,
    setResult,
  ] = useStudy();
  const [history, setHistory] = useState([]);
  const [linear, setLinear] = useState(0);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState({visible: false, ans: undefined});
  console.log(getInf);
  const toggleDialog1 = () => {
    setVisible1(!visible1);
    setResult(result => {
      return {...result, correct: result.correct + 1};
    });
    nextSlide();
    setLinear(linear => linear + 1 / tests.length);
    setGetInf(getInf => {
      return {...getInf, index: getInf.index + 1};
    });
  };
  const toggleDialog2 = question => {
    setVisible2(visible2 => {
      return {...visible2, visible: !visible2.visible, ans: undefined};
    });
    setResult(result => {
      return {...result, wrong: result.wrong + 1};
    });
    nextSlide();
    setLinear(linear => linear + 1 / tests.length);
    setGetInf(getInf => {
      return {...getInf, index: getInf.index + 1};
    });
  };
  const slideLengh = tests.length;
  const nextSlide = () => {
    currentSlide <= slideLengh - 1 && setCurrentSlide(currentSlide + 1);
  };
  const checkResults = (ans1, ans2, question) => {
    console.log(ans1, ans2);
    if (getInf.check) {
      if (ans1 === ans2) {
        setVisible1(!visible1);
        setHistory(history => {
          return [
            ...history,
            {question: question, ans: ans2, ansChoice: ans1, check: true},
          ];
        });
      } else {
        setVisible2(visible2 => {
          return {...visible2, visible: !visible2.visible, ans: ans1};
        });
        setHistory(history => {
          return [
            ...history,
            {question: question, ans: ans2, ansChoice: ans1, check: false},
          ];
        });
      }
    } else {
      if (ans1 === ans2) {
        setResult(result => {
          return {...result, correct: result.correct + 1};
        });
        nextSlide();
        setLinear(linear => linear + 1 / tests.length);
        setGetInf(getInf => {
          return {...getInf, index: getInf.index + 1};
        });
        setHistory(history => {
          return [
            ...history,
            {question: question, ans: ans2, ansChoice: ans1, check: true},
          ];
        });
      } else {
        setResult(result => {
          return {...result, wrong: result.wrong + 1};
        });
        nextSlide();
        setLinear(linear => linear + 1 / tests.length);
        setGetInf(getInf => {
          return {...getInf, index: getInf.index + 1};
        });
        setHistory(history => {
          return [
            ...history,
            {question: question, ans: ans2, ansChoice: ans1, check: false},
          ];
        });
      }
    }
  };
  console.log(linear);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {backgroundColor: '#0A092D'}]}>
            <View style={[styles.header, {marginLeft: 20, marginRight: 20}]}>
              <Icon name="close" color="white" size={30} marginTop={30} />
            </View>
            <Button
              title="Bắt đầu làm kiểm tra"
              buttonStyle={{
                backgroundColor: '#4654F6',
                borderRadius: 7,
              }}
              containerStyle={{
                width: '85%',
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
                setDatas(shuffle(datas).slice(0, getInf.ansLenght));
              }}
            />
            <Text style={{color: 'white', marginLeft: 30, marginTop: 50}}>
              CHUNG
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 30,
                  marginTop: 15,
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Số câu hỏi{' '}
              </Text>
              <Picker
                style={{backgroundColor: 'white', width: '30%'}}
                ref={pickerRef}
                selectedValue={getInf.ansLenght}
                onValueChange={(itemValue, itemIndex) =>
                  setGetInf(getInf => {
                    return {...getInf, ansLenght: itemValue};
                  })
                }>
                {datas.map((data, index) => {
                  let num = index + 1;
                  return (
                    num !== 1 && (
                      <Picker.Item label={num.toString()} value={index + 1} />
                    )
                  );
                })}
              </Picker>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 30,
                  marginTop: 15,
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Hiển thị ngay đáp án
              </Text>
              <Switch
                style={{marginTop: 20}}
                value={getInf.check}
                onValueChange={value => setGetInf({...getInf, check: value})}
                color={'#4654F6'}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={{}}>
        <View
          style={{
            marginTop: 30,
            marginLeft: -30,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Icon name="close" color="white" size={30} />
          <Text style={styles.textHeader}>
            {getInf.index}/{getInf.ansLenght}
          </Text>
          <Text></Text>
        </View>
        <LinearProgress
          style={{marginVertical: 10}}
          value={linear}
          variant="determinate"
          color="#596280"
          animation={50}
        />
        {tests.map(
          (test, index) =>
            index === currentSlide && (
              <>
                <View style={{marginLeft: 30, marginRight: 30}}>
                  <View style={{marginTop: 90, marginBottom: 90}}>
                    <Text style={[styles.textHeader, {fontSize: 25}]}>
                      {test.question}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor: '#5A627D',
                      borderRadius: 7,
                    }}
                    onPress={() =>
                      checkResults(test.ans1, test.ans, test.question)
                    }>
                    <View
                      style={{marginTop: 20, marginBottom: 20, marginLeft: 10}}>
                      <Text style={styles.textHeader}>{test.ans1}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor: '#5A627D',
                      borderRadius: 7,
                      marginTop: 10,
                    }}
                    onPress={() =>
                      checkResults(test.ans2, test.ans, test.question)
                    }>
                    <View
                      style={{marginTop: 20, marginBottom: 20, marginLeft: 10}}>
                      <Text style={styles.textHeader}>{test.ans2}</Text>
                    </View>
                  </TouchableOpacity>
                  {test.ans3 && (
                    <TouchableOpacity
                      style={{
                        width: '100%',
                        borderWidth: 1,
                        borderColor: '#5A627D',
                        borderRadius: 7,
                        marginTop: 10,
                      }}
                      onPress={() =>
                        checkResults(test.ans3, test.ans, test.question)
                      }>
                      <View
                        style={{
                          marginTop: 20,
                          marginBottom: 20,
                          marginLeft: 10,
                        }}>
                        <Text style={styles.textHeader}>{test.ans3}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  {test.ans4 && (
                    <TouchableOpacity
                      style={{
                        width: '100%',
                        borderWidth: 1,
                        borderColor: '#5A627D',
                        borderRadius: 7,
                        marginTop: 10,
                      }}
                      onPress={() =>
                        checkResults(test.ans4, test.ans, test.question)
                      }>
                      <View
                        style={{
                          marginTop: 20,
                          marginBottom: 20,
                          marginLeft: 10,
                        }}>
                        <Text style={styles.textHeader}>{test.ans4}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
                <Dialog
                  isVisible={visible1}
                  onBackdropPress={toggleDialog1}
                  overlayStyle={{borderRadius: 10}}>
                  <Dialog.Title
                    title="ĐÚNG. TUYỆT VỜI !!!"
                    titleStyle={{color: 'green'}}
                  />
                  <Text
                    style={[
                      styles.textQuestion,
                      {color: 'black', marginLeft: 0},
                    ]}>
                    {test.question}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '700',
                      marginTop: 20,
                    }}>
                    ĐÁP ÁN ĐÚNG:
                  </Text>
                  <Text
                    style={[
                      styles.textQuestion,
                      {color: 'black', marginLeft: 0},
                    ]}>
                    {test.ans}
                  </Text>
                  <Dialog.Actions>
                    <Dialog.Button title="Tiếp tục" onPress={toggleDialog1} />
                  </Dialog.Actions>
                </Dialog>
                <Dialog
                  isVisible={visible2.visible}
                  onBackdropPress={toggleDialog2}
                  overlayStyle={{borderRadius: 10}}>
                  <Dialog.Title
                    title="HỌC LẠI THUẬT NGỮ NÀY !!!"
                    titleStyle={{color: 'red'}}
                  />
                  <Text
                    style={[
                      styles.textQuestion,
                      {color: 'black', marginLeft: 0},
                    ]}>
                    {test.question}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '700',
                      marginTop: 20,
                      color: 'green',
                    }}>
                    ĐÁP ÁN ĐÚNG:
                  </Text>
                  <Text
                    style={[
                      styles.textQuestion,
                      {color: 'black', marginLeft: 0},
                    ]}>
                    {test.ans}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'black',
                      fontWeight: '700',
                      marginTop: 20,
                      color: 'red',
                    }}>
                    ĐÁP ÁN ĐÃ CHỌN:
                  </Text>
                  <Text
                    style={[
                      styles.textQuestion,
                      {color: 'black', marginLeft: 0},
                    ]}>
                    {visible2.ans}
                  </Text>
                  <Dialog.Actions>
                    <Dialog.Button title="Tiếp tục" onPress={toggleDialog2} />
                  </Dialog.Actions>
                </Dialog>
              </>
            ),
        )}
      </View>
      {getInf.index === getInf.ansLenght && (
        <ScrollView style={{marginLeft: 30, marginRight: 30}}>
          <View style={{width: '80%'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '700',
              }}>
              {(result.correct * 100) / datas.length >= 80
                ? 'Xuất sắc! Có vẻ bạn nắm rất vững bài!'
                : 'Bạn cần cố gắng thêm!'}
            </Text>
          </View>
          <Text style={{color: 'white', marginTop: 30, fontWeight: '600'}}>
            Kết quả của bạn
          </Text>
          <View style={{marginTop: 20, marginBottom: 20, flexDirection: 'row'}}>
            <View style={{marginRight: 10}}>
              <Speedometer
                size={100}
                value={result.correct}
                totalValue={datas.length}
                internalColor="#82E5B8"
                outerColor="#C15E24"
                innerColor="#0A092D"
                showPercent
                percentStyle={{color: 'white', fontSize: 15, fontWeight: "500"}}
              />
            </View>
            <View style={{flex: 1}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#82E5B8', fontWeight: '600'}}>Đúng</Text>
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
                    style={{color: '#82E5B8', fontWeight: '600', fontSize: 10}}>
                    {result.correct}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <Text style={{color: '#C15E24', fontWeight: '600'}}>Sai</Text>
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
                    style={{color: '#C15E24', fontWeight: '600', fontSize: 10}}>
                    {result.wrong}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={{color: 'white', fontWeight: '600'}}>Bước tiếp theo</Text>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 100,
                backgroundColor: '#303753',
                borderRadius: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  margin: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Icon name="pa" color="white" size={30} />
                <View style={{justifyContent: 'space-between'}}>
                  <Text
                    style={{color: '#A9B1F9', fontWeight: '600', fontSize: 15}}>
                    Làm bài kiểm tra mới
                  </Text>
                  <View style={{width: '89%'}}>
                    <Text style={{color: 'white', fontWeight: '400'}}>
                      Đảm bảo rằng bản thực sự nắm chắc qua một bài kiểm tra
                      khác.
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Icon name="angle-right" color="#A9B1F9" size={30} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 100,
                backgroundColor: '#303753',
                borderRadius: 10,
                marginTop: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  margin: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Icon name="pa" color="white" size={30} />
                <View style={{justifyContent: 'space-between'}}>
                  <Text
                    style={{color: '#A9B1F9', fontWeight: '600', fontSize: 15}}>
                    Xem lại thẻ ghi nhớ
                  </Text>
                  <View style={{width: '89%'}}>
                    <Text style={{color: 'white', fontWeight: '400'}}>
                      Nghiên cứu thuật ngữ dưới dạng thẻ để cải thiện khả năng
                      ghi nhớ.
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Icon name="angle-right" color="#A9B1F9" size={30} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              Đáp án của bạn
            </Text>
          </View>
          {history.map((his, index) => {
            return (
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: '#303753',
                  }}>
                  <View style={{margin: 10}}>
                    <View style={{marginTop: 50}}>
                      <Text
                        style={{
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          color: 'white',
                          fontWeight: '600',
                          fontSize: 15,
                        }}>
                        {his.question}
                      </Text>
                    </View>
                    <View
                      style={{marginTop: 10, flex: 1, flexDirection: 'row'}}>
                      <View style={{width: his.check ? '100%' : '50%'}}>
                        <Icon
                          name="check"
                          color="#82E5B8"
                          size={30}
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                          }}
                        />
                        <Text
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            fontWeight: '600',
                            fontSize: 15,
                            color: 'white',
                          }}>
                          {his.ans}
                        </Text>
                      </View>
                      {!his.check && (
                        <View style={{width: '50%'}}>
                          <Icon
                            name="close"
                            color="#C15E24"
                            size={30}
                            style={{
                              textAlign: 'center',
                              textAlignVertical: 'center',
                            }}
                          />
                          <Text
                            style={{
                              textAlign: 'center',
                              textAlignVertical: 'center',
                              fontWeight: '600',
                              fontSize: 15,
                              color: 'white',
                            }}>
                            {his.ansChoice}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: his.check ? '#82E5B8' : '#C15E24',
                    width: '100%',
                  }}>
                  <View style={{margin: 10, flexDirection: 'row'}}>
                    <Icon
                      name={his.check ? 'check' : 'close'}
                      color="white"
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <Text
                      style={{fontWeight: '600', fontSize: 15, color: 'white'}}>
                      {his.check ? 'Đúng' : 'Sai'}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A092D',
  },
  textQuestion: {
    fontSize: 25,
    color: 'white',
    fontWeight: '800',
    marginLeft: 25,
  },
  question: {
    width: '100%',
    height: '45%',
    flexDirection: 'column-reverse',
    // backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 60,
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
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: '106%',

    backgroundColor: 'white',

    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Test;
