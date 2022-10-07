import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-button',
  templateUrl: './setting-button.component.html',
  styleUrls: ['./setting-button.component.scss'],
})
export class SettingButtonComponent implements OnInit {
  constructor() {}

  settingPath = '../../../assets/images/search-settings.png';

  ngOnInit(): void {}
}
