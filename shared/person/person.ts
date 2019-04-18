import {personalPref} from '../personalPref/personalPref'
import {Group} from '../group/group';
import { Restaurant } from '../restaurant/restaurant';
export class Person
{
  firstName: string;
  lastName;
  prefs: personalPref[] ; 
  groups: Group[];
  restaurants: Restaurant[];

  constructor(public first: string, public last:string)
  {
   this.firstName = first ;
   this.lastName = last ; 
   this.prefs = [] ;
   this.groups = []; 
   this.restaurants = [];
  }

   setFirstName(name: string)
  {
    this.firstName = name;
  }

  public setLastName(lname: string)
  {
    this.lastName = lname;
  }

  public addPreference(list: string[])
  {
    
    for (let i in list)
    {
      let newPref = new personalPref(list[i]);
      this.prefs.push(newPref); 
    }
    //check that preference does not already exist
  }

  public getPreferences()
  {
    return this.prefs; 
  }

  public removePref(list:personalPref[], name: string)
  {
   for( let i = 0;i > list.length;i++)
   {
          if(list[i].name == name)
          {
            list.splice(i,1); 
          }
   }
  }

  ///group functions

  public addGroups(list: string[])
  {
    for (let i in list)
    {
      let newGroup = new Group(list[i],79);
      this.groups.push(newGroup); 
    }
  }
  public addSingleGroup(newlyAdded: string)
  {
    let newGroup = new Group(newlyAdded, 58)
    this.groups.push(newGroup); 
  }

  public getGroups()
  {
    return this.groups;
  }
  public changePrefImportance(pref: personalPref, newImportance: number)
  {
    pref.howImportant = newImportance; 
  }

  ///Restaurant function

  public addRestaurant(list: string[])
  {
    for(let i in list)
    {
      let newRestaurant = new Restaurant(list[i], 225);
      this.restaurants.push(newRestaurant);
    }
  }

  public addSingleRestaurant(newlyRestaurant: string)
  {
    let newRestaurant = new Restaurant(newlyRestaurant, 500)
    this.restaurants.push(newRestaurant); 
  }

  public getRestaurant()
  {
    return this.restaurants;
  }
}