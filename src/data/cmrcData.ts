import { TrainingProgram, BapekomUnit, TrainingMethod } from '../types';
import { UMUM_PROGRAMS } from './programs/umumPrograms';
import { PENATAAN_BANGUNAN_PROGRAMS } from './programs/penataanBangunanPrograms';
import { AIR_MINUM_PROGRAMS } from './programs/airMinumPrograms';
import { SANITASI_PROGRAMS } from './programs/sanitasiPrograms';
import { KAWASAN_PRASARANA_PROGRAMS } from './programs/kawasanPrasaranaPrograms';

export const TRAINING_METHODS: TrainingMethod[] = [
  {
    id: 'Klasikal',
    title: 'Klasikal',
    iconName: 'Users',
    description: 'Pembelajaran tatap muka langsung di ruang kelas Balai Pengembangan Kompetensi (Bapekom) dengan interaksi penuh.',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
  },
  {
    id: 'Blended Learning',
    title: 'Blended Learning',
    iconName: 'Layers',
    description: 'Kombinasi pembelajaran mandiri via e-learning, virtual classroom, dan praktikum/tatap muka di Bapekom.',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
  },
  {
    id: 'Distance Learning',
    title: 'Distance Learning',
    iconName: 'Laptop',
    description: 'Pembelajaran jarak jauh terstruktur menggunakan platform video conference dan media digital interaktif.',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
  },
  {
    id: 'E-Learning',
    title: 'E-Learning',
    iconName: 'GraduationCap',
    description: 'Pembelajaran mandiri secara daring yang dapat diakses kapan saja melalui Portal BPSDM Kementerian PU.',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
  },
  {
    id: 'Full E-Learning',
    title: 'Full E-Learning',
    iconName: 'GraduationCap',
    description: 'Pembelajaran full daring mandiri & terstruktur tanpa tatap muka fisik.',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
  },
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  ...UMUM_PROGRAMS,
  ...PENATAAN_BANGUNAN_PROGRAMS,
  ...AIR_MINUM_PROGRAMS,
  ...SANITASI_PROGRAMS,
  ...KAWASAN_PRASARANA_PROGRAMS,
];

