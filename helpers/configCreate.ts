interface ISource {
  /** Name of your podcast in the podcast app */
  name: string;
  /** Currently only mp3 files on your filesystem or youtube channels are supported */
  type: "youtube" | "filesystem";
  /** Path to mp3 files on your filesystem, or youtube channel */
  location: string;
  /** URL path for your podcast. Ex: 'the_future' gets appended to your `baseURL` */
  url: string;
  /** Frequency to update, in seconds. No update of location if not specified */
  updateFreq?: number;
}
interface IConfig {
  /** URL from the client's perspective. Ex: 'https://my.server.com:8080/some/nginx/path'  */
  baseURL: string;
  /** Location on your filesystem where we cache youtube files. Defaults to `.cache` */
  cache?: string;
  /**List of ISource */
  sources: ISource[];
}

export function configCreate(obj: IConfig) {
  if (!obj.baseURL || !obj.sources || obj.sources.length === 0)
    return undefined;
  return obj;
}
