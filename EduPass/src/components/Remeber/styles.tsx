
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

 rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
 checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#999',
    borderRadius: 4,
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#0000FF',
    borderColor: '#0000FF',
  },
    rememberText: {
    fontSize: 14,
    color: '#333',
  },
   forgotText: {
    fontSize: 14,
    color: '#999',
  },
});