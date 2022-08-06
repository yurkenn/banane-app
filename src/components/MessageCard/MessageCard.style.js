import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.darkgreen,
    borderRadius: 15,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    color: 'white',
    fontStyle: 'italic',
  },
  date: {
    color: 'white',
  },
  title: {
    padding: 10,
    color: 'white',
    fontWeight: '500',
  },
  dislike_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: 5,
    width: 90,
    borderRadius: 20,
  },
  dislike_count_container: {
    backgroundColor: colors.darkgreen,
    borderRadius: 5,
    width: 19,
  },
  dislike_count_text: {
    textAlign: 'center',
    color: 'white',
  },
  dislike_text: {
    color: colors.darkgreen,
    fontWeight: 'bold',
  },
});
