import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent
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