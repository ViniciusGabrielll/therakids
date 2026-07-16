import IconAvaliaçãoPsicologica from "../assets/services/IconAvaliaçãoPsicologica.svg";
import iconPsicologia from "../assets/services/iconPsicologia.svg";
import iconFisioterapia from "../assets/services/iconFisioterapia.svg";
import ImageAvaliaçãoPsicologica from "../assets/services/ImageAvaliaçãoPsicologica.png";
import sobreFlores from "../assets/images/SobreFlores.png";
import sobreDomPedroI from "../assets/images/sobreDomPedroI.png";

export const units = {
    flores: {
        slug: "flores",

        name: "Flores",

        phone: "(92) 9 9333-5257",

        whatsapp: "https://wa.me/5592993335257",

        instagram: "https://instagram.com/therakids_unidade_flores",

        address: "R. Barão de Suruí, 313 - Flores, Manaus - AM, 69058-260",
        BusinessHours: "Sem Informações",
        aboutImg: sobreFlores,
        aboutText: "Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre Sobre Sobre Sobre SobreSobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre ",
        mapCode: "https://www.google.com/maps/embed?pb=!4v1784156966526!6m8!1m7!1seCviGf9ljUNp8avwajhDBw!2m2!1d-3.0483543532707!2d-59.99559804376651!3f11.245113!4f0!5f0.7820865974627469",
        services: [
            {
                icon: IconAvaliaçãoPsicologica,
                title: "Avaliação Neuropsicológica",
                description: "Investigação completa das funções cognitivas emocionais e comportamentais para compreender o desenvolvimento da criança.",

                differential1: "Atenção e memória",
                differential2: "Linguagem e aprendizagem",
                differential3: "Funções executivas",
                differential4: "Raciocínio e resolução de problemas",

                primaryColor: "#AD73E6",
                backgroundColor: "#F8F1FF",

                image: ImageAvaliaçãoPsicologica
            },
            {
                icon: iconPsicologia,
                title: "Psicologia",
                description: "Apoio emocional e comportamental para promover o bem-estar e o desenvolvimento saudável.",
                differential1: "Acolhimento e escuta",
                differential2: "Regulação emocional",
                differential3: "Orientação para famílias",
                differential4: "Intervenções personalizadas",
                primaryColor: "#ABCF60",
                backgroundColor: "#FAFFF0",
                image: undefined
            },
            {
                icon: iconFisioterapia,
                title: "Fisioterapia",
                description: "Intervenções que promovem o desenvolvimento motor, autonomia e qualidade de vida.",
                differential1: "Desenvolvimento motor",
                differential2: "Coordenação e equilíbrio",
                differential3: "Fortalecimento muscular",
                differential4: "Estimulação psicomotora",
                primaryColor: "#5F7FFF",
                backgroundColor: "#F3F5F9",
                image: undefined
            }
        ]
    },

    dom_pedro_1: {
        slug: "dom_pedro_1",

        name: "Dom Pedro I",

        phone: "(92) 9 9313-0472",

        whatsapp: "https://wa.me/5592993130472",

        instagram: "https://www.instagram.com/therakids_unidade_dom_pedro1",

        address: "Rua padre José de anchieta,657, Dom Pedro l",
        BusinessHours: "Sem Informações",
        aboutImg: sobreDomPedroI,
        aboutText: "Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre Sobre Sobre Sobre SobreSobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre ",
        mapCode: "https://www.google.com/maps/embed?pb=!4v1784220113557!6m8!1m7!1sfnTj8VM-qZSep8w794sIww!2m2!1d-3.08460221211672!2d-60.03670911439493!3f320.4763013791746!4f-5.389942988942607!5f0.7820865974627469",
        services: [
            {
                icon: iconPsicologia,
                title: "Psicologia",
                description: "Apoio emocional e comportamental para promover o bem-estar e o desenvolvimento saudável.",
                differential1: "Acolhimento e escuta",
                differential2: "Regulação emocional",
                differential3: "Orientação para famílias",
                differential4: "Intervenções personalizadas",
                primaryColor: "#ABCF60",
                backgroundColor: "#FAFFF0",
                image: undefined
            },
            {
                icon: iconFisioterapia,
                title: "Fisioterapia",
                description: "Intervenções que promovem o desenvolvimento motor, autonomia e qualidade de vida.",
                differential1: "Desenvolvimento motor",
                differential2: "Coordenação e equilíbrio",
                differential3: "Fortalecimento muscular",
                differential4: "Estimulação psicomotora",
                primaryColor: "#5F7FFF",
                backgroundColor: "#F3F5F9",
                image: undefined
            }
        ]
    }
}