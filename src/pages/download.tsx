import { DownloadPage } from '@/components/pages/download';
import { setLayout } from '@/utils/setLayout';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { CustomHead } from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

export default function download() {
  return (
    <>
      <CustomHead title={Seo.Title.download} />
      <DownloadPage></DownloadPage>
    </>
  );
}

setLayout(download, DefaultLayout);