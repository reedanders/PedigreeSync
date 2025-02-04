export type BaseFieldType = {
  label: string;
  type: 'date' | 'number' | 'select';
  required?: boolean;
};

export type DateField = BaseFieldType & {
  type: 'date';
  defaultValue?: string;
};

export type NumberField = BaseFieldType & {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
};

export type SelectField = BaseFieldType & {
  type: 'select';
  options: string[];
  defaultValue?: string;
};

export type FieldConfig = DateField | NumberField | SelectField;