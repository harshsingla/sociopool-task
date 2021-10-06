export const errorObj = { error: true, type: "error", success: false };
export const successObj = { error: false, type: "success", success: true };
export const secret = process.env.SECRET_KEY || "thejbg@6785#*jgv*ign";

export interface ErrorObj {
    error: boolean;
    type: string;
    success: boolean;
    data: any;
    message: string;
}

export interface SuccessObj {
    error: boolean;
    type: string;
    success: boolean;
    data: any;
    message: string;
}

export interface ApiResp {
    error: boolean;
    success: boolean;
    type: string;
    data?: object | Record<string, any>[];
    message: string;
    err?: object;
}

export interface BodyData { [key: string]: string; }
