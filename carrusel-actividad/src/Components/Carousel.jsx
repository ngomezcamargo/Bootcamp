import React from "react";

const Table = () => {

    const data = [

        {
            name: 'Nate Gentile',
            country: 'Spain',
            bio: 'Nate Gentile is a software developer and businessman from Uruguay, that currently lives in Spain. He has a YouTube channel, where He talks about technology and make some computer mods. Also, He has a StartUp called "MasterdMind", a digital school that have courses about informatic, programming and development',
            image: '../Images/nate.png',
            facebook: '',
            instagram: '',
            twitter: ''
        },
        {
            name: 'Oscar Meza',
            country: 'Mexico',
            bio: 'Oscar Meza is a Youtuber and businessman from Mexico. In his channel, called "La Capital", Oscar shows his love for food teaching how to make his favorites recipes, showing what He eats on his trips and teaching to his viewers his gastronomy adventurs. On the other hand, He has a meat business, where He sells Wagyu meat.',
            image: '../Images/oscar.png',
            facebook: '',
            instagram: '',
            twitter: ''
        },
        {
            name: 'Heinz Wuth',
            country: 'Chile',
            bio: 'Heinz Wuth is a chef that shows in his YouTube channel, called "Ciencia y Cocina", the cience behind cooking, telling to his audience why they can not eat chicken under-cooked, why onion make them cry and why is so importat salt for cooking.',
            image: '../Images/heinz.png',
            facebook: '',
            instagram: '',
            twitter: ''
        },

    ];

    return (

        <table className="table-auto wfull">
            <thead>
                <tr className='bg-violet-200 '>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Country</th>
                    <th className="px-4 py-2">Bio</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr >
                        <td className="border px-4 py-2">
                            {row.name}
                        </td>
                        <td className="border px-4 py-2">
                            {row.country}
                        </td>
                        <td className="border px-4 py-2">
                            {row.bio}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default Table;
