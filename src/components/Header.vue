<script setup></script>

<template lang="pug">
header.header
    .wrapper
        .header__menu.grid
            a.header__logo(href='#') Сладкий сундук
            .header__address
                .icon.icon-geo
                .header__addressDescription г. Санкт Петербург, ул. Куйбышева 31
            .header__phone
                .icon.icon-phone
                .header__phoneValue 8 (812) 844-95-49
                .header__phoneDescription Ежедневно с 9:00 до 20:00
</template>

<style lang="scss">
.header__menu{
    grid-template-columns: 3fr 1fr 1fr;
}
</style>