
import Hero from '../../components/banners/Hero';
import images from '../../assets/images';
import ContentSection from '../../components/sections/ContentSection';

const HeritageAndHistory = () => {
    return (
        <div>
            <Hero
                title="About Ballisodare"
                // subtitle="Baile Easa Dara - 'town of the waterfall of the oak'"
                image={images.hero.ballisodareFallsHeritage}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContentSection >
                    <p className="text-lg mb-6">
                        The town is situated at the mouth of the Ballisodare River  and is one of the most picturesque towns in the Northwest on the Wild  Atlantic Way. Few spots in the county have as varied and interesting a history as Ballisodare with evidence that it was a major gathering place for surrounding districts as early as the second century. Steeped in history visitors to the town can explore the remnants of our past like the old graveyard, St. Fechin's church, the site of a Viking settlement and many more. Avena House where W.B.Yeats spent many summers visiting can be seen from the main street not far from the Sally Gardens immortalised in the poem of the same name.
                        <br /><br />
                        Driving through Ballisodare  affords the visitor panoramic views over Ballidodare Bay and brilliant sunsets over nearby Knocknarea not to be missed. With exponential growth having taken place over the last two decades Ballisodare has become a vibrant and busy town but never losing its village atmosphere. The people of the town possess a strong sense of community which is underpinned by an equally strong community council which in recent years has overseen the development of a stunning walk along the banks of the Ballisodare/ Owenmore River. In addition, the Old Graveyard Walk and 'The Falls' walk provide breathtaking views of Ballisodare Bay. Residents of Ballisodare also enjoy many amenities such as churches, a primary and post primary school, a leisure centre, a large supermarket, hairdressers, beauty salon nail bar, a craft butcher,  pubs,  post office and more. With Sligo a mere ten minutes drive away Ballisodare is a wonderful family friendly location or a nice place to stop and view its beautiful surroundings.
                    </p>
                </ContentSection>
                <ContentSection title="The Fishery">
                    <p className="text-lg mb-6">
                        At the peak of its success at the end of the 19th century the salmon fishery in Ballisodare was netting over 10,000 fish helped by the construction of a salmon ladder on the falls in 1850. Ice from the North Atlantic was brought to Sligo and packed into ice houses in the Ballisodare area. The salmon were packed into boxes with the ice, taken to the railway station and, transported to Dublin and from there shipped to London  fish market all in the space of 24 hours.The fishery went into decline in the 1950's and was eventually sold to Ballisodare Fishing Club  where anglers from all over Europe enjoy the amenity each season.
                    </p>
                    <img
                        src={images.heritage.fishery1}
                        alt="A man fishing on the Ballisodare falls."
                    />
                    <br></br><img
                        src={images.heritage.fishery2}
                        alt="The ballisodare and the walking path beside it."
                    />
                </ContentSection>
                <ContentSection title="Viking Site">
                    <p className="text-lg mb-6">
                        Research by Eamon P Kelly,  Keeper of antiquities at the National Museum of Ireland , has revealed evidence of the existence of  a Viking longphort at Knoxpark, Ballisodare. The discovery of a Viking cemetery containing more than 200 Viking remains is a very exciting one and has led to a re- evaluation of our ancient past.
                    </p>
                    <img
                        src={images.heritage.viking}
                        alt="A group of people gathering near the viking site on a tour."
                    />
                </ContentSection>
            </div>
        </div>
    );
};

export default HeritageAndHistory;
