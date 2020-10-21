
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
    public discussions: Discussion[] = [];
    constructor(
        public articleNumber: string,
        public articleUrl: string,
        public author: string,
        public boardName: string,
        public body: string,
        public createTime: string,
        public respond: string,
        resDiscussions: any,
        public dislikeCount: string,
        public ipLocation: string,
        public lastUpdate: string,
        public likeCount: string,
        public neutralCount: string,
        public replyFromPttLite: string,
        public title: string,
    ) {
        this.discussions = resDiscussions.map(discussion => new Discussion(discussion));
    }
}

export class Discussion {
    public creatTime: string;
    public discussion: string;
    public discussionId: string;
    public fromPttLite: string;
    public responeType: string;
    public responeUserId: string;
    public responeUserIp: string;
    constructor(discussion: any) {
        this.creatTime = discussion.create_time;
        this.discussion = discussion.discussion;
        this.discussionId = discussion.nu;
        this.fromPttLite = discussion.from_pttLite;
        this.responeType = discussion.respone_type;
        this.responeUserId = discussion.respone_user_id;
        this.responeUserIp = discussion.respone_user_ip;
    }
}


export class MemberCenter {
    constructor(
        public nicName: string,
        public userIcon: string,
    ) { }
}



