"use strict";
exports.id = 4667;
exports.ids = [4667];
exports.modules = {

/***/ 4667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat: () => (/* binding */ DyteChat)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_c953657b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92681);
/* harmony import */ var _index_b05ec9b1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69750);
/* harmony import */ var _chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62270);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85114);
/* harmony import */ var _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37692);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21237);
/* harmony import */ var _flags_d6a1a11a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59348);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24555);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60804);











const dyteChatCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%;flex-direction:column;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}#dropzone{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;display:none;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}#dropzone.active{display:flex;-webkit-animation:0.2s slide-up ease-in;animation:0.2s slide-up ease-in}dyte-chat-messages-ui{flex:1 0 0}";

const DyteChat = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.disconnectMeeting = (meeting) => {
      var _a;
      if (this.isPrivateChatSupported()) {
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantsUpdate', this.onParticipantUpdate);
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantLeft', this.onParticipantUpdate);
      }
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _a === void 0 ? void 0 : _a.removeListener('chatUpdate', this.chatUpdateListener);
    };
    this.onParticipantUpdate = () => {
      this.participants = this.meeting.participants.joined
        .toArray()
        .filter((p) => this.privatePresetFilter.length === 0 || this.privatePresetFilter.includes(p.presetName));
      // if selected participant leaves, reset state to everyone
      if (this.selectedParticipant && !this.participants.includes(this.selectedParticipant)) {
        this.selectedParticipant = null;
        this.chatRecipientId = this.selectedGroup = 'everyone';
      }
    };
    this.usePaginatedChat = () => (0,_flags_d6a1a11a_js__WEBPACK_IMPORTED_MODULE_7__.u)(this.meeting);
    this.updateUnreadCountGroups = (obj) => {
      this.unreadCountGroups = Object.assign(Object.assign({}, this.unreadCountGroups), obj);
    };
    this.isPrivateChatSupported = () => {
      var _a, _b, _c;
      return (this.canPrivateMessage &&
        !this.disablePrivateChat &&
        ((_c = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__) === null || _b === void 0 ? void 0 : _b.features) === null || _c === void 0 ? void 0 : _c.getFeatureValue('chat_socket_server')) ===
          'socket-service');
    };
    this.updateRecipients = (event) => {
      if (typeof event.detail === 'string') {
        this.chatRecipientId = 'everyone';
        this.selectedParticipant = null;
      }
      else {
        const { userId } = event.detail;
        this.chatRecipientId = userId;
        this.selectedParticipant = this.participants.find((p) => p.userId === userId);
      }
      if (this.chatRecipientId !== 'everyone') {
        const allParticipants = [this.chatRecipientId, this.meeting.self.userId];
        const targetKey = (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.g)(allParticipants);
        this.selectedGroup = targetKey;
      }
      else {
        this.selectedGroup = 'everyone';
      }
      this.updateUnreadCountGroups({ [this.selectedGroup]: 0 });
    };
    this.isTextMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendTextMessage;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateTexts;
    };
    this.isFileMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendFiles;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateFiles;
    };
    this.meeting = undefined;
    this.config = _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_5__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c953657b_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_b05ec9b1_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.disablePrivateChat = false;
    this.privatePresetFilter = [];
    this.unreadCountGroups = {};
    this.chatGroups = { everyone: [] };
    this.selectedGroup = 'everyone';
    this.now = new Date();
    this.dropzoneActivated = false;
    this.showLatestMessageButton = false;
    this.canSend = false;
    this.canSendTextMessage = false;
    this.canSendFiles = false;
    this.canPrivateMessage = false;
    this.canSendPrivateTexts = false;
    this.canSendPrivateFiles = false;
    this.emojiPickerEnabled = false;
    this.chatRecipientId = 'everyone';
    this.participants = [];
    this.selectedParticipant = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    if (this.meeting && !this.meeting.chat) {
      return;
    }
    if (this.isFileMessagingAllowed()) {
      this.host.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.dropzoneActivated = true;
      });
      this.host.addEventListener('dragleave', () => {
        this.dropzoneActivated = false;
      });
      this.host.addEventListener('drop', (e) => {
        e.preventDefault();
        this.dropzoneActivated = false;
        (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.h)(e.dataTransfer.items, (type, file) => {
          var _a, _b, _c, _d;
          switch (type) {
            case 'image':
              if (this.isFileMessagingAllowed()) {
                (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.sendImageMessage(file, this.getRecipientPeerIds());
              }
              break;
            case 'file':
              if (this.isFileMessagingAllowed()) {
                (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.chat) === null || _d === void 0 ? void 0 : _d.sendFileMessage(file, this.getRecipientPeerIds());
              }
              break;
          }
        });
      });
    }
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c, _d, _e;
    if (oldMeeting != undefined)
      this.disconnectMeeting(oldMeeting);
    if (meeting && !meeting.chat)
      return;
    if (meeting != null) {
      this.canSend = meeting.self.permissions.chatPublic.canSend;
      this.canSendTextMessage = meeting.self.permissions.chatPublic.text;
      this.canSendFiles = meeting.self.permissions.chatPublic.files;
      this.canPrivateMessage =
        ((_a = meeting.self.permissions.chatPrivate) === null || _a === void 0 ? void 0 : _a.canSend) ||
          ((_b = meeting.self.permissions.chatPrivate) === null || _b === void 0 ? void 0 : _b.canReceive);
      this.canSendPrivateTexts = (_c = meeting.self.permissions.chatPrivate) === null || _c === void 0 ? void 0 : _c.text;
      this.canSendPrivateFiles = (_d = meeting.self.permissions.chatPrivate) === null || _d === void 0 ? void 0 : _d.files;
      this.initializeChatGroups();
      // shallow copy to trigger render
      this.chatGroups = Object.assign({}, this.chatGroups);
      this.chatUpdateListener = ({ message }) => {
        this.addToChatGroup(message);
        // shallow copy to trigger render
        this.chatGroups = Object.assign({}, this.chatGroups);
      };
      this.onParticipantUpdate();
      if (!this.usePaginatedChat())
        (_e = meeting.chat) === null || _e === void 0 ? void 0 : _e.addListener('chatUpdate', this.chatUpdateListener);
      if (this.isPrivateChatSupported()) {
        meeting.participants.joined.addListener('participantJoined', this.onParticipantUpdate);
        meeting.participants.joined.addListener('participantLeft', this.onParticipantUpdate);
      }
    }
  }
  chatGroupsChanged(chatGroups) {
    var _a, _b;
    if (!this.isPrivateChatSupported()) {
      return;
    }
    const unreadCounts = {};
    for (const key in chatGroups) {
      const lastReadTimestamp = (_a = _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key]) !== null && _a !== void 0 ? _a : 0;
      unreadCounts[key] = chatGroups[key].filter((c) => c.type == 'chat' &&
        c.message.time > lastReadTimestamp &&
        c.message.userId !== this.meeting.self.userId).length;
      if (key ===
        (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.g)([this.meeting.self.userId, (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId]) ||
        (key === 'everyone' && this.selectedParticipant === null)) {
        unreadCounts[key] = 0;
        _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key] = new Date();
      }
    }
    this.updateUnreadCountGroups(unreadCounts);
  }
  initializeChatGroups() {
    var _a;
    (_a = this.meeting.chat) === null || _a === void 0 ? void 0 : _a.messages.forEach((message) => {
      this.addToChatGroup(message);
    });
  }
  addToChatGroup(message) {
    var _a;
    const parsedMessage = (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.p)(message);
    let key = 'everyone';
    if (((_a = parsedMessage.targetUserIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      const allParticipants = new Set([
        parsedMessage.userId,
        ...parsedMessage.targetUserIds,
      ]);
      key = (0,_chat_0611caa4_js__WEBPACK_IMPORTED_MODULE_3__.g)(Array.from(allParticipants));
    }
    if (this.chatGroups[key] === undefined)
      this.chatGroups[key] = [];
    this.chatGroups[key] = [
      ...this.chatGroups[key],
      { type: 'chat', message: parsedMessage },
    ];
  }
  getRecipientPeerIds() {
    let peerIds = [];
    if (this.chatRecipientId !== 'everyone') {
      peerIds = [this.selectedParticipant.id];
    }
    return peerIds;
  }
  render() {
    var _a, _b, _c, _d;
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const selfUserId = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId;
    const chatMessages = this.chatGroups[this.selectedGroup] || [];
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.isFileMessagingAllowed() && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "dropzone", class: { active: this.dropzoneActivated }, part: "dropzone" }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach, iconPack: this.iconPack, t: this.t }), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('Drop files/images to send')))), this.isPrivateChatSupported() && ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-selector-ui", Object.assign({ selfUserId: selfUserId, groups: this.participants, selectedGroupId: (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId, unreadCounts: this.unreadCountGroups, onDyteChatGroupChanged: this.updateRecipients }, uiProps))), this.usePaginatedChat() ? ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, size: this.size, iconPack: this.iconPack, t: this.t })) : ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui", Object.assign({ messages: chatMessages, selfUserId: selfUserId, selectedGroup: this.selectedGroup }, uiProps))), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-composer-ui", Object.assign({ canSendTextMessage: this.isTextMessagingAllowed(), canSendFiles: this.isFileMessagingAllowed(), disableEmojiPicker: !!((_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.__internals__) === null || _d === void 0 ? void 0 : _d.features.hasFeature(_flags_d6a1a11a_js__WEBPACK_IMPORTED_MODULE_7__.F.DISABLE_EMOJI_PICKER)), onDyteNewMessage: (e) => {
        var _a, _b, _c, _d, _e, _f;
        const message = e.detail;
        switch (message.type) {
          case 'text':
            (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.sendTextMessage(message.message, this.getRecipientPeerIds());
            break;
          case 'image':
            (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.chat) === null || _d === void 0 ? void 0 : _d.sendImageMessage(message.file, this.getRecipientPeerIds());
            break;
          case 'file':
            (_f = (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.chat) === null || _f === void 0 ? void 0 : _f.sendFileMessage(message.file, this.getRecipientPeerIds());
            break;
        }
      } }, uiProps), (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon", slot: "chat-addon" }))));
  }
  get host() { return (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "chatGroups": ["chatGroupsChanged"]
  }; }
};
DyteChat.style = dyteChatCss;




/***/ })

};
;