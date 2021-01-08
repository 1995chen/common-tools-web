import { PageContainer } from '@ant-design/pro-layout';
import { Card, Button, Input, message } from 'antd';
import { useIntl } from 'umi';
import React, { useState } from 'react';

const { TextArea } = Input;

export default () => {
  const intl = useIntl();
  const [content, setContent] = useState('');

  return (
    <PageContainer>
      <Card>
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
            } catch (e) {
              message.error(
                intl.formatMessage({
                  id: 'pages.develop.json.invalid_json',
                  defaultMessage: '非法的json',
                }),
              );
            }
          }}
        >
          {intl.formatMessage({
            id: 'pages.develop.json.format',
            defaultMessage: '格式化',
          })}
        </Button>
      </Card>
    </PageContainer>
  );
};
