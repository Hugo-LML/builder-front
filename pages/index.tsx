import Seo from '@/components/common/Seo/Seo';

export default function Home() {
  return (
    <>
      <Seo title='This is a title' description='This is a description' />
      <h1 className='text-xl font-semibold'>Hello world !</h1>
    </>
  );
}
