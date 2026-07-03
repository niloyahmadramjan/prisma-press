export interface UserRegisterPayload {
    name: string;
    email: string;
    password: string;
    profilePhoto?: string;
    bio?: string;
}