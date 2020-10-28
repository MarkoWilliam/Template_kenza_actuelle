import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent
{
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        //private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
       // this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }
}