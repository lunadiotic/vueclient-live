<template>
    <div>
        <form action="#" @submit.prevent>
            <div class="form-group">
                <label for="">Title</label>
                <input type="text"  id="title" class="form-control" v-model="post.title">
            </div>
            <div class="form-group">
                <label for="">Description</label>
                <textarea id="" cols="10" rows="4" class="form-control" v-model="post.description"></textarea>
            </div>
            <div class="form-grou">
                <label for="">Status: </label> {{ post.published }}
            </div>
            <button @click="postUpdate()" class="btn btn-success m-1">Update</button>
            <button class="btn btn-primary m-1">Published</button>
            <button class="btn btn-danger">Delete</button>
        </form>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import PostService from "../../services/PostService";

export default {
    name: "post-update",
    data() {
        return {
            post: {
                id: null,
                title: "",
                description: "",
                published: false
            },
            message: ''
        }
    },

    mounted() {
        this.getPost(this.$route.params.id);
    },

    methods: {
        getPost(id) {
            PostService.get(id)
                .then((result) => {
                    this.post = result.data;
                    console.log(result.data);
                }).catch((err) => {
                    console.log(err);
                });
        },

        postUpdate() {
            PostService.update(this.post.id, this.post)
                .then((result) => {
                    this.message = result.data.message;
                    console.log(result.data);
                }).catch((err) => {
                    console.log(err)
                });
        }
    }
}
</script>