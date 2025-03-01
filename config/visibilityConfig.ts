import { TraitStage, TraitField } from '../types/form';

export const visibilityConfig = {
  [TraitStage.Birth]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: false,
    [TraitField.EMD]: false,
    [TraitField.SC]: false,
    [TraitField.WEC]: false,
    [TraitField.Group]: false
  },
  [TraitStage.Weaning]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: true,
    [TraitField.EMD]: true,
    [TraitField.SC]: false,
    [TraitField.WEC]: true,
    [TraitField.Group]: true
  },
  [TraitStage.EPWeaning]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: true,
    [TraitField.EMD]: true,
    [TraitField.SC]: true,
    [TraitField.WEC]: true,
    [TraitField.Group]: true
  },
  [TraitStage.PWeaning]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: true,
    [TraitField.EMD]: true,
    [TraitField.SC]: true,
    [TraitField.WEC]: true,
    [TraitField.Group]: true
  },
  [TraitStage.Yearling]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: true,
    [TraitField.EMD]: true,
    [TraitField.SC]: true,
    [TraitField.WEC]: true,
    [TraitField.Group]: true
  },
  [TraitStage.Hogget]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: true,
    [TraitField.EMD]: true,
    [TraitField.SC]: true,
    [TraitField.WEC]: true,
    [TraitField.Group]: true
  },
  [TraitStage.Adult]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: true,
    [TraitField.EMD]: true,
    [TraitField.SC]: true,
    [TraitField.WEC]: true,
    [TraitField.Group]: true
  },
  [TraitStage.Adult2]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: false,
    [TraitField.EMD]: false,
    [TraitField.SC]: false,
    [TraitField.WEC]: false,
    [TraitField.Group]: false
  },
  [TraitStage.Adult3]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: false,
    [TraitField.EMD]: false,
    [TraitField.SC]: false,
    [TraitField.WEC]: false,
    [TraitField.Group]: false
  },
  [TraitStage.Adult4]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: false,
    [TraitField.EMD]: false,
    [TraitField.SC]: false,
    [TraitField.WEC]: false,
    [TraitField.Group]: false
  },
  [TraitStage.Adult5]: {
    [TraitField.Date]: true,
    [TraitField.Weight]: true,
    [TraitField.CFat]: false,
    [TraitField.EMD]: false,
    [TraitField.SC]: false,
    [TraitField.WEC]: false,
    [TraitField.Group]: false
  }
} as const;

export type VisibilityConfig = typeof visibilityConfig;