import { colors } from "./colors";
import { Dimensions } from "react-native"

const width = Dimensions.get('window').width


export const xx = {

  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
    alignItems: "center",
  },

  input: {
    borderColor: colors.GREY,
    borderWidth: 1,
    padding: 1,
    height: width / 11,
    marginHorizontal: 20,
    marginVertical: 2,
    paddingLeft: 12
  },

  textarea: {
    justifyContent: "flex-start",
    borderColor: colors.GREY,
    borderWidth: 1,
    padding: 1,
    height: width / 4,
    marginHorizontal: 20,
    marginVertical: 2,
    paddingLeft: 12
  },

  btn: {
    backgroundColor: colors.GREEN,
    borderRadius: 2,
    height: width / 12,
    marginHorizontal: width / 20,
    marginTop: 6,
    padding: width / 22,
    paddingHorizontal: width / 7,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txt: {
    fontSize: 15,
    color: colors.WHITE
  },

  horizontalView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  green: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 2,
    color: colors.GREEN,
    fontSize: 13,
  },

}