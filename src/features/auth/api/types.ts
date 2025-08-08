export type SignInRequest = {
    email: string;
    password: string;
}

export type SignInResponse = {
    data: {
        token: string;
        user: {
            id: string;
            email: string;
            firstName: null | string;
            lastName: null | string;
            approved: boolean;
        };
    };
    status: string;
}

export type SignUpRequest = {
    email: string;
    password: string;
    clientId: string;
    firstName?: string;
    lastName?: string;
}
