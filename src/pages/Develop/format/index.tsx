import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import JsonFormat from './json';
import YamlFormat from './yaml';
import React, { useState } from 'react';
import { useIntl } from 'umi';

const Format: React.ReactNode = () => {
  const intl = useIntl();
  const [tab, setTab] = useState('json');

  const getTag = () => {
    let card = <JsonFormat />;
    switch (tab) {
      case 'json':
        card = <JsonFormat />;
        break;
      case 'yaml':
        card = <YamlFormat />;
        break;
      default:
        card = <JsonFormat />;
        break;
    }
    return card;
  };

  return (
    <PageContainer
      tabList={[
        {
          key: 'json',
          tab: intl.formatMessage({
            id: 'pages.develop.format.json',
            defaultMessage: '格式化',
          }),
        },
        {
          key: 'yaml',
          tab: intl.formatMessage({
            id: 'pages.develop.format.yaml',
            defaultMessage: '格式化',
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

export default Format;
