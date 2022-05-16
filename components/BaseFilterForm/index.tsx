import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Radio, DatePicker, Select } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
const { Option } = Select;

interface Item {
  name: string;
  nameCn: string;
  isRequired: boolean;
  type?: 'radio' | 'checkbox' | 'selector' | 'datePicker' | 'check' | 'input';
  selectItems?: any[];
}
interface Props {
  /**
   * 搜索项
   */
  // searchItems: Item[];
  searchItems: {
    name: string;
    nameCn: string;
    isRequired: boolean;
    type?: 'radio' | 'checkbox' | 'selector' | 'datePicker' | 'check' | 'input';
    selectItems?: any[];
  }[];
  /**
   * 点击搜索触发事件
   */
  handleSearch: Function;
  /**
   * 其它antd组件属性
   */
  [key: string]: any;
}

/**
 * BaseFilterForm 组件
 * 表单筛选项 展开显示最多10条,收起展示最多3条
 */

/**
 * [antd form](https://ant.design/components/form-cn/)
 */
const BaseFilterForm = (props: Props) => {
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);

  // To generate mock Form.Item
  const getFields = () => {
    let { searchItems: items } = props;
    const count = expand ? 10 : 3; // 展开显示最多10条,收起展示最多3条
    let getFieldType = ({ type, selectItems, nameCn }: Item) => {
      switch (type) {
        case 'radio':
          return (
            <Radio.Group>
              {selectItems.map((it) => (
                <Radio value={it.value} key={it.value}>
                  {it.name}
                </Radio>
              ))}
            </Radio.Group>
          );
        case 'datePicker':
          return <DatePicker placeholder={'请选择' + nameCn} />;
        case 'selector':
          return (
            <Select placeholder={'请选择' + nameCn}>
              {selectItems.map((it) => (
                <Option value={it.value} key={it.value}>
                  {it.name}
                </Option>
              ))}
            </Select>
          );
        default:
          return <Input placeholder={'请输入' + nameCn} />;
      }
    };
    return items.map((item, i) => (
      <Col span={8} key={item.name} style={{ display: i < count ? 'block' : 'none' }}>
        <Form.Item
          label={item.nameCn}
          name={item.name}
          rules={[
            {
              required: item.isRequired,
              message: `请输入${item.nameCn} !`,
            },
          ]}
        >
          {getFieldType(item)}
        </Form.Item>
      </Col>
    ));
  };

  const onFinish = (values: any) => {
    console.log('%c [ values ]-81', 'font-size:14px; background:pink; color:#bf2c9f;', values);
    if (values.date) {
      values.date = Date.parse(values.date);
    }
    props.handleSearch(values);
  };

  const handleReset = () => {
    form.resetFields();
    // props.handleSearch();
  };

  const toggle = () => {
    setExpand(!expand);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Row justify="space-between" align="middle">
        {getFields()}
      </Row>
      <Row justify="end" align="middle">
        <Col span={3}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item>
            <Button onClick={handleReset}>清除</Button>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item>
            <div style={{ fontSize: 12, color: 'green' }} onClick={toggle}>
              {expand ? (
                <span>
                  收起筛选 <UpOutlined />
                </span>
              ) : (
                <span>
                  更多筛选 <DownOutlined />
                </span>
              )}
            </div>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
BaseFilterForm.defaultProps = {
  searchItems: [{ name: 'name', nameCn: '名称', isRequired: true }],
  handleSearch: (values) => {},
};
export default BaseFilterForm;
