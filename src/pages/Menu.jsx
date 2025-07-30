import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaFire, FaTint, FaFeatherAlt, FaLeaf } from 'react-icons/fa';

// --- Food Image Imports ---
import DragonSteakImg from '../assets/images/menu/dragon-steak.jpg';
import PhoenixChickenImg from '../assets/images/menu/phoenix-chicken.jpg';
import LambImg from '../assets/images/menu/lamb.jpg';
import ScallopsImg from '../assets/images/menu/scallops.jpg';
import TunaImg from '../assets/images/menu/tuna.jpg';
import TroutImg from '../assets/images/menu/trout-dish.jpg';
import GardenImg from '../assets/images/menu/garden-salad.png';
import RavioliImg from '../assets/images/menu/ravioli.jpg';
import SoupImg from '../assets/images/menu/soup.jpg';
import StewImg from '../assets/images/menu/stew.png';
import GnocchiImg from '../assets/images/menu/gnocchi.jpg';
import TartImg from '../assets/images/menu/tart.jpg';

// --- NEW: Drink Image Imports ---
import VeritaserumImg from '../assets/images/menu/veritaserum.png';
import FelixFelicisImg from '../assets/images/menu/felix-felicis.png';
import AmortentiaImg from '../assets/images/menu/amortentia.png';


const menuData = {
  hearth: [
    { img: DragonSteakImg, name: "Dragon's Breath Steak", price: "Rs. 4500", description: "Flame-grilled to perfection with a fiery peppercorn reduction." },
    { img: PhoenixChickenImg, name: "Phoenix's Ascent", price: "Rs. 3200", description: "Spicy, char-grilled chicken on a bed of saffron risotto." },
    { img: LambImg, name: "Ember-Roasted Lamb", price: "Rs. 4200", description: "Infused with rosemary and garlic, with a mint and pomegranate glaze." }
  ],
  elixir: [
    { img: ScallopsImg, name: "Siren's Call", price: "Rs. 3800", description: "Pan-seared scallops on a swirl of squid-ink purée." },
    { img: TunaImg, name: "The Alchemist's Tuna", price: "Rs. 3500", description: "Ahi tuna tataki with a sophisticated wasabi-avocado mousse." },
    { img: TroutImg, name: "Whispering Coral Trout", price: "Rs. 3900", description: "Steamed in a bamboo leaf with ginger and lemongrass." }
  ],
  artisan: [
    { img: GardenImg, name: "Deconstructed Garden", price: "Rs. 2500", description: "A landscape of vegetables in various forms: gels, soils, and foams." },
    { img: RavioliImg, name: "The Oracle's Ravioli", price: "Rs. 2800", description: "Handmade wild mushroom ravioli in a clear consommé." },
    { img: SoupImg, name: "The Philosopher's Soup", price: "Rs. 1800", description: "A dual-toned almond and spinach soup, served yin-yang style." }
  ],
  garden: [
    { img: StewImg, name: "Hearth-Root Stew", price: "Rs. 2200", description: "A comforting, slow-cooked stew of root vegetables, lentils, and barley." },
    { img: GnocchiImg, name: "The Golden Harvest", price: "Rs. 2600", description: "Handmade pumpkin gnocchi in a brown butter and sage sauce." },
    { img: TartImg, name: "Earthly Treasure Tart", price: "Rs. 2400", description: "Savory tart with wild mushrooms, goat cheese, and caramelized onions." }
  ]
};

const categoryDetails = {
  hearth: { title: 'The Hearth', icon: FaFire },
  elixir: { title: 'The Elixir', icon: FaTint },
  artisan: { title: 'The Artisan\'s Plate', icon: FaFeatherAlt },
  garden: { title: 'The Garden Table', icon: FaLeaf }
};

// ++ NEW DATA FOR DRINKS AND WINES ++
const drinksData = [
  { img: VeritaserumImg, name: "Veritaserum", price: "Rs. 950", description: "A crystal-clear drink with elderflower, cucumber, and mint that promises only truth in its refreshing taste." },
  { img: FelixFelicisImg, name: "Felix Felicis", price: "Rs. 1100", description: "A shimmering, golden concoction of passionfruit and ginger ale for when you need a touch of liquid luck." },
  { img: AmortentiaImg, name: "Amortentia", price: "Rs. 950", description: "A pink, floral drink with notes of rose, lychee, and vanilla, served with a single, perfect rose petal." }
];

