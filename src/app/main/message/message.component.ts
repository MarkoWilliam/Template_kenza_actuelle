import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent
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
    public affichermessage(){
      //$("#body_message").html();      
    }
}
