import Head from "next/head";
import { BookOpen, Star, Dot } from 'lucide-react';

export default function Presentation() {
    return (
        <>
            <Head>
              <title>Presentation</title>
              <meta name="Presentation" content="La page de présentation de l'auto-entrepreneur" />
            </Head>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row">
                        
                        {/* Colonne gauche */}
                        <div className="md:basis-3/10 rounded-xl shadow-lg bg-gray-100 p-6 flex flex-col h-full">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img
                                alt="Photo de Profil"
                                src='/images/Profile.jpg'
                                className="size-50 rounded-full outline-1 -outline-offset-1 outline-black/5"
                                />
                                <div className="text-center">
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Sandrine POIREAULT</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">Auto-Entrepreneur</p>
                                </div>                                
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 m-4 rounded-xl w-full">
                                <img
                                    alt=""
                                    src="/images/Laptop.jpg"
                                    className="absolute inset-0 -z-10 w-full h-full object-cover object-center rounded-xl"
                                />
                                </div>
                            </div>
                        </div>                        

                        {/* Colonne droite */}                        
                        <div className="md:basis-7/10 p-6 text-justify">
                            <div className="max-w-5xl mx-auto pr-4 sm:pr-6 lg:pr-8">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    Presentation
                                </h1>
                                <p className="mt-6 text-xl/8 text-gray-700">
                                    Bonjour à vous,
                                    Voici une présentation succincte de mes études, expériences et compétences
                                </p>
                            </div>                               
                            <div className="mt-10 text-gray-700 text-lg space-y-8">                                            
                                <div className="flex items-center gap-2">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <BookOpen aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    Formation :
                                </div>
                                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                                    <li className="flex gap-x-3">   
                                        <Dot aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                        <span>
                                            DECF (Bac + 3) Diplôme d'Études Comptables et Financières
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <Dot aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />               
                                        <span>
                                            Chargée de missions des Ressources Humaines (Bac + 3)
                                        </span>
                                    </li>
                                </ul>                                            
                                <div className="flex items-center gap-2">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <Star aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    Expériences :
                                </div>
                                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                                    <li className="flex gap-x-3">   
                                        <Dot aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />                                         
                                        <span>
                                            20 ans en comptabilité, dont 5 en tant que comptable unique / gestionnaire de paie, dans des environnements 
                                            variés (tailles et secteurs d'activité)
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3"> 
                                        <Dot aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />                                           
                                        <span>
                                            10 ans en ressources humaines, dont 4 en tant que Responsable des Ressources Humaines et du Pole Administration 
                                            du Personnel dans une entreprise en forte expansion
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-8 text-justify">
                                    Mon double diplôme RH / Finance, et la richesse de mes expériences m'ont permis d'acquérir des compétences 
                                    techniques et des savoir être, ainsi qu'une vision transversale des enjeux de l'entreprise. Aujourd'hui 
                                    j'accompagne sereinement les entreprises dans leur gestion quotidienne, ou sur un projet ponctuel, une formation... 
                                    Je suis une partenaire de confiance, capable de prendre du recul, de piloter et conseiller avec rigueur, discrétion 
                                    et pragmatisme. Pour les TPE/PME, je suis votre adjointe freelance.
                                </p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
