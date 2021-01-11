import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import JsonCard from './json';
import YamlCard from './yaml';
import React, { useState } from 'react';
import { useIntl } from 'umi';

export default () => {
  const intl = useIntl();
  const [tab, setTab] = useState('json');

  const getTag = () => {
    let card = <JsonCard />;
    switch (tab) {
      case 'json':
        card = <JsonCard />;
        break;
      case 'yaml':
        card = <YamlCard />;
        break;
      default:
        card = <JsonCard />;
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
