import Head from "next/head";

export default function MentionsLegalesViePrivee() {
    return (
        <>
            <Head>
              <title>MentionsLegalesViePrivee</title>
              <meta name="MentionsLegalesViePrivee" content="La page qui présente les Mentions Legales et Vie Privee" />
            </Head>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl text-justify">

                    {/* Top */} 
                    <div className="max-w-auto mx-auto px-6">
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-left text-pretty text-gray-900 sm:text-5xl">
                            Mentions légales et vie privée
                        </h1>
                    </div>

                    {/* Main */} 
                    <div className="flex flex-col md:flex-row md:items-start mt-6">
                        
                        {/* Colonne gauche */}                        
                        <div className="md:basis-3/10 p-6 text-center rounded-xl shadow-lg bg-gray-100 m-1">
                            <div className="flex flex-col items-center justify-center gap-2 mt-6">
                                <div className="p-2">
                                    <h1 className="font-bold">
                                        Raison sociale :
                                    </h1>
                                    <p>
                                        S-POIR MULTI-PRESTATIONS
                                    </p>
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold">
                                        Responsable éditoriale :
                                    </h1>
                                    <p>
                                        Sandrine POIREAULT
                                    </p>
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold">
                                        Adresse du siège :
                                    </h1>
                                    <p>
                                        120 Route de Larrouy 40990 Saint Vincent de Paul
                                    </p>
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold">
                                        Adresse e-mail de contact :
                                    </h1>
                                    <p>
                                        @
                                    </p>
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold">
                                        Coordonnées téléphoniques :
                                    </h1>
                                    <p>
                                        06 85 92 81 81
                                    </p>
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold">
                                        Numéro SIRET :
                                    </h1>
                                    <p>
                                        94369679900015
                                    </p>
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold">
                                        Code APE de l'établissement :
                                    </h1>
                                    <p>
                                        8211Z
                                    </p>
                                </div>
                                <hr className="my-6 border-t-2 border-gray-700 w-full" />
                                <div className="p-2">
                                    <h1 className="font-bold">
                                        Hébergeur :
                                    </h1>
                                    <p>
                                        Vercel
                                    </p>
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold">
                                        Siège social  :
                                    </h1>
                                    <p>
                                        650 California St San Francisco, CA 94108
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite */}
                        <div className="md:basis-7/10 p-6">
                            <div className="text-gray-700 text-lg text-justify">
                                <h1 className="text-xl/8 font-semibold">
                                    IDENTITE DU SITE
                                </h1>
                                <hr className="my-8 border-t-2 border-black w-full" />
                                <p>
                                    Cette politique de confidentialité s'applique au site S-POIR MULTI-PRESTATIONS :                                    
                                </p>
                                <p className="mt-4">
                                    Responsable du traitement des données :
                                </p>
                                 <p className="mt-2">
                                    POIREAULT Sandrine 06 85 92 81 81<br/>
                                    120 Route de Larrouy<br/>
                                    40990 Saint Vincent de Paul<br/>
                                    Mettre l'adresse mail
                                </p>
                            </div>
                            <div className="text-gray-700 text-lg text-justify mt-8">
                                <h1 className="text-xl/8 font-semibold">
                                    LIMITES DE RESPONSABILITÉ
                                </h1>
                                <hr className="my-8 border-t-2 border-black w-full" />
                                <p>
                                    Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler en 
                                    décrivant le problème de la manière la plus précise possible (page posant problème, action déclenchante, type 
                                    d'ordinateur et de navigateur utilisé, …). Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et 
                                    sous sa seule responsabilité. En conséquence, le propriétaire du présent site ne saurait être tenu responsable d'un 
                                    quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutifs au 
                                    téléchargement.<br/>
                                    Les liens hypertexte mis en place dans le cadre du présent site internet en direction d'autres ressources présentes 
                                    sur le réseau Internet ne sauraient engager la responsabilité du propriétaire du présent site.
                                </p>
                            </div>
                            <div className="text-gray-700 text-lg text-justify mt-8">
                                <h1 className="text-xl/8 font-semibold">
                                    LITIGES
                                </h1>
                                <hr className="my-8 border-t-2 border-black w-full" />
                                <p>
                                    Les présentes conditions sont régies par les lois françaises et toute contestation ou litige qui pourraient naître de 
                                    l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège 
                                    social du propriétaire du présent site. La langue de référence, pour le règlement de contentieux éventuels, est le français.
                                </p>
                            </div>
                            <div className="text-gray-700 text-lg text-justify mt-8">
                                <h1 className="text-xl/8 font-semibold">
                                    PROPRIÉTÉ INTELLECTUELLE
                                </h1>
                                <hr className="my-8 border-t-2 border-black w-full" />
                                <p>
                                    Le contenu du présent site, incluant, de façon non limitative, les textes, graphismes, animations, logos, documents et icônes 
                                    ainsi que leur mise en forme sont la propriété exclusive du propriétaire du présent site, conformément au droit français de la 
                                    propriété intellectuelle.<br/>
                                    Toutes reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, et par quelque procédé 
                                    que ce soit, de ces différents éléments sont strictement interdites sans accord exprès (par écrit) du propriétaire, sauf à constituer 
                                    une contrefaçon au sens des articles L.3335-2 et suivants du Code de la propriété intellectuelle, et engageant les responsabilités civile 
                                    et pénale du contrefacteur.<br/>
                                    Les images utilisées sont libres de droits.
                                </p>
                            </div>
                        </div>                        
                    </div>                        
                </div>
            </div>
        </>
    );
}
