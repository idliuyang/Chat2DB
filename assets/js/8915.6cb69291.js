"use strict";
exports.id = 8915;
exports.ids = [8915];
exports.modules = {

/***/ 78915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participant_count: () => (/* binding */ DyteParticipantCount)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_c953657b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92681);
/* harmony import */ var _index_b05ec9b1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69750);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24555);





const dyteParticipantCountCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:inline-flex;height:var(--dyte-space-10, 40px);-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}";

const DyteParticipantCount = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.disconnectMeeting = (meeting) => {
      if (meeting != null && this.countListener != null) {
        meeting.participants.joined.removeListener('participantJoined', this.countListener);
        meeting.participants.joined.removeListener('participantLeft', this.countListener);
      }
    };
    this.meeting = undefined;
    this.iconPack = _default_icon_pack_c953657b_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_b05ec9b1_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.participantCount = 0;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    this.disconnectMeeting(oldMeeting);
    if (meeting != null) {
      this.countListener = () => {
        this.participantCount =
          meeting.participants.joined.size + (meeting.self.roomJoined ? 1 : 0);
      };
      this.countListener();
      meeting.participants.joined.addListener('participantJoined', this.countListener);
      meeting.participants.joined.addListener('participantLeft', this.countListener);
    }
  }
  render() {
    if ((0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.meeting))
      return null;
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, { tabIndex: 0, role: "log", "aria-label": `${this.participantCount} ${this.t('participants')}` }, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.people, tabIndex: -1, "aria-hidden": true, part: "icon", iconPack: this.iconPack, t: this.t }), this.participantCount));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteParticipantCount.style = dyteParticipantCountCss;




/***/ })

};
;