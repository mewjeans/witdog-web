import { CompanyPage } from '@/components/pages/company';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { CustomHead } from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

export default function company() {
  return (
    <>
      <CustomHead title={Seo.Title.company} />
      <CompanyPage></CompanyPage>
    </>
  );
}

setLayout(company, DefaultLayout);