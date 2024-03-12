<script setup></script>
<template lang="pug">
.banner
  .wrapper
    .banner__inner
      section.banner__section
        .banner__button вкуснейшие
        .banner__title Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт-Петербургу
        .banner__description Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.
        .btn.btn-yellow.banner__button Перейти в каталог
        .banner__info 9 различных видов на выбор
</template>
<style lang="scss">
.banner{
  background-image: url('./first.png');
  background-size: cover;
  width: 100%;

  &__inner{
    padding-top: 188px;
    padding-bottom: 526px;
  }
}
</style>