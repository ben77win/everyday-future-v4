/**
 * Practice options — single source of truth.
 *
 * Used by:
 *   - Services.astro      (homepage option rows)
 *   - BeginFlow.astro     (Step 1 cards, Step 2 offering detail, JS labels + Calendly URLs)
 *   - Any landing page CTA linking to /begin?option=<key>
 *
 * To add or change an option: edit this file only.
 * Keys are used in URLs (/begin?option=<key>) — do not change them without updating
 * Netlify redirects and any marketing links that reference them.
 *
 * Calendly URLs: real discovery-session links wired 2026-06-11 (1:1, orgs, group).
 * Self-led has no Calendly by design (waitlist confirmation instead).
 */

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
    calendlyUrl: 'https://calendly.com/coach-everydayfuture/1-1-discovery-session',
  },
  {
    key: 'orgs',
    label: 'Orgs & Teams',
    desc: 'Workshops, offsites, and team programs designed and facilitated by a coach',
    calendlyUrl: 'https://calendly.com/coach-everydayfuture/orgs-teams-discovery',
  },
  {
    key: 'group',
    label: 'Group',
    desc: 'Shared practice in community with structure, support, and a coach',
    calendlyUrl: 'https://calendly.com/coach-everydayfuture/group-coaching-discovery',
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
