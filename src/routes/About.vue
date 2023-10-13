<template>
    <div class="about">
        <div class="photo">
            <Loader v-if="imageLoading" absolute />
            <img :src="image" alt="" />
        </div>
        <div class="name">
            {{ name }}
        </div>
        <div>
            {{ email }}
        </div>
        <div>
            {{ website }}
        </div>
        <div>
            {{ phone }}
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "~/components/Loader";

export default {
    components: {
        Loader,
    },
    data() {
        return {
            imageLoading: true,
        };
    },
    computed: {
        ...mapState("about", ["image", "name", "email", "website", "phone"]),
    },
    mounted() {
        // component가 화면에 연결된 후
        this.init();
    },
    methods: {
        async init() {
            await this.$loadImage(this.image);
            this.imageLoading = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.about {
    text-align: center;

    .photo {
        width: 250px;
        height: 250px;
        margin: 40px auto;
        padding: 30px;
        // border: 10px solid $gray-300;
        border-radius: 10px;
        box-sizing: border-box;
        background-color: $gray-200;
        position: relative;

        img {
            width: 100%;
            border-radius: 10px;
        }
    }

    .name {
        font-size: 40px;
        font-family: "Oswald", sans-serif;
        margin-bottom: 20px;
    }
}
</style>