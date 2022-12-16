export type LoginDTO = {
    email: string | null;
    password: string | null;
}

export interface AuthServiceInterface {
    login(loginDTO: LoginDTO): Promise<void>;
    logout(): Promise<void>;
}