/*eslint-disable */
import { HttpException, Injectable, Put } from '@nestjs/common';
import { CARS } from './car.mock';

@Injectable()
export class CarService {

    private cars=CARS;
    public async getCars(){
        return this.cars;
    }
    
    public async postCar(car){
        return this.cars.push({...car,ticketId:this.cars.length+1});
    }
    public async putCarById(id:string,propertyName:string,propertyValue:string):Promise<any>{
        const carId=id;
        return new Promise((resolve)=>{
        const index = this.cars.findIndex(car => car.id===carId );
        if(index===-1)
        {
            throw new HttpException('Not Found',404);
        }
        this.cars[index][propertyName]=propertyValue;
        return resolve(this.cars);
        });

    }
    public async getCarById(id:string):
    Promise<any>{
        const carId=id;
        return new Promise((resolve)=>{
            const car=this.cars.find((car)=>
            car.id===carId);
            if(!car)
            {
                throw new HttpException('Not Found',404);
            }
            return resolve(car);
        });

    }

    public async deleteCarById(id:string):
    Promise<any>{
        const carId=id;
        return new Promise((resolve)=>{
            const index = this.cars.findIndex(car => car.id===carId );
        if(index===-1)
        {
            throw new HttpException('Not Found',404);
        }
        this.cars.splice(index,1);
        return resolve(this.cars);

        });
    }

    
    public async putCar(id:string,car):Promise<any>{
        const carId=id;
        
        return new Promise((resolve)=>{
        const index = this.cars.findIndex(car => car.id===carId );
        if(index===-1)
        {
            throw new HttpException('Not Found',404);
        }
        const carTicketId=this.cars[index].ticketId;
        this.cars[index]=car;
        this.cars[index].ticketId=carTicketId;
        return resolve(this.cars[index]);
        });

    }


}
