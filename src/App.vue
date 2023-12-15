<template>
  <div class="donate-page">
    <div class="donate-page-background"></div>
    <div class="donate-card">
      <h1 class="donate-card-title">
        <span style="font-weight:400;">Support</span> Do Vu Tuan 🎉
      </h1>

      <img width="452"
           height="227"
           alt="Đỗ Vũ Tuấn"
           class="donate-card-poster mt-1">

      <div class="donate-method-label">
        <span>DONATE WITH</span>
      </div>

      <div class="donate-card-buttons">

        <button v-for="(qrCode, index) in qrCodes"
                :key="index"
                class="donate-button"
                :class="qrCode.classColor"
                @click="onShowQrCode(qrCode.qr)">
          <img :src="qrCode.icon" :alt="qrCode.name">
        </button>

      </div>

      <div class="mt-1" style="text-align:right">
        <a v-for="(social, index) in socials" :key="index" :href="social.url" class="ref-link" target="_blank">
          {{ social.name }}
        </a>
      </div>
    </div>

    <div v-if="imageQr" class="qr-code">
      <img :src="imageQr">
    </div>
  </div>

  <div v-if="imageQr" class="backdrop" @click="onOutShowQrCode"></div>
</template>

<script setup>
import {ref} from "vue";

const qrCodes = ref([
  {
    name: 'Momo',
    icon: '/donate/icon/momo.png',
    classColor: 'momo',
    qr: '/donate/qrcode/momo-qr.png'
  },
  {
    name: 'Buy me a coffee',
    icon: '/donate/icon/buymeacoffee.png',
    classColor: 'buymeacoffee',
    qr: '/donate/qrcode/buymeacoffee-qr.png'
  },
  {
    name: 'Banking',
    icon: '/donate/icon/techcombank.png',
    classColor: 'banking',
    qr: '/donate/qrcode/bank-qr.png'
  },
]);

const socials = ref([
  {name: 'Github', url: 'https://github.com/dovutuan'},
  {name: 'Viblo', url: 'https://viblo.asia/u/dovutuan'},
]);

const imageQr = ref(null);

const onShowQrCode = (qrcode) => {
  imageQr.value = qrcode;
}

const onOutShowQrCode = () => {
  imageQr.value = null;
}
</script>

<style lang="scss" src="./style.scss"></style>
