import React, { useEffect } from 'react';
import TimelineSwitcher from './ui/TimelineSwitcher';
import { useSelector, useDispatch } from 'react-redux';

import Tweets from './ui/Tweets';
import { DATA_ACTIONS } from './models/actions';

function App() {
  const timeline = useSelector((store: any) => store.data.timeline);

  const dispatch = useDispatch();

  const useFetching = () => {
    useEffect(() => {
      dispatch(DATA_ACTIONS.initAsync());
    }, []);
  };

  useFetching();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ paddingBottom: 25, paddingTop: 25 }}>
        <TimelineSwitcher />
        <Tweets data={timeline || []} />
      </div>
    </div>
  );
}

export default App;
