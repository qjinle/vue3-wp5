<template>
    <div class="app-wrapper">
        <div>解析Vue文件了哟~</div>
        <p>{{ name }}</p>
        <p>vuex: {{ count }}</p>

        <button @click="toHome">home</button>
        <button @click="toDemo">demo</button>

        <div class="content-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import {
    computed, defineComponent, ref, Ref
} from 'vue';
import { Router, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const name: Ref<string> = ref('jinle');
        const router: Router = useRouter();
        const store = useStore();
        const count = computed(() => store.state.count);

        const toHome = () => {
            router.push({
                name: 'home'
            });
        };

        const toDemo = () => {
            router.push({
                name: 'demo'
            });
        };

        return {
            name,
            count,
            toHome,
            toDemo,
        };
    },
});
</script>

<style lang="scss" scoped>
.app-wrapper {
    border: 1px solid red;

    .content-wrapper {
        padding: 16px;
        background-color: darkcyan;
    }
}
</style>
