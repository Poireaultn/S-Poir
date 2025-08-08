import Head from "next/head";
import { ThumbsUp, BriefcaseBusiness, Check, User } from 'lucide-react';

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
]

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Tarifs() {
    return (
        <>
            <Head>
              <title>Tarifs</title>
              <meta name="Tarifs" content="La page qui présente les tarifs" />
            </Head>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl text-justify">

                    {/* Top */} 
                    <div className="max-w-auto mx-auto px-6 pb-6">
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-left text-pretty text-gray-900 sm:text-5xl">
                            Tarifs  
                        </h1>
                        <p className="mt-6 text-xl/8 text-gray-700">
                            Des services sur mesure... et au juste prix! 
                        </p>
                        <p className="mt-6 text-lg text-gray-700">
                            Parce que chaque situation est unique, je vous propose des prestations personnalisées et une tarification souple adaptée à 
                            vos besoins ponctuels, réguliers et à la carte, afin de vous garantir une facturation au plus juste. 
                        </p>
                        <p className="mt-6 text-lg text-gray-700">
                            Pour information, les prix indiqués ci-dessous sont HT, TVA non applicable à ce jour (art 293 B du CGI), donnés à titre indicatif, 
                            dépendent de la prestation, de la nécessité de logiciel et/ou matériel. Frais kilométriques de déplacement en supplément au delà 
                            d'un rayon de 15 kms autour de Saint Vincent de Paul (40990). Impressions de documents et affranchissements non compris. Valables 
                            jusqu'au 31/12/2025. 
                        </p>
                    </div>

                    <hr className="my-8 border-t-2 border-black w-full" />

                    {/* Professionnels */}
                    <div className="p-6 text-gray-700 text-lg">
                        <div className="flex items-center gap-4 text-xl/8">
                            <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                <BriefcaseBusiness aria-hidden="true" className="size-6 text-white" />
                            </div>
                            <p>Professionnels :</p>
                        </div>

                        {/* A l'heure */}
                        <div className="mt-6 md:mt-2  flex flex-col md:flex-row items-center justify-between md:gap-16">
                            
                            {/* Colonne gauche */}
                            <div className="flex-1 space-y-8">
                                <p>
                                    À l'heure pour une aide ponctuelle. À partir de 35 € HT. Tarif donné à titre indicatif, pour des prestations de base
                                    (hors conseils et formations), et selon vos équipements (logiciels, imprimantes), affranchissements et impressions en sus.
                                </p>
                            </div>

                            {/* Colonne droite */}
                            <div className="hidden md:block p-2 mx-8 md:mt-0 w-48 aspect-square rounded-xl shadow-lg bg-gray-100 overflow-hidden transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                                <img
                                alt="Horloge"
                                src="/images/Horloge.png"
                                className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* A la carte */}
                        <div className="mt-6 md:mt-2 flex flex-col md:flex-row items-center justify-between md:gap-16">
                            {/* Colonne gauche */}
                            <div className="hidden md:block p-2 mx-8 md:mt-0 w-48 aspect-square rounded-xl shadow-lg bg-gray-100 overflow-hidden transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                                <img
                                alt="Horloge"
                                src="/images/A_La_Carte.png"
                                className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Colonne droite */}
                            <div className="flex-1 space-y-8">
                                <p>
                                    A la carte : vous choisissez uniquement les services qui vous intéressent.
                                </p>
                            </div>
                        </div>

                        {/* Au forfait */}
                        <div className="mt-6 md:mt-2  flex flex-col md:flex-row items-center justify-between md:gap-16">
                            {/* Colonne gauche */}
                            <div className="flex-1 space-y-8">
                                <p>
                                    Au forfait : Pour un accompagnement complet  à tarif préférentiel, dégressif selon la durée. Tarif donné à titre indicatif, 
                                    pour des prestations de base (hors conseils et formations), et selon vos équipements (logiciels, imprimantes),  affranchissement en sus.
                                </p>
                            </div>

                            {/* Colonne droite */}
                            <div className="hidden md:block p-2 mx-8 md:mt-0 w-48 aspect-square rounded-xl shadow-lg bg-gray-100 overflow-hidden transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                                <img
                                alt="Horloge"
                                src="/images/Au_Forfait.png"
                                className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Forfaits */}
                        <div className="mt-6 text-xl/8">
                            <p>
                                A partir de :
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center gap-2 md:items-start md:gap-12 md:flex-row md:justify-start mt-6">
                            <div className="p-2 rounded-xl shadow-lg bg-gray-50 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                                <p>
                                    Forfait 4 H : 135 € HT
                                </p>
                            </div>
                            <div className="p-2 rounded-xl shadow-lg bg-gray-50 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                                <p>
                                    Forfait 8 H : 260 € HT
                                </p>
                            </div>
                            <div className="p-2 rounded-xl shadow-lg bg-gray-50 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                                <p>
                                    Forfait 15 H : 480 € HT
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-t-2 border-black w-full" />

                    {/* Particuliers */}
                    <div className="space-y-8 p-6 text-gray-700 text-lg">
                        <div className="flex items-center gap-4 text-gray-700">
                            <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                <User aria-hidden="true" className="size-6 text-white" />
                            </div>
                            <p className="text-xl/8">
                                Particuliers :
                            </p>
                        </div>
                        <ul role="list" className="mt-6 space-y-4 text-gray-600">
                            <li className="flex gap-x-3">   
                                <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                <span>
                                    Rédaction  de courriers : A partir de 15 € HT unitaire
                                </span>
                            </li>
                            <li className="flex gap-x-3">   
                                <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                <span>
                                    Aide aux démarches en ligne : A partir de 20 HT unitaire
                                </span>
                            </li>                                    
                            <li className="flex gap-x-3">
                                <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                <span>
                                    Création ou refonte de CV professionnel et moderne : A partir de 25 € HT unitaire
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                <span>
                                    Montage de dossiers (CAF/APL, sécurité sociale, retraite...) A partir de 30 € unitaire
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                <span>
                                    Initiation informatique : A partir de 35 H / heure
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <Check aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                <span>
                                    Préparation aux entretiens : entraînement, posture, confiance ...A partir de 40 H / heure
                                </span>
                            </li>
                        </ul>
                        <p >
                            Liste non exhaustive. L'achat du matériel, logiciel, accès internet restent à votre charge.
                        </p>
                    </div>

                    <hr className="my-8 border-t-2 border-black w-full" />


                    {/* Bottom */}
                    <div className="flex items-start gap-4 text-gray-700 text-lg p-6 mt-6">
                        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                            <ThumbsUp aria-hidden="true" className="size-6 text-white" />
                        </div>
                        <p>
                            Pas de mauvaise surprise : vous connaissez le tarif à l'avance. Possibilité de séances courtes ou suivi régulier, selon vos 
                            besoins et disponibilités.<br/>
                            <a href="/Contact" className="text-indigo-600">Contactez-moi </a>
                            pour un devis gratuit et personnalisé
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
