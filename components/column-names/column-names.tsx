import React from 'react';
import styles from '@/components/column-names/column-names.module.scss';

type ColumnNamesProps = {
  columnNames: string[];
};

const ColumnNames = ({ columnNames }: ColumnNamesProps) => {
  return (
    <div className={styles.columnNames}>
      {columnNames.map((columnName, index) => (
        <div className={styles.userColumn} key={index}>
          {columnName}
        </div>
      ))}
    </div>
  );
};

export default ColumnNames;
