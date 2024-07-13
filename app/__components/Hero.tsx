import Section from "./Section"

const Hero = () => {
    return ( 
        <Section className="flex max-md:flex-col items-start">
        <div className="flex-[2]">
            <h2 className="font-caption text-4xl">SIROUKANE Abdelhakim</h2>
            <h3>
                Frontend developer
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore repellat optio quibusdam aspernatur necessitatibus, reprehenderit non beatae sequi nesciunt, laborum et! Voluptate voluptatum ex quo error non beatae dolorem.
            </p>
        </div>
        <div className="flex-1">
            <img 
            src="https://melvynx.com/images/my-face.png"
            className="w-full h-auto max-w-xs"
            alt="Abdelhakim's picture" />

        </div>
        </Section>
     );
}
 
export default Hero;