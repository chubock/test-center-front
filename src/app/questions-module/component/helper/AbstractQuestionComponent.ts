import {Question} from "../../model/Question";
import {Input, OnInit, Output, EventEmitter} from "@angular/core";
import {QuestionService} from "../../service/QuestionService";
import {FileService} from "../../../shared-module/service/FileService";
import {AlertsService} from "../../../shared-module/service/AlertsService";
import {Alert} from "../../../shared-module/model/Alert";
import {apiEndPoint} from "../../../AppConfig";
/**
 * Created by yubar on 1/8/17.
 */

export abstract class AbstractQuestionComponent<T extends Question> implements OnInit {
  nested:boolean = false;
  @Input() mode:string = "VIEW";
  @Input() number: number = 1;
  @Input() question: T;
  @Output() onDelete: EventEmitter<T> = new EventEmitter();
  @Output() onCancel: EventEmitter<T> = new EventEmitter();
  @Output() onSave: EventEmitter<T> = new EventEmitter();
  @Output() onEdit: EventEmitter<T> = new EventEmitter();
  backup: T;
  protected questionService: QuestionService<T>;
  protected fileService: FileService;
  protected serverUrl:string = apiEndPoint;
  protected alertsService:AlertsService;

  getQuestion(): T { return this.question};
  getBackup(): T { return this.backup};

  ngOnInit():void {
    if (this.mode == 'EDIT')
      this.backup.copy(this.question);
  }

  edit(): void {
    if (this.mode != 'EDIT') {
      this.onEdit.emit(this.question);
      this.backup.copy(this.question);
      this.mode = 'EDIT';
    }
  }

  cancel(): void {
    if (this.mode == 'EDIT') {
      this.question.copy(this.backup);
      this.mode = 'VIEW';
      this.onCancel.emit();
    }
  }

  save(): void {
    this.questionService.save(this.question).then((question) => {
      this.backup = question;
      this.cancel();
      this.onSave.emit(question);
      this.alertsService.newAlert(new Alert("Question saved successfully."));
    });
  }

  remove(): void {
    if (confirm("Are you sure ? ")) {
      this.questionService.remove(this.question.id).then(() => {
        this.onDelete.emit(this.question);
        this.alertsService.newAlert(new Alert("Question removed successfully."));
      });
    }
  }

  uploadFile(event):void {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0)
      this.fileService.upload(fileList[0]).then(fileId => this.question.image = fileId);
  }
}
