import Vue from 'vue'

// @add by chengyu 
// more such as isWeibo isWeixin isXpcApp isVmovierApp
interface Device {
  userAgent: string
  isDesktop: boolean
  isIos: boolean
  isAndroid: boolean
  isMobile: boolean
  isMobileOrTablet: boolean
  isDesktopOrTablet: boolean
  isTablet: boolean
  isWeibo: boolean
  isIosWeixin: boolean
  isAndroidWeixin: boolean
  isWeixin: boolean
  isXpcApp: boolean
  isVmovierApp: boolean
  isWindows: boolean
  isMacOS: boolean
  isSafari: boolean
  isFirefox: boolean
  isEdge: boolean
  isChrome: boolean
  isSamsung: boolean
  isCrawler: boolean
}

declare module '@nuxt/vue-app' {
  interface Context {
    $device: Device
  }

  interface NuxtAppOptions {
    $device: Device
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $device: Device
  }
  interface NuxtAppOptions {
    $device: Device
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $device: Device
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $device: Device
  }
}
