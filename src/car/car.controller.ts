/*eslint-disable */
import { Controller, Get, Post,Body, Param, Put,Query, Delete } from '@nestjs/common';
import {CarService } from './car.service';
import {CarDto} from './car.dto';

@Controller('car')
export class CarController {

    constructor(private carService:CarService){}

    @Get()
    async getCars(){
        return this.carService.getCars();
    }

    @Post()
    public async postCar(@Body() car:CarDto){
        return this.carService.postCar(car);

    }

    @Get(':id')
    public async getCarById(@Param('id') id:string){

        return this.carService.getCarById(id);

    }

    // @Put(':id')
    // public async putCarById(@Param('id') id:string, @Query() query){
    //     const propertyName=query.property_name;
    //     const propertyValue=query.property_value;
    //     return this.carService.putCarById(id,propertyName,propertyValue);

    // }
    @Delete(':id')
    public async deleteCarById(@Param('id') id:string){
        return this.carService.deleteCarById(id);
    }

    @Put(':id')
    public async putCar(@Param('id') id:string,@Body() car:CarDto ){
        
        return this.carService.putCar(id,car);

    }
}
