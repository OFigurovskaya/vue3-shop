<script>
import BaseHeader from '../components/BaseHeader.vue';
import BaseFooter from '../components/BaseFooter.vue';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
    name: 'ContactsPage',
    data() {
        return {
            path: '/contacts',
            indexPage: 4,
            placemarks: [
                {
                    coordinates: [54.8, 39.8],
                    properties: {}, 
                    options: {}, 
                    clusterName: "1",
                    callbacks: { click: function () { } },
                }
            ]
        }
    },
    components: {
        BaseHeader,
        BaseFooter,
        BreadCrumbs,
        yandexMap,
        ymapMarker
    },
}
</script>

<template>
    <BaseHeader :indexPage="indexPage"/>
    <main class="contactspage container">

        <h1 class="contactspage__title title mt-8 mb-25">Контакты</h1>
        <BreadCrumbs :path="path" name="Контакты" />

        <div id="map">
            <yandexMap :coordinates="[55.685030569063066,37.537361499999996]" :zoom="14" style="width: 50vw; height: 600px;"
                :cluster-options="{
                    1: { clusterDisableClickZoom: true }
                }" :behaviors="['ruler']" :controls="['trafficControl']" :placemarks="placemarks" map-type="map" />
        </div>

        <div class="contacts">
            <div class="contacts__tel">
                <p>Телефон</p>
                <a href="tel:+74958235412">+7 (495) 823-54-12</a>
            </div>
            <div class="contacts__mail">
                <p>E-mail</p>
                <a href="mailto:hello@womazing.com">hello@womazing.com</a>
            </div>
            <div class="contacts__address">
                <p>Адрес</p>
                <a href='#'>г. Москва, 3-я улица Строителей, 25</a>
            </div>
        </div>

    </main>
    <BaseFooter />
</template>