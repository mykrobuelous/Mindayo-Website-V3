import LeraImage from '@/shared/assets/Team/Lera Cotiangco Dela rama.png';
import RizaImage from '@/shared/assets/Team/Riza June Cabanlit Lara.png';
import LouiseImage from '@/shared/assets/Team/Louise Pimentel.png';
import CasibjornImage from '@/shared/assets/Team//Casibjorn Guy S. Quiacao.png';
import JamesImage from '@/shared/assets/Team/James Patrick Divinagracia.png';
import MaeImage from '@/shared/assets/Team/Mae Angelica Lim.png';
import ElaImage from '@/shared/assets/Team//Ella Danielle Piol.png';
import MariaImage from '@/shared/assets/Team/Maria Angelli D. Pacamalan.png';
import TepsyImage from '@/shared/assets/Team/Tepsy B. Lucio.png';
import CatieImage from '@/shared/assets/Team/Catie Yatoc.png';

type TherapistItem = {
    name: string;
    role: string;
    credentials: string[];
    description: string;
    specialties: string[];
    image?: string;
};

export const therapists: TherapistItem[] = [
    {
        name: 'Dr. Lerafay Cotiangco-De la Rama, RPsy, PhD Cand.',
        role: 'Founder & Clinical Director',
        credentials: ['PhD in Clinical Psychology', 'Licensed Psychologist'],
        description:
            'Dr. Lera Contiangco De la Rama provides compassionate, evidence-based care for individuals navigating anxiety, emotional stress, trauma, and life transitions. Her approach is warm, structured, and grounded in creating emotional safety for every client.',
        specialties: [
            'CBT',
            'DBT',
            'Hypnosis',
            'EMDR',
            'Forensic Evaluation for adults, couples, and families',
        ],
        image: LeraImage,
    },
    {
        name: 'Ms. Riza June Cabanlit-Lara, RPsy, RPm',
        role: 'Counseling Psychologist',
        credentials: [
            'PsyD in Counseling Psychology',
            'Licensed Psychometrician',
            'Specialized in adolescent and family support',
        ],
        description:
            'Ms. Riza June Cabanlit-Lara focuses on helping adolescents, young adults, and families build healthier communication, stronger emotional awareness, and greater resilience. She brings a calm, relational, and client-centered style to her work.',
        specialties: [
            'Family Concerns',
            'Adolescent Counseling',
            'Self-Esteem',
            'Stress Management',
        ],
        image: RizaImage,
    },
    {
        name: 'Ms. Louise Pimentel, RPm, RPsy',
        role: 'Psychotherapist',
        credentials: [
            'MA in Psychology',
            'Certified Psychotherapist',
            'Extensive background in individual counseling',
        ],
        description:
            'Ms. Louise Pimentel supports clients dealing with grief, burnout, inner conflict, and identity concerns. His sessions emphasize reflective exploration, practical coping tools, and a steady therapeutic presence.',
        specialties: ['Grief', 'Burnout', 'Identity Concerns', 'Personal Growth'],
        image: LouiseImage,
    },
];

type StaffItem = {
    name: string;
    role: string;
    description: string;
    image?: string;
};

export const staffMembers: StaffItem[] = [
    {
        name: 'Casibjorn Guy S. Quiacao',
        role: 'Clinical Pyschology Associate',
        description:
            'Supports daily operations, scheduling, client coordination, and front desk communication with warmth and professionalism.',
        image: CasibjornImage,
    },
    {
        name: 'James Patrick S. Divinagracia, MAPsy, RPm',
        role: 'Registered Psychology Associate',
        description:
            'Assists with office organization, records, and day-to-day support to help the clinic run smoothly and efficiently.',
        image: JamesImage,
    },
    {
        name: 'Mae Angelica O. Lim, RPM, LPT, CLC, MA Cand.',
        role: 'Registered Pyschology Associate',
        description:
            'Helps clients with inquiries, appointment concerns, and general assistance while maintaining a welcoming environment.',
        image: MaeImage,
    },
    {
        name: 'Ela Danielle T. Piol RPm, CMHT, MA Cand.',
        role: 'Registered Psychology Associate',
        description:
            'Provides practical support for internal coordination, materials, and general clinic needs behind the scenes.',
        image: ElaImage,
    },
];

type PsychometricianType = {
    name: string;
    role: string;
    description: string;
    image?: string;
};

export const psychometricians: PsychometricianType[] = [
    {
        name: 'Maria Angelli D. Pacamalan, RPm',
        role: 'Senior Psychometrician',
        description:
            'Conducts psychological assessments, scoring, and interpretation with precision and care to support accurate diagnosis and treatment planning.',
        image: MariaImage,
    },
    {
        name: 'Tepsy B. Lucio, RPm',
        role: 'Psychometrician',
        description:
            'Administers and scores a variety of psychological tests, ensuring a smooth and supportive experience for clients during the assessment process.',
        image: TepsyImage,
    },
    {
        name: 'Catie Yatoc, RPm',
        role: 'Psychometrician',
        description:
            'Assists with test administration, scoring, and data management to contribute to the clinic’s comprehensive assessment services.',
        image: CatieImage,
    },
];

/* Maria Angelli D. Pacamalan, Tepsy B. Lucio, Catie Yatoc RPm */
