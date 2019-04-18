import {Component} from '@angular/core' ; 
import {Router,ActivatedRoute} from "@angular/router";

@Component ({
selector: "Feedback",
moduleId: module.id,
templateUrl: "./Feedback.html",
styleUrls:[],
})

export class FeedbackComponent{
    public constructor(private router: Router){

    }
    public onTapBack()
    {
        this.router.navigate(['UserProfile']); 
    }
}