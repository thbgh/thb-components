```jsx
import moment from 'moment';
import { Button, Modal, Divider } from 'antd';

const getDataSource = async () => {};

const handleAdd = () => {
  console.log('add');
};
const handleDelete = (record) => {
  Modal.confirm({
    title: '确定要删除该项 ?',
    onOk: async () => {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const handleEdit = (record) => {
  console.log(record);
};
const tableProps = {
  tableName: '表格名称',
  tableColumns: [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at',
      render(text) {
        return text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '';
      },
    },
    {
      title: '更新时间',
      dataIndex: 'updated_at',
      key: 'updated_at',
      render(text) {
        return text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '';
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <>
          <Button size="small" onClick={() => handleEdit(record)} style={{ marginRight: 5 }}>
            修改
          </Button>
          <Button size="small" onClick={() => handleDelete(record)} danger>
            删除
          </Button>
        </>
      ),
    },
  ],
  dataSource: [
    {
      key: '1',
      id: '1',
      name: '吴彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
      created_at: 1652332123000, //13位时间戳
      updated_at: 1652330103000, //13位时间戳
    },
    {
      key: '2',
      id: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
      created_at: 1652332123000, //13位时间戳
      updated_at: 1652330103000, //13位时间戳
    },
  ],
  isLoading: false,
  total: 100,
  handleAdd,
};

<BaseTable {...tableProps} />;
```
