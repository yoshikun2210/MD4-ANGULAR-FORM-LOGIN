import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

@ Component({
  selector: 'app-multiple-avatar',
  templateUrl: './mutiple-avatar.component.html',
  styleUrls: ['./mutiple-avatar.component.scss']
})
export class MutipleAvatarComponent implements OnInit {
  selectFile: File[];
  arrFileInFireBase: AngularFireStorageReference;
  arrUrlFormFireBase = [];
  checkUploadMultiple = false;
  @Output()
  arrUrl = new EventEmitter<string[]>();

  constructor(private afService: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  upLoadMultipleFile($event) {
    console.log('$event ---> ', $event);
    this.selectFile = $event.target.files;
  }

  upLoad(){
    this.checkUploadMultiple = true;
    for (let i = 0; i < this.selectFile.length; i++) {
      this.arrFileInFireBase = this.afService.ref(this.selectFile[i].name);
      this.arrFileInFireBase.put(this.selectFile[i]).then(data =>{
        return data.ref.getDownloadURL();
      }).then(url=>{
        console.log('URL --->', url);
        this.checkUploadMultiple = false;
        this.arrUrlFormFireBase.push(url);
        this.arrUrl.emit(this.arrUrlFormFireBase);
      }).catch(error =>{
        console.log(`Upload Failed! ${error}`);
      })
    }
    console.log('============================>', this.arrUrlFormFireBase);
  }
}
