import React from "react";

const menu = {
  originals: [
    { name: "Espresso", description: "double shot of espresso", hot: 3.25, cold: null },
    { name: "Americano", description: "double shot espresso with hot water", hot: 4.0, cold: 4.0 },
    { name: "Cortado", description: "equal amounts espresso & steamed milk", hot: 4.25, cold: null },
    { name: "Cappuccino", description: "double shot espresso, steamed milk & foam", hot: 4.5, cold: null },
    { name: "Latte", description: "double shot espresso with steamed milk", hot: 5.0, cold: 5.5 },
    { name: "Drip Coffee", description: "smooth coffee, made till ordered", hot: 3.5, cold: null },
    { name: "Pour Over", description: "hand pour drip coffee to perfection", hot: 5.25, cold: null },
    { name: "Cold Brew", description: "coffee brewed 18 hours in cold temperature", hot: null, cold: 5.25 },
    { name: "Red Eye", description: "cold brew with a double shot of espresso", hot: null, cold: 6.25 }
  ],
  specialty: [
    { name: "Dona Dulce", description: "cortado with sweetened condensed milk - 5oz", hot: 4.75, cold: null },
    { name: "Perfect Latte", description: "espresso (cold brew conc.) with oat milk & agave", hot: 5.5, cold: 6.0 },
    { name: "Horchata Latte", description: "cold brew concentrate & non dairy Horchata", hot: null, cold: 6.0 },
    { name: "Cocoa Nana", description: "mexican mocha (chocolate abuelita latte)", hot: 5.5, cold: 6.0 },
    { name: "Horchata Matcha Latte", description: "Gorillae matcha with non dairy Horchata", hot: null, cold: 6.0 },
    { name: "Horchata Mango Latte", description: "Gorillae matcha with fresh mango", hot: null, cold: 6.0 },
    { name: "Affogato (Espresso)", description: "espresso poured over vanilla ice cream", hot: null, cold: 5.0 },
    { name: "Affogato (Matcha)", description: "matcha poured over vanilla ice cream", hot: null, cold: 5.0 },
    { name: "Affogato Kids (Lechera)", description: "vanilla ice cream with sweetened condensed milk", hot: null, cold: 4.0 },
    { name: "Affogato Kids (Chocolate Abuelita)", description: "vanilla ice cream with chocolate abuelita", hot: null, cold: 4.0 }
  ],
  notCoffee: [
    { name: "Matcha Tea", description: "Gorillae matcha tea", hot: 4.5, cold: 4.5 },
    { name: "Matcha Latte", description: "Gorillae matcha with (steamed) milk", hot: 5.25, cold: 5.75 },
    { name: "Vanilla Matcha Latte", description: "Gorillae matcha with (steamed) milk with vanilla", hot: 5.25, cold: 6.0 },
    { name: "Chai Latte", description: "Spiced chai with (steamed) milk", hot: 5.25, cold: 5.75 }
  ],
  fridge: [
    { name: "Cold Brew", price: 5 },
    { name: "Lattes", price: 5.5 },
    { name: "Box Water", price: 2.5 },
    { name: "Mineragua", price: 2.25 },
    { name: "Kombucha Madre Nostra", price: 4.5 },
    { name: "Gansito", price: 1.75 },
    { name: "Banana Bread", price: 3.5 },
    { name: "Butter Croissant", price: 3.0 },
    { name: "Cinnamon Roll", price: 3.5 },
    { name: "Muffin", price: 3.0 }
  ]
};

const sectionTitles = {
  originals: "Originals",
  specialty: "Specialty Lattes",
  notCoffee: "Not Coffee",
  fridge: "Grab & Go"
};

export default function ViejoMenuApp() {
  return (
    <div className="p-6 space-y-10 max-w-md mx-auto bg-white text-[#1e1e1e] rounded-sm">
      <div className="text-center">
  <img
    src="/drink-header.jpg"
    alt="Viejo coffee moment"
    className="mx-auto w-full max-w-xs rounded-md mb-2"
  />
  <img
    src="/viejo-logo.png"
    alt="Viejo Coffee Logo"
    className="mx-auto w-full max-w-xs mb-2"
  />
  <p className="text-sm text-gray-500 mt-1 uppercase tracking-wide"></p>
</div>


      {menu && Object.entries(menu).map(([section, items]) => (
        <div key={section}>
          <h2 className="text-md font-bold uppercase text-gray-700 tracking-widest mb-3 border-b border-black pb-1">
            {sectionTitles[section] || section}
          </h2>
          <div className="space-y-4">
            {Array.isArray(items) && items.map((item, idx) => (
              item && (
                <div key={idx} className="text-sm border-b border-gray-300 pb-2">
                  <div className="flex justify-between">
                    <span className="font-bold uppercase tracking-tight">{item.name}</span>
                    {item.price !== undefined ? (
                      <span className="font-bold">${item.price}</span>
                    ) : (
                      <span className="text-xs text-gray-600">
                        {item.hot !== null && `Hot: $${item.hot}`} 
                        {item.hot !== null && item.cold !== null && " / "}
                        {item.cold !== null && `Cold: $${item.cold}`}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1 italic leading-snug">{item.description}</p>
                </div>
              )
            ))}
          </div>
        </div>
      ))}

      <div className="my-8 border-t border-gray-400"></div>

      <div className="text-xs text-center text-gray-600">
        <p className="mb-2">
          <strong>Milk Options:</strong> Organic Whole, 2% Lact. Free, Almond, Oat<br />
          <strong>Organic Syrups (+$0.50):</strong> Agave, Vanilla, Caramel
        </p>
        <p className="italic mb-4">
          Sorry we had to raise the prices on some of your favorite items.<br />
          We will adjust prices as soon as they normalize. Thank you for understanding.
        </p>
        <p className="mb-2">
          <strong>Find us at:</strong><br />
          2519 N Stanton St Rear<br />
          El Paso, Texas 79902
        </p>
        <p className="mb-2">
          <strong>Contact:</strong><br />
          viejo@movinggrams.com
        </p>
        <p className="mb-4">
          <strong>Hours:</strong><br />
          Monday to Saturday: 7:00 AM – 4:00 PM<br />
          Sunday: 10:00 AM – 2:00 PM
        </p>
        <p>
          <strong>Follow us:</strong><br />
          <a href="https://www.instagram.com/viejocoffee" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            @viejocoffee on Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
