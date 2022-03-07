<script setup lang="ts">
    import { useStore } from '../models/Messages';

    const message = useStore();
</script>

<template>
    <div v-for=" (x, i) in message.notifications" :class="`notification is-${x.type}`">
        <button class="delete" @click="messages.close(i)" ></button>
        {{ x.message }}
    </div>
</template>



<style scoped>

</style>