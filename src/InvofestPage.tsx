import Button from "./components/ui/Button";
import { Collapse } from "./components/ui/Collapse";
import SpeakerCard from "./components/ui/SpeakerCard";
import { Card } from "./components/ui/Card";

interface Speaker {
  name: string;
  role: string;
  imageUrl: string;
}

interface CardItem {
  title: string;
  description: string;
}

interface CollapseItem {
  title: string;
  description: string;
}

interface InvofestPageProps {
  speakers: Speaker[];
  cardItems: CardItem[];
  collapseItems: CollapseItem[];
}

const InvofestPage: React.FC<InvofestPageProps> = ({ speakers, cardItems, collapseItems }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt=""
            className="w-96"
          />
          <p>
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema
            "Beyond Limits, Beyond Intelligence: Innovate for a Smarter
            Tomorrow ".
          </p>

          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="HubungiPanitia" variant="outline" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt=""
          />
        </div>
      </section>

      <section id="speaker" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              role={speaker.role}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </section>

      <section
        id="cards"
        className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3"
      >
        {cardItems.map((item, index) => (
          <Card key={index} className="w-full">
            <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
            <p>{item.description}</p>
            <Button
              label="Info Selengkapnya"
              variant="primary"
              className="mt-4"
            />
          </Card>
        ))}
      </section>

      <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
        {collapseItems.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
};

export default InvofestPage;