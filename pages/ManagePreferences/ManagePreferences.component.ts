import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { EventData } from 'tns-core-modules/ui/page/page';
import { Page } from "tns-core-modules/ui/page";
import { Group } from "../../shared/group/group";
import { Person } from '~/shared/person/person';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { personalPref } from '~/shared/personalPref/personalPref';

@Component({
    selector: "ManagePreferencesComponent",
    moduleId: module.id,
    templateUrl: "./ManagePreferences.html",
    //styleUrls:[""],
    /*template: `
    `*/
})

export class ManagePreferencesComponent implements OnInit {
    groups: Group[];
    person: Person;
    preferencesDisplay: string[];

    ngOnInit() {
        this.loadPersonalPref();
    }

    public constructor(private router: Router, private page: Page) {

        this.preferencesDisplay = [];
        this.person = new Person('Test', 'User');

    }

    public onTapBack() {
        this.router.navigate(['UserProfile']);
    }

    public loadPersonalPref() {
        let prefs = ['Seafood', 'Italian', 'Mexican'];
        this.person.addPreference(prefs);

        for (let i in this.person.getPreferences()) {
            this.preferencesDisplay[i] = this.person.getPreferences()[i].name;
        }
    }

    public addPref() {

        dialogs.prompt({
            title: "Add a Preference",
            message: "Enter the Preference",
            okButtonText: "Add",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral text",
            // defaultText: "Default text",
            inputType: dialogs.inputType.text
        }).then(r => {

            if (r.text != " ") {
                console.log("Dialog result: " + r.result + ", text: " + r.text);
                //this.newGroup.addMembers(r.text) ; 
                let temp = [r.text];
                this.person.addPreference(temp);
                for (let i in this.person.getPreferences()) {
                    this.preferencesDisplay[i] = this.person.getPreferences()[i].name;
                }

            }
            else {
                alert("Members Name is required");
            }
        });
    }


    public onTapAdd() {
        this.addPref();
    }
    public onTapTest() {
        this.testImportance(this.person);
    }

    public testImportance(per: Person) {

        
        var sorted: personalPref[];


        for (let i = 0; i < per.getPreferences().length; i++) {
            var c = Math.floor(Math.random() * 10);
            per.changePrefImportance(per.getPreferences()[i], c);
          //  console.log(per.getPreferences()[i].name + " " + per.getPreferences()[i].howImportant);
        }
        sorted = per.getPreferences();

            /*sorted.sort((n1, n2) => {
            if (n1.howImportant > n2.howImportant) {
                return 1;
            }
            return 0;
        });*/
        console.log("Unsorted") ; 
        console.log(per.getPreferences());

        console.log("Sorted"); 
        console.log(sorted); 

    }

}