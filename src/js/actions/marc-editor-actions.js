import MarcEditorConstants from '../constants/marc-editor-constants';
import {dispatch, register} from '../dispatchers/marc-editor-dispatcher';

export default {
  changeMode(mode, records) {
    dispatch({
      actionType: MarcEditorConstants.CHANGE_MODE, mode, records
    })
  }
}
