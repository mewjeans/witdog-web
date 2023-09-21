import { DemoPage } from '@/components/pages/demo';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { CustomHead } from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

export default function demo() {
  return (
    <>
      <CustomHead title={Seo.Title.demo} />
      <DemoPage></DemoPage>
    </>
  );
}

setLayout(demo, DefaultLayout);