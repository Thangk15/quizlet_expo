import { useEffect, useState } from "react";

const arr = [
  { id: 1, term: "dog", definition: "cho" },
  { id: 2, term: "cat", definition: "meo" },
  { id: 3, term: "rabit", definition: "tho" },
  { id: 4, term: "cow", definition: "bo" },
  { id: 5, term: "pig", definition: "heo" },
  { id: 6, term: "snack", definition: "ran" },
];

const useStudy = () => {
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  const [result, setResult] = useState({ correct: 0, wrong: 0 });
  const [modalVisible, setModalVisible] = useState(true);
  const [datas, setDatas] = useState(shuffle(arr));
  const [tests, setTests] = useState([]);
  const [getInf, setGetInf] = useState({
    ansLenght: datas.length,
    check: true,
    index: 0,
  });
  console.log(tests, "test");
  const createMultipleChoice = (type1, type2, type) => {
    let tempArr = shuffle(arr).filter((item) => {
      return type !== 1 ? item.term !== type2 : item.definition !== type2;
    });
    let randomAns =
      datas.lenght >= 4
        ? Math.floor(Math.random() * 4) + 1
        : datas.lenght === 3
        ? Math.floor(Math.random() * 3) + 1
        : Math.floor(Math.random() * 2) + 1;

    switch (randomAns) {
      case 1:
        setTests((tests) => [
          ...tests,
          {
            question: type1,
            ans1: type2,
            ans2: type === 1 ? tempArr[0]?.definition : tempArr[0]?.term,
            ans3: type === 1 ? tempArr[1]?.definition : tempArr[1]?.term,
            ans4: type === 1 ? tempArr[2]?.definition : tempArr[2]?.term,
            ans: type2,
          },
        ]);
        break;
      case 2:
        setTests((tests) => [
          ...tests,
          {
            question: type1,
            ans1: type === 1 ? tempArr[0]?.definition : tempArr[0]?.term,
            ans2: type2,
            ans3: type === 1 ? tempArr[1]?.definition : tempArr[1]?.term,
            ans4: type === 1 ? tempArr[2]?.definition : tempArr[2]?.term,
            ans: type2,
          },
        ]);
        break;
      case 3:
        setTests((tests) => [
          ...tests,
          {
            question: type1,
            ans1: type === 1 ? tempArr[0]?.definition : tempArr[0]?.term,
            ans2: type === 1 ? tempArr[1]?.definition : tempArr[1]?.term,
            ans3: type2,
            ans4: type === 1 ? tempArr[2]?.definition : tempArr[2]?.term,
            ans: type2,
          },
        ]);
        break;
      case 4:
        setTests((tests) => [
          ...tests,
          {
            question: type1,
            ans1: type === 1 ? tempArr[0]?.definition : tempArr[0]?.term,
            ans2: type === 1 ? tempArr[1]?.definition : tempArr[1]?.term,
            ans3: type === 1 ? tempArr[2]?.definition : tempArr[2]?.term,
            ans4: type2,
            ans: type2,
          },
        ]);
        break;
    }
  };
  useEffect(() => {
    if (!modalVisible) {
      let type = {
        mod: datas.length % 2,
        div: (datas.length - (datas.length % 2)) / 2,
      };
      console.log(type);
      console.log(datas.length, "ggfgf");
      if (datas.length === 3) {
        for (let i = 0; i < 2; i++)
          createMultipleChoice(datas[i].term, datas[i].definition, 1);
        for (let i = 2; i < 3; i++)
          createMultipleChoice(datas[i].definition, datas[i].term, 2);
      } else if (datas.length === 2) {
        console.log("hfgfdf");
        for (let i = 0; i < 1; i++)
          createMultipleChoice(datas[i].term, datas[i].definition, 1);
        for (let i = 1; i < 2; i++)
          createMultipleChoice(datas[i].definition, datas[i].term, 2);
      } else {
        if (type.mod === 0) {
          for (let i = 0; i < type.div; i++)
            createMultipleChoice(datas[i].term, datas[i].definition, 1);

          for (let i = type.div; i < datas.length; i++)
            createMultipleChoice(datas[i].definition, datas[i].term, 2);
        } else {
          for (let i = 0; i < type.div + type.mod; i++)
            createMultipleChoice(datas[i].term, datas[i].definition, 1);

          for (let i = type.div + type.mod; i < datas.length; i++)
            createMultipleChoice(datas[i].definition, datas[i].term, 2);
        }
      }
    }
  }, [modalVisible]);
  return [
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
  ];
};
export default useStudy;
