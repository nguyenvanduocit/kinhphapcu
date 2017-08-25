<template>
  <div id="app">
    <site-header></site-header>
    <main class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/shared/SiteHeader'
import SiteFooter from '@/components/shared/SiteFooter'
export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>
<style lang="scss" scoped>
  #app{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    > .site-header{
      flex-grow: 0;
      flex-shrink: 0;
    }
    > .main{
      flex-grow: 1;
      margin-bottom: 90px;
    }
    > .site-footer{
      flex-shrink: 0;
      flex-grow: 0;
    }
  }
</style>
