import ButtonAlt from '@/components/ButtonAlt'
import ButtonPrimary from '@/components/ButtonPrimary'
import ButtonSecondary from '@/components/ButtonSecondary'
import SectionContainer from '@/components/SectionContainer'
import TestimonialsCard from '@/components/TestimonialsCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="page-container">

        <section className="hero min-h-screen w-full"
          style={{
            backgroundImage: 'url("./images/bg_hero.png")', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'top center', 
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="section-container grid items-end px-8 md:px-16 pt-[75vh] md:pt-[75vh]">
            <h1 className="hero-title text-h1 font-normal text-text-white mb-6">Marathon bike</h1>
            <div className='w-full h-[1px] bg-border' />
            <div className="hero-cta py-9 flex gap-4 flex-col md:flex-row md:items-center justify-between">
              <p className="hero-description text-text-light md:max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <ButtonAlt value={"Discover the benefits"} />
            </div>
          </div>
        </section>

        <section className="about">
          <SectionContainer>
            
            <div className="about-grid grid md:grid-cols-3 gap-10 md:gap-20 justify-between items-center pb-20 md:pb-[200px]">

              <div className="col">
                <h2 className='col-title text-h2 font-medium pb-8'>50%</h2>
                <p className="col-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              </div>
              <div className="col">
                <h2 className='col-title text-h2 font-medium pb-8'>756 mi</h2>
                <p className="col-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              </div>
              <div className="col">
                <h2 className='col-title text-h2 font-medium pb-8'>4 min</h2>
                <p className="col-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
              </div>
              
            </div>

            <div className="about-main grid md:grid-cols-2 items-center gap-10 md:gap-20">

              <div className="col h-full flex flex-col justify-between gap-20 border-b pb-10 md:border-r border-text-light md:pr-20">
                <h2 className="about-title text-h2">Carbon fiber frame with a sleek design</h2>
                <div className="about-body grid gap-16">
                  <p className="about-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                  <ButtonPrimary value={"Pre-Order ($ 1,200)"} />
                </div>
              </div>

              <div className="col relative flex-1 h-full w-full aspect-square">
                <Image src="/images/about.png" fill alt="About Biko" className='object-cover rounded-full' />
              </div>
            </div>

          </SectionContainer>
        </section>

        <section className="testimonials rounded-t-3xl md:rounded-t-[60px] bg-text-black" 
           style={{
            backgroundImage: 'url("./images/bg_testimonials.png")', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'top center', 
            backgroundSize: 'cover',
          }}
        >
          <SectionContainer>

            <div className="section-top text-center pb-[50vh]">
              <h1 className="section-title text-h1 text-white">Testimonials</h1>
              <p className="desc text-center md:w-1/3 text-text-light mx-auto pt-16 pb-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <ButtonAlt value={"Discover the benefits"} />
            </div>
          </SectionContainer>
        </section>

        <div className="testimonials-grid grid gap-10 md:grid-cols-3 md:grid-rows-2 bg-text-black px-8 pb-20 md:px-16 md:pb-[150px] rounded-b-3xl md:rounded-b-[60px]">
          <TestimonialsCard classes={"md:row-start-1 md:col-start-1"} />
          <TestimonialsCard classes={"md:row-start-1 md:col-start-2 md:row-span-2"} testiData={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumsed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisum sed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisum sed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor ed do eisum sed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet,"} />
          <TestimonialsCard classes={"md:row-start-1 md:col-start-3"} />
          <TestimonialsCard classes={"md:row-start-2 md:col-start-1"} />
          <TestimonialsCard classes={"md:row-start-2 md:col-start-3"} />
        </div>

        <section className="features">
          <SectionContainer>
            <div className="section-grid grid md:grid-cols-5 gap-y-20">

              <div className="col md:col-span-2 flex flex-col justify-between gap-10 md:gap-[50vh] md:mr-40">
                <h2 className="section-title text-h2">Lorem impsum dolor sit amet, consectetur</h2>
                <p className="desc text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
              </div>

              <div className="col md:px-8 flex flex-col justify-between gap-20 md:gap-20 md:border-l border-text-light">
                <div className="col-head">
                  <p className="count font-medium md:text-xl">01.</p>
                  <h2 className="text-h2 font-medium">Seat</h2>
                </div>
                <div className="col-body ">
                  <Image src={"/images/icon_seat.svg"} height={120} width={120} alt='Seat'/>
                  <p className="desc text-base pt-14">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
              </div>

              <div className="col md:px-8 flex flex-col justify-between gap-10 md:gap-20 md:border-l border-text-light">
                <div className="col-head">
                  <p className="count font-medium md:text-xl">02.</p>
                  <h2 className="text-h2 font-medium">Handle</h2>
                </div>
                <div className="col-body ">
                  <Image src={"/images/icon_handle.svg"} height={120} width={120} alt='Seat'/>
                  <p className="desc text-base pt-14">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
              </div>

              <div className="col md:px-8 flex flex-col justify-between gap-10 md:gap-20 md:border-l border-text-light">
                <div className="col-head">
                  <p className="count font-medium md:text-xl">03.</p>
                  <h2 className="text-h2 font-medium">Chain</h2>
                </div>
                <div className="col-body ">
                  <Image src={"/images/icon_chain.svg"} height={120} width={120} alt='Seat'/>
                  <p className="desc text-base pt-14">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
              </div>

            </div>
          </SectionContainer>
        </section>

        <section className="gallery">
          <SectionContainer>
            <div className="gallery-grid flex flex-col md:flex-row gap-6 mb-6">
              <div className="gallery-item relative w-full h-[50vh] md:h-[90vh]">
                <Image src={"/images/gallery_1.png"} fill priority className='object-cover rounded-2xl md:rounded-[30px]' />
              </div>
              <div className="gallery-item relative  w-full h-[50vh] md:h-[90vh]">
                <Image src={"/images/gallery_2.png"} fill priority className='object-cover rounded-2xl md:rounded-[30px]' />
              </div>
            </div>
              <div className="gallery-item relative w-full h-[25vh] md:h-[70vh]">
                <Image src={"/images/gallery_3.png"} fill priority className='object-cover rounded-2xl md:rounded-[30px]' />
              </div>
          </SectionContainer>
        </section>

        <section className="faqs">
          <SectionContainer>
            <h1 className="section-title text-h1 text-center">Most common FAQ</h1>
            <div className="faq-list mt-16">

              <div className="faq-item grid gap-5 border-t border-text-light py-14 items-center md:grid-cols-3">
                <div className="faq-question">
                    <Image src={"/images/icon_faq_1.svg"} height={50} width={70} alt='FAQ' />
                    <h4 className="text-h4 pt-5">Lorem ipsum dolor sit amet</h4>
                </div>
                <div className="faq-blank"></div>
                <div className="faq-answer">
                  <p className='md:text-xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex nisi ut aliquip.</p>
                </div>
              </div>

              <div className="faq-item grid gap-5 border-t border-text-light py-14 items-center md:grid-cols-3">
                <div className="faq-question">
                    <Image src={"/images/icon_faq_2.svg"} height={50} width={70} alt='FAQ' />
                    <h4 className="text-h4 pt-5">Lorem ipsum dolor sit amet</h4>
                </div>
                <div className="faq-blank"></div>
                <div className="faq-answer">
                  <p className='md:text-xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex nisi ut aliquip.</p>
                </div>
              </div>

              <div className="faq-item grid gap-5 border-t border-text-light py-14 items-center md:grid-cols-3">
                <div className="faq-question">
                    <Image src={"/images/icon_faq_3.svg"} height={50} width={70} alt='FAQ' />
                    <h4 className="text-h4 pt-5">Lorem ipsum dolor sit amet</h4>
                </div>
                <div className="faq-blank"></div>
                <div className="faq-answer">
                  <p className='md:text-xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex nisi ut aliquip.</p>
                </div>
              </div>

            </div>
          </SectionContainer>
        </section>



        <section className="specs px-5 md:px-16">
            <div className="image-container relative aspect-video w-full">
              <Image src={"/images/feature_img.png"} fill priority className='object-cover rounded-2xl md:rounded-[30px]' />
            </div>

            <div className="specs-grid mt-24 flex flex-col flex-wrap md:flex-row gap-12 items-center justify-between">

              <div className="col flex items-start gap-12">

                <div className="spec-item">
                  <div className="card-head flex items-center gap-3">
                    <Image src={"/images/icon_weight.svg"} height={18} width={21} alt='Weight' />
                    <p className='text-lg'>Weight</p>
                  </div>
                  <h3 className="text-h3 font-medium pt-2">10 kg</h3>
                </div>

                <div className="spec-item">
                  <div className="card-head flex items-center gap-3">
                    <Image src={"/images/icon_speed.svg"} height={18} width={18} alt='Speed' />
                    <p className='text-lg'>Speed</p>
                  </div>
                  <h3 className="text-h3 font-medium pt-2">93 km/h</h3>
                </div>

              </div>

              <div className="separator w-full h-[1px] md:h-[10vh] md:w-[1px] bg-text-light" />

              <div className="col flex items-start gap-12">

                <div className="spec-item">
                  <div className="card-head flex items-center gap-3">
                    <Image src={"/images/icon_arrow.svg"} height={18} width={9} alt='Height' />
                    <p className='text-lg'>Height</p>
                  </div>
                  <h3 className="text-h3 font-medium pt-2">1.32 m</h3>
                </div>

                <div className="spec-item">
                  <div className="card-head flex items-center gap-3">
                    <Image src={"/images/icon_arrow_2.svg"} height={10} width={24} alt='Width' />
                    <p className='text-lg'>Width</p>
                  </div>
                  <h3 className="text-h3 font-medium pt-2">2.04 m</h3>
                </div>

              </div>

              <div className="separator w-full h-[1px] md:h-[10vh] md:w-[1px] bg-text-light" />

              <div className="col flex items-start gap-12">

                <div className="spec-item">
                  <div className="card-head flex items-center gap-3">
                    <Image src={"/images/icon_wheel_diameter.svg"} height={18} width={18} alt='Wheel Diameter' />
                    <p className='text-lg'>Wheel Diameter</p>
                  </div>
                  <h3 className="text-h3 font-medium pt-2">50 cm</h3>
                </div>

                <div className="spec-item">
                  <div className="card-head flex items-center gap-3">
                    <Image src={"/images/icon_chain_s.svg"} height={8} width={30} alt='Chain' />
                    <p className='text-lg'>Chain</p>
                  </div>
                  <h3 className="text-h3 font-medium pt-2">90 cm</h3>
                </div>

              </div>

              <div className="separator w-full h-[1px] md:h-[10vh] md:w-[1px] bg-text-light" />

              <div className="col">
                <p className="text-sm">All the components are made in USA and ansambled in Japan</p>
              </div>

            </div>
        </section>

        <section className="packaging text-center">
          <SectionContainer>
            <h1 className="text-h1">Packaging</h1>
            <p className="md:text-xl pt-14 max-w-3xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

            <div className="cta mt-16 flex gap-3 md:gap-5 items-center justify-center">
              <ButtonSecondary value={"Discover More"} />
              <ButtonPrimary value={"Pre-Order ($ 1,200)"} />
            </div>
          </SectionContainer>
        </section>

      </div>
    </main>
  )
}
