import type { FieldConfig } from '../types/fields';
import type { RowLabel } from '../types/form';

interface FleeceTraitsSectionProps {
  rows: RowLabel[];
  columns: FieldConfig[];
}

export function FleeceTraitsSection({ rows, columns }: FleeceTraitsSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">Fleece Traits</h3>
      <div className="grid grid-cols-8 gap-2">
        {/* Similar structure to GeneralTraitsSection but without visibility checks */}
        {/* ...implementation similar to GeneralTraitsSection... */}
      </div>
    </div>
  );
}