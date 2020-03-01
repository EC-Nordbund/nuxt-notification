import { Module } from "@nuxt/types";

declare module "vue/types/vue" {
  interface Vue {
    $notification(title: string, options?: NotificationOptions): Notification;
  }
}

interface Options {
  requestPermissionImediate?: boolean;
  baseOptions?: NotificationOptions;
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $notification(title: string, options?: NotificationOptions): Notification;
  }
  interface Configuration {
    "nuxt-notification"?: Options;
  }
}

declare const notificationModule: Module<Options>;
export { Options };
export default notificationModule;
