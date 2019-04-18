export class Group
{
      //will be type person
      groupMembers: string[];
      //will be type groupPreference
      groupPreferences: string[]; 
      constructor(public groupName: string, public groupID: number)
      {
        this.groupMembers = [] ;
        this.groupPreferences = []; 
      }  

      public addMembers(member: string)
      {
            this.groupMembers.push(member) ; 
      }

      public addPreferences(preference: string)
      {
            this.groupPreferences.push(preference);
      }

      public getPreferences()
      {
            return this.groupPreferences
      }
      public getGroupMembers()
      {
            return this.groupMembers ;
      }

      public deleteMembers()
      {

      }

      public deletePreferences()
      {
            
      }
}

