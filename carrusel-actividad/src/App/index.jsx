import Slider from "react-slick";
import Button from "../Components/Buttons";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './App.css'


function App() {

    const settings = {

        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true
    }


    return (

        <>
            <div className='w-3/4 m-auto mt-5 bg-violet-100 pt-10'>
                <div className='mt-5 pd'>
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div key={d.name} className=''>
                                <div className='flex items-center justify-center h-[300px] bg-gray-200'>
                                    <img src={d.img} alt='' className='imagen-centrada h-24 w-24 object-cover rounded-full mx-2' />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-5 p-5'>
                                    <p className='text-xl font-semibold'>{d.name}</p>
                                    <p className='text-xl font-semibold'>{d.country}</p>
                                    <p className='text-center'>{d.bio}</p>
                                    <Button
                                        instagram={d.instagram}
                                        youtube={d.youtube}
                                        twitter={d.twitter}
                                    />
                                </div>
                            </div>
                        )
                        )}
                    </Slider>
                </div>
            </div>
        </>
    )



}


const data = [

    {
        name: 'Nate Gentile',
        country: 'Spain',
        bio: 'Nate Gentile is a software developer and businessman from Uruguay, that currently lives in Spain. He has a YouTube channel, where He talks about technology and make some computer mods. Also, He has a StartUp called "MasterdMind", a digital school that have courses about informatic, programming and development',
        img: 'https://cdn.mastermind.ac/instructors/nate-gentile.jpeg',
        youtube: 'https://www.youtube.com/@NateGentile7',
        instagram: 'https://www.instagram.com/nategentile7/?hl=es',
        twitter: 'https://www.Google.com'
    },
    {
        name: 'Oscar Meza',
        country: 'Mexico',
        bio: 'Oscar Meza is a Youtuber and businessman from Mexico. In his channel, called "La Capital", Oscar shows his love for food teaching how to make his favorites recipes, showing what He eats on his trips and teaching to his viewers his gastronomy adventurs. On the other hand, He has a meat business, where He sells Wagyu meat.',
        img: '../src/assets/images/oscar.png',
        youtube: 'https://www.youtube.com/channel/UCEwl20VxZ3AwOgiKMZtI1GQ',
        instagram: 'https://www.instagram.com/oscarmezar/?hl=es',
        twitter: 'https://twitter.com/oscarmezal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    },
    {
        name: 'Heinz Wuth',
        country: 'Chile',
        bio: 'Heinz Wuth is a chef that shows in his YouTube channel, called "Ciencia y Cocina", the science behind cooking, telling to his audience why they can not eat chicken under-cooked, why onion make them cry and why is so importat salt for cooking.',
        img: '../src/assets/images/heinz.png',
        youtube: 'https://www.youtube.com/@soycienciaycocina',
        instagram: 'https://www.instagram.com/soycienciaycocina/?hl=es',
        twitter: 'https://twitter.com/i/flow/login?redirect_after_login=%2Fimchef7'
    },

];

export default App