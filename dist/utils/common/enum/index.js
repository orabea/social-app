"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST_REACTION = exports.USER_AGENT = exports.GENDER = exports.SYS_ROLE = void 0;
var SYS_ROLE;
(function (SYS_ROLE) {
    SYS_ROLE["admin"] = "admin";
    SYS_ROLE["user"] = "user";
})(SYS_ROLE || (exports.SYS_ROLE = SYS_ROLE = {}));
var GENDER;
(function (GENDER) {
    GENDER["male"] = "male";
    GENDER["female"] = "female";
    GENDER["other"] = "other";
})(GENDER || (exports.GENDER = GENDER = {}));
var USER_AGENT;
(function (USER_AGENT) {
    USER_AGENT["local"] = "local";
    USER_AGENT["google"] = "google";
    USER_AGENT["facebook"] = "facebook";
})(USER_AGENT || (exports.USER_AGENT = USER_AGENT = {}));
var POST_REACTION;
(function (POST_REACTION) {
    POST_REACTION[POST_REACTION["like"] = 0] = "like";
    POST_REACTION[POST_REACTION["love"] = 1] = "love";
    POST_REACTION[POST_REACTION["haha"] = 2] = "haha";
    POST_REACTION[POST_REACTION["wow"] = 3] = "wow";
    POST_REACTION[POST_REACTION["sad"] = 4] = "sad";
    POST_REACTION[POST_REACTION["angry"] = 5] = "angry";
})(POST_REACTION || (exports.POST_REACTION = POST_REACTION = {}));
//# sourceMappingURL=index.js.map