import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import landingPageData from "../../data/landingPageTextFile.json";
import Image from "next/image";
const text = landingPageData.Team;
const AccordionText=()=> {
    const language="en"
  return (
    <Accordion type="single" collapsible className="w-full pt-36 content-center MCCcontainer">
  <AccordionItem value="item-1 w-[80%] m-auto  border">
    <div className="text-center font-bold MCCTitle">Who We Are</div>
    <div className="text-left MCCContent">
      <b>MCC. Moroccan Cannabis Co.</b> is an ethical cannabis company rooted in Morocco’s Rif
      Mountains, a region with a rich history of cannabis cultivation.
    </div>

        <AccordionTrigger>
            <p className="text-center m-auto readmore"> read more...</p>

            </AccordionTrigger>
        <AccordionContent className="MCCContent">
          We combine <b>traditional farming methods</b> with the highest international medical standards  and <b>fair trade principles</b> to produce premium medical cannabis products.
We believe in <b>extraction with meaningful contribution</b>—partnering closely with local cooperatives through profit-sharing, training, and infrastructure development to empower communities and create lasting economic impact.
Beyond cultivation, we build a <b>transparent and ethical platform</b> that connects licensed producers, processors, and service providers to deliver quality, integrity, and value to global markets.
At MCC, we believe responsible cannabis cultivation can <b>promote health, dignity, and economic transformation</b> for all stakeholders.

        </AccordionContent>
        </AccordionItem>
      <AccordionItem value="item-2 w-[80%] m-auto  border">
    <div className="text-center font-bold MCCTitle">Ethically Grown, Sustainably Produced</div>
    <div className="text-left MCCContent">
      At <b>Moroccan Cannabis Co. (MCC)</b>, we are creating a cannabis platform that is both ethical and 
sustainable, supporting Morocco’s growth as a legal, export-ready industry.
    </div>

        <AccordionTrigger>
            <p className="text-center m-auto readmore"> read more...</p>

            </AccordionTrigger>
        <AccordionContent className="MCCContent">
          We empower local farmers across the Rif region through <b>profit-sharing, training, and fair compensation</b>, helping them achieve the highest quality standards (GACP and GMP) for long-term success.
Our partnerships with cooperatives provide essential support in cultivation, stabilized genetics, testing, and access to processing and export infrastructure. This strengthens the supply chain by improving crop quality and consistency, while reducing costs and increasing profits for everyone involved.
Our farming approach prioritizes <b>organic practices and environmental care</b>, with full traceability and third-party audits to guarantee ethically sourced, certified products that inspire confidence among global buyers.
MCC is setting a new standard for socially responsible cannabis production—delivering premium medical products while uplifting communities and fostering sustainable economic growth in Morocco.

        </AccordionContent>
        </AccordionItem>
      <AccordionItem value="item-3 w-[80%] m-auto  border">
    <div className="text-center font-bold MCCTitle"> Our journey</div>
    <div className="text-left MCCContent">
       The project began in 2024 with a clear vision to develop high-quality medicinal cannabis 
locally. 
    </div>
    <AccordionTrigger>
            <p className="text-center m-auto readmore"> read more...</p>

            </AccordionTrigger>
        <AccordionContent className="MCCContent">
          The project began in 2024 with a clear vision to develop high-quality medicinal cannabis locally. After this time of dedicated effort, we have successfully obtained all necessary licenses and established fully operational facilities. Two certified cannabis varieties have been developed, meeting rigorous quality standards. Our partnerships with local cooperatives have strengthened, fostering social impact and sustainable growth. Looking ahead, we aim to expand cultivation, diversify our product offerings, and strengthen our cooperative network to capitalize on growing demand and enter new markets

        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4 w-[80%] m-auto  border">
    <div className="text-center font-bold MCCTitle">  World-Class Team</div>
    <div className="text-left MCCContent">
        The MCC team blends international experience with strong local knowledge to build a fully 
integrated, ethical cannabis platform.
    </div>
    <AccordionTrigger>
            <p className="text-center m-auto readmore"> read more...</p>

            </AccordionTrigger>
        <AccordionContent className="MCCContent">
          Our leadership brings together professionals from Morocco, Spain, Canada, Australia, and the UK—uniting expertise in project management, pharmaceutical quality, cooperative development, infrastructure design, and regulatory compliance.
We work collaboratively to oversee all stages of production—from cultivation and certification to processing and export—ensuring that every aspect of the value chain meets international standards.
As we grow, we remain open to new talent and partnerships that align with our mission,  adding value, driving innovation, and ensuring long-term impact.
<div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:-mt-36 w-3/4 scale-75 m-auto gap-5 text-center ">
    {text?.people.map((d, i) => (
                <div key={`${d.name}-${i}`} className="">
                  <div>
                    <div className=" object-top  " >
                      <Image
                        style={{ filter: "brightness(1.3)" }}
                        src={d.img}
                        alt={`${d.name}`}
                        className="team-img overflow-clip rounded-full object-cover object-top aspect-square "
                        width={300}
                        height={300}
                      />
                      <div className="caption text-lg">
                        <h4>{d.name}</h4>
                        <h4>{d[language].title}</h4>
                        <h4>{d[language].job}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
</div>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export default AccordionText