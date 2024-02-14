import { Model, Schema } from "mongoose";
import { roles, status } from "../../src/utils/enum.js";

// Schema
const userSchema = new Schema({
  // 1. firstName
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  // 2. lastName
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  // 3. username ( firstName + lastName)
  userName: {
    type: String,
    required: true
  },
  // 4. email ⇒ ( unique )
  email: {
    type: String,
    unique: true,
    required: true,
  },
  // 5. password
  password: {
    type: String,
    required: true
  },
  // 6. recoveryEmail ⇒ (not unique)
  recoveryEmail: {
    type: String,
    required: true
  },
  // 7. DOB (date of birth, must be date format 2023-12-4)
  DOB: {
    type: Date,
    required: true,
  },
  // 8. mobileNumber ⇒ (unique)
  mobileNumber: {
    type: String,
    unique: true,
    required: true
  },
  // 9. role ⇒ (User, Company_HR )
  role: {
    type: String,
    enum: Object.values(roles),
    required: true
  },
  // 10. status (online, offline)
  status: {
    type: String,
    enum: Object.values(status),
    default: status.offLine
  }

}, { timestamps: true })

// Model
export const userModel = Model('User', userSchema)

