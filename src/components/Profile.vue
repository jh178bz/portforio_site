<template>
  <div>
    <h1 class="content-title">Profile</h1>
    <div class="Profile">
      <div class="profile-content">
        <carousel :per-page="1" :autoplay="true" :loop="true" :autoplayTimeout="4000" :speed="1000" :centerMode="true">
          <slide>
            <div class="carousel-image">
              <img src="../css/image/profile.jpg" alt="">
            </div>
          </slide>
          <slide>
            <div class="carousel-image">
              <img src="../css/image/profile2.jpg" alt="">
            </div>
          </slide>
          <slide>
            <div class="carousel-image">
              <img src="../css/image/profile4.jpg" alt="">
            </div>
          </slide>
        </carousel>
        <h2>服部  丈(はっとり じょう)</h2>
        <div class="text-content">
          <p class="txt">
            生年月日：１９９８年７月２日大阪生まれ<br>
            趣味：バイク(レース・サーキット走行)・登山・キャンプ(アウトドア全般)、英語学習<br>
            出身校：大阪市立都島工業高校 機械電気科<br>
            <br>
            幼少期からロボットなどの機械や・電気、宇宙や天体観測に興味を持ちものづくりに関わるエンジニアを志す。<br>
            卒業後は幼少期からの夢であった航空宇宙分野で貢献する為、住友精密工業株式会社に入社。<br>
            現在はプログラミングの魅力に惹かれ、多くの人々を豊かにするサービスやしくみを創造していきたいと考えエンジニアになることを目標に活動中。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
    Carousel,
    Slide
    }
  }
</script>
