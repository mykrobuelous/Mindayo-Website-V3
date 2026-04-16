import CBTImage from '@/shared/assets/Feature Services/Cognitive Behavioral Therapy.png';
import ACTImage from '@/shared/assets/Feature Services/Acceptance and Commitment Therapy.png';
import DBTImage from '@/shared/assets/Feature Services/Dialectical Behavioral Therapy.png';
import EMDRImage from '@/shared/assets/Feature Services/EMDR.png';
import HypnosisImage from '@/shared/assets/Feature Services/Hypnosis.png';
import AssessmentImage from '@/shared/assets/Feature Services/Screening & Assessment.png';
import TrainingImage from '@/shared/assets/Feature Services//Training & Mental Health Seminars.png';

type ServiceDetail = {
    title: string;
    shortDescription: string;
    fullDescription: string;
    details: string[];
    suitableFor: string[];
    image?: string;
};

export const featuredServices: ServiceDetail[] = [
    {
        title: 'Hypnosis',
        shortDescription:
            'A guided therapeutic approach that helps clients access deep relaxation, focused awareness, and meaningful inner work.',
        fullDescription:
            'Hypnosis is used as a supportive therapeutic tool to help clients access a calm and focused mental state where they may become more open to reflection, healing, and positive change. In a safe and professional setting, it can be integrated into therapy to support emotional regulation, behavior change, stress relief, and deeper self-understanding. Rather than losing control, the client remains guided, aware, and supported throughout the process.',
        details: [
            'Used in a calm, guided, and structured therapeutic setting',
            'May support stress reduction, emotional healing, and behavior change',
            'Focused on helping clients access deeper insight and relaxation',
            'Conducted with professional care, safety, and respect for client comfort',
        ],
        suitableFor: [
            'Stress and anxiety',
            'Habit change',
            'Emotional blocks',
            'Relaxation support',
        ],
        image: HypnosisImage,
    },
    {
        title: 'Psychological Screening & Assessment',
        shortDescription:
            'Comprehensive assessments that help identify needs, clarify concerns, and guide care planning.',
        fullDescription:
            'Psychological screening and assessment services help provide a clearer understanding of a person’s emotional, behavioral, cognitive, or psychological concerns. These services may include interviews, standardized tools, observation, and professional interpretation. The goal is to support accurate understanding and create more informed recommendations for intervention, support, and growth.',
        details: [
            'Structured and professional assessment process',
            'Helps identify patterns, concerns, and areas for support',
            'Can guide treatment planning and further recommendations',
            'Focused on clarity, insight, and evidence-based understanding',
        ],
        suitableFor: [
            'Emotional concerns',
            'Behavioral patterns',
            'Academic or personal difficulties',
            'Clinical clarification',
        ],
    },
    {
        title: 'Counselling & Psychotherapy',
        shortDescription:
            'A supportive therapeutic space for emotional healing, self-understanding, and personal growth.',
        fullDescription:
            'Counselling and psychotherapy offer clients a confidential and compassionate space to explore their thoughts, emotions, experiences, and challenges. Sessions are designed to help clients better understand themselves, build coping tools, process difficult experiences, and move toward healthier emotional patterns. The focus is not only on relief, but also on deeper growth and long-term well-being.',
        details: [
            'Safe and confidential therapeutic conversations',
            'Supports emotional processing and personal reflection',
            'Helps clients build practical coping and self-awareness skills',
            'Encourages lasting growth, resilience, and healing',
        ],
        suitableFor: ['Anxiety', 'Grief', 'Stress', 'Life transitions', 'Relationship concerns'],
    },
    {
        title: 'Training & Mental Health Seminars',
        shortDescription:
            'Programs that promote awareness, resilience, and emotional intelligence in groups and organizations.',
        fullDescription:
            'Training and seminar services are designed for schools, organizations, workplaces, and communities that want to strengthen mental health awareness and emotional well-being. These sessions can provide practical knowledge, reflection, and tools related to topics such as stress management, emotional resilience, communication, mental health literacy, and psychological safety.',
        details: [
            'Designed for communities, schools, and organizations',
            'Builds awareness and practical understanding of mental health',
            'Can be customized based on audience and goals',
            'Encourages healthier environments and emotional intelligence',
        ],
        suitableFor: [
            'Schools',
            'Workplaces',
            'Community groups',
            'Professional development settings',
        ],
    },
    {
        title: 'Research & Program Development',
        shortDescription:
            'Evidence-based work that supports stronger mental health practices, interventions, and services.',
        fullDescription:
            'Research and program development services focus on creating stronger, evidence-informed approaches to mental health care, education, and community support. This may involve designing interventions, evaluating outcomes, building mental health programs, and contributing to better systems of care. The goal is to turn insight into meaningful and practical impact.',
        details: [
            'Grounded in research and evidence-based practice',
            'Supports better services, interventions, and program design',
            'Can contribute to community and organizational mental health initiatives',
            'Focused on long-term quality, relevance, and impact',
        ],
        suitableFor: [
            'Mental health organizations',
            'Schools',
            'Community initiatives',
            'Program development needs',
        ],
    },
];