const winesData = [
    { name: "Cabernet Sauvignon", type: "Red Wine", description: "A bold, full-bodied red with notes of dark fruit and oak. Pairs perfectly with our Hearth dishes." },
    { name: "Chardonnay", type: "White Wine", description: "A crisp, elegant white with hints of citrus and vanilla, ideal for our Elixir creations." },
    { name: "Brut Champagne", type: "Sparkling", description: "A premier French Champagne for celebrating those truly magical moments." }
];


function Menu() {
  const [activeCategory, setActiveCategory] = useState('hearth');
  const menuItemsRef = useRef(null);

  useLayoutEffect(() => {
    if (menuItemsRef.current) {
      const items = menuItemsRef.current.children;
      gsap.set(items, { opacity: 0, y: 20 });
      gsap.to(items, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' });
    }
  }, [activeCategory]);

  return (
    <div className="bg-black text-white pt-32 pb-20 px-10">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-serif mb-4 text-yellow-400">The Enchanted Menu</h1>
        <p className="text-lg text-gray-400 mb-16">An exploration of flavour, guided by the elements.</p>

        <div className="flex justify-center space-x-8 md:space-x-16 mb-16">
          {Object.keys(categoryDetails).map((key) => {
            const Icon = categoryDetails[key].icon;
            return (
              <button key={key} onClick={() => setActiveCategory(key)} className={`flex flex-col items-center transition-colors duration-300 ${activeCategory === key ? 'text-yellow-400' : 'text-gray-500 hover:text-gray-300'}`}>
                <Icon className="text-4xl" />
                <span className="mt-2 font-semibold">{categoryDetails[key].title}</span>
              </button>
            )
          })}
        </div>

        <div className="text-left max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-yellow-400 mb-8 border-b-2 border-yellow-400/20 pb-4">
            {categoryDetails[activeCategory].title}
          </h2>
          <div key={activeCategory} ref={menuItemsRef} className="space-y-12">
            {menuData[activeCategory].map((item, index) => (
              <div key={index} className="flex gap-6 items-center">
                <img src={item.img} alt={item.name} className="w-28 h-28 object-cover rounded-md flex-shrink-0 border-2 border-gray-800" />
                <div className="w-full">
                  <div className="flex items-baseline">
                    <h3 className="text-xl font-bold flex-shrink-0">{item.name}</h3>
                    <div className="flex-grow mx-3 border-b border-dotted border-gray-700"></div>
                    <p className="text-xl font-bold text-yellow-400 flex-shrink-0">{item.price}</p>
                  </div>
                  <p className="text-gray-400 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ++ NEW SECTION FOR DRINKS ++ */}
        <div className="text-left max-w-4xl mx-auto mt-24">
            <h2 className="text-4xl font-serif text-yellow-400 mb-8 border-b-2 border-yellow-400/20 pb-4">Potions & Elixirs</h2>
            <div className="space-y-12">
                {drinksData.map((item, index) => (
                    <div key={index} className="flex gap-6 items-center">
                        <img src={item.img} alt={item.name} className="w-28 h-28 object-cover rounded-md flex-shrink-0 border-2 border-gray-800" />
                        <div className="w-full">
                            <div className="flex items-baseline">
                                <h3 className="text-xl font-bold flex-shrink-0">{item.name}</h3>
                                <div className="flex-grow mx-3 border-b border-dotted border-gray-700"></div>
                                <p className="text-xl font-bold text-yellow-400 flex-shrink-0">{item.price}</p>
                            </div>
                            <p className="text-gray-400 mt-1">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* ++ NEW SECTION FOR WINES ++ */}
        <div className="text-left max-w-4xl mx-auto mt-24">
            <h2 className="text-4xl font-serif text-yellow-400 mb-8 border-b-2 border-yellow-400/20 pb-4">From the Sommelier's Cellar</h2>
            <div className="space-y-8">
                {winesData.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="text-lg font-semibold text-gray-300 pl-4">{item.type}</p>
                        </div>
                        <p className="text-gray-400 mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}

export default Menu;