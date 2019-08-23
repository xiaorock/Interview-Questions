import React from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { GridContent } from '@ant-design/pro-layout';
import { Card } from 'antd';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
export default () => (
  <GridContent>
    <Card bordered={false}>

      <BraftEditor></BraftEditor>
    </Card>
  </GridContent>
);