export const BAPEKOM_UNITS: BapekomUnit[] = [
  {
    id: 'bapekom-1',
    code: 'BAPEKOM-I',
    name: 'BAPEKOM PU Wilayah I Medan',
    location: 'Medan',
    province: 'Sumatera Utara',
    regionGroup: 'Sumatera',
    address: 'Jl. Sakti Lubis No. 7, Medan, Sumatera Utara',
    phone: '(061) 786-4532',
    coverageAreas: ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau'],
    plannedTrainings2026: 18,
    featuredPrograms: ['CKPS-AM-01 (SPAM)', 'CKPS-PB-03 (Bangunan Gedung)', 'CKPS-PS-01 (Prasarana Strategis)']
  },
  {
    id: 'bapekom-2',
    code: 'BAPEKOM-II',
    name: 'BAPEKOM PU Wilayah II Pelambang',
    location: 'Palembang',
    province: 'Sumatera Selatan',
    regionGroup: 'Sumatera',
    address: 'Jl. Soekarno-Hatta No. 12, Palembang, Sumatera Selatan',
    phone: '(0711) 412-890',
    coverageAreas: ['Jambi', 'Sumatera Selatan', 'Bengkulu', 'Bangka Belitung', 'Lampung'],
    plannedTrainings2026: 15,
    featuredPrograms: ['CKPS-SA-01 (Sanitasi)', 'CKPS-PB-02 (Pengelolaan BGN)']
  },
  {
    id: 'bapekom-3',
    code: 'BAPEKOM-III',
    name: 'BAPEKOM PU Wilayah III Jakarta',
    location: 'Jakarta',
    province: 'DKI Jakarta',
    regionGroup: 'Jawa',
    address: 'Jl. Pasar Jumat, Poins Square Area, Kebayoran Lama, Jakarta Selatan',
    phone: '(021) 759-0021',
    coverageAreas: ['DKI Jakarta', 'Jawa Barat (Sebagian)', 'Banten'],
    plannedTrainings2026: 28,
    featuredPrograms: ['CKPS-UM-01 (PISK Cipta Karya)', 'CKPS-PB-10 (BGH Hijau)', 'CKPS-PS-01 (Prasarana Strategis)']
  },
  {
    id: 'bapekom-4',
    code: 'BAPEKOM-IV',
    name: 'BAPEKOM PU Wilayah IV Bandung',
    location: 'Bandung',
    province: 'Jawa Barat',
    regionGroup: 'Jawa',
    address: 'Jl. Abdul Hamid, Cicaheum, Bandung, Jawa Barat 40195',
    phone: '(022) 720-3341',
    coverageAreas: ['Jawa Barat', 'Jawa Tengah (Sebagian)', 'Pusat Kampus Pusbangkom ACP'],
    plannedTrainings2026: 32,
    featuredPrograms: ['CKPS-UM-01 (PISK Cipta Karya)', 'CKPS-AM-02 (DED SPAM)', 'CKPS-UM-05 (Teknologi RISHA)']
  },
  {
    id: 'bapekom-5',
    code: 'BAPEKOM-V',
    name: 'BAPEKOM PU Wilayah V Yogyakarta',
    location: 'Yogyakarta',
    province: 'D.I. Yogyakarta',
    regionGroup: 'Jawa',
    address: 'Jl. Solo Km. 11.5, Kalasan, Sleman, D.I. Yogyakarta',
    phone: '(0274) 496-112',
    coverageAreas: ['D.I. Yogyakarta', 'Jawa Tengah'],
    plannedTrainings2026: 22,
    featuredPrograms: ['CKPS-PB-09 (Quick Assessment Gempa)', 'CKPS-UM-04 (JF Penata Kelola)']
  },
  {
    id: 'bapekom-6',
    code: 'BAPEKOM-VI',
    name: 'BAPEKOM PU Wilayah VI Surabaya',
    location: 'Surabaya',
    province: 'Jawa Timur',
    regionGroup: 'Jawa',
    address: 'Jl. Gayung Kebonsari No. 50, Surabaya, Jawa Timur',
    phone: '(031) 829-1140',
    coverageAreas: ['Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur'],
    plannedTrainings2026: 25,
    featuredPrograms: ['CKPS-AM-03 (Inovasi SPAM)', 'CKPS-PS-02 (Pemeriksaan Kerusakan BG)']
  },
  {
    id: 'bapekom-7',
    code: 'BAPEKOM-VII',
    name: 'BAPEKOM PU Wilayah VII Banjarmasin',
    location: 'Banjarmasin',
    province: 'Kalimantan Selatan',
    regionGroup: 'Kalimantan',
    address: 'Jl. Trans Kalimantan Km. 12, Handil Bakti, Banjarmasin',
    phone: '(0511) 330-8821',
    coverageAreas: ['Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Timur', 'Kalimantan Barat', 'Kalimantan Utara'],
    plannedTrainings2026: 16,
    featuredPrograms: ['CKPS-SA-01 (Sanitasi)', 'CKPS-AM-01 (SPAM)']
  },
  {
    id: 'bapekom-8',
    code: 'BAPEKOM-VIII',
    name: 'BAPEKOM PU Wilayah VIII Makassar',
    location: 'Makassar',
    province: 'Sulawesi Selatan',
    regionGroup: 'Sulawesi',
    address: 'Jl. Tamangapa Raya No. 34, Makassar, Sulawesi Selatan',
    phone: '(0411) 492-210',
    coverageAreas: ['Sulawesi Selatan', 'Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat', 'Maluku', 'Maluku Utara'],
    plannedTrainings2026: 20,
    featuredPrograms: ['CKPS-UM-05 (Teknologi RISHA)', 'CKPS-SA-02 (TPA & IPLT)']
  },
  {
    id: 'bapekom-9',
    code: 'BAPEKOM-IX',
    name: 'BAPEKOM PU Wilayah IX Jayapura',
    location: 'Jayapura',
    province: 'Papua',
    regionGroup: 'Papua',
    address: 'Jl. Abepura - Sentani Km. 17, Padang Bulan, Jayapura',
    phone: '(0967) 581-229',
    coverageAreas: ['Papua', 'Papua Barat', 'Papua Selatan', 'Papua Tengah', 'Papua Pegunungan', 'Papua Barat Daya'],
    plannedTrainings2026: 14,
    featuredPrograms: ['CKPS-PS-01 (Prasarana Strategis)', 'CKPS-UM-05 (RISHA)']
  }
];

export const LEGAL_BASIS_INFO = {
  permen: 'Peraturan Menteri PUPR Nomor 13 Tahun 2024 tentang Organisasi dan Tata Kerja Kementerian Pekerjaan Umum',
  seKepala: 'Surat Edaran Kepala BPSDM Nomor 04/SE/KM/2023 tentang Pedoman Penyelenggaraan Pengembangan Kompetensi',
  totalProgramsCount: 33,
  targetYear: 2026,
  centerName: 'Pusat Pengembangan Kompetensi Sumber Daya Air, Cipta Karya dan Prasarana Strategis (Pusbangkom ACP)',
  ministry: 'Kementerian Pekerjaan Umum'
};
