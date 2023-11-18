import Image from "next/image"

const TestimonialsCard = ({classes, testiData}) => {
  return (
    <div className={`grid-item p-8 rounded-[20px] bg-bg-dark-gray ${classes}`}>

        <div className="card-head flex items-center gap-5">
            <Image src="/images/testi_avatar.png" height={72} width={72} alt="Testimonial" />
            <div className="head-details text-text-white">
            <p className='font-bold text-xl'>John Doe</p>
            <div className="rating flex gap-3 items-center pt-2">
                <div className="stars flex gap-1">
                <Image src={"/images/icon_star.svg"} height={16} width={16} alt='Star Rating' />
                <Image src={"/images/icon_star.svg"} height={16} width={16} alt='Star Rating' />
                <Image src={"/images/icon_star.svg"} height={16} width={16} alt='Star Rating' />
                <Image src={"/images/icon_star.svg"} height={16} width={16} alt='Star Rating' />
                <Image src={"/images/icon_star.svg"} height={16} width={16} alt='Star Rating' />
                </div>
                <p className="text-xl font-bold">5.0</p>
            </div>
            </div>
        </div>

        <div className="card-body flex flex-col justify-between gap-10 pt-5">

            <p className="testi text-text-light">{testiData ? testiData : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor. Lorem ipsum dolor sit amet."}</p>

            <div className="source flex items-center gap-3">
                <Image src="/images/icon_google.svg" height={30} width={30} alt='Source Google' />
                {
                    testiData && 
                    <Image src="/images/icon_twitter.svg" height={30} width={36} alt='Source Twitter' />

                }
            </div>
        </div>

    </div>
  )
}

export default TestimonialsCard