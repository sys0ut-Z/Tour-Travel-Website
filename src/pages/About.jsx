import React from 'react'

const About = () => {
  return (
    <div className='pt-24'>
      <div className='container pt-24 pb-10'>

        {/* About US */}
        <div>
          <h1 className='p-4 border-l-8 border-secondary text-3xl lg:text-4xl font-bold'>About Us</h1>
          <p className='pt-6 md:text-lg text-pretty'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta dolores ducimus, veniam consectetur eveniet omnis accusantium error quae obcaecati animi accusamus debitis. Nemo culpa nihil maxime libero repellat necessitatibus voluptatibus nulla consectetur inventore molestiae recusandae incidunt ipsam vel eveniet labore dolorem itaque voluptas eligendi porro obcaecati aliquid, officia ea iste! Iste, sint veritatis. Ipsum expedita saepe unde quo. Earum, optio iusto quasi impedit, vero veniam repellat unde nam officia exercitationem quaerat cumque facilis beatae expedita saepe fugit voluptatum asperiores tenetur explicabo quam dolor et illum voluptates. Quas modi non sit sapiente? Odit neque quas impedit aliquam fuga obcaecati illum?
          </p>
          <p className='pt-6 md:text-lg text-pretty'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta dolores ducimus, veniam consectetur eveniet omnis accusantium error quae obcaecati animi accusamus debitis. Nemo culpa nihil maxime libero repellat necessitatibus voluptatibus nulla consectetur inventore molestiae recusandae incidunt ipsam vel eveniet labore dolorem itaque voluptas eligendi porro obcaecati aliquid, officia ea iste! Iste, sint veritatis. Ipsum expedita saepe unde quo. Earum, optio iusto quasi impedit, vero veniam repellat unde nam officia exercitationem quaerat cumque facilis beatae expedita saepe fugit voluptatum asperiores tenetur explicabo quam dolor et illum voluptates. Quas modi non sit sapiente? Odit neque quas impedit aliquam fuga obcaecati illum?
          </p>
        </div>

        {/* Best Locations to Visit */}
        <div className='pt-8'>
          <div className='rounded-lg'>
            <h1 className='p-4 border-l-8 border-secondary text-3xl lg:text-4xl font-bold'>Locations to Visit</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.5877495047!2d-0.4312316281021684!3d51.52817979531493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1745838805588!5m2!1sen!2sin" 
            allowFullScreen="" loading="lazy" 
            style={{borderRadius: "20px"}}
            className="border-0 py-6 h-[400px] w-full" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About