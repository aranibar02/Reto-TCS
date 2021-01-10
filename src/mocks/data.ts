import HealthPlan from '../interfaces/HealthPlan';

const servicesAndExclusions = [
    {
    title: "Servicios brindados", 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec."
    },
    {
        title: "Exclusiones", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec."
    },
]

const healthPlans : HealthPlan[] = [
    {
        id: 1,
        name: 'BÁSICO',
        rate: 160,
        period: 'mensual',
        benefits: {
            coverageRate: 'S/1MM',
            details: [
                {
                    description: "Lima",
              additionalDescription: "(zona de cobertura)",
              trikethrough: false,
                },
                {
                    description: "+30 clinicas",
                    additionalDescription: "(en red afiliada)",
                    trikethrough: false,
                },
                {
                    description: "Medico a domicilio",
                    additionalDescription: "",
                    trikethrough: true,
                },
                {
                    description: "Chequeos a domicilio",
                    additionalDescription: "",
                    trikethrough: true,
                },
                {
                    description: "Reembolso nacional",
                    additionalDescription: "",
                    trikethrough: true,
                },
                {
                    description: "Reembolso internacional",
                    additionalDescription: "",
                    trikethrough: true,
                },
            ]
        }
        
    },
    {
      id: 2,
      name: 'AVANZADO',
      rate: 200,
        period: 'mensual',
        benefits: {
            coverageRate: 'S/5MM',
            details: [
                {
                    description: "Lima",
              additionalDescription: "(zona de cobertura)",
              trikethrough: false,
                },
                {
                    description: "+30 clinicas",
                    additionalDescription: "(en red afiliada)",
                    trikethrough: false,
                },
                {
                    description: "Medico a domicilio",
                    additionalDescription: "",
                    trikethrough: false,
                },
                {
                    description: "Chequeos a domicilio",
                    additionalDescription: "",
                    trikethrough: false,
                },
                {
                    description: "Reembolso nacional",
                    additionalDescription: "",
                    trikethrough: true,
                },
                {
                    description: "Reembolso internacional",
                    additionalDescription: "",
                    trikethrough: true,
                },
            ]
        }
        
    },
    {
      id: 3,
      name: 'PREMIUM',
      rate: 250,
        period: 'mensual',
        benefits: {
            coverageRate: 'S/1MM',
            details: [
                {
                    description: "Lima",
              additionalDescription: "(zona de cobertura)",
              trikethrough: false,
                },
                {
                    description: "+30 clinicas",
                    additionalDescription: "(en red afiliada)",
                    trikethrough: false,
                },
                {
                    description: "Medico a domicilio",
                    additionalDescription: "",
                    trikethrough: false,
                },
                {
                    description: "Chequeos a domicilio",
                    additionalDescription: "",
                    trikethrough: false,
                },
                {
                    description: "Reembolso nacional",
                    additionalDescription: "",
                    trikethrough: false,
                },
                {
                    description: "Reembolso internacional",
                    additionalDescription: "",
                    trikethrough: true,
                },
            ]
        }
        
    },
    {
      id: 4,
      name: 'FULL',
      rate: 500,
        period: 'mensual',
        benefits: {
            coverageRate: 'S/1MM',
            details: [
                {
                    description: "Lima",
              additionalDescription: "(zona de cobertura)",
              trikethrough: false,
                },
                {
                    description: "+30 clinicas",
                    additionalDescription: "(en red afiliada)",
                    trikethrough: false,
                },
                {
                    description: "Medico a domicilio",
                    additionalDescription: "",
                    trikethrough: false,
                },
                {
                    description: "Chequeos a domicilio",
                    additionalDescription: "",
                    trikethrough: false,
                },
                {
                    description: "Reembolso nacional",
                    additionalDescription: "",
                    trikethrough: false,
                },
                {
                    description: "Reembolso internacional",
                    additionalDescription: "",
                    trikethrough: false,
                },
            ]
        }
        
    },
  ];
  

export {
    servicesAndExclusions,
    healthPlans,
}