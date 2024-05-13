import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
// eslint-disable-next-line import/extensions
import { MailChimp } from './MailChimp';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <Sponsors /> */}
    <VerticalFeatures />
    {/* <Banner /> */}
    <MailChimp />
    <Footer />
  </div>
);

export { Base };
