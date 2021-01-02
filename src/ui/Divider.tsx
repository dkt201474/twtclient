import { colors } from '../colors';

export default function Divider() {
  return <div style={s.container} />;
}

const s = {
  container: { height: 1, backgroundColor: colors.gray3, marginTop: 15, marginBottom: 15 },
};
