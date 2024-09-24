var _a;
import { Schema, model } from 'mongoose';
class UserModel {
}
_a = UserModel;
UserModel.userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true });
UserModel.User = model('User', _a.userSchema);
export default UserModel.User;
//# sourceMappingURL=user.js.map