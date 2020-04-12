import http from "../http";

class PostService 
{
    getAll() {
        return http.get("/posts");
    }
}

export default new PostService;