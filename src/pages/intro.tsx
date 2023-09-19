import { IntroPage } from '../components/pages/intro/IntroPage';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { CustomHead } from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

export default function intro() {
  return (
    <>
      <CustomHead title={Seo.Title.intro} />
      <IntroPage></IntroPage>
    </>
  );
}

setLayout(intro, DefaultLayout);