export type ContactPreset = {
  iconBackground: string;
  letterIconText: string;
};

export type ContactVariants = 'regular' | 'recent';

export type ContactItemPresets = Record<ContactVariants, ContactPreset>;
