import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';

import { PersonService } from './person.service';
import { CreatePersonDto, UpdatePersonDto } from './dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getHola() {
    return this.personService.findAll();
  }

  @Get(':id')
  getPersonId(@Param('id', ParseIntPipe) id: string) {
    return this.personService.findId(id);
  }

  @Post()
  createPerson(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Patch(':id')
  updatePerson(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.personService.update(id, updatePersonDto);
  }

  @Delete(':id')
  deletePerson(@Param('id', ParseUUIDPipe) id: string) {
    return this.personService.delete(id);
  }
}
