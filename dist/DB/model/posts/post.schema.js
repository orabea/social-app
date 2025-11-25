"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = exports.reactionSchema = void 0;
const mongoose_1 = require("mongoose");
const enum_1 = require("../../../utils/common/enum");
exports.reactionSchema = new mongoose_1.Schema({
    reaction: {
        type: Number,
        enum: Object.values(enum_1.POST_REACTION).map((value) => value),
        default: enum_1.POST_REACTION.like
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });
exports.PostSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        // required : function() {
        //     if(this.attachments.length) return false;
        //     return true;
        // }
    },
    reactions: [exports.reactionSchema],
}, { timestamps: true });
//# sourceMappingURL=post.schema.js.map