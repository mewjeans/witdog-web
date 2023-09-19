import { HomePage } from '@/components/pages/home';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { CustomHead } from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

export default function index() {
  return (
    <>
      <CustomHead title={Seo.Title.home} />
      <HomePage></HomePage>
    </>
  );
}

setLayout(index, DefaultLayout);