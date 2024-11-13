import CryptoJS from "crypto-js";
import crypto from 'crypto';

const algorithm = process.env.REACT_APP_CRYPTO_ALGORITHM;

/*
 * This function encrypt/decrypt the data.
 * It is able to encrypt/decrypt all type of object, String, Number etc
 * @param {*} text
 * @returns 
 */
export function encrypt(text) {
    let enData = CryptoJS.AES.encrypt(JSON.stringify(text), process.env.REACT_APP_CRYPTO_SECRET_KEY).toString();
    return (enData)
}

export function decrypt(hash) {
    let decryptedData = JSON.parse(CryptoJS.AES.decrypt(hash, process.env.REACT_APP_CRYPTO_SECRET_KEY).toString(CryptoJS.enc.Utf8));
    return (decryptedData);
}

/*
 * This function encrypt/decrypt the data.
 * It is only accept String value to encrypt/decrypt.
 * It does not contains any special character, so we this encryption method in url link creation.
 * @param {*} text
 * @returns 
 */
export function encryptLink(text) {
    const cipher = crypto.createCipheriv(algorithm, process.env.REACT_APP_CRYPTO_SECRET_KEY, Buffer.from(process.env.REACT_APP_CRYPTO_SECRET_IV, 'hex'));
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return encrypted.toString('hex');
};

export function decryptlink(hash) {
    const decipher = crypto.createDecipheriv(algorithm, process.env.REACT_APP_CRYPTO_SECRET_KEY, Buffer.from(process.env.REACT_APP_CRYPTO_SECRET_IV, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, 'hex')), decipher.final()]);
    return decrpyted.toString();
};