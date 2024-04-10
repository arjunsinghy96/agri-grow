interface Definition {
  slug: string;
  title: string;
  description: string;
}

export const definitions: Definition[] = [
  {
    slug: 'agronomy',
    title: 'Agronomy',
    description:
      'Branch of agriculture that deals with methods which provide favourable environment to the crop for higher productivity.'
  },
  {
    slug: 'horticulture',
    title: 'Horticulture',
    description:
      'Study or practice of growing flowers, fruits, vegetable and any other [cultivar](cultivar). Art and science of growing plants.'
  },
  {
    slug: 'soil-science',
    title: 'Soil Science',
    description:
      'Branch of agriculture concerned with formation, nature, ecology and classification of soil'
  },
  {
    slug: 'agricultural-entomology',
    title: 'Agricultural Entomology',
    description:
      'Agricultural [Entomology](entomology) is the study of insects that affect agriculture'
  },
  {
    slug: 'animal-husbandary',
    title: 'Animal Husbandary',
    description:
      'Branch of agriculture dealing with feeding, caring and breeding of domestic animals'
  },
  {
    slug: 'cultivar',
    title: 'Cultivar',
    description: 'Types of plants that have been cultivated and bred by humans'
  },
  {
    slug: 'entomology',
    title: 'Entomology',
    description: 'Study of insects'
  }
];
