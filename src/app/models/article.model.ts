
export class Article {
    constructor(
        public url: string,
        public author: string,
        public authorCountry: string,
        public board: string,
        public snapshot: string,
        public time: string,
        public like: number,
        public respond: number,
        public title: string,
        public unlike: number,
        public allcount: number,
    ) {

    }
}

export class Hotboard {
    constructor(
        public boardClass: string,
        public boardName: string,
        public boardUrl: string,
        public disscussCount: string,
    ) {

    }
}

export class Rigister {
    constructor(
        public email: string,
        public userName: string,
        public passWord: string,
    ) {

    }
}

export class Reply {
    constructor(
        public disscussionId: string,
        public articleNumber: string,
        public responeType: string,
        public userId: string,
        public disscuss: string,
        public userIp: string,
        public boardName: string,
    ) {

    }
}

export class Disscuss {
    constructor(
        public disscussId: string,
        public articleNumber: string,
        public responeType: string,
        public userId: string,
        public disscuss: string,
        public userIp: string,
        public boardName: string,
    ) {

    }
}

