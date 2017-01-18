import {Question} from "../model/Question";
import {Input, OnInit} from "@angular/core";
/**
 * Created by yubar on 1/8/17.
 */

export abstract class QuestionComponent implements OnInit {
  @Input() mode:string = "VIEW";
  @Input() number: number = 1;
  @Input() question: Question = new Question();
  backup: Question = new Question();

  getQuestion(): Question { return this.question};
  getBackup(): Question { return this.backup};

  ngOnInit():void {
    if (this.mode == 'EDIT')
      this.getQuestion().copy(this.getBackup());
  }

  edit(): void {
    if (this.mode != 'EDIT') {
      this.getQuestion().copy(this.getBackup());
      this.mode = 'EDIT';
    }
  }

  cancel(): void {
    if (this.mode == 'EDIT') {
      this.getBackup().copy(this.getQuestion());
      this.mode = 'VIEW';
    }
  }
}
