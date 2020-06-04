<template>
  <div class="home">
    <!--  顶部部分-->
    <HeaderTop></HeaderTop>
<!--    logo部分-->
    <Logo></Logo>
<!--    nav切换部分-->
    <Nav></Nav>
<!--    home主要内容部分-->
    <HomeContent></HomeContent>
<!--    footer-->
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderTop from '@/components/common/HeaderTop.vue'
import Logo from '@/components/common/Logo.vue'
import Nav from '@/components/common/Nav.vue'
import Footer from '@/components/common/Footer.vue'
import HomeContent from '@/components/Home/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    HeaderTop,Logo,Nav,HomeContent,Footer
  }
}
</script>
