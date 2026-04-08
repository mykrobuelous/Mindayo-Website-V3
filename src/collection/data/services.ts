type ServiceItem = {
    title: string;
    description: string;
    image?: string;
};

const defaultServices: ServiceItem[] = [
    {
        title: 'Psychological Screening & Assessment',
        description:
            'Comprehensive evaluations to identify concerns, understand your mental health patterns, and create a personalized treatment roadmap.',
        image: ScreeningImage,
    },
    {
        title: 'Counselling & Psychotherapy',
        description:
            'A calm, guided space to explore emotions, build coping skills, and work through anxiety, stress, grief, and life transitions.',
        image: CounsellingImage,
    },
    {
        title: 'Training',
        description:
            'Professional development programs for organizations and individuals to enhance mental health awareness and emotional intelligence.',
        image: TrainingImage,
    },
    {
        title: 'Research',
        description:
            'Evidence-based studies and clinical research contributing to advancements in mental health treatment and therapeutic practices.',
        image: ResearchImage,
    },
];
