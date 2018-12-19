// @flow strict

import React from 'react';
import LoadingSVG from '../../../assets/images/loading.svg';
import config from '../../../config';

export default function ContentLoading() {
  return (
    <div>
      <img src={LoadingSVG} alt={config.app.lang.LOADING} />
    </div>
  );
}
