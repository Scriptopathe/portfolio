import { Component, Input, ViewChild, ElementRef, trigger,
         state, style, transition, animate } from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { DataService }      from '../services/data.service'
import { Modules, Module, UF }       from '../entries/competences'
import { Entry, ContentType, ExperienceType  }            from '../entries/common'
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'matrix',
    templateUrl: 'app/components/matrix.template.html'
})

export class MatrixComponent  {
    public contentType = ContentType
    public experienceType = ExperienceType
    public modules : Module[]
    public moduleRows : Module[][]
    constructor(private sanitizer : DomSanitizer, private dataService : DataService) {        
        this.modules = Modules.ALL
        this.moduleRows = this.getModuleRows(2)
    }

    getModuleRows(rowSize : number) : Module[][] {
        let rows = []
        for(let i = 0; i <= this.modules.length/rowSize; i++)
        {
            let start = i * rowSize
            let end = Math.min(this.modules.length, (i+1) * rowSize)
            console.log(start + " " + end)
            rows.push(this.modules.slice(start, end))
        }
        return rows
    }

    getCompetenceCounter(mod : Module, uf : number, comp : number) {
        if(!mod.modcounters) return 0
        return mod.modcounters[uf][comp]
    }

    isCompetenceEmpty(mod : Module, uf : number, comp : number) {
        return this.getCompetenceCounter(mod, uf, comp) == 0
    }

    getKeys(uf : UF) {
        return Object.keys(uf.competences)
    }

    sanitizeRessourceUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }

    sanitizeUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(url)
    }

    sanitizeStyle(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustStyle(url)
    }
}