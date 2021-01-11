import { Button, Input, message } from 'antd';
import ProCard from '@ant-design/pro-card';
import { useIntl } from 'umi';
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const { TextArea } = Input;

const StringBase64: React.FC = () => {
  const intl = useIntl();
  const [sourceContent, setSourceContent] = useState('');
  const [targetContent, setTargetContent] = useState('');

  return (
    <ProCard style={{ height: 500 }} key={'crypto'}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextArea
          rows={15}
          value={sourceContent}
          onChange={(e) => {
            setSourceContent(e.target.value);
          }}
        />
        <div style={{ marginLeft: '20px', marginRight: '20px', height: '87px' }}>
          <Button
            type="primary"
            onClick={() => {
              try {
                const wordArray = CryptoJS.enc.Utf8.parse(sourceContent);
                const encryptionStr = CryptoJS.enc.Base64.stringify(wordArray);
                setTargetContent(encryptionStr);
                message.success(
                  intl.formatMessage({
                    id: 'pages.develop.crypto.encryption.success',
                    defaultMessage: 'base64加密成功',
                  }),
                );
              } catch (e) {
                console.log(e);
                message.error(
                  intl.formatMessage({
                    id: 'pages.develop.crypto.encryption.failed',
                    defaultMessage: 'base64加密失败',
                  }),
                );
              }
            }}
          >
            {intl.formatMessage({
              id: 'pages.develop.crypto.encryption',
              defaultMessage: '加密base64 >>>',
            })}
          </Button>
          <Button
            type="primary"
            style={{ marginTop: '20px' }}
            onClick={() => {
              try {
                const wordArray = CryptoJS.enc.Base64.parse(targetContent);
                const decryptStr = wordArray.toString(CryptoJS.enc.Utf8);
                setSourceContent(decryptStr);
                message.success(
                  intl.formatMessage({
                    id: 'pages.develop.crypto.decrypt.success',
                    defaultMessage: 'base64解密成功',
                  }),
                );
              } catch (e) {
                message.error(
                  intl.formatMessage({
                    id: 'pages.develop.crypto.decrypt.failed',
                    defaultMessage: 'base64解密失败',
                  }),
                );
              }
            }}
          >
            {intl.formatMessage({
              id: 'pages.develop.format.decrypt',
              defaultMessage: '<<< 解密base64',
            })}
          </Button>
        </div>

        <TextArea
          rows={15}
          value={targetContent}
          onChange={(e) => {
            setTargetContent(e.target.value);
          }}
        />
      </div>
    </ProCard>
  );
};

export default StringBase64;
