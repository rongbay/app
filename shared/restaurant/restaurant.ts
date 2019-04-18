export class Restaurant
{

    
    restaurantPhone : string[];
    restaurantAddress : string[];
    restaurantHours : string[];
    restaurantInfo : string[];
    restaurantTag : string[];
      
      constructor(public restaurantName: string, public groupID: number)
      {
        this.restaurantPhone = [];
        this.restaurantAddress = [];
        this.restaurantHours = [];
        this.restaurantInfo = [];
        this.restaurantTag = [];
      }  

      public addAddress(address: string)
      {
            this.restaurantAddress.push(address) ; 
      }

      public addPhone(phone: string)
      {
            this.restaurantPhone.push(phone);
      }

      public addHour(hour: string)
      {
            this.restaurantHours.push(hour);
      }

      public addInfo(info: string)
      {
            this.restaurantInfo.push(info);
      }
      public addTag(info: string)
      {
            this.restaurantTag.push(info);
      }


      public getAddress()
      {
            return this.restaurantAddress;
      }
      public getPhone()
      {
            return this.restaurantPhone;
      }

      public getHour()
      {
            return this.restaurantHours;
      }

      public getInfo()
      {
            return this.restaurantInfo;
      }
      public getTag()
      {
            return this.restaurantTag;
      }

      public deleteAddress()
      {

      }

      public deletePhone()
      {
            
      }

      public deleteHour()
      {
            
      }
      public deleteInfo()
      {
            
      }
      public deleteTag()
      {
            
      }
}