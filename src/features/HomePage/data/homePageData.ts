import CounsellingImage from '@/shared/assets/Services/Counselling & Psychotherapy.png';
import ResearchImage from '@/shared/assets/Services/Research.png';
import ScreeningImage from '@/shared/assets/Services/Psychological Screening & Assessment.png';
import TrainingImage from '@/shared/assets/Services/Training.png';

export const missionData = [
    'Providing comprehensive psychological screening and assessment.',
    'Delivering quality counseling and psychotherapy.',
    'Advancing mental health through training and education.',
    'Contributing through research and knowledge generation.',
    'Fostering a safe, inclusive, and client-centered environment.',
];

export const nameData = [
    {
        letter: 'M',
        word: 'Mindfulness & Compassion',
        description:
            "We approach every individual with empathy, respect and genuine care, recognizing the uniqueness of each person's mental health journey.",
    },
    {
        letter: 'I',
        word: 'Integrity & Ethics',
        description:
            'We uphold the highest standards of professional ethics, confidentiality, accountability, and transparency in all our services.',
    },
    {
        letter: 'N',
        word: 'Nuturing Growth & Learning',
        description:
            'We promote continuous learning, professional development, and evidence-based practice through training supervision, and research.',
    },
    {
        letter: 'D',
        word: 'Diversity & Cultural Sensitivity',
        description:
            'We honor cultural indeitity, inclusivity, and community values, delivering services that are responsive of the diverse population of Mindanao.',
    },
    {
        letter: 'A',
        word: 'Accessibility & Advocacy',
        description:
            'We strive to make mental health services accessible, affordable, and stigma-free while advocating for psychological well-being in the community.',
    },
    {
        letter: 'Y',
        word: 'Your Well-being First',
        description:
            'We prioiritize client-centered care, empowering individuals and famillies to actively participate in their healing and growth.',
    },
    {
        letter: 'O',
        word: 'Outcome-Oriented Excellence',
        description:
            'We are committed to measurable impacty, quality service delivery, and continuous improvement in clinical care, training and research.',
    },
];

type ServiceItem = {
    title: string;
    image?: string;
    details: string[];
};

export const servicesData: ServiceItem[] = [
    {
        title: 'Psychological Screening & Assessment',
        image: ScreeningImage,
        details: [
            'Intelligence Tests',
            'Personality Test',
            'Projective Tests',
            'Neuropsychological Tests',
            'School-based Assessments (SPED)',
            'Forensic & Court Related Assessments',
        ],
    },
    {
        title: 'Counselling',
        image: CounsellingImage,
        details: [
            'Cognitive Behavioral Therapy (CBT)',
            'Acceptance and Commitment Therapy (ACT)',
            'Dialectical Behavior Therapy (DBT)',
            'EMDR',
            'Hypnosis',
            'Play Therapy',
            'Creative Therapies',
            'Group Therapy',
        ],
    },
    {
        title: 'Psychotherapy',
        image: ResearchImage,
        details: [
            'Career & Academic Progress',
            'Anxiety, Stree & Depression',
            'Grief & Loss',
            'Relationship Issues',
            'Body Image & Eating Concerns',
            'Alchohol & Substance Use',
        ],
    },
    {
        title: 'Training & Capacity Building',
        image: TrainingImage,
        details: ['Mental Wellness at Work', 'Psychological First Aid', 'Critical Debriefing'],
    },
];
