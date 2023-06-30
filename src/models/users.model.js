const mongoose = require("mongoose");

// email, password 사용 로그인 => googleId 필드가 null값을 가짐. => unique 속성이 있어서 error가 발생함.
// => 이것을 방지하려면 sparse: true 속성이 있어야됨. (22줄)
// googleId 사용 로그인


//스키마 생성
const userSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 5
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    }
})

//모델생성
const User = mongoose.model("User", userSchema);

module.exports = User;