import { Component, Input, ViewChild, ElementRef, trigger,
         state, style, transition, animate } from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { DataService }      from '../services/data.service'
import { Entry, experienceType2Str }            from '../entries/common'
import * as $               from 'jquery'
import { Router, ActivatedRoute } from '@angular/router';

export interface Field {
    name : string
    entries : Entry[]    
}

export interface Filter {
    name : string
    displayName : string
}

export type FilterFunction = ((entry : Entry) => string[]);

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard.template.html',
    animations: [
        trigger('isActive', [
            transition(
                ':enter', [
                    style({
                        transform: 'translateX(100%)', 
                        opacity: 0,
                        height: '0px',
                        overflow: 'hidden',
                    }),
                    animate('400ms', style({
                        transform: 'translateX(0)',
                        overflow: 'hidden',
                        opacity: 1,
                        height: '*'
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({
                        transform: 'translateX(0)',
                        opacity: 1,
                        overflow: 'hidden',
                        height: '*'
                    }),
                    animate('400ms', style({
                        height: '0px',
                        overflow: 'hidden',
                        transform: 'translateX(100%)',
                        opacity: 0
                    }))
                ]
            )
        ])
    ]
})
export class DashboardComponent  {
    entryByField: { [id : string]: Entry[] }

    /** 
     * Function filtering entries : returns a 'category' string from an entry. 
     * It is used to classify entries.
     */
    filterFunction: FilterFunction;
    /**
     * Name of the filter.
     * This value is usefull to determine URL parameters.
     */
    filterName : string;
    /**
     * Current value of the filter string.
     * Represents the 'category' to be displayed.
     */
    filterValue: string = "all";
    filters : Filter[];

    constructor(private route : ActivatedRoute, private dataService : DataService) {
        this.filters = [
            { name: "module", displayName: "Module" },
            { name: "experienceType", displayName: "Experience Type" },
        ]

        this.filterName = "module"
        this.filterFunction = this.getFilterFunction("")
        this.filterValue = "all"
        this.computeCategories()
    }

    showSelector() {
        return this.filters.find((filter) => filter.name == this.filterName) != undefined
    }

    getFilterFunction(filterName : string) : FilterFunction {
        switch(filterName) {
            case "competence":
                return (entry : Entry) => { return entry.competences.map((cmpId) => cmpId.asString())}
            case "category":
                return (entry : Entry) => { return [entry.module.name] }
            case "experienceType":
                return (entry : Entry) => { return [experienceType2Str(entry.experienceType)] }
            default:
                return (entry : Entry) => { return [entry.module.name] }
        }
    }

    /**
     * Called on component initialization.
     * Used to subscribe to routes.
     */
    ngOnInit() {
        this.route
            .params
            .subscribe(params => {
                this.filterName = params['filter'] == undefined ? "module" : params['filter']
                this.filterValue = params['value'] == undefined ? "all" : params['value']
                this.filterFunction = this.getFilterFunction(this.filterName)
                this.computeCategories()
        });
    }

    /**
     * Computes the distinct categories based on the filter function.
     */
    computeCategories() {
        let categories : { [id : string]: Entry[] } = {}
        for(let entry of this.dataService.library.entries) {
            let filterValues = this.filterFunction(entry)
            for(let filterValue of filterValues) {
                if(!(filterValue in categories))
                    categories[filterValue] = []
                
                categories[filterValue].push(entry)
            }
        }

        this.entryByField = categories
    }

    /**
     * Returns true if the given entry is active in the current context.
     */
    isActive(entry : Entry) : boolean {
        if(this.filterValue == "all")
            return true
        else {
            return this.filterFunction(entry).indexOf(this.filterValue) != -1
        }
    }

    /**
     * Gets the list of active entries.
     */
    get activeEntries() : Entry[] {
        if(this.filterValue == "all") {
            return this.dataService.library.entries
        } else {
            var othis = this
            return this.dataService.library.entries.filter((entry) => {
                return othis.isActive(entry)
            })
        }
    }
    
    /**
     * Gets the complete list of portfolio entries.
     */
    get entries() : Entry[] {
        return this.dataService.library.entries
    }

    /**
     * Gets the list of category names based on the current filter.
     */
    get categories() : string[] {
        let cats = []
        for(let category in this.entryByField) {
            cats.push(category)
        }
        return cats
    }
}