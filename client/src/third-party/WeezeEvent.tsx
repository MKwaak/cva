import { FC } from 'react';

const WeezeEvent: FC = () => (
  <>
    <a
      title="Logiciel billetterie en ligne"
      href="https://weezevent.com/?c=sys_widget"
      className="weezevent-widget-integration"
      target="_blank"
      rel="noopener noreferrer"
      data-src="https://widget.weezevent.com/ticket/E575110/?id_evenement=575110&amp;lg_billetterie=2&amp;code=56788&amp;width_auto=1&amp;color_primary=fe9715"
      data-width="1000"
      data-height="auto"
      data-id="575110"
      data-resize="1"
      data-width_auto="1"
      data-noscroll="0"
      data-nopb="0"
      data-type="neo"
    >
      Tickets via Weezevent. Please reload the page.
    </a>
    <script type="text/javascript" src="https://widget.weezevent.com/weez.js" />
  </>
);

export default WeezeEvent;
