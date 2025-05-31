import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { utils, writeFile } from 'xlsx';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent {
  constructor(private httpClient: HttpClient) {}

  downloadConform = false;
  fileName = '';
  @Input() format!: string;
  @Input() data!: any;

  download(): void {
    if (!this.data || !Array.isArray(this.data) || this.data.length === 0) {
      console.error('No data available');
      return;
    }

    const headers = Object.keys(this.data[0]);
    const keys = headers.map(key => key.split(' ').join('_'));
    const fileName = this.fileName || 'download';

    switch (this.format) {
      case 'csv': {
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, [headers]);
        utils.sheet_add_json(ws, this.csvMaker(), { origin: -1 });
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, 'Sheet1');
        writeFile(wb, `${fileName.toLowerCase()}.csv`);
        break;
      }

      case 'json': {
        const json = typeof this.data === 'object'
          ? JSON.stringify(this.data, null, 4)
          : this.data;

        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.json`;
        a.click();

        URL.revokeObjectURL(url);
        break;
      }

      case 'sql': {
        if (!this.data || !Array.isArray(this.data) || this.data.length === 0) {
          console.error('No data available');
          return;
        }

        const originalKeys = Object.keys(this.data[0]);

        // Map original keys to SQL-safe column names
        const keyMap: Record<string, string> = {};
        originalKeys.forEach(k => {
          keyMap[k] = k.split(' ').join('_');
        });

        // Handle numeric table names
        let table = this.fileName || 'my_table';
        if (/^\d/.test(table)) {
          table = `t_${table}`;
        }

        // CREATE TABLE statement
        const columns = originalKeys.map(k => `\`${keyMap[k]}\` CHAR(255)`);
        const createTable = `CREATE TABLE \`${table}\` (\n  ${columns.join(',\n  ')}\n);\n\n`;

        // INSERT statements
        const insertRows = this.data.map((row: any) => {
          const values = originalKeys.map(k => {
            const value = row[k];
            if (value === null || value === undefined) return 'NULL';
            return `'${String(value).replace(/'/g, "\\'")}'`;
          });
          return `INSERT INTO \`${table}\` (${originalKeys.map(k => `\`${keyMap[k]}\``).join(', ')}) VALUES (${values.join(', ')});`;
        });

        const fullSQL = createTable + insertRows.join('\n');

        // Create and download .sql file
        const blob = new Blob([fullSQL], { type: 'text/sql' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.fileName || table}.sql`;
        a.click();
        URL.revokeObjectURL(url);
        break;
      }



    }
  }

  csvMaker() {
    const csvRows: any[] = [];
    this.data.forEach((item: any) => {
      csvRows.push(Object.values(item));
    });
    return csvRows;
  }
}
