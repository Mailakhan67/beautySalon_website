import Image from 'next/image'

const Header = () => {
  return (
    <div className='mt-14 h-full '>
      <div className='text-center mt-10'>
        <h1 className='font-bold text-6xl font-serif leading-normal'>Bridale Makeup</h1>
        <p className='mt-10 text-justify text-[#000000] px-24  leading-normal text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis eveniet temporibus perferendis cupiditate ex recusandae minus sequi, eligendi neque quis fugiat reprehenderit libero voluptate culpa vitae dignissimos consectetur asperiores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis eveniet temporibus perferendis cupiditate ex recusandae minus sequi, eligendi neque quis fugiat reprehenderit libero voluptate culpa vitae dignissimos consectetur asperiores. </p>

        <div className='mt-10 grid grid-cols-4 gap-4'>
       <Image src={'/brideimage1.jpeg'} alt='Bride' width={300} height={200} className='rounded-md shadow-lg shadow-gray-300 hover:bg-slate-100'/> 
       <Image src={'/brideimage2.jpeg'} alt='Bride' width={350} height={300} className='rounded-md shadow-lg shadow-gray-300'/> 
       <Image src={'/brideimage3.jpeg'} alt='Bride' width={330} height={250} className='rounded-md shadow-lg shadow-gray-300'/> 
       <Image src={'/brideimage4.jpeg'} alt='Bride' width={350} height={300} className='rounded-md shadow-lg shadow-gray-300'/> 
        </div>
      </div>
      {/* section2 start */}
      <div className='text-center mt-20'>
        <h1 className='font-bold text-6xl font-serif leading-normal'>Engagement Makeup</h1>
        <p className='mt-10 text-justify text-[#000000] px-24  leading-normal text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis eveniet temporibus perferendis cupiditate ex recusandae minus sequi, eligendi neque quis fugiat reprehenderit libero voluptate culpa vitae dignissimos consectetur asperiores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis eveniet temporibus perferendis cupiditate ex recusandae minus sequi, eligendi neque quis fugiat reprehenderit libero voluptate culpa vitae dignissimos consectetur asperiores. </p>

        <div className='mt-10 grid grid-cols-4'>
       <Image src={'/engmakeup1.jpeg'} alt='Bride' width={300} height={200} className='rounded-md shadow-lg shadow-gray-300'/> 
       <Image src={'/engmakeup2.jpeg'} alt='Bride' width={300} height={200} className='rounded-md shadow-lg shadow-gray-300'/> 
       <Image src={'/engmakeup3.jpeg'} alt='Bride' width={350} height={350} className='rounded-md shadow-lg shadow-gray-300'/> 
       <Image src={'/engmakeup4.jpeg'} alt='Bride' width={320} height={260} className='rounded-md shadow-lg shadow-gray-300'/> 
        </div>

      </div>
      {/* section2 end */}

   

     

    </div>
  )
}

export default Header
