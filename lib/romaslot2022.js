'use babel';

import Romaslot2022View from './romaslot2022-view';
import { CompositeDisposable } from 'atom';

export default {

  romaslot2022View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.romaslot2022View = new Romaslot2022View(state.romaslot2022ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.romaslot2022View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'romaslot2022:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.romaslot2022View.destroy();
  },

  serialize() {
    return {
      romaslot2022ViewState: this.romaslot2022View.serialize()
    };
  },

  toggle() {
    console.log('Romaslot2022 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
