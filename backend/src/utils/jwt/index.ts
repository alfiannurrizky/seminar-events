import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
import { UserType } from '../../types/UserType'
dotenv.config()

class JWT {
    signToken(payload: UserType, expires = '1d'): Promise<string | undefined> {
        return new Promise((resolve, reject) => {
            jwt.sign(
                {
                    payload: payload,
                    iat: Date.now()
                },
                process.env.TOKEN_ADMIN!,
                {
                    expiresIn: expires
                },
                (err, token) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(token)
                }
            )
        })
    }

    verifyToken(token: string): Promise<jwt.JwtPayload | undefined> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.TOKEN_ADMIN!, (err, decoded) => {
                if (err) {
                    reject(err)
                }
                resolve(decoded as JwtPayload)
            })
        })
    }

    signTokenStudent(
        payload: UserType,
        expires = '1d'
    ): Promise<string | undefined> {
        return new Promise((resolve, reject) => {
            jwt.sign(
                {
                    payload: payload,
                    iat: Date.now()
                },
                process.env.TOKEN_STUDENT!,
                {
                    expiresIn: expires
                },
                (err, token) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(token)
                }
            )
        })
    }

    verifyTokenStudent(token: string): Promise<jwt.JwtPayload | undefined> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.TOKEN_STUDENT!, (err, decoded) => {
                if (err) {
                    reject(err)
                }
                resolve(decoded as JwtPayload)
            })
        })
    }
}

export default new JWT()
