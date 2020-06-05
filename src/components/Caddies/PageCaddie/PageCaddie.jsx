import React from 'react';

import { ButtonCaddie } from 'components';
import { Spinner } from 'assets/spinners';
import { useStatus } from 'store';

export const PageCaddie = ({ caddieName, caddieData, current, handler }) => {
  const loading = useStatus().state.loading;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '4fr 1fr' }}>
      <ButtonCaddie name={caddieName} buttons={caddieData} current={current} actionType="select-tag" handler={handler} />
      <div style={{ height: '40px', justifySelf: 'end' }}>
        <Spinner showing={loading} which="ellipsis" size={24} />
      </div>
    </div>
  );
};
