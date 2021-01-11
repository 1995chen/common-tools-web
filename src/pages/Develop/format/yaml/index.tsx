import { Button, Input, message } from 'antd';
import ProCard from '@ant-design/pro-card';
import { useIntl } from 'umi';
import React, { useState } from 'react';
import YAML from 'yaml';

const { TextArea } = Input;

const YamlFormat: React.FC = () => {
  const intl = useIntl();
  const [content, setContent] = useState('');

  return (
    <ProCard style={{ height: 500 }} key={'yaml'}>
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
            const formattedContent = YAML.stringify(YAML.parse(content));
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
                id: 'pages.develop.format.invalid_yaml',
                defaultMessage: '非法的yaml',
              }),
            );
          }
        }}
      >
        {intl.formatMessage({
          id: 'pages.develop.format.yaml',
          defaultMessage: '格式化',
        })}
      </Button>
    </ProCard>
  );
};

export default YamlFormat;
