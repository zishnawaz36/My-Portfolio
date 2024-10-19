function About() {
    return (
        <>
            <div className="about w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <h1 className="text-4xl font-bold">About Me</h1>
                    </div>
                    <p className="text-lg">
                        I am a passionate full-stack web developer with comprehensive experience in both frontend and backend development. 
                        Proficient in **React**, **Redux**, **JavaScript**, and **TypeScript**, I excel at creating dynamic and responsive web applications. 
                        I am well-versed in database technologies, working with **MongoDB** and **MySQL** to design and manage efficient data structures. 
                        Currently, I am pursuing a B.Tech in Information Technology at Maulana Abul Kalam Azad University of Technology, where I maintain a CGPA of 8.8.
                    </p>
                    <br />
                    <p className="text-lg">
                        Throughout my journey, I have developed several projects, including a food delivery website leveraging React, CSS, Tailwind CSS, Node.js, 
                        Express.js, and MongoDB. Additionally, I created a project inspired by the Printify homepage that features robust login and signup functionality using React and Tailwind CSS. 
                        I also built an invoice generator that enables users to download and print PDFs, showcasing my ability to develop practical and user-friendly solutions.
                    </p>
                    <br />
                </div>
            </div>
        </>
    );
}

export default About;
