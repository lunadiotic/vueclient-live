import http from "../http";

class PostService 
{
    getAll() {
        return http.get("/posts");
    }

    create(data) {
        return http.post("/posts", data);
    }
}

export default new PostService;