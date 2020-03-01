declare module "vue/types/vue" {
  interface Vue {
    $notification(title: string, options?: NotificationOptions): Notification;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $notification(title: string, options?: NotificationOptions): Notification;
  }
  interface Configuration {
    "nuxt-notification"?: {
      requestPermissionImediate?: boolean;
      baseOptions?: NotificationOptions;
    };
  }
}
