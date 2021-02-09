type Event = 'error' | 'pageview' | 'search articles';

interface GTMEvent {
  event: Event;
  errorType?: string;
  path?: string;
  pageTitle?: string;
  articleResults?: string[] | string;
}

// eslint-disable-next-line import/prefer-default-export
export declare global {
  interface Window {
    GA_INITIALIZED: boolean;
    dataLayer: GTMEvent[];
  }
}
