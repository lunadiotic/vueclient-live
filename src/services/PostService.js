import http from "../http";

class PostService 
{
    getAll() {
        return http.get("/posts");
    }

    get(id) {
        return http.get(`/posts/${id}`);
    }

    create(data) {
        return http.post("/posts", data);
    }

    update(id, data) {
        return http.put(`/posts/${id}`, data);
    }
}

export default new PostService;