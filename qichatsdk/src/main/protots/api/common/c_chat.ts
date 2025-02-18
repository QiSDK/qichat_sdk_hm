/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.26.1
 * source: api/common/c_chat.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../validate/validate";
import * as dependency_2 from "./../../google/protobuf/timestamp";
import * as dependency_3 from "./c_worker";
import * as dependency_4 from "./c_message";
import * as dependency_5 from "./c_tenant";
import * as pb_1 from "google-protobuf";
export namespace api.common {
    export class ChatDetail extends pb_1.Message {
        #one_of_decls: number[][] = [[14]];
        constructor(data?: any[] | ({
            chat_id?: number;
            entrance_id?: number;
            entrance_name?: string;
            platform?: string;
            ip?: string;
            create_at?: dependency_2.google.protobuf.Timestamp;
            update_at?: dependency_2.google.protobuf.Timestamp;
            name?: string;
            avatar?: string;
            nick?: string;
            appeal?: string;
            reset_at?: dependency_2.google.protobuf.Timestamp;
            owner_role?: dependency_4.api.common.MessageRole;
            userid?: number;
            state?: dependency_4.api.common.ChatState;
            copy_type?: dependency_5.api.common.TenantCopyType;
            account?: string;
            chat_remark?: string;
        } & (({
            nimName?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("chat_id" in data && data.chat_id != undefined) {
                    this.chat_id = data.chat_id;
                }
                if ("entrance_id" in data && data.entrance_id != undefined) {
                    this.entrance_id = data.entrance_id;
                }
                if ("entrance_name" in data && data.entrance_name != undefined) {
                    this.entrance_name = data.entrance_name;
                }
                if ("platform" in data && data.platform != undefined) {
                    this.platform = data.platform;
                }
                if ("ip" in data && data.ip != undefined) {
                    this.ip = data.ip;
                }
                if ("create_at" in data && data.create_at != undefined) {
                    this.create_at = data.create_at;
                }
                if ("update_at" in data && data.update_at != undefined) {
                    this.update_at = data.update_at;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("avatar" in data && data.avatar != undefined) {
                    this.avatar = data.avatar;
                }
                if ("nick" in data && data.nick != undefined) {
                    this.nick = data.nick;
                }
                if ("appeal" in data && data.appeal != undefined) {
                    this.appeal = data.appeal;
                }
                if ("reset_at" in data && data.reset_at != undefined) {
                    this.reset_at = data.reset_at;
                }
                if ("owner_role" in data && data.owner_role != undefined) {
                    this.owner_role = data.owner_role;
                }
                if ("nimName" in data && data.nimName != undefined) {
                    this.nimName = data.nimName;
                }
                if ("userid" in data && data.userid != undefined) {
                    this.userid = data.userid;
                }
                if ("state" in data && data.state != undefined) {
                    this.state = data.state;
                }
                if ("copy_type" in data && data.copy_type != undefined) {
                    this.copy_type = data.copy_type;
                }
                if ("account" in data && data.account != undefined) {
                    this.account = data.account;
                }
                if ("chat_remark" in data && data.chat_remark != undefined) {
                    this.chat_remark = data.chat_remark;
                }
            }
        }
        get chat_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set chat_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get entrance_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set entrance_id(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get entrance_name() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set entrance_name(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get platform() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set platform(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get ip() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set ip(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get create_at() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 6) as dependency_2.google.protobuf.Timestamp;
        }
        set create_at(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get has_create_at() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get update_at() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 7) as dependency_2.google.protobuf.Timestamp;
        }
        set update_at(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 7, value);
        }
        get has_update_at() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 8, value);
        }
        get avatar() {
            return pb_1.Message.getFieldWithDefault(this, 9, "") as string;
        }
        set avatar(value: string) {
            pb_1.Message.setField(this, 9, value);
        }
        get nick() {
            return pb_1.Message.getFieldWithDefault(this, 10, "") as string;
        }
        set nick(value: string) {
            pb_1.Message.setField(this, 10, value);
        }
        get appeal() {
            return pb_1.Message.getFieldWithDefault(this, 11, "") as string;
        }
        set appeal(value: string) {
            pb_1.Message.setField(this, 11, value);
        }
        get reset_at() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 12) as dependency_2.google.protobuf.Timestamp;
        }
        set reset_at(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 12, value);
        }
        get has_reset_at() {
            return pb_1.Message.getField(this, 12) != null;
        }
        get owner_role() {
            return pb_1.Message.getFieldWithDefault(this, 13, dependency_4.api.common.MessageRole.MSG_ROLE_SYSTEM) as dependency_4.api.common.MessageRole;
        }
        set owner_role(value: dependency_4.api.common.MessageRole) {
            pb_1.Message.setField(this, 13, value);
        }
        get nimName() {
            return pb_1.Message.getFieldWithDefault(this, 14, "") as string;
        }
        set nimName(value: string) {
            pb_1.Message.setOneofField(this, 14, this.#one_of_decls[0], value);
        }
        get has_nimName() {
            return pb_1.Message.getField(this, 14) != null;
        }
        get userid() {
            return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
        }
        set userid(value: number) {
            pb_1.Message.setField(this, 15, value);
        }
        get state() {
            return pb_1.Message.getFieldWithDefault(this, 16, dependency_4.api.common.ChatState.CHAT_STATE_COMMON) as dependency_4.api.common.ChatState;
        }
        set state(value: dependency_4.api.common.ChatState) {
            pb_1.Message.setField(this, 16, value);
        }
        get copy_type() {
            return pb_1.Message.getFieldWithDefault(this, 17, dependency_5.api.common.TenantCopyType.TCT_UNKNOWN) as dependency_5.api.common.TenantCopyType;
        }
        set copy_type(value: dependency_5.api.common.TenantCopyType) {
            pb_1.Message.setField(this, 17, value);
        }
        get account() {
            return pb_1.Message.getFieldWithDefault(this, 18, "") as string;
        }
        set account(value: string) {
            pb_1.Message.setField(this, 18, value);
        }
        get chat_remark() {
            return pb_1.Message.getFieldWithDefault(this, 19, "") as string;
        }
        set chat_remark(value: string) {
            pb_1.Message.setField(this, 19, value);
        }
        get _nimName() {
            const cases: {
                [index: number]: "none" | "nimName";
            } = {
                0: "none",
                14: "nimName"
            };
            return cases[pb_1.Message.computeOneofCase(this, [14])];
        }
        static fromObject(data: {
            chat_id?: number;
            entrance_id?: number;
            entrance_name?: string;
            platform?: string;
            ip?: string;
            create_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            update_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            name?: string;
            avatar?: string;
            nick?: string;
            appeal?: string;
            reset_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            owner_role?: dependency_4.api.common.MessageRole;
            nimName?: string;
            userid?: number;
            state?: dependency_4.api.common.ChatState;
            copy_type?: dependency_5.api.common.TenantCopyType;
            account?: string;
            chat_remark?: string;
        }): ChatDetail {
            const message = new ChatDetail({});
            if (data.chat_id != null) {
                message.chat_id = data.chat_id;
            }
            if (data.entrance_id != null) {
                message.entrance_id = data.entrance_id;
            }
            if (data.entrance_name != null) {
                message.entrance_name = data.entrance_name;
            }
            if (data.platform != null) {
                message.platform = data.platform;
            }
            if (data.ip != null) {
                message.ip = data.ip;
            }
            if (data.create_at != null) {
                message.create_at = dependency_2.google.protobuf.Timestamp.fromObject(data.create_at);
            }
            if (data.update_at != null) {
                message.update_at = dependency_2.google.protobuf.Timestamp.fromObject(data.update_at);
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.avatar != null) {
                message.avatar = data.avatar;
            }
            if (data.nick != null) {
                message.nick = data.nick;
            }
            if (data.appeal != null) {
                message.appeal = data.appeal;
            }
            if (data.reset_at != null) {
                message.reset_at = dependency_2.google.protobuf.Timestamp.fromObject(data.reset_at);
            }
            if (data.owner_role != null) {
                message.owner_role = data.owner_role;
            }
            if (data.nimName != null) {
                message.nimName = data.nimName;
            }
            if (data.userid != null) {
                message.userid = data.userid;
            }
            if (data.state != null) {
                message.state = data.state;
            }
            if (data.copy_type != null) {
                message.copy_type = data.copy_type;
            }
            if (data.account != null) {
                message.account = data.account;
            }
            if (data.chat_remark != null) {
                message.chat_remark = data.chat_remark;
            }
            return message;
        }
        toObject() {
            const data: {
                chat_id?: number;
                entrance_id?: number;
                entrance_name?: string;
                platform?: string;
                ip?: string;
                create_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                update_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                name?: string;
                avatar?: string;
                nick?: string;
                appeal?: string;
                reset_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                owner_role?: dependency_4.api.common.MessageRole;
                nimName?: string;
                userid?: number;
                state?: dependency_4.api.common.ChatState;
                copy_type?: dependency_5.api.common.TenantCopyType;
                account?: string;
                chat_remark?: string;
            } = {};
            if (this.chat_id != null) {
                data.chat_id = this.chat_id;
            }
            if (this.entrance_id != null) {
                data.entrance_id = this.entrance_id;
            }
            if (this.entrance_name != null) {
                data.entrance_name = this.entrance_name;
            }
            if (this.platform != null) {
                data.platform = this.platform;
            }
            if (this.ip != null) {
                data.ip = this.ip;
            }
            if (this.create_at != null) {
                data.create_at = this.create_at.toObject();
            }
            if (this.update_at != null) {
                data.update_at = this.update_at.toObject();
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.avatar != null) {
                data.avatar = this.avatar;
            }
            if (this.nick != null) {
                data.nick = this.nick;
            }
            if (this.appeal != null) {
                data.appeal = this.appeal;
            }
            if (this.reset_at != null) {
                data.reset_at = this.reset_at.toObject();
            }
            if (this.owner_role != null) {
                data.owner_role = this.owner_role;
            }
            if (this.nimName != null) {
                data.nimName = this.nimName;
            }
            if (this.userid != null) {
                data.userid = this.userid;
            }
            if (this.state != null) {
                data.state = this.state;
            }
            if (this.copy_type != null) {
                data.copy_type = this.copy_type;
            }
            if (this.account != null) {
                data.account = this.account;
            }
            if (this.chat_remark != null) {
                data.chat_remark = this.chat_remark;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.chat_id != 0)
                writer.writeInt64(1, this.chat_id);
            if (this.entrance_id != 0)
                writer.writeUint32(2, this.entrance_id);
            if (this.entrance_name.length)
                writer.writeString(3, this.entrance_name);
            if (this.platform.length)
                writer.writeString(4, this.platform);
            if (this.ip.length)
                writer.writeString(5, this.ip);
            if (this.has_create_at)
                writer.writeMessage(6, this.create_at, () => this.create_at.serialize(writer));
            if (this.has_update_at)
                writer.writeMessage(7, this.update_at, () => this.update_at.serialize(writer));
            if (this.name.length)
                writer.writeString(8, this.name);
            if (this.avatar.length)
                writer.writeString(9, this.avatar);
            if (this.nick.length)
                writer.writeString(10, this.nick);
            if (this.appeal.length)
                writer.writeString(11, this.appeal);
            if (this.has_reset_at)
                writer.writeMessage(12, this.reset_at, () => this.reset_at.serialize(writer));
            if (this.owner_role != dependency_4.api.common.MessageRole.MSG_ROLE_SYSTEM)
                writer.writeEnum(13, this.owner_role);
            if (this.has_nimName)
                writer.writeString(14, this.nimName);
            if (this.userid != 0)
                writer.writeInt32(15, this.userid);
            if (this.state != dependency_4.api.common.ChatState.CHAT_STATE_COMMON)
                writer.writeEnum(16, this.state);
            if (this.copy_type != dependency_5.api.common.TenantCopyType.TCT_UNKNOWN)
                writer.writeEnum(17, this.copy_type);
            if (this.account.length)
                writer.writeString(18, this.account);
            if (this.chat_remark.length)
                writer.writeString(19, this.chat_remark);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ChatDetail {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChatDetail();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.chat_id = reader.readInt64();
                        break;
                    case 2:
                        message.entrance_id = reader.readUint32();
                        break;
                    case 3:
                        message.entrance_name = reader.readString();
                        break;
                    case 4:
                        message.platform = reader.readString();
                        break;
                    case 5:
                        message.ip = reader.readString();
                        break;
                    case 6:
                        reader.readMessage(message.create_at, () => message.create_at = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 7:
                        reader.readMessage(message.update_at, () => message.update_at = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 8:
                        message.name = reader.readString();
                        break;
                    case 9:
                        message.avatar = reader.readString();
                        break;
                    case 10:
                        message.nick = reader.readString();
                        break;
                    case 11:
                        message.appeal = reader.readString();
                        break;
                    case 12:
                        reader.readMessage(message.reset_at, () => message.reset_at = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 13:
                        message.owner_role = reader.readEnum();
                        break;
                    case 14:
                        message.nimName = reader.readString();
                        break;
                    case 15:
                        message.userid = reader.readInt32();
                        break;
                    case 16:
                        message.state = reader.readEnum();
                        break;
                    case 17:
                        message.copy_type = reader.readEnum();
                        break;
                    case 18:
                        message.account = reader.readString();
                        break;
                    case 19:
                        message.chat_remark = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ChatDetail {
            return ChatDetail.deserialize(bytes);
        }
    }
    export class ChatItem extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            chat_id?: number;
            state?: dependency_4.api.common.ChatState;
            unread?: number;
            latest_msg?: dependency_4.api.common.Message;
            create_at?: dependency_2.google.protobuf.Timestamp;
            service_at?: dependency_2.google.protobuf.Timestamp;
            begin_at?: dependency_2.google.protobuf.Timestamp;
            detail?: ChatDetail;
            reset_at?: dependency_2.google.protobuf.Timestamp;
            visible?: boolean;
            is_worker_reply?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("chat_id" in data && data.chat_id != undefined) {
                    this.chat_id = data.chat_id;
                }
                if ("state" in data && data.state != undefined) {
                    this.state = data.state;
                }
                if ("unread" in data && data.unread != undefined) {
                    this.unread = data.unread;
                }
                if ("latest_msg" in data && data.latest_msg != undefined) {
                    this.latest_msg = data.latest_msg;
                }
                if ("create_at" in data && data.create_at != undefined) {
                    this.create_at = data.create_at;
                }
                if ("service_at" in data && data.service_at != undefined) {
                    this.service_at = data.service_at;
                }
                if ("begin_at" in data && data.begin_at != undefined) {
                    this.begin_at = data.begin_at;
                }
                if ("detail" in data && data.detail != undefined) {
                    this.detail = data.detail;
                }
                if ("reset_at" in data && data.reset_at != undefined) {
                    this.reset_at = data.reset_at;
                }
                if ("visible" in data && data.visible != undefined) {
                    this.visible = data.visible;
                }
                if ("is_worker_reply" in data && data.is_worker_reply != undefined) {
                    this.is_worker_reply = data.is_worker_reply;
                }
            }
        }
        get chat_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set chat_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get state() {
            return pb_1.Message.getFieldWithDefault(this, 2, dependency_4.api.common.ChatState.CHAT_STATE_COMMON) as dependency_4.api.common.ChatState;
        }
        set state(value: dependency_4.api.common.ChatState) {
            pb_1.Message.setField(this, 2, value);
        }
        get unread() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set unread(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get latest_msg() {
            return pb_1.Message.getWrapperField(this, dependency_4.api.common.Message, 4) as dependency_4.api.common.Message;
        }
        set latest_msg(value: dependency_4.api.common.Message) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_latest_msg() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get create_at() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 5) as dependency_2.google.protobuf.Timestamp;
        }
        set create_at(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_create_at() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get service_at() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 6) as dependency_2.google.protobuf.Timestamp;
        }
        set service_at(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get has_service_at() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get begin_at() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 10) as dependency_2.google.protobuf.Timestamp;
        }
        set begin_at(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 10, value);
        }
        get has_begin_at() {
            return pb_1.Message.getField(this, 10) != null;
        }
        get detail() {
            return pb_1.Message.getWrapperField(this, ChatDetail, 7) as ChatDetail;
        }
        set detail(value: ChatDetail) {
            pb_1.Message.setWrapperField(this, 7, value);
        }
        get has_detail() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get reset_at() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 8) as dependency_2.google.protobuf.Timestamp;
        }
        set reset_at(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 8, value);
        }
        get has_reset_at() {
            return pb_1.Message.getField(this, 8) != null;
        }
        get visible() {
            return pb_1.Message.getFieldWithDefault(this, 9, false) as boolean;
        }
        set visible(value: boolean) {
            pb_1.Message.setField(this, 9, value);
        }
        get is_worker_reply() {
            return pb_1.Message.getFieldWithDefault(this, 11, false) as boolean;
        }
        set is_worker_reply(value: boolean) {
            pb_1.Message.setField(this, 11, value);
        }
        static fromObject(data: {
            chat_id?: number;
            state?: dependency_4.api.common.ChatState;
            unread?: number;
            latest_msg?: ReturnType<typeof dependency_4.api.common.Message.prototype.toObject>;
            create_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            service_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            begin_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            detail?: ReturnType<typeof ChatDetail.prototype.toObject>;
            reset_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            visible?: boolean;
            is_worker_reply?: boolean;
        }): ChatItem {
            const message = new ChatItem({});
            if (data.chat_id != null) {
                message.chat_id = data.chat_id;
            }
            if (data.state != null) {
                message.state = data.state;
            }
            if (data.unread != null) {
                message.unread = data.unread;
            }
            if (data.latest_msg != null) {
                message.latest_msg = dependency_4.api.common.Message.fromObject(data.latest_msg);
            }
            if (data.create_at != null) {
                message.create_at = dependency_2.google.protobuf.Timestamp.fromObject(data.create_at);
            }
            if (data.service_at != null) {
                message.service_at = dependency_2.google.protobuf.Timestamp.fromObject(data.service_at);
            }
            if (data.begin_at != null) {
                message.begin_at = dependency_2.google.protobuf.Timestamp.fromObject(data.begin_at);
            }
            if (data.detail != null) {
                message.detail = ChatDetail.fromObject(data.detail);
            }
            if (data.reset_at != null) {
                message.reset_at = dependency_2.google.protobuf.Timestamp.fromObject(data.reset_at);
            }
            if (data.visible != null) {
                message.visible = data.visible;
            }
            if (data.is_worker_reply != null) {
                message.is_worker_reply = data.is_worker_reply;
            }
            return message;
        }
        toObject() {
            const data: {
                chat_id?: number;
                state?: dependency_4.api.common.ChatState;
                unread?: number;
                latest_msg?: ReturnType<typeof dependency_4.api.common.Message.prototype.toObject>;
                create_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                service_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                begin_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                detail?: ReturnType<typeof ChatDetail.prototype.toObject>;
                reset_at?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                visible?: boolean;
                is_worker_reply?: boolean;
            } = {};
            if (this.chat_id != null) {
                data.chat_id = this.chat_id;
            }
            if (this.state != null) {
                data.state = this.state;
            }
            if (this.unread != null) {
                data.unread = this.unread;
            }
            if (this.latest_msg != null) {
                data.latest_msg = this.latest_msg.toObject();
            }
            if (this.create_at != null) {
                data.create_at = this.create_at.toObject();
            }
            if (this.service_at != null) {
                data.service_at = this.service_at.toObject();
            }
            if (this.begin_at != null) {
                data.begin_at = this.begin_at.toObject();
            }
            if (this.detail != null) {
                data.detail = this.detail.toObject();
            }
            if (this.reset_at != null) {
                data.reset_at = this.reset_at.toObject();
            }
            if (this.visible != null) {
                data.visible = this.visible;
            }
            if (this.is_worker_reply != null) {
                data.is_worker_reply = this.is_worker_reply;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.chat_id != 0)
                writer.writeInt64(1, this.chat_id);
            if (this.state != dependency_4.api.common.ChatState.CHAT_STATE_COMMON)
                writer.writeEnum(2, this.state);
            if (this.unread != 0)
                writer.writeInt32(3, this.unread);
            if (this.has_latest_msg)
                writer.writeMessage(4, this.latest_msg, () => this.latest_msg.serialize(writer));
            if (this.has_create_at)
                writer.writeMessage(5, this.create_at, () => this.create_at.serialize(writer));
            if (this.has_service_at)
                writer.writeMessage(6, this.service_at, () => this.service_at.serialize(writer));
            if (this.has_begin_at)
                writer.writeMessage(10, this.begin_at, () => this.begin_at.serialize(writer));
            if (this.has_detail)
                writer.writeMessage(7, this.detail, () => this.detail.serialize(writer));
            if (this.has_reset_at)
                writer.writeMessage(8, this.reset_at, () => this.reset_at.serialize(writer));
            if (this.visible != false)
                writer.writeBool(9, this.visible);
            if (this.is_worker_reply != false)
                writer.writeBool(11, this.is_worker_reply);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ChatItem {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChatItem();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.chat_id = reader.readInt64();
                        break;
                    case 2:
                        message.state = reader.readEnum();
                        break;
                    case 3:
                        message.unread = reader.readInt32();
                        break;
                    case 4:
                        reader.readMessage(message.latest_msg, () => message.latest_msg = dependency_4.api.common.Message.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.create_at, () => message.create_at = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 6:
                        reader.readMessage(message.service_at, () => message.service_at = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 10:
                        reader.readMessage(message.begin_at, () => message.begin_at = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 7:
                        reader.readMessage(message.detail, () => message.detail = ChatDetail.deserialize(reader));
                        break;
                    case 8:
                        reader.readMessage(message.reset_at, () => message.reset_at = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 9:
                        message.visible = reader.readBool();
                        break;
                    case 11:
                        message.is_worker_reply = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ChatItem {
            return ChatItem.deserialize(bytes);
        }
    }
}
