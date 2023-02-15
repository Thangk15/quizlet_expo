import React, {useRef, useState, useEffect} from 'react';
import {Animated, PanResponder, Dimensions} from 'react-native';
import clamp from 'clamp';
const {width} = Dimensions.get('screen');

const SWIPE_THRESHOLD = 0.25 * width;

export default function useTinderCards(deck) {
  const [data, setData] = useState(deck);
  const [dataHeader, setDataHeader] = useState({
    indexFashCard: 0,
    indexStudying: 0,
    indexStudied: 0,
    lenghtData: data.length,
    linearProgress: 0,
    velocity: 0,
    dx: 0,
  });
  console.log(dataHeader);
  const [checkPlay, setCheckPlay] = useState(true);
  const [dataRead, setDataRead] = useState([]);
  console.log(dataRead);

  const animate = useRef(new Animated.Value(0));
  const animation = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  const transitionNext = function () {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setData(data => {
        return data.slice(1);
      });

      // setDataRead(dataRead => [...dataRead, data[0]]);
      // console.log([...dataRead, data[0]]);
    });
  };

  useEffect(() => {
    scale.setValue(0.9);
    opacity.setValue(1);
    animation.setValue({x: 0, y: 0});
  }, [data]);
  useEffect(() => {
    if (dataHeader.velocity !== 0) {
      if (dataHeader.velocity > 0) {
        dataRead.push({
          ...data[0],
          checkStudy: true,
        });
        setDataRead(dataRead);
      } else {
        dataRead.push({
          ...data[0],
          checkStudy: false,
        });
        setDataRead(dataRead);
      }
    }
  }, [dataHeader.dx]);
  const _panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        animation.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (e, {dx, dy, vx, vy}) => {
        let velocity;
        if (vx >= 0) {
          velocity = clamp(vx, 4, 5);
        } else if (vx < 0) {
          velocity = clamp(Math.abs(vx), 4, 5) * -1;
        }
        if (Math.abs(dx) > SWIPE_THRESHOLD) {
          Animated.parallel([
            Animated.decay(animation, {
              velocity: {x: velocity, y: vy},
              deceleration: 0.99,
              useNativeDriver: false,
            }),
            Animated.spring(scale, {
              toValue: 1,
              friction: 4,
              useNativeDriver: false,
            }),
          ]).start(transitionNext);
          setDataHeader(dataHeader => {
            let tempIndexFashCard = dataHeader.indexFashCard + 1;
            let tempLinearProgress =
              dataHeader.linearProgress + 1 / dataHeader.lenghtData;
            return {
              ...dataHeader,
              indexFashCard: tempIndexFashCard,
              linearProgress: tempLinearProgress,
            };
          });

          if (velocity > 0) {
            setDataHeader(dataHeader => {
              return {
                ...dataHeader,
                indexStudied: dataHeader.indexStudied + 1,
                velocity: velocity,
                dx: dx,
              };
            });
          } else {
            setDataHeader(dataHeader => {
              return {
                ...dataHeader,
                indexStudying: dataHeader.indexStudying + 1,
                velocity: velocity,
                dx: dx,
              };
            });
          }
        } else {
          Animated.spring(animation, {
            toValue: {x: 0, y: 0},
            friction: 4,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;
  const hanldeUndo = () => {
    if (dataRead.length !== 0) {
      data.unshift(dataRead[dataRead.length - 1]);
      setData(data);
      if (dataRead[dataRead.length - 1].checkStudy) {
        setDataHeader(dataHeader => {
          return {
            ...dataHeader,
            indexStudied: dataHeader.indexStudied - 1,
            indexFashCard: dataHeader.indexFashCard - 1,
            linearProgress:
              dataHeader.linearProgress - 1 / dataHeader.lenghtData,
          };
        });
      } else {
        setDataHeader(dataHeader => {
          return {
            ...dataHeader,
            indexStudying: dataHeader.indexStudying - 1,
            indexFashCard: dataHeader.indexFashCard - 1,
            linearProgress:
              dataHeader.linearProgress - 1 / dataHeader.lenghtData,
          };
        });
      }
      dataRead.pop();
      setDataRead(dataRead);
    }
  };
  const handlePlay = () => {
    console.log('sdhfvhdsv');
    if (data.length !== 0) {
      setCheckPlay(false);

      const interval = setInterval(() => {
        setDataHeader(dataHeader => {
          let tempIndexFashCard = dataHeader.indexFashCard + 1;
          let tempLinearProgress =
            dataHeader.linearProgress + 1 / dataHeader.lenghtData;
          let tempIndexStudied = dataHeader.indexStudied + 1;
          return {
            ...dataHeader,
            indexFashCard: tempIndexFashCard,
            linearProgress: tempLinearProgress,
            indexStudied: tempIndexStudied,
            velocity: 4,
            dx: dataHeader.dx + 1,
          };
        });
        setData(data => {
          return data.slice(1);
        });
      }, 2000);
      setTimeout(() => {
        setCheckPlay(true);
        clearTimeout(interval);
      }, 2000 * data.length);
    } else {
      setData(deck);
      setDataRead([]);
      setDataHeader({
        indexFashCard: 0,
        indexStudying: 0,
        indexStudied: 0,
        lenghtData: deck.length,
        linearProgress: 0,
        velocity: 0,
        dx: 0,
      });
    }
  };
  return [
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
  ];
}
