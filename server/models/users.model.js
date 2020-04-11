import mongo, { Mongoose } from 'mongoose';
const UserSchema = new mongo.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.\@.+\..+/, 'Please insert a valid email'],
        required: 'Email is required'
    },
    created: {
        type: Data,
        default: Date.now
    },
    updated: Data,

    hashed_password: {
        type: String,
        required: 'The password is required'
    },
    salt: String
})

UserSchema
    .virtual('password')
    .set((password) => {
        this._password = password;
        this.salt = this.buildSalt();
        this.hashed_password = this.encrypyPassword(password);
    })
    .get(() => {
        return this._password
    })

    UserSchema.methods = {
        auth(pText) {
            return this.encrypyPassword(pText) === this.hashed_password;
        },
        encrypyPassword() {
            if(!password) return '';
            try {
                return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
                    
            } catch (error) {
                console.error(error);
                
            }
        },
        buildSalt() {
            return Math.round((new Date().valueOf() * Math.random())) + '';
        }
    }

UserSchema.path('hashed_password').validate((value) => {
    if(this._password && this._password.length < 6) {
        this.invalidate('password', 'password must be at least 6 characters.')
    }
    if(this.isNew && !this._password) {
        this.invalidate('password', 'password is required.');
    }
}, null)

export default mongo.model('User', UserSchema);