
export type heroType = {
    name?:  string,
    accessLevel? :number,
    active?: boolean,
    email?:string,
    password?: string,
}

export type responseType = {
    status?: boolean,
    message?: string,
    data? : array | object | string | number
}