type ServiceItem = {
    title: string;
    description: string;
    image: string;
    details: string[];
};

export const servicesData: ServiceItem[] = [
    {
        title: 'Cognitive Behavioral Therapy (CBT)',
        description:
            'A structured, goal-oriented therapy that helps clients identify and reshape negative thought patterns to improve emotional wellbeing and daily functioning.',
        details: [
            'Anxiety and panic disorders',
            'Depression and low mood',
            'Obsessive-compulsive tendencies',
        ],
        image: CBTImage,
    },
    {
        title: 'Acceptance & Commitment Therapy (ACT)',
        description:
            'A mindfulness-based approach that encourages clients to accept difficult thoughts and feelings while committing to actions aligned with their core values.',
        details: [
            'Chronic stress and burnout',
            'Grief and emotional avoidance',
            'Life transitions and identity challenges',
        ],
        image: ACTImage,
    },
    {
        title: 'Dialectical Behavior Therapy (DBT)',
        description:
            'A skills-focused therapy that balances acceptance and change, helping clients regulate intense emotions and build healthier relationships.',
        details: [
            'Emotional dysregulation',
            'Self-destructive or impulsive behaviors',
            'Interpersonal conflict and instability',
        ],
        image: DBTImage,
    },
    {
        title: 'Eye Movement Desensitization & Reprocessing (EMDR)',
        description:
            'A trauma-focused therapy that uses guided eye movements to help the brain reprocess distressing memories, reducing their lasting emotional impact.',
        details: [
            'Post-traumatic stress disorder (PTSD)',
            'Childhood trauma and adverse experiences',
            'Phobias rooted in past events',
        ],
        image: EMDRImage,
    },
    {
        title: 'Hypnotherapy',
        description:
            'A therapeutic technique that uses a guided state of focused relaxation to access the subconscious mind, helping clients overcome deeply rooted patterns, fears, and habits.',
        details: [
            'Smoking cessation and habit change',
            'Anxiety, phobias, and irrational fears',
            'Sleep difficulties and insomnia',
            'Chronic pain management',
            'Low self-esteem and confidence issues',
        ],
        image: HypnosisImage,
    },
    {
        title: 'Psychological Screening & Assessment',
        description:
            "Comprehensive evaluations designed to better understand a client's cognitive, emotional, and behavioral patterns — providing clarity and a clear direction for care.",
        details: [
            'Diagnostic clarification for anxiety, depression, and mood disorders',
            'Cognitive and learning assessments for children and adults',
            'Personality and behavioral profiling',
            'Pre-employment and fitness-for-work evaluations',
            'School-based and developmental screenings',
        ],
        image: AssessmentImage,
    },
    {
        title: 'Training & Mental Health Seminars',
        description:
            'Engaging programs tailored for schools, workplaces, and communities to build mental health literacy, emotional resilience, and a culture of psychological wellbeing.',
        details: [
            'Stress and burnout prevention in the workplace',
            'Mental health first aid for educators and HR professionals',
            'Youth mental health awareness programs',
            'Resilience and emotional intelligence workshops',
            'Suicide awareness and crisis response training',
        ],
        image: TrainingImage,
    },
];
