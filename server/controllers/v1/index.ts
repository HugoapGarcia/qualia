import { PostController } from './post';

class Api {
    public post: any;
    public hackerrank: any;

    constructor() {
        this.post = new PostController().welcome;
    }

}

export { Api }
