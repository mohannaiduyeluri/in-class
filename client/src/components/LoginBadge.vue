<script>
</script>

<template>
  <div class="buttons" v-if="!session.user">
    <router-link class="button is-primary" to="/signup">
      <strong>Sign up</strong>
    </router-link>
    <router-link class="button is-light" to="/login"> Log in </router-link>
  </div>
  <div class="buttons" v-else>

<div class="avatar">
    <img :src="session.pic"/>
    <div>
        <strong>{{session.user.firstName}}{{session.user.lastName}}</strong>
        {{session.user.email}}
    </div>
    <a @click="logout" class="button is-primary">

    </a>

</div>
  </div>
</template>



<style lang="scss" scoped>
    .avatar{
        display: flex;
	    align-items: center;
        justify-content: center;
        margin-right: 5em;
        line-height: 1em;

	    gap:0.5em;
    }

    img{
        width: 48x;
        height: 48px;
    }
</style>