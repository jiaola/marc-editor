import {dispatch, register} from '../dispatchers/marc-editor-dispatcher';
import MarcEditorConstants from '../constants/marc-editor-constants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

var _records = [];

// default mode
var _mode = 'text';

const _changeMode = (mode, records) => {
  _mode = mode;
  _records = records;
}

const MarcEditorStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on( CHANGE_EVENT, callback );
  },

  removeChangeListener(callback) {
    this.removeListener( CHANGE_EVENT, callback );
  },

  getRecords() {
    return _records;
  },

  getMode() {
    return _mode;
  },

  dispatcherIndex: register(function(action) {
    switch(action.actionType){
      case MarcEditorConstants.CHANGE_MODE:
        _changeMode(action.mode, action.records);
        break;
    }

    MarcEditorStore.emitChange();
  })

});

export default MarcEditorStore;
