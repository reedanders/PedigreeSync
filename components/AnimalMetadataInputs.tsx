'use client';

import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';
import type { FormDataType, AnimalMetadata } from '@/types/form';

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-blue-900 text-white rounded-lg">
            {/* AutoBuild Text */}
            <div>
                <label className="block text-sm font-medium">Edit AutoBuild Text</label>
                <input
                    type="text"
                    value={formData.animalMetadata.autoBuildText}
                    onChange={(e) => updateField('autoBuildText', e.target.value)}
                    className="input input-bordered input-sm w-full text-black"
                />
            </div>
            
            {/* Edit Dates */}
            <div>
                <label className="block text-sm font-medium">Edit Date 1</label>
                <input
                    type="date"
                    value={formData.animalMetadata.editDate1}
                    onChange={(e) => updateField('editDate1', e.target.value)}
                    className="input input-bordered input-sm w-full text-black"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Edit Date 2</label>
                <input
                    type="date"
                    value={formData.animalMetadata.editDate2}
                    onChange={(e) => updateField('editDate2', e.target.value)}
                    className="input input-bordered input-sm w-full text-black"
                />
            </div>

            {/* Data Input Limitation */}
            <div>
                <label className="block text-sm font-medium">Limit Data Inputs</label>
                <select
                    value={formData.animalMetadata.limitInputs}
                    onChange={(e) => updateField('limitInputs', e.target.value as AnimalMetadata['limitInputs'])}
                    className="select select-bordered select-sm w-full text-black"
                >
                    <option value="None">None</option>
                    <option value="Age">By Age</option>
                    <option value="Stage">By Stage</option>
                </select>
            </div>
            
            {/* Carcass Scanner Number */}
            <div>
                <label className="block text-sm font-medium">Carcass Scanner No</label>
                <input
                    type="text"
                    value={formData.animalMetadata.carcassScannerNo}
                    onChange={(e) => updateField('carcassScannerNo', e.target.value)}
                    className="input input-bordered input-sm w-full text-black"
                />
            </div>
            
            {/* Wool and Fleece Data Toggle */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={formData.animalMetadata.showWoolFleece}
                    onChange={(e) => updateField('showWoolFleece', e.target.checked)}
                    className="checkbox checkbox-sm"
                />
                <label className="text-sm">Show Wool and Fleece Data Entry Fields</label>
            </div>

            {/* Function Key Assignments */}
            <div>
                <label className="block text-sm font-medium">Function Key Assignments</label>
                <input
                    type="text"
                    value={formData.animalMetadata.functionKey}
                    onChange={(e) => updateField('functionKey', e.target.value)}
                    className="input input-bordered input-sm w-full text-black"
                />
            </div>
        </div>
    );
}
