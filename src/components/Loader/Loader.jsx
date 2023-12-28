import React from 'react';

import s from './Loader.module.css';
import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={s.load}>
      <TailSpin
        visible={true}
        height="180"
        width="180"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
