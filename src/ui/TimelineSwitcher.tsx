import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../colors';
import { DATA_ACTIONS } from '../models/actions';

const HILARY = 'HillaryClinton';
const DONALD = 'realDonaldTrump';

export default function TimelineSwitcher() {
  const currentUser = useSelector((state: any) => state.data.currentUser);
  const isTrump = currentUser === DONALD;
  const dispatch = useDispatch();

  const changeTimelineAsync = (user: string) => {
    dispatch(DATA_ACTIONS.changeTimelineAsync(user));
  };

  return (
    <div style={s.container}>
      <span onClick={() => changeTimelineAsync(DONALD)} style={{ ...s.tab, color: isTrump ? colors.gray10 : colors.gray5 }}>
        Donald Trump
      </span>
      <div style={{ width: 2 }} />
      <span onClick={() => changeTimelineAsync(HILARY)} style={{ ...s.tab, color: !isTrump ? colors.gray10 : colors.gray5 }}>
        Hilary Clinton
      </span>
    </div>
  );
}

const s: any = {
  container: { display: 'flex', marginBottom: 25, justifyContent: 'space-between' },
  tab: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.gray5,
    cursor: 'pointer',
    fontSize: 18,
    padding: 25,
    backgroundColor: colors.gray3,
  },
};
