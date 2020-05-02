import React from 'react';

import { ButtonCaddie, Modal } from 'components';
import { Spinner } from 'assets/spinners';

export const PageCaddie = ({ caddieName, caddieData, current, handler, loading }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '4fr 1fr' }}>
      <ButtonCaddie name={caddieName} buttons={caddieData} current={current} action="set-tags" handler={handler} />
      <div style={{ height: '28px', justifySelf: 'end' }}>
        <Modal showing={loading} small={true}>
          <Spinner prompt={'Loading...'} spinner="ellipsis" size={24} />
        </Modal>
      </div>
    </div>
  );
};
