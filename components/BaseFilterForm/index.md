```jsx
const searchItems = [
  { name: 'name', nameCn: '名称', isRequired: true },
  { name: 'email', nameCn: '邮箱', isRequired: false },
  {
    name: 'sex',
    nameCn: '性别',
    type: 'radio',
    selectItems: [
      { value: 0, name: '男' },
      { value: 1, name: '女' },
    ],
    isRequired: false,
  },
  { name: 'age', nameCn: '年龄', isRequired: false },
  { name: 'telephone', nameCn: '电话', isRequired: false },
  { name: 'date', nameCn: '日期', type: 'datePicker', isRequired: false },
  {
    name: 'level',
    nameCn: '等级',
    type: 'selector',
    selectItems: [
      { value: 0, name: '高' },
      { value: 1, name: '中' },
      { value: 2, name: '低' },
    ],
    isRequired: false,
  },
];
const handleSearch = (values) => {
  console.log(values);
};
<>
  <BaseFilterForm handleSearch={handleSearch} searchItems={searchItems} />
</>;
```
