<script setup>
import Marker from '../assets/svg/map-marker.svg'
import Phone from '../assets/svg/phone.svg'
</script>

<template lang="pug">
header.header
  .wrapper
    .header__menu
      a.header__logo(href="#") Сладкий сундук
      .header__addressIcon
        Marker
      .header__addressDescription г. Санкт-Петербург, ул. Куйбышева 31
      .header__phoneIcon
        Phone
      .header__phoneValue 8 (812) 844-95-49
      .header__phoneDescription Ежедневно с 9:00 до 20:00
</template>

<style lang="scss">
.header{
    margin-top: 37px;

    &__menu{
        display: grid;
        grid-template-columns: 3fr 26px 1fr minmax(88px, auto) 32px 1fr;
        grid-template-areas:
          "logo ai ad . pi pv"
          "logo ai ad . pi pd"
        //grid-template-columns: 2fr minmax(151px, 1fr) 1fr;
    }
    &__logo{
      grid-area: logo;
      color: var(--white);
      font-size: 21px;
      font-weight: 500;
    }
    &__addressIcon{
      grid-area: ai;
    }
    &__addressDescription{
      grid-area: ad;
      margin-right: 30px;
      font-size: 12px;
    }
    &__phoneIcon{
      grid-area: pi;
    }
    &__phoneValue{
      grid-area: pv;
      font-size: 20px;
      font-weight: 700;
    }
    &__phoneDescription{
      grid-area: pd;
    }
}
</style>