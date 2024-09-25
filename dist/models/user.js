import { Schema, model } from 'mongoose';
class UserModel {
    static userSchema = new Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['user', 'admin'], default: 'user' },
    }, { timestamps: true });
    static User = model('User', this.userSchema);
}
export default UserModel.User;
//# sourceMappingURL=user.js.map