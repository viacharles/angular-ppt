
export class Article {
    constructor(
        public num: string,
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

export class Body {
    constructor(
        public articleNumber: string,
        public articleUrl: string,
        public author: string,
        public boardName: string,
        public body: string,
    ) {
    }
}

export class ArticlePage {
    constructor(
        public articleNumber: string,
        public articleUrl: string,
        public author: string,
        public boardName: string,
        public body: string,
        public createTime: string,
        public respond: string,
        public discussionsCreatTime: string,
        public discussionsDiscussion: string,
        public discussionsDiscussionId: string,
        public discussionsFromPttLite: string,
        public discussionsResponeType: string,
        public discussionsResponeUserId: string,
        public discussionsResponeUserIp: string,
        public dislikeCount: string,
        public ipLocation: string,
        public lastUpdate: string,
        public likeCount: string,
        public neutralCount: string,
        public replyFromPttLite: string,
        public title: string,
            ) {
    }
}



