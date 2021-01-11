import { Button, Input, message } from 'antd';
import ProCard from '@ant-design/pro-card';
import { useIntl } from 'umi';
import React, { useState } from 'react';

const { TextArea } = Input;

const JsonFormat: React.FC = () => {
  const intl = useIntl();
  const [content, setContent] = useState('');

  return (
    <ProCard style={{ height: 500 }} key={'json'}>
      <TextArea
        rows={15}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />

      <Button
        type="primary"
        style={{ marginTop: '10px' }}
        onClick={() => {
          try {
            const formattedContent = JSON.stringify(JSON.parse(content), null, 4);
            setContent(formattedContent);
            message.success(
              intl.formatMessage({
                id: 'pages.develop.format.success',
                defaultMessage: '格式化成功',
              }),
            );
          } catch (e) {
            message.error(
              intl.formatMessage({
                id: 'pages.develop.format.invalid_json',
                defaultMessage: '非法的json',
              }),
            );
          }
        }}
      >
        {intl.formatMessage({
          id: 'pages.develop.format.json',
          defaultMessage: '格式化',
        })}
      </Button>
    </ProCard>
  );
};

export default JsonFormat;
