import Link from "next/link"

const Footer = () => {
  return (
    <footer className='px-5 md:px-16 py-6 md:py-12 text-text-footer'>
        <div className="footer-main bg-bg-light-gray rounded-2xl md:rounded-[25px] p-8 md:p-16">
            <div className="footer-grid grid items-start md:grid-cols-7 gap-5 gap-y-4">
                <div className="col md:col-span-4">
                    <Link href={"/"} className="text-5xl font-bold text-black mb-6">Biko.</Link>
                </div>

                <div className="col">
                    <div className="menu-links grid gap-4">
                        <Link href={"/"} className="text-base">Style Guide</Link>
                        <Link href={"/"} className="text-base">Changelog</Link>
                        <Link href={"/"} className="text-base">Privacy Policy</Link>
                        <Link href={"/"} className="text-base">404</Link>
                        <Link href={"/"} className="text-base">Start Here</Link>
                    </div>
                </div>
                <div className="col">
                    <div className="menu-links grid gap-4">
                        <Link href={"/"} className="text-base">Home</Link>
                        <Link href={"/"} className="text-base">Services</Link>
                        <Link href={"/"} className="text-base">Services Page (CMS)</Link>
                    </div>
                </div>
                <div className="col">
                    <div className="menu-links grid gap-4">
                        <Link href={"/"} className="text-base">Blog</Link>
                        <Link href={"/"} className="text-base">Blog Single (CMS)</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom flex gap-4 flex-col md:flex-row items-center justify-between bg-bg-light-gray rounded-2xl md:rounded-[25px] p-5 md:p-10 mt-6 md:mt-12 text-sm md:text-base">
            <p className="copyright text-center md:text-left">All right reserved © 2022 | <span className="font-medium">atwww.design</span></p>
            <p className="copyright text-center md:text-left">This template was developed by <span className="font-medium">atwww.design</span> with love</p>
        </div>
    </footer>
  )
}

export default Footer