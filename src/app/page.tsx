import Link from "next/link";
import Image from "next/image";
import image from "../../public/picture.jpg"


export default function Home() {
  return (
   <>

  {/* Header */}

    <div className="bg-purple-300 w-100 h-20 text-right text-black text-2xl font-bold flex justify-evenly p-10">
     
      <div className="text-3xl font-bold h-100 text--600">

          WELCOME

      </div>

    <Link href={"/About"}> About </Link>

    <Link href={'/portfolio'}> Portfolio </Link>

    <Link href={'/Contactus'}> Contact US</Link>

    </div>



  {/*Intruduction*/}

    <div className='flex'>

    <div className='w-45 h-80 p-10'>

      <h1 className='text-5xl font-bold m-5 text-amber-500'>UX/UI DEVELOPER</h1>


      <h2 className=" text-4xl m-5 font-bold text-brown-500 ml-14"> FAIZA ABDUL QADIR </h2>


    <p className='text-2xl m-5 text-teal-500'>"Hello, I'm FAIZA, a beginner UI/UX developer with a design background, now exploring web development. I'm excited to combine my skills with coding expertise in HTML, CSS, and JavaScript to create user-friendly and visually appealing interfaces."
    </p>
    </div>
   
   {/* Image div */}
   
    <div className=' w-90 h-500 mr-20 mt-10'>

    <Image src={'/picture.jpg'} 
    width={1800}
    height={1200} 
    alt="picture"   
    />
    </div>

</div>


      {/* Footer div */}

 <div className="bg--500 w-full h-20 mt-auto flex justify-center items-center fixed bottom-0 ">

    <div className="flex justify-evenly p-40 text-white">

 <Link href={'https://www.linkedin.com'}>   

<Image src={'/linkedin.png'}
      alt="linkedin"
      width={30}
      height={30}
      
/>
<p>LinkedIn</p>

</Link>
</div>

<div className="flex justify-evenly p-40 text-white">

<Link href={'https://github.com'}>  

<Image src={'/github.jpeg'}
      alt="github"
      width={30}
      height={30}
/>
<p>Github</p>

</Link>

  </div>

  <div className="flex justify-evenly p-40 text-white">

<Link href={'https://www.facebook.com/'}>  

<Image src={'/facebook.png'}
      alt="facebook"
      width={30}
      height={30}
/>
<p>Facebook</p>

</Link>

  </div>


 </div>

   </>
  );
}