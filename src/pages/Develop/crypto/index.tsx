import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import StringBase64 from './stringBase64';
import ImageBase64 from './imageBase64';
import React, { useState } from 'react';
import { useIntl } from 'umi';

const Crypto: React.ReactNode = () => {
  const intl = useIntl();
  const [tab, setTab] = useState('stringBase64');

  const getTag = () => {
    let card = <StringBase64 />;
    switch (tab) {
      case 'stringBase64':
        card = <StringBase64 />;
        break;
      case 'imageBase64':
        card = <ImageBase64 />;
        break;
      default:
        card = <StringBase64 />;
        break;
    }
    return card;
  };

  return (
    <PageContainer
      tabList={[
        {
          key: 'stringBase64',
          tab: intl.formatMessage({
            id: 'pages.develop.crypto.stringBase64',
            defaultMessage: 'BASE64',
          }),
        },
        {
          key: 'imageBase64',
          tab: intl.formatMessage({
            id: 'pages.develop.crypto.imageBase64',
            defaultMessage: '图片/BASE64转换',
          }),
        },
      ]}
      tabActiveKey={tab}
      onTabChange={(key) => {
        setTab(key);
      }}
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        {getTag()}
      </ProCard>
    </PageContainer>
  );
};

export default Crypto;
