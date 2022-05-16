import React, { useState } from 'react';
import { Table, Button, Divider, Form, Card, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Column {
  title: string;
  dataIndex: string;
  key: string;
}
interface DataSourceItem {
  key: string;
  name: string;
  [key: string]: any;
}
interface Props {
  /**
   * 表格名称
   */
  tableName?: string;
  /**
   * 表头项
   */
  // tableColumns: Column[];
  tableColumns: {
    title: string;
    dataIndex: string;
    key: string;
  }[];
  /**
   * 表格数据
   */
  // dataSource: DataSourceItem[];
  dataSource: {
    key: string;
    name: string;
    [key: string]: any;
  }[];
  isLoading: boolean;
  total?: number;
  handleAdd?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * 其它antd组件属性
   */
  [key: string]: any;
}

/**
 * [antd table](https://ant.design/components/table-cn/)
 */

const BaseTable = (props: Props) => {
  const pagination = {
    total: props.total,
    showTotal: (total: number) => `共 ${total} 条`,
    defaultPageSize: 10,
    // size: 'small',
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50'],
  };
  return (
    <Card title={props.tableName && `${props.tableName} 列表`}>
      <Button type="primary" icon={<PlusOutlined />} size="small" onClick={props.handleAdd}>
        创建
      </Button>
      <br />
      <br />
      <Table
        columns={props.tableColumns}
        dataSource={props.dataSource}
        rowKey={(record) => record.id}
        pagination={pagination}
        loading={props.isLoading}
        size="small"
        {...props}
      />
    </Card>
  );
};

BaseTable.defaultProps = {
  tableName: '表格名称',
  isLoading: false,
  dataSource: [],
};

export default BaseTable;
