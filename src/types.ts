export type RumpunType = 
  | 'all'
  | 'umum'
  | 'penataan-bangunan'
  | 'air-minum'
  | 'sanitasi'
  | 'prasarana-strategis';

export type MethodType = 'Klasikal' | 'Blended Learning' | 'Distance Learning' | 'Full E-Learning' | 'E-Learning';

export interface SyllabusItem {
  no: number;
  subject: string;
  jp: number;
}

export interface TrainingProgram {
  id: string;
  code: string;
  title: string;
  rumpun: 'umum' | 'penataan-bangunan' | 'air-minum' | 'sanitasi' | 'prasarana-strategis';
  rumpunLabel: string;
  method: MethodType;
  allowedMethods?: string[];
  durationJp: number;
  level: 'Dasar' | 'Lanjutan' | 'Spesialisasi' | 'Bimtek';
  description: string;
  targetAudience: string;
  keyModules: string[];
  competencyStandard?: string;
  participantRequirements?: string[];
  detailedSyllabus?: SyllabusItem[];
  curriculumHistory?: {
    developedYear?: number;
    updatedYear?: number;
  };
  statusNote?: string;
}

export interface BapekomUnit {
  id: string;
  code: string;
  name: string;
  location: string;
  province: string;
  regionGroup: 'Sumatera' | 'Jawa' | 'Kalimantan' | 'Sulawesi' | 'Papua';
  address: string;
  phone?: string;
  coverageAreas: string[];
  plannedTrainings2026: number;
  featuredPrograms: string[];
}

export interface TrainingMethod {
  id: MethodType;
  title: string;
  iconName: string;
  description: string;
  badgeColor: string;
}
