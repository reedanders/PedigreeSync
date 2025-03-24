import React from 'react';

type TableSkeletonProps = {
  columns: {
    header: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
  }[];
  rowCount?: number;
};

const TableSkeleton: React.FC<TableSkeletonProps> = ({ 
  columns, 
  rowCount = 5 
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            {columns.map((column, index) => (
              <th 
                key={index} 
                className={`px-4 py-3 text-${column.align || 'left'} text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {[...Array(rowCount)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => {
                // Determine if the current column is for a status badge
                const isStatusColumn = column.header.toLowerCase() === 'status';
                // Default width based on column position
                const defaultWidth = `w-${12 + (colIndex % 3) * 4}`;
                // Apply width from props or use default
                const width = column.width || defaultWidth;
                // Apply special styling for status badges
                const shape = isStatusColumn ? 'rounded-full' : 'rounded';
                // Apply alignment
                const align = column.align === 'right' ? 'ml-auto' : '';
                
                return (
                  <td 
                    key={colIndex} 
                    className={`px-4 py-3 whitespace-nowrap ${column.align === 'right' ? 'text-right' : ''}`}
                  >
                    <div 
                      className={`h-${isStatusColumn ? '5' : '4'} bg-gray-200 dark:bg-gray-700 ${shape} ${width} ${align} animate-pulse`}
                    ></div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;