import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <main>
        <h1 className='text-7xl font-bold text-cyan-300 md:text-red-600 lg:text-yellow-600'>
          font
        </h1>
        <div className='border border-blue-500 py-4 px-5 font-normal'>font-normal</div>
        <div className='border border-blue-500 py-4 px-5 font-medium'>font-medium</div>
        <div className='border border-blue-500 py-4 px-5 font-semibold'>font-medium</div>
        <div className='border border-blue-500 py-4 px-5 font-bold'>font-bold</div>
      </main>
    </>
  )
}
