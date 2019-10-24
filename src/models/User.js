/* eslint-disable global-require */
export const crypto = require('crypto');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({});

const User = mongoose.model('User', userSchema);

export default User;
