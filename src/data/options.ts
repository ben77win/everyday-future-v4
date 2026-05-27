export interface PracticeOption {
  key: string;
  label: string;
  desc: string;
  calendlyUrl: string;
}

export const practiceOptions: PracticeOption[] = [
  {
    key: '1on1',
    label: '1:1 Coaching',
    desc: 'Dedicated practice to work on what matters for you with a coach',
    calendlyUrl: 'https://calendly.com/placeholder-60',
  },
  {
    key: 'orgs',
    label: 'Orgs & Teams',
    desc: 'Custom coaching and facilitation for organizations, teams, and co-founders',
    calendlyUrl: 'https://calendly.com/placeholder-60',
  },
  {
    key: 'group',
    label: 'Group Coaching',
    desc: 'Shared practice in community with structure, support, and a coach',
    calendlyUrl: 'https://calendly.com/placeholder-15',
  },
  {
    key: 'selflead',
    label: 'Self-led',
    desc: 'Practice on your own with structure and guidance',
    calendlyUrl: '',
  },
];

export const optionByKey = Object.fromEntries(
  practiceOptions.map((o) => [o.key, o])
) as Record<string, PracticeOption>;
