import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import react from 'react';

export default function rhino() {
  return (
    <div>


        <nav className=' h-20 bg-white flex items-center justify-between top-0 z-50'>
          <div className=' pt-1 pl-12 text-xl font-bold '>PPC Pocket</div>
          <div className='pt-2'>
              <ul className="hidden lg:flex gap-x-16 font-medium tracking-wide ">
                  <li className="cursor-pointer cool-link text-black">Home</li>
                  <li className="cursor-pointer cool-link text-gray-500">Features</li>
                  <li className="cursor-pointer cool-link text-gray-500">Prices</li>
                  <li className="cursor-pointer cool-link text-gray-500">Contacts</li>
              </ul>
          </div>
          <div className="hidden lg:block pr-6">
              <button className="text-black bg-white px-5 py-2 rounded-full appearance-none outline w-32">
                Sign up
              </button>
          </div>
        </nav>


        <div className='flex flex-row gap-24 pl-24 bg-gray-200 rounded-lg pb-14'>
            <div className='max-h-fit w-2/5 pt-14 pl-20 '>
              <p className=' font-bold text-6xl'>Maximize Every Euro You Spend on Google Ads</p>
              <p className=' pt-8 font-normal text-base text-gray-400'>PPC Pocket gives you all the tools you need to create relevant,targeted and optimized Google Ads Accounts</p>
              <div className=' pt-12'>
                  <button className='font-medium text-lg text-white bg-gray-800 h-12 w-32 rounded-2xl'>Get Started</button>
              </div>
             </div>
             <div className='pt-10 pl-64'>
                <div className="cursor-pointer cool-link" >
                  <Image src="/assets/Screenshot 2023-02-08 103133.jpg" alt="Man" width={450} height={450}/>
                </div>
             </div>
        </div>


        <center className='pt-20'>
            <div className=" h-max-fit w-1/5 text-center">
              <p className='font-medium text-3xl'>Better PPC Performance starts here</p>
            </div>
            <div className=" h-max-fit w-1/3 text-center pt-6">
              <p className='font-normal text-sm text-gray-400'>Whether you are an agency looking for a competitive edge or a buisness juggling multiple campaigns, PPC Pocket arms you with the insights and functionality needed to build campaigns that maximize every Euro spent.</p>
            </div>
        </center>


        <div className=' pt-12 pb-12 flex flex-row items-center justify-center gap-6'>
          <div className=' box-content h-52 w-80 bg-white rounded-3xl drop-shadow-2xl cursor-pointer cool-link'>
            <div className='p-4 flex felx-row'>
            <div className=' bg-purple-600 h-11 w-11 rounded-full'></div>
            <div className='pl-3 pt-2 font-medium text-base'>Foundation concepts of coding</div>
            </div>
            <div className='pl-6 pt-1 pr-6 pb-3'>
              <p className=' font-normal text-sm text-gray-400'>The concepts taught in this course are the foundation of coding. Having mastery over them ensures that you come up as a great coder.</p>
            </div>
           </div>

           <div className=' box-content h-52 w-80 bg-white rounded-3xl drop-shadow-2xl cursor-pointer cool-link'>
            <div className='p-4 flex felx-row'>
            <div className=' bg-purple-600 h-11 w-11 rounded-full'></div>
            <div className='pl-3 pt-2 font-medium text-base'>Foundation concepts of coding</div>
            </div>
            <div className='pl-6 pt-1 pr-6 pb-3'>
              <p className=' font-normal text-sm text-gray-400'>The concepts taught in this course are the foundation of coding. Having mastery over them ensures that you come up as a great coder.</p>
            </div>
           </div>

           <div className=' box-content h-52 w-80 bg-white rounded-3xl drop-shadow-2xl cursor-pointer cool-link'>
            <div className='p-4 flex felx-row'>
            <div className=' bg-purple-600 h-11 w-11 rounded-full'></div>
            <div className='pl-3 pt-2 font-medium text-base'>Foundation concepts of coding</div>
            </div>
            <div className='pl-6 pt-1 pr-6 pb-3'>
              <p className=' font-normal text-sm text-gray-400'>The concepts taught in this course are the foundation of coding. Having mastery over them ensures that you come up as a great coder.</p>
            </div>
           </div>
        </div>


        <div className='flex flex-row pl-40 pb-20'>
            <div className='pt-12 pl-40'>
            <Image src="/assets/l1.jpg" alt="logo" width={550} height={550}/>
             </div>
             <div className='pt-40 pl-14'>
                <div className='h-max-fit w-72'>
                  <p className='font-medium text-4xl'>Get the most out of your ads</p>
                </div>
                <div className='h-max-fit w-72 pt-6'>
                  <p className='font-normal text-sm text-gray-500'>Lorem ipsum dolor sit amet, consetetur adipiscing elit. Vivamus lacinia, sem id mattis facillisis, massa justo egestas nulla efficitur fermentum. Maecenas sed nisi lobortis, cursus nisl non, cursus libero.</p>
                </div>
                <div className=' pt-6'>
                    <button className='border border-black rounded-xl h-10 w-32'>Learn More</button>
                </div>                 
             </div>
        </div>


        <div className=' w-[1800px] h-[451px] bg-[#F9EAE1] '>
          <div className='p-16 flex flex-row items-center justify-center'>
            <div className='w-[562px] h-[210px]  '>
              <p className='font-bold text-[58px] leading-[70.19px] text-[#2A3A4E]'>Optimize like the pros, start your free trial</p>
            </div>
            <div className='pl-10'>
              <input className="w-[319px] h-[76px] p-2 text-[19px] text-[#929292] rounded-md" type="email" placeholder='Enter your email'/>
            </div>
            <div>
              <button className='text-white bg-black w-[119px] h-[76px] rounded-md'>Get Started</button>
            </div>
          </div>

        </div>

        <center>
        <div className='pt-20'>
                <div className='font-medium text-4xl'>Top Features</div>
                <div className='pt-8 flex flex-row gap-8 items-center justify-center'>
                    <div>
                      <button className='border-gray-200 w-40 border p-2 rounded-lg'>Landing Page Crawler</button>
                    </div>
                    <div>
                      <button className='border-gray-200 w-40 border p-2 rounded-lg'>Landing Page Crawler</button>
                    </div>
                    <div>
                      <button className='border-gray-200 w-40 border p-2 rounded-lg'>Landing Page Crawler</button>
                    </div>
                    <div>
                      <button className='border-gray-200 w-40 border p-2 rounded-lg'>Landing Page Crawler</button>
                    </div>
                    <div>
                      <button className='border-gray-200 w-40 border p-2 rounded-lg'>Landing Page Crawler</button>
                    </div>
                    <div>
                      <button className='border-gray-200 w-40 border p-2 rounded-lg'>Landing Page Crawler</button>
                    </div>
                </div>
                <div className=' pt-16'>
                <Image src="/assets/l2.jpg" alt="logo2" width={1454} height={741}/>
                </div>
        </div>
        </center>


        <div className='pt-10 flex flex-row items-center justify-center gap-14'>
          <div className='pl-10 pt-12'>
            <div className='h-[609px] w-[553px] border-[#A081F2] border-2 rounded-md'>
              <div className='h-[585px] w-[534px] border-[#A081F2] border-2 rounded-md '>
                <div className='h-[569px] w-[517px] rounded-md '>
                  <Image src="/assets/Rectangle 6.jpg" height={569} width={517} alt="Rectangle 6"/>
                </div>
              </div>
            </div>
          </div>
          <div>
          <Image src="/assets/ss1.png" height={469} width={693} alt="Clients Say"/>
          </div>
        </div>


        <div className='pt-12'>
            <div className='h-[451px] w-[1800px] bg-[#F9EAE1]'>
              <center>              
                  <div className='pt-24 w-[588px] h-[140px]'>
                    <p className=' font-bold text-5xl'>Get started with PPC pocket today</p>
                    </div>
                    <div className='pt-20 w-[437.54px] h-[57px]'>
                    <p className='font-medium text-lg text-gray-400 '> nulla efficitur fermentum. Maecenas sed nisi lobortis, cursus nisl non, cursus libero.</p>
                  </div>
                  <div className='pt-20'>
                    <button className='w-[167px] h-[66px] text-lg bg-[#2F3F52] text-white pt-21 pb-21 pl-26 pr-26'>Free Trial</button>
                  </div>
                  </center>
            </div>
        </div>
        

        <div className='pt-12'>
        <Image src="/assets/ss2.png" height={800} width={1556} alt="Insights"/>
        </div>


        <center>
          <div className='pt-12'>
            <div className='w-[815px] h-[122px] font-bold text-6xl'>
            Discover new PPC marketing tips,strategies, and insights
            </div>
            <div className='pt-16'>
              <button className='w-[162px] h-[66px] border-[1px] rounded-full border-[#A5A5A5] font-normal text-[#33363F]'>All Posts</button>
            </div>
          </div>
          <div className='pt-20 flex flex-row items-center justify-center gap-20'>
            <div>
              <div>
              <Image src="/assets/Rectangle 11.png" height={269} width={412} alt="Insights"/> 
              </div>
              <div className='h-[54px] w-[348px] text-[#2A3A4E] text-[22px] pt-4 text-start '>
              RSA Optimization series: part 1 -RSAs vs ETAs
              </div>
              <div className='pt-8'>
              <div className='h-[54px] w-[348px] pt-6 flex flex-row items-center justify-between'>
                <div className='w-[186.21px] h-[30px] text-[#2A3A4E] text-[21px] text-start'>
                January 16, 2022
                </div>
                <div className=' w-[110.91px] h-[30px] text-[#A081F2] text-[21px] '>
                  <u><a href="">Read More</a></u>
                </div>
              </div>
              </div>
            </div>

            <div>
              <div>
              <Image src="/assets/Rectangle 12.png" height={269} width={412} alt="Insights"/> 
              </div>
              <div className='h-[54px] w-[348px] text-[#2A3A4E] text-[22px] pt-4 text-start '>
              Finding competative and data insights using the auction insights report
              </div>
              <div className='pt-8'>
              <div className='h-[54px] w-[348px] pt-6 flex flex-row items-center justify-between'>
                <div className='w-[186.21px] h-[30px] text-[#2A3A4E] text-[21px] text-start'>
                January 16, 2022
                </div>
                <div className=' w-[110.91px] h-[30px] text-[#A081F2] text-[21px] '>
                  <u><a href="">Read More</a></u>
                </div>
              </div>
              </div>
            </div>

            <div>
              <div>
              <Image src="/assets/Rectangle 13.png" height={269} width={412} alt="Insights"/> 
              </div>
              <div className='h-[54px] w-[348px] text-[#2A3A4E] text-[22px] pt-4 text-start '>
              How to create proper keyword themed ad group for google ads
               </div>
               <div className='pt-8'>
              <div className='h-[54px] w-[348px] flex flex-row items-center justify-between'>
                <div className='w-[186.21px] h-[30px] text-[#2A3A4E] text-[21px] text-start'>
                January 16, 2022
                </div>
                <div className=' w-[110.91px] h-[30px] text-[#A081F2] text-[21px] '>
                  <u><a href="">Read More</a></u>
                </div>
              </div>
              </div>
            </div>
          </div>

            <div className='pt-20'>
              <div className=' w-[424px] h-[122px] text-[50px] text-[#2A3A4E] leading-[60.51px] '>
              Choose a plan for your business 
              </div>
              <div className=' w-[624.77px] h-[57px] text-[21px] text-[#2A3A4E] leading-[25.41px] pt-4'>
              sem id mattis facilisis, massa justo egestas nulla efficitur fermentum. Maecenas sed nisi lobortis, cursus nisl non, cursus libero.
              </div>
            </div>

            <div className='pt-20'>
            <Image src="/assets/ss3.png" height={762} width={1386} alt="Insights"/> 
            </div>
        </center>


        <div className=' w-[1800px] h-[451px] bg-[#F9EAE1] pt-10'>
          <div className='p-24 flex flex-row items-center justify-center'>
            <div className='w-[669px] h-[210px] '>
              <p className='font-bold text-[58px] leading-[70.19px] text-[#2A3A4E] '>Starting Creating better google ads. try PPC Rocket for free</p>
            </div>
            <div className=''>
            <div className='pl-8 w-[624.77px] h-[57px] text-[21px] text-[#2A3A4E] leading-[25.41px] '>
            sem id mattis facilisis, massa justo egestas nulla efficitur fermentum. Maecenas sed nisi lobortis, cursus nisl non, cursus libero.
            </div>
            <div className='pt-12 pl-8'>
              <button className=" w-[187px] h-[66px] bg-[#2F3F52] text-[18px] leading-[21.78px] text-[#FFFEFE] rounded-full ">Get Started</button>
            </div>
            </div>
          </div>
        </div>


        <div className="col-span-1 grid grid-cols-5 pt-24 pl-32">
            <div className="">
              <p className="text-[#2A3A4E] text-[33px] w-[188px] h-[40px] leading-[39.94px]">PPC Rocket</p>
               <p className='pt-6 w-[196.39px] h-[86px] text-[21px] leading-[25.41px]'>support@ppcr.com +12 545 353 637</p>
            </div>
            <div className="pl-40">
              <p className="text-[#2A3A4E] w-[89px] h-[25px] text-[21px]">Features</p>
              <ul className="text-[#2A3A4E] space-y-3 mt-5 text-[15px]">
                <li>Benefits</li>
                <li>Feature</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="pl-20">
              <p className="text-[#2A3A4E] w-[89px] h-[25px] text-[21px]">Support</p>
              <ul className="text-[#2A3A4E] space-y-3 mt-5 text-[15px]">
                <li>Help center</li>
                <li>Send us mail</li>
              </ul>
            </div>
            <div className="pl-8">
              <p className="text-[#2A3A4E] w-[100px] h-[25px] text-[21px]">Follow Us</p>
              <ul className="text-[#2A3A4E] space-y-3 mt-5 text-[15px]">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="pl-14">
              <p className="text-[#2A3A4E] w-[100px] h-[25px] text-[21px]">Contact us</p>
              <ul className="text-[#2A3A4E] space-y-3 mt-5 text-[15px]">
                <li>Alemghture 1236476</li>
                <li>MehgreP:</li>
                <li> 0172/3/9/071</li>
                 
              </ul>
            </div>
          </div>




         

    </div>
  );
}
