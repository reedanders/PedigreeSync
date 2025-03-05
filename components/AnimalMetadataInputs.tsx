'use client';

import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';
import type { FormDataType, AnimalMetadata } from '@/lib/types/form';
import { formatDateForInput } from '@/utils/date';

export function AnimalMetadataInputs() {
    const context = useContext(FormContext);
    
    if (!context) {
        throw new Error('AnimalMetadataInputs must be used within a FormProvider');
    }
    
    const { formData, setFormData } = context;

    const updateField = (field: keyof AnimalMetadata, value: string | number | boolean) => {
        setFormData((prev: FormDataType) => ({
            ...prev,
            animalMetadata: {
                ...prev.animalMetadata,
                [field]: value
            }
        }));
    };

    return (
        <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* AutoBuild Text */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-base-content">
                        Edit AutoBuild Text
                    </label>
                    <input
                        type="text"
                        value={formData.animalMetadata.autoBuildText}
                        onChange={(e) => updateField('autoBuildText', e.target.value)}
                        className="input input-bordered input-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
                    />
                </div>

                {/* Edit Date 1 */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-base-content">
                        Edit Date 1
                    </label>
                    <input
                        type="date"
                        value={formatDateForInput(formData.animalMetadata.editDate1)}
                        onChange={(e) => updateField('editDate1', e.target.value)}
                        readOnly
                        className="input input-bordered input-sm w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-base-content cursor-not-allowed"
                    />
                </div>

                {/* Edit Date 2 */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-base-content">
                        Edit Date 2
                    </label>
                    <input
                        type="date"
                        value={formatDateForInput(formData.animalMetadata.editDate2)}
                        onChange={(e) => updateField('editDate2', e.target.value)}
                        readOnly
                        className="input input-bordered input-sm w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-base-content cursor-not-allowed"
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Limit Inputs */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-base-content">
                        Limit Data Inputs
                    </label>
                    <select
                        value={formData.animalMetadata.limitInputs}
                        onChange={(e) => updateField('limitInputs', e.target.value as AnimalMetadata['limitInputs'])}
                        className="select select-bordered select-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
                    >
                        <option value="None">None</option>
                        <option value="Age">By Age</option>
                        <option value="Stage">By Stage</option>
                    </select>
                </div>

                {/* Scanner Number */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-base-content">
                        Carcass Scanner No
                    </label>
                    <input
                        type="text"
                        value={formData.animalMetadata.carcassScannerNo}
                        onChange={(e) => updateField('carcassScannerNo', e.target.value)}
                        className="input input-bordered input-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
                    />
                </div>

                {/* Show Wool/Fleece Toggle */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-900 dark:text-base-content">
                        Show Wool/Fleece Data
                    </label>
                    <input
                        type="checkbox"
                        checked={formData.animalMetadata.showWoolFleece}
                        onChange={(e) => updateField('showWoolFleece', e.target.checked)}
                        className="toggle toggle-primary"
                    />
                </div>
            </div>
        </div>
    );
}
