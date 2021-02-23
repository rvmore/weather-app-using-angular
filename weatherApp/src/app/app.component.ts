import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from './shared/services/common.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
  showWebpages: boolean = false;

  constructor(
    private commonService: CommonService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.showWebpages = true;
    }, 4000);
  }
}
