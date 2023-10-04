export interface MinorCategoryType {
  key: number
  name: string
  selected: boolean
}

const MinorCategoryDummyData: {
  [MajorCategoryKeyType: string]: MinorCategoryType[]
} = {
  '518': [
    {
      key: 0,
      name: '개발 전체',
      selected: false,
    },
    {
      key: 10110,
      name: '소프트웨어 엔지니어',
      selected: false,
    },
    {
      key: 873,
      name: '웹 개발자',
      selected: false,
    },
    {
      key: 518,
      name: '서버 개발자',
      selected: false,
    },
    {
      key: 511,
      name: '프론트엔드 개발자',
      selected: false,
    },
    {
      key: 530,
      name: '자바 개발자',
      selected: false,
    },
    {
      key: 510,
      name: 'C,C++ 개발자',
      selected: false,
    },
    {
      key: 524,
      name: '파이썬 개발자',
      selected: false,
    },
    {
      key: 513,
      name: '머신러닝 엔지니어',
      selected: false,
    },
    {
      key: 519,
      name: '게임 제작',
      selected: false,
    },
    {
      key: 517,
      name: 'HR',
      selected: false,
    },
    {
      key: 522,
      name: '제조·생산',
      selected: false,
    },
    {
      key: 10101,
      name: '교육',
      selected: false,
    },
  ],
}

export { MinorCategoryDummyData }
