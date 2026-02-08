import { ArdVoltasContent, MensShedContent, ScoutsContent, WomensShedContent, TidyTownsContent, FishingClubContent } from "../../content/Clubs";
import ImageTextSection from "../../components/sections/ImageTextSection";

const ClubsAndOrganisations = () => {
  return (
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ImageTextSection {...ArdVoltasContent} />
        <ImageTextSection {...MensShedContent} imageLeft={false} />
        <ImageTextSection {...WomensShedContent} />
        <ImageTextSection {...ScoutsContent} imageLeft={false}/>
        <ImageTextSection {...TidyTownsContent}imageLeft={false}/>
        <ImageTextSection {...FishingClubContent} />
        {/* <ImageTextSection {...ScoutsContent} imageLeft={false}/> */}
    </div>
  );
};

export default ClubsAndOrganisations;
