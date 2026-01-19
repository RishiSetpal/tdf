export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public address: Address,
        public topic: string,
        public timePrefernce: string,
        public subscribe: boolean
    ) { }

}

export class Address {
    constructor(
        public street: string,
        public city: string,
        public zipCode: string
    ) { }
}
