import React, { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { Tweet as TweetType } from '../types';
import Divider from './Divider';
import Tweet from './Tweet';

type Type = {
  data: TweetType[];
};

export default function Tweets({ data }: Type) {
  const loading = useSelector((store: any) => store.ui.loading);
  return (
    <div style={s.container}>
      {loading && <span style={s.loader}>Loading...</span>}

      {!loading &&
        data.length > 0 &&
        data.map((t, i) => (
          <div key={t.id}>
            <Tweet tweet={t} />
            {data.length - 1 !== i && <Divider />}
          </div>
        ))}
    </div>
  );
}

const s = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    maxWidth: 600,
  } as CSSProperties,
  loader: { flex: 1, textAlign: 'center', width: window.innerWidth, maxWidth: 600 } as CSSProperties,
};
