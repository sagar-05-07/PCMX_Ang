import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-single-file-upload',
  templateUrl: './single-file-upload.component.html',
  styleUrl: './single-file-upload.component.scss'
})
export class SingleFileUploadComponent {

  constructor(
    public dialogRef: MatDialogRef<SingleFileUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public campaign: any
  ) { }

  authFiles: File[] = [];
  affidavitFiles: File[] = [];
  showModal = true;

  closeModal() {
    this.showModal = false;
    this.authFiles = []; // Clear selected files for auth
    this.affidavitFiles = []; // Clear selected files for affidavit
  }

  close() {
    this.dialogRef.close();
  }

  onFileSelected(event: any, type: string) {
    const fileList: FileList = event.target.files;
    for (let i = 0; i < fileList.length; i++) {
      if (type === 'auth') {
        this.authFiles.push(fileList[i]);
      } else if (type === 'affidavit') {
        this.affidavitFiles.push(fileList[i]);
      }
    }
  }

  onDrop(event: DragEvent, type: string) {
    event.preventDefault();
    const fileList: FileList | null = event.dataTransfer?.files || null;
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        if (type === 'auth') {
          this.authFiles.push(fileList[i]);
        } else if (type === 'affidavit') {
          this.affidavitFiles.push(fileList[i]);
        }
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
  }

  uploadFiles() {
    const allFiles = [...this.authFiles, ...this.affidavitFiles];
    for (let file of allFiles) {
      const url = window.URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.name;
      link.click();
      window.URL.revokeObjectURL(url); // Clean up the URL
    }
    this.closeModal();
  }


  removeFiles(type: string) {
    if (type === 'auth') {
      this.authFiles = [];
    } else if (type === 'affidavit') {
      this.affidavitFiles = [];
    }
  }
}
