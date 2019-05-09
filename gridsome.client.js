import SimpleAnalytics from "simple-analytics-vue";

/**
 * @param Vue                 Vue instance
 * @param options             Plugin options
 * @param context.appOptions  Options for the Vue instance
 * @param context.router      The router instance
 * @param context.head        VueMeta info objet
 * @param context.isClient
 * @param context.isServer
 */
export default function (Vue) {
  if (process.isClient) {
    Vue.use(SimpleAnalytics, { skip: process.env.NODE_ENV !== 'production' });
  }
}
