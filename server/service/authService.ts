import verifyCredential from "../auth/auth";

export class AuthService{
    async authUp(token: string) {
        const payload = await verifyCredential(token)
        console.log(payload)
    }
}