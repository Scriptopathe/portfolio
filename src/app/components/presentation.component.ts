import { Component }                                from '@angular/core';
import { Http, Response }                           from '@angular/http';
import { Observable }                               from 'rxjs/Observable';
import { DataService }                              from '../services/data.service'
import { Entry, ContentType, ExperienceType,
         experienceType2Str  }                      from '../entries/common'
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'presentation',
    templateUrl: 'app/components/presentation.template.html'
})

export class PresentationComponent  {
    exp2str = experienceType2Str
    entries : Entry[]
    constructor(private data : DataService) {
        this.entries = data.library.entries.slice().sort((a, b) => {
            return (a.experienceType - b.experienceType) * 1000 + (a.year - b.year)
        })
    }

    getColor(entry : Entry) {
        return {
            0: "blue lighten-5",
            1: "orange lighten-5",
            2: "red lighten-5"
        }[entry.experienceType]
    }


}