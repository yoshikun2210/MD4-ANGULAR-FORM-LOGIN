import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';


@Component({
  selector: 'app-singer-avatar',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.scss']
})
export class SingerComponent implements OnInit {
  selectFile: File;
  fireInFireBase: AngularFireStorageReference;
  @Output()
  urlFromFireBase = new EventEmitter<string>();
  urlFile: string;
  checkUpload = false

  constructor(private afService: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  onChangeFile($event) {
    console.log('event--->', $event);
    this.selectFile = $event.target.files[0];
  }

  upLoad() {
    this.checkUpload =true
    this.fireInFireBase = this.afService.ref(this.selectFile.name);
    this.fireInFireBase.put(this.selectFile).then(data => {
      return data.ref.getDownloadURL();
      // tslint:disable-next-line:no-shadowed-variable
    }).then(url => {
      this.checkUpload = false
      console.log('url --->',url);
      this.urlFile = url;
      this.urlFromFireBase.emit(this.urlFile);
      return this.urlFile;
    }).catch(error => {
      // tslint:disable-next-line:no-unused-expression
      `Upload File Failed! ${error}`;
    });

  }
}
